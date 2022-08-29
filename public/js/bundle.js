
import $5K8Kd$axios from "axios";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire11c7"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire11c7"] = parcelRequire;
}
parcelRequire.register("32uuR", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");

var $ecAuG = parcelRequire("ecAuG");

var $jzmbF = parcelRequire("jzmbF");

var $3P7df = parcelRequire("3P7df");

var $laxum = parcelRequire("laxum");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function $2369370b739eb32e$var$createInstance(defaultConfig) {
    var context = new $jzmbF(defaultConfig);
    var instance = $ecAuG($jzmbF.prototype.request, context);
    // Copy axios.prototype to instance
    $e88fe.extend(instance, $jzmbF.prototype, context);
    // Copy context to instance
    $e88fe.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return $2369370b739eb32e$var$createInstance($3P7df(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var $2369370b739eb32e$var$axios = $2369370b739eb32e$var$createInstance($laxum);
// Expose Axios class to allow class inheritance
$2369370b739eb32e$var$axios.Axios = $jzmbF;

// Expose Cancel & CancelToken
$2369370b739eb32e$var$axios.CanceledError = (parcelRequire("irX2S"));

$2369370b739eb32e$var$axios.CancelToken = (parcelRequire("fhBHU"));

$2369370b739eb32e$var$axios.isCancel = (parcelRequire("kaBn2"));

$2369370b739eb32e$var$axios.VERSION = (parcelRequire("edFek")).version;

$2369370b739eb32e$var$axios.toFormData = (parcelRequire("ayPLf"));

// Expose AxiosError class
$2369370b739eb32e$var$axios.AxiosError = (parcelRequire("eqQU7"));
// alias for CanceledError for backward compatibility
$2369370b739eb32e$var$axios.Cancel = $2369370b739eb32e$var$axios.CanceledError;
// Expose all/spread
$2369370b739eb32e$var$axios.all = function all(promises) {
    return Promise.all(promises);
};

$2369370b739eb32e$var$axios.spread = (parcelRequire("geRAt"));

// Expose isAxiosError
$2369370b739eb32e$var$axios.isAxiosError = (parcelRequire("gDtAp"));
module.exports = $2369370b739eb32e$var$axios;
// Allow use of default import syntax in TypeScript
module.exports.default = $2369370b739eb32e$var$axios;

});
parcelRequire.register("e88fe", function(module, exports) {
"use strict";

var $ecAuG = parcelRequire("ecAuG");
// utils is a library of generic helper functions non-specific to axios
var $a498354927c8c011$var$toString = Object.prototype.toString;
// eslint-disable-next-line func-names
var $a498354927c8c011$var$kindOf = function(cache) {
    // eslint-disable-next-line func-names
    return function(thing) {
        var str = $a498354927c8c011$var$toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
}(Object.create(null));
function $a498354927c8c011$var$kindOfTest(type) {
    type = type.toLowerCase();
    return function isKindOf(thing) {
        return $a498354927c8c011$var$kindOf(thing) === type;
    };
}
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function $a498354927c8c011$var$isArray(val) {
    return Array.isArray(val);
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function $a498354927c8c011$var$isUndefined(val) {
    return typeof val === "undefined";
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function $a498354927c8c011$var$isBuffer(val) {
    return val !== null && !$a498354927c8c011$var$isUndefined(val) && val.constructor !== null && !$a498354927c8c011$var$isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ var $a498354927c8c011$var$isArrayBuffer = $a498354927c8c011$var$kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function $a498354927c8c011$var$isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && $a498354927c8c011$var$isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function $a498354927c8c011$var$isString(val) {
    return typeof val === "string";
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function $a498354927c8c011$var$isNumber(val) {
    return typeof val === "number";
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function $a498354927c8c011$var$isObject(val) {
    return val !== null && typeof val === "object";
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function $a498354927c8c011$var$isPlainObject(val) {
    if ($a498354927c8c011$var$kindOf(val) !== "object") return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ var $a498354927c8c011$var$isDate = $a498354927c8c011$var$kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ var $a498354927c8c011$var$isFile = $a498354927c8c011$var$kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ var $a498354927c8c011$var$isBlob = $a498354927c8c011$var$kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ var $a498354927c8c011$var$isFileList = $a498354927c8c011$var$kindOfTest("FileList");
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function $a498354927c8c011$var$isFunction(val) {
    return $a498354927c8c011$var$toString.call(val) === "[object Function]";
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function $a498354927c8c011$var$isStream(val) {
    return $a498354927c8c011$var$isObject(val) && $a498354927c8c011$var$isFunction(val.pipe);
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function $a498354927c8c011$var$isFormData(thing) {
    var pattern = "[object FormData]";
    return thing && (typeof FormData === "function" && thing instanceof FormData || $a498354927c8c011$var$toString.call(thing) === pattern || $a498354927c8c011$var$isFunction(thing.toString) && thing.toString() === pattern);
}
/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ var $a498354927c8c011$var$isURLSearchParams = $a498354927c8c011$var$kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function $a498354927c8c011$var$trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function $a498354927c8c011$var$isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function $a498354927c8c011$var$forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if ($a498354927c8c011$var$isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function $a498354927c8c011$var$merge() {
    var result = {};
    function assignValue(val, key) {
        if ($a498354927c8c011$var$isPlainObject(result[key]) && $a498354927c8c011$var$isPlainObject(val)) result[key] = $a498354927c8c011$var$merge(result[key], val);
        else if ($a498354927c8c011$var$isPlainObject(val)) result[key] = $a498354927c8c011$var$merge({}, val);
        else if ($a498354927c8c011$var$isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)$a498354927c8c011$var$forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function $a498354927c8c011$var$extend(a, b, thisArg) {
    $a498354927c8c011$var$forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") a[key] = $ecAuG(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function $a498354927c8c011$var$stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
}
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */ function $a498354927c8c011$var$inherits(constructor, superConstructor, props, descriptors) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    props && Object.assign(constructor.prototype, props);
}
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */ function $a498354927c8c011$var$toFlatObject(sourceObj, destObj, filter) {
    var props;
    var i;
    var prop;
    var merged = {};
    destObj = destObj || {};
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if (!merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = Object.getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
}
/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */ function $a498354927c8c011$var$endsWith(str, searchString, position) {
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
}
/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */ function $a498354927c8c011$var$toArray(thing) {
    if (!thing) return null;
    var i = thing.length;
    if ($a498354927c8c011$var$isUndefined(i)) return null;
    var arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
}
// eslint-disable-next-line func-names
var $a498354927c8c011$var$isTypedArray = function(TypedArray) {
    // eslint-disable-next-line func-names
    return function(thing) {
        return TypedArray && thing instanceof TypedArray;
    };
}(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
module.exports = {
    isArray: $a498354927c8c011$var$isArray,
    isArrayBuffer: $a498354927c8c011$var$isArrayBuffer,
    isBuffer: $a498354927c8c011$var$isBuffer,
    isFormData: $a498354927c8c011$var$isFormData,
    isArrayBufferView: $a498354927c8c011$var$isArrayBufferView,
    isString: $a498354927c8c011$var$isString,
    isNumber: $a498354927c8c011$var$isNumber,
    isObject: $a498354927c8c011$var$isObject,
    isPlainObject: $a498354927c8c011$var$isPlainObject,
    isUndefined: $a498354927c8c011$var$isUndefined,
    isDate: $a498354927c8c011$var$isDate,
    isFile: $a498354927c8c011$var$isFile,
    isBlob: $a498354927c8c011$var$isBlob,
    isFunction: $a498354927c8c011$var$isFunction,
    isStream: $a498354927c8c011$var$isStream,
    isURLSearchParams: $a498354927c8c011$var$isURLSearchParams,
    isStandardBrowserEnv: $a498354927c8c011$var$isStandardBrowserEnv,
    forEach: $a498354927c8c011$var$forEach,
    merge: $a498354927c8c011$var$merge,
    extend: $a498354927c8c011$var$extend,
    trim: $a498354927c8c011$var$trim,
    stripBOM: $a498354927c8c011$var$stripBOM,
    inherits: $a498354927c8c011$var$inherits,
    toFlatObject: $a498354927c8c011$var$toFlatObject,
    kindOf: $a498354927c8c011$var$kindOf,
    kindOfTest: $a498354927c8c011$var$kindOfTest,
    endsWith: $a498354927c8c011$var$endsWith,
    toArray: $a498354927c8c011$var$toArray,
    isTypedArray: $a498354927c8c011$var$isTypedArray,
    isFileList: $a498354927c8c011$var$isFileList
};

});
parcelRequire.register("ecAuG", function(module, exports) {
"use strict";
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

});


parcelRequire.register("jzmbF", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");

var $7OSjm = parcelRequire("7OSjm");

var $fZixe = parcelRequire("fZixe");

var $llVIv = parcelRequire("llVIv");

var $3P7df = parcelRequire("3P7df");

var $aJGHP = parcelRequire("aJGHP");

var $4Fe1z = parcelRequire("4Fe1z");
var $e3f27f21413171f9$var$validators = $4Fe1z.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function $e3f27f21413171f9$var$Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new $fZixe(),
        response: new $fZixe()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ $e3f27f21413171f9$var$Axios.prototype.request = function request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
    } else config = configOrUrl || {};
    config = $3P7df(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = "get";
    var transitional = config.transitional;
    if (transitional !== undefined) $4Fe1z.assertOptions(transitional, {
        silentJSONParsing: $e3f27f21413171f9$var$validators.transitional($e3f27f21413171f9$var$validators.boolean),
        forcedJSONParsing: $e3f27f21413171f9$var$validators.transitional($e3f27f21413171f9$var$validators.boolean),
        clarifyTimeoutError: $e3f27f21413171f9$var$validators.transitional($e3f27f21413171f9$var$validators.boolean)
    }, false);
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            $llVIv,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length)promise = promise.then(chain.shift(), chain.shift());
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = $llVIv(newConfig);
    } catch (error1) {
        return Promise.reject(error1);
    }
    while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    return promise;
};
$e3f27f21413171f9$var$Axios.prototype.getUri = function getUri(config) {
    config = $3P7df(this.defaults, config);
    var fullPath = $aJGHP(config.baseURL, config.url);
    return $7OSjm(fullPath, config.params, config.paramsSerializer);
};
// Provide aliases for supported request methods
$e88fe.forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ $e3f27f21413171f9$var$Axios.prototype[method] = function(url, config) {
        return this.request($3P7df(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
$e88fe.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request($3P7df(config || {}, {
                method: method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: url,
                data: data
            }));
        };
    }
    $e3f27f21413171f9$var$Axios.prototype[method] = generateHTTPMethod();
    $e3f27f21413171f9$var$Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
module.exports = $e3f27f21413171f9$var$Axios;

});
parcelRequire.register("7OSjm", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");
function $5b1755039a55240c$var$encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if ($e88fe.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        $e88fe.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") return;
            if ($e88fe.isArray(val)) key = key + "[]";
            else val = [
                val
            ];
            $e88fe.forEach(val, function parseValue(v) {
                if ($e88fe.isDate(v)) v = v.toISOString();
                else if ($e88fe.isObject(v)) v = JSON.stringify(v);
                parts.push($5b1755039a55240c$var$encode(key) + "=" + $5b1755039a55240c$var$encode(v));
            });
        });
        serializedParams = parts.join("&");
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
};

});

parcelRequire.register("fZixe", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");
function $ba3aee2e8aef7746$var$InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ $ba3aee2e8aef7746$var$InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ $ba3aee2e8aef7746$var$InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ $ba3aee2e8aef7746$var$InterceptorManager.prototype.forEach = function forEach(fn) {
    $e88fe.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = $ba3aee2e8aef7746$var$InterceptorManager;

});

parcelRequire.register("llVIv", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");

var $9upBe = parcelRequire("9upBe");

var $kaBn2 = parcelRequire("kaBn2");

var $laxum = parcelRequire("laxum");

var $irX2S = parcelRequire("irX2S");
/**
 * Throws a `CanceledError` if cancellation has been requested.
 */ function $f8b854848ce393f9$var$throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new $irX2S();
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    $f8b854848ce393f9$var$throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = $9upBe.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = $e88fe.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    $e88fe.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch",
        "common"
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || $laxum.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        $f8b854848ce393f9$var$throwIfCancellationRequested(config);
        // Transform response data
        response.data = $9upBe.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!$kaBn2(reason)) {
            $f8b854848ce393f9$var$throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = $9upBe.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

});
parcelRequire.register("9upBe", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");

var $laxum = parcelRequire("laxum");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || $laxum;
    /*eslint no-param-reassign:0*/ $e88fe.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

});
parcelRequire.register("laxum", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");

var $04eY2 = parcelRequire("04eY2");

var $eqQU7 = parcelRequire("eqQU7");

var $hLNRi = parcelRequire("hLNRi");

var $ayPLf = parcelRequire("ayPLf");
var $f694824ccc3d6b48$var$DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
};
function $f694824ccc3d6b48$var$setContentTypeIfUnset(headers, value) {
    if (!$e88fe.isUndefined(headers) && $e88fe.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
}


function $f694824ccc3d6b48$var$getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") // For browsers use XHR adapter
    adapter = (parcelRequire("7YXLM"));
    else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") // For node use HTTP adapter
    adapter = (parcelRequire("aQujv"));
    return adapter;
}
function $f694824ccc3d6b48$var$stringifySafely(rawValue, parser, encoder) {
    if ($e88fe.isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return $e88fe.trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}

var $f694824ccc3d6b48$var$defaults = {
    transitional: $hLNRi,
    adapter: $f694824ccc3d6b48$var$getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            $04eY2(headers, "Accept");
            $04eY2(headers, "Content-Type");
            if ($e88fe.isFormData(data) || $e88fe.isArrayBuffer(data) || $e88fe.isBuffer(data) || $e88fe.isStream(data) || $e88fe.isFile(data) || $e88fe.isBlob(data)) return data;
            if ($e88fe.isArrayBufferView(data)) return data.buffer;
            if ($e88fe.isURLSearchParams(data)) {
                $f694824ccc3d6b48$var$setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
                return data.toString();
            }
            var isObjectPayload = $e88fe.isObject(data);
            var contentType = headers && headers["Content-Type"];
            var isFileList;
            if ((isFileList = $e88fe.isFileList(data)) || isObjectPayload && contentType === "multipart/form-data") {
                var _FormData = this.env && this.env.FormData;
                return $ayPLf(isFileList ? {
                    "files[]": data
                } : data, _FormData && new _FormData());
            } else if (isObjectPayload || contentType === "application/json") {
                $f694824ccc3d6b48$var$setContentTypeIfUnset(headers, "application/json");
                return $f694824ccc3d6b48$var$stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || $f694824ccc3d6b48$var$defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
            if (strictJSONParsing || forcedJSONParsing && $e88fe.isString(data) && data.length) try {
                return JSON.parse(data);
            } catch (e) {
                if (strictJSONParsing) {
                    if (e.name === "SyntaxError") throw $eqQU7.from(e, $eqQU7.ERR_BAD_RESPONSE, this, null, this.response);
                    throw e;
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (parcelRequire("7xWdh"))
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
$e88fe.forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    $f694824ccc3d6b48$var$defaults.headers[method] = {};
});
$e88fe.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    $f694824ccc3d6b48$var$defaults.headers[method] = $e88fe.merge($f694824ccc3d6b48$var$DEFAULT_CONTENT_TYPE);
});
module.exports = $f694824ccc3d6b48$var$defaults;

});
parcelRequire.register("04eY2", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");
module.exports = function normalizeHeaderName(headers, normalizedName) {
    $e88fe.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

});

parcelRequire.register("eqQU7", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ function $a81c881481813e48$var$AxiosError(message, code, config, request, response) {
    Error.call(this);
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
$e88fe.inherits($a81c881481813e48$var$AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
var $a81c881481813e48$var$prototype = $a81c881481813e48$var$AxiosError.prototype;
var $a81c881481813e48$var$descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED"
].forEach(function(code) {
    $a81c881481813e48$var$descriptors[code] = {
        value: code
    };
});
Object.defineProperties($a81c881481813e48$var$AxiosError, $a81c881481813e48$var$descriptors);
Object.defineProperty($a81c881481813e48$var$prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
$a81c881481813e48$var$AxiosError.from = function(error, code, config, request, response, customProps) {
    var axiosError = Object.create($a81c881481813e48$var$prototype);
    $e88fe.toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    });
    $a81c881481813e48$var$AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
module.exports = $a81c881481813e48$var$AxiosError;

});

parcelRequire.register("hLNRi", function(module, exports) {
"use strict";
module.exports = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

});

parcelRequire.register("ayPLf", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");
/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/ function $7b053b078c3b7e26$var$toFormData(obj, formData) {
    // eslint-disable-next-line no-param-reassign
    formData = formData || new FormData();
    var stack = [];
    function convertValue(value) {
        if (value === null) return "";
        if ($e88fe.isDate(value)) return value.toISOString();
        if ($e88fe.isArrayBuffer(value) || $e88fe.isTypedArray(value)) return typeof Blob === "function" ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    function build(data, parentKey) {
        if ($e88fe.isPlainObject(data) || $e88fe.isArray(data)) {
            if (stack.indexOf(data) !== -1) throw Error("Circular reference detected in " + parentKey);
            stack.push(data);
            $e88fe.forEach(data, function each(value, key) {
                if ($e88fe.isUndefined(value)) return;
                var fullKey = parentKey ? parentKey + "." + key : key;
                var arr;
                if (value && !parentKey && typeof value === "object") {
                    if ($e88fe.endsWith(key, "{}")) // eslint-disable-next-line no-param-reassign
                    value = JSON.stringify(value);
                    else if ($e88fe.endsWith(key, "[]") && (arr = $e88fe.toArray(value))) {
                        // eslint-disable-next-line func-names
                        arr.forEach(function(el) {
                            !$e88fe.isUndefined(el) && formData.append(fullKey, convertValue(el));
                        });
                        return;
                    }
                }
                build(value, fullKey);
            });
            stack.pop();
        } else formData.append(parentKey, convertValue(data));
    }
    build(obj);
    return formData;
}
module.exports = $7b053b078c3b7e26$var$toFormData;

});

parcelRequire.register("7YXLM", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");

var $d3YTs = parcelRequire("d3YTs");

var $5YvAM = parcelRequire("5YvAM");

var $7OSjm = parcelRequire("7OSjm");

var $aJGHP = parcelRequire("aJGHP");

var $kR4Fq = parcelRequire("kR4Fq");

var $gSJkU = parcelRequire("gSJkU");

var $hLNRi = parcelRequire("hLNRi");

var $eqQU7 = parcelRequire("eqQU7");

var $irX2S = parcelRequire("irX2S");

var $9E3lj = parcelRequire("9E3lj");
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if ($e88fe.isFormData(requestData) && $e88fe.isStandardBrowserEnv()) delete requestHeaders["Content-Type"]; // Let the browser set it
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = $aJGHP(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), $7OSjm(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            var responseHeaders = "getAllResponseHeaders" in request ? $kR4Fq(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            $d3YTs(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new $eqQU7("Request aborted", $eqQU7.ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new $eqQU7("Network Error", $eqQU7.ERR_NETWORK, config, request, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            var transitional = config.transitional || $hLNRi;
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new $eqQU7(timeoutErrorMessage, transitional.clarifyTimeoutError ? $eqQU7.ETIMEDOUT : $eqQU7.ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ($e88fe.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || $gSJkU(fullPath)) && config.xsrfCookieName ? $5YvAM.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ("setRequestHeader" in request) $e88fe.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!$e88fe.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", config.onUploadProgress);
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (!request) return;
                reject(!cancel || cancel && cancel.type ? new $irX2S() : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        if (!requestData) requestData = null;
        var protocol = $9E3lj(fullPath);
        if (protocol && [
            "http",
            "https",
            "file"
        ].indexOf(protocol) === -1) {
            reject(new $eqQU7("Unsupported protocol " + protocol + ":", $eqQU7.ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData);
    });
};

});
parcelRequire.register("d3YTs", function(module, exports) {
"use strict";

var $eqQU7 = parcelRequire("eqQU7");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new $eqQU7("Request failed with status code " + response.status, [
        $eqQU7.ERR_BAD_REQUEST,
        $eqQU7.ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
};

});

parcelRequire.register("5YvAM", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");
module.exports = $e88fe.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if ($e88fe.isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if ($e88fe.isString(path)) cookie.push("path=" + path);
            if ($e88fe.isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

});

parcelRequire.register("aJGHP", function(module, exports) {
"use strict";

var $gfgYu = parcelRequire("gfgYu");

var $fiEbc = parcelRequire("fiEbc");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !$gfgYu(requestedURL)) return $fiEbc(baseURL, requestedURL);
    return requestedURL;
};

});
parcelRequire.register("gfgYu", function(module, exports) {
"use strict";
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

});

parcelRequire.register("fiEbc", function(module, exports) {
"use strict";
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};

});


parcelRequire.register("kR4Fq", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var $f2ec60b4fa80e1ae$var$ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    $e88fe.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = $e88fe.trim(line.substr(0, i)).toLowerCase();
        val = $e88fe.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && $f2ec60b4fa80e1ae$var$ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === "set-cookie") parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
    });
    return parsed;
};

});

parcelRequire.register("gSJkU", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");
module.exports = $e88fe.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = $e88fe.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

});

parcelRequire.register("irX2S", function(module, exports) {
"use strict";

var $eqQU7 = parcelRequire("eqQU7");

var $e88fe = parcelRequire("e88fe");
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function $d6e88ccd532876b7$var$CanceledError(message) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    $eqQU7.call(this, message == null ? "canceled" : message, $eqQU7.ERR_CANCELED);
    this.name = "CanceledError";
}
$e88fe.inherits($d6e88ccd532876b7$var$CanceledError, $eqQU7, {
    __CANCEL__: true
});
module.exports = $d6e88ccd532876b7$var$CanceledError;

});

parcelRequire.register("9E3lj", function(module, exports) {
"use strict";
module.exports = function parseProtocol(url) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
};

});


parcelRequire.register("aQujv", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");

var $d3YTs = parcelRequire("d3YTs");

var $aJGHP = parcelRequire("aJGHP");

var $7OSjm = parcelRequire("7OSjm");



var $7e56465b8bcb6e68$require$httpFollow = _http;

var $7e56465b8bcb6e68$require$httpsFollow = _https;



var $edFek = parcelRequire("edFek");
var $7e56465b8bcb6e68$require$VERSION = $edFek.version;

var $hLNRi = parcelRequire("hLNRi");

var $eqQU7 = parcelRequire("eqQU7");

var $irX2S = parcelRequire("irX2S");
var $7e56465b8bcb6e68$var$isHttps = /https:?/;
var $7e56465b8bcb6e68$var$supportedProtocols = [
    "http:",
    "https:",
    "file:"
];
/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */ function $7e56465b8bcb6e68$var$setProxy(options, proxy, location) {
    options.hostname = proxy.host;
    options.host = proxy.host;
    options.port = proxy.port;
    options.path = location;
    // Basic proxy authorization
    if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ":" + proxy.auth.password, "utf8").toString("base64");
        options.headers["Proxy-Authorization"] = "Basic " + base64;
    }
    // If a proxy is used, any redirects must also pass through the proxy
    options.beforeRedirect = function beforeRedirect(redirection) {
        redirection.headers.host = redirection.host;
        $7e56465b8bcb6e68$var$setProxy(redirection, proxy, redirection.href);
    };
}
/*eslint consistent-return:0*/ module.exports = function httpAdapter(config) {
    return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        var onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        var resolve = function resolve(value) {
            done();
            resolvePromise(value);
        };
        var rejected = false;
        var reject = function reject(value) {
            done();
            rejected = true;
            rejectPromise(value);
        };
        var data = config.data;
        var headers = config.headers;
        var headerNames = {};
        Object.keys(headers).forEach(function storeLowerName(name) {
            headerNames[name.toLowerCase()] = name;
        });
        // Set User-Agent (required by some servers)
        // See https://github.com/axios/axios/issues/69
        if ("user-agent" in headerNames) // User-Agent is specified; handle case where no UA header is desired
        {
            if (!headers[headerNames["user-agent"]]) delete headers[headerNames["user-agent"]];
        } else // Only set header if it hasn't been set in config
        headers["User-Agent"] = "axios/" + $7e56465b8bcb6e68$require$VERSION;
        // support for https://www.npmjs.com/package/form-data api
        if ($e88fe.isFormData(data) && $e88fe.isFunction(data.getHeaders)) Object.assign(headers, data.getHeaders());
        else if (data && !$e88fe.isStream(data)) {
            if (Buffer.isBuffer(data)) ;
            else if ($e88fe.isArrayBuffer(data)) data = Buffer.from(new Uint8Array(data));
            else if ($e88fe.isString(data)) data = Buffer.from(data, "utf-8");
            else return reject(new $eqQU7("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", $eqQU7.ERR_BAD_REQUEST, config));
            if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) return reject(new $eqQU7("Request body larger than maxBodyLength limit", $eqQU7.ERR_BAD_REQUEST, config));
            // Add Content-Length header if data exists
            if (!headerNames["content-length"]) headers["Content-Length"] = data.length;
        }
        // HTTP basic authentication
        var auth = undefined;
        if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password || "";
            auth = username + ":" + password;
        }
        // Parse url
        var fullPath = $aJGHP(config.baseURL, config.url);
        var parsed = parse(fullPath);
        var protocol = parsed.protocol || $7e56465b8bcb6e68$var$supportedProtocols[0];
        if ($7e56465b8bcb6e68$var$supportedProtocols.indexOf(protocol) === -1) return reject(new $eqQU7("Unsupported protocol " + protocol, $eqQU7.ERR_BAD_REQUEST, config));
        if (!auth && parsed.auth) {
            var urlAuth = parsed.auth.split(":");
            var urlUsername = urlAuth[0] || "";
            var urlPassword = urlAuth[1] || "";
            auth = urlUsername + ":" + urlPassword;
        }
        if (auth && headerNames.authorization) delete headers[headerNames.authorization];
        var isHttpsRequest = $7e56465b8bcb6e68$var$isHttps.test(protocol);
        var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
        try {
            $7OSjm(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, "");
        } catch (err) {
            var customErr = new Error(err.message);
            customErr.config = config;
            customErr.url = config.url;
            customErr.exists = true;
            reject(customErr);
        }
        var options = {
            path: $7OSjm(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ""),
            method: config.method.toUpperCase(),
            headers: headers,
            agent: agent,
            agents: {
                http: config.httpAgent,
                https: config.httpsAgent
            },
            auth: auth
        };
        if (config.socketPath) options.socketPath = config.socketPath;
        else {
            options.hostname = parsed.hostname;
            options.port = parsed.port;
        }
        var proxy = config.proxy;
        if (!proxy && proxy !== false) {
            var proxyEnv = protocol.slice(0, -1) + "_proxy";
            var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
            if (proxyUrl) {
                var parsedProxyUrl = parse(proxyUrl);
                var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
                var shouldProxy = true;
                if (noProxyEnv) {
                    var noProxy = noProxyEnv.split(",").map(function trim(s) {
                        return s.trim();
                    });
                    shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                        if (!proxyElement) return false;
                        if (proxyElement === "*") return true;
                        if (proxyElement[0] === "." && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) return true;
                        return parsed.hostname === proxyElement;
                    });
                }
                if (shouldProxy) {
                    proxy = {
                        host: parsedProxyUrl.hostname,
                        port: parsedProxyUrl.port,
                        protocol: parsedProxyUrl.protocol
                    };
                    if (parsedProxyUrl.auth) {
                        var proxyUrlAuth = parsedProxyUrl.auth.split(":");
                        proxy.auth = {
                            username: proxyUrlAuth[0],
                            password: proxyUrlAuth[1]
                        };
                    }
                }
            }
        }
        if (proxy) {
            options.headers.host = parsed.hostname + (parsed.port ? ":" + parsed.port : "");
            $7e56465b8bcb6e68$var$setProxy(options, proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
        }
        var transport;
        var isHttpsProxy = isHttpsRequest && (proxy ? $7e56465b8bcb6e68$var$isHttps.test(proxy.protocol) : true);
        if (config.transport) transport = config.transport;
        else if (config.maxRedirects === 0) transport = isHttpsProxy ? $5K8Kd$https : $5K8Kd$http;
        else {
            if (config.maxRedirects) options.maxRedirects = config.maxRedirects;
            if (config.beforeRedirect) options.beforeRedirect = config.beforeRedirect;
            transport = isHttpsProxy ? $7e56465b8bcb6e68$require$httpsFollow : $7e56465b8bcb6e68$require$httpFollow;
        }
        if (config.maxBodyLength > -1) options.maxBodyLength = config.maxBodyLength;
        if (config.insecureHTTPParser) options.insecureHTTPParser = config.insecureHTTPParser;
        // Create the request
        var req = transport.request(options, function handleResponse(res) {
            if (req.aborted) return;
            // uncompress the response body transparently if required
            var stream = res;
            // return the last request in case of redirects
            var lastRequest = res.req || req;
            // if no content, is HEAD request or decompress disabled we should not decompress
            if (res.statusCode !== 204 && lastRequest.method !== "HEAD" && config.decompress !== false) switch(res.headers["content-encoding"]){
                /*eslint default-case:0*/ case "gzip":
                case "compress":
                case "deflate":
                    // add the unzipper to the body stream processing pipeline
                    stream = stream.pipe(createUnzip());
                    // remove the content-encoding in order to not confuse downstream operations
                    delete res.headers["content-encoding"];
                    break;
            }
            var response = {
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: res.headers,
                config: config,
                request: lastRequest
            };
            if (config.responseType === "stream") {
                response.data = stream;
                $d3YTs(resolve, reject, response);
            } else {
                var responseBuffer = [];
                var totalResponseBytes = 0;
                stream.on("data", function handleStreamData(chunk) {
                    responseBuffer.push(chunk);
                    totalResponseBytes += chunk.length;
                    // make sure the content length is not over the maxContentLength if specified
                    if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
                        // stream.destoy() emit aborted event before calling reject() on Node.js v16
                        rejected = true;
                        stream.destroy();
                        reject(new $eqQU7("maxContentLength size of " + config.maxContentLength + " exceeded", $eqQU7.ERR_BAD_RESPONSE, config, lastRequest));
                    }
                });
                stream.on("aborted", function handlerStreamAborted() {
                    if (rejected) return;
                    stream.destroy();
                    reject(new $eqQU7("maxContentLength size of " + config.maxContentLength + " exceeded", $eqQU7.ERR_BAD_RESPONSE, config, lastRequest));
                });
                stream.on("error", function handleStreamError(err) {
                    if (req.aborted) return;
                    reject($eqQU7.from(err, null, config, lastRequest));
                });
                stream.on("end", function handleStreamEnd() {
                    try {
                        var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
                        if (config.responseType !== "arraybuffer") {
                            responseData = responseData.toString(config.responseEncoding);
                            if (!config.responseEncoding || config.responseEncoding === "utf8") responseData = $e88fe.stripBOM(responseData);
                        }
                        response.data = responseData;
                    } catch (err) {
                        reject($eqQU7.from(err, null, config, response.request, response));
                    }
                    $d3YTs(resolve, reject, response);
                });
            }
        });
        // Handle errors
        req.on("error", function handleRequestError(err) {
            // @todo remove
            // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
            reject($eqQU7.from(err, null, config, req));
        });
        // set tcp keep alive to prevent drop connection by peer
        req.on("socket", function handleRequestSocket(socket) {
            // default interval of sending ack packet is 1 minute
            socket.setKeepAlive(true, 60000);
        });
        // Handle request timeout
        if (config.timeout) {
            // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
            var timeout = parseInt(config.timeout, 10);
            if (isNaN(timeout)) {
                reject(new $eqQU7("error trying to parse `config.timeout` to int", $eqQU7.ERR_BAD_OPTION_VALUE, config, req));
                return;
            }
            // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
            // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
            // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
            // And then these socket which be hang up will devoring CPU little by little.
            // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
            req.setTimeout(timeout, function handleRequestTimeout() {
                req.abort();
                var transitional = config.transitional || $hLNRi;
                reject(new $eqQU7("timeout of " + timeout + "ms exceeded", transitional.clarifyTimeoutError ? $eqQU7.ETIMEDOUT : $eqQU7.ECONNABORTED, config, req));
            });
        }
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (req.aborted) return;
                req.abort();
                reject(!cancel || cancel && cancel.type ? new $irX2S() : cancel);
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        // Send the request
        if ($e88fe.isStream(data)) data.on("error", function handleStreamError(err) {
            reject($eqQU7.from(err, config, null, req));
        }).pipe(req);
        else req.end(data);
    });
};

});
parcelRequire.register("edFek", function(module, exports) {
module.exports = {
    "version": "0.27.2"
};

});


