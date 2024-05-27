// Backwards compatibility, everything should be imported from top-level in v2.
export { superForm } from './superForm.js';
export { intProxy, numberProxy, booleanProxy, dateProxy, fieldProxy, formFieldProxy, stringProxy, arrayProxy, fileProxy, fileFieldProxy, filesProxy, filesFieldProxy } from './proxies.js';
/////////////////////////////////////////////////////////////////////
// Duplicated from server/index.ts,
// because "server" path cannot be imported on client.
export { defaults, defaultValues } from '../defaults.js';
export { actionResult } from '../actionResult.js';
export { schemaShape } from '../jsonSchema/schemaShape.js';
export { superValidate, message, setMessage, setError, withFiles, removeFiles, fail } from '../superValidate.js';
// Exporting from stringPath also, for convenience in components.
export {} from '../stringPath.js';
