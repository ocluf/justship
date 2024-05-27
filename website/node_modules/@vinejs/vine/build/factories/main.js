import {
  SimpleErrorReporter,
  SimpleMessagesProvider,
  helpers
} from "../chunk-TVEIURSI.js";
import "../chunk-CSAU5B4Q.js";

// factories/field.ts
var FieldFactory = class {
  create(fieldName, value, messagesProvider, errorReporter) {
    const reporter = errorReporter || new SimpleErrorReporter();
    const provider = messagesProvider || new SimpleMessagesProvider({}, {});
    return {
      value,
      isArrayMember: false,
      parent: { [fieldName]: value },
      data: { [fieldName]: value },
      name: fieldName,
      wildCardPath: fieldName,
      isDefined: helpers.exists(value),
      isValid: true,
      meta: {},
      mutate(newValue) {
        this.value = newValue;
        this.isDefined = helpers.exists(newValue);
        return this;
      },
      report(message, rule, context, args) {
        this.isValid = false;
        reporter.report(provider.getMessage(message, rule, context, args), rule, context, args);
      }
    };
  }
};

// factories/validator.ts
import { AssertionError, deepEqual } from "node:assert";
var ValidationResult = class {
  #outputValue;
  #reporter;
  constructor(outputValue, reporter) {
    this.#outputValue = outputValue;
    this.#reporter = reporter;
  }
  /**
   * Creates an assertion error instance
   */
  #assertionError(options) {
    const assertion = new AssertionError(options);
    Object.defineProperty(assertion, "showDiff", { value: true });
    return assertion;
  }
  /**
   * Returns the validation result output
   */
  getOutput() {
    return this.#outputValue;
  }
  /**
   * Returns an array of errors reported to the
   * error reporter
   */
  getErrors() {
    return this.#reporter.errors;
  }
  /**
   * Assert one or more validation errors have occurred
   */
  assertSucceeded() {
    if (this.#reporter.hasErrors) {
      const errorsCount = this.#reporter.errors.length;
      throw this.#assertionError({
        message: `Expected validation to pass. Instead failed with "${errorsCount} error(s)"`,
        operator: "strictEqual",
        stackStartFn: this.assertSucceeded
      });
    }
  }
  /**
   * Assert the output value of validation. The output value is
   * same as the input value, unless "mutate" method is called
   */
  assertOutput(expectedOutput) {
    deepEqual(this.#outputValue, expectedOutput);
  }
  /**
   * Assert one or more validation errors have occurred
   */
  assertFailed() {
    if (!this.#reporter.hasErrors) {
      throw this.#assertionError({
        message: `Expected validation to report one or more errors`,
        operator: "strictEqual",
        stackStartFn: this.assertFailed
      });
    }
  }
  /**
   * Assert the number of errors have occurred
   */
  assertErrorsCount(count) {
    const errorsCount = this.#reporter.errors.length;
    if (errorsCount !== count) {
      throw this.#assertionError({
        message: `Expected validation to report "${count}" errors. Received "${errorsCount}"`,
        expected: count,
        actual: errorsCount,
        operator: "strictEqual",
        stackStartFn: this.assertErrorsCount,
        showDiff: true
      });
    }
  }
  /**
   * Assert error messages to include a given error message
   */
  assertError(message) {
    const messages = this.#reporter.errors.map((e) => e.message);
    if (!messages.includes(message)) {
      throw this.#assertionError({
        message: `Expected validation errors to include "${message}" message`,
        expected: [message],
        actual: messages,
        operator: "includes",
        stackStartFn: this.assertError,
        showDiff: true
      });
    }
  }
};
var ValidatorFactory = class _ValidatorFactory {
  #field;
  #bail;
  constructor(field, bail) {
    this.#field = field;
    this.#bail = bail;
  }
  /**
   * Creates an instance of the error reporter required
   * to report errors.
   */
  #getReporter() {
    return new SimpleErrorReporter();
  }
  /**
   * Define field context for the validation
   */
  withContext(field) {
    return new _ValidatorFactory(field, this.#bail);
  }
  /**
   * Toggle bail mode for the validation
   */
  bail(state) {
    return new _ValidatorFactory(this.#field, state);
  }
  /**
   * Executes a validation against the provided value
   */
  execute(validation, value) {
    const errorReporter = this.#getReporter();
    const bail = this.#bail === false ? false : true;
    const field = {
      ...new FieldFactory().create("dummy", value, void 0, errorReporter),
      ...this.#field
    };
    const validations = Array.isArray(validation) ? validation : [validation];
    for (let one of validations) {
      if (one.rule.isAsync) {
        throw new Error(
          `Cannot execute async rule "${one.rule.validator.name}". Use "validator.executeAsync" instead`
        );
      }
      if ((field.isDefined || one.rule.implicit) && (field.isValid || !bail)) {
        one.rule.validator(field.value, one.options, field);
      }
    }
    return new ValidationResult(field.value, errorReporter);
  }
  /**
   * Executes an async validation against the provided
   * value
   */
  async executeAsync(validation, value) {
    const errorReporter = this.#getReporter();
    const bail = this.#bail === false ? false : true;
    const field = {
      ...new FieldFactory().create("dummy", value, void 0, errorReporter),
      ...this.#field
    };
    const validations = Array.isArray(validation) ? validation : [validation];
    for (let one of validations) {
      if ((field.isDefined || one.rule.implicit) && (field.isValid || !bail)) {
        await one.rule.validator(field.value, one.options, field);
      }
    }
    return new ValidationResult(field.value, errorReporter);
  }
};

// factories/main.ts
var validator = new ValidatorFactory();
var fieldContext = new FieldFactory();
export {
  fieldContext,
  validator
};
//# sourceMappingURL=main.js.map