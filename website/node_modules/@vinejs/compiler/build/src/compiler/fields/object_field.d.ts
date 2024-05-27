import type { CompilerField, FieldNode, CompilerParent } from '../../types.js';
export declare function createObjectField(node: Pick<FieldNode, 'fieldName' | 'propertyName'>, variablesCounter: number, parent: CompilerParent): CompilerField;
