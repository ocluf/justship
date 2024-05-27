import { ErrorReporterContract } from '@vinejs/compiler/types';
import type { FieldContext, MessagesProviderContact } from '../src/types.js';
/**
 * Exposes API to create a dummy field context
 */
export declare class FieldFactory {
    create(fieldName: string, value: any, messagesProvider?: MessagesProviderContact, errorReporter?: ErrorReporterContract): {
        value: any;
        isArrayMember: false;
        parent: any;
        data: {
            [x: string]: any;
        };
        name: any;
        wildCardPath: string;
        isDefined: boolean;
        isValid: true;
        meta: {};
        mutate(newValue: any): FieldContext;
        report(message: string, rule: string, context: FieldContext, args: Record<string, any> | undefined): void;
    };
}
