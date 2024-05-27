import { handle } from './handlers.js';
import { encode } from '@jridgewell/sourcemap-codec';

/** @type {(str: string) => string} str */
let btoa = () => {
	throw new Error('Unsupported environment: `window.btoa` or `Buffer` should be supported.');
};

if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
	btoa = (str) => window.btoa(unescape(encodeURIComponent(str)));
	// @ts-expect-error
} else if (typeof Buffer === 'function') {
	// @ts-expect-error
	btoa = (str) => Buffer.from(str, 'utf-8').toString('base64');
}

/**
 * @typedef {{
 *   sourceMapSource?: string;
 *   sourceMapContent?: string;
 *   sourceMapEncodeMappings?: boolean; // default true
 * }} PrintOptions
 */

/**
 * @param {import('estree').Node} node
 * @param {PrintOptions} opts
 * @returns {{ code: string, map: any }} // TODO
 */
export function print(node, opts = {}) {
	if (Array.isArray(node)) {
		return print(
			{
				type: 'Program',
				body: node,
				sourceType: 'module'
			},
			opts
		);
	}

	/** @type {import('./types').State} */
	const state = {
		commands: [],
		comments: [],
		multiline: false
	};

	handle(node, state);

	/** @typedef {[number, number, number, number]} Segment */

	let code = '';
	let current_column = 0;

	/** @type {Segment[][]} */
	let mappings = [];

	/** @type {Segment[]} */
	let current_line = [];

	/** @param {string} str */
	function append(str) {
		code += str;

		for (let i = 0; i < str.length; i += 1) {
			if (str[i] === '\n') {
				mappings.push(current_line);
				current_line = [];
				current_column = 0;
			} else {
				current_column += 1;
			}
		}
	}

	let newline = '\n';

	/** @param {import('./types').Command} command */
	function run(command) {
		if (typeof command === 'string') {
			append(command);
			return;
		}

		switch (command.type) {
			case 'Chunk':
				const loc = command.loc;

				if (loc) {
					current_line.push([
						current_column,
						0, // source index is always zero
						loc.start.line - 1,
						loc.start.column
					]);
				}

				append(command.content);

				if (loc) {
					current_line.push([
						current_column,
						0, // source index is always zero
						loc.end.line - 1,
						loc.end.column
					]);
				}

				break;

			case 'Newline':
				append(newline);
				break;

			case 'Indent':
				newline += '\t';
				break;

			case 'Dedent':
				newline = newline.slice(0, -1);
				break;

			case 'Sequence':
				for (let i = 0; i < command.children.length; i += 1) {
					run(command.children[i]);
				}

				break;

			case 'Comment':
				if (command.comment.type === 'Line') {
					append(`//${command.comment.value}`);
				} else {
					append(`/*${command.comment.value.replace(/\n/g, newline)}*/`);
				}

				break;
		}
	}

	for (let i = 0; i < state.commands.length; i += 1) {
		run(state.commands[i]);
	}

	mappings.push(current_line);

	const map = {
		version: 3,
		/** @type {string[]} */
		names: [],
		sources: [opts.sourceMapSource || null],
		sourcesContent: [opts.sourceMapContent || null],
		mappings:
			opts.sourceMapEncodeMappings == undefined || opts.sourceMapEncodeMappings
				? encode(mappings)
				: mappings
	};

	Object.defineProperties(map, {
		toString: {
			enumerable: false,
			value: function toString() {
				return JSON.stringify(this);
			}
		},
		toUrl: {
			enumerable: false,
			value: function toUrl() {
				return 'data:application/json;charset=utf-8;base64,' + btoa(this.toString());
			}
		}
	});

	return {
		code,
		map
	};
}