parcelRequire.register("7xWdh", function(module, exports) {

// eslint-disable-next-line strict
module.exports = $5K8Kd$formdata;

});



parcelRequire.register("kaBn2", function(module, exports) {
"use strict";
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

});


parcelRequire.register("3P7df", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if ($e88fe.isPlainObject(target) && $e88fe.isPlainObject(source)) return $e88fe.merge(target, source);
        else if ($e88fe.isPlainObject(source)) return $e88fe.merge({}, source);
        else if ($e88fe.isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!$e88fe.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
        else if (!$e88fe.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!$e88fe.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!$e88fe.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
        else if (!$e88fe.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) return getMergedValue(undefined, config1[prop]);
    }
    var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "beforeRedirect": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
    };
    $e88fe.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        $e88fe.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};

});

parcelRequire.register("4Fe1z", function(module, exports) {
"use strict";

var $edFek = parcelRequire("edFek");
var $3655deae22231451$require$VERSION = $edFek.version;

var $eqQU7 = parcelRequire("eqQU7");
var $3655deae22231451$var$validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach(function(type, i) {
    $3655deae22231451$var$validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
var $3655deae22231451$var$deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ $3655deae22231451$var$validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + $3655deae22231451$require$VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) throw new $eqQU7(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), $eqQU7.ERR_DEPRECATED);
        if (version && !$3655deae22231451$var$deprecatedWarnings[opt]) {
            $3655deae22231451$var$deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function $3655deae22231451$var$assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new $eqQU7("options must be an object", $eqQU7.ERR_BAD_OPTION_VALUE);
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new $eqQU7("option " + opt + " must be " + result, $eqQU7.ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new $eqQU7("Unknown option " + opt, $eqQU7.ERR_BAD_OPTION);
    }
}
module.exports = {
    assertOptions: $3655deae22231451$var$assertOptions,
    validators: $3655deae22231451$var$validators
};

});


