declare module 'esrap' {
	/**
	 * @returns // TODO
	 */
	export function print(node: import('estree').Node, opts?: PrintOptions): {
		code: string;
		map: any;
	};
	export type PrintOptions = {
		sourceMapSource?: string;
		sourceMapContent?: string;
		sourceMapEncodeMappings?: boolean;
	};
}

//# sourceMappingURL=index.d.ts.map