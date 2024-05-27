import { AnySchema } from "yup";
import { JSONSchema7 } from "json-schema";
import { ResolveOptions } from "../types";
export declare function convertSchema(yupSchema: AnySchema, options?: ResolveOptions): JSONSchema7;