parcelRequire.register("fhBHU", function(module, exports) {
"use strict";

var $irX2S = parcelRequire("irX2S");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function $b205b17024b975ce$var$CancelToken(executor) {
    if (typeof executor !== "function") throw new TypeError("executor must be a function.");
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++)token._listeners[i](cancel);
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new $irX2S(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `CanceledError` if cancellation has been requested.
 */ $b205b17024b975ce$var$CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Subscribe to the cancel signal
 */ $b205b17024b975ce$var$CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) this._listeners.push(listener);
    else this._listeners = [
        listener
    ];
};
/**
 * Unsubscribe from the cancel signal
 */ $b205b17024b975ce$var$CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) return;
    var index = this._listeners.indexOf(listener);
    if (index !== -1) this._listeners.splice(index, 1);
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ $b205b17024b975ce$var$CancelToken.source = function source() {
    var cancel;
    var token = new $b205b17024b975ce$var$CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = $b205b17024b975ce$var$CancelToken;

});

parcelRequire.register("geRAt", function(module, exports) {
"use strict";
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

});

parcelRequire.register("gDtAp", function(module, exports) {
"use strict";

var $e88fe = parcelRequire("e88fe");
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return $e88fe.isObject(payload) && payload.isAxiosError === true;
};

});


const $cc4799f2d5950867$export$4c5dd147b21b9176 = (locations)=>{
    mapboxgl.accessToken = "pk.eyJ1IjoidG9ueWJ1ZmZvbjE0IiwiYSI6ImNrdWd4MWpseTBkeTkybm5tMmxtMDZ2b3EifQ.vcEFKSyhaErpRq7KO_JVCg";
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/jonasschmedtmann/cjvi9q8jd04mi1cpgmg7ev3dy",
        scrollZoom: false
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc)=>{
        // Create marker
        const el = document.createElement("div");
        el.className = "marker";
        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: "bottom"
        }).setLngLat(loc.coordinates).addTo(map);
        // Add popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};


