import { Comment, Node } from 'estree';

type NodeOf<T extends string, X> = X extends { type: T } ? X : never;

type Handler<T> = (node: T, state: State) => undefined;

export type Handlers = {
	[K in Node['type']]: Handler<NodeOf<K, Node>>;
};

export interface State {
	commands: Command[];
	comments: Comment[];
	multiline: boolean;
}

export interface Chunk {
	type: 'Chunk';
	content: string;
	loc: null | {
		start: { line: number; column: number };
		end: { line: number; column: number };
	};
}

export interface Newline {
	type: 'Newline';
}

export interface Indent {
	type: 'Indent';
}

export interface Dedent {
	type: 'Dedent';
}

export interface IndentChange {
	type: 'IndentChange';
	offset: number;
}

export interface Sequence {
	type: 'Sequence';
	children: Command[];
}

export interface CommentChunk {
	type: 'Comment';
	comment: Comment;
}

export type Command = string | Chunk | Newline | Indent | Dedent | Sequence | CommentChunk;
