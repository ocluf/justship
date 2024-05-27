import {
  __export
} from "./chunk-CSAU5B4Q.js";

// src/messages_provider/simple_messages_provider.ts
var SimpleMessagesProvider = class {
  #messages;
  #fields;
  constructor(messages, fields) {
    this.#messages = messages;
    this.#fields = fields || {};
  }
  /**
   * Interpolates place holders within error messages
   */
  #interpolate(message, data) {
    if (!message.includes("{{")) {
      return message;
    }
    return message.replace(/(\\)?{{(.*?)}}/g, (_, __, key) => {
      const tokens = key.trim().split(".");
      let output = data;
      while (tokens.length) {
        if (output === null || typeof output !== "object") {
          return;
        }
        const token = tokens.shift();
        output = Object.hasOwn(output, token) ? output[token] : void 0;
      }
      return output;
    });
  }
  /**
   * Returns a validation message for a given field + rule.
   */
  getMessage(rawMessage, rule, field, args) {
    const fieldName = this.#fields[field.name] || field.name;
    const fieldMessage = this.#messages[`${field.wildCardPath}.${rule}`];
    if (fieldMessage) {
      return this.#interpolate(fieldMessage, {
        field: fieldName,
        ...args
      });
    }
    const ruleMessage = this.#messages[rule];
    if (ruleMessage) {
      return this.#interpolate(ruleMessage, {
        field: fieldName,
        ...args
      });
    }
    return this.#interpolate(rawMessage, {
      field: fieldName,
      ...args
    });
  }
  toJSON() {
    return {
      messages: this.#messages,
      fields: this.#fields
    };
  }
};

// src/errors/main.ts
var main_exports = {};
__export(main_exports, {
  E_VALIDATION_ERROR: () => E_VALIDATION_ERROR
});

// src/errors/validation_error.ts
var ValidationError = class extends Error {
  constructor(messages, options) {
    super("Validation failure", options);
    this.messages = messages;
    const ErrorConstructor = this.constructor;
    Error.captureStackTrace(this, ErrorConstructor);
  }
  /**
   * Http status code for the validation error
   */
  status = 422;
  /**
   * Internal code for handling the validation error
   * exception
   */
  code = "E_VALIDATION_ERROR";
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return `${this.name} [${this.code}]: ${this.message}`;
  }
};

// src/errors/main.ts
var E_VALIDATION_ERROR = ValidationError;

// src/reporters/simple_error_reporter.ts
var SimpleErrorReporter = class {
  /**
   * Boolean to know one or more errors have been reported
   */
  hasErrors = false;
  /**
   * Collection of errors
   */
  errors = [];
  /**
   * Report an error.
   */
  report(message, rule, field, meta) {
    const error = {
      message,
      rule,
      field: field.wildCardPath
    };
    if (meta) {
      error.meta = meta;
    }
    if (field.isArrayMember) {
      error.index = field.name;
    }
    this.hasErrors = true;
    this.errors.push(error);
  }
  /**
   * Returns an instance of the validation error
   */
  createError() {
    return new E_VALIDATION_ERROR(this.errors);
  }
};

