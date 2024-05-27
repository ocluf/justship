// index.ts
var Macroable = class {
  /**
   *
   * Macros are standard properties that gets added to the class prototype.
   *
   * ```ts
   * MyClass.macro('foo', 'bar')
   * ```
   */
  static macro(name, value) {
    this.prototype[name] = value;
  }
  /**
   *
   * Getters are added to the class prototype using the Object.defineProperty.
   *
   * ```ts
   * MyClass.getter('foo', function foo () {
   *   return 'bar'
   * })
   * ```
   *
   * You can add a singleton getter by enabling the `singleton` flag.
   *
   * ```ts
   * const singleton = true
   *
   * MyClass.getter('foo', function foo () {
   *   return 'bar'
   * }, singleton)
   * ```
   */
  static getter(name, accumulator, singleton = false) {
    Object.defineProperty(this.prototype, name, {
      get() {
        const value = accumulator.call(this);
        if (singleton) {
          Object.defineProperty(this, name, {
            configurable: false,
            enumerable: false,
            value,
            writable: false
          });
        }
        return value;
      },
      configurable: true,
      enumerable: false
    });
  }
};
export {
  Macroable as default
};
