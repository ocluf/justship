var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var lib = {exports: {}};

var Stats$2 = {};

var constants$1 = {};

Object.defineProperty(constants$1, "__esModule", { value: true });
constants$1.constants = void 0;
constants$1.constants = {
    O_RDONLY: 0,
    O_WRONLY: 1,
    O_RDWR: 2,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFBLK: 24576,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    S_IFSOCK: 49152,
    O_CREAT: 64,
    O_EXCL: 128,
    O_NOCTTY: 256,
    O_TRUNC: 512,
    O_APPEND: 1024,
    O_DIRECTORY: 65536,
    O_NOATIME: 262144,
    O_NOFOLLOW: 131072,
    O_SYNC: 1052672,
    O_DIRECT: 16384,
    O_NONBLOCK: 2048,
    S_IRWXU: 448,
    S_IRUSR: 256,
    S_IWUSR: 128,
    S_IXUSR: 64,
    S_IRWXG: 56,
    S_IRGRP: 32,
    S_IWGRP: 16,
    S_IXGRP: 8,
    S_IRWXO: 7,
    S_IROTH: 4,
    S_IWOTH: 2,
    S_IXOTH: 1,
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    UV_FS_COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    COPYFILE_EXCL: 1,
    COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE_FORCE: 4,
};

var getBigInt = {};

if (typeof BigInt === 'function') getBigInt.default = BigInt;
else
  getBigInt.default = function BigIntNotSupported() {
    throw new Error('BigInt is not supported in this environment.');
  };

Object.defineProperty(Stats$2, "__esModule", { value: true });
Stats$2.Stats = void 0;
var constants_1$1 = constants$1;
var getBigInt_1 = getBigInt;
var S_IFMT$1 = constants_1$1.constants.S_IFMT, S_IFDIR$1 = constants_1$1.constants.S_IFDIR, S_IFREG$1 = constants_1$1.constants.S_IFREG, S_IFBLK$1 = constants_1$1.constants.S_IFBLK, S_IFCHR$1 = constants_1$1.constants.S_IFCHR, S_IFLNK$1 = constants_1$1.constants.S_IFLNK, S_IFIFO$1 = constants_1$1.constants.S_IFIFO, S_IFSOCK$1 = constants_1$1.constants.S_IFSOCK;
/**
 * Statistics about a file/directory, like `fs.Stats`.
 */
var Stats$1 = /** @class */ (function () {
    function Stats() {
    }
    Stats.build = function (node, bigint) {
        if (bigint === void 0) { bigint = false; }
        var stats = new Stats();
        var uid = node.uid, gid = node.gid, atime = node.atime, mtime = node.mtime, ctime = node.ctime;
        var getStatNumber = !bigint ? function (number) { return number; } : getBigInt_1.default;
        // Copy all values on Stats from Node, so that if Node values
        // change, values on Stats would still be the old ones,
        // just like in Node fs.
        stats.uid = getStatNumber(uid);
        stats.gid = getStatNumber(gid);
        stats.rdev = getStatNumber(0);
        stats.blksize = getStatNumber(4096);
        stats.ino = getStatNumber(node.ino);
        stats.size = getStatNumber(node.getSize());
        stats.blocks = getStatNumber(1);
        stats.atime = atime;
        stats.mtime = mtime;
        stats.ctime = ctime;
        stats.birthtime = ctime;
        stats.atimeMs = getStatNumber(atime.getTime());
        stats.mtimeMs = getStatNumber(mtime.getTime());
        var ctimeMs = getStatNumber(ctime.getTime());
        stats.ctimeMs = ctimeMs;
        stats.birthtimeMs = ctimeMs;
        stats.dev = getStatNumber(0);
        stats.mode = getStatNumber(node.mode);
        stats.nlink = getStatNumber(node.nlink);
        return stats;
    };
    Stats.prototype._checkModeProperty = function (property) {
        return (Number(this.mode) & S_IFMT$1) === property;
    };
    Stats.prototype.isDirectory = function () {
        return this._checkModeProperty(S_IFDIR$1);
    };
    Stats.prototype.isFile = function () {
        return this._checkModeProperty(S_IFREG$1);
    };
    Stats.prototype.isBlockDevice = function () {
        return this._checkModeProperty(S_IFBLK$1);
    };
    Stats.prototype.isCharacterDevice = function () {
        return this._checkModeProperty(S_IFCHR$1);
    };
    Stats.prototype.isSymbolicLink = function () {
        return this._checkModeProperty(S_IFLNK$1);
    };
    Stats.prototype.isFIFO = function () {
        return this._checkModeProperty(S_IFIFO$1);
    };
    Stats.prototype.isSocket = function () {
        return this._checkModeProperty(S_IFSOCK$1);
    };
    return Stats;
}());
Stats$2.Stats = Stats$1;
Stats$2.default = Stats$1;

var Dirent$2 = {};

var encoding = {};

var buffer = {};

var bufferRollup = {};

var _Buffer = typeof Buffer === 'function'
  ? Buffer
  : /*#__PURE__*/ (function () {
      if (typeof __webpack_public_path__ !== 'undefined') {
        try {
          return __non_webpack_require__('buffer').Buffer
        } catch (_) {
          throw new Error('The current runtime does not support "Buffer". Consider using buffer polyfill to make sure `globalThis.Buffer` is defined.')
        }
      } else {
        try {
          return require("buffer").Buffer
        } catch (_) {
          throw new Error('The current runtime does not support "Buffer". Consider using buffer polyfill to make sure `globalThis.Buffer` is defined.')
        }
      }
    })();

bufferRollup.Buffer = _Buffer;

(function (exports) {
	var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bufferFrom = exports.bufferAllocUnsafe = exports.Buffer = void 0;
	var buffer_1 = bufferRollup;
	Object.defineProperty(exports, "Buffer", { enumerable: true, get: function () { return buffer_1.Buffer; } });
	function bufferV0P12Ponyfill(arg0) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    return new (buffer_1.Buffer.bind.apply(buffer_1.Buffer, __spreadArray([void 0, arg0], args, false)))();
	}
	var bufferAllocUnsafe = buffer_1.Buffer.allocUnsafe || bufferV0P12Ponyfill;
	exports.bufferAllocUnsafe = bufferAllocUnsafe;
	var bufferFrom = buffer_1.Buffer.from || bufferV0P12Ponyfill;
	exports.bufferFrom = bufferFrom; 
} (buffer));

var errors$1 = {};

function assert$1 (v, m) {
  if (!v) {
    throw new Error(m || 'AssertionError')
  }
}

assert$1.strictEqual = function (a, b, m) {
  if (!Object.is(a, b)) {
    throw new Error(m || 'AssertionError')
  }
};

var assert_1 = assert$1;

var browser$2 = {exports: {}};

// shim for using process in browser
var process$5 = browser$2.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ());
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process$5.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process$5.title = 'browser';
process$5.browser = true;
process$5.env = {};
process$5.argv = [];
process$5.version = ''; // empty string to avoid regexp issues
process$5.versions = {};

function noop() {}

process$5.on = noop;
process$5.addListener = noop;
process$5.once = noop;
process$5.off = noop;
process$5.removeListener = noop;
process$5.removeAllListeners = noop;
process$5.emit = noop;
process$5.prependListener = noop;
process$5.prependOnceListener = noop;

process$5.listeners = function (name) { return [] };

process$5.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process$5.cwd = function () { return '/' };
process$5.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process$5.umask = function() { return 0; };

var browserExports$1 = browser$2.exports;
var process$6 = /*@__PURE__*/getDefaultExportFromCjs(browserExports$1);

var util$1 = {};

var types = {};

/* eslint complexity: [2, 18], max-statements: [2, 33] */
var shams$1 = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

var hasSymbols$2 = shams$1;

var shams = function hasToStringTagShams() {
	return hasSymbols$2() && !!Symbol.toStringTag;
};

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = shams$1;

var hasSymbols$1 = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

var test = {
	foo: {}
};

var $Object = Object;

var hasProto$1 = function hasProto() {
	return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
};

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr$3 = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

var implementation$1 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$3.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var implementation = implementation$1;

var functionBind = Function.prototype.bind || implementation;

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind$1 = functionBind;

/** @type {(o: {}, p: PropertyKey) => p is keyof o} */
var hasown = bind$1.call(call, $hasOwn);

var undefined$1;

var $SyntaxError$1 = SyntaxError;
var $Function = Function;
var $TypeError$2 = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
	try {
		$gOPD$1({}, '');
	} catch (e) {
		$gOPD$1 = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError$2();
};
var ThrowTypeError = $gOPD$1
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD$1(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = hasSymbols$1();
var hasProto = hasProto$1();

var getProto$1 = Object.getPrototypeOf || (
	hasProto
		? function (x) { return x.__proto__; } // eslint-disable-line no-proto
		: null
);

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto$1 ? undefined$1 : getProto$1(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto$1 ? getProto$1([][Symbol.iterator]()) : undefined$1,
	'%AsyncFromSyncIteratorPrototype%': undefined$1,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined$1 : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined$1 : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto$1 ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto$1 ? undefined$1 : getProto$1(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto$1 ? undefined$1 : getProto$1(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto$1 ? getProto$1(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols ? Symbol : undefined$1,
	'%SyntaxError%': $SyntaxError$1,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError$2,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
};

if (getProto$1) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto$1(getProto$1(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto$1) {
			value = getProto$1(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = functionBind;
var hasOwn = hasown;
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError$1('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError$1('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError$2('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError$1('intrinsic ' + name + ' does not exist!');
};

var getIntrinsic = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError$2('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError$2('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError$1('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError$1('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError$2('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined$1;
			}
			if ($gOPD$1 && (i + 1) >= parts.length) {
				var desc = $gOPD$1(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

var callBind$2 = {exports: {}};

var GetIntrinsic$4 = getIntrinsic;

var $defineProperty$1 = GetIntrinsic$4('%Object.defineProperty%', true);

var hasPropertyDescriptors$1 = function hasPropertyDescriptors() {
	if ($defineProperty$1) {
		try {
			$defineProperty$1({}, 'a', { value: 1 });
			return true;
		} catch (e) {
			// IE 8 has a broken defineProperty
			return false;
		}
	}
	return false;
};

hasPropertyDescriptors$1.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!hasPropertyDescriptors$1()) {
		return null;
	}
	try {
		return $defineProperty$1([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

var hasPropertyDescriptors_1 = hasPropertyDescriptors$1;

var GetIntrinsic$3 = getIntrinsic;

var $gOPD = GetIntrinsic$3('%Object.getOwnPropertyDescriptor%', true);

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

var gopd$1 = $gOPD;

var hasPropertyDescriptors = hasPropertyDescriptors_1();

var GetIntrinsic$2 = getIntrinsic;

var $defineProperty = hasPropertyDescriptors && GetIntrinsic$2('%Object.defineProperty%', true);
if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = false;
	}
}

var $SyntaxError = GetIntrinsic$2('%SyntaxError%');
var $TypeError$1 = GetIntrinsic$2('%TypeError%');

var gopd = gopd$1;

/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */
var defineDataProperty = function defineDataProperty(
	obj,
	property,
	value
) {
	if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
		throw new $TypeError$1('`obj` must be an object or a function`');
	}
	if (typeof property !== 'string' && typeof property !== 'symbol') {
		throw new $TypeError$1('`property` must be a string or a symbol`');
	}
	if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
		throw new $TypeError$1('`nonEnumerable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
		throw new $TypeError$1('`nonWritable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
		throw new $TypeError$1('`nonConfigurable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
		throw new $TypeError$1('`loose`, if provided, must be a boolean');
	}

	var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
	var nonWritable = arguments.length > 4 ? arguments[4] : null;
	var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
	var loose = arguments.length > 6 ? arguments[6] : false;

	/* @type {false | TypedPropertyDescriptor<unknown>} */
	var desc = !!gopd && gopd(obj, property);

	if ($defineProperty) {
		$defineProperty(obj, property, {
			configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
			enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
			value: value,
			writable: nonWritable === null && desc ? desc.writable : !nonWritable
		});
	} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
		// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
		obj[property] = value; // eslint-disable-line no-param-reassign
	} else {
		throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
	}
};

var GetIntrinsic$1 = getIntrinsic;
var define = defineDataProperty;
var hasDescriptors = hasPropertyDescriptors_1();
var gOPD$1 = gopd$1;

var $TypeError = GetIntrinsic$1('%TypeError%');
var $floor = GetIntrinsic$1('%Math.floor%');

var setFunctionLength = function setFunctionLength(fn, length) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
		throw new $TypeError('`length` must be a positive 32-bit integer');
	}

	var loose = arguments.length > 2 && !!arguments[2];

	var functionLengthIsConfigurable = true;
	var functionLengthIsWritable = true;
	if ('length' in fn && gOPD$1) {
		var desc = gOPD$1(fn, 'length');
		if (desc && !desc.configurable) {
			functionLengthIsConfigurable = false;
		}
		if (desc && !desc.writable) {
			functionLengthIsWritable = false;
		}
	}

	if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
		if (hasDescriptors) {
			define(fn, 'length', length, true, true);
		} else {
			define(fn, 'length', length);
		}
	}
	return fn;
};

(function (module) {

	var bind = functionBind;
	var GetIntrinsic = getIntrinsic;
	var setFunctionLength$1 = setFunctionLength;

	var $TypeError = GetIntrinsic('%TypeError%');
	var $apply = GetIntrinsic('%Function.prototype.apply%');
	var $call = GetIntrinsic('%Function.prototype.call%');
	var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

	var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
	var $max = GetIntrinsic('%Math.max%');

	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
		} catch (e) {
			// IE 8 has a broken defineProperty
			$defineProperty = null;
		}
	}

	module.exports = function callBind(originalFunction) {
		if (typeof originalFunction !== 'function') {
			throw new $TypeError('a function is required');
		}
		var func = $reflectApply(bind, $call, arguments);
		return setFunctionLength$1(
			func,
			1 + $max(0, originalFunction.length - (arguments.length - 1)),
			true
		);
	};

	var applyBind = function applyBind() {
		return $reflectApply(bind, $apply, arguments);
	};

	if ($defineProperty) {
		$defineProperty(module.exports, 'apply', { value: applyBind });
	} else {
		module.exports.apply = applyBind;
	} 
} (callBind$2));

var callBindExports = callBind$2.exports;

var GetIntrinsic = getIntrinsic;

var callBind$1 = callBindExports;

var $indexOf$1 = callBind$1(GetIntrinsic('String.prototype.indexOf'));

var callBound$2 = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf$1(name, '.prototype.') > -1) {
		return callBind$1(intrinsic);
	}
	return intrinsic;
};

var hasToStringTag$3 = shams();
var callBound$1 = callBound$2;

var $toString$1 = callBound$1('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag$3 && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString$1(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString$1(value) !== '[object Array]' &&
		$toString$1(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

var isArguments = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

var toStr$2 = Object.prototype.toString;
var fnToStr$1 = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag$2 = shams();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag$2) {
		return false;
	}
	try {
		return Function('return function*() {}')();
	} catch (e) {
	}
};
var GeneratorFunction;

var isGeneratorFunction = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex.test(fnToStr$1.call(fn))) {
		return true;
	}
	if (!hasToStringTag$2) {
		var str = toStr$2.call(fn);
		return str === '[object GeneratorFunction]';
	}
	if (!getProto) {
		return false;
	}
	if (typeof GeneratorFunction === 'undefined') {
		var generatorFunc = getGeneratorFunc();
		GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
	}
	return getProto(fn) === GeneratorFunction;
};

var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr$1 = Object.prototype.toString;
var objectClass = '[object Object]';
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var ddaClass = '[object HTMLAllCollection]'; // IE 11
var ddaClass2 = '[object HTML document.all class]';
var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var hasToStringTag$1 = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var isDDA = function isDocumentDotAll() { return false; };
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr$1.call(all) === toStr$1.call(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr$1.call(value);
					return (
						str === ddaClass
						|| str === ddaClass2
						|| str === ddaClass3 // opera 12.16
						|| str === objectClass // IE 6-8
					) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

var isCallable$1 = reflectApply
	? function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	}
	: function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag$1) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr$1.call(value);
		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
		return tryFunctionObject(value);
	};

var isCallable = isCallable$1;

var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

var forEachArray = function forEachArray(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
                iterator(array[i], i, array);
            } else {
                iterator.call(receiver, array[i], i, array);
            }
        }
    }
};

var forEachString = function forEachString(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        if (receiver == null) {
            iterator(string.charAt(i), i, string);
        } else {
            iterator.call(receiver, string.charAt(i), i, string);
        }
    }
};

var forEachObject = function forEachObject(object, iterator, receiver) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
                iterator(object[k], k, object);
            } else {
                iterator.call(receiver, object[k], k, object);
            }
        }
    }
};

var forEach$2 = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
        throw new TypeError('iterator must be a function');
    }

    var receiver;
    if (arguments.length >= 3) {
        receiver = thisArg;
    }

    if (toStr.call(list) === '[object Array]') {
        forEachArray(list, iterator, receiver);
    } else if (typeof list === 'string') {
        forEachString(list, iterator, receiver);
    } else {
        forEachObject(list, iterator, receiver);
    }
};

var forEach_1 = forEach$2;

var possibleNames = [
	'BigInt64Array',
	'BigUint64Array',
	'Float32Array',
	'Float64Array',
	'Int16Array',
	'Int32Array',
	'Int8Array',
	'Uint16Array',
	'Uint32Array',
	'Uint8Array',
	'Uint8ClampedArray'
];

var g$1 = typeof globalThis === 'undefined' ? commonjsGlobal : globalThis;

var availableTypedArrays$1 = function availableTypedArrays() {
	var out = [];
	for (var i = 0; i < possibleNames.length; i++) {
		if (typeof g$1[possibleNames[i]] === 'function') {
			out[out.length] = possibleNames[i];
		}
	}
	return out;
};

var forEach$1 = forEach_1;
var availableTypedArrays = availableTypedArrays$1;
var callBind = callBindExports;
var callBound = callBound$2;
var gOPD = gopd$1;

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = shams();

var g = typeof globalThis === 'undefined' ? commonjsGlobal : globalThis;
var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');

var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};
var cache = { __proto__: null };
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach$1(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		if (Symbol.toStringTag in arr) {
			var proto = getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			cache['$' + typedArray] = callBind(descriptor.get);
		}
	});
} else {
	forEach$1(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		var fn = arr.slice || arr.set;
		if (fn) {
			cache['$' + typedArray] = callBind(fn);
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var found = false;
	forEach$1(cache, function (getter, typedArray) {
		if (!found) {
			try {
				if ('$' + getter(value) === typedArray) {
					found = $slice(typedArray, 1);
				}
			} catch (e) { /**/ }
		}
	});
	return found;
};

var trySlices = function tryAllSlices(value) {
	var found = false;
	forEach$1(cache, function (getter, name) {
		if (!found) {
			try {
				getter(value);
				found = $slice(name, 1);
			} catch (e) { /**/ }
		}
	});
	return found;
};

var whichTypedArray$1 = function whichTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag) {
		var tag = $slice($toString(value), 8, -1);
		if ($indexOf(typedArrays, tag) > -1) {
			return tag;
		}
		if (tag !== 'Object') {
			return false;
		}
		// node < 0.6 hits here on real Typed Arrays
		return trySlices(value);
	}
	if (!gOPD) { return null; } // unknown engine
	return tryTypedArrays(value);
};

var whichTypedArray = whichTypedArray$1;

var isTypedArray = function isTypedArray(value) {
	return !!whichTypedArray(value);
};

(function (exports) {

	var isArgumentsObject = isArguments;
	var isGeneratorFunction$1 = isGeneratorFunction;
	var whichTypedArray = whichTypedArray$1;
	var isTypedArray$1 = isTypedArray;

	function uncurryThis(f) {
	  return f.call.bind(f);
	}

	var BigIntSupported = typeof BigInt !== 'undefined';
	var SymbolSupported = typeof Symbol !== 'undefined';

	var ObjectToString = uncurryThis(Object.prototype.toString);

	var numberValue = uncurryThis(Number.prototype.valueOf);
	var stringValue = uncurryThis(String.prototype.valueOf);
	var booleanValue = uncurryThis(Boolean.prototype.valueOf);

	if (BigIntSupported) {
	  var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
	}

	if (SymbolSupported) {
	  var symbolValue = uncurryThis(Symbol.prototype.valueOf);
	}

	function checkBoxedPrimitive(value, prototypeValueOf) {
	  if (typeof value !== 'object') {
	    return false;
	  }
	  try {
	    prototypeValueOf(value);
	    return true;
	  } catch(e) {
	    return false;
	  }
	}

	exports.isArgumentsObject = isArgumentsObject;
	exports.isGeneratorFunction = isGeneratorFunction$1;
	exports.isTypedArray = isTypedArray$1;

	// Taken from here and modified for better browser support
	// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
	function isPromise(input) {
		return (
			(
				typeof Promise !== 'undefined' &&
				input instanceof Promise
			) ||
			(
				input !== null &&
				typeof input === 'object' &&
				typeof input.then === 'function' &&
				typeof input.catch === 'function'
			)
		);
	}
	exports.isPromise = isPromise;

	function isArrayBufferView(value) {
	  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
	    return ArrayBuffer.isView(value);
	  }

	  return (
	    isTypedArray$1(value) ||
	    isDataView(value)
	  );
	}
	exports.isArrayBufferView = isArrayBufferView;


	function isUint8Array(value) {
	  return whichTypedArray(value) === 'Uint8Array';
	}
	exports.isUint8Array = isUint8Array;

	function isUint8ClampedArray(value) {
	  return whichTypedArray(value) === 'Uint8ClampedArray';
	}
	exports.isUint8ClampedArray = isUint8ClampedArray;

	function isUint16Array(value) {
	  return whichTypedArray(value) === 'Uint16Array';
	}
	exports.isUint16Array = isUint16Array;

	function isUint32Array(value) {
	  return whichTypedArray(value) === 'Uint32Array';
	}
	exports.isUint32Array = isUint32Array;

	function isInt8Array(value) {
	  return whichTypedArray(value) === 'Int8Array';
	}
	exports.isInt8Array = isInt8Array;

	function isInt16Array(value) {
	  return whichTypedArray(value) === 'Int16Array';
	}
	exports.isInt16Array = isInt16Array;

	function isInt32Array(value) {
	  return whichTypedArray(value) === 'Int32Array';
	}
	exports.isInt32Array = isInt32Array;

	function isFloat32Array(value) {
	  return whichTypedArray(value) === 'Float32Array';
	}
	exports.isFloat32Array = isFloat32Array;

	function isFloat64Array(value) {
	  return whichTypedArray(value) === 'Float64Array';
	}
	exports.isFloat64Array = isFloat64Array;

	function isBigInt64Array(value) {
	  return whichTypedArray(value) === 'BigInt64Array';
	}
	exports.isBigInt64Array = isBigInt64Array;

	function isBigUint64Array(value) {
	  return whichTypedArray(value) === 'BigUint64Array';
	}
	exports.isBigUint64Array = isBigUint64Array;

	function isMapToString(value) {
	  return ObjectToString(value) === '[object Map]';
	}
	isMapToString.working = (
	  typeof Map !== 'undefined' &&
	  isMapToString(new Map())
	);

	function isMap(value) {
	  if (typeof Map === 'undefined') {
	    return false;
	  }

	  return isMapToString.working
	    ? isMapToString(value)
	    : value instanceof Map;
	}
	exports.isMap = isMap;

	function isSetToString(value) {
	  return ObjectToString(value) === '[object Set]';
	}
	isSetToString.working = (
	  typeof Set !== 'undefined' &&
	  isSetToString(new Set())
	);
	function isSet(value) {
	  if (typeof Set === 'undefined') {
	    return false;
	  }

	  return isSetToString.working
	    ? isSetToString(value)
	    : value instanceof Set;
	}
	exports.isSet = isSet;

	function isWeakMapToString(value) {
	  return ObjectToString(value) === '[object WeakMap]';
	}
	isWeakMapToString.working = (
	  typeof WeakMap !== 'undefined' &&
	  isWeakMapToString(new WeakMap())
	);
	function isWeakMap(value) {
	  if (typeof WeakMap === 'undefined') {
	    return false;
	  }

	  return isWeakMapToString.working
	    ? isWeakMapToString(value)
	    : value instanceof WeakMap;
	}
	exports.isWeakMap = isWeakMap;

	function isWeakSetToString(value) {
	  return ObjectToString(value) === '[object WeakSet]';
	}
	isWeakSetToString.working = (
	  typeof WeakSet !== 'undefined' &&
	  isWeakSetToString(new WeakSet())
	);
	function isWeakSet(value) {
	  return isWeakSetToString(value);
	}
	exports.isWeakSet = isWeakSet;

	function isArrayBufferToString(value) {
	  return ObjectToString(value) === '[object ArrayBuffer]';
	}
	isArrayBufferToString.working = (
	  typeof ArrayBuffer !== 'undefined' &&
	  isArrayBufferToString(new ArrayBuffer())
	);
	function isArrayBuffer(value) {
	  if (typeof ArrayBuffer === 'undefined') {
	    return false;
	  }

	  return isArrayBufferToString.working
	    ? isArrayBufferToString(value)
	    : value instanceof ArrayBuffer;
	}
	exports.isArrayBuffer = isArrayBuffer;

	function isDataViewToString(value) {
	  return ObjectToString(value) === '[object DataView]';
	}
	isDataViewToString.working = (
	  typeof ArrayBuffer !== 'undefined' &&
	  typeof DataView !== 'undefined' &&
	  isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1))
	);
	function isDataView(value) {
	  if (typeof DataView === 'undefined') {
	    return false;
	  }

	  return isDataViewToString.working
	    ? isDataViewToString(value)
	    : value instanceof DataView;
	}
	exports.isDataView = isDataView;

	// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
	var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
	function isSharedArrayBufferToString(value) {
	  return ObjectToString(value) === '[object SharedArrayBuffer]';
	}
	function isSharedArrayBuffer(value) {
	  if (typeof SharedArrayBufferCopy === 'undefined') {
	    return false;
	  }

	  if (typeof isSharedArrayBufferToString.working === 'undefined') {
	    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
	  }

	  return isSharedArrayBufferToString.working
	    ? isSharedArrayBufferToString(value)
	    : value instanceof SharedArrayBufferCopy;
	}
	exports.isSharedArrayBuffer = isSharedArrayBuffer;

	function isAsyncFunction(value) {
	  return ObjectToString(value) === '[object AsyncFunction]';
	}
	exports.isAsyncFunction = isAsyncFunction;

	function isMapIterator(value) {
	  return ObjectToString(value) === '[object Map Iterator]';
	}
	exports.isMapIterator = isMapIterator;

	function isSetIterator(value) {
	  return ObjectToString(value) === '[object Set Iterator]';
	}
	exports.isSetIterator = isSetIterator;

	function isGeneratorObject(value) {
	  return ObjectToString(value) === '[object Generator]';
	}
	exports.isGeneratorObject = isGeneratorObject;

	function isWebAssemblyCompiledModule(value) {
	  return ObjectToString(value) === '[object WebAssembly.Module]';
	}
	exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

	function isNumberObject(value) {
	  return checkBoxedPrimitive(value, numberValue);
	}
	exports.isNumberObject = isNumberObject;

	function isStringObject(value) {
	  return checkBoxedPrimitive(value, stringValue);
	}
	exports.isStringObject = isStringObject;

	function isBooleanObject(value) {
	  return checkBoxedPrimitive(value, booleanValue);
	}
	exports.isBooleanObject = isBooleanObject;

	function isBigIntObject(value) {
	  return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
	}
	exports.isBigIntObject = isBigIntObject;

	function isSymbolObject(value) {
	  return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
	}
	exports.isSymbolObject = isSymbolObject;

	function isBoxedPrimitive(value) {
	  return (
	    isNumberObject(value) ||
	    isStringObject(value) ||
	    isBooleanObject(value) ||
	    isBigIntObject(value) ||
	    isSymbolObject(value)
	  );
	}
	exports.isBoxedPrimitive = isBoxedPrimitive;

	function isAnyArrayBuffer(value) {
	  return typeof Uint8Array !== 'undefined' && (
	    isArrayBuffer(value) ||
	    isSharedArrayBuffer(value)
	  );
	}
	exports.isAnyArrayBuffer = isAnyArrayBuffer;

	['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function(method) {
	  Object.defineProperty(exports, method, {
	    enumerable: false,
	    value: function() {
	      throw new Error(method + ' is not supported in userland');
	    }
	  });
	}); 
} (types));

var isBufferBrowser = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
};

var inherits_browser = {exports: {}};

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

var inherits_browserExports = inherits_browser.exports;

(function (exports) {
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
	  function getOwnPropertyDescriptors(obj) {
	    var keys = Object.keys(obj);
	    var descriptors = {};
	    for (var i = 0; i < keys.length; i++) {
	      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
	    }
	    return descriptors;
	  };

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  if (typeof process$6 !== 'undefined' && process$6.noDeprecation === true) {
	    return fn;
	  }

	  // Allow for deprecating things in the process of starting up.
	  if (typeof process$6 === 'undefined') {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process$6.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process$6.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnvRegex = /^$/;
	exports.debuglog = function(set) {
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (debugEnvRegex.test(set)) {
	      var pid = process$6.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').slice(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.slice(1, -1);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var length = output.reduce(function(prev, cur) {
	    if (cur.indexOf('\n') >= 0) ;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	exports.types = types;

	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	exports.types.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	exports.types.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	exports.types.isNativeError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = isBufferBrowser;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = inherits_browserExports;

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

	exports.promisify = function promisify(original) {
	  if (typeof original !== 'function')
	    throw new TypeError('The "original" argument must be of type Function');

	  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
	    var fn = original[kCustomPromisifiedSymbol];
	    if (typeof fn !== 'function') {
	      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
	    }
	    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
	      value: fn, enumerable: false, writable: false, configurable: true
	    });
	    return fn;
	  }

	  function fn() {
	    var promiseResolve, promiseReject;
	    var promise = new Promise(function (resolve, reject) {
	      promiseResolve = resolve;
	      promiseReject = reject;
	    });

	    var args = [];
	    for (var i = 0; i < arguments.length; i++) {
	      args.push(arguments[i]);
	    }
	    args.push(function (err, value) {
	      if (err) {
	        promiseReject(err);
	      } else {
	        promiseResolve(value);
	      }
	    });

	    try {
	      original.apply(this, args);
	    } catch (err) {
	      promiseReject(err);
	    }

	    return promise;
	  }

	  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

	  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
	    value: fn, enumerable: false, writable: false, configurable: true
	  });
	  return Object.defineProperties(
	    fn,
	    getOwnPropertyDescriptors(original)
	  );
	};

	exports.promisify.custom = kCustomPromisifiedSymbol;

	function callbackifyOnRejected(reason, cb) {
	  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
	  // Because `null` is a special error value in callbacks which means "no error
	  // occurred", we error-wrap so the callback consumer can distinguish between
	  // "the promise rejected with null" or "the promise fulfilled with undefined".
	  if (!reason) {
	    var newReason = new Error('Promise was rejected with a falsy value');
	    newReason.reason = reason;
	    reason = newReason;
	  }
	  return cb(reason);
	}

	function callbackify(original) {
	  if (typeof original !== 'function') {
	    throw new TypeError('The "original" argument must be of type Function');
	  }

	  // We DO NOT return the promise as it gives the user a false sense that
	  // the promise is actually somehow related to the callback's execution
	  // and that the callback throwing will reject the promise.
	  function callbackified() {
	    var args = [];
	    for (var i = 0; i < arguments.length; i++) {
	      args.push(arguments[i]);
	    }

	    var maybeCb = args.pop();
	    if (typeof maybeCb !== 'function') {
	      throw new TypeError('The last argument must be of type Function');
	    }
	    var self = this;
	    var cb = function() {
	      return maybeCb.apply(self, arguments);
	    };
	    // In true node style we process the callback on `nextTick` with all the
	    // implications (stack, `uncaughtException`, `async_hooks`)
	    original.apply(this, args)
	      .then(function(ret) { process$6.nextTick(cb.bind(null, null, ret)); },
	            function(rej) { process$6.nextTick(callbackifyOnRejected.bind(null, rej, cb)); });
	  }

	  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
	  Object.defineProperties(callbackified,
	                          getOwnPropertyDescriptors(original));
	  return callbackified;
	}
	exports.callbackify = callbackify; 
} (util$1));

(function (exports) {
	// The whole point behind this internal module is to allow Node.js to no
	// longer be forced to treat every error message change as a semver-major
	// change. The NodeError classes here all expose a `code` property whose
	// value statically and permanently identifies the error. While the error
	// message may change, the code should not.
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        if (typeof b !== "function" && b !== null)
	            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.E = exports.AssertionError = exports.message = exports.RangeError = exports.TypeError = exports.Error = void 0;
	var assert = assert_1;
	var util = util$1;
	var kCode = typeof Symbol === 'undefined' ? '_kCode' : Symbol('code');
	var messages = {}; // new Map();
	function makeNodeError(Base) {
	    return /** @class */ (function (_super) {
	        __extends(NodeError, _super);
	        function NodeError(key) {
	            var args = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                args[_i - 1] = arguments[_i];
	            }
	            var _this = _super.call(this, message(key, args)) || this;
	            _this.code = key;
	            _this[kCode] = key;
	            _this.name = "".concat(_super.prototype.name, " [").concat(_this[kCode], "]");
	            return _this;
	        }
	        return NodeError;
	    }(Base));
	}
	var g = typeof globalThis !== 'undefined' ? globalThis : commonjsGlobal;
	var AssertionError = /** @class */ (function (_super) {
	    __extends(AssertionError, _super);
	    function AssertionError(options) {
	        var _this = this;
	        if (typeof options !== 'object' || options === null) {
	            throw new exports.TypeError('ERR_INVALID_ARG_TYPE', 'options', 'object');
	        }
	        if (options.message) {
	            _this = _super.call(this, options.message) || this;
	        }
	        else {
	            _this = _super.call(this, "".concat(util.inspect(options.actual).slice(0, 128), " ") +
	                "".concat(options.operator, " ").concat(util.inspect(options.expected).slice(0, 128))) || this;
	        }
	        _this.generatedMessage = !options.message;
	        _this.name = 'AssertionError [ERR_ASSERTION]';
	        _this.code = 'ERR_ASSERTION';
	        _this.actual = options.actual;
	        _this.expected = options.expected;
	        _this.operator = options.operator;
	        exports.Error.captureStackTrace(_this, options.stackStartFunction);
	        return _this;
	    }
	    return AssertionError;
	}(g.Error));
	exports.AssertionError = AssertionError;
	function message(key, args) {
	    assert.strictEqual(typeof key, 'string');
	    // const msg = messages.get(key);
	    var msg = messages[key];
	    assert(msg, "An invalid error message key was used: ".concat(key, "."));
	    var fmt;
	    if (typeof msg === 'function') {
	        fmt = msg;
	    }
	    else {
	        fmt = util.format;
	        if (args === undefined || args.length === 0)
	            return msg;
	        args.unshift(msg);
	    }
	    return String(fmt.apply(null, args));
	}
	exports.message = message;
	// Utility function for registering the error codes. Only used here. Exported
	// *only* to allow for testing.
	function E(sym, val) {
	    messages[sym] = typeof val === 'function' ? val : String(val);
	}
	exports.E = E;
	exports.Error = makeNodeError(g.Error);
	exports.TypeError = makeNodeError(g.TypeError);
	exports.RangeError = makeNodeError(g.RangeError);
	// To declare an error message, use the E(sym, val) function above. The sym
	// must be an upper case string. The val can be either a function or a string.
	// The return value of the function must be a string.
	// Examples:
	// E('EXAMPLE_KEY1', 'This is the error value');
	// E('EXAMPLE_KEY2', (a, b) => return `${a} ${b}`);
	//
	// Once an error code has been assigned, the code itself MUST NOT change and
	// any given error code must never be reused to identify a different error.
	//
	// Any error code added here should also be added to the documentation
	//
	// Note: Please try to keep these in alphabetical order
	E('ERR_ARG_NOT_ITERABLE', '%s must be iterable');
	E('ERR_ASSERTION', '%s');
	E('ERR_BUFFER_OUT_OF_BOUNDS', bufferOutOfBounds);
	E('ERR_CHILD_CLOSED_BEFORE_REPLY', 'Child closed before reply received');
	E('ERR_CONSOLE_WRITABLE_STREAM', 'Console expects a writable stream instance for %s');
	E('ERR_CPU_USAGE', 'Unable to obtain cpu usage %s');
	E('ERR_DNS_SET_SERVERS_FAILED', function (err, servers) { return "c-ares failed to set servers: \"".concat(err, "\" [").concat(servers, "]"); });
	E('ERR_FALSY_VALUE_REJECTION', 'Promise was rejected with falsy value');
	E('ERR_ENCODING_NOT_SUPPORTED', function (enc) { return "The \"".concat(enc, "\" encoding is not supported"); });
	E('ERR_ENCODING_INVALID_ENCODED_DATA', function (enc) { return "The encoded data was not valid for encoding ".concat(enc); });
	E('ERR_HTTP_HEADERS_SENT', 'Cannot render headers after they are sent to the client');
	E('ERR_HTTP_INVALID_STATUS_CODE', 'Invalid status code: %s');
	E('ERR_HTTP_TRAILER_INVALID', 'Trailers are invalid with this transfer encoding');
	E('ERR_INDEX_OUT_OF_RANGE', 'Index out of range');
	E('ERR_INVALID_ARG_TYPE', invalidArgType);
	E('ERR_INVALID_ARRAY_LENGTH', function (name, len, actual) {
	    assert.strictEqual(typeof actual, 'number');
	    return "The array \"".concat(name, "\" (length ").concat(actual, ") must be of length ").concat(len, ".");
	});
	E('ERR_INVALID_BUFFER_SIZE', 'Buffer size must be a multiple of %s');
	E('ERR_INVALID_CALLBACK', 'Callback must be a function');
	E('ERR_INVALID_CHAR', 'Invalid character in %s');
	E('ERR_INVALID_CURSOR_POS', 'Cannot set cursor row without setting its column');
	E('ERR_INVALID_FD', '"fd" must be a positive integer: %s');
	E('ERR_INVALID_FILE_URL_HOST', 'File URL host must be "localhost" or empty on %s');
	E('ERR_INVALID_FILE_URL_PATH', 'File URL path %s');
	E('ERR_INVALID_HANDLE_TYPE', 'This handle type cannot be sent');
	E('ERR_INVALID_IP_ADDRESS', 'Invalid IP address: %s');
	E('ERR_INVALID_OPT_VALUE', function (name, value) {
	    return "The value \"".concat(String(value), "\" is invalid for option \"").concat(name, "\"");
	});
	E('ERR_INVALID_OPT_VALUE_ENCODING', function (value) { return "The value \"".concat(String(value), "\" is invalid for option \"encoding\""); });
	E('ERR_INVALID_REPL_EVAL_CONFIG', 'Cannot specify both "breakEvalOnSigint" and "eval" for REPL');
	E('ERR_INVALID_SYNC_FORK_INPUT', 'Asynchronous forks do not support Buffer, Uint8Array or string input: %s');
	E('ERR_INVALID_THIS', 'Value of "this" must be of type %s');
	E('ERR_INVALID_TUPLE', '%s must be an iterable %s tuple');
	E('ERR_INVALID_URL', 'Invalid URL: %s');
	E('ERR_INVALID_URL_SCHEME', function (expected) { return "The URL must be ".concat(oneOf(expected, 'scheme')); });
	E('ERR_IPC_CHANNEL_CLOSED', 'Channel closed');
	E('ERR_IPC_DISCONNECTED', 'IPC channel is already disconnected');
	E('ERR_IPC_ONE_PIPE', 'Child process can have only one IPC pipe');
	E('ERR_IPC_SYNC_FORK', 'IPC cannot be used with synchronous forks');
	E('ERR_MISSING_ARGS', missingArgs);
	E('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
	E('ERR_NAPI_CONS_FUNCTION', 'Constructor must be a function');
	E('ERR_NAPI_CONS_PROTOTYPE_OBJECT', 'Constructor.prototype must be an object');
	E('ERR_NO_CRYPTO', 'Node.js is not compiled with OpenSSL crypto support');
	E('ERR_NO_LONGER_SUPPORTED', '%s is no longer supported');
	E('ERR_PARSE_HISTORY_DATA', 'Could not parse history data in %s');
	E('ERR_SOCKET_ALREADY_BOUND', 'Socket is already bound');
	E('ERR_SOCKET_BAD_PORT', 'Port should be > 0 and < 65536');
	E('ERR_SOCKET_BAD_TYPE', 'Bad socket type specified. Valid types are: udp4, udp6');
	E('ERR_SOCKET_CANNOT_SEND', 'Unable to send data');
	E('ERR_SOCKET_CLOSED', 'Socket is closed');
	E('ERR_SOCKET_DGRAM_NOT_RUNNING', 'Not running');
	E('ERR_STDERR_CLOSE', 'process.stderr cannot be closed');
	E('ERR_STDOUT_CLOSE', 'process.stdout cannot be closed');
	E('ERR_STREAM_WRAP', 'Stream has StringDecoder set or is in objectMode');
	E('ERR_TLS_CERT_ALTNAME_INVALID', "Hostname/IP does not match certificate's altnames: %s");
	E('ERR_TLS_DH_PARAM_SIZE', function (size) { return "DH parameter size ".concat(size, " is less than 2048"); });
	E('ERR_TLS_HANDSHAKE_TIMEOUT', 'TLS handshake timeout');
	E('ERR_TLS_RENEGOTIATION_FAILED', 'Failed to renegotiate');
	E('ERR_TLS_REQUIRED_SERVER_NAME', '"servername" is required parameter for Server.addContext');
	E('ERR_TLS_SESSION_ATTACK', 'TSL session renegotiation attack detected');
	E('ERR_TRANSFORM_ALREADY_TRANSFORMING', 'Calling transform done when still transforming');
	E('ERR_TRANSFORM_WITH_LENGTH_0', 'Calling transform done when writableState.length != 0');
	E('ERR_UNKNOWN_ENCODING', 'Unknown encoding: %s');
	E('ERR_UNKNOWN_SIGNAL', 'Unknown signal: %s');
	E('ERR_UNKNOWN_STDIN_TYPE', 'Unknown stdin file type');
	E('ERR_UNKNOWN_STREAM_TYPE', 'Unknown stream file type');
	E('ERR_V8BREAKITERATOR', 'Full ICU data not installed. ' + 'See https://github.com/nodejs/node/wiki/Intl');
	function invalidArgType(name, expected, actual) {
	    assert(name, 'name is required');
	    // determiner: 'must be' or 'must not be'
	    var determiner;
	    if (expected.includes('not ')) {
	        determiner = 'must not be';
	        expected = expected.split('not ')[1];
	    }
	    else {
	        determiner = 'must be';
	    }
	    var msg;
	    if (Array.isArray(name)) {
	        var names = name.map(function (val) { return "\"".concat(val, "\""); }).join(', ');
	        msg = "The ".concat(names, " arguments ").concat(determiner, " ").concat(oneOf(expected, 'type'));
	    }
	    else if (name.includes(' argument')) {
	        // for the case like 'first argument'
	        msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
	    }
	    else {
	        var type = name.includes('.') ? 'property' : 'argument';
	        msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
	    }
	    // if actual value received, output it
	    if (arguments.length >= 3) {
	        msg += ". Received type ".concat(actual !== null ? typeof actual : 'null');
	    }
	    return msg;
	}
	function missingArgs() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    assert(args.length > 0, 'At least one arg needs to be specified');
	    var msg = 'The ';
	    var len = args.length;
	    args = args.map(function (a) { return "\"".concat(a, "\""); });
	    switch (len) {
	        case 1:
	            msg += "".concat(args[0], " argument");
	            break;
	        case 2:
	            msg += "".concat(args[0], " and ").concat(args[1], " arguments");
	            break;
	        default:
	            msg += args.slice(0, len - 1).join(', ');
	            msg += ", and ".concat(args[len - 1], " arguments");
	            break;
	    }
	    return "".concat(msg, " must be specified");
	}
	function oneOf(expected, thing) {
	    assert(expected, 'expected is required');
	    assert(typeof thing === 'string', 'thing is required');
	    if (Array.isArray(expected)) {
	        var len = expected.length;
	        assert(len > 0, 'At least one expected value needs to be specified');
	        // tslint:disable-next-line
	        expected = expected.map(function (i) { return String(i); });
	        if (len > 2) {
	            return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
	        }
	        else if (len === 2) {
	            return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
	        }
	        else {
	            return "of ".concat(thing, " ").concat(expected[0]);
	        }
	    }
	    else {
	        return "of ".concat(thing, " ").concat(String(expected));
	    }
	}
	function bufferOutOfBounds(name, isWriting) {
	    if (isWriting) {
	        return 'Attempt to write outside buffer bounds';
	    }
	    else {
	        return "\"".concat(name, "\" is outside of buffer bounds");
	    }
	} 
} (errors$1));

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.strToEncoding = exports.assertEncoding = exports.ENCODING_UTF8 = void 0;
	var buffer_1 = buffer;
	var errors = errors$1;
	exports.ENCODING_UTF8 = 'utf8';
	function assertEncoding(encoding) {
	    if (encoding && !buffer_1.Buffer.isEncoding(encoding))
	        throw new errors.TypeError('ERR_INVALID_OPT_VALUE_ENCODING', encoding);
	}
	exports.assertEncoding = assertEncoding;
	function strToEncoding(str, encoding) {
	    if (!encoding || encoding === exports.ENCODING_UTF8)
	        return str; // UTF-8
	    if (encoding === 'buffer')
	        return new buffer_1.Buffer(str); // `buffer` encoding
	    return new buffer_1.Buffer(str).toString(encoding); // Custom encoding
	}
	exports.strToEncoding = strToEncoding; 
} (encoding));

Object.defineProperty(Dirent$2, "__esModule", { value: true });
Dirent$2.Dirent = void 0;
var constants_1 = constants$1;
var encoding_1 = encoding;
var S_IFMT = constants_1.constants.S_IFMT, S_IFDIR = constants_1.constants.S_IFDIR, S_IFREG = constants_1.constants.S_IFREG, S_IFBLK = constants_1.constants.S_IFBLK, S_IFCHR = constants_1.constants.S_IFCHR, S_IFLNK = constants_1.constants.S_IFLNK, S_IFIFO = constants_1.constants.S_IFIFO, S_IFSOCK = constants_1.constants.S_IFSOCK;
/**
 * A directory entry, like `fs.Dirent`.
 */
var Dirent$1 = /** @class */ (function () {
    function Dirent() {
        this.name = '';
        this.mode = 0;
    }
    Dirent.build = function (link, encoding) {
        var dirent = new Dirent();
        var mode = link.getNode().mode;
        dirent.name = (0, encoding_1.strToEncoding)(link.getName(), encoding);
        dirent.mode = mode;
        return dirent;
    };
    Dirent.prototype._checkModeProperty = function (property) {
        return (this.mode & S_IFMT) === property;
    };
    Dirent.prototype.isDirectory = function () {
        return this._checkModeProperty(S_IFDIR);
    };
    Dirent.prototype.isFile = function () {
        return this._checkModeProperty(S_IFREG);
    };
    Dirent.prototype.isBlockDevice = function () {
        return this._checkModeProperty(S_IFBLK);
    };
    Dirent.prototype.isCharacterDevice = function () {
        return this._checkModeProperty(S_IFCHR);
    };
    Dirent.prototype.isSymbolicLink = function () {
        return this._checkModeProperty(S_IFLNK);
    };
    Dirent.prototype.isFIFO = function () {
        return this._checkModeProperty(S_IFIFO);
    };
    Dirent.prototype.isSocket = function () {
        return this._checkModeProperty(S_IFSOCK);
    };
    return Dirent;
}());
Dirent$2.Dirent = Dirent$1;
Dirent$2.default = Dirent$1;

var volume = {};

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) ; else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process$6.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

var pathBrowserify = posix;

var index = /*@__PURE__*/getDefaultExportFromCjs(pathBrowserify);

var node = {};

var process$4 = {};

var setImmediate$1 = {};

Object.defineProperty(setImmediate$1, "__esModule", { value: true });
var _setImmediate;
if (typeof setImmediate === 'function')
    _setImmediate = setImmediate.bind(typeof globalThis !== 'undefined' ? globalThis : commonjsGlobal);
else
    _setImmediate = setTimeout.bind(typeof globalThis !== 'undefined' ? globalThis : commonjsGlobal);
setImmediate$1.default = _setImmediate;

// Here we mock the global `process` variable in case we are not in Node's environment.
Object.defineProperty(process$4, "__esModule", { value: true });
process$4.createProcess = void 0;
/**
 * Looks to return a `process` object, if one is available.
 *
 * The global `process` is returned if defined;
 * otherwise `require('process')` is attempted.
 *
 * If that fails, `undefined` is returned.
 *
 * @return {IProcess | undefined}
 */
var maybeReturnProcess = function () {
    if (typeof process$6 !== 'undefined') {
        return process$6;
    }
    try {
        return browserExports$1;
    }
    catch (_a) {
        return undefined;
    }
};
function createProcess() {
    var p = maybeReturnProcess() || {};
    if (!p.cwd)
        p.cwd = function () { return '/'; };
    if (!p.nextTick)
        p.nextTick = setImmediate$1.default;
    if (!p.emitWarning)
        p.emitWarning = function (message, type) {
            // tslint:disable-next-line:no-console
            console.warn("".concat(type).concat(type ? ': ' : '').concat(message));
        };
    if (!p.env)
        p.env = {};
    return p;
}
process$4.createProcess = createProcess;
process$4.default = createProcess();

var events = {exports: {}};

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };

var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN$2 = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}
events.exports = EventEmitter;
events.exports.once = once$2;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN$2(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN$2(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once$2(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    }
    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

var eventsExports = events.exports;

(function (exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        if (typeof b !== "function" && b !== null)
	            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.File = exports.Link = exports.Node = exports.SEP = void 0;
	var process_1 = process$4;
	var buffer_1 = buffer;
	var constants_1 = constants$1;
	var events_1 = eventsExports;
	var Stats_1 = Stats$2;
	var S_IFMT = constants_1.constants.S_IFMT, S_IFDIR = constants_1.constants.S_IFDIR, S_IFREG = constants_1.constants.S_IFREG, S_IFLNK = constants_1.constants.S_IFLNK, O_APPEND = constants_1.constants.O_APPEND;
	var getuid = function () { var _a, _b; return (_b = (_a = process_1.default.getuid) === null || _a === void 0 ? void 0 : _a.call(process_1.default)) !== null && _b !== void 0 ? _b : 0; };
	var getgid = function () { var _a, _b; return (_b = (_a = process_1.default.getgid) === null || _a === void 0 ? void 0 : _a.call(process_1.default)) !== null && _b !== void 0 ? _b : 0; };
	exports.SEP = '/';
	/**
	 * Node in a file system (like i-node, v-node).
	 */
	var Node = /** @class */ (function (_super) {
	    __extends(Node, _super);
	    function Node(ino, perm) {
	        if (perm === void 0) { perm = 438; }
	        var _this = _super.call(this) || this;
	        // User ID and group ID.
	        _this._uid = getuid();
	        _this._gid = getgid();
	        _this._atime = new Date();
	        _this._mtime = new Date();
	        _this._ctime = new Date();
	        _this._perm = 438; // Permissions `chmod`, `fchmod`
	        _this.mode = S_IFREG; // S_IFDIR, S_IFREG, etc.. (file by default?)
	        // Number of hard links pointing at this Node.
	        _this._nlink = 1;
	        _this._perm = perm;
	        _this.mode |= perm;
	        _this.ino = ino;
	        return _this;
	    }
	    Object.defineProperty(Node.prototype, "ctime", {
	        get: function () {
	            return this._ctime;
	        },
	        set: function (ctime) {
	            this._ctime = ctime;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "uid", {
	        get: function () {
	            return this._uid;
	        },
	        set: function (uid) {
	            this._uid = uid;
	            this.ctime = new Date();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "gid", {
	        get: function () {
	            return this._gid;
	        },
	        set: function (gid) {
	            this._gid = gid;
	            this.ctime = new Date();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "atime", {
	        get: function () {
	            return this._atime;
	        },
	        set: function (atime) {
	            this._atime = atime;
	            this.ctime = new Date();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "mtime", {
	        get: function () {
	            return this._mtime;
	        },
	        set: function (mtime) {
	            this._mtime = mtime;
	            this.ctime = new Date();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "perm", {
	        get: function () {
	            return this._perm;
	        },
	        set: function (perm) {
	            this._perm = perm;
	            this.ctime = new Date();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "nlink", {
	        get: function () {
	            return this._nlink;
	        },
	        set: function (nlink) {
	            this._nlink = nlink;
	            this.ctime = new Date();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Node.prototype.getString = function (encoding) {
	        if (encoding === void 0) { encoding = 'utf8'; }
	        this.atime = new Date();
	        return this.getBuffer().toString(encoding);
	    };
	    Node.prototype.setString = function (str) {
	        // this.setBuffer(bufferFrom(str, 'utf8'));
	        this.buf = (0, buffer_1.bufferFrom)(str, 'utf8');
	        this.touch();
	    };
	    Node.prototype.getBuffer = function () {
	        this.atime = new Date();
	        if (!this.buf)
	            this.setBuffer((0, buffer_1.bufferAllocUnsafe)(0));
	        return (0, buffer_1.bufferFrom)(this.buf); // Return a copy.
	    };
	    Node.prototype.setBuffer = function (buf) {
	        this.buf = (0, buffer_1.bufferFrom)(buf); // Creates a copy of data.
	        this.touch();
	    };
	    Node.prototype.getSize = function () {
	        return this.buf ? this.buf.length : 0;
	    };
	    Node.prototype.setModeProperty = function (property) {
	        this.mode = (this.mode & ~S_IFMT) | property;
	    };
	    Node.prototype.setIsFile = function () {
	        this.setModeProperty(S_IFREG);
	    };
	    Node.prototype.setIsDirectory = function () {
	        this.setModeProperty(S_IFDIR);
	    };
	    Node.prototype.setIsSymlink = function () {
	        this.setModeProperty(S_IFLNK);
	    };
	    Node.prototype.isFile = function () {
	        return (this.mode & S_IFMT) === S_IFREG;
	    };
	    Node.prototype.isDirectory = function () {
	        return (this.mode & S_IFMT) === S_IFDIR;
	    };
	    Node.prototype.isSymlink = function () {
	        // return !!this.symlink;
	        return (this.mode & S_IFMT) === S_IFLNK;
	    };
	    Node.prototype.makeSymlink = function (steps) {
	        this.symlink = steps;
	        this.setIsSymlink();
	    };
	    Node.prototype.write = function (buf, off, len, pos) {
	        if (off === void 0) { off = 0; }
	        if (len === void 0) { len = buf.length; }
	        if (pos === void 0) { pos = 0; }
	        if (!this.buf)
	            this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
	        if (pos + len > this.buf.length) {
	            var newBuf = (0, buffer_1.bufferAllocUnsafe)(pos + len);
	            this.buf.copy(newBuf, 0, 0, this.buf.length);
	            this.buf = newBuf;
	        }
	        buf.copy(this.buf, pos, off, off + len);
	        this.touch();
	        return len;
	    };
	    // Returns the number of bytes read.
	    Node.prototype.read = function (buf, off, len, pos) {
	        if (off === void 0) { off = 0; }
	        if (len === void 0) { len = buf.byteLength; }
	        if (pos === void 0) { pos = 0; }
	        this.atime = new Date();
	        if (!this.buf)
	            this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
	        var actualLen = len;
	        if (actualLen > buf.byteLength) {
	            actualLen = buf.byteLength;
	        }
	        if (actualLen + pos > this.buf.length) {
	            actualLen = this.buf.length - pos;
	        }
	        this.buf.copy(buf, off, pos, pos + actualLen);
	        return actualLen;
	    };
	    Node.prototype.truncate = function (len) {
	        if (len === void 0) { len = 0; }
	        if (!len)
	            this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
	        else {
	            if (!this.buf)
	                this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
	            if (len <= this.buf.length) {
	                this.buf = this.buf.slice(0, len);
	            }
	            else {
	                var buf = (0, buffer_1.bufferAllocUnsafe)(len);
	                this.buf.copy(buf);
	                buf.fill(0, this.buf.length);
	                this.buf = buf;
	            }
	        }
	        this.touch();
	    };
	    Node.prototype.chmod = function (perm) {
	        this.perm = perm;
	        this.mode = (this.mode & ~511) | perm;
	        this.touch();
	    };
	    Node.prototype.chown = function (uid, gid) {
	        this.uid = uid;
	        this.gid = gid;
	        this.touch();
	    };
	    Node.prototype.touch = function () {
	        this.mtime = new Date();
	        this.emit('change', this);
	    };
	    Node.prototype.canRead = function (uid, gid) {
	        if (uid === void 0) { uid = getuid(); }
	        if (gid === void 0) { gid = getgid(); }
	        if (this.perm & 4 /* S.IROTH */) {
	            return true;
	        }
	        if (gid === this.gid) {
	            if (this.perm & 32 /* S.IRGRP */) {
	                return true;
	            }
	        }
	        if (uid === this.uid) {
	            if (this.perm & 256 /* S.IRUSR */) {
	                return true;
	            }
	        }
	        return false;
	    };
	    Node.prototype.canWrite = function (uid, gid) {
	        if (uid === void 0) { uid = getuid(); }
	        if (gid === void 0) { gid = getgid(); }
	        if (this.perm & 2 /* S.IWOTH */) {
	            return true;
	        }
	        if (gid === this.gid) {
	            if (this.perm & 16 /* S.IWGRP */) {
	                return true;
	            }
	        }
	        if (uid === this.uid) {
	            if (this.perm & 128 /* S.IWUSR */) {
	                return true;
	            }
	        }
	        return false;
	    };
	    Node.prototype.del = function () {
	        this.emit('delete', this);
	    };
	    Node.prototype.toJSON = function () {
	        return {
	            ino: this.ino,
	            uid: this.uid,
	            gid: this.gid,
	            atime: this.atime.getTime(),
	            mtime: this.mtime.getTime(),
	            ctime: this.ctime.getTime(),
	            perm: this.perm,
	            mode: this.mode,
	            nlink: this.nlink,
	            symlink: this.symlink,
	            data: this.getString(),
	        };
	    };
	    return Node;
	}(events_1.EventEmitter));
	exports.Node = Node;
	/**
	 * Represents a hard link that points to an i-node `node`.
	 */
	var Link = /** @class */ (function (_super) {
	    __extends(Link, _super);
	    function Link(vol, parent, name) {
	        var _this = _super.call(this) || this;
	        _this.children = {};
	        // Path to this node as Array: ['usr', 'bin', 'node'].
	        _this._steps = [];
	        // "i-node" number of the node.
	        _this.ino = 0;
	        // Number of children.
	        _this.length = 0;
	        _this.vol = vol;
	        _this.parent = parent;
	        _this.name = name;
	        _this.syncSteps();
	        return _this;
	    }
	    Object.defineProperty(Link.prototype, "steps", {
	        get: function () {
	            return this._steps;
	        },
	        // Recursively sync children steps, e.g. in case of dir rename
	        set: function (val) {
	            this._steps = val;
	            for (var _i = 0, _a = Object.entries(this.children); _i < _a.length; _i++) {
	                var _b = _a[_i], child = _b[0], link = _b[1];
	                if (child === '.' || child === '..') {
	                    continue;
	                }
	                link === null || link === void 0 ? void 0 : link.syncSteps();
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Link.prototype.setNode = function (node) {
	        this.node = node;
	        this.ino = node.ino;
	    };
	    Link.prototype.getNode = function () {
	        return this.node;
	    };
	    Link.prototype.createChild = function (name, node) {
	        if (node === void 0) { node = this.vol.createNode(); }
	        var link = new Link(this.vol, this, name);
	        link.setNode(node);
	        if (node.isDirectory()) {
	            link.children['.'] = link;
	            link.getNode().nlink++;
	        }
	        this.setChild(name, link);
	        return link;
	    };
	    Link.prototype.setChild = function (name, link) {
	        if (link === void 0) { link = new Link(this.vol, this, name); }
	        this.children[name] = link;
	        link.parent = this;
	        this.length++;
	        var node = link.getNode();
	        if (node.isDirectory()) {
	            link.children['..'] = this;
	            this.getNode().nlink++;
	        }
	        this.getNode().mtime = new Date();
	        this.emit('child:add', link, this);
	        return link;
	    };
	    Link.prototype.deleteChild = function (link) {
	        var node = link.getNode();
	        if (node.isDirectory()) {
	            delete link.children['..'];
	            this.getNode().nlink--;
	        }
	        delete this.children[link.getName()];
	        this.length--;
	        this.getNode().mtime = new Date();
	        this.emit('child:delete', link, this);
	    };
	    Link.prototype.getChild = function (name) {
	        this.getNode().mtime = new Date();
	        if (Object.hasOwnProperty.call(this.children, name)) {
	            return this.children[name];
	        }
	    };
	    Link.prototype.getPath = function () {
	        return this.steps.join(exports.SEP);
	    };
	    Link.prototype.getName = function () {
	        return this.steps[this.steps.length - 1];
	    };
	    // del() {
	    //     const parent = this.parent;
	    //     if(parent) {
	    //         parent.deleteChild(link);
	    //     }
	    //     this.parent = null;
	    //     this.vol = null;
	    // }
	    /**
	     * Walk the tree path and return the `Link` at that location, if any.
	     * @param steps {string[]} Desired location.
	     * @param stop {number} Max steps to go into.
	     * @param i {number} Current step in the `steps` array.
	     *
	     * @return {Link|null}
	     */
	    Link.prototype.walk = function (steps, stop, i) {
	        if (stop === void 0) { stop = steps.length; }
	        if (i === void 0) { i = 0; }
	        if (i >= steps.length)
	            return this;
	        if (i >= stop)
	            return this;
	        var step = steps[i];
	        var link = this.getChild(step);
	        if (!link)
	            return null;
	        return link.walk(steps, stop, i + 1);
	    };
	    Link.prototype.toJSON = function () {
	        return {
	            steps: this.steps,
	            ino: this.ino,
	            children: Object.keys(this.children),
	        };
	    };
	    Link.prototype.syncSteps = function () {
	        this.steps = this.parent ? this.parent.steps.concat([this.name]) : [this.name];
	    };
	    return Link;
	}(events_1.EventEmitter));
	exports.Link = Link;
	/**
	 * Represents an open file (file descriptor) that points to a `Link` (Hard-link) and a `Node`.
	 */
	var File = /** @class */ (function () {
	    /**
	     * Open a Link-Node pair. `node` is provided separately as that might be a different node
	     * rather the one `link` points to, because it might be a symlink.
	     * @param link
	     * @param node
	     * @param flags
	     * @param fd
	     */
	    function File(link, node, flags, fd) {
	        /**
	         * A cursor/offset position in a file, where data will be written on write.
	         * User can "seek" this position.
	         */
	        this.position = 0;
	        this.link = link;
	        this.node = node;
	        this.flags = flags;
	        this.fd = fd;
	    }
	    File.prototype.getString = function (encoding) {
	        return this.node.getString();
	    };
	    File.prototype.setString = function (str) {
	        this.node.setString(str);
	    };
	    File.prototype.getBuffer = function () {
	        return this.node.getBuffer();
	    };
	    File.prototype.setBuffer = function (buf) {
	        this.node.setBuffer(buf);
	    };
	    File.prototype.getSize = function () {
	        return this.node.getSize();
	    };
	    File.prototype.truncate = function (len) {
	        this.node.truncate(len);
	    };
	    File.prototype.seekTo = function (position) {
	        this.position = position;
	    };
	    File.prototype.stats = function () {
	        return Stats_1.default.build(this.node);
	    };
	    File.prototype.write = function (buf, offset, length, position) {
	        if (offset === void 0) { offset = 0; }
	        if (length === void 0) { length = buf.length; }
	        if (typeof position !== 'number')
	            position = this.position;
	        if (this.flags & O_APPEND)
	            position = this.getSize();
	        var bytes = this.node.write(buf, offset, length, position);
	        this.position = position + bytes;
	        return bytes;
	    };
	    File.prototype.read = function (buf, offset, length, position) {
	        if (offset === void 0) { offset = 0; }
	        if (length === void 0) { length = buf.byteLength; }
	        if (typeof position !== 'number')
	            position = this.position;
	        var bytes = this.node.read(buf, offset, length, position);
	        this.position = position + bytes;
	        return bytes;
	    };
	    File.prototype.chmod = function (perm) {
	        this.node.chmod(perm);
	    };
	    File.prototype.chown = function (uid, gid) {
	        this.node.chown(uid, gid);
	    };
	    return File;
	}());
	exports.File = File; 
} (node));

var setTimeoutUnref$1 = {};

Object.defineProperty(setTimeoutUnref$1, "__esModule", { value: true });
/**
 * `setTimeoutUnref` is just like `setTimeout`,
 * only in Node's environment it will "unref" its macro task.
 */
function setTimeoutUnref(callback, time, args) {
    var ref = setTimeout.apply(typeof globalThis !== 'undefined' ? globalThis : commonjsGlobal, arguments);
    if (ref && typeof ref === 'object' && typeof ref.unref === 'function')
        ref.unref();
    return ref;
}
setTimeoutUnref$1.default = setTimeoutUnref;

var browser$1 = {exports: {}};

var stream = {exports: {}};

/*
  This file is a reduced and adapted version of the main lib/internal/per_context/primordials.js file defined at

  https://github.com/nodejs/node/blob/master/lib/internal/per_context/primordials.js

  Don't try to replace with the original file and keep it up to date with the upstream file.
*/
var primordials = {
  ArrayIsArray(self) {
    return Array.isArray(self)
  },
  ArrayPrototypeIncludes(self, el) {
    return self.includes(el)
  },
  ArrayPrototypeIndexOf(self, el) {
    return self.indexOf(el)
  },
  ArrayPrototypeJoin(self, sep) {
    return self.join(sep)
  },
  ArrayPrototypeMap(self, fn) {
    return self.map(fn)
  },
  ArrayPrototypePop(self, el) {
    return self.pop(el)
  },
  ArrayPrototypePush(self, el) {
    return self.push(el)
  },
  ArrayPrototypeSlice(self, start, end) {
    return self.slice(start, end)
  },
  Error,
  FunctionPrototypeCall(fn, thisArgs, ...args) {
    return fn.call(thisArgs, ...args)
  },
  FunctionPrototypeSymbolHasInstance(self, instance) {
    return Function.prototype[Symbol.hasInstance].call(self, instance)
  },
  MathFloor: Math.floor,
  Number,
  NumberIsInteger: Number.isInteger,
  NumberIsNaN: Number.isNaN,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberParseInt: Number.parseInt,
  ObjectDefineProperties(self, props) {
    return Object.defineProperties(self, props)
  },
  ObjectDefineProperty(self, name, prop) {
    return Object.defineProperty(self, name, prop)
  },
  ObjectGetOwnPropertyDescriptor(self, name) {
    return Object.getOwnPropertyDescriptor(self, name)
  },
  ObjectKeys(obj) {
    return Object.keys(obj)
  },
  ObjectSetPrototypeOf(target, proto) {
    return Object.setPrototypeOf(target, proto)
  },
  Promise,
  PromisePrototypeCatch(self, fn) {
    return self.catch(fn)
  },
  PromisePrototypeThen(self, thenFn, catchFn) {
    return self.then(thenFn, catchFn)
  },
  PromiseReject(err) {
    return Promise.reject(err)
  },
  PromiseResolve(val) {
    return Promise.resolve(val)
  },
  ReflectApply: Reflect.apply,
  RegExpPrototypeTest(self, value) {
    return self.test(value)
  },
  SafeSet: Set,
  String,
  StringPrototypeSlice(self, start, end) {
    return self.slice(start, end)
  },
  StringPrototypeToLowerCase(self) {
    return self.toLowerCase()
  },
  StringPrototypeToUpperCase(self) {
    return self.toUpperCase()
  },
  StringPrototypeTrim(self) {
    return self.trim()
  },
  Symbol,
  SymbolFor: Symbol.for,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIterator: Symbol.iterator,
  SymbolDispose: Symbol.dispose || Symbol('Symbol.dispose'),
  SymbolAsyncDispose: Symbol.asyncDispose || Symbol('Symbol.asyncDispose'),
  TypedArrayPrototypeSet(self, buf, len) {
    return self.set(buf, len)
  },
  Boolean: Boolean,
  Uint8Array
};

var util = {exports: {}};

var browser = {exports: {}};

/*globals self, window */

var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser.exports;
	hasRequiredBrowser = 1;

	/*eslint-disable @mysticatea/prettier */
	const { AbortController, AbortSignal } =
	    typeof self !== "undefined" ? self :
	    typeof window !== "undefined" ? window :
	    /* otherwise */ undefined;
	/*eslint-enable @mysticatea/prettier */

	browser.exports = AbortController;
	browser.exports.AbortSignal = AbortSignal;
	browser.exports.default = AbortController;
	return browser.exports;
}

(function (module) {

	const bufferModule = bufferRollup;
	const { kResistStopPropagation, SymbolDispose } = primordials;
	const AbortSignal = globalThis.AbortSignal || requireBrowser().AbortSignal;
	const AbortController = globalThis.AbortController || requireBrowser().AbortController;
	const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
	const Blob = globalThis.Blob || bufferModule.Blob;
	/* eslint-disable indent */
	const isBlob =
	  typeof Blob !== 'undefined'
	    ? function isBlob(b) {
	        // eslint-disable-next-line indent
	        return b instanceof Blob
	      }
	    : function isBlob(b) {
	        return false
	      };
	/* eslint-enable indent */

	const validateAbortSignal = (signal, name) => {
	  if (signal !== undefined && (signal === null || typeof signal !== 'object' || !('aborted' in signal))) {
	    throw new ERR_INVALID_ARG_TYPE(name, 'AbortSignal', signal)
	  }
	};
	const validateFunction = (value, name) => {
	  if (typeof value !== 'function') throw new ERR_INVALID_ARG_TYPE(name, 'Function', value)
	};

	// This is a simplified version of AggregateError
	class AggregateError extends Error {
	  constructor(errors) {
	    if (!Array.isArray(errors)) {
	      throw new TypeError(`Expected input to be an Array, got ${typeof errors}`)
	    }
	    let message = '';
	    for (let i = 0; i < errors.length; i++) {
	      message += `    ${errors[i].stack}\n`;
	    }
	    super(message);
	    this.name = 'AggregateError';
	    this.errors = errors;
	  }
	}
	module.exports = {
	  AggregateError,
	  kEmptyObject: Object.freeze({}),
	  once(callback) {
	    let called = false;
	    return function (...args) {
	      if (called) {
	        return
	      }
	      called = true;
	      callback.apply(this, args);
	    }
	  },
	  createDeferredPromise: function () {
	    let resolve;
	    let reject;

	    // eslint-disable-next-line promise/param-names
	    const promise = new Promise((res, rej) => {
	      resolve = res;
	      reject = rej;
	    });
	    return {
	      promise,
	      resolve,
	      reject
	    }
	  },
	  promisify(fn) {
	    return new Promise((resolve, reject) => {
	      fn((err, ...args) => {
	        if (err) {
	          return reject(err)
	        }
	        return resolve(...args)
	      });
	    })
	  },
	  debuglog() {
	    return function () {}
	  },
	  format(format, ...args) {
	    // Simplified version of https://nodejs.org/api/util.html#utilformatformat-args
	    return format.replace(/%([sdifj])/g, function (...[_unused, type]) {
	      const replacement = args.shift();
	      if (type === 'f') {
	        return replacement.toFixed(6)
	      } else if (type === 'j') {
	        return JSON.stringify(replacement)
	      } else if (type === 's' && typeof replacement === 'object') {
	        const ctor = replacement.constructor !== Object ? replacement.constructor.name : '';
	        return `${ctor} {}`.trim()
	      } else {
	        return replacement.toString()
	      }
	    })
	  },
	  inspect(value) {
	    // Vastly simplified version of https://nodejs.org/api/util.html#utilinspectobject-options
	    switch (typeof value) {
	      case 'string':
	        if (value.includes("'")) {
	          if (!value.includes('"')) {
	            return `"${value}"`
	          } else if (!value.includes('`') && !value.includes('${')) {
	            return `\`${value}\``
	          }
	        }
	        return `'${value}'`
	      case 'number':
	        if (isNaN(value)) {
	          return 'NaN'
	        } else if (Object.is(value, -0)) {
	          return String(value)
	        }
	        return value
	      case 'bigint':
	        return `${String(value)}n`
	      case 'boolean':
	      case 'undefined':
	        return String(value)
	      case 'object':
	        return '{}'
	    }
	  },
	  types: {
	    isAsyncFunction(fn) {
	      return fn instanceof AsyncFunction
	    },
	    isArrayBufferView(arr) {
	      return ArrayBuffer.isView(arr)
	    }
	  },
	  isBlob,
	  deprecate(fn, message) {
	    return fn
	  },
	  addAbortListener:
	    eventsExports.addAbortListener ||
	    function addAbortListener(signal, listener) {
	      if (signal === undefined) {
	        throw new ERR_INVALID_ARG_TYPE('signal', 'AbortSignal', signal)
	      }
	      validateAbortSignal(signal, 'signal');
	      validateFunction(listener, 'listener');
	      let removeEventListener;
	      if (signal.aborted) {
	        queueMicrotask(() => listener());
	      } else {
	        signal.addEventListener('abort', listener, {
	          __proto__: null,
	          once: true,
	          [kResistStopPropagation]: true
	        });
	        removeEventListener = () => {
	          signal.removeEventListener('abort', listener);
	        };
	      }
	      return {
	        __proto__: null,
	        [SymbolDispose]() {
	          var _removeEventListener
	          ;(_removeEventListener = removeEventListener) === null || _removeEventListener === undefined
	            ? undefined
	            : _removeEventListener();
	        }
	      }
	    },
	  AbortSignalAny:
	    AbortSignal.any ||
	    function AbortSignalAny(signals) {
	      // Fast path if there is only one signal.
	      if (signals.length === 1) {
	        return signals[0]
	      }
	      const ac = new AbortController();
	      const abort = () => ac.abort();
	      signals.forEach((signal) => {
	        validateAbortSignal(signal, 'signals');
	        signal.addEventListener('abort', abort, {
	          once: true
	        });
	      });
	      ac.signal.addEventListener(
	        'abort',
	        () => {
	          signals.forEach((signal) => signal.removeEventListener('abort', abort));
	        },
	        {
	          once: true
	        }
	      );
	      return ac.signal
	    }
	};
	module.exports.promisify.custom = Symbol.for('nodejs.util.promisify.custom'); 
} (util));

var utilExports = util.exports;

var operators = {};

const { format, inspect: inspect$1, AggregateError: CustomAggregateError } = utilExports;

/*
  This file is a reduced and adapted version of the main lib/internal/errors.js file defined at

  https://github.com/nodejs/node/blob/master/lib/internal/errors.js

  Don't try to replace with the original file and keep it up to date (starting from E(...) definitions)
  with the upstream file.
*/

const AggregateError$1 = globalThis.AggregateError || CustomAggregateError;
const kIsNodeError = Symbol('kIsNodeError');
const kTypes = [
  'string',
  'function',
  'number',
  'object',
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  'Function',
  'Object',
  'boolean',
  'bigint',
  'symbol'
];
const classRegExp = /^([A-Z][a-z0-9]*)+$/;
const nodeInternalPrefix = '__node_internal_';
const codes$1 = {};
function assert(value, message) {
  if (!value) {
    throw new codes$1.ERR_INTERNAL_ASSERTION(message)
  }
}

// Only use this for integers! Decimal numbers do not work with this function.
function addNumericalSeparator(val) {
  let res = '';
  let i = val.length;
  const start = val[0] === '-' ? 1 : 0;
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`;
  }
  return `${val.slice(0, i)}${res}`
}
function getMessage(key, msg, args) {
  if (typeof msg === 'function') {
    assert(
      msg.length <= args.length,
      // Default options do not count.
      `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${msg.length}).`
    );
    return msg(...args)
  }
  const expectedLength = (msg.match(/%[dfijoOs]/g) || []).length;
  assert(
    expectedLength === args.length,
    `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${expectedLength}).`
  );
  if (args.length === 0) {
    return msg
  }
  return format(msg, ...args)
}
function E(code, message, Base) {
  if (!Base) {
    Base = Error;
  }
  class NodeError extends Base {
    constructor(...args) {
      super(getMessage(code, message, args));
    }
    toString() {
      return `${this.name} [${code}]: ${this.message}`
    }
  }
  Object.defineProperties(NodeError.prototype, {
    name: {
      value: Base.name,
      writable: true,
      enumerable: false,
      configurable: true
    },
    toString: {
      value() {
        return `${this.name} [${code}]: ${this.message}`
      },
      writable: true,
      enumerable: false,
      configurable: true
    }
  });
  NodeError.prototype.code = code;
  NodeError.prototype[kIsNodeError] = true;
  codes$1[code] = NodeError;
}
function hideStackFrames$1(fn) {
  // We rename the functions that will be hidden to cut off the stacktrace
  // at the outermost one
  const hidden = nodeInternalPrefix + fn.name;
  Object.defineProperty(fn, 'name', {
    value: hidden
  });
  return fn
}
function aggregateTwoErrors$2(innerError, outerError) {
  if (innerError && outerError && innerError !== outerError) {
    if (Array.isArray(outerError.errors)) {
      // If `outerError` is already an `AggregateError`.
      outerError.errors.push(innerError);
      return outerError
    }
    const err = new AggregateError$1([outerError, innerError], outerError.message);
    err.code = outerError.code;
    return err
  }
  return innerError || outerError
}
let AbortError$5 = class AbortError extends Error {
  constructor(message = 'The operation was aborted', options = undefined) {
    if (options !== undefined && typeof options !== 'object') {
      throw new codes$1.ERR_INVALID_ARG_TYPE('options', 'Object', options)
    }
    super(message, options);
    this.code = 'ABORT_ERR';
    this.name = 'AbortError';
  }
};
E('ERR_ASSERTION', '%s', Error);
E(
  'ERR_INVALID_ARG_TYPE',
  (name, expected, actual) => {
    assert(typeof name === 'string', "'name' must be a string");
    if (!Array.isArray(expected)) {
      expected = [expected];
    }
    let msg = 'The ';
    if (name.endsWith(' argument')) {
      // For cases like 'first argument'
      msg += `${name} `;
    } else {
      msg += `"${name}" ${name.includes('.') ? 'property' : 'argument'} `;
    }
    msg += 'must be ';
    const types = [];
    const instances = [];
    const other = [];
    for (const value of expected) {
      assert(typeof value === 'string', 'All expected entries have to be of type string');
      if (kTypes.includes(value)) {
        types.push(value.toLowerCase());
      } else if (classRegExp.test(value)) {
        instances.push(value);
      } else {
        assert(value !== 'object', 'The value "object" should be written as "Object"');
        other.push(value);
      }
    }

    // Special handle `object` in case other instances are allowed to outline
    // the differences between each other.
    if (instances.length > 0) {
      const pos = types.indexOf('object');
      if (pos !== -1) {
        types.splice(types, pos, 1);
        instances.push('Object');
      }
    }
    if (types.length > 0) {
      switch (types.length) {
        case 1:
          msg += `of type ${types[0]}`;
          break
        case 2:
          msg += `one of type ${types[0]} or ${types[1]}`;
          break
        default: {
          const last = types.pop();
          msg += `one of type ${types.join(', ')}, or ${last}`;
        }
      }
      if (instances.length > 0 || other.length > 0) {
        msg += ' or ';
      }
    }
    if (instances.length > 0) {
      switch (instances.length) {
        case 1:
          msg += `an instance of ${instances[0]}`;
          break
        case 2:
          msg += `an instance of ${instances[0]} or ${instances[1]}`;
          break
        default: {
          const last = instances.pop();
          msg += `an instance of ${instances.join(', ')}, or ${last}`;
        }
      }
      if (other.length > 0) {
        msg += ' or ';
      }
    }
    switch (other.length) {
      case 0:
        break
      case 1:
        if (other[0].toLowerCase() !== other[0]) {
          msg += 'an ';
        }
        msg += `${other[0]}`;
        break
      case 2:
        msg += `one of ${other[0]} or ${other[1]}`;
        break
      default: {
        const last = other.pop();
        msg += `one of ${other.join(', ')}, or ${last}`;
      }
    }
    if (actual == null) {
      msg += `. Received ${actual}`;
    } else if (typeof actual === 'function' && actual.name) {
      msg += `. Received function ${actual.name}`;
    } else if (typeof actual === 'object') {
      var _actual$constructor;
      if (
        (_actual$constructor = actual.constructor) !== null &&
        _actual$constructor !== undefined &&
        _actual$constructor.name
      ) {
        msg += `. Received an instance of ${actual.constructor.name}`;
      } else {
        const inspected = inspect$1(actual, {
          depth: -1
        });
        msg += `. Received ${inspected}`;
      }
    } else {
      let inspected = inspect$1(actual, {
        colors: false
      });
      if (inspected.length > 25) {
        inspected = `${inspected.slice(0, 25)}...`;
      }
      msg += `. Received type ${typeof actual} (${inspected})`;
    }
    return msg
  },
  TypeError
);
E(
  'ERR_INVALID_ARG_VALUE',
  (name, value, reason = 'is invalid') => {
    let inspected = inspect$1(value);
    if (inspected.length > 128) {
      inspected = inspected.slice(0, 128) + '...';
    }
    const type = name.includes('.') ? 'property' : 'argument';
    return `The ${type} '${name}' ${reason}. Received ${inspected}`
  },
  TypeError
);
E(
  'ERR_INVALID_RETURN_VALUE',
  (input, name, value) => {
    var _value$constructor;
    const type =
      value !== null &&
      value !== undefined &&
      (_value$constructor = value.constructor) !== null &&
      _value$constructor !== undefined &&
      _value$constructor.name
        ? `instance of ${value.constructor.name}`
        : `type ${typeof value}`;
    return `Expected ${input} to be returned from the "${name}"` + ` function but got ${type}.`
  },
  TypeError
);
E(
  'ERR_MISSING_ARGS',
  (...args) => {
    assert(args.length > 0, 'At least one arg needs to be specified');
    let msg;
    const len = args.length;
    args = (Array.isArray(args) ? args : [args]).map((a) => `"${a}"`).join(' or ');
    switch (len) {
      case 1:
        msg += `The ${args[0]} argument`;
        break
      case 2:
        msg += `The ${args[0]} and ${args[1]} arguments`;
        break
      default:
        {
          const last = args.pop();
          msg += `The ${args.join(', ')}, and ${last} arguments`;
        }
        break
    }
    return `${msg} must be specified`
  },
  TypeError
);
E(
  'ERR_OUT_OF_RANGE',
  (str, range, input) => {
    assert(range, 'Missing "range" argument');
    let received;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input));
    } else if (typeof input === 'bigint') {
      received = String(input);
      if (input > 2n ** 32n || input < -(2n ** 32n)) {
        received = addNumericalSeparator(received);
      }
      received += 'n';
    } else {
      received = inspect$1(input);
    }
    return `The value of "${str}" is out of range. It must be ${range}. Received ${received}`
  },
  RangeError
);
E('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times', Error);
E('ERR_METHOD_NOT_IMPLEMENTED', 'The %s method is not implemented', Error);
E('ERR_STREAM_ALREADY_FINISHED', 'Cannot call %s after a stream was finished', Error);
E('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable', Error);
E('ERR_STREAM_DESTROYED', 'Cannot call %s after a stream was destroyed', Error);
E('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
E('ERR_STREAM_PREMATURE_CLOSE', 'Premature close', Error);
E('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF', Error);
E('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event', Error);
E('ERR_STREAM_WRITE_AFTER_END', 'write after end', Error);
E('ERR_UNKNOWN_ENCODING', 'Unknown encoding: %s', TypeError);
var errors = {
  AbortError: AbortError$5,
  aggregateTwoErrors: hideStackFrames$1(aggregateTwoErrors$2),
  hideStackFrames: hideStackFrames$1,
  codes: codes$1
};

/* eslint jsdoc/require-jsdoc: "error" */

const {
  ArrayIsArray: ArrayIsArray$2,
  ArrayPrototypeIncludes,
  ArrayPrototypeJoin,
  ArrayPrototypeMap,
  NumberIsInteger: NumberIsInteger$1,
  NumberIsNaN: NumberIsNaN$1,
  NumberMAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER,
  NumberParseInt,
  ObjectPrototypeHasOwnProperty,
  RegExpPrototypeExec,
  String: String$1,
  StringPrototypeToUpperCase,
  StringPrototypeTrim
} = primordials;
const {
  hideStackFrames,
  codes: { ERR_SOCKET_BAD_PORT, ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE$5, ERR_INVALID_ARG_VALUE: ERR_INVALID_ARG_VALUE$3, ERR_OUT_OF_RANGE: ERR_OUT_OF_RANGE$1, ERR_UNKNOWN_SIGNAL }
} = errors;
const { normalizeEncoding: normalizeEncoding$1 } = utilExports;
const { isAsyncFunction, isArrayBufferView } = utilExports.types;
const signals = {};

/**
 * @param {*} value
 * @returns {boolean}
 */
function isInt32(value) {
  return value === (value | 0)
}

/**
 * @param {*} value
 * @returns {boolean}
 */
function isUint32(value) {
  return value === value >>> 0
}
const octalReg = /^[0-7]+$/;
const modeDesc = 'must be a 32-bit unsigned integer or an octal string';

/**
 * Parse and validate values that will be converted into mode_t (the S_*
 * constants). Only valid numbers and octal strings are allowed. They could be
 * converted to 32-bit unsigned integers or non-negative signed integers in the
 * C++ land, but any value higher than 0o777 will result in platform-specific
 * behaviors.
 * @param {*} value Values to be validated
 * @param {string} name Name of the argument
 * @param {number} [def] If specified, will be returned for invalid values
 * @returns {number}
 */
function parseFileMode(value, name, def) {
  if (typeof value === 'undefined') {
    value = def;
  }
  if (typeof value === 'string') {
    if (RegExpPrototypeExec(octalReg, value) === null) {
      throw new ERR_INVALID_ARG_VALUE$3(name, value, modeDesc)
    }
    value = NumberParseInt(value, 8);
  }
  validateUint32(value, name);
  return value
}

/**
 * @callback validateInteger
 * @param {*} value
 * @param {string} name
 * @param {number} [min]
 * @param {number} [max]
 * @returns {asserts value is number}
 */

/** @type {validateInteger} */
const validateInteger$2 = hideStackFrames((value, name, min = NumberMIN_SAFE_INTEGER, max = NumberMAX_SAFE_INTEGER) => {
  if (typeof value !== 'number') throw new ERR_INVALID_ARG_TYPE$5(name, 'number', value)
  if (!NumberIsInteger$1(value)) throw new ERR_OUT_OF_RANGE$1(name, 'an integer', value)
  if (value < min || value > max) throw new ERR_OUT_OF_RANGE$1(name, `>= ${min} && <= ${max}`, value)
});

/**
 * @callback validateInt32
 * @param {*} value
 * @param {string} name
 * @param {number} [min]
 * @param {number} [max]
 * @returns {asserts value is number}
 */

/** @type {validateInt32} */
const validateInt32 = hideStackFrames((value, name, min = -2147483648, max = 2147483647) => {
  // The defaults for min and max correspond to the limits of 32-bit integers.
  if (typeof value !== 'number') {
    throw new ERR_INVALID_ARG_TYPE$5(name, 'number', value)
  }
  if (!NumberIsInteger$1(value)) {
    throw new ERR_OUT_OF_RANGE$1(name, 'an integer', value)
  }
  if (value < min || value > max) {
    throw new ERR_OUT_OF_RANGE$1(name, `>= ${min} && <= ${max}`, value)
  }
});

/**
 * @callback validateUint32
 * @param {*} value
 * @param {string} name
 * @param {number|boolean} [positive=false]
 * @returns {asserts value is number}
 */

/** @type {validateUint32} */
const validateUint32 = hideStackFrames((value, name, positive = false) => {
  if (typeof value !== 'number') {
    throw new ERR_INVALID_ARG_TYPE$5(name, 'number', value)
  }
  if (!NumberIsInteger$1(value)) {
    throw new ERR_OUT_OF_RANGE$1(name, 'an integer', value)
  }
  const min = positive ? 1 : 0;
  // 2 ** 32 === 4294967296
  const max = 4294967295;
  if (value < min || value > max) {
    throw new ERR_OUT_OF_RANGE$1(name, `>= ${min} && <= ${max}`, value)
  }
});

/**
 * @callback validateString
 * @param {*} value
 * @param {string} name
 * @returns {asserts value is string}
 */

/** @type {validateString} */
function validateString(value, name) {
  if (typeof value !== 'string') throw new ERR_INVALID_ARG_TYPE$5(name, 'string', value)
}

/**
 * @callback validateNumber
 * @param {*} value
 * @param {string} name
 * @param {number} [min]
 * @param {number} [max]
 * @returns {asserts value is number}
 */

/** @type {validateNumber} */
function validateNumber(value, name, min = undefined, max) {
  if (typeof value !== 'number') throw new ERR_INVALID_ARG_TYPE$5(name, 'number', value)
  if (
    (min != null && value < min) ||
    (max != null && value > max) ||
    ((min != null || max != null) && NumberIsNaN$1(value))
  ) {
    throw new ERR_OUT_OF_RANGE$1(
      name,
      `${min != null ? `>= ${min}` : ''}${min != null && max != null ? ' && ' : ''}${max != null ? `<= ${max}` : ''}`,
      value
    )
  }
}

/**
 * @callback validateOneOf
 * @template T
 * @param {T} value
 * @param {string} name
 * @param {T[]} oneOf
 */

/** @type {validateOneOf} */
const validateOneOf = hideStackFrames((value, name, oneOf) => {
  if (!ArrayPrototypeIncludes(oneOf, value)) {
    const allowed = ArrayPrototypeJoin(
      ArrayPrototypeMap(oneOf, (v) => (typeof v === 'string' ? `'${v}'` : String$1(v))),
      ', '
    );
    const reason = 'must be one of: ' + allowed;
    throw new ERR_INVALID_ARG_VALUE$3(name, value, reason)
  }
});

/**
 * @callback validateBoolean
 * @param {*} value
 * @param {string} name
 * @returns {asserts value is boolean}
 */

/** @type {validateBoolean} */
function validateBoolean$1(value, name) {
  if (typeof value !== 'boolean') throw new ERR_INVALID_ARG_TYPE$5(name, 'boolean', value)
}

/**
 * @param {any} options
 * @param {string} key
 * @param {boolean} defaultValue
 * @returns {boolean}
 */
function getOwnPropertyValueOrDefault(options, key, defaultValue) {
  return options == null || !ObjectPrototypeHasOwnProperty(options, key) ? defaultValue : options[key]
}

/**
 * @callback validateObject
 * @param {*} value
 * @param {string} name
 * @param {{
 *   allowArray?: boolean,
 *   allowFunction?: boolean,
 *   nullable?: boolean
 * }} [options]
 */

/** @type {validateObject} */
const validateObject$2 = hideStackFrames((value, name, options = null) => {
  const allowArray = getOwnPropertyValueOrDefault(options, 'allowArray', false);
  const allowFunction = getOwnPropertyValueOrDefault(options, 'allowFunction', false);
  const nullable = getOwnPropertyValueOrDefault(options, 'nullable', false);
  if (
    (!nullable && value === null) ||
    (!allowArray && ArrayIsArray$2(value)) ||
    (typeof value !== 'object' && (!allowFunction || typeof value !== 'function'))
  ) {
    throw new ERR_INVALID_ARG_TYPE$5(name, 'Object', value)
  }
});

/**
 * @callback validateDictionary - We are using the Web IDL Standard definition
 *                                of "dictionary" here, which means any value
 *                                whose Type is either Undefined, Null, or
 *                                Object (which includes functions).
 * @param {*} value
 * @param {string} name
 * @see https://webidl.spec.whatwg.org/#es-dictionary
 * @see https://tc39.es/ecma262/#table-typeof-operator-results
 */

/** @type {validateDictionary} */
const validateDictionary = hideStackFrames((value, name) => {
  if (value != null && typeof value !== 'object' && typeof value !== 'function') {
    throw new ERR_INVALID_ARG_TYPE$5(name, 'a dictionary', value)
  }
});

/**
 * @callback validateArray
 * @param {*} value
 * @param {string} name
 * @param {number} [minLength]
 * @returns {asserts value is any[]}
 */

/** @type {validateArray} */
const validateArray = hideStackFrames((value, name, minLength = 0) => {
  if (!ArrayIsArray$2(value)) {
    throw new ERR_INVALID_ARG_TYPE$5(name, 'Array', value)
  }
  if (value.length < minLength) {
    const reason = `must be longer than ${minLength}`;
    throw new ERR_INVALID_ARG_VALUE$3(name, value, reason)
  }
});

/**
 * @callback validateStringArray
 * @param {*} value
 * @param {string} name
 * @returns {asserts value is string[]}
 */

/** @type {validateStringArray} */
function validateStringArray(value, name) {
  validateArray(value, name);
  for (let i = 0; i < value.length; i++) {
    validateString(value[i], `${name}[${i}]`);
  }
}

/**
 * @callback validateBooleanArray
 * @param {*} value
 * @param {string} name
 * @returns {asserts value is boolean[]}
 */

/** @type {validateBooleanArray} */
function validateBooleanArray(value, name) {
  validateArray(value, name);
  for (let i = 0; i < value.length; i++) {
    validateBoolean$1(value[i], `${name}[${i}]`);
  }
}

/**
 * @callback validateAbortSignalArray
 * @param {*} value
 * @param {string} name
 * @returns {asserts value is AbortSignal[]}
 */

/** @type {validateAbortSignalArray} */
function validateAbortSignalArray(value, name) {
  validateArray(value, name);
  for (let i = 0; i < value.length; i++) {
    const signal = value[i];
    const indexedName = `${name}[${i}]`;
    if (signal == null) {
      throw new ERR_INVALID_ARG_TYPE$5(indexedName, 'AbortSignal', signal)
    }
    validateAbortSignal$3(signal, indexedName);
  }
}

/**
 * @param {*} signal
 * @param {string} [name='signal']
 * @returns {asserts signal is keyof signals}
 */
function validateSignalName(signal, name = 'signal') {
  validateString(signal, name);
  if (signals[signal] === undefined) {
    if (signals[StringPrototypeToUpperCase(signal)] !== undefined) {
      throw new ERR_UNKNOWN_SIGNAL(signal + ' (signals must use all capital letters)')
    }
    throw new ERR_UNKNOWN_SIGNAL(signal)
  }
}

/**
 * @callback validateBuffer
 * @param {*} buffer
 * @param {string} [name='buffer']
 * @returns {asserts buffer is ArrayBufferView}
 */

/** @type {validateBuffer} */
const validateBuffer = hideStackFrames((buffer, name = 'buffer') => {
  if (!isArrayBufferView(buffer)) {
    throw new ERR_INVALID_ARG_TYPE$5(name, ['Buffer', 'TypedArray', 'DataView'], buffer)
  }
});

/**
 * @param {string} data
 * @param {string} encoding
 */
function validateEncoding(data, encoding) {
  const normalizedEncoding = normalizeEncoding$1(encoding);
  const length = data.length;
  if (normalizedEncoding === 'hex' && length % 2 !== 0) {
    throw new ERR_INVALID_ARG_VALUE$3('encoding', encoding, `is invalid for data of length ${length}`)
  }
}

/**
 * Check that the port number is not NaN when coerced to a number,
 * is an integer and that it falls within the legal range of port numbers.
 * @param {*} port
 * @param {string} [name='Port']
 * @param {boolean} [allowZero=true]
 * @returns {number}
 */
function validatePort(port, name = 'Port', allowZero = true) {
  if (
    (typeof port !== 'number' && typeof port !== 'string') ||
    (typeof port === 'string' && StringPrototypeTrim(port).length === 0) ||
    +port !== +port >>> 0 ||
    port > 0xffff ||
    (port === 0 && !allowZero)
  ) {
    throw new ERR_SOCKET_BAD_PORT(name, port, allowZero)
  }
  return port | 0
}

/**
 * @callback validateAbortSignal
 * @param {*} signal
 * @param {string} name
 */

/** @type {validateAbortSignal} */
const validateAbortSignal$3 = hideStackFrames((signal, name) => {
  if (signal !== undefined && (signal === null || typeof signal !== 'object' || !('aborted' in signal))) {
    throw new ERR_INVALID_ARG_TYPE$5(name, 'AbortSignal', signal)
  }
});

/**
 * @callback validateFunction
 * @param {*} value
 * @param {string} name
 * @returns {asserts value is Function}
 */

/** @type {validateFunction} */
const validateFunction$2 = hideStackFrames((value, name) => {
  if (typeof value !== 'function') throw new ERR_INVALID_ARG_TYPE$5(name, 'Function', value)
});

/**
 * @callback validatePlainFunction
 * @param {*} value
 * @param {string} name
 * @returns {asserts value is Function}
 */

/** @type {validatePlainFunction} */
const validatePlainFunction = hideStackFrames((value, name) => {
  if (typeof value !== 'function' || isAsyncFunction(value)) throw new ERR_INVALID_ARG_TYPE$5(name, 'Function', value)
});

/**
 * @callback validateUndefined
 * @param {*} value
 * @param {string} name
 * @returns {asserts value is undefined}
 */

/** @type {validateUndefined} */
const validateUndefined = hideStackFrames((value, name) => {
  if (value !== undefined) throw new ERR_INVALID_ARG_TYPE$5(name, 'undefined', value)
});

/**
 * @template T
 * @param {T} value
 * @param {string} name
 * @param {T[]} union
 */
function validateUnion(value, name, union) {
  if (!ArrayPrototypeIncludes(union, value)) {
    throw new ERR_INVALID_ARG_TYPE$5(name, `('${ArrayPrototypeJoin(union, '|')}')`, value)
  }
}

/*
  The rules for the Link header field are described here:
  https://www.rfc-editor.org/rfc/rfc8288.html#section-3

  This regex validates any string surrounded by angle brackets
  (not necessarily a valid URI reference) followed by zero or more
  link-params separated by semicolons.
*/
const linkValueRegExp = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;

/**
 * @param {any} value
 * @param {string} name
 */
function validateLinkHeaderFormat(value, name) {
  if (typeof value === 'undefined' || !RegExpPrototypeExec(linkValueRegExp, value)) {
    throw new ERR_INVALID_ARG_VALUE$3(
      name,
      value,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    )
  }
}

/**
 * @param {any} hints
 * @return {string}
 */
function validateLinkHeaderValue(hints) {
  if (typeof hints === 'string') {
    validateLinkHeaderFormat(hints, 'hints');
    return hints
  } else if (ArrayIsArray$2(hints)) {
    const hintsLength = hints.length;
    let result = '';
    if (hintsLength === 0) {
      return result
    }
    for (let i = 0; i < hintsLength; i++) {
      const link = hints[i];
      validateLinkHeaderFormat(link, 'hints');
      result += link;
      if (i !== hintsLength - 1) {
        result += ', ';
      }
    }
    return result
  }
  throw new ERR_INVALID_ARG_VALUE$3(
    'hints',
    hints,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  )
}
var validators = {
  isInt32,
  isUint32,
  parseFileMode,
  validateArray,
  validateStringArray,
  validateBooleanArray,
  validateAbortSignalArray,
  validateBoolean: validateBoolean$1,
  validateBuffer,
  validateDictionary,
  validateEncoding,
  validateFunction: validateFunction$2,
  validateInt32,
  validateInteger: validateInteger$2,
  validateNumber,
  validateObject: validateObject$2,
  validateOneOf,
  validatePlainFunction,
  validatePort,
  validateSignalName,
  validateString,
  validateUint32,
  validateUndefined,
  validateUnion,
  validateAbortSignal: validateAbortSignal$3,
  validateLinkHeaderValue
};

var endOfStream = {exports: {}};

const { SymbolAsyncIterator: SymbolAsyncIterator$2, SymbolIterator: SymbolIterator$2, SymbolFor } = primordials;

// We need to use SymbolFor to make these globally available
// for interopt with readable-stream, i.e. readable-stream
// and node core needs to be able to read/write private state
// from each other for proper interoperability.
const kIsDestroyed$1 = SymbolFor('nodejs.stream.destroyed');
const kIsErrored = SymbolFor('nodejs.stream.errored');
const kIsReadable = SymbolFor('nodejs.stream.readable');
const kIsWritable = SymbolFor('nodejs.stream.writable');
const kIsDisturbed = SymbolFor('nodejs.stream.disturbed');
const kIsClosedPromise$1 = SymbolFor('nodejs.webstream.isClosedPromise');
const kControllerErrorFunction = SymbolFor('nodejs.webstream.controllerErrorFunction');
function isReadableNodeStream$2(obj, strict = false) {
  var _obj$_readableState;
  return !!(
    (
      obj &&
      typeof obj.pipe === 'function' &&
      typeof obj.on === 'function' &&
      (!strict || (typeof obj.pause === 'function' && typeof obj.resume === 'function')) &&
      (!obj._writableState ||
        ((_obj$_readableState = obj._readableState) === null || _obj$_readableState === undefined
          ? undefined
          : _obj$_readableState.readable) !== false) &&
      // Duplex
      (!obj._writableState || obj._readableState)
    ) // Writable has .pipe.
  )
}

function isWritableNodeStream$1(obj) {
  var _obj$_writableState;
  return !!(
    (
      obj &&
      typeof obj.write === 'function' &&
      typeof obj.on === 'function' &&
      (!obj._readableState ||
        ((_obj$_writableState = obj._writableState) === null || _obj$_writableState === undefined
          ? undefined
          : _obj$_writableState.writable) !== false)
    ) // Duplex
  )
}

function isDuplexNodeStream(obj) {
  return !!(
    obj &&
    typeof obj.pipe === 'function' &&
    obj._readableState &&
    typeof obj.on === 'function' &&
    typeof obj.write === 'function'
  )
}
function isNodeStream$4(obj) {
  return (
    obj &&
    (obj._readableState ||
      obj._writableState ||
      (typeof obj.write === 'function' && typeof obj.on === 'function') ||
      (typeof obj.pipe === 'function' && typeof obj.on === 'function'))
  )
}
function isReadableStream$3(obj) {
  return !!(
    obj &&
    !isNodeStream$4(obj) &&
    typeof obj.pipeThrough === 'function' &&
    typeof obj.getReader === 'function' &&
    typeof obj.cancel === 'function'
  )
}
function isWritableStream$2(obj) {
  return !!(obj && !isNodeStream$4(obj) && typeof obj.getWriter === 'function' && typeof obj.abort === 'function')
}
function isTransformStream$2(obj) {
  return !!(obj && !isNodeStream$4(obj) && typeof obj.readable === 'object' && typeof obj.writable === 'object')
}
function isWebStream$2(obj) {
  return isReadableStream$3(obj) || isWritableStream$2(obj) || isTransformStream$2(obj)
}
function isIterable$1(obj, isAsync) {
  if (obj == null) return false
  if (isAsync === true) return typeof obj[SymbolAsyncIterator$2] === 'function'
  if (isAsync === false) return typeof obj[SymbolIterator$2] === 'function'
  return typeof obj[SymbolAsyncIterator$2] === 'function' || typeof obj[SymbolIterator$2] === 'function'
}
function isDestroyed$1(stream) {
  if (!isNodeStream$4(stream)) return null
  const wState = stream._writableState;
  const rState = stream._readableState;
  const state = wState || rState;
  return !!(stream.destroyed || stream[kIsDestroyed$1] || (state !== null && state !== undefined && state.destroyed))
}

// Have been end():d.
function isWritableEnded(stream) {
  if (!isWritableNodeStream$1(stream)) return null
  if (stream.writableEnded === true) return true
  const wState = stream._writableState;
  if (wState !== null && wState !== undefined && wState.errored) return false
  if (typeof (wState === null || wState === undefined ? undefined : wState.ended) !== 'boolean') return null
  return wState.ended
}

// Have emitted 'finish'.
function isWritableFinished$1(stream, strict) {
  if (!isWritableNodeStream$1(stream)) return null
  if (stream.writableFinished === true) return true
  const wState = stream._writableState;
  if (wState !== null && wState !== undefined && wState.errored) return false
  if (typeof (wState === null || wState === undefined ? undefined : wState.finished) !== 'boolean') return null
  return !!(wState.finished || (strict === false && wState.ended === true && wState.length === 0))
}

// Have been push(null):d.
function isReadableEnded(stream) {
  if (!isReadableNodeStream$2(stream)) return null
  if (stream.readableEnded === true) return true
  const rState = stream._readableState;
  if (!rState || rState.errored) return false
  if (typeof (rState === null || rState === undefined ? undefined : rState.ended) !== 'boolean') return null
  return rState.ended
}

// Have emitted 'end'.
function isReadableFinished$2(stream, strict) {
  if (!isReadableNodeStream$2(stream)) return null
  const rState = stream._readableState;
  if (rState !== null && rState !== undefined && rState.errored) return false
  if (typeof (rState === null || rState === undefined ? undefined : rState.endEmitted) !== 'boolean') return null
  return !!(rState.endEmitted || (strict === false && rState.ended === true && rState.length === 0))
}
function isReadable$3(stream) {
  if (stream && stream[kIsReadable] != null) return stream[kIsReadable]
  if (typeof (stream === null || stream === undefined ? undefined : stream.readable) !== 'boolean') return null
  if (isDestroyed$1(stream)) return false
  return isReadableNodeStream$2(stream) && stream.readable && !isReadableFinished$2(stream)
}
function isWritable$3(stream) {
  if (stream && stream[kIsWritable] != null) return stream[kIsWritable]
  if (typeof (stream === null || stream === undefined ? undefined : stream.writable) !== 'boolean') return null
  if (isDestroyed$1(stream)) return false
  return isWritableNodeStream$1(stream) && stream.writable && !isWritableEnded(stream)
}
function isFinished$1(stream, opts) {
  if (!isNodeStream$4(stream)) {
    return null
  }
  if (isDestroyed$1(stream)) {
    return true
  }
  if ((opts === null || opts === undefined ? undefined : opts.readable) !== false && isReadable$3(stream)) {
    return false
  }
  if ((opts === null || opts === undefined ? undefined : opts.writable) !== false && isWritable$3(stream)) {
    return false
  }
  return true
}
function isWritableErrored$1(stream) {
  var _stream$_writableStat, _stream$_writableStat2;
  if (!isNodeStream$4(stream)) {
    return null
  }
  if (stream.writableErrored) {
    return stream.writableErrored
  }
  return (_stream$_writableStat =
    (_stream$_writableStat2 = stream._writableState) === null || _stream$_writableStat2 === undefined
      ? undefined
      : _stream$_writableStat2.errored) !== null && _stream$_writableStat !== undefined
    ? _stream$_writableStat
    : null
}
function isReadableErrored$1(stream) {
  var _stream$_readableStat, _stream$_readableStat2;
  if (!isNodeStream$4(stream)) {
    return null
  }
  if (stream.readableErrored) {
    return stream.readableErrored
  }
  return (_stream$_readableStat =
    (_stream$_readableStat2 = stream._readableState) === null || _stream$_readableStat2 === undefined
      ? undefined
      : _stream$_readableStat2.errored) !== null && _stream$_readableStat !== undefined
    ? _stream$_readableStat
    : null
}
function isClosed$1(stream) {
  if (!isNodeStream$4(stream)) {
    return null
  }
  if (typeof stream.closed === 'boolean') {
    return stream.closed
  }
  const wState = stream._writableState;
  const rState = stream._readableState;
  if (
    typeof (wState === null || wState === undefined ? undefined : wState.closed) === 'boolean' ||
    typeof (rState === null || rState === undefined ? undefined : rState.closed) === 'boolean'
  ) {
    return (
      (wState === null || wState === undefined ? undefined : wState.closed) ||
      (rState === null || rState === undefined ? undefined : rState.closed)
    )
  }
  if (typeof stream._closed === 'boolean' && isOutgoingMessage(stream)) {
    return stream._closed
  }
  return null
}
function isOutgoingMessage(stream) {
  return (
    typeof stream._closed === 'boolean' &&
    typeof stream._defaultKeepAlive === 'boolean' &&
    typeof stream._removedConnection === 'boolean' &&
    typeof stream._removedContLen === 'boolean'
  )
}
function isServerResponse(stream) {
  return typeof stream._sent100 === 'boolean' && isOutgoingMessage(stream)
}
function isServerRequest$1(stream) {
  var _stream$req;
  return (
    typeof stream._consuming === 'boolean' &&
    typeof stream._dumped === 'boolean' &&
    ((_stream$req = stream.req) === null || _stream$req === undefined ? undefined : _stream$req.upgradeOrConnect) ===
      undefined
  )
}
function willEmitClose(stream) {
  if (!isNodeStream$4(stream)) return null
  const wState = stream._writableState;
  const rState = stream._readableState;
  const state = wState || rState;
  return (
    (!state && isServerResponse(stream)) || !!(state && state.autoDestroy && state.emitClose && state.closed === false)
  )
}
function isDisturbed(stream) {
  var _stream$kIsDisturbed;
  return !!(
    stream &&
    ((_stream$kIsDisturbed = stream[kIsDisturbed]) !== null && _stream$kIsDisturbed !== undefined
      ? _stream$kIsDisturbed
      : stream.readableDidRead || stream.readableAborted)
  )
}
function isErrored(stream) {
  var _ref,
    _ref2,
    _ref3,
    _ref4,
    _ref5,
    _stream$kIsErrored,
    _stream$_readableStat3,
    _stream$_writableStat3,
    _stream$_readableStat4,
    _stream$_writableStat4;
  return !!(
    stream &&
    ((_ref =
      (_ref2 =
        (_ref3 =
          (_ref4 =
            (_ref5 =
              (_stream$kIsErrored = stream[kIsErrored]) !== null && _stream$kIsErrored !== undefined
                ? _stream$kIsErrored
                : stream.readableErrored) !== null && _ref5 !== undefined
              ? _ref5
              : stream.writableErrored) !== null && _ref4 !== undefined
            ? _ref4
            : (_stream$_readableStat3 = stream._readableState) === null || _stream$_readableStat3 === undefined
            ? undefined
            : _stream$_readableStat3.errorEmitted) !== null && _ref3 !== undefined
          ? _ref3
          : (_stream$_writableStat3 = stream._writableState) === null || _stream$_writableStat3 === undefined
          ? undefined
          : _stream$_writableStat3.errorEmitted) !== null && _ref2 !== undefined
        ? _ref2
        : (_stream$_readableStat4 = stream._readableState) === null || _stream$_readableStat4 === undefined
        ? undefined
        : _stream$_readableStat4.errored) !== null && _ref !== undefined
      ? _ref
      : (_stream$_writableStat4 = stream._writableState) === null || _stream$_writableStat4 === undefined
      ? undefined
      : _stream$_writableStat4.errored)
  )
}
var utils = {
  isDestroyed: isDestroyed$1,
  kIsDestroyed: kIsDestroyed$1,
  isDisturbed,
  kIsDisturbed,
  isErrored,
  kIsErrored,
  isReadable: isReadable$3,
  kIsReadable,
  kIsClosedPromise: kIsClosedPromise$1,
  kControllerErrorFunction,
  kIsWritable,
  isClosed: isClosed$1,
  isDuplexNodeStream,
  isFinished: isFinished$1,
  isIterable: isIterable$1,
  isReadableNodeStream: isReadableNodeStream$2,
  isReadableStream: isReadableStream$3,
  isReadableEnded,
  isReadableFinished: isReadableFinished$2,
  isReadableErrored: isReadableErrored$1,
  isNodeStream: isNodeStream$4,
  isWebStream: isWebStream$2,
  isWritable: isWritable$3,
  isWritableNodeStream: isWritableNodeStream$1,
  isWritableStream: isWritableStream$2,
  isWritableEnded,
  isWritableFinished: isWritableFinished$1,
  isWritableErrored: isWritableErrored$1,
  isServerRequest: isServerRequest$1,
  isServerResponse,
  willEmitClose,
  isTransformStream: isTransformStream$2
};

/* replacement start */

const process$3 = browserExports$1

/* replacement end */
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).

;const { AbortError: AbortError$4, codes } = errors;
const { ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE$4, ERR_STREAM_PREMATURE_CLOSE: ERR_STREAM_PREMATURE_CLOSE$1 } = codes;
const { kEmptyObject, once: once$1 } = utilExports;
const { validateAbortSignal: validateAbortSignal$2, validateFunction: validateFunction$1, validateObject: validateObject$1, validateBoolean } = validators;
const { Promise: Promise$3, PromisePrototypeThen: PromisePrototypeThen$2, SymbolDispose: SymbolDispose$1 } = primordials;
const {
  isClosed,
  isReadable: isReadable$2,
  isReadableNodeStream: isReadableNodeStream$1,
  isReadableStream: isReadableStream$2,
  isReadableFinished: isReadableFinished$1,
  isReadableErrored,
  isWritable: isWritable$2,
  isWritableNodeStream,
  isWritableStream: isWritableStream$1,
  isWritableFinished,
  isWritableErrored,
  isNodeStream: isNodeStream$3,
  willEmitClose: _willEmitClose,
  kIsClosedPromise
} = utils;
let addAbortListener$1;
function isRequest$1(stream) {
  return stream.setHeader && typeof stream.abort === 'function'
}
const nop = () => {};
function eos$2(stream, options, callback) {
  var _options$readable, _options$writable;
  if (arguments.length === 2) {
    callback = options;
    options = kEmptyObject;
  } else if (options == null) {
    options = kEmptyObject;
  } else {
    validateObject$1(options, 'options');
  }
  validateFunction$1(callback, 'callback');
  validateAbortSignal$2(options.signal, 'options.signal');
  callback = once$1(callback);
  if (isReadableStream$2(stream) || isWritableStream$1(stream)) {
    return eosWeb(stream, options, callback)
  }
  if (!isNodeStream$3(stream)) {
    throw new ERR_INVALID_ARG_TYPE$4('stream', ['ReadableStream', 'WritableStream', 'Stream'], stream)
  }
  const readable =
    (_options$readable = options.readable) !== null && _options$readable !== undefined
      ? _options$readable
      : isReadableNodeStream$1(stream);
  const writable =
    (_options$writable = options.writable) !== null && _options$writable !== undefined
      ? _options$writable
      : isWritableNodeStream(stream);
  const wState = stream._writableState;
  const rState = stream._readableState;
  const onlegacyfinish = () => {
    if (!stream.writable) {
      onfinish();
    }
  };

  // TODO (ronag): Improve soft detection to include core modules and
  // common ecosystem modules that do properly emit 'close' but fail
  // this generic check.
  let willEmitClose =
    _willEmitClose(stream) && isReadableNodeStream$1(stream) === readable && isWritableNodeStream(stream) === writable;
  let writableFinished = isWritableFinished(stream, false);
  const onfinish = () => {
    writableFinished = true;
    // Stream should not be destroyed here. If it is that
    // means that user space is doing something differently and
    // we cannot trust willEmitClose.
    if (stream.destroyed) {
      willEmitClose = false;
    }
    if (willEmitClose && (!stream.readable || readable)) {
      return
    }
    if (!readable || readableFinished) {
      callback.call(stream);
    }
  };
  let readableFinished = isReadableFinished$1(stream, false);
  const onend = () => {
    readableFinished = true;
    // Stream should not be destroyed here. If it is that
    // means that user space is doing something differently and
    // we cannot trust willEmitClose.
    if (stream.destroyed) {
      willEmitClose = false;
    }
    if (willEmitClose && (!stream.writable || writable)) {
      return
    }
    if (!writable || writableFinished) {
      callback.call(stream);
    }
  };
  const onerror = (err) => {
    callback.call(stream, err);
  };
  let closed = isClosed(stream);
  const onclose = () => {
    closed = true;
    const errored = isWritableErrored(stream) || isReadableErrored(stream);
    if (errored && typeof errored !== 'boolean') {
      return callback.call(stream, errored)
    }
    if (readable && !readableFinished && isReadableNodeStream$1(stream, true)) {
      if (!isReadableFinished$1(stream, false)) return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE$1())
    }
    if (writable && !writableFinished) {
      if (!isWritableFinished(stream, false)) return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE$1())
    }
    callback.call(stream);
  };
  const onclosed = () => {
    closed = true;
    const errored = isWritableErrored(stream) || isReadableErrored(stream);
    if (errored && typeof errored !== 'boolean') {
      return callback.call(stream, errored)
    }
    callback.call(stream);
  };
  const onrequest = () => {
    stream.req.on('finish', onfinish);
  };
  if (isRequest$1(stream)) {
    stream.on('complete', onfinish);
    if (!willEmitClose) {
      stream.on('abort', onclose);
    }
    if (stream.req) {
      onrequest();
    } else {
      stream.on('request', onrequest);
    }
  } else if (writable && !wState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  // Not all streams will emit 'close' after 'aborted'.
  if (!willEmitClose && typeof stream.aborted === 'boolean') {
    stream.on('aborted', onclose);
  }
  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (options.error !== false) {
    stream.on('error', onerror);
  }
  stream.on('close', onclose);
  if (closed) {
    process$3.nextTick(onclose);
  } else if (
    (wState !== null && wState !== undefined && wState.errorEmitted) ||
    (rState !== null && rState !== undefined && rState.errorEmitted)
  ) {
    if (!willEmitClose) {
      process$3.nextTick(onclosed);
    }
  } else if (
    !readable &&
    (!willEmitClose || isReadable$2(stream)) &&
    (writableFinished || isWritable$2(stream) === false)
  ) {
    process$3.nextTick(onclosed);
  } else if (
    !writable &&
    (!willEmitClose || isWritable$2(stream)) &&
    (readableFinished || isReadable$2(stream) === false)
  ) {
    process$3.nextTick(onclosed);
  } else if (rState && stream.req && stream.aborted) {
    process$3.nextTick(onclosed);
  }
  const cleanup = () => {
    callback = nop;
    stream.removeListener('aborted', onclose);
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
  if (options.signal && !closed) {
    const abort = () => {
      // Keep it because cleanup removes it.
      const endCallback = callback;
      cleanup();
      endCallback.call(
        stream,
        new AbortError$4(undefined, {
          cause: options.signal.reason
        })
      );
    };
    if (options.signal.aborted) {
      process$3.nextTick(abort);
    } else {
      addAbortListener$1 = addAbortListener$1 || utilExports.addAbortListener;
      const disposable = addAbortListener$1(options.signal, abort);
      const originalCallback = callback;
      callback = once$1((...args) => {
        disposable[SymbolDispose$1]();
        originalCallback.apply(stream, args);
      });
    }
  }
  return cleanup
}
function eosWeb(stream, options, callback) {
  let isAborted = false;
  let abort = nop;
  if (options.signal) {
    abort = () => {
      isAborted = true;
      callback.call(
        stream,
        new AbortError$4(undefined, {
          cause: options.signal.reason
        })
      );
    };
    if (options.signal.aborted) {
      process$3.nextTick(abort);
    } else {
      addAbortListener$1 = addAbortListener$1 || utilExports.addAbortListener;
      const disposable = addAbortListener$1(options.signal, abort);
      const originalCallback = callback;
      callback = once$1((...args) => {
        disposable[SymbolDispose$1]();
        originalCallback.apply(stream, args);
      });
    }
  }
  const resolverFn = (...args) => {
    if (!isAborted) {
      process$3.nextTick(() => callback.apply(stream, args));
    }
  };
  PromisePrototypeThen$2(stream[kIsClosedPromise].promise, resolverFn, resolverFn);
  return nop
}
function finished$1(stream, opts) {
  var _opts;
  let autoCleanup = false;
  if (opts === null) {
    opts = kEmptyObject;
  }
  if ((_opts = opts) !== null && _opts !== undefined && _opts.cleanup) {
    validateBoolean(opts.cleanup, 'cleanup');
    autoCleanup = opts.cleanup;
  }
  return new Promise$3((resolve, reject) => {
    const cleanup = eos$2(stream, opts, (err) => {
      if (autoCleanup) {
        cleanup();
      }
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  })
}
endOfStream.exports = eos$2;
endOfStream.exports.finished = finished$1;

var endOfStreamExports = endOfStream.exports;

/* replacement start */

const process$2 = browserExports$1;

/* replacement end */

const {
  aggregateTwoErrors: aggregateTwoErrors$1,
  codes: { ERR_MULTIPLE_CALLBACK },
  AbortError: AbortError$3
} = errors;
const { Symbol: Symbol$3 } = primordials;
const { kIsDestroyed, isDestroyed, isFinished, isServerRequest } = utils;
const kDestroy = Symbol$3('kDestroy');
const kConstruct = Symbol$3('kConstruct');
function checkError(err, w, r) {
  if (err) {
    // Avoid V8 leak, https://github.com/nodejs/node/pull/34103#issuecomment-652002364
    err.stack; // eslint-disable-line no-unused-expressions

    if (w && !w.errored) {
      w.errored = err;
    }
    if (r && !r.errored) {
      r.errored = err;
    }
  }
}

// Backwards compat. cb() is undocumented and unused in core but
// unfortunately might be used by modules.
function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  // With duplex streams we use the writable side for state.
  const s = w || r;
  if ((w !== null && w !== undefined && w.destroyed) || (r !== null && r !== undefined && r.destroyed)) {
    if (typeof cb === 'function') {
      cb();
    }
    return this
  }

  // We set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  checkError(err, w, r);
  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }

  // If still constructing then defer calling _destroy.
  if (!s.constructed) {
    this.once(kDestroy, function (er) {
      _destroy(this, aggregateTwoErrors$1(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }
  return this
}
function _destroy(self, err, cb) {
  let called = false;
  function onDestroy(err) {
    if (called) {
      return
    }
    called = true;
    const r = self._readableState;
    const w = self._writableState;
    checkError(err, w, r);
    if (w) {
      w.closed = true;
    }
    if (r) {
      r.closed = true;
    }
    if (typeof cb === 'function') {
      cb(err);
    }
    if (err) {
      process$2.nextTick(emitErrorCloseNT, self, err);
    } else {
      process$2.nextTick(emitCloseNT, self);
    }
  }
  try {
    self._destroy(err || null, onDestroy);
  } catch (err) {
    onDestroy(err);
  }
}
function emitErrorCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}
function emitCloseNT(self) {
  const r = self._readableState;
  const w = self._writableState;
  if (w) {
    w.closeEmitted = true;
  }
  if (r) {
    r.closeEmitted = true;
  }
  if ((w !== null && w !== undefined && w.emitClose) || (r !== null && r !== undefined && r.emitClose)) {
    self.emit('close');
  }
}
function emitErrorNT(self, err) {
  const r = self._readableState;
  const w = self._writableState;
  if ((w !== null && w !== undefined && w.errorEmitted) || (r !== null && r !== undefined && r.errorEmitted)) {
    return
  }
  if (w) {
    w.errorEmitted = true;
  }
  if (r) {
    r.errorEmitted = true;
  }
  self.emit('error', err);
}
function undestroy() {
  const r = this._readableState;
  const w = this._writableState;
  if (r) {
    r.constructed = true;
    r.closed = false;
    r.closeEmitted = false;
    r.destroyed = false;
    r.errored = null;
    r.errorEmitted = false;
    r.reading = false;
    r.ended = r.readable === false;
    r.endEmitted = r.readable === false;
  }
  if (w) {
    w.constructed = true;
    w.destroyed = false;
    w.closed = false;
    w.closeEmitted = false;
    w.errored = null;
    w.errorEmitted = false;
    w.finalCalled = false;
    w.prefinished = false;
    w.ended = w.writable === false;
    w.ending = w.writable === false;
    w.finished = w.writable === false;
  }
}
function errorOrDestroy(stream, err, sync) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.

  const r = stream._readableState;
  const w = stream._writableState;
  if ((w !== null && w !== undefined && w.destroyed) || (r !== null && r !== undefined && r.destroyed)) {
    return this
  }
  if ((r !== null && r !== undefined && r.autoDestroy) || (w !== null && w !== undefined && w.autoDestroy))
    stream.destroy(err);
  else if (err) {
    // Avoid V8 leak, https://github.com/nodejs/node/pull/34103#issuecomment-652002364
    err.stack; // eslint-disable-line no-unused-expressions

    if (w && !w.errored) {
      w.errored = err;
    }
    if (r && !r.errored) {
      r.errored = err;
    }
    if (sync) {
      process$2.nextTick(emitErrorNT, stream, err);
    } else {
      emitErrorNT(stream, err);
    }
  }
}
function construct(stream, cb) {
  if (typeof stream._construct !== 'function') {
    return
  }
  const r = stream._readableState;
  const w = stream._writableState;
  if (r) {
    r.constructed = false;
  }
  if (w) {
    w.constructed = false;
  }
  stream.once(kConstruct, cb);
  if (stream.listenerCount(kConstruct) > 1) {
    // Duplex
    return
  }
  process$2.nextTick(constructNT, stream);
}
function constructNT(stream) {
  let called = false;
  function onConstruct(err) {
    if (called) {
      errorOrDestroy(stream, err !== null && err !== undefined ? err : new ERR_MULTIPLE_CALLBACK());
      return
    }
    called = true;
    const r = stream._readableState;
    const w = stream._writableState;
    const s = w || r;
    if (r) {
      r.constructed = true;
    }
    if (w) {
      w.constructed = true;
    }
    if (s.destroyed) {
      stream.emit(kDestroy, err);
    } else if (err) {
      errorOrDestroy(stream, err, true);
    } else {
      process$2.nextTick(emitConstructNT, stream);
    }
  }
  try {
    stream._construct((err) => {
      process$2.nextTick(onConstruct, err);
    });
  } catch (err) {
    process$2.nextTick(onConstruct, err);
  }
}
function emitConstructNT(stream) {
  stream.emit(kConstruct);
}
function isRequest(stream) {
  return (stream === null || stream === undefined ? undefined : stream.setHeader) && typeof stream.abort === 'function'
}
function emitCloseLegacy(stream) {
  stream.emit('close');
}
function emitErrorCloseLegacy(stream, err) {
  stream.emit('error', err);
  process$2.nextTick(emitCloseLegacy, stream);
}

// Normalize destroy for legacy.
function destroyer$2(stream, err) {
  if (!stream || isDestroyed(stream)) {
    return
  }
  if (!err && !isFinished(stream)) {
    err = new AbortError$3();
  }

  // TODO: Remove isRequest branches.
  if (isServerRequest(stream)) {
    stream.socket = null;
    stream.destroy(err);
  } else if (isRequest(stream)) {
    stream.abort();
  } else if (isRequest(stream.req)) {
    stream.req.abort();
  } else if (typeof stream.destroy === 'function') {
    stream.destroy(err);
  } else if (typeof stream.close === 'function') {
    // TODO: Don't lose err?
    stream.close();
  } else if (err) {
    process$2.nextTick(emitErrorCloseLegacy, stream, err);
  } else {
    process$2.nextTick(emitCloseLegacy, stream);
  }
  if (!stream.destroyed) {
    stream[kIsDestroyed] = true;
  }
}
var destroy_1 = {
  construct,
  destroyer: destroyer$2,
  destroy,
  undestroy,
  errorOrDestroy
};

const { ArrayIsArray: ArrayIsArray$1, ObjectSetPrototypeOf: ObjectSetPrototypeOf$2 } = primordials;
const { EventEmitter: EE } = eventsExports;
function Stream(opts) {
  EE.call(this, opts);
}
ObjectSetPrototypeOf$2(Stream.prototype, EE.prototype);
ObjectSetPrototypeOf$2(Stream, EE);
Stream.prototype.pipe = function (dest, options) {
  const source = this;
  function ondata(chunk) {
    if (dest.writable && dest.write(chunk) === false && source.pause) {
      source.pause();
    }
  }
  source.on('data', ondata);
  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }
  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }
  let didOnEnd = false;
  function onend() {
    if (didOnEnd) return
    didOnEnd = true;
    dest.end();
  }
  function onclose() {
    if (didOnEnd) return
    didOnEnd = true;
    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // Don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      this.emit('error', er);
    }
  }
  prependListener(source, 'error', onerror);
  prependListener(dest, 'error', onerror);

  // Remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);
    source.removeListener('end', onend);
    source.removeListener('close', onclose);
    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);
    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);
    dest.removeListener('close', cleanup);
  }
  source.on('end', cleanup);
  source.on('close', cleanup);
  dest.on('close', cleanup);
  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest
};
function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn)

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
  else if (ArrayIsArray$1(emitter._events[event])) emitter._events[event].unshift(fn);
  else emitter._events[event] = [fn, emitter._events[event]];
}
var legacy = {
  Stream,
  prependListener
};

var addAbortSignal = {exports: {}};

(function (module) {

	const { SymbolDispose } = primordials;
	const { AbortError, codes } = errors;
	const { isNodeStream, isWebStream, kControllerErrorFunction } = utils;
	const eos = endOfStreamExports;
	const { ERR_INVALID_ARG_TYPE } = codes;
	let addAbortListener;

	// This method is inlined here for readable-stream
	// It also does not allow for signal to not exist on the stream
	// https://github.com/nodejs/node/pull/36061#discussion_r533718029
	const validateAbortSignal = (signal, name) => {
	  if (typeof signal !== 'object' || !('aborted' in signal)) {
	    throw new ERR_INVALID_ARG_TYPE(name, 'AbortSignal', signal)
	  }
	};
	module.exports.addAbortSignal = function addAbortSignal(signal, stream) {
	  validateAbortSignal(signal, 'signal');
	  if (!isNodeStream(stream) && !isWebStream(stream)) {
	    throw new ERR_INVALID_ARG_TYPE('stream', ['ReadableStream', 'WritableStream', 'Stream'], stream)
	  }
	  return module.exports.addAbortSignalNoValidate(signal, stream)
	};
	module.exports.addAbortSignalNoValidate = function (signal, stream) {
	  if (typeof signal !== 'object' || !('aborted' in signal)) {
	    return stream
	  }
	  const onAbort = isNodeStream(stream)
	    ? () => {
	        stream.destroy(
	          new AbortError(undefined, {
	            cause: signal.reason
	          })
	        );
	      }
	    : () => {
	        stream[kControllerErrorFunction](
	          new AbortError(undefined, {
	            cause: signal.reason
	          })
	        );
	      };
	  if (signal.aborted) {
	    onAbort();
	  } else {
	    addAbortListener = addAbortListener || utilExports.addAbortListener;
	    const disposable = addAbortListener(signal, onAbort);
	    eos(stream, disposable[SymbolDispose]);
	  }
	  return stream
	}; 
} (addAbortSignal));

var addAbortSignalExports = addAbortSignal.exports;

const { StringPrototypeSlice, SymbolIterator: SymbolIterator$1, TypedArrayPrototypeSet, Uint8Array: Uint8Array$1 } = primordials;
const { Buffer: Buffer$3 } = bufferRollup;
const { inspect } = utilExports;
var buffer_list = class BufferList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(v) {
    const entry = {
      data: v,
      next: null
    };
    if (this.length > 0) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
    ++this.length;
  }
  unshift(v) {
    const entry = {
      data: v,
      next: this.head
    };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  }
  shift() {
    if (this.length === 0) return
    const ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;
    else this.head = this.head.next;
    --this.length;
    return ret
  }
  clear() {
    this.head = this.tail = null;
    this.length = 0;
  }
  join(s) {
    if (this.length === 0) return ''
    let p = this.head;
    let ret = '' + p.data;
    while ((p = p.next) !== null) ret += s + p.data;
    return ret
  }
  concat(n) {
    if (this.length === 0) return Buffer$3.alloc(0)
    const ret = Buffer$3.allocUnsafe(n >>> 0);
    let p = this.head;
    let i = 0;
    while (p) {
      TypedArrayPrototypeSet(ret, p.data, i);
      i += p.data.length;
      p = p.next;
    }
    return ret
  }

  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(n, hasStrings) {
    const data = this.head.data;
    if (n < data.length) {
      // `slice` is the same for buffers and strings.
      const slice = data.slice(0, n);
      this.head.data = data.slice(n);
      return slice
    }
    if (n === data.length) {
      // First chunk is a perfect match.
      return this.shift()
    }
    // Result spans more than one buffer.
    return hasStrings ? this._getString(n) : this._getBuffer(n)
  }
  first() {
    return this.head.data
  }
  *[SymbolIterator$1]() {
    for (let p = this.head; p; p = p.next) {
      yield p.data;
    }
  }

  // Consumes a specified amount of characters from the buffered data.
  _getString(n) {
    let ret = '';
    let p = this.head;
    let c = 0;
    do {
      const str = p.data;
      if (n > str.length) {
        ret += str;
        n -= str.length;
      } else {
        if (n === str.length) {
          ret += str;
          ++c;
          if (p.next) this.head = p.next;
          else this.head = this.tail = null;
        } else {
          ret += StringPrototypeSlice(str, 0, n);
          this.head = p;
          p.data = StringPrototypeSlice(str, n);
        }
        break
      }
      ++c;
    } while ((p = p.next) !== null)
    this.length -= c;
    return ret
  }

  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(n) {
    const ret = Buffer$3.allocUnsafe(n);
    const retLen = n;
    let p = this.head;
    let c = 0;
    do {
      const buf = p.data;
      if (n > buf.length) {
        TypedArrayPrototypeSet(ret, buf, retLen - n);
        n -= buf.length;
      } else {
        if (n === buf.length) {
          TypedArrayPrototypeSet(ret, buf, retLen - n);
          ++c;
          if (p.next) this.head = p.next;
          else this.head = this.tail = null;
        } else {
          TypedArrayPrototypeSet(ret, new Uint8Array$1(buf.buffer, buf.byteOffset, n), retLen - n);
          this.head = p;
          p.data = buf.slice(n);
        }
        break
      }
      ++c;
    } while ((p = p.next) !== null)
    this.length -= c;
    return ret
  }

  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for('nodejs.util.inspect.custom')](_, options) {
    return inspect(this, {
      ...options,
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: false
    })
  }
};

const { MathFloor: MathFloor$1, NumberIsInteger } = primordials;
const { validateInteger: validateInteger$1 } = validators;
const { ERR_INVALID_ARG_VALUE: ERR_INVALID_ARG_VALUE$2 } = errors.codes;
let defaultHighWaterMarkBytes = 16 * 1024;
let defaultHighWaterMarkObjectMode = 16;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null
}
function getDefaultHighWaterMark(objectMode) {
  return objectMode ? defaultHighWaterMarkObjectMode : defaultHighWaterMarkBytes
}
function setDefaultHighWaterMark(objectMode, value) {
  validateInteger$1(value, 'value', 0);
  if (objectMode) {
    defaultHighWaterMarkObjectMode = value;
  } else {
    defaultHighWaterMarkBytes = value;
  }
}
function getHighWaterMark$1(state, options, duplexKey, isDuplex) {
  const hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
  if (hwm != null) {
    if (!NumberIsInteger(hwm) || hwm < 0) {
      const name = isDuplex ? `options.${duplexKey}` : 'options.highWaterMark';
      throw new ERR_INVALID_ARG_VALUE$2(name, hwm)
    }
    return MathFloor$1(hwm)
  }

  // Default value
  return getDefaultHighWaterMark(state.objectMode)
}
var state = {
  getHighWaterMark: getHighWaterMark$1,
  getDefaultHighWaterMark,
  setDefaultHighWaterMark
};

var string_decoder = {};

var safeBuffer = {exports: {}};

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

(function (module, exports) {
	/* eslint-disable node/no-deprecated-api */
	var buffer = bufferRollup;
	var Buffer = buffer.Buffer;

	// alternative to using Object.keys for old browsers
	function copyProps (src, dst) {
	  for (var key in src) {
	    dst[key] = src[key];
	  }
	}
	if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
	  module.exports = buffer;
	} else {
	  // Copy properties from require('buffer')
	  copyProps(buffer, exports);
	  exports.Buffer = SafeBuffer;
	}

	function SafeBuffer (arg, encodingOrOffset, length) {
	  return Buffer(arg, encodingOrOffset, length)
	}

	SafeBuffer.prototype = Object.create(Buffer.prototype);

	// Copy static methods from Buffer
	copyProps(Buffer, SafeBuffer);

	SafeBuffer.from = function (arg, encodingOrOffset, length) {
	  if (typeof arg === 'number') {
	    throw new TypeError('Argument must not be a number')
	  }
	  return Buffer(arg, encodingOrOffset, length)
	};

	SafeBuffer.alloc = function (size, fill, encoding) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  var buf = Buffer(size);
	  if (fill !== undefined) {
	    if (typeof encoding === 'string') {
	      buf.fill(fill, encoding);
	    } else {
	      buf.fill(fill);
	    }
	  } else {
	    buf.fill(0);
	  }
	  return buf
	};

	SafeBuffer.allocUnsafe = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return Buffer(size)
	};

	SafeBuffer.allocUnsafeSlow = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return buffer.SlowBuffer(size)
	}; 
} (safeBuffer, safeBuffer.exports));

var safeBufferExports = safeBuffer.exports;

/*<replacement>*/

var Buffer$2 = safeBufferExports.Buffer;
/*</replacement>*/

var isEncoding = Buffer$2.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer$2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
string_decoder.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer$2.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/* replacement start */

const process$1 = browserExports$1;

/* replacement end */

const { PromisePrototypeThen: PromisePrototypeThen$1, SymbolAsyncIterator: SymbolAsyncIterator$1, SymbolIterator } = primordials;
const { Buffer: Buffer$1 } = bufferRollup;
const { ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE$3, ERR_STREAM_NULL_VALUES } = errors.codes;
function from(Readable, iterable, opts) {
  let iterator;
  if (typeof iterable === 'string' || iterable instanceof Buffer$1) {
    return new Readable({
      objectMode: true,
      ...opts,
      read() {
        this.push(iterable);
        this.push(null);
      }
    })
  }
  let isAsync;
  if (iterable && iterable[SymbolAsyncIterator$1]) {
    isAsync = true;
    iterator = iterable[SymbolAsyncIterator$1]();
  } else if (iterable && iterable[SymbolIterator]) {
    isAsync = false;
    iterator = iterable[SymbolIterator]();
  } else {
    throw new ERR_INVALID_ARG_TYPE$3('iterable', ['Iterable'], iterable)
  }
  const readable = new Readable({
    objectMode: true,
    highWaterMark: 1,
    // TODO(ronag): What options should be allowed?
    ...opts
  });

  // Flag to protect against _read
  // being called before last iteration completion.
  let reading = false;
  readable._read = function () {
    if (!reading) {
      reading = true;
      next();
    }
  };
  readable._destroy = function (error, cb) {
    PromisePrototypeThen$1(
      close(error),
      () => process$1.nextTick(cb, error),
      // nextTick is here in case cb throws
      (e) => process$1.nextTick(cb, e || error)
    );
  };
  async function close(error) {
    const hadError = error !== undefined && error !== null;
    const hasThrow = typeof iterator.throw === 'function';
    if (hadError && hasThrow) {
      const { value, done } = await iterator.throw(error);
      await value;
      if (done) {
        return
      }
    }
    if (typeof iterator.return === 'function') {
      const { value } = await iterator.return();
      await value;
    }
  }
  async function next() {
    for (;;) {
      try {
        const { value, done } = isAsync ? await iterator.next() : iterator.next();
        if (done) {
          readable.push(null);
        } else {
          const res = value && typeof value.then === 'function' ? await value : value;
          if (res === null) {
            reading = false;
            throw new ERR_STREAM_NULL_VALUES()
          } else if (readable.push(res)) {
            continue
          } else {
            reading = false;
          }
        }
      } catch (err) {
        readable.destroy(err);
      }
      break
    }
  }
  return readable
}
var from_1 = from;

/* replacement start */

var readable;
var hasRequiredReadable;

function requireReadable () {
	if (hasRequiredReadable) return readable;
	hasRequiredReadable = 1;
	const process = browserExports$1

	/* replacement end */
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	;	const {
	  ArrayPrototypeIndexOf,
	  NumberIsInteger,
	  NumberIsNaN,
	  NumberParseInt,
	  ObjectDefineProperties,
	  ObjectKeys,
	  ObjectSetPrototypeOf,
	  Promise,
	  SafeSet,
	  SymbolAsyncDispose,
	  SymbolAsyncIterator,
	  Symbol
	} = primordials;
	readable = Readable;
	Readable.ReadableState = ReadableState;
	const { EventEmitter: EE } = eventsExports;
	const { Stream, prependListener } = legacy;
	const { Buffer } = bufferRollup;
	const { addAbortSignal } = addAbortSignalExports;
	const eos = endOfStreamExports;
	let debug = utilExports.debuglog('stream', (fn) => {
	  debug = fn;
	});
	const BufferList = buffer_list;
	const destroyImpl = destroy_1;
	const { getHighWaterMark, getDefaultHighWaterMark } = state;
	const {
	  aggregateTwoErrors,
	  codes: {
	    ERR_INVALID_ARG_TYPE,
	    ERR_METHOD_NOT_IMPLEMENTED,
	    ERR_OUT_OF_RANGE,
	    ERR_STREAM_PUSH_AFTER_EOF,
	    ERR_STREAM_UNSHIFT_AFTER_END_EVENT
	  },
	  AbortError
	} = errors;
	const { validateObject } = validators;
	const kPaused = Symbol('kPaused');
	const { StringDecoder } = string_decoder;
	const from = from_1;
	ObjectSetPrototypeOf(Readable.prototype, Stream.prototype);
	ObjectSetPrototypeOf(Readable, Stream);
	const nop = () => {};
	const { errorOrDestroy } = destroyImpl;
	const kObjectMode = 1 << 0;
	const kEnded = 1 << 1;
	const kEndEmitted = 1 << 2;
	const kReading = 1 << 3;
	const kConstructed = 1 << 4;
	const kSync = 1 << 5;
	const kNeedReadable = 1 << 6;
	const kEmittedReadable = 1 << 7;
	const kReadableListening = 1 << 8;
	const kResumeScheduled = 1 << 9;
	const kErrorEmitted = 1 << 10;
	const kEmitClose = 1 << 11;
	const kAutoDestroy = 1 << 12;
	const kDestroyed = 1 << 13;
	const kClosed = 1 << 14;
	const kCloseEmitted = 1 << 15;
	const kMultiAwaitDrain = 1 << 16;
	const kReadingMore = 1 << 17;
	const kDataEmitted = 1 << 18;

	// TODO(benjamingr) it is likely slower to do it this way than with free functions
	function makeBitMapDescriptor(bit) {
	  return {
	    enumerable: false,
	    get() {
	      return (this.state & bit) !== 0
	    },
	    set(value) {
	      if (value) this.state |= bit;
	      else this.state &= ~bit;
	    }
	  }
	}
	ObjectDefineProperties(ReadableState.prototype, {
	  objectMode: makeBitMapDescriptor(kObjectMode),
	  ended: makeBitMapDescriptor(kEnded),
	  endEmitted: makeBitMapDescriptor(kEndEmitted),
	  reading: makeBitMapDescriptor(kReading),
	  // Stream is still being constructed and cannot be
	  // destroyed until construction finished or failed.
	  // Async construction is opt in, therefore we start as
	  // constructed.
	  constructed: makeBitMapDescriptor(kConstructed),
	  // A flag to be able to tell if the event 'readable'/'data' is emitted
	  // immediately, or on a later tick.  We set this to true at first, because
	  // any actions that shouldn't happen until "later" should generally also
	  // not happen before the first read call.
	  sync: makeBitMapDescriptor(kSync),
	  // Whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  needReadable: makeBitMapDescriptor(kNeedReadable),
	  emittedReadable: makeBitMapDescriptor(kEmittedReadable),
	  readableListening: makeBitMapDescriptor(kReadableListening),
	  resumeScheduled: makeBitMapDescriptor(kResumeScheduled),
	  // True if the error was already emitted and should not be thrown again.
	  errorEmitted: makeBitMapDescriptor(kErrorEmitted),
	  emitClose: makeBitMapDescriptor(kEmitClose),
	  autoDestroy: makeBitMapDescriptor(kAutoDestroy),
	  // Has it been destroyed.
	  destroyed: makeBitMapDescriptor(kDestroyed),
	  // Indicates whether the stream has finished destroying.
	  closed: makeBitMapDescriptor(kClosed),
	  // True if close has been emitted or would have been emitted
	  // depending on emitClose.
	  closeEmitted: makeBitMapDescriptor(kCloseEmitted),
	  multiAwaitDrain: makeBitMapDescriptor(kMultiAwaitDrain),
	  // If true, a maybeReadMore has been scheduled.
	  readingMore: makeBitMapDescriptor(kReadingMore),
	  dataEmitted: makeBitMapDescriptor(kDataEmitted)
	});
	function ReadableState(options, stream, isDuplex) {
	  // Duplex streams are both readable and writable, but share
	  // the same options object.
	  // However, some cases require setting options to different
	  // values for the readable and the writable sides of the duplex stream.
	  // These options can be provided separately as readableXXX and writableXXX.
	  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof requireDuplex();

	  // Bit map field to store ReadableState more effciently with 1 bit per field
	  // instead of a V8 slot per field.
	  this.state = kEmitClose | kAutoDestroy | kConstructed | kSync;
	  // Object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away.
	  if (options && options.objectMode) this.state |= kObjectMode;
	  if (isDuplex && options && options.readableObjectMode) this.state |= kObjectMode;

	  // The point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  this.highWaterMark = options
	    ? getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex)
	    : getDefaultHighWaterMark(false);

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift().
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = [];
	  this.flowing = null;
	  this[kPaused] = null;

	  // Should close be emitted on destroy. Defaults to true.
	  if (options && options.emitClose === false) this.state &= ~kEmitClose;

	  // Should .destroy() be called after 'end' (and potentially 'finish').
	  if (options && options.autoDestroy === false) this.state &= ~kAutoDestroy;

	  // Indicates whether the stream has errored. When true no further
	  // _read calls, 'data' or 'readable' events should occur. This is needed
	  // since when autoDestroy is disabled we need a way to tell whether the
	  // stream has failed.
	  this.errored = null;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = (options && options.defaultEncoding) || 'utf8';

	  // Ref the piped dest which we need a drain event on it
	  // type: null | Writable | Set<Writable>.
	  this.awaitDrainWriters = null;
	  this.decoder = null;
	  this.encoding = null;
	  if (options && options.encoding) {
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	function Readable(options) {
	  if (!(this instanceof Readable)) return new Readable(options)

	  // Checking for a Stream.Duplex instance is faster here instead of inside
	  // the ReadableState constructor, at least with V8 6.5.
	  const isDuplex = this instanceof requireDuplex();
	  this._readableState = new ReadableState(options, this, isDuplex);
	  if (options) {
	    if (typeof options.read === 'function') this._read = options.read;
	    if (typeof options.destroy === 'function') this._destroy = options.destroy;
	    if (typeof options.construct === 'function') this._construct = options.construct;
	    if (options.signal && !isDuplex) addAbortSignal(options.signal, this);
	  }
	  Stream.call(this, options);
	  destroyImpl.construct(this, () => {
	    if (this._readableState.needReadable) {
	      maybeReadMore(this, this._readableState);
	    }
	  });
	}
	Readable.prototype.destroy = destroyImpl.destroy;
	Readable.prototype._undestroy = destroyImpl.undestroy;
	Readable.prototype._destroy = function (err, cb) {
	  cb(err);
	};
	Readable.prototype[EE.captureRejectionSymbol] = function (err) {
	  this.destroy(err);
	};
	Readable.prototype[SymbolAsyncDispose] = function () {
	  let error;
	  if (!this.destroyed) {
	    error = this.readableEnded ? null : new AbortError();
	    this.destroy(error);
	  }
	  return new Promise((resolve, reject) => eos(this, (err) => (err && err !== error ? reject(err) : resolve(null))))
	};

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  return readableAddChunk(this, chunk, encoding, false)
	};

	// Unshift should *always* be something directly out of read().
	Readable.prototype.unshift = function (chunk, encoding) {
	  return readableAddChunk(this, chunk, encoding, true)
	};
	function readableAddChunk(stream, chunk, encoding, addToFront) {
	  debug('readableAddChunk', chunk);
	  const state = stream._readableState;
	  let err;
	  if ((state.state & kObjectMode) === 0) {
	    if (typeof chunk === 'string') {
	      encoding = encoding || state.defaultEncoding;
	      if (state.encoding !== encoding) {
	        if (addToFront && state.encoding) {
	          // When unshifting, if state.encoding is set, we have to save
	          // the string in the BufferList with the state encoding.
	          chunk = Buffer.from(chunk, encoding).toString(state.encoding);
	        } else {
	          chunk = Buffer.from(chunk, encoding);
	          encoding = '';
	        }
	      }
	    } else if (chunk instanceof Buffer) {
	      encoding = '';
	    } else if (Stream._isUint8Array(chunk)) {
	      chunk = Stream._uint8ArrayToBuffer(chunk);
	      encoding = '';
	    } else if (chunk != null) {
	      err = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
	    }
	  }
	  if (err) {
	    errorOrDestroy(stream, err);
	  } else if (chunk === null) {
	    state.state &= ~kReading;
	    onEofChunk(stream, state);
	  } else if ((state.state & kObjectMode) !== 0 || (chunk && chunk.length > 0)) {
	    if (addToFront) {
	      if ((state.state & kEndEmitted) !== 0) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
	      else if (state.destroyed || state.errored) return false
	      else addChunk(stream, state, chunk, true);
	    } else if (state.ended) {
	      errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
	    } else if (state.destroyed || state.errored) {
	      return false
	    } else {
	      state.state &= ~kReading;
	      if (state.decoder && !encoding) {
	        chunk = state.decoder.write(chunk);
	        if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
	        else maybeReadMore(stream, state);
	      } else {
	        addChunk(stream, state, chunk, false);
	      }
	    }
	  } else if (!addToFront) {
	    state.state &= ~kReading;
	    maybeReadMore(stream, state);
	  }

	  // We can push more data if we are below the highWaterMark.
	  // Also, if we have no data yet, we can stand some more bytes.
	  // This is to work around cases where hwm=0, such as the repl.
	  return !state.ended && (state.length < state.highWaterMark || state.length === 0)
	}
	function addChunk(stream, state, chunk, addToFront) {
	  if (state.flowing && state.length === 0 && !state.sync && stream.listenerCount('data') > 0) {
	    // Use the guard to avoid creating `Set()` repeatedly
	    // when we have multiple pipes.
	    if ((state.state & kMultiAwaitDrain) !== 0) {
	      state.awaitDrainWriters.clear();
	    } else {
	      state.awaitDrainWriters = null;
	    }
	    state.dataEmitted = true;
	    stream.emit('data', chunk);
	  } else {
	    // Update the buffer info.
	    state.length += state.objectMode ? 1 : chunk.length;
	    if (addToFront) state.buffer.unshift(chunk);
	    else state.buffer.push(chunk);
	    if ((state.state & kNeedReadable) !== 0) emitReadable(stream);
	  }
	  maybeReadMore(stream, state);
	}
	Readable.prototype.isPaused = function () {
	  const state = this._readableState;
	  return state[kPaused] === true || state.flowing === false
	};

	// Backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  const decoder = new StringDecoder(enc);
	  this._readableState.decoder = decoder;
	  // If setEncoding(null), decoder.encoding equals utf8.
	  this._readableState.encoding = this._readableState.decoder.encoding;
	  const buffer = this._readableState.buffer;
	  // Iterate over current buffer to convert already stored Buffers:
	  let content = '';
	  for (const data of buffer) {
	    content += decoder.write(data);
	  }
	  buffer.clear();
	  if (content !== '') buffer.push(content);
	  this._readableState.length = content.length;
	  return this
	};

	// Don't raise the hwm > 1GB.
	const MAX_HWM = 0x40000000;
	function computeNewHighWaterMark(n) {
	  if (n > MAX_HWM) {
	    throw new ERR_OUT_OF_RANGE('size', '<= 1GiB', n)
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts.
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || (state.length === 0 && state.ended)) return 0
	  if ((state.state & kObjectMode) !== 0) return 1
	  if (NumberIsNaN(n)) {
	    // Only flow one buffer at a time.
	    if (state.flowing && state.length) return state.buffer.first().length
	    return state.length
	  }
	  if (n <= state.length) return n
	  return state.ended ? state.length : 0
	}

	// You can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  // Same as parseInt(undefined, 10), however V8 7.3 performance regressed
	  // in this scenario, so we are doing it manually.
	  if (n === undefined) {
	    n = NaN;
	  } else if (!NumberIsInteger(n)) {
	    n = NumberParseInt(n, 10);
	  }
	  const state = this._readableState;
	  const nOrig = n;

	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n !== 0) state.state &= ~kEmittedReadable;

	  // If we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (
	    n === 0 &&
	    state.needReadable &&
	    ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)
	  ) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);
	    else emitReadable(this);
	    return null
	  }
	  n = howMuchToRead(n, state);

	  // If we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  let doRead = (state.state & kNeedReadable) !== 0;
	  debug('need readable', doRead);

	  // If we currently have less than the highWaterMark, then also read some.
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // However, if we've ended, then there's no point, if we're already
	  // reading, then it's unnecessary, if we're constructing we have to wait,
	  // and if we're destroyed or errored, then it's not allowed,
	  if (state.ended || state.reading || state.destroyed || state.errored || !state.constructed) {
	    doRead = false;
	    debug('reading, ended or constructing', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.state |= kReading | kSync;
	    // If the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.state |= kNeedReadable;

	    // Call internal read method
	    try {
	      this._read(state.highWaterMark);
	    } catch (err) {
	      errorOrDestroy(this, err);
	    }
	    state.state &= ~kSync;

	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }
	  let ret;
	  if (n > 0) ret = fromList(n, state);
	  else ret = null;
	  if (ret === null) {
	    state.needReadable = state.length <= state.highWaterMark;
	    n = 0;
	  } else {
	    state.length -= n;
	    if (state.multiAwaitDrain) {
	      state.awaitDrainWriters.clear();
	    } else {
	      state.awaitDrainWriters = null;
	    }
	  }
	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }
	  if (ret !== null && !state.errorEmitted && !state.closeEmitted) {
	    state.dataEmitted = true;
	    this.emit('data', ret);
	  }
	  return ret
	};
	function onEofChunk(stream, state) {
	  debug('onEofChunk');
	  if (state.ended) return
	  if (state.decoder) {
	    const chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;
	  if (state.sync) {
	    // If we are sync, wait until next tick to emit the data.
	    // Otherwise we risk emitting data in the flow()
	    // the readable code triggers during a read() call.
	    emitReadable(stream);
	  } else {
	    // Emit 'readable' now to make sure it gets picked up.
	    state.needReadable = false;
	    state.emittedReadable = true;
	    // We have to emit readable now that we are EOF. Modules
	    // in the ecosystem (e.g. dicer) rely on this event being sync.
	    emitReadable_(stream);
	  }
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  const state = stream._readableState;
	  debug('emitReadable', state.needReadable, state.emittedReadable);
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    process.nextTick(emitReadable_, stream);
	  }
	}
	function emitReadable_(stream) {
	  const state = stream._readableState;
	  debug('emitReadable_', state.destroyed, state.length, state.ended);
	  if (!state.destroyed && !state.errored && (state.length || state.ended)) {
	    stream.emit('readable');
	    state.emittedReadable = false;
	  }

	  // The stream needs another readable event if:
	  // 1. It is not flowing, as the flow mechanism will take
	  //    care of it.
	  // 2. It is not ended.
	  // 3. It is below the highWaterMark, so we can schedule
	  //    another readable later.
	  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
	  flow(stream);
	}

	// At this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore && state.constructed) {
	    state.readingMore = true;
	    process.nextTick(maybeReadMore_, stream, state);
	  }
	}
	function maybeReadMore_(stream, state) {
	  // Attempt to read more data if we should.
	  //
	  // The conditions for reading more data are (one of):
	  // - Not enough data buffered (state.length < state.highWaterMark). The loop
	  //   is responsible for filling the buffer with enough data if such data
	  //   is available. If highWaterMark is 0 and we are not in the flowing mode
	  //   we should _not_ attempt to buffer any extra data. We'll get more data
	  //   when the stream consumer calls read() instead.
	  // - No data in the buffer, and the stream is in flowing mode. In this mode
	  //   the loop below is responsible for ensuring read() is called. Failing to
	  //   call read here would abort the flow and there's no other mechanism for
	  //   continuing the flow if the stream consumer has just subscribed to the
	  //   'data' event.
	  //
	  // In addition to the above conditions to keep reading data, the following
	  // conditions prevent the data from being read:
	  // - The stream has ended (state.ended).
	  // - There is already a pending 'read' operation (state.reading). This is a
	  //   case where the stream has called the implementation defined _read()
	  //   method, but they are processing the call asynchronously and have _not_
	  //   called push() with new data. In this case we skip performing more
	  //   read()s. The execution ends in this method again after the _read() ends
	  //   up calling push() with more data.
	  while (
	    !state.reading &&
	    !state.ended &&
	    (state.length < state.highWaterMark || (state.flowing && state.length === 0))
	  ) {
	    const len = state.length;
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // Didn't get any data, stop spinning.
	      break
	  }
	  state.readingMore = false;
	}

	// Abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  throw new ERR_METHOD_NOT_IMPLEMENTED('_read()')
	};
	Readable.prototype.pipe = function (dest, pipeOpts) {
	  const src = this;
	  const state = this._readableState;
	  if (state.pipes.length === 1) {
	    if (!state.multiAwaitDrain) {
	      state.multiAwaitDrain = true;
	      state.awaitDrainWriters = new SafeSet(state.awaitDrainWriters ? [state.awaitDrainWriters] : []);
	    }
	  }
	  state.pipes.push(dest);
	  debug('pipe count=%d opts=%j', state.pipes.length, pipeOpts);
	  const doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
	  const endFn = doEnd ? onend : unpipe;
	  if (state.endEmitted) process.nextTick(endFn);
	  else src.once('end', endFn);
	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable, unpipeInfo) {
	    debug('onunpipe');
	    if (readable === src) {
	      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
	        unpipeInfo.hasUnpiped = true;
	        cleanup();
	      }
	    }
	  }
	  function onend() {
	    debug('onend');
	    dest.end();
	  }
	  let ondrain;
	  let cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // Cleanup event handlers once the pipe is broken.
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    if (ondrain) {
	      dest.removeListener('drain', ondrain);
	    }
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', unpipe);
	    src.removeListener('data', ondata);
	    cleanedUp = true;

	    // If the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (ondrain && state.awaitDrainWriters && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }
	  function pause() {
	    // If the user unpiped during `dest.write()`, it is possible
	    // to get stuck in a permanently paused state if that write
	    // also returned false.
	    // => Check whether `dest` is still a piping destination.
	    if (!cleanedUp) {
	      if (state.pipes.length === 1 && state.pipes[0] === dest) {
	        debug('false write response, pause', 0);
	        state.awaitDrainWriters = dest;
	        state.multiAwaitDrain = false;
	      } else if (state.pipes.length > 1 && state.pipes.includes(dest)) {
	        debug('false write response, pause', state.awaitDrainWriters.size);
	        state.awaitDrainWriters.add(dest);
	      }
	      src.pause();
	    }
	    if (!ondrain) {
	      // When the dest drains, it reduces the awaitDrain counter
	      // on the source.  This would be more elegant with a .once()
	      // handler in flow(), but adding and removing repeatedly is
	      // too slow.
	      ondrain = pipeOnDrain(src, dest);
	      dest.on('drain', ondrain);
	    }
	  }
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    const ret = dest.write(chunk);
	    debug('dest.write', ret);
	    if (ret === false) {
	      pause();
	    }
	  }

	  // If the dest has an error, then stop piping into it.
	  // However, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (dest.listenerCount('error') === 0) {
	      const s = dest._writableState || dest._readableState;
	      if (s && !s.errorEmitted) {
	        // User incorrectly emitted 'error' directly on the stream.
	        errorOrDestroy(dest, er);
	      } else {
	        dest.emit('error', er);
	      }
	    }
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);
	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // Tell the dest that it's being piped to.
	  dest.emit('pipe', src);

	  // Start the flow if it hasn't been started already.

	  if (dest.writableNeedDrain === true) {
	    pause();
	  } else if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }
	  return dest
	};
	function pipeOnDrain(src, dest) {
	  return function pipeOnDrainFunctionResult() {
	    const state = src._readableState;

	    // `ondrain` will call directly,
	    // `this` maybe not a reference to dest,
	    // so we use the real dest here.
	    if (state.awaitDrainWriters === dest) {
	      debug('pipeOnDrain', 1);
	      state.awaitDrainWriters = null;
	    } else if (state.multiAwaitDrain) {
	      debug('pipeOnDrain', state.awaitDrainWriters.size);
	      state.awaitDrainWriters.delete(dest);
	    }
	    if ((!state.awaitDrainWriters || state.awaitDrainWriters.size === 0) && src.listenerCount('data')) {
	      src.resume();
	    }
	  }
	}
	Readable.prototype.unpipe = function (dest) {
	  const state = this._readableState;
	  const unpipeInfo = {
	    hasUnpiped: false
	  };

	  // If we're not piping anywhere, then do nothing.
	  if (state.pipes.length === 0) return this
	  if (!dest) {
	    // remove all.
	    const dests = state.pipes;
	    state.pipes = [];
	    this.pause();
	    for (let i = 0; i < dests.length; i++)
	      dests[i].emit('unpipe', this, {
	        hasUnpiped: false
	      });
	    return this
	  }

	  // Try to find the right one.
	  const index = ArrayPrototypeIndexOf(state.pipes, dest);
	  if (index === -1) return this
	  state.pipes.splice(index, 1);
	  if (state.pipes.length === 0) this.pause();
	  dest.emit('unpipe', this, unpipeInfo);
	  return this
	};

	// Set up data events if they are asked for
	// Ensure readable listeners eventually get something.
	Readable.prototype.on = function (ev, fn) {
	  const res = Stream.prototype.on.call(this, ev, fn);
	  const state = this._readableState;
	  if (ev === 'data') {
	    // Update readableListening so that resume() may be a no-op
	    // a few lines down. This is needed to support once('readable').
	    state.readableListening = this.listenerCount('readable') > 0;

	    // Try start flowing on next tick if stream isn't explicitly paused.
	    if (state.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.flowing = false;
	      state.emittedReadable = false;
	      debug('on readable', state.length, state.reading);
	      if (state.length) {
	        emitReadable(this);
	      } else if (!state.reading) {
	        process.nextTick(nReadingNextTick, this);
	      }
	    }
	  }
	  return res
	};
	Readable.prototype.addListener = Readable.prototype.on;
	Readable.prototype.removeListener = function (ev, fn) {
	  const res = Stream.prototype.removeListener.call(this, ev, fn);
	  if (ev === 'readable') {
	    // We need to check if there is someone still listening to
	    // readable and reset the state. However this needs to happen
	    // after readable has been emitted but before I/O (nextTick) to
	    // support once('readable', fn) cycles. This means that calling
	    // resume within the same tick will have no
	    // effect.
	    process.nextTick(updateReadableListening, this);
	  }
	  return res
	};
	Readable.prototype.off = Readable.prototype.removeListener;
	Readable.prototype.removeAllListeners = function (ev) {
	  const res = Stream.prototype.removeAllListeners.apply(this, arguments);
	  if (ev === 'readable' || ev === undefined) {
	    // We need to check if there is someone still listening to
	    // readable and reset the state. However this needs to happen
	    // after readable has been emitted but before I/O (nextTick) to
	    // support once('readable', fn) cycles. This means that calling
	    // resume within the same tick will have no
	    // effect.
	    process.nextTick(updateReadableListening, this);
	  }
	  return res
	};
	function updateReadableListening(self) {
	  const state = self._readableState;
	  state.readableListening = self.listenerCount('readable') > 0;
	  if (state.resumeScheduled && state[kPaused] === false) {
	    // Flowing needs to be set to true now, otherwise
	    // the upcoming resume will not flow.
	    state.flowing = true;

	    // Crude way to check if we should resume.
	  } else if (self.listenerCount('data') > 0) {
	    self.resume();
	  } else if (!state.readableListening) {
	    state.flowing = null;
	  }
	}
	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  const state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    // We flow only if there is no one listening
	    // for readable, but we still have to call
	    // resume().
	    state.flowing = !state.readableListening;
	    resume(this, state);
	  }
	  state[kPaused] = false;
	  return this
	};
	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(resume_, stream, state);
	  }
	}
	function resume_(stream, state) {
	  debug('resume', state.reading);
	  if (!state.reading) {
	    stream.read(0);
	  }
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}
	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (this._readableState.flowing !== false) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  this._readableState[kPaused] = true;
	  return this
	};
	function flow(stream) {
	  const state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null);
	}

	// Wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  let paused = false;

	  // TODO (ronag): Should this.destroy(err) emit
	  // 'error' on the wrapped stream? Would require
	  // a static factory method, e.g. Readable.wrap(stream).

	  stream.on('data', (chunk) => {
	    if (!this.push(chunk) && stream.pause) {
	      paused = true;
	      stream.pause();
	    }
	  });
	  stream.on('end', () => {
	    this.push(null);
	  });
	  stream.on('error', (err) => {
	    errorOrDestroy(this, err);
	  });
	  stream.on('close', () => {
	    this.destroy();
	  });
	  stream.on('destroy', () => {
	    this.destroy();
	  });
	  this._read = () => {
	    if (paused && stream.resume) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  // Proxy all the other methods. Important when wrapping filters and duplexes.
	  const streamKeys = ObjectKeys(stream);
	  for (let j = 1; j < streamKeys.length; j++) {
	    const i = streamKeys[j];
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = stream[i].bind(stream);
	    }
	  }
	  return this
	};
	Readable.prototype[SymbolAsyncIterator] = function () {
	  return streamToAsyncIterator(this)
	};
	Readable.prototype.iterator = function (options) {
	  if (options !== undefined) {
	    validateObject(options, 'options');
	  }
	  return streamToAsyncIterator(this, options)
	};
	function streamToAsyncIterator(stream, options) {
	  if (typeof stream.read !== 'function') {
	    stream = Readable.wrap(stream, {
	      objectMode: true
	    });
	  }
	  const iter = createAsyncIterator(stream, options);
	  iter.stream = stream;
	  return iter
	}
	async function* createAsyncIterator(stream, options) {
	  let callback = nop;
	  function next(resolve) {
	    if (this === stream) {
	      callback();
	      callback = nop;
	    } else {
	      callback = resolve;
	    }
	  }
	  stream.on('readable', next);
	  let error;
	  const cleanup = eos(
	    stream,
	    {
	      writable: false
	    },
	    (err) => {
	      error = err ? aggregateTwoErrors(error, err) : null;
	      callback();
	      callback = nop;
	    }
	  );
	  try {
	    while (true) {
	      const chunk = stream.destroyed ? null : stream.read();
	      if (chunk !== null) {
	        yield chunk;
	      } else if (error) {
	        throw error
	      } else if (error === null) {
	        return
	      } else {
	        await new Promise(next);
	      }
	    }
	  } catch (err) {
	    error = aggregateTwoErrors(error, err);
	    throw error
	  } finally {
	    if (
	      (error || (options === null || options === undefined ? undefined : options.destroyOnReturn) !== false) &&
	      (error === undefined || stream._readableState.autoDestroy)
	    ) {
	      destroyImpl.destroyer(stream, null);
	    } else {
	      stream.off('readable', next);
	      cleanup();
	    }
	  }
	}

	// Making it explicit these properties are not enumerable
	// because otherwise some prototype manipulation in
	// userland will fail.
	ObjectDefineProperties(Readable.prototype, {
	  readable: {
	    __proto__: null,
	    get() {
	      const r = this._readableState;
	      // r.readable === false means that this is part of a Duplex stream
	      // where the readable side was disabled upon construction.
	      // Compat. The user might manually disable readable side through
	      // deprecated setter.
	      return !!r && r.readable !== false && !r.destroyed && !r.errorEmitted && !r.endEmitted
	    },
	    set(val) {
	      // Backwards compat.
	      if (this._readableState) {
	        this._readableState.readable = !!val;
	      }
	    }
	  },
	  readableDidRead: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return this._readableState.dataEmitted
	    }
	  },
	  readableAborted: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return !!(
	        this._readableState.readable !== false &&
	        (this._readableState.destroyed || this._readableState.errored) &&
	        !this._readableState.endEmitted
	      )
	    }
	  },
	  readableHighWaterMark: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return this._readableState.highWaterMark
	    }
	  },
	  readableBuffer: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return this._readableState && this._readableState.buffer
	    }
	  },
	  readableFlowing: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return this._readableState.flowing
	    },
	    set: function (state) {
	      if (this._readableState) {
	        this._readableState.flowing = state;
	      }
	    }
	  },
	  readableLength: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState.length
	    }
	  },
	  readableObjectMode: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState ? this._readableState.objectMode : false
	    }
	  },
	  readableEncoding: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState ? this._readableState.encoding : null
	    }
	  },
	  errored: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState ? this._readableState.errored : null
	    }
	  },
	  closed: {
	    __proto__: null,
	    get() {
	      return this._readableState ? this._readableState.closed : false
	    }
	  },
	  destroyed: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState ? this._readableState.destroyed : false
	    },
	    set(value) {
	      // We ignore the value if the stream
	      // has not been initialized yet.
	      if (!this._readableState) {
	        return
	      }

	      // Backward compatibility, the user is explicitly
	      // managing destroyed.
	      this._readableState.destroyed = value;
	    }
	  },
	  readableEnded: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState ? this._readableState.endEmitted : false
	    }
	  }
	});
	ObjectDefineProperties(ReadableState.prototype, {
	  // Legacy getter for `pipesCount`.
	  pipesCount: {
	    __proto__: null,
	    get() {
	      return this.pipes.length
	    }
	  },
	  // Legacy property for `paused`.
	  paused: {
	    __proto__: null,
	    get() {
	      return this[kPaused] !== false
	    },
	    set(value) {
	      this[kPaused] = !!value;
	    }
	  }
	});

	// Exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered.
	  if (state.length === 0) return null
	  let ret;
	  if (state.objectMode) ret = state.buffer.shift();
	  else if (!n || n >= state.length) {
	    // Read it all, truncate the list.
	    if (state.decoder) ret = state.buffer.join('');
	    else if (state.buffer.length === 1) ret = state.buffer.first();
	    else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list.
	    ret = state.buffer.consume(n, state.decoder);
	  }
	  return ret
	}
	function endReadable(stream) {
	  const state = stream._readableState;
	  debug('endReadable', state.endEmitted);
	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(endReadableNT, state, stream);
	  }
	}
	function endReadableNT(state, stream) {
	  debug('endReadableNT', state.endEmitted, state.length);

	  // Check that we didn't get one last unshift.
	  if (!state.errored && !state.closeEmitted && !state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.emit('end');
	    if (stream.writable && stream.allowHalfOpen === false) {
	      process.nextTick(endWritableNT, stream);
	    } else if (state.autoDestroy) {
	      // In case of duplex streams we need a way to detect
	      // if the writable side is ready for autoDestroy as well.
	      const wState = stream._writableState;
	      const autoDestroy =
	        !wState ||
	        (wState.autoDestroy &&
	          // We don't expect the writable to ever 'finish'
	          // if writable is explicitly set to false.
	          (wState.finished || wState.writable === false));
	      if (autoDestroy) {
	        stream.destroy();
	      }
	    }
	  }
	}
	function endWritableNT(stream) {
	  const writable = stream.writable && !stream.writableEnded && !stream.destroyed;
	  if (writable) {
	    stream.end();
	  }
	}
	Readable.from = function (iterable, opts) {
	  return from(Readable, iterable, opts)
	};
	let webStreamsAdapters;

	// Lazy to avoid circular references
	function lazyWebStreams() {
	  if (webStreamsAdapters === undefined) webStreamsAdapters = {};
	  return webStreamsAdapters
	}
	Readable.fromWeb = function (readableStream, options) {
	  return lazyWebStreams().newStreamReadableFromReadableStream(readableStream, options)
	};
	Readable.toWeb = function (streamReadable, options) {
	  return lazyWebStreams().newReadableStreamFromStreamReadable(streamReadable, options)
	};
	Readable.wrap = function (src, options) {
	  var _ref, _src$readableObjectMo;
	  return new Readable({
	    objectMode:
	      (_ref =
	        (_src$readableObjectMo = src.readableObjectMode) !== null && _src$readableObjectMo !== undefined
	          ? _src$readableObjectMo
	          : src.objectMode) !== null && _ref !== undefined
	        ? _ref
	        : true,
	    ...options,
	    destroy(err, callback) {
	      destroyImpl.destroyer(src, err);
	      callback(err);
	    }
	  }).wrap(src)
	};
	return readable;
}

/* replacement start */

var writable;
var hasRequiredWritable;

function requireWritable () {
	if (hasRequiredWritable) return writable;
	hasRequiredWritable = 1;
	const process = browserExports$1

	/* replacement end */
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.

	;	const {
	  ArrayPrototypeSlice,
	  Error,
	  FunctionPrototypeSymbolHasInstance,
	  ObjectDefineProperty,
	  ObjectDefineProperties,
	  ObjectSetPrototypeOf,
	  StringPrototypeToLowerCase,
	  Symbol,
	  SymbolHasInstance
	} = primordials;
	writable = Writable;
	Writable.WritableState = WritableState;
	const { EventEmitter: EE } = eventsExports;
	const Stream = legacy.Stream;
	const { Buffer } = bufferRollup;
	const destroyImpl = destroy_1;
	const { addAbortSignal } = addAbortSignalExports;
	const { getHighWaterMark, getDefaultHighWaterMark } = state;
	const {
	  ERR_INVALID_ARG_TYPE,
	  ERR_METHOD_NOT_IMPLEMENTED,
	  ERR_MULTIPLE_CALLBACK,
	  ERR_STREAM_CANNOT_PIPE,
	  ERR_STREAM_DESTROYED,
	  ERR_STREAM_ALREADY_FINISHED,
	  ERR_STREAM_NULL_VALUES,
	  ERR_STREAM_WRITE_AFTER_END,
	  ERR_UNKNOWN_ENCODING
	} = errors.codes;
	const { errorOrDestroy } = destroyImpl;
	ObjectSetPrototypeOf(Writable.prototype, Stream.prototype);
	ObjectSetPrototypeOf(Writable, Stream);
	function nop() {}
	const kOnFinished = Symbol('kOnFinished');
	function WritableState(options, stream, isDuplex) {
	  // Duplex streams are both readable and writable, but share
	  // the same options object.
	  // However, some cases require setting options to different
	  // values for the readable and the writable sides of the duplex stream,
	  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
	  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof requireDuplex();

	  // Object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!(options && options.objectMode);
	  if (isDuplex) this.objectMode = this.objectMode || !!(options && options.writableObjectMode);

	  // The point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write().
	  this.highWaterMark = options
	    ? getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex)
	    : getDefaultHighWaterMark(false);

	  // if _final has been called.
	  this.finalCalled = false;

	  // drain event flag.
	  this.needDrain = false;
	  // At the start of calling end()
	  this.ending = false;
	  // When end() has been called, and returned.
	  this.ended = false;
	  // When 'finish' is emitted.
	  this.finished = false;

	  // Has it been destroyed
	  this.destroyed = false;

	  // Should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  const noDecode = !!(options && options.decodeStrings === false);
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = (options && options.defaultEncoding) || 'utf8';

	  // Not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // A flag to see when we're in the middle of a write.
	  this.writing = false;

	  // When true all writes will be buffered until .uncork() call.
	  this.corked = 0;

	  // A flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // A flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // The callback that's passed to _write(chunk, cb).
	  this.onwrite = onwrite.bind(undefined, stream);

	  // The callback that the user supplies to write(chunk, encoding, cb).
	  this.writecb = null;

	  // The amount that is being written when _write is called.
	  this.writelen = 0;

	  // Storage for data passed to the afterWrite() callback in case of
	  // synchronous _write() completion.
	  this.afterWriteTickInfo = null;
	  resetBuffer(this);

	  // Number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted.
	  this.pendingcb = 0;

	  // Stream is still being constructed and cannot be
	  // destroyed until construction finished or failed.
	  // Async construction is opt in, therefore we start as
	  // constructed.
	  this.constructed = true;

	  // Emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams.
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again.
	  this.errorEmitted = false;

	  // Should close be emitted on destroy. Defaults to true.
	  this.emitClose = !options || options.emitClose !== false;

	  // Should .destroy() be called after 'finish' (and potentially 'end').
	  this.autoDestroy = !options || options.autoDestroy !== false;

	  // Indicates whether the stream has errored. When true all write() calls
	  // should return false. This is needed since when autoDestroy
	  // is disabled we need a way to tell whether the stream has failed.
	  this.errored = null;

	  // Indicates whether the stream has finished destroying.
	  this.closed = false;

	  // True if close has been emitted or would have been emitted
	  // depending on emitClose.
	  this.closeEmitted = false;
	  this[kOnFinished] = [];
	}
	function resetBuffer(state) {
	  state.buffered = [];
	  state.bufferedIndex = 0;
	  state.allBuffers = true;
	  state.allNoop = true;
	}
	WritableState.prototype.getBuffer = function getBuffer() {
	  return ArrayPrototypeSlice(this.buffered, this.bufferedIndex)
	};
	ObjectDefineProperty(WritableState.prototype, 'bufferedRequestCount', {
	  __proto__: null,
	  get() {
	    return this.buffered.length - this.bufferedIndex
	  }
	});
	function Writable(options) {
	  // Writable ctor is applied to Duplexes, too.
	  // `realHasInstance` is necessary because using plain `instanceof`
	  // would return false, as no `_writableState` property is attached.

	  // Trying to use the custom `instanceof` for Writable here will also break the
	  // Node.js LazyTransform implementation, which has a non-trivial getter for
	  // `_writableState` that would lead to infinite recursion.

	  // Checking for a Stream.Duplex instance is faster here instead of inside
	  // the WritableState constructor, at least with V8 6.5.
	  const isDuplex = this instanceof requireDuplex();
	  if (!isDuplex && !FunctionPrototypeSymbolHasInstance(Writable, this)) return new Writable(options)
	  this._writableState = new WritableState(options, this, isDuplex);
	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;
	    if (typeof options.writev === 'function') this._writev = options.writev;
	    if (typeof options.destroy === 'function') this._destroy = options.destroy;
	    if (typeof options.final === 'function') this._final = options.final;
	    if (typeof options.construct === 'function') this._construct = options.construct;
	    if (options.signal) addAbortSignal(options.signal, this);
	  }
	  Stream.call(this, options);
	  destroyImpl.construct(this, () => {
	    const state = this._writableState;
	    if (!state.writing) {
	      clearBuffer(this, state);
	    }
	    finishMaybe(this, state);
	  });
	}
	ObjectDefineProperty(Writable, SymbolHasInstance, {
	  __proto__: null,
	  value: function (object) {
	    if (FunctionPrototypeSymbolHasInstance(this, object)) return true
	    if (this !== Writable) return false
	    return object && object._writableState instanceof WritableState
	  }
	});

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
	};
	function _write(stream, chunk, encoding, cb) {
	  const state = stream._writableState;
	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = state.defaultEncoding;
	  } else {
	    if (!encoding) encoding = state.defaultEncoding;
	    else if (encoding !== 'buffer' && !Buffer.isEncoding(encoding)) throw new ERR_UNKNOWN_ENCODING(encoding)
	    if (typeof cb !== 'function') cb = nop;
	  }
	  if (chunk === null) {
	    throw new ERR_STREAM_NULL_VALUES()
	  } else if (!state.objectMode) {
	    if (typeof chunk === 'string') {
	      if (state.decodeStrings !== false) {
	        chunk = Buffer.from(chunk, encoding);
	        encoding = 'buffer';
	      }
	    } else if (chunk instanceof Buffer) {
	      encoding = 'buffer';
	    } else if (Stream._isUint8Array(chunk)) {
	      chunk = Stream._uint8ArrayToBuffer(chunk);
	      encoding = 'buffer';
	    } else {
	      throw new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk)
	    }
	  }
	  let err;
	  if (state.ending) {
	    err = new ERR_STREAM_WRITE_AFTER_END();
	  } else if (state.destroyed) {
	    err = new ERR_STREAM_DESTROYED('write');
	  }
	  if (err) {
	    process.nextTick(cb, err);
	    errorOrDestroy(stream, err, true);
	    return err
	  }
	  state.pendingcb++;
	  return writeOrBuffer(stream, state, chunk, encoding, cb)
	}
	Writable.prototype.write = function (chunk, encoding, cb) {
	  return _write(this, chunk, encoding, cb) === true
	};
	Writable.prototype.cork = function () {
	  this._writableState.corked++;
	};
	Writable.prototype.uncork = function () {
	  const state = this._writableState;
	  if (state.corked) {
	    state.corked--;
	    if (!state.writing) clearBuffer(this, state);
	  }
	};
	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = StringPrototypeToLowerCase(encoding);
	  if (!Buffer.isEncoding(encoding)) throw new ERR_UNKNOWN_ENCODING(encoding)
	  this._writableState.defaultEncoding = encoding;
	  return this
	};

	// If we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, callback) {
	  const len = state.objectMode ? 1 : chunk.length;
	  state.length += len;

	  // stream._write resets state.length
	  const ret = state.length < state.highWaterMark;
	  // We must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;
	  if (state.writing || state.corked || state.errored || !state.constructed) {
	    state.buffered.push({
	      chunk,
	      encoding,
	      callback
	    });
	    if (state.allBuffers && encoding !== 'buffer') {
	      state.allBuffers = false;
	    }
	    if (state.allNoop && callback !== nop) {
	      state.allNoop = false;
	    }
	  } else {
	    state.writelen = len;
	    state.writecb = callback;
	    state.writing = true;
	    state.sync = true;
	    stream._write(chunk, encoding, state.onwrite);
	    state.sync = false;
	  }

	  // Return false if errored or destroyed in order to break
	  // any synchronous while(stream.write(data)) loops.
	  return ret && !state.errored && !state.destroyed
	}
	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));
	  else if (writev) stream._writev(chunk, state.onwrite);
	  else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}
	function onwriteError(stream, state, er, cb) {
	  --state.pendingcb;
	  cb(er);
	  // Ensure callbacks are invoked even when autoDestroy is
	  // not enabled. Passing `er` here doesn't make sense since
	  // it's related to one specific write, not to the buffered
	  // writes.
	  errorBuffer(state);
	  // This can emit error, but error must always follow cb.
	  errorOrDestroy(stream, er);
	}
	function onwrite(stream, er) {
	  const state = stream._writableState;
	  const sync = state.sync;
	  const cb = state.writecb;
	  if (typeof cb !== 'function') {
	    errorOrDestroy(stream, new ERR_MULTIPLE_CALLBACK());
	    return
	  }
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	  if (er) {
	    // Avoid V8 leak, https://github.com/nodejs/node/pull/34103#issuecomment-652002364
	    er.stack; // eslint-disable-line no-unused-expressions

	    if (!state.errored) {
	      state.errored = er;
	    }

	    // In case of duplex streams we need to notify the readable side of the
	    // error.
	    if (stream._readableState && !stream._readableState.errored) {
	      stream._readableState.errored = er;
	    }
	    if (sync) {
	      process.nextTick(onwriteError, stream, state, er, cb);
	    } else {
	      onwriteError(stream, state, er, cb);
	    }
	  } else {
	    if (state.buffered.length > state.bufferedIndex) {
	      clearBuffer(stream, state);
	    }
	    if (sync) {
	      // It is a common case that the callback passed to .write() is always
	      // the same. In that case, we do not schedule a new nextTick(), but
	      // rather just increase a counter, to improve performance and avoid
	      // memory allocations.
	      if (state.afterWriteTickInfo !== null && state.afterWriteTickInfo.cb === cb) {
	        state.afterWriteTickInfo.count++;
	      } else {
	        state.afterWriteTickInfo = {
	          count: 1,
	          cb,
	          stream,
	          state
	        };
	        process.nextTick(afterWriteTick, state.afterWriteTickInfo);
	      }
	    } else {
	      afterWrite(stream, state, 1, cb);
	    }
	  }
	}
	function afterWriteTick({ stream, state, count, cb }) {
	  state.afterWriteTickInfo = null;
	  return afterWrite(stream, state, count, cb)
	}
	function afterWrite(stream, state, count, cb) {
	  const needDrain = !state.ending && !stream.destroyed && state.length === 0 && state.needDrain;
	  if (needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	  while (count-- > 0) {
	    state.pendingcb--;
	    cb();
	  }
	  if (state.destroyed) {
	    errorBuffer(state);
	  }
	  finishMaybe(stream, state);
	}

	// If there's something in the buffer waiting, then invoke callbacks.
	function errorBuffer(state) {
	  if (state.writing) {
	    return
	  }
	  for (let n = state.bufferedIndex; n < state.buffered.length; ++n) {
	    var _state$errored;
	    const { chunk, callback } = state.buffered[n];
	    const len = state.objectMode ? 1 : chunk.length;
	    state.length -= len;
	    callback(
	      (_state$errored = state.errored) !== null && _state$errored !== undefined
	        ? _state$errored
	        : new ERR_STREAM_DESTROYED('write')
	    );
	  }
	  const onfinishCallbacks = state[kOnFinished].splice(0);
	  for (let i = 0; i < onfinishCallbacks.length; i++) {
	    var _state$errored2;
	    onfinishCallbacks[i](
	      (_state$errored2 = state.errored) !== null && _state$errored2 !== undefined
	        ? _state$errored2
	        : new ERR_STREAM_DESTROYED('end')
	    );
	  }
	  resetBuffer(state);
	}

	// If there's something in the buffer waiting, then process it.
	function clearBuffer(stream, state) {
	  if (state.corked || state.bufferProcessing || state.destroyed || !state.constructed) {
	    return
	  }
	  const { buffered, bufferedIndex, objectMode } = state;
	  const bufferedLength = buffered.length - bufferedIndex;
	  if (!bufferedLength) {
	    return
	  }
	  let i = bufferedIndex;
	  state.bufferProcessing = true;
	  if (bufferedLength > 1 && stream._writev) {
	    state.pendingcb -= bufferedLength - 1;
	    const callback = state.allNoop
	      ? nop
	      : (err) => {
	          for (let n = i; n < buffered.length; ++n) {
	            buffered[n].callback(err);
	          }
	        };
	    // Make a copy of `buffered` if it's going to be used by `callback` above,
	    // since `doWrite` will mutate the array.
	    const chunks = state.allNoop && i === 0 ? buffered : ArrayPrototypeSlice(buffered, i);
	    chunks.allBuffers = state.allBuffers;
	    doWrite(stream, state, true, state.length, chunks, '', callback);
	    resetBuffer(state);
	  } else {
	    do {
	      const { chunk, encoding, callback } = buffered[i];
	      buffered[i++] = null;
	      const len = objectMode ? 1 : chunk.length;
	      doWrite(stream, state, false, len, chunk, encoding, callback);
	    } while (i < buffered.length && !state.writing)
	    if (i === buffered.length) {
	      resetBuffer(state);
	    } else if (i > 256) {
	      buffered.splice(0, i);
	      state.bufferedIndex = 0;
	    } else {
	      state.bufferedIndex = i;
	    }
	  }
	  state.bufferProcessing = false;
	}
	Writable.prototype._write = function (chunk, encoding, cb) {
	  if (this._writev) {
	    this._writev(
	      [
	        {
	          chunk,
	          encoding
	        }
	      ],
	      cb
	    );
	  } else {
	    throw new ERR_METHOD_NOT_IMPLEMENTED('_write()')
	  }
	};
	Writable.prototype._writev = null;
	Writable.prototype.end = function (chunk, encoding, cb) {
	  const state = this._writableState;
	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	  let err;
	  if (chunk !== null && chunk !== undefined) {
	    const ret = _write(this, chunk, encoding);
	    if (ret instanceof Error) {
	      err = ret;
	    }
	  }

	  // .end() fully uncorks.
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }
	  if (err) ; else if (!state.errored && !state.ending) {
	    // This is forgiving in terms of unnecessary calls to end() and can hide
	    // logic errors. However, usually such errors are harmless and causing a
	    // hard error can be disproportionately destructive. It is not always
	    // trivial for the user to determine whether end() needs to be called
	    // or not.

	    state.ending = true;
	    finishMaybe(this, state, true);
	    state.ended = true;
	  } else if (state.finished) {
	    err = new ERR_STREAM_ALREADY_FINISHED('end');
	  } else if (state.destroyed) {
	    err = new ERR_STREAM_DESTROYED('end');
	  }
	  if (typeof cb === 'function') {
	    if (err || state.finished) {
	      process.nextTick(cb, err);
	    } else {
	      state[kOnFinished].push(cb);
	    }
	  }
	  return this
	};
	function needFinish(state) {
	  return (
	    state.ending &&
	    !state.destroyed &&
	    state.constructed &&
	    state.length === 0 &&
	    !state.errored &&
	    state.buffered.length === 0 &&
	    !state.finished &&
	    !state.writing &&
	    !state.errorEmitted &&
	    !state.closeEmitted
	  )
	}
	function callFinal(stream, state) {
	  let called = false;
	  function onFinish(err) {
	    if (called) {
	      errorOrDestroy(stream, err !== null && err !== undefined ? err : ERR_MULTIPLE_CALLBACK());
	      return
	    }
	    called = true;
	    state.pendingcb--;
	    if (err) {
	      const onfinishCallbacks = state[kOnFinished].splice(0);
	      for (let i = 0; i < onfinishCallbacks.length; i++) {
	        onfinishCallbacks[i](err);
	      }
	      errorOrDestroy(stream, err, state.sync);
	    } else if (needFinish(state)) {
	      state.prefinished = true;
	      stream.emit('prefinish');
	      // Backwards compat. Don't check state.sync here.
	      // Some streams assume 'finish' will be emitted
	      // asynchronously relative to _final callback.
	      state.pendingcb++;
	      process.nextTick(finish, stream, state);
	    }
	  }
	  state.sync = true;
	  state.pendingcb++;
	  try {
	    stream._final(onFinish);
	  } catch (err) {
	    onFinish(err);
	  }
	  state.sync = false;
	}
	function prefinish(stream, state) {
	  if (!state.prefinished && !state.finalCalled) {
	    if (typeof stream._final === 'function' && !state.destroyed) {
	      state.finalCalled = true;
	      callFinal(stream, state);
	    } else {
	      state.prefinished = true;
	      stream.emit('prefinish');
	    }
	  }
	}
	function finishMaybe(stream, state, sync) {
	  if (needFinish(state)) {
	    prefinish(stream, state);
	    if (state.pendingcb === 0) {
	      if (sync) {
	        state.pendingcb++;
	        process.nextTick(
	          (stream, state) => {
	            if (needFinish(state)) {
	              finish(stream, state);
	            } else {
	              state.pendingcb--;
	            }
	          },
	          stream,
	          state
	        );
	      } else if (needFinish(state)) {
	        state.pendingcb++;
	        finish(stream, state);
	      }
	    }
	  }
	}
	function finish(stream, state) {
	  state.pendingcb--;
	  state.finished = true;
	  const onfinishCallbacks = state[kOnFinished].splice(0);
	  for (let i = 0; i < onfinishCallbacks.length; i++) {
	    onfinishCallbacks[i]();
	  }
	  stream.emit('finish');
	  if (state.autoDestroy) {
	    // In case of duplex streams we need a way to detect
	    // if the readable side is ready for autoDestroy as well.
	    const rState = stream._readableState;
	    const autoDestroy =
	      !rState ||
	      (rState.autoDestroy &&
	        // We don't expect the readable to ever 'end'
	        // if readable is explicitly set to false.
	        (rState.endEmitted || rState.readable === false));
	    if (autoDestroy) {
	      stream.destroy();
	    }
	  }
	}
	ObjectDefineProperties(Writable.prototype, {
	  closed: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.closed : false
	    }
	  },
	  destroyed: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.destroyed : false
	    },
	    set(value) {
	      // Backward compatibility, the user is explicitly managing destroyed.
	      if (this._writableState) {
	        this._writableState.destroyed = value;
	      }
	    }
	  },
	  writable: {
	    __proto__: null,
	    get() {
	      const w = this._writableState;
	      // w.writable === false means that this is part of a Duplex stream
	      // where the writable side was disabled upon construction.
	      // Compat. The user might manually disable writable side through
	      // deprecated setter.
	      return !!w && w.writable !== false && !w.destroyed && !w.errored && !w.ending && !w.ended
	    },
	    set(val) {
	      // Backwards compatible.
	      if (this._writableState) {
	        this._writableState.writable = !!val;
	      }
	    }
	  },
	  writableFinished: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.finished : false
	    }
	  },
	  writableObjectMode: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.objectMode : false
	    }
	  },
	  writableBuffer: {
	    __proto__: null,
	    get() {
	      return this._writableState && this._writableState.getBuffer()
	    }
	  },
	  writableEnded: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.ending : false
	    }
	  },
	  writableNeedDrain: {
	    __proto__: null,
	    get() {
	      const wState = this._writableState;
	      if (!wState) return false
	      return !wState.destroyed && !wState.ending && wState.needDrain
	    }
	  },
	  writableHighWaterMark: {
	    __proto__: null,
	    get() {
	      return this._writableState && this._writableState.highWaterMark
	    }
	  },
	  writableCorked: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.corked : 0
	    }
	  },
	  writableLength: {
	    __proto__: null,
	    get() {
	      return this._writableState && this._writableState.length
	    }
	  },
	  errored: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._writableState ? this._writableState.errored : null
	    }
	  },
	  writableAborted: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return !!(
	        this._writableState.writable !== false &&
	        (this._writableState.destroyed || this._writableState.errored) &&
	        !this._writableState.finished
	      )
	    }
	  }
	});
	const destroy = destroyImpl.destroy;
	Writable.prototype.destroy = function (err, cb) {
	  const state = this._writableState;

	  // Invoke pending callbacks.
	  if (!state.destroyed && (state.bufferedIndex < state.buffered.length || state[kOnFinished].length)) {
	    process.nextTick(errorBuffer, state);
	  }
	  destroy.call(this, err, cb);
	  return this
	};
	Writable.prototype._undestroy = destroyImpl.undestroy;
	Writable.prototype._destroy = function (err, cb) {
	  cb(err);
	};
	Writable.prototype[EE.captureRejectionSymbol] = function (err) {
	  this.destroy(err);
	};
	let webStreamsAdapters;

	// Lazy to avoid circular references
	function lazyWebStreams() {
	  if (webStreamsAdapters === undefined) webStreamsAdapters = {};
	  return webStreamsAdapters
	}
	Writable.fromWeb = function (writableStream, options) {
	  return lazyWebStreams().newStreamWritableFromWritableStream(writableStream, options)
	};
	Writable.toWeb = function (streamWritable) {
	  return lazyWebStreams().newWritableStreamFromStreamWritable(streamWritable)
	};
	return writable;
}

/* replacement start */

var duplexify;
var hasRequiredDuplexify;

function requireDuplexify () {
	if (hasRequiredDuplexify) return duplexify;
	hasRequiredDuplexify = 1;
	const process = browserExports$1

	/* replacement end */

	;	const bufferModule = bufferRollup;
	const {
	  isReadable,
	  isWritable,
	  isIterable,
	  isNodeStream,
	  isReadableNodeStream,
	  isWritableNodeStream,
	  isDuplexNodeStream,
	  isReadableStream,
	  isWritableStream
	} = utils;
	const eos = endOfStreamExports;
	const {
	  AbortError,
	  codes: { ERR_INVALID_ARG_TYPE, ERR_INVALID_RETURN_VALUE }
	} = errors;
	const { destroyer } = destroy_1;
	const Duplex = requireDuplex();
	const Readable = requireReadable();
	const Writable = requireWritable();
	const { createDeferredPromise } = utilExports;
	const from = from_1;
	const Blob = globalThis.Blob || bufferModule.Blob;
	const isBlob =
	  typeof Blob !== 'undefined'
	    ? function isBlob(b) {
	        return b instanceof Blob
	      }
	    : function isBlob(b) {
	        return false
	      };
	const AbortController = globalThis.AbortController || requireBrowser().AbortController;
	const { FunctionPrototypeCall } = primordials;

	// This is needed for pre node 17.
	class Duplexify extends Duplex {
	  constructor(options) {
	    super(options);

	    // https://github.com/nodejs/node/pull/34385

	    if ((options === null || options === undefined ? undefined : options.readable) === false) {
	      this._readableState.readable = false;
	      this._readableState.ended = true;
	      this._readableState.endEmitted = true;
	    }
	    if ((options === null || options === undefined ? undefined : options.writable) === false) {
	      this._writableState.writable = false;
	      this._writableState.ending = true;
	      this._writableState.ended = true;
	      this._writableState.finished = true;
	    }
	  }
	}
	duplexify = function duplexify(body, name) {
	  if (isDuplexNodeStream(body)) {
	    return body
	  }
	  if (isReadableNodeStream(body)) {
	    return _duplexify({
	      readable: body
	    })
	  }
	  if (isWritableNodeStream(body)) {
	    return _duplexify({
	      writable: body
	    })
	  }
	  if (isNodeStream(body)) {
	    return _duplexify({
	      writable: false,
	      readable: false
	    })
	  }
	  if (isReadableStream(body)) {
	    return _duplexify({
	      readable: Readable.fromWeb(body)
	    })
	  }
	  if (isWritableStream(body)) {
	    return _duplexify({
	      writable: Writable.fromWeb(body)
	    })
	  }
	  if (typeof body === 'function') {
	    const { value, write, final, destroy } = fromAsyncGen(body);
	    if (isIterable(value)) {
	      return from(Duplexify, value, {
	        // TODO (ronag): highWaterMark?
	        objectMode: true,
	        write,
	        final,
	        destroy
	      })
	    }
	    const then = value === null || value === undefined ? undefined : value.then;
	    if (typeof then === 'function') {
	      let d;
	      const promise = FunctionPrototypeCall(
	        then,
	        value,
	        (val) => {
	          if (val != null) {
	            throw new ERR_INVALID_RETURN_VALUE('nully', 'body', val)
	          }
	        },
	        (err) => {
	          destroyer(d, err);
	        }
	      );
	      return (d = new Duplexify({
	        // TODO (ronag): highWaterMark?
	        objectMode: true,
	        readable: false,
	        write,
	        final(cb) {
	          final(async () => {
	            try {
	              await promise;
	              process.nextTick(cb, null);
	            } catch (err) {
	              process.nextTick(cb, err);
	            }
	          });
	        },
	        destroy
	      }))
	    }
	    throw new ERR_INVALID_RETURN_VALUE('Iterable, AsyncIterable or AsyncFunction', name, value)
	  }
	  if (isBlob(body)) {
	    return duplexify(body.arrayBuffer())
	  }
	  if (isIterable(body)) {
	    return from(Duplexify, body, {
	      // TODO (ronag): highWaterMark?
	      objectMode: true,
	      writable: false
	    })
	  }
	  if (
	    isReadableStream(body === null || body === undefined ? undefined : body.readable) &&
	    isWritableStream(body === null || body === undefined ? undefined : body.writable)
	  ) {
	    return Duplexify.fromWeb(body)
	  }
	  if (
	    typeof (body === null || body === undefined ? undefined : body.writable) === 'object' ||
	    typeof (body === null || body === undefined ? undefined : body.readable) === 'object'
	  ) {
	    const readable =
	      body !== null && body !== undefined && body.readable
	        ? isReadableNodeStream(body === null || body === undefined ? undefined : body.readable)
	          ? body === null || body === undefined
	            ? undefined
	            : body.readable
	          : duplexify(body.readable)
	        : undefined;
	    const writable =
	      body !== null && body !== undefined && body.writable
	        ? isWritableNodeStream(body === null || body === undefined ? undefined : body.writable)
	          ? body === null || body === undefined
	            ? undefined
	            : body.writable
	          : duplexify(body.writable)
	        : undefined;
	    return _duplexify({
	      readable,
	      writable
	    })
	  }
	  const then = body === null || body === undefined ? undefined : body.then;
	  if (typeof then === 'function') {
	    let d;
	    FunctionPrototypeCall(
	      then,
	      body,
	      (val) => {
	        if (val != null) {
	          d.push(val);
	        }
	        d.push(null);
	      },
	      (err) => {
	        destroyer(d, err);
	      }
	    );
	    return (d = new Duplexify({
	      objectMode: true,
	      writable: false,
	      read() {}
	    }))
	  }
	  throw new ERR_INVALID_ARG_TYPE(
	    name,
	    [
	      'Blob',
	      'ReadableStream',
	      'WritableStream',
	      'Stream',
	      'Iterable',
	      'AsyncIterable',
	      'Function',
	      '{ readable, writable } pair',
	      'Promise'
	    ],
	    body
	  )
	};
	function fromAsyncGen(fn) {
	  let { promise, resolve } = createDeferredPromise();
	  const ac = new AbortController();
	  const signal = ac.signal;
	  const value = fn(
	    (async function* () {
	      while (true) {
	        const _promise = promise;
	        promise = null;
	        const { chunk, done, cb } = await _promise;
	        process.nextTick(cb);
	        if (done) return
	        if (signal.aborted)
	          throw new AbortError(undefined, {
	            cause: signal.reason
	          })
	        ;({ promise, resolve } = createDeferredPromise());
	        yield chunk;
	      }
	    })(),
	    {
	      signal
	    }
	  );
	  return {
	    value,
	    write(chunk, encoding, cb) {
	      const _resolve = resolve;
	      resolve = null;
	      _resolve({
	        chunk,
	        done: false,
	        cb
	      });
	    },
	    final(cb) {
	      const _resolve = resolve;
	      resolve = null;
	      _resolve({
	        done: true,
	        cb
	      });
	    },
	    destroy(err, cb) {
	      ac.abort();
	      cb(err);
	    }
	  }
	}
	function _duplexify(pair) {
	  const r = pair.readable && typeof pair.readable.read !== 'function' ? Readable.wrap(pair.readable) : pair.readable;
	  const w = pair.writable;
	  let readable = !!isReadable(r);
	  let writable = !!isWritable(w);
	  let ondrain;
	  let onfinish;
	  let onreadable;
	  let onclose;
	  let d;
	  function onfinished(err) {
	    const cb = onclose;
	    onclose = null;
	    if (cb) {
	      cb(err);
	    } else if (err) {
	      d.destroy(err);
	    }
	  }

	  // TODO(ronag): Avoid double buffering.
	  // Implement Writable/Readable/Duplex traits.
	  // See, https://github.com/nodejs/node/pull/33515.
	  d = new Duplexify({
	    // TODO (ronag): highWaterMark?
	    readableObjectMode: !!(r !== null && r !== undefined && r.readableObjectMode),
	    writableObjectMode: !!(w !== null && w !== undefined && w.writableObjectMode),
	    readable,
	    writable
	  });
	  if (writable) {
	    eos(w, (err) => {
	      writable = false;
	      if (err) {
	        destroyer(r, err);
	      }
	      onfinished(err);
	    });
	    d._write = function (chunk, encoding, callback) {
	      if (w.write(chunk, encoding)) {
	        callback();
	      } else {
	        ondrain = callback;
	      }
	    };
	    d._final = function (callback) {
	      w.end();
	      onfinish = callback;
	    };
	    w.on('drain', function () {
	      if (ondrain) {
	        const cb = ondrain;
	        ondrain = null;
	        cb();
	      }
	    });
	    w.on('finish', function () {
	      if (onfinish) {
	        const cb = onfinish;
	        onfinish = null;
	        cb();
	      }
	    });
	  }
	  if (readable) {
	    eos(r, (err) => {
	      readable = false;
	      if (err) {
	        destroyer(r, err);
	      }
	      onfinished(err);
	    });
	    r.on('readable', function () {
	      if (onreadable) {
	        const cb = onreadable;
	        onreadable = null;
	        cb();
	      }
	    });
	    r.on('end', function () {
	      d.push(null);
	    });
	    d._read = function () {
	      while (true) {
	        const buf = r.read();
	        if (buf === null) {
	          onreadable = d._read;
	          return
	        }
	        if (!d.push(buf)) {
	          return
	        }
	      }
	    };
	  }
	  d._destroy = function (err, callback) {
	    if (!err && onclose !== null) {
	      err = new AbortError();
	    }
	    onreadable = null;
	    ondrain = null;
	    onfinish = null;
	    if (onclose === null) {
	      callback(err);
	    } else {
	      onclose = callback;
	      destroyer(w, err);
	      destroyer(r, err);
	    }
	  };
	  return d
	}
	return duplexify;
}

var duplex;
var hasRequiredDuplex;

function requireDuplex () {
	if (hasRequiredDuplex) return duplex;
	hasRequiredDuplex = 1;

	const {
	  ObjectDefineProperties,
	  ObjectGetOwnPropertyDescriptor,
	  ObjectKeys,
	  ObjectSetPrototypeOf
	} = primordials;
	duplex = Duplex;
	const Readable = requireReadable();
	const Writable = requireWritable();
	ObjectSetPrototypeOf(Duplex.prototype, Readable.prototype);
	ObjectSetPrototypeOf(Duplex, Readable);
	{
	  const keys = ObjectKeys(Writable.prototype);
	  // Allow the keys array to be GC'ed.
	  for (let i = 0; i < keys.length; i++) {
	    const method = keys[i];
	    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	  }
	}
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options)
	  Readable.call(this, options);
	  Writable.call(this, options);
	  if (options) {
	    this.allowHalfOpen = options.allowHalfOpen !== false;
	    if (options.readable === false) {
	      this._readableState.readable = false;
	      this._readableState.ended = true;
	      this._readableState.endEmitted = true;
	    }
	    if (options.writable === false) {
	      this._writableState.writable = false;
	      this._writableState.ending = true;
	      this._writableState.ended = true;
	      this._writableState.finished = true;
	    }
	  } else {
	    this.allowHalfOpen = true;
	  }
	}
	ObjectDefineProperties(Duplex.prototype, {
	  writable: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writable')
	  },
	  writableHighWaterMark: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableHighWaterMark')
	  },
	  writableObjectMode: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableObjectMode')
	  },
	  writableBuffer: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableBuffer')
	  },
	  writableLength: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableLength')
	  },
	  writableFinished: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableFinished')
	  },
	  writableCorked: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableCorked')
	  },
	  writableEnded: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableEnded')
	  },
	  writableNeedDrain: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableNeedDrain')
	  },
	  destroyed: {
	    __proto__: null,
	    get() {
	      if (this._readableState === undefined || this._writableState === undefined) {
	        return false
	      }
	      return this._readableState.destroyed && this._writableState.destroyed
	    },
	    set(value) {
	      // Backward compatibility, the user is explicitly
	      // managing destroyed.
	      if (this._readableState && this._writableState) {
	        this._readableState.destroyed = value;
	        this._writableState.destroyed = value;
	      }
	    }
	  }
	});
	let webStreamsAdapters;

	// Lazy to avoid circular references
	function lazyWebStreams() {
	  if (webStreamsAdapters === undefined) webStreamsAdapters = {};
	  return webStreamsAdapters
	}
	Duplex.fromWeb = function (pair, options) {
	  return lazyWebStreams().newStreamDuplexFromReadableWritablePair(pair, options)
	};
	Duplex.toWeb = function (duplex) {
	  return lazyWebStreams().newReadableWritablePairFromDuplex(duplex)
	};
	let duplexify;
	Duplex.from = function (body) {
	  if (!duplexify) {
	    duplexify = requireDuplexify();
	  }
	  return duplexify(body, 'body')
	};
	return duplex;
}

const { ObjectSetPrototypeOf: ObjectSetPrototypeOf$1, Symbol: Symbol$2 } = primordials;
var transform = Transform$1;
const { ERR_METHOD_NOT_IMPLEMENTED } = errors.codes;
const Duplex$2 = requireDuplex();
const { getHighWaterMark } = state;
ObjectSetPrototypeOf$1(Transform$1.prototype, Duplex$2.prototype);
ObjectSetPrototypeOf$1(Transform$1, Duplex$2);
const kCallback = Symbol$2('kCallback');
function Transform$1(options) {
  if (!(this instanceof Transform$1)) return new Transform$1(options)

  // TODO (ronag): This should preferably always be
  // applied but would be semver-major. Or even better;
  // make Transform a Readable with the Writable interface.
  const readableHighWaterMark = options ? getHighWaterMark(this, options, 'readableHighWaterMark', true) : null;
  if (readableHighWaterMark === 0) {
    // A Duplex will buffer both on the writable and readable side while
    // a Transform just wants to buffer hwm number of elements. To avoid
    // buffering twice we disable buffering on the writable side.
    options = {
      ...options,
      highWaterMark: null,
      readableHighWaterMark,
      // TODO (ronag): 0 is not optimal since we have
      // a "bug" where we check needDrain before calling _write and not after.
      // Refs: https://github.com/nodejs/node/pull/32887
      // Refs: https://github.com/nodejs/node/pull/35941
      writableHighWaterMark: options.writableHighWaterMark || 0
    };
  }
  Duplex$2.call(this, options);

  // We have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;
  this[kCallback] = null;
  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  // Backwards compat. Some Transform streams incorrectly implement _final
  // instead of or in addition to _flush. By using 'prefinish' instead of
  // implementing _final we continue supporting this unfortunate use case.
  this.on('prefinish', prefinish);
}
function final(cb) {
  if (typeof this._flush === 'function' && !this.destroyed) {
    this._flush((er, data) => {
      if (er) {
        if (cb) {
          cb(er);
        } else {
          this.destroy(er);
        }
        return
      }
      if (data != null) {
        this.push(data);
      }
      this.push(null);
      if (cb) {
        cb();
      }
    });
  } else {
    this.push(null);
    if (cb) {
      cb();
    }
  }
}
function prefinish() {
  if (this._final !== final) {
    final.call(this);
  }
}
Transform$1.prototype._final = final;
Transform$1.prototype._transform = function (chunk, encoding, callback) {
  throw new ERR_METHOD_NOT_IMPLEMENTED('_transform()')
};
Transform$1.prototype._write = function (chunk, encoding, callback) {
  const rState = this._readableState;
  const wState = this._writableState;
  const length = rState.length;
  this._transform(chunk, encoding, (err, val) => {
    if (err) {
      callback(err);
      return
    }
    if (val != null) {
      this.push(val);
    }
    if (
      wState.ended ||
      // Backwards compat.
      length === rState.length ||
      // Backwards compat.
      rState.length < rState.highWaterMark
    ) {
      callback();
    } else {
      this[kCallback] = callback;
    }
  });
};
Transform$1.prototype._read = function () {
  if (this[kCallback]) {
    const callback = this[kCallback];
    this[kCallback] = null;
    callback();
  }
};

const { ObjectSetPrototypeOf } = primordials;
var passthrough = PassThrough$1;
const Transform = transform;
ObjectSetPrototypeOf(PassThrough$1.prototype, Transform.prototype);
ObjectSetPrototypeOf(PassThrough$1, Transform);
function PassThrough$1(options) {
  if (!(this instanceof PassThrough$1)) return new PassThrough$1(options)
  Transform.call(this, options);
}
PassThrough$1.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/* replacement start */

const process = browserExports$1

/* replacement end */
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).

;const { ArrayIsArray, Promise: Promise$2, SymbolAsyncIterator, SymbolDispose } = primordials;
const eos$1 = endOfStreamExports;
const { once } = utilExports;
const destroyImpl = destroy_1;
const Duplex$1 = requireDuplex();
const {
  aggregateTwoErrors,
  codes: {
    ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE$2,
    ERR_INVALID_RETURN_VALUE,
    ERR_MISSING_ARGS: ERR_MISSING_ARGS$2,
    ERR_STREAM_DESTROYED,
    ERR_STREAM_PREMATURE_CLOSE
  },
  AbortError: AbortError$2
} = errors;
const { validateFunction, validateAbortSignal: validateAbortSignal$1 } = validators;
const {
  isIterable,
  isReadable: isReadable$1,
  isReadableNodeStream,
  isNodeStream: isNodeStream$2,
  isTransformStream: isTransformStream$1,
  isWebStream: isWebStream$1,
  isReadableStream: isReadableStream$1,
  isReadableFinished
} = utils;
const AbortController$1 = globalThis.AbortController || requireBrowser().AbortController;
let PassThrough;
let Readable;
let addAbortListener;
function destroyer$1(stream, reading, writing) {
  let finished = false;
  stream.on('close', () => {
    finished = true;
  });
  const cleanup = eos$1(
    stream,
    {
      readable: reading,
      writable: writing
    },
    (err) => {
      finished = !err;
    }
  );
  return {
    destroy: (err) => {
      if (finished) return
      finished = true;
      destroyImpl.destroyer(stream, err || new ERR_STREAM_DESTROYED('pipe'));
    },
    cleanup
  }
}
function popCallback(streams) {
  // Streams should never be an empty array. It should always contain at least
  // a single stream. Therefore optimize for the average case instead of
  // checking for length === 0 as well.
  validateFunction(streams[streams.length - 1], 'streams[stream.length - 1]');
  return streams.pop()
}
function makeAsyncIterable(val) {
  if (isIterable(val)) {
    return val
  } else if (isReadableNodeStream(val)) {
    // Legacy streams are not Iterable.
    return fromReadable(val)
  }
  throw new ERR_INVALID_ARG_TYPE$2('val', ['Readable', 'Iterable', 'AsyncIterable'], val)
}
async function* fromReadable(val) {
  if (!Readable) {
    Readable = requireReadable();
  }
  yield* Readable.prototype[SymbolAsyncIterator].call(val);
}
async function pumpToNode(iterable, writable, finish, { end }) {
  let error;
  let onresolve = null;
  const resume = (err) => {
    if (err) {
      error = err;
    }
    if (onresolve) {
      const callback = onresolve;
      onresolve = null;
      callback();
    }
  };
  const wait = () =>
    new Promise$2((resolve, reject) => {
      if (error) {
        reject(error);
      } else {
        onresolve = () => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        };
      }
    });
  writable.on('drain', resume);
  const cleanup = eos$1(
    writable,
    {
      readable: false
    },
    resume
  );
  try {
    if (writable.writableNeedDrain) {
      await wait();
    }
    for await (const chunk of iterable) {
      if (!writable.write(chunk)) {
        await wait();
      }
    }
    if (end) {
      writable.end();
      await wait();
    }
    finish();
  } catch (err) {
    finish(error !== err ? aggregateTwoErrors(error, err) : err);
  } finally {
    cleanup();
    writable.off('drain', resume);
  }
}
async function pumpToWeb(readable, writable, finish, { end }) {
  if (isTransformStream$1(writable)) {
    writable = writable.writable;
  }
  // https://streams.spec.whatwg.org/#example-manual-write-with-backpressure
  const writer = writable.getWriter();
  try {
    for await (const chunk of readable) {
      await writer.ready;
      writer.write(chunk).catch(() => {});
    }
    await writer.ready;
    if (end) {
      await writer.close();
    }
    finish();
  } catch (err) {
    try {
      await writer.abort(err);
      finish(err);
    } catch (err) {
      finish(err);
    }
  }
}
function pipeline$1(...streams) {
  return pipelineImpl(streams, once(popCallback(streams)))
}
function pipelineImpl(streams, callback, opts) {
  if (streams.length === 1 && ArrayIsArray(streams[0])) {
    streams = streams[0];
  }
  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS$2('streams')
  }
  const ac = new AbortController$1();
  const signal = ac.signal;
  const outerSignal = opts === null || opts === undefined ? undefined : opts.signal;

  // Need to cleanup event listeners if last stream is readable
  // https://github.com/nodejs/node/issues/35452
  const lastStreamCleanup = [];
  validateAbortSignal$1(outerSignal, 'options.signal');
  function abort() {
    finishImpl(new AbortError$2());
  }
  addAbortListener = addAbortListener || utilExports.addAbortListener;
  let disposable;
  if (outerSignal) {
    disposable = addAbortListener(outerSignal, abort);
  }
  let error;
  let value;
  const destroys = [];
  let finishCount = 0;
  function finish(err) {
    finishImpl(err, --finishCount === 0);
  }
  function finishImpl(err, final) {
    var _disposable;
    if (err && (!error || error.code === 'ERR_STREAM_PREMATURE_CLOSE')) {
      error = err;
    }
    if (!error && !final) {
      return
    }
    while (destroys.length) {
      destroys.shift()(error);
    }
(_disposable = disposable) === null || _disposable === undefined ? undefined : _disposable[SymbolDispose]();
    ac.abort();
    if (final) {
      if (!error) {
        lastStreamCleanup.forEach((fn) => fn());
      }
      process.nextTick(callback, error, value);
    }
  }
  let ret;
  for (let i = 0; i < streams.length; i++) {
    const stream = streams[i];
    const reading = i < streams.length - 1;
    const writing = i > 0;
    const end = reading || (opts === null || opts === undefined ? undefined : opts.end) !== false;
    const isLastStream = i === streams.length - 1;
    if (isNodeStream$2(stream)) {
      if (end) {
        const { destroy, cleanup } = destroyer$1(stream, reading, writing);
        destroys.push(destroy);
        if (isReadable$1(stream) && isLastStream) {
          lastStreamCleanup.push(cleanup);
        }
      }

      // Catch stream errors that occur after pipe/pump has completed.
      function onError(err) {
        if (err && err.name !== 'AbortError' && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
          finish(err);
        }
      }
      stream.on('error', onError);
      if (isReadable$1(stream) && isLastStream) {
        lastStreamCleanup.push(() => {
          stream.removeListener('error', onError);
        });
      }
    }
    if (i === 0) {
      if (typeof stream === 'function') {
        ret = stream({
          signal
        });
        if (!isIterable(ret)) {
          throw new ERR_INVALID_RETURN_VALUE('Iterable, AsyncIterable or Stream', 'source', ret)
        }
      } else if (isIterable(stream) || isReadableNodeStream(stream) || isTransformStream$1(stream)) {
        ret = stream;
      } else {
        ret = Duplex$1.from(stream);
      }
    } else if (typeof stream === 'function') {
      if (isTransformStream$1(ret)) {
        var _ret;
        ret = makeAsyncIterable((_ret = ret) === null || _ret === undefined ? undefined : _ret.readable);
      } else {
        ret = makeAsyncIterable(ret);
      }
      ret = stream(ret, {
        signal
      });
      if (reading) {
        if (!isIterable(ret, true)) {
          throw new ERR_INVALID_RETURN_VALUE('AsyncIterable', `transform[${i - 1}]`, ret)
        }
      } else {
        var _ret2;
        if (!PassThrough) {
          PassThrough = passthrough;
        }

        // If the last argument to pipeline is not a stream
        // we must create a proxy stream so that pipeline(...)
        // always returns a stream which can be further
        // composed through `.pipe(stream)`.

        const pt = new PassThrough({
          objectMode: true
        });

        // Handle Promises/A+ spec, `then` could be a getter that throws on
        // second use.
        const then = (_ret2 = ret) === null || _ret2 === undefined ? undefined : _ret2.then;
        if (typeof then === 'function') {
          finishCount++;
          then.call(
            ret,
            (val) => {
              value = val;
              if (val != null) {
                pt.write(val);
              }
              if (end) {
                pt.end();
              }
              process.nextTick(finish);
            },
            (err) => {
              pt.destroy(err);
              process.nextTick(finish, err);
            }
          );
        } else if (isIterable(ret, true)) {
          finishCount++;
          pumpToNode(ret, pt, finish, {
            end
          });
        } else if (isReadableStream$1(ret) || isTransformStream$1(ret)) {
          const toRead = ret.readable || ret;
          finishCount++;
          pumpToNode(toRead, pt, finish, {
            end
          });
        } else {
          throw new ERR_INVALID_RETURN_VALUE('AsyncIterable or Promise', 'destination', ret)
        }
        ret = pt;
        const { destroy, cleanup } = destroyer$1(ret, false, true);
        destroys.push(destroy);
        if (isLastStream) {
          lastStreamCleanup.push(cleanup);
        }
      }
    } else if (isNodeStream$2(stream)) {
      if (isReadableNodeStream(ret)) {
        finishCount += 2;
        const cleanup = pipe(ret, stream, finish, {
          end
        });
        if (isReadable$1(stream) && isLastStream) {
          lastStreamCleanup.push(cleanup);
        }
      } else if (isTransformStream$1(ret) || isReadableStream$1(ret)) {
        const toRead = ret.readable || ret;
        finishCount++;
        pumpToNode(toRead, stream, finish, {
          end
        });
      } else if (isIterable(ret)) {
        finishCount++;
        pumpToNode(ret, stream, finish, {
          end
        });
      } else {
        throw new ERR_INVALID_ARG_TYPE$2(
          'val',
          ['Readable', 'Iterable', 'AsyncIterable', 'ReadableStream', 'TransformStream'],
          ret
        )
      }
      ret = stream;
    } else if (isWebStream$1(stream)) {
      if (isReadableNodeStream(ret)) {
        finishCount++;
        pumpToWeb(makeAsyncIterable(ret), stream, finish, {
          end
        });
      } else if (isReadableStream$1(ret) || isIterable(ret)) {
        finishCount++;
        pumpToWeb(ret, stream, finish, {
          end
        });
      } else if (isTransformStream$1(ret)) {
        finishCount++;
        pumpToWeb(ret.readable, stream, finish, {
          end
        });
      } else {
        throw new ERR_INVALID_ARG_TYPE$2(
          'val',
          ['Readable', 'Iterable', 'AsyncIterable', 'ReadableStream', 'TransformStream'],
          ret
        )
      }
      ret = stream;
    } else {
      ret = Duplex$1.from(stream);
    }
  }
  if (
    (signal !== null && signal !== undefined && signal.aborted) ||
    (outerSignal !== null && outerSignal !== undefined && outerSignal.aborted)
  ) {
    process.nextTick(abort);
  }
  return ret
}
function pipe(src, dst, finish, { end }) {
  let ended = false;
  dst.on('close', () => {
    if (!ended) {
      // Finish if the destination closes before the source has completed.
      finish(new ERR_STREAM_PREMATURE_CLOSE());
    }
  });
  src.pipe(dst, {
    end: false
  }); // If end is true we already will have a listener to end dst.

  if (end) {
    // Compat. Before node v10.12.0 stdio used to throw an error so
    // pipe() did/does not end() stdio destinations.
    // Now they allow it but "secretly" don't close the underlying fd.

    function endFn() {
      ended = true;
      dst.end();
    }
    if (isReadableFinished(src)) {
      // End the destination if the source has already ended.
      process.nextTick(endFn);
    } else {
      src.once('end', endFn);
    }
  } else {
    finish();
  }
  eos$1(
    src,
    {
      readable: true,
      writable: false
    },
    (err) => {
      const rState = src._readableState;
      if (
        err &&
        err.code === 'ERR_STREAM_PREMATURE_CLOSE' &&
        rState &&
        rState.ended &&
        !rState.errored &&
        !rState.errorEmitted
      ) {
        // Some readable streams will emit 'close' before 'end'. However, since
        // this is on the readable side 'end' should still be emitted if the
        // stream has been ended and no error emitted. This should be allowed in
        // favor of backwards compatibility. Since the stream is piped to a
        // destination this should not result in any observable difference.
        // We don't need to check if this is a writable premature close since
        // eos will only fail with premature close on the reading side for
        // duplex streams.
        src.once('end', finish).once('error', finish);
      } else {
        finish(err);
      }
    }
  );
  return eos$1(
    dst,
    {
      readable: false,
      writable: true
    },
    finish
  )
}
var pipeline_1 = {
  pipelineImpl,
  pipeline: pipeline$1
};

const { pipeline } = pipeline_1;
const Duplex = requireDuplex();
const { destroyer } = destroy_1;
const {
  isNodeStream: isNodeStream$1,
  isReadable,
  isWritable: isWritable$1,
  isWebStream,
  isTransformStream,
  isWritableStream,
  isReadableStream
} = utils;
const {
  AbortError: AbortError$1,
  codes: { ERR_INVALID_ARG_VALUE: ERR_INVALID_ARG_VALUE$1, ERR_MISSING_ARGS: ERR_MISSING_ARGS$1 }
} = errors;
const eos = endOfStreamExports;
var compose$1 = function compose(...streams) {
  if (streams.length === 0) {
    throw new ERR_MISSING_ARGS$1('streams')
  }
  if (streams.length === 1) {
    return Duplex.from(streams[0])
  }
  const orgStreams = [...streams];
  if (typeof streams[0] === 'function') {
    streams[0] = Duplex.from(streams[0]);
  }
  if (typeof streams[streams.length - 1] === 'function') {
    const idx = streams.length - 1;
    streams[idx] = Duplex.from(streams[idx]);
  }
  for (let n = 0; n < streams.length; ++n) {
    if (!isNodeStream$1(streams[n]) && !isWebStream(streams[n])) {
      // TODO(ronag): Add checks for non streams.
      continue
    }
    if (
      n < streams.length - 1 &&
      !(isReadable(streams[n]) || isReadableStream(streams[n]) || isTransformStream(streams[n]))
    ) {
      throw new ERR_INVALID_ARG_VALUE$1(`streams[${n}]`, orgStreams[n], 'must be readable')
    }
    if (n > 0 && !(isWritable$1(streams[n]) || isWritableStream(streams[n]) || isTransformStream(streams[n]))) {
      throw new ERR_INVALID_ARG_VALUE$1(`streams[${n}]`, orgStreams[n], 'must be writable')
    }
  }
  let ondrain;
  let onfinish;
  let onreadable;
  let onclose;
  let d;
  function onfinished(err) {
    const cb = onclose;
    onclose = null;
    if (cb) {
      cb(err);
    } else if (err) {
      d.destroy(err);
    } else if (!readable && !writable) {
      d.destroy();
    }
  }
  const head = streams[0];
  const tail = pipeline(streams, onfinished);
  const writable = !!(isWritable$1(head) || isWritableStream(head) || isTransformStream(head));
  const readable = !!(isReadable(tail) || isReadableStream(tail) || isTransformStream(tail));

  // TODO(ronag): Avoid double buffering.
  // Implement Writable/Readable/Duplex traits.
  // See, https://github.com/nodejs/node/pull/33515.
  d = new Duplex({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(head !== null && head !== undefined && head.writableObjectMode),
    readableObjectMode: !!(tail !== null && tail !== undefined && tail.readableObjectMode),
    writable,
    readable
  });
  if (writable) {
    if (isNodeStream$1(head)) {
      d._write = function (chunk, encoding, callback) {
        if (head.write(chunk, encoding)) {
          callback();
        } else {
          ondrain = callback;
        }
      };
      d._final = function (callback) {
        head.end();
        onfinish = callback;
      };
      head.on('drain', function () {
        if (ondrain) {
          const cb = ondrain;
          ondrain = null;
          cb();
        }
      });
    } else if (isWebStream(head)) {
      const writable = isTransformStream(head) ? head.writable : head;
      const writer = writable.getWriter();
      d._write = async function (chunk, encoding, callback) {
        try {
          await writer.ready;
          writer.write(chunk).catch(() => {});
          callback();
        } catch (err) {
          callback(err);
        }
      };
      d._final = async function (callback) {
        try {
          await writer.ready;
          writer.close().catch(() => {});
          onfinish = callback;
        } catch (err) {
          callback(err);
        }
      };
    }
    const toRead = isTransformStream(tail) ? tail.readable : tail;
    eos(toRead, () => {
      if (onfinish) {
        const cb = onfinish;
        onfinish = null;
        cb();
      }
    });
  }
  if (readable) {
    if (isNodeStream$1(tail)) {
      tail.on('readable', function () {
        if (onreadable) {
          const cb = onreadable;
          onreadable = null;
          cb();
        }
      });
      tail.on('end', function () {
        d.push(null);
      });
      d._read = function () {
        while (true) {
          const buf = tail.read();
          if (buf === null) {
            onreadable = d._read;
            return
          }
          if (!d.push(buf)) {
            return
          }
        }
      };
    } else if (isWebStream(tail)) {
      const readable = isTransformStream(tail) ? tail.readable : tail;
      const reader = readable.getReader();
      d._read = async function () {
        while (true) {
          try {
            const { value, done } = await reader.read();
            if (!d.push(value)) {
              return
            }
            if (done) {
              d.push(null);
              return
            }
          } catch {
            return
          }
        }
      };
    }
  }
  d._destroy = function (err, callback) {
    if (!err && onclose !== null) {
      err = new AbortError$1();
    }
    onreadable = null;
    ondrain = null;
    onfinish = null;
    if (onclose === null) {
      callback(err);
    } else {
      onclose = callback;
      if (isNodeStream$1(tail)) {
        destroyer(tail, err);
      }
    }
  };
  return d
};

const AbortController = globalThis.AbortController || requireBrowser().AbortController;
const {
  codes: { ERR_INVALID_ARG_VALUE, ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE$1, ERR_MISSING_ARGS, ERR_OUT_OF_RANGE },
  AbortError
} = errors;
const { validateAbortSignal, validateInteger, validateObject } = validators;
const kWeakHandler = primordials.Symbol('kWeak');
const kResistStopPropagation = primordials.Symbol('kResistStopPropagation');
const { finished } = endOfStreamExports;
const staticCompose = compose$1;
const { addAbortSignalNoValidate } = addAbortSignalExports;
const { isWritable, isNodeStream } = utils;
const { deprecate } = utilExports;
const {
  ArrayPrototypePush,
  Boolean: Boolean$1,
  MathFloor,
  Number: Number$1,
  NumberIsNaN,
  Promise: Promise$1,
  PromiseReject,
  PromiseResolve,
  PromisePrototypeThen,
  Symbol: Symbol$1
} = primordials;
const kEmpty = Symbol$1('kEmpty');
const kEof = Symbol$1('kEof');
function compose(stream, options) {
  if (options != null) {
    validateObject(options, 'options');
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal');
  }
  if (isNodeStream(stream) && !isWritable(stream)) {
    throw new ERR_INVALID_ARG_VALUE('stream', stream, 'must be writable')
  }
  const composedStream = staticCompose(this, stream);
  if (options !== null && options !== undefined && options.signal) {
    // Not validating as we already validated before
    addAbortSignalNoValidate(options.signal, composedStream);
  }
  return composedStream
}
function map(fn, options) {
  if (typeof fn !== 'function') {
    throw new ERR_INVALID_ARG_TYPE$1('fn', ['Function', 'AsyncFunction'], fn)
  }
  if (options != null) {
    validateObject(options, 'options');
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal');
  }
  let concurrency = 1;
  if ((options === null || options === undefined ? undefined : options.concurrency) != null) {
    concurrency = MathFloor(options.concurrency);
  }
  let highWaterMark = concurrency - 1;
  if ((options === null || options === undefined ? undefined : options.highWaterMark) != null) {
    highWaterMark = MathFloor(options.highWaterMark);
  }
  validateInteger(concurrency, 'options.concurrency', 1);
  validateInteger(highWaterMark, 'options.highWaterMark', 0);
  highWaterMark += concurrency;
  return async function* map() {
    const signal = utilExports.AbortSignalAny(
      [options === null || options === undefined ? undefined : options.signal].filter(Boolean$1)
    );
    const stream = this;
    const queue = [];
    const signalOpt = {
      signal
    };
    let next;
    let resume;
    let done = false;
    let cnt = 0;
    function onCatch() {
      done = true;
      afterItemProcessed();
    }
    function afterItemProcessed() {
      cnt -= 1;
      maybeResume();
    }
    function maybeResume() {
      if (resume && !done && cnt < concurrency && queue.length < highWaterMark) {
        resume();
        resume = null;
      }
    }
    async function pump() {
      try {
        for await (let val of stream) {
          if (done) {
            return
          }
          if (signal.aborted) {
            throw new AbortError()
          }
          try {
            val = fn(val, signalOpt);
            if (val === kEmpty) {
              continue
            }
            val = PromiseResolve(val);
          } catch (err) {
            val = PromiseReject(err);
          }
          cnt += 1;
          PromisePrototypeThen(val, afterItemProcessed, onCatch);
          queue.push(val);
          if (next) {
            next();
            next = null;
          }
          if (!done && (queue.length >= highWaterMark || cnt >= concurrency)) {
            await new Promise$1((resolve) => {
              resume = resolve;
            });
          }
        }
        queue.push(kEof);
      } catch (err) {
        const val = PromiseReject(err);
        PromisePrototypeThen(val, afterItemProcessed, onCatch);
        queue.push(val);
      } finally {
        done = true;
        if (next) {
          next();
          next = null;
        }
      }
    }
    pump();
    try {
      while (true) {
        while (queue.length > 0) {
          const val = await queue[0];
          if (val === kEof) {
            return
          }
          if (signal.aborted) {
            throw new AbortError()
          }
          if (val !== kEmpty) {
            yield val;
          }
          queue.shift();
          maybeResume();
        }
        await new Promise$1((resolve) => {
          next = resolve;
        });
      }
    } finally {
      done = true;
      if (resume) {
        resume();
        resume = null;
      }
    }
  }.call(this)
}
function asIndexedPairs(options = undefined) {
  if (options != null) {
    validateObject(options, 'options');
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal');
  }
  return async function* asIndexedPairs() {
    let index = 0;
    for await (const val of this) {
      var _options$signal;
      if (
        options !== null &&
        options !== undefined &&
        (_options$signal = options.signal) !== null &&
        _options$signal !== undefined &&
        _options$signal.aborted
      ) {
        throw new AbortError({
          cause: options.signal.reason
        })
      }
      yield [index++, val];
    }
  }.call(this)
}
async function some(fn, options = undefined) {
  for await (const unused of filter.call(this, fn, options)) {
    return true
  }
  return false
}
async function every(fn, options = undefined) {
  if (typeof fn !== 'function') {
    throw new ERR_INVALID_ARG_TYPE$1('fn', ['Function', 'AsyncFunction'], fn)
  }
  // https://en.wikipedia.org/wiki/De_Morgan%27s_laws
  return !(await some.call(
    this,
    async (...args) => {
      return !(await fn(...args))
    },
    options
  ))
}
async function find(fn, options) {
  for await (const result of filter.call(this, fn, options)) {
    return result
  }
  return undefined
}
async function forEach(fn, options) {
  if (typeof fn !== 'function') {
    throw new ERR_INVALID_ARG_TYPE$1('fn', ['Function', 'AsyncFunction'], fn)
  }
  async function forEachFn(value, options) {
    await fn(value, options);
    return kEmpty
  }
  // eslint-disable-next-line no-unused-vars
  for await (const unused of map.call(this, forEachFn, options));
}
function filter(fn, options) {
  if (typeof fn !== 'function') {
    throw new ERR_INVALID_ARG_TYPE$1('fn', ['Function', 'AsyncFunction'], fn)
  }
  async function filterFn(value, options) {
    if (await fn(value, options)) {
      return value
    }
    return kEmpty
  }
  return map.call(this, filterFn, options)
}

// Specific to provide better error to reduce since the argument is only
// missing if the stream has no items in it - but the code is still appropriate
class ReduceAwareErrMissingArgs extends ERR_MISSING_ARGS {
  constructor() {
    super('reduce');
    this.message = 'Reduce of an empty stream requires an initial value';
  }
}
async function reduce(reducer, initialValue, options) {
  var _options$signal2;
  if (typeof reducer !== 'function') {
    throw new ERR_INVALID_ARG_TYPE$1('reducer', ['Function', 'AsyncFunction'], reducer)
  }
  if (options != null) {
    validateObject(options, 'options');
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal');
  }
  let hasInitialValue = arguments.length > 1;
  if (
    options !== null &&
    options !== undefined &&
    (_options$signal2 = options.signal) !== null &&
    _options$signal2 !== undefined &&
    _options$signal2.aborted
  ) {
    const err = new AbortError(undefined, {
      cause: options.signal.reason
    });
    this.once('error', () => {}); // The error is already propagated
    await finished(this.destroy(err));
    throw err
  }
  const ac = new AbortController();
  const signal = ac.signal;
  if (options !== null && options !== undefined && options.signal) {
    const opts = {
      once: true,
      [kWeakHandler]: this,
      [kResistStopPropagation]: true
    };
    options.signal.addEventListener('abort', () => ac.abort(), opts);
  }
  let gotAnyItemFromStream = false;
  try {
    for await (const value of this) {
      var _options$signal3;
      gotAnyItemFromStream = true;
      if (
        options !== null &&
        options !== undefined &&
        (_options$signal3 = options.signal) !== null &&
        _options$signal3 !== undefined &&
        _options$signal3.aborted
      ) {
        throw new AbortError()
      }
      if (!hasInitialValue) {
        initialValue = value;
        hasInitialValue = true;
      } else {
        initialValue = await reducer(initialValue, value, {
          signal
        });
      }
    }
    if (!gotAnyItemFromStream && !hasInitialValue) {
      throw new ReduceAwareErrMissingArgs()
    }
  } finally {
    ac.abort();
  }
  return initialValue
}
async function toArray(options) {
  if (options != null) {
    validateObject(options, 'options');
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal');
  }
  const result = [];
  for await (const val of this) {
    var _options$signal4;
    if (
      options !== null &&
      options !== undefined &&
      (_options$signal4 = options.signal) !== null &&
      _options$signal4 !== undefined &&
      _options$signal4.aborted
    ) {
      throw new AbortError(undefined, {
        cause: options.signal.reason
      })
    }
    ArrayPrototypePush(result, val);
  }
  return result
}
function flatMap(fn, options) {
  const values = map.call(this, fn, options);
  return async function* flatMap() {
    for await (const val of values) {
      yield* val;
    }
  }.call(this)
}
function toIntegerOrInfinity(number) {
  // We coerce here to align with the spec
  // https://github.com/tc39/proposal-iterator-helpers/issues/169
  number = Number$1(number);
  if (NumberIsNaN(number)) {
    return 0
  }
  if (number < 0) {
    throw new ERR_OUT_OF_RANGE('number', '>= 0', number)
  }
  return number
}
function drop(number, options = undefined) {
  if (options != null) {
    validateObject(options, 'options');
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal');
  }
  number = toIntegerOrInfinity(number);
  return async function* drop() {
    var _options$signal5;
    if (
      options !== null &&
      options !== undefined &&
      (_options$signal5 = options.signal) !== null &&
      _options$signal5 !== undefined &&
      _options$signal5.aborted
    ) {
      throw new AbortError()
    }
    for await (const val of this) {
      var _options$signal6;
      if (
        options !== null &&
        options !== undefined &&
        (_options$signal6 = options.signal) !== null &&
        _options$signal6 !== undefined &&
        _options$signal6.aborted
      ) {
        throw new AbortError()
      }
      if (number-- <= 0) {
        yield val;
      }
    }
  }.call(this)
}
function take(number, options = undefined) {
  if (options != null) {
    validateObject(options, 'options');
  }
  if ((options === null || options === undefined ? undefined : options.signal) != null) {
    validateAbortSignal(options.signal, 'options.signal');
  }
  number = toIntegerOrInfinity(number);
  return async function* take() {
    var _options$signal7;
    if (
      options !== null &&
      options !== undefined &&
      (_options$signal7 = options.signal) !== null &&
      _options$signal7 !== undefined &&
      _options$signal7.aborted
    ) {
      throw new AbortError()
    }
    for await (const val of this) {
      var _options$signal8;
      if (
        options !== null &&
        options !== undefined &&
        (_options$signal8 = options.signal) !== null &&
        _options$signal8 !== undefined &&
        _options$signal8.aborted
      ) {
        throw new AbortError()
      }
      if (number-- > 0) {
        yield val;
      }

      // Don't get another item from iterator in case we reached the end
      if (number <= 0) {
        return
      }
    }
  }.call(this)
}
operators.streamReturningOperators = {
  asIndexedPairs: deprecate(asIndexedPairs, 'readable.asIndexedPairs will be removed in a future version.'),
  drop,
  filter,
  flatMap,
  map,
  take,
  compose
};
operators.promiseReturningOperators = {
  every,
  forEach,
  reduce,
  toArray,
  some,
  find
};

var promises$2;
var hasRequiredPromises;

function requirePromises () {
	if (hasRequiredPromises) return promises$2;
	hasRequiredPromises = 1;

	const { ArrayPrototypePop, Promise } = primordials;
	const { isIterable, isNodeStream, isWebStream } = utils;
	const { pipelineImpl: pl } = pipeline_1;
	const { finished } = endOfStreamExports;
	requireStream();
	function pipeline(...streams) {
	  return new Promise((resolve, reject) => {
	    let signal;
	    let end;
	    const lastArg = streams[streams.length - 1];
	    if (
	      lastArg &&
	      typeof lastArg === 'object' &&
	      !isNodeStream(lastArg) &&
	      !isIterable(lastArg) &&
	      !isWebStream(lastArg)
	    ) {
	      const options = ArrayPrototypePop(streams);
	      signal = options.signal;
	      end = options.end;
	    }
	    pl(
	      streams,
	      (err, value) => {
	        if (err) {
	          reject(err);
	        } else {
	          resolve(value);
	        }
	      },
	      {
	        signal,
	        end
	      }
	    );
	  })
	}
	promises$2 = {
	  finished,
	  pipeline
	};
	return promises$2;
}

/* replacement start */

var hasRequiredStream;

function requireStream () {
	if (hasRequiredStream) return stream.exports;
	hasRequiredStream = 1;
	const { Buffer } = bufferRollup

	/* replacement end */
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	;	const { ObjectDefineProperty, ObjectKeys, ReflectApply } = primordials;
	const {
	  promisify: { custom: customPromisify }
	} = utilExports;
	const { streamReturningOperators, promiseReturningOperators } = operators;
	const {
	  codes: { ERR_ILLEGAL_CONSTRUCTOR }
	} = errors;
	const compose = compose$1;
	const { setDefaultHighWaterMark, getDefaultHighWaterMark } = state;
	const { pipeline } = pipeline_1;
	const { destroyer } = destroy_1;
	const eos = endOfStreamExports;
	const promises = requirePromises();
	const utils$1 = utils;
	const Stream = (stream.exports = legacy.Stream);
	Stream.isDestroyed = utils$1.isDestroyed;
	Stream.isDisturbed = utils$1.isDisturbed;
	Stream.isErrored = utils$1.isErrored;
	Stream.isReadable = utils$1.isReadable;
	Stream.isWritable = utils$1.isWritable;
	Stream.Readable = requireReadable();
	for (const key of ObjectKeys(streamReturningOperators)) {
	  const op = streamReturningOperators[key];
	  function fn(...args) {
	    if (new.target) {
	      throw ERR_ILLEGAL_CONSTRUCTOR()
	    }
	    return Stream.Readable.from(ReflectApply(op, this, args))
	  }
	  ObjectDefineProperty(fn, 'name', {
	    __proto__: null,
	    value: op.name
	  });
	  ObjectDefineProperty(fn, 'length', {
	    __proto__: null,
	    value: op.length
	  });
	  ObjectDefineProperty(Stream.Readable.prototype, key, {
	    __proto__: null,
	    value: fn,
	    enumerable: false,
	    configurable: true,
	    writable: true
	  });
	}
	for (const key of ObjectKeys(promiseReturningOperators)) {
	  const op = promiseReturningOperators[key];
	  function fn(...args) {
	    if (new.target) {
	      throw ERR_ILLEGAL_CONSTRUCTOR()
	    }
	    return ReflectApply(op, this, args)
	  }
	  ObjectDefineProperty(fn, 'name', {
	    __proto__: null,
	    value: op.name
	  });
	  ObjectDefineProperty(fn, 'length', {
	    __proto__: null,
	    value: op.length
	  });
	  ObjectDefineProperty(Stream.Readable.prototype, key, {
	    __proto__: null,
	    value: fn,
	    enumerable: false,
	    configurable: true,
	    writable: true
	  });
	}
	Stream.Writable = requireWritable();
	Stream.Duplex = requireDuplex();
	Stream.Transform = transform;
	Stream.PassThrough = passthrough;
	Stream.pipeline = pipeline;
	const { addAbortSignal } = addAbortSignalExports;
	Stream.addAbortSignal = addAbortSignal;
	Stream.finished = eos;
	Stream.destroy = destroyer;
	Stream.compose = compose;
	Stream.setDefaultHighWaterMark = setDefaultHighWaterMark;
	Stream.getDefaultHighWaterMark = getDefaultHighWaterMark;
	ObjectDefineProperty(Stream, 'promises', {
	  __proto__: null,
	  configurable: true,
	  enumerable: true,
	  get() {
	    return promises
	  }
	});
	ObjectDefineProperty(pipeline, customPromisify, {
	  __proto__: null,
	  enumerable: true,
	  get() {
	    return promises.pipeline
	  }
	});
	ObjectDefineProperty(eos, customPromisify, {
	  __proto__: null,
	  enumerable: true,
	  get() {
	    return promises.finished
	  }
	});

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;
	Stream._isUint8Array = function isUint8Array(value) {
	  return value instanceof Uint8Array
	};
	Stream._uint8ArrayToBuffer = function _uint8ArrayToBuffer(chunk) {
	  return Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength)
	};
	return stream.exports;
}

(function (module) {

	const CustomStream = requireStream();
	const promises = requirePromises();
	const originalDestroy = CustomStream.Readable.destroy;
	module.exports = CustomStream.Readable;

	// Explicit export naming is needed for ESM
	module.exports._uint8ArrayToBuffer = CustomStream._uint8ArrayToBuffer;
	module.exports._isUint8Array = CustomStream._isUint8Array;
	module.exports.isDisturbed = CustomStream.isDisturbed;
	module.exports.isErrored = CustomStream.isErrored;
	module.exports.isReadable = CustomStream.isReadable;
	module.exports.Readable = CustomStream.Readable;
	module.exports.Writable = CustomStream.Writable;
	module.exports.Duplex = CustomStream.Duplex;
	module.exports.Transform = CustomStream.Transform;
	module.exports.PassThrough = CustomStream.PassThrough;
	module.exports.addAbortSignal = CustomStream.addAbortSignal;
	module.exports.finished = CustomStream.finished;
	module.exports.destroy = CustomStream.destroy;
	module.exports.destroy = originalDestroy;
	module.exports.pipeline = CustomStream.pipeline;
	module.exports.compose = CustomStream.compose;
	Object.defineProperty(CustomStream, 'promises', {
	  configurable: true,
	  enumerable: true,
	  get() {
	    return promises
	  }
	});
	module.exports.Stream = CustomStream.Stream;

	// Allow default importing
	module.exports.default = module.exports; 
} (browser$1));

var browserExports = browser$1.exports;

var promises$1 = {};

var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(promises$1, "__esModule", { value: true });
promises$1.FileHandle = void 0;
function promisify(vol, fn, getResult) {
    if (getResult === void 0) { getResult = function (input) { return input; }; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            vol[fn].bind(vol).apply(void 0, __spreadArray(__spreadArray([], args, false), [function (error, result) {
                    if (error)
                        return reject(error);
                    return resolve(getResult(result));
                }], false));
        });
    };
}
var FileHandle = /** @class */ (function () {
    function FileHandle(vol, fd) {
        this.vol = vol;
        this.fd = fd;
    }
    FileHandle.prototype.appendFile = function (data, options) {
        return promisify(this.vol, 'appendFile')(this.fd, data, options);
    };
    FileHandle.prototype.chmod = function (mode) {
        return promisify(this.vol, 'fchmod')(this.fd, mode);
    };
    FileHandle.prototype.chown = function (uid, gid) {
        return promisify(this.vol, 'fchown')(this.fd, uid, gid);
    };
    FileHandle.prototype.close = function () {
        return promisify(this.vol, 'close')(this.fd);
    };
    FileHandle.prototype.datasync = function () {
        return promisify(this.vol, 'fdatasync')(this.fd);
    };
    FileHandle.prototype.read = function (buffer, offset, length, position) {
        return promisify(this.vol, 'read', function (bytesRead) { return ({ bytesRead: bytesRead, buffer: buffer }); })(this.fd, buffer, offset, length, position);
    };
    FileHandle.prototype.readFile = function (options) {
        return promisify(this.vol, 'readFile')(this.fd, options);
    };
    FileHandle.prototype.stat = function (options) {
        return promisify(this.vol, 'fstat')(this.fd, options);
    };
    FileHandle.prototype.sync = function () {
        return promisify(this.vol, 'fsync')(this.fd);
    };
    FileHandle.prototype.truncate = function (len) {
        return promisify(this.vol, 'ftruncate')(this.fd, len);
    };
    FileHandle.prototype.utimes = function (atime, mtime) {
        return promisify(this.vol, 'futimes')(this.fd, atime, mtime);
    };
    FileHandle.prototype.write = function (buffer, offset, length, position) {
        return promisify(this.vol, 'write', function (bytesWritten) { return ({ bytesWritten: bytesWritten, buffer: buffer }); })(this.fd, buffer, offset, length, position);
    };
    FileHandle.prototype.writeFile = function (data, options) {
        return promisify(this.vol, 'writeFile')(this.fd, data, options);
    };
    return FileHandle;
}());
promises$1.FileHandle = FileHandle;
function createPromisesApi(vol) {
    if (typeof Promise === 'undefined')
        return null;
    return {
        FileHandle: FileHandle,
        access: function (path, mode) {
            return promisify(vol, 'access')(path, mode);
        },
        appendFile: function (path, data, options) {
            return promisify(vol, 'appendFile')(path instanceof FileHandle ? path.fd : path, data, options);
        },
        chmod: function (path, mode) {
            return promisify(vol, 'chmod')(path, mode);
        },
        chown: function (path, uid, gid) {
            return promisify(vol, 'chown')(path, uid, gid);
        },
        copyFile: function (src, dest, flags) {
            return promisify(vol, 'copyFile')(src, dest, flags);
        },
        lchmod: function (path, mode) {
            return promisify(vol, 'lchmod')(path, mode);
        },
        lchown: function (path, uid, gid) {
            return promisify(vol, 'lchown')(path, uid, gid);
        },
        link: function (existingPath, newPath) {
            return promisify(vol, 'link')(existingPath, newPath);
        },
        lstat: function (path, options) {
            return promisify(vol, 'lstat')(path, options);
        },
        mkdir: function (path, options) {
            return promisify(vol, 'mkdir')(path, options);
        },
        mkdtemp: function (prefix, options) {
            return promisify(vol, 'mkdtemp')(prefix, options);
        },
        open: function (path, flags, mode) {
            return promisify(vol, 'open', function (fd) { return new FileHandle(vol, fd); })(path, flags, mode);
        },
        readdir: function (path, options) {
            return promisify(vol, 'readdir')(path, options);
        },
        readFile: function (id, options) {
            return promisify(vol, 'readFile')(id instanceof FileHandle ? id.fd : id, options);
        },
        readlink: function (path, options) {
            return promisify(vol, 'readlink')(path, options);
        },
        realpath: function (path, options) {
            return promisify(vol, 'realpath')(path, options);
        },
        rename: function (oldPath, newPath) {
            return promisify(vol, 'rename')(oldPath, newPath);
        },
        rmdir: function (path) {
            return promisify(vol, 'rmdir')(path);
        },
        rm: function (path, options) {
            return promisify(vol, 'rm')(path, options);
        },
        stat: function (path, options) {
            return promisify(vol, 'stat')(path, options);
        },
        symlink: function (target, path, type) {
            return promisify(vol, 'symlink')(target, path, type);
        },
        truncate: function (path, len) {
            return promisify(vol, 'truncate')(path, len);
        },
        unlink: function (path) {
            return promisify(vol, 'unlink')(path);
        },
        utimes: function (path, atime, mtime) {
            return promisify(vol, 'utimes')(path, atime, mtime);
        },
        writeFile: function (id, data, options) {
            return promisify(vol, 'writeFile')(id instanceof FileHandle ? id.fd : id, data, options);
        },
    };
}
promises$1.default = createPromisesApi;

var url = {};

var hasRequiredUrl;

function requireUrl () {
	if (hasRequiredUrl) return url;
	hasRequiredUrl = 1;
	if (typeof URL === 'undefined') {
	  throw new Error('URL is not supported in this environment')
	}

	url.URL = URL;
	return url;
}

var correctPath = {};

var hasRequiredCorrectPath;

function requireCorrectPath () {
	if (hasRequiredCorrectPath) return correctPath;
	hasRequiredCorrectPath = 1;

	Object.defineProperty(correctPath, "__esModule", {
	  value: true
	});
	correctPath.correctPath = correctPath$1;
	correctPath.unixify = unixify;
	var isWin = process$6.platform === 'win32';
	function removeTrailingSeparator(str) {
	  var i = str.length - 1;
	  if (i < 2) {
	    return str;
	  }
	  while (isSeparator(str, i)) {
	    i--;
	  }
	  return str.substr(0, i + 1);
	}
	function isSeparator(str, i) {
	  var _char = str[i];
	  return i > 0 && (_char === '/' || isWin && _char === '\\');
	}
	function normalizePath(str, stripTrailing) {
	  if (typeof str !== 'string') {
	    throw new TypeError('expected a string');
	  }
	  str = str.replace(/[\\\/]+/g, '/');
	  if (stripTrailing !== false) {
	    str = removeTrailingSeparator(str);
	  }
	  return str;
	}
	function unixify(filepath) {
	  var stripTrailing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  if (isWin) {
	    filepath = normalizePath(filepath, stripTrailing);
	    return filepath.replace(/^([a-zA-Z]+:|\.\/)/, '');
	  }
	  return filepath;
	}
	function correctPath$1(filepath) {
	  return unixify(filepath.replace(/^\\\\\?\\.:\\/, '\\'));
	}
	return correctPath;
}

(function (exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        if (typeof b !== "function" && b !== null)
	            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FSWatcher = exports.StatWatcher = exports.Volume = exports.toUnixTimestamp = exports.bufferToEncoding = exports.dataToBuffer = exports.dataToStr = exports.pathToSteps = exports.filenameToSteps = exports.pathToFilename = exports.flagsToNumber = exports.FLAGS = void 0;
	var pathModule = pathBrowserify;
	var node_1 = node;
	var Stats_1 = Stats$2;
	var Dirent_1 = Dirent$2;
	var buffer_1 = buffer;
	var setImmediate_1 = setImmediate$1;
	var process_1 = process$4;
	var setTimeoutUnref_1 = setTimeoutUnref$1;
	var stream_1 = browserExports;
	var constants_1 = constants$1;
	var events_1 = eventsExports;
	var encoding_1 = encoding;
	var errors = errors$1;
	var util = util$1;
	var promises_1 = promises$1;
	var resolveCrossPlatform = pathModule.resolve;
	var O_RDONLY = constants_1.constants.O_RDONLY, O_WRONLY = constants_1.constants.O_WRONLY, O_RDWR = constants_1.constants.O_RDWR, O_CREAT = constants_1.constants.O_CREAT, O_EXCL = constants_1.constants.O_EXCL, O_TRUNC = constants_1.constants.O_TRUNC, O_APPEND = constants_1.constants.O_APPEND, O_SYNC = constants_1.constants.O_SYNC, O_DIRECTORY = constants_1.constants.O_DIRECTORY, F_OK = constants_1.constants.F_OK, COPYFILE_EXCL = constants_1.constants.COPYFILE_EXCL, COPYFILE_FICLONE_FORCE = constants_1.constants.COPYFILE_FICLONE_FORCE;
	var _a = pathModule.posix ? pathModule.posix : pathModule, sep = _a.sep, relative = _a.relative, join = _a.join, dirname = _a.dirname;
	var isWin = process_1.default.platform === 'win32';
	var kMinPoolSpace = 128;
	// const kMaxLength = require('buffer').kMaxLength;
	// ---------------------------------------- Error messages
	// TODO: Use `internal/errors.js` in the future.
	var ERRSTR = {
	    PATH_STR: 'path must be a string or Buffer',
	    // FD:             'file descriptor must be a unsigned 32-bit integer',
	    FD: 'fd must be a file descriptor',
	    MODE_INT: 'mode must be an int',
	    CB: 'callback must be a function',
	    UID: 'uid must be an unsigned int',
	    GID: 'gid must be an unsigned int',
	    LEN: 'len must be an integer',
	    ATIME: 'atime must be an integer',
	    MTIME: 'mtime must be an integer',
	    PREFIX: 'filename prefix is required',
	    BUFFER: 'buffer must be an instance of Buffer or StaticBuffer',
	    OFFSET: 'offset must be an integer',
	    LENGTH: 'length must be an integer',
	    POSITION: 'position must be an integer',
	};
	var ERRSTR_OPTS = function (tipeof) { return "Expected options to be either an object or a string, but got ".concat(tipeof, " instead"); };
	// const ERRSTR_FLAG = flag => `Unknown file open flag: ${flag}`;
	var ENOENT = 'ENOENT';
	var EBADF = 'EBADF';
	var EINVAL = 'EINVAL';
	var EPERM = 'EPERM';
	var EPROTO = 'EPROTO';
	var EEXIST = 'EEXIST';
	var ENOTDIR = 'ENOTDIR';
	var EMFILE = 'EMFILE';
	var EACCES = 'EACCES';
	var EISDIR = 'EISDIR';
	var ENOTEMPTY = 'ENOTEMPTY';
	var ENOSYS = 'ENOSYS';
	var ERR_FS_EISDIR = 'ERR_FS_EISDIR';
	function formatError(errorCode, func, path, path2) {
	    if (func === void 0) { func = ''; }
	    if (path === void 0) { path = ''; }
	    if (path2 === void 0) { path2 = ''; }
	    var pathFormatted = '';
	    if (path)
	        pathFormatted = " '".concat(path, "'");
	    if (path2)
	        pathFormatted += " -> '".concat(path2, "'");
	    switch (errorCode) {
	        case ENOENT:
	            return "ENOENT: no such file or directory, ".concat(func).concat(pathFormatted);
	        case EBADF:
	            return "EBADF: bad file descriptor, ".concat(func).concat(pathFormatted);
	        case EINVAL:
	            return "EINVAL: invalid argument, ".concat(func).concat(pathFormatted);
	        case EPERM:
	            return "EPERM: operation not permitted, ".concat(func).concat(pathFormatted);
	        case EPROTO:
	            return "EPROTO: protocol error, ".concat(func).concat(pathFormatted);
	        case EEXIST:
	            return "EEXIST: file already exists, ".concat(func).concat(pathFormatted);
	        case ENOTDIR:
	            return "ENOTDIR: not a directory, ".concat(func).concat(pathFormatted);
	        case EISDIR:
	            return "EISDIR: illegal operation on a directory, ".concat(func).concat(pathFormatted);
	        case EACCES:
	            return "EACCES: permission denied, ".concat(func).concat(pathFormatted);
	        case ENOTEMPTY:
	            return "ENOTEMPTY: directory not empty, ".concat(func).concat(pathFormatted);
	        case EMFILE:
	            return "EMFILE: too many open files, ".concat(func).concat(pathFormatted);
	        case ENOSYS:
	            return "ENOSYS: function not implemented, ".concat(func).concat(pathFormatted);
	        case ERR_FS_EISDIR:
	            return "[ERR_FS_EISDIR]: Path is a directory: ".concat(func, " returned EISDIR (is a directory) ").concat(path);
	        default:
	            return "".concat(errorCode, ": error occurred, ").concat(func).concat(pathFormatted);
	    }
	}
	function createError(errorCode, func, path, path2, Constructor) {
	    if (func === void 0) { func = ''; }
	    if (path === void 0) { path = ''; }
	    if (path2 === void 0) { path2 = ''; }
	    if (Constructor === void 0) { Constructor = Error; }
	    var error = new Constructor(formatError(errorCode, func, path, path2));
	    error.code = errorCode;
	    if (path) {
	        error.path = path;
	    }
	    return error;
	}
	// ---------------------------------------- Flags
	// List of file `flags` as defined by Node.
	var FLAGS;
	(function (FLAGS) {
	    // Open file for reading. An exception occurs if the file does not exist.
	    FLAGS[FLAGS["r"] = O_RDONLY] = "r";
	    // Open file for reading and writing. An exception occurs if the file does not exist.
	    FLAGS[FLAGS["r+"] = O_RDWR] = "r+";
	    // Open file for reading in synchronous mode. Instructs the operating system to bypass the local file system cache.
	    FLAGS[FLAGS["rs"] = O_RDONLY | O_SYNC] = "rs";
	    FLAGS[FLAGS["sr"] = FLAGS.rs] = "sr";
	    // Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
	    FLAGS[FLAGS["rs+"] = O_RDWR | O_SYNC] = "rs+";
	    FLAGS[FLAGS["sr+"] = FLAGS['rs+']] = "sr+";
	    // Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
	    FLAGS[FLAGS["w"] = O_WRONLY | O_CREAT | O_TRUNC] = "w";
	    // Like 'w' but fails if path exists.
	    FLAGS[FLAGS["wx"] = O_WRONLY | O_CREAT | O_TRUNC | O_EXCL] = "wx";
	    FLAGS[FLAGS["xw"] = FLAGS.wx] = "xw";
	    // Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
	    FLAGS[FLAGS["w+"] = O_RDWR | O_CREAT | O_TRUNC] = "w+";
	    // Like 'w+' but fails if path exists.
	    FLAGS[FLAGS["wx+"] = O_RDWR | O_CREAT | O_TRUNC | O_EXCL] = "wx+";
	    FLAGS[FLAGS["xw+"] = FLAGS['wx+']] = "xw+";
	    // Open file for appending. The file is created if it does not exist.
	    FLAGS[FLAGS["a"] = O_WRONLY | O_APPEND | O_CREAT] = "a";
	    // Like 'a' but fails if path exists.
	    FLAGS[FLAGS["ax"] = O_WRONLY | O_APPEND | O_CREAT | O_EXCL] = "ax";
	    FLAGS[FLAGS["xa"] = FLAGS.ax] = "xa";
	    // Open file for reading and appending. The file is created if it does not exist.
	    FLAGS[FLAGS["a+"] = O_RDWR | O_APPEND | O_CREAT] = "a+";
	    // Like 'a+' but fails if path exists.
	    FLAGS[FLAGS["ax+"] = O_RDWR | O_APPEND | O_CREAT | O_EXCL] = "ax+";
	    FLAGS[FLAGS["xa+"] = FLAGS['ax+']] = "xa+";
	})(FLAGS = exports.FLAGS || (exports.FLAGS = {}));
	function flagsToNumber(flags) {
	    if (typeof flags === 'number')
	        return flags;
	    if (typeof flags === 'string') {
	        var flagsNum = FLAGS[flags];
	        if (typeof flagsNum !== 'undefined')
	            return flagsNum;
	    }
	    // throw new TypeError(formatError(ERRSTR_FLAG(flags)));
	    throw new errors.TypeError('ERR_INVALID_OPT_VALUE', 'flags', flags);
	}
	exports.flagsToNumber = flagsToNumber;
	// ---------------------------------------- Options
	function getOptions(defaults, options) {
	    var opts;
	    if (!options)
	        return defaults;
	    else {
	        var tipeof = typeof options;
	        switch (tipeof) {
	            case 'string':
	                opts = Object.assign({}, defaults, { encoding: options });
	                break;
	            case 'object':
	                opts = Object.assign({}, defaults, options);
	                break;
	            default:
	                throw TypeError(ERRSTR_OPTS(tipeof));
	        }
	    }
	    if (opts.encoding !== 'buffer')
	        (0, encoding_1.assertEncoding)(opts.encoding);
	    return opts;
	}
	function optsGenerator(defaults) {
	    return function (options) { return getOptions(defaults, options); };
	}
	function validateCallback(callback) {
	    if (typeof callback !== 'function')
	        throw TypeError(ERRSTR.CB);
	    return callback;
	}
	function optsAndCbGenerator(getOpts) {
	    return function (options, callback) {
	        return typeof options === 'function' ? [getOpts(), options] : [getOpts(options), validateCallback(callback)];
	    };
	}
	var optsDefaults = {
	    encoding: 'utf8',
	};
	var getDefaultOpts = optsGenerator(optsDefaults);
	var getDefaultOptsAndCb = optsAndCbGenerator(getDefaultOpts);
	var readFileOptsDefaults = {
	    flag: 'r',
	};
	var getReadFileOptions = optsGenerator(readFileOptsDefaults);
	var writeFileDefaults = {
	    encoding: 'utf8',
	    mode: 438 /* MODE.DEFAULT */,
	    flag: FLAGS[FLAGS.w],
	};
	var getWriteFileOptions = optsGenerator(writeFileDefaults);
	var appendFileDefaults = {
	    encoding: 'utf8',
	    mode: 438 /* MODE.DEFAULT */,
	    flag: FLAGS[FLAGS.a],
	};
	var getAppendFileOpts = optsGenerator(appendFileDefaults);
	var getAppendFileOptsAndCb = optsAndCbGenerator(getAppendFileOpts);
	var realpathDefaults = optsDefaults;
	var getRealpathOptions = optsGenerator(realpathDefaults);
	var getRealpathOptsAndCb = optsAndCbGenerator(getRealpathOptions);
	var mkdirDefaults = {
	    mode: 511 /* MODE.DIR */,
	    recursive: false,
	};
	var getMkdirOptions = function (options) {
	    if (typeof options === 'number')
	        return Object.assign({}, mkdirDefaults, { mode: options });
	    return Object.assign({}, mkdirDefaults, options);
	};
	var rmdirDefaults = {
	    recursive: false,
	};
	var getRmdirOptions = function (options) {
	    return Object.assign({}, rmdirDefaults, options);
	};
	var getRmOpts = optsGenerator(optsDefaults);
	var getRmOptsAndCb = optsAndCbGenerator(getRmOpts);
	var readdirDefaults = {
	    encoding: 'utf8',
	    withFileTypes: false,
	};
	var getReaddirOptions = optsGenerator(readdirDefaults);
	var getReaddirOptsAndCb = optsAndCbGenerator(getReaddirOptions);
	var statDefaults = {
	    bigint: false,
	};
	var getStatOptions = function (options) {
	    if (options === void 0) { options = {}; }
	    return Object.assign({}, statDefaults, options);
	};
	var getStatOptsAndCb = function (options, callback) {
	    return typeof options === 'function' ? [getStatOptions(), options] : [getStatOptions(options), validateCallback(callback)];
	};
	// ---------------------------------------- Utility functions
	function getPathFromURLPosix(url) {
	    if (url.hostname !== '') {
	        throw new errors.TypeError('ERR_INVALID_FILE_URL_HOST', process_1.default.platform);
	    }
	    var pathname = url.pathname;
	    for (var n = 0; n < pathname.length; n++) {
	        if (pathname[n] === '%') {
	            var third = pathname.codePointAt(n + 2) | 0x20;
	            if (pathname[n + 1] === '2' && third === 102) {
	                throw new errors.TypeError('ERR_INVALID_FILE_URL_PATH', 'must not include encoded / characters');
	            }
	        }
	    }
	    return decodeURIComponent(pathname);
	}
	function pathToFilename(path) {
	    if (typeof path !== 'string' && !buffer_1.Buffer.isBuffer(path)) {
	        try {
	            if (!(path instanceof requireUrl().URL))
	                throw new TypeError(ERRSTR.PATH_STR);
	        }
	        catch (err) {
	            throw new TypeError(ERRSTR.PATH_STR);
	        }
	        path = getPathFromURLPosix(path);
	    }
	    var pathString = String(path);
	    nullCheck(pathString);
	    // return slash(pathString);
	    return pathString;
	}
	exports.pathToFilename = pathToFilename;
	var resolve = function (filename, base) {
	    if (base === void 0) { base = process_1.default.cwd(); }
	    return resolveCrossPlatform(base, filename);
	};
	if (isWin) {
	    var _resolve_1 = resolve;
	    var unixify_1 = requireCorrectPath().unixify;
	    resolve = function (filename, base) { return unixify_1(_resolve_1(filename, base)); };
	}
	function filenameToSteps(filename, base) {
	    var fullPath = resolve(filename, base);
	    var fullPathSansSlash = fullPath.substring(1);
	    if (!fullPathSansSlash)
	        return [];
	    return fullPathSansSlash.split(sep);
	}
	exports.filenameToSteps = filenameToSteps;
	function pathToSteps(path) {
	    return filenameToSteps(pathToFilename(path));
	}
	exports.pathToSteps = pathToSteps;
	function dataToStr(data, encoding) {
	    if (encoding === void 0) { encoding = encoding_1.ENCODING_UTF8; }
	    if (buffer_1.Buffer.isBuffer(data))
	        return data.toString(encoding);
	    else if (data instanceof Uint8Array)
	        return (0, buffer_1.bufferFrom)(data).toString(encoding);
	    else
	        return String(data);
	}
	exports.dataToStr = dataToStr;
	function dataToBuffer(data, encoding) {
	    if (encoding === void 0) { encoding = encoding_1.ENCODING_UTF8; }
	    if (buffer_1.Buffer.isBuffer(data))
	        return data;
	    else if (data instanceof Uint8Array)
	        return (0, buffer_1.bufferFrom)(data);
	    else
	        return (0, buffer_1.bufferFrom)(String(data), encoding);
	}
	exports.dataToBuffer = dataToBuffer;
	function bufferToEncoding(buffer, encoding) {
	    if (!encoding || encoding === 'buffer')
	        return buffer;
	    else
	        return buffer.toString(encoding);
	}
	exports.bufferToEncoding = bufferToEncoding;
	function nullCheck(path, callback) {
	    if (('' + path).indexOf('\u0000') !== -1) {
	        var er = new Error('Path must be a string without null bytes');
	        er.code = ENOENT;
	        if (typeof callback !== 'function')
	            throw er;
	        process_1.default.nextTick(callback, er);
	        return false;
	    }
	    return true;
	}
	function _modeToNumber(mode, def) {
	    if (typeof mode === 'number')
	        return mode;
	    if (typeof mode === 'string')
	        return parseInt(mode, 8);
	    if (def)
	        return modeToNumber(def);
	    return undefined;
	}
	function modeToNumber(mode, def) {
	    var result = _modeToNumber(mode, def);
	    if (typeof result !== 'number' || isNaN(result))
	        throw new TypeError(ERRSTR.MODE_INT);
	    return result;
	}
	function isFd(path) {
	    return path >>> 0 === path;
	}
	function validateFd(fd) {
	    if (!isFd(fd))
	        throw TypeError(ERRSTR.FD);
	}
	// converts Date or number to a fractional UNIX timestamp
	function toUnixTimestamp(time) {
	    // tslint:disable-next-line triple-equals
	    if (typeof time === 'string' && +time == time) {
	        return +time;
	    }
	    if (time instanceof Date) {
	        return time.getTime() / 1000;
	    }
	    if (isFinite(time)) {
	        if (time < 0) {
	            return Date.now() / 1000;
	        }
	        return time;
	    }
	    throw new Error('Cannot parse time: ' + time);
	}
	exports.toUnixTimestamp = toUnixTimestamp;
	function validateUid(uid) {
	    if (typeof uid !== 'number')
	        throw TypeError(ERRSTR.UID);
	}
	function validateGid(gid) {
	    if (typeof gid !== 'number')
	        throw TypeError(ERRSTR.GID);
	}
	function flattenJSON(nestedJSON) {
	    var flatJSON = {};
	    function flatten(pathPrefix, node) {
	        for (var path in node) {
	            var contentOrNode = node[path];
	            var joinedPath = join(pathPrefix, path);
	            if (typeof contentOrNode === 'string') {
	                flatJSON[joinedPath] = contentOrNode;
	            }
	            else if (typeof contentOrNode === 'object' && contentOrNode !== null && Object.keys(contentOrNode).length > 0) {
	                // empty directories need an explicit entry and therefore get handled in `else`, non-empty ones are implicitly considered
	                flatten(joinedPath, contentOrNode);
	            }
	            else {
	                // without this branch null, empty-object or non-object entries would not be handled in the same way
	                // by both fromJSON() and fromNestedJSON()
	                flatJSON[joinedPath] = null;
	            }
	        }
	    }
	    flatten('', nestedJSON);
	    return flatJSON;
	}
	/**
	 * `Volume` represents a file system.
	 */
	var Volume = /** @class */ (function () {
	    function Volume(props) {
	        if (props === void 0) { props = {}; }
	        // I-node number counter.
	        this.ino = 0;
	        // A mapping for i-node numbers to i-nodes (`Node`);
	        this.inodes = {};
	        // List of released i-node numbers, for reuse.
	        this.releasedInos = [];
	        // A mapping for file descriptors to `File`s.
	        this.fds = {};
	        // A list of reusable (opened and closed) file descriptors, that should be
	        // used first before creating a new file descriptor.
	        this.releasedFds = [];
	        // Max number of open files.
	        this.maxFiles = 10000;
	        // Current number of open files.
	        this.openFiles = 0;
	        this.promisesApi = (0, promises_1.default)(this);
	        this.statWatchers = {};
	        this.props = Object.assign({ Node: node_1.Node, Link: node_1.Link, File: node_1.File }, props);
	        var root = this.createLink();
	        root.setNode(this.createNode(true));
	        var self = this; // tslint:disable-line no-this-assignment
	        this.StatWatcher = /** @class */ (function (_super) {
	            __extends(StatWatcher, _super);
	            function StatWatcher() {
	                return _super.call(this, self) || this;
	            }
	            return StatWatcher;
	        }(StatWatcher));
	        var _ReadStream = FsReadStream;
	        this.ReadStream = /** @class */ (function (_super) {
	            __extends(class_1, _super);
	            function class_1() {
	                var args = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    args[_i] = arguments[_i];
	                }
	                return _super.apply(this, __spreadArray([self], args, false)) || this;
	            }
	            return class_1;
	        }(_ReadStream));
	        var _WriteStream = FsWriteStream;
	        this.WriteStream = /** @class */ (function (_super) {
	            __extends(class_2, _super);
	            function class_2() {
	                var args = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    args[_i] = arguments[_i];
	                }
	                return _super.apply(this, __spreadArray([self], args, false)) || this;
	            }
	            return class_2;
	        }(_WriteStream));
	        this.FSWatcher = /** @class */ (function (_super) {
	            __extends(FSWatcher, _super);
	            function FSWatcher() {
	                return _super.call(this, self) || this;
	            }
	            return FSWatcher;
	        }(FSWatcher));
	        root.setChild('.', root);
	        root.getNode().nlink++;
	        root.setChild('..', root);
	        root.getNode().nlink++;
	        this.root = root;
	    }
	    Volume.fromJSON = function (json, cwd) {
	        var vol = new Volume();
	        vol.fromJSON(json, cwd);
	        return vol;
	    };
	    Volume.fromNestedJSON = function (json, cwd) {
	        var vol = new Volume();
	        vol.fromNestedJSON(json, cwd);
	        return vol;
	    };
	    Object.defineProperty(Volume.prototype, "promises", {
	        get: function () {
	            if (this.promisesApi === null)
	                throw new Error('Promise is not supported in this environment.');
	            return this.promisesApi;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Volume.prototype.createLink = function (parent, name, isDirectory, perm) {
	        if (isDirectory === void 0) { isDirectory = false; }
	        if (!parent) {
	            return new this.props.Link(this, null, '');
	        }
	        if (!name) {
	            throw new Error('createLink: name cannot be empty');
	        }
	        return parent.createChild(name, this.createNode(isDirectory, perm));
	    };
	    Volume.prototype.deleteLink = function (link) {
	        var parent = link.parent;
	        if (parent) {
	            parent.deleteChild(link);
	            return true;
	        }
	        return false;
	    };
	    Volume.prototype.newInoNumber = function () {
	        var releasedFd = this.releasedInos.pop();
	        if (releasedFd)
	            return releasedFd;
	        else {
	            this.ino = (this.ino + 1) % 0xffffffff;
	            return this.ino;
	        }
	    };
	    Volume.prototype.newFdNumber = function () {
	        var releasedFd = this.releasedFds.pop();
	        return typeof releasedFd === 'number' ? releasedFd : Volume.fd--;
	    };
	    Volume.prototype.createNode = function (isDirectory, perm) {
	        if (isDirectory === void 0) { isDirectory = false; }
	        var node = new this.props.Node(this.newInoNumber(), perm);
	        if (isDirectory)
	            node.setIsDirectory();
	        this.inodes[node.ino] = node;
	        return node;
	    };
	    Volume.prototype.getNode = function (ino) {
	        return this.inodes[ino];
	    };
	    Volume.prototype.deleteNode = function (node) {
	        node.del();
	        delete this.inodes[node.ino];
	        this.releasedInos.push(node.ino);
	    };
	    // Generates 6 character long random string, used by `mkdtemp`.
	    Volume.prototype.genRndStr = function () {
	        var str = (Math.random() + 1).toString(36).substring(2, 8);
	        if (str.length === 6)
	            return str;
	        else
	            return this.genRndStr();
	    };
	    // Returns a `Link` (hard link) referenced by path "split" into steps.
	    Volume.prototype.getLink = function (steps) {
	        return this.root.walk(steps);
	    };
	    // Just link `getLink`, but throws a correct user error, if link to found.
	    Volume.prototype.getLinkOrThrow = function (filename, funcName) {
	        var steps = filenameToSteps(filename);
	        var link = this.getLink(steps);
	        if (!link)
	            throw createError(ENOENT, funcName, filename);
	        return link;
	    };
	    // Just like `getLink`, but also dereference/resolves symbolic links.
	    Volume.prototype.getResolvedLink = function (filenameOrSteps) {
	        var steps = typeof filenameOrSteps === 'string' ? filenameToSteps(filenameOrSteps) : filenameOrSteps;
	        var link = this.root;
	        var i = 0;
	        while (i < steps.length) {
	            var step = steps[i];
	            link = link.getChild(step);
	            if (!link)
	                return null;
	            var node = link.getNode();
	            if (node.isSymlink()) {
	                steps = node.symlink.concat(steps.slice(i + 1));
	                link = this.root;
	                i = 0;
	                continue;
	            }
	            i++;
	        }
	        return link;
	    };
	    // Just like `getLinkOrThrow`, but also dereference/resolves symbolic links.
	    Volume.prototype.getResolvedLinkOrThrow = function (filename, funcName) {
	        var link = this.getResolvedLink(filename);
	        if (!link)
	            throw createError(ENOENT, funcName, filename);
	        return link;
	    };
	    Volume.prototype.resolveSymlinks = function (link) {
	        // let node: Node = link.getNode();
	        // while(link && node.isSymlink()) {
	        //     link = this.getLink(node.symlink);
	        //     if(!link) return null;
	        //     node = link.getNode();
	        // }
	        // return link;
	        return this.getResolvedLink(link.steps.slice(1));
	    };
	    // Just like `getLinkOrThrow`, but also verifies that the link is a directory.
	    Volume.prototype.getLinkAsDirOrThrow = function (filename, funcName) {
	        var link = this.getLinkOrThrow(filename, funcName);
	        if (!link.getNode().isDirectory())
	            throw createError(ENOTDIR, funcName, filename);
	        return link;
	    };
	    // Get the immediate parent directory of the link.
	    Volume.prototype.getLinkParent = function (steps) {
	        return this.root.walk(steps, steps.length - 1);
	    };
	    Volume.prototype.getLinkParentAsDirOrThrow = function (filenameOrSteps, funcName) {
	        var steps = filenameOrSteps instanceof Array ? filenameOrSteps : filenameToSteps(filenameOrSteps);
	        var link = this.getLinkParent(steps);
	        if (!link)
	            throw createError(ENOENT, funcName, sep + steps.join(sep));
	        if (!link.getNode().isDirectory())
	            throw createError(ENOTDIR, funcName, sep + steps.join(sep));
	        return link;
	    };
	    Volume.prototype.getFileByFd = function (fd) {
	        return this.fds[String(fd)];
	    };
	    Volume.prototype.getFileByFdOrThrow = function (fd, funcName) {
	        if (!isFd(fd))
	            throw TypeError(ERRSTR.FD);
	        var file = this.getFileByFd(fd);
	        if (!file)
	            throw createError(EBADF, funcName);
	        return file;
	    };
	    /**
	     * @todo This is not used anymore. Remove.
	     */
	    /*
	    private getNodeByIdOrCreate(id: TFileId, flags: number, perm: number): Node {
	      if (typeof id === 'number') {
	        const file = this.getFileByFd(id);
	        if (!file) throw Error('File nto found');
	        return file.node;
	      } else {
	        const steps = pathToSteps(id as PathLike);
	        let link = this.getLink(steps);
	        if (link) return link.getNode();
	  
	        // Try creating a node if not found.
	        if (flags & O_CREAT) {
	          const dirLink = this.getLinkParent(steps);
	          if (dirLink) {
	            const name = steps[steps.length - 1];
	            link = this.createLink(dirLink, name, false, perm);
	            return link.getNode();
	          }
	        }
	  
	        throw createError(ENOENT, 'getNodeByIdOrCreate', pathToFilename(id));
	      }
	    }
	    */
	    Volume.prototype.wrapAsync = function (method, args, callback) {
	        var _this = this;
	        validateCallback(callback);
	        (0, setImmediate_1.default)(function () {
	            var result;
	            try {
	                result = method.apply(_this, args);
	            }
	            catch (err) {
	                callback(err);
	                return;
	            }
	            callback(null, result);
	        });
	    };
	    Volume.prototype._toJSON = function (link, json, path) {
	        var _a;
	        if (link === void 0) { link = this.root; }
	        if (json === void 0) { json = {}; }
	        var isEmpty = true;
	        var children = link.children;
	        if (link.getNode().isFile()) {
	            children = (_a = {}, _a[link.getName()] = link.parent.getChild(link.getName()), _a);
	            link = link.parent;
	        }
	        for (var name_1 in children) {
	            if (name_1 === '.' || name_1 === '..') {
	                continue;
	            }
	            isEmpty = false;
	            var child = link.getChild(name_1);
	            if (!child) {
	                throw new Error('_toJSON: unexpected undefined');
	            }
	            var node = child.getNode();
	            if (node.isFile()) {
	                var filename = child.getPath();
	                if (path)
	                    filename = relative(path, filename);
	                json[filename] = node.getString();
	            }
	            else if (node.isDirectory()) {
	                this._toJSON(child, json, path);
	            }
	        }
	        var dirPath = link.getPath();
	        if (path)
	            dirPath = relative(path, dirPath);
	        if (dirPath && isEmpty) {
	            json[dirPath] = null;
	        }
	        return json;
	    };
	    Volume.prototype.toJSON = function (paths, json, isRelative) {
	        if (json === void 0) { json = {}; }
	        if (isRelative === void 0) { isRelative = false; }
	        var links = [];
	        if (paths) {
	            if (!(paths instanceof Array))
	                paths = [paths];
	            for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
	                var path = paths_1[_i];
	                var filename = pathToFilename(path);
	                var link = this.getResolvedLink(filename);
	                if (!link)
	                    continue;
	                links.push(link);
	            }
	        }
	        else {
	            links.push(this.root);
	        }
	        if (!links.length)
	            return json;
	        for (var _a = 0, links_1 = links; _a < links_1.length; _a++) {
	            var link = links_1[_a];
	            this._toJSON(link, json, isRelative ? link.getPath() : '');
	        }
	        return json;
	    };
	    Volume.prototype.fromJSON = function (json, cwd) {
	        if (cwd === void 0) { cwd = process_1.default.cwd(); }
	        for (var filename in json) {
	            var data = json[filename];
	            filename = resolve(filename, cwd);
	            if (typeof data === 'string') {
	                var dir = dirname(filename);
	                this.mkdirpBase(dir, 511 /* MODE.DIR */);
	                this.writeFileSync(filename, data);
	            }
	            else {
	                this.mkdirpBase(filename, 511 /* MODE.DIR */);
	            }
	        }
	    };
	    Volume.prototype.fromNestedJSON = function (json, cwd) {
	        this.fromJSON(flattenJSON(json), cwd);
	    };
	    Volume.prototype.reset = function () {
	        this.ino = 0;
	        this.inodes = {};
	        this.releasedInos = [];
	        this.fds = {};
	        this.releasedFds = [];
	        this.openFiles = 0;
	        this.root = this.createLink();
	        this.root.setNode(this.createNode(true));
	    };
	    // Legacy interface
	    Volume.prototype.mountSync = function (mountpoint, json) {
	        this.fromJSON(json, mountpoint);
	    };
	    Volume.prototype.openLink = function (link, flagsNum, resolveSymlinks) {
	        if (resolveSymlinks === void 0) { resolveSymlinks = true; }
	        if (this.openFiles >= this.maxFiles) {
	            // Too many open files.
	            throw createError(EMFILE, 'open', link.getPath());
	        }
	        // Resolve symlinks.
	        var realLink = link;
	        if (resolveSymlinks)
	            realLink = this.resolveSymlinks(link);
	        if (!realLink)
	            throw createError(ENOENT, 'open', link.getPath());
	        var node = realLink.getNode();
	        // Check whether node is a directory
	        if (node.isDirectory()) {
	            if ((flagsNum & (O_RDONLY | O_RDWR | O_WRONLY)) !== O_RDONLY)
	                throw createError(EISDIR, 'open', link.getPath());
	        }
	        else {
	            if (flagsNum & O_DIRECTORY)
	                throw createError(ENOTDIR, 'open', link.getPath());
	        }
	        // Check node permissions
	        if (!(flagsNum & O_WRONLY)) {
	            if (!node.canRead()) {
	                throw createError(EACCES, 'open', link.getPath());
	            }
	        }
	        var file = new this.props.File(link, node, flagsNum, this.newFdNumber());
	        this.fds[file.fd] = file;
	        this.openFiles++;
	        if (flagsNum & O_TRUNC)
	            file.truncate();
	        return file;
	    };
	    Volume.prototype.openFile = function (filename, flagsNum, modeNum, resolveSymlinks) {
	        if (resolveSymlinks === void 0) { resolveSymlinks = true; }
	        var steps = filenameToSteps(filename);
	        var link = resolveSymlinks ? this.getResolvedLink(steps) : this.getLink(steps);
	        if (link && flagsNum & O_EXCL)
	            throw createError(EEXIST, 'open', filename);
	        // Try creating a new file, if it does not exist.
	        if (!link && flagsNum & O_CREAT) {
	            // const dirLink: Link = this.getLinkParent(steps);
	            var dirLink = this.getResolvedLink(steps.slice(0, steps.length - 1));
	            // if(!dirLink) throw createError(ENOENT, 'open', filename);
	            if (!dirLink)
	                throw createError(ENOENT, 'open', sep + steps.join(sep));
	            if (flagsNum & O_CREAT && typeof modeNum === 'number') {
	                link = this.createLink(dirLink, steps[steps.length - 1], false, modeNum);
	            }
	        }
	        if (link)
	            return this.openLink(link, flagsNum, resolveSymlinks);
	        throw createError(ENOENT, 'open', filename);
	    };
	    Volume.prototype.openBase = function (filename, flagsNum, modeNum, resolveSymlinks) {
	        if (resolveSymlinks === void 0) { resolveSymlinks = true; }
	        var file = this.openFile(filename, flagsNum, modeNum, resolveSymlinks);
	        if (!file)
	            throw createError(ENOENT, 'open', filename);
	        return file.fd;
	    };
	    Volume.prototype.openSync = function (path, flags, mode) {
	        if (mode === void 0) { mode = 438 /* MODE.DEFAULT */; }
	        // Validate (1) mode; (2) path; (3) flags - in that order.
	        var modeNum = modeToNumber(mode);
	        var fileName = pathToFilename(path);
	        var flagsNum = flagsToNumber(flags);
	        return this.openBase(fileName, flagsNum, modeNum);
	    };
	    Volume.prototype.open = function (path, flags, a, b) {
	        var mode = a;
	        var callback = b;
	        if (typeof a === 'function') {
	            mode = 438 /* MODE.DEFAULT */;
	            callback = a;
	        }
	        mode = mode || 438 /* MODE.DEFAULT */;
	        var modeNum = modeToNumber(mode);
	        var fileName = pathToFilename(path);
	        var flagsNum = flagsToNumber(flags);
	        this.wrapAsync(this.openBase, [fileName, flagsNum, modeNum], callback);
	    };
	    Volume.prototype.closeFile = function (file) {
	        if (!this.fds[file.fd])
	            return;
	        this.openFiles--;
	        delete this.fds[file.fd];
	        this.releasedFds.push(file.fd);
	    };
	    Volume.prototype.closeSync = function (fd) {
	        validateFd(fd);
	        var file = this.getFileByFdOrThrow(fd, 'close');
	        this.closeFile(file);
	    };
	    Volume.prototype.close = function (fd, callback) {
	        validateFd(fd);
	        this.wrapAsync(this.closeSync, [fd], callback);
	    };
	    Volume.prototype.openFileOrGetById = function (id, flagsNum, modeNum) {
	        if (typeof id === 'number') {
	            var file = this.fds[id];
	            if (!file)
	                throw createError(ENOENT);
	            return file;
	        }
	        else {
	            return this.openFile(pathToFilename(id), flagsNum, modeNum);
	        }
	    };
	    Volume.prototype.readBase = function (fd, buffer, offset, length, position) {
	        var file = this.getFileByFdOrThrow(fd);
	        return file.read(buffer, Number(offset), Number(length), position);
	    };
	    Volume.prototype.readSync = function (fd, buffer, offset, length, position) {
	        validateFd(fd);
	        return this.readBase(fd, buffer, offset, length, position);
	    };
	    Volume.prototype.read = function (fd, buffer, offset, length, position, callback) {
	        var _this = this;
	        validateCallback(callback);
	        // This `if` branch is from Node.js
	        if (length === 0) {
	            return process_1.default.nextTick(function () {
	                if (callback)
	                    callback(null, 0, buffer);
	            });
	        }
	        (0, setImmediate_1.default)(function () {
	            try {
	                var bytes = _this.readBase(fd, buffer, offset, length, position);
	                callback(null, bytes, buffer);
	            }
	            catch (err) {
	                callback(err);
	            }
	        });
	    };
	    Volume.prototype.readFileBase = function (id, flagsNum, encoding) {
	        var result;
	        var isUserFd = typeof id === 'number';
	        var userOwnsFd = isUserFd && isFd(id);
	        var fd;
	        if (userOwnsFd)
	            fd = id;
	        else {
	            var filename = pathToFilename(id);
	            var steps = filenameToSteps(filename);
	            var link = this.getResolvedLink(steps);
	            if (link) {
	                var node = link.getNode();
	                if (node.isDirectory())
	                    throw createError(EISDIR, 'open', link.getPath());
	            }
	            fd = this.openSync(id, flagsNum);
	        }
	        try {
	            result = bufferToEncoding(this.getFileByFdOrThrow(fd).getBuffer(), encoding);
	        }
	        finally {
	            if (!userOwnsFd) {
	                this.closeSync(fd);
	            }
	        }
	        return result;
	    };
	    Volume.prototype.readFileSync = function (file, options) {
	        var opts = getReadFileOptions(options);
	        var flagsNum = flagsToNumber(opts.flag);
	        return this.readFileBase(file, flagsNum, opts.encoding);
	    };
	    Volume.prototype.readFile = function (id, a, b) {
	        var _a = optsAndCbGenerator(getReadFileOptions)(a, b), opts = _a[0], callback = _a[1];
	        var flagsNum = flagsToNumber(opts.flag);
	        this.wrapAsync(this.readFileBase, [id, flagsNum, opts.encoding], callback);
	    };
	    Volume.prototype.writeBase = function (fd, buf, offset, length, position) {
	        var file = this.getFileByFdOrThrow(fd, 'write');
	        return file.write(buf, offset, length, position);
	    };
	    Volume.prototype.writeSync = function (fd, a, b, c, d) {
	        validateFd(fd);
	        var encoding;
	        var offset;
	        var length;
	        var position;
	        var isBuffer = typeof a !== 'string';
	        if (isBuffer) {
	            offset = (b || 0) | 0;
	            length = c;
	            position = d;
	        }
	        else {
	            position = b;
	            encoding = c;
	        }
	        var buf = dataToBuffer(a, encoding);
	        if (isBuffer) {
	            if (typeof length === 'undefined') {
	                length = buf.length;
	            }
	        }
	        else {
	            offset = 0;
	            length = buf.length;
	        }
	        return this.writeBase(fd, buf, offset, length, position);
	    };
	    Volume.prototype.write = function (fd, a, b, c, d, e) {
	        var _this = this;
	        validateFd(fd);
	        var offset;
	        var length;
	        var position;
	        var encoding;
	        var callback;
	        var tipa = typeof a;
	        var tipb = typeof b;
	        var tipc = typeof c;
	        var tipd = typeof d;
	        if (tipa !== 'string') {
	            if (tipb === 'function') {
	                callback = b;
	            }
	            else if (tipc === 'function') {
	                offset = b | 0;
	                callback = c;
	            }
	            else if (tipd === 'function') {
	                offset = b | 0;
	                length = c;
	                callback = d;
	            }
	            else {
	                offset = b | 0;
	                length = c;
	                position = d;
	                callback = e;
	            }
	        }
	        else {
	            if (tipb === 'function') {
	                callback = b;
	            }
	            else if (tipc === 'function') {
	                position = b;
	                callback = c;
	            }
	            else if (tipd === 'function') {
	                position = b;
	                encoding = c;
	                callback = d;
	            }
	        }
	        var buf = dataToBuffer(a, encoding);
	        if (tipa !== 'string') {
	            if (typeof length === 'undefined')
	                length = buf.length;
	        }
	        else {
	            offset = 0;
	            length = buf.length;
	        }
	        var cb = validateCallback(callback);
	        (0, setImmediate_1.default)(function () {
	            try {
	                var bytes = _this.writeBase(fd, buf, offset, length, position);
	                if (tipa !== 'string') {
	                    cb(null, bytes, buf);
	                }
	                else {
	                    cb(null, bytes, a);
	                }
	            }
	            catch (err) {
	                cb(err);
	            }
	        });
	    };
	    Volume.prototype.writeFileBase = function (id, buf, flagsNum, modeNum) {
	        // console.log('writeFileBase', id, buf, flagsNum, modeNum);
	        // const node = this.getNodeByIdOrCreate(id, flagsNum, modeNum);
	        // node.setBuffer(buf);
	        var isUserFd = typeof id === 'number';
	        var fd;
	        if (isUserFd)
	            fd = id;
	        else {
	            fd = this.openBase(pathToFilename(id), flagsNum, modeNum);
	            // fd = this.openSync(id as PathLike, flagsNum, modeNum);
	        }
	        var offset = 0;
	        var length = buf.length;
	        var position = flagsNum & O_APPEND ? undefined : 0;
	        try {
	            while (length > 0) {
	                var written = this.writeSync(fd, buf, offset, length, position);
	                offset += written;
	                length -= written;
	                if (position !== undefined)
	                    position += written;
	            }
	        }
	        finally {
	            if (!isUserFd)
	                this.closeSync(fd);
	        }
	    };
	    Volume.prototype.writeFileSync = function (id, data, options) {
	        var opts = getWriteFileOptions(options);
	        var flagsNum = flagsToNumber(opts.flag);
	        var modeNum = modeToNumber(opts.mode);
	        var buf = dataToBuffer(data, opts.encoding);
	        this.writeFileBase(id, buf, flagsNum, modeNum);
	    };
	    Volume.prototype.writeFile = function (id, data, a, b) {
	        var options = a;
	        var callback = b;
	        if (typeof a === 'function') {
	            options = writeFileDefaults;
	            callback = a;
	        }
	        var cb = validateCallback(callback);
	        var opts = getWriteFileOptions(options);
	        var flagsNum = flagsToNumber(opts.flag);
	        var modeNum = modeToNumber(opts.mode);
	        var buf = dataToBuffer(data, opts.encoding);
	        this.wrapAsync(this.writeFileBase, [id, buf, flagsNum, modeNum], cb);
	    };
	    Volume.prototype.linkBase = function (filename1, filename2) {
	        var steps1 = filenameToSteps(filename1);
	        var link1 = this.getLink(steps1);
	        if (!link1)
	            throw createError(ENOENT, 'link', filename1, filename2);
	        var steps2 = filenameToSteps(filename2);
	        // Check new link directory exists.
	        var dir2 = this.getLinkParent(steps2);
	        if (!dir2)
	            throw createError(ENOENT, 'link', filename1, filename2);
	        var name = steps2[steps2.length - 1];
	        // Check if new file already exists.
	        if (dir2.getChild(name))
	            throw createError(EEXIST, 'link', filename1, filename2);
	        var node = link1.getNode();
	        node.nlink++;
	        dir2.createChild(name, node);
	    };
	    Volume.prototype.copyFileBase = function (src, dest, flags) {
	        var buf = this.readFileSync(src);
	        if (flags & COPYFILE_EXCL) {
	            if (this.existsSync(dest)) {
	                throw createError(EEXIST, 'copyFile', src, dest);
	            }
	        }
	        if (flags & COPYFILE_FICLONE_FORCE) {
	            throw createError(ENOSYS, 'copyFile', src, dest);
	        }
	        this.writeFileBase(dest, buf, FLAGS.w, 438 /* MODE.DEFAULT */);
	    };
	    Volume.prototype.copyFileSync = function (src, dest, flags) {
	        var srcFilename = pathToFilename(src);
	        var destFilename = pathToFilename(dest);
	        return this.copyFileBase(srcFilename, destFilename, (flags || 0) | 0);
	    };
	    Volume.prototype.copyFile = function (src, dest, a, b) {
	        var srcFilename = pathToFilename(src);
	        var destFilename = pathToFilename(dest);
	        var flags;
	        var callback;
	        if (typeof a === 'function') {
	            flags = 0;
	            callback = a;
	        }
	        else {
	            flags = a;
	            callback = b;
	        }
	        validateCallback(callback);
	        this.wrapAsync(this.copyFileBase, [srcFilename, destFilename, flags], callback);
	    };
	    Volume.prototype.linkSync = function (existingPath, newPath) {
	        var existingPathFilename = pathToFilename(existingPath);
	        var newPathFilename = pathToFilename(newPath);
	        this.linkBase(existingPathFilename, newPathFilename);
	    };
	    Volume.prototype.link = function (existingPath, newPath, callback) {
	        var existingPathFilename = pathToFilename(existingPath);
	        var newPathFilename = pathToFilename(newPath);
	        this.wrapAsync(this.linkBase, [existingPathFilename, newPathFilename], callback);
	    };
	    Volume.prototype.unlinkBase = function (filename) {
	        var steps = filenameToSteps(filename);
	        var link = this.getLink(steps);
	        if (!link)
	            throw createError(ENOENT, 'unlink', filename);
	        // TODO: Check if it is file, dir, other...
	        if (link.length)
	            throw Error('Dir not empty...');
	        this.deleteLink(link);
	        var node = link.getNode();
	        node.nlink--;
	        // When all hard links to i-node are deleted, remove the i-node, too.
	        if (node.nlink <= 0) {
	            this.deleteNode(node);
	        }
	    };
	    Volume.prototype.unlinkSync = function (path) {
	        var filename = pathToFilename(path);
	        this.unlinkBase(filename);
	    };
	    Volume.prototype.unlink = function (path, callback) {
	        var filename = pathToFilename(path);
	        this.wrapAsync(this.unlinkBase, [filename], callback);
	    };
	    Volume.prototype.symlinkBase = function (targetFilename, pathFilename) {
	        var pathSteps = filenameToSteps(pathFilename);
	        // Check if directory exists, where we about to create a symlink.
	        var dirLink = this.getLinkParent(pathSteps);
	        if (!dirLink)
	            throw createError(ENOENT, 'symlink', targetFilename, pathFilename);
	        var name = pathSteps[pathSteps.length - 1];
	        // Check if new file already exists.
	        if (dirLink.getChild(name))
	            throw createError(EEXIST, 'symlink', targetFilename, pathFilename);
	        // Create symlink.
	        var symlink = dirLink.createChild(name);
	        symlink.getNode().makeSymlink(filenameToSteps(targetFilename));
	        return symlink;
	    };
	    // `type` argument works only on Windows.
	    Volume.prototype.symlinkSync = function (target, path, type) {
	        var targetFilename = pathToFilename(target);
	        var pathFilename = pathToFilename(path);
	        this.symlinkBase(targetFilename, pathFilename);
	    };
	    Volume.prototype.symlink = function (target, path, a, b) {
	        var callback = validateCallback(typeof a === 'function' ? a : b);
	        var targetFilename = pathToFilename(target);
	        var pathFilename = pathToFilename(path);
	        this.wrapAsync(this.symlinkBase, [targetFilename, pathFilename], callback);
	    };
	    Volume.prototype.realpathBase = function (filename, encoding) {
	        var steps = filenameToSteps(filename);
	        var realLink = this.getResolvedLink(steps);
	        if (!realLink)
	            throw createError(ENOENT, 'realpath', filename);
	        return (0, encoding_1.strToEncoding)(realLink.getPath() || '/', encoding);
	    };
	    Volume.prototype.realpathSync = function (path, options) {
	        return this.realpathBase(pathToFilename(path), getRealpathOptions(options).encoding);
	    };
	    Volume.prototype.realpath = function (path, a, b) {
	        var _a = getRealpathOptsAndCb(a, b), opts = _a[0], callback = _a[1];
	        var pathFilename = pathToFilename(path);
	        this.wrapAsync(this.realpathBase, [pathFilename, opts.encoding], callback);
	    };
	    Volume.prototype.lstatBase = function (filename, bigint, throwIfNoEntry) {
	        if (bigint === void 0) { bigint = false; }
	        if (throwIfNoEntry === void 0) { throwIfNoEntry = false; }
	        var link = this.getLink(filenameToSteps(filename));
	        if (link) {
	            return Stats_1.default.build(link.getNode(), bigint);
	        }
	        else if (!throwIfNoEntry) {
	            return undefined;
	        }
	        else {
	            throw createError(ENOENT, 'lstat', filename);
	        }
	    };
	    Volume.prototype.lstatSync = function (path, options) {
	        var _a = getStatOptions(options), _b = _a.throwIfNoEntry, throwIfNoEntry = _b === void 0 ? true : _b, _c = _a.bigint, bigint = _c === void 0 ? false : _c;
	        return this.lstatBase(pathToFilename(path), bigint, throwIfNoEntry);
	    };
	    Volume.prototype.lstat = function (path, a, b) {
	        var _a = getStatOptsAndCb(a, b), _b = _a[0], _c = _b.throwIfNoEntry, throwIfNoEntry = _c === void 0 ? true : _c, _d = _b.bigint, bigint = _d === void 0 ? false : _d, callback = _a[1];
	        this.wrapAsync(this.lstatBase, [pathToFilename(path), bigint, throwIfNoEntry], callback);
	    };
	    Volume.prototype.statBase = function (filename, bigint, throwIfNoEntry) {
	        if (bigint === void 0) { bigint = false; }
	        if (throwIfNoEntry === void 0) { throwIfNoEntry = true; }
	        var link = this.getResolvedLink(filenameToSteps(filename));
	        if (link) {
	            return Stats_1.default.build(link.getNode(), bigint);
	        }
	        else if (!throwIfNoEntry) {
	            return undefined;
	        }
	        else {
	            throw createError(ENOENT, 'stat', filename);
	        }
	    };
	    Volume.prototype.statSync = function (path, options) {
	        var _a = getStatOptions(options), _b = _a.bigint, bigint = _b === void 0 ? true : _b, _c = _a.throwIfNoEntry, throwIfNoEntry = _c === void 0 ? true : _c;
	        return this.statBase(pathToFilename(path), bigint, throwIfNoEntry);
	    };
	    Volume.prototype.stat = function (path, a, b) {
	        var _a = getStatOptsAndCb(a, b), _b = _a[0], _c = _b.bigint, bigint = _c === void 0 ? false : _c, _d = _b.throwIfNoEntry, throwIfNoEntry = _d === void 0 ? true : _d, callback = _a[1];
	        this.wrapAsync(this.statBase, [pathToFilename(path), bigint, throwIfNoEntry], callback);
	    };
	    Volume.prototype.fstatBase = function (fd, bigint) {
	        if (bigint === void 0) { bigint = false; }
	        var file = this.getFileByFd(fd);
	        if (!file)
	            throw createError(EBADF, 'fstat');
	        return Stats_1.default.build(file.node, bigint);
	    };
	    Volume.prototype.fstatSync = function (fd, options) {
	        return this.fstatBase(fd, getStatOptions(options).bigint);
	    };
	    Volume.prototype.fstat = function (fd, a, b) {
	        var _a = getStatOptsAndCb(a, b), opts = _a[0], callback = _a[1];
	        this.wrapAsync(this.fstatBase, [fd, opts.bigint], callback);
	    };
	    Volume.prototype.renameBase = function (oldPathFilename, newPathFilename) {
	        var link = this.getLink(filenameToSteps(oldPathFilename));
	        if (!link)
	            throw createError(ENOENT, 'rename', oldPathFilename, newPathFilename);
	        // TODO: Check if it is directory, if non-empty, we cannot move it, right?
	        var newPathSteps = filenameToSteps(newPathFilename);
	        // Check directory exists for the new location.
	        var newPathDirLink = this.getLinkParent(newPathSteps);
	        if (!newPathDirLink)
	            throw createError(ENOENT, 'rename', oldPathFilename, newPathFilename);
	        // TODO: Also treat cases with directories and symbolic links.
	        // TODO: See: http://man7.org/linux/man-pages/man2/rename.2.html
	        // Remove hard link from old folder.
	        var oldLinkParent = link.parent;
	        if (oldLinkParent) {
	            oldLinkParent.deleteChild(link);
	        }
	        // Rename should overwrite the new path, if that exists.
	        var name = newPathSteps[newPathSteps.length - 1];
	        link.name = name;
	        link.steps = __spreadArray(__spreadArray([], newPathDirLink.steps, true), [name], false);
	        newPathDirLink.setChild(link.getName(), link);
	    };
	    Volume.prototype.renameSync = function (oldPath, newPath) {
	        var oldPathFilename = pathToFilename(oldPath);
	        var newPathFilename = pathToFilename(newPath);
	        this.renameBase(oldPathFilename, newPathFilename);
	    };
	    Volume.prototype.rename = function (oldPath, newPath, callback) {
	        var oldPathFilename = pathToFilename(oldPath);
	        var newPathFilename = pathToFilename(newPath);
	        this.wrapAsync(this.renameBase, [oldPathFilename, newPathFilename], callback);
	    };
	    Volume.prototype.existsBase = function (filename) {
	        return !!this.statBase(filename);
	    };
	    Volume.prototype.existsSync = function (path) {
	        try {
	            return this.existsBase(pathToFilename(path));
	        }
	        catch (err) {
	            return false;
	        }
	    };
	    Volume.prototype.exists = function (path, callback) {
	        var _this = this;
	        var filename = pathToFilename(path);
	        if (typeof callback !== 'function')
	            throw Error(ERRSTR.CB);
	        (0, setImmediate_1.default)(function () {
	            try {
	                callback(_this.existsBase(filename));
	            }
	            catch (err) {
	                callback(false);
	            }
	        });
	    };
	    Volume.prototype.accessBase = function (filename, mode) {
	        this.getLinkOrThrow(filename, 'access');
	        // TODO: Verify permissions
	    };
	    Volume.prototype.accessSync = function (path, mode) {
	        if (mode === void 0) { mode = F_OK; }
	        var filename = pathToFilename(path);
	        mode = mode | 0;
	        this.accessBase(filename, mode);
	    };
	    Volume.prototype.access = function (path, a, b) {
	        var mode = F_OK;
	        var callback;
	        if (typeof a !== 'function') {
	            mode = a | 0; // cast to number
	            callback = validateCallback(b);
	        }
	        else {
	            callback = a;
	        }
	        var filename = pathToFilename(path);
	        this.wrapAsync(this.accessBase, [filename, mode], callback);
	    };
	    Volume.prototype.appendFileSync = function (id, data, options) {
	        if (options === void 0) { options = appendFileDefaults; }
	        var opts = getAppendFileOpts(options);
	        // force append behavior when using a supplied file descriptor
	        if (!opts.flag || isFd(id))
	            opts.flag = 'a';
	        this.writeFileSync(id, data, opts);
	    };
	    Volume.prototype.appendFile = function (id, data, a, b) {
	        var _a = getAppendFileOptsAndCb(a, b), opts = _a[0], callback = _a[1];
	        // force append behavior when using a supplied file descriptor
	        if (!opts.flag || isFd(id))
	            opts.flag = 'a';
	        this.writeFile(id, data, opts, callback);
	    };
	    Volume.prototype.readdirBase = function (filename, options) {
	        var steps = filenameToSteps(filename);
	        var link = this.getResolvedLink(steps);
	        if (!link)
	            throw createError(ENOENT, 'readdir', filename);
	        var node = link.getNode();
	        if (!node.isDirectory())
	            throw createError(ENOTDIR, 'scandir', filename);
	        if (options.withFileTypes) {
	            var list_1 = [];
	            for (var name_2 in link.children) {
	                var child = link.getChild(name_2);
	                if (!child || name_2 === '.' || name_2 === '..') {
	                    continue;
	                }
	                list_1.push(Dirent_1.default.build(child, options.encoding));
	            }
	            if (!isWin && options.encoding !== 'buffer')
	                list_1.sort(function (a, b) {
	                    if (a.name < b.name)
	                        return -1;
	                    if (a.name > b.name)
	                        return 1;
	                    return 0;
	                });
	            return list_1;
	        }
	        var list = [];
	        for (var name_3 in link.children) {
	            if (name_3 === '.' || name_3 === '..') {
	                continue;
	            }
	            list.push((0, encoding_1.strToEncoding)(name_3, options.encoding));
	        }
	        if (!isWin && options.encoding !== 'buffer')
	            list.sort();
	        return list;
	    };
	    Volume.prototype.readdirSync = function (path, options) {
	        var opts = getReaddirOptions(options);
	        var filename = pathToFilename(path);
	        return this.readdirBase(filename, opts);
	    };
	    Volume.prototype.readdir = function (path, a, b) {
	        var _a = getReaddirOptsAndCb(a, b), options = _a[0], callback = _a[1];
	        var filename = pathToFilename(path);
	        this.wrapAsync(this.readdirBase, [filename, options], callback);
	    };
	    Volume.prototype.readlinkBase = function (filename, encoding) {
	        var link = this.getLinkOrThrow(filename, 'readlink');
	        var node = link.getNode();
	        if (!node.isSymlink())
	            throw createError(EINVAL, 'readlink', filename);
	        var str = sep + node.symlink.join(sep);
	        return (0, encoding_1.strToEncoding)(str, encoding);
	    };
	    Volume.prototype.readlinkSync = function (path, options) {
	        var opts = getDefaultOpts(options);
	        var filename = pathToFilename(path);
	        return this.readlinkBase(filename, opts.encoding);
	    };
	    Volume.prototype.readlink = function (path, a, b) {
	        var _a = getDefaultOptsAndCb(a, b), opts = _a[0], callback = _a[1];
	        var filename = pathToFilename(path);
	        this.wrapAsync(this.readlinkBase, [filename, opts.encoding], callback);
	    };
	    Volume.prototype.fsyncBase = function (fd) {
	        this.getFileByFdOrThrow(fd, 'fsync');
	    };
	    Volume.prototype.fsyncSync = function (fd) {
	        this.fsyncBase(fd);
	    };
	    Volume.prototype.fsync = function (fd, callback) {
	        this.wrapAsync(this.fsyncBase, [fd], callback);
	    };
	    Volume.prototype.fdatasyncBase = function (fd) {
	        this.getFileByFdOrThrow(fd, 'fdatasync');
	    };
	    Volume.prototype.fdatasyncSync = function (fd) {
	        this.fdatasyncBase(fd);
	    };
	    Volume.prototype.fdatasync = function (fd, callback) {
	        this.wrapAsync(this.fdatasyncBase, [fd], callback);
	    };
	    Volume.prototype.ftruncateBase = function (fd, len) {
	        var file = this.getFileByFdOrThrow(fd, 'ftruncate');
	        file.truncate(len);
	    };
	    Volume.prototype.ftruncateSync = function (fd, len) {
	        this.ftruncateBase(fd, len);
	    };
	    Volume.prototype.ftruncate = function (fd, a, b) {
	        var len = typeof a === 'number' ? a : 0;
	        var callback = validateCallback(typeof a === 'number' ? b : a);
	        this.wrapAsync(this.ftruncateBase, [fd, len], callback);
	    };
	    Volume.prototype.truncateBase = function (path, len) {
	        var fd = this.openSync(path, 'r+');
	        try {
	            this.ftruncateSync(fd, len);
	        }
	        finally {
	            this.closeSync(fd);
	        }
	    };
	    Volume.prototype.truncateSync = function (id, len) {
	        if (isFd(id))
	            return this.ftruncateSync(id, len);
	        this.truncateBase(id, len);
	    };
	    Volume.prototype.truncate = function (id, a, b) {
	        var len = typeof a === 'number' ? a : 0;
	        var callback = validateCallback(typeof a === 'number' ? b : a);
	        if (isFd(id))
	            return this.ftruncate(id, len, callback);
	        this.wrapAsync(this.truncateBase, [id, len], callback);
	    };
	    Volume.prototype.futimesBase = function (fd, atime, mtime) {
	        var file = this.getFileByFdOrThrow(fd, 'futimes');
	        var node = file.node;
	        node.atime = new Date(atime * 1000);
	        node.mtime = new Date(mtime * 1000);
	    };
	    Volume.prototype.futimesSync = function (fd, atime, mtime) {
	        this.futimesBase(fd, toUnixTimestamp(atime), toUnixTimestamp(mtime));
	    };
	    Volume.prototype.futimes = function (fd, atime, mtime, callback) {
	        this.wrapAsync(this.futimesBase, [fd, toUnixTimestamp(atime), toUnixTimestamp(mtime)], callback);
	    };
	    Volume.prototype.utimesBase = function (filename, atime, mtime) {
	        var fd = this.openSync(filename, 'r');
	        try {
	            this.futimesBase(fd, atime, mtime);
	        }
	        finally {
	            this.closeSync(fd);
	        }
	    };
	    Volume.prototype.utimesSync = function (path, atime, mtime) {
	        this.utimesBase(pathToFilename(path), toUnixTimestamp(atime), toUnixTimestamp(mtime));
	    };
	    Volume.prototype.utimes = function (path, atime, mtime, callback) {
	        this.wrapAsync(this.utimesBase, [pathToFilename(path), toUnixTimestamp(atime), toUnixTimestamp(mtime)], callback);
	    };
	    Volume.prototype.mkdirBase = function (filename, modeNum) {
	        var steps = filenameToSteps(filename);
	        // This will throw if user tries to create root dir `fs.mkdirSync('/')`.
	        if (!steps.length) {
	            throw createError(EEXIST, 'mkdir', filename);
	        }
	        var dir = this.getLinkParentAsDirOrThrow(filename, 'mkdir');
	        // Check path already exists.
	        var name = steps[steps.length - 1];
	        if (dir.getChild(name))
	            throw createError(EEXIST, 'mkdir', filename);
	        dir.createChild(name, this.createNode(true, modeNum));
	    };
	    /**
	     * Creates directory tree recursively.
	     * @param filename
	     * @param modeNum
	     */
	    Volume.prototype.mkdirpBase = function (filename, modeNum) {
	        var fullPath = resolve(filename);
	        var fullPathSansSlash = fullPath.substring(1);
	        var steps = !fullPathSansSlash ? [] : fullPathSansSlash.split(sep);
	        var link = this.root;
	        var created = false;
	        for (var i = 0; i < steps.length; i++) {
	            var step = steps[i];
	            if (!link.getNode().isDirectory())
	                throw createError(ENOTDIR, 'mkdir', link.getPath());
	            var child = link.getChild(step);
	            if (child) {
	                if (child.getNode().isDirectory())
	                    link = child;
	                else
	                    throw createError(ENOTDIR, 'mkdir', child.getPath());
	            }
	            else {
	                link = link.createChild(step, this.createNode(true, modeNum));
	                created = true;
	            }
	        }
	        return created ? fullPath : undefined;
	    };
	    Volume.prototype.mkdirSync = function (path, options) {
	        var opts = getMkdirOptions(options);
	        var modeNum = modeToNumber(opts.mode, 511);
	        var filename = pathToFilename(path);
	        if (opts.recursive)
	            return this.mkdirpBase(filename, modeNum);
	        this.mkdirBase(filename, modeNum);
	    };
	    Volume.prototype.mkdir = function (path, a, b) {
	        var opts = getMkdirOptions(a);
	        var callback = validateCallback(typeof a === 'function' ? a : b);
	        var modeNum = modeToNumber(opts.mode, 511);
	        var filename = pathToFilename(path);
	        if (opts.recursive)
	            this.wrapAsync(this.mkdirpBase, [filename, modeNum], callback);
	        else
	            this.wrapAsync(this.mkdirBase, [filename, modeNum], callback);
	    };
	    // legacy interface
	    Volume.prototype.mkdirpSync = function (path, mode) {
	        return this.mkdirSync(path, { mode: mode, recursive: true });
	    };
	    Volume.prototype.mkdirp = function (path, a, b) {
	        var mode = typeof a === 'function' ? undefined : a;
	        var callback = validateCallback(typeof a === 'function' ? a : b);
	        this.mkdir(path, { mode: mode, recursive: true }, callback);
	    };
	    Volume.prototype.mkdtempBase = function (prefix, encoding, retry) {
	        if (retry === void 0) { retry = 5; }
	        var filename = prefix + this.genRndStr();
	        try {
	            this.mkdirBase(filename, 511 /* MODE.DIR */);
	            return (0, encoding_1.strToEncoding)(filename, encoding);
	        }
	        catch (err) {
	            if (err.code === EEXIST) {
	                if (retry > 1)
	                    return this.mkdtempBase(prefix, encoding, retry - 1);
	                else
	                    throw Error('Could not create temp dir.');
	            }
	            else
	                throw err;
	        }
	    };
	    Volume.prototype.mkdtempSync = function (prefix, options) {
	        var encoding = getDefaultOpts(options).encoding;
	        if (!prefix || typeof prefix !== 'string')
	            throw new TypeError('filename prefix is required');
	        nullCheck(prefix);
	        return this.mkdtempBase(prefix, encoding);
	    };
	    Volume.prototype.mkdtemp = function (prefix, a, b) {
	        var _a = getDefaultOptsAndCb(a, b), encoding = _a[0].encoding, callback = _a[1];
	        if (!prefix || typeof prefix !== 'string')
	            throw new TypeError('filename prefix is required');
	        if (!nullCheck(prefix))
	            return;
	        this.wrapAsync(this.mkdtempBase, [prefix, encoding], callback);
	    };
	    Volume.prototype.rmdirBase = function (filename, options) {
	        var opts = getRmdirOptions(options);
	        var link = this.getLinkAsDirOrThrow(filename, 'rmdir');
	        // Check directory is empty.
	        if (link.length && !opts.recursive)
	            throw createError(ENOTEMPTY, 'rmdir', filename);
	        this.deleteLink(link);
	    };
	    Volume.prototype.rmdirSync = function (path, options) {
	        this.rmdirBase(pathToFilename(path), options);
	    };
	    Volume.prototype.rmdir = function (path, a, b) {
	        var opts = getRmdirOptions(a);
	        var callback = validateCallback(typeof a === 'function' ? a : b);
	        this.wrapAsync(this.rmdirBase, [pathToFilename(path), opts], callback);
	    };
	    Volume.prototype.rmBase = function (filename, options) {
	        if (options === void 0) { options = {}; }
	        var link = this.getResolvedLink(filename);
	        if (!link) {
	            // "stat" is used to match Node's native error message.
	            if (!options.force)
	                throw createError(ENOENT, 'stat', filename);
	            return;
	        }
	        if (link.getNode().isDirectory()) {
	            if (!options.recursive) {
	                throw createError(ERR_FS_EISDIR, 'rm', filename);
	            }
	        }
	        this.deleteLink(link);
	    };
	    Volume.prototype.rmSync = function (path, options) {
	        this.rmBase(pathToFilename(path), options);
	    };
	    Volume.prototype.rm = function (path, a, b) {
	        var _a = getRmOptsAndCb(a, b), opts = _a[0], callback = _a[1];
	        this.wrapAsync(this.rmBase, [pathToFilename(path), opts], callback);
	    };
	    Volume.prototype.fchmodBase = function (fd, modeNum) {
	        var file = this.getFileByFdOrThrow(fd, 'fchmod');
	        file.chmod(modeNum);
	    };
	    Volume.prototype.fchmodSync = function (fd, mode) {
	        this.fchmodBase(fd, modeToNumber(mode));
	    };
	    Volume.prototype.fchmod = function (fd, mode, callback) {
	        this.wrapAsync(this.fchmodBase, [fd, modeToNumber(mode)], callback);
	    };
	    Volume.prototype.chmodBase = function (filename, modeNum) {
	        var fd = this.openSync(filename, 'r');
	        try {
	            this.fchmodBase(fd, modeNum);
	        }
	        finally {
	            this.closeSync(fd);
	        }
	    };
	    Volume.prototype.chmodSync = function (path, mode) {
	        var modeNum = modeToNumber(mode);
	        var filename = pathToFilename(path);
	        this.chmodBase(filename, modeNum);
	    };
	    Volume.prototype.chmod = function (path, mode, callback) {
	        var modeNum = modeToNumber(mode);
	        var filename = pathToFilename(path);
	        this.wrapAsync(this.chmodBase, [filename, modeNum], callback);
	    };
	    Volume.prototype.lchmodBase = function (filename, modeNum) {
	        var fd = this.openBase(filename, O_RDWR, 0, false);
	        try {
	            this.fchmodBase(fd, modeNum);
	        }
	        finally {
	            this.closeSync(fd);
	        }
	    };
	    Volume.prototype.lchmodSync = function (path, mode) {
	        var modeNum = modeToNumber(mode);
	        var filename = pathToFilename(path);
	        this.lchmodBase(filename, modeNum);
	    };
	    Volume.prototype.lchmod = function (path, mode, callback) {
	        var modeNum = modeToNumber(mode);
	        var filename = pathToFilename(path);
	        this.wrapAsync(this.lchmodBase, [filename, modeNum], callback);
	    };
	    Volume.prototype.fchownBase = function (fd, uid, gid) {
	        this.getFileByFdOrThrow(fd, 'fchown').chown(uid, gid);
	    };
	    Volume.prototype.fchownSync = function (fd, uid, gid) {
	        validateUid(uid);
	        validateGid(gid);
	        this.fchownBase(fd, uid, gid);
	    };
	    Volume.prototype.fchown = function (fd, uid, gid, callback) {
	        validateUid(uid);
	        validateGid(gid);
	        this.wrapAsync(this.fchownBase, [fd, uid, gid], callback);
	    };
	    Volume.prototype.chownBase = function (filename, uid, gid) {
	        var link = this.getResolvedLinkOrThrow(filename, 'chown');
	        var node = link.getNode();
	        node.chown(uid, gid);
	        // if(node.isFile() || node.isSymlink()) {
	        //
	        // } else if(node.isDirectory()) {
	        //
	        // } else {
	        // TODO: What do we do here?
	        // }
	    };
	    Volume.prototype.chownSync = function (path, uid, gid) {
	        validateUid(uid);
	        validateGid(gid);
	        this.chownBase(pathToFilename(path), uid, gid);
	    };
	    Volume.prototype.chown = function (path, uid, gid, callback) {
	        validateUid(uid);
	        validateGid(gid);
	        this.wrapAsync(this.chownBase, [pathToFilename(path), uid, gid], callback);
	    };
	    Volume.prototype.lchownBase = function (filename, uid, gid) {
	        this.getLinkOrThrow(filename, 'lchown').getNode().chown(uid, gid);
	    };
	    Volume.prototype.lchownSync = function (path, uid, gid) {
	        validateUid(uid);
	        validateGid(gid);
	        this.lchownBase(pathToFilename(path), uid, gid);
	    };
	    Volume.prototype.lchown = function (path, uid, gid, callback) {
	        validateUid(uid);
	        validateGid(gid);
	        this.wrapAsync(this.lchownBase, [pathToFilename(path), uid, gid], callback);
	    };
	    Volume.prototype.watchFile = function (path, a, b) {
	        var filename = pathToFilename(path);
	        var options = a;
	        var listener = b;
	        if (typeof options === 'function') {
	            listener = a;
	            options = null;
	        }
	        if (typeof listener !== 'function') {
	            throw Error('"watchFile()" requires a listener function');
	        }
	        var interval = 5007;
	        var persistent = true;
	        if (options && typeof options === 'object') {
	            if (typeof options.interval === 'number')
	                interval = options.interval;
	            if (typeof options.persistent === 'boolean')
	                persistent = options.persistent;
	        }
	        var watcher = this.statWatchers[filename];
	        if (!watcher) {
	            watcher = new this.StatWatcher();
	            watcher.start(filename, persistent, interval);
	            this.statWatchers[filename] = watcher;
	        }
	        watcher.addListener('change', listener);
	        return watcher;
	    };
	    Volume.prototype.unwatchFile = function (path, listener) {
	        var filename = pathToFilename(path);
	        var watcher = this.statWatchers[filename];
	        if (!watcher)
	            return;
	        if (typeof listener === 'function') {
	            watcher.removeListener('change', listener);
	        }
	        else {
	            watcher.removeAllListeners('change');
	        }
	        if (watcher.listenerCount('change') === 0) {
	            watcher.stop();
	            delete this.statWatchers[filename];
	        }
	    };
	    Volume.prototype.createReadStream = function (path, options) {
	        return new this.ReadStream(path, options);
	    };
	    Volume.prototype.createWriteStream = function (path, options) {
	        return new this.WriteStream(path, options);
	    };
	    // watch(path: PathLike): FSWatcher;
	    // watch(path: PathLike, options?: IWatchOptions | string): FSWatcher;
	    Volume.prototype.watch = function (path, options, listener) {
	        var filename = pathToFilename(path);
	        var givenOptions = options;
	        if (typeof options === 'function') {
	            listener = options;
	            givenOptions = null;
	        }
	        // tslint:disable-next-line prefer-const
	        var _a = getDefaultOpts(givenOptions), persistent = _a.persistent, recursive = _a.recursive, encoding = _a.encoding;
	        if (persistent === undefined)
	            persistent = true;
	        if (recursive === undefined)
	            recursive = false;
	        var watcher = new this.FSWatcher();
	        watcher.start(filename, persistent, recursive, encoding);
	        if (listener) {
	            watcher.addListener('change', listener);
	        }
	        return watcher;
	    };
	    /**
	     * Global file descriptor counter. UNIX file descriptors start from 0 and go sequentially
	     * up, so here, in order not to conflict with them, we choose some big number and descrease
	     * the file descriptor of every new opened file.
	     * @type {number}
	     * @todo This should not be static, right?
	     */
	    Volume.fd = 0x7fffffff;
	    return Volume;
	}());
	exports.Volume = Volume;
	function emitStop(self) {
	    self.emit('stop');
	}
	var StatWatcher = /** @class */ (function (_super) {
	    __extends(StatWatcher, _super);
	    function StatWatcher(vol) {
	        var _this = _super.call(this) || this;
	        _this.onInterval = function () {
	            try {
	                var stats = _this.vol.statSync(_this.filename);
	                if (_this.hasChanged(stats)) {
	                    _this.emit('change', stats, _this.prev);
	                    _this.prev = stats;
	                }
	            }
	            finally {
	                _this.loop();
	            }
	        };
	        _this.vol = vol;
	        return _this;
	    }
	    StatWatcher.prototype.loop = function () {
	        this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
	    };
	    StatWatcher.prototype.hasChanged = function (stats) {
	        // if(!this.prev) return false;
	        if (stats.mtimeMs > this.prev.mtimeMs)
	            return true;
	        if (stats.nlink !== this.prev.nlink)
	            return true;
	        return false;
	    };
	    StatWatcher.prototype.start = function (path, persistent, interval) {
	        if (persistent === void 0) { persistent = true; }
	        if (interval === void 0) { interval = 5007; }
	        this.filename = pathToFilename(path);
	        this.setTimeout = persistent
	            ? setTimeout.bind(typeof globalThis !== 'undefined' ? globalThis : commonjsGlobal)
	            : setTimeoutUnref_1.default;
	        this.interval = interval;
	        this.prev = this.vol.statSync(this.filename);
	        this.loop();
	    };
	    StatWatcher.prototype.stop = function () {
	        clearTimeout(this.timeoutRef);
	        process_1.default.nextTick(emitStop, this);
	    };
	    return StatWatcher;
	}(events_1.EventEmitter));
	exports.StatWatcher = StatWatcher;
	var pool;
	function allocNewPool(poolSize) {
	    pool = (0, buffer_1.bufferAllocUnsafe)(poolSize);
	    pool.used = 0;
	}
	util.inherits(FsReadStream, stream_1.Readable);
	exports.ReadStream = FsReadStream;
	function FsReadStream(vol, path, options) {
	    if (!(this instanceof FsReadStream))
	        return new FsReadStream(vol, path, options);
	    this._vol = vol;
	    // a little bit bigger buffer and water marks by default
	    options = Object.assign({}, getOptions(options, {}));
	    if (options.highWaterMark === undefined)
	        options.highWaterMark = 64 * 1024;
	    stream_1.Readable.call(this, options);
	    this.path = pathToFilename(path);
	    this.fd = options.fd === undefined ? null : options.fd;
	    this.flags = options.flags === undefined ? 'r' : options.flags;
	    this.mode = options.mode === undefined ? 438 : options.mode;
	    this.start = options.start;
	    this.end = options.end;
	    this.autoClose = options.autoClose === undefined ? true : options.autoClose;
	    this.pos = undefined;
	    this.bytesRead = 0;
	    if (this.start !== undefined) {
	        if (typeof this.start !== 'number') {
	            throw new TypeError('"start" option must be a Number');
	        }
	        if (this.end === undefined) {
	            this.end = Infinity;
	        }
	        else if (typeof this.end !== 'number') {
	            throw new TypeError('"end" option must be a Number');
	        }
	        if (this.start > this.end) {
	            throw new Error('"start" option must be <= "end" option');
	        }
	        this.pos = this.start;
	    }
	    if (typeof this.fd !== 'number')
	        this.open();
	    this.on('end', function () {
	        if (this.autoClose) {
	            if (this.destroy)
	                this.destroy();
	        }
	    });
	}
	FsReadStream.prototype.open = function () {
	    var self = this; // tslint:disable-line no-this-assignment
	    this._vol.open(this.path, this.flags, this.mode, function (er, fd) {
	        if (er) {
	            if (self.autoClose) {
	                if (self.destroy)
	                    self.destroy();
	            }
	            self.emit('error', er);
	            return;
	        }
	        self.fd = fd;
	        self.emit('open', fd);
	        // start the flow of data.
	        self.read();
	    });
	};
	FsReadStream.prototype._read = function (n) {
	    if (typeof this.fd !== 'number') {
	        return this.once('open', function () {
	            this._read(n);
	        });
	    }
	    if (this.destroyed)
	        return;
	    if (!pool || pool.length - pool.used < kMinPoolSpace) {
	        // discard the old pool.
	        allocNewPool(this._readableState.highWaterMark);
	    }
	    // Grab another reference to the pool in the case that while we're
	    // in the thread pool another read() finishes up the pool, and
	    // allocates a new one.
	    var thisPool = pool;
	    var toRead = Math.min(pool.length - pool.used, n);
	    var start = pool.used;
	    if (this.pos !== undefined)
	        toRead = Math.min(this.end - this.pos + 1, toRead);
	    // already read everything we were supposed to read!
	    // treat as EOF.
	    if (toRead <= 0)
	        return this.push(null);
	    // the actual read.
	    var self = this; // tslint:disable-line no-this-assignment
	    this._vol.read(this.fd, pool, pool.used, toRead, this.pos, onread);
	    // move the pool positions, and internal position for reading.
	    if (this.pos !== undefined)
	        this.pos += toRead;
	    pool.used += toRead;
	    function onread(er, bytesRead) {
	        if (er) {
	            if (self.autoClose && self.destroy) {
	                self.destroy();
	            }
	            self.emit('error', er);
	        }
	        else {
	            var b = null;
	            if (bytesRead > 0) {
	                self.bytesRead += bytesRead;
	                b = thisPool.slice(start, start + bytesRead);
	            }
	            self.push(b);
	        }
	    }
	};
	FsReadStream.prototype._destroy = function (err, cb) {
	    this.close(function (err2) {
	        cb(err || err2);
	    });
	};
	FsReadStream.prototype.close = function (cb) {
	    var _this = this;
	    var _a;
	    if (cb)
	        this.once('close', cb);
	    if (this.closed || typeof this.fd !== 'number') {
	        if (typeof this.fd !== 'number') {
	            this.once('open', closeOnOpen);
	            return;
	        }
	        return process_1.default.nextTick(function () { return _this.emit('close'); });
	    }
	    // Since Node 18, there is only a getter for '.closed'.
	    // The first branch mimics other setters from Readable.
	    // See https://github.com/nodejs/node/blob/v18.0.0/lib/internal/streams/readable.js#L1243
	    if (typeof ((_a = this._readableState) === null || _a === void 0 ? void 0 : _a.closed) === 'boolean') {
	        this._readableState.closed = true;
	    }
	    else {
	        this.closed = true;
	    }
	    this._vol.close(this.fd, function (er) {
	        if (er)
	            _this.emit('error', er);
	        else
	            _this.emit('close');
	    });
	    this.fd = null;
	};
	// needed because as it will be called with arguments
	// that does not match this.close() signature
	function closeOnOpen(fd) {
	    this.close();
	}
	util.inherits(FsWriteStream, stream_1.Writable);
	exports.WriteStream = FsWriteStream;
	function FsWriteStream(vol, path, options) {
	    if (!(this instanceof FsWriteStream))
	        return new FsWriteStream(vol, path, options);
	    this._vol = vol;
	    options = Object.assign({}, getOptions(options, {}));
	    stream_1.Writable.call(this, options);
	    this.path = pathToFilename(path);
	    this.fd = options.fd === undefined ? null : options.fd;
	    this.flags = options.flags === undefined ? 'w' : options.flags;
	    this.mode = options.mode === undefined ? 438 : options.mode;
	    this.start = options.start;
	    this.autoClose = options.autoClose === undefined ? true : !!options.autoClose;
	    this.pos = undefined;
	    this.bytesWritten = 0;
	    if (this.start !== undefined) {
	        if (typeof this.start !== 'number') {
	            throw new TypeError('"start" option must be a Number');
	        }
	        if (this.start < 0) {
	            throw new Error('"start" must be >= zero');
	        }
	        this.pos = this.start;
	    }
	    if (options.encoding)
	        this.setDefaultEncoding(options.encoding);
	    if (typeof this.fd !== 'number')
	        this.open();
	    // dispose on finish.
	    this.once('finish', function () {
	        if (this.autoClose) {
	            this.close();
	        }
	    });
	}
	FsWriteStream.prototype.open = function () {
	    this._vol.open(this.path, this.flags, this.mode, function (er, fd) {
	        if (er) {
	            if (this.autoClose && this.destroy) {
	                this.destroy();
	            }
	            this.emit('error', er);
	            return;
	        }
	        this.fd = fd;
	        this.emit('open', fd);
	    }.bind(this));
	};
	FsWriteStream.prototype._write = function (data, encoding, cb) {
	    if (!(data instanceof buffer_1.Buffer || data instanceof Uint8Array))
	        return this.emit('error', new Error('Invalid data'));
	    if (typeof this.fd !== 'number') {
	        return this.once('open', function () {
	            this._write(data, encoding, cb);
	        });
	    }
	    var self = this; // tslint:disable-line no-this-assignment
	    this._vol.write(this.fd, data, 0, data.length, this.pos, function (er, bytes) {
	        if (er) {
	            if (self.autoClose && self.destroy) {
	                self.destroy();
	            }
	            return cb(er);
	        }
	        self.bytesWritten += bytes;
	        cb();
	    });
	    if (this.pos !== undefined)
	        this.pos += data.length;
	};
	FsWriteStream.prototype._writev = function (data, cb) {
	    if (typeof this.fd !== 'number') {
	        return this.once('open', function () {
	            this._writev(data, cb);
	        });
	    }
	    var self = this; // tslint:disable-line no-this-assignment
	    var len = data.length;
	    var chunks = new Array(len);
	    var size = 0;
	    for (var i = 0; i < len; i++) {
	        var chunk = data[i].chunk;
	        chunks[i] = chunk;
	        size += chunk.length;
	    }
	    var buf = buffer_1.Buffer.concat(chunks);
	    this._vol.write(this.fd, buf, 0, buf.length, this.pos, function (er, bytes) {
	        if (er) {
	            if (self.destroy)
	                self.destroy();
	            return cb(er);
	        }
	        self.bytesWritten += bytes;
	        cb();
	    });
	    if (this.pos !== undefined)
	        this.pos += size;
	};
	FsWriteStream.prototype.close = function (cb) {
	    var _this = this;
	    var _a;
	    if (cb)
	        this.once('close', cb);
	    if (this.closed || typeof this.fd !== 'number') {
	        if (typeof this.fd !== 'number') {
	            this.once('open', closeOnOpen);
	            return;
	        }
	        return process_1.default.nextTick(function () { return _this.emit('close'); });
	    }
	    // Since Node 18, there is only a getter for '.closed'.
	    // The first branch mimics other setters from Writable.
	    // See https://github.com/nodejs/node/blob/v18.0.0/lib/internal/streams/writable.js#L766
	    if (typeof ((_a = this._writableState) === null || _a === void 0 ? void 0 : _a.closed) === 'boolean') {
	        this._writableState.closed = true;
	    }
	    else {
	        this.closed = true;
	    }
	    this._vol.close(this.fd, function (er) {
	        if (er)
	            _this.emit('error', er);
	        else
	            _this.emit('close');
	    });
	    this.fd = null;
	};
	FsWriteStream.prototype._destroy = FsReadStream.prototype._destroy;
	// There is no shutdown() for files.
	FsWriteStream.prototype.destroySoon = FsWriteStream.prototype.end;
	// ---------------------------------------- FSWatcher
	var FSWatcher = /** @class */ (function (_super) {
	    __extends(FSWatcher, _super);
	    function FSWatcher(vol) {
	        var _this = _super.call(this) || this;
	        _this._filename = '';
	        _this._filenameEncoded = '';
	        // _persistent: boolean = true;
	        _this._recursive = false;
	        _this._encoding = encoding_1.ENCODING_UTF8;
	        // inode -> removers
	        _this._listenerRemovers = new Map();
	        _this._onParentChild = function (link) {
	            if (link.getName() === _this._getName()) {
	                _this._emit('rename');
	            }
	        };
	        _this._emit = function (type) {
	            _this.emit('change', type, _this._filenameEncoded);
	        };
	        _this._persist = function () {
	            _this._timer = setTimeout(_this._persist, 1e6);
	        };
	        _this._vol = vol;
	        return _this;
	        // TODO: Emit "error" messages when watching.
	        // this._handle.onchange = function(status, eventType, filename) {
	        //     if (status < 0) {
	        //         self._handle.close();
	        //         const error = !filename ?
	        //             errnoException(status, 'Error watching file for changes:') :
	        //             errnoException(status, `Error watching file ${filename} for changes:`);
	        //         error.filename = filename;
	        //         self.emit('error', error);
	        //     } else {
	        //         self.emit('change', eventType, filename);
	        //     }
	        // };
	    }
	    FSWatcher.prototype._getName = function () {
	        return this._steps[this._steps.length - 1];
	    };
	    FSWatcher.prototype.start = function (path, persistent, recursive, encoding) {
	        var _this = this;
	        if (persistent === void 0) { persistent = true; }
	        if (recursive === void 0) { recursive = false; }
	        if (encoding === void 0) { encoding = encoding_1.ENCODING_UTF8; }
	        this._filename = pathToFilename(path);
	        this._steps = filenameToSteps(this._filename);
	        this._filenameEncoded = (0, encoding_1.strToEncoding)(this._filename);
	        // this._persistent = persistent;
	        this._recursive = recursive;
	        this._encoding = encoding;
	        try {
	            this._link = this._vol.getLinkOrThrow(this._filename, 'FSWatcher');
	        }
	        catch (err) {
	            var error = new Error("watch ".concat(this._filename, " ").concat(err.code));
	            error.code = err.code;
	            error.errno = err.code;
	            throw error;
	        }
	        var watchLinkNodeChanged = function (link) {
	            var _a;
	            var filepath = link.getPath();
	            var node = link.getNode();
	            var onNodeChange = function () {
	                var filename = relative(_this._filename, filepath);
	                if (!filename) {
	                    filename = _this._getName();
	                }
	                return _this.emit('change', 'change', filename);
	            };
	            node.on('change', onNodeChange);
	            var removers = (_a = _this._listenerRemovers.get(node.ino)) !== null && _a !== void 0 ? _a : [];
	            removers.push(function () { return node.removeListener('change', onNodeChange); });
	            _this._listenerRemovers.set(node.ino, removers);
	        };
	        var watchLinkChildrenChanged = function (link) {
	            var _a;
	            var node = link.getNode();
	            // when a new link added
	            var onLinkChildAdd = function (l) {
	                _this.emit('change', 'rename', relative(_this._filename, l.getPath()));
	                setTimeout(function () {
	                    // 1. watch changes of the new link-node
	                    watchLinkNodeChanged(l);
	                    // 2. watch changes of the new link-node's children
	                    watchLinkChildrenChanged(l);
	                });
	            };
	            // when a new link deleted
	            var onLinkChildDelete = function (l) {
	                // remove the listeners of the children nodes
	                var removeLinkNodeListeners = function (curLink) {
	                    var ino = curLink.getNode().ino;
	                    var removers = _this._listenerRemovers.get(ino);
	                    if (removers) {
	                        removers.forEach(function (r) { return r(); });
	                        _this._listenerRemovers.delete(ino);
	                    }
	                    Object.values(curLink.children).forEach(function (childLink) {
	                        if (childLink) {
	                            removeLinkNodeListeners(childLink);
	                        }
	                    });
	                };
	                removeLinkNodeListeners(l);
	                _this.emit('change', 'rename', relative(_this._filename, l.getPath()));
	            };
	            // children nodes changed
	            Object.entries(link.children).forEach(function (_a) {
	                var name = _a[0], childLink = _a[1];
	                if (childLink && name !== '.' && name !== '..') {
	                    watchLinkNodeChanged(childLink);
	                }
	            });
	            // link children add/remove
	            link.on('child:add', onLinkChildAdd);
	            link.on('child:delete', onLinkChildDelete);
	            var removers = (_a = _this._listenerRemovers.get(node.ino)) !== null && _a !== void 0 ? _a : [];
	            removers.push(function () {
	                link.removeListener('child:add', onLinkChildAdd);
	                link.removeListener('child:delete', onLinkChildDelete);
	            });
	            if (recursive) {
	                Object.entries(link.children).forEach(function (_a) {
	                    var name = _a[0], childLink = _a[1];
	                    if (childLink && name !== '.' && name !== '..') {
	                        watchLinkChildrenChanged(childLink);
	                    }
	                });
	            }
	        };
	        watchLinkNodeChanged(this._link);
	        watchLinkChildrenChanged(this._link);
	        var parent = this._link.parent;
	        if (parent) {
	            // parent.on('child:add', this._onParentChild);
	            parent.setMaxListeners(parent.getMaxListeners() + 1);
	            parent.on('child:delete', this._onParentChild);
	        }
	        if (persistent)
	            this._persist();
	    };
	    FSWatcher.prototype.close = function () {
	        clearTimeout(this._timer);
	        this._listenerRemovers.forEach(function (removers) {
	            removers.forEach(function (r) { return r(); });
	        });
	        this._listenerRemovers.clear();
	        var parent = this._link.parent;
	        if (parent) {
	            // parent.removeListener('child:add', this._onParentChild);
	            parent.removeListener('child:delete', this._onParentChild);
	        }
	    };
	    return FSWatcher;
	}(events_1.EventEmitter));
	exports.FSWatcher = FSWatcher; 
} (volume));

var lists = {};

Object.defineProperty(lists, "__esModule", {
  value: true
});
lists.fsSyncMethods = lists.fsProps = lists.fsAsyncMethods = void 0;
var fsProps = ['constants', 'F_OK', 'R_OK', 'W_OK', 'X_OK', 'Stats'];
lists.fsProps = fsProps;
var fsSyncMethods = ['renameSync', 'ftruncateSync', 'truncateSync', 'chownSync', 'fchownSync', 'lchownSync', 'chmodSync', 'fchmodSync', 'lchmodSync', 'statSync', 'lstatSync', 'fstatSync', 'linkSync', 'symlinkSync', 'readlinkSync', 'realpathSync', 'unlinkSync', 'rmdirSync', 'mkdirSync', 'mkdirpSync', 'readdirSync', 'closeSync', 'openSync', 'utimesSync', 'futimesSync', 'fsyncSync', 'writeSync', 'readSync', 'readFileSync', 'writeFileSync', 'appendFileSync', 'existsSync', 'accessSync', 'fdatasyncSync', 'mkdtempSync', 'copyFileSync', 'rmSync', 'createReadStream', 'createWriteStream'];
lists.fsSyncMethods = fsSyncMethods;
var fsAsyncMethods = ['rename', 'ftruncate', 'truncate', 'chown', 'fchown', 'lchown', 'chmod', 'fchmod', 'lchmod', 'stat', 'lstat', 'fstat', 'link', 'symlink', 'readlink', 'realpath', 'unlink', 'rmdir', 'mkdir', 'mkdirp', 'readdir', 'close', 'open', 'utimes', 'futimes', 'fsync', 'write', 'read', 'readFile', 'writeFile', 'appendFile', 'exists', 'access', 'fdatasync', 'mkdtemp', 'copyFile', 'rm', 'watchFile', 'unwatchFile', 'watch'];
lists.fsAsyncMethods = fsAsyncMethods;

(function (module, exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.fs = exports.createFsFromVolume = exports.vol = exports.Volume = void 0;
	var Stats_1 = Stats$2;
	var Dirent_1 = Dirent$2;
	var volume_1 = volume;
	var _a = lists, fsSyncMethods = _a.fsSyncMethods, fsAsyncMethods = _a.fsAsyncMethods;
	var constants_1 = constants$1;
	var F_OK = constants_1.constants.F_OK, R_OK = constants_1.constants.R_OK, W_OK = constants_1.constants.W_OK, X_OK = constants_1.constants.X_OK;
	exports.Volume = volume_1.Volume;
	// Default volume.
	exports.vol = new volume_1.Volume();
	function createFsFromVolume(vol) {
	    var fs = { F_OK: F_OK, R_OK: R_OK, W_OK: W_OK, X_OK: X_OK, constants: constants_1.constants, Stats: Stats_1.default, Dirent: Dirent_1.default };
	    // Bind FS methods.
	    for (var _i = 0, fsSyncMethods_1 = fsSyncMethods; _i < fsSyncMethods_1.length; _i++) {
	        var method = fsSyncMethods_1[_i];
	        if (typeof vol[method] === 'function')
	            fs[method] = vol[method].bind(vol);
	    }
	    for (var _a = 0, fsAsyncMethods_1 = fsAsyncMethods; _a < fsAsyncMethods_1.length; _a++) {
	        var method = fsAsyncMethods_1[_a];
	        if (typeof vol[method] === 'function')
	            fs[method] = vol[method].bind(vol);
	    }
	    fs.StatWatcher = vol.StatWatcher;
	    fs.FSWatcher = vol.FSWatcher;
	    fs.WriteStream = vol.WriteStream;
	    fs.ReadStream = vol.ReadStream;
	    fs.promises = vol.promises;
	    fs._toUnixTimestamp = volume_1.toUnixTimestamp;
	    return fs;
	}
	exports.createFsFromVolume = createFsFromVolume;
	exports.fs = createFsFromVolume(exports.vol);
	module.exports = __assign(__assign({}, module.exports), exports.fs);
	module.exports.semantic = true; 
} (lib, lib.exports));

var libExports = lib.exports;

const semantic = true;

const versions = {
  memfs: "3.5.3",
  build: "3.5.10302"
};

// re-export from fs

const {
  F_OK,
  R_OK,
  W_OK,
  X_OK,
  constants,
  Stats,
  Dirent,
  renameSync,
  ftruncateSync,
  truncateSync,
  chownSync,
  fchownSync,
  lchownSync,
  chmodSync,
  fchmodSync,
  lchmodSync,
  statSync,
  lstatSync,
  fstatSync,
  linkSync,
  symlinkSync,
  readlinkSync,
  realpathSync,
  unlinkSync,
  rmdirSync,
  mkdirSync,
  mkdirpSync,
  readdirSync,
  closeSync,
  openSync,
  utimesSync,
  futimesSync,
  fsyncSync,
  writeSync,
  readSync,
  readFileSync,
  writeFileSync,
  appendFileSync,
  existsSync,
  accessSync,
  fdatasyncSync,
  mkdtempSync,
  copyFileSync,
  rmSync,
  createReadStream,
  createWriteStream,
  rename,
  ftruncate,
  truncate,
  chown,
  fchown,
  lchown,
  chmod,
  fchmod,
  lchmod,
  stat,
  lstat,
  fstat,
  link,
  symlink,
  readlink,
  realpath,
  unlink,
  rmdir,
  mkdir,
  mkdirp,
  readdir,
  close,
  open,
  utimes,
  futimes,
  fsync,
  write,
  read,
  readFile,
  writeFile,
  appendFile,
  exists,
  access,
  fdatasync,
  mkdtemp,
  copyFile,
  rm,
  watchFile,
  unwatchFile,
  watch,
  StatWatcher,
  FSWatcher,
  WriteStream,
  ReadStream,
  promises,
  _toUnixTimestamp
} = libExports.fs;

var Volume = libExports.Volume;
var createFsFromVolume = libExports.createFsFromVolume;
var fs = libExports.fs;
var vol = libExports.vol;
export { Dirent, FSWatcher, F_OK, R_OK, ReadStream, StatWatcher, Stats, Volume, W_OK, WriteStream, X_OK, _toUnixTimestamp, access, accessSync, appendFile, appendFileSync, chmod, chmodSync, chown, chownSync, close, closeSync, constants, copyFile, copyFileSync, createFsFromVolume, createReadStream, createWriteStream, exists, existsSync, fchmod, fchmodSync, fchown, fchownSync, fdatasync, fdatasyncSync, fs, fstat, fstatSync, fsync, fsyncSync, ftruncate, ftruncateSync, futimes, futimesSync, lchmod, lchmodSync, lchown, lchownSync, link, linkSync, lstat, lstatSync, mkdir, mkdirSync, mkdirp, mkdirpSync, mkdtemp, mkdtempSync, open, openSync, index as path, promises, read, readFile, readFileSync, readSync, readdir, readdirSync, readlink, readlinkSync, realpath, realpathSync, rename, renameSync, rm, rmSync, rmdir, rmdirSync, semantic, stat, statSync, symlink, symlinkSync, truncate, truncateSync, unlink, unlinkSync, unwatchFile, utimes, utimesSync, versions, vol, watch, watchFile, write, writeFile, writeFileSync, writeSync };