// src/vine/helpers.ts
import delve from "dlv";
import isIP from "validator/lib/isIP.js";
import isJWT from "validator/lib/isJWT.js";
import isURL from "validator/lib/isURL.js";
import isSlug from "validator/lib/isSlug.js";
import isIBAN from "validator/lib/isIBAN.js";
import isUUID from "validator/lib/isUUID.js";
import isAscii from "validator/lib/isAscii.js";
import isEmail from "validator/lib/isEmail.js";
import isAlpha from "validator/lib/isAlpha.js";
import isLatLong from "validator/lib/isLatLong.js";
import isDecimal from "validator/lib/isDecimal.js";
import isHexColor from "validator/lib/isHexColor.js";
import isCreditCard from "validator/lib/isCreditCard.js";
import isAlphanumeric from "validator/lib/isAlphanumeric.js";
import isPassportNumber from "validator/lib/isPassportNumber.js";
import isPostalCode from "validator/lib/isPostalCode.js";
import isMobilePhone from "validator/lib/isMobilePhone.js";
import { locales as mobilePhoneLocales } from "validator/lib/isMobilePhone.js";
import { locales as postalCodeLocales } from "validator/lib/isPostalCode.js";
var BOOLEAN_POSITIVES = ["1", 1, "true", true, "on"];
var BOOLEAN_NEGATIVES = ["0", 0, "false", false];
var helpers = {
  /**
   * Returns true when value is not null and neither
   * undefined
   */
  exists(value) {
    return value !== null && value !== void 0;
  },
  /**
   * Returns true when value is null or value is undefined
   */
  isMissing(value) {
    return !this.exists(value);
  },
  /**
   * Returns true when the value is one of the following.
   *
   * true
   * 1
   * "1"
   * "true"
   * "on"
   */
  isTrue(value) {
    return BOOLEAN_POSITIVES.includes(value);
  },
  /**
   * Returns true when the value is one of the following.
   *
   * false
   * 0
   * "0"
   * "false"
   */
  isFalse(value) {
    return BOOLEAN_NEGATIVES.includes(value);
  },
  /**
   * Check if the value is a valid string. This method narrows
   * the type of value to string.
   */
  isString(value) {
    return typeof value === "string";
  },
  /**
   * Check if the value is a plain JavaScript object. This method
   * filters out null and Arrays and does not consider them as Objects.
   */
  isObject(value) {
    return !!(value && typeof value === "object" && !Array.isArray(value));
  },
  /**
   * Check if an object has all the mentioned keys
   */
  hasKeys(value, keys) {
    for (let key of keys) {
      if (key in value === false) {
        return false;
      }
    }
    return true;
  },
  /**
   * Check if the value is an Array.
   */
  isArray(value) {
    return Array.isArray(value);
  },
  /**
   * Check if the value is a number or a string representation of a number.
   */
  isNumeric(value) {
    return !Number.isNaN(Number(value));
  },
  /**
   * Casts the value to a number using the Number method.
   * Returns NaN when unable to cast.
   */
  asNumber(value) {
    return value === null ? Number.NaN : Number(value);
  },
  /**
   * Casts the value to a boolean.
   *
   * - [true, 1, "1", "true", "on"] will be converted to true.
   * - [false, 0, "0", "false"] will be converted to false.
   * - Everything else will return null. So make sure to handle that case.
   */
  asBoolean(value) {
    if (this.isTrue(value)) {
      return true;
    }
    if (this.isFalse(value)) {
      return false;
    }
    return null;
  },
  isEmail: isEmail.default,
  isURL: isURL.default,
  isAlpha: isAlpha.default,
  isAlphaNumeric: isAlphanumeric.default,
  isIP: isIP.default,
  isUUID: isUUID.default,
  isAscii: isAscii.default,
  isCreditCard: isCreditCard.default,
  isIBAN: isIBAN.default,
  isJWT: isJWT.default,
  isLatLong: isLatLong.default,
  isMobilePhone: isMobilePhone.default,
  isPassportNumber: isPassportNumber.default,
  isPostalCode: isPostalCode.default,
  isSlug: isSlug.default,
  isDecimal: isDecimal.default,
  mobileLocales: mobilePhoneLocales,
  postalCountryCodes: postalCodeLocales,
  passportCountryCodes: [
    "AM",
    "AR",
    "AT",
    "AU",
    "AZ",
    "BE",
    "BG",
    "BR",
    "BY",
    "CA",
    "CH",
    "CY",
    "CZ",
    "DE",
    "DK",
    "DZ",
    "ES",
    "FI",
    "FR",
    "GB",
    "GR",
    "HR",
    "HU",
    "IE",
    "IN",
    "ID",
    "IR",
    "IS",
    "IT",
    "JM",
    "JP",
    "KR",
    "KZ",
    "LI",
    "LT",
    "LU",
    "LV",
    "LY",
    "MT",
    "MZ",
    "MY",
    "MX",
    "NL",
    "NZ",
    "PH",
    "PK",
    "PL",
    "PT",
    "RO",
    "RU",
    "SE",
    "SL",
    "SK",
    "TH",
    "TR",
    "UA",
    "US"
  ],
  /**
   * Check if the value is a valid color hexcode
   */
  isHexColor: (value) => {
    if (!value.startsWith("#")) {
      return false;
    }
    return isHexColor.default(value);
  },
  /**
   * Check if a URL has valid `A` or `AAAA` DNS records
   */
  isActiveURL: async (url) => {
    const { resolve4, resolve6 } = await import("node:dns/promises");
    try {
      const { hostname } = new URL(url);
      const v6Addresses = await resolve6(hostname);
      if (v6Addresses.length) {
        return true;
      } else {
        const v4Addresses = await resolve4(hostname);
        return v4Addresses.length > 0;
      }
    } catch {
      return false;
    }
  },
  /**
   * Check if all the elements inside the dataset are unique.
   *
   * In case of an array of objects, you must provide one or more keys
   * for the fields that must be unique across the objects.
   *
   * ```ts
   * helpers.isDistinct([1, 2, 4, 5]) // true
   *
   * // Null and undefined values are ignored
   * helpers.isDistinct([1, null, 2, null, 4, 5]) // true
   *
   * helpers.isDistinct([
   *   {
   *     email: 'foo@bar.com',
   *     name: 'foo'
   *   },
   *   {
   *     email: 'baz@bar.com',
   *     name: 'baz'
   *   }
   * ], 'email') // true
   *
   * helpers.isDistinct([
   *   {
   *     email: 'foo@bar.com',
   *     tenant_id: 1,
   *     name: 'foo'
   *   },
   *   {
   *     email: 'foo@bar.com',
   *     tenant_id: 2,
   *     name: 'baz'
   *   }
   * ], ['email', 'tenant_id']) // true
   * ```
   */
  isDistinct: (dataSet, fields) => {
    const uniqueItems = /* @__PURE__ */ new Set();
    if (!fields) {
      for (let item of dataSet) {
        if (helpers.exists(item)) {
          if (uniqueItems.has(item)) {
            return false;
          } else {
            uniqueItems.add(item);
          }
        }
      }
      return true;
    }
    const fieldsList = Array.isArray(fields) ? fields : [fields];
    for (let item of dataSet) {
      if (helpers.isObject(item) && helpers.hasKeys(item, fieldsList)) {
        const element = fieldsList.map((field) => item[field]).join("_");
        if (uniqueItems.has(element)) {
          return false;
        } else {
          uniqueItems.add(element);
        }
      }
    }
    return true;
  },
  /**
   * Returns the nested value from the field root
   * object or the sibling value from the field
   * parent object
   */
  getNestedValue(key, field) {
    if (key.indexOf(".") > -1) {
      return delve(field.data, key);
    }
    return field.parent[key];
  }
};

export {
  helpers,
  SimpleMessagesProvider,
  main_exports,
  SimpleErrorReporter
};
//# sourceMappingURL=chunk-TVEIURSI.js.map