var $35a142c560531c16$exports = {};

$35a142c560531c16$exports = (parcelRequire("32uuR"));


const $2b3649591e3ae397$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
};
const $2b3649591e3ae397$export$de026b00723010c1 = (type, msg)=>{
    $2b3649591e3ae397$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout($2b3649591e3ae397$export$516836c6a9dfc573, 5000);
};


const $6338daf17422bff8$export$596d806903d1f59e = async (email, password)=>{
    try {
        const res = await (0, (/*@__PURE__*/$parcel$interopDefault($35a142c560531c16$exports)))({
            method: "POST",
            url: "http://127.0.0.1:3000/api/v1/users/login",
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status === "success") {
            (0, $2b3649591e3ae397$export$de026b00723010c1)("success", "Logged in successfully!");
            window.setTimeout(()=>{
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        (0, $2b3649591e3ae397$export$de026b00723010c1)("error", err.response.data.message);
    }
};
const $6338daf17422bff8$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const res = await (0, (/*@__PURE__*/$parcel$interopDefault($35a142c560531c16$exports)))({
            method: "GET",
            url: "http://127.0.0.1:3000/api/v1/users/logout"
        });
        res.data.status = "success";
        location.reload(true);
    } catch (err) {
        console.log(err.response);
        (0, $2b3649591e3ae397$export$de026b00723010c1)("error", "Error logging out! Try again.");
    }
};
const $6338daf17422bff8$export$7200a869094fec36 = async (email, name, password, passwordConfirm)=>{
    try {
        const res = await (0, (/*@__PURE__*/$parcel$interopDefault($35a142c560531c16$exports)))({
            method: "POST",
            url: "http://127.0.0.1:3000/api/v1/users/signup",
            data: {
                email: email,
                password: password,
                name: name,
                passwordConfirm: passwordConfirm
            }
        });
        if (res.data.status === "success") {
            (0, $2b3649591e3ae397$export$de026b00723010c1)("success", "created successfully!");
            window.setTimeout(()=>{
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        (0, $2b3649591e3ae397$export$de026b00723010c1)("error", err.response.data.message);
    }
};




const $b902f02f645def0e$export$f558026a994b6051 = async (data, type)=>{
    try {
        const url = type === "password" ? "http://127.0.0.1:3000/api/v1/users/updateMyPassword" : "http://127.0.0.1:3000/api/v1/users/updateMe";
        const res = await (0, ($parcel$interopDefault($5K8Kd$axios)))({
            method: "PATCH",
            url: url,
            data: data
        });
        if (res.data.status === "success") (0, $2b3649591e3ae397$export$de026b00723010c1)("success", `${type.toUpperCase()} updated successfully!`);
    } catch (err) {
        (0, $2b3649591e3ae397$export$de026b00723010c1)("error", err.response.data.message);
    }
};


// DOM ELEMENTS
const $4e1629d03511f6f6$var$mapBox = document.getElementById("map");
const $4e1629d03511f6f6$var$signupForm = document.querySelector(".signup--form");
const $4e1629d03511f6f6$var$loginForm = document.querySelector(".form--login");
const $4e1629d03511f6f6$var$logOutBtn = document.querySelector(".nav__el--logout");
const $4e1629d03511f6f6$var$userDataForm = document.querySelector(".form-user-data");
const $4e1629d03511f6f6$var$userPasswordForm = document.querySelector(".form-user-password");
// DELEGATION
if ($4e1629d03511f6f6$var$mapBox) {
    const locations = JSON.parse($4e1629d03511f6f6$var$mapBox.dataset.locations);
    (0, $cc4799f2d5950867$export$4c5dd147b21b9176)(locations);
}
if ($4e1629d03511f6f6$var$loginForm) $4e1629d03511f6f6$var$loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    (0, $6338daf17422bff8$export$596d806903d1f59e)(email, password);
});
if ($4e1629d03511f6f6$var$signupForm) $4e1629d03511f6f6$var$signupForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;
    const name = document.getElementById("name").value;
    (0, $6338daf17422bff8$export$7200a869094fec36)(email, name, password, passwordConfirm);
});
if ($4e1629d03511f6f6$var$logOutBtn) $4e1629d03511f6f6$var$logOutBtn.addEventListener("click", (0, $6338daf17422bff8$export$a0973bcfe11b05c9));
if ($4e1629d03511f6f6$var$userDataForm) $4e1629d03511f6f6$var$userDataForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    (0, $b902f02f645def0e$export$f558026a994b6051)({
        name: name,
        email: email
    }, "data");
});
if ($4e1629d03511f6f6$var$userPasswordForm) $4e1629d03511f6f6$var$userPasswordForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    document.querySelector(".btn--save-password").textContent = "Updating...";
    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await (0, $b902f02f645def0e$export$f558026a994b6051)({
        passwordCurrent: passwordCurrent,
        password: password,
        passwordConfirm: passwordConfirm
    }, "password");
    document.querySelector(".btn--save-password").textContent = "Save password";
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
});


//# sourceMappingURL=bundle.js.map
