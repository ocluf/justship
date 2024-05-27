import type { FieldContext, ValidationFields, ValidationMessages, MessagesProviderContact } from '../types.js';
/**
 * Default messages provider performs messages lookup inside
 * a collection of key-value pair.
 */
export declare class SimpleMessagesProvider implements MessagesProviderContact {
    #private;
    constructor(messages: ValidationMessages, fields?: ValidationFields);
    /**
     * Returns a validation message for a given field + rule.
     */
    getMessage(rawMessage: string, rule: string, field: FieldContext, args?: Record<string, any>): string;
    toJSON(): {
        messages: ValidationMessages;
        fields: ValidationFields;
    };
}
