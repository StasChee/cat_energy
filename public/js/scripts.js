"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  typeof define === 'function' && define.amd ? define('scripts', factory) : factory();
})(function () {
  'use strict';

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var jquery = createCommonjsModule(function (module) {
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */
    (function (global, factory) {
      {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ? factory(global, true) : function (w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }

          return factory(w);
        };
      } // Pass this if window is not defined yet
    })(typeof window !== "undefined" ? window : commonjsGlobal, function (window, noGlobal) {
      var arr = [];
      var document = window.document;
      var getProto = Object.getPrototypeOf;
      var _slice = arr.slice;
      var concat = arr.concat;
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};

      var isFunction = function isFunction(obj) {
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        return typeof obj === "function" && typeof obj.nodeType !== "number";
      };

      var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
      };

      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };

      function DOMEval(code, node, doc) {
        doc = doc || document;
        var i,
            val,
            script = doc.createElement("script");
        script.text = code;

        if (node) {
          for (i in preservedScriptAttributes) {
            // Support: Firefox 64+, Edge 18+
            // Some browsers don't support the "nonce" property on scripts.
            // On the other hand, just using `getAttribute` is not enough as
            // the `nonce` attribute is reset to an empty string whenever it
            // becomes browsing-context connected.
            // See https://github.com/whatwg/html/issues/2369
            // See https://html.spec.whatwg.org/#nonce-attributes
            // The `node.getAttribute` check was added for the sake of
            // `jQuery.globalEval` so that it can fake a nonce-containing node
            // via an object.
            val = node[i] || node.getAttribute && node.getAttribute(i);

            if (val) {
              script.setAttribute(i, val);
            }
          }
        }

        doc.head.appendChild(script).parentNode.removeChild(script);
      }

      function toType(obj) {
        if (obj == null) {
          return obj + "";
        } // Support: Android <=2.3 only (functionish RegExp)


        return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
      }
      /* global Symbol */
      // Defining this global in .eslintrc.json would create a danger of using the global
      // unguarded in another place, it seems safer to define global only for this module


      var version = "3.4.1",
          // Define a local copy of jQuery
      jQuery = function jQuery(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init(selector, context);
      },
          // Support: Android <=4.0 only
      // Make sure we trim BOM and NBSP
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

      jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function toArray() {
          return _slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function get(num) {
          // Return all the elements in a clean array
          if (num == null) {
            return _slice.call(this);
          } // Return just the one element from the set


          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function pushStack(elems) {
          // Build a new jQuery matched element set
          var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

          ret.prevObject = this; // Return the newly-formed element set

          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function each(callback) {
          return jQuery.each(this, callback);
        },
        map: function map(callback) {
          return this.pushStack(jQuery.map(this, function (elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function slice() {
          return this.pushStack(_slice.apply(this, arguments));
        },
        first: function first() {
          return this.eq(0);
        },
        last: function last() {
          return this.eq(-1);
        },
        eq: function eq(i) {
          var len = this.length,
              j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function end() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
      };

      jQuery.extend = jQuery.fn.extend = function () {
        var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false; // Handle a deep copy situation

        if (typeof target === "boolean") {
          deep = target; // Skip the boolean and the target

          target = arguments[i] || {};
          i++;
        } // Handle case when target is a string or something (possible in deep copy)


        if (_typeof(target) !== "object" && !isFunction(target)) {
          target = {};
        } // Extend jQuery itself if only one argument is passed


        if (i === length) {
          target = this;
          i--;
        }

        for (; i < length; i++) {
          // Only deal with non-null/undefined values
          if ((options = arguments[i]) != null) {
            // Extend the base object
            for (name in options) {
              copy = options[name]; // Prevent Object.prototype pollution
              // Prevent never-ending loop

              if (name === "__proto__" || target === copy) {
                continue;
              } // Recurse if we're merging plain objects or arrays


              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name]; // Ensure proper type for the source value

                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }

                copyIsArray = false; // Never move original objects, clone them

                target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
              } else if (copy !== undefined) {
                target[name] = copy;
              }
            }
          }
        } // Return the modified object


        return target;
      };

      jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function error(msg) {
          throw new Error(msg);
        },
        noop: function noop() {},
        isPlainObject: function isPlainObject(obj) {
          var proto, Ctor; // Detect obvious negatives
          // Use toString instead of jQuery.type to catch host objects

          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }

          proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

          if (!proto) {
            return true;
          } // Objects with prototype are plain iff they were constructed by a global Object function


          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function isEmptyObject(obj) {
          var name;

          for (name in obj) {
            return false;
          }

          return true;
        },
        // Evaluates a script in a global context
        globalEval: function globalEval(code, options) {
          DOMEval(code, {
            nonce: options && options.nonce
          });
        },
        each: function each(obj, callback) {
          var length,
              i = 0;

          if (isArrayLike(obj)) {
            length = obj.length;

            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }

          return obj;
        },
        // Support: Android <=4.0 only
        trim: function trim(text) {
          return text == null ? "" : (text + "").replace(rtrim, "");
        },
        // results is for internal usage only
        makeArray: function makeArray(arr, results) {
          var ret = results || [];

          if (arr != null) {
            if (isArrayLike(Object(arr))) {
              jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
            } else {
              push.call(ret, arr);
            }
          }

          return ret;
        },
        inArray: function inArray(elem, arr, i) {
          return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function merge(first, second) {
          var len = +second.length,
              j = 0,
              i = first.length;

          for (; j < len; j++) {
            first[i++] = second[j];
          }

          first.length = i;
          return first;
        },
        grep: function grep(elems, callback, invert) {
          var callbackInverse,
              matches = [],
              i = 0,
              length = elems.length,
              callbackExpect = !invert; // Go through the array, only saving the items
          // that pass the validator function

          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);

            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }

          return matches;
        },
        // arg is for internal usage only
        map: function map(elems, callback, arg) {
          var length,
              value,
              i = 0,
              ret = []; // Go through the array, translating each of the items to their new values

          if (isArrayLike(elems)) {
            length = elems.length;

            for (; i < length; i++) {
              value = callback(elems[i], i, arg);

              if (value != null) {
                ret.push(value);
              }
            } // Go through every key on the object,

          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);

              if (value != null) {
                ret.push(value);
              }
            }
          } // Flatten any nested arrays


          return concat.apply([], ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
      });

      if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
      } // Populate the class2type map


      jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      });

      function isArrayLike(obj) {
        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length,
            type = toType(obj);

        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }

        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }

      var Sizzle =
      /*!
       * Sizzle CSS Selector Engine v2.3.4
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://js.foundation/
       *
       * Date: 2019-04-08
       */
      function (window) {
        var i,
            support,
            Expr,
            getText,
            isXML,
            tokenize,
            compile,
            select,
            outermostContext,
            sortInput,
            hasDuplicate,
            // Local document vars
        setDocument,
            document,
            docElem,
            documentIsHTML,
            rbuggyQSA,
            rbuggyMatches,
            matches,
            contains,
            // Instance-specific data
        expando = "sizzle" + 1 * new Date(),
            preferredDoc = window.document,
            dirruns = 0,
            done = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            nonnativeSelectorCache = createCache(),
            sortOrder = function sortOrder(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }

          return 0;
        },
            // Instance methods
        hasOwn = {}.hasOwnProperty,
            arr = [],
            pop = arr.pop,
            push_native = arr.push,
            push = arr.push,
            slice = arr.slice,
            // Use a stripped-down indexOf as it's faster than native
        // https://jsperf.com/thor-indexof-vs-for/5
        indexOf = function indexOf(list, elem) {
          var i = 0,
              len = list.length;

          for (; i < len; i++) {
            if (list[i] === elem) {
              return i;
            }
          }

          return -1;
        },
            booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            // Regular expressions
        // http://www.w3.org/TR/css3-selectors/#whitespace
        whitespace = "[\\x20\\t\\r\\n\\f]",
            // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
            pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // 1. quoted (capture 3; capture 4 or capture 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
        ".*" + ")\\)|)",
            // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp(whitespace + "+", "g"),
            rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
            rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
            rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
            rdescend = new RegExp(whitespace + "|>"),
            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp("^" + identifier + "$"),
            matchExpr = {
          "ID": new RegExp("^#(" + identifier + ")"),
          "CLASS": new RegExp("^\\.(" + identifier + ")"),
          "TAG": new RegExp("^(" + identifier + "|[*])"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },
            rhtml = /HTML$/i,
            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,
            rnative = /^[^{]+\{\s*\[native \w/,
            // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            rsibling = /[+~]/,
            // CSS escapes
        // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
            funescape = function funescape(_, escaped, escapedWhitespace) {
          var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
          // Support: Firefox<24
          // Workaround erroneous numeric interpretation of +"0x"

          return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
          String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
          String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        },
            // CSS string/identifier serialization
        // https://drafts.csswg.org/cssom/#common-serializing-idioms
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            fcssescape = function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
            if (ch === "\0") {
              return "\uFFFD";
            } // Control characters and (dependent upon position) numbers get escaped as code points


            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          } // Other potentially-special ASCII characters get backslash-escaped


          return "\\" + ch;
        },
            // Used for iframes
        // See setDocument()
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE
        unloadHandler = function unloadHandler() {
          setDocument();
        },
            inDisabledFieldset = addCombinator(function (elem) {
          return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
        }, {
          dir: "parentNode",
          next: "legend"
        }); // Optimize for push.apply( _, NodeList )


        try {
          push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
          // Detect silently failing push.apply

          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push = {
            apply: arr.length ? // Leverage slice if possible
            function (target, els) {
              push_native.apply(target, slice.call(els));
            } : // Support: IE<9
            // Otherwise append directly
            function (target, els) {
              var j = target.length,
                  i = 0; // Can't trust NodeList.length

              while (target[j++] = els[i++]) {}

              target.length = j - 1;
            }
          };
        }

        function Sizzle(selector, context, results, seed) {
          var m,
              i,
              elem,
              nid,
              match,
              groups,
              newSelector,
              newContext = context && context.ownerDocument,
              // nodeType defaults to 9, since context defaults to document
          nodeType = context ? context.nodeType : 9;
          results = results || []; // Return early from calls with invalid selector or context

          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          } // Try to shortcut find operations (as opposed to filters) in HTML documents


          if (!seed) {
            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
              setDocument(context);
            }

            context = context || document;

            if (documentIsHTML) {
              // If the selector is sufficiently simple, try using a "get*By*" DOM method
              // (excepting DocumentFragment context, where the methods don't exist)
              if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                // ID selector
                if (m = match[1]) {
                  // Document context
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      // Support: IE, Opera, Webkit
                      // TODO: identify versions
                      // getElementById can match elements by name instead of ID
                      if (elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    } else {
                      return results;
                    } // Element context

                  } else {
                    // Support: IE, Opera, Webkit
                    // TODO: identify versions
                    // getElementById can match elements by name instead of ID
                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                      results.push(elem);
                      return results;
                    }
                  } // Type selector

                } else if (match[2]) {
                  push.apply(results, context.getElementsByTagName(selector));
                  return results; // Class selector
                } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                  push.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              } // Take advantage of querySelectorAll


              if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
              // Exclude object elements
              nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                newSelector = selector;
                newContext = context; // qSA considers elements outside a scoping root when evaluating child or
                // descendant combinators, which is not what we want.
                // In such cases, we work around the behavior by prefixing every selector in the
                // list with an ID selector referencing the scope context.
                // Thanks to Andrew Dupont for this technique.

                if (nodeType === 1 && rdescend.test(selector)) {
                  // Capture the context ID, setting it first if necessary
                  if (nid = context.getAttribute("id")) {
                    nid = nid.replace(rcssescape, fcssescape);
                  } else {
                    context.setAttribute("id", nid = expando);
                  } // Prefix every selector in the list


                  groups = tokenize(selector);
                  i = groups.length;

                  while (i--) {
                    groups[i] = "#" + nid + " " + toSelector(groups[i]);
                  }

                  newSelector = groups.join(","); // Expand context for sibling selectors

                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                }

                try {
                  push.apply(results, newContext.querySelectorAll(newSelector));
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          } // All others


          return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        /**
         * Create key-value caches of limited size
         * @returns {function(string, object)} Returns the Object data after storing it on itself with
         *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
         *	deleting the oldest entry
         */


        function createCache() {
          var keys = [];

          function cache(key, value) {
            // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
            if (keys.push(key + " ") > Expr.cacheLength) {
              // Only keep the most recent entries
              delete cache[keys.shift()];
            }

            return cache[key + " "] = value;
          }

          return cache;
        }
        /**
         * Mark a function for special use by Sizzle
         * @param {Function} fn The function to mark
         */


        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        /**
         * Support testing using an element
         * @param {Function} fn Passed the created element and returns a boolean result
         */


        function assert(fn) {
          var el = document.createElement("fieldset");

          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            // Remove from its parent by default
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            } // release memory in IE


            el = null;
          }
        }
        /**
         * Adds the same handler for all of the specified attrs
         * @param {String} attrs Pipe-separated list of attributes
         * @param {Function} handler The method that will be applied
         */


        function addHandle(attrs, handler) {
          var arr = attrs.split("|"),
              i = arr.length;

          while (i--) {
            Expr.attrHandle[arr[i]] = handler;
          }
        }
        /**
         * Checks document order of two siblings
         * @param {Element} a
         * @param {Element} b
         * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
         */


        function siblingCheck(a, b) {
          var cur = b && a,
              diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

          if (diff) {
            return diff;
          } // Check if b follows a


          if (cur) {
            while (cur = cur.nextSibling) {
              if (cur === b) {
                return -1;
              }
            }
          }

          return a ? 1 : -1;
        }
        /**
         * Returns a function to use in pseudos for input types
         * @param {String} type
         */


        function createInputPseudo(type) {
          return function (elem) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === type;
          };
        }
        /**
         * Returns a function to use in pseudos for buttons
         * @param {String} type
         */


        function createButtonPseudo(type) {
          return function (elem) {
            var name = elem.nodeName.toLowerCase();
            return (name === "input" || name === "button") && elem.type === type;
          };
        }
        /**
         * Returns a function to use in pseudos for :enabled/:disabled
         * @param {Boolean} disabled true for :disabled; false for :enabled
         */


        function createDisabledPseudo(disabled) {
          // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
          return function (elem) {
            // Only certain elements can match :enabled or :disabled
            // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
            // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
            if ("form" in elem) {
              // Check for inherited disabledness on relevant non-disabled elements:
              // * listed form-associated elements in a disabled fieldset
              //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
              //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
              // * option elements in a disabled optgroup
              //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
              // All such elements have a "form" property.
              if (elem.parentNode && elem.disabled === false) {
                // Option elements defer to a parent optgroup if present
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                } // Support: IE 6 - 11
                // Use the isDisabled shortcut property to check for disabled fieldset ancestors


                return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

                /* jshint -W018 */
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }

              return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
              // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
              // even exist on them, let alone have a boolean value.
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            } // Remaining elements are neither :enabled nor :disabled


            return false;
          };
        }
        /**
         * Returns a function to use in pseudos for positionals
         * @param {Function} fn
         */


        function createPositionalPseudo(fn) {
          return markFunction(function (argument) {
            argument = +argument;
            return markFunction(function (seed, matches) {
              var j,
                  matchIndexes = fn([], seed.length, argument),
                  i = matchIndexes.length; // Match elements found at the specified indexes

              while (i--) {
                if (seed[j = matchIndexes[i]]) {
                  seed[j] = !(matches[j] = seed[j]);
                }
              }
            });
          });
        }
        /**
         * Checks a node for validity as a Sizzle context
         * @param {Element|Object=} context
         * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
         */


        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        } // Expose support vars for convenience


        support = Sizzle.support = {};
        /**
         * Detects XML nodes
         * @param {Element|Object} elem An element or a document
         * @returns {Boolean} True iff elem is a non-HTML XML node
         */

        isXML = Sizzle.isXML = function (elem) {
          var namespace = elem.namespaceURI,
              docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
          // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
          // https://bugs.jquery.com/ticket/4833

          return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
        };
        /**
         * Sets document-related variables once based on the current document
         * @param {Element|Object} [doc] An element or document object to use to set the document
         * @returns {Object} Returns the current document
         */


        setDocument = Sizzle.setDocument = function (node) {
          var hasCompare,
              subWindow,
              doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected

          if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
            return document;
          } // Update global variables


          document = doc;
          docElem = document.documentElement;
          documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
          // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)

          if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
            // Support: IE 11, Edge
            if (subWindow.addEventListener) {
              subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
            } else if (subWindow.attachEvent) {
              subWindow.attachEvent("onunload", unloadHandler);
            }
          }
          /* Attributes
          ---------------------------------------------------------------------- */
          // Support: IE<8
          // Verify that getAttribute really returns attributes and not properties
          // (excepting IE8 booleans)


          support.attributes = assert(function (el) {
            el.className = "i";
            return !el.getAttribute("className");
          });
          /* getElement(s)By*
          ---------------------------------------------------------------------- */
          // Check if getElementsByTagName("*") returns only elements

          support.getElementsByTagName = assert(function (el) {
            el.appendChild(document.createComment(""));
            return !el.getElementsByTagName("*").length;
          }); // Support: IE<9

          support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
          // Check if getElementById returns elements by name
          // The broken getElementById methods don't pick up programmatically-set names,
          // so use a roundabout getElementsByName test

          support.getById = assert(function (el) {
            docElem.appendChild(el).id = expando;
            return !document.getElementsByName || !document.getElementsByName(expando).length;
          }); // ID filter and find

          if (support.getById) {
            Expr.filter["ID"] = function (id) {
              var attrId = id.replace(runescape, funescape);
              return function (elem) {
                return elem.getAttribute("id") === attrId;
              };
            };

            Expr.find["ID"] = function (id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter["ID"] = function (id) {
              var attrId = id.replace(runescape, funescape);
              return function (elem) {
                var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node && node.value === attrId;
              };
            }; // Support: IE 6 - 7 only
            // getElementById is not reliable as a find shortcut


            Expr.find["ID"] = function (id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node,
                    i,
                    elems,
                    elem = context.getElementById(id);

                if (elem) {
                  // Verify the id attribute
                  node = elem.getAttributeNode("id");

                  if (node && node.value === id) {
                    return [elem];
                  } // Fall back on getElementsByName


                  elems = context.getElementsByName(id);
                  i = 0;

                  while (elem = elems[i++]) {
                    node = elem.getAttributeNode("id");

                    if (node && node.value === id) {
                      return [elem];
                    }
                  }
                }

                return [];
              }
            };
          } // Tag


          Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
            } else if (support.qsa) {
              return context.querySelectorAll(tag);
            }
          } : function (tag, context) {
            var elem,
                tmp = [],
                i = 0,
                // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
            results = context.getElementsByTagName(tag); // Filter out possible comments

            if (tag === "*") {
              while (elem = results[i++]) {
                if (elem.nodeType === 1) {
                  tmp.push(elem);
                }
              }

              return tmp;
            }

            return results;
          }; // Class

          Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          /* QSA/matchesSelector
          ---------------------------------------------------------------------- */
          // QSA and matchesSelector support
          // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


          rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
          // We allow this because of a bug in IE8/9 that throws an error
          // whenever `document.activeElement` is accessed on an iframe
          // So, we allow :focus to pass through QSA all the time to avoid the IE error
          // See https://bugs.jquery.com/ticket/13378

          rbuggyQSA = [];

          if (support.qsa = rnative.test(document.querySelectorAll)) {
            // Build QSA regex
            // Regex strategy adopted from Diego Perini
            assert(function (el) {
              // Select is set to empty string on purpose
              // This is to test IE's treatment of not explicitly
              // setting a boolean content attribute,
              // since its presence should be enough
              // https://bugs.jquery.com/ticket/12359
              docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
              // Nothing should be selected when empty strings follow ^= or $= or *=
              // The test attribute must be unknown in Opera but "safe" for WinRT
              // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

              if (el.querySelectorAll("[msallowcapture^='']").length) {
                rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
              } // Support: IE8
              // Boolean attributes and "value" are not treated correctly


              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              } // Webkit/Opera - :checked should return selected option elements
              // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
              // IE8 throws error here and will not see later tests


              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              } // Support: Safari 8+, iOS 8+
              // https://bugs.webkit.org/show_bug.cgi?id=136851
              // In-page `selector#id sibling-combinator selector` fails


              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
            });
            assert(function (el) {
              el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
              // The type and name attributes are restricted during .innerHTML assignment

              var input = document.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D"); // Support: IE8
              // Enforce case-sensitivity of name attribute

              if (el.querySelectorAll("[name=d]").length) {
                rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
              } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
              // IE8 throws error here and will not see later tests


              if (el.querySelectorAll(":enabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              } // Support: IE9-11+
              // IE's :disabled selector does not pick up the children of disabled fieldsets


              docElem.appendChild(el).disabled = true;

              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              } // Opera 10-11 does not throw on post-comma invalid pseudos


              el.querySelectorAll("*,:x");
              rbuggyQSA.push(",.*:");
            });
          }

          if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
            assert(function (el) {
              // Check to see if it's possible to do matchesSelector
              // on a disconnected node (IE 9)
              support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
              // Gecko does not error, returns false instead

              matches.call(el, "[s!='']:x");
              rbuggyMatches.push("!=", pseudos);
            });
          }

          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
          /* Contains
          ---------------------------------------------------------------------- */

          hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
          // Purposefully self-exclusive
          // As in, an element does not contain itself

          contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
            var adown = a.nodeType === 9 ? a.documentElement : a,
                bup = b && b.parentNode;
            return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
          } : function (a, b) {
            if (b) {
              while (b = b.parentNode) {
                if (b === a) {
                  return true;
                }
              }
            }

            return false;
          };
          /* Sorting
          ---------------------------------------------------------------------- */
          // Document order sorting

          sortOrder = hasCompare ? function (a, b) {
            // Flag for duplicate removal
            if (a === b) {
              hasDuplicate = true;
              return 0;
            } // Sort on method existence if only one input has compareDocumentPosition


            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

            if (compare) {
              return compare;
            } // Calculate position if both inputs belong to the same document


            compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
            1; // Disconnected nodes

            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              // Choose the first element that is related to our preferred document
              if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                return -1;
              }

              if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                return 1;
              } // Maintain original order


              return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
            }

            return compare & 4 ? -1 : 1;
          } : function (a, b) {
            // Exit early if the nodes are identical
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }

            var cur,
                i = 0,
                aup = a.parentNode,
                bup = b.parentNode,
                ap = [a],
                bp = [b]; // Parentless nodes are either documents or disconnected

            if (!aup || !bup) {
              return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
            } else if (aup === bup) {
              return siblingCheck(a, b);
            } // Otherwise we need full lists of their ancestors for comparison


            cur = a;

            while (cur = cur.parentNode) {
              ap.unshift(cur);
            }

            cur = b;

            while (cur = cur.parentNode) {
              bp.unshift(cur);
            } // Walk down the tree looking for a discrepancy


            while (ap[i] === bp[i]) {
              i++;
            }

            return i ? // Do a sibling check if the nodes have a common ancestor
            siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
            ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
          };
          return document;
        };

        Sizzle.matches = function (expr, elements) {
          return Sizzle(expr, null, null, elements);
        };

        Sizzle.matchesSelector = function (elem, expr) {
          // Set document vars if needed
          if ((elem.ownerDocument || elem) !== document) {
            setDocument(elem);
          }

          if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

              if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }

          return Sizzle(expr, document, null, [elem]).length > 0;
        };

        Sizzle.contains = function (context, elem) {
          // Set document vars if needed
          if ((context.ownerDocument || context) !== document) {
            setDocument(context);
          }

          return contains(context, elem);
        };

        Sizzle.attr = function (elem, name) {
          // Set document vars if needed
          if ((elem.ownerDocument || elem) !== document) {
            setDocument(elem);
          }

          var fn = Expr.attrHandle[name.toLowerCase()],
              // Don't get fooled by Object.prototype properties (jQuery #13807)
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
          return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };

        Sizzle.escape = function (sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };

        Sizzle.error = function (msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
         * Document sorting and removing duplicates
         * @param {ArrayLike} results
         */


        Sizzle.uniqueSort = function (results) {
          var elem,
              duplicates = [],
              j = 0,
              i = 0; // Unless we *know* we can detect duplicates, assume their presence

          hasDuplicate = !support.detectDuplicates;
          sortInput = !support.sortStable && results.slice(0);
          results.sort(sortOrder);

          if (hasDuplicate) {
            while (elem = results[i++]) {
              if (elem === results[i]) {
                j = duplicates.push(i);
              }
            }

            while (j--) {
              results.splice(duplicates[j], 1);
            }
          } // Clear input after sorting to release objects
          // See https://github.com/jquery/sizzle/pull/225


          sortInput = null;
          return results;
        };
        /**
         * Utility function for retrieving the text value of an array of DOM nodes
         * @param {Array|Element} elem
         */


        getText = Sizzle.getText = function (elem) {
          var node,
              ret = "",
              i = 0,
              nodeType = elem.nodeType;

          if (!nodeType) {
            // If no nodeType, this is expected to be an array
            while (node = elem[i++]) {
              // Do not traverse comment nodes
              ret += getText(node);
            }
          } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
            // Use textContent for elements
            // innerText usage removed for consistency of new lines (jQuery #11153)
            if (typeof elem.textContent === "string") {
              return elem.textContent;
            } else {
              // Traverse its children
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                ret += getText(elem);
              }
            }
          } else if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          } // Do not include comment or processing instruction nodes


          return ret;
        };

        Expr = Sizzle.selectors = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: true
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: true
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            "ATTR": function ATTR(match) {
              match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }

              return match.slice(0, 4);
            },
            "CHILD": function CHILD(match) {
              /* matches from matchExpr["CHILD"]
              	1 type (only|nth|...)
              	2 what (child|of-type)
              	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
              	4 xn-component of xn+y argument ([+-]?\d*n|)
              	5 sign of xn-component
              	6 x of xn-component
              	7 sign of y-component
              	8 y of y-component
              */
              match[1] = match[1].toLowerCase();

              if (match[1].slice(0, 3) === "nth") {
                // nth-* requires argument
                if (!match[3]) {
                  Sizzle.error(match[0]);
                } // numeric x and y parameters for Expr.filter.CHILD
                // remember that false/true cast respectively to 0/1


                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
              } else if (match[3]) {
                Sizzle.error(match[0]);
              }

              return match;
            },
            "PSEUDO": function PSEUDO(match) {
              var excess,
                  unquoted = !match[6] && match[2];

              if (matchExpr["CHILD"].test(match[0])) {
                return null;
              } // Accept quoted arguments as-is


              if (match[3]) {
                match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
              } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
              excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
              excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                // excess is a negative index
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              } // Return only captures needed by the pseudo filter method (type and argument)


              return match.slice(0, 3);
            }
          },
          filter: {
            "TAG": function TAG(nodeNameSelector) {
              var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function () {
                return true;
              } : function (elem) {
                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
              };
            },
            "CLASS": function CLASS(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
              });
            },
            "ATTR": function ATTR(name, operator, check) {
              return function (elem) {
                var result = Sizzle.attr(elem, name);

                if (result == null) {
                  return operator === "!=";
                }

                if (!operator) {
                  return true;
                }

                result += "";
                return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
              };
            },
            "CHILD": function CHILD(type, what, argument, first, last) {
              var simple = type.slice(0, 3) !== "nth",
                  forward = type.slice(-4) !== "last",
                  ofType = what === "of-type";
              return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
              function (elem) {
                return !!elem.parentNode;
              } : function (elem, context, xml) {
                var cache,
                    uniqueCache,
                    outerCache,
                    node,
                    nodeIndex,
                    start,
                    dir = simple !== forward ? "nextSibling" : "previousSibling",
                    parent = elem.parentNode,
                    name = ofType && elem.nodeName.toLowerCase(),
                    useCache = !xml && !ofType,
                    diff = false;

                if (parent) {
                  // :(first|last|only)-(child|of-type)
                  if (simple) {
                    while (dir) {
                      node = elem;

                      while (node = node[dir]) {
                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                          return false;
                        }
                      } // Reverse direction for :only-* (if we haven't yet done so)


                      start = dir = type === "only" && !start && "nextSibling";
                    }

                    return true;
                  }

                  start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

                  if (forward && useCache) {
                    // Seek `elem` from a previously-cached index
                    // ...in a gzip-friendly way
                    node = parent;
                    outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                    // Defend against cloned attroperties (jQuery gh-1709)

                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];

                    while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                    diff = nodeIndex = 0) || start.pop()) {
                      // When found, cache indexes on `parent` and break
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    // Use previously-cached element index if available
                    if (useCache) {
                      // ...in a gzip-friendly way
                      node = elem;
                      outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                      // Defend against cloned attroperties (jQuery gh-1709)

                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    } // xml :nth-child(...)
                    // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                    if (diff === false) {
                      // Use the same loop as above to seek `elem` from the start
                      while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                          // Cache the index of each encountered element
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                            // Defend against cloned attroperties (jQuery gh-1709)

                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                            uniqueCache[type] = [dirruns, diff];
                          }

                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  } // Incorporate the offset, then check against cycle size


                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            "PSEUDO": function PSEUDO(pseudo, argument) {
              // pseudo-class names are case-insensitive
              // http://www.w3.org/TR/selectors/#pseudo-classes
              // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
              // Remember that setFilters inherits from pseudos
              var args,
                  fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
              // arguments are needed to create the filter function
              // just as Sizzle does

              if (fn[expando]) {
                return fn(argument);
              } // But maintain support for old signatures


              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
                  var idx,
                      matched = fn(seed, argument),
                      i = matched.length;

                  while (i--) {
                    idx = indexOf(seed, matched[i]);
                    seed[idx] = !(matches[idx] = matched[i]);
                  }
                }) : function (elem) {
                  return fn(elem, 0, args);
                };
              }

              return fn;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            "not": markFunction(function (selector) {
              // Trim the selector passed to compile
              // to avoid treating leading and trailing
              // spaces as combinators
              var input = [],
                  results = [],
                  matcher = compile(selector.replace(rtrim, "$1"));
              return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
                var elem,
                    unmatched = matcher(seed, null, xml, []),
                    i = seed.length; // Match elements unmatched by `matcher`

                while (i--) {
                  if (elem = unmatched[i]) {
                    seed[i] = !(matches[i] = elem);
                  }
                }
              }) : function (elem, context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results); // Don't keep the element (issue #299)

                input[0] = null;
                return !results.pop();
              };
            }),
            "has": markFunction(function (selector) {
              return function (elem) {
                return Sizzle(selector, elem).length > 0;
              };
            }),
            "contains": markFunction(function (text) {
              text = text.replace(runescape, funescape);
              return function (elem) {
                return (elem.textContent || getText(elem)).indexOf(text) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // http://www.w3.org/TR/selectors/#lang-pseudo
            "lang": markFunction(function (lang) {
              // lang value must be a valid identifier
              if (!ridentifier.test(lang || "")) {
                Sizzle.error("unsupported lang: " + lang);
              }

              lang = lang.replace(runescape, funescape).toLowerCase();
              return function (elem) {
                var elemLang;

                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);

                return false;
              };
            }),
            // Miscellaneous
            "target": function target(elem) {
              var hash = window.location && window.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            "root": function root(elem) {
              return elem === docElem;
            },
            "focus": function focus(elem) {
              return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            // Boolean properties
            "enabled": createDisabledPseudo(false),
            "disabled": createDisabledPseudo(true),
            "checked": function checked(elem) {
              // In CSS3, :checked should return both checked and selected elements
              // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
              var nodeName = elem.nodeName.toLowerCase();
              return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
            },
            "selected": function selected(elem) {
              // Accessing this property makes selected-by-default
              // options in Safari work properly
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }

              return elem.selected === true;
            },
            // Contents
            "empty": function empty(elem) {
              // http://www.w3.org/TR/selectors/#empty-pseudo
              // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
              //   but not by others (comment: 8; processing instruction: 7; etc.)
              // nodeType < 6 works because attributes (2) do not appear as children
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }

              return true;
            },
            "parent": function parent(elem) {
              return !Expr.pseudos["empty"](elem);
            },
            // Element/input types
            "header": function header(elem) {
              return rheader.test(elem.nodeName);
            },
            "input": function input(elem) {
              return rinputs.test(elem.nodeName);
            },
            "button": function button(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === "button" || name === "button";
            },
            "text": function text(elem) {
              var attr;
              return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
              // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
              (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            // Position-in-collection
            "first": createPositionalPseudo(function () {
              return [0];
            }),
            "last": createPositionalPseudo(function (matchIndexes, length) {
              return [length - 1];
            }),
            "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            "even": createPositionalPseudo(function (matchIndexes, length) {
              var i = 0;

              for (; i < length; i += 2) {
                matchIndexes.push(i);
              }

              return matchIndexes;
            }),
            "odd": createPositionalPseudo(function (matchIndexes, length) {
              var i = 1;

              for (; i < length; i += 2) {
                matchIndexes.push(i);
              }

              return matchIndexes;
            }),
            "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
              var i = argument < 0 ? argument + length : argument > length ? length : argument;

              for (; --i >= 0;) {
                matchIndexes.push(i);
              }

              return matchIndexes;
            }),
            "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
              var i = argument < 0 ? argument + length : argument;

              for (; ++i < length;) {
                matchIndexes.push(i);
              }

              return matchIndexes;
            })
          }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

        for (i in {
          radio: true,
          checkbox: true,
          file: true,
          password: true,
          image: true
        }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }

        for (i in {
          submit: true,
          reset: true
        }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        } // Easy API for creating new setFilters


        function setFilters() {}

        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();

        tokenize = Sizzle.tokenize = function (selector, parseOnly) {
          var matched,
              match,
              tokens,
              type,
              soFar,
              groups,
              preFilters,
              cached = tokenCache[selector + " "];

          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }

          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;

          while (soFar) {
            // Comma and first run
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                // Don't consume trailing commas as valid
                soFar = soFar.slice(match[0].length) || soFar;
              }

              groups.push(tokens = []);
            }

            matched = false; // Combinators

            if (match = rcombinators.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                // Cast descendant combinators to space
                type: match[0].replace(rtrim, " ")
              });
              soFar = soFar.slice(matched.length);
            } // Filters


            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }

            if (!matched) {
              break;
            }
          } // Return the length of the invalid excess
          // if we're just parsing
          // Otherwise, throw an error or return tokens


          return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
          tokenCache(selector, groups).slice(0);
        };

        function toSelector(tokens) {
          var i = 0,
              len = tokens.length,
              selector = "";

          for (; i < len; i++) {
            selector += tokens[i].value;
          }

          return selector;
        }

        function addCombinator(matcher, combinator, base) {
          var dir = combinator.dir,
              skip = combinator.next,
              key = skip || dir,
              checkNonElements = base && key === "parentNode",
              doneName = done++;
          return combinator.first ? // Check against closest ancestor/preceding element
          function (elem, context, xml) {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
              }
            }

            return false;
          } : // Check against all ancestor/preceding elements
          function (elem, context, xml) {
            var oldCache,
                uniqueCache,
                outerCache,
                newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

            if (xml) {
              while (elem = elem[dir]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  if (matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            } else {
              while (elem = elem[dir]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                  if (skip && skip === elem.nodeName.toLowerCase()) {
                    elem = elem[dir] || elem;
                  } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                    // Assign to newCache so results back-propagate to previous elements
                    return newCache[2] = oldCache[2];
                  } else {
                    // Reuse newcache so results back-propagate to previous elements
                    uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                    if (newCache[2] = matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              }
            }

            return false;
          };
        }

        function elementMatcher(matchers) {
          return matchers.length > 1 ? function (elem, context, xml) {
            var i = matchers.length;

            while (i--) {
              if (!matchers[i](elem, context, xml)) {
                return false;
              }
            }

            return true;
          } : matchers[0];
        }

        function multipleContexts(selector, contexts, results) {
          var i = 0,
              len = contexts.length;

          for (; i < len; i++) {
            Sizzle(selector, contexts[i], results);
          }

          return results;
        }

        function condense(unmatched, map, filter, context, xml) {
          var elem,
              newUnmatched = [],
              i = 0,
              len = unmatched.length,
              mapped = map != null;

          for (; i < len; i++) {
            if (elem = unmatched[i]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);

                if (mapped) {
                  map.push(i);
                }
              }
            }
          }

          return newUnmatched;
        }

        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }

          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }

          return markFunction(function (seed, results, context, xml) {
            var temp,
                i,
                elem,
                preMap = [],
                postMap = [],
                preexisting = results.length,
                // Get initial elements from seed or context
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                // Prefilter to get matcher input, preserving a map for seed-results synchronization
            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
            postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
            [] : // ...otherwise use results directly
            results : matcherIn; // Find primary matches

            if (matcher) {
              matcher(matcherIn, matcherOut, context, xml);
            } // Apply postFilter


            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

              i = temp.length;

              while (i--) {
                if (elem = temp[i]) {
                  matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
              }
            }

            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  // Get the final matcherOut by condensing this intermediate into postFinder contexts
                  temp = [];
                  i = matcherOut.length;

                  while (i--) {
                    if (elem = matcherOut[i]) {
                      // Restore matcherIn since elem is not yet a final match
                      temp.push(matcherIn[i] = elem);
                    }
                  }

                  postFinder(null, matcherOut = [], temp, xml);
                } // Move matched elements from seed to results to keep them synchronized


                i = matcherOut.length;

                while (i--) {
                  if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              } // Add elements to results, through postFinder if defined

            } else {
              matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push.apply(results, matcherOut);
              }
            }
          });
        }

        function matcherFromTokens(tokens) {
          var checkContext,
              matcher,
              j,
              len = tokens.length,
              leadingRelative = Expr.relative[tokens[0].type],
              implicitRelative = leadingRelative || Expr.relative[" "],
              i = leadingRelative ? 1 : 0,
              // The foundational matcher ensures that elements are reachable from top-level context(s)
          matchContext = addCombinator(function (elem) {
            return elem === checkContext;
          }, implicitRelative, true),
              matchAnyContext = addCombinator(function (elem) {
            return indexOf(checkContext, elem) > -1;
          }, implicitRelative, true),
              matchers = [function (elem, context, xml) {
            var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

            checkContext = null;
            return ret;
          }];

          for (; i < len; i++) {
            if (matcher = Expr.relative[tokens[i].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

              if (matcher[expando]) {
                // Find the next relative operator (if any) for proper handling
                j = ++i;

                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }

                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                tokens.slice(0, i - 1).concat({
                  value: tokens[i - 2].type === " " ? "*" : ""
                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
              }

              matchers.push(matcher);
            }
          }

          return elementMatcher(matchers);
        }

        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0,
              byElement = elementMatchers.length > 0,
              superMatcher = function superMatcher(seed, context, xml, results, outermost) {
            var elem,
                j,
                matcher,
                matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                // We must always have either seed elements or outermost context
            elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                // Use integer dirruns iff this is the outermost matcher
            dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
                len = elems.length;

            if (outermost) {
              outermostContext = context === document || context || outermost;
            } // Add elements passing elementMatchers directly to results
            // Support: IE<9, Safari
            // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;

                if (!context && elem.ownerDocument !== document) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }

                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                  }
                }

                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              } // Track unmatched elements for set filters


              if (bySet) {
                // They will have gone through all possible matchers
                if (elem = !matcher && elem) {
                  matchedCount--;
                } // Lengthen the array for every element, matched or not


                if (seed) {
                  unmatched.push(elem);
                }
              }
            } // `i` is now the count of elements visited above, and adding it to `matchedCount`
            // makes the latter nonnegative.


            matchedCount += i; // Apply set filters to unmatched elements
            // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
            // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
            // no element matchers and no seed.
            // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
            // case, which will result in a "00" `matchedCount` that differs from `i` but is also
            // numerically zero.

            if (bySet && i !== matchedCount) {
              j = 0;

              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }

              if (seed) {
                // Reintegrate element matches to eliminate the need for sorting
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                } // Discard index placeholder values to get only actual matches


                setMatched = condense(setMatched);
              } // Add matches to results


              push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                Sizzle.uniqueSort(results);
              }
            } // Override manipulation of globals by nested matchers


            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }

            return unmatched;
          };

          return bySet ? markFunction(superMatcher) : superMatcher;
        }

        compile = Sizzle.compile = function (selector, match
        /* Internal Use Only */
        ) {
          var i,
              setMatchers = [],
              elementMatchers = [],
              cached = compilerCache[selector + " "];

          if (!cached) {
            // Generate a function of recursive functions that can be used to check each element
            if (!match) {
              match = tokenize(selector);
            }

            i = match.length;

            while (i--) {
              cached = matcherFromTokens(match[i]);

              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            } // Cache the compiled function


            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

            cached.selector = selector;
          }

          return cached;
        };
        /**
         * A low-level selection function that works with Sizzle's compiled
         *  selector functions
         * @param {String|Function} selector A selector or a pre-compiled
         *  selector function built with Sizzle.compile
         * @param {Element} context
         * @param {Array} [results]
         * @param {Array} [seed] A set of elements to match against
         */


        select = Sizzle.select = function (selector, context, results, seed) {
          var i,
              tokens,
              token,
              type,
              find,
              compiled = typeof selector === "function" && selector,
              match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
          // (the latter of which guarantees us context)

          if (match.length === 1) {
            // Reduce context if the leading compound selector is an ID
            tokens = match[0] = match[0].slice(0);

            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

              if (!context) {
                return results; // Precompiled matchers will still verify ancestry, so step up a level
              } else if (compiled) {
                context = context.parentNode;
              }

              selector = selector.slice(tokens.shift().value.length);
            } // Fetch a seed set for right-to-left matching


            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

            while (i--) {
              token = tokens[i]; // Abort if we hit a combinator

              if (Expr.relative[type = token.type]) {
                break;
              }

              if (find = Expr.find[type]) {
                // Search, expanding context for leading sibling combinators
                if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                  // If seed is empty or no tokens remain, we can return early
                  tokens.splice(i, 1);
                  selector = seed.length && toSelector(tokens);

                  if (!selector) {
                    push.apply(results, seed);
                    return results;
                  }

                  break;
                }
              }
            }
          } // Compile and execute a filtering function if one is not provided
          // Provide `match` to avoid retokenization if we modified the selector above


          (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
          return results;
        }; // One-time assignments
        // Sort stability


        support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
        // Always assume duplicates if they aren't passed to the comparison function

        support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

        setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
        // Detached nodes confoundingly follow *each other*

        support.sortDetached = assert(function (el) {
          // Should return 1, but returns 4 (following)
          return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
        }); // Support: IE<8
        // Prevent attribute/property "interpolation"
        // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

        if (!assert(function (el) {
          el.innerHTML = "<a href='#'></a>";
          return el.firstChild.getAttribute("href") === "#";
        })) {
          addHandle("type|href|height|width", function (elem, name, isXML) {
            if (!isXML) {
              return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
            }
          });
        } // Support: IE<9
        // Use defaultValue in place of getAttribute("value")


        if (!support.attributes || !assert(function (el) {
          el.innerHTML = "<input/>";
          el.firstChild.setAttribute("value", "");
          return el.firstChild.getAttribute("value") === "";
        })) {
          addHandle("value", function (elem, name, isXML) {
            if (!isXML && elem.nodeName.toLowerCase() === "input") {
              return elem.defaultValue;
            }
          });
        } // Support: IE<9
        // Use getAttributeNode to fetch booleans when getAttribute lies


        if (!assert(function (el) {
          return el.getAttribute("disabled") == null;
        })) {
          addHandle(booleans, function (elem, name, isXML) {
            var val;

            if (!isXML) {
              return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            }
          });
        }

        return Sizzle;
      }(window);

      jQuery.find = Sizzle;
      jQuery.expr = Sizzle.selectors; // Deprecated

      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
      jQuery.text = Sizzle.getText;
      jQuery.isXMLDoc = Sizzle.isXML;
      jQuery.contains = Sizzle.contains;
      jQuery.escapeSelector = Sizzle.escape;

      var dir = function dir(elem, _dir, until) {
        var matched = [],
            truncate = until !== undefined;

        while ((elem = elem[_dir]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) {
              break;
            }

            matched.push(elem);
          }
        }

        return matched;
      };

      var _siblings = function siblings(n, elem) {
        var matched = [];

        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }

        return matched;
      };

      var rneedsContext = jQuery.expr.match.needsContext;

      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }

      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery.grep(elements, function (elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        } // Single element


        if (qualifier.nodeType) {
          return jQuery.grep(elements, function (elem) {
            return elem === qualifier !== not;
          });
        } // Arraylike of elements (jQuery, arguments, Array)


        if (typeof qualifier !== "string") {
          return jQuery.grep(elements, function (elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        } // Filtered directly for both simple and complex selectors


        return jQuery.filter(qualifier, elements, not);
      }

      jQuery.filter = function (expr, elems, not) {
        var elem = elems[0];

        if (not) {
          expr = ":not(" + expr + ")";
        }

        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
        }

        return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
          return elem.nodeType === 1;
        }));
      };

      jQuery.fn.extend({
        find: function find(selector) {
          var i,
              ret,
              len = this.length,
              self = this;

          if (typeof selector !== "string") {
            return this.pushStack(jQuery(selector).filter(function () {
              for (i = 0; i < len; i++) {
                if (jQuery.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }

          ret = this.pushStack([]);

          for (i = 0; i < len; i++) {
            jQuery.find(selector, self[i], ret);
          }

          return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function filter(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function not(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function is(selector) {
          return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
          // so $("p:first").is("p:last") won't return true for a doc with two "p".
          typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
      }); // Initialize a jQuery object
      // A central reference to the root jQuery(document)

      var rootjQuery,
          // A simple way to check for HTML strings
      // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
      // Strict HTML recognition (#11290: must start with <)
      // Shortcut simple #id case for speed
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
          init = jQuery.fn.init = function (selector, context, root) {
        var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

        if (!selector) {
          return this;
        } // Method init() accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)


        root = root || rootjQuery; // Handle HTML strings

        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            // Assume that strings that start and end with <> are HTML and skip the regex check
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          } // Match html or make sure no context is specified for #id


          if (match && (match[1] || !context)) {
            // HANDLE: $(html) -> $(array)
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
              // Intentionally let the error be thrown if parseHTML is not present

              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  // Properties of context are called as methods if possible
                  if (isFunction(this[match])) {
                    this[match](context[match]); // ...and otherwise set as attributes
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }

              return this; // HANDLE: $(#id)
            } else {
              elem = document.getElementById(match[2]);

              if (elem) {
                // Inject the element directly into the jQuery object
                this[0] = elem;
                this.length = 1;
              }

              return this;
            } // HANDLE: $(expr, $(...))

          } else if (!context || context.jquery) {
            return (context || root).find(selector); // HANDLE: $(expr, context)
            // (which is just equivalent to: $(context).find(expr)
          } else {
            return this.constructor(context).find(selector);
          } // HANDLE: $(DOMElement)

        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this; // HANDLE: $(function)
          // Shortcut for document ready
        } else if (isFunction(selector)) {
          return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
          selector(jQuery);
        }

        return jQuery.makeArray(selector, this);
      }; // Give the init function the jQuery prototype for later instantiation


      init.prototype = jQuery.fn; // Initialize central reference

      rootjQuery = jQuery(document);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/,
          // Methods guaranteed to produce a unique set when starting from a unique set
      guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery.fn.extend({
        has: function has(target) {
          var targets = jQuery(target, this),
              l = targets.length;
          return this.filter(function () {
            var i = 0;

            for (; i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function closest(selectors, context) {
          var cur,
              i = 0,
              l = this.length,
              matched = [],
              targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                // Always skip document fragments
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }

          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function index(elem) {
          // No argument, return index in parent
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          } // Index in selector


          if (typeof elem === "string") {
            return indexOf.call(jQuery(elem), this[0]);
          } // Locate the position of the desired element


          return indexOf.call(this, // If it receives a jQuery object, the first element is used
          elem.jquery ? elem[0] : elem);
        },
        add: function add(selector, context) {
          return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function addBack(selector) {
          return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
      });

      function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}

        return cur;
      }

      jQuery.each({
        parent: function parent(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function parents(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function parentsUntil(elem, i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function next(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function prev(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function nextAll(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function prevAll(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function nextUntil(elem, i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function prevUntil(elem, i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function siblings(elem) {
          return _siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function children(elem) {
          return _siblings(elem.firstChild);
        },
        contents: function contents(elem) {
          if (typeof elem.contentDocument !== "undefined") {
            return elem.contentDocument;
          } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
          // Treat the template element as a regular one in browsers that
          // don't support it.


          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }

          return jQuery.merge([], elem.childNodes);
        }
      }, function (name, fn) {
        jQuery.fn[name] = function (until, selector) {
          var matched = jQuery.map(this, fn, until);

          if (name.slice(-5) !== "Until") {
            selector = until;
          }

          if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched);
          }

          if (this.length > 1) {
            // Remove duplicates
            if (!guaranteedUnique[name]) {
              jQuery.uniqueSort(matched);
            } // Reverse order for parents* and prev-derivatives


            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }

          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

      function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
          object[flag] = true;
        });
        return object;
      }
      /*
       * Create a callback list using the following parameters:
       *
       *	options: an optional list of space-separated options that will change how
       *			the callback list behaves or a more traditional option object
       *
       * By default a callback list will act like an event callback list and can be
       * "fired" multiple times.
       *
       * Possible options:
       *
       *	once:			will ensure the callback list can only be fired once (like a Deferred)
       *
       *	memory:			will keep track of previous values and will call any callback added
       *					after the list has been fired right away with the latest "memorized"
       *					values (like a Deferred)
       *
       *	unique:			will ensure a callback can only be added once (no duplicate in the list)
       *
       *	stopOnFalse:	interrupt callings when a callback returns false
       *
       */


      jQuery.Callbacks = function (options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

        var // Flag to know if list is currently firing
        firing,
            // Last fire value for non-forgettable lists
        memory,
            // Flag to know if list was already fired
        _fired,
            // Flag to prevent firing
        _locked,
            // Actual callback list
        list = [],
            // Queue of execution data for repeatable lists
        queue = [],
            // Index of currently firing callback (modified by add/remove as needed)
        firingIndex = -1,
            // Fire callbacks
        fire = function fire() {
          // Enforce single-firing
          _locked = _locked || options.once; // Execute callbacks for all pending executions,
          // respecting firingIndex overrides and runtime changes

          _fired = firing = true;

          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();

            while (++firingIndex < list.length) {
              // Run callback and check for early termination
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                // Jump to end and forget the data so .add doesn't re-fire
                firingIndex = list.length;
                memory = false;
              }
            }
          } // Forget the data if we're done with it


          if (!options.memory) {
            memory = false;
          }

          firing = false; // Clean up if we're done firing for good

          if (_locked) {
            // Keep an empty list if we have data for future add calls
            if (memory) {
              list = []; // Otherwise, this object is spent
            } else {
              list = "";
            }
          }
        },
            // Actual Callbacks object
        self = {
          // Add a callback or a collection of callbacks to the list
          add: function add() {
            if (list) {
              // If we have memory from a past run, we should fire after adding
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }

              (function add(args) {
                jQuery.each(args, function (_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    // Inspect recursively
                    add(arg);
                  }
                });
              })(arguments);

              if (memory && !firing) {
                fire();
              }
            }

            return this;
          },
          // Remove a callback from the list
          remove: function remove() {
            jQuery.each(arguments, function (_, arg) {
              var index;

              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1); // Handle firing indexes

                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function has(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function empty() {
            if (list) {
              list = [];
            }

            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function disable() {
            _locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function disabled() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function lock() {
            _locked = queue = [];

            if (!memory && !firing) {
              list = memory = "";
            }

            return this;
          },
          locked: function locked() {
            return !!_locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function fireWith(context, args) {
            if (!_locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);

              if (!firing) {
                fire();
              }
            }

            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function fire() {
            self.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function fired() {
            return !!_fired;
          }
        };

        return self;
      };

      function Identity(v) {
        return v;
      }

      function Thrower(ex) {
        throw ex;
      }

      function adoptValue(value, resolve, reject, noValue) {
        var method;

        try {
          // Check for promise aspect first to privilege synchronous behavior
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject); // Other thenables
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject); // Other non-thenables
          } else {
            // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [value].slice(noValue));
          } // For Promises/A+, convert exceptions into rejections
          // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
          // Deferred#then to conditionally suppress rejection.

        } catch (value) {
          // Support: Android 4.0 only
          // Strict mode functions invoked without .call/.apply get global-object context
          reject.apply(undefined, [value]);
        }
      }

      jQuery.extend({
        Deferred: function Deferred(func) {
          var tuples = [// action, add listener, callbacks,
          // ... .then handlers, argument index, [final state]
          ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
              _state = "pending",
              _promise = {
            state: function state() {
              return _state;
            },
            always: function always() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function _catch(fn) {
              return _promise.then(null, fn);
            },
            // Keep pipe for back-compat
            pipe: function pipe()
            /* fnDone, fnFail, fnProgress */
            {
              var fns = arguments;
              return jQuery.Deferred(function (newDefer) {
                jQuery.each(tuples, function (i, tuple) {
                  // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
                  // deferred.done(function() { bind to newDefer or newDefer.resolve })
                  // deferred.fail(function() { bind to newDefer or newDefer.reject })

                  deferred[tuple[1]](function () {
                    var returned = fn && fn.apply(this, arguments);

                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function then(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;

              function resolve(depth, deferred, handler, special) {
                return function () {
                  var that = this,
                      args = arguments,
                      mightThrow = function mightThrow() {
                    var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                    // https://promisesaplus.com/#point-59
                    // Ignore double-resolution attempts

                    if (depth < maxDepth) {
                      return;
                    }

                    returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                    // https://promisesaplus.com/#point-48

                    if (returned === deferred.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    } // Support: Promises/A+ sections 2.3.3.1, 3.5
                    // https://promisesaplus.com/#point-54
                    // https://promisesaplus.com/#point-75
                    // Retrieve `then` only once


                    then = returned && ( // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                    if (isFunction(then)) {
                      // Special processors (notify) just wait for resolution
                      if (special) {
                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                      } else {
                        // ...and disregard older resolution values
                        maxDepth++;
                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                      } // Handle all other returned values

                    } else {
                      // Only substitute handlers pass on context
                      // and multiple values (non-spec behavior)
                      if (handler !== Identity) {
                        that = undefined;
                        args = [returned];
                      } // Process the value(s)
                      // Default process is resolve


                      (special || deferred.resolveWith)(that, args);
                    }
                  },
                      // Only normal processors (resolve) catch and reject exceptions
                  process = special ? mightThrow : function () {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery.Deferred.exceptionHook) {
                        jQuery.Deferred.exceptionHook(e, process.stackTrace);
                      } // Support: Promises/A+ section 2.3.3.3.4.1
                      // https://promisesaplus.com/#point-61
                      // Ignore post-resolution exceptions


                      if (depth + 1 >= maxDepth) {
                        // Only substitute handlers pass on context
                        // and multiple values (non-spec behavior)
                        if (handler !== Thrower) {
                          that = undefined;
                          args = [e];
                        }

                        deferred.rejectWith(that, args);
                      }
                    }
                  }; // Support: Promises/A+ section 2.3.3.3.1
                  // https://promisesaplus.com/#point-57
                  // Re-resolve promises immediately to dodge false rejection from
                  // subsequent errors


                  if (depth) {
                    process();
                  } else {
                    // Call an optional hook to record the stack, in case of exception
                    // since it's otherwise lost when execution goes async
                    if (jQuery.Deferred.getStackHook) {
                      process.stackTrace = jQuery.Deferred.getStackHook();
                    }

                    window.setTimeout(process);
                  }
                };
              }

              return jQuery.Deferred(function (newDefer) {
                // progress_handlers.add( ... )
                tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

                tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

                tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function promise(obj) {
              return obj != null ? jQuery.extend(obj, _promise) : _promise;
            }
          },
              deferred = {}; // Add list-specific methods

          jQuery.each(tuples, function (i, tuple) {
            var list = tuple[2],
                stateString = tuple[5]; // promise.progress = list.add
            // promise.done = list.add
            // promise.fail = list.add

            _promise[tuple[1]] = list.add; // Handle state

            if (stateString) {
              list.add(function () {
                // state = "resolved" (i.e., fulfilled)
                // state = "rejected"
                _state = stateString;
              }, // rejected_callbacks.disable
              // fulfilled_callbacks.disable
              tuples[3 - i][2].disable, // rejected_handlers.disable
              // fulfilled_handlers.disable
              tuples[3 - i][3].disable, // progress_callbacks.lock
              tuples[0][2].lock, // progress_handlers.lock
              tuples[0][3].lock);
            } // progress_handlers.fire
            // fulfilled_handlers.fire
            // rejected_handlers.fire


            list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
            // deferred.resolve = function() { deferred.resolveWith(...) }
            // deferred.reject = function() { deferred.rejectWith(...) }

            deferred[tuple[0]] = function () {
              deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
              return this;
            }; // deferred.notifyWith = list.fireWith
            // deferred.resolveWith = list.fireWith
            // deferred.rejectWith = list.fireWith


            deferred[tuple[0] + "With"] = list.fireWith;
          }); // Make the deferred a promise

          _promise.promise(deferred); // Call given func if any


          if (func) {
            func.call(deferred, deferred);
          } // All done!


          return deferred;
        },
        // Deferred helper
        when: function when(singleValue) {
          var // count of uncompleted subordinates
          remaining = arguments.length,
              // count of unprocessed arguments
          i = remaining,
              // subordinate fulfillment data
          resolveContexts = Array(i),
              resolveValues = _slice.call(arguments),
              // the master Deferred
          master = jQuery.Deferred(),
              // subordinate callback factory
          updateFunc = function updateFunc(i) {
            return function (value) {
              resolveContexts[i] = this;
              resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

              if (! --remaining) {
                master.resolveWith(resolveContexts, resolveValues);
              }
            };
          }; // Single- and empty arguments are adopted like Promise.resolve


          if (remaining <= 1) {
            adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

            if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return master.then();
            }
          } // Multiple arguments are aggregated like Promise.all array elements


          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), master.reject);
          }

          return master.promise();
        }
      }); // These usually indicate a programmer mistake during development,
      // warn about them ASAP rather than swallowing them by default.

      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

      jQuery.Deferred.exceptionHook = function (error, stack) {
        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
          window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
      };

      jQuery.readyException = function (error) {
        window.setTimeout(function () {
          throw error;
        });
      }; // The deferred used on DOM ready


      var readyList = jQuery.Deferred();

      jQuery.fn.ready = function (fn) {
        readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        ["catch"](function (error) {
          jQuery.readyException(error);
        });
        return this;
      };

      jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function ready(wait) {
          // Abort if there are pending holds or we're already ready
          if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
          } // Remember that the DOM is ready


          jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

          if (wait !== true && --jQuery.readyWait > 0) {
            return;
          } // If there are functions bound, to execute


          readyList.resolveWith(document, [jQuery]);
        }
      });
      jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

      function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready();
      } // Catch cases where $(document).ready() is called
      // after the browser event has already occurred.
      // Support: IE <=9 - 10 only
      // Older IE sometimes signals "interactive" too soon


      if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        window.setTimeout(jQuery.ready);
      } else {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

        window.addEventListener("load", completed);
      } // Multifunctional method to get and set values of a collection
      // The value/s can optionally be executed if it's a function


      var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
            len = elems.length,
            bulk = key == null; // Sets many values

        if (toType(key) === "object") {
          chainable = true;

          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          } // Sets one value

        } else if (value !== undefined) {
          chainable = true;

          if (!isFunction(value)) {
            raw = true;
          }

          if (bulk) {
            // Bulk operations run against the entire set
            if (raw) {
              fn.call(elems, value);
              fn = null; // ...except when executing function values
            } else {
              bulk = fn;

              fn = function fn(elem, key, value) {
                return bulk.call(jQuery(elem), value);
              };
            }
          }

          if (fn) {
            for (; i < len; i++) {
              fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            }
          }
        }

        if (chainable) {
          return elems;
        } // Gets


        if (bulk) {
          return fn.call(elems);
        }

        return len ? fn(elems[0], key) : emptyGet;
      }; // Matches dashed string for camelizing


      var rmsPrefix = /^-ms-/,
          rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

      function fcamelCase(all, letter) {
        return letter.toUpperCase();
      } // Convert dashed to camelCase; used by the css and data modules
      // Support: IE <=9 - 11, Edge 12 - 15
      // Microsoft forgot to hump their vendor prefix (#9572)


      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }

      var acceptData = function acceptData(owner) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };

      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }

      Data.uid = 1;
      Data.prototype = {
        cache: function cache(owner) {
          // Check if the owner object already has a cache
          var value = owner[this.expando]; // If not, create one

          if (!value) {
            value = {}; // We can accept data for non-element nodes in modern browsers,
            // but we should not, see #8335.
            // Always return an empty object.

            if (acceptData(owner)) {
              // If it is a node unlikely to be stringify-ed or looped over
              // use plain assignment
              if (owner.nodeType) {
                owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
                // configurable must be true to allow the property to be
                // deleted when data is removed
              } else {
                Object.defineProperty(owner, this.expando, {
                  value: value,
                  configurable: true
                });
              }
            }
          }

          return value;
        },
        set: function set(owner, data, value) {
          var prop,
              cache = this.cache(owner); // Handle: [ owner, key, value ] args
          // Always use camelCase key (gh-2257)

          if (typeof data === "string") {
            cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
          } else {
            // Copy the properties one-by-one to the cache object
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }

          return cache;
        },
        get: function get(owner, key) {
          return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
          owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function access(owner, key, value) {
          // In cases where either:
          //
          //   1. No key was specified
          //   2. A string key was specified, but no value provided
          //
          // Take the "read" path and allow the get method to determine
          // which value to return, respectively either:
          //
          //   1. The entire cache object
          //   2. The data stored at the key
          //
          if (key === undefined || key && typeof key === "string" && value === undefined) {
            return this.get(owner, key);
          } // When the key is not a string, or both a key and value
          // are specified, set or extend (existing objects) with either:
          //
          //   1. An object of properties
          //   2. A key and value
          //


          this.set(owner, key, value); // Since the "set" path can have two possible entry points
          // return the expected data based on which path was taken[*]

          return value !== undefined ? value : key;
        },
        remove: function remove(owner, key) {
          var i,
              cache = owner[this.expando];

          if (cache === undefined) {
            return;
          }

          if (key !== undefined) {
            // Support array or space separated string of keys
            if (Array.isArray(key)) {
              // If key is an array of keys...
              // We always set camelCase keys, so remove that.
              key = key.map(camelCase);
            } else {
              key = camelCase(key); // If a key with the spaces exists, use it.
              // Otherwise, create an array by matching non-whitespace

              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }

            i = key.length;

            while (i--) {
              delete cache[key[i]];
            }
          } // Remove the expando if there's no more data


          if (key === undefined || jQuery.isEmptyObject(cache)) {
            // Support: Chrome <=35 - 45
            // Webkit & Blink performance suffers when deleting properties
            // from DOM nodes, so set to undefined instead
            // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
            if (owner.nodeType) {
              owner[this.expando] = undefined;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function hasData(owner) {
          var cache = owner[this.expando];
          return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data(); //	Implementation Summary
      //
      //	1. Enforce API surface and semantic compatibility with 1.9.x branch
      //	2. Improve the module's maintainability by reducing the storage
      //		paths to a single mechanism.
      //	3. Use the same single mechanism to support "private" and "user" data.
      //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
      //	5. Avoid exposing implementation details on user objects (eg. expando properties)
      //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          rmultiDash = /[A-Z]/g;

      function getData(data) {
        if (data === "true") {
          return true;
        }

        if (data === "false") {
          return false;
        }

        if (data === "null") {
          return null;
        } // Only convert to a number if it doesn't change the string


        if (data === +data + "") {
          return +data;
        }

        if (rbrace.test(data)) {
          return JSON.parse(data);
        }

        return data;
      }

      function dataAttr(elem, key, data) {
        var name; // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute

        if (data === undefined && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);

          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {} // Make sure we set the data so it isn't changed later


            dataUser.set(elem, key, data);
          } else {
            data = undefined;
          }
        }

        return data;
      }

      jQuery.extend({
        hasData: function hasData(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function data(elem, name, _data) {
          return dataUser.access(elem, name, _data);
        },
        removeData: function removeData(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function _data(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function _removeData(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery.fn.extend({
        data: function data(key, value) {
          var i,
              name,
              data,
              elem = this[0],
              attrs = elem && elem.attributes; // Gets all values

          if (key === undefined) {
            if (this.length) {
              data = dataUser.get(elem);

              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;

                while (i--) {
                  // Support: IE 11 only
                  // The attrs elements can be null (#14894)
                  if (attrs[i]) {
                    name = attrs[i].name;

                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }

                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }

            return data;
          } // Sets multiple values


          if (_typeof(key) === "object") {
            return this.each(function () {
              dataUser.set(this, key);
            });
          }

          return access(this, function (value) {
            var data; // The calling jQuery object (element matches) is not empty
            // (and therefore has an element appears at this[ 0 ]) and the
            // `value` parameter was not undefined. An empty jQuery object
            // will result in `undefined` for elem = this[ 0 ] which will
            // throw an exception if an attempt to read a data cache is made.

            if (elem && value === undefined) {
              // Attempt to get data from the cache
              // The key will always be camelCased in Data
              data = dataUser.get(elem, key);

              if (data !== undefined) {
                return data;
              } // Attempt to "discover" the data in
              // HTML5 custom data-* attrs


              data = dataAttr(elem, key);

              if (data !== undefined) {
                return data;
              } // We tried really hard, but the data doesn't exist.


              return;
            } // Set the data...


            this.each(function () {
              // We always store the camelCased key
              dataUser.set(this, key, value);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function removeData(key) {
          return this.each(function () {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery.extend({
        queue: function queue(elem, type, data) {
          var queue;

          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
              } else {
                queue.push(data);
              }
            }

            return queue || [];
          }
        },
        dequeue: function dequeue(elem, type) {
          type = type || "fx";

          var queue = jQuery.queue(elem, type),
              startLength = queue.length,
              fn = queue.shift(),
              hooks = jQuery._queueHooks(elem, type),
              next = function next() {
            jQuery.dequeue(elem, type);
          }; // If the fx queue is dequeued, always remove the progress sentinel


          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }

          if (fn) {
            // Add a progress sentinel to prevent the fx queue from being
            // automatically dequeued
            if (type === "fx") {
              queue.unshift("inprogress");
            } // Clear up the last queue stop function


            delete hooks.stop;
            fn.call(elem, next, hooks);
          }

          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function _queueHooks(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery.Callbacks("once memory").add(function () {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery.fn.extend({
        queue: function queue(type, data) {
          var setter = 2;

          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }

          if (arguments.length < setter) {
            return jQuery.queue(this[0], type);
          }

          return data === undefined ? this : this.each(function () {
            var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

            jQuery._queueHooks(this, type);

            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery.dequeue(this, type);
            }
          });
        },
        dequeue: function dequeue(type) {
          return this.each(function () {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue: function clearQueue(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function promise(type, obj) {
          var tmp,
              count = 1,
              defer = jQuery.Deferred(),
              elements = this,
              i = this.length,
              resolve = function resolve() {
            if (! --count) {
              defer.resolveWith(elements, [elements]);
            }
          };

          if (typeof type !== "string") {
            obj = type;
            type = undefined;
          }

          type = type || "fx";

          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");

            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }

          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document.documentElement;

      var isAttached = function isAttached(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
      },
          composed = {
        composed: true
      }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
      // Check attachment across shadow DOM boundaries when possible (gh-3504)
      // Support: iOS 10.0-10.2 only
      // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
      // leading to errors. We need to check for `getRootNode`.


      if (documentElement.getRootNode) {
        isAttached = function isAttached(elem) {
          return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }

      var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem; // Inline style trumps all

        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
      };

      var swap = function swap(elem, options, callback, args) {
        var ret,
            name,
            old = {}; // Remember the old values, and insert the new ones

        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }

        ret = callback.apply(elem, args || []); // Revert the old values

        for (name in options) {
          elem.style[name] = old[name];
        }

        return ret;
      };

      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted,
            scale,
            maxIterations = 20,
            currentValue = tween ? function () {
          return tween.cur();
        } : function () {
          return jQuery.css(elem, prop, "");
        },
            initial = currentValue(),
            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
            // Starting value computation is required for potential unit mismatches
        initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

        if (initialInUnit && initialInUnit[3] !== unit) {
          // Support: Firefox <=54
          // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
          initial = initial / 2; // Trust units reported by jQuery.css

          unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

          initialInUnit = +initial || 1;

          while (maxIterations--) {
            // Evaluate and update our best guess (doubling guesses that zero out).
            // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
            jQuery.style(elem, prop, initialInUnit + unit);

            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }

            initialInUnit = initialInUnit / scale;
          }

          initialInUnit = initialInUnit * 2;
          jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

          valueParts = valueParts || [];
        }

        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }

        return adjusted;
      }

      var defaultDisplayMap = {};

      function getDefaultDisplay(elem) {
        var temp,
            doc = elem.ownerDocument,
            nodeName = elem.nodeName,
            display = defaultDisplayMap[nodeName];

        if (display) {
          return display;
        }

        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);

        if (display === "none") {
          display = "block";
        }

        defaultDisplayMap[nodeName] = display;
        return display;
      }

      function showHide(elements, show) {
        var display,
            elem,
            values = [],
            index = 0,
            length = elements.length; // Determine new display value for elements that need to change

        for (; index < length; index++) {
          elem = elements[index];

          if (!elem.style) {
            continue;
          }

          display = elem.style.display;

          if (show) {
            // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
            // check is required in this first loop unless we have a nonempty display value (either
            // inline or about-to-be-restored)
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;

              if (!values[index]) {
                elem.style.display = "";
              }
            }

            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none"; // Remember what we're overwriting

              dataPriv.set(elem, "display", display);
            }
          }
        } // Set the display of the elements in a second loop to avoid constant reflow


        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }

        return elements;
      }

      jQuery.fn.extend({
        show: function show() {
          return showHide(this, true);
        },
        hide: function hide() {
          return showHide(this);
        },
        toggle: function toggle(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }

          return this.each(function () {
            if (isHiddenWithinTree(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)

      var wrapMap = {
        // Support: IE <=9 only
        option: [1, "<select multiple='multiple'>", "</select>"],
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      }; // Support: IE <=9 only

      wrapMap.optgroup = wrapMap.option;
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;

      function getAll(context, tag) {
        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
        var ret;

        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }

        if (tag === undefined || tag && nodeName(context, tag)) {
          return jQuery.merge([context], ret);
        }

        return ret;
      } // Mark scripts as having already been evaluated


      function setGlobalEval(elems, refElements) {
        var i = 0,
            l = elems.length;

        for (; i < l; i++) {
          dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
      }

      var rhtml = /<|&#?\w+;/;

      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem,
            tmp,
            tag,
            wrap,
            attached,
            j,
            fragment = context.createDocumentFragment(),
            nodes = [],
            i = 0,
            l = elems.length;

        for (; i < l; i++) {
          elem = elems[i];

          if (elem || elem === 0) {
            // Add nodes directly
            if (toType(elem) === "object") {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

              j = wrap[0];

              while (j--) {
                tmp = tmp.lastChild;
              } // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit


              jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

              tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

              tmp.textContent = "";
            }
          }
        } // Remove wrapper from fragment


        fragment.textContent = "";
        i = 0;

        while (elem = nodes[i++]) {
          // Skip elements already in the context collection (trac-4087)
          if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }

            continue;
          }

          attached = isAttached(elem); // Append to fragment

          tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

          if (attached) {
            setGlobalEval(tmp);
          } // Capture executables


          if (scripts) {
            j = 0;

            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }

        return fragment;
      }

      (function () {
        var fragment = document.createDocumentFragment(),
            div = fragment.appendChild(document.createElement("div")),
            input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)

        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input); // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments

        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned

        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
      })();

      var rkeyEvent = /^key/,
          rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

      function returnTrue() {
        return true;
      }

      function returnFalse() {
        return false;
      } // Support: IE <=9 - 11+
      // focus() and blur() are asynchronous, except when they are no-op.
      // So expect focus to be synchronous when the element is already active,
      // and blur to be synchronous when the element is not already active.
      // (focus and blur are always synchronous in other supported browsers,
      // this just defines when we can count on it).


      function expectSync(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
      } // Support: IE <=9 only
      // Accessing document.activeElement can throw unexpectedly
      // https://bugs.jquery.com/ticket/13393


      function safeActiveElement() {
        try {
          return document.activeElement;
        } catch (err) {}
      }

      function _on(elem, types, selector, data, fn, one) {
        var origFn, type; // Types can be a map of types/handlers

        if (_typeof(types) === "object") {
          // ( types-Object, selector, data )
          if (typeof selector !== "string") {
            // ( types-Object, data )
            data = data || selector;
            selector = undefined;
          }

          for (type in types) {
            _on(elem, type, selector, data, types[type], one);
          }

          return elem;
        }

        if (data == null && fn == null) {
          // ( types, fn )
          fn = selector;
          data = selector = undefined;
        } else if (fn == null) {
          if (typeof selector === "string") {
            // ( types, selector, fn )
            fn = data;
            data = undefined;
          } else {
            // ( types, data, fn )
            fn = data;
            data = selector;
            selector = undefined;
          }
        }

        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }

        if (one === 1) {
          origFn = fn;

          fn = function fn(event) {
            // Can use an empty set, since event contains the info
            jQuery().off(event);
            return origFn.apply(this, arguments);
          }; // Use same guid so caller can remove using origFn


          fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }

        return elem.each(function () {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }
      /*
       * Helper functions for managing events -- not part of the public interface.
       * Props to Dean Edwards' addEvent library for many of the ideas.
       */


      jQuery.event = {
        global: {},
        add: function add(elem, types, handler, data, selector) {
          var handleObjIn,
              eventHandle,
              tmp,
              events,
              t,
              handleObj,
              special,
              handlers,
              type,
              namespaces,
              origType,
              elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)

          if (!elemData) {
            return;
          } // Caller can pass in an object of custom data in lieu of the handler


          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          } // Ensure that invalid selectors throw exceptions at attach time
          // Evaluate against documentElement in case elem is a non-element node (e.g., document)


          if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
          } // Make sure that the handler has a unique ID, used to find/remove it later


          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          } // Init the element's event structure and main handler, if this is the first


          if (!(events = elemData.events)) {
            events = elemData.events = {};
          }

          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function (e) {
              // Discard the second event of a jQuery.event.trigger() and
              // when an event is called after a page has unloaded
              return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
          } // Handle multiple events separated by a space


          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;

          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

            if (!type) {
              continue;
            } // If event changes its type, use the special event handlers for the changed type


            special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

            type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

            special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

            handleObj = jQuery.extend({
              type: type,
              origType: origType,
              data: data,
              handler: handler,
              guid: handler.guid,
              selector: selector,
              needsContext: selector && jQuery.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn); // Init the event handler queue if we're the first

            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }

            if (special.add) {
              special.add.call(elem, handleObj);

              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            } // Add to the element's handler list, delegates in front


            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            } // Keep track of which events have ever been used, for event optimization


            jQuery.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function remove(elem, types, handler, selector, mappedTypes) {
          var j,
              origCount,
              tmp,
              events,
              t,
              handleObj,
              special,
              handlers,
              type,
              namespaces,
              origType,
              elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

          if (!elemData || !(events = elemData.events)) {
            return;
          } // Once for each type.namespace in types; type may be omitted


          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;

          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

            if (!type) {
              for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true);
              }

              continue;
            }

            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

            origCount = j = handlers.length;

            while (j--) {
              handleObj = handlers[j];

              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);

                if (handleObj.selector) {
                  handlers.delegateCount--;
                }

                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            } // Remove generic event handler if we removed something and no more handlers exist
            // (avoids potential for endless recursion during removal of special event handlers)


            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }

              delete events[type];
            }
          } // Remove data and the expando if it's no longer used


          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function dispatch(nativeEvent) {
          // Make a writable jQuery.Event from the native event object
          var event = jQuery.event.fix(nativeEvent);
          var i,
              j,
              ret,
              matched,
              handleObj,
              handlerQueue,
              args = new Array(arguments.length),
              handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
              special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

          args[0] = event;

          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }

          event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          } // Determine handlers


          handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

          i = 0;

          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;

            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              // If the event is namespaced, then each handler is only invoked if it is
              // specially universal or its namespaces are a superset of the event's.
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

                if (ret !== undefined) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          } // Call the postDispatch hook for the mapped type


          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }

          return event.result;
        },
        handlers: function handlers(event, _handlers) {
          var i,
              handleObj,
              sel,
              matchedHandlers,
              matchedSelectors,
              handlerQueue = [],
              delegateCount = _handlers.delegateCount,
              cur = event.target; // Find delegate handlers

          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              // Don't check non-elements (#13208)
              // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};

                for (i = 0; i < delegateCount; i++) {
                  handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

                  sel = handleObj.selector + " ";

                  if (matchedSelectors[sel] === undefined) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                  }

                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }

                if (matchedHandlers.length) {
                  handlerQueue.push({
                    elem: cur,
                    handlers: matchedHandlers
                  });
                }
              }
            }
          } // Add the remaining (directly-bound) handlers


          cur = this;

          if (delegateCount < _handlers.length) {
            handlerQueue.push({
              elem: cur,
              handlers: _handlers.slice(delegateCount)
            });
          }

          return handlerQueue;
        },
        addProp: function addProp(name, hook) {
          Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function () {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function () {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function set(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: value
              });
            }
          });
        },
        fix: function fix(originalEvent) {
          return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function setup(data) {
              // For mutual compressibility with _default, replace `this` access with a local var.
              // `|| data` is dead code meant only to preserve the variable through minification.
              var el = this || data; // Claim the first handler

              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                // dataPriv.set( el, "click", ... )
                leverageNative(el, "click", returnTrue);
              } // Return false to allow normal processing in the caller


              return false;
            },
            trigger: function trigger(data) {
              // For mutual compressibility with _default, replace `this` access with a local var.
              // `|| data` is dead code meant only to preserve the variable through minification.
              var el = this || data; // Force setup before triggering a click

              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              } // Return non-false to allow normal event-path propagation


              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function _default(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function postDispatch(event) {
              // Support: Firefox 20+
              // Firefox doesn't alert if the returnValue field is not set.
              if (event.result !== undefined && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      }; // Ensure the presence of an event listener that handles manually-triggered
      // synthetic events by interrupting progress until reinvoked in response to
      // *native* events that it fires directly, ensuring that state changes have
      // already occurred before other listeners are invoked.

      function leverageNative(el, type, expectSync) {
        // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
        if (!expectSync) {
          if (dataPriv.get(el, type) === undefined) {
            jQuery.event.add(el, type, returnTrue);
          }

          return;
        } // Register the controller as a special universal handler for all event namespaces


        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
          namespace: false,
          handler: function handler(event) {
            var notAsync,
                result,
                saved = dataPriv.get(this, type);

            if (event.isTrigger & 1 && this[type]) {
              // Interrupt processing of the outer synthetic .trigger()ed event
              // Saved data should be false in such cases, but might be a leftover capture object
              // from an async native handler (gh-4350)
              if (!saved.length) {
                // Store arguments for use when handling the inner native event
                // There will always be at least one argument (an event object), so this array
                // will not be confused with a leftover capture object.
                saved = _slice.call(arguments);
                dataPriv.set(this, type, saved); // Trigger the native event and capture its result
                // Support: IE <=9 - 11+
                // focus() and blur() are asynchronous

                notAsync = expectSync(this, type);
                this[type]();
                result = dataPriv.get(this, type);

                if (saved !== result || notAsync) {
                  dataPriv.set(this, type, false);
                } else {
                  result = {};
                }

                if (saved !== result) {
                  // Cancel the outer synthetic event
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result.value;
                } // If this is an inner synthetic event for an event with a bubbling surrogate
                // (focus or blur), assume that the surrogate already propagated from triggering the
                // native event and prevent that from happening again here.
                // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                // less bad than duplication.

              } else if ((jQuery.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              } // If this is a native event triggered above, everything is now in order
              // Fire an inner synthetic event with the original arguments

            } else if (saved.length) {
              // ...and capture the result
              dataPriv.set(this, type, {
                value: jQuery.event.trigger( // Support: IE <=9 - 11+
                // Extend with the prototype to reset the above stopImmediatePropagation()
                jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
              }); // Abort handling of the native event

              event.stopImmediatePropagation();
            }
          }
        });
      }

      jQuery.removeEvent = function (elem, type, handle) {
        // This "if" is needed for plain objects
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };

      jQuery.Event = function (src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props);
        } // Event object


        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type; // Events bubbling up the document may have been marked as prevented
          // by a handler lower down the tree; reflect the correct value.

          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse; // Create target properties
          // Support: Safari <=6 - 7 only
          // Target should not be a text node (#504, #13143)

          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget; // Event type
        } else {
          this.type = src;
        } // Put explicitly provided properties onto the event object


        if (props) {
          jQuery.extend(this, props);
        } // Create a timestamp if incoming event doesn't have one


        this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

        this[jQuery.expando] = true;
      }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
      // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


      jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function preventDefault() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;

          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function stopPropagation() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;

          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;

          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }

          this.stopPropagation();
        }
      }; // Includes all common event props including KeyEvent and MouseEvent specific props

      jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function which(event) {
          var button = event.button; // Add which for key events

          if (event.which == null && rkeyEvent.test(event.type)) {
            return event.charCode != null ? event.charCode : event.keyCode;
          } // Add which for click: 1 === left; 2 === middle; 3 === right


          if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
            if (button & 1) {
              return 1;
            }

            if (button & 2) {
              return 3;
            }

            if (button & 4) {
              return 2;
            }

            return 0;
          }

          return event.which;
        }
      }, jQuery.event.addProp);
      jQuery.each({
        focus: "focusin",
        blur: "focusout"
      }, function (type, delegateType) {
        jQuery.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function setup() {
            // Claim the first handler
            // dataPriv.set( this, "focus", ... )
            // dataPriv.set( this, "blur", ... )
            leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

            return false;
          },
          trigger: function trigger() {
            // Force setup before trigger
            leverageNative(this, type); // Return non-false to allow normal event-path propagation

            return true;
          },
          delegateType: delegateType
        };
      }); // Create mouseenter/leave events using mouseover/out and event-time checks
      // so that event delegation works in jQuery.
      // Do the same for pointerenter/pointerleave and pointerover/pointerout
      //
      // Support: Safari 7 only
      // Safari sends mouseenter too often; see:
      // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
      // for the description of the bug (it existed in older Chrome versions as well).

      jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function handle(event) {
            var ret,
                target = this,
                related = event.relatedTarget,
                handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
            // NB: No relatedTarget if the mouse left/entered the browser window

            if (!related || related !== target && !jQuery.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }

            return ret;
          }
        };
      });
      jQuery.fn.extend({
        on: function on(types, selector, data, fn) {
          return _on(this, types, selector, data, fn);
        },
        one: function one(types, selector, data, fn) {
          return _on(this, types, selector, data, fn, 1);
        },
        off: function off(types, selector, fn) {
          var handleObj, type;

          if (types && types.preventDefault && types.handleObj) {
            // ( event )  dispatched jQuery.Event
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
            return this;
          }

          if (_typeof(types) === "object") {
            // ( types-object [, selector] )
            for (type in types) {
              this.off(type, selector, types[type]);
            }

            return this;
          }

          if (selector === false || typeof selector === "function") {
            // ( types [, fn] )
            fn = selector;
            selector = undefined;
          }

          if (fn === false) {
            fn = returnFalse;
          }

          return this.each(function () {
            jQuery.event.remove(this, types, fn, selector);
          });
        }
      });
      var
      /* eslint-disable max-len */
      // See https://github.com/eslint/eslint/issues/3229
      rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

      /* eslint-enable */
      // Support: IE <=10 - 11, Edge 12 - 13 only
      // In IE/Edge using regex groups here causes severe slowdowns.
      // See https://connect.microsoft.com/IE/feedback/details/1736512/
      rnoInnerhtml = /<script|<style|<link/i,
          // checked="checked" or checked
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
          rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery(elem).children("tbody")[0] || elem;
        }

        return elem;
      } // Replace/restore the type attribute of script elements for safe DOM manipulation


      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }

      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }

        return elem;
      }

      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

        if (dest.nodeType !== 1) {
          return;
        } // 1. Copy private data: events, handlers, etc.


        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.access(src);
          pdataCur = dataPriv.set(dest, pdataOld);
          events = pdataOld.events;

          if (events) {
            delete pdataCur.handle;
            pdataCur.events = {};

            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery.event.add(dest, type, events[type][i]);
              }
            }
          }
        } // 2. Copy user data


        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      } // Fix IE bugs, see support tests


      function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

        if (nodeName === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
        } else if (nodeName === "input" || nodeName === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }

      function domManip(collection, args, callback, ignored) {
        // Flatten any nested arrays
        args = concat.apply([], args);
        var fragment,
            first,
            scripts,
            hasScripts,
            node,
            doc,
            i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[0],
            valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function (index) {
            var self = collection.eq(index);

            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }

            domManip(self, args, callback, ignored);
          });
        }

        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;

          if (fragment.childNodes.length === 1) {
            fragment = first;
          } // Require either new content or an interest in ignored elements to invoke the callback


          if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length; // Use the original fragment for the last item
            // instead of the first because it can end up
            // being emptied incorrectly in certain situations (#8070).

            for (; i < l; i++) {
              node = fragment;

              if (i !== iNoClone) {
                node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

                if (hasScripts) {
                  // Support: Android <=4.0 only, PhantomJS 1 only
                  // push.apply(_, arraylike) throws on ancient WebKit
                  jQuery.merge(scripts, getAll(node, "script"));
                }
              }

              callback.call(collection[i], node, i);
            }

            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

              jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];

                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    // Optional AJAX dependency, but won't run scripts if not present
                    if (jQuery._evalUrl && !node.noModule) {
                      jQuery._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      });
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }

        return collection;
      }

      function _remove(elem, selector, keepData) {
        var node,
            nodes = selector ? jQuery.filter(selector, elem) : elem,
            i = 0;

        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
          }

          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }

            node.parentNode.removeChild(node);
          }
        }

        return elem;
      }

      jQuery.extend({
        htmlPrefilter: function htmlPrefilter(html) {
          return html.replace(rxhtmlTag, "<$1></$2>");
        },
        clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
          var i,
              l,
              srcElements,
              destElements,
              clone = elem.cloneNode(true),
              inPage = isAttached(elem); // Fix IE cloning issues

          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
            // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
            destElements = getAll(clone);
            srcElements = getAll(elem);

            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          } // Copy the events from the original to the clone


          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);

              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          } // Preserve script evaluation history


          destElements = getAll(clone, "script");

          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          } // Return the cloned set


          return clone;
        },
        cleanData: function cleanData(elems) {
          var data,
              elem,
              type,
              special = jQuery.event.special,
              i = 0;

          for (; (elem = elems[i]) !== undefined; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                } // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove


                elem[dataPriv.expando] = undefined;
              }

              if (elem[dataUser.expando]) {
                // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataUser.expando] = undefined;
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        detach: function detach(selector) {
          return _remove(this, selector, true);
        },
        remove: function remove(selector) {
          return _remove(this, selector);
        },
        text: function text(value) {
          return access(this, function (value) {
            return value === undefined ? jQuery.text(this) : this.empty().each(function () {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value;
              }
            });
          }, null, value, arguments.length);
        },
        append: function append() {
          return domManip(this, arguments, function (elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function prepend() {
          return domManip(this, arguments, function (elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function before() {
          return domManip(this, arguments, function (elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function after() {
          return domManip(this, arguments, function (elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function empty() {
          var elem,
              i = 0;

          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              // Prevent memory leaks
              jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

              elem.textContent = "";
            }
          }

          return this;
        },
        clone: function clone(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function () {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function html(value) {
          return access(this, function (value) {
            var elem = this[0] || {},
                i = 0,
                l = this.length;

            if (value === undefined && elem.nodeType === 1) {
              return elem.innerHTML;
            } // See if we can take a shortcut and just use innerHTML


            if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
              value = jQuery.htmlPrefilter(value);

              try {
                for (; i < l; i++) {
                  elem = this[i] || {}; // Remove element nodes and prevent memory leaks

                  if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.innerHTML = value;
                  }
                }

                elem = 0; // If using innerHTML throws an exception, use the fallback method
              } catch (e) {}
            }

            if (elem) {
              this.empty().append(value);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function replaceWith() {
          var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

          return domManip(this, arguments, function (elem) {
            var parent = this.parentNode;

            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));

              if (parent) {
                parent.replaceChild(elem, this);
              }
            } // Force callback invocation

          }, ignored);
        }
      });
      jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (name, original) {
        jQuery.fn[name] = function (selector) {
          var elems,
              ret = [],
              insert = jQuery(selector),
              last = insert.length - 1,
              i = 0;

          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
            // .get() because push.apply(_, arraylike) throws on ancient WebKit

            push.apply(ret, elems.get());
          }

          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

      var getStyles = function getStyles(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;

        if (!view || !view.opener) {
          view = window;
        }

        return view.getComputedStyle(elem);
      };

      var rboxStyle = new RegExp(cssExpand.join("|"), "i");

      (function () {
        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
          // This is a singleton, we need to execute it only once
          if (!div) {
            return;
          }

          container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
          // Some styles come back with percentage values, even though they shouldn't

          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
          // Detect misreporting of content dimensions for box-sizing:border-box elements

          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
          // Detect overflow:scroll screwiness (gh-3699)
          // Support: Chrome <=64
          // Don't get tricked when zoom affects offsetWidth (gh-4029)

          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
          // it will also be a sign that checks already performed

          div = null;
        }

        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }

        var pixelPositionVal,
            boxSizingReliableVal,
            scrollboxSizeVal,
            pixelBoxStylesVal,
            reliableMarginLeftVal,
            container = document.createElement("div"),
            div = document.createElement("div"); // Finish early in limited (non-browser) environments

        if (!div.style) {
          return;
        } // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (#8908)


        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
          boxSizingReliable: function boxSizingReliable() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function pixelBoxStyles() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function pixelPosition() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function reliableMarginLeft() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function scrollboxSize() {
            computeStyleTests();
            return scrollboxSizeVal;
          }
        });
      })();

      function curCSS(elem, name, computed) {
        var width,
            minWidth,
            maxWidth,
            ret,
            // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;
        computed = computed || getStyles(elem); // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, #12537)
        //   .css('--customProperty) (#3144)

        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];

          if (ret === "" && !isAttached(elem)) {
            ret = jQuery.style(elem, name);
          } // A tribute to the "awesome hack by Dean Edwards"
          // Android Browser returns percentage for some values,
          // but width seems to be reliably pixels.
          // This is against the CSSOM draft spec:
          // https://drafts.csswg.org/cssom/#resolved-values


          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            // Remember the original values
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth; // Put in the new values to get a computed value out

            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width; // Revert the changed values

            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }

        return ret !== undefined ? // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" : ret;
      }

      function addGetHookIf(conditionFn, hookFn) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
          get: function get() {
            if (conditionFn()) {
              // Hook not needed (or it's not possible to use it due
              // to missing dependency), remove it.
              delete this.get;
              return;
            } // Hook needed; redefine it so that the support test is not executed again.


            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }

      var cssPrefixes = ["Webkit", "Moz", "ms"],
          emptyStyle = document.createElement("div").style,
          vendorProps = {}; // Return a vendor-prefixed property or undefined

      function vendorPropName(name) {
        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1),
            i = cssPrefixes.length;

        while (i--) {
          name = cssPrefixes[i] + capName;

          if (name in emptyStyle) {
            return name;
          }
        }
      } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


      function finalPropName(name) {
        var _final = jQuery.cssProps[name] || vendorProps[name];

        if (_final) {
          return _final;
        }

        if (name in emptyStyle) {
          return name;
        }

        return vendorProps[name] = vendorPropName(name) || name;
      }

      var // Swappable if display is none or starts with table
      // except "table", "table-cell", or "table-caption"
      // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
      rdisplayswap = /^(none|table(?!-c[ea]).+)/,
          rcustomProp = /^--/,
          cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
          cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };

      function setPositiveNumber(elem, value, subtract) {
        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
      }

      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0,
            extra = 0,
            delta = 0; // Adjustment may not be necessary

        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }

        for (; i < 4; i += 2) {
          // Both box models exclude margin
          if (box === "margin") {
            delta += jQuery.css(elem, box + cssExpand[i], true, styles);
          } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


          if (!isBorderBox) {
            // Add padding
            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

            if (box !== "padding") {
              delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
            } else {
              extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"

          } else {
            // For "content", subtract padding
            if (box === "content") {
              delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            } // For "content" or "padding", subtract border


            if (box !== "margin") {
              delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        } // Account for positive content-box scroll gutter when requested by providing computedVal


        if (!isBorderBox && computedVal >= 0) {
          // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
          // Assuming integer scroll gutter, subtract the rest and round down
          delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }

        return delta;
      }

      function getWidthOrHeight(elem, dimension, extra) {
        // Start with computed style
        var styles = getStyles(elem),
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
        // Fake content-box until we know it's needed to know the true value.
        boxSizingNeeded = !support.boxSizingReliable() || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            valueIsBorderBox = isBorderBox,
            val = curCSS(elem, dimension, styles),
            offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.

        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }

          val = "auto";
        } // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        // Support: IE 9-11 only
        // Also use offsetWidth/offsetHeight for when box sizing is unreliable
        // We use getClientRects() to check for hidden/disconnected.
        // In those cases, the computed value can be trusted to be border-box


        if ((!support.boxSizingReliable() && isBorderBox || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
          isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
          // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
          // retrieved value as a content box dimension.

          valueIsBorderBox = offsetProp in elem;

          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        } // Normalize "" and auto


        val = parseFloat(val) || 0; // Adjust for the element's box model

        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val) + "px";
      }

      jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function get(elem, computed) {
              if (computed) {
                // We should always get a number back from opacity
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          "animationIterationCount": true,
          "columnCount": true,
          "fillOpacity": true,
          "flexGrow": true,
          "flexShrink": true,
          "fontWeight": true,
          "gridArea": true,
          "gridColumn": true,
          "gridColumnEnd": true,
          "gridColumnStart": true,
          "gridRow": true,
          "gridRowEnd": true,
          "gridRowStart": true,
          "lineHeight": true,
          "opacity": true,
          "order": true,
          "orphans": true,
          "widows": true,
          "zIndex": true,
          "zoom": true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function style(elem, name, value, extra) {
          // Don't set styles on text and comment nodes
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          } // Make sure that we're working with the right name


          var ret,
              type,
              hooks,
              origName = camelCase(name),
              isCustomProp = rcustomProp.test(name),
              style = elem.style; // Make sure that we're working with the right name. We don't
          // want to query the value if it is a CSS custom property
          // since they are user-defined.

          if (!isCustomProp) {
            name = finalPropName(origName);
          } // Gets hook for the prefixed version, then unprefixed version


          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

          if (value !== undefined) {
            type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret); // Fixes bug #9237

              type = "number";
            } // Make sure that null and NaN values aren't set (#7116)


            if (value == null || value !== value) {
              return;
            } // If a number was passed in, add the unit (except for certain CSS properties)
            // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
            // "px" to a few hardcoded values.


            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            } // background-* props affect original clone's values


            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            } // If a hook was provided, use that value, otherwise just set the specified value


            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            // If a hook was provided get the non-computed value from there
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
              return ret;
            } // Otherwise just get the value from the style object


            return style[name];
          }
        },
        css: function css(elem, name, extra, styles) {
          var val,
              num,
              hooks,
              origName = camelCase(name),
              isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
          // want to modify the value if it is a CSS custom property
          // since they are user-defined.

          if (!isCustomProp) {
            name = finalPropName(origName);
          } // Try prefixed name followed by the unprefixed name


          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          } // Otherwise, if a way to get the computed value exists, use that


          if (val === undefined) {
            val = curCSS(elem, name, styles);
          } // Convert "normal" to computed value


          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          } // Make numeric if forced or a qualifier was provided and val looks numeric


          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }

          return val;
        }
      });
      jQuery.each(["height", "width"], function (i, dimension) {
        jQuery.cssHooks[dimension] = {
          get: function get(elem, computed, extra) {
            if (computed) {
              // Certain elements can have dimension info if we invisibly show them
              // but it must have a current display style that would benefit
              return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function set(elem, value, extra) {
            var matches,
                styles = getStyles(elem),
                // Only read styles.position if the test has a chance to fail
            // to avoid forcing a reflow.
            scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
                // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
            boxSizingNeeded = scrollboxSizeBuggy || extra,
                isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
            // faking a content-box to get border and padding (gh-3699)

            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
            } // Convert to pixels if value adjustment is needed


            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery.css(elem, dimension);
            }

            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
        if (computed) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
          }, function () {
            return elem.getBoundingClientRect().left;
          })) + "px";
        }
      }); // These hooks are used by animate to expand properties

      jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
          expand: function expand(value) {
            var i = 0,
                expanded = {},
                // Assumes a single number if not a string
            parts = typeof value === "string" ? value.split(" ") : [value];

            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }

            return expanded;
          }
        };

        if (prefix !== "margin") {
          jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery.fn.extend({
        css: function css(name, value) {
          return access(this, function (elem, name, value) {
            var styles,
                len,
                map = {},
                i = 0;

            if (Array.isArray(name)) {
              styles = getStyles(elem);
              len = name.length;

              for (; i < len; i++) {
                map[name[i]] = jQuery.css(elem, name[i], false, styles);
              }

              return map;
            }

            return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
          }, name, value, arguments.length > 1);
        }
      });

      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }

      jQuery.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function init(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function cur() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function run(percent) {
          var eased,
              hooks = Tween.propHooks[this.prop];

          if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
          } else {
            this.pos = eased = percent;
          }

          this.now = (this.end - this.start) * eased + this.start;

          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }

          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }

          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function get(tween) {
            var result; // Use a property on the element directly when it is not a DOM element,
            // or when there is no matching style property that exists.

            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            } // Passing an empty string as a 3rd parameter to .css will automatically
            // attempt a parseFloat and fallback to a string if the parse fails.
            // Simple values such as "10px" are parsed to Float;
            // complex values such as "rotate(1rad)" are returned as-is.


            result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

            return !result || result === "auto" ? 0 : result;
          },
          set: function set(tween) {
            // Use step hook for back compat.
            // Use cssHook if its there.
            // Use .style if available and use plain properties where available.
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      }; // Support: IE <=9 only
      // Panic based approach to setting things on disconnected nodes

      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function set(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery.easing = {
        linear: function linear(p) {
          return p;
        },
        swing: function swing(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

      jQuery.fx.step = {};
      var fxNow,
          inProgress,
          rfxtypes = /^(?:toggle|show|hide)$/,
          rrun = /queueHooks$/;

      function schedule() {
        if (inProgress) {
          if (document.hidden === false && window.requestAnimationFrame) {
            window.requestAnimationFrame(schedule);
          } else {
            window.setTimeout(schedule, jQuery.fx.interval);
          }

          jQuery.fx.tick();
        }
      } // Animations created synchronously will run synchronously


      function createFxNow() {
        window.setTimeout(function () {
          fxNow = undefined;
        });
        return fxNow = Date.now();
      } // Generate parameters to create a standard animation


      function genFx(type, includeWidth) {
        var which,
            i = 0,
            attrs = {
          height: type
        }; // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right

        includeWidth = includeWidth ? 1 : 0;

        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }

        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }

        return attrs;
      }

      function createTween(value, prop, animation) {
        var tween,
            collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
            index = 0,
            length = collection.length;

        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            // We're done with this property
            return tween;
          }
        }
      }

      function defaultPrefilter(elem, props, opts) {
        var prop,
            value,
            toggle,
            hooks,
            oldfire,
            propTween,
            restoreDisplay,
            display,
            isBox = "width" in props || "height" in props,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree(elem),
            dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

        if (!opts.queue) {
          hooks = jQuery._queueHooks(elem, "fx");

          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;

            hooks.empty.fire = function () {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }

          hooks.unqueued++;
          anim.always(function () {
            // Ensure the complete handler is called before this completes
            anim.always(function () {
              hooks.unqueued--;

              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        } // Detect show/hide animations


        for (prop in props) {
          value = props[prop];

          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";

            if (value === (hidden ? "hide" : "show")) {
              // Pretend to be hidden if this is a "show" and
              // there is still data from a stopped show/hide
              if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                hidden = true; // Ignore all other no-op show/hide data
              } else {
                continue;
              }
            }

            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        } // Bail out if this is a no-op like .hide().hide()


        propTween = !jQuery.isEmptyObject(props);

        if (!propTween && jQuery.isEmptyObject(orig)) {
          return;
        } // Restrict "overflow" and "display" styles during box animations


        if (isBox && elem.nodeType === 1) {
          // Support: IE <=9 - 11, Edge 12 - 15
          // Record all 3 overflow attributes because IE does not infer the shorthand
          // from identically-valued overflowX and overflowY and Edge just mirrors
          // the overflowX value there.
          opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

          restoreDisplay = dataShow && dataShow.display;

          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }

          display = jQuery.css(elem, "display");

          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              // Get nonempty value(s) by temporarily forcing visibility
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([elem]);
            }
          } // Animate inline elements as inline-block


          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {
              // Restore the original display value at the end of pure show/hide animations
              if (!propTween) {
                anim.done(function () {
                  style.display = restoreDisplay;
                });

                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }

              style.display = "inline-block";
            }
          }
        }

        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function () {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        } // Implement show/hide animations


        propTween = false;

        for (prop in orig) {
          // General show/hide setup for this element animation
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", {
                display: restoreDisplay
              });
            } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


            if (toggle) {
              dataShow.hidden = !hidden;
            } // Show elements before animating them


            if (hidden) {
              showHide([elem], true);
            }
            /* eslint-disable no-loop-func */


            anim.done(function () {
              /* eslint-enable no-loop-func */
              // The final step of a "hide" animation is actually hiding the element
              if (!hidden) {
                showHide([elem]);
              }

              dataPriv.remove(elem, "fxshow");

              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          } // Per-property setup


          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;

            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }

      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];

          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }

          if (index !== name) {
            props[name] = value;
            delete props[index];
          }

          hooks = jQuery.cssHooks[name];

          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
            // Reusing 'index' because we have the correct "name"

            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }

      function Animation(elem, properties, options) {
        var result,
            stopped,
            index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function () {
          // Don't match elem in the :animated selector
          delete tick.elem;
        }),
            tick = function tick() {
          if (stopped) {
            return false;
          }

          var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
              // Support: Android 2.3 only
          // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
          temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;

          for (; index < length; index++) {
            animation.tweens[index].run(percent);
          }

          deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

          if (percent < 1 && length) {
            return remaining;
          } // If this was an empty animation, synthesize a final progress notification


          if (!length) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          } // Resolve the animation and report its conclusion


          deferred.resolveWith(elem, [animation]);
          return false;
        },
            animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function createTween(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function stop(gotoEnd) {
            var index = 0,
                // If we are going to the end, we want to run all the tweens
            // otherwise we skip this part
            length = gotoEnd ? animation.tweens.length : 0;

            if (stopped) {
              return this;
            }

            stopped = true;

            for (; index < length; index++) {
              animation.tweens[index].run(1);
            } // Resolve when we played the last frame; otherwise, reject


            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }

            return this;
          }
        }),
            props = animation.props;

        propFilter(props, animation.opts.specialEasing);

        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

          if (result) {
            if (isFunction(result.stop)) {
              jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }

            return result;
          }
        }

        jQuery.map(props, createTween, animation);

        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        } // Attach callbacks from options


        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
          elem: elem,
          anim: animation,
          queue: animation.opts.queue
        }));
        return animation;
      }

      jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
          "*": [function (prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function tweener(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }

          var prop,
              index = 0,
              length = props.length;

          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function prefilter(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });

      jQuery.speed = function (speed, easing, fn) {
        var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        }; // Go to the end state if fx are off

        if (jQuery.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
              opt.duration = jQuery.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery.fx.speeds._default;
            }
          }
        } // Normalize opt.queue - true/undefined/null -> "fx"


        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        } // Queueing


        opt.old = opt.complete;

        opt.complete = function () {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }

          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        };

        return opt;
      };

      jQuery.fn.extend({
        fadeTo: function fadeTo(speed, to, easing, callback) {
          // Show any hidden elements after setting opacity to 0
          return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
          .end().animate({
            opacity: to
          }, speed, easing, callback);
        },
        animate: function animate(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop),
              optall = jQuery.speed(speed, easing, callback),
              doAnimation = function doAnimation() {
            // Operate on a copy of prop so per-property easing won't be lost
            var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };

          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function stop(type, clearQueue, gotoEnd) {
          var stopQueue = function stopQueue(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };

          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = undefined;
          }

          if (clearQueue && type !== false) {
            this.queue(type || "fx", []);
          }

          return this.each(function () {
            var dequeue = true,
                index = type != null && type + "queueHooks",
                timers = jQuery.timers,
                data = dataPriv.get(this);

            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }

            for (index = timers.length; index--;) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            } // Start the next in the queue if the last step wasn't forced.
            // Timers currently will call their complete callbacks, which
            // will dequeue but only if they were gotoEnd.


            if (dequeue || !gotoEnd) {
              jQuery.dequeue(this, type);
            }
          });
        },
        finish: function finish(type) {
          if (type !== false) {
            type = type || "fx";
          }

          return this.each(function () {
            var index,
                data = dataPriv.get(this),
                queue = data[type + "queue"],
                hooks = data[type + "queueHooks"],
                timers = jQuery.timers,
                length = queue ? queue.length : 0; // Enable finishing flag on private data

            data.finish = true; // Empty the queue first

            jQuery.queue(this, type, []);

            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            } // Look for any active animations, and finish them


            for (index = timers.length; index--;) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            } // Look for any animations in the old queue and finish them


            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            } // Turn off finishing flag


            delete data.finish;
          });
        }
      });
      jQuery.each(["toggle", "show", "hide"], function (i, name) {
        var cssFn = jQuery.fn[name];

        jQuery.fn[name] = function (speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      }); // Generate shortcuts for custom animations

      jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (name, props) {
        jQuery.fn[name] = function (speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery.timers = [];

      jQuery.fx.tick = function () {
        var timer,
            i = 0,
            timers = jQuery.timers;
        fxNow = Date.now();

        for (; i < timers.length; i++) {
          timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }

        if (!timers.length) {
          jQuery.fx.stop();
        }

        fxNow = undefined;
      };

      jQuery.fx.timer = function (timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
      };

      jQuery.fx.interval = 13;

      jQuery.fx.start = function () {
        if (inProgress) {
          return;
        }

        inProgress = true;
        schedule();
      };

      jQuery.fx.stop = function () {
        inProgress = null;
      };

      jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      }; // Based off of the plugin by Clint Helfers, with permission.
      // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

      jQuery.fn.delay = function (time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function (next, hooks) {
          var timeout = window.setTimeout(next, time);

          hooks.stop = function () {
            window.clearTimeout(timeout);
          };
        });
      };

      (function () {
        var input = document.createElement("input"),
            select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox"; // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"

        support.checkOn = input.value !== ""; // Support: IE <=11 only
        // Must access selectedIndex to make default options select

        support.optSelected = opt.selected; // Support: IE <=11 only
        // An input loses its value after becoming a radio

        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();

      var boolHook,
          attrHandle = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr: function attr(name, value) {
          return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function removeAttr(name) {
          return this.each(function () {
            jQuery.removeAttr(this, name);
          });
        }
      });
      jQuery.extend({
        attr: function attr(elem, name, value) {
          var ret,
              hooks,
              nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          } // Fallback to prop when attributes are not supported


          if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
          } // Attribute hooks are determined by the lowercase version
          // Grab necessary hook if one is defined


          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
          }

          if (value !== undefined) {
            if (value === null) {
              jQuery.removeAttr(elem, name);
              return;
            }

            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret;
            }

            elem.setAttribute(name, value + "");
            return value;
          }

          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }

          ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

          return ret == null ? undefined : ret;
        },
        attrHooks: {
          type: {
            set: function set(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);

                if (val) {
                  elem.value = val;
                }

                return value;
              }
            }
          }
        },
        removeAttr: function removeAttr(elem, value) {
          var name,
              i = 0,
              // Attribute names can contain non-HTML whitespace characters
          // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
          attrNames = value && value.match(rnothtmlwhite);

          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      }); // Hooks for boolean attributes

      boolHook = {
        set: function set(elem, value, name) {
          if (value === false) {
            // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }

          return name;
        }
      };
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;

        attrHandle[name] = function (elem, name, isXML) {
          var ret,
              handle,
              lowercaseName = name.toLowerCase();

          if (!isXML) {
            // Avoid an infinite loop by temporarily removing this function from the getter
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }

          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i,
          rclickable = /^(?:a|area)$/i;
      jQuery.fn.extend({
        prop: function prop(name, value) {
          return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function removeProp(name) {
          return this.each(function () {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });
      jQuery.extend({
        prop: function prop(elem, name, value) {
          var ret,
              hooks,
              nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }

          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            // Fix name and attach hooks
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name];
          }

          if (value !== undefined) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret;
            }

            return elem[name] = value;
          }

          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }

          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function get(elem) {
              // Support: IE <=9 - 11 only
              // elem.tabIndex doesn't always return the
              // correct value when it hasn't been explicitly set
              // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
              // Use proper attribute retrieval(#12072)
              var tabindex = jQuery.find.attr(elem, "tabindex");

              if (tabindex) {
                return parseInt(tabindex, 10);
              }

              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }

              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      }); // Support: IE <=11 only
      // Accessing the selectedIndex property
      // forces the browser to respect setting selected
      // on the option
      // The getter ensures a default option is selected
      // when in an optgroup
      // eslint rule "no-unused-expressions" is disabled for this code
      // since it considers such accessions noop

      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get: function get(elem) {
            /* eslint no-unused-expressions: "off" */
            var parent = elem.parentNode;

            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }

            return null;
          },
          set: function set(elem) {
            /* eslint no-unused-expressions: "off" */
            var parent = elem.parentNode;

            if (parent) {
              parent.selectedIndex;

              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }

      jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        jQuery.propFix[this.toLowerCase()] = this;
      }); // Strip and collapse whitespace according to HTML spec
      // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }

      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }

      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }

        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }

        return [];
      }

      jQuery.fn.extend({
        addClass: function addClass(value) {
          var classes,
              elem,
              cur,
              curValue,
              clazz,
              j,
              finalValue,
              i = 0;

          if (isFunction(value)) {
            return this.each(function (j) {
              jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
          }

          classes = classesToArray(value);

          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

              if (cur) {
                j = 0;

                while (clazz = classes[j++]) {
                  if (cur.indexOf(" " + clazz + " ") < 0) {
                    cur += clazz + " ";
                  }
                } // Only assign if different to avoid unneeded rendering.


                finalValue = stripAndCollapse(cur);

                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }

          return this;
        },
        removeClass: function removeClass(value) {
          var classes,
              elem,
              cur,
              curValue,
              clazz,
              j,
              finalValue,
              i = 0;

          if (isFunction(value)) {
            return this.each(function (j) {
              jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
          }

          if (!arguments.length) {
            return this.attr("class", "");
          }

          classes = classesToArray(value);

          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

              if (cur) {
                j = 0;

                while (clazz = classes[j++]) {
                  // Remove *all* instances
                  while (cur.indexOf(" " + clazz + " ") > -1) {
                    cur = cur.replace(" " + clazz + " ", " ");
                  }
                } // Only assign if different to avoid unneeded rendering.


                finalValue = stripAndCollapse(cur);

                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }

          return this;
        },
        toggleClass: function toggleClass(value, stateVal) {
          var type = _typeof(value),
              isValidValue = type === "string" || Array.isArray(value);

          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }

          if (isFunction(value)) {
            return this.each(function (i) {
              jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
          }

          return this.each(function () {
            var className, i, self, classNames;

            if (isValidValue) {
              // Toggle individual class names
              i = 0;
              self = jQuery(this);
              classNames = classesToArray(value);

              while (className = classNames[i++]) {
                // Check each className given, space separated list
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              } // Toggle whole class name

            } else if (value === undefined || type === "boolean") {
              className = getClass(this);

              if (className) {
                // Store className if set
                dataPriv.set(this, "__className__", className);
              } // If the element has a class name or if we're passed `false`,
              // then remove the whole classname (if there was one, the above saved it).
              // Otherwise bring back whatever was previously saved (if anything),
              // falling back to the empty string if nothing was stored.


              if (this.setAttribute) {
                this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
              }
            }
          });
        },
        hasClass: function hasClass(selector) {
          var className,
              elem,
              i = 0;
          className = " " + selector + " ";

          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }

          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery.fn.extend({
        val: function val(value) {
          var hooks,
              ret,
              valueIsFunction,
              elem = this[0];

          if (!arguments.length) {
            if (elem) {
              hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                return ret;
              }

              ret = elem.value; // Handle most common string cases

              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              } // Handle cases where value is null/undef or number


              return ret == null ? "" : ret;
            }

            return;
          }

          valueIsFunction = isFunction(value);
          return this.each(function (i) {
            var val;

            if (this.nodeType !== 1) {
              return;
            }

            if (valueIsFunction) {
              val = value.call(this, i, jQuery(this).val());
            } else {
              val = value;
            } // Treat null/undefined as ""; convert numbers to string


            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery.map(val, function (value) {
                return value == null ? "" : value + "";
              });
            }

            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
              this.value = val;
            }
          });
        }
      });
      jQuery.extend({
        valHooks: {
          option: {
            get: function get(elem) {
              var val = jQuery.find.attr(elem, "value");
              return val != null ? val : // Support: IE <=10 - 11 only
              // option.text throws exceptions (#14686, #14858)
              // Strip and collapse whitespace
              // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
              stripAndCollapse(jQuery.text(elem));
            }
          },
          select: {
            get: function get(elem) {
              var value,
                  option,
                  i,
                  options = elem.options,
                  index = elem.selectedIndex,
                  one = elem.type === "select-one",
                  values = one ? null : [],
                  max = one ? index + 1 : options.length;

              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              } // Loop through all the selected options


              for (; i < max; i++) {
                option = options[i]; // Support: IE <=9 only
                // IE8-9 doesn't update selected after form reset (#2551)

                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  // Get the specific value for the option
                  value = jQuery(option).val(); // We don't need an array for one selects

                  if (one) {
                    return value;
                  } // Multi-Selects return an array


                  values.push(value);
                }
              }

              return values;
            },
            set: function set(elem, value) {
              var optionSet,
                  option,
                  options = elem.options,
                  values = jQuery.makeArray(value),
                  i = options.length;

              while (i--) {
                option = options[i];
                /* eslint-disable no-cond-assign */

                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
                /* eslint-enable no-cond-assign */

              } // Force browsers to behave consistently when non-matching value is set


              if (!optionSet) {
                elem.selectedIndex = -1;
              }

              return values;
            }
          }
        }
      }); // Radios and checkboxes getter/setter

      jQuery.each(["radio", "checkbox"], function () {
        jQuery.valHooks[this] = {
          set: function set(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
          }
        };

        if (!support.checkOn) {
          jQuery.valHooks[this].get = function (elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      }); // Return jQuery for attributes-only inclusion

      support.focusin = "onfocusin" in window;

      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
          stopPropagationCallback = function stopPropagationCallback(e) {
        e.stopPropagation();
      };

      jQuery.extend(jQuery.event, {
        trigger: function trigger(event, data, elem, onlyHandlers) {
          var i,
              cur,
              tmp,
              bubbleType,
              ontype,
              handle,
              special,
              lastElement,
              eventPath = [elem || document],
              type = hasOwn.call(event, "type") ? event.type : event,
              namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          } // focus/blur morphs to focusin/out; ensure we're not firing them right now


          if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
          }

          if (type.indexOf(".") > -1) {
            // Namespaced trigger; create a regexp to match event type in handle()
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }

          ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

          event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

          event.result = undefined;

          if (!event.target) {
            event.target = elem;
          } // Clone any incoming data and prepend the event, creating the handler arg list


          data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

          special = jQuery.event.special[type] || {};

          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          } // Determine event propagation path in advance, per W3C events spec (#9951)
          // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;

            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }

            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            } // Only add window if we got to document (e.g., not plain obj or detached DOM)


            if (tmp === (elem.ownerDocument || document)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
          } // Fire handlers on the event path


          i = 0;

          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

            handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");

            if (handle) {
              handle.apply(cur, data);
            } // Native handler


            handle = ontype && cur[ontype];

            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);

              if (event.result === false) {
                event.preventDefault();
              }
            }
          }

          event.type = type; // If nobody prevented the default action, do it now

          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              // Call a native DOM method on the target with the same name as the event.
              // Don't do default actions on window, that's where global variables be (#6170)
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                // Don't re-trigger an onFOO event when we call its FOO() method
                tmp = elem[ontype];

                if (tmp) {
                  elem[ontype] = null;
                } // Prevent re-triggering of the same event, since we already bubbled it above


                jQuery.event.triggered = type;

                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }

                elem[type]();

                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }

                jQuery.event.triggered = undefined;

                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }

          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function simulate(type, elem, event) {
          var e = jQuery.extend(new jQuery.Event(), event, {
            type: type,
            isSimulated: true
          });
          jQuery.event.trigger(e, null, elem);
        }
      });
      jQuery.fn.extend({
        trigger: function trigger(type, data) {
          return this.each(function () {
            jQuery.event.trigger(type, data, this);
          });
        },
        triggerHandler: function triggerHandler(type, data) {
          var elem = this[0];

          if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
          }
        }
      }); // Support: Firefox <=44
      // Firefox doesn't have focus(in | out) events
      // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
      //
      // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
      // focus(in | out) events fire after focus & blur events,
      // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
      // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

      if (!support.focusin) {
        jQuery.each({
          focus: "focusin",
          blur: "focusout"
        }, function (orig, fix) {
          // Attach a single capturing handler on the document while someone wants focusin/focusout
          var handler = function handler(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
          };

          jQuery.event.special[fix] = {
            setup: function setup() {
              var doc = this.ownerDocument || this,
                  attaches = dataPriv.access(doc, fix);

              if (!attaches) {
                doc.addEventListener(orig, handler, true);
              }

              dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function teardown() {
              var doc = this.ownerDocument || this,
                  attaches = dataPriv.access(doc, fix) - 1;

              if (!attaches) {
                doc.removeEventListener(orig, handler, true);
                dataPriv.remove(doc, fix);
              } else {
                dataPriv.access(doc, fix, attaches);
              }
            }
          };
        });
      }

      var location = window.location;
      var nonce = Date.now();
      var rquery = /\?/; // Cross-browser xml parsing

      jQuery.parseXML = function (data) {
        var xml;

        if (!data || typeof data !== "string") {
          return null;
        } // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.


        try {
          xml = new window.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
          xml = undefined;
        }

        if (!xml || xml.getElementsByTagName("parsererror").length) {
          jQuery.error("Invalid XML: " + data);
        }

        return xml;
      };

      var rbracket = /\[\]$/,
          rCRLF = /\r?\n/g,
          rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
          rsubmittable = /^(?:input|select|textarea|keygen)/i;

      function buildParams(prefix, obj, traditional, add) {
        var name;

        if (Array.isArray(obj)) {
          // Serialize array item.
          jQuery.each(obj, function (i, v) {
            if (traditional || rbracket.test(prefix)) {
              // Treat each array item as a scalar.
              add(prefix, v);
            } else {
              // Item is non-scalar (array or object), encode its numeric index.
              buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          // Serialize object item.
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          // Serialize scalar item.
          add(prefix, obj);
        }
      } // Serialize an array of form elements or a set of
      // key/values into a query string


      jQuery.param = function (a, traditional) {
        var prefix,
            s = [],
            add = function add(key, valueOrFunction) {
          // If value is a function, invoke it and use its return value
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };

        if (a == null) {
          return "";
        } // If an array was passed in, assume that it is an array of form elements.


        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
          // Serialize the form elements
          jQuery.each(a, function () {
            add(this.name, this.value);
          });
        } else {
          // If traditional, encode the "old" way (the way 1.3.2 or older
          // did it), otherwise encode params recursively.
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        } // Return the resulting serialization


        return s.join("&");
      };

      jQuery.fn.extend({
        serialize: function serialize() {
          return jQuery.param(this.serializeArray());
        },
        serializeArray: function serializeArray() {
          return this.map(function () {
            // Can add propHook for "elements" to filter or add form elements
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          }).filter(function () {
            var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function (i, elem) {
            var val = jQuery(this).val();

            if (val == null) {
              return null;
            }

            if (Array.isArray(val)) {
              return jQuery.map(val, function (val) {
                return {
                  name: elem.name,
                  value: val.replace(rCRLF, "\r\n")
                };
              });
            }

            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          }).get();
        }
      });
      var r20 = /%20/g,
          rhash = /#.*$/,
          rantiCache = /([?&])_=[^&]*/,
          rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
          // #7653, #8125, #8152: local protocol detection
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          rnoContent = /^(?:GET|HEAD)$/,
          rprotocol = /^\/\//,

      /* Prefilters
       * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
       * 2) These are called:
       *    - BEFORE asking for a transport
       *    - AFTER param serialization (s.data is a string if s.processData is true)
       * 3) key is the dataType
       * 4) the catchall symbol "*" can be used
       * 5) execution will start with transport dataType and THEN continue down to "*" if needed
       */
      prefilters = {},

      /* Transports bindings
       * 1) key is the dataType
       * 2) the catchall symbol "*" can be used
       * 3) selection will start with transport dataType and THEN go to "*" if needed
       */
      transports = {},
          // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
      allTypes = "*/".concat("*"),
          // Anchor tag for parsing the document origin
      originAnchor = document.createElement("a");
      originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

      function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        return function (dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }

          var dataType,
              i = 0,
              dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

          if (isFunction(func)) {
            // For each dataType in the dataTypeExpression
            while (dataType = dataTypes[i++]) {
              // Prepend if requested
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      } // Base inspection function for prefilters and transports


      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {},
            seekingTransport = structure === transports;

        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }

        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      } // A special extend for ajax options
      // that takes "flat" options (not to be deep extended)
      // Fixes #9887


      function ajaxExtend(target, src) {
        var key,
            deep,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};

        for (key in src) {
          if (src[key] !== undefined) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }

        if (deep) {
          jQuery.extend(true, target, deep);
        }

        return target;
      }
      /* Handles responses to an ajax request:
       * - finds the right dataType (mediates between content-type and expected dataType)
       * - returns the corresponding response
       */


      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct,
            type,
            finalDataType,
            firstDataType,
            contents = s.contents,
            dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

        while (dataTypes[0] === "*") {
          dataTypes.shift();

          if (ct === undefined) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        } // Check if we're dealing with a known content-type


        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        } // Check to see if we have a response for the expected dataType


        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          // Try convertible dataTypes
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }

            if (!firstDataType) {
              firstDataType = type;
            }
          } // Or just use first one


          finalDataType = finalDataType || firstDataType;
        } // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response


        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }

          return responses[finalDataType];
        }
      }
      /* Chain conversions given the request and the original response
       * Also sets the responseXXX fields on the jqXHR instance
       */


      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2,
            current,
            conv,
            tmp,
            prev,
            converters = {},
            // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }

        current = dataTypes.shift(); // Convert to each sequential dataType

        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          } // Apply the dataFilter if provided


          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }

          prev = current;
          current = dataTypes.shift();

          if (current) {
            // There's only work to do if current dataType is non-auto
            if (current === "*") {
              current = prev; // Convert response if prev dataType is non-auto and differs from current
            } else if (prev !== "*" && prev !== current) {
              // Seek a direct converter
              conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

              if (!conv) {
                for (conv2 in converters) {
                  // If conv2 outputs current
                  tmp = conv2.split(" ");

                  if (tmp[1] === current) {
                    // If prev can be converted to accepted input
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                    if (conv) {
                      // Condense equivalence converters
                      if (conv === true) {
                        conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }

                      break;
                    }
                  }
                }
              } // Apply converter (if not an equivalence)


              if (conv !== true) {
                // Unless errors are allowed to bubble, catch and return them
                if (conv && s["throws"]) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }

        return {
          state: "success",
          data: response
        };
      }

      jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",

          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function ajaxSetup(target, settings) {
          return settings ? // Building a settings object
          ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
          ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function ajax(url, options) {
          // If url is an object, simulate pre-1.5 signature
          if (_typeof(url) === "object") {
            options = url;
            url = undefined;
          } // Force options to be an object


          options = options || {};

          var transport,
              // URL without anti-cache param
          cacheURL,
              // Response headers
          responseHeadersString,
              responseHeaders,
              // timeout handle
          timeoutTimer,
              // Url cleanup var
          urlAnchor,
              // Request state (becomes false upon send and true upon completion)
          completed,
              // To know if global events are to be dispatched
          fireGlobals,
              // Loop variable
          i,
              // uncached part of the url
          uncached,
              // Create the final options object
          s = jQuery.ajaxSetup({}, options),
              // Callbacks context
          callbackContext = s.context || s,
              // Context for global events is callbackContext if it is a DOM node or jQuery collection
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
              // Deferreds
          deferred = jQuery.Deferred(),
              completeDeferred = jQuery.Callbacks("once memory"),
              // Status-dependent callbacks
          _statusCode = s.statusCode || {},
              // Headers (they are sent all at once)
          requestHeaders = {},
              requestHeadersNames = {},
              // Default abort message
          strAbort = "canceled",
              // Fake xhr
          jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function getResponseHeader(key) {
              var match;

              if (completed) {
                if (!responseHeaders) {
                  responseHeaders = {};

                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }

                match = responseHeaders[key.toLowerCase() + " "];
              }

              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function getAllResponseHeaders() {
              return completed ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function setRequestHeader(name, value) {
              if (completed == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }

              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function overrideMimeType(type) {
              if (completed == null) {
                s.mimeType = type;
              }

              return this;
            },
            // Status-dependent callbacks
            statusCode: function statusCode(map) {
              var code;

              if (map) {
                if (completed) {
                  // Execute the appropriate callbacks
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  // Lazy-add the new callbacks in a way that preserves old ones
                  for (code in map) {
                    _statusCode[code] = [_statusCode[code], map[code]];
                  }
                }
              }

              return this;
            },
            // Cancel the request
            abort: function abort(statusText) {
              var finalText = statusText || strAbort;

              if (transport) {
                transport.abort(finalText);
              }

              done(0, finalText);
              return this;
            }
          }; // Attach deferreds


          deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
          // Handle falsy url in the settings object (#10093: consistency with old signature)
          // We also use the url parameter if available

          s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

          s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

          if (s.crossDomain == null) {
            urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
            // IE throws exception on accessing the href property if url is malformed,
            // e.g. http://example.com:80x/

            try {
              urlAnchor.href = s.url; // Support: IE <=8 - 11 only
              // Anchor's host property isn't correctly set when s.url is relative

              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              // If there is an error parsing the URL, assume it is crossDomain,
              // it can be rejected by the transport if it is invalid
              s.crossDomain = true;
            }
          } // Convert data if not already a string


          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional);
          } // Apply prefilters


          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

          if (completed) {
            return jqXHR;
          } // We can fire global events as of now if asked to
          // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


          fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

          if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
          } // Uppercase the type


          s.type = s.type.toUpperCase(); // Determine if request has content

          s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
          // and/or If-None-Match header later on
          // Remove hash to simplify url manipulation

          cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

          if (!s.hasContent) {
            // Remember the hash so we can put it back
            uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

              delete s.data;
            } // Add or update anti-cache param if needed


            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
            } // Put hash and anti-cache on the URL that will be requested (gh-1732)


            s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


          if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }

            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
          } // Set the correct header, if data is being sent


          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          } // Set the Accepts header for the server, depending on the dataType


          jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          } // Allow custom headers/mimetypes and early abort


          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
            // Abort if not done already and return
            return jqXHR.abort();
          } // Aborting is no longer a cancellation


          strAbort = "abort"; // Install callbacks on deferreds

          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error); // Get transport

          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1; // Send global event

            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            } // If request was aborted inside ajaxSend, stop there


            if (completed) {
              return jqXHR;
            } // Timeout


            if (s.async && s.timeout > 0) {
              timeoutTimer = window.setTimeout(function () {
                jqXHR.abort("timeout");
              }, s.timeout);
            }

            try {
              completed = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              // Rethrow post-completion exceptions
              if (completed) {
                throw e;
              } // Propagate others as results


              done(-1, e);
            }
          } // Callback for when everything is done


          function done(status, nativeStatusText, responses, headers) {
            var isSuccess,
                success,
                error,
                response,
                modified,
                statusText = nativeStatusText; // Ignore repeat invocations

            if (completed) {
              return;
            }

            completed = true; // Clear timeout if it exists

            if (timeoutTimer) {
              window.clearTimeout(timeoutTimer);
            } // Dereference transport for early garbage collection
            // (no matter how long the jqXHR object will be used)


            transport = undefined; // Cache response headers

            responseHeadersString = headers || ""; // Set readyState

            jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

            isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            } // Convert no matter what (that way responseXXX fields are always set)


            response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

            if (isSuccess) {
              // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");

                if (modified) {
                  jQuery.lastModified[cacheURL] = modified;
                }

                modified = jqXHR.getResponseHeader("etag");

                if (modified) {
                  jQuery.etag[cacheURL] = modified;
                }
              } // if no content


              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent"; // if not modified
              } else if (status === 304) {
                statusText = "notmodified"; // If we have data, let's convert it
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              // Extract error from statusText and normalize for non-aborts
              error = statusText;

              if (status || !statusText) {
                statusText = "error";

                if (status < 0) {
                  status = 0;
                }
              }
            } // Set data for the fake xhr object


            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            } // Status-dependent callbacks


            jqXHR.statusCode(_statusCode);
            _statusCode = undefined;

            if (fireGlobals) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
            } // Complete


            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

              if (! --jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }

          return jqXHR;
        },
        getJSON: function getJSON(url, data, callback) {
          return jQuery.get(url, data, callback, "json");
        },
        getScript: function getScript(url, callback) {
          return jQuery.get(url, undefined, callback, "script");
        }
      });
      jQuery.each(["get", "post"], function (i, method) {
        jQuery[method] = function (url, data, callback, type) {
          // Shift arguments if data argument was omitted
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined;
          } // The url can be an options object (which then must have .url)


          return jQuery.ajax(jQuery.extend({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback
          }, jQuery.isPlainObject(url) && url));
        };
      });

      jQuery._evalUrl = function (url, options) {
        return jQuery.ajax({
          url: url,
          // Make this explicit, since user can override this through ajaxSetup (#11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function textScript() {}
          },
          dataFilter: function dataFilter(response) {
            jQuery.globalEval(response, options);
          }
        });
      };

      jQuery.fn.extend({
        wrapAll: function wrapAll(html) {
          var wrap;

          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            } // The elements to wrap the target around


            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }

            wrap.map(function () {
              var elem = this;

              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }

              return elem;
            }).append(this);
          }

          return this;
        },
        wrapInner: function wrapInner(html) {
          if (isFunction(html)) {
            return this.each(function (i) {
              jQuery(this).wrapInner(html.call(this, i));
            });
          }

          return this.each(function () {
            var self = jQuery(this),
                contents = self.contents();

            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function wrap(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function (i) {
            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function unwrap(selector) {
          this.parent(selector).not("body").each(function () {
            jQuery(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });

      jQuery.expr.pseudos.hidden = function (elem) {
        return !jQuery.expr.pseudos.visible(elem);
      };

      jQuery.expr.pseudos.visible = function (elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };

      jQuery.ajaxSettings.xhr = function () {
        try {
          return new window.XMLHttpRequest();
        } catch (e) {}
      };

      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // #1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      },
          xhrSupported = jQuery.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function (options) {
        var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function send(headers, complete) {
              var i,
                  xhr = options.xhr();
              xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              } // Override mime type if needed


              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              } // X-Requested-With header
              // For cross-domain requests, seeing as conditions for a preflight are
              // akin to a jigsaw puzzle, we simply never set it to be sure.
              // (it can always be set on a per-request basis or even using ajaxSetup)
              // For same-domain requests, won't change header if already provided.


              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              } // Set headers


              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              } // Callback


              _callback = function callback(type) {
                return function () {
                  if (_callback) {
                    _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      // Support: IE <=9 only
                      // On a manual native abort, IE9 throws
                      // errors on any property access that is not readyState
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete( // File: protocol always yields status 0; see #8605, #14207
                        xhr.status, xhr.statusText);
                      }
                    } else {
                      complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                      // IE9 has no XHR2 but throws on binary (trac-11426)
                      // For XHR2 non-text, let the caller handle it (gh-2498)
                      (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                        binary: xhr.response
                      } : {
                        text: xhr.responseText
                      }, xhr.getAllResponseHeaders());
                    }
                  }
                };
              }; // Listen to events


              xhr.onload = _callback();
              errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
              // Use onreadystatechange to replace onabort
              // to handle uncaught aborts

              if (xhr.onabort !== undefined) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function () {
                  // Check readyState before timeout as it changes
                  if (xhr.readyState === 4) {
                    // Allow onerror to be called first,
                    // but that will not handle a native abort
                    // Also, save errorCallback to a variable
                    // as xhr.onerror cannot be accessed
                    window.setTimeout(function () {
                      if (_callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              } // Create the abort callback


              _callback = _callback("abort");

              try {
                // Do send the request (this may raise an exception)
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                // #14683: Only rethrow if this hasn't been notified as an error yet
                if (_callback) {
                  throw e;
                }
              }
            },
            abort: function abort() {
              if (_callback) {
                _callback();
              }
            }
          };
        }
      }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

      jQuery.ajaxPrefilter(function (s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      }); // Install script dataType

      jQuery.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function textScript(text) {
            jQuery.globalEval(text);
            return text;
          }
        }
      }); // Handle cache's special case and crossDomain

      jQuery.ajaxPrefilter("script", function (s) {
        if (s.cache === undefined) {
          s.cache = false;
        }

        if (s.crossDomain) {
          s.type = "GET";
        }
      }); // Bind script tag hack transport

      jQuery.ajaxTransport("script", function (s) {
        // This transport only deals with cross domain or forced-by-attrs requests
        if (s.crossDomain || s.scriptAttrs) {
          var script, _callback2;

          return {
            send: function send(_, complete) {
              script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                charset: s.scriptCharset,
                src: s.url
              }).on("load error", _callback2 = function callback(evt) {
                script.remove();
                _callback2 = null;

                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              }); // Use native DOM manipulation to avoid our domManip AJAX trickery

              document.head.appendChild(script[0]);
            },
            abort: function abort() {
              if (_callback2) {
                _callback2();
              }
            }
          };
        }
      });
      var oldCallbacks = [],
          rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function jsonpCallback() {
          var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
          this[callback] = true;
          return callback;
        }
      }); // Detect, normalize options and install callbacks for jsonp requests

      jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
        var callbackName,
            overwritten,
            responseContainer,
            jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

        if (jsonProp || s.dataTypes[0] === "jsonp") {
          // Get callback name, remembering preexisting value associated with it
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          } // Use data converter to retrieve json after script execution


          s.converters["script json"] = function () {
            if (!responseContainer) {
              jQuery.error(callbackName + " was not called");
            }

            return responseContainer[0];
          }; // Force json dataType


          s.dataTypes[0] = "json"; // Install callback

          overwritten = window[callbackName];

          window[callbackName] = function () {
            responseContainer = arguments;
          }; // Clean-up function (fires after converters)


          jqXHR.always(function () {
            // If previous value didn't exist - remove it
            if (overwritten === undefined) {
              jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
            } else {
              window[callbackName] = overwritten;
            } // Save back as free


            if (s[callbackName]) {
              // Make sure that re-using the options doesn't screw things around
              s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

              oldCallbacks.push(callbackName);
            } // Call if it was a function and we have a response


            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }

            responseContainer = overwritten = undefined;
          }); // Delegate to script

          return "script";
        }
      }); // Support: Safari 8 only
      // In Safari 8 documents created via document.implementation.createHTMLDocument
      // collapse sibling forms: the second one becomes a child of the first one.
      // Because of that, this security measure has to be disabled in Safari 8.
      // https://bugs.webkit.org/show_bug.cgi?id=137337

      support.createHTMLDocument = function () {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }(); // Argument "data" should be string of html
      // context (optional): If specified, the fragment will be created in this context,
      // defaults to document
      // keepScripts (optional): If true, will include scripts passed in the html string


      jQuery.parseHTML = function (data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }

        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }

        var base, parsed, scripts;

        if (!context) {
          // Stop scripts or inline event handlers from being executed immediately
          // by using document.implementation
          if (support.createHTMLDocument) {
            context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
            // so any parsed elements with URLs
            // are based on the document's URL (gh-2965)

            base = context.createElement("base");
            base.href = document.location.href;
            context.head.appendChild(base);
          } else {
            context = document;
          }
        }

        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && []; // Single tag

        if (parsed) {
          return [context.createElement(parsed[1])];
        }

        parsed = buildFragment([data], context, scripts);

        if (scripts && scripts.length) {
          jQuery(scripts).remove();
        }

        return jQuery.merge([], parsed.childNodes);
      };
      /**
       * Load a url into a page
       */


      jQuery.fn.load = function (url, params, callback) {
        var selector,
            type,
            response,
            self = this,
            off = url.indexOf(" ");

        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        } // If it's a function


        if (isFunction(params)) {
          // We assume that it's the callback
          callback = params;
          params = undefined; // Otherwise, build a param string
        } else if (params && _typeof(params) === "object") {
          type = "POST";
        } // If we have elements to modify, make the request


        if (self.length > 0) {
          jQuery.ajax({
            url: url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function (responseText) {
            // Save response for use in complete callback
            response = arguments;
            self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
            responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
            // but they are ignored because response was set above.
            // If it fails, this function gets "jqXHR", "status", "error"
          }).always(callback && function (jqXHR, status) {
            self.each(function () {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }

        return this;
      }; // Attach a bunch of functions for handling common AJAX events


      jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
        jQuery.fn[type] = function (fn) {
          return this.on(type, fn);
        };
      });

      jQuery.expr.pseudos.animated = function (elem) {
        return jQuery.grep(jQuery.timers, function (fn) {
          return elem === fn.elem;
        }).length;
      };

      jQuery.offset = {
        setOffset: function setOffset(elem, options, i) {
          var curPosition,
              curLeft,
              curCSSTop,
              curTop,
              curOffset,
              curCSSLeft,
              calculatePosition,
              position = jQuery.css(elem, "position"),
              curElem = jQuery(elem),
              props = {}; // Set position first, in-case top/left are set even on static elem

          if (position === "static") {
            elem.style.position = "relative";
          }

          curOffset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
          // top or left is auto and position is either absolute or fixed

          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }

          if (isFunction(options)) {
            // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({}, curOffset));
          }

          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }

          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }

          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function offset(options) {
          // Preserve chaining for setter
          if (arguments.length) {
            return options === undefined ? this : this.each(function (i) {
              jQuery.offset.setOffset(this, options, i);
            });
          }

          var rect,
              win,
              elem = this[0];

          if (!elem) {
            return;
          } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
          // Support: IE <=11 only
          // Running getBoundingClientRect on a
          // disconnected node in IE throws an error


          if (!elem.getClientRects().length) {
            return {
              top: 0,
              left: 0
            };
          } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function position() {
          if (!this[0]) {
            return;
          }

          var offsetParent,
              offset,
              doc,
              elem = this[0],
              parentOffset = {
            top: 0,
            left: 0
          }; // position:fixed elements are offset from the viewport, which itself always has zero offset

          if (jQuery.css(elem, "position") === "fixed") {
            // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
            // when a statically positioned element is identified

            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;

            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }

            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              // Incorporate borders into its offset, since they are outside its content origin
              parentOffset = jQuery(offsetParent).offset();
              parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
            }
          } // Subtract parent offsets and element margins


          return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
          };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function offsetParent() {
          return this.map(function () {
            var offsetParent = this.offsetParent;

            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }

            return offsetParent || documentElement;
          });
        }
      }); // Create scrollLeft and scrollTop methods

      jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (method, prop) {
        var top = "pageYOffset" === prop;

        jQuery.fn[method] = function (val) {
          return access(this, function (elem, method, val) {
            // Coalesce documents and windows
            var win;

            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }

            if (val === undefined) {
              return win ? win[prop] : elem[method];
            }

            if (win) {
              win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
            } else {
              elem[method] = val;
            }
          }, method, val, arguments.length);
        };
      }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
      // Add the top/left cssHooks using jQuery.fn.position
      // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
      // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
      // getComputedStyle returns percent when specified for top/left/bottom/right;
      // rather than make the css module depend on the offset module, just check for it here

      jQuery.each(["top", "left"], function (i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
          }
        });
      }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

      jQuery.each({
        Height: "height",
        Width: "width"
      }, function (name, type) {
        jQuery.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function (defaultExtra, funcName) {
          // Margin is only for outerHeight, outerWidth
          jQuery.fn[funcName] = function (margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function (elem, type, value) {
              var doc;

              if (isWindow(elem)) {
                // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              } // Get document width or height


              if (elem.nodeType === 9) {
                doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                // whichever is greatest

                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
              }

              return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
              jQuery.css(elem, type, extra) : // Set width or height on the element
              jQuery.style(elem, type, value, extra);
            }, type, chainable ? margin : undefined, chainable);
          };
        });
      });
      jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
        // Handle event binding
        jQuery.fn[name] = function (data, fn) {
          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
      });
      jQuery.fn.extend({
        hover: function hover(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
      });
      jQuery.fn.extend({
        bind: function bind(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function unbind(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function delegate(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function undelegate(selector, types, fn) {
          // ( namespace ) or ( selector, types [, fn] )
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
      }); // Bind a function to a context, optionally partially applying any
      // arguments.
      // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
      // However, it is not slated for removal any time soon

      jQuery.proxy = function (fn, context) {
        var tmp, args, proxy;

        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        } // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.


        if (!isFunction(fn)) {
          return undefined;
        } // Simulated bind


        args = _slice.call(arguments, 2);

        proxy = function proxy() {
          return fn.apply(context || this, args.concat(_slice.call(arguments)));
        }; // Set the guid of unique handler to the same of original handler, so it can be removed


        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
      };

      jQuery.holdReady = function (hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      };

      jQuery.isArray = Array.isArray;
      jQuery.parseJSON = JSON.parse;
      jQuery.nodeName = nodeName;
      jQuery.isFunction = isFunction;
      jQuery.isWindow = isWindow;
      jQuery.camelCase = camelCase;
      jQuery.type = toType;
      jQuery.now = Date.now;

      jQuery.isNumeric = function (obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      }; // Register as a named AMD module, since jQuery can be concatenated with other


      var // Map over jQuery in case of overwrite
      _jQuery = window.jQuery,
          // Map over the $ in case of overwrite
      _$ = window.$;

      jQuery.noConflict = function (deep) {
        if (window.$ === jQuery) {
          window.$ = _$;
        }

        if (deep && window.jQuery === jQuery) {
          window.jQuery = _jQuery;
        }

        return jQuery;
      }; // Expose jQuery and $ identifiers, even in AMD
      // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
      // and CommonJS for browser emulators (#13566)


      if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
      }

      return jQuery;
    });
  });
  var svg4everybody = createCommonjsModule(function (module) {
    !function (root, factory) {
      module.exports ? // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory() : root.svg4everybody = factory();
    }(commonjsGlobal, function () {
      /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
      function embed(parent, svg, target) {
        // if the target exists
        if (target) {
          // create a document fragment to hold the contents of the target
          var fragment = document.createDocumentFragment(),
              viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox"); // conditionally set the viewBox on the svg

          viewBox && svg.setAttribute("viewBox", viewBox); // copy the contents of the clone into the fragment

          for ( // clone the target
          var clone = target.cloneNode(!0); clone.childNodes.length;) {
            fragment.appendChild(clone.firstChild);
          } // append the fragment into the svg


          parent.appendChild(fragment);
        }
      }

      function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function () {
          // if the request is ready
          if (4 === xhr.readyState) {
            // get the cached html document
            var cachedDocument = xhr._cachedDocument; // ensure the cached html document based on the xhr response

            cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
            xhr._embeds.splice(0).map(function (item) {
              // get the cached target
              var target = xhr._cachedTarget[item.id]; // ensure the cached target

              target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), // embed the target into the svg
              embed(item.parent, item.svg, target);
            });
          }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
      }

      function svg4everybody(rawopts) {
        function oninterval() {
          // while the index exists in the live <use> collection
          for ( // get the cached <use> index
          var index = 0; index < uses.length;) {
            // get the current <use>
            var use = uses[index],
                parent = use.parentNode,
                svg = getSVGAncestor(parent),
                src = use.getAttribute("xlink:href") || use.getAttribute("href");

            if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), svg && src) {
              if (polyfill) {
                if (!opts.validate || opts.validate(src, svg, use)) {
                  // remove the <use> element
                  parent.removeChild(use); // parse the src and get the url and id

                  var srcSplit = src.split("#"),
                      url = srcSplit.shift(),
                      id = srcSplit.join("#"); // if the link is external

                  if (url.length) {
                    // get the cached xhr request
                    var xhr = requests[url]; // ensure the xhr request exists

                    xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                    xhr._embeds.push({
                      parent: parent,
                      svg: svg,
                      id: id
                    }), // prepare the xhr ready state change event
                    loadreadystatechange(xhr);
                  } else {
                    // embed the local id into the svg
                    embed(parent, svg, document.getElementById(id));
                  }
                } else {
                  // increase the index when the previous value was not "valid"
                  ++index, ++numberOfSvgUseElementsToBypass;
                }
              }
            } else {
              // increase the index when the previous value was not "valid"
              ++index;
            }
          } // continue the interval


          (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }

        var polyfill,
            opts = Object(rawopts),
            newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
            webkitUA = /\bAppleWebKit\/(\d+)\b/,
            olderEdgeUA = /\bEdge\/12\.(\d+)\b/,
            edgeUA = /\bEdge\/.(\d+)\b/,
            inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe; // create xhr requests object

        var requests = {},
            requestAnimationFrame = window.requestAnimationFrame || setTimeout,
            uses = document.getElementsByTagName("use"),
            numberOfSvgUseElementsToBypass = 0; // conditionally start the interval if the polyfill is active

        polyfill && oninterval();
      }

      function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode);) {}

        return svg;
      }

      return svg4everybody;
    });
  });

  function header() {
    var body = document.querySelector('.body');
    var navigation = document.querySelector('.js-navigation');
    var menu = navigation.querySelector('.js-menu');
    var btnMenu = navigation.querySelector('[data-btn]');
    var search = document.querySelector('.js-search');
    var searchForm = search.querySelector('.js-search-form');
    var btnSearchOpen = search.querySelector('[data-btn-open]');
    var btnSearchClose = search.querySelector('[data-btn-close]');
    var smallWidth = window.outerWidth <= '768';

    var toggleMenu = function toggleMenu() {
      if (menu.dataset.open === 'false') {
        menu.dataset.open = 'true';

        if (smallWidth) {
          body.classList.add('no-scroll');
        }
      } else {
        menu.dataset.open = 'false';

        if (smallWidth) {
          body.classList.remove('no-scroll');
        }
      }
    };

    console.log(window.outerWidth);
    btnMenu.addEventListener('click', toggleMenu);

    var openSearch = function openSearch() {
      searchForm.dataset.open = 'true';
      navigation.dataset.open = 'false';
      btnSearchOpen.dataset.close = 'true';
    };

    btnSearchOpen.addEventListener('click', openSearch);

    var closeSearch = function closeSearch() {
      searchForm.dataset.open = 'false';
      navigation.dataset.open = 'true';
      btnSearchOpen.dataset.close = 'false';
    };

    btnSearchClose.addEventListener('click', closeSearch);
  }

  window.jQuery = window.$ = jquery;
  svg4everybody();
  header();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoJ3NjcmlwdHMnLCBmYWN0b3J5KSA6IGZhY3RvcnkoKTtcbn0pKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcbiAgICByZXR1cm4gbW9kdWxlID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICB2YXIganF1ZXJ5ID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgIC8qIVxuICAgICAqIGpRdWVyeSBKYXZhU2NyaXB0IExpYnJhcnkgdjMuNC4xXG4gICAgICogaHR0cHM6Ly9qcXVlcnkuY29tL1xuICAgICAqXG4gICAgICogSW5jbHVkZXMgU2l6emxlLmpzXG4gICAgICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG4gICAgICpcbiAgICAgKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gICAgICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gICAgICogaHR0cHM6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAgICAgKlxuICAgICAqIERhdGU6IDIwMTktMDUtMDFUMjE6MDRaXG4gICAgICovXG4gICAgKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICAgIHtcbiAgICAgICAgLy8gRm9yIENvbW1vbkpTIGFuZCBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB3aGVyZSBhIHByb3BlciBgd2luZG93YFxuICAgICAgICAvLyBpcyBwcmVzZW50LCBleGVjdXRlIHRoZSBmYWN0b3J5IGFuZCBnZXQgalF1ZXJ5LlxuICAgICAgICAvLyBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IGhhdmUgYSBgd2luZG93YCB3aXRoIGEgYGRvY3VtZW50YFxuICAgICAgICAvLyAoc3VjaCBhcyBOb2RlLmpzKSwgZXhwb3NlIGEgZmFjdG9yeSBhcyBtb2R1bGUuZXhwb3J0cy5cbiAgICAgICAgLy8gVGhpcyBhY2NlbnR1YXRlcyB0aGUgbmVlZCBmb3IgdGhlIGNyZWF0aW9uIG9mIGEgcmVhbCBgd2luZG93YC5cbiAgICAgICAgLy8gZS5nLiB2YXIgalF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKSh3aW5kb3cpO1xuICAgICAgICAvLyBTZWUgdGlja2V0ICMxNDU0OSBmb3IgbW9yZSBpbmZvLlxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/IGZhY3RvcnkoZ2xvYmFsLCB0cnVlKSA6IGZ1bmN0aW9uICh3KSB7XG4gICAgICAgICAgaWYgKCF3LmRvY3VtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWN0b3J5KHcpO1xuICAgICAgICB9O1xuICAgICAgfSAvLyBQYXNzIHRoaXMgaWYgd2luZG93IGlzIG5vdCBkZWZpbmVkIHlldFxuICAgIH0pKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiBjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKHdpbmRvdywgbm9HbG9iYWwpIHtcbiAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICAgIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgICAgIHZhciBfc2xpY2UgPSBhcnIuc2xpY2U7XG4gICAgICB2YXIgY29uY2F0ID0gYXJyLmNvbmNhdDtcbiAgICAgIHZhciBwdXNoID0gYXJyLnB1c2g7XG4gICAgICB2YXIgaW5kZXhPZiA9IGFyci5pbmRleE9mO1xuICAgICAgdmFyIGNsYXNzMnR5cGUgPSB7fTtcbiAgICAgIHZhciB0b1N0cmluZyA9IGNsYXNzMnR5cGUudG9TdHJpbmc7XG4gICAgICB2YXIgaGFzT3duID0gY2xhc3MydHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgICAgIHZhciBmblRvU3RyaW5nID0gaGFzT3duLnRvU3RyaW5nO1xuICAgICAgdmFyIE9iamVjdEZ1bmN0aW9uU3RyaW5nID0gZm5Ub1N0cmluZy5jYWxsKE9iamVjdCk7XG4gICAgICB2YXIgc3VwcG9ydCA9IHt9O1xuXG4gICAgICB2YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIC8vIFN1cHBvcnQ6IENocm9tZSA8PTU3LCBGaXJlZm94IDw9NTJcbiAgICAgICAgLy8gSW4gc29tZSBicm93c2VycywgdHlwZW9mIHJldHVybnMgXCJmdW5jdGlvblwiIGZvciBIVE1MIDxvYmplY3Q+IGVsZW1lbnRzXG4gICAgICAgIC8vIChpLmUuLCBgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwib2JqZWN0XCIgKSA9PT0gXCJmdW5jdGlvblwiYCkuXG4gICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gY2xhc3NpZnkgKmFueSogRE9NIG5vZGUgYXMgYSBmdW5jdGlvbi5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygb2JqLm5vZGVUeXBlICE9PSBcIm51bWJlclwiO1xuICAgICAgfTtcblxuICAgICAgdmFyIGlzV2luZG93ID0gZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG4gICAgICB9O1xuXG4gICAgICB2YXIgcHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyA9IHtcbiAgICAgICAgdHlwZTogdHJ1ZSxcbiAgICAgICAgc3JjOiB0cnVlLFxuICAgICAgICBub25jZTogdHJ1ZSxcbiAgICAgICAgbm9Nb2R1bGU6IHRydWVcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIERPTUV2YWwoY29kZSwgbm9kZSwgZG9jKSB7XG4gICAgICAgIGRvYyA9IGRvYyB8fCBkb2N1bWVudDtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgc2NyaXB0LnRleHQgPSBjb2RlO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgZm9yIChpIGluIHByZXNlcnZlZFNjcmlwdEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEZpcmVmb3ggNjQrLCBFZGdlIDE4K1xuICAgICAgICAgICAgLy8gU29tZSBicm93c2VycyBkb24ndCBzdXBwb3J0IHRoZSBcIm5vbmNlXCIgcHJvcGVydHkgb24gc2NyaXB0cy5cbiAgICAgICAgICAgIC8vIE9uIHRoZSBvdGhlciBoYW5kLCBqdXN0IHVzaW5nIGBnZXRBdHRyaWJ1dGVgIGlzIG5vdCBlbm91Z2ggYXNcbiAgICAgICAgICAgIC8vIHRoZSBgbm9uY2VgIGF0dHJpYnV0ZSBpcyByZXNldCB0byBhbiBlbXB0eSBzdHJpbmcgd2hlbmV2ZXIgaXRcbiAgICAgICAgICAgIC8vIGJlY29tZXMgYnJvd3NpbmctY29udGV4dCBjb25uZWN0ZWQuXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy8yMzY5XG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jbm9uY2UtYXR0cmlidXRlc1xuICAgICAgICAgICAgLy8gVGhlIGBub2RlLmdldEF0dHJpYnV0ZWAgY2hlY2sgd2FzIGFkZGVkIGZvciB0aGUgc2FrZSBvZlxuICAgICAgICAgICAgLy8gYGpRdWVyeS5nbG9iYWxFdmFsYCBzbyB0aGF0IGl0IGNhbiBmYWtlIGEgbm9uY2UtY29udGFpbmluZyBub2RlXG4gICAgICAgICAgICAvLyB2aWEgYW4gb2JqZWN0LlxuICAgICAgICAgICAgdmFsID0gbm9kZVtpXSB8fCBub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZShpKTtcblxuICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKGksIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgICAgICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG9iaiArIFwiXCI7XG4gICAgICAgIH0gLy8gU3VwcG9ydDogQW5kcm9pZCA8PTIuMyBvbmx5IChmdW5jdGlvbmlzaCBSZWdFeHApXG5cblxuICAgICAgICByZXR1cm4gX3R5cGVvZihvYmopID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiA/IGNsYXNzMnR5cGVbdG9TdHJpbmcuY2FsbChvYmopXSB8fCBcIm9iamVjdFwiIDogX3R5cGVvZihvYmopO1xuICAgICAgfVxuICAgICAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICAgICAgLy8gRGVmaW5pbmcgdGhpcyBnbG9iYWwgaW4gLmVzbGludHJjLmpzb24gd291bGQgY3JlYXRlIGEgZGFuZ2VyIG9mIHVzaW5nIHRoZSBnbG9iYWxcbiAgICAgIC8vIHVuZ3VhcmRlZCBpbiBhbm90aGVyIHBsYWNlLCBpdCBzZWVtcyBzYWZlciB0byBkZWZpbmUgZ2xvYmFsIG9ubHkgZm9yIHRoaXMgbW9kdWxlXG5cblxuICAgICAgdmFyIHZlcnNpb24gPSBcIjMuNC4xXCIsXG4gICAgICAgICAgLy8gRGVmaW5lIGEgbG9jYWwgY29weSBvZiBqUXVlcnlcbiAgICAgIGpRdWVyeSA9IGZ1bmN0aW9uIGpRdWVyeShzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICAvLyBUaGUgalF1ZXJ5IG9iamVjdCBpcyBhY3R1YWxseSBqdXN0IHRoZSBpbml0IGNvbnN0cnVjdG9yICdlbmhhbmNlZCdcbiAgICAgICAgLy8gTmVlZCBpbml0IGlmIGpRdWVyeSBpcyBjYWxsZWQgKGp1c3QgYWxsb3cgZXJyb3IgdG8gYmUgdGhyb3duIGlmIG5vdCBpbmNsdWRlZClcbiAgICAgICAgcmV0dXJuIG5ldyBqUXVlcnkuZm4uaW5pdChzZWxlY3RvciwgY29udGV4dCk7XG4gICAgICB9LFxuICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuICAgICAgLy8gTWFrZSBzdXJlIHdlIHRyaW0gQk9NIGFuZCBOQlNQXG4gICAgICBydHJpbSA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZztcblxuICAgICAgalF1ZXJ5LmZuID0galF1ZXJ5LnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuICAgICAgICBqcXVlcnk6IHZlcnNpb24sXG4gICAgICAgIGNvbnN0cnVjdG9yOiBqUXVlcnksXG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IGxlbmd0aCBvZiBhIGpRdWVyeSBvYmplY3QgaXMgMFxuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIHRvQXJyYXk6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgICAgICAgcmV0dXJuIF9zbGljZS5jYWxsKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBHZXQgdGhlIE50aCBlbGVtZW50IGluIHRoZSBtYXRjaGVkIGVsZW1lbnQgc2V0IE9SXG4gICAgICAgIC8vIEdldCB0aGUgd2hvbGUgbWF0Y2hlZCBlbGVtZW50IHNldCBhcyBhIGNsZWFuIGFycmF5XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KG51bSkge1xuICAgICAgICAgIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGluIGEgY2xlYW4gYXJyYXlcbiAgICAgICAgICBpZiAobnVtID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBfc2xpY2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICB9IC8vIFJldHVybiBqdXN0IHRoZSBvbmUgZWxlbWVudCBmcm9tIHRoZSBzZXRcblxuXG4gICAgICAgICAgcmV0dXJuIG51bSA8IDAgPyB0aGlzW251bSArIHRoaXMubGVuZ3RoXSA6IHRoaXNbbnVtXTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBhbmQgcHVzaCBpdCBvbnRvIHRoZSBzdGFja1xuICAgICAgICAvLyAocmV0dXJuaW5nIHRoZSBuZXcgbWF0Y2hlZCBlbGVtZW50IHNldClcbiAgICAgICAgcHVzaFN0YWNrOiBmdW5jdGlvbiBwdXNoU3RhY2soZWxlbXMpIHtcbiAgICAgICAgICAvLyBCdWlsZCBhIG5ldyBqUXVlcnkgbWF0Y2hlZCBlbGVtZW50IHNldFxuICAgICAgICAgIHZhciByZXQgPSBqUXVlcnkubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLCBlbGVtcyk7IC8vIEFkZCB0aGUgb2xkIG9iamVjdCBvbnRvIHRoZSBzdGFjayAoYXMgYSByZWZlcmVuY2UpXG5cbiAgICAgICAgICByZXQucHJldk9iamVjdCA9IHRoaXM7IC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG5cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuICAgICAgICAvLyBFeGVjdXRlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LlxuICAgICAgICBlYWNoOiBmdW5jdGlvbiBlYWNoKGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIGpRdWVyeS5lYWNoKHRoaXMsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soalF1ZXJ5Lm1hcCh0aGlzLCBmdW5jdGlvbiAoZWxlbSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwoZWxlbSwgaSwgZWxlbSk7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBzbGljZTogZnVuY3Rpb24gc2xpY2UoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKF9zbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uIGZpcnN0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVxKDApO1xuICAgICAgICB9LFxuICAgICAgICBsYXN0OiBmdW5jdGlvbiBsYXN0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVxKC0xKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXE6IGZ1bmN0aW9uIGVxKGkpIHtcbiAgICAgICAgICB2YXIgbGVuID0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICAgIGogPSAraSArIChpIDwgMCA/IGxlbiA6IDApO1xuICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhqID49IDAgJiYgaiA8IGxlbiA/IFt0aGlzW2pdXSA6IFtdKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kOiBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJldk9iamVjdCB8fCB0aGlzLmNvbnN0cnVjdG9yKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAgICAgICAgLy8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXG4gICAgICAgIHB1c2g6IHB1c2gsXG4gICAgICAgIHNvcnQ6IGFyci5zb3J0LFxuICAgICAgICBzcGxpY2U6IGFyci5zcGxpY2VcbiAgICAgIH07XG5cbiAgICAgIGpRdWVyeS5leHRlbmQgPSBqUXVlcnkuZm4uZXh0ZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBjb3B5LFxuICAgICAgICAgICAgY29weUlzQXJyYXksXG4gICAgICAgICAgICBjbG9uZSxcbiAgICAgICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1swXSB8fCB7fSxcbiAgICAgICAgICAgIGkgPSAxLFxuICAgICAgICAgICAgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGRlZXAgPSBmYWxzZTsgLy8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIGRlZXAgPSB0YXJnZXQ7IC8vIFNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblxuICAgICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1tpXSB8fCB7fTtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH0gLy8gSGFuZGxlIGNhc2Ugd2hlbiB0YXJnZXQgaXMgYSBzdHJpbmcgb3Igc29tZXRoaW5nIChwb3NzaWJsZSBpbiBkZWVwIGNvcHkpXG5cblxuICAgICAgICBpZiAoX3R5cGVvZih0YXJnZXQpICE9PSBcIm9iamVjdFwiICYmICFpc0Z1bmN0aW9uKHRhcmdldCkpIHtcbiAgICAgICAgICB0YXJnZXQgPSB7fTtcbiAgICAgICAgfSAvLyBFeHRlbmQgalF1ZXJ5IGl0c2VsZiBpZiBvbmx5IG9uZSBhcmd1bWVudCBpcyBwYXNzZWRcblxuXG4gICAgICAgIGlmIChpID09PSBsZW5ndGgpIHtcbiAgICAgICAgICB0YXJnZXQgPSB0aGlzO1xuICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG4gICAgICAgICAgaWYgKChvcHRpb25zID0gYXJndW1lbnRzW2ldKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG4gICAgICAgICAgICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICBjb3B5ID0gb3B0aW9uc1tuYW1lXTsgLy8gUHJldmVudCBPYmplY3QucHJvdG90eXBlIHBvbGx1dGlvblxuICAgICAgICAgICAgICAvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiX19wcm90b19fXCIgfHwgdGFyZ2V0ID09PSBjb3B5KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH0gLy8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cblxuICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBjb3B5ICYmIChqUXVlcnkuaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGNvcHkpKSkpIHtcbiAgICAgICAgICAgICAgICBzcmMgPSB0YXJnZXRbbmFtZV07IC8vIEVuc3VyZSBwcm9wZXIgdHlwZSBmb3IgdGhlIHNvdXJjZSB2YWx1ZVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvcHlJc0FycmF5ICYmICFBcnJheS5pc0FycmF5KHNyYykpIHtcbiAgICAgICAgICAgICAgICAgIGNsb25lID0gW107XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghY29weUlzQXJyYXkgJiYgIWpRdWVyeS5pc1BsYWluT2JqZWN0KHNyYykpIHtcbiAgICAgICAgICAgICAgICAgIGNsb25lID0ge307XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNsb25lID0gc3JjO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvcHlJc0FycmF5ID0gZmFsc2U7IC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0galF1ZXJ5LmV4dGVuZChkZWVwLCBjbG9uZSwgY29weSk7IC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3B5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBjb3B5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfTtcblxuICAgICAgalF1ZXJ5LmV4dGVuZCh7XG4gICAgICAgIC8vIFVuaXF1ZSBmb3IgZWFjaCBjb3B5IG9mIGpRdWVyeSBvbiB0aGUgcGFnZVxuICAgICAgICBleHBhbmRvOiBcImpRdWVyeVwiICsgKHZlcnNpb24gKyBNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZywgXCJcIiksXG4gICAgICAgIC8vIEFzc3VtZSBqUXVlcnkgaXMgcmVhZHkgd2l0aG91dCB0aGUgcmVhZHkgbW9kdWxlXG4gICAgICAgIGlzUmVhZHk6IHRydWUsXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcihtc2cpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgICAgfSxcbiAgICAgICAgbm9vcDogZnVuY3Rpb24gbm9vcCgpIHt9LFxuICAgICAgICBpc1BsYWluT2JqZWN0OiBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgICAgICAgIHZhciBwcm90bywgQ3RvcjsgLy8gRGV0ZWN0IG9idmlvdXMgbmVnYXRpdmVzXG4gICAgICAgICAgLy8gVXNlIHRvU3RyaW5nIGluc3RlYWQgb2YgalF1ZXJ5LnR5cGUgdG8gY2F0Y2ggaG9zdCBvYmplY3RzXG5cbiAgICAgICAgICBpZiAoIW9iaiB8fCB0b1N0cmluZy5jYWxsKG9iaikgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcm90byA9IGdldFByb3RvKG9iaik7IC8vIE9iamVjdHMgd2l0aCBubyBwcm90b3R5cGUgKGUuZy4sIGBPYmplY3QuY3JlYXRlKCBudWxsIClgKSBhcmUgcGxhaW5cblxuICAgICAgICAgIGlmICghcHJvdG8pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gLy8gT2JqZWN0cyB3aXRoIHByb3RvdHlwZSBhcmUgcGxhaW4gaWZmIHRoZXkgd2VyZSBjb25zdHJ1Y3RlZCBieSBhIGdsb2JhbCBPYmplY3QgZnVuY3Rpb25cblxuXG4gICAgICAgICAgQ3RvciA9IGhhc093bi5jYWxsKHByb3RvLCBcImNvbnN0cnVjdG9yXCIpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmIGZuVG9TdHJpbmcuY2FsbChDdG9yKSA9PT0gT2JqZWN0RnVuY3Rpb25TdHJpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIGlzRW1wdHlPYmplY3Q6IGZ1bmN0aW9uIGlzRW1wdHlPYmplY3Qob2JqKSB7XG4gICAgICAgICAgdmFyIG5hbWU7XG5cbiAgICAgICAgICBmb3IgKG5hbWUgaW4gb2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEV2YWx1YXRlcyBhIHNjcmlwdCBpbiBhIGdsb2JhbCBjb250ZXh0XG4gICAgICAgIGdsb2JhbEV2YWw6IGZ1bmN0aW9uIGdsb2JhbEV2YWwoY29kZSwgb3B0aW9ucykge1xuICAgICAgICAgIERPTUV2YWwoY29kZSwge1xuICAgICAgICAgICAgbm9uY2U6IG9wdGlvbnMgJiYgb3B0aW9ucy5ub25jZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlYWNoOiBmdW5jdGlvbiBlYWNoKG9iaiwgY2FsbGJhY2spIHtcbiAgICAgICAgICB2YXIgbGVuZ3RoLFxuICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgIGlmIChpc0FycmF5TGlrZShvYmopKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBvYmoubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuICAgICAgICB0cmltOiBmdW5jdGlvbiB0cmltKHRleHQpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dCA9PSBudWxsID8gXCJcIiA6ICh0ZXh0ICsgXCJcIikucmVwbGFjZShydHJpbSwgXCJcIik7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHJlc3VsdHMgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcbiAgICAgICAgbWFrZUFycmF5OiBmdW5jdGlvbiBtYWtlQXJyYXkoYXJyLCByZXN1bHRzKSB7XG4gICAgICAgICAgdmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cbiAgICAgICAgICBpZiAoYXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5TGlrZShPYmplY3QoYXJyKSkpIHtcbiAgICAgICAgICAgICAgalF1ZXJ5Lm1lcmdlKHJldCwgdHlwZW9mIGFyciA9PT0gXCJzdHJpbmdcIiA/IFthcnJdIDogYXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHB1c2guY2FsbChyZXQsIGFycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcbiAgICAgICAgaW5BcnJheTogZnVuY3Rpb24gaW5BcnJheShlbGVtLCBhcnIsIGkpIHtcbiAgICAgICAgICByZXR1cm4gYXJyID09IG51bGwgPyAtMSA6IGluZGV4T2YuY2FsbChhcnIsIGVsZW0sIGkpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcbiAgICAgICAgLy8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuICAgICAgICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoZmlyc3QsIHNlY29uZCkge1xuICAgICAgICAgIHZhciBsZW4gPSArc2Vjb25kLmxlbmd0aCxcbiAgICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICAgIGkgPSBmaXJzdC5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBmaXJzdFtpKytdID0gc2Vjb25kW2pdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpcnN0Lmxlbmd0aCA9IGk7XG4gICAgICAgICAgcmV0dXJuIGZpcnN0O1xuICAgICAgICB9LFxuICAgICAgICBncmVwOiBmdW5jdGlvbiBncmVwKGVsZW1zLCBjYWxsYmFjaywgaW52ZXJ0KSB7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrSW52ZXJzZSxcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IFtdLFxuICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgbGVuZ3RoID0gZWxlbXMubGVuZ3RoLFxuICAgICAgICAgICAgICBjYWxsYmFja0V4cGVjdCA9ICFpbnZlcnQ7IC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCBvbmx5IHNhdmluZyB0aGUgaXRlbXNcbiAgICAgICAgICAvLyB0aGF0IHBhc3MgdGhlIHZhbGlkYXRvciBmdW5jdGlvblxuXG4gICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2FsbGJhY2tJbnZlcnNlID0gIWNhbGxiYWNrKGVsZW1zW2ldLCBpKTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrSW52ZXJzZSAhPT0gY2FsbGJhY2tFeHBlY3QpIHtcbiAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGVsZW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYXJnIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG4gICAgICAgIG1hcDogZnVuY3Rpb24gbWFwKGVsZW1zLCBjYWxsYmFjaywgYXJnKSB7XG4gICAgICAgICAgdmFyIGxlbmd0aCxcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICByZXQgPSBbXTsgLy8gR28gdGhyb3VnaCB0aGUgYXJyYXksIHRyYW5zbGF0aW5nIGVhY2ggb2YgdGhlIGl0ZW1zIHRvIHRoZWlyIG5ldyB2YWx1ZXNcblxuICAgICAgICAgIGlmIChpc0FycmF5TGlrZShlbGVtcykpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKGVsZW1zW2ldLCBpLCBhcmcpO1xuXG4gICAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIEdvIHRocm91Z2ggZXZlcnkga2V5IG9uIHRoZSBvYmplY3QsXG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpIGluIGVsZW1zKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gY2FsbGJhY2soZWxlbXNbaV0sIGksIGFyZyk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblxuXG4gICAgICAgICAgcmV0dXJuIGNvbmNhdC5hcHBseShbXSwgcmV0KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gQSBnbG9iYWwgR1VJRCBjb3VudGVyIGZvciBvYmplY3RzXG4gICAgICAgIGd1aWQ6IDEsXG4gICAgICAgIC8vIGpRdWVyeS5zdXBwb3J0IGlzIG5vdCB1c2VkIGluIENvcmUgYnV0IG90aGVyIHByb2plY3RzIGF0dGFjaCB0aGVpclxuICAgICAgICAvLyBwcm9wZXJ0aWVzIHRvIGl0IHNvIGl0IG5lZWRzIHRvIGV4aXN0LlxuICAgICAgICBzdXBwb3J0OiBzdXBwb3J0XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBqUXVlcnkuZm5bU3ltYm9sLml0ZXJhdG9yXSA9IGFycltTeW1ib2wuaXRlcmF0b3JdO1xuICAgICAgfSAvLyBQb3B1bGF0ZSB0aGUgY2xhc3MydHlwZSBtYXBcblxuXG4gICAgICBqUXVlcnkuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLCBmdW5jdGlvbiAoaSwgbmFtZSkge1xuICAgICAgICBjbGFzczJ0eXBlW1wiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIl0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gaXNBcnJheUxpa2Uob2JqKSB7XG4gICAgICAgIC8vIFN1cHBvcnQ6IHJlYWwgaU9TIDguMiBvbmx5IChub3QgcmVwcm9kdWNpYmxlIGluIHNpbXVsYXRvcilcbiAgICAgICAgLy8gYGluYCBjaGVjayB1c2VkIHRvIHByZXZlbnQgSklUIGVycm9yIChnaC0yMTQ1KVxuICAgICAgICAvLyBoYXNPd24gaXNuJ3QgdXNlZCBoZXJlIGR1ZSB0byBmYWxzZSBuZWdhdGl2ZXNcbiAgICAgICAgLy8gcmVnYXJkaW5nIE5vZGVsaXN0IGxlbmd0aCBpbiBJRVxuICAgICAgICB2YXIgbGVuZ3RoID0gISFvYmogJiYgXCJsZW5ndGhcIiBpbiBvYmogJiYgb2JqLmxlbmd0aCxcbiAgICAgICAgICAgIHR5cGUgPSB0b1R5cGUob2JqKTtcblxuICAgICAgICBpZiAoaXNGdW5jdGlvbihvYmopIHx8IGlzV2luZG93KG9iaikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fCB0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgbGVuZ3RoIC0gMSBpbiBvYmo7XG4gICAgICB9XG5cbiAgICAgIHZhciBTaXp6bGUgPVxuICAgICAgLyohXG4gICAgICAgKiBTaXp6bGUgQ1NTIFNlbGVjdG9yIEVuZ2luZSB2Mi4zLjRcbiAgICAgICAqIGh0dHBzOi8vc2l6emxlanMuY29tL1xuICAgICAgICpcbiAgICAgICAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAgICAgICAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICAgICAgICogaHR0cHM6Ly9qcy5mb3VuZGF0aW9uL1xuICAgICAgICpcbiAgICAgICAqIERhdGU6IDIwMTktMDQtMDhcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gKHdpbmRvdykge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIHN1cHBvcnQsXG4gICAgICAgICAgICBFeHByLFxuICAgICAgICAgICAgZ2V0VGV4dCxcbiAgICAgICAgICAgIGlzWE1MLFxuICAgICAgICAgICAgdG9rZW5pemUsXG4gICAgICAgICAgICBjb21waWxlLFxuICAgICAgICAgICAgc2VsZWN0LFxuICAgICAgICAgICAgb3V0ZXJtb3N0Q29udGV4dCxcbiAgICAgICAgICAgIHNvcnRJbnB1dCxcbiAgICAgICAgICAgIGhhc0R1cGxpY2F0ZSxcbiAgICAgICAgICAgIC8vIExvY2FsIGRvY3VtZW50IHZhcnNcbiAgICAgICAgc2V0RG9jdW1lbnQsXG4gICAgICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgICAgIGRvY0VsZW0sXG4gICAgICAgICAgICBkb2N1bWVudElzSFRNTCxcbiAgICAgICAgICAgIHJidWdneVFTQSxcbiAgICAgICAgICAgIHJidWdneU1hdGNoZXMsXG4gICAgICAgICAgICBtYXRjaGVzLFxuICAgICAgICAgICAgY29udGFpbnMsXG4gICAgICAgICAgICAvLyBJbnN0YW5jZS1zcGVjaWZpYyBkYXRhXG4gICAgICAgIGV4cGFuZG8gPSBcInNpenpsZVwiICsgMSAqIG5ldyBEYXRlKCksXG4gICAgICAgICAgICBwcmVmZXJyZWREb2MgPSB3aW5kb3cuZG9jdW1lbnQsXG4gICAgICAgICAgICBkaXJydW5zID0gMCxcbiAgICAgICAgICAgIGRvbmUgPSAwLFxuICAgICAgICAgICAgY2xhc3NDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG4gICAgICAgICAgICB0b2tlbkNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcbiAgICAgICAgICAgIGNvbXBpbGVyQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuICAgICAgICAgICAgbm9ubmF0aXZlU2VsZWN0b3JDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG4gICAgICAgICAgICBzb3J0T3JkZXIgPSBmdW5jdGlvbiBzb3J0T3JkZXIoYSwgYikge1xuICAgICAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgICAgICBoYXNEdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICAgICAgLy8gSW5zdGFuY2UgbWV0aG9kc1xuICAgICAgICBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgICAgIGFyciA9IFtdLFxuICAgICAgICAgICAgcG9wID0gYXJyLnBvcCxcbiAgICAgICAgICAgIHB1c2hfbmF0aXZlID0gYXJyLnB1c2gsXG4gICAgICAgICAgICBwdXNoID0gYXJyLnB1c2gsXG4gICAgICAgICAgICBzbGljZSA9IGFyci5zbGljZSxcbiAgICAgICAgICAgIC8vIFVzZSBhIHN0cmlwcGVkLWRvd24gaW5kZXhPZiBhcyBpdCdzIGZhc3RlciB0aGFuIG5hdGl2ZVxuICAgICAgICAvLyBodHRwczovL2pzcGVyZi5jb20vdGhvci1pbmRleG9mLXZzLWZvci81XG4gICAgICAgIGluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKGxpc3QsIGVsZW0pIHtcbiAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgIGxlbiA9IGxpc3QubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGVsZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuICAgICAgICAgICAgYm9vbGVhbnMgPSBcImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsXG4gICAgICAgICAgICAvLyBSZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc2VsZWN0b3JzLyN3aGl0ZXNwYWNlXG4gICAgICAgIHdoaXRlc3BhY2UgPSBcIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsXG4gICAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjdmFsdWUtZGVmLWlkZW50aWZpZXJcbiAgICAgICAgaWRlbnRpZmllciA9IFwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixcbiAgICAgICAgICAgIC8vIEF0dHJpYnV0ZSBzZWxlY3RvcnM6IGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jYXR0cmlidXRlLXNlbGVjdG9yc1xuICAgICAgICBhdHRyaWJ1dGVzID0gXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKihcIiArIGlkZW50aWZpZXIgKyBcIikoPzpcIiArIHdoaXRlc3BhY2UgKyAvLyBPcGVyYXRvciAoY2FwdHVyZSAyKVxuICAgICAgICBcIiooWypeJHwhfl0/PSlcIiArIHdoaXRlc3BhY2UgKyAvLyBcIkF0dHJpYnV0ZSB2YWx1ZXMgbXVzdCBiZSBDU1MgaWRlbnRpZmllcnMgW2NhcHR1cmUgNV0gb3Igc3RyaW5ncyBbY2FwdHVyZSAzIG9yIGNhcHR1cmUgNF1cIlxuICAgICAgICBcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiICsgaWRlbnRpZmllciArIFwiKSl8KVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFxdXCIsXG4gICAgICAgICAgICBwc2V1ZG9zID0gXCI6KFwiICsgaWRlbnRpZmllciArIFwiKSg/OlxcXFwoKFwiICsgLy8gVG8gcmVkdWNlIHRoZSBudW1iZXIgb2Ygc2VsZWN0b3JzIG5lZWRpbmcgdG9rZW5pemUgaW4gdGhlIHByZUZpbHRlciwgcHJlZmVyIGFyZ3VtZW50czpcbiAgICAgICAgLy8gMS4gcXVvdGVkIChjYXB0dXJlIDM7IGNhcHR1cmUgNCBvciBjYXB0dXJlIDUpXG4gICAgICAgIFwiKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8XCIgKyAvLyAyLiBzaW1wbGUgKGNhcHR1cmUgNilcbiAgICAgICAgXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIgKyBhdHRyaWJ1dGVzICsgXCIpKil8XCIgKyAvLyAzLiBhbnl0aGluZyBlbHNlIChjYXB0dXJlIDIpXG4gICAgICAgIFwiLipcIiArIFwiKVxcXFwpfClcIixcbiAgICAgICAgICAgIC8vIExlYWRpbmcgYW5kIG5vbi1lc2NhcGVkIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGNhcHR1cmluZyBzb21lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgcHJlY2VkaW5nIHRoZSBsYXR0ZXJcbiAgICAgICAgcndoaXRlc3BhY2UgPSBuZXcgUmVnRXhwKHdoaXRlc3BhY2UgKyBcIitcIiwgXCJnXCIpLFxuICAgICAgICAgICAgcnRyaW0gPSBuZXcgUmVnRXhwKFwiXlwiICsgd2hpdGVzcGFjZSArIFwiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIiArIHdoaXRlc3BhY2UgKyBcIiskXCIsIFwiZ1wiKSxcbiAgICAgICAgICAgIHJjb21tYSA9IG5ldyBSZWdFeHAoXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqLFwiICsgd2hpdGVzcGFjZSArIFwiKlwiKSxcbiAgICAgICAgICAgIHJjb21iaW5hdG9ycyA9IG5ldyBSZWdFeHAoXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFs+K35dfFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgd2hpdGVzcGFjZSArIFwiKlwiKSxcbiAgICAgICAgICAgIHJkZXNjZW5kID0gbmV3IFJlZ0V4cCh3aGl0ZXNwYWNlICsgXCJ8PlwiKSxcbiAgICAgICAgICAgIHJwc2V1ZG8gPSBuZXcgUmVnRXhwKHBzZXVkb3MpLFxuICAgICAgICAgICAgcmlkZW50aWZpZXIgPSBuZXcgUmVnRXhwKFwiXlwiICsgaWRlbnRpZmllciArIFwiJFwiKSxcbiAgICAgICAgICAgIG1hdGNoRXhwciA9IHtcbiAgICAgICAgICBcIklEXCI6IG5ldyBSZWdFeHAoXCJeIyhcIiArIGlkZW50aWZpZXIgKyBcIilcIiksXG4gICAgICAgICAgXCJDTEFTU1wiOiBuZXcgUmVnRXhwKFwiXlxcXFwuKFwiICsgaWRlbnRpZmllciArIFwiKVwiKSxcbiAgICAgICAgICBcIlRBR1wiOiBuZXcgUmVnRXhwKFwiXihcIiArIGlkZW50aWZpZXIgKyBcInxbKl0pXCIpLFxuICAgICAgICAgIFwiQVRUUlwiOiBuZXcgUmVnRXhwKFwiXlwiICsgYXR0cmlidXRlcyksXG4gICAgICAgICAgXCJQU0VVRE9cIjogbmV3IFJlZ0V4cChcIl5cIiArIHBzZXVkb3MpLFxuICAgICAgICAgIFwiQ0hJTERcIjogbmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIgKyB3aGl0ZXNwYWNlICsgXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIiArIHdoaXRlc3BhY2UgKyBcIiooPzooWystXXwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFxcXFxkKyl8KSlcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcKXwpXCIsIFwiaVwiKSxcbiAgICAgICAgICBcImJvb2xcIjogbmV3IFJlZ0V4cChcIl4oPzpcIiArIGJvb2xlYW5zICsgXCIpJFwiLCBcImlcIiksXG4gICAgICAgICAgLy8gRm9yIHVzZSBpbiBsaWJyYXJpZXMgaW1wbGVtZW50aW5nIC5pcygpXG4gICAgICAgICAgLy8gV2UgdXNlIHRoaXMgZm9yIFBPUyBtYXRjaGluZyBpbiBgc2VsZWN0YFxuICAgICAgICAgIFwibmVlZHNDb250ZXh0XCI6IG5ldyBSZWdFeHAoXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiICsgd2hpdGVzcGFjZSArIFwiKigoPzotXFxcXGQpP1xcXFxkKilcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcKXwpKD89W14tXXwkKVwiLCBcImlcIilcbiAgICAgICAgfSxcbiAgICAgICAgICAgIHJodG1sID0gL0hUTUwkL2ksXG4gICAgICAgICAgICByaW5wdXRzID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcbiAgICAgICAgICAgIHJoZWFkZXIgPSAvXmhcXGQkL2ksXG4gICAgICAgICAgICBybmF0aXZlID0gL15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxcbiAgICAgICAgICAgIC8vIEVhc2lseS1wYXJzZWFibGUvcmV0cmlldmFibGUgSUQgb3IgVEFHIG9yIENMQVNTIHNlbGVjdG9yc1xuICAgICAgICBycXVpY2tFeHByID0gL14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXG4gICAgICAgICAgICByc2libGluZyA9IC9bK35dLyxcbiAgICAgICAgICAgIC8vIENTUyBlc2NhcGVzXG4gICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCNlc2NhcGVkLWNoYXJhY3RlcnNcbiAgICAgICAgcnVuZXNjYXBlID0gbmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiICsgd2hpdGVzcGFjZSArIFwiP3woXCIgKyB3aGl0ZXNwYWNlICsgXCIpfC4pXCIsIFwiaWdcIiksXG4gICAgICAgICAgICBmdW5lc2NhcGUgPSBmdW5jdGlvbiBmdW5lc2NhcGUoXywgZXNjYXBlZCwgZXNjYXBlZFdoaXRlc3BhY2UpIHtcbiAgICAgICAgICB2YXIgaGlnaCA9IFwiMHhcIiArIGVzY2FwZWQgLSAweDEwMDAwOyAvLyBOYU4gbWVhbnMgbm9uLWNvZGVwb2ludFxuICAgICAgICAgIC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjRcbiAgICAgICAgICAvLyBXb3JrYXJvdW5kIGVycm9uZW91cyBudW1lcmljIGludGVycHJldGF0aW9uIG9mICtcIjB4XCJcblxuICAgICAgICAgIHJldHVybiBoaWdoICE9PSBoaWdoIHx8IGVzY2FwZWRXaGl0ZXNwYWNlID8gZXNjYXBlZCA6IGhpZ2ggPCAwID8gLy8gQk1QIGNvZGVwb2ludFxuICAgICAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoaGlnaCArIDB4MTAwMDApIDogLy8gU3VwcGxlbWVudGFsIFBsYW5lIGNvZGVwb2ludCAoc3Vycm9nYXRlIHBhaXIpXG4gICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShoaWdoID4+IDEwIHwgMHhEODAwLCBoaWdoICYgMHgzRkYgfCAweERDMDApO1xuICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQ1NTIHN0cmluZy9pZGVudGlmaWVyIHNlcmlhbGl6YXRpb25cbiAgICAgICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNjb21tb24tc2VyaWFsaXppbmctaWRpb21zXG4gICAgICAgIHJjc3Nlc2NhcGUgPSAvKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxcbiAgICAgICAgICAgIGZjc3Nlc2NhcGUgPSBmdW5jdGlvbiBmY3NzZXNjYXBlKGNoLCBhc0NvZGVQb2ludCkge1xuICAgICAgICAgIGlmIChhc0NvZGVQb2ludCkge1xuICAgICAgICAgICAgLy8gVSswMDAwIE5VTEwgYmVjb21lcyBVK0ZGRkQgUkVQTEFDRU1FTlQgQ0hBUkFDVEVSXG4gICAgICAgICAgICBpZiAoY2ggPT09IFwiXFwwXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiXFx1RkZGRFwiO1xuICAgICAgICAgICAgfSAvLyBDb250cm9sIGNoYXJhY3RlcnMgYW5kIChkZXBlbmRlbnQgdXBvbiBwb3NpdGlvbikgbnVtYmVycyBnZXQgZXNjYXBlZCBhcyBjb2RlIHBvaW50c1xuXG5cbiAgICAgICAgICAgIHJldHVybiBjaC5zbGljZSgwLCAtMSkgKyBcIlxcXFxcIiArIGNoLmNoYXJDb2RlQXQoY2gubGVuZ3RoIC0gMSkudG9TdHJpbmcoMTYpICsgXCIgXCI7XG4gICAgICAgICAgfSAvLyBPdGhlciBwb3RlbnRpYWxseS1zcGVjaWFsIEFTQ0lJIGNoYXJhY3RlcnMgZ2V0IGJhY2tzbGFzaC1lc2NhcGVkXG5cblxuICAgICAgICAgIHJldHVybiBcIlxcXFxcIiArIGNoO1xuICAgICAgICB9LFxuICAgICAgICAgICAgLy8gVXNlZCBmb3IgaWZyYW1lc1xuICAgICAgICAvLyBTZWUgc2V0RG9jdW1lbnQoKVxuICAgICAgICAvLyBSZW1vdmluZyB0aGUgZnVuY3Rpb24gd3JhcHBlciBjYXVzZXMgYSBcIlBlcm1pc3Npb24gRGVuaWVkXCJcbiAgICAgICAgLy8gZXJyb3IgaW4gSUVcbiAgICAgICAgdW5sb2FkSGFuZGxlciA9IGZ1bmN0aW9uIHVubG9hZEhhbmRsZXIoKSB7XG4gICAgICAgICAgc2V0RG9jdW1lbnQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGluRGlzYWJsZWRGaWVsZHNldCA9IGFkZENvbWJpbmF0b3IoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiZmllbGRzZXRcIjtcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRpcjogXCJwYXJlbnROb2RlXCIsXG4gICAgICAgICAgbmV4dDogXCJsZWdlbmRcIlxuICAgICAgICB9KTsgLy8gT3B0aW1pemUgZm9yIHB1c2guYXBwbHkoIF8sIE5vZGVMaXN0IClcblxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcHVzaC5hcHBseShhcnIgPSBzbGljZS5jYWxsKHByZWZlcnJlZERvYy5jaGlsZE5vZGVzKSwgcHJlZmVycmVkRG9jLmNoaWxkTm9kZXMpOyAvLyBTdXBwb3J0OiBBbmRyb2lkPDQuMFxuICAgICAgICAgIC8vIERldGVjdCBzaWxlbnRseSBmYWlsaW5nIHB1c2guYXBwbHlcblxuICAgICAgICAgIGFycltwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcHVzaCA9IHtcbiAgICAgICAgICAgIGFwcGx5OiBhcnIubGVuZ3RoID8gLy8gTGV2ZXJhZ2Ugc2xpY2UgaWYgcG9zc2libGVcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0YXJnZXQsIGVscykge1xuICAgICAgICAgICAgICBwdXNoX25hdGl2ZS5hcHBseSh0YXJnZXQsIHNsaWNlLmNhbGwoZWxzKSk7XG4gICAgICAgICAgICB9IDogLy8gU3VwcG9ydDogSUU8OVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFwcGVuZCBkaXJlY3RseVxuICAgICAgICAgICAgZnVuY3Rpb24gKHRhcmdldCwgZWxzKSB7XG4gICAgICAgICAgICAgIHZhciBqID0gdGFyZ2V0Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgIGkgPSAwOyAvLyBDYW4ndCB0cnVzdCBOb2RlTGlzdC5sZW5ndGhcblxuICAgICAgICAgICAgICB3aGlsZSAodGFyZ2V0W2orK10gPSBlbHNbaSsrXSkge31cblxuICAgICAgICAgICAgICB0YXJnZXQubGVuZ3RoID0gaiAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIFNpenpsZShzZWxlY3RvciwgY29udGV4dCwgcmVzdWx0cywgc2VlZCkge1xuICAgICAgICAgIHZhciBtLFxuICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICBlbGVtLFxuICAgICAgICAgICAgICBuaWQsXG4gICAgICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgICAgICBncm91cHMsXG4gICAgICAgICAgICAgIG5ld1NlbGVjdG9yLFxuICAgICAgICAgICAgICBuZXdDb250ZXh0ID0gY29udGV4dCAmJiBjb250ZXh0Lm93bmVyRG9jdW1lbnQsXG4gICAgICAgICAgICAgIC8vIG5vZGVUeXBlIGRlZmF1bHRzIHRvIDksIHNpbmNlIGNvbnRleHQgZGVmYXVsdHMgdG8gZG9jdW1lbnRcbiAgICAgICAgICBub2RlVHlwZSA9IGNvbnRleHQgPyBjb250ZXh0Lm5vZGVUeXBlIDogOTtcbiAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cyB8fCBbXTsgLy8gUmV0dXJuIGVhcmx5IGZyb20gY2FsbHMgd2l0aCBpbnZhbGlkIHNlbGVjdG9yIG9yIGNvbnRleHRcblxuICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgfHwgIXNlbGVjdG9yIHx8IG5vZGVUeXBlICE9PSAxICYmIG5vZGVUeXBlICE9PSA5ICYmIG5vZGVUeXBlICE9PSAxMSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgfSAvLyBUcnkgdG8gc2hvcnRjdXQgZmluZCBvcGVyYXRpb25zIChhcyBvcHBvc2VkIHRvIGZpbHRlcnMpIGluIEhUTUwgZG9jdW1lbnRzXG5cblxuICAgICAgICAgIGlmICghc2VlZCkge1xuICAgICAgICAgICAgaWYgKChjb250ZXh0ID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBwcmVmZXJyZWREb2MpICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgICBzZXREb2N1bWVudChjb250ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudElzSFRNTCkge1xuICAgICAgICAgICAgICAvLyBJZiB0aGUgc2VsZWN0b3IgaXMgc3VmZmljaWVudGx5IHNpbXBsZSwgdHJ5IHVzaW5nIGEgXCJnZXQqQnkqXCIgRE9NIG1ldGhvZFxuICAgICAgICAgICAgICAvLyAoZXhjZXB0aW5nIERvY3VtZW50RnJhZ21lbnQgY29udGV4dCwgd2hlcmUgdGhlIG1ldGhvZHMgZG9uJ3QgZXhpc3QpXG4gICAgICAgICAgICAgIGlmIChub2RlVHlwZSAhPT0gMTEgJiYgKG1hdGNoID0gcnF1aWNrRXhwci5leGVjKHNlbGVjdG9yKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBJRCBzZWxlY3RvclxuICAgICAgICAgICAgICAgIGlmIChtID0gbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgICAgIC8vIERvY3VtZW50IGNvbnRleHRcbiAgICAgICAgICAgICAgICAgIGlmIChub2RlVHlwZSA9PT0gOSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQobSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSwgT3BlcmEsIFdlYmtpdFxuICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGlkZW50aWZ5IHZlcnNpb25zXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmlkID09PSBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgIH0gLy8gRWxlbWVudCBjb250ZXh0XG5cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGlkZW50aWZ5IHZlcnNpb25zXG4gICAgICAgICAgICAgICAgICAgIC8vIGdldEVsZW1lbnRCeUlkIGNhbiBtYXRjaCBlbGVtZW50cyBieSBuYW1lIGluc3RlYWQgb2YgSURcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0NvbnRleHQgJiYgKGVsZW0gPSBuZXdDb250ZXh0LmdldEVsZW1lbnRCeUlkKG0pKSAmJiBjb250YWlucyhjb250ZXh0LCBlbGVtKSAmJiBlbGVtLmlkID09PSBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IC8vIFR5cGUgc2VsZWN0b3JcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2hbMl0pIHtcbiAgICAgICAgICAgICAgICAgIHB1c2guYXBwbHkocmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcikpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7IC8vIENsYXNzIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgobSA9IG1hdGNoWzNdKSAmJiBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiYgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICBwdXNoLmFwcGx5KHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShtKSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gLy8gVGFrZSBhZHZhbnRhZ2Ugb2YgcXVlcnlTZWxlY3RvckFsbFxuXG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvcnQucXNhICYmICFub25uYXRpdmVTZWxlY3RvckNhY2hlW3NlbGVjdG9yICsgXCIgXCJdICYmICghcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdChzZWxlY3RvcikpICYmICggLy8gU3VwcG9ydDogSUUgOCBvbmx5XG4gICAgICAgICAgICAgIC8vIEV4Y2x1ZGUgb2JqZWN0IGVsZW1lbnRzXG4gICAgICAgICAgICAgIG5vZGVUeXBlICE9PSAxIHx8IGNvbnRleHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgIG5ld0NvbnRleHQgPSBjb250ZXh0OyAvLyBxU0EgY29uc2lkZXJzIGVsZW1lbnRzIG91dHNpZGUgYSBzY29waW5nIHJvb3Qgd2hlbiBldmFsdWF0aW5nIGNoaWxkIG9yXG4gICAgICAgICAgICAgICAgLy8gZGVzY2VuZGFudCBjb21iaW5hdG9ycywgd2hpY2ggaXMgbm90IHdoYXQgd2Ugd2FudC5cbiAgICAgICAgICAgICAgICAvLyBJbiBzdWNoIGNhc2VzLCB3ZSB3b3JrIGFyb3VuZCB0aGUgYmVoYXZpb3IgYnkgcHJlZml4aW5nIGV2ZXJ5IHNlbGVjdG9yIGluIHRoZVxuICAgICAgICAgICAgICAgIC8vIGxpc3Qgd2l0aCBhbiBJRCBzZWxlY3RvciByZWZlcmVuY2luZyB0aGUgc2NvcGUgY29udGV4dC5cbiAgICAgICAgICAgICAgICAvLyBUaGFua3MgdG8gQW5kcmV3IER1cG9udCBmb3IgdGhpcyB0ZWNobmlxdWUuXG5cbiAgICAgICAgICAgICAgICBpZiAobm9kZVR5cGUgPT09IDEgJiYgcmRlc2NlbmQudGVzdChzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICAgIC8vIENhcHR1cmUgdGhlIGNvbnRleHQgSUQsIHNldHRpbmcgaXQgZmlyc3QgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgICBpZiAobmlkID0gY29udGV4dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBuaWQgPSBuaWQucmVwbGFjZShyY3NzZXNjYXBlLCBmY3NzZXNjYXBlKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgbmlkID0gZXhwYW5kbyk7XG4gICAgICAgICAgICAgICAgICB9IC8vIFByZWZpeCBldmVyeSBzZWxlY3RvciBpbiB0aGUgbGlzdFxuXG5cbiAgICAgICAgICAgICAgICAgIGdyb3VwcyA9IHRva2VuaXplKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgIGkgPSBncm91cHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwc1tpXSA9IFwiI1wiICsgbmlkICsgXCIgXCIgKyB0b1NlbGVjdG9yKGdyb3Vwc1tpXSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIG5ld1NlbGVjdG9yID0gZ3JvdXBzLmpvaW4oXCIsXCIpOyAvLyBFeHBhbmQgY29udGV4dCBmb3Igc2libGluZyBzZWxlY3RvcnNcblxuICAgICAgICAgICAgICAgICAgbmV3Q29udGV4dCA9IHJzaWJsaW5nLnRlc3Qoc2VsZWN0b3IpICYmIHRlc3RDb250ZXh0KGNvbnRleHQucGFyZW50Tm9kZSkgfHwgY29udGV4dDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgcHVzaC5hcHBseShyZXN1bHRzLCBuZXdDb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwobmV3U2VsZWN0b3IpKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHFzYUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBub25uYXRpdmVTZWxlY3RvckNhY2hlKHNlbGVjdG9yLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5pZCA9PT0gZXhwYW5kbykge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gQWxsIG90aGVyc1xuXG5cbiAgICAgICAgICByZXR1cm4gc2VsZWN0KHNlbGVjdG9yLnJlcGxhY2UocnRyaW0sIFwiJDFcIiksIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGUga2V5LXZhbHVlIGNhY2hlcyBvZiBsaW1pdGVkIHNpemVcbiAgICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKHN0cmluZywgb2JqZWN0KX0gUmV0dXJucyB0aGUgT2JqZWN0IGRhdGEgYWZ0ZXIgc3RvcmluZyBpdCBvbiBpdHNlbGYgd2l0aFxuICAgICAgICAgKlx0cHJvcGVydHkgbmFtZSB0aGUgKHNwYWNlLXN1ZmZpeGVkKSBzdHJpbmcgYW5kIChpZiB0aGUgY2FjaGUgaXMgbGFyZ2VyIHRoYW4gRXhwci5jYWNoZUxlbmd0aClcbiAgICAgICAgICpcdGRlbGV0aW5nIHRoZSBvbGRlc3QgZW50cnlcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcbiAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgICAgZnVuY3Rpb24gY2FjaGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgLy8gVXNlIChrZXkgKyBcIiBcIikgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggbmF0aXZlIHByb3RvdHlwZSBwcm9wZXJ0aWVzIChzZWUgSXNzdWUgIzE1NylcbiAgICAgICAgICAgIGlmIChrZXlzLnB1c2goa2V5ICsgXCIgXCIpID4gRXhwci5jYWNoZUxlbmd0aCkge1xuICAgICAgICAgICAgICAvLyBPbmx5IGtlZXAgdGhlIG1vc3QgcmVjZW50IGVudHJpZXNcbiAgICAgICAgICAgICAgZGVsZXRlIGNhY2hlW2tleXMuc2hpZnQoKV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtrZXkgKyBcIiBcIl0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcmsgYSBmdW5jdGlvbiBmb3Igc3BlY2lhbCB1c2UgYnkgU2l6emxlXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtYXJrXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gbWFya0Z1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgZm5bZXhwYW5kb10gPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmbjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3VwcG9ydCB0ZXN0aW5nIHVzaW5nIGFuIGVsZW1lbnRcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGFzc2VkIHRoZSBjcmVhdGVkIGVsZW1lbnQgYW5kIHJldHVybnMgYSBib29sZWFuIHJlc3VsdFxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIGFzc2VydChmbikge1xuICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gISFmbihlbCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZnJvbSBpdHMgcGFyZW50IGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIGlmIChlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICAgICAgfSAvLyByZWxlYXNlIG1lbW9yeSBpbiBJRVxuXG5cbiAgICAgICAgICAgIGVsID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgdGhlIHNhbWUgaGFuZGxlciBmb3IgYWxsIG9mIHRoZSBzcGVjaWZpZWQgYXR0cnNcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHJzIFBpcGUtc2VwYXJhdGVkIGxpc3Qgb2YgYXR0cmlidXRlc1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBtZXRob2QgdGhhdCB3aWxsIGJlIGFwcGxpZWRcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBhZGRIYW5kbGUoYXR0cnMsIGhhbmRsZXIpIHtcbiAgICAgICAgICB2YXIgYXJyID0gYXR0cnMuc3BsaXQoXCJ8XCIpLFxuICAgICAgICAgICAgICBpID0gYXJyLmxlbmd0aDtcblxuICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIEV4cHIuYXR0ckhhbmRsZVthcnJbaV1dID0gaGFuZGxlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyBkb2N1bWVudCBvcmRlciBvZiB0d28gc2libGluZ3NcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBhXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gYlxuICAgICAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBSZXR1cm5zIGxlc3MgdGhhbiAwIGlmIGEgcHJlY2VkZXMgYiwgZ3JlYXRlciB0aGFuIDAgaWYgYSBmb2xsb3dzIGJcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBzaWJsaW5nQ2hlY2soYSwgYikge1xuICAgICAgICAgIHZhciBjdXIgPSBiICYmIGEsXG4gICAgICAgICAgICAgIGRpZmYgPSBjdXIgJiYgYS5ub2RlVHlwZSA9PT0gMSAmJiBiLm5vZGVUeXBlID09PSAxICYmIGEuc291cmNlSW5kZXggLSBiLnNvdXJjZUluZGV4OyAvLyBVc2UgSUUgc291cmNlSW5kZXggaWYgYXZhaWxhYmxlIG9uIGJvdGggbm9kZXNcblxuICAgICAgICAgIGlmIChkaWZmKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlmZjtcbiAgICAgICAgICB9IC8vIENoZWNrIGlmIGIgZm9sbG93cyBhXG5cblxuICAgICAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgICAgIHdoaWxlIChjdXIgPSBjdXIubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgaWYgKGN1ciA9PT0gYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGlucHV0IHR5cGVzXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlSW5wdXRQc2V1ZG8odHlwZSkge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGJ1dHRvbnNcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b25Qc2V1ZG8odHlwZSkge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gKG5hbWUgPT09IFwiaW5wdXRcIiB8fCBuYW1lID09PSBcImJ1dHRvblwiKSAmJiBlbGVtLnR5cGUgPT09IHR5cGU7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciA6ZW5hYmxlZC86ZGlzYWJsZWRcbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSBkaXNhYmxlZCB0cnVlIGZvciA6ZGlzYWJsZWQ7IGZhbHNlIGZvciA6ZW5hYmxlZFxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZURpc2FibGVkUHNldWRvKGRpc2FibGVkKSB7XG4gICAgICAgICAgLy8gS25vd24gOmRpc2FibGVkIGZhbHNlIHBvc2l0aXZlczogZmllbGRzZXRbZGlzYWJsZWRdID4gbGVnZW5kOm50aC1vZi10eXBlKG4rMikgOmNhbi1kaXNhYmxlXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGNlcnRhaW4gZWxlbWVudHMgY2FuIG1hdGNoIDplbmFibGVkIG9yIDpkaXNhYmxlZFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZW5hYmxlZFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZGlzYWJsZWRcbiAgICAgICAgICAgIGlmIChcImZvcm1cIiBpbiBlbGVtKSB7XG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBpbmhlcml0ZWQgZGlzYWJsZWRuZXNzIG9uIHJlbGV2YW50IG5vbi1kaXNhYmxlZCBlbGVtZW50czpcbiAgICAgICAgICAgICAgLy8gKiBsaXN0ZWQgZm9ybS1hc3NvY2lhdGVkIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgZmllbGRzZXRcbiAgICAgICAgICAgICAgLy8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxpc3RlZFxuICAgICAgICAgICAgICAvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY29uY2VwdC1mZS1kaXNhYmxlZFxuICAgICAgICAgICAgICAvLyAqIG9wdGlvbiBlbGVtZW50cyBpbiBhIGRpc2FibGVkIG9wdGdyb3VwXG4gICAgICAgICAgICAgIC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LW9wdGlvbi1kaXNhYmxlZFxuICAgICAgICAgICAgICAvLyBBbGwgc3VjaCBlbGVtZW50cyBoYXZlIGEgXCJmb3JtXCIgcHJvcGVydHkuXG4gICAgICAgICAgICAgIGlmIChlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5kaXNhYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBPcHRpb24gZWxlbWVudHMgZGVmZXIgdG8gYSBwYXJlbnQgb3B0Z3JvdXAgaWYgcHJlc2VudFxuICAgICAgICAgICAgICAgIGlmIChcImxhYmVsXCIgaW4gZWxlbSkge1xuICAgICAgICAgICAgICAgICAgaWYgKFwibGFiZWxcIiBpbiBlbGVtLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ucGFyZW50Tm9kZS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBTdXBwb3J0OiBJRSA2IC0gMTFcbiAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIGlzRGlzYWJsZWQgc2hvcnRjdXQgcHJvcGVydHkgdG8gY2hlY2sgZm9yIGRpc2FibGVkIGZpZWxkc2V0IGFuY2VzdG9yc1xuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5pc0Rpc2FibGVkID09PSBkaXNhYmxlZCB8fCAvLyBXaGVyZSB0aGVyZSBpcyBubyBpc0Rpc2FibGVkLCBjaGVjayBtYW51YWxseVxuXG4gICAgICAgICAgICAgICAgLyoganNoaW50IC1XMDE4ICovXG4gICAgICAgICAgICAgICAgZWxlbS5pc0Rpc2FibGVkICE9PSAhZGlzYWJsZWQgJiYgaW5EaXNhYmxlZEZpZWxkc2V0KGVsZW0pID09PSBkaXNhYmxlZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBlbGVtLmRpc2FibGVkID09PSBkaXNhYmxlZDsgLy8gVHJ5IHRvIHdpbm5vdyBvdXQgZWxlbWVudHMgdGhhdCBjYW4ndCBiZSBkaXNhYmxlZCBiZWZvcmUgdHJ1c3RpbmcgdGhlIGRpc2FibGVkIHByb3BlcnR5LlxuICAgICAgICAgICAgICAvLyBTb21lIHZpY3RpbXMgZ2V0IGNhdWdodCBpbiBvdXIgbmV0IChsYWJlbCwgbGVnZW5kLCBtZW51LCB0cmFjayksIGJ1dCBpdCBzaG91bGRuJ3RcbiAgICAgICAgICAgICAgLy8gZXZlbiBleGlzdCBvbiB0aGVtLCBsZXQgYWxvbmUgaGF2ZSBhIGJvb2xlYW4gdmFsdWUuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFwibGFiZWxcIiBpbiBlbGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbGVtLmRpc2FibGVkID09PSBkaXNhYmxlZDtcbiAgICAgICAgICAgIH0gLy8gUmVtYWluaW5nIGVsZW1lbnRzIGFyZSBuZWl0aGVyIDplbmFibGVkIG5vciA6ZGlzYWJsZWRcblxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBwb3NpdGlvbmFsc1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZm4pIHtcbiAgICAgICAgICByZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgICAgICAgYXJndW1lbnQgPSArYXJndW1lbnQ7XG4gICAgICAgICAgICByZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChzZWVkLCBtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHZhciBqLFxuICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleGVzID0gZm4oW10sIHNlZWQubGVuZ3RoLCBhcmd1bWVudCksXG4gICAgICAgICAgICAgICAgICBpID0gbWF0Y2hJbmRleGVzLmxlbmd0aDsgLy8gTWF0Y2ggZWxlbWVudHMgZm91bmQgYXQgdGhlIHNwZWNpZmllZCBpbmRleGVzXG5cbiAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWVkW2ogPSBtYXRjaEluZGV4ZXNbaV1dKSB7XG4gICAgICAgICAgICAgICAgICBzZWVkW2pdID0gIShtYXRjaGVzW2pdID0gc2VlZFtqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIGEgbm9kZSBmb3IgdmFsaWRpdHkgYXMgYSBTaXp6bGUgY29udGV4dFxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0PX0gY29udGV4dFxuICAgICAgICAgKiBAcmV0dXJucyB7RWxlbWVudHxPYmplY3R8Qm9vbGVhbn0gVGhlIGlucHV0IG5vZGUgaWYgYWNjZXB0YWJsZSwgb3RoZXJ3aXNlIGEgZmFsc3kgdmFsdWVcbiAgICAgICAgICovXG5cblxuICAgICAgICBmdW5jdGlvbiB0ZXN0Q29udGV4dChjb250ZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29udGV4dDtcbiAgICAgICAgfSAvLyBFeHBvc2Ugc3VwcG9ydCB2YXJzIGZvciBjb252ZW5pZW5jZVxuXG5cbiAgICAgICAgc3VwcG9ydCA9IFNpenpsZS5zdXBwb3J0ID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXRlY3RzIFhNTCBub2Rlc1xuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBlbGVtIEFuIGVsZW1lbnQgb3IgYSBkb2N1bWVudFxuICAgICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZmYgZWxlbSBpcyBhIG5vbi1IVE1MIFhNTCBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGlzWE1MID0gU2l6emxlLmlzWE1MID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gZWxlbS5uYW1lc3BhY2VVUkksXG4gICAgICAgICAgICAgIGRvY0VsZW0gPSAoZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0pLmRvY3VtZW50RWxlbWVudDsgLy8gU3VwcG9ydDogSUUgPD04XG4gICAgICAgICAgLy8gQXNzdW1lIEhUTUwgd2hlbiBkb2N1bWVudEVsZW1lbnQgZG9lc24ndCB5ZXQgZXhpc3QsIHN1Y2ggYXMgaW5zaWRlIGxvYWRpbmcgaWZyYW1lc1xuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC80ODMzXG5cbiAgICAgICAgICByZXR1cm4gIXJodG1sLnRlc3QobmFtZXNwYWNlIHx8IGRvY0VsZW0gJiYgZG9jRWxlbS5ub2RlTmFtZSB8fCBcIkhUTUxcIik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGRvY3VtZW50LXJlbGF0ZWQgdmFyaWFibGVzIG9uY2UgYmFzZWQgb24gdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gW2RvY10gQW4gZWxlbWVudCBvciBkb2N1bWVudCBvYmplY3QgdG8gdXNlIHRvIHNldCB0aGUgZG9jdW1lbnRcbiAgICAgICAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY3VycmVudCBkb2N1bWVudFxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHNldERvY3VtZW50ID0gU2l6emxlLnNldERvY3VtZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaGFzQ29tcGFyZSxcbiAgICAgICAgICAgICAgc3ViV2luZG93LFxuICAgICAgICAgICAgICBkb2MgPSBub2RlID8gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUgOiBwcmVmZXJyZWREb2M7IC8vIFJldHVybiBlYXJseSBpZiBkb2MgaXMgaW52YWxpZCBvciBhbHJlYWR5IHNlbGVjdGVkXG5cbiAgICAgICAgICBpZiAoZG9jID09PSBkb2N1bWVudCB8fCBkb2Mubm9kZVR5cGUgIT09IDkgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgICB9IC8vIFVwZGF0ZSBnbG9iYWwgdmFyaWFibGVzXG5cblxuICAgICAgICAgIGRvY3VtZW50ID0gZG9jO1xuICAgICAgICAgIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgZG9jdW1lbnRJc0hUTUwgPSAhaXNYTUwoZG9jdW1lbnQpOyAvLyBTdXBwb3J0OiBJRSA5LTExLCBFZGdlXG4gICAgICAgICAgLy8gQWNjZXNzaW5nIGlmcmFtZSBkb2N1bWVudHMgYWZ0ZXIgdW5sb2FkIHRocm93cyBcInBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3JzIChqUXVlcnkgIzEzOTM2KVxuXG4gICAgICAgICAgaWYgKHByZWZlcnJlZERvYyAhPT0gZG9jdW1lbnQgJiYgKHN1YldpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3KSAmJiBzdWJXaW5kb3cudG9wICE9PSBzdWJXaW5kb3cpIHtcbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDExLCBFZGdlXG4gICAgICAgICAgICBpZiAoc3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgc3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwgdW5sb2FkSGFuZGxlciwgZmFsc2UpOyAvLyBTdXBwb3J0OiBJRSA5IC0gMTAgb25seVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdWJXaW5kb3cuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgc3ViV2luZG93LmF0dGFjaEV2ZW50KFwib251bmxvYWRcIiwgdW5sb2FkSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIEF0dHJpYnV0ZXNcbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgICAgICAgLy8gU3VwcG9ydDogSUU8OFxuICAgICAgICAgIC8vIFZlcmlmeSB0aGF0IGdldEF0dHJpYnV0ZSByZWFsbHkgcmV0dXJucyBhdHRyaWJ1dGVzIGFuZCBub3QgcHJvcGVydGllc1xuICAgICAgICAgIC8vIChleGNlcHRpbmcgSUU4IGJvb2xlYW5zKVxuXG5cbiAgICAgICAgICBzdXBwb3J0LmF0dHJpYnV0ZXMgPSBhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBcImlcIjtcbiAgICAgICAgICAgIHJldHVybiAhZWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8qIGdldEVsZW1lbnQocylCeSpcbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpIHJldHVybnMgb25seSBlbGVtZW50c1xuXG4gICAgICAgICAgc3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJcIikpO1xuICAgICAgICAgICAgcmV0dXJuICFlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RoO1xuICAgICAgICAgIH0pOyAvLyBTdXBwb3J0OiBJRTw5XG5cbiAgICAgICAgICBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSBybmF0aXZlLnRlc3QoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSk7IC8vIFN1cHBvcnQ6IElFPDEwXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgZ2V0RWxlbWVudEJ5SWQgcmV0dXJucyBlbGVtZW50cyBieSBuYW1lXG4gICAgICAgICAgLy8gVGhlIGJyb2tlbiBnZXRFbGVtZW50QnlJZCBtZXRob2RzIGRvbid0IHBpY2sgdXAgcHJvZ3JhbW1hdGljYWxseS1zZXQgbmFtZXMsXG4gICAgICAgICAgLy8gc28gdXNlIGEgcm91bmRhYm91dCBnZXRFbGVtZW50c0J5TmFtZSB0ZXN0XG5cbiAgICAgICAgICBzdXBwb3J0LmdldEJ5SWQgPSBhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBkb2NFbGVtLmFwcGVuZENoaWxkKGVsKS5pZCA9IGV4cGFuZG87XG4gICAgICAgICAgICByZXR1cm4gIWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lIHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShleHBhbmRvKS5sZW5ndGg7XG4gICAgICAgICAgfSk7IC8vIElEIGZpbHRlciBhbmQgZmluZFxuXG4gICAgICAgICAgaWYgKHN1cHBvcnQuZ2V0QnlJZCkge1xuICAgICAgICAgICAgRXhwci5maWx0ZXJbXCJJRFwiXSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICB2YXIgYXR0cklkID0gaWQucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBhdHRySWQ7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBFeHByLmZpbmRbXCJJRFwiXSA9IGZ1bmN0aW9uIChpZCwgY29udGV4dCkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtID8gW2VsZW1dIDogW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEV4cHIuZmlsdGVyW1wiSURcIl0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgdmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpO1xuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZU5vZGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gYXR0cklkO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTsgLy8gU3VwcG9ydDogSUUgNiAtIDcgb25seVxuICAgICAgICAgICAgLy8gZ2V0RWxlbWVudEJ5SWQgaXMgbm90IHJlbGlhYmxlIGFzIGEgZmluZCBzaG9ydGN1dFxuXG5cbiAgICAgICAgICAgIEV4cHIuZmluZFtcIklEXCJdID0gZnVuY3Rpb24gKGlkLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlLFxuICAgICAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgICAgICBlbGVtcyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgIC8vIFZlcmlmeSB0aGUgaWQgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICBub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUudmFsdWUgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZWxlbV07XG4gICAgICAgICAgICAgICAgICB9IC8vIEZhbGwgYmFjayBvbiBnZXRFbGVtZW50c0J5TmFtZVxuXG5cbiAgICAgICAgICAgICAgICAgIGVsZW1zID0gY29udGV4dC5nZXRFbGVtZW50c0J5TmFtZShpZCk7XG4gICAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW0gPSBlbGVtc1tpKytdKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLnZhbHVlID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbZWxlbV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSAvLyBUYWdcblxuXG4gICAgICAgICAgRXhwci5maW5kW1wiVEFHXCJdID0gc3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA/IGZ1bmN0aW9uICh0YWcsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpOyAvLyBEb2N1bWVudEZyYWdtZW50IG5vZGVzIGRvbid0IGhhdmUgZ0VCVE5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5xc2EpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCh0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gOiBmdW5jdGlvbiAodGFnLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgZWxlbSxcbiAgICAgICAgICAgICAgICB0bXAgPSBbXSxcbiAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAvLyBCeSBoYXBweSBjb2luY2lkZW5jZSwgYSAoYnJva2VuKSBnRUJUTiBhcHBlYXJzIG9uIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgdG9vXG4gICAgICAgICAgICByZXN1bHRzID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpOyAvLyBGaWx0ZXIgb3V0IHBvc3NpYmxlIGNvbW1lbnRzXG5cbiAgICAgICAgICAgIGlmICh0YWcgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgIHdoaWxlIChlbGVtID0gcmVzdWx0c1tpKytdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIHRtcC5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB0bXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgIH07IC8vIENsYXNzXG5cbiAgICAgICAgICBFeHByLmZpbmRbXCJDTEFTU1wiXSA9IHN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAmJiBmdW5jdGlvbiAoY2xhc3NOYW1lLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCkge1xuICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICAvKiBRU0EvbWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgICAgICAgIC8vIFFTQSBhbmQgbWF0Y2hlc1NlbGVjdG9yIHN1cHBvcnRcbiAgICAgICAgICAvLyBtYXRjaGVzU2VsZWN0b3IoOmFjdGl2ZSkgcmVwb3J0cyBmYWxzZSB3aGVuIHRydWUgKElFOS9PcGVyYSAxMS41KVxuXG5cbiAgICAgICAgICByYnVnZ3lNYXRjaGVzID0gW107IC8vIHFTYSg6Zm9jdXMpIHJlcG9ydHMgZmFsc2Ugd2hlbiB0cnVlIChDaHJvbWUgMjEpXG4gICAgICAgICAgLy8gV2UgYWxsb3cgdGhpcyBiZWNhdXNlIG9mIGEgYnVnIGluIElFOC85IHRoYXQgdGhyb3dzIGFuIGVycm9yXG4gICAgICAgICAgLy8gd2hlbmV2ZXIgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGFjY2Vzc2VkIG9uIGFuIGlmcmFtZVxuICAgICAgICAgIC8vIFNvLCB3ZSBhbGxvdyA6Zm9jdXMgdG8gcGFzcyB0aHJvdWdoIFFTQSBhbGwgdGhlIHRpbWUgdG8gYXZvaWQgdGhlIElFIGVycm9yXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMzM3OFxuXG4gICAgICAgICAgcmJ1Z2d5UVNBID0gW107XG5cbiAgICAgICAgICBpZiAoc3VwcG9ydC5xc2EgPSBybmF0aXZlLnRlc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCkpIHtcbiAgICAgICAgICAgIC8vIEJ1aWxkIFFTQSByZWdleFxuICAgICAgICAgICAgLy8gUmVnZXggc3RyYXRlZ3kgYWRvcHRlZCBmcm9tIERpZWdvIFBlcmluaVxuICAgICAgICAgICAgYXNzZXJ0KGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAvLyBTZWxlY3QgaXMgc2V0IHRvIGVtcHR5IHN0cmluZyBvbiBwdXJwb3NlXG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgdG8gdGVzdCBJRSdzIHRyZWF0bWVudCBvZiBub3QgZXhwbGljaXRseVxuICAgICAgICAgICAgICAvLyBzZXR0aW5nIGEgYm9vbGVhbiBjb250ZW50IGF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgLy8gc2luY2UgaXRzIHByZXNlbmNlIHNob3VsZCBiZSBlbm91Z2hcbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEyMzU5XG4gICAgICAgICAgICAgIGRvY0VsZW0uYXBwZW5kQ2hpbGQoZWwpLmlubmVySFRNTCA9IFwiPGEgaWQ9J1wiICsgZXhwYW5kbyArIFwiJz48L2E+XCIgKyBcIjxzZWxlY3QgaWQ9J1wiICsgZXhwYW5kbyArIFwiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPlwiICsgXCI8b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiOyAvLyBTdXBwb3J0OiBJRTgsIE9wZXJhIDExLTEyLjE2XG4gICAgICAgICAgICAgIC8vIE5vdGhpbmcgc2hvdWxkIGJlIHNlbGVjdGVkIHdoZW4gZW1wdHkgc3RyaW5ncyBmb2xsb3cgXj0gb3IgJD0gb3IgKj1cbiAgICAgICAgICAgICAgLy8gVGhlIHRlc3QgYXR0cmlidXRlIG11c3QgYmUgdW5rbm93biBpbiBPcGVyYSBidXQgXCJzYWZlXCIgZm9yIFdpblJUXG4gICAgICAgICAgICAgIC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvaGg0NjUzODguYXNweCNhdHRyaWJ1dGVfc2VjdGlvblxuXG4gICAgICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCJbKl4kXT1cIiArIHdoaXRlc3BhY2UgKyBcIiooPzonJ3xcXFwiXFxcIilcIik7XG4gICAgICAgICAgICAgIH0gLy8gU3VwcG9ydDogSUU4XG4gICAgICAgICAgICAgIC8vIEJvb2xlYW4gYXR0cmlidXRlcyBhbmQgXCJ2YWx1ZVwiIGFyZSBub3QgdHJlYXRlZCBjb3JyZWN0bHlcblxuXG4gICAgICAgICAgICAgIGlmICghZWwucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKig/OnZhbHVlfFwiICsgYm9vbGVhbnMgKyBcIilcIik7XG4gICAgICAgICAgICAgIH0gLy8gU3VwcG9ydDogQ2hyb21lPDI5LCBBbmRyb2lkPDQuNCwgU2FmYXJpPDcuMCssIGlPUzw3LjArLCBQaGFudG9tSlM8MS45LjgrXG5cblxuICAgICAgICAgICAgICBpZiAoIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiICsgZXhwYW5kbyArIFwiLV1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCJ+PVwiKTtcbiAgICAgICAgICAgICAgfSAvLyBXZWJraXQvT3BlcmEgLSA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIHNlbGVjdGVkIG9wdGlvbiBlbGVtZW50c1xuICAgICAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuICAgICAgICAgICAgICAvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuXG5cbiAgICAgICAgICAgICAgaWYgKCFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCI6Y2hlY2tlZFwiKTtcbiAgICAgICAgICAgICAgfSAvLyBTdXBwb3J0OiBTYWZhcmkgOCssIGlPUyA4K1xuICAgICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM2ODUxXG4gICAgICAgICAgICAgIC8vIEluLXBhZ2UgYHNlbGVjdG9yI2lkIHNpYmxpbmctY29tYmluYXRvciBzZWxlY3RvcmAgZmFpbHNcblxuXG4gICAgICAgICAgICAgIGlmICghZWwucXVlcnlTZWxlY3RvckFsbChcImEjXCIgKyBleHBhbmRvICsgXCIrKlwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIi4jLitbK35dXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPlwiICsgXCI8c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7IC8vIFN1cHBvcnQ6IFdpbmRvd3MgOCBOYXRpdmUgQXBwc1xuICAgICAgICAgICAgICAvLyBUaGUgdHlwZSBhbmQgbmFtZSBhdHRyaWJ1dGVzIGFyZSByZXN0cmljdGVkIGR1cmluZyAuaW5uZXJIVE1MIGFzc2lnbm1lbnRcblxuICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGlucHV0KS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiRFwiKTsgLy8gU3VwcG9ydDogSUU4XG4gICAgICAgICAgICAgIC8vIEVuZm9yY2UgY2FzZS1zZW5zaXRpdml0eSBvZiBuYW1lIGF0dHJpYnV0ZVxuXG4gICAgICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCJuYW1lXCIgKyB3aGl0ZXNwYWNlICsgXCIqWypeJHwhfl0/PVwiKTtcbiAgICAgICAgICAgICAgfSAvLyBGRiAzLjUgLSA6ZW5hYmxlZC86ZGlzYWJsZWQgYW5kIGhpZGRlbiBlbGVtZW50cyAoaGlkZGVuIGVsZW1lbnRzIGFyZSBzdGlsbCBlbmFibGVkKVxuICAgICAgICAgICAgICAvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuXG5cbiAgICAgICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICB9IC8vIFN1cHBvcnQ6IElFOS0xMStcbiAgICAgICAgICAgICAgLy8gSUUncyA6ZGlzYWJsZWQgc2VsZWN0b3IgZG9lcyBub3QgcGljayB1cCB0aGUgY2hpbGRyZW4gb2YgZGlzYWJsZWQgZmllbGRzZXRzXG5cblxuICAgICAgICAgICAgICBkb2NFbGVtLmFwcGVuZENoaWxkKGVsKS5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCI6ZW5hYmxlZFwiLCBcIjpkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgfSAvLyBPcGVyYSAxMC0xMSBkb2VzIG5vdCB0aHJvdyBvbiBwb3N0LWNvbW1hIGludmFsaWQgcHNldWRvc1xuXG5cbiAgICAgICAgICAgICAgZWwucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIik7XG4gICAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwiLC4qOlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciA9IHJuYXRpdmUudGVzdChtYXRjaGVzID0gZG9jRWxlbS5tYXRjaGVzIHx8IGRvY0VsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGRvY0VsZW0ubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGRvY0VsZW0ub01hdGNoZXNTZWxlY3RvciB8fCBkb2NFbGVtLm1zTWF0Y2hlc1NlbGVjdG9yKSkge1xuICAgICAgICAgICAgYXNzZXJ0KGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgaXQncyBwb3NzaWJsZSB0byBkbyBtYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgICAgICAgLy8gb24gYSBkaXNjb25uZWN0ZWQgbm9kZSAoSUUgOSlcbiAgICAgICAgICAgICAgc3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCA9IG1hdGNoZXMuY2FsbChlbCwgXCIqXCIpOyAvLyBUaGlzIHNob3VsZCBmYWlsIHdpdGggYW4gZXhjZXB0aW9uXG4gICAgICAgICAgICAgIC8vIEdlY2tvIGRvZXMgbm90IGVycm9yLCByZXR1cm5zIGZhbHNlIGluc3RlYWRcblxuICAgICAgICAgICAgICBtYXRjaGVzLmNhbGwoZWwsIFwiW3MhPScnXTp4XCIpO1xuICAgICAgICAgICAgICByYnVnZ3lNYXRjaGVzLnB1c2goXCIhPVwiLCBwc2V1ZG9zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJidWdneVFTQSA9IHJidWdneVFTQS5sZW5ndGggJiYgbmV3IFJlZ0V4cChyYnVnZ3lRU0Euam9pbihcInxcIikpO1xuICAgICAgICAgIHJidWdneU1hdGNoZXMgPSByYnVnZ3lNYXRjaGVzLmxlbmd0aCAmJiBuZXcgUmVnRXhwKHJidWdneU1hdGNoZXMuam9pbihcInxcIikpO1xuICAgICAgICAgIC8qIENvbnRhaW5zXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgICAgICAgaGFzQ29tcGFyZSA9IHJuYXRpdmUudGVzdChkb2NFbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKTsgLy8gRWxlbWVudCBjb250YWlucyBhbm90aGVyXG4gICAgICAgICAgLy8gUHVycG9zZWZ1bGx5IHNlbGYtZXhjbHVzaXZlXG4gICAgICAgICAgLy8gQXMgaW4sIGFuIGVsZW1lbnQgZG9lcyBub3QgY29udGFpbiBpdHNlbGZcblxuICAgICAgICAgIGNvbnRhaW5zID0gaGFzQ29tcGFyZSB8fCBybmF0aXZlLnRlc3QoZG9jRWxlbS5jb250YWlucykgPyBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIGFkb3duID0gYS5ub2RlVHlwZSA9PT0gOSA/IGEuZG9jdW1lbnRFbGVtZW50IDogYSxcbiAgICAgICAgICAgICAgICBidXAgPSBiICYmIGIucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHJldHVybiBhID09PSBidXAgfHwgISEoYnVwICYmIGJ1cC5ub2RlVHlwZSA9PT0gMSAmJiAoYWRvd24uY29udGFpbnMgPyBhZG93bi5jb250YWlucyhidXApIDogYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGJ1cCkgJiAxNikpO1xuICAgICAgICAgIH0gOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICAgICAgd2hpbGUgKGIgPSBiLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYiA9PT0gYSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8qIFNvcnRpbmdcbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgICAgICAgLy8gRG9jdW1lbnQgb3JkZXIgc29ydGluZ1xuXG4gICAgICAgICAgc29ydE9yZGVyID0gaGFzQ29tcGFyZSA/IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAvLyBGbGFnIGZvciBkdXBsaWNhdGUgcmVtb3ZhbFxuICAgICAgICAgICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgICAgICAgaGFzRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9IC8vIFNvcnQgb24gbWV0aG9kIGV4aXN0ZW5jZSBpZiBvbmx5IG9uZSBpbnB1dCBoYXMgY29tcGFyZURvY3VtZW50UG9zaXRpb25cblxuXG4gICAgICAgICAgICB2YXIgY29tcGFyZSA9ICFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIC0gIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247XG5cbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb21wYXJlO1xuICAgICAgICAgICAgfSAvLyBDYWxjdWxhdGUgcG9zaXRpb24gaWYgYm90aCBpbnB1dHMgYmVsb25nIHRvIHRoZSBzYW1lIGRvY3VtZW50XG5cblxuICAgICAgICAgICAgY29tcGFyZSA9IChhLm93bmVyRG9jdW1lbnQgfHwgYSkgPT09IChiLm93bmVyRG9jdW1lbnQgfHwgYikgPyBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpIDogLy8gT3RoZXJ3aXNlIHdlIGtub3cgdGhleSBhcmUgZGlzY29ubmVjdGVkXG4gICAgICAgICAgICAxOyAvLyBEaXNjb25uZWN0ZWQgbm9kZXNcblxuICAgICAgICAgICAgaWYgKGNvbXBhcmUgJiAxIHx8ICFzdXBwb3J0LnNvcnREZXRhY2hlZCAmJiBiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpID09PSBjb21wYXJlKSB7XG4gICAgICAgICAgICAgIC8vIENob29zZSB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IGlzIHJlbGF0ZWQgdG8gb3VyIHByZWZlcnJlZCBkb2N1bWVudFxuICAgICAgICAgICAgICBpZiAoYSA9PT0gZG9jdW1lbnQgfHwgYS5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChiID09PSBkb2N1bWVudCB8fCBiLm93bmVyRG9jdW1lbnQgPT09IHByZWZlcnJlZERvYyAmJiBjb250YWlucyhwcmVmZXJyZWREb2MsIGIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgIH0gLy8gTWFpbnRhaW4gb3JpZ2luYWwgb3JkZXJcblxuXG4gICAgICAgICAgICAgIHJldHVybiBzb3J0SW5wdXQgPyBpbmRleE9mKHNvcnRJbnB1dCwgYSkgLSBpbmRleE9mKHNvcnRJbnB1dCwgYikgOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZSAmIDQgPyAtMSA6IDE7XG4gICAgICAgICAgfSA6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAvLyBFeGl0IGVhcmx5IGlmIHRoZSBub2RlcyBhcmUgaWRlbnRpY2FsXG4gICAgICAgICAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICAgICAgICBoYXNEdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGN1cixcbiAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICBhdXAgPSBhLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgYnVwID0gYi5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIGFwID0gW2FdLFxuICAgICAgICAgICAgICAgIGJwID0gW2JdOyAvLyBQYXJlbnRsZXNzIG5vZGVzIGFyZSBlaXRoZXIgZG9jdW1lbnRzIG9yIGRpc2Nvbm5lY3RlZFxuXG4gICAgICAgICAgICBpZiAoIWF1cCB8fCAhYnVwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhID09PSBkb2N1bWVudCA/IC0xIDogYiA9PT0gZG9jdW1lbnQgPyAxIDogYXVwID8gLTEgOiBidXAgPyAxIDogc29ydElucHV0ID8gaW5kZXhPZihzb3J0SW5wdXQsIGEpIC0gaW5kZXhPZihzb3J0SW5wdXQsIGIpIDogMDsgLy8gSWYgdGhlIG5vZGVzIGFyZSBzaWJsaW5ncywgd2UgY2FuIGRvIGEgcXVpY2sgY2hlY2tcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXVwID09PSBidXApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNpYmxpbmdDaGVjayhhLCBiKTtcbiAgICAgICAgICAgIH0gLy8gT3RoZXJ3aXNlIHdlIG5lZWQgZnVsbCBsaXN0cyBvZiB0aGVpciBhbmNlc3RvcnMgZm9yIGNvbXBhcmlzb25cblxuXG4gICAgICAgICAgICBjdXIgPSBhO1xuXG4gICAgICAgICAgICB3aGlsZSAoY3VyID0gY3VyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgYXAudW5zaGlmdChjdXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXIgPSBiO1xuXG4gICAgICAgICAgICB3aGlsZSAoY3VyID0gY3VyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgYnAudW5zaGlmdChjdXIpO1xuICAgICAgICAgICAgfSAvLyBXYWxrIGRvd24gdGhlIHRyZWUgbG9va2luZyBmb3IgYSBkaXNjcmVwYW5jeVxuXG5cbiAgICAgICAgICAgIHdoaWxlIChhcFtpXSA9PT0gYnBbaV0pIHtcbiAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaSA/IC8vIERvIGEgc2libGluZyBjaGVjayBpZiB0aGUgbm9kZXMgaGF2ZSBhIGNvbW1vbiBhbmNlc3RvclxuICAgICAgICAgICAgc2libGluZ0NoZWNrKGFwW2ldLCBicFtpXSkgOiAvLyBPdGhlcndpc2Ugbm9kZXMgaW4gb3VyIGRvY3VtZW50IHNvcnQgZmlyc3RcbiAgICAgICAgICAgIGFwW2ldID09PSBwcmVmZXJyZWREb2MgPyAtMSA6IGJwW2ldID09PSBwcmVmZXJyZWREb2MgPyAxIDogMDtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgfTtcblxuICAgICAgICBTaXp6bGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChleHByLCBlbGVtZW50cykge1xuICAgICAgICAgIHJldHVybiBTaXp6bGUoZXhwciwgbnVsbCwgbnVsbCwgZWxlbWVudHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNpenpsZS5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiAoZWxlbSwgZXhwcikge1xuICAgICAgICAgIC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuICAgICAgICAgIGlmICgoZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0pICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgc2V0RG9jdW1lbnQoZWxlbSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN1cHBvcnQubWF0Y2hlc1NlbGVjdG9yICYmIGRvY3VtZW50SXNIVE1MICYmICFub25uYXRpdmVTZWxlY3RvckNhY2hlW2V4cHIgKyBcIiBcIl0gJiYgKCFyYnVnZ3lNYXRjaGVzIHx8ICFyYnVnZ3lNYXRjaGVzLnRlc3QoZXhwcikpICYmICghcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdChleHByKSkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciByZXQgPSBtYXRjaGVzLmNhbGwoZWxlbSwgZXhwcik7IC8vIElFIDkncyBtYXRjaGVzU2VsZWN0b3IgcmV0dXJucyBmYWxzZSBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcblxuICAgICAgICAgICAgICBpZiAocmV0IHx8IHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggfHwgLy8gQXMgd2VsbCwgZGlzY29ubmVjdGVkIG5vZGVzIGFyZSBzYWlkIHRvIGJlIGluIGEgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLy8gZnJhZ21lbnQgaW4gSUUgOVxuICAgICAgICAgICAgICBlbGVtLmRvY3VtZW50ICYmIGVsZW0uZG9jdW1lbnQubm9kZVR5cGUgIT09IDExKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBub25uYXRpdmVTZWxlY3RvckNhY2hlKGV4cHIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBTaXp6bGUoZXhwciwgZG9jdW1lbnQsIG51bGwsIFtlbGVtXSkubGVuZ3RoID4gMDtcbiAgICAgICAgfTtcblxuICAgICAgICBTaXp6bGUuY29udGFpbnMgPSBmdW5jdGlvbiAoY29udGV4dCwgZWxlbSkge1xuICAgICAgICAgIC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuICAgICAgICAgIGlmICgoY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQpICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgc2V0RG9jdW1lbnQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5zKGNvbnRleHQsIGVsZW0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNpenpsZS5hdHRyID0gZnVuY3Rpb24gKGVsZW0sIG5hbWUpIHtcbiAgICAgICAgICAvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcbiAgICAgICAgICBpZiAoKGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtKSAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHNldERvY3VtZW50KGVsZW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBmbiA9IEV4cHIuYXR0ckhhbmRsZVtuYW1lLnRvTG93ZXJDYXNlKCldLFxuICAgICAgICAgICAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoalF1ZXJ5ICMxMzgwNylcbiAgICAgICAgICB2YWwgPSBmbiAmJiBoYXNPd24uY2FsbChFeHByLmF0dHJIYW5kbGUsIG5hbWUudG9Mb3dlckNhc2UoKSkgPyBmbihlbGVtLCBuYW1lLCAhZG9jdW1lbnRJc0hUTUwpIDogdW5kZWZpbmVkO1xuICAgICAgICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA6IHN1cHBvcnQuYXR0cmlidXRlcyB8fCAhZG9jdW1lbnRJc0hUTUwgPyBlbGVtLmdldEF0dHJpYnV0ZShuYW1lKSA6ICh2YWwgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUobmFtZSkpICYmIHZhbC5zcGVjaWZpZWQgPyB2YWwudmFsdWUgOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNpenpsZS5lc2NhcGUgPSBmdW5jdGlvbiAoc2VsKSB7XG4gICAgICAgICAgcmV0dXJuIChzZWwgKyBcIlwiKS5yZXBsYWNlKHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNpenpsZS5lcnJvciA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIiArIG1zZyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEb2N1bWVudCBzb3J0aW5nIGFuZCByZW1vdmluZyBkdXBsaWNhdGVzXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXlMaWtlfSByZXN1bHRzXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgU2l6emxlLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAgIHZhciBlbGVtLFxuICAgICAgICAgICAgICBkdXBsaWNhdGVzID0gW10sXG4gICAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgICBpID0gMDsgLy8gVW5sZXNzIHdlICprbm93KiB3ZSBjYW4gZGV0ZWN0IGR1cGxpY2F0ZXMsIGFzc3VtZSB0aGVpciBwcmVzZW5jZVxuXG4gICAgICAgICAgaGFzRHVwbGljYXRlID0gIXN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcztcbiAgICAgICAgICBzb3J0SW5wdXQgPSAhc3VwcG9ydC5zb3J0U3RhYmxlICYmIHJlc3VsdHMuc2xpY2UoMCk7XG4gICAgICAgICAgcmVzdWx0cy5zb3J0KHNvcnRPcmRlcik7XG5cbiAgICAgICAgICBpZiAoaGFzRHVwbGljYXRlKSB7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbSA9IHJlc3VsdHNbaSsrXSkge1xuICAgICAgICAgICAgICBpZiAoZWxlbSA9PT0gcmVzdWx0c1tpXSkge1xuICAgICAgICAgICAgICAgIGogPSBkdXBsaWNhdGVzLnB1c2goaSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICAgICAgICByZXN1bHRzLnNwbGljZShkdXBsaWNhdGVzW2pdLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIENsZWFyIGlucHV0IGFmdGVyIHNvcnRpbmcgdG8gcmVsZWFzZSBvYmplY3RzXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL3B1bGwvMjI1XG5cblxuICAgICAgICAgIHNvcnRJbnB1dCA9IG51bGw7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVdGlsaXR5IGZ1bmN0aW9uIGZvciByZXRyaWV2aW5nIHRoZSB0ZXh0IHZhbHVlIG9mIGFuIGFycmF5IG9mIERPTSBub2Rlc1xuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fEVsZW1lbnR9IGVsZW1cbiAgICAgICAgICovXG5cblxuICAgICAgICBnZXRUZXh0ID0gU2l6emxlLmdldFRleHQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIHZhciBub2RlLFxuICAgICAgICAgICAgICByZXQgPSBcIlwiLFxuICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgbm9kZVR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG4gICAgICAgICAgaWYgKCFub2RlVHlwZSkge1xuICAgICAgICAgICAgLy8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcbiAgICAgICAgICAgIHdoaWxlIChub2RlID0gZWxlbVtpKytdKSB7XG4gICAgICAgICAgICAgIC8vIERvIG5vdCB0cmF2ZXJzZSBjb21tZW50IG5vZGVzXG4gICAgICAgICAgICAgIHJldCArPSBnZXRUZXh0KG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobm9kZVR5cGUgPT09IDEgfHwgbm9kZVR5cGUgPT09IDkgfHwgbm9kZVR5cGUgPT09IDExKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGV4dENvbnRlbnQgZm9yIGVsZW1lbnRzXG4gICAgICAgICAgICAvLyBpbm5lclRleHQgdXNhZ2UgcmVtb3ZlZCBmb3IgY29uc2lzdGVuY3kgb2YgbmV3IGxpbmVzIChqUXVlcnkgIzExMTUzKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtLnRleHRDb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbGVtLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVHJhdmVyc2UgaXRzIGNoaWxkcmVuXG4gICAgICAgICAgICAgIGZvciAoZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gZ2V0VGV4dChlbGVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobm9kZVR5cGUgPT09IDMgfHwgbm9kZVR5cGUgPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLm5vZGVWYWx1ZTtcbiAgICAgICAgICB9IC8vIERvIG5vdCBpbmNsdWRlIGNvbW1lbnQgb3IgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiBub2Rlc1xuXG5cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuXG4gICAgICAgIEV4cHIgPSBTaXp6bGUuc2VsZWN0b3JzID0ge1xuICAgICAgICAgIC8vIENhbiBiZSBhZGp1c3RlZCBieSB0aGUgdXNlclxuICAgICAgICAgIGNhY2hlTGVuZ3RoOiA1MCxcbiAgICAgICAgICBjcmVhdGVQc2V1ZG86IG1hcmtGdW5jdGlvbixcbiAgICAgICAgICBtYXRjaDogbWF0Y2hFeHByLFxuICAgICAgICAgIGF0dHJIYW5kbGU6IHt9LFxuICAgICAgICAgIGZpbmQ6IHt9LFxuICAgICAgICAgIHJlbGF0aXZlOiB7XG4gICAgICAgICAgICBcIj5cIjoge1xuICAgICAgICAgICAgICBkaXI6IFwicGFyZW50Tm9kZVwiLFxuICAgICAgICAgICAgICBmaXJzdDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiIFwiOiB7XG4gICAgICAgICAgICAgIGRpcjogXCJwYXJlbnROb2RlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIitcIjoge1xuICAgICAgICAgICAgICBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIsXG4gICAgICAgICAgICAgIGZpcnN0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ+XCI6IHtcbiAgICAgICAgICAgICAgZGlyOiBcInByZXZpb3VzU2libGluZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmVGaWx0ZXI6IHtcbiAgICAgICAgICAgIFwiQVRUUlwiOiBmdW5jdGlvbiBBVFRSKG1hdGNoKSB7XG4gICAgICAgICAgICAgIG1hdGNoWzFdID0gbWF0Y2hbMV0ucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7IC8vIE1vdmUgdGhlIGdpdmVuIHZhbHVlIHRvIG1hdGNoWzNdIHdoZXRoZXIgcXVvdGVkIG9yIHVucXVvdGVkXG5cbiAgICAgICAgICAgICAgbWF0Y2hbM10gPSAobWF0Y2hbM10gfHwgbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIikucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7XG5cbiAgICAgICAgICAgICAgaWYgKG1hdGNoWzJdID09PSBcIn49XCIpIHtcbiAgICAgICAgICAgICAgICBtYXRjaFszXSA9IFwiIFwiICsgbWF0Y2hbM10gKyBcIiBcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaC5zbGljZSgwLCA0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkNISUxEXCI6IGZ1bmN0aW9uIENISUxEKG1hdGNoKSB7XG4gICAgICAgICAgICAgIC8qIG1hdGNoZXMgZnJvbSBtYXRjaEV4cHJbXCJDSElMRFwiXVxuICAgICAgICAgICAgICBcdDEgdHlwZSAob25seXxudGh8Li4uKVxuICAgICAgICAgICAgICBcdDIgd2hhdCAoY2hpbGR8b2YtdHlwZSlcbiAgICAgICAgICAgICAgXHQzIGFyZ3VtZW50IChldmVufG9kZHxcXGQqfFxcZCpuKFsrLV1cXGQrKT98Li4uKVxuICAgICAgICAgICAgICBcdDQgeG4tY29tcG9uZW50IG9mIHhuK3kgYXJndW1lbnQgKFsrLV0/XFxkKm58KVxuICAgICAgICAgICAgICBcdDUgc2lnbiBvZiB4bi1jb21wb25lbnRcbiAgICAgICAgICAgICAgXHQ2IHggb2YgeG4tY29tcG9uZW50XG4gICAgICAgICAgICAgIFx0NyBzaWduIG9mIHktY29tcG9uZW50XG4gICAgICAgICAgICAgIFx0OCB5IG9mIHktY29tcG9uZW50XG4gICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIG1hdGNoWzFdID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICBpZiAobWF0Y2hbMV0uc2xpY2UoMCwgMykgPT09IFwibnRoXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBudGgtKiByZXF1aXJlcyBhcmd1bWVudFxuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hbM10pIHtcbiAgICAgICAgICAgICAgICAgIFNpenpsZS5lcnJvcihtYXRjaFswXSk7XG4gICAgICAgICAgICAgICAgfSAvLyBudW1lcmljIHggYW5kIHkgcGFyYW1ldGVycyBmb3IgRXhwci5maWx0ZXIuQ0hJTERcbiAgICAgICAgICAgICAgICAvLyByZW1lbWJlciB0aGF0IGZhbHNlL3RydWUgY2FzdCByZXNwZWN0aXZlbHkgdG8gMC8xXG5cblxuICAgICAgICAgICAgICAgIG1hdGNoWzRdID0gKyhtYXRjaFs0XSA/IG1hdGNoWzVdICsgKG1hdGNoWzZdIHx8IDEpIDogMiAqIChtYXRjaFszXSA9PT0gXCJldmVuXCIgfHwgbWF0Y2hbM10gPT09IFwib2RkXCIpKTtcbiAgICAgICAgICAgICAgICBtYXRjaFs1XSA9ICsobWF0Y2hbN10gKyBtYXRjaFs4XSB8fCBtYXRjaFszXSA9PT0gXCJvZGRcIik7IC8vIG90aGVyIHR5cGVzIHByb2hpYml0IGFyZ3VtZW50c1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgICAgICAgU2l6emxlLmVycm9yKG1hdGNoWzBdKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlBTRVVET1wiOiBmdW5jdGlvbiBQU0VVRE8obWF0Y2gpIHtcbiAgICAgICAgICAgICAgdmFyIGV4Y2VzcyxcbiAgICAgICAgICAgICAgICAgIHVucXVvdGVkID0gIW1hdGNoWzZdICYmIG1hdGNoWzJdO1xuXG4gICAgICAgICAgICAgIGlmIChtYXRjaEV4cHJbXCJDSElMRFwiXS50ZXN0KG1hdGNoWzBdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICB9IC8vIEFjY2VwdCBxdW90ZWQgYXJndW1lbnRzIGFzLWlzXG5cblxuICAgICAgICAgICAgICBpZiAobWF0Y2hbM10pIHtcbiAgICAgICAgICAgICAgICBtYXRjaFsyXSA9IG1hdGNoWzRdIHx8IG1hdGNoWzVdIHx8IFwiXCI7IC8vIFN0cmlwIGV4Y2VzcyBjaGFyYWN0ZXJzIGZyb20gdW5xdW90ZWQgYXJndW1lbnRzXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodW5xdW90ZWQgJiYgcnBzZXVkby50ZXN0KHVucXVvdGVkKSAmJiAoIC8vIEdldCBleGNlc3MgZnJvbSB0b2tlbml6ZSAocmVjdXJzaXZlbHkpXG4gICAgICAgICAgICAgIGV4Y2VzcyA9IHRva2VuaXplKHVucXVvdGVkLCB0cnVlKSkgJiYgKCAvLyBhZHZhbmNlIHRvIHRoZSBuZXh0IGNsb3NpbmcgcGFyZW50aGVzaXNcbiAgICAgICAgICAgICAgZXhjZXNzID0gdW5xdW90ZWQuaW5kZXhPZihcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzKSAtIHVucXVvdGVkLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAvLyBleGNlc3MgaXMgYSBuZWdhdGl2ZSBpbmRleFxuICAgICAgICAgICAgICAgIG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoMCwgZXhjZXNzKTtcbiAgICAgICAgICAgICAgICBtYXRjaFsyXSA9IHVucXVvdGVkLnNsaWNlKDAsIGV4Y2Vzcyk7XG4gICAgICAgICAgICAgIH0gLy8gUmV0dXJuIG9ubHkgY2FwdHVyZXMgbmVlZGVkIGJ5IHRoZSBwc2V1ZG8gZmlsdGVyIG1ldGhvZCAodHlwZSBhbmQgYXJndW1lbnQpXG5cblxuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2guc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgIFwiVEFHXCI6IGZ1bmN0aW9uIFRBRyhub2RlTmFtZVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIHZhciBub2RlTmFtZSA9IG5vZGVOYW1lU2VsZWN0b3IucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5vZGVOYW1lU2VsZWN0b3IgPT09IFwiKlwiID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9IDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5vZGVOYW1lO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ0xBU1NcIjogZnVuY3Rpb24gQ0xBU1MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gY2xhc3NDYWNoZVtjbGFzc05hbWUgKyBcIiBcIl07XG4gICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuIHx8IChwYXR0ZXJuID0gbmV3IFJlZ0V4cChcIihefFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgY2xhc3NOYW1lICsgXCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIikpICYmIGNsYXNzQ2FjaGUoY2xhc3NOYW1lLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodHlwZW9mIGVsZW0uY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW0uY2xhc3NOYW1lIHx8IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkFUVFJcIjogZnVuY3Rpb24gQVRUUihuYW1lLCBvcGVyYXRvciwgY2hlY2spIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFNpenpsZS5hdHRyKGVsZW0sIG5hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gb3BlcmF0b3IgPT09IFwiIT1cIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlcmF0b3IgPT09IFwiPVwiID8gcmVzdWx0ID09PSBjaGVjayA6IG9wZXJhdG9yID09PSBcIiE9XCIgPyByZXN1bHQgIT09IGNoZWNrIDogb3BlcmF0b3IgPT09IFwiXj1cIiA/IGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKGNoZWNrKSA9PT0gMCA6IG9wZXJhdG9yID09PSBcIio9XCIgPyBjaGVjayAmJiByZXN1bHQuaW5kZXhPZihjaGVjaykgPiAtMSA6IG9wZXJhdG9yID09PSBcIiQ9XCIgPyBjaGVjayAmJiByZXN1bHQuc2xpY2UoLWNoZWNrLmxlbmd0aCkgPT09IGNoZWNrIDogb3BlcmF0b3IgPT09IFwifj1cIiA/IChcIiBcIiArIHJlc3VsdC5yZXBsYWNlKHJ3aGl0ZXNwYWNlLCBcIiBcIikgKyBcIiBcIikuaW5kZXhPZihjaGVjaykgPiAtMSA6IG9wZXJhdG9yID09PSBcInw9XCIgPyByZXN1bHQgPT09IGNoZWNrIHx8IHJlc3VsdC5zbGljZSgwLCBjaGVjay5sZW5ndGggKyAxKSA9PT0gY2hlY2sgKyBcIi1cIiA6IGZhbHNlO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ0hJTERcIjogZnVuY3Rpb24gQ0hJTEQodHlwZSwgd2hhdCwgYXJndW1lbnQsIGZpcnN0LCBsYXN0KSB7XG4gICAgICAgICAgICAgIHZhciBzaW1wbGUgPSB0eXBlLnNsaWNlKDAsIDMpICE9PSBcIm50aFwiLFxuICAgICAgICAgICAgICAgICAgZm9yd2FyZCA9IHR5cGUuc2xpY2UoLTQpICE9PSBcImxhc3RcIixcbiAgICAgICAgICAgICAgICAgIG9mVHlwZSA9IHdoYXQgPT09IFwib2YtdHlwZVwiO1xuICAgICAgICAgICAgICByZXR1cm4gZmlyc3QgPT09IDEgJiYgbGFzdCA9PT0gMCA/IC8vIFNob3J0Y3V0IGZvciA6bnRoLSoobilcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISFlbGVtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH0gOiBmdW5jdGlvbiAoZWxlbSwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlLFxuICAgICAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZSxcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJDYWNoZSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgZGlyID0gc2ltcGxlICE9PSBmb3J3YXJkID8gXCJuZXh0U2libGluZ1wiIDogXCJwcmV2aW91c1NpYmxpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gb2ZUeXBlICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgdXNlQ2FjaGUgPSAheG1sICYmICFvZlR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIDooZmlyc3R8bGFzdHxvbmx5KS0oY2hpbGR8b2YtdHlwZSlcbiAgICAgICAgICAgICAgICAgIGlmIChzaW1wbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGRpcikge1xuICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBlbGVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG5vZGUgPSBub2RlW2Rpcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvZlR5cGUgPyBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUgOiBub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IC8vIFJldmVyc2UgZGlyZWN0aW9uIGZvciA6b25seS0qIChpZiB3ZSBoYXZlbid0IHlldCBkb25lIHNvKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGRpciA9IHR5cGUgPT09IFwib25seVwiICYmICFzdGFydCAmJiBcIm5leHRTaWJsaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgc3RhcnQgPSBbZm9yd2FyZCA/IHBhcmVudC5maXJzdENoaWxkIDogcGFyZW50Lmxhc3RDaGlsZF07IC8vIG5vbi14bWwgOm50aC1jaGlsZCguLi4pIHN0b3JlcyBjYWNoZSBkYXRhIG9uIGBwYXJlbnRgXG5cbiAgICAgICAgICAgICAgICAgIGlmIChmb3J3YXJkICYmIHVzZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZWsgYGVsZW1gIGZyb20gYSBwcmV2aW91c2x5LWNhY2hlZCBpbmRleFxuICAgICAgICAgICAgICAgICAgICAvLyAuLi5pbiBhIGd6aXAtZnJpZW5kbHkgd2F5XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG91dGVyQ2FjaGUgPSBub2RlW2V4cGFuZG9dIHx8IChub2RlW2V4cGFuZG9dID0ge30pOyAvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG4gICAgICAgICAgICAgICAgICAgIC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXG4gICAgICAgICAgICAgICAgICAgIHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXSB8fCAob3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXSA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUgPSB1bmlxdWVDYWNoZVt0eXBlXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUluZGV4ID0gY2FjaGVbMF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbMV07XG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPSBub2RlSW5kZXggJiYgY2FjaGVbMl07XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlSW5kZXggJiYgcGFyZW50LmNoaWxkTm9kZXNbbm9kZUluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVtkaXJdIHx8ICggLy8gRmFsbGJhY2sgdG8gc2Vla2luZyBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBmb3VuZCwgY2FjaGUgaW5kZXhlcyBvbiBgcGFyZW50YCBhbmQgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiArK2RpZmYgJiYgbm9kZSA9PT0gZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGVbdHlwZV0gPSBbZGlycnVucywgbm9kZUluZGV4LCBkaWZmXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHByZXZpb3VzbHktY2FjaGVkIGVsZW1lbnQgaW5kZXggaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLmluIGEgZ3ppcC1mcmllbmRseSB3YXlcbiAgICAgICAgICAgICAgICAgICAgICBub2RlID0gZWxlbTtcbiAgICAgICAgICAgICAgICAgICAgICBvdXRlckNhY2hlID0gbm9kZVtleHBhbmRvXSB8fCAobm9kZVtleHBhbmRvXSA9IHt9KTsgLy8gU3VwcG9ydDogSUUgPDkgb25seVxuICAgICAgICAgICAgICAgICAgICAgIC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXG4gICAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlW25vZGUudW5pcXVlSURdIHx8IChvdXRlckNhY2hlW25vZGUudW5pcXVlSURdID0ge30pO1xuICAgICAgICAgICAgICAgICAgICAgIGNhY2hlID0gdW5pcXVlQ2FjaGVbdHlwZV0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgbm9kZUluZGV4ID0gY2FjaGVbMF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbMV07XG4gICAgICAgICAgICAgICAgICAgICAgZGlmZiA9IG5vZGVJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfSAvLyB4bWwgOm50aC1jaGlsZCguLi4pXG4gICAgICAgICAgICAgICAgICAgIC8vIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcblxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWZmID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc2FtZSBsb29wIGFzIGFib3ZlIHRvIHNlZWsgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbZGlyXSB8fCAoZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG9mVHlwZSA/IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSA6IG5vZGUubm9kZVR5cGUgPT09IDEpICYmICsrZGlmZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWNoZSB0aGUgaW5kZXggb2YgZWFjaCBlbmNvdW50ZXJlZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyQ2FjaGUgPSBub2RlW2V4cGFuZG9dIHx8IChub2RlW2V4cGFuZG9dID0ge30pOyAvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbbm9kZS51bmlxdWVJRF0gfHwgKG91dGVyQ2FjaGVbbm9kZS51bmlxdWVJRF0gPSB7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGVbdHlwZV0gPSBbZGlycnVucywgZGlmZl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IC8vIEluY29ycG9yYXRlIHRoZSBvZmZzZXQsIHRoZW4gY2hlY2sgYWdhaW5zdCBjeWNsZSBzaXplXG5cblxuICAgICAgICAgICAgICAgICAgZGlmZiAtPSBsYXN0O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpZmYgPT09IGZpcnN0IHx8IGRpZmYgJSBmaXJzdCA9PT0gMCAmJiBkaWZmIC8gZmlyc3QgPj0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJQU0VVRE9cIjogZnVuY3Rpb24gUFNFVURPKHBzZXVkbywgYXJndW1lbnQpIHtcbiAgICAgICAgICAgICAgLy8gcHNldWRvLWNsYXNzIG5hbWVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlXG4gICAgICAgICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jcHNldWRvLWNsYXNzZXNcbiAgICAgICAgICAgICAgLy8gUHJpb3JpdGl6ZSBieSBjYXNlIHNlbnNpdGl2aXR5IGluIGNhc2UgY3VzdG9tIHBzZXVkb3MgYXJlIGFkZGVkIHdpdGggdXBwZXJjYXNlIGxldHRlcnNcbiAgICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhhdCBzZXRGaWx0ZXJzIGluaGVyaXRzIGZyb20gcHNldWRvc1xuICAgICAgICAgICAgICB2YXIgYXJncyxcbiAgICAgICAgICAgICAgICAgIGZuID0gRXhwci5wc2V1ZG9zW3BzZXVkb10gfHwgRXhwci5zZXRGaWx0ZXJzW3BzZXVkby50b0xvd2VyQ2FzZSgpXSB8fCBTaXp6bGUuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiICsgcHNldWRvKTsgLy8gVGhlIHVzZXIgbWF5IHVzZSBjcmVhdGVQc2V1ZG8gdG8gaW5kaWNhdGUgdGhhdFxuICAgICAgICAgICAgICAvLyBhcmd1bWVudHMgYXJlIG5lZWRlZCB0byBjcmVhdGUgdGhlIGZpbHRlciBmdW5jdGlvblxuICAgICAgICAgICAgICAvLyBqdXN0IGFzIFNpenpsZSBkb2VzXG5cbiAgICAgICAgICAgICAgaWYgKGZuW2V4cGFuZG9dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuKGFyZ3VtZW50KTtcbiAgICAgICAgICAgICAgfSAvLyBCdXQgbWFpbnRhaW4gc3VwcG9ydCBmb3Igb2xkIHNpZ25hdHVyZXNcblxuXG4gICAgICAgICAgICAgIGlmIChmbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgYXJncyA9IFtwc2V1ZG8sIHBzZXVkbywgXCJcIiwgYXJndW1lbnRdO1xuICAgICAgICAgICAgICAgIHJldHVybiBFeHByLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkocHNldWRvLnRvTG93ZXJDYXNlKCkpID8gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChzZWVkLCBtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgaWR4LFxuICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWQgPSBmbihzZWVkLCBhcmd1bWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgaSA9IG1hdGNoZWQubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IGluZGV4T2Yoc2VlZCwgbWF0Y2hlZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIHNlZWRbaWR4XSA9ICEobWF0Y2hlc1tpZHhdID0gbWF0Y2hlZFtpXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkgOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuKGVsZW0sIDAsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwc2V1ZG9zOiB7XG4gICAgICAgICAgICAvLyBQb3RlbnRpYWxseSBjb21wbGV4IHBzZXVkb3NcbiAgICAgICAgICAgIFwibm90XCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgLy8gVHJpbSB0aGUgc2VsZWN0b3IgcGFzc2VkIHRvIGNvbXBpbGVcbiAgICAgICAgICAgICAgLy8gdG8gYXZvaWQgdHJlYXRpbmcgbGVhZGluZyBhbmQgdHJhaWxpbmdcbiAgICAgICAgICAgICAgLy8gc3BhY2VzIGFzIGNvbWJpbmF0b3JzXG4gICAgICAgICAgICAgIHZhciBpbnB1dCA9IFtdLFxuICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IFtdLFxuICAgICAgICAgICAgICAgICAgbWF0Y2hlciA9IGNvbXBpbGUoc2VsZWN0b3IucmVwbGFjZShydHJpbSwgXCIkMVwiKSk7XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaGVyW2V4cGFuZG9dID8gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChzZWVkLCBtYXRjaGVzLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSxcbiAgICAgICAgICAgICAgICAgICAgdW5tYXRjaGVkID0gbWF0Y2hlcihzZWVkLCBudWxsLCB4bWwsIFtdKSxcbiAgICAgICAgICAgICAgICAgICAgaSA9IHNlZWQubGVuZ3RoOyAvLyBNYXRjaCBlbGVtZW50cyB1bm1hdGNoZWQgYnkgYG1hdGNoZXJgXG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbSA9IHVubWF0Y2hlZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICBzZWVkW2ldID0gIShtYXRjaGVzW2ldID0gZWxlbSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSA6IGZ1bmN0aW9uIChlbGVtLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgICAgICAgICBpbnB1dFswXSA9IGVsZW07XG4gICAgICAgICAgICAgICAgbWF0Y2hlcihpbnB1dCwgbnVsbCwgeG1sLCByZXN1bHRzKTsgLy8gRG9uJ3Qga2VlcCB0aGUgZWxlbWVudCAoaXNzdWUgIzI5OSlcblxuICAgICAgICAgICAgICAgIGlucHV0WzBdID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXJlc3VsdHMucG9wKCk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwiaGFzXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNpenpsZShzZWxlY3RvciwgZWxlbSkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXCJjb250YWluc1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZWxlbS50ZXh0Q29udGVudCB8fCBnZXRUZXh0KGVsZW0pKS5pbmRleE9mKHRleHQpID4gLTE7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC8vIFwiV2hldGhlciBhbiBlbGVtZW50IGlzIHJlcHJlc2VudGVkIGJ5IGEgOmxhbmcoKSBzZWxlY3RvclxuICAgICAgICAgICAgLy8gaXMgYmFzZWQgc29sZWx5IG9uIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWVcbiAgICAgICAgICAgIC8vIGJlaW5nIGVxdWFsIHRvIHRoZSBpZGVudGlmaWVyIEMsXG4gICAgICAgICAgICAvLyBvciBiZWdpbm5pbmcgd2l0aCB0aGUgaWRlbnRpZmllciBDIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IFwiLVwiLlxuICAgICAgICAgICAgLy8gVGhlIG1hdGNoaW5nIG9mIEMgYWdhaW5zdCB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlIGlzIHBlcmZvcm1lZCBjYXNlLWluc2Vuc2l0aXZlbHkuXG4gICAgICAgICAgICAvLyBUaGUgaWRlbnRpZmllciBDIGRvZXMgbm90IGhhdmUgdG8gYmUgYSB2YWxpZCBsYW5ndWFnZSBuYW1lLlwiXG4gICAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2xhbmctcHNldWRvXG4gICAgICAgICAgICBcImxhbmdcIjogbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgICAgICAgIC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcbiAgICAgICAgICAgICAgaWYgKCFyaWRlbnRpZmllci50ZXN0KGxhbmcgfHwgXCJcIikpIHtcbiAgICAgICAgICAgICAgICBTaXp6bGUuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIiArIGxhbmcpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGFuZyA9IGxhbmcucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1MYW5nO1xuXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1MYW5nID0gZG9jdW1lbnRJc0hUTUwgPyBlbGVtLmxhbmcgOiBlbGVtLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpIHx8IGVsZW0uZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtTGFuZyA9IGVsZW1MYW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtTGFuZyA9PT0gbGFuZyB8fCBlbGVtTGFuZy5pbmRleE9mKGxhbmcgKyBcIi1cIikgPT09IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoKGVsZW0gPSBlbGVtLnBhcmVudE5vZGUpICYmIGVsZW0ubm9kZVR5cGUgPT09IDEpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAvLyBNaXNjZWxsYW5lb3VzXG4gICAgICAgICAgICBcInRhcmdldFwiOiBmdW5jdGlvbiB0YXJnZXQoZWxlbSkge1xuICAgICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhc2ggJiYgaGFzaC5zbGljZSgxKSA9PT0gZWxlbS5pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJvb3RcIjogZnVuY3Rpb24gcm9vdChlbGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbGVtID09PSBkb2NFbGVtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZm9jdXNcIjogZnVuY3Rpb24gZm9jdXMoZWxlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gZWxlbSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAoIWRvY3VtZW50Lmhhc0ZvY3VzIHx8IGRvY3VtZW50Lmhhc0ZvY3VzKCkpICYmICEhKGVsZW0udHlwZSB8fCBlbGVtLmhyZWYgfHwgfmVsZW0udGFiSW5kZXgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIEJvb2xlYW4gcHJvcGVydGllc1xuICAgICAgICAgICAgXCJlbmFibGVkXCI6IGNyZWF0ZURpc2FibGVkUHNldWRvKGZhbHNlKSxcbiAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogY3JlYXRlRGlzYWJsZWRQc2V1ZG8odHJ1ZSksXG4gICAgICAgICAgICBcImNoZWNrZWRcIjogZnVuY3Rpb24gY2hlY2tlZChlbGVtKSB7XG4gICAgICAgICAgICAgIC8vIEluIENTUzMsIDpjaGVja2VkIHNob3VsZCByZXR1cm4gYm90aCBjaGVja2VkIGFuZCBzZWxlY3RlZCBlbGVtZW50c1xuICAgICAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuICAgICAgICAgICAgICB2YXIgbm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgIHJldHVybiBub2RlTmFtZSA9PT0gXCJpbnB1dFwiICYmICEhZWxlbS5jaGVja2VkIHx8IG5vZGVOYW1lID09PSBcIm9wdGlvblwiICYmICEhZWxlbS5zZWxlY3RlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNlbGVjdGVkXCI6IGZ1bmN0aW9uIHNlbGVjdGVkKGVsZW0pIHtcbiAgICAgICAgICAgICAgLy8gQWNjZXNzaW5nIHRoaXMgcHJvcGVydHkgbWFrZXMgc2VsZWN0ZWQtYnktZGVmYXVsdFxuICAgICAgICAgICAgICAvLyBvcHRpb25zIGluIFNhZmFyaSB3b3JrIHByb3Blcmx5XG4gICAgICAgICAgICAgIGlmIChlbGVtLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBlbGVtLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBlbGVtLnNlbGVjdGVkID09PSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIENvbnRlbnRzXG4gICAgICAgICAgICBcImVtcHR5XCI6IGZ1bmN0aW9uIGVtcHR5KGVsZW0pIHtcbiAgICAgICAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNlbXB0eS1wc2V1ZG9cbiAgICAgICAgICAgICAgLy8gOmVtcHR5IGlzIG5lZ2F0ZWQgYnkgZWxlbWVudCAoMSkgb3IgY29udGVudCBub2RlcyAodGV4dDogMzsgY2RhdGE6IDQ7IGVudGl0eSByZWY6IDUpLFxuICAgICAgICAgICAgICAvLyAgIGJ1dCBub3QgYnkgb3RoZXJzIChjb21tZW50OiA4OyBwcm9jZXNzaW5nIGluc3RydWN0aW9uOiA3OyBldGMuKVxuICAgICAgICAgICAgICAvLyBub2RlVHlwZSA8IDYgd29ya3MgYmVjYXVzZSBhdHRyaWJ1dGVzICgyKSBkbyBub3QgYXBwZWFyIGFzIGNoaWxkcmVuXG4gICAgICAgICAgICAgIGZvciAoZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSA8IDYpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBhcmVudFwiOiBmdW5jdGlvbiBwYXJlbnQoZWxlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gIUV4cHIucHNldWRvc1tcImVtcHR5XCJdKGVsZW0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIEVsZW1lbnQvaW5wdXQgdHlwZXNcbiAgICAgICAgICAgIFwiaGVhZGVyXCI6IGZ1bmN0aW9uIGhlYWRlcihlbGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiByaGVhZGVyLnRlc3QoZWxlbS5ub2RlTmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbiBpbnB1dChlbGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiByaW5wdXRzLnRlc3QoZWxlbS5ub2RlTmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJidXR0b25cIjogZnVuY3Rpb24gYnV0dG9uKGVsZW0pIHtcbiAgICAgICAgICAgICAgdmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSBcImJ1dHRvblwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IGZ1bmN0aW9uIHRleHQoZWxlbSkge1xuICAgICAgICAgICAgICB2YXIgYXR0cjtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCIgJiYgKCAvLyBTdXBwb3J0OiBJRTw4XG4gICAgICAgICAgICAgIC8vIE5ldyBIVE1MNSBhdHRyaWJ1dGUgdmFsdWVzIChlLmcuLCBcInNlYXJjaFwiKSBhcHBlYXIgd2l0aCBlbGVtLnR5cGUgPT09IFwidGV4dFwiXG4gICAgICAgICAgICAgIChhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSA9PSBudWxsIHx8IGF0dHIudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uLWluLWNvbGxlY3Rpb25cbiAgICAgICAgICAgIFwiZmlyc3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbMF07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwibGFzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uIChtYXRjaEluZGV4ZXMsIGxlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gW2xlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcImVxXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gW2FyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnRdO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcImV2ZW5cIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiAobWF0Y2hJbmRleGVzLCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICBtYXRjaEluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaEluZGV4ZXM7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFwib2RkXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHZhciBpID0gMTtcblxuICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hJbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hJbmRleGVzO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcImx0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCkge1xuICAgICAgICAgICAgICB2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQgPiBsZW5ndGggPyBsZW5ndGggOiBhcmd1bWVudDtcblxuICAgICAgICAgICAgICBmb3IgKDsgLS1pID49IDA7KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hJbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hJbmRleGVzO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcImd0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCkge1xuICAgICAgICAgICAgICB2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XG5cbiAgICAgICAgICAgICAgZm9yICg7ICsraSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBtYXRjaEluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaEluZGV4ZXM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRXhwci5wc2V1ZG9zW1wibnRoXCJdID0gRXhwci5wc2V1ZG9zW1wiZXFcIl07IC8vIEFkZCBidXR0b24vaW5wdXQgdHlwZSBwc2V1ZG9zXG5cbiAgICAgICAgZm9yIChpIGluIHtcbiAgICAgICAgICByYWRpbzogdHJ1ZSxcbiAgICAgICAgICBjaGVja2JveDogdHJ1ZSxcbiAgICAgICAgICBmaWxlOiB0cnVlLFxuICAgICAgICAgIHBhc3N3b3JkOiB0cnVlLFxuICAgICAgICAgIGltYWdlOiB0cnVlXG4gICAgICAgIH0pIHtcbiAgICAgICAgICBFeHByLnBzZXVkb3NbaV0gPSBjcmVhdGVJbnB1dFBzZXVkbyhpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSBpbiB7XG4gICAgICAgICAgc3VibWl0OiB0cnVlLFxuICAgICAgICAgIHJlc2V0OiB0cnVlXG4gICAgICAgIH0pIHtcbiAgICAgICAgICBFeHByLnBzZXVkb3NbaV0gPSBjcmVhdGVCdXR0b25Qc2V1ZG8oaSk7XG4gICAgICAgIH0gLy8gRWFzeSBBUEkgZm9yIGNyZWF0aW5nIG5ldyBzZXRGaWx0ZXJzXG5cblxuICAgICAgICBmdW5jdGlvbiBzZXRGaWx0ZXJzKCkge31cblxuICAgICAgICBzZXRGaWx0ZXJzLnByb3RvdHlwZSA9IEV4cHIuZmlsdGVycyA9IEV4cHIucHNldWRvcztcbiAgICAgICAgRXhwci5zZXRGaWx0ZXJzID0gbmV3IHNldEZpbHRlcnMoKTtcblxuICAgICAgICB0b2tlbml6ZSA9IFNpenpsZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcGFyc2VPbmx5KSB7XG4gICAgICAgICAgdmFyIG1hdGNoZWQsXG4gICAgICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIHNvRmFyLFxuICAgICAgICAgICAgICBncm91cHMsXG4gICAgICAgICAgICAgIHByZUZpbHRlcnMsXG4gICAgICAgICAgICAgIGNhY2hlZCA9IHRva2VuQ2FjaGVbc2VsZWN0b3IgKyBcIiBcIl07XG5cbiAgICAgICAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VPbmx5ID8gMCA6IGNhY2hlZC5zbGljZSgwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzb0ZhciA9IHNlbGVjdG9yO1xuICAgICAgICAgIGdyb3VwcyA9IFtdO1xuICAgICAgICAgIHByZUZpbHRlcnMgPSBFeHByLnByZUZpbHRlcjtcblxuICAgICAgICAgIHdoaWxlIChzb0Zhcikge1xuICAgICAgICAgICAgLy8gQ29tbWEgYW5kIGZpcnN0IHJ1blxuICAgICAgICAgICAgaWYgKCFtYXRjaGVkIHx8IChtYXRjaCA9IHJjb21tYS5leGVjKHNvRmFyKSkpIHtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgY29uc3VtZSB0cmFpbGluZyBjb21tYXMgYXMgdmFsaWRcbiAgICAgICAgICAgICAgICBzb0ZhciA9IHNvRmFyLnNsaWNlKG1hdGNoWzBdLmxlbmd0aCkgfHwgc29GYXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBncm91cHMucHVzaCh0b2tlbnMgPSBbXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoZWQgPSBmYWxzZTsgLy8gQ29tYmluYXRvcnNcblxuICAgICAgICAgICAgaWYgKG1hdGNoID0gcmNvbWJpbmF0b3JzLmV4ZWMoc29GYXIpKSB7XG4gICAgICAgICAgICAgIG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG1hdGNoZWQsXG4gICAgICAgICAgICAgICAgLy8gQ2FzdCBkZXNjZW5kYW50IGNvbWJpbmF0b3JzIHRvIHNwYWNlXG4gICAgICAgICAgICAgICAgdHlwZTogbWF0Y2hbMF0ucmVwbGFjZShydHJpbSwgXCIgXCIpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBzb0ZhciA9IHNvRmFyLnNsaWNlKG1hdGNoZWQubGVuZ3RoKTtcbiAgICAgICAgICAgIH0gLy8gRmlsdGVyc1xuXG5cbiAgICAgICAgICAgIGZvciAodHlwZSBpbiBFeHByLmZpbHRlcikge1xuICAgICAgICAgICAgICBpZiAoKG1hdGNoID0gbWF0Y2hFeHByW3R5cGVdLmV4ZWMoc29GYXIpKSAmJiAoIXByZUZpbHRlcnNbdHlwZV0gfHwgKG1hdGNoID0gcHJlRmlsdGVyc1t0eXBlXShtYXRjaCkpKSkge1xuICAgICAgICAgICAgICAgIG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBtYXRjaGVkLFxuICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgIG1hdGNoZXM6IG1hdGNoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc29GYXIgPSBzb0Zhci5zbGljZShtYXRjaGVkLmxlbmd0aCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGludmFsaWQgZXhjZXNzXG4gICAgICAgICAgLy8gaWYgd2UncmUganVzdCBwYXJzaW5nXG4gICAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aHJvdyBhbiBlcnJvciBvciByZXR1cm4gdG9rZW5zXG5cblxuICAgICAgICAgIHJldHVybiBwYXJzZU9ubHkgPyBzb0Zhci5sZW5ndGggOiBzb0ZhciA/IFNpenpsZS5lcnJvcihzZWxlY3RvcikgOiAvLyBDYWNoZSB0aGUgdG9rZW5zXG4gICAgICAgICAgdG9rZW5DYWNoZShzZWxlY3RvciwgZ3JvdXBzKS5zbGljZSgwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiB0b1NlbGVjdG9yKHRva2Vucykge1xuICAgICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgICAgbGVuID0gdG9rZW5zLmxlbmd0aCxcbiAgICAgICAgICAgICAgc2VsZWN0b3IgPSBcIlwiO1xuXG4gICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgc2VsZWN0b3IgKz0gdG9rZW5zW2ldLnZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZENvbWJpbmF0b3IobWF0Y2hlciwgY29tYmluYXRvciwgYmFzZSkge1xuICAgICAgICAgIHZhciBkaXIgPSBjb21iaW5hdG9yLmRpcixcbiAgICAgICAgICAgICAgc2tpcCA9IGNvbWJpbmF0b3IubmV4dCxcbiAgICAgICAgICAgICAga2V5ID0gc2tpcCB8fCBkaXIsXG4gICAgICAgICAgICAgIGNoZWNrTm9uRWxlbWVudHMgPSBiYXNlICYmIGtleSA9PT0gXCJwYXJlbnROb2RlXCIsXG4gICAgICAgICAgICAgIGRvbmVOYW1lID0gZG9uZSsrO1xuICAgICAgICAgIHJldHVybiBjb21iaW5hdG9yLmZpcnN0ID8gLy8gQ2hlY2sgYWdhaW5zdCBjbG9zZXN0IGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50XG4gICAgICAgICAgZnVuY3Rpb24gKGVsZW0sIGNvbnRleHQsIHhtbCkge1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0gPSBlbGVtW2Rpcl0pIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVyKGVsZW0sIGNvbnRleHQsIHhtbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gOiAvLyBDaGVjayBhZ2FpbnN0IGFsbCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudHNcbiAgICAgICAgICBmdW5jdGlvbiAoZWxlbSwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgICAgICB2YXIgb2xkQ2FjaGUsXG4gICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGUsXG4gICAgICAgICAgICAgICAgb3V0ZXJDYWNoZSxcbiAgICAgICAgICAgICAgICBuZXdDYWNoZSA9IFtkaXJydW5zLCBkb25lTmFtZV07IC8vIFdlIGNhbid0IHNldCBhcmJpdHJhcnkgZGF0YSBvbiBYTUwgbm9kZXMsIHNvIHRoZXkgZG9uJ3QgYmVuZWZpdCBmcm9tIGNvbWJpbmF0b3IgY2FjaGluZ1xuXG4gICAgICAgICAgICBpZiAoeG1sKSB7XG4gICAgICAgICAgICAgIHdoaWxlIChlbGVtID0gZWxlbVtkaXJdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXIoZWxlbSwgY29udGV4dCwgeG1sKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdoaWxlIChlbGVtID0gZWxlbVtkaXJdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgb3V0ZXJDYWNoZSA9IGVsZW1bZXhwYW5kb10gfHwgKGVsZW1bZXhwYW5kb10gPSB7fSk7IC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcbiAgICAgICAgICAgICAgICAgIC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXG4gICAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbZWxlbS51bmlxdWVJRF0gfHwgKG91dGVyQ2FjaGVbZWxlbS51bmlxdWVJRF0gPSB7fSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChza2lwICYmIHNraXAgPT09IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbVtkaXJdIHx8IGVsZW07XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChvbGRDYWNoZSA9IHVuaXF1ZUNhY2hlW2tleV0pICYmIG9sZENhY2hlWzBdID09PSBkaXJydW5zICYmIG9sZENhY2hlWzFdID09PSBkb25lTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBc3NpZ24gdG8gbmV3Q2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q2FjaGVbMl0gPSBvbGRDYWNoZVsyXTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJldXNlIG5ld2NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGVba2V5XSA9IG5ld0NhY2hlOyAvLyBBIG1hdGNoIG1lYW5zIHdlJ3JlIGRvbmU7IGEgZmFpbCBtZWFucyB3ZSBoYXZlIHRvIGtlZXAgY2hlY2tpbmdcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Q2FjaGVbMl0gPSBtYXRjaGVyKGVsZW0sIGNvbnRleHQsIHhtbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGVsZW1lbnRNYXRjaGVyKG1hdGNoZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoZXJzLmxlbmd0aCA+IDEgPyBmdW5jdGlvbiAoZWxlbSwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG1hdGNoZXJzLmxlbmd0aDtcblxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICBpZiAoIW1hdGNoZXJzW2ldKGVsZW0sIGNvbnRleHQsIHhtbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSA6IG1hdGNoZXJzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbXVsdGlwbGVDb250ZXh0cyhzZWxlY3RvciwgY29udGV4dHMsIHJlc3VsdHMpIHtcbiAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgIGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIFNpenpsZShzZWxlY3RvciwgY29udGV4dHNbaV0sIHJlc3VsdHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY29uZGVuc2UodW5tYXRjaGVkLCBtYXAsIGZpbHRlciwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgICAgdmFyIGVsZW0sXG4gICAgICAgICAgICAgIG5ld1VubWF0Y2hlZCA9IFtdLFxuICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgbGVuID0gdW5tYXRjaGVkLmxlbmd0aCxcbiAgICAgICAgICAgICAgbWFwcGVkID0gbWFwICE9IG51bGw7XG5cbiAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZWxlbSA9IHVubWF0Y2hlZFtpXSkge1xuICAgICAgICAgICAgICBpZiAoIWZpbHRlciB8fCBmaWx0ZXIoZWxlbSwgY29udGV4dCwgeG1sKSkge1xuICAgICAgICAgICAgICAgIG5ld1VubWF0Y2hlZC5wdXNoKGVsZW0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1hcHBlZCkge1xuICAgICAgICAgICAgICAgICAgbWFwLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ld1VubWF0Y2hlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldE1hdGNoZXIocHJlRmlsdGVyLCBzZWxlY3RvciwgbWF0Y2hlciwgcG9zdEZpbHRlciwgcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yKSB7XG4gICAgICAgICAgaWYgKHBvc3RGaWx0ZXIgJiYgIXBvc3RGaWx0ZXJbZXhwYW5kb10pIHtcbiAgICAgICAgICAgIHBvc3RGaWx0ZXIgPSBzZXRNYXRjaGVyKHBvc3RGaWx0ZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwb3N0RmluZGVyICYmICFwb3N0RmluZGVyW2V4cGFuZG9dKSB7XG4gICAgICAgICAgICBwb3N0RmluZGVyID0gc2V0TWF0Y2hlcihwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHNlZWQsIHJlc3VsdHMsIGNvbnRleHQsIHhtbCkge1xuICAgICAgICAgICAgdmFyIHRlbXAsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBlbGVtLFxuICAgICAgICAgICAgICAgIHByZU1hcCA9IFtdLFxuICAgICAgICAgICAgICAgIHBvc3RNYXAgPSBbXSxcbiAgICAgICAgICAgICAgICBwcmVleGlzdGluZyA9IHJlc3VsdHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIC8vIEdldCBpbml0aWFsIGVsZW1lbnRzIGZyb20gc2VlZCBvciBjb250ZXh0XG4gICAgICAgICAgICBlbGVtcyA9IHNlZWQgfHwgbXVsdGlwbGVDb250ZXh0cyhzZWxlY3RvciB8fCBcIipcIiwgY29udGV4dC5ub2RlVHlwZSA/IFtjb250ZXh0XSA6IGNvbnRleHQsIFtdKSxcbiAgICAgICAgICAgICAgICAvLyBQcmVmaWx0ZXIgdG8gZ2V0IG1hdGNoZXIgaW5wdXQsIHByZXNlcnZpbmcgYSBtYXAgZm9yIHNlZWQtcmVzdWx0cyBzeW5jaHJvbml6YXRpb25cbiAgICAgICAgICAgIG1hdGNoZXJJbiA9IHByZUZpbHRlciAmJiAoc2VlZCB8fCAhc2VsZWN0b3IpID8gY29uZGVuc2UoZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwpIDogZWxlbXMsXG4gICAgICAgICAgICAgICAgbWF0Y2hlck91dCA9IG1hdGNoZXIgPyAvLyBJZiB3ZSBoYXZlIGEgcG9zdEZpbmRlciwgb3IgZmlsdGVyZWQgc2VlZCwgb3Igbm9uLXNlZWQgcG9zdEZpbHRlciBvciBwcmVleGlzdGluZyByZXN1bHRzLFxuICAgICAgICAgICAgcG9zdEZpbmRlciB8fCAoc2VlZCA/IHByZUZpbHRlciA6IHByZWV4aXN0aW5nIHx8IHBvc3RGaWx0ZXIpID8gLy8gLi4uaW50ZXJtZWRpYXRlIHByb2Nlc3NpbmcgaXMgbmVjZXNzYXJ5XG4gICAgICAgICAgICBbXSA6IC8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxuICAgICAgICAgICAgcmVzdWx0cyA6IG1hdGNoZXJJbjsgLy8gRmluZCBwcmltYXJ5IG1hdGNoZXNcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXIpIHtcbiAgICAgICAgICAgICAgbWF0Y2hlcihtYXRjaGVySW4sIG1hdGNoZXJPdXQsIGNvbnRleHQsIHhtbCk7XG4gICAgICAgICAgICB9IC8vIEFwcGx5IHBvc3RGaWx0ZXJcblxuXG4gICAgICAgICAgICBpZiAocG9zdEZpbHRlcikge1xuICAgICAgICAgICAgICB0ZW1wID0gY29uZGVuc2UobWF0Y2hlck91dCwgcG9zdE1hcCk7XG4gICAgICAgICAgICAgIHBvc3RGaWx0ZXIodGVtcCwgW10sIGNvbnRleHQsIHhtbCk7IC8vIFVuLW1hdGNoIGZhaWxpbmcgZWxlbWVudHMgYnkgbW92aW5nIHRoZW0gYmFjayB0byBtYXRjaGVySW5cblxuICAgICAgICAgICAgICBpID0gdGVtcC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtID0gdGVtcFtpXSkge1xuICAgICAgICAgICAgICAgICAgbWF0Y2hlck91dFtwb3N0TWFwW2ldXSA9ICEobWF0Y2hlckluW3Bvc3RNYXBbaV1dID0gZWxlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWVkKSB7XG4gICAgICAgICAgICAgIGlmIChwb3N0RmluZGVyIHx8IHByZUZpbHRlcikge1xuICAgICAgICAgICAgICAgIGlmIChwb3N0RmluZGVyKSB7XG4gICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcbiAgICAgICAgICAgICAgICAgIHRlbXAgPSBbXTtcbiAgICAgICAgICAgICAgICAgIGkgPSBtYXRjaGVyT3V0Lmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbSA9IG1hdGNoZXJPdXRbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG1hdGNoZXJJbiBzaW5jZSBlbGVtIGlzIG5vdCB5ZXQgYSBmaW5hbCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaChtYXRjaGVySW5baV0gPSBlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBwb3N0RmluZGVyKG51bGwsIG1hdGNoZXJPdXQgPSBbXSwgdGVtcCwgeG1sKTtcbiAgICAgICAgICAgICAgICB9IC8vIE1vdmUgbWF0Y2hlZCBlbGVtZW50cyBmcm9tIHNlZWQgdG8gcmVzdWx0cyB0byBrZWVwIHRoZW0gc3luY2hyb25pemVkXG5cblxuICAgICAgICAgICAgICAgIGkgPSBtYXRjaGVyT3V0Lmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICAgIGlmICgoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICYmICh0ZW1wID0gcG9zdEZpbmRlciA/IGluZGV4T2Yoc2VlZCwgZWxlbSkgOiBwcmVNYXBbaV0pID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VlZFt0ZW1wXSA9ICEocmVzdWx0c1t0ZW1wXSA9IGVsZW0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSAvLyBBZGQgZWxlbWVudHMgdG8gcmVzdWx0cywgdGhyb3VnaCBwb3N0RmluZGVyIGlmIGRlZmluZWRcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWF0Y2hlck91dCA9IGNvbmRlbnNlKG1hdGNoZXJPdXQgPT09IHJlc3VsdHMgPyBtYXRjaGVyT3V0LnNwbGljZShwcmVleGlzdGluZywgbWF0Y2hlck91dC5sZW5ndGgpIDogbWF0Y2hlck91dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHBvc3RGaW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwb3N0RmluZGVyKG51bGwsIHJlc3VsdHMsIG1hdGNoZXJPdXQsIHhtbCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHVzaC5hcHBseShyZXN1bHRzLCBtYXRjaGVyT3V0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbWF0Y2hlckZyb21Ub2tlbnModG9rZW5zKSB7XG4gICAgICAgICAgdmFyIGNoZWNrQ29udGV4dCxcbiAgICAgICAgICAgICAgbWF0Y2hlcixcbiAgICAgICAgICAgICAgaixcbiAgICAgICAgICAgICAgbGVuID0gdG9rZW5zLmxlbmd0aCxcbiAgICAgICAgICAgICAgbGVhZGluZ1JlbGF0aXZlID0gRXhwci5yZWxhdGl2ZVt0b2tlbnNbMF0udHlwZV0sXG4gICAgICAgICAgICAgIGltcGxpY2l0UmVsYXRpdmUgPSBsZWFkaW5nUmVsYXRpdmUgfHwgRXhwci5yZWxhdGl2ZVtcIiBcIl0sXG4gICAgICAgICAgICAgIGkgPSBsZWFkaW5nUmVsYXRpdmUgPyAxIDogMCxcbiAgICAgICAgICAgICAgLy8gVGhlIGZvdW5kYXRpb25hbCBtYXRjaGVyIGVuc3VyZXMgdGhhdCBlbGVtZW50cyBhcmUgcmVhY2hhYmxlIGZyb20gdG9wLWxldmVsIGNvbnRleHQocylcbiAgICAgICAgICBtYXRjaENvbnRleHQgPSBhZGRDb21iaW5hdG9yKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbSA9PT0gY2hlY2tDb250ZXh0O1xuICAgICAgICAgIH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUpLFxuICAgICAgICAgICAgICBtYXRjaEFueUNvbnRleHQgPSBhZGRDb21iaW5hdG9yKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhPZihjaGVja0NvbnRleHQsIGVsZW0pID4gLTE7XG4gICAgICAgICAgfSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSksXG4gICAgICAgICAgICAgIG1hdGNoZXJzID0gW2Z1bmN0aW9uIChlbGVtLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSAhbGVhZGluZ1JlbGF0aXZlICYmICh4bWwgfHwgY29udGV4dCAhPT0gb3V0ZXJtb3N0Q29udGV4dCkgfHwgKChjaGVja0NvbnRleHQgPSBjb250ZXh0KS5ub2RlVHlwZSA/IG1hdGNoQ29udGV4dChlbGVtLCBjb250ZXh0LCB4bWwpIDogbWF0Y2hBbnlDb250ZXh0KGVsZW0sIGNvbnRleHQsIHhtbCkpOyAvLyBBdm9pZCBoYW5naW5nIG9udG8gZWxlbWVudCAoaXNzdWUgIzI5OSlcblxuICAgICAgICAgICAgY2hlY2tDb250ZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfV07XG5cbiAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobWF0Y2hlciA9IEV4cHIucmVsYXRpdmVbdG9rZW5zW2ldLnR5cGVdKSB7XG4gICAgICAgICAgICAgIG1hdGNoZXJzID0gW2FkZENvbWJpbmF0b3IoZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpLCBtYXRjaGVyKV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtYXRjaGVyID0gRXhwci5maWx0ZXJbdG9rZW5zW2ldLnR5cGVdLmFwcGx5KG51bGwsIHRva2Vuc1tpXS5tYXRjaGVzKTsgLy8gUmV0dXJuIHNwZWNpYWwgdXBvbiBzZWVpbmcgYSBwb3NpdGlvbmFsIG1hdGNoZXJcblxuICAgICAgICAgICAgICBpZiAobWF0Y2hlcltleHBhbmRvXSkge1xuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xuICAgICAgICAgICAgICAgIGogPSArK2k7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoRXhwci5yZWxhdGl2ZVt0b2tlbnNbal0udHlwZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldE1hdGNoZXIoaSA+IDEgJiYgZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpLCBpID4gMSAmJiB0b1NlbGVjdG9yKCAvLyBJZiB0aGUgcHJlY2VkaW5nIHRva2VuIHdhcyBhIGRlc2NlbmRhbnQgY29tYmluYXRvciwgaW5zZXJ0IGFuIGltcGxpY2l0IGFueS1lbGVtZW50IGAqYFxuICAgICAgICAgICAgICAgIHRva2Vucy5zbGljZSgwLCBpIC0gMSkuY29uY2F0KHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB0b2tlbnNbaSAtIDJdLnR5cGUgPT09IFwiIFwiID8gXCIqXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgfSkpLnJlcGxhY2UocnRyaW0sIFwiJDFcIiksIG1hdGNoZXIsIGkgPCBqICYmIG1hdGNoZXJGcm9tVG9rZW5zKHRva2Vucy5zbGljZShpLCBqKSksIGogPCBsZW4gJiYgbWF0Y2hlckZyb21Ub2tlbnModG9rZW5zID0gdG9rZW5zLnNsaWNlKGopKSwgaiA8IGxlbiAmJiB0b1NlbGVjdG9yKHRva2VucykpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbWF0Y2hlcnMucHVzaChtYXRjaGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMpIHtcbiAgICAgICAgICB2YXIgYnlTZXQgPSBzZXRNYXRjaGVycy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICBieUVsZW1lbnQgPSBlbGVtZW50TWF0Y2hlcnMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgc3VwZXJNYXRjaGVyID0gZnVuY3Rpb24gc3VwZXJNYXRjaGVyKHNlZWQsIGNvbnRleHQsIHhtbCwgcmVzdWx0cywgb3V0ZXJtb3N0KSB7XG4gICAgICAgICAgICB2YXIgZWxlbSxcbiAgICAgICAgICAgICAgICBqLFxuICAgICAgICAgICAgICAgIG1hdGNoZXIsXG4gICAgICAgICAgICAgICAgbWF0Y2hlZENvdW50ID0gMCxcbiAgICAgICAgICAgICAgICBpID0gXCIwXCIsXG4gICAgICAgICAgICAgICAgdW5tYXRjaGVkID0gc2VlZCAmJiBbXSxcbiAgICAgICAgICAgICAgICBzZXRNYXRjaGVkID0gW10sXG4gICAgICAgICAgICAgICAgY29udGV4dEJhY2t1cCA9IG91dGVybW9zdENvbnRleHQsXG4gICAgICAgICAgICAgICAgLy8gV2UgbXVzdCBhbHdheXMgaGF2ZSBlaXRoZXIgc2VlZCBlbGVtZW50cyBvciBvdXRlcm1vc3QgY29udGV4dFxuICAgICAgICAgICAgZWxlbXMgPSBzZWVkIHx8IGJ5RWxlbWVudCAmJiBFeHByLmZpbmRbXCJUQUdcIl0oXCIqXCIsIG91dGVybW9zdCksXG4gICAgICAgICAgICAgICAgLy8gVXNlIGludGVnZXIgZGlycnVucyBpZmYgdGhpcyBpcyB0aGUgb3V0ZXJtb3N0IG1hdGNoZXJcbiAgICAgICAgICAgIGRpcnJ1bnNVbmlxdWUgPSBkaXJydW5zICs9IGNvbnRleHRCYWNrdXAgPT0gbnVsbCA/IDEgOiBNYXRoLnJhbmRvbSgpIHx8IDAuMSxcbiAgICAgICAgICAgICAgICBsZW4gPSBlbGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChvdXRlcm1vc3QpIHtcbiAgICAgICAgICAgICAgb3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHQgPT09IGRvY3VtZW50IHx8IGNvbnRleHQgfHwgb3V0ZXJtb3N0O1xuICAgICAgICAgICAgfSAvLyBBZGQgZWxlbWVudHMgcGFzc2luZyBlbGVtZW50TWF0Y2hlcnMgZGlyZWN0bHkgdG8gcmVzdWx0c1xuICAgICAgICAgICAgLy8gU3VwcG9ydDogSUU8OSwgU2FmYXJpXG4gICAgICAgICAgICAvLyBUb2xlcmF0ZSBOb2RlTGlzdCBwcm9wZXJ0aWVzIChJRTogXCJsZW5ndGhcIjsgU2FmYXJpOiA8bnVtYmVyPikgbWF0Y2hpbmcgZWxlbWVudHMgYnkgaWRcblxuXG4gICAgICAgICAgICBmb3IgKDsgaSAhPT0gbGVuICYmIChlbGVtID0gZWxlbXNbaV0pICE9IG51bGw7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoYnlFbGVtZW50ICYmIGVsZW0pIHtcbiAgICAgICAgICAgICAgICBqID0gMDtcblxuICAgICAgICAgICAgICAgIGlmICghY29udGV4dCAmJiBlbGVtLm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICBzZXREb2N1bWVudChlbGVtKTtcbiAgICAgICAgICAgICAgICAgIHhtbCA9ICFkb2N1bWVudElzSFRNTDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAobWF0Y2hlciA9IGVsZW1lbnRNYXRjaGVyc1tqKytdKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcihlbGVtLCBjb250ZXh0IHx8IGRvY3VtZW50LCB4bWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG91dGVybW9zdCkge1xuICAgICAgICAgICAgICAgICAgZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IC8vIFRyYWNrIHVubWF0Y2hlZCBlbGVtZW50cyBmb3Igc2V0IGZpbHRlcnNcblxuXG4gICAgICAgICAgICAgIGlmIChieVNldCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXkgd2lsbCBoYXZlIGdvbmUgdGhyb3VnaCBhbGwgcG9zc2libGUgbWF0Y2hlcnNcbiAgICAgICAgICAgICAgICBpZiAoZWxlbSA9ICFtYXRjaGVyICYmIGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgIG1hdGNoZWRDb3VudC0tO1xuICAgICAgICAgICAgICAgIH0gLy8gTGVuZ3RoZW4gdGhlIGFycmF5IGZvciBldmVyeSBlbGVtZW50LCBtYXRjaGVkIG9yIG5vdFxuXG5cbiAgICAgICAgICAgICAgICBpZiAoc2VlZCkge1xuICAgICAgICAgICAgICAgICAgdW5tYXRjaGVkLnB1c2goZWxlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIGBpYCBpcyBub3cgdGhlIGNvdW50IG9mIGVsZW1lbnRzIHZpc2l0ZWQgYWJvdmUsIGFuZCBhZGRpbmcgaXQgdG8gYG1hdGNoZWRDb3VudGBcbiAgICAgICAgICAgIC8vIG1ha2VzIHRoZSBsYXR0ZXIgbm9ubmVnYXRpdmUuXG5cblxuICAgICAgICAgICAgbWF0Y2hlZENvdW50ICs9IGk7IC8vIEFwcGx5IHNldCBmaWx0ZXJzIHRvIHVubWF0Y2hlZCBlbGVtZW50c1xuICAgICAgICAgICAgLy8gTk9URTogVGhpcyBjYW4gYmUgc2tpcHBlZCBpZiB0aGVyZSBhcmUgbm8gdW5tYXRjaGVkIGVsZW1lbnRzIChpLmUuLCBgbWF0Y2hlZENvdW50YFxuICAgICAgICAgICAgLy8gZXF1YWxzIGBpYCksIHVubGVzcyB3ZSBkaWRuJ3QgdmlzaXQgX2FueV8gZWxlbWVudHMgaW4gdGhlIGFib3ZlIGxvb3AgYmVjYXVzZSB3ZSBoYXZlXG4gICAgICAgICAgICAvLyBubyBlbGVtZW50IG1hdGNoZXJzIGFuZCBubyBzZWVkLlxuICAgICAgICAgICAgLy8gSW5jcmVtZW50aW5nIGFuIGluaXRpYWxseS1zdHJpbmcgXCIwXCIgYGlgIGFsbG93cyBgaWAgdG8gcmVtYWluIGEgc3RyaW5nIG9ubHkgaW4gdGhhdFxuICAgICAgICAgICAgLy8gY2FzZSwgd2hpY2ggd2lsbCByZXN1bHQgaW4gYSBcIjAwXCIgYG1hdGNoZWRDb3VudGAgdGhhdCBkaWZmZXJzIGZyb20gYGlgIGJ1dCBpcyBhbHNvXG4gICAgICAgICAgICAvLyBudW1lcmljYWxseSB6ZXJvLlxuXG4gICAgICAgICAgICBpZiAoYnlTZXQgJiYgaSAhPT0gbWF0Y2hlZENvdW50KSB7XG4gICAgICAgICAgICAgIGogPSAwO1xuXG4gICAgICAgICAgICAgIHdoaWxlIChtYXRjaGVyID0gc2V0TWF0Y2hlcnNbaisrXSkge1xuICAgICAgICAgICAgICAgIG1hdGNoZXIodW5tYXRjaGVkLCBzZXRNYXRjaGVkLCBjb250ZXh0LCB4bWwpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHNlZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZWludGVncmF0ZSBlbGVtZW50IG1hdGNoZXMgdG8gZWxpbWluYXRlIHRoZSBuZWVkIGZvciBzb3J0aW5nXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZWRDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodW5tYXRjaGVkW2ldIHx8IHNldE1hdGNoZWRbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2hlZFtpXSA9IHBvcC5jYWxsKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBEaXNjYXJkIGluZGV4IHBsYWNlaG9sZGVyIHZhbHVlcyB0byBnZXQgb25seSBhY3R1YWwgbWF0Y2hlc1xuXG5cbiAgICAgICAgICAgICAgICBzZXRNYXRjaGVkID0gY29uZGVuc2Uoc2V0TWF0Y2hlZCk7XG4gICAgICAgICAgICAgIH0gLy8gQWRkIG1hdGNoZXMgdG8gcmVzdWx0c1xuXG5cbiAgICAgICAgICAgICAgcHVzaC5hcHBseShyZXN1bHRzLCBzZXRNYXRjaGVkKTsgLy8gU2VlZGxlc3Mgc2V0IG1hdGNoZXMgc3VjY2VlZGluZyBtdWx0aXBsZSBzdWNjZXNzZnVsIG1hdGNoZXJzIHN0aXB1bGF0ZSBzb3J0aW5nXG5cbiAgICAgICAgICAgICAgaWYgKG91dGVybW9zdCAmJiAhc2VlZCAmJiBzZXRNYXRjaGVkLmxlbmd0aCA+IDAgJiYgbWF0Y2hlZENvdW50ICsgc2V0TWF0Y2hlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIFNpenpsZS51bmlxdWVTb3J0KHJlc3VsdHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIE92ZXJyaWRlIG1hbmlwdWxhdGlvbiBvZiBnbG9iYWxzIGJ5IG5lc3RlZCBtYXRjaGVyc1xuXG5cbiAgICAgICAgICAgIGlmIChvdXRlcm1vc3QpIHtcbiAgICAgICAgICAgICAgZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG4gICAgICAgICAgICAgIG91dGVybW9zdENvbnRleHQgPSBjb250ZXh0QmFja3VwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdW5tYXRjaGVkO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gYnlTZXQgPyBtYXJrRnVuY3Rpb24oc3VwZXJNYXRjaGVyKSA6IHN1cGVyTWF0Y2hlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBpbGUgPSBTaXp6bGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgbWF0Y2hcbiAgICAgICAgLyogSW50ZXJuYWwgVXNlIE9ubHkgKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgIHNldE1hdGNoZXJzID0gW10sXG4gICAgICAgICAgICAgIGVsZW1lbnRNYXRjaGVycyA9IFtdLFxuICAgICAgICAgICAgICBjYWNoZWQgPSBjb21waWxlckNhY2hlW3NlbGVjdG9yICsgXCIgXCJdO1xuXG4gICAgICAgICAgaWYgKCFjYWNoZWQpIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgZnVuY3Rpb24gb2YgcmVjdXJzaXZlIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNoZWNrIGVhY2ggZWxlbWVudFxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICBtYXRjaCA9IHRva2VuaXplKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSA9IG1hdGNoLmxlbmd0aDtcblxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICBjYWNoZWQgPSBtYXRjaGVyRnJvbVRva2VucyhtYXRjaFtpXSk7XG5cbiAgICAgICAgICAgICAgaWYgKGNhY2hlZFtleHBhbmRvXSkge1xuICAgICAgICAgICAgICAgIHNldE1hdGNoZXJzLnB1c2goY2FjaGVkKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50TWF0Y2hlcnMucHVzaChjYWNoZWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIENhY2hlIHRoZSBjb21waWxlZCBmdW5jdGlvblxuXG5cbiAgICAgICAgICAgIGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGUoc2VsZWN0b3IsIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyhlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzKSk7IC8vIFNhdmUgc2VsZWN0b3IgYW5kIHRva2VuaXphdGlvblxuXG4gICAgICAgICAgICBjYWNoZWQuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY2FjaGVkO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBsb3ctbGV2ZWwgc2VsZWN0aW9uIGZ1bmN0aW9uIHRoYXQgd29ya3Mgd2l0aCBTaXp6bGUncyBjb21waWxlZFxuICAgICAgICAgKiAgc2VsZWN0b3IgZnVuY3Rpb25zXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzZWxlY3RvciBBIHNlbGVjdG9yIG9yIGEgcHJlLWNvbXBpbGVkXG4gICAgICAgICAqICBzZWxlY3RvciBmdW5jdGlvbiBidWlsdCB3aXRoIFNpenpsZS5jb21waWxlXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGV4dFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0c11cbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gW3NlZWRdIEEgc2V0IG9mIGVsZW1lbnRzIHRvIG1hdGNoIGFnYWluc3RcbiAgICAgICAgICovXG5cblxuICAgICAgICBzZWxlY3QgPSBTaXp6bGUuc2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkKSB7XG4gICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGZpbmQsXG4gICAgICAgICAgICAgIGNvbXBpbGVkID0gdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgc2VsZWN0b3IsXG4gICAgICAgICAgICAgIG1hdGNoID0gIXNlZWQgJiYgdG9rZW5pemUoc2VsZWN0b3IgPSBjb21waWxlZC5zZWxlY3RvciB8fCBzZWxlY3Rvcik7XG4gICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgW107IC8vIFRyeSB0byBtaW5pbWl6ZSBvcGVyYXRpb25zIGlmIHRoZXJlIGlzIG9ubHkgb25lIHNlbGVjdG9yIGluIHRoZSBsaXN0IGFuZCBubyBzZWVkXG4gICAgICAgICAgLy8gKHRoZSBsYXR0ZXIgb2Ygd2hpY2ggZ3VhcmFudGVlcyB1cyBjb250ZXh0KVxuXG4gICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gUmVkdWNlIGNvbnRleHQgaWYgdGhlIGxlYWRpbmcgY29tcG91bmQgc2VsZWN0b3IgaXMgYW4gSURcbiAgICAgICAgICAgIHRva2VucyA9IG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoMCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbnMubGVuZ3RoID4gMiAmJiAodG9rZW4gPSB0b2tlbnNbMF0pLnR5cGUgPT09IFwiSURcIiAmJiBjb250ZXh0Lm5vZGVUeXBlID09PSA5ICYmIGRvY3VtZW50SXNIVE1MICYmIEV4cHIucmVsYXRpdmVbdG9rZW5zWzFdLnR5cGVdKSB7XG4gICAgICAgICAgICAgIGNvbnRleHQgPSAoRXhwci5maW5kW1wiSURcIl0odG9rZW4ubWF0Y2hlc1swXS5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKSwgY29udGV4dCkgfHwgW10pWzBdO1xuXG4gICAgICAgICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzOyAvLyBQcmVjb21waWxlZCBtYXRjaGVycyB3aWxsIHN0aWxsIHZlcmlmeSBhbmNlc3RyeSwgc28gc3RlcCB1cCBhIGxldmVsXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcGlsZWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gY29udGV4dC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZSh0b2tlbnMuc2hpZnQoKS52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgfSAvLyBGZXRjaCBhIHNlZWQgc2V0IGZvciByaWdodC10by1sZWZ0IG1hdGNoaW5nXG5cblxuICAgICAgICAgICAgaSA9IG1hdGNoRXhwcltcIm5lZWRzQ29udGV4dFwiXS50ZXN0KHNlbGVjdG9yKSA/IDAgOiB0b2tlbnMubGVuZ3RoO1xuXG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldOyAvLyBBYm9ydCBpZiB3ZSBoaXQgYSBjb21iaW5hdG9yXG5cbiAgICAgICAgICAgICAgaWYgKEV4cHIucmVsYXRpdmVbdHlwZSA9IHRva2VuLnR5cGVdKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZmluZCA9IEV4cHIuZmluZFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIFNlYXJjaCwgZXhwYW5kaW5nIGNvbnRleHQgZm9yIGxlYWRpbmcgc2libGluZyBjb21iaW5hdG9yc1xuICAgICAgICAgICAgICAgIGlmIChzZWVkID0gZmluZCh0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpLCByc2libGluZy50ZXN0KHRva2Vuc1swXS50eXBlKSAmJiB0ZXN0Q29udGV4dChjb250ZXh0LnBhcmVudE5vZGUpIHx8IGNvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAvLyBJZiBzZWVkIGlzIGVtcHR5IG9yIG5vIHRva2VucyByZW1haW4sIHdlIGNhbiByZXR1cm4gZWFybHlcbiAgICAgICAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlZWQubGVuZ3RoICYmIHRvU2VsZWN0b3IodG9rZW5zKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBwdXNoLmFwcGx5KHJlc3VsdHMsIHNlZWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBDb21waWxlIGFuZCBleGVjdXRlIGEgZmlsdGVyaW5nIGZ1bmN0aW9uIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcbiAgICAgICAgICAvLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXG5cblxuICAgICAgICAgIChjb21waWxlZCB8fCBjb21waWxlKHNlbGVjdG9yLCBtYXRjaCkpKHNlZWQsIGNvbnRleHQsICFkb2N1bWVudElzSFRNTCwgcmVzdWx0cywgIWNvbnRleHQgfHwgcnNpYmxpbmcudGVzdChzZWxlY3RvcikgJiYgdGVzdENvbnRleHQoY29udGV4dC5wYXJlbnROb2RlKSB8fCBjb250ZXh0KTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfTsgLy8gT25lLXRpbWUgYXNzaWdubWVudHNcbiAgICAgICAgLy8gU29ydCBzdGFiaWxpdHlcblxuXG4gICAgICAgIHN1cHBvcnQuc29ydFN0YWJsZSA9IGV4cGFuZG8uc3BsaXQoXCJcIikuc29ydChzb3J0T3JkZXIpLmpvaW4oXCJcIikgPT09IGV4cGFuZG87IC8vIFN1cHBvcnQ6IENocm9tZSAxNC0zNStcbiAgICAgICAgLy8gQWx3YXlzIGFzc3VtZSBkdXBsaWNhdGVzIGlmIHRoZXkgYXJlbid0IHBhc3NlZCB0byB0aGUgY29tcGFyaXNvbiBmdW5jdGlvblxuXG4gICAgICAgIHN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcyA9ICEhaGFzRHVwbGljYXRlOyAvLyBJbml0aWFsaXplIGFnYWluc3QgdGhlIGRlZmF1bHQgZG9jdW1lbnRcblxuICAgICAgICBzZXREb2N1bWVudCgpOyAvLyBTdXBwb3J0OiBXZWJraXQ8NTM3LjMyIC0gU2FmYXJpIDYuMC4zL0Nocm9tZSAyNSAoZml4ZWQgaW4gQ2hyb21lIDI3KVxuICAgICAgICAvLyBEZXRhY2hlZCBub2RlcyBjb25mb3VuZGluZ2x5IGZvbGxvdyAqZWFjaCBvdGhlcipcblxuICAgICAgICBzdXBwb3J0LnNvcnREZXRhY2hlZCA9IGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAvLyBTaG91bGQgcmV0dXJuIDEsIGJ1dCByZXR1cm5zIDQgKGZvbGxvd2luZylcbiAgICAgICAgICByZXR1cm4gZWwuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKSAmIDE7XG4gICAgICAgIH0pOyAvLyBTdXBwb3J0OiBJRTw4XG4gICAgICAgIC8vIFByZXZlbnQgYXR0cmlidXRlL3Byb3BlcnR5IFwiaW50ZXJwb2xhdGlvblwiXG4gICAgICAgIC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzY0MjklMjhWUy44NSUyOS5hc3B4XG5cbiAgICAgICAgaWYgKCFhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScjJz48L2E+XCI7XG4gICAgICAgICAgcmV0dXJuIGVsLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSA9PT0gXCIjXCI7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgYWRkSGFuZGxlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLCBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgaXNYTUwpIHtcbiAgICAgICAgICAgIGlmICghaXNYTUwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKG5hbWUsIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0eXBlXCIgPyAxIDogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gLy8gU3VwcG9ydDogSUU8OVxuICAgICAgICAvLyBVc2UgZGVmYXVsdFZhbHVlIGluIHBsYWNlIG9mIGdldEF0dHJpYnV0ZShcInZhbHVlXCIpXG5cblxuICAgICAgICBpZiAoIXN1cHBvcnQuYXR0cmlidXRlcyB8fCAhYXNzZXJ0KGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IFwiPGlucHV0Lz5cIjtcbiAgICAgICAgICBlbC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiXCIpO1xuICAgICAgICAgIHJldHVybiBlbC5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpID09PSBcIlwiO1xuICAgICAgICB9KSkge1xuICAgICAgICAgIGFkZEhhbmRsZShcInZhbHVlXCIsIGZ1bmN0aW9uIChlbGVtLCBuYW1lLCBpc1hNTCkge1xuICAgICAgICAgICAgaWYgKCFpc1hNTCAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIikge1xuICAgICAgICAgICAgICByZXR1cm4gZWxlbS5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gLy8gU3VwcG9ydDogSUU8OVxuICAgICAgICAvLyBVc2UgZ2V0QXR0cmlidXRlTm9kZSB0byBmZXRjaCBib29sZWFucyB3aGVuIGdldEF0dHJpYnV0ZSBsaWVzXG5cblxuICAgICAgICBpZiAoIWFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbDtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBhZGRIYW5kbGUoYm9vbGVhbnMsIGZ1bmN0aW9uIChlbGVtLCBuYW1lLCBpc1hNTCkge1xuICAgICAgICAgICAgdmFyIHZhbDtcblxuICAgICAgICAgICAgaWYgKCFpc1hNTCkge1xuICAgICAgICAgICAgICByZXR1cm4gZWxlbVtuYW1lXSA9PT0gdHJ1ZSA/IG5hbWUudG9Mb3dlckNhc2UoKSA6ICh2YWwgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUobmFtZSkpICYmIHZhbC5zcGVjaWZpZWQgPyB2YWwudmFsdWUgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNpenpsZTtcbiAgICAgIH0od2luZG93KTtcblxuICAgICAgalF1ZXJ5LmZpbmQgPSBTaXp6bGU7XG4gICAgICBqUXVlcnkuZXhwciA9IFNpenpsZS5zZWxlY3RvcnM7IC8vIERlcHJlY2F0ZWRcblxuICAgICAgalF1ZXJ5LmV4cHJbXCI6XCJdID0galF1ZXJ5LmV4cHIucHNldWRvcztcbiAgICAgIGpRdWVyeS51bmlxdWVTb3J0ID0galF1ZXJ5LnVuaXF1ZSA9IFNpenpsZS51bmlxdWVTb3J0O1xuICAgICAgalF1ZXJ5LnRleHQgPSBTaXp6bGUuZ2V0VGV4dDtcbiAgICAgIGpRdWVyeS5pc1hNTERvYyA9IFNpenpsZS5pc1hNTDtcbiAgICAgIGpRdWVyeS5jb250YWlucyA9IFNpenpsZS5jb250YWlucztcbiAgICAgIGpRdWVyeS5lc2NhcGVTZWxlY3RvciA9IFNpenpsZS5lc2NhcGU7XG5cbiAgICAgIHZhciBkaXIgPSBmdW5jdGlvbiBkaXIoZWxlbSwgX2RpciwgdW50aWwpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXSxcbiAgICAgICAgICAgIHRydW5jYXRlID0gdW50aWwgIT09IHVuZGVmaW5lZDtcblxuICAgICAgICB3aGlsZSAoKGVsZW0gPSBlbGVtW19kaXJdKSAmJiBlbGVtLm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIGlmICh0cnVuY2F0ZSAmJiBqUXVlcnkoZWxlbSkuaXModW50aWwpKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaGVkLnB1c2goZWxlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZWQ7XG4gICAgICB9O1xuXG4gICAgICB2YXIgX3NpYmxpbmdzID0gZnVuY3Rpb24gc2libGluZ3MobiwgZWxlbSkge1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IFtdO1xuXG4gICAgICAgIGZvciAoOyBuOyBuID0gbi5uZXh0U2libGluZykge1xuICAgICAgICAgIGlmIChuLm5vZGVUeXBlID09PSAxICYmIG4gIT09IGVsZW0pIHtcbiAgICAgICAgICAgIG1hdGNoZWQucHVzaChuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICAgIH07XG5cbiAgICAgIHZhciBybmVlZHNDb250ZXh0ID0galF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O1xuXG4gICAgICBmdW5jdGlvbiBub2RlTmFtZShlbGVtLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcnNpbmdsZVRhZyA9IC9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pOyAvLyBJbXBsZW1lbnQgdGhlIGlkZW50aWNhbCBmdW5jdGlvbmFsaXR5IGZvciBmaWx0ZXIgYW5kIG5vdFxuXG4gICAgICBmdW5jdGlvbiB3aW5ub3coZWxlbWVudHMsIHF1YWxpZmllciwgbm90KSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHF1YWxpZmllcikpIHtcbiAgICAgICAgICByZXR1cm4galF1ZXJ5LmdyZXAoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gISFxdWFsaWZpZXIuY2FsbChlbGVtLCBpLCBlbGVtKSAhPT0gbm90O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIFNpbmdsZSBlbGVtZW50XG5cblxuICAgICAgICBpZiAocXVhbGlmaWVyLm5vZGVUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIGpRdWVyeS5ncmVwKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0gPT09IHF1YWxpZmllciAhPT0gbm90O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIEFycmF5bGlrZSBvZiBlbGVtZW50cyAoalF1ZXJ5LCBhcmd1bWVudHMsIEFycmF5KVxuXG5cbiAgICAgICAgaWYgKHR5cGVvZiBxdWFsaWZpZXIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4galF1ZXJ5LmdyZXAoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhPZi5jYWxsKHF1YWxpZmllciwgZWxlbSkgPiAtMSAhPT0gbm90O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIEZpbHRlcmVkIGRpcmVjdGx5IGZvciBib3RoIHNpbXBsZSBhbmQgY29tcGxleCBzZWxlY3RvcnNcblxuXG4gICAgICAgIHJldHVybiBqUXVlcnkuZmlsdGVyKHF1YWxpZmllciwgZWxlbWVudHMsIG5vdCk7XG4gICAgICB9XG5cbiAgICAgIGpRdWVyeS5maWx0ZXIgPSBmdW5jdGlvbiAoZXhwciwgZWxlbXMsIG5vdCkge1xuICAgICAgICB2YXIgZWxlbSA9IGVsZW1zWzBdO1xuXG4gICAgICAgIGlmIChub3QpIHtcbiAgICAgICAgICBleHByID0gXCI6bm90KFwiICsgZXhwciArIFwiKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1zLmxlbmd0aCA9PT0gMSAmJiBlbGVtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvcihlbGVtLCBleHByKSA/IFtlbGVtXSA6IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXMoZXhwciwgalF1ZXJ5LmdyZXAoZWxlbXMsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0ubm9kZVR5cGUgPT09IDE7XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICBmaW5kOiBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgIHJldCxcbiAgICAgICAgICAgICAgbGVuID0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKGpRdWVyeShzZWxlY3RvcikuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5jb250YWlucyhzZWxmW2ldLCB0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0ID0gdGhpcy5wdXNoU3RhY2soW10pO1xuXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBqUXVlcnkuZmluZChzZWxlY3Rvciwgc2VsZltpXSwgcmV0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbGVuID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KHJldCkgOiByZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKHNlbGVjdG9yKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKHdpbm5vdyh0aGlzLCBzZWxlY3RvciB8fCBbXSwgZmFsc2UpKTtcbiAgICAgICAgfSxcbiAgICAgICAgbm90OiBmdW5jdGlvbiBub3Qoc2VsZWN0b3IpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2sod2lubm93KHRoaXMsIHNlbGVjdG9yIHx8IFtdLCB0cnVlKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzOiBmdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuICAgICAgICAgIHJldHVybiAhIXdpbm5vdyh0aGlzLCAvLyBJZiB0aGlzIGlzIGEgcG9zaXRpb25hbC9yZWxhdGl2ZSBzZWxlY3RvciwgY2hlY2sgbWVtYmVyc2hpcCBpbiB0aGUgcmV0dXJuZWQgc2V0XG4gICAgICAgICAgLy8gc28gJChcInA6Zmlyc3RcIikuaXMoXCJwOmxhc3RcIikgd29uJ3QgcmV0dXJuIHRydWUgZm9yIGEgZG9jIHdpdGggdHdvIFwicFwiLlxuICAgICAgICAgIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiAmJiBybmVlZHNDb250ZXh0LnRlc3Qoc2VsZWN0b3IpID8galF1ZXJ5KHNlbGVjdG9yKSA6IHNlbGVjdG9yIHx8IFtdLCBmYWxzZSkubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gSW5pdGlhbGl6ZSBhIGpRdWVyeSBvYmplY3RcbiAgICAgIC8vIEEgY2VudHJhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgalF1ZXJ5KGRvY3VtZW50KVxuXG4gICAgICB2YXIgcm9vdGpRdWVyeSxcbiAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgICAgLy8gUHJpb3JpdGl6ZSAjaWQgb3ZlciA8dGFnPiB0byBhdm9pZCBYU1MgdmlhIGxvY2F0aW9uLmhhc2ggKCM5NTIxKVxuICAgICAgLy8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKCMxMTI5MDogbXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAvLyBTaG9ydGN1dCBzaW1wbGUgI2lkIGNhc2UgZm9yIHNwZWVkXG4gICAgICBycXVpY2tFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sXG4gICAgICAgICAgaW5pdCA9IGpRdWVyeS5mbi5pbml0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0LCByb290KSB7XG4gICAgICAgIHZhciBtYXRjaCwgZWxlbTsgLy8gSEFORExFOiAkKFwiXCIpLCAkKG51bGwpLCAkKHVuZGVmaW5lZCksICQoZmFsc2UpXG5cbiAgICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IC8vIE1ldGhvZCBpbml0KCkgYWNjZXB0cyBhbiBhbHRlcm5hdGUgcm9vdGpRdWVyeVxuICAgICAgICAvLyBzbyBtaWdyYXRlIGNhbiBzdXBwb3J0IGpRdWVyeS5zdWIgKGdoLTIxMDEpXG5cblxuICAgICAgICByb290ID0gcm9vdCB8fCByb290alF1ZXJ5OyAvLyBIYW5kbGUgSFRNTCBzdHJpbmdzXG5cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGlmIChzZWxlY3RvclswXSA9PT0gXCI8XCIgJiYgc2VsZWN0b3Jbc2VsZWN0b3IubGVuZ3RoIC0gMV0gPT09IFwiPlwiICYmIHNlbGVjdG9yLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAvLyBBc3N1bWUgdGhhdCBzdHJpbmdzIHRoYXQgc3RhcnQgYW5kIGVuZCB3aXRoIDw+IGFyZSBIVE1MIGFuZCBza2lwIHRoZSByZWdleCBjaGVja1xuICAgICAgICAgICAgbWF0Y2ggPSBbbnVsbCwgc2VsZWN0b3IsIG51bGxdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyhzZWxlY3Rvcik7XG4gICAgICAgICAgfSAvLyBNYXRjaCBodG1sIG9yIG1ha2Ugc3VyZSBubyBjb250ZXh0IGlzIHNwZWNpZmllZCBmb3IgI2lkXG5cblxuICAgICAgICAgIGlmIChtYXRjaCAmJiAobWF0Y2hbMV0gfHwgIWNvbnRleHQpKSB7XG4gICAgICAgICAgICAvLyBIQU5ETEU6ICQoaHRtbCkgLT4gJChhcnJheSlcbiAgICAgICAgICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgICAgICAgICBjb250ZXh0ID0gY29udGV4dCBpbnN0YW5jZW9mIGpRdWVyeSA/IGNvbnRleHRbMF0gOiBjb250ZXh0OyAvLyBPcHRpb24gdG8gcnVuIHNjcmlwdHMgaXMgdHJ1ZSBmb3IgYmFjay1jb21wYXRcbiAgICAgICAgICAgICAgLy8gSW50ZW50aW9uYWxseSBsZXQgdGhlIGVycm9yIGJlIHRocm93biBpZiBwYXJzZUhUTUwgaXMgbm90IHByZXNlbnRcblxuICAgICAgICAgICAgICBqUXVlcnkubWVyZ2UodGhpcywgalF1ZXJ5LnBhcnNlSFRNTChtYXRjaFsxXSwgY29udGV4dCAmJiBjb250ZXh0Lm5vZGVUeXBlID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBkb2N1bWVudCwgdHJ1ZSkpOyAvLyBIQU5ETEU6ICQoaHRtbCwgcHJvcHMpXG5cbiAgICAgICAgICAgICAgaWYgKHJzaW5nbGVUYWcudGVzdChtYXRjaFsxXSkgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKG1hdGNoIGluIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFByb3BlcnRpZXMgb2YgY29udGV4dCBhcmUgY2FsbGVkIGFzIG1ldGhvZHMgaWYgcG9zc2libGVcbiAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbbWF0Y2hdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW21hdGNoXShjb250ZXh0W21hdGNoXSk7IC8vIC4uLmFuZCBvdGhlcndpc2Ugc2V0IGFzIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cihtYXRjaCwgY29udGV4dFttYXRjaF0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzOyAvLyBIQU5ETEU6ICQoI2lkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hdGNoWzJdKTtcblxuICAgICAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIC8vIEluamVjdCB0aGUgZWxlbWVudCBkaXJlY3RseSBpbnRvIHRoZSBqUXVlcnkgb2JqZWN0XG4gICAgICAgICAgICAgICAgdGhpc1swXSA9IGVsZW07XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9IC8vIEhBTkRMRTogJChleHByLCAkKC4uLikpXG5cbiAgICAgICAgICB9IGVsc2UgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuanF1ZXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbnRleHQgfHwgcm9vdCkuZmluZChzZWxlY3Rvcik7IC8vIEhBTkRMRTogJChleHByLCBjb250ZXh0KVxuICAgICAgICAgICAgLy8gKHdoaWNoIGlzIGp1c3QgZXF1aXZhbGVudCB0bzogJChjb250ZXh0KS5maW5kKGV4cHIpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKGNvbnRleHQpLmZpbmQoc2VsZWN0b3IpO1xuICAgICAgICAgIH0gLy8gSEFORExFOiAkKERPTUVsZW1lbnQpXG5cbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvci5ub2RlVHlwZSkge1xuICAgICAgICAgIHRoaXNbMF0gPSBzZWxlY3RvcjtcbiAgICAgICAgICB0aGlzLmxlbmd0aCA9IDE7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7IC8vIEhBTkRMRTogJChmdW5jdGlvbilcbiAgICAgICAgICAvLyBTaG9ydGN1dCBmb3IgZG9jdW1lbnQgcmVhZHlcbiAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiByb290LnJlYWR5ICE9PSB1bmRlZmluZWQgPyByb290LnJlYWR5KHNlbGVjdG9yKSA6IC8vIEV4ZWN1dGUgaW1tZWRpYXRlbHkgaWYgcmVhZHkgaXMgbm90IHByZXNlbnRcbiAgICAgICAgICBzZWxlY3RvcihqUXVlcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpRdWVyeS5tYWtlQXJyYXkoc2VsZWN0b3IsIHRoaXMpO1xuICAgICAgfTsgLy8gR2l2ZSB0aGUgaW5pdCBmdW5jdGlvbiB0aGUgalF1ZXJ5IHByb3RvdHlwZSBmb3IgbGF0ZXIgaW5zdGFudGlhdGlvblxuXG5cbiAgICAgIGluaXQucHJvdG90eXBlID0galF1ZXJ5LmZuOyAvLyBJbml0aWFsaXplIGNlbnRyYWwgcmVmZXJlbmNlXG5cbiAgICAgIHJvb3RqUXVlcnkgPSBqUXVlcnkoZG9jdW1lbnQpO1xuICAgICAgdmFyIHJwYXJlbnRzcHJldiA9IC9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLFxuICAgICAgICAgIC8vIE1ldGhvZHMgZ3VhcmFudGVlZCB0byBwcm9kdWNlIGEgdW5pcXVlIHNldCB3aGVuIHN0YXJ0aW5nIGZyb20gYSB1bmlxdWUgc2V0XG4gICAgICBndWFyYW50ZWVkVW5pcXVlID0ge1xuICAgICAgICBjaGlsZHJlbjogdHJ1ZSxcbiAgICAgICAgY29udGVudHM6IHRydWUsXG4gICAgICAgIG5leHQ6IHRydWUsXG4gICAgICAgIHByZXY6IHRydWVcbiAgICAgIH07XG4gICAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgICAgaGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0KSB7XG4gICAgICAgICAgdmFyIHRhcmdldHMgPSBqUXVlcnkodGFyZ2V0LCB0aGlzKSxcbiAgICAgICAgICAgICAgbCA9IHRhcmdldHMubGVuZ3RoO1xuICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChqUXVlcnkuY29udGFpbnModGhpcywgdGFyZ2V0c1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZXN0OiBmdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9ycywgY29udGV4dCkge1xuICAgICAgICAgIHZhciBjdXIsXG4gICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICBsID0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICAgIG1hdGNoZWQgPSBbXSxcbiAgICAgICAgICAgICAgdGFyZ2V0cyA9IHR5cGVvZiBzZWxlY3RvcnMgIT09IFwic3RyaW5nXCIgJiYgalF1ZXJ5KHNlbGVjdG9ycyk7IC8vIFBvc2l0aW9uYWwgc2VsZWN0b3JzIG5ldmVyIG1hdGNoLCBzaW5jZSB0aGVyZSdzIG5vIF9zZWxlY3Rpb25fIGNvbnRleHRcblxuICAgICAgICAgIGlmICghcm5lZWRzQ29udGV4dC50ZXN0KHNlbGVjdG9ycykpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgIGZvciAoY3VyID0gdGhpc1tpXTsgY3VyICYmIGN1ciAhPT0gY29udGV4dDsgY3VyID0gY3VyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBBbHdheXMgc2tpcCBkb2N1bWVudCBmcmFnbWVudHNcbiAgICAgICAgICAgICAgICBpZiAoY3VyLm5vZGVUeXBlIDwgMTEgJiYgKHRhcmdldHMgPyB0YXJnZXRzLmluZGV4KGN1cikgPiAtMSA6IC8vIERvbid0IHBhc3Mgbm9uLWVsZW1lbnRzIHRvIFNpenpsZVxuICAgICAgICAgICAgICAgIGN1ci5ub2RlVHlwZSA9PT0gMSAmJiBqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoY3VyLCBzZWxlY3RvcnMpKSkge1xuICAgICAgICAgICAgICAgICAgbWF0Y2hlZC5wdXNoKGN1cik7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2sobWF0Y2hlZC5sZW5ndGggPiAxID8galF1ZXJ5LnVuaXF1ZVNvcnQobWF0Y2hlZCkgOiBtYXRjaGVkKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHdpdGhpbiB0aGUgc2V0XG4gICAgICAgIGluZGV4OiBmdW5jdGlvbiBpbmRleChlbGVtKSB7XG4gICAgICAgICAgLy8gTm8gYXJndW1lbnQsIHJldHVybiBpbmRleCBpbiBwYXJlbnRcbiAgICAgICAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzWzBdICYmIHRoaXNbMF0ucGFyZW50Tm9kZSA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoIDogLTE7XG4gICAgICAgICAgfSAvLyBJbmRleCBpbiBzZWxlY3RvclxuXG5cbiAgICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleE9mLmNhbGwoalF1ZXJ5KGVsZW0pLCB0aGlzWzBdKTtcbiAgICAgICAgICB9IC8vIExvY2F0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgZWxlbWVudFxuXG5cbiAgICAgICAgICByZXR1cm4gaW5kZXhPZi5jYWxsKHRoaXMsIC8vIElmIGl0IHJlY2VpdmVzIGEgalF1ZXJ5IG9iamVjdCwgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdXNlZFxuICAgICAgICAgIGVsZW0uanF1ZXJ5ID8gZWxlbVswXSA6IGVsZW0pO1xuICAgICAgICB9LFxuICAgICAgICBhZGQ6IGZ1bmN0aW9uIGFkZChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhqUXVlcnkudW5pcXVlU29ydChqUXVlcnkubWVyZ2UodGhpcy5nZXQoKSwgalF1ZXJ5KHNlbGVjdG9yLCBjb250ZXh0KSkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkQmFjazogZnVuY3Rpb24gYWRkQmFjayhzZWxlY3Rvcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmFkZChzZWxlY3RvciA9PSBudWxsID8gdGhpcy5wcmV2T2JqZWN0IDogdGhpcy5wcmV2T2JqZWN0LmZpbHRlcihzZWxlY3RvcikpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gc2libGluZyhjdXIsIGRpcikge1xuICAgICAgICB3aGlsZSAoKGN1ciA9IGN1cltkaXJdKSAmJiBjdXIubm9kZVR5cGUgIT09IDEpIHt9XG5cbiAgICAgICAgcmV0dXJuIGN1cjtcbiAgICAgIH1cblxuICAgICAgalF1ZXJ5LmVhY2goe1xuICAgICAgICBwYXJlbnQ6IGZ1bmN0aW9uIHBhcmVudChlbGVtKSB7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gMTEgPyBwYXJlbnQgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBwYXJlbnRzOiBmdW5jdGlvbiBwYXJlbnRzKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gZGlyKGVsZW0sIFwicGFyZW50Tm9kZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGFyZW50c1VudGlsOiBmdW5jdGlvbiBwYXJlbnRzVW50aWwoZWxlbSwgaSwgdW50aWwpIHtcbiAgICAgICAgICByZXR1cm4gZGlyKGVsZW0sIFwicGFyZW50Tm9kZVwiLCB1bnRpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoZWxlbSkge1xuICAgICAgICAgIHJldHVybiBzaWJsaW5nKGVsZW0sIFwibmV4dFNpYmxpbmdcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXY6IGZ1bmN0aW9uIHByZXYoZWxlbSkge1xuICAgICAgICAgIHJldHVybiBzaWJsaW5nKGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIpO1xuICAgICAgICB9LFxuICAgICAgICBuZXh0QWxsOiBmdW5jdGlvbiBuZXh0QWxsKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gZGlyKGVsZW0sIFwibmV4dFNpYmxpbmdcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXZBbGw6IGZ1bmN0aW9uIHByZXZBbGwoZWxlbSkge1xuICAgICAgICAgIHJldHVybiBkaXIoZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIik7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHRVbnRpbDogZnVuY3Rpb24gbmV4dFVudGlsKGVsZW0sIGksIHVudGlsKSB7XG4gICAgICAgICAgcmV0dXJuIGRpcihlbGVtLCBcIm5leHRTaWJsaW5nXCIsIHVudGlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldlVudGlsOiBmdW5jdGlvbiBwcmV2VW50aWwoZWxlbSwgaSwgdW50aWwpIHtcbiAgICAgICAgICByZXR1cm4gZGlyKGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIsIHVudGlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2libGluZ3M6IGZ1bmN0aW9uIHNpYmxpbmdzKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gX3NpYmxpbmdzKChlbGVtLnBhcmVudE5vZGUgfHwge30pLmZpcnN0Q2hpbGQsIGVsZW0pO1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4oZWxlbSkge1xuICAgICAgICAgIHJldHVybiBfc2libGluZ3MoZWxlbS5maXJzdENoaWxkKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudHM6IGZ1bmN0aW9uIGNvbnRlbnRzKGVsZW0pIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGVsZW0uY29udGVudERvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5jb250ZW50RG9jdW1lbnQ7XG4gICAgICAgICAgfSAvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seSwgaU9TIDcgb25seSwgQW5kcm9pZCBCcm93c2VyIDw9NC4zIG9ubHlcbiAgICAgICAgICAvLyBUcmVhdCB0aGUgdGVtcGxhdGUgZWxlbWVudCBhcyBhIHJlZ3VsYXIgb25lIGluIGJyb3dzZXJzIHRoYXRcbiAgICAgICAgICAvLyBkb24ndCBzdXBwb3J0IGl0LlxuXG5cbiAgICAgICAgICBpZiAobm9kZU5hbWUoZWxlbSwgXCJ0ZW1wbGF0ZVwiKSkge1xuICAgICAgICAgICAgZWxlbSA9IGVsZW0uY29udGVudCB8fCBlbGVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBqUXVlcnkubWVyZ2UoW10sIGVsZW0uY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgICAgICBqUXVlcnkuZm5bbmFtZV0gPSBmdW5jdGlvbiAodW50aWwsIHNlbGVjdG9yKSB7XG4gICAgICAgICAgdmFyIG1hdGNoZWQgPSBqUXVlcnkubWFwKHRoaXMsIGZuLCB1bnRpbCk7XG5cbiAgICAgICAgICBpZiAobmFtZS5zbGljZSgtNSkgIT09IFwiVW50aWxcIikge1xuICAgICAgICAgICAgc2VsZWN0b3IgPSB1bnRpbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VsZWN0b3IgJiYgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtYXRjaGVkID0galF1ZXJ5LmZpbHRlcihzZWxlY3RvciwgbWF0Y2hlZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZXNcbiAgICAgICAgICAgIGlmICghZ3VhcmFudGVlZFVuaXF1ZVtuYW1lXSkge1xuICAgICAgICAgICAgICBqUXVlcnkudW5pcXVlU29ydChtYXRjaGVkKTtcbiAgICAgICAgICAgIH0gLy8gUmV2ZXJzZSBvcmRlciBmb3IgcGFyZW50cyogYW5kIHByZXYtZGVyaXZhdGl2ZXNcblxuXG4gICAgICAgICAgICBpZiAocnBhcmVudHNwcmV2LnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgICAgbWF0Y2hlZC5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKG1hdGNoZWQpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB2YXIgcm5vdGh0bWx3aGl0ZSA9IC9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZzsgLy8gQ29udmVydCBTdHJpbmctZm9ybWF0dGVkIG9wdGlvbnMgaW50byBPYmplY3QtZm9ybWF0dGVkIG9uZXNcblxuICAgICAgZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICAgICAgalF1ZXJ5LmVhY2gob3B0aW9ucy5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXSwgZnVuY3Rpb24gKF8sIGZsYWcpIHtcbiAgICAgICAgICBvYmplY3RbZmxhZ10gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgIH1cbiAgICAgIC8qXG4gICAgICAgKiBDcmVhdGUgYSBjYWxsYmFjayBsaXN0IHVzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAgICAgICAqXG4gICAgICAgKlx0b3B0aW9uczogYW4gb3B0aW9uYWwgbGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgb3B0aW9ucyB0aGF0IHdpbGwgY2hhbmdlIGhvd1xuICAgICAgICpcdFx0XHR0aGUgY2FsbGJhY2sgbGlzdCBiZWhhdmVzIG9yIGEgbW9yZSB0cmFkaXRpb25hbCBvcHRpb24gb2JqZWN0XG4gICAgICAgKlxuICAgICAgICogQnkgZGVmYXVsdCBhIGNhbGxiYWNrIGxpc3Qgd2lsbCBhY3QgbGlrZSBhbiBldmVudCBjYWxsYmFjayBsaXN0IGFuZCBjYW4gYmVcbiAgICAgICAqIFwiZmlyZWRcIiBtdWx0aXBsZSB0aW1lcy5cbiAgICAgICAqXG4gICAgICAgKiBQb3NzaWJsZSBvcHRpb25zOlxuICAgICAgICpcbiAgICAgICAqXHRvbmNlOlx0XHRcdHdpbGwgZW5zdXJlIHRoZSBjYWxsYmFjayBsaXN0IGNhbiBvbmx5IGJlIGZpcmVkIG9uY2UgKGxpa2UgYSBEZWZlcnJlZClcbiAgICAgICAqXG4gICAgICAgKlx0bWVtb3J5Olx0XHRcdHdpbGwga2VlcCB0cmFjayBvZiBwcmV2aW91cyB2YWx1ZXMgYW5kIHdpbGwgY2FsbCBhbnkgY2FsbGJhY2sgYWRkZWRcbiAgICAgICAqXHRcdFx0XHRcdGFmdGVyIHRoZSBsaXN0IGhhcyBiZWVuIGZpcmVkIHJpZ2h0IGF3YXkgd2l0aCB0aGUgbGF0ZXN0IFwibWVtb3JpemVkXCJcbiAgICAgICAqXHRcdFx0XHRcdHZhbHVlcyAobGlrZSBhIERlZmVycmVkKVxuICAgICAgICpcbiAgICAgICAqXHR1bmlxdWU6XHRcdFx0d2lsbCBlbnN1cmUgYSBjYWxsYmFjayBjYW4gb25seSBiZSBhZGRlZCBvbmNlIChubyBkdXBsaWNhdGUgaW4gdGhlIGxpc3QpXG4gICAgICAgKlxuICAgICAgICpcdHN0b3BPbkZhbHNlOlx0aW50ZXJydXB0IGNhbGxpbmdzIHdoZW4gYSBjYWxsYmFjayByZXR1cm5zIGZhbHNlXG4gICAgICAgKlxuICAgICAgICovXG5cblxuICAgICAgalF1ZXJ5LkNhbGxiYWNrcyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIC8vIENvbnZlcnQgb3B0aW9ucyBmcm9tIFN0cmluZy1mb3JtYXR0ZWQgdG8gT2JqZWN0LWZvcm1hdHRlZCBpZiBuZWVkZWRcbiAgICAgICAgLy8gKHdlIGNoZWNrIGluIGNhY2hlIGZpcnN0KVxuICAgICAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIgPyBjcmVhdGVPcHRpb25zKG9wdGlvbnMpIDogalF1ZXJ5LmV4dGVuZCh7fSwgb3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IGlzIGN1cnJlbnRseSBmaXJpbmdcbiAgICAgICAgZmlyaW5nLFxuICAgICAgICAgICAgLy8gTGFzdCBmaXJlIHZhbHVlIGZvciBub24tZm9yZ2V0dGFibGUgbGlzdHNcbiAgICAgICAgbWVtb3J5LFxuICAgICAgICAgICAgLy8gRmxhZyB0byBrbm93IGlmIGxpc3Qgd2FzIGFscmVhZHkgZmlyZWRcbiAgICAgICAgX2ZpcmVkLFxuICAgICAgICAgICAgLy8gRmxhZyB0byBwcmV2ZW50IGZpcmluZ1xuICAgICAgICBfbG9ja2VkLFxuICAgICAgICAgICAgLy8gQWN0dWFsIGNhbGxiYWNrIGxpc3RcbiAgICAgICAgbGlzdCA9IFtdLFxuICAgICAgICAgICAgLy8gUXVldWUgb2YgZXhlY3V0aW9uIGRhdGEgZm9yIHJlcGVhdGFibGUgbGlzdHNcbiAgICAgICAgcXVldWUgPSBbXSxcbiAgICAgICAgICAgIC8vIEluZGV4IG9mIGN1cnJlbnRseSBmaXJpbmcgY2FsbGJhY2sgKG1vZGlmaWVkIGJ5IGFkZC9yZW1vdmUgYXMgbmVlZGVkKVxuICAgICAgICBmaXJpbmdJbmRleCA9IC0xLFxuICAgICAgICAgICAgLy8gRmlyZSBjYWxsYmFja3NcbiAgICAgICAgZmlyZSA9IGZ1bmN0aW9uIGZpcmUoKSB7XG4gICAgICAgICAgLy8gRW5mb3JjZSBzaW5nbGUtZmlyaW5nXG4gICAgICAgICAgX2xvY2tlZCA9IF9sb2NrZWQgfHwgb3B0aW9ucy5vbmNlOyAvLyBFeGVjdXRlIGNhbGxiYWNrcyBmb3IgYWxsIHBlbmRpbmcgZXhlY3V0aW9ucyxcbiAgICAgICAgICAvLyByZXNwZWN0aW5nIGZpcmluZ0luZGV4IG92ZXJyaWRlcyBhbmQgcnVudGltZSBjaGFuZ2VzXG5cbiAgICAgICAgICBfZmlyZWQgPSBmaXJpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgZm9yICg7IHF1ZXVlLmxlbmd0aDsgZmlyaW5nSW5kZXggPSAtMSkge1xuICAgICAgICAgICAgbWVtb3J5ID0gcXVldWUuc2hpZnQoKTtcblxuICAgICAgICAgICAgd2hpbGUgKCsrZmlyaW5nSW5kZXggPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAvLyBSdW4gY2FsbGJhY2sgYW5kIGNoZWNrIGZvciBlYXJseSB0ZXJtaW5hdGlvblxuICAgICAgICAgICAgICBpZiAobGlzdFtmaXJpbmdJbmRleF0uYXBwbHkobWVtb3J5WzBdLCBtZW1vcnlbMV0pID09PSBmYWxzZSAmJiBvcHRpb25zLnN0b3BPbkZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gSnVtcCB0byBlbmQgYW5kIGZvcmdldCB0aGUgZGF0YSBzbyAuYWRkIGRvZXNuJ3QgcmUtZmlyZVxuICAgICAgICAgICAgICAgIGZpcmluZ0luZGV4ID0gbGlzdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbWVtb3J5ID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIEZvcmdldCB0aGUgZGF0YSBpZiB3ZSdyZSBkb25lIHdpdGggaXRcblxuXG4gICAgICAgICAgaWYgKCFvcHRpb25zLm1lbW9yeSkge1xuICAgICAgICAgICAgbWVtb3J5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmlyaW5nID0gZmFsc2U7IC8vIENsZWFuIHVwIGlmIHdlJ3JlIGRvbmUgZmlyaW5nIGZvciBnb29kXG5cbiAgICAgICAgICBpZiAoX2xvY2tlZCkge1xuICAgICAgICAgICAgLy8gS2VlcCBhbiBlbXB0eSBsaXN0IGlmIHdlIGhhdmUgZGF0YSBmb3IgZnV0dXJlIGFkZCBjYWxsc1xuICAgICAgICAgICAgaWYgKG1lbW9yeSkge1xuICAgICAgICAgICAgICBsaXN0ID0gW107IC8vIE90aGVyd2lzZSwgdGhpcyBvYmplY3QgaXMgc3BlbnRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxpc3QgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIEFjdHVhbCBDYWxsYmFja3Mgb2JqZWN0XG4gICAgICAgIHNlbGYgPSB7XG4gICAgICAgICAgLy8gQWRkIGEgY2FsbGJhY2sgb3IgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byB0aGUgbGlzdFxuICAgICAgICAgIGFkZDogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBtZW1vcnkgZnJvbSBhIHBhc3QgcnVuLCB3ZSBzaG91bGQgZmlyZSBhZnRlciBhZGRpbmdcbiAgICAgICAgICAgICAgaWYgKG1lbW9yeSAmJiAhZmlyaW5nKSB7XG4gICAgICAgICAgICAgICAgZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChtZW1vcnkpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgKGZ1bmN0aW9uIGFkZChhcmdzKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2goYXJncywgZnVuY3Rpb24gKF8sIGFyZykge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oYXJnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMudW5pcXVlIHx8ICFzZWxmLmhhcyhhcmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKGFyZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJnICYmIGFyZy5sZW5ndGggJiYgdG9UeXBlKGFyZykgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zcGVjdCByZWN1cnNpdmVseVxuICAgICAgICAgICAgICAgICAgICBhZGQoYXJnKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkoYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICBpZiAobWVtb3J5ICYmICFmaXJpbmcpIHtcbiAgICAgICAgICAgICAgICBmaXJlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBSZW1vdmUgYSBjYWxsYmFjayBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgICBqUXVlcnkuZWFjaChhcmd1bWVudHMsIGZ1bmN0aW9uIChfLCBhcmcpIHtcbiAgICAgICAgICAgICAgdmFyIGluZGV4O1xuXG4gICAgICAgICAgICAgIHdoaWxlICgoaW5kZXggPSBqUXVlcnkuaW5BcnJheShhcmcsIGxpc3QsIGluZGV4KSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTsgLy8gSGFuZGxlIGZpcmluZyBpbmRleGVzXG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPD0gZmlyaW5nSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIGZpcmluZ0luZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgYSBnaXZlbiBjYWxsYmFjayBpcyBpbiB0aGUgbGlzdC5cbiAgICAgICAgICAvLyBJZiBubyBhcmd1bWVudCBpcyBnaXZlbiwgcmV0dXJuIHdoZXRoZXIgb3Igbm90IGxpc3QgaGFzIGNhbGxiYWNrcyBhdHRhY2hlZC5cbiAgICAgICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhmbikge1xuICAgICAgICAgICAgcmV0dXJuIGZuID8galF1ZXJ5LmluQXJyYXkoZm4sIGxpc3QpID4gLTEgOiBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBSZW1vdmUgYWxsIGNhbGxiYWNrcyBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgZW1wdHk6IGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgICAgbGlzdCA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIERpc2FibGUgLmZpcmUgYW5kIC5hZGRcbiAgICAgICAgICAvLyBBYm9ydCBhbnkgY3VycmVudC9wZW5kaW5nIGV4ZWN1dGlvbnNcbiAgICAgICAgICAvLyBDbGVhciBhbGwgY2FsbGJhY2tzIGFuZCB2YWx1ZXNcbiAgICAgICAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgICAgICAgX2xvY2tlZCA9IHF1ZXVlID0gW107XG4gICAgICAgICAgICBsaXN0ID0gbWVtb3J5ID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlzYWJsZWQ6IGZ1bmN0aW9uIGRpc2FibGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuICFsaXN0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gRGlzYWJsZSAuZmlyZVxuICAgICAgICAgIC8vIEFsc28gZGlzYWJsZSAuYWRkIHVubGVzcyB3ZSBoYXZlIG1lbW9yeSAoc2luY2UgaXQgd291bGQgaGF2ZSBubyBlZmZlY3QpXG4gICAgICAgICAgLy8gQWJvcnQgYW55IHBlbmRpbmcgZXhlY3V0aW9uc1xuICAgICAgICAgIGxvY2s6IGZ1bmN0aW9uIGxvY2soKSB7XG4gICAgICAgICAgICBfbG9ja2VkID0gcXVldWUgPSBbXTtcblxuICAgICAgICAgICAgaWYgKCFtZW1vcnkgJiYgIWZpcmluZykge1xuICAgICAgICAgICAgICBsaXN0ID0gbWVtb3J5ID0gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsb2NrZWQ6IGZ1bmN0aW9uIGxvY2tlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiAhIV9sb2NrZWQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBDYWxsIGFsbCBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gY29udGV4dCBhbmQgYXJndW1lbnRzXG4gICAgICAgICAgZmlyZVdpdGg6IGZ1bmN0aW9uIGZpcmVXaXRoKGNvbnRleHQsIGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICghX2xvY2tlZCkge1xuICAgICAgICAgICAgICBhcmdzID0gYXJncyB8fCBbXTtcbiAgICAgICAgICAgICAgYXJncyA9IFtjb250ZXh0LCBhcmdzLnNsaWNlID8gYXJncy5zbGljZSgpIDogYXJnc107XG4gICAgICAgICAgICAgIHF1ZXVlLnB1c2goYXJncyk7XG5cbiAgICAgICAgICAgICAgaWYgKCFmaXJpbmcpIHtcbiAgICAgICAgICAgICAgICBmaXJlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBDYWxsIGFsbCB0aGUgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGFyZ3VtZW50c1xuICAgICAgICAgIGZpcmU6IGZ1bmN0aW9uIGZpcmUoKSB7XG4gICAgICAgICAgICBzZWxmLmZpcmVXaXRoKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIFRvIGtub3cgaWYgdGhlIGNhbGxiYWNrcyBoYXZlIGFscmVhZHkgYmVlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZVxuICAgICAgICAgIGZpcmVkOiBmdW5jdGlvbiBmaXJlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiAhIV9maXJlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBJZGVudGl0eSh2KSB7XG4gICAgICAgIHJldHVybiB2O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBUaHJvd2VyKGV4KSB7XG4gICAgICAgIHRocm93IGV4O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZG9wdFZhbHVlKHZhbHVlLCByZXNvbHZlLCByZWplY3QsIG5vVmFsdWUpIHtcbiAgICAgICAgdmFyIG1ldGhvZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIENoZWNrIGZvciBwcm9taXNlIGFzcGVjdCBmaXJzdCB0byBwcml2aWxlZ2Ugc3luY2hyb25vdXMgYmVoYXZpb3JcbiAgICAgICAgICBpZiAodmFsdWUgJiYgaXNGdW5jdGlvbihtZXRob2QgPSB2YWx1ZS5wcm9taXNlKSkge1xuICAgICAgICAgICAgbWV0aG9kLmNhbGwodmFsdWUpLmRvbmUocmVzb2x2ZSkuZmFpbChyZWplY3QpOyAvLyBPdGhlciB0aGVuYWJsZXNcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIGlzRnVuY3Rpb24obWV0aG9kID0gdmFsdWUudGhlbikpIHtcbiAgICAgICAgICAgIG1ldGhvZC5jYWxsKHZhbHVlLCByZXNvbHZlLCByZWplY3QpOyAvLyBPdGhlciBub24tdGhlbmFibGVzXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENvbnRyb2wgYHJlc29sdmVgIGFyZ3VtZW50cyBieSBsZXR0aW5nIEFycmF5I3NsaWNlIGNhc3QgYm9vbGVhbiBgbm9WYWx1ZWAgdG8gaW50ZWdlcjpcbiAgICAgICAgICAgIC8vICogZmFsc2U6IFsgdmFsdWUgXS5zbGljZSggMCApID0+IHJlc29sdmUoIHZhbHVlIClcbiAgICAgICAgICAgIC8vICogdHJ1ZTogWyB2YWx1ZSBdLnNsaWNlKCAxICkgPT4gcmVzb2x2ZSgpXG4gICAgICAgICAgICByZXNvbHZlLmFwcGx5KHVuZGVmaW5lZCwgW3ZhbHVlXS5zbGljZShub1ZhbHVlKSk7XG4gICAgICAgICAgfSAvLyBGb3IgUHJvbWlzZXMvQSssIGNvbnZlcnQgZXhjZXB0aW9ucyBpbnRvIHJlamVjdGlvbnNcbiAgICAgICAgICAvLyBTaW5jZSBqUXVlcnkud2hlbiBkb2Vzbid0IHVud3JhcCB0aGVuYWJsZXMsIHdlIGNhbiBza2lwIHRoZSBleHRyYSBjaGVja3MgYXBwZWFyaW5nIGluXG4gICAgICAgICAgLy8gRGVmZXJyZWQjdGhlbiB0byBjb25kaXRpb25hbGx5IHN1cHByZXNzIHJlamVjdGlvbi5cblxuICAgICAgICB9IGNhdGNoICh2YWx1ZSkge1xuICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIG9ubHlcbiAgICAgICAgICAvLyBTdHJpY3QgbW9kZSBmdW5jdGlvbnMgaW52b2tlZCB3aXRob3V0IC5jYWxsLy5hcHBseSBnZXQgZ2xvYmFsLW9iamVjdCBjb250ZXh0XG4gICAgICAgICAgcmVqZWN0LmFwcGx5KHVuZGVmaW5lZCwgW3ZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgalF1ZXJ5LmV4dGVuZCh7XG4gICAgICAgIERlZmVycmVkOiBmdW5jdGlvbiBEZWZlcnJlZChmdW5jKSB7XG4gICAgICAgICAgdmFyIHR1cGxlcyA9IFsvLyBhY3Rpb24sIGFkZCBsaXN0ZW5lciwgY2FsbGJhY2tzLFxuICAgICAgICAgIC8vIC4uLiAudGhlbiBoYW5kbGVycywgYXJndW1lbnQgaW5kZXgsIFtmaW5hbCBzdGF0ZV1cbiAgICAgICAgICBbXCJub3RpZnlcIiwgXCJwcm9ncmVzc1wiLCBqUXVlcnkuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLCBqUXVlcnkuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLCAyXSwgW1wicmVzb2x2ZVwiLCBcImRvbmVcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIDAsIFwicmVzb2x2ZWRcIl0sIFtcInJlamVjdFwiLCBcImZhaWxcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIDEsIFwicmVqZWN0ZWRcIl1dLFxuICAgICAgICAgICAgICBfc3RhdGUgPSBcInBlbmRpbmdcIixcbiAgICAgICAgICAgICAgX3Byb21pc2UgPSB7XG4gICAgICAgICAgICBzdGF0ZTogZnVuY3Rpb24gc3RhdGUoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfc3RhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWx3YXlzOiBmdW5jdGlvbiBhbHdheXMoKSB7XG4gICAgICAgICAgICAgIGRlZmVycmVkLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKGZuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfcHJvbWlzZS50aGVuKG51bGwsIGZuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBLZWVwIHBpcGUgZm9yIGJhY2stY29tcGF0XG4gICAgICAgICAgICBwaXBlOiBmdW5jdGlvbiBwaXBlKClcbiAgICAgICAgICAgIC8qIGZuRG9uZSwgZm5GYWlsLCBmblByb2dyZXNzICovXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBmbnMgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgIHJldHVybiBqUXVlcnkuRGVmZXJyZWQoZnVuY3Rpb24gKG5ld0RlZmVyKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2godHVwbGVzLCBmdW5jdGlvbiAoaSwgdHVwbGUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIE1hcCB0dXBsZXMgKHByb2dyZXNzLCBkb25lLCBmYWlsKSB0byBhcmd1bWVudHMgKGRvbmUsIGZhaWwsIHByb2dyZXNzKVxuICAgICAgICAgICAgICAgICAgdmFyIGZuID0gaXNGdW5jdGlvbihmbnNbdHVwbGVbNF1dKSAmJiBmbnNbdHVwbGVbNF1dOyAvLyBkZWZlcnJlZC5wcm9ncmVzcyhmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5ub3RpZnkgfSlcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmVycmVkLmRvbmUoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVzb2x2ZSB9KVxuICAgICAgICAgICAgICAgICAgLy8gZGVmZXJyZWQuZmFpbChmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZWplY3QgfSlcblxuICAgICAgICAgICAgICAgICAgZGVmZXJyZWRbdHVwbGVbMV1dKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybmVkID0gZm4gJiYgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWQgJiYgaXNGdW5jdGlvbihyZXR1cm5lZC5wcm9taXNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybmVkLnByb21pc2UoKS5wcm9ncmVzcyhuZXdEZWZlci5ub3RpZnkpLmRvbmUobmV3RGVmZXIucmVzb2x2ZSkuZmFpbChuZXdEZWZlci5yZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0RlZmVyW3R1cGxlWzBdICsgXCJXaXRoXCJdKHRoaXMsIGZuID8gW3JldHVybmVkXSA6IGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZucyA9IG51bGw7XG4gICAgICAgICAgICAgIH0pLnByb21pc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgIHZhciBtYXhEZXB0aCA9IDA7XG5cbiAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZShkZXB0aCwgZGVmZXJyZWQsIGhhbmRsZXIsIHNwZWNpYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgbWlnaHRUaHJvdyA9IGZ1bmN0aW9uIG1pZ2h0VGhyb3coKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lZCwgdGhlbjsgLy8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjNcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTlcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIGRvdWJsZS1yZXNvbHV0aW9uIGF0dGVtcHRzXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoIDwgbWF4RGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm5lZCA9IGhhbmRsZXIuYXBwbHkodGhhdCwgYXJncyk7IC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjFcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNDhcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWQgPT09IGRlZmVycmVkLnByb21pc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIH0gLy8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbnMgMi4zLjMuMSwgMy41XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU0XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTc1XG4gICAgICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIGB0aGVuYCBvbmx5IG9uY2VcblxuXG4gICAgICAgICAgICAgICAgICAgIHRoZW4gPSByZXR1cm5lZCAmJiAoIC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjRcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjRcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSBjaGVjayBvYmplY3RzIGFuZCBmdW5jdGlvbnMgZm9yIHRoZW5hYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgIF90eXBlb2YocmV0dXJuZWQpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiByZXR1cm5lZCA9PT0gXCJmdW5jdGlvblwiKSAmJiByZXR1cm5lZC50aGVuOyAvLyBIYW5kbGUgYSByZXR1cm5lZCB0aGVuYWJsZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBwcm9jZXNzb3JzIChub3RpZnkpIGp1c3Qgd2FpdCBmb3IgcmVzb2x1dGlvblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVuLmNhbGwocmV0dXJuZWQsIHJlc29sdmUobWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCksIHJlc29sdmUobWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsKSk7IC8vIE5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBhbHNvIGhvb2sgaW50byBwcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5hbmQgZGlzcmVnYXJkIG9sZGVyIHJlc29sdXRpb24gdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhEZXB0aCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbi5jYWxsKHJldHVybmVkLCByZXNvbHZlKG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksIHNwZWNpYWwpLCByZXNvbHZlKG1heERlcHRoLCBkZWZlcnJlZCwgVGhyb3dlciwgc3BlY2lhbCksIHJlc29sdmUobWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgZGVmZXJyZWQubm90aWZ5V2l0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gLy8gSGFuZGxlIGFsbCBvdGhlciByZXR1cm5lZCB2YWx1ZXNcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbXVsdGlwbGUgdmFsdWVzIChub24tc3BlYyBiZWhhdmlvcilcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlciAhPT0gSWRlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gW3JldHVybmVkXTtcbiAgICAgICAgICAgICAgICAgICAgICB9IC8vIFByb2Nlc3MgdGhlIHZhbHVlKHMpXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBwcm9jZXNzIGlzIHJlc29sdmVcblxuXG4gICAgICAgICAgICAgICAgICAgICAgKHNwZWNpYWwgfHwgZGVmZXJyZWQucmVzb2x2ZVdpdGgpKHRoYXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgbm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGNhdGNoIGFuZCByZWplY3QgZXhjZXB0aW9uc1xuICAgICAgICAgICAgICAgICAgcHJvY2VzcyA9IHNwZWNpYWwgPyBtaWdodFRocm93IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIG1pZ2h0VGhyb3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSwgcHJvY2Vzcy5zdGFja1RyYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy40LjFcbiAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC02MVxuICAgICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBwb3N0LXJlc29sdXRpb24gZXhjZXB0aW9uc1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggKyAxID49IG1heERlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHN1YnN0aXR1dGUgaGFuZGxlcnMgcGFzcyBvbiBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbXVsdGlwbGUgdmFsdWVzIChub24tc3BlYyBiZWhhdmlvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyICE9PSBUaHJvd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBbZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdFdpdGgodGhhdCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9OyAvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuMVxuICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTdcbiAgICAgICAgICAgICAgICAgIC8vIFJlLXJlc29sdmUgcHJvbWlzZXMgaW1tZWRpYXRlbHkgdG8gZG9kZ2UgZmFsc2UgcmVqZWN0aW9uIGZyb21cbiAgICAgICAgICAgICAgICAgIC8vIHN1YnNlcXVlbnQgZXJyb3JzXG5cblxuICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGwgYW4gb3B0aW9uYWwgaG9vayB0byByZWNvcmQgdGhlIHN0YWNrLCBpbiBjYXNlIG9mIGV4Y2VwdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCdzIG90aGVyd2lzZSBsb3N0IHdoZW4gZXhlY3V0aW9uIGdvZXMgYXN5bmNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5EZWZlcnJlZC5nZXRTdGFja0hvb2spIHtcbiAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLnN0YWNrVHJhY2UgPSBqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChwcm9jZXNzKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5EZWZlcnJlZChmdW5jdGlvbiAobmV3RGVmZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBwcm9ncmVzc19oYW5kbGVycy5hZGQoIC4uLiApXG4gICAgICAgICAgICAgICAgdHVwbGVzWzBdWzNdLmFkZChyZXNvbHZlKDAsIG5ld0RlZmVyLCBpc0Z1bmN0aW9uKG9uUHJvZ3Jlc3MpID8gb25Qcm9ncmVzcyA6IElkZW50aXR5LCBuZXdEZWZlci5ub3RpZnlXaXRoKSk7IC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5hZGQoIC4uLiApXG5cbiAgICAgICAgICAgICAgICB0dXBsZXNbMV1bM10uYWRkKHJlc29sdmUoMCwgbmV3RGVmZXIsIGlzRnVuY3Rpb24ob25GdWxmaWxsZWQpID8gb25GdWxmaWxsZWQgOiBJZGVudGl0eSkpOyAvLyByZWplY3RlZF9oYW5kbGVycy5hZGQoIC4uLiApXG5cbiAgICAgICAgICAgICAgICB0dXBsZXNbMl1bM10uYWRkKHJlc29sdmUoMCwgbmV3RGVmZXIsIGlzRnVuY3Rpb24ob25SZWplY3RlZCkgPyBvblJlamVjdGVkIDogVGhyb3dlcikpO1xuICAgICAgICAgICAgICB9KS5wcm9taXNlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuICAgICAgICAgICAgLy8gSWYgb2JqIGlzIHByb3ZpZGVkLCB0aGUgcHJvbWlzZSBhc3BlY3QgaXMgYWRkZWQgdG8gdGhlIG9iamVjdFxuICAgICAgICAgICAgcHJvbWlzZTogZnVuY3Rpb24gcHJvbWlzZShvYmopIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9iaiAhPSBudWxsID8galF1ZXJ5LmV4dGVuZChvYmosIF9wcm9taXNlKSA6IF9wcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlZmVycmVkID0ge307IC8vIEFkZCBsaXN0LXNwZWNpZmljIG1ldGhvZHNcblxuICAgICAgICAgIGpRdWVyeS5lYWNoKHR1cGxlcywgZnVuY3Rpb24gKGksIHR1cGxlKSB7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IHR1cGxlWzJdLFxuICAgICAgICAgICAgICAgIHN0YXRlU3RyaW5nID0gdHVwbGVbNV07IC8vIHByb21pc2UucHJvZ3Jlc3MgPSBsaXN0LmFkZFxuICAgICAgICAgICAgLy8gcHJvbWlzZS5kb25lID0gbGlzdC5hZGRcbiAgICAgICAgICAgIC8vIHByb21pc2UuZmFpbCA9IGxpc3QuYWRkXG5cbiAgICAgICAgICAgIF9wcm9taXNlW3R1cGxlWzFdXSA9IGxpc3QuYWRkOyAvLyBIYW5kbGUgc3RhdGVcblxuICAgICAgICAgICAgaWYgKHN0YXRlU3RyaW5nKSB7XG4gICAgICAgICAgICAgIGxpc3QuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBzdGF0ZSA9IFwicmVzb2x2ZWRcIiAoaS5lLiwgZnVsZmlsbGVkKVxuICAgICAgICAgICAgICAgIC8vIHN0YXRlID0gXCJyZWplY3RlZFwiXG4gICAgICAgICAgICAgICAgX3N0YXRlID0gc3RhdGVTdHJpbmc7XG4gICAgICAgICAgICAgIH0sIC8vIHJlamVjdGVkX2NhbGxiYWNrcy5kaXNhYmxlXG4gICAgICAgICAgICAgIC8vIGZ1bGZpbGxlZF9jYWxsYmFja3MuZGlzYWJsZVxuICAgICAgICAgICAgICB0dXBsZXNbMyAtIGldWzJdLmRpc2FibGUsIC8vIHJlamVjdGVkX2hhbmRsZXJzLmRpc2FibGVcbiAgICAgICAgICAgICAgLy8gZnVsZmlsbGVkX2hhbmRsZXJzLmRpc2FibGVcbiAgICAgICAgICAgICAgdHVwbGVzWzMgLSBpXVszXS5kaXNhYmxlLCAvLyBwcm9ncmVzc19jYWxsYmFja3MubG9ja1xuICAgICAgICAgICAgICB0dXBsZXNbMF1bMl0ubG9jaywgLy8gcHJvZ3Jlc3NfaGFuZGxlcnMubG9ja1xuICAgICAgICAgICAgICB0dXBsZXNbMF1bM10ubG9jayk7XG4gICAgICAgICAgICB9IC8vIHByb2dyZXNzX2hhbmRsZXJzLmZpcmVcbiAgICAgICAgICAgIC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5maXJlXG4gICAgICAgICAgICAvLyByZWplY3RlZF9oYW5kbGVycy5maXJlXG5cblxuICAgICAgICAgICAgbGlzdC5hZGQodHVwbGVbM10uZmlyZSk7IC8vIGRlZmVycmVkLm5vdGlmeSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5ub3RpZnlXaXRoKC4uLikgfVxuICAgICAgICAgICAgLy8gZGVmZXJyZWQucmVzb2x2ZSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZXNvbHZlV2l0aCguLi4pIH1cbiAgICAgICAgICAgIC8vIGRlZmVycmVkLnJlamVjdCA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZWplY3RXaXRoKC4uLikgfVxuXG4gICAgICAgICAgICBkZWZlcnJlZFt0dXBsZVswXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGRlZmVycmVkW3R1cGxlWzBdICsgXCJXaXRoXCJdKHRoaXMgPT09IGRlZmVycmVkID8gdW5kZWZpbmVkIDogdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9OyAvLyBkZWZlcnJlZC5ub3RpZnlXaXRoID0gbGlzdC5maXJlV2l0aFxuICAgICAgICAgICAgLy8gZGVmZXJyZWQucmVzb2x2ZVdpdGggPSBsaXN0LmZpcmVXaXRoXG4gICAgICAgICAgICAvLyBkZWZlcnJlZC5yZWplY3RXaXRoID0gbGlzdC5maXJlV2l0aFxuXG5cbiAgICAgICAgICAgIGRlZmVycmVkW3R1cGxlWzBdICsgXCJXaXRoXCJdID0gbGlzdC5maXJlV2l0aDtcbiAgICAgICAgICB9KTsgLy8gTWFrZSB0aGUgZGVmZXJyZWQgYSBwcm9taXNlXG5cbiAgICAgICAgICBfcHJvbWlzZS5wcm9taXNlKGRlZmVycmVkKTsgLy8gQ2FsbCBnaXZlbiBmdW5jIGlmIGFueVxuXG5cbiAgICAgICAgICBpZiAoZnVuYykge1xuICAgICAgICAgICAgZnVuYy5jYWxsKGRlZmVycmVkLCBkZWZlcnJlZCk7XG4gICAgICAgICAgfSAvLyBBbGwgZG9uZSFcblxuXG4gICAgICAgICAgcmV0dXJuIGRlZmVycmVkO1xuICAgICAgICB9LFxuICAgICAgICAvLyBEZWZlcnJlZCBoZWxwZXJcbiAgICAgICAgd2hlbjogZnVuY3Rpb24gd2hlbihzaW5nbGVWYWx1ZSkge1xuICAgICAgICAgIHZhciAvLyBjb3VudCBvZiB1bmNvbXBsZXRlZCBzdWJvcmRpbmF0ZXNcbiAgICAgICAgICByZW1haW5pbmcgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgICAvLyBjb3VudCBvZiB1bnByb2Nlc3NlZCBhcmd1bWVudHNcbiAgICAgICAgICBpID0gcmVtYWluaW5nLFxuICAgICAgICAgICAgICAvLyBzdWJvcmRpbmF0ZSBmdWxmaWxsbWVudCBkYXRhXG4gICAgICAgICAgcmVzb2x2ZUNvbnRleHRzID0gQXJyYXkoaSksXG4gICAgICAgICAgICAgIHJlc29sdmVWYWx1ZXMgPSBfc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgICAvLyB0aGUgbWFzdGVyIERlZmVycmVkXG4gICAgICAgICAgbWFzdGVyID0galF1ZXJ5LkRlZmVycmVkKCksXG4gICAgICAgICAgICAgIC8vIHN1Ym9yZGluYXRlIGNhbGxiYWNrIGZhY3RvcnlcbiAgICAgICAgICB1cGRhdGVGdW5jID0gZnVuY3Rpb24gdXBkYXRlRnVuYyhpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVDb250ZXh0c1tpXSA9IHRoaXM7XG4gICAgICAgICAgICAgIHJlc29sdmVWYWx1ZXNbaV0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IF9zbGljZS5jYWxsKGFyZ3VtZW50cykgOiB2YWx1ZTtcblxuICAgICAgICAgICAgICBpZiAoISAtLXJlbWFpbmluZykge1xuICAgICAgICAgICAgICAgIG1hc3Rlci5yZXNvbHZlV2l0aChyZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07IC8vIFNpbmdsZS0gYW5kIGVtcHR5IGFyZ3VtZW50cyBhcmUgYWRvcHRlZCBsaWtlIFByb21pc2UucmVzb2x2ZVxuXG5cbiAgICAgICAgICBpZiAocmVtYWluaW5nIDw9IDEpIHtcbiAgICAgICAgICAgIGFkb3B0VmFsdWUoc2luZ2xlVmFsdWUsIG1hc3Rlci5kb25lKHVwZGF0ZUZ1bmMoaSkpLnJlc29sdmUsIG1hc3Rlci5yZWplY3QsICFyZW1haW5pbmcpOyAvLyBVc2UgLnRoZW4oKSB0byB1bndyYXAgc2Vjb25kYXJ5IHRoZW5hYmxlcyAoY2YuIGdoLTMwMDApXG5cbiAgICAgICAgICAgIGlmIChtYXN0ZXIuc3RhdGUoKSA9PT0gXCJwZW5kaW5nXCIgfHwgaXNGdW5jdGlvbihyZXNvbHZlVmFsdWVzW2ldICYmIHJlc29sdmVWYWx1ZXNbaV0udGhlbikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1hc3Rlci50aGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBNdWx0aXBsZSBhcmd1bWVudHMgYXJlIGFnZ3JlZ2F0ZWQgbGlrZSBQcm9taXNlLmFsbCBhcnJheSBlbGVtZW50c1xuXG5cbiAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBhZG9wdFZhbHVlKHJlc29sdmVWYWx1ZXNbaV0sIHVwZGF0ZUZ1bmMoaSksIG1hc3Rlci5yZWplY3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtYXN0ZXIucHJvbWlzZSgpO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gVGhlc2UgdXN1YWxseSBpbmRpY2F0ZSBhIHByb2dyYW1tZXIgbWlzdGFrZSBkdXJpbmcgZGV2ZWxvcG1lbnQsXG4gICAgICAvLyB3YXJuIGFib3V0IHRoZW0gQVNBUCByYXRoZXIgdGhhbiBzd2FsbG93aW5nIHRoZW0gYnkgZGVmYXVsdC5cblxuICAgICAgdmFyIHJlcnJvck5hbWVzID0gL14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87XG5cbiAgICAgIGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rID0gZnVuY3Rpb24gKGVycm9yLCBzdGFjaykge1xuICAgICAgICAvLyBTdXBwb3J0OiBJRSA4IC0gOSBvbmx5XG4gICAgICAgIC8vIENvbnNvbGUgZXhpc3RzIHdoZW4gZGV2IHRvb2xzIGFyZSBvcGVuLCB3aGljaCBjYW4gaGFwcGVuIGF0IGFueSB0aW1lXG4gICAgICAgIGlmICh3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS53YXJuICYmIGVycm9yICYmIHJlcnJvck5hbWVzLnRlc3QoZXJyb3IubmFtZSkpIHtcbiAgICAgICAgICB3aW5kb3cuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIgKyBlcnJvci5tZXNzYWdlLCBlcnJvci5zdGFjaywgc3RhY2spO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBqUXVlcnkucmVhZHlFeGNlcHRpb24gPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICAgIH07IC8vIFRoZSBkZWZlcnJlZCB1c2VkIG9uIERPTSByZWFkeVxuXG5cbiAgICAgIHZhciByZWFkeUxpc3QgPSBqUXVlcnkuRGVmZXJyZWQoKTtcblxuICAgICAgalF1ZXJ5LmZuLnJlYWR5ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJlYWR5TGlzdC50aGVuKGZuKSAvLyBXcmFwIGpRdWVyeS5yZWFkeUV4Y2VwdGlvbiBpbiBhIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIGxvb2t1cFxuICAgICAgICAvLyBoYXBwZW5zIGF0IHRoZSB0aW1lIG9mIGVycm9yIGhhbmRsaW5nIGluc3RlYWQgb2YgY2FsbGJhY2tcbiAgICAgICAgLy8gcmVnaXN0cmF0aW9uLlxuICAgICAgICBbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBqUXVlcnkucmVhZHlFeGNlcHRpb24oZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuXG4gICAgICBqUXVlcnkuZXh0ZW5kKHtcbiAgICAgICAgLy8gSXMgdGhlIERPTSByZWFkeSB0byBiZSB1c2VkPyBTZXQgdG8gdHJ1ZSBvbmNlIGl0IG9jY3Vycy5cbiAgICAgICAgaXNSZWFkeTogZmFsc2UsXG4gICAgICAgIC8vIEEgY291bnRlciB0byB0cmFjayBob3cgbWFueSBpdGVtcyB0byB3YWl0IGZvciBiZWZvcmVcbiAgICAgICAgLy8gdGhlIHJlYWR5IGV2ZW50IGZpcmVzLiBTZWUgIzY3ODFcbiAgICAgICAgcmVhZHlXYWl0OiAxLFxuICAgICAgICAvLyBIYW5kbGUgd2hlbiB0aGUgRE9NIGlzIHJlYWR5XG4gICAgICAgIHJlYWR5OiBmdW5jdGlvbiByZWFkeSh3YWl0KSB7XG4gICAgICAgICAgLy8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxuICAgICAgICAgIGlmICh3YWl0ID09PSB0cnVlID8gLS1qUXVlcnkucmVhZHlXYWl0IDogalF1ZXJ5LmlzUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IC8vIFJlbWVtYmVyIHRoYXQgdGhlIERPTSBpcyByZWFkeVxuXG5cbiAgICAgICAgICBqUXVlcnkuaXNSZWFkeSA9IHRydWU7IC8vIElmIGEgbm9ybWFsIERPTSBSZWFkeSBldmVudCBmaXJlZCwgZGVjcmVtZW50LCBhbmQgd2FpdCBpZiBuZWVkIGJlXG5cbiAgICAgICAgICBpZiAod2FpdCAhPT0gdHJ1ZSAmJiAtLWpRdWVyeS5yZWFkeVdhaXQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBJZiB0aGVyZSBhcmUgZnVuY3Rpb25zIGJvdW5kLCB0byBleGVjdXRlXG5cblxuICAgICAgICAgIHJlYWR5TGlzdC5yZXNvbHZlV2l0aChkb2N1bWVudCwgW2pRdWVyeV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeS5yZWFkeS50aGVuID0gcmVhZHlMaXN0LnRoZW47IC8vIFRoZSByZWFkeSBldmVudCBoYW5kbGVyIGFuZCBzZWxmIGNsZWFudXAgbWV0aG9kXG5cbiAgICAgIGZ1bmN0aW9uIGNvbXBsZXRlZCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNvbXBsZXRlZCk7XG4gICAgICAgIGpRdWVyeS5yZWFkeSgpO1xuICAgICAgfSAvLyBDYXRjaCBjYXNlcyB3aGVyZSAkKGRvY3VtZW50KS5yZWFkeSgpIGlzIGNhbGxlZFxuICAgICAgLy8gYWZ0ZXIgdGhlIGJyb3dzZXIgZXZlbnQgaGFzIGFscmVhZHkgb2NjdXJyZWQuXG4gICAgICAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMCBvbmx5XG4gICAgICAvLyBPbGRlciBJRSBzb21ldGltZXMgc2lnbmFscyBcImludGVyYWN0aXZlXCIgdG9vIHNvb25cblxuXG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwpIHtcbiAgICAgICAgLy8gSGFuZGxlIGl0IGFzeW5jaHJvbm91c2x5IHRvIGFsbG93IHNjcmlwdHMgdGhlIG9wcG9ydHVuaXR5IHRvIGRlbGF5IHJlYWR5XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGpRdWVyeS5yZWFkeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVc2UgdGhlIGhhbmR5IGV2ZW50IGNhbGxiYWNrXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCk7IC8vIEEgZmFsbGJhY2sgdG8gd2luZG93Lm9ubG9hZCwgdGhhdCB3aWxsIGFsd2F5cyB3b3JrXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNvbXBsZXRlZCk7XG4gICAgICB9IC8vIE11bHRpZnVuY3Rpb25hbCBtZXRob2QgdG8gZ2V0IGFuZCBzZXQgdmFsdWVzIG9mIGEgY29sbGVjdGlvblxuICAgICAgLy8gVGhlIHZhbHVlL3MgY2FuIG9wdGlvbmFsbHkgYmUgZXhlY3V0ZWQgaWYgaXQncyBhIGZ1bmN0aW9uXG5cblxuICAgICAgdmFyIGFjY2VzcyA9IGZ1bmN0aW9uIGFjY2VzcyhlbGVtcywgZm4sIGtleSwgdmFsdWUsIGNoYWluYWJsZSwgZW1wdHlHZXQsIHJhdykge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBsZW4gPSBlbGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBidWxrID0ga2V5ID09IG51bGw7IC8vIFNldHMgbWFueSB2YWx1ZXNcblxuICAgICAgICBpZiAodG9UeXBlKGtleSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBjaGFpbmFibGUgPSB0cnVlO1xuXG4gICAgICAgICAgZm9yIChpIGluIGtleSkge1xuICAgICAgICAgICAgYWNjZXNzKGVsZW1zLCBmbiwgaSwga2V5W2ldLCB0cnVlLCBlbXB0eUdldCwgcmF3KTtcbiAgICAgICAgICB9IC8vIFNldHMgb25lIHZhbHVlXG5cbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2hhaW5hYmxlID0gdHJ1ZTtcblxuICAgICAgICAgIGlmICghaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJhdyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJ1bGspIHtcbiAgICAgICAgICAgIC8vIEJ1bGsgb3BlcmF0aW9ucyBydW4gYWdhaW5zdCB0aGUgZW50aXJlIHNldFxuICAgICAgICAgICAgaWYgKHJhdykge1xuICAgICAgICAgICAgICBmbi5jYWxsKGVsZW1zLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIGZuID0gbnVsbDsgLy8gLi4uZXhjZXB0IHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uIHZhbHVlc1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnVsayA9IGZuO1xuXG4gICAgICAgICAgICAgIGZuID0gZnVuY3Rpb24gZm4oZWxlbSwga2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWxrLmNhbGwoalF1ZXJ5KGVsZW0pLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgIGZuKGVsZW1zW2ldLCBrZXksIHJhdyA/IHZhbHVlIDogdmFsdWUuY2FsbChlbGVtc1tpXSwgaSwgZm4oZWxlbXNbaV0sIGtleSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhaW5hYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1zO1xuICAgICAgICB9IC8vIEdldHNcblxuXG4gICAgICAgIGlmIChidWxrKSB7XG4gICAgICAgICAgcmV0dXJuIGZuLmNhbGwoZWxlbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlbiA/IGZuKGVsZW1zWzBdLCBrZXkpIDogZW1wdHlHZXQ7XG4gICAgICB9OyAvLyBNYXRjaGVzIGRhc2hlZCBzdHJpbmcgZm9yIGNhbWVsaXppbmdcblxuXG4gICAgICB2YXIgcm1zUHJlZml4ID0gL14tbXMtLyxcbiAgICAgICAgICByZGFzaEFscGhhID0gLy0oW2Etel0pL2c7IC8vIFVzZWQgYnkgY2FtZWxDYXNlIGFzIGNhbGxiYWNrIHRvIHJlcGxhY2UoKVxuXG4gICAgICBmdW5jdGlvbiBmY2FtZWxDYXNlKGFsbCwgbGV0dGVyKSB7XG4gICAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgIH0gLy8gQ29udmVydCBkYXNoZWQgdG8gY2FtZWxDYXNlOyB1c2VkIGJ5IHRoZSBjc3MgYW5kIGRhdGEgbW9kdWxlc1xuICAgICAgLy8gU3VwcG9ydDogSUUgPD05IC0gMTEsIEVkZ2UgMTIgLSAxNVxuICAgICAgLy8gTWljcm9zb2Z0IGZvcmdvdCB0byBodW1wIHRoZWlyIHZlbmRvciBwcmVmaXggKCM5NTcyKVxuXG5cbiAgICAgIGZ1bmN0aW9uIGNhbWVsQ2FzZShzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJtc1ByZWZpeCwgXCJtcy1cIikucmVwbGFjZShyZGFzaEFscGhhLCBmY2FtZWxDYXNlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjY2VwdERhdGEgPSBmdW5jdGlvbiBhY2NlcHREYXRhKG93bmVyKSB7XG4gICAgICAgIC8vIEFjY2VwdHMgb25seTpcbiAgICAgICAgLy8gIC0gTm9kZVxuICAgICAgICAvLyAgICAtIE5vZGUuRUxFTUVOVF9OT0RFXG4gICAgICAgIC8vICAgIC0gTm9kZS5ET0NVTUVOVF9OT0RFXG4gICAgICAgIC8vICAtIE9iamVjdFxuICAgICAgICAvLyAgICAtIEFueVxuICAgICAgICByZXR1cm4gb3duZXIubm9kZVR5cGUgPT09IDEgfHwgb3duZXIubm9kZVR5cGUgPT09IDkgfHwgIStvd25lci5ub2RlVHlwZTtcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIERhdGEoKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kbyA9IGpRdWVyeS5leHBhbmRvICsgRGF0YS51aWQrKztcbiAgICAgIH1cblxuICAgICAgRGF0YS51aWQgPSAxO1xuICAgICAgRGF0YS5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNhY2hlOiBmdW5jdGlvbiBjYWNoZShvd25lcikge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBvd25lciBvYmplY3QgYWxyZWFkeSBoYXMgYSBjYWNoZVxuICAgICAgICAgIHZhciB2YWx1ZSA9IG93bmVyW3RoaXMuZXhwYW5kb107IC8vIElmIG5vdCwgY3JlYXRlIG9uZVxuXG4gICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB7fTsgLy8gV2UgY2FuIGFjY2VwdCBkYXRhIGZvciBub24tZWxlbWVudCBub2RlcyBpbiBtb2Rlcm4gYnJvd3NlcnMsXG4gICAgICAgICAgICAvLyBidXQgd2Ugc2hvdWxkIG5vdCwgc2VlICM4MzM1LlxuICAgICAgICAgICAgLy8gQWx3YXlzIHJldHVybiBhbiBlbXB0eSBvYmplY3QuXG5cbiAgICAgICAgICAgIGlmIChhY2NlcHREYXRhKG93bmVyKSkge1xuICAgICAgICAgICAgICAvLyBJZiBpdCBpcyBhIG5vZGUgdW5saWtlbHkgdG8gYmUgc3RyaW5naWZ5LWVkIG9yIGxvb3BlZCBvdmVyXG4gICAgICAgICAgICAgIC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG4gICAgICAgICAgICAgIGlmIChvd25lci5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgIG93bmVyW3RoaXMuZXhwYW5kb10gPSB2YWx1ZTsgLy8gT3RoZXJ3aXNlIHNlY3VyZSBpdCBpbiBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgLy8gY29uZmlndXJhYmxlIG11c3QgYmUgdHJ1ZSB0byBhbGxvdyB0aGUgcHJvcGVydHkgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyBkZWxldGVkIHdoZW4gZGF0YSBpcyByZW1vdmVkXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG93bmVyLCB0aGlzLmV4cGFuZG8sIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChvd25lciwgZGF0YSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgcHJvcCxcbiAgICAgICAgICAgICAgY2FjaGUgPSB0aGlzLmNhY2hlKG93bmVyKTsgLy8gSGFuZGxlOiBbIG93bmVyLCBrZXksIHZhbHVlIF0gYXJnc1xuICAgICAgICAgIC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1NylcblxuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY2FjaGVbY2FtZWxDYXNlKGRhdGEpXSA9IHZhbHVlOyAvLyBIYW5kbGU6IFsgb3duZXIsIHsgcHJvcGVydGllcyB9IF0gYXJnc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDb3B5IHRoZSBwcm9wZXJ0aWVzIG9uZS1ieS1vbmUgdG8gdGhlIGNhY2hlIG9iamVjdFxuICAgICAgICAgICAgZm9yIChwcm9wIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgY2FjaGVbY2FtZWxDYXNlKHByb3ApXSA9IGRhdGFbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNhY2hlO1xuICAgICAgICB9LFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldChvd25lciwga2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWNoZShvd25lcikgOiAvLyBBbHdheXMgdXNlIGNhbWVsQ2FzZSBrZXkgKGdoLTIyNTcpXG4gICAgICAgICAgb3duZXJbdGhpcy5leHBhbmRvXSAmJiBvd25lclt0aGlzLmV4cGFuZG9dW2NhbWVsQ2FzZShrZXkpXTtcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZXNzOiBmdW5jdGlvbiBhY2Nlc3Mob3duZXIsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAvLyBJbiBjYXNlcyB3aGVyZSBlaXRoZXI6XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIDEuIE5vIGtleSB3YXMgc3BlY2lmaWVkXG4gICAgICAgICAgLy8gICAyLiBBIHN0cmluZyBrZXkgd2FzIHNwZWNpZmllZCwgYnV0IG5vIHZhbHVlIHByb3ZpZGVkXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBUYWtlIHRoZSBcInJlYWRcIiBwYXRoIGFuZCBhbGxvdyB0aGUgZ2V0IG1ldGhvZCB0byBkZXRlcm1pbmVcbiAgICAgICAgICAvLyB3aGljaCB2YWx1ZSB0byByZXR1cm4sIHJlc3BlY3RpdmVseSBlaXRoZXI6XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIDEuIFRoZSBlbnRpcmUgY2FjaGUgb2JqZWN0XG4gICAgICAgICAgLy8gICAyLiBUaGUgZGF0YSBzdG9yZWQgYXQgdGhlIGtleVxuICAgICAgICAgIC8vXG4gICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGtleSAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldChvd25lciwga2V5KTtcbiAgICAgICAgICB9IC8vIFdoZW4gdGhlIGtleSBpcyBub3QgYSBzdHJpbmcsIG9yIGJvdGggYSBrZXkgYW5kIHZhbHVlXG4gICAgICAgICAgLy8gYXJlIHNwZWNpZmllZCwgc2V0IG9yIGV4dGVuZCAoZXhpc3Rpbmcgb2JqZWN0cykgd2l0aCBlaXRoZXI6XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIDEuIEFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG4gICAgICAgICAgLy8gICAyLiBBIGtleSBhbmQgdmFsdWVcbiAgICAgICAgICAvL1xuXG5cbiAgICAgICAgICB0aGlzLnNldChvd25lciwga2V5LCB2YWx1ZSk7IC8vIFNpbmNlIHRoZSBcInNldFwiIHBhdGggY2FuIGhhdmUgdHdvIHBvc3NpYmxlIGVudHJ5IHBvaW50c1xuICAgICAgICAgIC8vIHJldHVybiB0aGUgZXhwZWN0ZWQgZGF0YSBiYXNlZCBvbiB3aGljaCBwYXRoIHdhcyB0YWtlblsqXVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGtleTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUob3duZXIsIGtleSkge1xuICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICBjYWNoZSA9IG93bmVyW3RoaXMuZXhwYW5kb107XG5cbiAgICAgICAgICBpZiAoY2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gU3VwcG9ydCBhcnJheSBvciBzcGFjZSBzZXBhcmF0ZWQgc3RyaW5nIG9mIGtleXNcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgICAgICAgLy8gSWYga2V5IGlzIGFuIGFycmF5IG9mIGtleXMuLi5cbiAgICAgICAgICAgICAgLy8gV2UgYWx3YXlzIHNldCBjYW1lbENhc2Uga2V5cywgc28gcmVtb3ZlIHRoYXQuXG4gICAgICAgICAgICAgIGtleSA9IGtleS5tYXAoY2FtZWxDYXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGtleSA9IGNhbWVsQ2FzZShrZXkpOyAvLyBJZiBhIGtleSB3aXRoIHRoZSBzcGFjZXMgZXhpc3RzLCB1c2UgaXQuXG4gICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY3JlYXRlIGFuIGFycmF5IGJ5IG1hdGNoaW5nIG5vbi13aGl0ZXNwYWNlXG5cbiAgICAgICAgICAgICAga2V5ID0ga2V5IGluIGNhY2hlID8gW2tleV0gOiBrZXkubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkgPSBrZXkubGVuZ3RoO1xuXG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBjYWNoZVtrZXlbaV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gUmVtb3ZlIHRoZSBleHBhbmRvIGlmIHRoZXJlJ3Mgbm8gbW9yZSBkYXRhXG5cblxuICAgICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBqUXVlcnkuaXNFbXB0eU9iamVjdChjYWNoZSkpIHtcbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDVcbiAgICAgICAgICAgIC8vIFdlYmtpdCAmIEJsaW5rIHBlcmZvcm1hbmNlIHN1ZmZlcnMgd2hlbiBkZWxldGluZyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyBmcm9tIERPTSBub2Rlcywgc28gc2V0IHRvIHVuZGVmaW5lZCBpbnN0ZWFkXG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNzg2MDcgKGJ1ZyByZXN0cmljdGVkKVxuICAgICAgICAgICAgaWYgKG93bmVyLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgIG93bmVyW3RoaXMuZXhwYW5kb10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWxldGUgb3duZXJbdGhpcy5leHBhbmRvXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhhc0RhdGE6IGZ1bmN0aW9uIGhhc0RhdGEob3duZXIpIHtcbiAgICAgICAgICB2YXIgY2FjaGUgPSBvd25lclt0aGlzLmV4cGFuZG9dO1xuICAgICAgICAgIHJldHVybiBjYWNoZSAhPT0gdW5kZWZpbmVkICYmICFqUXVlcnkuaXNFbXB0eU9iamVjdChjYWNoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgZGF0YVByaXYgPSBuZXcgRGF0YSgpO1xuICAgICAgdmFyIGRhdGFVc2VyID0gbmV3IERhdGEoKTsgLy9cdEltcGxlbWVudGF0aW9uIFN1bW1hcnlcbiAgICAgIC8vXG4gICAgICAvL1x0MS4gRW5mb3JjZSBBUEkgc3VyZmFjZSBhbmQgc2VtYW50aWMgY29tcGF0aWJpbGl0eSB3aXRoIDEuOS54IGJyYW5jaFxuICAgICAgLy9cdDIuIEltcHJvdmUgdGhlIG1vZHVsZSdzIG1haW50YWluYWJpbGl0eSBieSByZWR1Y2luZyB0aGUgc3RvcmFnZVxuICAgICAgLy9cdFx0cGF0aHMgdG8gYSBzaW5nbGUgbWVjaGFuaXNtLlxuICAgICAgLy9cdDMuIFVzZSB0aGUgc2FtZSBzaW5nbGUgbWVjaGFuaXNtIHRvIHN1cHBvcnQgXCJwcml2YXRlXCIgYW5kIFwidXNlclwiIGRhdGEuXG4gICAgICAvL1x0NC4gX05ldmVyXyBleHBvc2UgXCJwcml2YXRlXCIgZGF0YSB0byB1c2VyIGNvZGUgKFRPRE86IERyb3AgX2RhdGEsIF9yZW1vdmVEYXRhKVxuICAgICAgLy9cdDUuIEF2b2lkIGV4cG9zaW5nIGltcGxlbWVudGF0aW9uIGRldGFpbHMgb24gdXNlciBvYmplY3RzIChlZy4gZXhwYW5kbyBwcm9wZXJ0aWVzKVxuICAgICAgLy9cdDYuIFByb3ZpZGUgYSBjbGVhciBwYXRoIGZvciBpbXBsZW1lbnRhdGlvbiB1cGdyYWRlIHRvIFdlYWtNYXAgaW4gMjAxNFxuXG4gICAgICB2YXIgcmJyYWNlID0gL14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFxuICAgICAgICAgIHJtdWx0aURhc2ggPSAvW0EtWl0vZztcblxuICAgICAgZnVuY3Rpb24gZ2V0RGF0YShkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhID09PSBcInRydWVcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEgPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhID09PSBcIm51bGxcIikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IC8vIE9ubHkgY29udmVydCB0byBhIG51bWJlciBpZiBpdCBkb2Vzbid0IGNoYW5nZSB0aGUgc3RyaW5nXG5cblxuICAgICAgICBpZiAoZGF0YSA9PT0gK2RhdGEgKyBcIlwiKSB7XG4gICAgICAgICAgcmV0dXJuICtkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJicmFjZS50ZXN0KGRhdGEpKSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZGF0YUF0dHIoZWxlbSwga2V5LCBkYXRhKSB7XG4gICAgICAgIHZhciBuYW1lOyAvLyBJZiBub3RoaW5nIHdhcyBmb3VuZCBpbnRlcm5hbGx5LCB0cnkgdG8gZmV0Y2ggYW55XG4gICAgICAgIC8vIGRhdGEgZnJvbSB0aGUgSFRNTDUgZGF0YS0qIGF0dHJpYnV0ZVxuXG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgIG5hbWUgPSBcImRhdGEtXCIgKyBrZXkucmVwbGFjZShybXVsdGlEYXNoLCBcIi0kJlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGRhdGEgPSBlbGVtLmdldEF0dHJpYnV0ZShuYW1lKTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZGF0YSA9IGdldERhdGEoZGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fSAvLyBNYWtlIHN1cmUgd2Ugc2V0IHRoZSBkYXRhIHNvIGl0IGlzbid0IGNoYW5nZWQgbGF0ZXJcblxuXG4gICAgICAgICAgICBkYXRhVXNlci5zZXQoZWxlbSwga2V5LCBkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgalF1ZXJ5LmV4dGVuZCh7XG4gICAgICAgIGhhc0RhdGE6IGZ1bmN0aW9uIGhhc0RhdGEoZWxlbSkge1xuICAgICAgICAgIHJldHVybiBkYXRhVXNlci5oYXNEYXRhKGVsZW0pIHx8IGRhdGFQcml2Lmhhc0RhdGEoZWxlbSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoZWxlbSwgbmFtZSwgX2RhdGEpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YVVzZXIuYWNjZXNzKGVsZW0sIG5hbWUsIF9kYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRGF0YTogZnVuY3Rpb24gcmVtb3ZlRGF0YShlbGVtLCBuYW1lKSB7XG4gICAgICAgICAgZGF0YVVzZXIucmVtb3ZlKGVsZW0sIG5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBUT0RPOiBOb3cgdGhhdCBhbGwgY2FsbHMgdG8gX2RhdGEgYW5kIF9yZW1vdmVEYXRhIGhhdmUgYmVlbiByZXBsYWNlZFxuICAgICAgICAvLyB3aXRoIGRpcmVjdCBjYWxscyB0byBkYXRhUHJpdiBtZXRob2RzLCB0aGVzZSBjYW4gYmUgZGVwcmVjYXRlZC5cbiAgICAgICAgX2RhdGE6IGZ1bmN0aW9uIF9kYXRhKGVsZW0sIG5hbWUsIGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YVByaXYuYWNjZXNzKGVsZW0sIG5hbWUsIGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBfcmVtb3ZlRGF0YTogZnVuY3Rpb24gX3JlbW92ZURhdGEoZWxlbSwgbmFtZSkge1xuICAgICAgICAgIGRhdGFQcml2LnJlbW92ZShlbGVtLCBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGVsZW0gPSB0aGlzWzBdLFxuICAgICAgICAgICAgICBhdHRycyA9IGVsZW0gJiYgZWxlbS5hdHRyaWJ1dGVzOyAvLyBHZXRzIGFsbCB2YWx1ZXNcblxuICAgICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGRhdGEgPSBkYXRhVXNlci5nZXQoZWxlbSk7XG5cbiAgICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgIWRhdGFQcml2LmdldChlbGVtLCBcImhhc0RhdGFBdHRyc1wiKSkge1xuICAgICAgICAgICAgICAgIGkgPSBhdHRycy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG4gICAgICAgICAgICAgICAgICAvLyBUaGUgYXR0cnMgZWxlbWVudHMgY2FuIGJlIG51bGwgKCMxNDg5NClcbiAgICAgICAgICAgICAgICAgIGlmIChhdHRyc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYXR0cnNbaV0ubmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS5pbmRleE9mKFwiZGF0YS1cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gY2FtZWxDYXNlKG5hbWUuc2xpY2UoNSkpO1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGFBdHRyKGVsZW0sIG5hbWUsIGRhdGFbbmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGF0YVByaXYuc2V0KGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIsIHRydWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0gLy8gU2V0cyBtdWx0aXBsZSB2YWx1ZXNcblxuXG4gICAgICAgICAgaWYgKF90eXBlb2Yoa2V5KSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGRhdGFVc2VyLnNldCh0aGlzLCBrZXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkYXRhOyAvLyBUaGUgY2FsbGluZyBqUXVlcnkgb2JqZWN0IChlbGVtZW50IG1hdGNoZXMpIGlzIG5vdCBlbXB0eVxuICAgICAgICAgICAgLy8gKGFuZCB0aGVyZWZvcmUgaGFzIGFuIGVsZW1lbnQgYXBwZWFycyBhdCB0aGlzWyAwIF0pIGFuZCB0aGVcbiAgICAgICAgICAgIC8vIGB2YWx1ZWAgcGFyYW1ldGVyIHdhcyBub3QgdW5kZWZpbmVkLiBBbiBlbXB0eSBqUXVlcnkgb2JqZWN0XG4gICAgICAgICAgICAvLyB3aWxsIHJlc3VsdCBpbiBgdW5kZWZpbmVkYCBmb3IgZWxlbSA9IHRoaXNbIDAgXSB3aGljaCB3aWxsXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBleGNlcHRpb24gaWYgYW4gYXR0ZW1wdCB0byByZWFkIGEgZGF0YSBjYWNoZSBpcyBtYWRlLlxuXG4gICAgICAgICAgICBpZiAoZWxlbSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIC8vIEF0dGVtcHQgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgLy8gVGhlIGtleSB3aWxsIGFsd2F5cyBiZSBjYW1lbENhc2VkIGluIERhdGFcbiAgICAgICAgICAgICAgZGF0YSA9IGRhdGFVc2VyLmdldChlbGVtLCBrZXkpO1xuXG4gICAgICAgICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgfSAvLyBBdHRlbXB0IHRvIFwiZGlzY292ZXJcIiB0aGUgZGF0YSBpblxuICAgICAgICAgICAgICAvLyBIVE1MNSBjdXN0b20gZGF0YS0qIGF0dHJzXG5cblxuICAgICAgICAgICAgICBkYXRhID0gZGF0YUF0dHIoZWxlbSwga2V5KTtcblxuICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgIH0gLy8gV2UgdHJpZWQgcmVhbGx5IGhhcmQsIGJ1dCB0aGUgZGF0YSBkb2Vzbid0IGV4aXN0LlxuXG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSAvLyBTZXQgdGhlIGRhdGEuLi5cblxuXG4gICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBXZSBhbHdheXMgc3RvcmUgdGhlIGNhbWVsQ2FzZWQga2V5XG4gICAgICAgICAgICAgIGRhdGFVc2VyLnNldCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZURhdGE6IGZ1bmN0aW9uIHJlbW92ZURhdGEoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYXRhVXNlci5yZW1vdmUodGhpcywga2V5KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkuZXh0ZW5kKHtcbiAgICAgICAgcXVldWU6IGZ1bmN0aW9uIHF1ZXVlKGVsZW0sIHR5cGUsIGRhdGEpIHtcbiAgICAgICAgICB2YXIgcXVldWU7XG5cbiAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgdHlwZSA9ICh0eXBlIHx8IFwiZnhcIikgKyBcInF1ZXVlXCI7XG4gICAgICAgICAgICBxdWV1ZSA9IGRhdGFQcml2LmdldChlbGVtLCB0eXBlKTsgLy8gU3BlZWQgdXAgZGVxdWV1ZSBieSBnZXR0aW5nIG91dCBxdWlja2x5IGlmIHRoaXMgaXMganVzdCBhIGxvb2t1cFxuXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICBpZiAoIXF1ZXVlIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZSA9IGRhdGFQcml2LmFjY2VzcyhlbGVtLCB0eXBlLCBqUXVlcnkubWFrZUFycmF5KGRhdGEpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBxdWV1ZSB8fCBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlcXVldWU6IGZ1bmN0aW9uIGRlcXVldWUoZWxlbSwgdHlwZSkge1xuICAgICAgICAgIHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuICAgICAgICAgIHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZShlbGVtLCB0eXBlKSxcbiAgICAgICAgICAgICAgc3RhcnRMZW5ndGggPSBxdWV1ZS5sZW5ndGgsXG4gICAgICAgICAgICAgIGZuID0gcXVldWUuc2hpZnQoKSxcbiAgICAgICAgICAgICAgaG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoZWxlbSwgdHlwZSksXG4gICAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgalF1ZXJ5LmRlcXVldWUoZWxlbSwgdHlwZSk7XG4gICAgICAgICAgfTsgLy8gSWYgdGhlIGZ4IHF1ZXVlIGlzIGRlcXVldWVkLCBhbHdheXMgcmVtb3ZlIHRoZSBwcm9ncmVzcyBzZW50aW5lbFxuXG5cbiAgICAgICAgICBpZiAoZm4gPT09IFwiaW5wcm9ncmVzc1wiKSB7XG4gICAgICAgICAgICBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBzdGFydExlbmd0aC0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgLy8gQWRkIGEgcHJvZ3Jlc3Mgc2VudGluZWwgdG8gcHJldmVudCB0aGUgZnggcXVldWUgZnJvbSBiZWluZ1xuICAgICAgICAgICAgLy8gYXV0b21hdGljYWxseSBkZXF1ZXVlZFxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZnhcIikge1xuICAgICAgICAgICAgICBxdWV1ZS51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIH0gLy8gQ2xlYXIgdXAgdGhlIGxhc3QgcXVldWUgc3RvcCBmdW5jdGlvblxuXG5cbiAgICAgICAgICAgIGRlbGV0ZSBob29rcy5zdG9wO1xuICAgICAgICAgICAgZm4uY2FsbChlbGVtLCBuZXh0LCBob29rcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFzdGFydExlbmd0aCAmJiBob29rcykge1xuICAgICAgICAgICAgaG9va3MuZW1wdHkuZmlyZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gTm90IHB1YmxpYyAtIGdlbmVyYXRlIGEgcXVldWVIb29rcyBvYmplY3QsIG9yIHJldHVybiB0aGUgY3VycmVudCBvbmVcbiAgICAgICAgX3F1ZXVlSG9va3M6IGZ1bmN0aW9uIF9xdWV1ZUhvb2tzKGVsZW0sIHR5cGUpIHtcbiAgICAgICAgICB2YXIga2V5ID0gdHlwZSArIFwicXVldWVIb29rc1wiO1xuICAgICAgICAgIHJldHVybiBkYXRhUHJpdi5nZXQoZWxlbSwga2V5KSB8fCBkYXRhUHJpdi5hY2Nlc3MoZWxlbSwga2V5LCB7XG4gICAgICAgICAgICBlbXB0eTogalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGRhdGFQcml2LnJlbW92ZShlbGVtLCBbdHlwZSArIFwicXVldWVcIiwga2V5XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICBxdWV1ZTogZnVuY3Rpb24gcXVldWUodHlwZSwgZGF0YSkge1xuICAgICAgICAgIHZhciBzZXR0ZXIgPSAyO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBkYXRhID0gdHlwZTtcbiAgICAgICAgICAgIHR5cGUgPSBcImZ4XCI7XG4gICAgICAgICAgICBzZXR0ZXItLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IHNldHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5xdWV1ZSh0aGlzWzBdLCB0eXBlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZGF0YSA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcXVldWUgPSBqUXVlcnkucXVldWUodGhpcywgdHlwZSwgZGF0YSk7IC8vIEVuc3VyZSBhIGhvb2tzIGZvciB0aGlzIHF1ZXVlXG5cbiAgICAgICAgICAgIGpRdWVyeS5fcXVldWVIb29rcyh0aGlzLCB0eXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZnhcIiAmJiBxdWV1ZVswXSAhPT0gXCJpbnByb2dyZXNzXCIpIHtcbiAgICAgICAgICAgICAgalF1ZXJ5LmRlcXVldWUodGhpcywgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlcXVldWU6IGZ1bmN0aW9uIGRlcXVldWUodHlwZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgalF1ZXJ5LmRlcXVldWUodGhpcywgdHlwZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyUXVldWU6IGZ1bmN0aW9uIGNsZWFyUXVldWUodHlwZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXVlKHR5cGUgfHwgXCJmeFwiLCBbXSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIEdldCBhIHByb21pc2UgcmVzb2x2ZWQgd2hlbiBxdWV1ZXMgb2YgYSBjZXJ0YWluIHR5cGVcbiAgICAgICAgLy8gYXJlIGVtcHRpZWQgKGZ4IGlzIHRoZSB0eXBlIGJ5IGRlZmF1bHQpXG4gICAgICAgIHByb21pc2U6IGZ1bmN0aW9uIHByb21pc2UodHlwZSwgb2JqKSB7XG4gICAgICAgICAgdmFyIHRtcCxcbiAgICAgICAgICAgICAgY291bnQgPSAxLFxuICAgICAgICAgICAgICBkZWZlciA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuICAgICAgICAgICAgICBlbGVtZW50cyA9IHRoaXMsXG4gICAgICAgICAgICAgIGkgPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgICAgICAgcmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUoKSB7XG4gICAgICAgICAgICBpZiAoISAtLWNvdW50KSB7XG4gICAgICAgICAgICAgIGRlZmVyLnJlc29sdmVXaXRoKGVsZW1lbnRzLCBbZWxlbWVudHNdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBvYmogPSB0eXBlO1xuICAgICAgICAgICAgdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cbiAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICB0bXAgPSBkYXRhUHJpdi5nZXQoZWxlbWVudHNbaV0sIHR5cGUgKyBcInF1ZXVlSG9va3NcIik7XG5cbiAgICAgICAgICAgIGlmICh0bXAgJiYgdG1wLmVtcHR5KSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgIHRtcC5lbXB0eS5hZGQocmVzb2x2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlKG9iaik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIHBudW0gPSAvWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2U7XG4gICAgICB2YXIgcmNzc051bSA9IG5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiICsgcG51bSArIFwiKShbYS16JV0qKSRcIiwgXCJpXCIpO1xuICAgICAgdmFyIGNzc0V4cGFuZCA9IFtcIlRvcFwiLCBcIlJpZ2h0XCIsIFwiQm90dG9tXCIsIFwiTGVmdFwiXTtcbiAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgIHZhciBpc0F0dGFjaGVkID0gZnVuY3Rpb24gaXNBdHRhY2hlZChlbGVtKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkuY29udGFpbnMoZWxlbS5vd25lckRvY3VtZW50LCBlbGVtKTtcbiAgICAgIH0sXG4gICAgICAgICAgY29tcG9zZWQgPSB7XG4gICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICB9OyAvLyBTdXBwb3J0OiBJRSA5IC0gMTErLCBFZGdlIDEyIC0gMTgrLCBpT1MgMTAuMCAtIDEwLjIgb25seVxuICAgICAgLy8gQ2hlY2sgYXR0YWNobWVudCBhY3Jvc3Mgc2hhZG93IERPTSBib3VuZGFyaWVzIHdoZW4gcG9zc2libGUgKGdoLTM1MDQpXG4gICAgICAvLyBTdXBwb3J0OiBpT1MgMTAuMC0xMC4yIG9ubHlcbiAgICAgIC8vIEVhcmx5IGlPUyAxMCB2ZXJzaW9ucyBzdXBwb3J0IGBhdHRhY2hTaGFkb3dgIGJ1dCBub3QgYGdldFJvb3ROb2RlYCxcbiAgICAgIC8vIGxlYWRpbmcgdG8gZXJyb3JzLiBXZSBuZWVkIHRvIGNoZWNrIGZvciBgZ2V0Um9vdE5vZGVgLlxuXG5cbiAgICAgIGlmIChkb2N1bWVudEVsZW1lbnQuZ2V0Um9vdE5vZGUpIHtcbiAgICAgICAgaXNBdHRhY2hlZCA9IGZ1bmN0aW9uIGlzQXR0YWNoZWQoZWxlbSkge1xuICAgICAgICAgIHJldHVybiBqUXVlcnkuY29udGFpbnMoZWxlbS5vd25lckRvY3VtZW50LCBlbGVtKSB8fCBlbGVtLmdldFJvb3ROb2RlKGNvbXBvc2VkKSA9PT0gZWxlbS5vd25lckRvY3VtZW50O1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNIaWRkZW5XaXRoaW5UcmVlID0gZnVuY3Rpb24gaXNIaWRkZW5XaXRoaW5UcmVlKGVsZW0sIGVsKSB7XG4gICAgICAgIC8vIGlzSGlkZGVuV2l0aGluVHJlZSBtaWdodCBiZSBjYWxsZWQgZnJvbSBqUXVlcnkjZmlsdGVyIGZ1bmN0aW9uO1xuICAgICAgICAvLyBpbiB0aGF0IGNhc2UsIGVsZW1lbnQgd2lsbCBiZSBzZWNvbmQgYXJndW1lbnRcbiAgICAgICAgZWxlbSA9IGVsIHx8IGVsZW07IC8vIElubGluZSBzdHlsZSB0cnVtcHMgYWxsXG5cbiAgICAgICAgcmV0dXJuIGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgfHwgZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmIC8vIE90aGVyd2lzZSwgY2hlY2sgY29tcHV0ZWQgc3R5bGVcbiAgICAgICAgLy8gU3VwcG9ydDogRmlyZWZveCA8PTQzIC0gNDVcbiAgICAgICAgLy8gRGlzY29ubmVjdGVkIGVsZW1lbnRzIGNhbiBoYXZlIGNvbXB1dGVkIGRpc3BsYXk6IG5vbmUsIHNvIGZpcnN0IGNvbmZpcm0gdGhhdCBlbGVtIGlzXG4gICAgICAgIC8vIGluIHRoZSBkb2N1bWVudC5cbiAgICAgICAgaXNBdHRhY2hlZChlbGVtKSAmJiBqUXVlcnkuY3NzKGVsZW0sIFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCI7XG4gICAgICB9O1xuXG4gICAgICB2YXIgc3dhcCA9IGZ1bmN0aW9uIHN3YXAoZWxlbSwgb3B0aW9ucywgY2FsbGJhY2ssIGFyZ3MpIHtcbiAgICAgICAgdmFyIHJldCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBvbGQgPSB7fTsgLy8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG5cbiAgICAgICAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICBvbGRbbmFtZV0gPSBlbGVtLnN0eWxlW25hbWVdO1xuICAgICAgICAgIGVsZW0uc3R5bGVbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gY2FsbGJhY2suYXBwbHkoZWxlbSwgYXJncyB8fCBbXSk7IC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuXG4gICAgICAgIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgZWxlbS5zdHlsZVtuYW1lXSA9IG9sZFtuYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBhZGp1c3RDU1MoZWxlbSwgcHJvcCwgdmFsdWVQYXJ0cywgdHdlZW4pIHtcbiAgICAgICAgdmFyIGFkanVzdGVkLFxuICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICBtYXhJdGVyYXRpb25zID0gMjAsXG4gICAgICAgICAgICBjdXJyZW50VmFsdWUgPSB0d2VlbiA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdHdlZW4uY3VyKCk7XG4gICAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGpRdWVyeS5jc3MoZWxlbSwgcHJvcCwgXCJcIik7XG4gICAgICAgIH0sXG4gICAgICAgICAgICBpbml0aWFsID0gY3VycmVudFZhbHVlKCksXG4gICAgICAgICAgICB1bml0ID0gdmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzWzNdIHx8IChqUXVlcnkuY3NzTnVtYmVyW3Byb3BdID8gXCJcIiA6IFwicHhcIiksXG4gICAgICAgICAgICAvLyBTdGFydGluZyB2YWx1ZSBjb21wdXRhdGlvbiBpcyByZXF1aXJlZCBmb3IgcG90ZW50aWFsIHVuaXQgbWlzbWF0Y2hlc1xuICAgICAgICBpbml0aWFsSW5Vbml0ID0gZWxlbS5ub2RlVHlwZSAmJiAoalF1ZXJ5LmNzc051bWJlcltwcm9wXSB8fCB1bml0ICE9PSBcInB4XCIgJiYgK2luaXRpYWwpICYmIHJjc3NOdW0uZXhlYyhqUXVlcnkuY3NzKGVsZW0sIHByb3ApKTtcblxuICAgICAgICBpZiAoaW5pdGlhbEluVW5pdCAmJiBpbml0aWFsSW5Vbml0WzNdICE9PSB1bml0KSB7XG4gICAgICAgICAgLy8gU3VwcG9ydDogRmlyZWZveCA8PTU0XG4gICAgICAgICAgLy8gSGFsdmUgdGhlIGl0ZXJhdGlvbiB0YXJnZXQgdmFsdWUgdG8gcHJldmVudCBpbnRlcmZlcmVuY2UgZnJvbSBDU1MgdXBwZXIgYm91bmRzIChnaC0yMTQ0KVxuICAgICAgICAgIGluaXRpYWwgPSBpbml0aWFsIC8gMjsgLy8gVHJ1c3QgdW5pdHMgcmVwb3J0ZWQgYnkgalF1ZXJ5LmNzc1xuXG4gICAgICAgICAgdW5pdCA9IHVuaXQgfHwgaW5pdGlhbEluVW5pdFszXTsgLy8gSXRlcmF0aXZlbHkgYXBwcm94aW1hdGUgZnJvbSBhIG5vbnplcm8gc3RhcnRpbmcgcG9pbnRcblxuICAgICAgICAgIGluaXRpYWxJblVuaXQgPSAraW5pdGlhbCB8fCAxO1xuXG4gICAgICAgICAgd2hpbGUgKG1heEl0ZXJhdGlvbnMtLSkge1xuICAgICAgICAgICAgLy8gRXZhbHVhdGUgYW5kIHVwZGF0ZSBvdXIgYmVzdCBndWVzcyAoZG91YmxpbmcgZ3Vlc3NlcyB0aGF0IHplcm8gb3V0KS5cbiAgICAgICAgICAgIC8vIEZpbmlzaCBpZiB0aGUgc2NhbGUgZXF1YWxzIG9yIGNyb3NzZXMgMSAobWFraW5nIHRoZSBvbGQqbmV3IHByb2R1Y3Qgbm9uLXBvc2l0aXZlKS5cbiAgICAgICAgICAgIGpRdWVyeS5zdHlsZShlbGVtLCBwcm9wLCBpbml0aWFsSW5Vbml0ICsgdW5pdCk7XG5cbiAgICAgICAgICAgIGlmICgoMSAtIHNjYWxlKSAqICgxIC0gKHNjYWxlID0gY3VycmVudFZhbHVlKCkgLyBpbml0aWFsIHx8IDAuNSkpIDw9IDApIHtcbiAgICAgICAgICAgICAgbWF4SXRlcmF0aW9ucyA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluaXRpYWxJblVuaXQgPSBpbml0aWFsSW5Vbml0IC8gc2NhbGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgKiAyO1xuICAgICAgICAgIGpRdWVyeS5zdHlsZShlbGVtLCBwcm9wLCBpbml0aWFsSW5Vbml0ICsgdW5pdCk7IC8vIE1ha2Ugc3VyZSB3ZSB1cGRhdGUgdGhlIHR3ZWVuIHByb3BlcnRpZXMgbGF0ZXIgb25cblxuICAgICAgICAgIHZhbHVlUGFydHMgPSB2YWx1ZVBhcnRzIHx8IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlUGFydHMpIHtcbiAgICAgICAgICBpbml0aWFsSW5Vbml0ID0gK2luaXRpYWxJblVuaXQgfHwgK2luaXRpYWwgfHwgMDsgLy8gQXBwbHkgcmVsYXRpdmUgb2Zmc2V0ICgrPS8tPSkgaWYgc3BlY2lmaWVkXG5cbiAgICAgICAgICBhZGp1c3RlZCA9IHZhbHVlUGFydHNbMV0gPyBpbml0aWFsSW5Vbml0ICsgKHZhbHVlUGFydHNbMV0gKyAxKSAqIHZhbHVlUGFydHNbMl0gOiArdmFsdWVQYXJ0c1syXTtcblxuICAgICAgICAgIGlmICh0d2Vlbikge1xuICAgICAgICAgICAgdHdlZW4udW5pdCA9IHVuaXQ7XG4gICAgICAgICAgICB0d2Vlbi5zdGFydCA9IGluaXRpYWxJblVuaXQ7XG4gICAgICAgICAgICB0d2Vlbi5lbmQgPSBhZGp1c3RlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWRqdXN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWZhdWx0RGlzcGxheU1hcCA9IHt9O1xuXG4gICAgICBmdW5jdGlvbiBnZXREZWZhdWx0RGlzcGxheShlbGVtKSB7XG4gICAgICAgIHZhciB0ZW1wLFxuICAgICAgICAgICAgZG9jID0gZWxlbS5vd25lckRvY3VtZW50LFxuICAgICAgICAgICAgbm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLFxuICAgICAgICAgICAgZGlzcGxheSA9IGRlZmF1bHREaXNwbGF5TWFwW25vZGVOYW1lXTtcblxuICAgICAgICBpZiAoZGlzcGxheSkge1xuICAgICAgICAgIHJldHVybiBkaXNwbGF5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGVtcCA9IGRvYy5ib2R5LmFwcGVuZENoaWxkKGRvYy5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKSk7XG4gICAgICAgIGRpc3BsYXkgPSBqUXVlcnkuY3NzKHRlbXAsIFwiZGlzcGxheVwiKTtcbiAgICAgICAgdGVtcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXApO1xuXG4gICAgICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIGRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0RGlzcGxheU1hcFtub2RlTmFtZV0gPSBkaXNwbGF5O1xuICAgICAgICByZXR1cm4gZGlzcGxheTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2hvd0hpZGUoZWxlbWVudHMsIHNob3cpIHtcbiAgICAgICAgdmFyIGRpc3BsYXksXG4gICAgICAgICAgICBlbGVtLFxuICAgICAgICAgICAgdmFsdWVzID0gW10sXG4gICAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSBlbGVtZW50cy5sZW5ndGg7IC8vIERldGVybWluZSBuZXcgZGlzcGxheSB2YWx1ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIGNoYW5nZVxuXG4gICAgICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGVsZW0gPSBlbGVtZW50c1tpbmRleF07XG5cbiAgICAgICAgICBpZiAoIWVsZW0uc3R5bGUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG5cbiAgICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgLy8gU2luY2Ugd2UgZm9yY2UgdmlzaWJpbGl0eSB1cG9uIGNhc2NhZGUtaGlkZGVuIGVsZW1lbnRzLCBhbiBpbW1lZGlhdGUgKGFuZCBzbG93KVxuICAgICAgICAgICAgLy8gY2hlY2sgaXMgcmVxdWlyZWQgaW4gdGhpcyBmaXJzdCBsb29wIHVubGVzcyB3ZSBoYXZlIGEgbm9uZW1wdHkgZGlzcGxheSB2YWx1ZSAoZWl0aGVyXG4gICAgICAgICAgICAvLyBpbmxpbmUgb3IgYWJvdXQtdG8tYmUtcmVzdG9yZWQpXG4gICAgICAgICAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgdmFsdWVzW2luZGV4XSA9IGRhdGFQcml2LmdldChlbGVtLCBcImRpc3BsYXlcIikgfHwgbnVsbDtcblxuICAgICAgICAgICAgICBpZiAoIXZhbHVlc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKGVsZW0pKSB7XG4gICAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSBnZXREZWZhdWx0RGlzcGxheShlbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSBcIm5vbmVcIjsgLy8gUmVtZW1iZXIgd2hhdCB3ZSdyZSBvdmVyd3JpdGluZ1xuXG4gICAgICAgICAgICAgIGRhdGFQcml2LnNldChlbGVtLCBcImRpc3BsYXlcIiwgZGlzcGxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFNldCB0aGUgZGlzcGxheSBvZiB0aGUgZWxlbWVudHMgaW4gYSBzZWNvbmQgbG9vcCB0byBhdm9pZCBjb25zdGFudCByZWZsb3dcblxuXG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmICh2YWx1ZXNbaW5kZXhdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gdmFsdWVzW2luZGV4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICBzaG93OiBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgICAgIHJldHVybiBzaG93SGlkZSh0aGlzLCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICAgICByZXR1cm4gc2hvd0hpZGUodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKHN0YXRlKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNIaWRkZW5XaXRoaW5UcmVlKHRoaXMpKSB7XG4gICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBqUXVlcnkodGhpcykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciByY2hlY2thYmxlVHlwZSA9IC9eKD86Y2hlY2tib3h8cmFkaW8pJC9pO1xuICAgICAgdmFyIHJ0YWdOYW1lID0gLzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKS9pO1xuICAgICAgdmFyIHJzY3JpcHRUeXBlID0gL14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaTsgLy8gV2UgaGF2ZSB0byBjbG9zZSB0aGVzZSB0YWdzIHRvIHN1cHBvcnQgWEhUTUwgKCMxMzIwMClcblxuICAgICAgdmFyIHdyYXBNYXAgPSB7XG4gICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4gICAgICAgIG9wdGlvbjogWzEsIFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLCBcIjwvc2VsZWN0PlwiXSxcbiAgICAgICAgLy8gWEhUTUwgcGFyc2VycyBkbyBub3QgbWFnaWNhbGx5IGluc2VydCBlbGVtZW50cyBpbiB0aGVcbiAgICAgICAgLy8gc2FtZSB3YXkgdGhhdCB0YWcgc291cCBwYXJzZXJzIGRvLiBTbyB3ZSBjYW5ub3Qgc2hvcnRlblxuICAgICAgICAvLyB0aGlzIGJ5IG9taXR0aW5nIDx0Ym9keT4gb3Igb3RoZXIgcmVxdWlyZWQgZWxlbWVudHMuXG4gICAgICAgIHRoZWFkOiBbMSwgXCI8dGFibGU+XCIsIFwiPC90YWJsZT5cIl0sXG4gICAgICAgIGNvbDogWzIsIFwiPHRhYmxlPjxjb2xncm91cD5cIiwgXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLFxuICAgICAgICB0cjogWzIsIFwiPHRhYmxlPjx0Ym9keT5cIiwgXCI8L3Rib2R5PjwvdGFibGU+XCJdLFxuICAgICAgICB0ZDogWzMsIFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsIFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLFxuICAgICAgICBfZGVmYXVsdDogWzAsIFwiXCIsIFwiXCJdXG4gICAgICB9OyAvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXG4gICAgICB3cmFwTWFwLm9wdGdyb3VwID0gd3JhcE1hcC5vcHRpb247XG4gICAgICB3cmFwTWFwLnRib2R5ID0gd3JhcE1hcC50Zm9vdCA9IHdyYXBNYXAuY29sZ3JvdXAgPSB3cmFwTWFwLmNhcHRpb24gPSB3cmFwTWFwLnRoZWFkO1xuICAgICAgd3JhcE1hcC50aCA9IHdyYXBNYXAudGQ7XG5cbiAgICAgIGZ1bmN0aW9uIGdldEFsbChjb250ZXh0LCB0YWcpIHtcbiAgICAgICAgLy8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuICAgICAgICAvLyBVc2UgdHlwZW9mIHRvIGF2b2lkIHplcm8tYXJndW1lbnQgbWV0aG9kIGludm9jYXRpb24gb24gaG9zdCBvYmplY3RzICgjMTUxNTEpXG4gICAgICAgIHZhciByZXQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgcmV0ID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcgfHwgXCIqXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICByZXQgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwodGFnIHx8IFwiKlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YWcgPT09IHVuZGVmaW5lZCB8fCB0YWcgJiYgbm9kZU5hbWUoY29udGV4dCwgdGFnKSkge1xuICAgICAgICAgIHJldHVybiBqUXVlcnkubWVyZ2UoW2NvbnRleHRdLCByZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0gLy8gTWFyayBzY3JpcHRzIGFzIGhhdmluZyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkXG5cblxuICAgICAgZnVuY3Rpb24gc2V0R2xvYmFsRXZhbChlbGVtcywgcmVmRWxlbWVudHMpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgbCA9IGVsZW1zLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGRhdGFQcml2LnNldChlbGVtc1tpXSwgXCJnbG9iYWxFdmFsXCIsICFyZWZFbGVtZW50cyB8fCBkYXRhUHJpdi5nZXQocmVmRWxlbWVudHNbaV0sIFwiZ2xvYmFsRXZhbFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHJodG1sID0gLzx8JiM/XFx3KzsvO1xuXG4gICAgICBmdW5jdGlvbiBidWlsZEZyYWdtZW50KGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24sIGlnbm9yZWQpIHtcbiAgICAgICAgdmFyIGVsZW0sXG4gICAgICAgICAgICB0bXAsXG4gICAgICAgICAgICB0YWcsXG4gICAgICAgICAgICB3cmFwLFxuICAgICAgICAgICAgYXR0YWNoZWQsXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgZnJhZ21lbnQgPSBjb250ZXh0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICAgIG5vZGVzID0gW10sXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGwgPSBlbGVtcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBlbGVtID0gZWxlbXNbaV07XG5cbiAgICAgICAgICBpZiAoZWxlbSB8fCBlbGVtID09PSAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgbm9kZXMgZGlyZWN0bHlcbiAgICAgICAgICAgIGlmICh0b1R5cGUoZWxlbSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG4gICAgICAgICAgICAgIC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcbiAgICAgICAgICAgICAgalF1ZXJ5Lm1lcmdlKG5vZGVzLCBlbGVtLm5vZGVUeXBlID8gW2VsZW1dIDogZWxlbSk7IC8vIENvbnZlcnQgbm9uLWh0bWwgaW50byBhIHRleHQgbm9kZVxuICAgICAgICAgICAgfSBlbHNlIGlmICghcmh0bWwudGVzdChlbGVtKSkge1xuICAgICAgICAgICAgICBub2Rlcy5wdXNoKGNvbnRleHQuY3JlYXRlVGV4dE5vZGUoZWxlbSkpOyAvLyBDb252ZXJ0IGh0bWwgaW50byBET00gbm9kZXNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRtcCA9IHRtcCB8fCBmcmFnbWVudC5hcHBlbmRDaGlsZChjb250ZXh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpOyAvLyBEZXNlcmlhbGl6ZSBhIHN0YW5kYXJkIHJlcHJlc2VudGF0aW9uXG5cbiAgICAgICAgICAgICAgdGFnID0gKHJ0YWdOYW1lLmV4ZWMoZWxlbSkgfHwgW1wiXCIsIFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICB3cmFwID0gd3JhcE1hcFt0YWddIHx8IHdyYXBNYXAuX2RlZmF1bHQ7XG4gICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSB3cmFwWzFdICsgalF1ZXJ5Lmh0bWxQcmVmaWx0ZXIoZWxlbSkgKyB3cmFwWzJdOyAvLyBEZXNjZW5kIHRocm91Z2ggd3JhcHBlcnMgdG8gdGhlIHJpZ2h0IGNvbnRlbnRcblxuICAgICAgICAgICAgICBqID0gd3JhcFswXTtcblxuICAgICAgICAgICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gdG1wLmxhc3RDaGlsZDtcbiAgICAgICAgICAgICAgfSAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcbiAgICAgICAgICAgICAgLy8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXG5cbiAgICAgICAgICAgICAgalF1ZXJ5Lm1lcmdlKG5vZGVzLCB0bXAuY2hpbGROb2Rlcyk7IC8vIFJlbWVtYmVyIHRoZSB0b3AtbGV2ZWwgY29udGFpbmVyXG5cbiAgICAgICAgICAgICAgdG1wID0gZnJhZ21lbnQuZmlyc3RDaGlsZDsgLy8gRW5zdXJlIHRoZSBjcmVhdGVkIG5vZGVzIGFyZSBvcnBoYW5lZCAoIzEyMzkyKVxuXG4gICAgICAgICAgICAgIHRtcC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFJlbW92ZSB3cmFwcGVyIGZyb20gZnJhZ21lbnRcblxuXG4gICAgICAgIGZyYWdtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGVsZW0gPSBub2Rlc1tpKytdKSB7XG4gICAgICAgICAgLy8gU2tpcCBlbGVtZW50cyBhbHJlYWR5IGluIHRoZSBjb250ZXh0IGNvbGxlY3Rpb24gKHRyYWMtNDA4NylcbiAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIGpRdWVyeS5pbkFycmF5KGVsZW0sIHNlbGVjdGlvbikgPiAtMSkge1xuICAgICAgICAgICAgaWYgKGlnbm9yZWQpIHtcbiAgICAgICAgICAgICAgaWdub3JlZC5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhdHRhY2hlZCA9IGlzQXR0YWNoZWQoZWxlbSk7IC8vIEFwcGVuZCB0byBmcmFnbWVudFxuXG4gICAgICAgICAgdG1wID0gZ2V0QWxsKGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW0pLCBcInNjcmlwdFwiKTsgLy8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXG4gICAgICAgICAgaWYgKGF0dGFjaGVkKSB7XG4gICAgICAgICAgICBzZXRHbG9iYWxFdmFsKHRtcCk7XG4gICAgICAgICAgfSAvLyBDYXB0dXJlIGV4ZWN1dGFibGVzXG5cblxuICAgICAgICAgIGlmIChzY3JpcHRzKSB7XG4gICAgICAgICAgICBqID0gMDtcblxuICAgICAgICAgICAgd2hpbGUgKGVsZW0gPSB0bXBbaisrXSkge1xuICAgICAgICAgICAgICBpZiAocnNjcmlwdFR5cGUudGVzdChlbGVtLnR5cGUgfHwgXCJcIikpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzLnB1c2goZWxlbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgICB9XG5cbiAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICAgIGRpdiA9IGZyYWdtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLFxuICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHlcbiAgICAgICAgLy8gQ2hlY2sgc3RhdGUgbG9zdCBpZiB0aGUgbmFtZSBpcyBzZXQgKCMxMTIxNylcbiAgICAgICAgLy8gU3VwcG9ydDogV2luZG93cyBXZWIgQXBwcyAoV1dBKVxuICAgICAgICAvLyBgbmFtZWAgYW5kIGB0eXBlYCBtdXN0IHVzZSAuc2V0QXR0cmlidXRlIGZvciBXV0EgKCMxNDkwMSlcblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidFwiKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTsgLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMSBvbmx5XG4gICAgICAgIC8vIE9sZGVyIFdlYktpdCBkb2Vzbid0IGNsb25lIGNoZWNrZWQgc3RhdGUgY29ycmVjdGx5IGluIGZyYWdtZW50c1xuXG4gICAgICAgIHN1cHBvcnQuY2hlY2tDbG9uZSA9IGRpdi5jbG9uZU5vZGUodHJ1ZSkuY2xvbmVOb2RlKHRydWUpLmxhc3RDaGlsZC5jaGVja2VkOyAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRleHRhcmVhIChhbmQgY2hlY2tib3gpIGRlZmF1bHRWYWx1ZSBpcyBwcm9wZXJseSBjbG9uZWRcblxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gXCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCI7XG4gICAgICAgIHN1cHBvcnQubm9DbG9uZUNoZWNrZWQgPSAhIWRpdi5jbG9uZU5vZGUodHJ1ZSkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgIH0pKCk7XG5cbiAgICAgIHZhciBya2V5RXZlbnQgPSAvXmtleS8sXG4gICAgICAgICAgcm1vdXNlRXZlbnQgPSAvXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sXG4gICAgICAgICAgcnR5cGVuYW1lc3BhY2UgPSAvXihbXi5dKikoPzpcXC4oLispfCkvO1xuXG4gICAgICBmdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gLy8gU3VwcG9ydDogSUUgPD05IC0gMTErXG4gICAgICAvLyBmb2N1cygpIGFuZCBibHVyKCkgYXJlIGFzeW5jaHJvbm91cywgZXhjZXB0IHdoZW4gdGhleSBhcmUgbm8tb3AuXG4gICAgICAvLyBTbyBleHBlY3QgZm9jdXMgdG8gYmUgc3luY2hyb25vdXMgd2hlbiB0aGUgZWxlbWVudCBpcyBhbHJlYWR5IGFjdGl2ZSxcbiAgICAgIC8vIGFuZCBibHVyIHRvIGJlIHN5bmNocm9ub3VzIHdoZW4gdGhlIGVsZW1lbnQgaXMgbm90IGFscmVhZHkgYWN0aXZlLlxuICAgICAgLy8gKGZvY3VzIGFuZCBibHVyIGFyZSBhbHdheXMgc3luY2hyb25vdXMgaW4gb3RoZXIgc3VwcG9ydGVkIGJyb3dzZXJzLFxuICAgICAgLy8gdGhpcyBqdXN0IGRlZmluZXMgd2hlbiB3ZSBjYW4gY291bnQgb24gaXQpLlxuXG5cbiAgICAgIGZ1bmN0aW9uIGV4cGVjdFN5bmMoZWxlbSwgdHlwZSkge1xuICAgICAgICByZXR1cm4gZWxlbSA9PT0gc2FmZUFjdGl2ZUVsZW1lbnQoKSA9PT0gKHR5cGUgPT09IFwiZm9jdXNcIik7XG4gICAgICB9IC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4gICAgICAvLyBBY2Nlc3NpbmcgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBjYW4gdGhyb3cgdW5leHBlY3RlZGx5XG4gICAgICAvLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzOTNcblxuXG4gICAgICBmdW5jdGlvbiBzYWZlQWN0aXZlRWxlbWVudCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfb24oZWxlbSwgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgb25lKSB7XG4gICAgICAgIHZhciBvcmlnRm4sIHR5cGU7IC8vIFR5cGVzIGNhbiBiZSBhIG1hcCBvZiB0eXBlcy9oYW5kbGVyc1xuXG4gICAgICAgIGlmIChfdHlwZW9mKHR5cGVzKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIC8vICggdHlwZXMtT2JqZWN0LCBzZWxlY3RvciwgZGF0YSApXG4gICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgLy8gKCB0eXBlcy1PYmplY3QsIGRhdGEgKVxuICAgICAgICAgICAgZGF0YSA9IGRhdGEgfHwgc2VsZWN0b3I7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHR5cGUgaW4gdHlwZXMpIHtcbiAgICAgICAgICAgIF9vbihlbGVtLCB0eXBlLCBzZWxlY3RvciwgZGF0YSwgdHlwZXNbdHlwZV0sIG9uZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YSA9PSBudWxsICYmIGZuID09IG51bGwpIHtcbiAgICAgICAgICAvLyAoIHR5cGVzLCBmbiApXG4gICAgICAgICAgZm4gPSBzZWxlY3RvcjtcbiAgICAgICAgICBkYXRhID0gc2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZm4gPT0gbnVsbCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8vICggdHlwZXMsIHNlbGVjdG9yLCBmbiApXG4gICAgICAgICAgICBmbiA9IGRhdGE7XG4gICAgICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAoIHR5cGVzLCBkYXRhLCBmbiApXG4gICAgICAgICAgICBmbiA9IGRhdGE7XG4gICAgICAgICAgICBkYXRhID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgZm4gPSByZXR1cm5GYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICghZm4pIHtcbiAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvbmUgPT09IDEpIHtcbiAgICAgICAgICBvcmlnRm4gPSBmbjtcblxuICAgICAgICAgIGZuID0gZnVuY3Rpb24gZm4oZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIENhbiB1c2UgYW4gZW1wdHkgc2V0LCBzaW5jZSBldmVudCBjb250YWlucyB0aGUgaW5mb1xuICAgICAgICAgICAgalF1ZXJ5KCkub2ZmKGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybiBvcmlnRm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9OyAvLyBVc2Ugc2FtZSBndWlkIHNvIGNhbGxlciBjYW4gcmVtb3ZlIHVzaW5nIG9yaWdGblxuXG5cbiAgICAgICAgICBmbi5ndWlkID0gb3JpZ0ZuLmd1aWQgfHwgKG9yaWdGbi5ndWlkID0galF1ZXJ5Lmd1aWQrKyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBqUXVlcnkuZXZlbnQuYWRkKHRoaXMsIHR5cGVzLCBmbiwgZGF0YSwgc2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qXG4gICAgICAgKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBtYW5hZ2luZyBldmVudHMgLS0gbm90IHBhcnQgb2YgdGhlIHB1YmxpYyBpbnRlcmZhY2UuXG4gICAgICAgKiBQcm9wcyB0byBEZWFuIEVkd2FyZHMnIGFkZEV2ZW50IGxpYnJhcnkgZm9yIG1hbnkgb2YgdGhlIGlkZWFzLlxuICAgICAgICovXG5cblxuICAgICAgalF1ZXJ5LmV2ZW50ID0ge1xuICAgICAgICBnbG9iYWw6IHt9LFxuICAgICAgICBhZGQ6IGZ1bmN0aW9uIGFkZChlbGVtLCB0eXBlcywgaGFuZGxlciwgZGF0YSwgc2VsZWN0b3IpIHtcbiAgICAgICAgICB2YXIgaGFuZGxlT2JqSW4sXG4gICAgICAgICAgICAgIGV2ZW50SGFuZGxlLFxuICAgICAgICAgICAgICB0bXAsXG4gICAgICAgICAgICAgIGV2ZW50cyxcbiAgICAgICAgICAgICAgdCxcbiAgICAgICAgICAgICAgaGFuZGxlT2JqLFxuICAgICAgICAgICAgICBzcGVjaWFsLFxuICAgICAgICAgICAgICBoYW5kbGVycyxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgbmFtZXNwYWNlcyxcbiAgICAgICAgICAgICAgb3JpZ1R5cGUsXG4gICAgICAgICAgICAgIGVsZW1EYXRhID0gZGF0YVByaXYuZ2V0KGVsZW0pOyAvLyBEb24ndCBhdHRhY2ggZXZlbnRzIHRvIG5vRGF0YSBvciB0ZXh0L2NvbW1lbnQgbm9kZXMgKGJ1dCBhbGxvdyBwbGFpbiBvYmplY3RzKVxuXG4gICAgICAgICAgaWYgKCFlbGVtRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gQ2FsbGVyIGNhbiBwYXNzIGluIGFuIG9iamVjdCBvZiBjdXN0b20gZGF0YSBpbiBsaWV1IG9mIHRoZSBoYW5kbGVyXG5cblxuICAgICAgICAgIGlmIChoYW5kbGVyLmhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZU9iakluID0gaGFuZGxlcjtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBoYW5kbGVPYmpJbi5oYW5kbGVyO1xuICAgICAgICAgICAgc2VsZWN0b3IgPSBoYW5kbGVPYmpJbi5zZWxlY3RvcjtcbiAgICAgICAgICB9IC8vIEVuc3VyZSB0aGF0IGludmFsaWQgc2VsZWN0b3JzIHRocm93IGV4Y2VwdGlvbnMgYXQgYXR0YWNoIHRpbWVcbiAgICAgICAgICAvLyBFdmFsdWF0ZSBhZ2FpbnN0IGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGVsZW0gaXMgYSBub24tZWxlbWVudCBub2RlIChlLmcuLCBkb2N1bWVudClcblxuXG4gICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICBqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoZG9jdW1lbnRFbGVtZW50LCBzZWxlY3Rvcik7XG4gICAgICAgICAgfSAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgaGFuZGxlciBoYXMgYSB1bmlxdWUgSUQsIHVzZWQgdG8gZmluZC9yZW1vdmUgaXQgbGF0ZXJcblxuXG4gICAgICAgICAgaWYgKCFoYW5kbGVyLmd1aWQpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuZ3VpZCA9IGpRdWVyeS5ndWlkKys7XG4gICAgICAgICAgfSAvLyBJbml0IHRoZSBlbGVtZW50J3MgZXZlbnQgc3RydWN0dXJlIGFuZCBtYWluIGhhbmRsZXIsIGlmIHRoaXMgaXMgdGhlIGZpcnN0XG5cblxuICAgICAgICAgIGlmICghKGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cykpIHtcbiAgICAgICAgICAgIGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cyA9IHt9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghKGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlKSkge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGUgPSBlbGVtRGF0YS5oYW5kbGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuICAgICAgICAgICAgICAvLyB3aGVuIGFuIGV2ZW50IGlzIGNhbGxlZCBhZnRlciBhIHBhZ2UgaGFzIHVubG9hZGVkXG4gICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgIT09IGUudHlwZSA/IGpRdWVyeS5ldmVudC5kaXNwYXRjaC5hcHBseShlbGVtLCBhcmd1bWVudHMpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IC8vIEhhbmRsZSBtdWx0aXBsZSBldmVudHMgc2VwYXJhdGVkIGJ5IGEgc3BhY2VcblxuXG4gICAgICAgICAgdHlwZXMgPSAodHlwZXMgfHwgXCJcIikubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW1wiXCJdO1xuICAgICAgICAgIHQgPSB0eXBlcy5sZW5ndGg7XG5cbiAgICAgICAgICB3aGlsZSAodC0tKSB7XG4gICAgICAgICAgICB0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKHR5cGVzW3RdKSB8fCBbXTtcbiAgICAgICAgICAgIHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsxXTtcbiAgICAgICAgICAgIG5hbWVzcGFjZXMgPSAodG1wWzJdIHx8IFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCk7IC8vIFRoZXJlICptdXN0KiBiZSBhIHR5cGUsIG5vIGF0dGFjaGluZyBuYW1lc3BhY2Utb25seSBoYW5kbGVyc1xuXG4gICAgICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IC8vIElmIGV2ZW50IGNoYW5nZXMgaXRzIHR5cGUsIHVzZSB0aGUgc3BlY2lhbCBldmVudCBoYW5kbGVycyBmb3IgdGhlIGNoYW5nZWQgdHlwZVxuXG5cbiAgICAgICAgICAgIHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFt0eXBlXSB8fCB7fTsgLy8gSWYgc2VsZWN0b3IgZGVmaW5lZCwgZGV0ZXJtaW5lIHNwZWNpYWwgZXZlbnQgYXBpIHR5cGUsIG90aGVyd2lzZSBnaXZlbiB0eXBlXG5cbiAgICAgICAgICAgIHR5cGUgPSAoc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUpIHx8IHR5cGU7IC8vIFVwZGF0ZSBzcGVjaWFsIGJhc2VkIG9uIG5ld2x5IHJlc2V0IHR5cGVcblxuICAgICAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9OyAvLyBoYW5kbGVPYmogaXMgcGFzc2VkIHRvIGFsbCBldmVudCBoYW5kbGVyc1xuXG4gICAgICAgICAgICBoYW5kbGVPYmogPSBqUXVlcnkuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgb3JpZ1R5cGU6IG9yaWdUeXBlLFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgICAgICBndWlkOiBoYW5kbGVyLmd1aWQsXG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgbmVlZHNDb250ZXh0OiBzZWxlY3RvciAmJiBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChzZWxlY3RvciksXG4gICAgICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKFwiLlwiKVxuICAgICAgICAgICAgfSwgaGFuZGxlT2JqSW4pOyAvLyBJbml0IHRoZSBldmVudCBoYW5kbGVyIHF1ZXVlIGlmIHdlJ3JlIHRoZSBmaXJzdFxuXG4gICAgICAgICAgICBpZiAoIShoYW5kbGVycyA9IGV2ZW50c1t0eXBlXSkpIHtcbiAgICAgICAgICAgICAgaGFuZGxlcnMgPSBldmVudHNbdHlwZV0gPSBbXTtcbiAgICAgICAgICAgICAgaGFuZGxlcnMuZGVsZWdhdGVDb3VudCA9IDA7IC8vIE9ubHkgdXNlIGFkZEV2ZW50TGlzdGVuZXIgaWYgdGhlIHNwZWNpYWwgZXZlbnRzIGhhbmRsZXIgcmV0dXJucyBmYWxzZVxuXG4gICAgICAgICAgICAgIGlmICghc3BlY2lhbC5zZXR1cCB8fCBzcGVjaWFsLnNldHVwLmNhbGwoZWxlbSwgZGF0YSwgbmFtZXNwYWNlcywgZXZlbnRIYW5kbGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBldmVudEhhbmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcGVjaWFsLmFkZCkge1xuICAgICAgICAgICAgICBzcGVjaWFsLmFkZC5jYWxsKGVsZW0sIGhhbmRsZU9iaik7XG5cbiAgICAgICAgICAgICAgaWYgKCFoYW5kbGVPYmouaGFuZGxlci5ndWlkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCA9IGhhbmRsZXIuZ3VpZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyBBZGQgdG8gdGhlIGVsZW1lbnQncyBoYW5kbGVyIGxpc3QsIGRlbGVnYXRlcyBpbiBmcm9udFxuXG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcnMuZGVsZWdhdGVDb3VudCsrLCAwLCBoYW5kbGVPYmopO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVPYmopO1xuICAgICAgICAgICAgfSAvLyBLZWVwIHRyYWNrIG9mIHdoaWNoIGV2ZW50cyBoYXZlIGV2ZXIgYmVlbiB1c2VkLCBmb3IgZXZlbnQgb3B0aW1pemF0aW9uXG5cblxuICAgICAgICAgICAgalF1ZXJ5LmV2ZW50Lmdsb2JhbFt0eXBlXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBEZXRhY2ggYW4gZXZlbnQgb3Igc2V0IG9mIGV2ZW50cyBmcm9tIGFuIGVsZW1lbnRcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoZWxlbSwgdHlwZXMsIGhhbmRsZXIsIHNlbGVjdG9yLCBtYXBwZWRUeXBlcykge1xuICAgICAgICAgIHZhciBqLFxuICAgICAgICAgICAgICBvcmlnQ291bnQsXG4gICAgICAgICAgICAgIHRtcCxcbiAgICAgICAgICAgICAgZXZlbnRzLFxuICAgICAgICAgICAgICB0LFxuICAgICAgICAgICAgICBoYW5kbGVPYmosXG4gICAgICAgICAgICAgIHNwZWNpYWwsXG4gICAgICAgICAgICAgIGhhbmRsZXJzLFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICBuYW1lc3BhY2VzLFxuICAgICAgICAgICAgICBvcmlnVHlwZSxcbiAgICAgICAgICAgICAgZWxlbURhdGEgPSBkYXRhUHJpdi5oYXNEYXRhKGVsZW0pICYmIGRhdGFQcml2LmdldChlbGVtKTtcblxuICAgICAgICAgIGlmICghZWxlbURhdGEgfHwgIShldmVudHMgPSBlbGVtRGF0YS5ldmVudHMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBPbmNlIGZvciBlYWNoIHR5cGUubmFtZXNwYWNlIGluIHR5cGVzOyB0eXBlIG1heSBiZSBvbWl0dGVkXG5cblxuICAgICAgICAgIHR5cGVzID0gKHR5cGVzIHx8IFwiXCIpLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtcIlwiXTtcbiAgICAgICAgICB0ID0gdHlwZXMubGVuZ3RoO1xuXG4gICAgICAgICAgd2hpbGUgKHQtLSkge1xuICAgICAgICAgICAgdG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyh0eXBlc1t0XSkgfHwgW107XG4gICAgICAgICAgICB0eXBlID0gb3JpZ1R5cGUgPSB0bXBbMV07XG4gICAgICAgICAgICBuYW1lc3BhY2VzID0gKHRtcFsyXSB8fCBcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpOyAvLyBVbmJpbmQgYWxsIGV2ZW50cyAob24gdGhpcyBuYW1lc3BhY2UsIGlmIHByb3ZpZGVkKSBmb3IgdGhlIGVsZW1lbnRcblxuICAgICAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICAgIGZvciAodHlwZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQucmVtb3ZlKGVsZW0sIHR5cGUgKyB0eXBlc1t0XSwgaGFuZGxlciwgc2VsZWN0b3IsIHRydWUpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFt0eXBlXSB8fCB7fTtcbiAgICAgICAgICAgIHR5cGUgPSAoc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUpIHx8IHR5cGU7XG4gICAgICAgICAgICBoYW5kbGVycyA9IGV2ZW50c1t0eXBlXSB8fCBbXTtcbiAgICAgICAgICAgIHRtcCA9IHRtcFsyXSAmJiBuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKSArIFwiKFxcXFwufCQpXCIpOyAvLyBSZW1vdmUgbWF0Y2hpbmcgZXZlbnRzXG5cbiAgICAgICAgICAgIG9yaWdDb3VudCA9IGogPSBoYW5kbGVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgICAgICAgaGFuZGxlT2JqID0gaGFuZGxlcnNbal07XG5cbiAgICAgICAgICAgICAgaWYgKChtYXBwZWRUeXBlcyB8fCBvcmlnVHlwZSA9PT0gaGFuZGxlT2JqLm9yaWdUeXBlKSAmJiAoIWhhbmRsZXIgfHwgaGFuZGxlci5ndWlkID09PSBoYW5kbGVPYmouZ3VpZCkgJiYgKCF0bXAgfHwgdG1wLnRlc3QoaGFuZGxlT2JqLm5hbWVzcGFjZSkpICYmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09IGhhbmRsZU9iai5zZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gXCIqKlwiICYmIGhhbmRsZU9iai5zZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaiwgMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlT2JqLnNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LS07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNwZWNpYWwucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICBzcGVjaWFsLnJlbW92ZS5jYWxsKGVsZW0sIGhhbmRsZU9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIFJlbW92ZSBnZW5lcmljIGV2ZW50IGhhbmRsZXIgaWYgd2UgcmVtb3ZlZCBzb21ldGhpbmcgYW5kIG5vIG1vcmUgaGFuZGxlcnMgZXhpc3RcbiAgICAgICAgICAgIC8vIChhdm9pZHMgcG90ZW50aWFsIGZvciBlbmRsZXNzIHJlY3Vyc2lvbiBkdXJpbmcgcmVtb3ZhbCBvZiBzcGVjaWFsIGV2ZW50IGhhbmRsZXJzKVxuXG5cbiAgICAgICAgICAgIGlmIChvcmlnQ291bnQgJiYgIWhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBpZiAoIXNwZWNpYWwudGVhcmRvd24gfHwgc3BlY2lhbC50ZWFyZG93bi5jYWxsKGVsZW0sIG5hbWVzcGFjZXMsIGVsZW1EYXRhLmhhbmRsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LnJlbW92ZUV2ZW50KGVsZW0sIHR5cGUsIGVsZW1EYXRhLmhhbmRsZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gUmVtb3ZlIGRhdGEgYW5kIHRoZSBleHBhbmRvIGlmIGl0J3Mgbm8gbG9uZ2VyIHVzZWRcblxuXG4gICAgICAgICAgaWYgKGpRdWVyeS5pc0VtcHR5T2JqZWN0KGV2ZW50cykpIHtcbiAgICAgICAgICAgIGRhdGFQcml2LnJlbW92ZShlbGVtLCBcImhhbmRsZSBldmVudHNcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2gobmF0aXZlRXZlbnQpIHtcbiAgICAgICAgICAvLyBNYWtlIGEgd3JpdGFibGUgalF1ZXJ5LkV2ZW50IGZyb20gdGhlIG5hdGl2ZSBldmVudCBvYmplY3RcbiAgICAgICAgICB2YXIgZXZlbnQgPSBqUXVlcnkuZXZlbnQuZml4KG5hdGl2ZUV2ZW50KTtcbiAgICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgICAgaixcbiAgICAgICAgICAgICAgcmV0LFxuICAgICAgICAgICAgICBtYXRjaGVkLFxuICAgICAgICAgICAgICBoYW5kbGVPYmosXG4gICAgICAgICAgICAgIGhhbmRsZXJRdWV1ZSxcbiAgICAgICAgICAgICAgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSxcbiAgICAgICAgICAgICAgaGFuZGxlcnMgPSAoZGF0YVByaXYuZ2V0KHRoaXMsIFwiZXZlbnRzXCIpIHx8IHt9KVtldmVudC50eXBlXSB8fCBbXSxcbiAgICAgICAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW2V2ZW50LnR5cGVdIHx8IHt9OyAvLyBVc2UgdGhlIGZpeC1lZCBqUXVlcnkuRXZlbnQgcmF0aGVyIHRoYW4gdGhlIChyZWFkLW9ubHkpIG5hdGl2ZSBldmVudFxuXG4gICAgICAgICAgYXJnc1swXSA9IGV2ZW50O1xuXG4gICAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRoaXM7IC8vIENhbGwgdGhlIHByZURpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZSwgYW5kIGxldCBpdCBiYWlsIGlmIGRlc2lyZWRcblxuICAgICAgICAgIGlmIChzcGVjaWFsLnByZURpc3BhdGNoICYmIHNwZWNpYWwucHJlRGlzcGF0Y2guY2FsbCh0aGlzLCBldmVudCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBEZXRlcm1pbmUgaGFuZGxlcnNcblxuXG4gICAgICAgICAgaGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcywgZXZlbnQsIGhhbmRsZXJzKTsgLy8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcblxuICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgd2hpbGUgKChtYXRjaGVkID0gaGFuZGxlclF1ZXVlW2krK10pICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0ID0gbWF0Y2hlZC5lbGVtO1xuICAgICAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgICAgIHdoaWxlICgoaGFuZGxlT2JqID0gbWF0Y2hlZC5oYW5kbGVyc1tqKytdKSAmJiAhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgaXMgbmFtZXNwYWNlZCwgdGhlbiBlYWNoIGhhbmRsZXIgaXMgb25seSBpbnZva2VkIGlmIGl0IGlzXG4gICAgICAgICAgICAgIC8vIHNwZWNpYWxseSB1bml2ZXJzYWwgb3IgaXRzIG5hbWVzcGFjZXMgYXJlIGEgc3VwZXJzZXQgb2YgdGhlIGV2ZW50J3MuXG4gICAgICAgICAgICAgIGlmICghZXZlbnQucm5hbWVzcGFjZSB8fCBoYW5kbGVPYmoubmFtZXNwYWNlID09PSBmYWxzZSB8fCBldmVudC5ybmFtZXNwYWNlLnRlc3QoaGFuZGxlT2JqLm5hbWVzcGFjZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5oYW5kbGVPYmogPSBoYW5kbGVPYmo7XG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YSA9IGhhbmRsZU9iai5kYXRhO1xuICAgICAgICAgICAgICAgIHJldCA9ICgoalF1ZXJ5LmV2ZW50LnNwZWNpYWxbaGFuZGxlT2JqLm9yaWdUeXBlXSB8fCB7fSkuaGFuZGxlIHx8IGhhbmRsZU9iai5oYW5kbGVyKS5hcHBseShtYXRjaGVkLmVsZW0sIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoKGV2ZW50LnJlc3VsdCA9IHJldCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gQ2FsbCB0aGUgcG9zdERpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZVxuXG5cbiAgICAgICAgICBpZiAoc3BlY2lhbC5wb3N0RGlzcGF0Y2gpIHtcbiAgICAgICAgICAgIHNwZWNpYWwucG9zdERpc3BhdGNoLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBldmVudC5yZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZXJzOiBmdW5jdGlvbiBoYW5kbGVycyhldmVudCwgX2hhbmRsZXJzKSB7XG4gICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgIGhhbmRsZU9iaixcbiAgICAgICAgICAgICAgc2VsLFxuICAgICAgICAgICAgICBtYXRjaGVkSGFuZGxlcnMsXG4gICAgICAgICAgICAgIG1hdGNoZWRTZWxlY3RvcnMsXG4gICAgICAgICAgICAgIGhhbmRsZXJRdWV1ZSA9IFtdLFxuICAgICAgICAgICAgICBkZWxlZ2F0ZUNvdW50ID0gX2hhbmRsZXJzLmRlbGVnYXRlQ291bnQsXG4gICAgICAgICAgICAgIGN1ciA9IGV2ZW50LnRhcmdldDsgLy8gRmluZCBkZWxlZ2F0ZSBoYW5kbGVyc1xuXG4gICAgICAgICAgaWYgKGRlbGVnYXRlQ291bnQgJiYgLy8gU3VwcG9ydDogSUUgPD05XG4gICAgICAgICAgLy8gQmxhY2staG9sZSBTVkcgPHVzZT4gaW5zdGFuY2UgdHJlZXMgKHRyYWMtMTMxODApXG4gICAgICAgICAgY3VyLm5vZGVUeXBlICYmIC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00MlxuICAgICAgICAgIC8vIFN1cHByZXNzIHNwZWMtdmlvbGF0aW5nIGNsaWNrcyBpbmRpY2F0aW5nIGEgbm9uLXByaW1hcnkgcG9pbnRlciBidXR0b24gKHRyYWMtMzg2MSlcbiAgICAgICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudC10eXBlLWNsaWNrXG4gICAgICAgICAgLy8gU3VwcG9ydDogSUUgMTEgb25seVxuICAgICAgICAgIC8vIC4uLmJ1dCBub3QgYXJyb3cga2V5IFwiY2xpY2tzXCIgb2YgcmFkaW8gaW5wdXRzLCB3aGljaCBjYW4gaGF2ZSBgYnV0dG9uYCAtMSAoZ2gtMjM0MylcbiAgICAgICAgICAhKGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIiAmJiBldmVudC5idXR0b24gPj0gMSkpIHtcbiAgICAgICAgICAgIGZvciAoOyBjdXIgIT09IHRoaXM7IGN1ciA9IGN1ci5wYXJlbnROb2RlIHx8IHRoaXMpIHtcbiAgICAgICAgICAgICAgLy8gRG9uJ3QgY2hlY2sgbm9uLWVsZW1lbnRzICgjMTMyMDgpXG4gICAgICAgICAgICAgIC8vIERvbid0IHByb2Nlc3MgY2xpY2tzIG9uIGRpc2FibGVkIGVsZW1lbnRzICgjNjkxMSwgIzgxNjUsICMxMTM4MiwgIzExNzY0KVxuICAgICAgICAgICAgICBpZiAoY3VyLm5vZGVUeXBlID09PSAxICYmICEoZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiICYmIGN1ci5kaXNhYmxlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBtYXRjaGVkU2VsZWN0b3JzID0ge307XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGVsZWdhdGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVPYmogPSBfaGFuZGxlcnNbaV07IC8vIERvbid0IGNvbmZsaWN0IHdpdGggT2JqZWN0LnByb3RvdHlwZSBwcm9wZXJ0aWVzICgjMTMyMDMpXG5cbiAgICAgICAgICAgICAgICAgIHNlbCA9IGhhbmRsZU9iai5zZWxlY3RvciArIFwiIFwiO1xuXG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZFNlbGVjdG9yc1tzZWxdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFNlbGVjdG9yc1tzZWxdID0gaGFuZGxlT2JqLm5lZWRzQ29udGV4dCA/IGpRdWVyeShzZWwsIHRoaXMpLmluZGV4KGN1cikgPiAtMSA6IGpRdWVyeS5maW5kKHNlbCwgdGhpcywgbnVsbCwgW2N1cl0pLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZWRTZWxlY3RvcnNbc2VsXSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkSGFuZGxlcnMucHVzaChoYW5kbGVPYmopO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkSGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVyUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW06IGN1cixcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnM6IG1hdGNoZWRIYW5kbGVyc1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBBZGQgdGhlIHJlbWFpbmluZyAoZGlyZWN0bHktYm91bmQpIGhhbmRsZXJzXG5cblxuICAgICAgICAgIGN1ciA9IHRoaXM7XG5cbiAgICAgICAgICBpZiAoZGVsZWdhdGVDb3VudCA8IF9oYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGhhbmRsZXJRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgZWxlbTogY3VyLFxuICAgICAgICAgICAgICBoYW5kbGVyczogX2hhbmRsZXJzLnNsaWNlKGRlbGVnYXRlQ291bnQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlclF1ZXVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRQcm9wOiBmdW5jdGlvbiBhZGRQcm9wKG5hbWUsIGhvb2spIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGdldDogaXNGdW5jdGlvbihob29rKSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBob29rKHRoaXMub3JpZ2luYWxFdmVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W25hbWVdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpeDogZnVuY3Rpb24gZml4KG9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gb3JpZ2luYWxFdmVudFtqUXVlcnkuZXhwYW5kb10gPyBvcmlnaW5hbEV2ZW50IDogbmV3IGpRdWVyeS5FdmVudChvcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3BlY2lhbDoge1xuICAgICAgICAgIGxvYWQ6IHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgdHJpZ2dlcmVkIGltYWdlLmxvYWQgZXZlbnRzIGZyb20gYnViYmxpbmcgdG8gd2luZG93LmxvYWRcbiAgICAgICAgICAgIG5vQnViYmxlOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgLy8gVXRpbGl6ZSBuYXRpdmUgZXZlbnQgdG8gZW5zdXJlIGNvcnJlY3Qgc3RhdGUgZm9yIGNoZWNrYWJsZSBpbnB1dHNcbiAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiBzZXR1cChkYXRhKSB7XG4gICAgICAgICAgICAgIC8vIEZvciBtdXR1YWwgY29tcHJlc3NpYmlsaXR5IHdpdGggX2RlZmF1bHQsIHJlcGxhY2UgYHRoaXNgIGFjY2VzcyB3aXRoIGEgbG9jYWwgdmFyLlxuICAgICAgICAgICAgICAvLyBgfHwgZGF0YWAgaXMgZGVhZCBjb2RlIG1lYW50IG9ubHkgdG8gcHJlc2VydmUgdGhlIHZhcmlhYmxlIHRocm91Z2ggbWluaWZpY2F0aW9uLlxuICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzIHx8IGRhdGE7IC8vIENsYWltIHRoZSBmaXJzdCBoYW5kbGVyXG5cbiAgICAgICAgICAgICAgaWYgKHJjaGVja2FibGVUeXBlLnRlc3QoZWwudHlwZSkgJiYgZWwuY2xpY2sgJiYgbm9kZU5hbWUoZWwsIFwiaW5wdXRcIikpIHtcbiAgICAgICAgICAgICAgICAvLyBkYXRhUHJpdi5zZXQoIGVsLCBcImNsaWNrXCIsIC4uLiApXG4gICAgICAgICAgICAgICAgbGV2ZXJhZ2VOYXRpdmUoZWwsIFwiY2xpY2tcIiwgcmV0dXJuVHJ1ZSk7XG4gICAgICAgICAgICAgIH0gLy8gUmV0dXJuIGZhbHNlIHRvIGFsbG93IG5vcm1hbCBwcm9jZXNzaW5nIGluIHRoZSBjYWxsZXJcblxuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiB0cmlnZ2VyKGRhdGEpIHtcbiAgICAgICAgICAgICAgLy8gRm9yIG11dHVhbCBjb21wcmVzc2liaWxpdHkgd2l0aCBfZGVmYXVsdCwgcmVwbGFjZSBgdGhpc2AgYWNjZXNzIHdpdGggYSBsb2NhbCB2YXIuXG4gICAgICAgICAgICAgIC8vIGB8fCBkYXRhYCBpcyBkZWFkIGNvZGUgbWVhbnQgb25seSB0byBwcmVzZXJ2ZSB0aGUgdmFyaWFibGUgdGhyb3VnaCBtaW5pZmljYXRpb24uXG4gICAgICAgICAgICAgIHZhciBlbCA9IHRoaXMgfHwgZGF0YTsgLy8gRm9yY2Ugc2V0dXAgYmVmb3JlIHRyaWdnZXJpbmcgYSBjbGlja1xuXG4gICAgICAgICAgICAgIGlmIChyY2hlY2thYmxlVHlwZS50ZXN0KGVsLnR5cGUpICYmIGVsLmNsaWNrICYmIG5vZGVOYW1lKGVsLCBcImlucHV0XCIpKSB7XG4gICAgICAgICAgICAgICAgbGV2ZXJhZ2VOYXRpdmUoZWwsIFwiY2xpY2tcIik7XG4gICAgICAgICAgICAgIH0gLy8gUmV0dXJuIG5vbi1mYWxzZSB0byBhbGxvdyBub3JtYWwgZXZlbnQtcGF0aCBwcm9wYWdhdGlvblxuXG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gRm9yIGNyb3NzLWJyb3dzZXIgY29uc2lzdGVuY3ksIHN1cHByZXNzIG5hdGl2ZSAuY2xpY2soKSBvbiBsaW5rc1xuICAgICAgICAgICAgLy8gQWxzbyBwcmV2ZW50IGl0IGlmIHdlJ3JlIGN1cnJlbnRseSBpbnNpZGUgYSBsZXZlcmFnZWQgbmF0aXZlLWV2ZW50IHN0YWNrXG4gICAgICAgICAgICBfZGVmYXVsdDogZnVuY3Rpb24gX2RlZmF1bHQoZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgcmV0dXJuIHJjaGVja2FibGVUeXBlLnRlc3QodGFyZ2V0LnR5cGUpICYmIHRhcmdldC5jbGljayAmJiBub2RlTmFtZSh0YXJnZXQsIFwiaW5wdXRcIikgJiYgZGF0YVByaXYuZ2V0KHRhcmdldCwgXCJjbGlja1wiKSB8fCBub2RlTmFtZSh0YXJnZXQsIFwiYVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlZm9yZXVubG9hZDoge1xuICAgICAgICAgICAgcG9zdERpc3BhdGNoOiBmdW5jdGlvbiBwb3N0RGlzcGF0Y2goZXZlbnQpIHtcbiAgICAgICAgICAgICAgLy8gU3VwcG9ydDogRmlyZWZveCAyMCtcbiAgICAgICAgICAgICAgLy8gRmlyZWZveCBkb2Vzbid0IGFsZXJ0IGlmIHRoZSByZXR1cm5WYWx1ZSBmaWVsZCBpcyBub3Qgc2V0LlxuICAgICAgICAgICAgICBpZiAoZXZlbnQucmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50Lm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBldmVudC5yZXN1bHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07IC8vIEVuc3VyZSB0aGUgcHJlc2VuY2Ugb2YgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBoYW5kbGVzIG1hbnVhbGx5LXRyaWdnZXJlZFxuICAgICAgLy8gc3ludGhldGljIGV2ZW50cyBieSBpbnRlcnJ1cHRpbmcgcHJvZ3Jlc3MgdW50aWwgcmVpbnZva2VkIGluIHJlc3BvbnNlIHRvXG4gICAgICAvLyAqbmF0aXZlKiBldmVudHMgdGhhdCBpdCBmaXJlcyBkaXJlY3RseSwgZW5zdXJpbmcgdGhhdCBzdGF0ZSBjaGFuZ2VzIGhhdmVcbiAgICAgIC8vIGFscmVhZHkgb2NjdXJyZWQgYmVmb3JlIG90aGVyIGxpc3RlbmVycyBhcmUgaW52b2tlZC5cblxuICAgICAgZnVuY3Rpb24gbGV2ZXJhZ2VOYXRpdmUoZWwsIHR5cGUsIGV4cGVjdFN5bmMpIHtcbiAgICAgICAgLy8gTWlzc2luZyBleHBlY3RTeW5jIGluZGljYXRlcyBhIHRyaWdnZXIgY2FsbCwgd2hpY2ggbXVzdCBmb3JjZSBzZXR1cCB0aHJvdWdoIGpRdWVyeS5ldmVudC5hZGRcbiAgICAgICAgaWYgKCFleHBlY3RTeW5jKSB7XG4gICAgICAgICAgaWYgKGRhdGFQcml2LmdldChlbCwgdHlwZSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LmFkZChlbCwgdHlwZSwgcmV0dXJuVHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFJlZ2lzdGVyIHRoZSBjb250cm9sbGVyIGFzIGEgc3BlY2lhbCB1bml2ZXJzYWwgaGFuZGxlciBmb3IgYWxsIGV2ZW50IG5hbWVzcGFjZXNcblxuXG4gICAgICAgIGRhdGFQcml2LnNldChlbCwgdHlwZSwgZmFsc2UpO1xuICAgICAgICBqUXVlcnkuZXZlbnQuYWRkKGVsLCB0eXBlLCB7XG4gICAgICAgICAgbmFtZXNwYWNlOiBmYWxzZSxcbiAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgbm90QXN5bmMsXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIHNhdmVkID0gZGF0YVByaXYuZ2V0KHRoaXMsIHR5cGUpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuaXNUcmlnZ2VyICYgMSAmJiB0aGlzW3R5cGVdKSB7XG4gICAgICAgICAgICAgIC8vIEludGVycnVwdCBwcm9jZXNzaW5nIG9mIHRoZSBvdXRlciBzeW50aGV0aWMgLnRyaWdnZXIoKWVkIGV2ZW50XG4gICAgICAgICAgICAgIC8vIFNhdmVkIGRhdGEgc2hvdWxkIGJlIGZhbHNlIGluIHN1Y2ggY2FzZXMsIGJ1dCBtaWdodCBiZSBhIGxlZnRvdmVyIGNhcHR1cmUgb2JqZWN0XG4gICAgICAgICAgICAgIC8vIGZyb20gYW4gYXN5bmMgbmF0aXZlIGhhbmRsZXIgKGdoLTQzNTApXG4gICAgICAgICAgICAgIGlmICghc2F2ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgYXJndW1lbnRzIGZvciB1c2Ugd2hlbiBoYW5kbGluZyB0aGUgaW5uZXIgbmF0aXZlIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgd2lsbCBhbHdheXMgYmUgYXQgbGVhc3Qgb25lIGFyZ3VtZW50IChhbiBldmVudCBvYmplY3QpLCBzbyB0aGlzIGFycmF5XG4gICAgICAgICAgICAgICAgLy8gd2lsbCBub3QgYmUgY29uZnVzZWQgd2l0aCBhIGxlZnRvdmVyIGNhcHR1cmUgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHNhdmVkID0gX3NsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBkYXRhUHJpdi5zZXQodGhpcywgdHlwZSwgc2F2ZWQpOyAvLyBUcmlnZ2VyIHRoZSBuYXRpdmUgZXZlbnQgYW5kIGNhcHR1cmUgaXRzIHJlc3VsdFxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExK1xuICAgICAgICAgICAgICAgIC8vIGZvY3VzKCkgYW5kIGJsdXIoKSBhcmUgYXN5bmNocm9ub3VzXG5cbiAgICAgICAgICAgICAgICBub3RBc3luYyA9IGV4cGVjdFN5bmModGhpcywgdHlwZSk7XG4gICAgICAgICAgICAgICAgdGhpc1t0eXBlXSgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRhdGFQcml2LmdldCh0aGlzLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgIGlmIChzYXZlZCAhPT0gcmVzdWx0IHx8IG5vdEFzeW5jKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhUHJpdi5zZXQodGhpcywgdHlwZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2F2ZWQgIT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBvdXRlciBzeW50aGV0aWMgZXZlbnRcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICAgICAgfSAvLyBJZiB0aGlzIGlzIGFuIGlubmVyIHN5bnRoZXRpYyBldmVudCBmb3IgYW4gZXZlbnQgd2l0aCBhIGJ1YmJsaW5nIHN1cnJvZ2F0ZVxuICAgICAgICAgICAgICAgIC8vIChmb2N1cyBvciBibHVyKSwgYXNzdW1lIHRoYXQgdGhlIHN1cnJvZ2F0ZSBhbHJlYWR5IHByb3BhZ2F0ZWQgZnJvbSB0cmlnZ2VyaW5nIHRoZVxuICAgICAgICAgICAgICAgIC8vIG5hdGl2ZSBldmVudCBhbmQgcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nIGFnYWluIGhlcmUuXG4gICAgICAgICAgICAgICAgLy8gVGhpcyB0ZWNobmljYWxseSBnZXRzIHRoZSBvcmRlcmluZyB3cm9uZyB3LnIudC4gdG8gYC50cmlnZ2VyKClgIChpbiB3aGljaCB0aGVcbiAgICAgICAgICAgICAgICAvLyBidWJibGluZyBzdXJyb2dhdGUgcHJvcGFnYXRlcyAqYWZ0ZXIqIHRoZSBub24tYnViYmxpbmcgYmFzZSksIGJ1dCB0aGF0IHNlZW1zXG4gICAgICAgICAgICAgICAgLy8gbGVzcyBiYWQgdGhhbiBkdXBsaWNhdGlvbi5cblxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKChqUXVlcnkuZXZlbnQuc3BlY2lhbFt0eXBlXSB8fCB7fSkuZGVsZWdhdGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIH0gLy8gSWYgdGhpcyBpcyBhIG5hdGl2ZSBldmVudCB0cmlnZ2VyZWQgYWJvdmUsIGV2ZXJ5dGhpbmcgaXMgbm93IGluIG9yZGVyXG4gICAgICAgICAgICAgIC8vIEZpcmUgYW4gaW5uZXIgc3ludGhldGljIGV2ZW50IHdpdGggdGhlIG9yaWdpbmFsIGFyZ3VtZW50c1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNhdmVkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAvLyAuLi5hbmQgY2FwdHVyZSB0aGUgcmVzdWx0XG4gICAgICAgICAgICAgIGRhdGFQcml2LnNldCh0aGlzLCB0eXBlLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGpRdWVyeS5ldmVudC50cmlnZ2VyKCAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMStcbiAgICAgICAgICAgICAgICAvLyBFeHRlbmQgd2l0aCB0aGUgcHJvdG90eXBlIHRvIHJlc2V0IHRoZSBhYm92ZSBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIGpRdWVyeS5leHRlbmQoc2F2ZWRbMF0sIGpRdWVyeS5FdmVudC5wcm90b3R5cGUpLCBzYXZlZC5zbGljZSgxKSwgdGhpcylcbiAgICAgICAgICAgICAgfSk7IC8vIEFib3J0IGhhbmRsaW5nIG9mIHRoZSBuYXRpdmUgZXZlbnRcblxuICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBqUXVlcnkucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAoZWxlbSwgdHlwZSwgaGFuZGxlKSB7XG4gICAgICAgIC8vIFRoaXMgXCJpZlwiIGlzIG5lZWRlZCBmb3IgcGxhaW4gb2JqZWN0c1xuICAgICAgICBpZiAoZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGpRdWVyeS5FdmVudCA9IGZ1bmN0aW9uIChzcmMsIHByb3BzKSB7XG4gICAgICAgIC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCB0aGUgJ25ldycga2V5d29yZFxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgalF1ZXJ5LkV2ZW50KSkge1xuICAgICAgICAgIHJldHVybiBuZXcgalF1ZXJ5LkV2ZW50KHNyYywgcHJvcHMpO1xuICAgICAgICB9IC8vIEV2ZW50IG9iamVjdFxuXG5cbiAgICAgICAgaWYgKHNyYyAmJiBzcmMudHlwZSkge1xuICAgICAgICAgIHRoaXMub3JpZ2luYWxFdmVudCA9IHNyYztcbiAgICAgICAgICB0aGlzLnR5cGUgPSBzcmMudHlwZTsgLy8gRXZlbnRzIGJ1YmJsaW5nIHVwIHRoZSBkb2N1bWVudCBtYXkgaGF2ZSBiZWVuIG1hcmtlZCBhcyBwcmV2ZW50ZWRcbiAgICAgICAgICAvLyBieSBhIGhhbmRsZXIgbG93ZXIgZG93biB0aGUgdHJlZTsgcmVmbGVjdCB0aGUgY29ycmVjdCB2YWx1ZS5cblxuICAgICAgICAgIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gc3JjLmRlZmF1bHRQcmV2ZW50ZWQgfHwgc3JjLmRlZmF1bHRQcmV2ZW50ZWQgPT09IHVuZGVmaW5lZCAmJiAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9Mi4zIG9ubHlcbiAgICAgICAgICBzcmMucmV0dXJuVmFsdWUgPT09IGZhbHNlID8gcmV0dXJuVHJ1ZSA6IHJldHVybkZhbHNlOyAvLyBDcmVhdGUgdGFyZ2V0IHByb3BlcnRpZXNcbiAgICAgICAgICAvLyBTdXBwb3J0OiBTYWZhcmkgPD02IC0gNyBvbmx5XG4gICAgICAgICAgLy8gVGFyZ2V0IHNob3VsZCBub3QgYmUgYSB0ZXh0IG5vZGUgKCM1MDQsICMxMzE0MylcblxuICAgICAgICAgIHRoaXMudGFyZ2V0ID0gc3JjLnRhcmdldCAmJiBzcmMudGFyZ2V0Lm5vZGVUeXBlID09PSAzID8gc3JjLnRhcmdldC5wYXJlbnROb2RlIDogc3JjLnRhcmdldDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXQgPSBzcmMuY3VycmVudFRhcmdldDtcbiAgICAgICAgICB0aGlzLnJlbGF0ZWRUYXJnZXQgPSBzcmMucmVsYXRlZFRhcmdldDsgLy8gRXZlbnQgdHlwZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHlwZSA9IHNyYztcbiAgICAgICAgfSAvLyBQdXQgZXhwbGljaXRseSBwcm92aWRlZCBwcm9wZXJ0aWVzIG9udG8gdGhlIGV2ZW50IG9iamVjdFxuXG5cbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgalF1ZXJ5LmV4dGVuZCh0aGlzLCBwcm9wcyk7XG4gICAgICAgIH0gLy8gQ3JlYXRlIGEgdGltZXN0YW1wIGlmIGluY29taW5nIGV2ZW50IGRvZXNuJ3QgaGF2ZSBvbmVcblxuXG4gICAgICAgIHRoaXMudGltZVN0YW1wID0gc3JjICYmIHNyYy50aW1lU3RhbXAgfHwgRGF0ZS5ub3coKTsgLy8gTWFyayBpdCBhcyBmaXhlZFxuXG4gICAgICAgIHRoaXNbalF1ZXJ5LmV4cGFuZG9dID0gdHJ1ZTtcbiAgICAgIH07IC8vIGpRdWVyeS5FdmVudCBpcyBiYXNlZCBvbiBET00zIEV2ZW50cyBhcyBzcGVjaWZpZWQgYnkgdGhlIEVDTUFTY3JpcHQgTGFuZ3VhZ2UgQmluZGluZ1xuICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDMvV0QtRE9NLUxldmVsLTMtRXZlbnRzLTIwMDMwMzMxL2VjbWEtc2NyaXB0LWJpbmRpbmcuaHRtbFxuXG5cbiAgICAgIGpRdWVyeS5FdmVudC5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBqUXVlcnkuRXZlbnQsXG4gICAgICAgIGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG4gICAgICAgIGlzUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcbiAgICAgICAgaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuICAgICAgICBpc1NpbXVsYXRlZDogZmFsc2UsXG4gICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgICB2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcbiAgICAgICAgICB0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHJldHVyblRydWU7XG5cbiAgICAgICAgICBpZiAoZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgICAgICAgdmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICAgdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cbiAgICAgICAgICBpZiAoZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuICAgICAgICAgIHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgIHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG4gICAgICAgICAgaWYgKGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQpIHtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTsgLy8gSW5jbHVkZXMgYWxsIGNvbW1vbiBldmVudCBwcm9wcyBpbmNsdWRpbmcgS2V5RXZlbnQgYW5kIE1vdXNlRXZlbnQgc3BlY2lmaWMgcHJvcHNcblxuICAgICAgalF1ZXJ5LmVhY2goe1xuICAgICAgICBhbHRLZXk6IHRydWUsXG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgIGNoYW5nZWRUb3VjaGVzOiB0cnVlLFxuICAgICAgICBjdHJsS2V5OiB0cnVlLFxuICAgICAgICBkZXRhaWw6IHRydWUsXG4gICAgICAgIGV2ZW50UGhhc2U6IHRydWUsXG4gICAgICAgIG1ldGFLZXk6IHRydWUsXG4gICAgICAgIHBhZ2VYOiB0cnVlLFxuICAgICAgICBwYWdlWTogdHJ1ZSxcbiAgICAgICAgc2hpZnRLZXk6IHRydWUsXG4gICAgICAgIHZpZXc6IHRydWUsXG4gICAgICAgIFwiY2hhclwiOiB0cnVlLFxuICAgICAgICBjb2RlOiB0cnVlLFxuICAgICAgICBjaGFyQ29kZTogdHJ1ZSxcbiAgICAgICAga2V5OiB0cnVlLFxuICAgICAgICBrZXlDb2RlOiB0cnVlLFxuICAgICAgICBidXR0b246IHRydWUsXG4gICAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGNsaWVudFg6IHRydWUsXG4gICAgICAgIGNsaWVudFk6IHRydWUsXG4gICAgICAgIG9mZnNldFg6IHRydWUsXG4gICAgICAgIG9mZnNldFk6IHRydWUsXG4gICAgICAgIHBvaW50ZXJJZDogdHJ1ZSxcbiAgICAgICAgcG9pbnRlclR5cGU6IHRydWUsXG4gICAgICAgIHNjcmVlblg6IHRydWUsXG4gICAgICAgIHNjcmVlblk6IHRydWUsXG4gICAgICAgIHRhcmdldFRvdWNoZXM6IHRydWUsXG4gICAgICAgIHRvRWxlbWVudDogdHJ1ZSxcbiAgICAgICAgdG91Y2hlczogdHJ1ZSxcbiAgICAgICAgd2hpY2g6IGZ1bmN0aW9uIHdoaWNoKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIGJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjsgLy8gQWRkIHdoaWNoIGZvciBrZXkgZXZlbnRzXG5cbiAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT0gbnVsbCAmJiBya2V5RXZlbnQudGVzdChldmVudC50eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmNoYXJDb2RlICE9IG51bGwgPyBldmVudC5jaGFyQ29kZSA6IGV2ZW50LmtleUNvZGU7XG4gICAgICAgICAgfSAvLyBBZGQgd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG5cblxuICAgICAgICAgIGlmICghZXZlbnQud2hpY2ggJiYgYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgcm1vdXNlRXZlbnQudGVzdChldmVudC50eXBlKSkge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbiAmIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChidXR0b24gJiAyKSB7XG4gICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnV0dG9uICYgNCkge1xuICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGV2ZW50LndoaWNoO1xuICAgICAgICB9XG4gICAgICB9LCBqUXVlcnkuZXZlbnQuYWRkUHJvcCk7XG4gICAgICBqUXVlcnkuZWFjaCh7XG4gICAgICAgIGZvY3VzOiBcImZvY3VzaW5cIixcbiAgICAgICAgYmx1cjogXCJmb2N1c291dFwiXG4gICAgICB9LCBmdW5jdGlvbiAodHlwZSwgZGVsZWdhdGVUeXBlKSB7XG4gICAgICAgIGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdID0ge1xuICAgICAgICAgIC8vIFV0aWxpemUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxuICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgICAgICAgIC8vIENsYWltIHRoZSBmaXJzdCBoYW5kbGVyXG4gICAgICAgICAgICAvLyBkYXRhUHJpdi5zZXQoIHRoaXMsIFwiZm9jdXNcIiwgLi4uIClcbiAgICAgICAgICAgIC8vIGRhdGFQcml2LnNldCggdGhpcywgXCJibHVyXCIsIC4uLiApXG4gICAgICAgICAgICBsZXZlcmFnZU5hdGl2ZSh0aGlzLCB0eXBlLCBleHBlY3RTeW5jKTsgLy8gUmV0dXJuIGZhbHNlIHRvIGFsbG93IG5vcm1hbCBwcm9jZXNzaW5nIGluIHRoZSBjYWxsZXJcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gdHJpZ2dlcigpIHtcbiAgICAgICAgICAgIC8vIEZvcmNlIHNldHVwIGJlZm9yZSB0cmlnZ2VyXG4gICAgICAgICAgICBsZXZlcmFnZU5hdGl2ZSh0aGlzLCB0eXBlKTsgLy8gUmV0dXJuIG5vbi1mYWxzZSB0byBhbGxvdyBub3JtYWwgZXZlbnQtcGF0aCBwcm9wYWdhdGlvblxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGVnYXRlVHlwZTogZGVsZWdhdGVUeXBlXG4gICAgICAgIH07XG4gICAgICB9KTsgLy8gQ3JlYXRlIG1vdXNlZW50ZXIvbGVhdmUgZXZlbnRzIHVzaW5nIG1vdXNlb3Zlci9vdXQgYW5kIGV2ZW50LXRpbWUgY2hlY2tzXG4gICAgICAvLyBzbyB0aGF0IGV2ZW50IGRlbGVnYXRpb24gd29ya3MgaW4galF1ZXJ5LlxuICAgICAgLy8gRG8gdGhlIHNhbWUgZm9yIHBvaW50ZXJlbnRlci9wb2ludGVybGVhdmUgYW5kIHBvaW50ZXJvdmVyL3BvaW50ZXJvdXRcbiAgICAgIC8vXG4gICAgICAvLyBTdXBwb3J0OiBTYWZhcmkgNyBvbmx5XG4gICAgICAvLyBTYWZhcmkgc2VuZHMgbW91c2VlbnRlciB0b28gb2Z0ZW47IHNlZTpcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ3MDI1OFxuICAgICAgLy8gZm9yIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYnVnIChpdCBleGlzdGVkIGluIG9sZGVyIENocm9tZSB2ZXJzaW9ucyBhcyB3ZWxsKS5cblxuICAgICAgalF1ZXJ5LmVhY2goe1xuICAgICAgICBtb3VzZWVudGVyOiBcIm1vdXNlb3ZlclwiLFxuICAgICAgICBtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCIsXG4gICAgICAgIHBvaW50ZXJlbnRlcjogXCJwb2ludGVyb3ZlclwiLFxuICAgICAgICBwb2ludGVybGVhdmU6IFwicG9pbnRlcm91dFwiXG4gICAgICB9LCBmdW5jdGlvbiAob3JpZywgZml4KSB7XG4gICAgICAgIGpRdWVyeS5ldmVudC5zcGVjaWFsW29yaWddID0ge1xuICAgICAgICAgIGRlbGVnYXRlVHlwZTogZml4LFxuICAgICAgICAgIGJpbmRUeXBlOiBmaXgsXG4gICAgICAgICAgaGFuZGxlOiBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZXQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGVPYmogPSBldmVudC5oYW5kbGVPYmo7IC8vIEZvciBtb3VzZWVudGVyL2xlYXZlIGNhbGwgdGhlIGhhbmRsZXIgaWYgcmVsYXRlZCBpcyBvdXRzaWRlIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICAvLyBOQjogTm8gcmVsYXRlZFRhcmdldCBpZiB0aGUgbW91c2UgbGVmdC9lbnRlcmVkIHRoZSBicm93c2VyIHdpbmRvd1xuXG4gICAgICAgICAgICBpZiAoIXJlbGF0ZWQgfHwgcmVsYXRlZCAhPT0gdGFyZ2V0ICYmICFqUXVlcnkuY29udGFpbnModGFyZ2V0LCByZWxhdGVkKSkge1xuICAgICAgICAgICAgICBldmVudC50eXBlID0gaGFuZGxlT2JqLm9yaWdUeXBlO1xuICAgICAgICAgICAgICByZXQgPSBoYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICBldmVudC50eXBlID0gZml4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICAgIG9uOiBmdW5jdGlvbiBvbih0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuKSB7XG4gICAgICAgICAgcmV0dXJuIF9vbih0aGlzLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25lOiBmdW5jdGlvbiBvbmUodHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbikge1xuICAgICAgICAgIHJldHVybiBfb24odGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZjogZnVuY3Rpb24gb2ZmKHR5cGVzLCBzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgICB2YXIgaGFuZGxlT2JqLCB0eXBlO1xuXG4gICAgICAgICAgaWYgKHR5cGVzICYmIHR5cGVzLnByZXZlbnREZWZhdWx0ICYmIHR5cGVzLmhhbmRsZU9iaikge1xuICAgICAgICAgICAgLy8gKCBldmVudCApICBkaXNwYXRjaGVkIGpRdWVyeS5FdmVudFxuICAgICAgICAgICAgaGFuZGxlT2JqID0gdHlwZXMuaGFuZGxlT2JqO1xuICAgICAgICAgICAgalF1ZXJ5KHR5cGVzLmRlbGVnYXRlVGFyZ2V0KS5vZmYoaGFuZGxlT2JqLm5hbWVzcGFjZSA/IGhhbmRsZU9iai5vcmlnVHlwZSArIFwiLlwiICsgaGFuZGxlT2JqLm5hbWVzcGFjZSA6IGhhbmRsZU9iai5vcmlnVHlwZSwgaGFuZGxlT2JqLnNlbGVjdG9yLCBoYW5kbGVPYmouaGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3R5cGVvZih0eXBlcykgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIC8vICggdHlwZXMtb2JqZWN0IFssIHNlbGVjdG9yXSApXG4gICAgICAgICAgICBmb3IgKHR5cGUgaW4gdHlwZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5vZmYodHlwZSwgc2VsZWN0b3IsIHR5cGVzW3R5cGVdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGVjdG9yID09PSBmYWxzZSB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gKCB0eXBlcyBbLCBmbl0gKVxuICAgICAgICAgICAgZm4gPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZuID0gcmV0dXJuRmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkuZXZlbnQucmVtb3ZlKHRoaXMsIHR5cGVzLCBmbiwgc2VsZWN0b3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy8zMjI5XG4gICAgICByeGh0bWxUYWcgPSAvPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopW14+XSopXFwvPi9naSxcblxuICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgLy8gU3VwcG9ydDogSUUgPD0xMCAtIDExLCBFZGdlIDEyIC0gMTMgb25seVxuICAgICAgLy8gSW4gSUUvRWRnZSB1c2luZyByZWdleCBncm91cHMgaGVyZSBjYXVzZXMgc2V2ZXJlIHNsb3dkb3ducy5cbiAgICAgIC8vIFNlZSBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzE3MzY1MTIvXG4gICAgICBybm9Jbm5lcmh0bWwgPSAvPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxcbiAgICAgICAgICAvLyBjaGVja2VkPVwiY2hlY2tlZFwiIG9yIGNoZWNrZWRcbiAgICAgIHJjaGVja2VkID0gL2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxcbiAgICAgICAgICByY2xlYW5TY3JpcHQgPSAvXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7IC8vIFByZWZlciBhIHRib2R5IG92ZXIgaXRzIHBhcmVudCB0YWJsZSBmb3IgY29udGFpbmluZyBuZXcgcm93c1xuXG4gICAgICBmdW5jdGlvbiBtYW5pcHVsYXRpb25UYXJnZXQoZWxlbSwgY29udGVudCkge1xuICAgICAgICBpZiAobm9kZU5hbWUoZWxlbSwgXCJ0YWJsZVwiKSAmJiBub2RlTmFtZShjb250ZW50Lm5vZGVUeXBlICE9PSAxMSA/IGNvbnRlbnQgOiBjb250ZW50LmZpcnN0Q2hpbGQsIFwidHJcIikpIHtcbiAgICAgICAgICByZXR1cm4galF1ZXJ5KGVsZW0pLmNoaWxkcmVuKFwidGJvZHlcIilbMF0gfHwgZWxlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgfSAvLyBSZXBsYWNlL3Jlc3RvcmUgdGhlIHR5cGUgYXR0cmlidXRlIG9mIHNjcmlwdCBlbGVtZW50cyBmb3Igc2FmZSBET00gbWFuaXB1bGF0aW9uXG5cblxuICAgICAgZnVuY3Rpb24gZGlzYWJsZVNjcmlwdChlbGVtKSB7XG4gICAgICAgIGVsZW0udHlwZSA9IChlbGVtLmdldEF0dHJpYnV0ZShcInR5cGVcIikgIT09IG51bGwpICsgXCIvXCIgKyBlbGVtLnR5cGU7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZXN0b3JlU2NyaXB0KGVsZW0pIHtcbiAgICAgICAgaWYgKChlbGVtLnR5cGUgfHwgXCJcIikuc2xpY2UoMCwgNSkgPT09IFwidHJ1ZS9cIikge1xuICAgICAgICAgIGVsZW0udHlwZSA9IGVsZW0udHlwZS5zbGljZSg1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2xvbmVDb3B5RXZlbnQoc3JjLCBkZXN0KSB7XG4gICAgICAgIHZhciBpLCBsLCB0eXBlLCBwZGF0YU9sZCwgcGRhdGFDdXIsIHVkYXRhT2xkLCB1ZGF0YUN1ciwgZXZlbnRzO1xuXG4gICAgICAgIGlmIChkZXN0Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIDEuIENvcHkgcHJpdmF0ZSBkYXRhOiBldmVudHMsIGhhbmRsZXJzLCBldGMuXG5cblxuICAgICAgICBpZiAoZGF0YVByaXYuaGFzRGF0YShzcmMpKSB7XG4gICAgICAgICAgcGRhdGFPbGQgPSBkYXRhUHJpdi5hY2Nlc3Moc3JjKTtcbiAgICAgICAgICBwZGF0YUN1ciA9IGRhdGFQcml2LnNldChkZXN0LCBwZGF0YU9sZCk7XG4gICAgICAgICAgZXZlbnRzID0gcGRhdGFPbGQuZXZlbnRzO1xuXG4gICAgICAgICAgaWYgKGV2ZW50cykge1xuICAgICAgICAgICAgZGVsZXRlIHBkYXRhQ3VyLmhhbmRsZTtcbiAgICAgICAgICAgIHBkYXRhQ3VyLmV2ZW50cyA9IHt9O1xuXG4gICAgICAgICAgICBmb3IgKHR5cGUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBldmVudHNbdHlwZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LmFkZChkZXN0LCB0eXBlLCBldmVudHNbdHlwZV1baV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIDIuIENvcHkgdXNlciBkYXRhXG5cblxuICAgICAgICBpZiAoZGF0YVVzZXIuaGFzRGF0YShzcmMpKSB7XG4gICAgICAgICAgdWRhdGFPbGQgPSBkYXRhVXNlci5hY2Nlc3Moc3JjKTtcbiAgICAgICAgICB1ZGF0YUN1ciA9IGpRdWVyeS5leHRlbmQoe30sIHVkYXRhT2xkKTtcbiAgICAgICAgICBkYXRhVXNlci5zZXQoZGVzdCwgdWRhdGFDdXIpO1xuICAgICAgICB9XG4gICAgICB9IC8vIEZpeCBJRSBidWdzLCBzZWUgc3VwcG9ydCB0ZXN0c1xuXG5cbiAgICAgIGZ1bmN0aW9uIGZpeElucHV0KHNyYywgZGVzdCkge1xuICAgICAgICB2YXIgbm9kZU5hbWUgPSBkZXN0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7IC8vIEZhaWxzIHRvIHBlcnNpc3QgdGhlIGNoZWNrZWQgc3RhdGUgb2YgYSBjbG9uZWQgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uLlxuXG4gICAgICAgIGlmIChub2RlTmFtZSA9PT0gXCJpbnB1dFwiICYmIHJjaGVja2FibGVUeXBlLnRlc3Qoc3JjLnR5cGUpKSB7XG4gICAgICAgICAgZGVzdC5jaGVja2VkID0gc3JjLmNoZWNrZWQ7IC8vIEZhaWxzIHRvIHJldHVybiB0aGUgc2VsZWN0ZWQgb3B0aW9uIHRvIHRoZSBkZWZhdWx0IHNlbGVjdGVkIHN0YXRlIHdoZW4gY2xvbmluZyBvcHRpb25zXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIiB8fCBub2RlTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICAgICAgZGVzdC5kZWZhdWx0VmFsdWUgPSBzcmMuZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGRvbU1hbmlwKGNvbGxlY3Rpb24sIGFyZ3MsIGNhbGxiYWNrLCBpZ25vcmVkKSB7XG4gICAgICAgIC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcbiAgICAgICAgYXJncyA9IGNvbmNhdC5hcHBseShbXSwgYXJncyk7XG4gICAgICAgIHZhciBmcmFnbWVudCxcbiAgICAgICAgICAgIGZpcnN0LFxuICAgICAgICAgICAgc2NyaXB0cyxcbiAgICAgICAgICAgIGhhc1NjcmlwdHMsXG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgZG9jLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBpTm9DbG9uZSA9IGwgLSAxLFxuICAgICAgICAgICAgdmFsdWUgPSBhcmdzWzBdLFxuICAgICAgICAgICAgdmFsdWVJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbih2YWx1ZSk7IC8vIFdlIGNhbid0IGNsb25lTm9kZSBmcmFnbWVudHMgdGhhdCBjb250YWluIGNoZWNrZWQsIGluIFdlYktpdFxuXG4gICAgICAgIGlmICh2YWx1ZUlzRnVuY3Rpb24gfHwgbCA+IDEgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFzdXBwb3J0LmNoZWNrQ2xvbmUgJiYgcmNoZWNrZWQudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSBjb2xsZWN0aW9uLmVxKGluZGV4KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlSXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICBhcmdzWzBdID0gdmFsdWUuY2FsbCh0aGlzLCBpbmRleCwgc2VsZi5odG1sKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb21NYW5pcChzZWxmLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobCkge1xuICAgICAgICAgIGZyYWdtZW50ID0gYnVpbGRGcmFnbWVudChhcmdzLCBjb2xsZWN0aW9uWzBdLm93bmVyRG9jdW1lbnQsIGZhbHNlLCBjb2xsZWN0aW9uLCBpZ25vcmVkKTtcbiAgICAgICAgICBmaXJzdCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgICBpZiAoZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZmlyc3Q7XG4gICAgICAgICAgfSAvLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcblxuXG4gICAgICAgICAgaWYgKGZpcnN0IHx8IGlnbm9yZWQpIHtcbiAgICAgICAgICAgIHNjcmlwdHMgPSBqUXVlcnkubWFwKGdldEFsbChmcmFnbWVudCwgXCJzY3JpcHRcIiksIGRpc2FibGVTY3JpcHQpO1xuICAgICAgICAgICAgaGFzU2NyaXB0cyA9IHNjcmlwdHMubGVuZ3RoOyAvLyBVc2UgdGhlIG9yaWdpbmFsIGZyYWdtZW50IGZvciB0aGUgbGFzdCBpdGVtXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBmaXJzdCBiZWNhdXNlIGl0IGNhbiBlbmQgdXBcbiAgICAgICAgICAgIC8vIGJlaW5nIGVtcHRpZWQgaW5jb3JyZWN0bHkgaW4gY2VydGFpbiBzaXR1YXRpb25zICgjODA3MCkuXG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgIG5vZGUgPSBmcmFnbWVudDtcblxuICAgICAgICAgICAgICBpZiAoaSAhPT0gaU5vQ2xvbmUpIHtcbiAgICAgICAgICAgICAgICBub2RlID0galF1ZXJ5LmNsb25lKG5vZGUsIHRydWUsIHRydWUpOyAvLyBLZWVwIHJlZmVyZW5jZXMgdG8gY2xvbmVkIHNjcmlwdHMgZm9yIGxhdGVyIHJlc3RvcmF0aW9uXG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzU2NyaXB0cykge1xuICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG4gICAgICAgICAgICAgICAgICAvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG4gICAgICAgICAgICAgICAgICBqUXVlcnkubWVyZ2Uoc2NyaXB0cywgZ2V0QWxsKG5vZGUsIFwic2NyaXB0XCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNvbGxlY3Rpb25baV0sIG5vZGUsIGkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGFzU2NyaXB0cykge1xuICAgICAgICAgICAgICBkb2MgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0ub3duZXJEb2N1bWVudDsgLy8gUmVlbmFibGUgc2NyaXB0c1xuXG4gICAgICAgICAgICAgIGpRdWVyeS5tYXAoc2NyaXB0cywgcmVzdG9yZVNjcmlwdCk7IC8vIEV2YWx1YXRlIGV4ZWN1dGFibGUgc2NyaXB0cyBvbiBmaXJzdCBkb2N1bWVudCBpbnNlcnRpb25cblxuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaGFzU2NyaXB0czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHNjcmlwdHNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAocnNjcmlwdFR5cGUudGVzdChub2RlLnR5cGUgfHwgXCJcIikgJiYgIWRhdGFQcml2LmFjY2Vzcyhub2RlLCBcImdsb2JhbEV2YWxcIikgJiYgalF1ZXJ5LmNvbnRhaW5zKGRvYywgbm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChub2RlLnNyYyAmJiAobm9kZS50eXBlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkgIT09IFwibW9kdWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWwgQUpBWCBkZXBlbmRlbmN5LCBidXQgd29uJ3QgcnVuIHNjcmlwdHMgaWYgbm90IHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5fZXZhbFVybCAmJiAhbm9kZS5ub01vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5fZXZhbFVybChub2RlLnNyYywge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2U6IG5vZGUubm9uY2UgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBET01FdmFsKG5vZGUudGV4dENvbnRlbnQucmVwbGFjZShyY2xlYW5TY3JpcHQsIFwiXCIpLCBub2RlLCBkb2MpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfcmVtb3ZlKGVsZW0sIHNlbGVjdG9yLCBrZWVwRGF0YSkge1xuICAgICAgICB2YXIgbm9kZSxcbiAgICAgICAgICAgIG5vZGVzID0gc2VsZWN0b3IgPyBqUXVlcnkuZmlsdGVyKHNlbGVjdG9yLCBlbGVtKSA6IGVsZW0sXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICBmb3IgKDsgKG5vZGUgPSBub2Rlc1tpXSkgIT0gbnVsbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFrZWVwRGF0YSAmJiBub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICBqUXVlcnkuY2xlYW5EYXRhKGdldEFsbChub2RlKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKGtlZXBEYXRhICYmIGlzQXR0YWNoZWQobm9kZSkpIHtcbiAgICAgICAgICAgICAgc2V0R2xvYmFsRXZhbChnZXRBbGwobm9kZSwgXCJzY3JpcHRcIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICB9XG5cbiAgICAgIGpRdWVyeS5leHRlbmQoe1xuICAgICAgICBodG1sUHJlZmlsdGVyOiBmdW5jdGlvbiBodG1sUHJlZmlsdGVyKGh0bWwpIHtcbiAgICAgICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKHJ4aHRtbFRhZywgXCI8JDE+PC8kMj5cIik7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZShlbGVtLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cykge1xuICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICBsLFxuICAgICAgICAgICAgICBzcmNFbGVtZW50cyxcbiAgICAgICAgICAgICAgZGVzdEVsZW1lbnRzLFxuICAgICAgICAgICAgICBjbG9uZSA9IGVsZW0uY2xvbmVOb2RlKHRydWUpLFxuICAgICAgICAgICAgICBpblBhZ2UgPSBpc0F0dGFjaGVkKGVsZW0pOyAvLyBGaXggSUUgY2xvbmluZyBpc3N1ZXNcblxuICAgICAgICAgIGlmICghc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCAmJiAoZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBlbGVtLm5vZGVUeXBlID09PSAxMSkgJiYgIWpRdWVyeS5pc1hNTERvYyhlbGVtKSkge1xuICAgICAgICAgICAgLy8gV2UgZXNjaGV3IFNpenpsZSBoZXJlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zOiBodHRwczovL2pzcGVyZi5jb20vZ2V0YWxsLXZzLXNpenpsZS8yXG4gICAgICAgICAgICBkZXN0RWxlbWVudHMgPSBnZXRBbGwoY2xvbmUpO1xuICAgICAgICAgICAgc3JjRWxlbWVudHMgPSBnZXRBbGwoZWxlbSk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgZml4SW5wdXQoc3JjRWxlbWVudHNbaV0sIGRlc3RFbGVtZW50c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBDb3B5IHRoZSBldmVudHMgZnJvbSB0aGUgb3JpZ2luYWwgdG8gdGhlIGNsb25lXG5cblxuICAgICAgICAgIGlmIChkYXRhQW5kRXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoZGVlcERhdGFBbmRFdmVudHMpIHtcbiAgICAgICAgICAgICAgc3JjRWxlbWVudHMgPSBzcmNFbGVtZW50cyB8fCBnZXRBbGwoZWxlbSk7XG4gICAgICAgICAgICAgIGRlc3RFbGVtZW50cyA9IGRlc3RFbGVtZW50cyB8fCBnZXRBbGwoY2xvbmUpO1xuXG4gICAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjbG9uZUNvcHlFdmVudChzcmNFbGVtZW50c1tpXSwgZGVzdEVsZW1lbnRzW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2xvbmVDb3B5RXZlbnQoZWxlbSwgY2xvbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXG5cbiAgICAgICAgICBkZXN0RWxlbWVudHMgPSBnZXRBbGwoY2xvbmUsIFwic2NyaXB0XCIpO1xuXG4gICAgICAgICAgaWYgKGRlc3RFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRHbG9iYWxFdmFsKGRlc3RFbGVtZW50cywgIWluUGFnZSAmJiBnZXRBbGwoZWxlbSwgXCJzY3JpcHRcIikpO1xuICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBjbG9uZWQgc2V0XG5cblxuICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYW5EYXRhOiBmdW5jdGlvbiBjbGVhbkRhdGEoZWxlbXMpIHtcbiAgICAgICAgICB2YXIgZGF0YSxcbiAgICAgICAgICAgICAgZWxlbSxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsLFxuICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgIGZvciAoOyAoZWxlbSA9IGVsZW1zW2ldKSAhPT0gdW5kZWZpbmVkOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhY2NlcHREYXRhKGVsZW0pKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhID0gZWxlbVtkYXRhUHJpdi5leHBhbmRvXSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgZm9yICh0eXBlIGluIGRhdGEuZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGVjaWFsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnJlbW92ZShlbGVtLCB0eXBlKTsgLy8gVGhpcyBpcyBhIHNob3J0Y3V0IHRvIGF2b2lkIGpRdWVyeS5ldmVudC5yZW1vdmUncyBvdmVyaGVhZFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5yZW1vdmVFdmVudChlbGVtLCB0eXBlLCBkYXRhLmhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5cblxuICAgICAgICAgICAgICAgIGVsZW1bZGF0YVByaXYuZXhwYW5kb10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZWxlbVtkYXRhVXNlci5leHBhbmRvXSkge1xuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG4gICAgICAgICAgICAgICAgZWxlbVtkYXRhVXNlci5leHBhbmRvXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgICAgZGV0YWNoOiBmdW5jdGlvbiBkZXRhY2goc2VsZWN0b3IpIHtcbiAgICAgICAgICByZXR1cm4gX3JlbW92ZSh0aGlzLCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKHNlbGVjdG9yKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZW1vdmUodGhpcywgc2VsZWN0b3IpO1xuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiBmdW5jdGlvbiB0ZXh0KHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8galF1ZXJ5LnRleHQodGhpcykgOiB0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXBwZW5kOiBmdW5jdGlvbiBhcHBlbmQoKSB7XG4gICAgICAgICAgcmV0dXJuIGRvbU1hbmlwKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IG1hbmlwdWxhdGlvblRhcmdldCh0aGlzLCBlbGVtKTtcbiAgICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVwZW5kOiBmdW5jdGlvbiBwcmVwZW5kKCkge1xuICAgICAgICAgIHJldHVybiBkb21NYW5pcCh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQodGhpcywgZWxlbSk7XG4gICAgICAgICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUoZWxlbSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBiZWZvcmU6IGZ1bmN0aW9uIGJlZm9yZSgpIHtcbiAgICAgICAgICByZXR1cm4gZG9tTWFuaXAodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW0sIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhZnRlcjogZnVuY3Rpb24gYWZ0ZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIGRvbU1hbmlwKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtLCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW1wdHk6IGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICAgIHZhciBlbGVtLFxuICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgIGZvciAoOyAoZWxlbSA9IHRoaXNbaV0pICE9IG51bGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgLy8gUHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgICAgICAgalF1ZXJ5LmNsZWFuRGF0YShnZXRBbGwoZWxlbSwgZmFsc2UpKTsgLy8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcblxuICAgICAgICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKSB7XG4gICAgICAgICAgZGF0YUFuZEV2ZW50cyA9IGRhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGZhbHNlIDogZGF0YUFuZEV2ZW50cztcbiAgICAgICAgICBkZWVwRGF0YUFuZEV2ZW50cyA9IGRlZXBEYXRhQW5kRXZlbnRzID09IG51bGwgPyBkYXRhQW5kRXZlbnRzIDogZGVlcERhdGFBbmRFdmVudHM7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnkuY2xvbmUodGhpcywgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBodG1sOiBmdW5jdGlvbiBodG1sKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtID0gdGhpc1swXSB8fCB7fSxcbiAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICBsID0gdGhpcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgfSAvLyBTZWUgaWYgd2UgY2FuIHRha2UgYSBzaG9ydGN1dCBhbmQganVzdCB1c2UgaW5uZXJIVE1MXG5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAhcm5vSW5uZXJodG1sLnRlc3QodmFsdWUpICYmICF3cmFwTWFwWyhydGFnTmFtZS5leGVjKHZhbHVlKSB8fCBbXCJcIiwgXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0galF1ZXJ5Lmh0bWxQcmVmaWx0ZXIodmFsdWUpO1xuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGVsZW0gPSB0aGlzW2ldIHx8IHt9OyAvLyBSZW1vdmUgZWxlbWVudCBub2RlcyBhbmQgcHJldmVudCBtZW1vcnkgbGVha3NcblxuICAgICAgICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmNsZWFuRGF0YShnZXRBbGwoZWxlbSwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtID0gMDsgLy8gSWYgdXNpbmcgaW5uZXJIVE1MIHRocm93cyBhbiBleGNlcHRpb24sIHVzZSB0aGUgZmFsbGJhY2sgbWV0aG9kXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMuZW1wdHkoKS5hcHBlbmQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVwbGFjZVdpdGg6IGZ1bmN0aW9uIHJlcGxhY2VXaXRoKCkge1xuICAgICAgICAgIHZhciBpZ25vcmVkID0gW107IC8vIE1ha2UgdGhlIGNoYW5nZXMsIHJlcGxhY2luZyBlYWNoIG5vbi1pZ25vcmVkIGNvbnRleHQgZWxlbWVudCB3aXRoIHRoZSBuZXcgY29udGVudFxuXG4gICAgICAgICAgcmV0dXJuIGRvbU1hbmlwKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgIGlmIChqUXVlcnkuaW5BcnJheSh0aGlzLCBpZ25vcmVkKSA8IDApIHtcbiAgICAgICAgICAgICAgalF1ZXJ5LmNsZWFuRGF0YShnZXRBbGwodGhpcykpO1xuXG4gICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVwbGFjZUNoaWxkKGVsZW0sIHRoaXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIEZvcmNlIGNhbGxiYWNrIGludm9jYXRpb25cblxuICAgICAgICAgIH0sIGlnbm9yZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeS5lYWNoKHtcbiAgICAgICAgYXBwZW5kVG86IFwiYXBwZW5kXCIsXG4gICAgICAgIHByZXBlbmRUbzogXCJwcmVwZW5kXCIsXG4gICAgICAgIGluc2VydEJlZm9yZTogXCJiZWZvcmVcIixcbiAgICAgICAgaW5zZXJ0QWZ0ZXI6IFwiYWZ0ZXJcIixcbiAgICAgICAgcmVwbGFjZUFsbDogXCJyZXBsYWNlV2l0aFwiXG4gICAgICB9LCBmdW5jdGlvbiAobmFtZSwgb3JpZ2luYWwpIHtcbiAgICAgICAgalF1ZXJ5LmZuW25hbWVdID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgdmFyIGVsZW1zLFxuICAgICAgICAgICAgICByZXQgPSBbXSxcbiAgICAgICAgICAgICAgaW5zZXJ0ID0galF1ZXJ5KHNlbGVjdG9yKSxcbiAgICAgICAgICAgICAgbGFzdCA9IGluc2VydC5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgIGZvciAoOyBpIDw9IGxhc3Q7IGkrKykge1xuICAgICAgICAgICAgZWxlbXMgPSBpID09PSBsYXN0ID8gdGhpcyA6IHRoaXMuY2xvbmUodHJ1ZSk7XG4gICAgICAgICAgICBqUXVlcnkoaW5zZXJ0W2ldKVtvcmlnaW5hbF0oZWxlbXMpOyAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcbiAgICAgICAgICAgIC8vIC5nZXQoKSBiZWNhdXNlIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblxuICAgICAgICAgICAgcHVzaC5hcHBseShyZXQsIGVsZW1zLmdldCgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2socmV0KTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHJudW1ub25weCA9IG5ldyBSZWdFeHAoXCJeKFwiICsgcG51bSArIFwiKSg/IXB4KVthLXolXSskXCIsIFwiaVwiKTtcblxuICAgICAgdmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhlbGVtKSB7XG4gICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seSwgRmlyZWZveCA8PTMwICgjMTUwOTgsICMxNDE1MClcbiAgICAgICAgLy8gSUUgdGhyb3dzIG9uIGVsZW1lbnRzIGNyZWF0ZWQgaW4gcG9wdXBzXG4gICAgICAgIC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuICAgICAgICB2YXIgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuICAgICAgICBpZiAoIXZpZXcgfHwgIXZpZXcub3BlbmVyKSB7XG4gICAgICAgICAgdmlldyA9IHdpbmRvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2aWV3LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgcmJveFN0eWxlID0gbmV3IFJlZ0V4cChjc3NFeHBhbmQuam9pbihcInxcIiksIFwiaVwiKTtcblxuICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRXhlY3V0aW5nIGJvdGggcGl4ZWxQb3NpdGlvbiAmIGJveFNpemluZ1JlbGlhYmxlIHRlc3RzIHJlcXVpcmUgb25seSBvbmUgbGF5b3V0XG4gICAgICAgIC8vIHNvIHRoZXkncmUgZXhlY3V0ZWQgYXQgdGhlIHNhbWUgdGltZSB0byBzYXZlIHRoZSBzZWNvbmQgY29tcHV0YXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGNvbXB1dGVTdHlsZVRlc3RzKCkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgYSBzaW5nbGV0b24sIHdlIG5lZWQgdG8gZXhlY3V0ZSBpdCBvbmx5IG9uY2VcbiAgICAgICAgICBpZiAoIWRpdikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7XCIgKyBcIm1hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiO1xuICAgICAgICAgIGRpdi5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpzY3JvbGw7XCIgKyBcIm1hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7XCIgKyBcIndpZHRoOjYwJTt0b3A6MSVcIjtcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgIHZhciBkaXZTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRpdik7XG4gICAgICAgICAgcGl4ZWxQb3NpdGlvblZhbCA9IGRpdlN0eWxlLnRvcCAhPT0gXCIxJVwiOyAvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5LCBGaXJlZm94IDw9MyAtIDQ0XG5cbiAgICAgICAgICByZWxpYWJsZU1hcmdpbkxlZnRWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoZGl2U3R5bGUubWFyZ2luTGVmdCkgPT09IDEyOyAvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5LCBTYWZhcmkgPD05LjEgLSAxMC4xLCBpT1MgPD03LjAgLSA5LjNcbiAgICAgICAgICAvLyBTb21lIHN0eWxlcyBjb21lIGJhY2sgd2l0aCBwZXJjZW50YWdlIHZhbHVlcywgZXZlbiB0aG91Z2ggdGhleSBzaG91bGRuJ3RcblxuICAgICAgICAgIGRpdi5zdHlsZS5yaWdodCA9IFwiNjAlXCI7XG4gICAgICAgICAgcGl4ZWxCb3hTdHlsZXNWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoZGl2U3R5bGUucmlnaHQpID09PSAzNjsgLy8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcbiAgICAgICAgICAvLyBEZXRlY3QgbWlzcmVwb3J0aW5nIG9mIGNvbnRlbnQgZGltZW5zaW9ucyBmb3IgYm94LXNpemluZzpib3JkZXItYm94IGVsZW1lbnRzXG5cbiAgICAgICAgICBib3hTaXppbmdSZWxpYWJsZVZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyhkaXZTdHlsZS53aWR0aCkgPT09IDM2OyAvLyBTdXBwb3J0OiBJRSA5IG9ubHlcbiAgICAgICAgICAvLyBEZXRlY3Qgb3ZlcmZsb3c6c2Nyb2xsIHNjcmV3aW5lc3MgKGdoLTM2OTkpXG4gICAgICAgICAgLy8gU3VwcG9ydDogQ2hyb21lIDw9NjRcbiAgICAgICAgICAvLyBEb24ndCBnZXQgdHJpY2tlZCB3aGVuIHpvb20gYWZmZWN0cyBvZmZzZXRXaWR0aCAoZ2gtNDAyOSlcblxuICAgICAgICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICBzY3JvbGxib3hTaXplVmFsID0gcm91bmRQaXhlbE1lYXN1cmVzKGRpdi5vZmZzZXRXaWR0aCAvIDMpID09PSAxMjtcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTsgLy8gTnVsbGlmeSB0aGUgZGl2IHNvIGl0IHdvdWxkbid0IGJlIHN0b3JlZCBpbiB0aGUgbWVtb3J5IGFuZFxuICAgICAgICAgIC8vIGl0IHdpbGwgYWxzbyBiZSBhIHNpZ24gdGhhdCBjaGVja3MgYWxyZWFkeSBwZXJmb3JtZWRcblxuICAgICAgICAgIGRpdiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByb3VuZFBpeGVsTWVhc3VyZXMobWVhc3VyZSkge1xuICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWVhc3VyZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBpeGVsUG9zaXRpb25WYWwsXG4gICAgICAgICAgICBib3hTaXppbmdSZWxpYWJsZVZhbCxcbiAgICAgICAgICAgIHNjcm9sbGJveFNpemVWYWwsXG4gICAgICAgICAgICBwaXhlbEJveFN0eWxlc1ZhbCxcbiAgICAgICAgICAgIHJlbGlhYmxlTWFyZ2luTGVmdFZhbCxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBGaW5pc2ggZWFybHkgaW4gbGltaXRlZCAobm9uLWJyb3dzZXIpIGVudmlyb25tZW50c1xuXG4gICAgICAgIGlmICghZGl2LnN0eWxlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcbiAgICAgICAgLy8gU3R5bGUgb2YgY2xvbmVkIGVsZW1lbnQgYWZmZWN0cyBzb3VyY2UgZWxlbWVudCBjbG9uZWQgKCM4OTA4KVxuXG5cbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJjb250ZW50LWJveFwiO1xuICAgICAgICBkaXYuY2xvbmVOb2RlKHRydWUpLnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJcIjtcbiAgICAgICAgc3VwcG9ydC5jbGVhckNsb25lU3R5bGUgPSBkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPT09IFwiY29udGVudC1ib3hcIjtcbiAgICAgICAgalF1ZXJ5LmV4dGVuZChzdXBwb3J0LCB7XG4gICAgICAgICAgYm94U2l6aW5nUmVsaWFibGU6IGZ1bmN0aW9uIGJveFNpemluZ1JlbGlhYmxlKCkge1xuICAgICAgICAgICAgY29tcHV0ZVN0eWxlVGVzdHMoKTtcbiAgICAgICAgICAgIHJldHVybiBib3hTaXppbmdSZWxpYWJsZVZhbDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBpeGVsQm94U3R5bGVzOiBmdW5jdGlvbiBwaXhlbEJveFN0eWxlcygpIHtcbiAgICAgICAgICAgIGNvbXB1dGVTdHlsZVRlc3RzKCk7XG4gICAgICAgICAgICByZXR1cm4gcGl4ZWxCb3hTdHlsZXNWYWw7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwaXhlbFBvc2l0aW9uOiBmdW5jdGlvbiBwaXhlbFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgY29tcHV0ZVN0eWxlVGVzdHMoKTtcbiAgICAgICAgICAgIHJldHVybiBwaXhlbFBvc2l0aW9uVmFsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVsaWFibGVNYXJnaW5MZWZ0OiBmdW5jdGlvbiByZWxpYWJsZU1hcmdpbkxlZnQoKSB7XG4gICAgICAgICAgICBjb21wdXRlU3R5bGVUZXN0cygpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbGlhYmxlTWFyZ2luTGVmdFZhbDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcm9sbGJveFNpemU6IGZ1bmN0aW9uIHNjcm9sbGJveFNpemUoKSB7XG4gICAgICAgICAgICBjb21wdXRlU3R5bGVUZXN0cygpO1xuICAgICAgICAgICAgcmV0dXJuIHNjcm9sbGJveFNpemVWYWw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG5cbiAgICAgIGZ1bmN0aW9uIGN1ckNTUyhlbGVtLCBuYW1lLCBjb21wdXRlZCkge1xuICAgICAgICB2YXIgd2lkdGgsXG4gICAgICAgICAgICBtaW5XaWR0aCxcbiAgICAgICAgICAgIG1heFdpZHRoLFxuICAgICAgICAgICAgcmV0LFxuICAgICAgICAgICAgLy8gU3VwcG9ydDogRmlyZWZveCA1MStcbiAgICAgICAgLy8gUmV0cmlldmluZyBzdHlsZSBiZWZvcmUgY29tcHV0ZWQgc29tZWhvd1xuICAgICAgICAvLyBmaXhlcyBhbiBpc3N1ZSB3aXRoIGdldHRpbmcgd3JvbmcgdmFsdWVzXG4gICAgICAgIC8vIG9uIGRldGFjaGVkIGVsZW1lbnRzXG4gICAgICAgIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgICAgICAgY29tcHV0ZWQgPSBjb21wdXRlZCB8fCBnZXRTdHlsZXMoZWxlbSk7IC8vIGdldFByb3BlcnR5VmFsdWUgaXMgbmVlZGVkIGZvcjpcbiAgICAgICAgLy8gICAuY3NzKCdmaWx0ZXInKSAoSUUgOSBvbmx5LCAjMTI1MzcpXG4gICAgICAgIC8vICAgLmNzcygnLS1jdXN0b21Qcm9wZXJ0eSkgKCMzMTQ0KVxuXG4gICAgICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICAgIHJldCA9IGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUobmFtZSkgfHwgY29tcHV0ZWRbbmFtZV07XG5cbiAgICAgICAgICBpZiAocmV0ID09PSBcIlwiICYmICFpc0F0dGFjaGVkKGVsZW0pKSB7XG4gICAgICAgICAgICByZXQgPSBqUXVlcnkuc3R5bGUoZWxlbSwgbmFtZSk7XG4gICAgICAgICAgfSAvLyBBIHRyaWJ1dGUgdG8gdGhlIFwiYXdlc29tZSBoYWNrIGJ5IERlYW4gRWR3YXJkc1wiXG4gICAgICAgICAgLy8gQW5kcm9pZCBCcm93c2VyIHJldHVybnMgcGVyY2VudGFnZSBmb3Igc29tZSB2YWx1ZXMsXG4gICAgICAgICAgLy8gYnV0IHdpZHRoIHNlZW1zIHRvIGJlIHJlbGlhYmx5IHBpeGVscy5cbiAgICAgICAgICAvLyBUaGlzIGlzIGFnYWluc3QgdGhlIENTU09NIGRyYWZ0IHNwZWM6XG4gICAgICAgICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNyZXNvbHZlZC12YWx1ZXNcblxuXG4gICAgICAgICAgaWYgKCFzdXBwb3J0LnBpeGVsQm94U3R5bGVzKCkgJiYgcm51bW5vbnB4LnRlc3QocmV0KSAmJiByYm94U3R5bGUudGVzdChuYW1lKSkge1xuICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgICAgICAgICAgd2lkdGggPSBzdHlsZS53aWR0aDtcbiAgICAgICAgICAgIG1pbldpZHRoID0gc3R5bGUubWluV2lkdGg7XG4gICAgICAgICAgICBtYXhXaWR0aCA9IHN0eWxlLm1heFdpZHRoOyAvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG5cbiAgICAgICAgICAgIHN0eWxlLm1pbldpZHRoID0gc3R5bGUubWF4V2lkdGggPSBzdHlsZS53aWR0aCA9IHJldDtcbiAgICAgICAgICAgIHJldCA9IGNvbXB1dGVkLndpZHRoOyAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG5cbiAgICAgICAgICAgIHN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBzdHlsZS5taW5XaWR0aCA9IG1pbldpZHRoO1xuICAgICAgICAgICAgc3R5bGUubWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0ICE9PSB1bmRlZmluZWQgPyAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG4gICAgICAgIC8vIElFIHJldHVybnMgekluZGV4IHZhbHVlIGFzIGFuIGludGVnZXIuXG4gICAgICAgIHJldCArIFwiXCIgOiByZXQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZEdldEhvb2tJZihjb25kaXRpb25GbiwgaG9va0ZuKSB7XG4gICAgICAgIC8vIERlZmluZSB0aGUgaG9vaywgd2UnbGwgY2hlY2sgb24gdGhlIGZpcnN0IHJ1biBpZiBpdCdzIHJlYWxseSBuZWVkZWQuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uRm4oKSkge1xuICAgICAgICAgICAgICAvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcbiAgICAgICAgICAgICAgLy8gdG8gbWlzc2luZyBkZXBlbmRlbmN5KSwgcmVtb3ZlIGl0LlxuICAgICAgICAgICAgICBkZWxldGUgdGhpcy5nZXQ7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gLy8gSG9vayBuZWVkZWQ7IHJlZGVmaW5lIGl0IHNvIHRoYXQgdGhlIHN1cHBvcnQgdGVzdCBpcyBub3QgZXhlY3V0ZWQgYWdhaW4uXG5cblxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmdldCA9IGhvb2tGbikuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciBjc3NQcmVmaXhlcyA9IFtcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCJdLFxuICAgICAgICAgIGVtcHR5U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFxuICAgICAgICAgIHZlbmRvclByb3BzID0ge307IC8vIFJldHVybiBhIHZlbmRvci1wcmVmaXhlZCBwcm9wZXJ0eSBvciB1bmRlZmluZWRcblxuICAgICAgZnVuY3Rpb24gdmVuZG9yUHJvcE5hbWUobmFtZSkge1xuICAgICAgICAvLyBDaGVjayBmb3IgdmVuZG9yIHByZWZpeGVkIG5hbWVzXG4gICAgICAgIHZhciBjYXBOYW1lID0gbmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSxcbiAgICAgICAgICAgIGkgPSBjc3NQcmVmaXhlcy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIG5hbWUgPSBjc3NQcmVmaXhlc1tpXSArIGNhcE5hbWU7XG5cbiAgICAgICAgICBpZiAobmFtZSBpbiBlbXB0eVN0eWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUmV0dXJuIGEgcG90ZW50aWFsbHktbWFwcGVkIGpRdWVyeS5jc3NQcm9wcyBvciB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHlcblxuXG4gICAgICBmdW5jdGlvbiBmaW5hbFByb3BOYW1lKG5hbWUpIHtcbiAgICAgICAgdmFyIF9maW5hbCA9IGpRdWVyeS5jc3NQcm9wc1tuYW1lXSB8fCB2ZW5kb3JQcm9wc1tuYW1lXTtcblxuICAgICAgICBpZiAoX2ZpbmFsKSB7XG4gICAgICAgICAgcmV0dXJuIF9maW5hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lIGluIGVtcHR5U3R5bGUpIHtcbiAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZW5kb3JQcm9wc1tuYW1lXSA9IHZlbmRvclByb3BOYW1lKG5hbWUpIHx8IG5hbWU7XG4gICAgICB9XG5cbiAgICAgIHZhciAvLyBTd2FwcGFibGUgaWYgZGlzcGxheSBpcyBub25lIG9yIHN0YXJ0cyB3aXRoIHRhYmxlXG4gICAgICAvLyBleGNlcHQgXCJ0YWJsZVwiLCBcInRhYmxlLWNlbGxcIiwgb3IgXCJ0YWJsZS1jYXB0aW9uXCJcbiAgICAgIC8vIFNlZSBoZXJlIGZvciBkaXNwbGF5IHZhbHVlczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9DU1MvZGlzcGxheVxuICAgICAgcmRpc3BsYXlzd2FwID0gL14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFxuICAgICAgICAgIHJjdXN0b21Qcm9wID0gL14tLS8sXG4gICAgICAgICAgY3NzU2hvdyA9IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgICB9LFxuICAgICAgICAgIGNzc05vcm1hbFRyYW5zZm9ybSA9IHtcbiAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCJcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIHNldFBvc2l0aXZlTnVtYmVyKGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCkge1xuICAgICAgICAvLyBBbnkgcmVsYXRpdmUgKCsvLSkgdmFsdWVzIGhhdmUgYWxyZWFkeSBiZWVuXG4gICAgICAgIC8vIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludFxuICAgICAgICB2YXIgbWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBtYXRjaGVzID8gLy8gR3VhcmQgYWdhaW5zdCB1bmRlZmluZWQgXCJzdWJ0cmFjdFwiLCBlLmcuLCB3aGVuIHVzZWQgYXMgaW4gY3NzSG9va3NcbiAgICAgICAgTWF0aC5tYXgoMCwgbWF0Y2hlc1syXSAtIChzdWJ0cmFjdCB8fCAwKSkgKyAobWF0Y2hlc1szXSB8fCBcInB4XCIpIDogdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGJveE1vZGVsQWRqdXN0bWVudChlbGVtLCBkaW1lbnNpb24sIGJveCwgaXNCb3JkZXJCb3gsIHN0eWxlcywgY29tcHV0ZWRWYWwpIHtcbiAgICAgICAgdmFyIGkgPSBkaW1lbnNpb24gPT09IFwid2lkdGhcIiA/IDEgOiAwLFxuICAgICAgICAgICAgZXh0cmEgPSAwLFxuICAgICAgICAgICAgZGVsdGEgPSAwOyAvLyBBZGp1c3RtZW50IG1heSBub3QgYmUgbmVjZXNzYXJ5XG5cbiAgICAgICAgaWYgKGJveCA9PT0gKGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiKSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCA0OyBpICs9IDIpIHtcbiAgICAgICAgICAvLyBCb3RoIGJveCBtb2RlbHMgZXhjbHVkZSBtYXJnaW5cbiAgICAgICAgICBpZiAoYm94ID09PSBcIm1hcmdpblwiKSB7XG4gICAgICAgICAgICBkZWx0YSArPSBqUXVlcnkuY3NzKGVsZW0sIGJveCArIGNzc0V4cGFuZFtpXSwgdHJ1ZSwgc3R5bGVzKTtcbiAgICAgICAgICB9IC8vIElmIHdlIGdldCBoZXJlIHdpdGggYSBjb250ZW50LWJveCwgd2UncmUgc2Vla2luZyBcInBhZGRpbmdcIiBvciBcImJvcmRlclwiIG9yIFwibWFyZ2luXCJcblxuXG4gICAgICAgICAgaWYgKCFpc0JvcmRlckJveCkge1xuICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcbiAgICAgICAgICAgIGRlbHRhICs9IGpRdWVyeS5jc3MoZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbaV0sIHRydWUsIHN0eWxlcyk7IC8vIEZvciBcImJvcmRlclwiIG9yIFwibWFyZ2luXCIsIGFkZCBib3JkZXJcblxuICAgICAgICAgICAgaWYgKGJveCAhPT0gXCJwYWRkaW5nXCIpIHtcbiAgICAgICAgICAgICAgZGVsdGEgKz0galF1ZXJ5LmNzcyhlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kW2ldICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMpOyAvLyBCdXQgc3RpbGwga2VlcCB0cmFjayBvZiBpdCBvdGhlcndpc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dHJhICs9IGpRdWVyeS5jc3MoZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFtpXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzKTtcbiAgICAgICAgICAgIH0gLy8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGJvcmRlci1ib3ggKGNvbnRlbnQgKyBwYWRkaW5nICsgYm9yZGVyKSwgd2UncmUgc2Vla2luZyBcImNvbnRlbnRcIiBvclxuICAgICAgICAgICAgLy8gXCJwYWRkaW5nXCIgb3IgXCJtYXJnaW5cIlxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZvciBcImNvbnRlbnRcIiwgc3VidHJhY3QgcGFkZGluZ1xuICAgICAgICAgICAgaWYgKGJveCA9PT0gXCJjb250ZW50XCIpIHtcbiAgICAgICAgICAgICAgZGVsdGEgLT0galF1ZXJ5LmNzcyhlbGVtLCBcInBhZGRpbmdcIiArIGNzc0V4cGFuZFtpXSwgdHJ1ZSwgc3R5bGVzKTtcbiAgICAgICAgICAgIH0gLy8gRm9yIFwiY29udGVudFwiIG9yIFwicGFkZGluZ1wiLCBzdWJ0cmFjdCBib3JkZXJcblxuXG4gICAgICAgICAgICBpZiAoYm94ICE9PSBcIm1hcmdpblwiKSB7XG4gICAgICAgICAgICAgIGRlbHRhIC09IGpRdWVyeS5jc3MoZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFtpXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gQWNjb3VudCBmb3IgcG9zaXRpdmUgY29udGVudC1ib3ggc2Nyb2xsIGd1dHRlciB3aGVuIHJlcXVlc3RlZCBieSBwcm92aWRpbmcgY29tcHV0ZWRWYWxcblxuXG4gICAgICAgIGlmICghaXNCb3JkZXJCb3ggJiYgY29tcHV0ZWRWYWwgPj0gMCkge1xuICAgICAgICAgIC8vIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBpcyBhIHJvdW5kZWQgc3VtIG9mIGNvbnRlbnQsIHBhZGRpbmcsIHNjcm9sbCBndXR0ZXIsIGFuZCBib3JkZXJcbiAgICAgICAgICAvLyBBc3N1bWluZyBpbnRlZ2VyIHNjcm9sbCBndXR0ZXIsIHN1YnRyYWN0IHRoZSByZXN0IGFuZCByb3VuZCBkb3duXG4gICAgICAgICAgZGVsdGEgKz0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKGVsZW1bXCJvZmZzZXRcIiArIGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXSAtIGNvbXB1dGVkVmFsIC0gZGVsdGEgLSBleHRyYSAtIDAuNSAvLyBJZiBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgaXMgdW5rbm93biwgdGhlbiB3ZSBjYW4ndCBkZXRlcm1pbmUgY29udGVudC1ib3ggc2Nyb2xsIGd1dHRlclxuICAgICAgICAgIC8vIFVzZSBhbiBleHBsaWNpdCB6ZXJvIHRvIGF2b2lkIE5hTiAoZ2gtMzk2NClcbiAgICAgICAgICApKSB8fCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlbHRhO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRXaWR0aE9ySGVpZ2h0KGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEpIHtcbiAgICAgICAgLy8gU3RhcnQgd2l0aCBjb21wdXRlZCBzdHlsZVxuICAgICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKGVsZW0pLFxuICAgICAgICAgICAgLy8gVG8gYXZvaWQgZm9yY2luZyBhIHJlZmxvdywgb25seSBmZXRjaCBib3hTaXppbmcgaWYgd2UgbmVlZCBpdCAoZ2gtNDMyMikuXG4gICAgICAgIC8vIEZha2UgY29udGVudC1ib3ggdW50aWwgd2Uga25vdyBpdCdzIG5lZWRlZCB0byBrbm93IHRoZSB0cnVlIHZhbHVlLlxuICAgICAgICBib3hTaXppbmdOZWVkZWQgPSAhc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpIHx8IGV4dHJhLFxuICAgICAgICAgICAgaXNCb3JkZXJCb3ggPSBib3hTaXppbmdOZWVkZWQgJiYgalF1ZXJ5LmNzcyhlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzKSA9PT0gXCJib3JkZXItYm94XCIsXG4gICAgICAgICAgICB2YWx1ZUlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3gsXG4gICAgICAgICAgICB2YWwgPSBjdXJDU1MoZWxlbSwgZGltZW5zaW9uLCBzdHlsZXMpLFxuICAgICAgICAgICAgb2Zmc2V0UHJvcCA9IFwib2Zmc2V0XCIgKyBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKTsgLy8gU3VwcG9ydDogRmlyZWZveCA8PTU0XG4gICAgICAgIC8vIFJldHVybiBhIGNvbmZvdW5kaW5nIG5vbi1waXhlbCB2YWx1ZSBvciBmZWlnbiBpZ25vcmFuY2UsIGFzIGFwcHJvcHJpYXRlLlxuXG4gICAgICAgIGlmIChybnVtbm9ucHgudGVzdCh2YWwpKSB7XG4gICAgICAgICAgaWYgKCFleHRyYSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YWwgPSBcImF1dG9cIjtcbiAgICAgICAgfSAvLyBGYWxsIGJhY2sgdG8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IHdoZW4gdmFsdWUgaXMgXCJhdXRvXCJcbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zIGZvciBpbmxpbmUgZWxlbWVudHMgd2l0aCBubyBleHBsaWNpdCBzZXR0aW5nIChnaC0zNTcxKVxuICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4xIC0gNC4zIG9ubHlcbiAgICAgICAgLy8gQWxzbyB1c2Ugb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGZvciBtaXNyZXBvcnRlZCBpbmxpbmUgZGltZW5zaW9ucyAoZ2gtMzYwMilcbiAgICAgICAgLy8gU3VwcG9ydDogSUUgOS0xMSBvbmx5XG4gICAgICAgIC8vIEFsc28gdXNlIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBmb3Igd2hlbiBib3ggc2l6aW5nIGlzIHVucmVsaWFibGVcbiAgICAgICAgLy8gV2UgdXNlIGdldENsaWVudFJlY3RzKCkgdG8gY2hlY2sgZm9yIGhpZGRlbi9kaXNjb25uZWN0ZWQuXG4gICAgICAgIC8vIEluIHRob3NlIGNhc2VzLCB0aGUgY29tcHV0ZWQgdmFsdWUgY2FuIGJlIHRydXN0ZWQgdG8gYmUgYm9yZGVyLWJveFxuXG5cbiAgICAgICAgaWYgKCghc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpICYmIGlzQm9yZGVyQm94IHx8IHZhbCA9PT0gXCJhdXRvXCIgfHwgIXBhcnNlRmxvYXQodmFsKSAmJiBqUXVlcnkuY3NzKGVsZW0sIFwiZGlzcGxheVwiLCBmYWxzZSwgc3R5bGVzKSA9PT0gXCJpbmxpbmVcIikgJiYgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xuICAgICAgICAgIGlzQm9yZGVyQm94ID0galF1ZXJ5LmNzcyhlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzKSA9PT0gXCJib3JkZXItYm94XCI7IC8vIFdoZXJlIGF2YWlsYWJsZSwgb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGFwcHJveGltYXRlIGJvcmRlciBib3ggZGltZW5zaW9ucy5cbiAgICAgICAgICAvLyBXaGVyZSBub3QgYXZhaWxhYmxlIChlLmcuLCBTVkcpLCBhc3N1bWUgdW5yZWxpYWJsZSBib3gtc2l6aW5nIGFuZCBpbnRlcnByZXQgdGhlXG4gICAgICAgICAgLy8gcmV0cmlldmVkIHZhbHVlIGFzIGEgY29udGVudCBib3ggZGltZW5zaW9uLlxuXG4gICAgICAgICAgdmFsdWVJc0JvcmRlckJveCA9IG9mZnNldFByb3AgaW4gZWxlbTtcblxuICAgICAgICAgIGlmICh2YWx1ZUlzQm9yZGVyQm94KSB7XG4gICAgICAgICAgICB2YWwgPSBlbGVtW29mZnNldFByb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBOb3JtYWxpemUgXCJcIiBhbmQgYXV0b1xuXG5cbiAgICAgICAgdmFsID0gcGFyc2VGbG9hdCh2YWwpIHx8IDA7IC8vIEFkanVzdCBmb3IgdGhlIGVsZW1lbnQncyBib3ggbW9kZWxcblxuICAgICAgICByZXR1cm4gdmFsICsgYm94TW9kZWxBZGp1c3RtZW50KGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEgfHwgKGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiKSwgdmFsdWVJc0JvcmRlckJveCwgc3R5bGVzLCAvLyBQcm92aWRlIHRoZSBjdXJyZW50IGNvbXB1dGVkIHNpemUgdG8gcmVxdWVzdCBzY3JvbGwgZ3V0dGVyIGNhbGN1bGF0aW9uIChnaC0zNTg5KVxuICAgICAgICB2YWwpICsgXCJweFwiO1xuICAgICAgfVxuXG4gICAgICBqUXVlcnkuZXh0ZW5kKHtcbiAgICAgICAgLy8gQWRkIGluIHN0eWxlIHByb3BlcnR5IGhvb2tzIGZvciBvdmVycmlkaW5nIHRoZSBkZWZhdWx0XG4gICAgICAgIC8vIGJlaGF2aW9yIG9mIGdldHRpbmcgYW5kIHNldHRpbmcgYSBzdHlsZSBwcm9wZXJ0eVxuICAgICAgICBjc3NIb29rczoge1xuICAgICAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGVsZW0sIGNvbXB1dGVkKSB7XG4gICAgICAgICAgICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBhbHdheXMgZ2V0IGEgbnVtYmVyIGJhY2sgZnJvbSBvcGFjaXR5XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IGN1ckNTUyhlbGVtLCBcIm9wYWNpdHlcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldCA9PT0gXCJcIiA/IFwiMVwiIDogcmV0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBEb24ndCBhdXRvbWF0aWNhbGx5IGFkZCBcInB4XCIgdG8gdGhlc2UgcG9zc2libHktdW5pdGxlc3MgcHJvcGVydGllc1xuICAgICAgICBjc3NOdW1iZXI6IHtcbiAgICAgICAgICBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHRydWUsXG4gICAgICAgICAgXCJjb2x1bW5Db3VudFwiOiB0cnVlLFxuICAgICAgICAgIFwiZmlsbE9wYWNpdHlcIjogdHJ1ZSxcbiAgICAgICAgICBcImZsZXhHcm93XCI6IHRydWUsXG4gICAgICAgICAgXCJmbGV4U2hyaW5rXCI6IHRydWUsXG4gICAgICAgICAgXCJmb250V2VpZ2h0XCI6IHRydWUsXG4gICAgICAgICAgXCJncmlkQXJlYVwiOiB0cnVlLFxuICAgICAgICAgIFwiZ3JpZENvbHVtblwiOiB0cnVlLFxuICAgICAgICAgIFwiZ3JpZENvbHVtbkVuZFwiOiB0cnVlLFxuICAgICAgICAgIFwiZ3JpZENvbHVtblN0YXJ0XCI6IHRydWUsXG4gICAgICAgICAgXCJncmlkUm93XCI6IHRydWUsXG4gICAgICAgICAgXCJncmlkUm93RW5kXCI6IHRydWUsXG4gICAgICAgICAgXCJncmlkUm93U3RhcnRcIjogdHJ1ZSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjogdHJ1ZSxcbiAgICAgICAgICBcIm9wYWNpdHlcIjogdHJ1ZSxcbiAgICAgICAgICBcIm9yZGVyXCI6IHRydWUsXG4gICAgICAgICAgXCJvcnBoYW5zXCI6IHRydWUsXG4gICAgICAgICAgXCJ3aWRvd3NcIjogdHJ1ZSxcbiAgICAgICAgICBcInpJbmRleFwiOiB0cnVlLFxuICAgICAgICAgIFwiem9vbVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIEFkZCBpbiBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIHlvdSB3aXNoIHRvIGZpeCBiZWZvcmVcbiAgICAgICAgLy8gc2V0dGluZyBvciBnZXR0aW5nIHRoZSB2YWx1ZVxuICAgICAgICBjc3NQcm9wczoge30sXG4gICAgICAgIC8vIEdldCBhbmQgc2V0IHRoZSBzdHlsZSBwcm9wZXJ0eSBvbiBhIERPTSBOb2RlXG4gICAgICAgIHN0eWxlOiBmdW5jdGlvbiBzdHlsZShlbGVtLCBuYW1lLCB2YWx1ZSwgZXh0cmEpIHtcbiAgICAgICAgICAvLyBEb24ndCBzZXQgc3R5bGVzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcbiAgICAgICAgICBpZiAoIWVsZW0gfHwgZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4IHx8ICFlbGVtLnN0eWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWVcblxuXG4gICAgICAgICAgdmFyIHJldCxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgaG9va3MsXG4gICAgICAgICAgICAgIG9yaWdOYW1lID0gY2FtZWxDYXNlKG5hbWUpLFxuICAgICAgICAgICAgICBpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KG5hbWUpLFxuICAgICAgICAgICAgICBzdHlsZSA9IGVsZW0uc3R5bGU7IC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZS4gV2UgZG9uJ3RcbiAgICAgICAgICAvLyB3YW50IHRvIHF1ZXJ5IHRoZSB2YWx1ZSBpZiBpdCBpcyBhIENTUyBjdXN0b20gcHJvcGVydHlcbiAgICAgICAgICAvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG5cbiAgICAgICAgICBpZiAoIWlzQ3VzdG9tUHJvcCkge1xuICAgICAgICAgICAgbmFtZSA9IGZpbmFsUHJvcE5hbWUob3JpZ05hbWUpO1xuICAgICAgICAgIH0gLy8gR2V0cyBob29rIGZvciB0aGUgcHJlZml4ZWQgdmVyc2lvbiwgdGhlbiB1bnByZWZpeGVkIHZlcnNpb25cblxuXG4gICAgICAgICAgaG9va3MgPSBqUXVlcnkuY3NzSG9va3NbbmFtZV0gfHwgalF1ZXJ5LmNzc0hvb2tzW29yaWdOYW1lXTsgLy8gQ2hlY2sgaWYgd2UncmUgc2V0dGluZyBhIHZhbHVlXG5cbiAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHlwZSA9IF90eXBlb2YodmFsdWUpOyAvLyBDb252ZXJ0IFwiKz1cIiBvciBcIi09XCIgdG8gcmVsYXRpdmUgbnVtYmVycyAoIzczNDUpXG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcInN0cmluZ1wiICYmIChyZXQgPSByY3NzTnVtLmV4ZWModmFsdWUpKSAmJiByZXRbMV0pIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBhZGp1c3RDU1MoZWxlbSwgbmFtZSwgcmV0KTsgLy8gRml4ZXMgYnVnICM5MjM3XG5cbiAgICAgICAgICAgICAgdHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgICAgICB9IC8vIE1ha2Ugc3VyZSB0aGF0IG51bGwgYW5kIE5hTiB2YWx1ZXMgYXJlbid0IHNldCAoIzcxMTYpXG5cblxuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gLy8gSWYgYSBudW1iZXIgd2FzIHBhc3NlZCBpbiwgYWRkIHRoZSB1bml0IChleGNlcHQgZm9yIGNlcnRhaW4gQ1NTIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAvLyBUaGUgaXNDdXN0b21Qcm9wIGNoZWNrIGNhbiBiZSByZW1vdmVkIGluIGpRdWVyeSA0LjAgd2hlbiB3ZSBvbmx5IGF1dG8tYXBwZW5kXG4gICAgICAgICAgICAvLyBcInB4XCIgdG8gYSBmZXcgaGFyZGNvZGVkIHZhbHVlcy5cblxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJudW1iZXJcIiAmJiAhaXNDdXN0b21Qcm9wKSB7XG4gICAgICAgICAgICAgIHZhbHVlICs9IHJldCAmJiByZXRbM10gfHwgKGpRdWVyeS5jc3NOdW1iZXJbb3JpZ05hbWVdID8gXCJcIiA6IFwicHhcIik7XG4gICAgICAgICAgICB9IC8vIGJhY2tncm91bmQtKiBwcm9wcyBhZmZlY3Qgb3JpZ2luYWwgY2xvbmUncyB2YWx1ZXNcblxuXG4gICAgICAgICAgICBpZiAoIXN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlICYmIHZhbHVlID09PSBcIlwiICYmIG5hbWUuaW5kZXhPZihcImJhY2tncm91bmRcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgc3R5bGVbbmFtZV0gPSBcImluaGVyaXRcIjtcbiAgICAgICAgICAgIH0gLy8gSWYgYSBob29rIHdhcyBwcm92aWRlZCwgdXNlIHRoYXQgdmFsdWUsIG90aGVyd2lzZSBqdXN0IHNldCB0aGUgc3BlY2lmaWVkIHZhbHVlXG5cblxuICAgICAgICAgICAgaWYgKCFob29rcyB8fCAhKFwic2V0XCIgaW4gaG9va3MpIHx8ICh2YWx1ZSA9IGhvb2tzLnNldChlbGVtLCB2YWx1ZSwgZXh0cmEpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmIChpc0N1c3RvbVByb3ApIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgbm9uLWNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcbiAgICAgICAgICAgIGlmIChob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoZWxlbSwgZmFsc2UsIGV4dHJhKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfSAvLyBPdGhlcndpc2UganVzdCBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIHN0eWxlIG9iamVjdFxuXG5cbiAgICAgICAgICAgIHJldHVybiBzdHlsZVtuYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNzczogZnVuY3Rpb24gY3NzKGVsZW0sIG5hbWUsIGV4dHJhLCBzdHlsZXMpIHtcbiAgICAgICAgICB2YXIgdmFsLFxuICAgICAgICAgICAgICBudW0sXG4gICAgICAgICAgICAgIGhvb2tzLFxuICAgICAgICAgICAgICBvcmlnTmFtZSA9IGNhbWVsQ2FzZShuYW1lKSxcbiAgICAgICAgICAgICAgaXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdChuYW1lKTsgLy8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuICAgICAgICAgIC8vIHdhbnQgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBpZiBpdCBpcyBhIENTUyBjdXN0b20gcHJvcGVydHlcbiAgICAgICAgICAvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG5cbiAgICAgICAgICBpZiAoIWlzQ3VzdG9tUHJvcCkge1xuICAgICAgICAgICAgbmFtZSA9IGZpbmFsUHJvcE5hbWUob3JpZ05hbWUpO1xuICAgICAgICAgIH0gLy8gVHJ5IHByZWZpeGVkIG5hbWUgZm9sbG93ZWQgYnkgdGhlIHVucHJlZml4ZWQgbmFtZVxuXG5cbiAgICAgICAgICBob29rcyA9IGpRdWVyeS5jc3NIb29rc1tuYW1lXSB8fCBqUXVlcnkuY3NzSG9va3Nbb3JpZ05hbWVdOyAvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuXG4gICAgICAgICAgaWYgKGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MpIHtcbiAgICAgICAgICAgIHZhbCA9IGhvb2tzLmdldChlbGVtLCB0cnVlLCBleHRyYSk7XG4gICAgICAgICAgfSAvLyBPdGhlcndpc2UsIGlmIGEgd2F5IHRvIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZXhpc3RzLCB1c2UgdGhhdFxuXG5cbiAgICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbCA9IGN1ckNTUyhlbGVtLCBuYW1lLCBzdHlsZXMpO1xuICAgICAgICAgIH0gLy8gQ29udmVydCBcIm5vcm1hbFwiIHRvIGNvbXB1dGVkIHZhbHVlXG5cblxuICAgICAgICAgIGlmICh2YWwgPT09IFwibm9ybWFsXCIgJiYgbmFtZSBpbiBjc3NOb3JtYWxUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHZhbCA9IGNzc05vcm1hbFRyYW5zZm9ybVtuYW1lXTtcbiAgICAgICAgICB9IC8vIE1ha2UgbnVtZXJpYyBpZiBmb3JjZWQgb3IgYSBxdWFsaWZpZXIgd2FzIHByb3ZpZGVkIGFuZCB2YWwgbG9va3MgbnVtZXJpY1xuXG5cbiAgICAgICAgICBpZiAoZXh0cmEgPT09IFwiXCIgfHwgZXh0cmEpIHtcbiAgICAgICAgICAgIG51bSA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICAgICAgICAgIHJldHVybiBleHRyYSA9PT0gdHJ1ZSB8fCBpc0Zpbml0ZShudW0pID8gbnVtIHx8IDAgOiB2YWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkuZWFjaChbXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXSwgZnVuY3Rpb24gKGksIGRpbWVuc2lvbikge1xuICAgICAgICBqUXVlcnkuY3NzSG9va3NbZGltZW5zaW9uXSA9IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldChlbGVtLCBjb21wdXRlZCwgZXh0cmEpIHtcbiAgICAgICAgICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICAgICAgICAvLyBDZXJ0YWluIGVsZW1lbnRzIGNhbiBoYXZlIGRpbWVuc2lvbiBpbmZvIGlmIHdlIGludmlzaWJseSBzaG93IHRoZW1cbiAgICAgICAgICAgICAgLy8gYnV0IGl0IG11c3QgaGF2ZSBhIGN1cnJlbnQgZGlzcGxheSBzdHlsZSB0aGF0IHdvdWxkIGJlbmVmaXRcbiAgICAgICAgICAgICAgcmV0dXJuIHJkaXNwbGF5c3dhcC50ZXN0KGpRdWVyeS5jc3MoZWxlbSwgXCJkaXNwbGF5XCIpKSAmJiAoIC8vIFN1cHBvcnQ6IFNhZmFyaSA4K1xuICAgICAgICAgICAgICAvLyBUYWJsZSBjb2x1bW5zIGluIFNhZmFyaSBoYXZlIG5vbi16ZXJvIG9mZnNldFdpZHRoICYgemVyb1xuICAgICAgICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB1bmxlc3MgZGlzcGxheSBpcyBjaGFuZ2VkLlxuICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYSBkaXNjb25uZWN0ZWQgbm9kZVxuICAgICAgICAgICAgICAvLyBpbiBJRSB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICAgICAgICAgICFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoIHx8ICFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSA/IHN3YXAoZWxlbSwgY3NzU2hvdywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRXaWR0aE9ySGVpZ2h0KGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEpO1xuICAgICAgICAgICAgICB9KSA6IGdldFdpZHRoT3JIZWlnaHQoZWxlbSwgZGltZW5zaW9uLCBleHRyYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChlbGVtLCB2YWx1ZSwgZXh0cmEpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzLFxuICAgICAgICAgICAgICAgIHN0eWxlcyA9IGdldFN0eWxlcyhlbGVtKSxcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJlYWQgc3R5bGVzLnBvc2l0aW9uIGlmIHRoZSB0ZXN0IGhhcyBhIGNoYW5jZSB0byBmYWlsXG4gICAgICAgICAgICAvLyB0byBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LlxuICAgICAgICAgICAgc2Nyb2xsYm94U2l6ZUJ1Z2d5ID0gIXN1cHBvcnQuc2Nyb2xsYm94U2l6ZSgpICYmIHN0eWxlcy5wb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIC8vIFRvIGF2b2lkIGZvcmNpbmcgYSByZWZsb3csIG9ubHkgZmV0Y2ggYm94U2l6aW5nIGlmIHdlIG5lZWQgaXQgKGdoLTM5OTEpXG4gICAgICAgICAgICBib3hTaXppbmdOZWVkZWQgPSBzY3JvbGxib3hTaXplQnVnZ3kgfHwgZXh0cmEsXG4gICAgICAgICAgICAgICAgaXNCb3JkZXJCb3ggPSBib3hTaXppbmdOZWVkZWQgJiYgalF1ZXJ5LmNzcyhlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzKSA9PT0gXCJib3JkZXItYm94XCIsXG4gICAgICAgICAgICAgICAgc3VidHJhY3QgPSBleHRyYSA/IGJveE1vZGVsQWRqdXN0bWVudChlbGVtLCBkaW1lbnNpb24sIGV4dHJhLCBpc0JvcmRlckJveCwgc3R5bGVzKSA6IDA7IC8vIEFjY291bnQgZm9yIHVucmVsaWFibGUgYm9yZGVyLWJveCBkaW1lbnNpb25zIGJ5IGNvbXBhcmluZyBvZmZzZXQqIHRvIGNvbXB1dGVkIGFuZFxuICAgICAgICAgICAgLy8gZmFraW5nIGEgY29udGVudC1ib3ggdG8gZ2V0IGJvcmRlciBhbmQgcGFkZGluZyAoZ2gtMzY5OSlcblxuICAgICAgICAgICAgaWYgKGlzQm9yZGVyQm94ICYmIHNjcm9sbGJveFNpemVCdWdneSkge1xuICAgICAgICAgICAgICBzdWJ0cmFjdCAtPSBNYXRoLmNlaWwoZWxlbVtcIm9mZnNldFwiICsgZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSldIC0gcGFyc2VGbG9hdChzdHlsZXNbZGltZW5zaW9uXSkgLSBib3hNb2RlbEFkanVzdG1lbnQoZWxlbSwgZGltZW5zaW9uLCBcImJvcmRlclwiLCBmYWxzZSwgc3R5bGVzKSAtIDAuNSk7XG4gICAgICAgICAgICB9IC8vIENvbnZlcnQgdG8gcGl4ZWxzIGlmIHZhbHVlIGFkanVzdG1lbnQgaXMgbmVlZGVkXG5cblxuICAgICAgICAgICAgaWYgKHN1YnRyYWN0ICYmIChtYXRjaGVzID0gcmNzc051bS5leGVjKHZhbHVlKSkgJiYgKG1hdGNoZXNbM10gfHwgXCJweFwiKSAhPT0gXCJweFwiKSB7XG4gICAgICAgICAgICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB2YWx1ZSA9IGpRdWVyeS5jc3MoZWxlbSwgZGltZW5zaW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNldFBvc2l0aXZlTnVtYmVyKGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBqUXVlcnkuY3NzSG9va3MubWFyZ2luTGVmdCA9IGFkZEdldEhvb2tJZihzdXBwb3J0LnJlbGlhYmxlTWFyZ2luTGVmdCwgZnVuY3Rpb24gKGVsZW0sIGNvbXB1dGVkKSB7XG4gICAgICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICAgIHJldHVybiAocGFyc2VGbG9hdChjdXJDU1MoZWxlbSwgXCJtYXJnaW5MZWZ0XCIpKSB8fCBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSBzd2FwKGVsZW0sIHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDBcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgIH0pKSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFRoZXNlIGhvb2tzIGFyZSB1c2VkIGJ5IGFuaW1hdGUgdG8gZXhwYW5kIHByb3BlcnRpZXNcblxuICAgICAgalF1ZXJ5LmVhY2goe1xuICAgICAgICBtYXJnaW46IFwiXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiXCIsXG4gICAgICAgIGJvcmRlcjogXCJXaWR0aFwiXG4gICAgICB9LCBmdW5jdGlvbiAocHJlZml4LCBzdWZmaXgpIHtcbiAgICAgICAgalF1ZXJ5LmNzc0hvb2tzW3ByZWZpeCArIHN1ZmZpeF0gPSB7XG4gICAgICAgICAgZXhwYW5kOiBmdW5jdGlvbiBleHBhbmQodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgICAgICBleHBhbmRlZCA9IHt9LFxuICAgICAgICAgICAgICAgIC8vIEFzc3VtZXMgYSBzaW5nbGUgbnVtYmVyIGlmIG5vdCBhIHN0cmluZ1xuICAgICAgICAgICAgcGFydHMgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyB2YWx1ZS5zcGxpdChcIiBcIikgOiBbdmFsdWVdO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICBleHBhbmRlZFtwcmVmaXggKyBjc3NFeHBhbmRbaV0gKyBzdWZmaXhdID0gcGFydHNbaV0gfHwgcGFydHNbaSAtIDJdIHx8IHBhcnRzWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZXhwYW5kZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwcmVmaXggIT09IFwibWFyZ2luXCIpIHtcbiAgICAgICAgICBqUXVlcnkuY3NzSG9va3NbcHJlZml4ICsgc3VmZml4XS5zZXQgPSBzZXRQb3NpdGl2ZU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgICAgY3NzOiBmdW5jdGlvbiBjc3MobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uIChlbGVtLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHN0eWxlcyxcbiAgICAgICAgICAgICAgICBsZW4sXG4gICAgICAgICAgICAgICAgbWFwID0ge30sXG4gICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgICAgICAgICAgIHN0eWxlcyA9IGdldFN0eWxlcyhlbGVtKTtcbiAgICAgICAgICAgICAgbGVuID0gbmFtZS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIG1hcFtuYW1lW2ldXSA9IGpRdWVyeS5jc3MoZWxlbSwgbmFtZVtpXSwgZmFsc2UsIHN0eWxlcyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IGpRdWVyeS5zdHlsZShlbGVtLCBuYW1lLCB2YWx1ZSkgOiBqUXVlcnkuY3NzKGVsZW0sIG5hbWUpO1xuICAgICAgICAgIH0sIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBUd2VlbihlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZykge1xuICAgICAgICByZXR1cm4gbmV3IFR3ZWVuLnByb3RvdHlwZS5pbml0KGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nKTtcbiAgICAgIH1cblxuICAgICAgalF1ZXJ5LlR3ZWVuID0gVHdlZW47XG4gICAgICBUd2Vlbi5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBUd2VlbixcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdChlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZywgdW5pdCkge1xuICAgICAgICAgIHRoaXMuZWxlbSA9IGVsZW07XG4gICAgICAgICAgdGhpcy5wcm9wID0gcHJvcDtcbiAgICAgICAgICB0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0O1xuICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMubm93ID0gdGhpcy5jdXIoKTtcbiAgICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgICAgICB0aGlzLnVuaXQgPSB1bml0IHx8IChqUXVlcnkuY3NzTnVtYmVyW3Byb3BdID8gXCJcIiA6IFwicHhcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cjogZnVuY3Rpb24gY3VyKCkge1xuICAgICAgICAgIHZhciBob29rcyA9IFR3ZWVuLnByb3BIb29rc1t0aGlzLnByb3BdO1xuICAgICAgICAgIHJldHVybiBob29rcyAmJiBob29rcy5nZXQgPyBob29rcy5nZXQodGhpcykgOiBUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBydW46IGZ1bmN0aW9uIHJ1bihwZXJjZW50KSB7XG4gICAgICAgICAgdmFyIGVhc2VkLFxuICAgICAgICAgICAgICBob29rcyA9IFR3ZWVuLnByb3BIb29rc1t0aGlzLnByb3BdO1xuXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wb3MgPSBlYXNlZCA9IGpRdWVyeS5lYXNpbmdbdGhpcy5lYXNpbmddKHBlcmNlbnQsIHRoaXMub3B0aW9ucy5kdXJhdGlvbiAqIHBlcmNlbnQsIDAsIDEsIHRoaXMub3B0aW9ucy5kdXJhdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9zID0gZWFzZWQgPSBwZXJjZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMubm93ID0gKHRoaXMuZW5kIC0gdGhpcy5zdGFydCkgKiBlYXNlZCArIHRoaXMuc3RhcnQ7XG5cbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLCB0aGlzLm5vdywgdGhpcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGhvb2tzICYmIGhvb2tzLnNldCkge1xuICAgICAgICAgICAgaG9va3Muc2V0KHRoaXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgVHdlZW4ucHJvdG90eXBlLmluaXQucHJvdG90eXBlID0gVHdlZW4ucHJvdG90eXBlO1xuICAgICAgVHdlZW4ucHJvcEhvb2tzID0ge1xuICAgICAgICBfZGVmYXVsdDoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHR3ZWVuKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0OyAvLyBVc2UgYSBwcm9wZXJ0eSBvbiB0aGUgZWxlbWVudCBkaXJlY3RseSB3aGVuIGl0IGlzIG5vdCBhIERPTSBlbGVtZW50LFxuICAgICAgICAgICAgLy8gb3Igd2hlbiB0aGVyZSBpcyBubyBtYXRjaGluZyBzdHlsZSBwcm9wZXJ0eSB0aGF0IGV4aXN0cy5cblxuICAgICAgICAgICAgaWYgKHR3ZWVuLmVsZW0ubm9kZVR5cGUgIT09IDEgfHwgdHdlZW4uZWxlbVt0d2Vlbi5wcm9wXSAhPSBudWxsICYmIHR3ZWVuLmVsZW0uc3R5bGVbdHdlZW4ucHJvcF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHdlZW4uZWxlbVt0d2Vlbi5wcm9wXTtcbiAgICAgICAgICAgIH0gLy8gUGFzc2luZyBhbiBlbXB0eSBzdHJpbmcgYXMgYSAzcmQgcGFyYW1ldGVyIHRvIC5jc3Mgd2lsbCBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgICAvLyBhdHRlbXB0IGEgcGFyc2VGbG9hdCBhbmQgZmFsbGJhY2sgdG8gYSBzdHJpbmcgaWYgdGhlIHBhcnNlIGZhaWxzLlxuICAgICAgICAgICAgLy8gU2ltcGxlIHZhbHVlcyBzdWNoIGFzIFwiMTBweFwiIGFyZSBwYXJzZWQgdG8gRmxvYXQ7XG4gICAgICAgICAgICAvLyBjb21wbGV4IHZhbHVlcyBzdWNoIGFzIFwicm90YXRlKDFyYWQpXCIgYXJlIHJldHVybmVkIGFzLWlzLlxuXG5cbiAgICAgICAgICAgIHJlc3VsdCA9IGpRdWVyeS5jc3ModHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgXCJcIik7IC8vIEVtcHR5IHN0cmluZ3MsIG51bGwsIHVuZGVmaW5lZCBhbmQgXCJhdXRvXCIgYXJlIGNvbnZlcnRlZCB0byAwLlxuXG4gICAgICAgICAgICByZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHR3ZWVuKSB7XG4gICAgICAgICAgICAvLyBVc2Ugc3RlcCBob29rIGZvciBiYWNrIGNvbXBhdC5cbiAgICAgICAgICAgIC8vIFVzZSBjc3NIb29rIGlmIGl0cyB0aGVyZS5cbiAgICAgICAgICAgIC8vIFVzZSAuc3R5bGUgaWYgYXZhaWxhYmxlIGFuZCB1c2UgcGxhaW4gcHJvcGVydGllcyB3aGVyZSBhdmFpbGFibGUuXG4gICAgICAgICAgICBpZiAoalF1ZXJ5LmZ4LnN0ZXBbdHdlZW4ucHJvcF0pIHtcbiAgICAgICAgICAgICAgalF1ZXJ5LmZ4LnN0ZXBbdHdlZW4ucHJvcF0odHdlZW4pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0d2Vlbi5lbGVtLm5vZGVUeXBlID09PSAxICYmIChqUXVlcnkuY3NzSG9va3NbdHdlZW4ucHJvcF0gfHwgdHdlZW4uZWxlbS5zdHlsZVtmaW5hbFByb3BOYW1lKHR3ZWVuLnByb3ApXSAhPSBudWxsKSkge1xuICAgICAgICAgICAgICBqUXVlcnkuc3R5bGUodHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgdHdlZW4ubm93ICsgdHdlZW4udW5pdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0d2Vlbi5lbGVtW3R3ZWVuLnByb3BdID0gdHdlZW4ubm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTsgLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbiAgICAgIC8vIFBhbmljIGJhc2VkIGFwcHJvYWNoIHRvIHNldHRpbmcgdGhpbmdzIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuXG4gICAgICBUd2Vlbi5wcm9wSG9va3Muc2Nyb2xsVG9wID0gVHdlZW4ucHJvcEhvb2tzLnNjcm9sbExlZnQgPSB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHR3ZWVuKSB7XG4gICAgICAgICAgaWYgKHR3ZWVuLmVsZW0ubm9kZVR5cGUgJiYgdHdlZW4uZWxlbS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0d2Vlbi5lbGVtW3R3ZWVuLnByb3BdID0gdHdlZW4ubm93O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGpRdWVyeS5lYXNpbmcgPSB7XG4gICAgICAgIGxpbmVhcjogZnVuY3Rpb24gbGluZWFyKHApIHtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSxcbiAgICAgICAgc3dpbmc6IGZ1bmN0aW9uIHN3aW5nKHApIHtcbiAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5jb3MocCAqIE1hdGguUEkpIC8gMjtcbiAgICAgICAgfSxcbiAgICAgICAgX2RlZmF1bHQ6IFwic3dpbmdcIlxuICAgICAgfTtcbiAgICAgIGpRdWVyeS5meCA9IFR3ZWVuLnByb3RvdHlwZS5pbml0OyAvLyBCYWNrIGNvbXBhdCA8MS44IGV4dGVuc2lvbiBwb2ludFxuXG4gICAgICBqUXVlcnkuZnguc3RlcCA9IHt9O1xuICAgICAgdmFyIGZ4Tm93LFxuICAgICAgICAgIGluUHJvZ3Jlc3MsXG4gICAgICAgICAgcmZ4dHlwZXMgPSAvXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sXG4gICAgICAgICAgcnJ1biA9IC9xdWV1ZUhvb2tzJC87XG5cbiAgICAgIGZ1bmN0aW9uIHNjaGVkdWxlKCkge1xuICAgICAgICBpZiAoaW5Qcm9ncmVzcykge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2NoZWR1bGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChzY2hlZHVsZSwgalF1ZXJ5LmZ4LmludGVydmFsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqUXVlcnkuZngudGljaygpO1xuICAgICAgICB9XG4gICAgICB9IC8vIEFuaW1hdGlvbnMgY3JlYXRlZCBzeW5jaHJvbm91c2x5IHdpbGwgcnVuIHN5bmNocm9ub3VzbHlcblxuXG4gICAgICBmdW5jdGlvbiBjcmVhdGVGeE5vdygpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZ4Tm93ID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ4Tm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIH0gLy8gR2VuZXJhdGUgcGFyYW1ldGVycyB0byBjcmVhdGUgYSBzdGFuZGFyZCBhbmltYXRpb25cblxuXG4gICAgICBmdW5jdGlvbiBnZW5GeCh0eXBlLCBpbmNsdWRlV2lkdGgpIHtcbiAgICAgICAgdmFyIHdoaWNoLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBhdHRycyA9IHtcbiAgICAgICAgICBoZWlnaHQ6IHR5cGVcbiAgICAgICAgfTsgLy8gSWYgd2UgaW5jbHVkZSB3aWR0aCwgc3RlcCB2YWx1ZSBpcyAxIHRvIGRvIGFsbCBjc3NFeHBhbmQgdmFsdWVzLFxuICAgICAgICAvLyBvdGhlcndpc2Ugc3RlcCB2YWx1ZSBpcyAyIHRvIHNraXAgb3ZlciBMZWZ0IGFuZCBSaWdodFxuXG4gICAgICAgIGluY2x1ZGVXaWR0aCA9IGluY2x1ZGVXaWR0aCA/IDEgOiAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgNDsgaSArPSAyIC0gaW5jbHVkZVdpZHRoKSB7XG4gICAgICAgICAgd2hpY2ggPSBjc3NFeHBhbmRbaV07XG4gICAgICAgICAgYXR0cnNbXCJtYXJnaW5cIiArIHdoaWNoXSA9IGF0dHJzW1wicGFkZGluZ1wiICsgd2hpY2hdID0gdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlV2lkdGgpIHtcbiAgICAgICAgICBhdHRycy5vcGFjaXR5ID0gYXR0cnMud2lkdGggPSB0eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF0dHJzO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjcmVhdGVUd2Vlbih2YWx1ZSwgcHJvcCwgYW5pbWF0aW9uKSB7XG4gICAgICAgIHZhciB0d2VlbixcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSAoQW5pbWF0aW9uLnR3ZWVuZXJzW3Byb3BdIHx8IFtdKS5jb25jYXQoQW5pbWF0aW9uLnR3ZWVuZXJzW1wiKlwiXSksXG4gICAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAodHdlZW4gPSBjb2xsZWN0aW9uW2luZGV4XS5jYWxsKGFuaW1hdGlvbiwgcHJvcCwgdmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBwcm9wZXJ0eVxuICAgICAgICAgICAgcmV0dXJuIHR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBkZWZhdWx0UHJlZmlsdGVyKGVsZW0sIHByb3BzLCBvcHRzKSB7XG4gICAgICAgIHZhciBwcm9wLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB0b2dnbGUsXG4gICAgICAgICAgICBob29rcyxcbiAgICAgICAgICAgIG9sZGZpcmUsXG4gICAgICAgICAgICBwcm9wVHdlZW4sXG4gICAgICAgICAgICByZXN0b3JlRGlzcGxheSxcbiAgICAgICAgICAgIGRpc3BsYXksXG4gICAgICAgICAgICBpc0JveCA9IFwid2lkdGhcIiBpbiBwcm9wcyB8fCBcImhlaWdodFwiIGluIHByb3BzLFxuICAgICAgICAgICAgYW5pbSA9IHRoaXMsXG4gICAgICAgICAgICBvcmlnID0ge30sXG4gICAgICAgICAgICBzdHlsZSA9IGVsZW0uc3R5bGUsXG4gICAgICAgICAgICBoaWRkZW4gPSBlbGVtLm5vZGVUeXBlICYmIGlzSGlkZGVuV2l0aGluVHJlZShlbGVtKSxcbiAgICAgICAgICAgIGRhdGFTaG93ID0gZGF0YVByaXYuZ2V0KGVsZW0sIFwiZnhzaG93XCIpOyAvLyBRdWV1ZS1za2lwcGluZyBhbmltYXRpb25zIGhpamFjayB0aGUgZnggaG9va3NcblxuICAgICAgICBpZiAoIW9wdHMucXVldWUpIHtcbiAgICAgICAgICBob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyhlbGVtLCBcImZ4XCIpO1xuXG4gICAgICAgICAgaWYgKGhvb2tzLnVucXVldWVkID09IG51bGwpIHtcbiAgICAgICAgICAgIGhvb2tzLnVucXVldWVkID0gMDtcbiAgICAgICAgICAgIG9sZGZpcmUgPSBob29rcy5lbXB0eS5maXJlO1xuXG4gICAgICAgICAgICBob29rcy5lbXB0eS5maXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoIWhvb2tzLnVucXVldWVkKSB7XG4gICAgICAgICAgICAgICAgb2xkZmlyZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhvb2tzLnVucXVldWVkKys7XG4gICAgICAgICAgYW5pbS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBjb21wbGV0ZSBoYW5kbGVyIGlzIGNhbGxlZCBiZWZvcmUgdGhpcyBjb21wbGV0ZXNcbiAgICAgICAgICAgIGFuaW0uYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaG9va3MudW5xdWV1ZWQtLTtcblxuICAgICAgICAgICAgICBpZiAoIWpRdWVyeS5xdWV1ZShlbGVtLCBcImZ4XCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGhvb2tzLmVtcHR5LmZpcmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gLy8gRGV0ZWN0IHNob3cvaGlkZSBhbmltYXRpb25zXG5cblxuICAgICAgICBmb3IgKHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICB2YWx1ZSA9IHByb3BzW3Byb3BdO1xuXG4gICAgICAgICAgaWYgKHJmeHR5cGVzLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICBkZWxldGUgcHJvcHNbcHJvcF07XG4gICAgICAgICAgICB0b2dnbGUgPSB0b2dnbGUgfHwgdmFsdWUgPT09IFwidG9nZ2xlXCI7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gKGhpZGRlbiA/IFwiaGlkZVwiIDogXCJzaG93XCIpKSB7XG4gICAgICAgICAgICAgIC8vIFByZXRlbmQgdG8gYmUgaGlkZGVuIGlmIHRoaXMgaXMgYSBcInNob3dcIiBhbmRcbiAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgc3RpbGwgZGF0YSBmcm9tIGEgc3RvcHBlZCBzaG93L2hpZGVcbiAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcInNob3dcIiAmJiBkYXRhU2hvdyAmJiBkYXRhU2hvd1twcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuID0gdHJ1ZTsgLy8gSWdub3JlIGFsbCBvdGhlciBuby1vcCBzaG93L2hpZGUgZGF0YVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9yaWdbcHJvcF0gPSBkYXRhU2hvdyAmJiBkYXRhU2hvd1twcm9wXSB8fCBqUXVlcnkuc3R5bGUoZWxlbSwgcHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIEJhaWwgb3V0IGlmIHRoaXMgaXMgYSBuby1vcCBsaWtlIC5oaWRlKCkuaGlkZSgpXG5cblxuICAgICAgICBwcm9wVHdlZW4gPSAhalF1ZXJ5LmlzRW1wdHlPYmplY3QocHJvcHMpO1xuXG4gICAgICAgIGlmICghcHJvcFR3ZWVuICYmIGpRdWVyeS5pc0VtcHR5T2JqZWN0KG9yaWcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFJlc3RyaWN0IFwib3ZlcmZsb3dcIiBhbmQgXCJkaXNwbGF5XCIgc3R5bGVzIGR1cmluZyBib3ggYW5pbWF0aW9uc1xuXG5cbiAgICAgICAgaWYgKGlzQm94ICYmIGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDE1XG4gICAgICAgICAgLy8gUmVjb3JkIGFsbCAzIG92ZXJmbG93IGF0dHJpYnV0ZXMgYmVjYXVzZSBJRSBkb2VzIG5vdCBpbmZlciB0aGUgc2hvcnRoYW5kXG4gICAgICAgICAgLy8gZnJvbSBpZGVudGljYWxseS12YWx1ZWQgb3ZlcmZsb3dYIGFuZCBvdmVyZmxvd1kgYW5kIEVkZ2UganVzdCBtaXJyb3JzXG4gICAgICAgICAgLy8gdGhlIG92ZXJmbG93WCB2YWx1ZSB0aGVyZS5cbiAgICAgICAgICBvcHRzLm92ZXJmbG93ID0gW3N0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1gsIHN0eWxlLm92ZXJmbG93WV07IC8vIElkZW50aWZ5IGEgZGlzcGxheSB0eXBlLCBwcmVmZXJyaW5nIG9sZCBzaG93L2hpZGUgZGF0YSBvdmVyIHRoZSBDU1MgY2FzY2FkZVxuXG4gICAgICAgICAgcmVzdG9yZURpc3BsYXkgPSBkYXRhU2hvdyAmJiBkYXRhU2hvdy5kaXNwbGF5O1xuXG4gICAgICAgICAgaWYgKHJlc3RvcmVEaXNwbGF5ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc3RvcmVEaXNwbGF5ID0gZGF0YVByaXYuZ2V0KGVsZW0sIFwiZGlzcGxheVwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwbGF5ID0galF1ZXJ5LmNzcyhlbGVtLCBcImRpc3BsYXlcIik7XG5cbiAgICAgICAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGlmIChyZXN0b3JlRGlzcGxheSkge1xuICAgICAgICAgICAgICBkaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBHZXQgbm9uZW1wdHkgdmFsdWUocykgYnkgdGVtcG9yYXJpbHkgZm9yY2luZyB2aXNpYmlsaXR5XG4gICAgICAgICAgICAgIHNob3dIaWRlKFtlbGVtXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIHJlc3RvcmVEaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5IHx8IHJlc3RvcmVEaXNwbGF5O1xuICAgICAgICAgICAgICBkaXNwbGF5ID0galF1ZXJ5LmNzcyhlbGVtLCBcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgIHNob3dIaWRlKFtlbGVtXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBBbmltYXRlIGlubGluZSBlbGVtZW50cyBhcyBpbmxpbmUtYmxvY2tcblxuXG4gICAgICAgICAgaWYgKGRpc3BsYXkgPT09IFwiaW5saW5lXCIgfHwgZGlzcGxheSA9PT0gXCJpbmxpbmUtYmxvY2tcIiAmJiByZXN0b3JlRGlzcGxheSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoalF1ZXJ5LmNzcyhlbGVtLCBcImZsb2F0XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBkaXNwbGF5IHZhbHVlIGF0IHRoZSBlbmQgb2YgcHVyZSBzaG93L2hpZGUgYW5pbWF0aW9uc1xuICAgICAgICAgICAgICBpZiAoIXByb3BUd2Vlbikge1xuICAgICAgICAgICAgICAgIGFuaW0uZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdG9yZURpc3BsYXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheSA9IHN0eWxlLmRpc3BsYXk7XG4gICAgICAgICAgICAgICAgICByZXN0b3JlRGlzcGxheSA9IGRpc3BsYXkgPT09IFwibm9uZVwiID8gXCJcIiA6IGRpc3BsYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdHMub3ZlcmZsb3cpIHtcbiAgICAgICAgICBzdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgYW5pbS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3R5bGUub3ZlcmZsb3cgPSBvcHRzLm92ZXJmbG93WzBdO1xuICAgICAgICAgICAgc3R5bGUub3ZlcmZsb3dYID0gb3B0cy5vdmVyZmxvd1sxXTtcbiAgICAgICAgICAgIHN0eWxlLm92ZXJmbG93WSA9IG9wdHMub3ZlcmZsb3dbMl07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gLy8gSW1wbGVtZW50IHNob3cvaGlkZSBhbmltYXRpb25zXG5cblxuICAgICAgICBwcm9wVHdlZW4gPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHByb3AgaW4gb3JpZykge1xuICAgICAgICAgIC8vIEdlbmVyYWwgc2hvdy9oaWRlIHNldHVwIGZvciB0aGlzIGVsZW1lbnQgYW5pbWF0aW9uXG4gICAgICAgICAgaWYgKCFwcm9wVHdlZW4pIHtcbiAgICAgICAgICAgIGlmIChkYXRhU2hvdykge1xuICAgICAgICAgICAgICBpZiAoXCJoaWRkZW5cIiBpbiBkYXRhU2hvdykge1xuICAgICAgICAgICAgICAgIGhpZGRlbiA9IGRhdGFTaG93LmhpZGRlbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGF0YVNob3cgPSBkYXRhUHJpdi5hY2Nlc3MoZWxlbSwgXCJmeHNob3dcIiwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHJlc3RvcmVEaXNwbGF5XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSAvLyBTdG9yZSBoaWRkZW4vdmlzaWJsZSBmb3IgdG9nZ2xlIHNvIGAuc3RvcCgpLnRvZ2dsZSgpYCBcInJldmVyc2VzXCJcblxuXG4gICAgICAgICAgICBpZiAodG9nZ2xlKSB7XG4gICAgICAgICAgICAgIGRhdGFTaG93LmhpZGRlbiA9ICFoaWRkZW47XG4gICAgICAgICAgICB9IC8vIFNob3cgZWxlbWVudHMgYmVmb3JlIGFuaW1hdGluZyB0aGVtXG5cblxuICAgICAgICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICAgICAgICBzaG93SGlkZShbZWxlbV0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cblxuICAgICAgICAgICAgYW5pbS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cbiAgICAgICAgICAgICAgLy8gVGhlIGZpbmFsIHN0ZXAgb2YgYSBcImhpZGVcIiBhbmltYXRpb24gaXMgYWN0dWFsbHkgaGlkaW5nIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgc2hvd0hpZGUoW2VsZW1dKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRhdGFQcml2LnJlbW92ZShlbGVtLCBcImZ4c2hvd1wiKTtcblxuICAgICAgICAgICAgICBmb3IgKHByb3AgaW4gb3JpZykge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5zdHlsZShlbGVtLCBwcm9wLCBvcmlnW3Byb3BdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSAvLyBQZXItcHJvcGVydHkgc2V0dXBcblxuXG4gICAgICAgICAgcHJvcFR3ZWVuID0gY3JlYXRlVHdlZW4oaGlkZGVuID8gZGF0YVNob3dbcHJvcF0gOiAwLCBwcm9wLCBhbmltKTtcblxuICAgICAgICAgIGlmICghKHByb3AgaW4gZGF0YVNob3cpKSB7XG4gICAgICAgICAgICBkYXRhU2hvd1twcm9wXSA9IHByb3BUd2Vlbi5zdGFydDtcblxuICAgICAgICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICAgICAgICBwcm9wVHdlZW4uZW5kID0gcHJvcFR3ZWVuLnN0YXJ0O1xuICAgICAgICAgICAgICBwcm9wVHdlZW4uc3RhcnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcm9wRmlsdGVyKHByb3BzLCBzcGVjaWFsRWFzaW5nKSB7XG4gICAgICAgIHZhciBpbmRleCwgbmFtZSwgZWFzaW5nLCB2YWx1ZSwgaG9va3M7IC8vIGNhbWVsQ2FzZSwgc3BlY2lhbEVhc2luZyBhbmQgZXhwYW5kIGNzc0hvb2sgcGFzc1xuXG4gICAgICAgIGZvciAoaW5kZXggaW4gcHJvcHMpIHtcbiAgICAgICAgICBuYW1lID0gY2FtZWxDYXNlKGluZGV4KTtcbiAgICAgICAgICBlYXNpbmcgPSBzcGVjaWFsRWFzaW5nW25hbWVdO1xuICAgICAgICAgIHZhbHVlID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBlYXNpbmcgPSB2YWx1ZVsxXTtcbiAgICAgICAgICAgIHZhbHVlID0gcHJvcHNbaW5kZXhdID0gdmFsdWVbMF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluZGV4ICE9PSBuYW1lKSB7XG4gICAgICAgICAgICBwcm9wc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgZGVsZXRlIHByb3BzW2luZGV4XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBob29rcyA9IGpRdWVyeS5jc3NIb29rc1tuYW1lXTtcblxuICAgICAgICAgIGlmIChob29rcyAmJiBcImV4cGFuZFwiIGluIGhvb2tzKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGhvb2tzLmV4cGFuZCh2YWx1ZSk7XG4gICAgICAgICAgICBkZWxldGUgcHJvcHNbbmFtZV07IC8vIE5vdCBxdWl0ZSAkLmV4dGVuZCwgdGhpcyB3b24ndCBvdmVyd3JpdGUgZXhpc3Rpbmcga2V5cy5cbiAgICAgICAgICAgIC8vIFJldXNpbmcgJ2luZGV4JyBiZWNhdXNlIHdlIGhhdmUgdGhlIGNvcnJlY3QgXCJuYW1lXCJcblxuICAgICAgICAgICAgZm9yIChpbmRleCBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoIShpbmRleCBpbiBwcm9wcykpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tpbmRleF0gPSB2YWx1ZVtpbmRleF07XG4gICAgICAgICAgICAgICAgc3BlY2lhbEVhc2luZ1tpbmRleF0gPSBlYXNpbmc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3BlY2lhbEVhc2luZ1tuYW1lXSA9IGVhc2luZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gQW5pbWF0aW9uKGVsZW0sIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCxcbiAgICAgICAgICAgIHN0b3BwZWQsXG4gICAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSBBbmltYXRpb24ucHJlZmlsdGVycy5sZW5ndGgsXG4gICAgICAgICAgICBkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gRG9uJ3QgbWF0Y2ggZWxlbSBpbiB0aGUgOmFuaW1hdGVkIHNlbGVjdG9yXG4gICAgICAgICAgZGVsZXRlIHRpY2suZWxlbTtcbiAgICAgICAgfSksXG4gICAgICAgICAgICB0aWNrID0gZnVuY3Rpb24gdGljaygpIHtcbiAgICAgICAgICBpZiAoc3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG4gICAgICAgICAgICAgIHJlbWFpbmluZyA9IE1hdGgubWF4KDAsIGFuaW1hdGlvbi5zdGFydFRpbWUgKyBhbmltYXRpb24uZHVyYXRpb24gLSBjdXJyZW50VGltZSksXG4gICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zIG9ubHlcbiAgICAgICAgICAvLyBBcmNoYWljIGNyYXNoIGJ1ZyB3b24ndCBhbGxvdyB1cyB0byB1c2UgYDEgLSAoIDAuNSB8fCAwIClgICgjMTI0OTcpXG4gICAgICAgICAgdGVtcCA9IHJlbWFpbmluZyAvIGFuaW1hdGlvbi5kdXJhdGlvbiB8fCAwLFxuICAgICAgICAgICAgICBwZXJjZW50ID0gMSAtIHRlbXAsXG4gICAgICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICAgICAgbGVuZ3RoID0gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi50d2VlbnNbaW5kZXhdLnJ1bihwZXJjZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWZlcnJlZC5ub3RpZnlXaXRoKGVsZW0sIFthbmltYXRpb24sIHBlcmNlbnQsIHJlbWFpbmluZ10pOyAvLyBJZiB0aGVyZSdzIG1vcmUgdG8gZG8sIHlpZWxkXG5cbiAgICAgICAgICBpZiAocGVyY2VudCA8IDEgJiYgbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVtYWluaW5nO1xuICAgICAgICAgIH0gLy8gSWYgdGhpcyB3YXMgYW4gZW1wdHkgYW5pbWF0aW9uLCBzeW50aGVzaXplIGEgZmluYWwgcHJvZ3Jlc3Mgbm90aWZpY2F0aW9uXG5cblxuICAgICAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnlXaXRoKGVsZW0sIFthbmltYXRpb24sIDEsIDBdKTtcbiAgICAgICAgICB9IC8vIFJlc29sdmUgdGhlIGFuaW1hdGlvbiBhbmQgcmVwb3J0IGl0cyBjb25jbHVzaW9uXG5cblxuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmVXaXRoKGVsZW0sIFthbmltYXRpb25dKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRpb24gPSBkZWZlcnJlZC5wcm9taXNlKHtcbiAgICAgICAgICBlbGVtOiBlbGVtLFxuICAgICAgICAgIHByb3BzOiBqUXVlcnkuZXh0ZW5kKHt9LCBwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBvcHRzOiBqUXVlcnkuZXh0ZW5kKHRydWUsIHtcbiAgICAgICAgICAgIHNwZWNpYWxFYXNpbmc6IHt9LFxuICAgICAgICAgICAgZWFzaW5nOiBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0XG4gICAgICAgICAgfSwgb3B0aW9ucyksXG4gICAgICAgICAgb3JpZ2luYWxQcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG9yaWdpbmFsT3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICBzdGFydFRpbWU6IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG4gICAgICAgICAgZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgICAgdHdlZW5zOiBbXSxcbiAgICAgICAgICBjcmVhdGVUd2VlbjogZnVuY3Rpb24gY3JlYXRlVHdlZW4ocHJvcCwgZW5kKSB7XG4gICAgICAgICAgICB2YXIgdHdlZW4gPSBqUXVlcnkuVHdlZW4oZWxlbSwgYW5pbWF0aW9uLm9wdHMsIHByb3AsIGVuZCwgYW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZ1twcm9wXSB8fCBhbmltYXRpb24ub3B0cy5lYXNpbmcpO1xuICAgICAgICAgICAgYW5pbWF0aW9uLnR3ZWVucy5wdXNoKHR3ZWVuKTtcbiAgICAgICAgICAgIHJldHVybiB0d2VlbjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoZ290b0VuZCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBhcmUgZ29pbmcgdG8gdGhlIGVuZCwgd2Ugd2FudCB0byBydW4gYWxsIHRoZSB0d2VlbnNcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSB3ZSBza2lwIHRoaXMgcGFydFxuICAgICAgICAgICAgbGVuZ3RoID0gZ290b0VuZCA/IGFuaW1hdGlvbi50d2VlbnMubGVuZ3RoIDogMDtcblxuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLnR3ZWVuc1tpbmRleF0ucnVuKDEpO1xuICAgICAgICAgICAgfSAvLyBSZXNvbHZlIHdoZW4gd2UgcGxheWVkIHRoZSBsYXN0IGZyYW1lOyBvdGhlcndpc2UsIHJlamVjdFxuXG5cbiAgICAgICAgICAgIGlmIChnb3RvRW5kKSB7XG4gICAgICAgICAgICAgIGRlZmVycmVkLm5vdGlmeVdpdGgoZWxlbSwgW2FuaW1hdGlvbiwgMSwgMF0pO1xuICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlV2l0aChlbGVtLCBbYW5pbWF0aW9uLCBnb3RvRW5kXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3RXaXRoKGVsZW0sIFthbmltYXRpb24sIGdvdG9FbmRdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgICAgIHByb3BzID0gYW5pbWF0aW9uLnByb3BzO1xuXG4gICAgICAgIHByb3BGaWx0ZXIocHJvcHMsIGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmcpO1xuXG4gICAgICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHJlc3VsdCA9IEFuaW1hdGlvbi5wcmVmaWx0ZXJzW2luZGV4XS5jYWxsKGFuaW1hdGlvbiwgZWxlbSwgcHJvcHMsIGFuaW1hdGlvbi5vcHRzKTtcblxuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHJlc3VsdC5zdG9wKSkge1xuICAgICAgICAgICAgICBqUXVlcnkuX3F1ZXVlSG9va3MoYW5pbWF0aW9uLmVsZW0sIGFuaW1hdGlvbi5vcHRzLnF1ZXVlKS5zdG9wID0gcmVzdWx0LnN0b3AuYmluZChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeS5tYXAocHJvcHMsIGNyZWF0ZVR3ZWVuLCBhbmltYXRpb24pO1xuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGFuaW1hdGlvbi5vcHRzLnN0YXJ0KSkge1xuICAgICAgICAgIGFuaW1hdGlvbi5vcHRzLnN0YXJ0LmNhbGwoZWxlbSwgYW5pbWF0aW9uKTtcbiAgICAgICAgfSAvLyBBdHRhY2ggY2FsbGJhY2tzIGZyb20gb3B0aW9uc1xuXG5cbiAgICAgICAgYW5pbWF0aW9uLnByb2dyZXNzKGFuaW1hdGlvbi5vcHRzLnByb2dyZXNzKS5kb25lKGFuaW1hdGlvbi5vcHRzLmRvbmUsIGFuaW1hdGlvbi5vcHRzLmNvbXBsZXRlKS5mYWlsKGFuaW1hdGlvbi5vcHRzLmZhaWwpLmFsd2F5cyhhbmltYXRpb24ub3B0cy5hbHdheXMpO1xuICAgICAgICBqUXVlcnkuZngudGltZXIoalF1ZXJ5LmV4dGVuZCh0aWNrLCB7XG4gICAgICAgICAgZWxlbTogZWxlbSxcbiAgICAgICAgICBhbmltOiBhbmltYXRpb24sXG4gICAgICAgICAgcXVldWU6IGFuaW1hdGlvbi5vcHRzLnF1ZXVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgICAgIH1cblxuICAgICAgalF1ZXJ5LkFuaW1hdGlvbiA9IGpRdWVyeS5leHRlbmQoQW5pbWF0aW9uLCB7XG4gICAgICAgIHR3ZWVuZXJzOiB7XG4gICAgICAgICAgXCIqXCI6IFtmdW5jdGlvbiAocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciB0d2VlbiA9IHRoaXMuY3JlYXRlVHdlZW4ocHJvcCwgdmFsdWUpO1xuICAgICAgICAgICAgYWRqdXN0Q1NTKHR3ZWVuLmVsZW0sIHByb3AsIHJjc3NOdW0uZXhlYyh2YWx1ZSksIHR3ZWVuKTtcbiAgICAgICAgICAgIHJldHVybiB0d2VlbjtcbiAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICB0d2VlbmVyOiBmdW5jdGlvbiB0d2VlbmVyKHByb3BzLCBjYWxsYmFjaykge1xuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHByb3BzKSkge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBwcm9wcztcbiAgICAgICAgICAgIHByb3BzID0gW1wiKlwiXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcHMgPSBwcm9wcy5tYXRjaChybm90aHRtbHdoaXRlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcHJvcCxcbiAgICAgICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHByb3AgPSBwcm9wc1tpbmRleF07XG4gICAgICAgICAgICBBbmltYXRpb24udHdlZW5lcnNbcHJvcF0gPSBBbmltYXRpb24udHdlZW5lcnNbcHJvcF0gfHwgW107XG4gICAgICAgICAgICBBbmltYXRpb24udHdlZW5lcnNbcHJvcF0udW5zaGlmdChjYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcmVmaWx0ZXJzOiBbZGVmYXVsdFByZWZpbHRlcl0sXG4gICAgICAgIHByZWZpbHRlcjogZnVuY3Rpb24gcHJlZmlsdGVyKGNhbGxiYWNrLCBwcmVwZW5kKSB7XG4gICAgICAgICAgaWYgKHByZXBlbmQpIHtcbiAgICAgICAgICAgIEFuaW1hdGlvbi5wcmVmaWx0ZXJzLnVuc2hpZnQoY2FsbGJhY2spO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBBbmltYXRpb24ucHJlZmlsdGVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBqUXVlcnkuc3BlZWQgPSBmdW5jdGlvbiAoc3BlZWQsIGVhc2luZywgZm4pIHtcbiAgICAgICAgdmFyIG9wdCA9IHNwZWVkICYmIF90eXBlb2Yoc3BlZWQpID09PSBcIm9iamVjdFwiID8galF1ZXJ5LmV4dGVuZCh7fSwgc3BlZWQpIDoge1xuICAgICAgICAgIGNvbXBsZXRlOiBmbiB8fCAhZm4gJiYgZWFzaW5nIHx8IGlzRnVuY3Rpb24oc3BlZWQpICYmIHNwZWVkLFxuICAgICAgICAgIGR1cmF0aW9uOiBzcGVlZCxcbiAgICAgICAgICBlYXNpbmc6IGZuICYmIGVhc2luZyB8fCBlYXNpbmcgJiYgIWlzRnVuY3Rpb24oZWFzaW5nKSAmJiBlYXNpbmdcbiAgICAgICAgfTsgLy8gR28gdG8gdGhlIGVuZCBzdGF0ZSBpZiBmeCBhcmUgb2ZmXG5cbiAgICAgICAgaWYgKGpRdWVyeS5meC5vZmYpIHtcbiAgICAgICAgICBvcHQuZHVyYXRpb24gPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0LmR1cmF0aW9uICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBpZiAob3B0LmR1cmF0aW9uIGluIGpRdWVyeS5meC5zcGVlZHMpIHtcbiAgICAgICAgICAgICAgb3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkc1tvcHQuZHVyYXRpb25dO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkcy5fZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gTm9ybWFsaXplIG9wdC5xdWV1ZSAtIHRydWUvdW5kZWZpbmVkL251bGwgLT4gXCJmeFwiXG5cblxuICAgICAgICBpZiAob3B0LnF1ZXVlID09IG51bGwgfHwgb3B0LnF1ZXVlID09PSB0cnVlKSB7XG4gICAgICAgICAgb3B0LnF1ZXVlID0gXCJmeFwiO1xuICAgICAgICB9IC8vIFF1ZXVlaW5nXG5cblxuICAgICAgICBvcHQub2xkID0gb3B0LmNvbXBsZXRlO1xuXG4gICAgICAgIG9wdC5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoaXNGdW5jdGlvbihvcHQub2xkKSkge1xuICAgICAgICAgICAgb3B0Lm9sZC5jYWxsKHRoaXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHQucXVldWUpIHtcbiAgICAgICAgICAgIGpRdWVyeS5kZXF1ZXVlKHRoaXMsIG9wdC5xdWV1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBvcHQ7XG4gICAgICB9O1xuXG4gICAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgICAgZmFkZVRvOiBmdW5jdGlvbiBmYWRlVG8oc3BlZWQsIHRvLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgLy8gU2hvdyBhbnkgaGlkZGVuIGVsZW1lbnRzIGFmdGVyIHNldHRpbmcgb3BhY2l0eSB0byAwXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKGlzSGlkZGVuV2l0aGluVHJlZSkuY3NzKFwib3BhY2l0eVwiLCAwKS5zaG93KCkgLy8gQW5pbWF0ZSB0byB0aGUgdmFsdWUgc3BlY2lmaWVkXG4gICAgICAgICAgLmVuZCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogdG9cbiAgICAgICAgICB9LCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGFuaW1hdGU6IGZ1bmN0aW9uIGFuaW1hdGUocHJvcCwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgICAgICB2YXIgZW1wdHkgPSBqUXVlcnkuaXNFbXB0eU9iamVjdChwcm9wKSxcbiAgICAgICAgICAgICAgb3B0YWxsID0galF1ZXJ5LnNwZWVkKHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrKSxcbiAgICAgICAgICAgICAgZG9BbmltYXRpb24gPSBmdW5jdGlvbiBkb0FuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIC8vIE9wZXJhdGUgb24gYSBjb3B5IG9mIHByb3Agc28gcGVyLXByb3BlcnR5IGVhc2luZyB3b24ndCBiZSBsb3N0XG4gICAgICAgICAgICB2YXIgYW5pbSA9IEFuaW1hdGlvbih0aGlzLCBqUXVlcnkuZXh0ZW5kKHt9LCBwcm9wKSwgb3B0YWxsKTsgLy8gRW1wdHkgYW5pbWF0aW9ucywgb3IgZmluaXNoaW5nIHJlc29sdmVzIGltbWVkaWF0ZWx5XG5cbiAgICAgICAgICAgIGlmIChlbXB0eSB8fCBkYXRhUHJpdi5nZXQodGhpcywgXCJmaW5pc2hcIikpIHtcbiAgICAgICAgICAgICAgYW5pbS5zdG9wKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBkb0FuaW1hdGlvbi5maW5pc2ggPSBkb0FuaW1hdGlvbjtcbiAgICAgICAgICByZXR1cm4gZW1wdHkgfHwgb3B0YWxsLnF1ZXVlID09PSBmYWxzZSA/IHRoaXMuZWFjaChkb0FuaW1hdGlvbikgOiB0aGlzLnF1ZXVlKG9wdGFsbC5xdWV1ZSwgZG9BbmltYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKHR5cGUsIGNsZWFyUXVldWUsIGdvdG9FbmQpIHtcbiAgICAgICAgICB2YXIgc3RvcFF1ZXVlID0gZnVuY3Rpb24gc3RvcFF1ZXVlKGhvb2tzKSB7XG4gICAgICAgICAgICB2YXIgc3RvcCA9IGhvb2tzLnN0b3A7XG4gICAgICAgICAgICBkZWxldGUgaG9va3Muc3RvcDtcbiAgICAgICAgICAgIHN0b3AoZ290b0VuZCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZ290b0VuZCA9IGNsZWFyUXVldWU7XG4gICAgICAgICAgICBjbGVhclF1ZXVlID0gdHlwZTtcbiAgICAgICAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNsZWFyUXVldWUgJiYgdHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUodHlwZSB8fCBcImZ4XCIsIFtdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkZXF1ZXVlID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbmRleCA9IHR5cGUgIT0gbnVsbCAmJiB0eXBlICsgXCJxdWV1ZUhvb2tzXCIsXG4gICAgICAgICAgICAgICAgdGltZXJzID0galF1ZXJ5LnRpbWVycyxcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YVByaXYuZ2V0KHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGFbaW5kZXhdICYmIGRhdGFbaW5kZXhdLnN0b3ApIHtcbiAgICAgICAgICAgICAgICBzdG9wUXVldWUoZGF0YVtpbmRleF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKGluZGV4IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtpbmRleF0gJiYgZGF0YVtpbmRleF0uc3RvcCAmJiBycnVuLnRlc3QoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICBzdG9wUXVldWUoZGF0YVtpbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTspIHtcbiAgICAgICAgICAgICAgaWYgKHRpbWVyc1tpbmRleF0uZWxlbSA9PT0gdGhpcyAmJiAodHlwZSA9PSBudWxsIHx8IHRpbWVyc1tpbmRleF0ucXVldWUgPT09IHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgdGltZXJzW2luZGV4XS5hbmltLnN0b3AoZ290b0VuZCk7XG4gICAgICAgICAgICAgICAgZGVxdWV1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRpbWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIFN0YXJ0IHRoZSBuZXh0IGluIHRoZSBxdWV1ZSBpZiB0aGUgbGFzdCBzdGVwIHdhc24ndCBmb3JjZWQuXG4gICAgICAgICAgICAvLyBUaW1lcnMgY3VycmVudGx5IHdpbGwgY2FsbCB0aGVpciBjb21wbGV0ZSBjYWxsYmFja3MsIHdoaWNoXG4gICAgICAgICAgICAvLyB3aWxsIGRlcXVldWUgYnV0IG9ubHkgaWYgdGhleSB3ZXJlIGdvdG9FbmQuXG5cblxuICAgICAgICAgICAgaWYgKGRlcXVldWUgfHwgIWdvdG9FbmQpIHtcbiAgICAgICAgICAgICAgalF1ZXJ5LmRlcXVldWUodGhpcywgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKHR5cGUpIHtcbiAgICAgICAgICBpZiAodHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCxcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YVByaXYuZ2V0KHRoaXMpLFxuICAgICAgICAgICAgICAgIHF1ZXVlID0gZGF0YVt0eXBlICsgXCJxdWV1ZVwiXSxcbiAgICAgICAgICAgICAgICBob29rcyA9IGRhdGFbdHlwZSArIFwicXVldWVIb29rc1wiXSxcbiAgICAgICAgICAgICAgICB0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHF1ZXVlID8gcXVldWUubGVuZ3RoIDogMDsgLy8gRW5hYmxlIGZpbmlzaGluZyBmbGFnIG9uIHByaXZhdGUgZGF0YVxuXG4gICAgICAgICAgICBkYXRhLmZpbmlzaCA9IHRydWU7IC8vIEVtcHR5IHRoZSBxdWV1ZSBmaXJzdFxuXG4gICAgICAgICAgICBqUXVlcnkucXVldWUodGhpcywgdHlwZSwgW10pO1xuXG4gICAgICAgICAgICBpZiAoaG9va3MgJiYgaG9va3Muc3RvcCkge1xuICAgICAgICAgICAgICBob29rcy5zdG9wLmNhbGwodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICB9IC8vIExvb2sgZm9yIGFueSBhY3RpdmUgYW5pbWF0aW9ucywgYW5kIGZpbmlzaCB0aGVtXG5cblxuICAgICAgICAgICAgZm9yIChpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07KSB7XG4gICAgICAgICAgICAgIGlmICh0aW1lcnNbaW5kZXhdLmVsZW0gPT09IHRoaXMgJiYgdGltZXJzW2luZGV4XS5xdWV1ZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHRpbWVyc1tpbmRleF0uYW5pbS5zdG9wKHRydWUpO1xuICAgICAgICAgICAgICAgIHRpbWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIExvb2sgZm9yIGFueSBhbmltYXRpb25zIGluIHRoZSBvbGQgcXVldWUgYW5kIGZpbmlzaCB0aGVtXG5cblxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGlmIChxdWV1ZVtpbmRleF0gJiYgcXVldWVbaW5kZXhdLmZpbmlzaCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlW2luZGV4XS5maW5pc2guY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyBUdXJuIG9mZiBmaW5pc2hpbmcgZmxhZ1xuXG5cbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhLmZpbmlzaDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkuZWFjaChbXCJ0b2dnbGVcIiwgXCJzaG93XCIsIFwiaGlkZVwiXSwgZnVuY3Rpb24gKGksIG5hbWUpIHtcbiAgICAgICAgdmFyIGNzc0ZuID0galF1ZXJ5LmZuW25hbWVdO1xuXG4gICAgICAgIGpRdWVyeS5mbltuYW1lXSA9IGZ1bmN0aW9uIChzcGVlZCwgZWFzaW5nLCBjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVybiBzcGVlZCA9PSBudWxsIHx8IHR5cGVvZiBzcGVlZCA9PT0gXCJib29sZWFuXCIgPyBjc3NGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogdGhpcy5hbmltYXRlKGdlbkZ4KG5hbWUsIHRydWUpLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgICB9KTsgLy8gR2VuZXJhdGUgc2hvcnRjdXRzIGZvciBjdXN0b20gYW5pbWF0aW9uc1xuXG4gICAgICBqUXVlcnkuZWFjaCh7XG4gICAgICAgIHNsaWRlRG93bjogZ2VuRngoXCJzaG93XCIpLFxuICAgICAgICBzbGlkZVVwOiBnZW5GeChcImhpZGVcIiksXG4gICAgICAgIHNsaWRlVG9nZ2xlOiBnZW5GeChcInRvZ2dsZVwiKSxcbiAgICAgICAgZmFkZUluOiB7XG4gICAgICAgICAgb3BhY2l0eTogXCJzaG93XCJcbiAgICAgICAgfSxcbiAgICAgICAgZmFkZU91dDoge1xuICAgICAgICAgIG9wYWNpdHk6IFwiaGlkZVwiXG4gICAgICAgIH0sXG4gICAgICAgIGZhZGVUb2dnbGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiBcInRvZ2dsZVwiXG4gICAgICAgIH1cbiAgICAgIH0sIGZ1bmN0aW9uIChuYW1lLCBwcm9wcykge1xuICAgICAgICBqUXVlcnkuZm5bbmFtZV0gPSBmdW5jdGlvbiAoc3BlZWQsIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRlKHByb3BzLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeS50aW1lcnMgPSBbXTtcblxuICAgICAgalF1ZXJ5LmZ4LnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0aW1lcixcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgdGltZXJzID0galF1ZXJ5LnRpbWVycztcbiAgICAgICAgZnhOb3cgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgdGltZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGltZXIgPSB0aW1lcnNbaV07IC8vIFJ1biB0aGUgdGltZXIgYW5kIHNhZmVseSByZW1vdmUgaXQgd2hlbiBkb25lIChhbGxvd2luZyBmb3IgZXh0ZXJuYWwgcmVtb3ZhbClcblxuICAgICAgICAgIGlmICghdGltZXIoKSAmJiB0aW1lcnNbaV0gPT09IHRpbWVyKSB7XG4gICAgICAgICAgICB0aW1lcnMuc3BsaWNlKGktLSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aW1lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgalF1ZXJ5LmZ4LnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ4Tm93ID0gdW5kZWZpbmVkO1xuICAgICAgfTtcblxuICAgICAgalF1ZXJ5LmZ4LnRpbWVyID0gZnVuY3Rpb24gKHRpbWVyKSB7XG4gICAgICAgIGpRdWVyeS50aW1lcnMucHVzaCh0aW1lcik7XG4gICAgICAgIGpRdWVyeS5meC5zdGFydCgpO1xuICAgICAgfTtcblxuICAgICAgalF1ZXJ5LmZ4LmludGVydmFsID0gMTM7XG5cbiAgICAgIGpRdWVyeS5meC5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgc2NoZWR1bGUoKTtcbiAgICAgIH07XG5cbiAgICAgIGpRdWVyeS5meC5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpblByb2dyZXNzID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGpRdWVyeS5meC5zcGVlZHMgPSB7XG4gICAgICAgIHNsb3c6IDYwMCxcbiAgICAgICAgZmFzdDogMjAwLFxuICAgICAgICAvLyBEZWZhdWx0IHNwZWVkXG4gICAgICAgIF9kZWZhdWx0OiA0MDBcbiAgICAgIH07IC8vIEJhc2VkIG9mZiBvZiB0aGUgcGx1Z2luIGJ5IENsaW50IEhlbGZlcnMsIHdpdGggcGVybWlzc2lvbi5cbiAgICAgIC8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDEwMDMyNDAxNDc0Ny9odHRwOi8vYmxpbmRzaWduYWxzLmNvbS9pbmRleC5waHAvMjAwOS8wNy9qcXVlcnktZGVsYXkvXG5cbiAgICAgIGpRdWVyeS5mbi5kZWxheSA9IGZ1bmN0aW9uICh0aW1lLCB0eXBlKSB7XG4gICAgICAgIHRpbWUgPSBqUXVlcnkuZnggPyBqUXVlcnkuZnguc3BlZWRzW3RpbWVdIHx8IHRpbWUgOiB0aW1lO1xuICAgICAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXVlKHR5cGUsIGZ1bmN0aW9uIChuZXh0LCBob29rcykge1xuICAgICAgICAgIHZhciB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQobmV4dCwgdGltZSk7XG5cbiAgICAgICAgICBob29rcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcbiAgICAgICAgICAgIHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXG4gICAgICAgICAgICBvcHQgPSBzZWxlY3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7XG4gICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7IC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjMgb25seVxuICAgICAgICAvLyBEZWZhdWx0IHZhbHVlIGZvciBhIGNoZWNrYm94IHNob3VsZCBiZSBcIm9uXCJcblxuICAgICAgICBzdXBwb3J0LmNoZWNrT24gPSBpbnB1dC52YWx1ZSAhPT0gXCJcIjsgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4gICAgICAgIC8vIE11c3QgYWNjZXNzIHNlbGVjdGVkSW5kZXggdG8gbWFrZSBkZWZhdWx0IG9wdGlvbnMgc2VsZWN0XG5cbiAgICAgICAgc3VwcG9ydC5vcHRTZWxlY3RlZCA9IG9wdC5zZWxlY3RlZDsgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4gICAgICAgIC8vIEFuIGlucHV0IGxvc2VzIGl0cyB2YWx1ZSBhZnRlciBiZWNvbWluZyBhIHJhZGlvXG5cbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJ0XCI7XG4gICAgICAgIGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIHN1cHBvcnQucmFkaW9WYWx1ZSA9IGlucHV0LnZhbHVlID09PSBcInRcIjtcbiAgICAgIH0pKCk7XG5cbiAgICAgIHZhciBib29sSG9vayxcbiAgICAgICAgICBhdHRySGFuZGxlID0galF1ZXJ5LmV4cHIuYXR0ckhhbmRsZTtcbiAgICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICBhdHRyOiBmdW5jdGlvbiBhdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBqUXVlcnkuYXR0ciwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gcmVtb3ZlQXR0cihuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkucmVtb3ZlQXR0cih0aGlzLCBuYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkuZXh0ZW5kKHtcbiAgICAgICAgYXR0cjogZnVuY3Rpb24gYXR0cihlbGVtLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgIHZhciByZXQsXG4gICAgICAgICAgICAgIGhvb2tzLFxuICAgICAgICAgICAgICBuVHlwZSA9IGVsZW0ubm9kZVR5cGU7IC8vIERvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblxuICAgICAgICAgIGlmIChuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gRmFsbGJhY2sgdG8gcHJvcCB3aGVuIGF0dHJpYnV0ZXMgYXJlIG5vdCBzdXBwb3J0ZWRcblxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5wcm9wKGVsZW0sIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9IC8vIEF0dHJpYnV0ZSBob29rcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgbG93ZXJjYXNlIHZlcnNpb25cbiAgICAgICAgICAvLyBHcmFiIG5lY2Vzc2FyeSBob29rIGlmIG9uZSBpcyBkZWZpbmVkXG5cblxuICAgICAgICAgIGlmIChuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKGVsZW0pKSB7XG4gICAgICAgICAgICBob29rcyA9IGpRdWVyeS5hdHRySG9va3NbbmFtZS50b0xvd2VyQ2FzZSgpXSB8fCAoalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC50ZXN0KG5hbWUpID8gYm9vbEhvb2sgOiB1bmRlZmluZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgalF1ZXJ5LnJlbW92ZUF0dHIoZWxlbSwgbmFtZSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLnNldChlbGVtLCB2YWx1ZSwgbmFtZSkpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgKyBcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KGVsZW0sIG5hbWUpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXQgPSBqUXVlcnkuZmluZC5hdHRyKGVsZW0sIG5hbWUpOyAvLyBOb24tZXhpc3RlbnQgYXR0cmlidXRlcyByZXR1cm4gbnVsbCwgd2Ugbm9ybWFsaXplIHRvIHVuZGVmaW5lZFxuXG4gICAgICAgICAgcmV0dXJuIHJldCA9PSBudWxsID8gdW5kZWZpbmVkIDogcmV0O1xuICAgICAgICB9LFxuICAgICAgICBhdHRySG9va3M6IHtcbiAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChlbGVtLCB2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoIXN1cHBvcnQucmFkaW9WYWx1ZSAmJiB2YWx1ZSA9PT0gXCJyYWRpb1wiICYmIG5vZGVOYW1lKGVsZW0sIFwiaW5wdXRcIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gZWxlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgZWxlbS52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uIHJlbW92ZUF0dHIoZWxlbSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgbmFtZSxcbiAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgIC8vIEF0dHJpYnV0ZSBuYW1lcyBjYW4gY29udGFpbiBub24tSFRNTCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcbiAgICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbiAgICAgICAgICBhdHRyTmFtZXMgPSB2YWx1ZSAmJiB2YWx1ZS5tYXRjaChybm90aHRtbHdoaXRlKTtcblxuICAgICAgICAgIGlmIChhdHRyTmFtZXMgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgd2hpbGUgKG5hbWUgPSBhdHRyTmFtZXNbaSsrXSkge1xuICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBIb29rcyBmb3IgYm9vbGVhbiBhdHRyaWJ1dGVzXG5cbiAgICAgIGJvb2xIb29rID0ge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChlbGVtLCB2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBib29sZWFuIGF0dHJpYnV0ZXMgd2hlbiBzZXQgdG8gZmFsc2VcbiAgICAgICAgICAgIGpRdWVyeS5yZW1vdmVBdHRyKGVsZW0sIG5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCBuYW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGpRdWVyeS5lYWNoKGpRdWVyeS5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLCBmdW5jdGlvbiAoaSwgbmFtZSkge1xuICAgICAgICB2YXIgZ2V0dGVyID0gYXR0ckhhbmRsZVtuYW1lXSB8fCBqUXVlcnkuZmluZC5hdHRyO1xuXG4gICAgICAgIGF0dHJIYW5kbGVbbmFtZV0gPSBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgaXNYTUwpIHtcbiAgICAgICAgICB2YXIgcmV0LFxuICAgICAgICAgICAgICBoYW5kbGUsXG4gICAgICAgICAgICAgIGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoIWlzWE1MKSB7XG4gICAgICAgICAgICAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wIGJ5IHRlbXBvcmFyaWx5IHJlbW92aW5nIHRoaXMgZnVuY3Rpb24gZnJvbSB0aGUgZ2V0dGVyXG4gICAgICAgICAgICBoYW5kbGUgPSBhdHRySGFuZGxlW2xvd2VyY2FzZU5hbWVdO1xuICAgICAgICAgICAgYXR0ckhhbmRsZVtsb3dlcmNhc2VOYW1lXSA9IHJldDtcbiAgICAgICAgICAgIHJldCA9IGdldHRlcihlbGVtLCBuYW1lLCBpc1hNTCkgIT0gbnVsbCA/IGxvd2VyY2FzZU5hbWUgOiBudWxsO1xuICAgICAgICAgICAgYXR0ckhhbmRsZVtsb3dlcmNhc2VOYW1lXSA9IGhhbmRsZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB2YXIgcmZvY3VzYWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksXG4gICAgICAgICAgcmNsaWNrYWJsZSA9IC9eKD86YXxhcmVhKSQvaTtcbiAgICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICBwcm9wOiBmdW5jdGlvbiBwcm9wKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBqUXVlcnkucHJvcCwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlUHJvcDogZnVuY3Rpb24gcmVtb3ZlUHJvcChuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpc1tqUXVlcnkucHJvcEZpeFtuYW1lXSB8fCBuYW1lXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkuZXh0ZW5kKHtcbiAgICAgICAgcHJvcDogZnVuY3Rpb24gcHJvcChlbGVtLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgIHZhciByZXQsXG4gICAgICAgICAgICAgIGhvb2tzLFxuICAgICAgICAgICAgICBuVHlwZSA9IGVsZW0ubm9kZVR5cGU7IC8vIERvbid0IGdldC9zZXQgcHJvcGVydGllcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblxuICAgICAgICAgIGlmIChuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKGVsZW0pKSB7XG4gICAgICAgICAgICAvLyBGaXggbmFtZSBhbmQgYXR0YWNoIGhvb2tzXG4gICAgICAgICAgICBuYW1lID0galF1ZXJ5LnByb3BGaXhbbmFtZV0gfHwgbmFtZTtcbiAgICAgICAgICAgIGhvb2tzID0galF1ZXJ5LnByb3BIb29rc1tuYW1lXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLnNldChlbGVtLCB2YWx1ZSwgbmFtZSkpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1bbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KGVsZW0sIG5hbWUpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbVtuYW1lXTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcEhvb2tzOiB7XG4gICAgICAgICAgdGFiSW5kZXg6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGVsZW0pIHtcbiAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuICAgICAgICAgICAgICAvLyBlbGVtLnRhYkluZGV4IGRvZXNuJ3QgYWx3YXlzIHJldHVybiB0aGVcbiAgICAgICAgICAgICAgLy8gY29ycmVjdCB2YWx1ZSB3aGVuIGl0IGhhc24ndCBiZWVuIGV4cGxpY2l0bHkgc2V0XG4gICAgICAgICAgICAgIC8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDE0MTExNjIzMzM0Ny9odHRwOi8vZmx1aWRwcm9qZWN0Lm9yZy9ibG9nLzIwMDgvMDEvMDkvZ2V0dGluZy1zZXR0aW5nLWFuZC1yZW1vdmluZy10YWJpbmRleC12YWx1ZXMtd2l0aC1qYXZhc2NyaXB0L1xuICAgICAgICAgICAgICAvLyBVc2UgcHJvcGVyIGF0dHJpYnV0ZSByZXRyaWV2YWwoIzEyMDcyKVxuICAgICAgICAgICAgICB2YXIgdGFiaW5kZXggPSBqUXVlcnkuZmluZC5hdHRyKGVsZW0sIFwidGFiaW5kZXhcIik7XG5cbiAgICAgICAgICAgICAgaWYgKHRhYmluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRhYmluZGV4LCAxMCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAocmZvY3VzYWJsZS50ZXN0KGVsZW0ubm9kZU5hbWUpIHx8IHJjbGlja2FibGUudGVzdChlbGVtLm5vZGVOYW1lKSAmJiBlbGVtLmhyZWYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BGaXg6IHtcbiAgICAgICAgICBcImZvclwiOiBcImh0bWxGb3JcIixcbiAgICAgICAgICBcImNsYXNzXCI6IFwiY2xhc3NOYW1lXCJcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuICAgICAgLy8gQWNjZXNzaW5nIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5XG4gICAgICAvLyBmb3JjZXMgdGhlIGJyb3dzZXIgdG8gcmVzcGVjdCBzZXR0aW5nIHNlbGVjdGVkXG4gICAgICAvLyBvbiB0aGUgb3B0aW9uXG4gICAgICAvLyBUaGUgZ2V0dGVyIGVuc3VyZXMgYSBkZWZhdWx0IG9wdGlvbiBpcyBzZWxlY3RlZFxuICAgICAgLy8gd2hlbiBpbiBhbiBvcHRncm91cFxuICAgICAgLy8gZXNsaW50IHJ1bGUgXCJuby11bnVzZWQtZXhwcmVzc2lvbnNcIiBpcyBkaXNhYmxlZCBmb3IgdGhpcyBjb2RlXG4gICAgICAvLyBzaW5jZSBpdCBjb25zaWRlcnMgc3VjaCBhY2Nlc3Npb25zIG5vb3BcblxuICAgICAgaWYgKCFzdXBwb3J0Lm9wdFNlbGVjdGVkKSB7XG4gICAgICAgIGpRdWVyeS5wcm9wSG9va3Muc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoZWxlbSkge1xuICAgICAgICAgICAgLyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICBwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGVsZW0pIHtcbiAgICAgICAgICAgIC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgcGFyZW50LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgaWYgKHBhcmVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgalF1ZXJ5LmVhY2goW1widGFiSW5kZXhcIiwgXCJyZWFkT25seVwiLCBcIm1heExlbmd0aFwiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJyb3dTcGFuXCIsIFwiY29sU3BhblwiLCBcInVzZU1hcFwiLCBcImZyYW1lQm9yZGVyXCIsIFwiY29udGVudEVkaXRhYmxlXCJdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeS5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV0gPSB0aGlzO1xuICAgICAgfSk7IC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlIGFjY29yZGluZyB0byBIVE1MIHNwZWNcbiAgICAgIC8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2UtYXNjaWktd2hpdGVzcGFjZVxuXG4gICAgICBmdW5jdGlvbiBzdHJpcEFuZENvbGxhcHNlKHZhbHVlKSB7XG4gICAgICAgIHZhciB0b2tlbnMgPSB2YWx1ZS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHRva2Vucy5qb2luKFwiIFwiKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0Q2xhc3MoZWxlbSkge1xuICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjbGFzc2VzVG9BcnJheSh2YWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIGFkZENsYXNzKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIGNsYXNzZXMsXG4gICAgICAgICAgICAgIGVsZW0sXG4gICAgICAgICAgICAgIGN1cixcbiAgICAgICAgICAgICAgY3VyVmFsdWUsXG4gICAgICAgICAgICAgIGNsYXp6LFxuICAgICAgICAgICAgICBqLFxuICAgICAgICAgICAgICBmaW5hbFZhbHVlLFxuICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaikge1xuICAgICAgICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3ModmFsdWUuY2FsbCh0aGlzLCBqLCBnZXRDbGFzcyh0aGlzKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXNUb0FycmF5KHZhbHVlKTtcblxuICAgICAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0gPSB0aGlzW2krK10pIHtcbiAgICAgICAgICAgICAgY3VyVmFsdWUgPSBnZXRDbGFzcyhlbGVtKTtcbiAgICAgICAgICAgICAgY3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoY3VyVmFsdWUpICsgXCIgXCI7XG5cbiAgICAgICAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgICAgIGogPSAwO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY3VyLmluZGV4T2YoXCIgXCIgKyBjbGF6eiArIFwiIFwiKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyICs9IGNsYXp6ICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXG5cbiAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZShjdXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1clZhbHVlICE9PSBmaW5hbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGZpbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3ModmFsdWUpIHtcbiAgICAgICAgICB2YXIgY2xhc3NlcyxcbiAgICAgICAgICAgICAgZWxlbSxcbiAgICAgICAgICAgICAgY3VyLFxuICAgICAgICAgICAgICBjdXJWYWx1ZSxcbiAgICAgICAgICAgICAgY2xhenosXG4gICAgICAgICAgICAgIGosXG4gICAgICAgICAgICAgIGZpbmFsVmFsdWUsXG4gICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChqKSB7XG4gICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcyh2YWx1ZS5jYWxsKHRoaXMsIGosIGdldENsYXNzKHRoaXMpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjbGFzc2VzID0gY2xhc3Nlc1RvQXJyYXkodmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbSA9IHRoaXNbaSsrXSkge1xuICAgICAgICAgICAgICBjdXJWYWx1ZSA9IGdldENsYXNzKGVsZW0pOyAvLyBUaGlzIGV4cHJlc3Npb24gaXMgaGVyZSBmb3IgYmV0dGVyIGNvbXByZXNzaWJpbGl0eSAoc2VlIGFkZENsYXNzKVxuXG4gICAgICAgICAgICAgIGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKGN1clZhbHVlKSArIFwiIFwiO1xuXG4gICAgICAgICAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgICAgICAgICBqID0gMDtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChjbGF6eiA9IGNsYXNzZXNbaisrXSkge1xuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlICphbGwqIGluc3RhbmNlc1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKFwiIFwiICsgY2xhenogKyBcIiBcIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZShcIiBcIiArIGNsYXp6ICsgXCIgXCIsIFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG5cblxuICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKGN1cik7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VyVmFsdWUgIT09IGZpbmFsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZmluYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiB0b2dnbGVDbGFzcyh2YWx1ZSwgc3RhdGVWYWwpIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IF90eXBlb2YodmFsdWUpLFxuICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0eXBlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZVZhbCA9PT0gXCJib29sZWFuXCIgJiYgaXNWYWxpZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKHZhbHVlKSA6IHRoaXMucmVtb3ZlQ2xhc3ModmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICBqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3ModmFsdWUuY2FsbCh0aGlzLCBpLCBnZXRDbGFzcyh0aGlzKSwgc3RhdGVWYWwpLCBzdGF0ZVZhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUsIGksIHNlbGYsIGNsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgIGlmIChpc1ZhbGlkVmFsdWUpIHtcbiAgICAgICAgICAgICAgLy8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcbiAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgIHNlbGYgPSBqUXVlcnkodGhpcyk7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZXMgPSBjbGFzc2VzVG9BcnJheSh2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgd2hpbGUgKGNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbaSsrXSkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGVhY2ggY2xhc3NOYW1lIGdpdmVuLCBzcGFjZSBzZXBhcmF0ZWQgbGlzdFxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSAvLyBUb2dnbGUgd2hvbGUgY2xhc3MgbmFtZVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2V0Q2xhc3ModGhpcyk7XG5cbiAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGNsYXNzTmFtZSBpZiBzZXRcbiAgICAgICAgICAgICAgICBkYXRhUHJpdi5zZXQodGhpcywgXCJfX2NsYXNzTmFtZV9fXCIsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgIH0gLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZSBvciBpZiB3ZSdyZSBwYXNzZWQgYGZhbHNlYCxcbiAgICAgICAgICAgICAgLy8gdGhlbiByZW1vdmUgdGhlIHdob2xlIGNsYXNzbmFtZSAoaWYgdGhlcmUgd2FzIG9uZSwgdGhlIGFib3ZlIHNhdmVkIGl0KS5cbiAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGJyaW5nIGJhY2sgd2hhdGV2ZXIgd2FzIHByZXZpb3VzbHkgc2F2ZWQgKGlmIGFueXRoaW5nKSxcbiAgICAgICAgICAgICAgLy8gZmFsbGluZyBiYWNrIHRvIHRoZSBlbXB0eSBzdHJpbmcgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuXG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0QXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzc05hbWUgfHwgdmFsdWUgPT09IGZhbHNlID8gXCJcIiA6IGRhdGFQcml2LmdldCh0aGlzLCBcIl9fY2xhc3NOYW1lX19cIikgfHwgXCJcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIGhhc0NsYXNzKHNlbGVjdG9yKSB7XG4gICAgICAgICAgdmFyIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgZWxlbSxcbiAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgY2xhc3NOYW1lID0gXCIgXCIgKyBzZWxlY3RvciArIFwiIFwiO1xuXG4gICAgICAgICAgd2hpbGUgKGVsZW0gPSB0aGlzW2krK10pIHtcbiAgICAgICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAxICYmIChcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoZ2V0Q2xhc3MoZWxlbSkpICsgXCIgXCIpLmluZGV4T2YoY2xhc3NOYW1lKSA+IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB2YXIgcnJldHVybiA9IC9cXHIvZztcbiAgICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICB2YWw6IGZ1bmN0aW9uIHZhbCh2YWx1ZSkge1xuICAgICAgICAgIHZhciBob29rcyxcbiAgICAgICAgICAgICAgcmV0LFxuICAgICAgICAgICAgICB2YWx1ZUlzRnVuY3Rpb24sXG4gICAgICAgICAgICAgIGVsZW0gPSB0aGlzWzBdO1xuXG4gICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgICBob29rcyA9IGpRdWVyeS52YWxIb29rc1tlbGVtLnR5cGVdIHx8IGpRdWVyeS52YWxIb29rc1tlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgICAgICAgIGlmIChob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoZWxlbSwgXCJ2YWx1ZVwiKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXQgPSBlbGVtLnZhbHVlOyAvLyBIYW5kbGUgbW9zdCBjb21tb24gc3RyaW5nIGNhc2VzXG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0LnJlcGxhY2UocnJldHVybiwgXCJcIik7XG4gICAgICAgICAgICAgIH0gLy8gSGFuZGxlIGNhc2VzIHdoZXJlIHZhbHVlIGlzIG51bGwvdW5kZWYgb3IgbnVtYmVyXG5cblxuICAgICAgICAgICAgICByZXR1cm4gcmV0ID09IG51bGwgPyBcIlwiIDogcmV0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFsdWVJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbih2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIHZhbDtcblxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWVJc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgIHZhbCA9IHZhbHVlLmNhbGwodGhpcywgaSwgalF1ZXJ5KHRoaXMpLnZhbCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgfSAvLyBUcmVhdCBudWxsL3VuZGVmaW5lZCBhcyBcIlwiOyBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5nXG5cblxuICAgICAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHZhbCA9IFwiXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgdmFsICs9IFwiXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgICB2YWwgPSBqUXVlcnkubWFwKHZhbCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaG9va3MgPSBqUXVlcnkudmFsSG9va3NbdGhpcy50eXBlXSB8fCBqUXVlcnkudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXTsgLy8gSWYgc2V0IHJldHVybnMgdW5kZWZpbmVkLCBmYWxsIGJhY2sgdG8gbm9ybWFsIHNldHRpbmdcblxuICAgICAgICAgICAgaWYgKCFob29rcyB8fCAhKFwic2V0XCIgaW4gaG9va3MpIHx8IGhvb2tzLnNldCh0aGlzLCB2YWwsIFwidmFsdWVcIikgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeS5leHRlbmQoe1xuICAgICAgICB2YWxIb29rczoge1xuICAgICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoZWxlbSkge1xuICAgICAgICAgICAgICB2YXIgdmFsID0galF1ZXJ5LmZpbmQuYXR0cihlbGVtLCBcInZhbHVlXCIpO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsICE9IG51bGwgPyB2YWwgOiAvLyBTdXBwb3J0OiBJRSA8PTEwIC0gMTEgb25seVxuICAgICAgICAgICAgICAvLyBvcHRpb24udGV4dCB0aHJvd3MgZXhjZXB0aW9ucyAoIzE0Njg2LCAjMTQ4NTgpXG4gICAgICAgICAgICAgIC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlXG4gICAgICAgICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3N0cmlwLWFuZC1jb2xsYXBzZS13aGl0ZXNwYWNlXG4gICAgICAgICAgICAgIHN0cmlwQW5kQ29sbGFwc2UoalF1ZXJ5LnRleHQoZWxlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldChlbGVtKSB7XG4gICAgICAgICAgICAgIHZhciB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICBvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgaW5kZXggPSBlbGVtLnNlbGVjdGVkSW5kZXgsXG4gICAgICAgICAgICAgICAgICBvbmUgPSBlbGVtLnR5cGUgPT09IFwic2VsZWN0LW9uZVwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWVzID0gb25lID8gbnVsbCA6IFtdLFxuICAgICAgICAgICAgICAgICAgbWF4ID0gb25lID8gaW5kZXggKyAxIDogb3B0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGkgPSBtYXg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaSA9IG9uZSA/IGluZGV4IDogMDtcbiAgICAgICAgICAgICAgfSAvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBzZWxlY3RlZCBvcHRpb25zXG5cblxuICAgICAgICAgICAgICBmb3IgKDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uID0gb3B0aW9uc1tpXTsgLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbiAgICAgICAgICAgICAgICAvLyBJRTgtOSBkb2Vzbid0IHVwZGF0ZSBzZWxlY3RlZCBhZnRlciBmb3JtIHJlc2V0ICgjMjU1MSlcblxuICAgICAgICAgICAgICAgIGlmICgob3B0aW9uLnNlbGVjdGVkIHx8IGkgPT09IGluZGV4KSAmJiAvLyBEb24ndCByZXR1cm4gb3B0aW9ucyB0aGF0IGFyZSBkaXNhYmxlZCBvciBpbiBhIGRpc2FibGVkIG9wdGdyb3VwXG4gICAgICAgICAgICAgICAgIW9wdGlvbi5kaXNhYmxlZCAmJiAoIW9wdGlvbi5wYXJlbnROb2RlLmRpc2FibGVkIHx8ICFub2RlTmFtZShvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiKSkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgc3BlY2lmaWMgdmFsdWUgZm9yIHRoZSBvcHRpb25cbiAgICAgICAgICAgICAgICAgIHZhbHVlID0galF1ZXJ5KG9wdGlvbikudmFsKCk7IC8vIFdlIGRvbid0IG5lZWQgYW4gYXJyYXkgZm9yIG9uZSBzZWxlY3RzXG5cbiAgICAgICAgICAgICAgICAgIGlmIChvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgfSAvLyBNdWx0aS1TZWxlY3RzIHJldHVybiBhbiBhcnJheVxuXG5cbiAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGVsZW0sIHZhbHVlKSB7XG4gICAgICAgICAgICAgIHZhciBvcHRpb25TZXQsXG4gICAgICAgICAgICAgICAgICBvcHRpb24sXG4gICAgICAgICAgICAgICAgICBvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgdmFsdWVzID0galF1ZXJ5Lm1ha2VBcnJheSh2YWx1ZSksXG4gICAgICAgICAgICAgICAgICBpID0gb3B0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbiA9IG9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQgPSBqUXVlcnkuaW5BcnJheShqUXVlcnkudmFsSG9va3Mub3B0aW9uLmdldChvcHRpb24pLCB2YWx1ZXMpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgIG9wdGlvblNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuICAgICAgICAgICAgICB9IC8vIEZvcmNlIGJyb3dzZXJzIHRvIGJlaGF2ZSBjb25zaXN0ZW50bHkgd2hlbiBub24tbWF0Y2hpbmcgdmFsdWUgaXMgc2V0XG5cblxuICAgICAgICAgICAgICBpZiAoIW9wdGlvblNldCkge1xuICAgICAgICAgICAgICAgIGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBSYWRpb3MgYW5kIGNoZWNrYm94ZXMgZ2V0dGVyL3NldHRlclxuXG4gICAgICBqUXVlcnkuZWFjaChbXCJyYWRpb1wiLCBcImNoZWNrYm94XCJdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpRdWVyeS52YWxIb29rc1t0aGlzXSA9IHtcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChlbGVtLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbGVtLmNoZWNrZWQgPSBqUXVlcnkuaW5BcnJheShqUXVlcnkoZWxlbSkudmFsKCksIHZhbHVlKSA+IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXN1cHBvcnQuY2hlY2tPbikge1xuICAgICAgICAgIGpRdWVyeS52YWxIb29rc1t0aGlzXS5nZXQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgPT09IG51bGwgPyBcIm9uXCIgOiBlbGVtLnZhbHVlO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBSZXR1cm4galF1ZXJ5IGZvciBhdHRyaWJ1dGVzLW9ubHkgaW5jbHVzaW9uXG5cbiAgICAgIHN1cHBvcnQuZm9jdXNpbiA9IFwib25mb2N1c2luXCIgaW4gd2luZG93O1xuXG4gICAgICB2YXIgcmZvY3VzTW9ycGggPSAvXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sXG4gICAgICAgICAgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb25DYWxsYmFjayhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9O1xuXG4gICAgICBqUXVlcnkuZXh0ZW5kKGpRdWVyeS5ldmVudCwge1xuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50LCBkYXRhLCBlbGVtLCBvbmx5SGFuZGxlcnMpIHtcbiAgICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgICAgY3VyLFxuICAgICAgICAgICAgICB0bXAsXG4gICAgICAgICAgICAgIGJ1YmJsZVR5cGUsXG4gICAgICAgICAgICAgIG9udHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlLFxuICAgICAgICAgICAgICBzcGVjaWFsLFxuICAgICAgICAgICAgICBsYXN0RWxlbWVudCxcbiAgICAgICAgICAgICAgZXZlbnRQYXRoID0gW2VsZW0gfHwgZG9jdW1lbnRdLFxuICAgICAgICAgICAgICB0eXBlID0gaGFzT3duLmNhbGwoZXZlbnQsIFwidHlwZVwiKSA/IGV2ZW50LnR5cGUgOiBldmVudCxcbiAgICAgICAgICAgICAgbmFtZXNwYWNlcyA9IGhhc093bi5jYWxsKGV2ZW50LCBcIm5hbWVzcGFjZVwiKSA/IGV2ZW50Lm5hbWVzcGFjZS5zcGxpdChcIi5cIikgOiBbXTtcbiAgICAgICAgICBjdXIgPSBsYXN0RWxlbWVudCA9IHRtcCA9IGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50OyAvLyBEb24ndCBkbyBldmVudHMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuXG4gICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gZm9jdXMvYmx1ciBtb3JwaHMgdG8gZm9jdXNpbi9vdXQ7IGVuc3VyZSB3ZSdyZSBub3QgZmlyaW5nIHRoZW0gcmlnaHQgbm93XG5cblxuICAgICAgICAgIGlmIChyZm9jdXNNb3JwaC50ZXN0KHR5cGUgKyBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlLmluZGV4T2YoXCIuXCIpID4gLTEpIHtcbiAgICAgICAgICAgIC8vIE5hbWVzcGFjZWQgdHJpZ2dlcjsgY3JlYXRlIGEgcmVnZXhwIHRvIG1hdGNoIGV2ZW50IHR5cGUgaW4gaGFuZGxlKClcbiAgICAgICAgICAgIG5hbWVzcGFjZXMgPSB0eXBlLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICAgIHR5cGUgPSBuYW1lc3BhY2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICBuYW1lc3BhY2VzLnNvcnQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvbnR5cGUgPSB0eXBlLmluZGV4T2YoXCI6XCIpIDwgMCAmJiBcIm9uXCIgKyB0eXBlOyAvLyBDYWxsZXIgY2FuIHBhc3MgaW4gYSBqUXVlcnkuRXZlbnQgb2JqZWN0LCBPYmplY3QsIG9yIGp1c3QgYW4gZXZlbnQgdHlwZSBzdHJpbmdcblxuICAgICAgICAgIGV2ZW50ID0gZXZlbnRbalF1ZXJ5LmV4cGFuZG9dID8gZXZlbnQgOiBuZXcgalF1ZXJ5LkV2ZW50KHR5cGUsIF90eXBlb2YoZXZlbnQpID09PSBcIm9iamVjdFwiICYmIGV2ZW50KTsgLy8gVHJpZ2dlciBiaXRtYXNrOiAmIDEgZm9yIG5hdGl2ZSBoYW5kbGVyczsgJiAyIGZvciBqUXVlcnkgKGFsd2F5cyB0cnVlKVxuXG4gICAgICAgICAgZXZlbnQuaXNUcmlnZ2VyID0gb25seUhhbmRsZXJzID8gMiA6IDM7XG4gICAgICAgICAgZXZlbnQubmFtZXNwYWNlID0gbmFtZXNwYWNlcy5qb2luKFwiLlwiKTtcbiAgICAgICAgICBldmVudC5ybmFtZXNwYWNlID0gZXZlbnQubmFtZXNwYWNlID8gbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikgKyBcIihcXFxcLnwkKVwiKSA6IG51bGw7IC8vIENsZWFuIHVwIHRoZSBldmVudCBpbiBjYXNlIGl0IGlzIGJlaW5nIHJldXNlZFxuXG4gICAgICAgICAgZXZlbnQucmVzdWx0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgaWYgKCFldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCA9IGVsZW07XG4gICAgICAgICAgfSAvLyBDbG9uZSBhbnkgaW5jb21pbmcgZGF0YSBhbmQgcHJlcGVuZCB0aGUgZXZlbnQsIGNyZWF0aW5nIHRoZSBoYW5kbGVyIGFyZyBsaXN0XG5cblxuICAgICAgICAgIGRhdGEgPSBkYXRhID09IG51bGwgPyBbZXZlbnRdIDogalF1ZXJ5Lm1ha2VBcnJheShkYXRhLCBbZXZlbnRdKTsgLy8gQWxsb3cgc3BlY2lhbCBldmVudHMgdG8gZHJhdyBvdXRzaWRlIHRoZSBsaW5lc1xuXG4gICAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9O1xuXG4gICAgICAgICAgaWYgKCFvbmx5SGFuZGxlcnMgJiYgc3BlY2lhbC50cmlnZ2VyICYmIHNwZWNpYWwudHJpZ2dlci5hcHBseShlbGVtLCBkYXRhKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IC8vIERldGVybWluZSBldmVudCBwcm9wYWdhdGlvbiBwYXRoIGluIGFkdmFuY2UsIHBlciBXM0MgZXZlbnRzIHNwZWMgKCM5OTUxKVxuICAgICAgICAgIC8vIEJ1YmJsZSB1cCB0byBkb2N1bWVudCwgdGhlbiB0byB3aW5kb3c7IHdhdGNoIGZvciBhIGdsb2JhbCBvd25lckRvY3VtZW50IHZhciAoIzk3MjQpXG5cblxuICAgICAgICAgIGlmICghb25seUhhbmRsZXJzICYmICFzcGVjaWFsLm5vQnViYmxlICYmICFpc1dpbmRvdyhlbGVtKSkge1xuICAgICAgICAgICAgYnViYmxlVHlwZSA9IHNwZWNpYWwuZGVsZWdhdGVUeXBlIHx8IHR5cGU7XG5cbiAgICAgICAgICAgIGlmICghcmZvY3VzTW9ycGgudGVzdChidWJibGVUeXBlICsgdHlwZSkpIHtcbiAgICAgICAgICAgICAgY3VyID0gY3VyLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoOyBjdXI7IGN1ciA9IGN1ci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgIGV2ZW50UGF0aC5wdXNoKGN1cik7XG4gICAgICAgICAgICAgIHRtcCA9IGN1cjtcbiAgICAgICAgICAgIH0gLy8gT25seSBhZGQgd2luZG93IGlmIHdlIGdvdCB0byBkb2N1bWVudCAoZS5nLiwgbm90IHBsYWluIG9iaiBvciBkZXRhY2hlZCBET00pXG5cblxuICAgICAgICAgICAgaWYgKHRtcCA9PT0gKGVsZW0ub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCkpIHtcbiAgICAgICAgICAgICAgZXZlbnRQYXRoLnB1c2godG1wLmRlZmF1bHRWaWV3IHx8IHRtcC5wYXJlbnRXaW5kb3cgfHwgd2luZG93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIEZpcmUgaGFuZGxlcnMgb24gdGhlIGV2ZW50IHBhdGhcblxuXG4gICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICB3aGlsZSAoKGN1ciA9IGV2ZW50UGF0aFtpKytdKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgICAgbGFzdEVsZW1lbnQgPSBjdXI7XG4gICAgICAgICAgICBldmVudC50eXBlID0gaSA+IDEgPyBidWJibGVUeXBlIDogc3BlY2lhbC5iaW5kVHlwZSB8fCB0eXBlOyAvLyBqUXVlcnkgaGFuZGxlclxuXG4gICAgICAgICAgICBoYW5kbGUgPSAoZGF0YVByaXYuZ2V0KGN1ciwgXCJldmVudHNcIikgfHwge30pW2V2ZW50LnR5cGVdICYmIGRhdGFQcml2LmdldChjdXIsIFwiaGFuZGxlXCIpO1xuXG4gICAgICAgICAgICBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICAgIGhhbmRsZS5hcHBseShjdXIsIGRhdGEpO1xuICAgICAgICAgICAgfSAvLyBOYXRpdmUgaGFuZGxlclxuXG5cbiAgICAgICAgICAgIGhhbmRsZSA9IG9udHlwZSAmJiBjdXJbb250eXBlXTtcblxuICAgICAgICAgICAgaWYgKGhhbmRsZSAmJiBoYW5kbGUuYXBwbHkgJiYgYWNjZXB0RGF0YShjdXIpKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnJlc3VsdCA9IGhhbmRsZS5hcHBseShjdXIsIGRhdGEpO1xuXG4gICAgICAgICAgICAgIGlmIChldmVudC5yZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2ZW50LnR5cGUgPSB0eXBlOyAvLyBJZiBub2JvZHkgcHJldmVudGVkIHRoZSBkZWZhdWx0IGFjdGlvbiwgZG8gaXQgbm93XG5cbiAgICAgICAgICBpZiAoIW9ubHlIYW5kbGVycyAmJiAhZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgICAgIGlmICgoIXNwZWNpYWwuX2RlZmF1bHQgfHwgc3BlY2lhbC5fZGVmYXVsdC5hcHBseShldmVudFBhdGgucG9wKCksIGRhdGEpID09PSBmYWxzZSkgJiYgYWNjZXB0RGF0YShlbGVtKSkge1xuICAgICAgICAgICAgICAvLyBDYWxsIGEgbmF0aXZlIERPTSBtZXRob2Qgb24gdGhlIHRhcmdldCB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGV2ZW50LlxuICAgICAgICAgICAgICAvLyBEb24ndCBkbyBkZWZhdWx0IGFjdGlvbnMgb24gd2luZG93LCB0aGF0J3Mgd2hlcmUgZ2xvYmFsIHZhcmlhYmxlcyBiZSAoIzYxNzApXG4gICAgICAgICAgICAgIGlmIChvbnR5cGUgJiYgaXNGdW5jdGlvbihlbGVtW3R5cGVdKSAmJiAhaXNXaW5kb3coZWxlbSkpIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCByZS10cmlnZ2VyIGFuIG9uRk9PIGV2ZW50IHdoZW4gd2UgY2FsbCBpdHMgRk9PKCkgbWV0aG9kXG4gICAgICAgICAgICAgICAgdG1wID0gZWxlbVtvbnR5cGVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRtcCkge1xuICAgICAgICAgICAgICAgICAgZWxlbVtvbnR5cGVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IC8vIFByZXZlbnQgcmUtdHJpZ2dlcmluZyBvZiB0aGUgc2FtZSBldmVudCwgc2luY2Ugd2UgYWxyZWFkeSBidWJibGVkIGl0IGFib3ZlXG5cblxuICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB0eXBlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsZW1bdHlwZV0oKTtcblxuICAgICAgICAgICAgICAgIGlmIChldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgICAgICAgICBsYXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRtcCkge1xuICAgICAgICAgICAgICAgICAgZWxlbVtvbnR5cGVdID0gdG1wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBldmVudC5yZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFBpZ2d5YmFjayBvbiBhIGRvbm9yIGV2ZW50IHRvIHNpbXVsYXRlIGEgZGlmZmVyZW50IG9uZVxuICAgICAgICAvLyBVc2VkIG9ubHkgZm9yIGBmb2N1cyhpbiB8IG91dClgIGV2ZW50c1xuICAgICAgICBzaW11bGF0ZTogZnVuY3Rpb24gc2ltdWxhdGUodHlwZSwgZWxlbSwgZXZlbnQpIHtcbiAgICAgICAgICB2YXIgZSA9IGpRdWVyeS5leHRlbmQobmV3IGpRdWVyeS5FdmVudCgpLCBldmVudCwge1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGlzU2ltdWxhdGVkOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgalF1ZXJ5LmV2ZW50LnRyaWdnZXIoZSwgbnVsbCwgZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uIHRyaWdnZXIodHlwZSwgZGF0YSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnRyaWdnZXIodHlwZSwgZGF0YSwgdGhpcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJIYW5kbGVyOiBmdW5jdGlvbiB0cmlnZ2VySGFuZGxlcih0eXBlLCBkYXRhKSB7XG4gICAgICAgICAgdmFyIGVsZW0gPSB0aGlzWzBdO1xuXG4gICAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnkuZXZlbnQudHJpZ2dlcih0eXBlLCBkYXRhLCBlbGVtLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDRcbiAgICAgIC8vIEZpcmVmb3ggZG9lc24ndCBoYXZlIGZvY3VzKGluIHwgb3V0KSBldmVudHNcbiAgICAgIC8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njg3Nzg3XG4gICAgICAvL1xuICAgICAgLy8gU3VwcG9ydDogQ2hyb21lIDw9NDggLSA0OSwgU2FmYXJpIDw9OS4wIC0gOS4xXG4gICAgICAvLyBmb2N1cyhpbiB8IG91dCkgZXZlbnRzIGZpcmUgYWZ0ZXIgZm9jdXMgJiBibHVyIGV2ZW50cyxcbiAgICAgIC8vIHdoaWNoIGlzIHNwZWMgdmlvbGF0aW9uIC0gaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudHMtZm9jdXNldmVudC1ldmVudC1vcmRlclxuICAgICAgLy8gUmVsYXRlZCB0aWNrZXQgLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDk4NTdcblxuICAgICAgaWYgKCFzdXBwb3J0LmZvY3VzaW4pIHtcbiAgICAgICAgalF1ZXJ5LmVhY2goe1xuICAgICAgICAgIGZvY3VzOiBcImZvY3VzaW5cIixcbiAgICAgICAgICBibHVyOiBcImZvY3Vzb3V0XCJcbiAgICAgICAgfSwgZnVuY3Rpb24gKG9yaWcsIGZpeCkge1xuICAgICAgICAgIC8vIEF0dGFjaCBhIHNpbmdsZSBjYXB0dXJpbmcgaGFuZGxlciBvbiB0aGUgZG9jdW1lbnQgd2hpbGUgc29tZW9uZSB3YW50cyBmb2N1c2luL2ZvY3Vzb3V0XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgICAgICBqUXVlcnkuZXZlbnQuc2ltdWxhdGUoZml4LCBldmVudC50YXJnZXQsIGpRdWVyeS5ldmVudC5maXgoZXZlbnQpKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgalF1ZXJ5LmV2ZW50LnNwZWNpYWxbZml4XSA9IHtcbiAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgICAgICAgICAgdmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLFxuICAgICAgICAgICAgICAgICAgYXR0YWNoZXMgPSBkYXRhUHJpdi5hY2Nlc3MoZG9jLCBmaXgpO1xuXG4gICAgICAgICAgICAgIGlmICghYXR0YWNoZXMpIHtcbiAgICAgICAgICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihvcmlnLCBoYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRhdGFQcml2LmFjY2Vzcyhkb2MsIGZpeCwgKGF0dGFjaGVzIHx8IDApICsgMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVhcmRvd246IGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAgICAgICAgICAgICB2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXG4gICAgICAgICAgICAgICAgICBhdHRhY2hlcyA9IGRhdGFQcml2LmFjY2Vzcyhkb2MsIGZpeCkgLSAxO1xuXG4gICAgICAgICAgICAgIGlmICghYXR0YWNoZXMpIHtcbiAgICAgICAgICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihvcmlnLCBoYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkYXRhUHJpdi5yZW1vdmUoZG9jLCBmaXgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFQcml2LmFjY2Vzcyhkb2MsIGZpeCwgYXR0YWNoZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICAgIHZhciBub25jZSA9IERhdGUubm93KCk7XG4gICAgICB2YXIgcnF1ZXJ5ID0gL1xcPy87IC8vIENyb3NzLWJyb3dzZXIgeG1sIHBhcnNpbmdcblxuICAgICAgalF1ZXJ5LnBhcnNlWE1MID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHhtbDtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSAvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuICAgICAgICAvLyBJRSB0aHJvd3Mgb24gcGFyc2VGcm9tU3RyaW5nIHdpdGggaW52YWxpZCBpbnB1dC5cblxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeG1sID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGF0YSwgXCJ0ZXh0L3htbFwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHhtbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgheG1sIHx8IHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCkge1xuICAgICAgICAgIGpRdWVyeS5lcnJvcihcIkludmFsaWQgWE1MOiBcIiArIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHhtbDtcbiAgICAgIH07XG5cbiAgICAgIHZhciByYnJhY2tldCA9IC9cXFtcXF0kLyxcbiAgICAgICAgICByQ1JMRiA9IC9cXHI/XFxuL2csXG4gICAgICAgICAgcnN1Ym1pdHRlclR5cGVzID0gL14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFxuICAgICAgICAgIHJzdWJtaXR0YWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtcblxuICAgICAgZnVuY3Rpb24gYnVpbGRQYXJhbXMocHJlZml4LCBvYmosIHRyYWRpdGlvbmFsLCBhZGQpIHtcbiAgICAgICAgdmFyIG5hbWU7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIC8vIFNlcmlhbGl6ZSBhcnJheSBpdGVtLlxuICAgICAgICAgIGpRdWVyeS5lYWNoKG9iaiwgZnVuY3Rpb24gKGksIHYpIHtcbiAgICAgICAgICAgIGlmICh0cmFkaXRpb25hbCB8fCByYnJhY2tldC50ZXN0KHByZWZpeCkpIHtcbiAgICAgICAgICAgICAgLy8gVHJlYXQgZWFjaCBhcnJheSBpdGVtIGFzIGEgc2NhbGFyLlxuICAgICAgICAgICAgICBhZGQocHJlZml4LCB2KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEl0ZW0gaXMgbm9uLXNjYWxhciAoYXJyYXkgb3Igb2JqZWN0KSwgZW5jb2RlIGl0cyBudW1lcmljIGluZGV4LlxuICAgICAgICAgICAgICBidWlsZFBhcmFtcyhwcmVmaXggKyBcIltcIiArIChfdHlwZW9mKHYpID09PSBcIm9iamVjdFwiICYmIHYgIT0gbnVsbCA/IGkgOiBcIlwiKSArIFwiXVwiLCB2LCB0cmFkaXRpb25hbCwgYWRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghdHJhZGl0aW9uYWwgJiYgdG9UeXBlKG9iaikgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAvLyBTZXJpYWxpemUgb2JqZWN0IGl0ZW0uXG4gICAgICAgICAgZm9yIChuYW1lIGluIG9iaikge1xuICAgICAgICAgICAgYnVpbGRQYXJhbXMocHJlZml4ICsgXCJbXCIgKyBuYW1lICsgXCJdXCIsIG9ialtuYW1lXSwgdHJhZGl0aW9uYWwsIGFkZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNlcmlhbGl6ZSBzY2FsYXIgaXRlbS5cbiAgICAgICAgICBhZGQocHJlZml4LCBvYmopO1xuICAgICAgICB9XG4gICAgICB9IC8vIFNlcmlhbGl6ZSBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzIG9yIGEgc2V0IG9mXG4gICAgICAvLyBrZXkvdmFsdWVzIGludG8gYSBxdWVyeSBzdHJpbmdcblxuXG4gICAgICBqUXVlcnkucGFyYW0gPSBmdW5jdGlvbiAoYSwgdHJhZGl0aW9uYWwpIHtcbiAgICAgICAgdmFyIHByZWZpeCxcbiAgICAgICAgICAgIHMgPSBbXSxcbiAgICAgICAgICAgIGFkZCA9IGZ1bmN0aW9uIGFkZChrZXksIHZhbHVlT3JGdW5jdGlvbikge1xuICAgICAgICAgIC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIGludm9rZSBpdCBhbmQgdXNlIGl0cyByZXR1cm4gdmFsdWVcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpc0Z1bmN0aW9uKHZhbHVlT3JGdW5jdGlvbikgPyB2YWx1ZU9yRnVuY3Rpb24oKSA6IHZhbHVlT3JGdW5jdGlvbjtcbiAgICAgICAgICBzW3MubGVuZ3RoXSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGEgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9IC8vIElmIGFuIGFycmF5IHdhcyBwYXNzZWQgaW4sIGFzc3VtZSB0aGF0IGl0IGlzIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMuXG5cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSB8fCBhLmpxdWVyeSAmJiAhalF1ZXJ5LmlzUGxhaW5PYmplY3QoYSkpIHtcbiAgICAgICAgICAvLyBTZXJpYWxpemUgdGhlIGZvcm0gZWxlbWVudHNcbiAgICAgICAgICBqUXVlcnkuZWFjaChhLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhZGQodGhpcy5uYW1lLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiB0cmFkaXRpb25hbCwgZW5jb2RlIHRoZSBcIm9sZFwiIHdheSAodGhlIHdheSAxLjMuMiBvciBvbGRlclxuICAgICAgICAgIC8vIGRpZCBpdCksIG90aGVyd2lzZSBlbmNvZGUgcGFyYW1zIHJlY3Vyc2l2ZWx5LlxuICAgICAgICAgIGZvciAocHJlZml4IGluIGEpIHtcbiAgICAgICAgICAgIGJ1aWxkUGFyYW1zKHByZWZpeCwgYVtwcmVmaXhdLCB0cmFkaXRpb25hbCwgYWRkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gUmV0dXJuIHRoZSByZXN1bHRpbmcgc2VyaWFsaXphdGlvblxuXG5cbiAgICAgICAgcmV0dXJuIHMuam9pbihcIiZcIik7XG4gICAgICB9O1xuXG4gICAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiBzZXJpYWxpemUoKSB7XG4gICAgICAgICAgcmV0dXJuIGpRdWVyeS5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJpYWxpemVBcnJheTogZnVuY3Rpb24gc2VyaWFsaXplQXJyYXkoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENhbiBhZGQgcHJvcEhvb2sgZm9yIFwiZWxlbWVudHNcIiB0byBmaWx0ZXIgb3IgYWRkIGZvcm0gZWxlbWVudHNcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGpRdWVyeS5wcm9wKHRoaXMsIFwiZWxlbWVudHNcIik7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHMgPyBqUXVlcnkubWFrZUFycmF5KGVsZW1lbnRzKSA6IHRoaXM7XG4gICAgICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gdGhpcy50eXBlOyAvLyBVc2UgLmlzKCBcIjpkaXNhYmxlZFwiICkgc28gdGhhdCBmaWVsZHNldFtkaXNhYmxlZF0gd29ya3NcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZSAmJiAhalF1ZXJ5KHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpICYmIHJzdWJtaXR0YWJsZS50ZXN0KHRoaXMubm9kZU5hbWUpICYmICFyc3VibWl0dGVyVHlwZXMudGVzdCh0eXBlKSAmJiAodGhpcy5jaGVja2VkIHx8ICFyY2hlY2thYmxlVHlwZS50ZXN0KHR5cGUpKTtcbiAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKGksIGVsZW0pIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSBqUXVlcnkodGhpcykudmFsKCk7XG5cbiAgICAgICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgICByZXR1cm4galF1ZXJ5Lm1hcCh2YWwsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgbmFtZTogZWxlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbC5yZXBsYWNlKHJDUkxGLCBcIlxcclxcblwiKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiBlbGVtLm5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWwucmVwbGFjZShyQ1JMRiwgXCJcXHJcXG5cIilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkuZ2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIHIyMCA9IC8lMjAvZyxcbiAgICAgICAgICByaGFzaCA9IC8jLiokLyxcbiAgICAgICAgICByYW50aUNhY2hlID0gLyhbPyZdKV89W14mXSovLFxuICAgICAgICAgIHJoZWFkZXJzID0gL14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9tZyxcbiAgICAgICAgICAvLyAjNzY1MywgIzgxMjUsICM4MTUyOiBsb2NhbCBwcm90b2NvbCBkZXRlY3Rpb25cbiAgICAgIHJsb2NhbFByb3RvY29sID0gL14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sXG4gICAgICAgICAgcm5vQ29udGVudCA9IC9eKD86R0VUfEhFQUQpJC8sXG4gICAgICAgICAgcnByb3RvY29sID0gL15cXC9cXC8vLFxuXG4gICAgICAvKiBQcmVmaWx0ZXJzXG4gICAgICAgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxuICAgICAgICogMikgVGhlc2UgYXJlIGNhbGxlZDpcbiAgICAgICAqICAgIC0gQkVGT1JFIGFza2luZyBmb3IgYSB0cmFuc3BvcnRcbiAgICAgICAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcbiAgICAgICAqIDMpIGtleSBpcyB0aGUgZGF0YVR5cGVcbiAgICAgICAqIDQpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcbiAgICAgICAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXG4gICAgICAgKi9cbiAgICAgIHByZWZpbHRlcnMgPSB7fSxcblxuICAgICAgLyogVHJhbnNwb3J0cyBiaW5kaW5nc1xuICAgICAgICogMSkga2V5IGlzIHRoZSBkYXRhVHlwZVxuICAgICAgICogMikgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuICAgICAgICogMykgc2VsZWN0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gZ28gdG8gXCIqXCIgaWYgbmVlZGVkXG4gICAgICAgKi9cbiAgICAgIHRyYW5zcG9ydHMgPSB7fSxcbiAgICAgICAgICAvLyBBdm9pZCBjb21tZW50LXByb2xvZyBjaGFyIHNlcXVlbmNlICgjMTAwOTgpOyBtdXN0IGFwcGVhc2UgbGludCBhbmQgZXZhZGUgY29tcHJlc3Npb25cbiAgICAgIGFsbFR5cGVzID0gXCIqL1wiLmNvbmNhdChcIipcIiksXG4gICAgICAgICAgLy8gQW5jaG9yIHRhZyBmb3IgcGFyc2luZyB0aGUgZG9jdW1lbnQgb3JpZ2luXG4gICAgICBvcmlnaW5BbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIG9yaWdpbkFuY2hvci5ocmVmID0gbG9jYXRpb24uaHJlZjsgLy8gQmFzZSBcImNvbnN0cnVjdG9yXCIgZm9yIGpRdWVyeS5hamF4UHJlZmlsdGVyIGFuZCBqUXVlcnkuYWpheFRyYW5zcG9ydFxuXG4gICAgICBmdW5jdGlvbiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoc3RydWN0dXJlKSB7XG4gICAgICAgIC8vIGRhdGFUeXBlRXhwcmVzc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gXCIqXCJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhVHlwZUV4cHJlc3Npb24sIGZ1bmMpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFUeXBlRXhwcmVzc2lvbiAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZnVuYyA9IGRhdGFUeXBlRXhwcmVzc2lvbjtcbiAgICAgICAgICAgIGRhdGFUeXBlRXhwcmVzc2lvbiA9IFwiKlwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBkYXRhVHlwZSxcbiAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgIGRhdGFUeXBlcyA9IGRhdGFUeXBlRXhwcmVzc2lvbi50b0xvd2VyQ2FzZSgpLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtdO1xuXG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24oZnVuYykpIHtcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIGRhdGFUeXBlIGluIHRoZSBkYXRhVHlwZUV4cHJlc3Npb25cbiAgICAgICAgICAgIHdoaWxlIChkYXRhVHlwZSA9IGRhdGFUeXBlc1tpKytdKSB7XG4gICAgICAgICAgICAgIC8vIFByZXBlbmQgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgICAgIGlmIChkYXRhVHlwZVswXSA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBkYXRhVHlwZSA9IGRhdGFUeXBlLnNsaWNlKDEpIHx8IFwiKlwiO1xuICAgICAgICAgICAgICAgIChzdHJ1Y3R1cmVbZGF0YVR5cGVdID0gc3RydWN0dXJlW2RhdGFUeXBlXSB8fCBbXSkudW5zaGlmdChmdW5jKTsgLy8gT3RoZXJ3aXNlIGFwcGVuZFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIChzdHJ1Y3R1cmVbZGF0YVR5cGVdID0gc3RydWN0dXJlW2RhdGFUeXBlXSB8fCBbXSkucHVzaChmdW5jKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gLy8gQmFzZSBpbnNwZWN0aW9uIGZ1bmN0aW9uIGZvciBwcmVmaWx0ZXJzIGFuZCB0cmFuc3BvcnRzXG5cblxuICAgICAgZnVuY3Rpb24gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoc3RydWN0dXJlLCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSKSB7XG4gICAgICAgIHZhciBpbnNwZWN0ZWQgPSB7fSxcbiAgICAgICAgICAgIHNlZWtpbmdUcmFuc3BvcnQgPSBzdHJ1Y3R1cmUgPT09IHRyYW5zcG9ydHM7XG5cbiAgICAgICAgZnVuY3Rpb24gaW5zcGVjdChkYXRhVHlwZSkge1xuICAgICAgICAgIHZhciBzZWxlY3RlZDtcbiAgICAgICAgICBpbnNwZWN0ZWRbZGF0YVR5cGVdID0gdHJ1ZTtcbiAgICAgICAgICBqUXVlcnkuZWFjaChzdHJ1Y3R1cmVbZGF0YVR5cGVdIHx8IFtdLCBmdW5jdGlvbiAoXywgcHJlZmlsdGVyT3JGYWN0b3J5KSB7XG4gICAgICAgICAgICB2YXIgZGF0YVR5cGVPclRyYW5zcG9ydCA9IHByZWZpbHRlck9yRmFjdG9yeShvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhVHlwZU9yVHJhbnNwb3J0ID09PSBcInN0cmluZ1wiICYmICFzZWVraW5nVHJhbnNwb3J0ICYmICFpbnNwZWN0ZWRbZGF0YVR5cGVPclRyYW5zcG9ydF0pIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5kYXRhVHlwZXMudW5zaGlmdChkYXRhVHlwZU9yVHJhbnNwb3J0KTtcbiAgICAgICAgICAgICAgaW5zcGVjdChkYXRhVHlwZU9yVHJhbnNwb3J0KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWVraW5nVHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgIHJldHVybiAhKHNlbGVjdGVkID0gZGF0YVR5cGVPclRyYW5zcG9ydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3BlY3Qob3B0aW9ucy5kYXRhVHlwZXNbMF0pIHx8ICFpbnNwZWN0ZWRbXCIqXCJdICYmIGluc3BlY3QoXCIqXCIpO1xuICAgICAgfSAvLyBBIHNwZWNpYWwgZXh0ZW5kIGZvciBhamF4IG9wdGlvbnNcbiAgICAgIC8vIHRoYXQgdGFrZXMgXCJmbGF0XCIgb3B0aW9ucyAobm90IHRvIGJlIGRlZXAgZXh0ZW5kZWQpXG4gICAgICAvLyBGaXhlcyAjOTg4N1xuXG5cbiAgICAgIGZ1bmN0aW9uIGFqYXhFeHRlbmQodGFyZ2V0LCBzcmMpIHtcbiAgICAgICAgdmFyIGtleSxcbiAgICAgICAgICAgIGRlZXAsXG4gICAgICAgICAgICBmbGF0T3B0aW9ucyA9IGpRdWVyeS5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnMgfHwge307XG5cbiAgICAgICAgZm9yIChrZXkgaW4gc3JjKSB7XG4gICAgICAgICAgaWYgKHNyY1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIChmbGF0T3B0aW9uc1trZXldID8gdGFyZ2V0IDogZGVlcCB8fCAoZGVlcCA9IHt9KSlba2V5XSA9IHNyY1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgalF1ZXJ5LmV4dGVuZCh0cnVlLCB0YXJnZXQsIGRlZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIC8qIEhhbmRsZXMgcmVzcG9uc2VzIHRvIGFuIGFqYXggcmVxdWVzdDpcbiAgICAgICAqIC0gZmluZHMgdGhlIHJpZ2h0IGRhdGFUeXBlIChtZWRpYXRlcyBiZXR3ZWVuIGNvbnRlbnQtdHlwZSBhbmQgZXhwZWN0ZWQgZGF0YVR5cGUpXG4gICAgICAgKiAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2VcbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIGFqYXhIYW5kbGVSZXNwb25zZXMocywganFYSFIsIHJlc3BvbnNlcykge1xuICAgICAgICB2YXIgY3QsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgZmluYWxEYXRhVHlwZSxcbiAgICAgICAgICAgIGZpcnN0RGF0YVR5cGUsXG4gICAgICAgICAgICBjb250ZW50cyA9IHMuY29udGVudHMsXG4gICAgICAgICAgICBkYXRhVHlwZXMgPSBzLmRhdGFUeXBlczsgLy8gUmVtb3ZlIGF1dG8gZGF0YVR5cGUgYW5kIGdldCBjb250ZW50LXR5cGUgaW4gdGhlIHByb2Nlc3NcblxuICAgICAgICB3aGlsZSAoZGF0YVR5cGVzWzBdID09PSBcIipcIikge1xuICAgICAgICAgIGRhdGFUeXBlcy5zaGlmdCgpO1xuXG4gICAgICAgICAgaWYgKGN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gQ2hlY2sgaWYgd2UncmUgZGVhbGluZyB3aXRoIGEga25vd24gY29udGVudC10eXBlXG5cblxuICAgICAgICBpZiAoY3QpIHtcbiAgICAgICAgICBmb3IgKHR5cGUgaW4gY29udGVudHMpIHtcbiAgICAgICAgICAgIGlmIChjb250ZW50c1t0eXBlXSAmJiBjb250ZW50c1t0eXBlXS50ZXN0KGN0KSkge1xuICAgICAgICAgICAgICBkYXRhVHlwZXMudW5zaGlmdCh0eXBlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGEgcmVzcG9uc2UgZm9yIHRoZSBleHBlY3RlZCBkYXRhVHlwZVxuXG5cbiAgICAgICAgaWYgKGRhdGFUeXBlc1swXSBpbiByZXNwb25zZXMpIHtcbiAgICAgICAgICBmaW5hbERhdGFUeXBlID0gZGF0YVR5cGVzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRyeSBjb252ZXJ0aWJsZSBkYXRhVHlwZXNcbiAgICAgICAgICBmb3IgKHR5cGUgaW4gcmVzcG9uc2VzKSB7XG4gICAgICAgICAgICBpZiAoIWRhdGFUeXBlc1swXSB8fCBzLmNvbnZlcnRlcnNbdHlwZSArIFwiIFwiICsgZGF0YVR5cGVzWzBdXSkge1xuICAgICAgICAgICAgICBmaW5hbERhdGFUeXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZmlyc3REYXRhVHlwZSkge1xuICAgICAgICAgICAgICBmaXJzdERhdGFUeXBlID0gdHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIE9yIGp1c3QgdXNlIGZpcnN0IG9uZVxuXG5cbiAgICAgICAgICBmaW5hbERhdGFUeXBlID0gZmluYWxEYXRhVHlwZSB8fCBmaXJzdERhdGFUeXBlO1xuICAgICAgICB9IC8vIElmIHdlIGZvdW5kIGEgZGF0YVR5cGVcbiAgICAgICAgLy8gV2UgYWRkIHRoZSBkYXRhVHlwZSB0byB0aGUgbGlzdCBpZiBuZWVkZWRcbiAgICAgICAgLy8gYW5kIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyByZXNwb25zZVxuXG5cbiAgICAgICAgaWYgKGZpbmFsRGF0YVR5cGUpIHtcbiAgICAgICAgICBpZiAoZmluYWxEYXRhVHlwZSAhPT0gZGF0YVR5cGVzWzBdKSB7XG4gICAgICAgICAgICBkYXRhVHlwZXMudW5zaGlmdChmaW5hbERhdGFUeXBlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VzW2ZpbmFsRGF0YVR5cGVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKiBDaGFpbiBjb252ZXJzaW9ucyBnaXZlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIG9yaWdpbmFsIHJlc3BvbnNlXG4gICAgICAgKiBBbHNvIHNldHMgdGhlIHJlc3BvbnNlWFhYIGZpZWxkcyBvbiB0aGUganFYSFIgaW5zdGFuY2VcbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIGFqYXhDb252ZXJ0KHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzKSB7XG4gICAgICAgIHZhciBjb252MixcbiAgICAgICAgICAgIGN1cnJlbnQsXG4gICAgICAgICAgICBjb252LFxuICAgICAgICAgICAgdG1wLFxuICAgICAgICAgICAgcHJldixcbiAgICAgICAgICAgIGNvbnZlcnRlcnMgPSB7fSxcbiAgICAgICAgICAgIC8vIFdvcmsgd2l0aCBhIGNvcHkgb2YgZGF0YVR5cGVzIGluIGNhc2Ugd2UgbmVlZCB0byBtb2RpZnkgaXQgZm9yIGNvbnZlcnNpb25cbiAgICAgICAgZGF0YVR5cGVzID0gcy5kYXRhVHlwZXMuc2xpY2UoKTsgLy8gQ3JlYXRlIGNvbnZlcnRlcnMgbWFwIHdpdGggbG93ZXJjYXNlZCBrZXlzXG5cbiAgICAgICAgaWYgKGRhdGFUeXBlc1sxXSkge1xuICAgICAgICAgIGZvciAoY29udiBpbiBzLmNvbnZlcnRlcnMpIHtcbiAgICAgICAgICAgIGNvbnZlcnRlcnNbY29udi50b0xvd2VyQ2FzZSgpXSA9IHMuY29udmVydGVyc1tjb252XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7IC8vIENvbnZlcnQgdG8gZWFjaCBzZXF1ZW50aWFsIGRhdGFUeXBlXG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICBpZiAocy5yZXNwb25zZUZpZWxkc1tjdXJyZW50XSkge1xuICAgICAgICAgICAganFYSFJbcy5yZXNwb25zZUZpZWxkc1tjdXJyZW50XV0gPSByZXNwb25zZTtcbiAgICAgICAgICB9IC8vIEFwcGx5IHRoZSBkYXRhRmlsdGVyIGlmIHByb3ZpZGVkXG5cblxuICAgICAgICAgIGlmICghcHJldiAmJiBpc1N1Y2Nlc3MgJiYgcy5kYXRhRmlsdGVyKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHMuZGF0YUZpbHRlcihyZXNwb25zZSwgcy5kYXRhVHlwZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgICAgY3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpO1xuXG4gICAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoZXJlJ3Mgb25seSB3b3JrIHRvIGRvIGlmIGN1cnJlbnQgZGF0YVR5cGUgaXMgbm9uLWF1dG9cbiAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBcIipcIikge1xuICAgICAgICAgICAgICBjdXJyZW50ID0gcHJldjsgLy8gQ29udmVydCByZXNwb25zZSBpZiBwcmV2IGRhdGFUeXBlIGlzIG5vbi1hdXRvIGFuZCBkaWZmZXJzIGZyb20gY3VycmVudFxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmV2ICE9PSBcIipcIiAmJiBwcmV2ICE9PSBjdXJyZW50KSB7XG4gICAgICAgICAgICAgIC8vIFNlZWsgYSBkaXJlY3QgY29udmVydGVyXG4gICAgICAgICAgICAgIGNvbnYgPSBjb252ZXJ0ZXJzW3ByZXYgKyBcIiBcIiArIGN1cnJlbnRdIHx8IGNvbnZlcnRlcnNbXCIqIFwiICsgY3VycmVudF07IC8vIElmIG5vbmUgZm91bmQsIHNlZWsgYSBwYWlyXG5cbiAgICAgICAgICAgICAgaWYgKCFjb252KSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb252MiBpbiBjb252ZXJ0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAvLyBJZiBjb252MiBvdXRwdXRzIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgIHRtcCA9IGNvbnYyLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHRtcFsxXSA9PT0gY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBwcmV2IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYWNjZXB0ZWQgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY29udiA9IGNvbnZlcnRlcnNbcHJldiArIFwiIFwiICsgdG1wWzBdXSB8fCBjb252ZXJ0ZXJzW1wiKiBcIiArIHRtcFswXV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBDb25kZW5zZSBlcXVpdmFsZW5jZSBjb252ZXJ0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnYgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnYgPSBjb252ZXJ0ZXJzW2NvbnYyXTsgLy8gT3RoZXJ3aXNlLCBpbnNlcnQgdGhlIGludGVybWVkaWF0ZSBkYXRhVHlwZVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udmVydGVyc1tjb252Ml0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSB0bXBbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZXMudW5zaGlmdCh0bXBbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IC8vIEFwcGx5IGNvbnZlcnRlciAoaWYgbm90IGFuIGVxdWl2YWxlbmNlKVxuXG5cbiAgICAgICAgICAgICAgaWYgKGNvbnYgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyBVbmxlc3MgZXJyb3JzIGFyZSBhbGxvd2VkIHRvIGJ1YmJsZSwgY2F0Y2ggYW5kIHJldHVybiB0aGVtXG4gICAgICAgICAgICAgICAgaWYgKGNvbnYgJiYgc1tcInRocm93c1wiXSkge1xuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBjb252KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBjb252KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJwYXJzZXJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBjb252ID8gZSA6IFwiTm8gY29udmVyc2lvbiBmcm9tIFwiICsgcHJldiArIFwiIHRvIFwiICsgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgIGRhdGE6IHJlc3BvbnNlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGpRdWVyeS5leHRlbmQoe1xuICAgICAgICAvLyBDb3VudGVyIGZvciBob2xkaW5nIHRoZSBudW1iZXIgb2YgYWN0aXZlIHF1ZXJpZXNcbiAgICAgICAgYWN0aXZlOiAwLFxuICAgICAgICAvLyBMYXN0LU1vZGlmaWVkIGhlYWRlciBjYWNoZSBmb3IgbmV4dCByZXF1ZXN0XG4gICAgICAgIGxhc3RNb2RpZmllZDoge30sXG4gICAgICAgIGV0YWc6IHt9LFxuICAgICAgICBhamF4U2V0dGluZ3M6IHtcbiAgICAgICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICBpc0xvY2FsOiBybG9jYWxQcm90b2NvbC50ZXN0KGxvY2F0aW9uLnByb3RvY29sKSxcbiAgICAgICAgICBnbG9iYWw6IHRydWUsXG4gICAgICAgICAgcHJvY2Vzc0RhdGE6IHRydWUsXG4gICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsXG5cbiAgICAgICAgICAvKlxuICAgICAgICAgIHRpbWVvdXQ6IDAsXG4gICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICBkYXRhVHlwZTogbnVsbCxcbiAgICAgICAgICB1c2VybmFtZTogbnVsbCxcbiAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgICBjYWNoZTogbnVsbCxcbiAgICAgICAgICB0aHJvd3M6IGZhbHNlLFxuICAgICAgICAgIHRyYWRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAqL1xuICAgICAgICAgIGFjY2VwdHM6IHtcbiAgICAgICAgICAgIFwiKlwiOiBhbGxUeXBlcyxcbiAgICAgICAgICAgIHRleHQ6IFwidGV4dC9wbGFpblwiLFxuICAgICAgICAgICAgaHRtbDogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgIHhtbDogXCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsXG4gICAgICAgICAgICBqc29uOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50czoge1xuICAgICAgICAgICAgeG1sOiAvXFxieG1sXFxiLyxcbiAgICAgICAgICAgIGh0bWw6IC9cXGJodG1sLyxcbiAgICAgICAgICAgIGpzb246IC9cXGJqc29uXFxiL1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzcG9uc2VGaWVsZHM6IHtcbiAgICAgICAgICAgIHhtbDogXCJyZXNwb25zZVhNTFwiLFxuICAgICAgICAgICAgdGV4dDogXCJyZXNwb25zZVRleHRcIixcbiAgICAgICAgICAgIGpzb246IFwicmVzcG9uc2VKU09OXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIERhdGEgY29udmVydGVyc1xuICAgICAgICAgIC8vIEtleXMgc2VwYXJhdGUgc291cmNlIChvciBjYXRjaGFsbCBcIipcIikgYW5kIGRlc3RpbmF0aW9uIHR5cGVzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgICAgICAgICBjb252ZXJ0ZXJzOiB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFueXRoaW5nIHRvIHRleHRcbiAgICAgICAgICAgIFwiKiB0ZXh0XCI6IFN0cmluZyxcbiAgICAgICAgICAgIC8vIFRleHQgdG8gaHRtbCAodHJ1ZSA9IG5vIHRyYW5zZm9ybWF0aW9uKVxuICAgICAgICAgICAgXCJ0ZXh0IGh0bWxcIjogdHJ1ZSxcbiAgICAgICAgICAgIC8vIEV2YWx1YXRlIHRleHQgYXMgYSBqc29uIGV4cHJlc3Npb25cbiAgICAgICAgICAgIFwidGV4dCBqc29uXCI6IEpTT04ucGFyc2UsXG4gICAgICAgICAgICAvLyBQYXJzZSB0ZXh0IGFzIHhtbFxuICAgICAgICAgICAgXCJ0ZXh0IHhtbFwiOiBqUXVlcnkucGFyc2VYTUxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIEZvciBvcHRpb25zIHRoYXQgc2hvdWxkbid0IGJlIGRlZXAgZXh0ZW5kZWQ6XG4gICAgICAgICAgLy8geW91IGNhbiBhZGQgeW91ciBvd24gY3VzdG9tIG9wdGlvbnMgaGVyZSBpZlxuICAgICAgICAgIC8vIGFuZCB3aGVuIHlvdSBjcmVhdGUgb25lIHRoYXQgc2hvdWxkbid0IGJlXG4gICAgICAgICAgLy8gZGVlcCBleHRlbmRlZCAoc2VlIGFqYXhFeHRlbmQpXG4gICAgICAgICAgZmxhdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHVybDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIENyZWF0ZXMgYSBmdWxsIGZsZWRnZWQgc2V0dGluZ3Mgb2JqZWN0IGludG8gdGFyZ2V0XG4gICAgICAgIC8vIHdpdGggYm90aCBhamF4U2V0dGluZ3MgYW5kIHNldHRpbmdzIGZpZWxkcy5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cbiAgICAgICAgYWpheFNldHVwOiBmdW5jdGlvbiBhamF4U2V0dXAodGFyZ2V0LCBzZXR0aW5ncykge1xuICAgICAgICAgIHJldHVybiBzZXR0aW5ncyA/IC8vIEJ1aWxkaW5nIGEgc2V0dGluZ3Mgb2JqZWN0XG4gICAgICAgICAgYWpheEV4dGVuZChhamF4RXh0ZW5kKHRhcmdldCwgalF1ZXJ5LmFqYXhTZXR0aW5ncyksIHNldHRpbmdzKSA6IC8vIEV4dGVuZGluZyBhamF4U2V0dGluZ3NcbiAgICAgICAgICBhamF4RXh0ZW5kKGpRdWVyeS5hamF4U2V0dGluZ3MsIHRhcmdldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFqYXhQcmVmaWx0ZXI6IGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyhwcmVmaWx0ZXJzKSxcbiAgICAgICAgYWpheFRyYW5zcG9ydDogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHRyYW5zcG9ydHMpLFxuICAgICAgICAvLyBNYWluIG1ldGhvZFxuICAgICAgICBhamF4OiBmdW5jdGlvbiBhamF4KHVybCwgb3B0aW9ucykge1xuICAgICAgICAgIC8vIElmIHVybCBpcyBhbiBvYmplY3QsIHNpbXVsYXRlIHByZS0xLjUgc2lnbmF0dXJlXG4gICAgICAgICAgaWYgKF90eXBlb2YodXJsKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHVybDtcbiAgICAgICAgICAgIHVybCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9IC8vIEZvcmNlIG9wdGlvbnMgdG8gYmUgYW4gb2JqZWN0XG5cblxuICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgICAgdmFyIHRyYW5zcG9ydCxcbiAgICAgICAgICAgICAgLy8gVVJMIHdpdGhvdXQgYW50aS1jYWNoZSBwYXJhbVxuICAgICAgICAgIGNhY2hlVVJMLFxuICAgICAgICAgICAgICAvLyBSZXNwb25zZSBoZWFkZXJzXG4gICAgICAgICAgcmVzcG9uc2VIZWFkZXJzU3RyaW5nLFxuICAgICAgICAgICAgICByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgICAgICAgIC8vIHRpbWVvdXQgaGFuZGxlXG4gICAgICAgICAgdGltZW91dFRpbWVyLFxuICAgICAgICAgICAgICAvLyBVcmwgY2xlYW51cCB2YXJcbiAgICAgICAgICB1cmxBbmNob3IsXG4gICAgICAgICAgICAgIC8vIFJlcXVlc3Qgc3RhdGUgKGJlY29tZXMgZmFsc2UgdXBvbiBzZW5kIGFuZCB0cnVlIHVwb24gY29tcGxldGlvbilcbiAgICAgICAgICBjb21wbGV0ZWQsXG4gICAgICAgICAgICAgIC8vIFRvIGtub3cgaWYgZ2xvYmFsIGV2ZW50cyBhcmUgdG8gYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgIGZpcmVHbG9iYWxzLFxuICAgICAgICAgICAgICAvLyBMb29wIHZhcmlhYmxlXG4gICAgICAgICAgaSxcbiAgICAgICAgICAgICAgLy8gdW5jYWNoZWQgcGFydCBvZiB0aGUgdXJsXG4gICAgICAgICAgdW5jYWNoZWQsXG4gICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgZmluYWwgb3B0aW9ucyBvYmplY3RcbiAgICAgICAgICBzID0galF1ZXJ5LmFqYXhTZXR1cCh7fSwgb3B0aW9ucyksXG4gICAgICAgICAgICAgIC8vIENhbGxiYWNrcyBjb250ZXh0XG4gICAgICAgICAgY2FsbGJhY2tDb250ZXh0ID0gcy5jb250ZXh0IHx8IHMsXG4gICAgICAgICAgICAgIC8vIENvbnRleHQgZm9yIGdsb2JhbCBldmVudHMgaXMgY2FsbGJhY2tDb250ZXh0IGlmIGl0IGlzIGEgRE9NIG5vZGUgb3IgalF1ZXJ5IGNvbGxlY3Rpb25cbiAgICAgICAgICBnbG9iYWxFdmVudENvbnRleHQgPSBzLmNvbnRleHQgJiYgKGNhbGxiYWNrQ29udGV4dC5ub2RlVHlwZSB8fCBjYWxsYmFja0NvbnRleHQuanF1ZXJ5KSA/IGpRdWVyeShjYWxsYmFja0NvbnRleHQpIDogalF1ZXJ5LmV2ZW50LFxuICAgICAgICAgICAgICAvLyBEZWZlcnJlZHNcbiAgICAgICAgICBkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuICAgICAgICAgICAgICBjb21wbGV0ZURlZmVycmVkID0galF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFxuICAgICAgICAgICAgICAvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuICAgICAgICAgIF9zdGF0dXNDb2RlID0gcy5zdGF0dXNDb2RlIHx8IHt9LFxuICAgICAgICAgICAgICAvLyBIZWFkZXJzICh0aGV5IGFyZSBzZW50IGFsbCBhdCBvbmNlKVxuICAgICAgICAgIHJlcXVlc3RIZWFkZXJzID0ge30sXG4gICAgICAgICAgICAgIHJlcXVlc3RIZWFkZXJzTmFtZXMgPSB7fSxcbiAgICAgICAgICAgICAgLy8gRGVmYXVsdCBhYm9ydCBtZXNzYWdlXG4gICAgICAgICAgc3RyQWJvcnQgPSBcImNhbmNlbGVkXCIsXG4gICAgICAgICAgICAgIC8vIEZha2UgeGhyXG4gICAgICAgICAganFYSFIgPSB7XG4gICAgICAgICAgICByZWFkeVN0YXRlOiAwLFxuICAgICAgICAgICAgLy8gQnVpbGRzIGhlYWRlcnMgaGFzaHRhYmxlIGlmIG5lZWRlZFxuICAgICAgICAgICAgZ2V0UmVzcG9uc2VIZWFkZXI6IGZ1bmN0aW9uIGdldFJlc3BvbnNlSGVhZGVyKGtleSkge1xuICAgICAgICAgICAgICB2YXIgbWF0Y2g7XG5cbiAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICByZXNwb25zZUhlYWRlcnMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgd2hpbGUgKG1hdGNoID0gcmhlYWRlcnMuZXhlYyhyZXNwb25zZUhlYWRlcnNTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSGVhZGVyc1ttYXRjaFsxXS50b0xvd2VyQ2FzZSgpICsgXCIgXCJdID0gKHJlc3BvbnNlSGVhZGVyc1ttYXRjaFsxXS50b0xvd2VyQ2FzZSgpICsgXCIgXCJdIHx8IFtdKS5jb25jYXQobWF0Y2hbMl0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1hdGNoID0gcmVzcG9uc2VIZWFkZXJzW2tleS50b0xvd2VyQ2FzZSgpICsgXCIgXCJdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID09IG51bGwgPyBudWxsIDogbWF0Y2guam9pbihcIiwgXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFJhdyBzdHJpbmdcbiAgICAgICAgICAgIGdldEFsbFJlc3BvbnNlSGVhZGVyczogZnVuY3Rpb24gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkge1xuICAgICAgICAgICAgICByZXR1cm4gY29tcGxldGVkID8gcmVzcG9uc2VIZWFkZXJzU3RyaW5nIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBDYWNoZXMgdGhlIGhlYWRlclxuICAgICAgICAgICAgc2V0UmVxdWVzdEhlYWRlcjogZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoY29tcGxldGVkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gcmVxdWVzdEhlYWRlcnNOYW1lc1tuYW1lLnRvTG93ZXJDYXNlKCldID0gcmVxdWVzdEhlYWRlcnNOYW1lc1tuYW1lLnRvTG93ZXJDYXNlKCldIHx8IG5hbWU7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIE92ZXJyaWRlcyByZXNwb25zZSBjb250ZW50LXR5cGUgaGVhZGVyXG4gICAgICAgICAgICBvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiBvdmVycmlkZU1pbWVUeXBlKHR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcy5taW1lVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuICAgICAgICAgICAgc3RhdHVzQ29kZTogZnVuY3Rpb24gc3RhdHVzQ29kZShtYXApIHtcbiAgICAgICAgICAgICAgdmFyIGNvZGU7XG5cbiAgICAgICAgICAgICAgaWYgKG1hcCkge1xuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrc1xuICAgICAgICAgICAgICAgICAganFYSFIuYWx3YXlzKG1hcFtqcVhIUi5zdGF0dXNdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gTGF6eS1hZGQgdGhlIG5ldyBjYWxsYmFja3MgaW4gYSB3YXkgdGhhdCBwcmVzZXJ2ZXMgb2xkIG9uZXNcbiAgICAgICAgICAgICAgICAgIGZvciAoY29kZSBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICAgICAgX3N0YXR1c0NvZGVbY29kZV0gPSBbX3N0YXR1c0NvZGVbY29kZV0sIG1hcFtjb2RlXV07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSByZXF1ZXN0XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoc3RhdHVzVGV4dCkge1xuICAgICAgICAgICAgICB2YXIgZmluYWxUZXh0ID0gc3RhdHVzVGV4dCB8fCBzdHJBYm9ydDtcblxuICAgICAgICAgICAgICBpZiAodHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LmFib3J0KGZpbmFsVGV4dCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkb25lKDAsIGZpbmFsVGV4dCk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07IC8vIEF0dGFjaCBkZWZlcnJlZHNcblxuXG4gICAgICAgICAgZGVmZXJyZWQucHJvbWlzZShqcVhIUik7IC8vIEFkZCBwcm90b2NvbCBpZiBub3QgcHJvdmlkZWQgKHByZWZpbHRlcnMgbWlnaHQgZXhwZWN0IGl0KVxuICAgICAgICAgIC8vIEhhbmRsZSBmYWxzeSB1cmwgaW4gdGhlIHNldHRpbmdzIG9iamVjdCAoIzEwMDkzOiBjb25zaXN0ZW5jeSB3aXRoIG9sZCBzaWduYXR1cmUpXG4gICAgICAgICAgLy8gV2UgYWxzbyB1c2UgdGhlIHVybCBwYXJhbWV0ZXIgaWYgYXZhaWxhYmxlXG5cbiAgICAgICAgICBzLnVybCA9ICgodXJsIHx8IHMudXJsIHx8IGxvY2F0aW9uLmhyZWYpICsgXCJcIikucmVwbGFjZShycHJvdG9jb2wsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiKTsgLy8gQWxpYXMgbWV0aG9kIG9wdGlvbiB0byB0eXBlIGFzIHBlciB0aWNrZXQgIzEyMDA0XG5cbiAgICAgICAgICBzLnR5cGUgPSBvcHRpb25zLm1ldGhvZCB8fCBvcHRpb25zLnR5cGUgfHwgcy5tZXRob2QgfHwgcy50eXBlOyAvLyBFeHRyYWN0IGRhdGFUeXBlcyBsaXN0XG5cbiAgICAgICAgICBzLmRhdGFUeXBlcyA9IChzLmRhdGFUeXBlIHx8IFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtcIlwiXTsgLy8gQSBjcm9zcy1kb21haW4gcmVxdWVzdCBpcyBpbiBvcmRlciB3aGVuIHRoZSBvcmlnaW4gZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBvcmlnaW4uXG5cbiAgICAgICAgICBpZiAocy5jcm9zc0RvbWFpbiA9PSBudWxsKSB7XG4gICAgICAgICAgICB1cmxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTsgLy8gU3VwcG9ydDogSUUgPD04IC0gMTEsIEVkZ2UgMTIgLSAxNVxuICAgICAgICAgICAgLy8gSUUgdGhyb3dzIGV4Y2VwdGlvbiBvbiBhY2Nlc3NpbmcgdGhlIGhyZWYgcHJvcGVydHkgaWYgdXJsIGlzIG1hbGZvcm1lZCxcbiAgICAgICAgICAgIC8vIGUuZy4gaHR0cDovL2V4YW1wbGUuY29tOjgweC9cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdXJsQW5jaG9yLmhyZWYgPSBzLnVybDsgLy8gU3VwcG9ydDogSUUgPD04IC0gMTEgb25seVxuICAgICAgICAgICAgICAvLyBBbmNob3IncyBob3N0IHByb3BlcnR5IGlzbid0IGNvcnJlY3RseSBzZXQgd2hlbiBzLnVybCBpcyByZWxhdGl2ZVxuXG4gICAgICAgICAgICAgIHVybEFuY2hvci5ocmVmID0gdXJsQW5jaG9yLmhyZWY7XG4gICAgICAgICAgICAgIHMuY3Jvc3NEb21haW4gPSBvcmlnaW5BbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyBvcmlnaW5BbmNob3IuaG9zdCAhPT0gdXJsQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgdXJsQW5jaG9yLmhvc3Q7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGFuIGVycm9yIHBhcnNpbmcgdGhlIFVSTCwgYXNzdW1lIGl0IGlzIGNyb3NzRG9tYWluLFxuICAgICAgICAgICAgICAvLyBpdCBjYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIHRyYW5zcG9ydCBpZiBpdCBpcyBpbnZhbGlkXG4gICAgICAgICAgICAgIHMuY3Jvc3NEb21haW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gQ29udmVydCBkYXRhIGlmIG5vdCBhbHJlYWR5IGEgc3RyaW5nXG5cblxuICAgICAgICAgIGlmIChzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJiB0eXBlb2Ygcy5kYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBzLmRhdGEgPSBqUXVlcnkucGFyYW0ocy5kYXRhLCBzLnRyYWRpdGlvbmFsKTtcbiAgICAgICAgICB9IC8vIEFwcGx5IHByZWZpbHRlcnNcblxuXG4gICAgICAgICAgaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMocHJlZmlsdGVycywgcywgb3B0aW9ucywganFYSFIpOyAvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhIHByZWZpbHRlciwgc3RvcCB0aGVyZVxuXG4gICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGpxWEhSO1xuICAgICAgICAgIH0gLy8gV2UgY2FuIGZpcmUgZ2xvYmFsIGV2ZW50cyBhcyBvZiBub3cgaWYgYXNrZWQgdG9cbiAgICAgICAgICAvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAoIzE1MTE4KVxuXG5cbiAgICAgICAgICBmaXJlR2xvYmFscyA9IGpRdWVyeS5ldmVudCAmJiBzLmdsb2JhbDsgLy8gV2F0Y2ggZm9yIGEgbmV3IHNldCBvZiByZXF1ZXN0c1xuXG4gICAgICAgICAgaWYgKGZpcmVHbG9iYWxzICYmIGpRdWVyeS5hY3RpdmUrKyA9PT0gMCkge1xuICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIik7XG4gICAgICAgICAgfSAvLyBVcHBlcmNhc2UgdGhlIHR5cGVcblxuXG4gICAgICAgICAgcy50eXBlID0gcy50eXBlLnRvVXBwZXJDYXNlKCk7IC8vIERldGVybWluZSBpZiByZXF1ZXN0IGhhcyBjb250ZW50XG5cbiAgICAgICAgICBzLmhhc0NvbnRlbnQgPSAhcm5vQ29udGVudC50ZXN0KHMudHlwZSk7IC8vIFNhdmUgdGhlIFVSTCBpbiBjYXNlIHdlJ3JlIHRveWluZyB3aXRoIHRoZSBJZi1Nb2RpZmllZC1TaW5jZVxuICAgICAgICAgIC8vIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciBsYXRlciBvblxuICAgICAgICAgIC8vIFJlbW92ZSBoYXNoIHRvIHNpbXBsaWZ5IHVybCBtYW5pcHVsYXRpb25cblxuICAgICAgICAgIGNhY2hlVVJMID0gcy51cmwucmVwbGFjZShyaGFzaCwgXCJcIik7IC8vIE1vcmUgb3B0aW9ucyBoYW5kbGluZyBmb3IgcmVxdWVzdHMgd2l0aCBubyBjb250ZW50XG5cbiAgICAgICAgICBpZiAoIXMuaGFzQ29udGVudCkge1xuICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhlIGhhc2ggc28gd2UgY2FuIHB1dCBpdCBiYWNrXG4gICAgICAgICAgICB1bmNhY2hlZCA9IHMudXJsLnNsaWNlKGNhY2hlVVJMLmxlbmd0aCk7IC8vIElmIGRhdGEgaXMgYXZhaWxhYmxlIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkLCBhcHBlbmQgZGF0YSB0byB1cmxcblxuICAgICAgICAgICAgaWYgKHMuZGF0YSAmJiAocy5wcm9jZXNzRGF0YSB8fCB0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICBjYWNoZVVSTCArPSAocnF1ZXJ5LnRlc3QoY2FjaGVVUkwpID8gXCImXCIgOiBcIj9cIikgKyBzLmRhdGE7IC8vICM5NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcblxuICAgICAgICAgICAgICBkZWxldGUgcy5kYXRhO1xuICAgICAgICAgICAgfSAvLyBBZGQgb3IgdXBkYXRlIGFudGktY2FjaGUgcGFyYW0gaWYgbmVlZGVkXG5cblxuICAgICAgICAgICAgaWYgKHMuY2FjaGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGNhY2hlVVJMID0gY2FjaGVVUkwucmVwbGFjZShyYW50aUNhY2hlLCBcIiQxXCIpO1xuICAgICAgICAgICAgICB1bmNhY2hlZCA9IChycXVlcnkudGVzdChjYWNoZVVSTCkgPyBcIiZcIiA6IFwiP1wiKSArIFwiXz1cIiArIG5vbmNlKysgKyB1bmNhY2hlZDtcbiAgICAgICAgICAgIH0gLy8gUHV0IGhhc2ggYW5kIGFudGktY2FjaGUgb24gdGhlIFVSTCB0aGF0IHdpbGwgYmUgcmVxdWVzdGVkIChnaC0xNzMyKVxuXG5cbiAgICAgICAgICAgIHMudXJsID0gY2FjaGVVUkwgKyB1bmNhY2hlZDsgLy8gQ2hhbmdlICclMjAnIHRvICcrJyBpZiB0aGlzIGlzIGVuY29kZWQgZm9ybSBib2R5IGNvbnRlbnQgKGdoLTI2NTgpXG4gICAgICAgICAgfSBlbHNlIGlmIChzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJiAocy5jb250ZW50VHlwZSB8fCBcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpID09PSAwKSB7XG4gICAgICAgICAgICBzLmRhdGEgPSBzLmRhdGEucmVwbGFjZShyMjAsIFwiK1wiKTtcbiAgICAgICAgICB9IC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cblxuICAgICAgICAgIGlmIChzLmlmTW9kaWZpZWQpIHtcbiAgICAgICAgICAgIGlmIChqUXVlcnkubGFzdE1vZGlmaWVkW2NhY2hlVVJMXSkge1xuICAgICAgICAgICAgICBqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgalF1ZXJ5Lmxhc3RNb2RpZmllZFtjYWNoZVVSTF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoalF1ZXJ5LmV0YWdbY2FjaGVVUkxdKSB7XG4gICAgICAgICAgICAgIGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsIGpRdWVyeS5ldGFnW2NhY2hlVVJMXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBTZXQgdGhlIGNvcnJlY3QgaGVhZGVyLCBpZiBkYXRhIGlzIGJlaW5nIHNlbnRcblxuXG4gICAgICAgICAgaWYgKHMuZGF0YSAmJiBzLmhhc0NvbnRlbnQgJiYgcy5jb250ZW50VHlwZSAhPT0gZmFsc2UgfHwgb3B0aW9ucy5jb250ZW50VHlwZSkge1xuICAgICAgICAgICAganFYSFIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBzLmNvbnRlbnRUeXBlKTtcbiAgICAgICAgICB9IC8vIFNldCB0aGUgQWNjZXB0cyBoZWFkZXIgZm9yIHRoZSBzZXJ2ZXIsIGRlcGVuZGluZyBvbiB0aGUgZGF0YVR5cGVcblxuXG4gICAgICAgICAganFYSFIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBzLmRhdGFUeXBlc1swXSAmJiBzLmFjY2VwdHNbcy5kYXRhVHlwZXNbMF1dID8gcy5hY2NlcHRzW3MuZGF0YVR5cGVzWzBdXSArIChzLmRhdGFUeXBlc1swXSAhPT0gXCIqXCIgPyBcIiwgXCIgKyBhbGxUeXBlcyArIFwiOyBxPTAuMDFcIiA6IFwiXCIpIDogcy5hY2NlcHRzW1wiKlwiXSk7IC8vIENoZWNrIGZvciBoZWFkZXJzIG9wdGlvblxuXG4gICAgICAgICAgZm9yIChpIGluIHMuaGVhZGVycykge1xuICAgICAgICAgICAganFYSFIuc2V0UmVxdWVzdEhlYWRlcihpLCBzLmhlYWRlcnNbaV0pO1xuICAgICAgICAgIH0gLy8gQWxsb3cgY3VzdG9tIGhlYWRlcnMvbWltZXR5cGVzIGFuZCBlYXJseSBhYm9ydFxuXG5cbiAgICAgICAgICBpZiAocy5iZWZvcmVTZW5kICYmIChzLmJlZm9yZVNlbmQuY2FsbChjYWxsYmFja0NvbnRleHQsIGpxWEhSLCBzKSA9PT0gZmFsc2UgfHwgY29tcGxldGVkKSkge1xuICAgICAgICAgICAgLy8gQWJvcnQgaWYgbm90IGRvbmUgYWxyZWFkeSBhbmQgcmV0dXJuXG4gICAgICAgICAgICByZXR1cm4ganFYSFIuYWJvcnQoKTtcbiAgICAgICAgICB9IC8vIEFib3J0aW5nIGlzIG5vIGxvbmdlciBhIGNhbmNlbGxhdGlvblxuXG5cbiAgICAgICAgICBzdHJBYm9ydCA9IFwiYWJvcnRcIjsgLy8gSW5zdGFsbCBjYWxsYmFja3Mgb24gZGVmZXJyZWRzXG5cbiAgICAgICAgICBjb21wbGV0ZURlZmVycmVkLmFkZChzLmNvbXBsZXRlKTtcbiAgICAgICAgICBqcVhIUi5kb25lKHMuc3VjY2Vzcyk7XG4gICAgICAgICAganFYSFIuZmFpbChzLmVycm9yKTsgLy8gR2V0IHRyYW5zcG9ydFxuXG4gICAgICAgICAgdHJhbnNwb3J0ID0gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHModHJhbnNwb3J0cywgcywgb3B0aW9ucywganFYSFIpOyAvLyBJZiBubyB0cmFuc3BvcnQsIHdlIGF1dG8tYWJvcnRcblxuICAgICAgICAgIGlmICghdHJhbnNwb3J0KSB7XG4gICAgICAgICAgICBkb25lKC0xLCBcIk5vIFRyYW5zcG9ydFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAganFYSFIucmVhZHlTdGF0ZSA9IDE7IC8vIFNlbmQgZ2xvYmFsIGV2ZW50XG5cbiAgICAgICAgICAgIGlmIChmaXJlR2xvYmFscykge1xuICAgICAgICAgICAgICBnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlcihcImFqYXhTZW5kXCIsIFtqcVhIUiwgc10pO1xuICAgICAgICAgICAgfSAvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhamF4U2VuZCwgc3RvcCB0aGVyZVxuXG5cbiAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGpxWEhSO1xuICAgICAgICAgICAgfSAvLyBUaW1lb3V0XG5cblxuICAgICAgICAgICAgaWYgKHMuYXN5bmMgJiYgcy50aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgICB0aW1lb3V0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAganFYSFIuYWJvcnQoXCJ0aW1lb3V0XCIpO1xuICAgICAgICAgICAgICB9LCBzLnRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdHJhbnNwb3J0LnNlbmQocmVxdWVzdEhlYWRlcnMsIGRvbmUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAvLyBSZXRocm93IHBvc3QtY29tcGxldGlvbiBleGNlcHRpb25zXG4gICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICB9IC8vIFByb3BhZ2F0ZSBvdGhlcnMgYXMgcmVzdWx0c1xuXG5cbiAgICAgICAgICAgICAgZG9uZSgtMSwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBDYWxsYmFjayBmb3Igd2hlbiBldmVyeXRoaW5nIGlzIGRvbmVcblxuXG4gICAgICAgICAgZnVuY3Rpb24gZG9uZShzdGF0dXMsIG5hdGl2ZVN0YXR1c1RleHQsIHJlc3BvbnNlcywgaGVhZGVycykge1xuICAgICAgICAgICAgdmFyIGlzU3VjY2VzcyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzLFxuICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVkLFxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBuYXRpdmVTdGF0dXNUZXh0OyAvLyBJZ25vcmUgcmVwZWF0IGludm9jYXRpb25zXG5cbiAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlOyAvLyBDbGVhciB0aW1lb3V0IGlmIGl0IGV4aXN0c1xuXG4gICAgICAgICAgICBpZiAodGltZW91dFRpbWVyKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dFRpbWVyKTtcbiAgICAgICAgICAgIH0gLy8gRGVyZWZlcmVuY2UgdHJhbnNwb3J0IGZvciBlYXJseSBnYXJiYWdlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgIC8vIChubyBtYXR0ZXIgaG93IGxvbmcgdGhlIGpxWEhSIG9iamVjdCB3aWxsIGJlIHVzZWQpXG5cblxuICAgICAgICAgICAgdHJhbnNwb3J0ID0gdW5kZWZpbmVkOyAvLyBDYWNoZSByZXNwb25zZSBoZWFkZXJzXG5cbiAgICAgICAgICAgIHJlc3BvbnNlSGVhZGVyc1N0cmluZyA9IGhlYWRlcnMgfHwgXCJcIjsgLy8gU2V0IHJlYWR5U3RhdGVcblxuICAgICAgICAgICAganFYSFIucmVhZHlTdGF0ZSA9IHN0YXR1cyA+IDAgPyA0IDogMDsgLy8gRGV0ZXJtaW5lIGlmIHN1Y2Nlc3NmdWxcblxuICAgICAgICAgICAgaXNTdWNjZXNzID0gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDAgfHwgc3RhdHVzID09PSAzMDQ7IC8vIEdldCByZXNwb25zZSBkYXRhXG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZXMpIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2UgPSBhamF4SGFuZGxlUmVzcG9uc2VzKHMsIGpxWEhSLCByZXNwb25zZXMpO1xuICAgICAgICAgICAgfSAvLyBDb252ZXJ0IG5vIG1hdHRlciB3aGF0ICh0aGF0IHdheSByZXNwb25zZVhYWCBmaWVsZHMgYXJlIGFsd2F5cyBzZXQpXG5cblxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhamF4Q29udmVydChzLCByZXNwb25zZSwganFYSFIsIGlzU3VjY2Vzcyk7IC8vIElmIHN1Y2Nlc3NmdWwsIGhhbmRsZSB0eXBlIGNoYWluaW5nXG5cbiAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgLy8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cbiAgICAgICAgICAgICAgaWYgKHMuaWZNb2RpZmllZCkge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVkKSB7XG4gICAgICAgICAgICAgICAgICBqUXVlcnkubGFzdE1vZGlmaWVkW2NhY2hlVVJMXSA9IG1vZGlmaWVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVkKSB7XG4gICAgICAgICAgICAgICAgICBqUXVlcnkuZXRhZ1tjYWNoZVVSTF0gPSBtb2RpZmllZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gLy8gaWYgbm8gY29udGVudFxuXG5cbiAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjA0IHx8IHMudHlwZSA9PT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gXCJub2NvbnRlbnRcIjsgLy8gaWYgbm90IG1vZGlmaWVkXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAzMDQpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gXCJub3Rtb2RpZmllZFwiOyAvLyBJZiB3ZSBoYXZlIGRhdGEsIGxldCdzIGNvbnZlcnQgaXRcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdGU7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSByZXNwb25zZS5lcnJvcjtcbiAgICAgICAgICAgICAgICBpc1N1Y2Nlc3MgPSAhZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEV4dHJhY3QgZXJyb3IgZnJvbSBzdGF0dXNUZXh0IGFuZCBub3JtYWxpemUgZm9yIG5vbi1hYm9ydHNcbiAgICAgICAgICAgICAgZXJyb3IgPSBzdGF0dXNUZXh0O1xuXG4gICAgICAgICAgICAgIGlmIChzdGF0dXMgfHwgIXN0YXR1c1RleHQpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gXCJlcnJvclwiO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA8IDApIHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIFNldCBkYXRhIGZvciB0aGUgZmFrZSB4aHIgb2JqZWN0XG5cblxuICAgICAgICAgICAganFYSFIuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAganFYSFIuc3RhdHVzVGV4dCA9IChuYXRpdmVTdGF0dXNUZXh0IHx8IHN0YXR1c1RleHQpICsgXCJcIjsgLy8gU3VjY2Vzcy9FcnJvclxuXG4gICAgICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmVXaXRoKGNhbGxiYWNrQ29udGV4dCwgW3N1Y2Nlc3MsIHN0YXR1c1RleHQsIGpxWEhSXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3RXaXRoKGNhbGxiYWNrQ29udGV4dCwgW2pxWEhSLCBzdGF0dXNUZXh0LCBlcnJvcl0pO1xuICAgICAgICAgICAgfSAvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXG5cbiAgICAgICAgICAgIGpxWEhSLnN0YXR1c0NvZGUoX3N0YXR1c0NvZGUpO1xuICAgICAgICAgICAgX3N0YXR1c0NvZGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChmaXJlR2xvYmFscykge1xuICAgICAgICAgICAgICBnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlcihpc1N1Y2Nlc3MgPyBcImFqYXhTdWNjZXNzXCIgOiBcImFqYXhFcnJvclwiLCBbanFYSFIsIHMsIGlzU3VjY2VzcyA/IHN1Y2Nlc3MgOiBlcnJvcl0pO1xuICAgICAgICAgICAgfSAvLyBDb21wbGV0ZVxuXG5cbiAgICAgICAgICAgIGNvbXBsZXRlRGVmZXJyZWQuZmlyZVdpdGgoY2FsbGJhY2tDb250ZXh0LCBbanFYSFIsIHN0YXR1c1RleHRdKTtcblxuICAgICAgICAgICAgaWYgKGZpcmVHbG9iYWxzKSB7XG4gICAgICAgICAgICAgIGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsIFtqcVhIUiwgc10pOyAvLyBIYW5kbGUgdGhlIGdsb2JhbCBBSkFYIGNvdW50ZXJcblxuICAgICAgICAgICAgICBpZiAoISAtLWpRdWVyeS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGpxWEhSO1xuICAgICAgICB9LFxuICAgICAgICBnZXRKU09OOiBmdW5jdGlvbiBnZXRKU09OKHVybCwgZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4galF1ZXJ5LmdldCh1cmwsIGRhdGEsIGNhbGxiYWNrLCBcImpzb25cIik7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFNjcmlwdDogZnVuY3Rpb24gZ2V0U2NyaXB0KHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4galF1ZXJ5LmdldCh1cmwsIHVuZGVmaW5lZCwgY2FsbGJhY2ssIFwic2NyaXB0XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeS5lYWNoKFtcImdldFwiLCBcInBvc3RcIl0sIGZ1bmN0aW9uIChpLCBtZXRob2QpIHtcbiAgICAgICAgalF1ZXJ5W21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBjYWxsYmFjaywgdHlwZSkge1xuICAgICAgICAgIC8vIFNoaWZ0IGFyZ3VtZW50cyBpZiBkYXRhIGFyZ3VtZW50IHdhcyBvbWl0dGVkXG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24oZGF0YSkpIHtcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlIHx8IGNhbGxiYWNrO1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBkYXRhO1xuICAgICAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9IC8vIFRoZSB1cmwgY2FuIGJlIGFuIG9wdGlvbnMgb2JqZWN0ICh3aGljaCB0aGVuIG11c3QgaGF2ZSAudXJsKVxuXG5cbiAgICAgICAgICByZXR1cm4galF1ZXJ5LmFqYXgoalF1ZXJ5LmV4dGVuZCh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHR5cGU6IG1ldGhvZCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiB0eXBlLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrXG4gICAgICAgICAgfSwgalF1ZXJ5LmlzUGxhaW5PYmplY3QodXJsKSAmJiB1cmwpKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBqUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgLy8gTWFrZSB0aGlzIGV4cGxpY2l0LCBzaW5jZSB1c2VyIGNhbiBvdmVycmlkZSB0aGlzIHRocm91Z2ggYWpheFNldHVwICgjMTEyNjQpXG4gICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICBkYXRhVHlwZTogXCJzY3JpcHRcIixcbiAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICBhc3luYzogZmFsc2UsXG4gICAgICAgICAgZ2xvYmFsOiBmYWxzZSxcbiAgICAgICAgICAvLyBPbmx5IGV2YWx1YXRlIHRoZSByZXNwb25zZSBpZiBpdCBpcyBzdWNjZXNzZnVsIChnaC00MTI2KVxuICAgICAgICAgIC8vIGRhdGFGaWx0ZXIgaXMgbm90IGludm9rZWQgZm9yIGZhaWx1cmUgcmVzcG9uc2VzLCBzbyB1c2luZyBpdCBpbnN0ZWFkXG4gICAgICAgICAgLy8gb2YgdGhlIGRlZmF1bHQgY29udmVydGVyIGlzIGtsdWRneSBidXQgaXQgd29ya3MuXG4gICAgICAgICAgY29udmVydGVyczoge1xuICAgICAgICAgICAgXCJ0ZXh0IHNjcmlwdFwiOiBmdW5jdGlvbiB0ZXh0U2NyaXB0KCkge31cbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGFGaWx0ZXI6IGZ1bmN0aW9uIGRhdGFGaWx0ZXIocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGpRdWVyeS5nbG9iYWxFdmFsKHJlc3BvbnNlLCBvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICAgIHdyYXBBbGw6IGZ1bmN0aW9uIHdyYXBBbGwoaHRtbCkge1xuICAgICAgICAgIHZhciB3cmFwO1xuXG4gICAgICAgICAgaWYgKHRoaXNbMF0pIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGh0bWwpKSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sLmNhbGwodGhpc1swXSk7XG4gICAgICAgICAgICB9IC8vIFRoZSBlbGVtZW50cyB0byB3cmFwIHRoZSB0YXJnZXQgYXJvdW5kXG5cblxuICAgICAgICAgICAgd3JhcCA9IGpRdWVyeShodG1sLCB0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKHRydWUpO1xuXG4gICAgICAgICAgICBpZiAodGhpc1swXS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgIHdyYXAuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3cmFwLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBlbGVtID0gdGhpcztcblxuICAgICAgICAgICAgICB3aGlsZSAoZWxlbS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICB9KS5hcHBlbmQodGhpcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIHdyYXBJbm5lcjogZnVuY3Rpb24gd3JhcElubmVyKGh0bWwpIHtcbiAgICAgICAgICBpZiAoaXNGdW5jdGlvbihodG1sKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICBqUXVlcnkodGhpcykud3JhcElubmVyKGh0bWwuY2FsbCh0aGlzLCBpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0galF1ZXJ5KHRoaXMpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpO1xuXG4gICAgICAgICAgICBpZiAoY29udGVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnRzLndyYXBBbGwoaHRtbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLmFwcGVuZChodG1sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JhcDogZnVuY3Rpb24gd3JhcChodG1sKSB7XG4gICAgICAgICAgdmFyIGh0bWxJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbihodG1sKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICBqUXVlcnkodGhpcykud3JhcEFsbChodG1sSXNGdW5jdGlvbiA/IGh0bWwuY2FsbCh0aGlzLCBpKSA6IGh0bWwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1bndyYXA6IGZ1bmN0aW9uIHVud3JhcChzZWxlY3Rvcikge1xuICAgICAgICAgIHRoaXMucGFyZW50KHNlbGVjdG9yKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBqUXVlcnkuZXhwci5wc2V1ZG9zLmhpZGRlbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiAhalF1ZXJ5LmV4cHIucHNldWRvcy52aXNpYmxlKGVsZW0pO1xuICAgICAgfTtcblxuICAgICAgalF1ZXJ5LmV4cHIucHNldWRvcy52aXNpYmxlID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuICEhKGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG4gICAgICB9O1xuXG4gICAgICBqUXVlcnkuYWpheFNldHRpbmdzLnhociA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfTtcblxuICAgICAgdmFyIHhoclN1Y2Nlc3NTdGF0dXMgPSB7XG4gICAgICAgIC8vIEZpbGUgcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgY29kZSAwLCBhc3N1bWUgMjAwXG4gICAgICAgIDA6IDIwMCxcbiAgICAgICAgLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbiAgICAgICAgLy8gIzE0NTA6IHNvbWV0aW1lcyBJRSByZXR1cm5zIDEyMjMgd2hlbiBpdCBzaG91bGQgYmUgMjA0XG4gICAgICAgIDEyMjM6IDIwNFxuICAgICAgfSxcbiAgICAgICAgICB4aHJTdXBwb3J0ZWQgPSBqUXVlcnkuYWpheFNldHRpbmdzLnhocigpO1xuICAgICAgc3VwcG9ydC5jb3JzID0gISF4aHJTdXBwb3J0ZWQgJiYgXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHJTdXBwb3J0ZWQ7XG4gICAgICBzdXBwb3J0LmFqYXggPSB4aHJTdXBwb3J0ZWQgPSAhIXhoclN1cHBvcnRlZDtcbiAgICAgIGpRdWVyeS5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s7IC8vIENyb3NzIGRvbWFpbiBvbmx5IGFsbG93ZWQgaWYgc3VwcG9ydGVkIHRocm91Z2ggWE1MSHR0cFJlcXVlc3RcblxuXG4gICAgICAgIGlmIChzdXBwb3J0LmNvcnMgfHwgeGhyU3VwcG9ydGVkICYmICFvcHRpb25zLmNyb3NzRG9tYWluKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbmQ6IGZ1bmN0aW9uIHNlbmQoaGVhZGVycywgY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgICAgICB4aHIgPSBvcHRpb25zLnhocigpO1xuICAgICAgICAgICAgICB4aHIub3BlbihvcHRpb25zLnR5cGUsIG9wdGlvbnMudXJsLCBvcHRpb25zLmFzeW5jLCBvcHRpb25zLnVzZXJuYW1lLCBvcHRpb25zLnBhc3N3b3JkKTsgLy8gQXBwbHkgY3VzdG9tIGZpZWxkcyBpZiBwcm92aWRlZFxuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLnhockZpZWxkcykge1xuICAgICAgICAgICAgICAgIGZvciAoaSBpbiBvcHRpb25zLnhockZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgeGhyW2ldID0gb3B0aW9ucy54aHJGaWVsZHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IC8vIE92ZXJyaWRlIG1pbWUgdHlwZSBpZiBuZWVkZWRcblxuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLm1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgeGhyLm92ZXJyaWRlTWltZVR5cGUob3B0aW9ucy5taW1lVHlwZSk7XG4gICAgICAgICAgICAgIH0gLy8gWC1SZXF1ZXN0ZWQtV2l0aCBoZWFkZXJcbiAgICAgICAgICAgICAgLy8gRm9yIGNyb3NzLWRvbWFpbiByZXF1ZXN0cywgc2VlaW5nIGFzIGNvbmRpdGlvbnMgZm9yIGEgcHJlZmxpZ2h0IGFyZVxuICAgICAgICAgICAgICAvLyBha2luIHRvIGEgamlnc2F3IHB1enpsZSwgd2Ugc2ltcGx5IG5ldmVyIHNldCBpdCB0byBiZSBzdXJlLlxuICAgICAgICAgICAgICAvLyAoaXQgY2FuIGFsd2F5cyBiZSBzZXQgb24gYSBwZXItcmVxdWVzdCBiYXNpcyBvciBldmVuIHVzaW5nIGFqYXhTZXR1cClcbiAgICAgICAgICAgICAgLy8gRm9yIHNhbWUtZG9tYWluIHJlcXVlc3RzLCB3b24ndCBjaGFuZ2UgaGVhZGVyIGlmIGFscmVhZHkgcHJvdmlkZWQuXG5cblxuICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuY3Jvc3NEb21haW4gJiYgIWhlYWRlcnNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyc1tcIlgtUmVxdWVzdGVkLVdpdGhcIl0gPSBcIlhNTEh0dHBSZXF1ZXN0XCI7XG4gICAgICAgICAgICAgIH0gLy8gU2V0IGhlYWRlcnNcblxuXG4gICAgICAgICAgICAgIGZvciAoaSBpbiBoZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgaGVhZGVyc1tpXSk7XG4gICAgICAgICAgICAgIH0gLy8gQ2FsbGJhY2tcblxuXG4gICAgICAgICAgICAgIF9jYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgaWYgKF9jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBfY2FsbGJhY2sgPSBlcnJvckNhbGxiYWNrID0geGhyLm9ubG9hZCA9IHhoci5vbmVycm9yID0geGhyLm9uYWJvcnQgPSB4aHIub250aW1lb3V0ID0geGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiYWJvcnRcIikge1xuICAgICAgICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgLy8gT24gYSBtYW51YWwgbmF0aXZlIGFib3J0LCBJRTkgdGhyb3dzXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3JzIG9uIGFueSBwcm9wZXJ0eSBhY2Nlc3MgdGhhdCBpcyBub3QgcmVhZHlTdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgeGhyLnN0YXR1cyAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoMCwgXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoIC8vIEZpbGU6IHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIDA7IHNlZSAjODYwNSwgIzE0MjA3XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIuc3RhdHVzLCB4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKHhoclN1Y2Nlc3NTdGF0dXNbeGhyLnN0YXR1c10gfHwgeGhyLnN0YXR1cywgeGhyLnN0YXR1c1RleHQsIC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgLy8gSUU5IGhhcyBubyBYSFIyIGJ1dCB0aHJvd3Mgb24gYmluYXJ5ICh0cmFjLTExNDI2KVxuICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBYSFIyIG5vbi10ZXh0LCBsZXQgdGhlIGNhbGxlciBoYW5kbGUgaXQgKGdoLTI0OTgpXG4gICAgICAgICAgICAgICAgICAgICAgKHhoci5yZXNwb25zZVR5cGUgfHwgXCJ0ZXh0XCIpICE9PSBcInRleHRcIiB8fCB0eXBlb2YgeGhyLnJlc3BvbnNlVGV4dCAhPT0gXCJzdHJpbmdcIiA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeTogeGhyLnJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgICAgICAgICAgICAgICB9LCB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfTsgLy8gTGlzdGVuIHRvIGV2ZW50c1xuXG5cbiAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IF9jYWxsYmFjaygpO1xuICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrID0geGhyLm9uZXJyb3IgPSB4aHIub250aW1lb3V0ID0gX2NhbGxiYWNrKFwiZXJyb3JcIik7IC8vIFN1cHBvcnQ6IElFIDkgb25seVxuICAgICAgICAgICAgICAvLyBVc2Ugb25yZWFkeXN0YXRlY2hhbmdlIHRvIHJlcGxhY2Ugb25hYm9ydFxuICAgICAgICAgICAgICAvLyB0byBoYW5kbGUgdW5jYXVnaHQgYWJvcnRzXG5cbiAgICAgICAgICAgICAgaWYgKHhoci5vbmFib3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB4aHIub25hYm9ydCA9IGVycm9yQ2FsbGJhY2s7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHJlYWR5U3RhdGUgYmVmb3JlIHRpbWVvdXQgYXMgaXQgY2hhbmdlc1xuICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IG9uZXJyb3IgdG8gYmUgY2FsbGVkIGZpcnN0LFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgdGhhdCB3aWxsIG5vdCBoYW5kbGUgYSBuYXRpdmUgYWJvcnRcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxzbywgc2F2ZSBlcnJvckNhbGxiYWNrIHRvIGEgdmFyaWFibGVcbiAgICAgICAgICAgICAgICAgICAgLy8gYXMgeGhyLm9uZXJyb3IgY2Fubm90IGJlIGFjY2Vzc2VkXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoX2NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IC8vIENyZWF0ZSB0aGUgYWJvcnQgY2FsbGJhY2tcblxuXG4gICAgICAgICAgICAgIF9jYWxsYmFjayA9IF9jYWxsYmFjayhcImFib3J0XCIpO1xuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gc2VuZCB0aGUgcmVxdWVzdCAodGhpcyBtYXkgcmFpc2UgYW4gZXhjZXB0aW9uKVxuICAgICAgICAgICAgICAgIHhoci5zZW5kKG9wdGlvbnMuaGFzQ29udGVudCAmJiBvcHRpb25zLmRhdGEgfHwgbnVsbCk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyAjMTQ2ODM6IE9ubHkgcmV0aHJvdyBpZiB0aGlzIGhhc24ndCBiZWVuIG5vdGlmaWVkIGFzIGFuIGVycm9yIHlldFxuICAgICAgICAgICAgICAgIGlmIChfY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICAgICAgICBpZiAoX2NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgX2NhbGxiYWNrKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gUHJldmVudCBhdXRvLWV4ZWN1dGlvbiBvZiBzY3JpcHRzIHdoZW4gbm8gZXhwbGljaXQgZGF0YVR5cGUgd2FzIHByb3ZpZGVkIChTZWUgZ2gtMjQzMilcblxuICAgICAgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgaWYgKHMuY3Jvc3NEb21haW4pIHtcbiAgICAgICAgICBzLmNvbnRlbnRzLnNjcmlwdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gSW5zdGFsbCBzY3JpcHQgZGF0YVR5cGVcblxuICAgICAgalF1ZXJ5LmFqYXhTZXR1cCh7XG4gICAgICAgIGFjY2VwdHM6IHtcbiAgICAgICAgICBzY3JpcHQ6IFwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBcIiArIFwiYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudHM6IHtcbiAgICAgICAgICBzY3JpcHQ6IC9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL1xuICAgICAgICB9LFxuICAgICAgICBjb252ZXJ0ZXJzOiB7XG4gICAgICAgICAgXCJ0ZXh0IHNjcmlwdFwiOiBmdW5jdGlvbiB0ZXh0U2NyaXB0KHRleHQpIHtcbiAgICAgICAgICAgIGpRdWVyeS5nbG9iYWxFdmFsKHRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTsgLy8gSGFuZGxlIGNhY2hlJ3Mgc3BlY2lhbCBjYXNlIGFuZCBjcm9zc0RvbWFpblxuXG4gICAgICBqUXVlcnkuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLCBmdW5jdGlvbiAocykge1xuICAgICAgICBpZiAocy5jYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcy5jYWNoZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHMuY3Jvc3NEb21haW4pIHtcbiAgICAgICAgICBzLnR5cGUgPSBcIkdFVFwiO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gQmluZCBzY3JpcHQgdGFnIGhhY2sgdHJhbnNwb3J0XG5cbiAgICAgIGpRdWVyeS5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIC8vIFRoaXMgdHJhbnNwb3J0IG9ubHkgZGVhbHMgd2l0aCBjcm9zcyBkb21haW4gb3IgZm9yY2VkLWJ5LWF0dHJzIHJlcXVlc3RzXG4gICAgICAgIGlmIChzLmNyb3NzRG9tYWluIHx8IHMuc2NyaXB0QXR0cnMpIHtcbiAgICAgICAgICB2YXIgc2NyaXB0LCBfY2FsbGJhY2syO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbmQ6IGZ1bmN0aW9uIHNlbmQoXywgY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgc2NyaXB0ID0galF1ZXJ5KFwiPHNjcmlwdD5cIikuYXR0cihzLnNjcmlwdEF0dHJzIHx8IHt9KS5wcm9wKHtcbiAgICAgICAgICAgICAgICBjaGFyc2V0OiBzLnNjcmlwdENoYXJzZXQsXG4gICAgICAgICAgICAgICAgc3JjOiBzLnVybFxuICAgICAgICAgICAgICB9KS5vbihcImxvYWQgZXJyb3JcIiwgX2NhbGxiYWNrMiA9IGZ1bmN0aW9uIGNhbGxiYWNrKGV2dCkge1xuICAgICAgICAgICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBfY2FsbGJhY2syID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKGV2dC50eXBlID09PSBcImVycm9yXCIgPyA0MDQgOiAyMDAsIGV2dC50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pOyAvLyBVc2UgbmF0aXZlIERPTSBtYW5pcHVsYXRpb24gdG8gYXZvaWQgb3VyIGRvbU1hbmlwIEFKQVggdHJpY2tlcnlcblxuICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFswXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICAgICAgICBpZiAoX2NhbGxiYWNrMikge1xuICAgICAgICAgICAgICAgIF9jYWxsYmFjazIoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdmFyIG9sZENhbGxiYWNrcyA9IFtdLFxuICAgICAgICAgIHJqc29ucCA9IC8oPSlcXD8oPz0mfCQpfFxcP1xcPy87IC8vIERlZmF1bHQganNvbnAgc2V0dGluZ3NcblxuICAgICAgalF1ZXJ5LmFqYXhTZXR1cCh7XG4gICAgICAgIGpzb25wOiBcImNhbGxiYWNrXCIsXG4gICAgICAgIGpzb25wQ2FsbGJhY2s6IGZ1bmN0aW9uIGpzb25wQ2FsbGJhY2soKSB7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrID0gb2xkQ2FsbGJhY2tzLnBvcCgpIHx8IGpRdWVyeS5leHBhbmRvICsgXCJfXCIgKyBub25jZSsrO1xuICAgICAgICAgIHRoaXNbY2FsbGJhY2tdID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBEZXRlY3QsIG5vcm1hbGl6ZSBvcHRpb25zIGFuZCBpbnN0YWxsIGNhbGxiYWNrcyBmb3IganNvbnAgcmVxdWVzdHNcblxuICAgICAgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsIGZ1bmN0aW9uIChzLCBvcmlnaW5hbFNldHRpbmdzLCBqcVhIUikge1xuICAgICAgICB2YXIgY2FsbGJhY2tOYW1lLFxuICAgICAgICAgICAgb3ZlcndyaXR0ZW4sXG4gICAgICAgICAgICByZXNwb25zZUNvbnRhaW5lcixcbiAgICAgICAgICAgIGpzb25Qcm9wID0gcy5qc29ucCAhPT0gZmFsc2UgJiYgKHJqc29ucC50ZXN0KHMudXJsKSA/IFwidXJsXCIgOiB0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiICYmIChzLmNvbnRlbnRUeXBlIHx8IFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikgPT09IDAgJiYgcmpzb25wLnRlc3Qocy5kYXRhKSAmJiBcImRhdGFcIik7IC8vIEhhbmRsZSBpZmYgdGhlIGV4cGVjdGVkIGRhdGEgdHlwZSBpcyBcImpzb25wXCIgb3Igd2UgaGF2ZSBhIHBhcmFtZXRlciB0byBzZXRcblxuICAgICAgICBpZiAoanNvblByb3AgfHwgcy5kYXRhVHlwZXNbMF0gPT09IFwianNvbnBcIikge1xuICAgICAgICAgIC8vIEdldCBjYWxsYmFjayBuYW1lLCByZW1lbWJlcmluZyBwcmVleGlzdGluZyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggaXRcbiAgICAgICAgICBjYWxsYmFja05hbWUgPSBzLmpzb25wQ2FsbGJhY2sgPSBpc0Z1bmN0aW9uKHMuanNvbnBDYWxsYmFjaykgPyBzLmpzb25wQ2FsbGJhY2soKSA6IHMuanNvbnBDYWxsYmFjazsgLy8gSW5zZXJ0IGNhbGxiYWNrIGludG8gdXJsIG9yIGZvcm0gZGF0YVxuXG4gICAgICAgICAgaWYgKGpzb25Qcm9wKSB7XG4gICAgICAgICAgICBzW2pzb25Qcm9wXSA9IHNbanNvblByb3BdLnJlcGxhY2Uocmpzb25wLCBcIiQxXCIgKyBjYWxsYmFja05hbWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocy5qc29ucCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHMudXJsICs9IChycXVlcnkudGVzdChzLnVybCkgPyBcIiZcIiA6IFwiP1wiKSArIHMuanNvbnAgKyBcIj1cIiArIGNhbGxiYWNrTmFtZTtcbiAgICAgICAgICB9IC8vIFVzZSBkYXRhIGNvbnZlcnRlciB0byByZXRyaWV2ZSBqc29uIGFmdGVyIHNjcmlwdCBleGVjdXRpb25cblxuXG4gICAgICAgICAgcy5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgIGpRdWVyeS5lcnJvcihjYWxsYmFja05hbWUgKyBcIiB3YXMgbm90IGNhbGxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlQ29udGFpbmVyWzBdO1xuICAgICAgICAgIH07IC8vIEZvcmNlIGpzb24gZGF0YVR5cGVcblxuXG4gICAgICAgICAgcy5kYXRhVHlwZXNbMF0gPSBcImpzb25cIjsgLy8gSW5zdGFsbCBjYWxsYmFja1xuXG4gICAgICAgICAgb3ZlcndyaXR0ZW4gPSB3aW5kb3dbY2FsbGJhY2tOYW1lXTtcblxuICAgICAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzcG9uc2VDb250YWluZXIgPSBhcmd1bWVudHM7XG4gICAgICAgICAgfTsgLy8gQ2xlYW4tdXAgZnVuY3Rpb24gKGZpcmVzIGFmdGVyIGNvbnZlcnRlcnMpXG5cblxuICAgICAgICAgIGpxWEhSLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBJZiBwcmV2aW91cyB2YWx1ZSBkaWRuJ3QgZXhpc3QgLSByZW1vdmUgaXRcbiAgICAgICAgICAgIGlmIChvdmVyd3JpdHRlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGpRdWVyeSh3aW5kb3cpLnJlbW92ZVByb3AoY2FsbGJhY2tOYW1lKTsgLy8gT3RoZXJ3aXNlIHJlc3RvcmUgcHJlZXhpc3RpbmcgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gb3ZlcndyaXR0ZW47XG4gICAgICAgICAgICB9IC8vIFNhdmUgYmFjayBhcyBmcmVlXG5cblxuICAgICAgICAgICAgaWYgKHNbY2FsbGJhY2tOYW1lXSkge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCByZS11c2luZyB0aGUgb3B0aW9ucyBkb2Vzbid0IHNjcmV3IHRoaW5ncyBhcm91bmRcbiAgICAgICAgICAgICAgcy5qc29ucENhbGxiYWNrID0gb3JpZ2luYWxTZXR0aW5ncy5qc29ucENhbGxiYWNrOyAvLyBTYXZlIHRoZSBjYWxsYmFjayBuYW1lIGZvciBmdXR1cmUgdXNlXG5cbiAgICAgICAgICAgICAgb2xkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2tOYW1lKTtcbiAgICAgICAgICAgIH0gLy8gQ2FsbCBpZiBpdCB3YXMgYSBmdW5jdGlvbiBhbmQgd2UgaGF2ZSBhIHJlc3BvbnNlXG5cblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlQ29udGFpbmVyICYmIGlzRnVuY3Rpb24ob3ZlcndyaXR0ZW4pKSB7XG4gICAgICAgICAgICAgIG92ZXJ3cml0dGVuKHJlc3BvbnNlQ29udGFpbmVyWzBdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzcG9uc2VDb250YWluZXIgPSBvdmVyd3JpdHRlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9KTsgLy8gRGVsZWdhdGUgdG8gc2NyaXB0XG5cbiAgICAgICAgICByZXR1cm4gXCJzY3JpcHRcIjtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFN1cHBvcnQ6IFNhZmFyaSA4IG9ubHlcbiAgICAgIC8vIEluIFNhZmFyaSA4IGRvY3VtZW50cyBjcmVhdGVkIHZpYSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnRcbiAgICAgIC8vIGNvbGxhcHNlIHNpYmxpbmcgZm9ybXM6IHRoZSBzZWNvbmQgb25lIGJlY29tZXMgYSBjaGlsZCBvZiB0aGUgZmlyc3Qgb25lLlxuICAgICAgLy8gQmVjYXVzZSBvZiB0aGF0LCB0aGlzIHNlY3VyaXR5IG1lYXN1cmUgaGFzIHRvIGJlIGRpc2FibGVkIGluIFNhZmFyaSA4LlxuICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzMzN1xuXG4gICAgICBzdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSBcIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCI7XG4gICAgICAgIHJldHVybiBib2R5LmNoaWxkTm9kZXMubGVuZ3RoID09PSAyO1xuICAgICAgfSgpOyAvLyBBcmd1bWVudCBcImRhdGFcIiBzaG91bGQgYmUgc3RyaW5nIG9mIGh0bWxcbiAgICAgIC8vIGNvbnRleHQgKG9wdGlvbmFsKTogSWYgc3BlY2lmaWVkLCB0aGUgZnJhZ21lbnQgd2lsbCBiZSBjcmVhdGVkIGluIHRoaXMgY29udGV4dCxcbiAgICAgIC8vIGRlZmF1bHRzIHRvIGRvY3VtZW50XG4gICAgICAvLyBrZWVwU2NyaXB0cyAob3B0aW9uYWwpOiBJZiB0cnVlLCB3aWxsIGluY2x1ZGUgc2NyaXB0cyBwYXNzZWQgaW4gdGhlIGh0bWwgc3RyaW5nXG5cblxuICAgICAgalF1ZXJ5LnBhcnNlSFRNTCA9IGZ1bmN0aW9uIChkYXRhLCBjb250ZXh0LCBrZWVwU2NyaXB0cykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAga2VlcFNjcmlwdHMgPSBjb250ZXh0O1xuICAgICAgICAgIGNvbnRleHQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiYXNlLCBwYXJzZWQsIHNjcmlwdHM7XG5cbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgLy8gU3RvcCBzY3JpcHRzIG9yIGlubGluZSBldmVudCBoYW5kbGVycyBmcm9tIGJlaW5nIGV4ZWN1dGVkIGltbWVkaWF0ZWx5XG4gICAgICAgICAgLy8gYnkgdXNpbmcgZG9jdW1lbnQuaW1wbGVtZW50YXRpb25cbiAgICAgICAgICBpZiAoc3VwcG9ydC5jcmVhdGVIVE1MRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIik7IC8vIFNldCB0aGUgYmFzZSBocmVmIGZvciB0aGUgY3JlYXRlZCBkb2N1bWVudFxuICAgICAgICAgICAgLy8gc28gYW55IHBhcnNlZCBlbGVtZW50cyB3aXRoIFVSTHNcbiAgICAgICAgICAgIC8vIGFyZSBiYXNlZCBvbiB0aGUgZG9jdW1lbnQncyBVUkwgKGdoLTI5NjUpXG5cbiAgICAgICAgICAgIGJhc2UgPSBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpO1xuICAgICAgICAgICAgYmFzZS5ocmVmID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgIGNvbnRleHQuaGVhZC5hcHBlbmRDaGlsZChiYXNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZCA9IHJzaW5nbGVUYWcuZXhlYyhkYXRhKTtcbiAgICAgICAgc2NyaXB0cyA9ICFrZWVwU2NyaXB0cyAmJiBbXTsgLy8gU2luZ2xlIHRhZ1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICByZXR1cm4gW2NvbnRleHQuY3JlYXRlRWxlbWVudChwYXJzZWRbMV0pXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZCA9IGJ1aWxkRnJhZ21lbnQoW2RhdGFdLCBjb250ZXh0LCBzY3JpcHRzKTtcblxuICAgICAgICBpZiAoc2NyaXB0cyAmJiBzY3JpcHRzLmxlbmd0aCkge1xuICAgICAgICAgIGpRdWVyeShzY3JpcHRzKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBqUXVlcnkubWVyZ2UoW10sIHBhcnNlZC5jaGlsZE5vZGVzKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIExvYWQgYSB1cmwgaW50byBhIHBhZ2VcbiAgICAgICAqL1xuXG5cbiAgICAgIGpRdWVyeS5mbi5sb2FkID0gZnVuY3Rpb24gKHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZWN0b3IsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIG9mZiA9IHVybC5pbmRleE9mKFwiIFwiKTtcblxuICAgICAgICBpZiAob2ZmID4gLTEpIHtcbiAgICAgICAgICBzZWxlY3RvciA9IHN0cmlwQW5kQ29sbGFwc2UodXJsLnNsaWNlKG9mZikpO1xuICAgICAgICAgIHVybCA9IHVybC5zbGljZSgwLCBvZmYpO1xuICAgICAgICB9IC8vIElmIGl0J3MgYSBmdW5jdGlvblxuXG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocGFyYW1zKSkge1xuICAgICAgICAgIC8vIFdlIGFzc3VtZSB0aGF0IGl0J3MgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgY2FsbGJhY2sgPSBwYXJhbXM7XG4gICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkOyAvLyBPdGhlcndpc2UsIGJ1aWxkIGEgcGFyYW0gc3RyaW5nXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1zICYmIF90eXBlb2YocGFyYW1zKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIHR5cGUgPSBcIlBPU1RcIjtcbiAgICAgICAgfSAvLyBJZiB3ZSBoYXZlIGVsZW1lbnRzIHRvIG1vZGlmeSwgbWFrZSB0aGUgcmVxdWVzdFxuXG5cbiAgICAgICAgaWYgKHNlbGYubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgLy8gSWYgXCJ0eXBlXCIgdmFyaWFibGUgaXMgdW5kZWZpbmVkLCB0aGVuIFwiR0VUXCIgbWV0aG9kIHdpbGwgYmUgdXNlZC5cbiAgICAgICAgICAgIC8vIE1ha2UgdmFsdWUgb2YgdGhpcyBmaWVsZCBleHBsaWNpdCBzaW5jZVxuICAgICAgICAgICAgLy8gdXNlciBjYW4gb3ZlcnJpZGUgaXQgdGhyb3VnaCBhamF4U2V0dXAgbWV0aG9kXG4gICAgICAgICAgICB0eXBlOiB0eXBlIHx8IFwiR0VUXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gICAgICAgICAgICBkYXRhOiBwYXJhbXNcbiAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgIC8vIFNhdmUgcmVzcG9uc2UgZm9yIHVzZSBpbiBjb21wbGV0ZSBjYWxsYmFja1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICBzZWxmLmh0bWwoc2VsZWN0b3IgPyAvLyBJZiBhIHNlbGVjdG9yIHdhcyBzcGVjaWZpZWQsIGxvY2F0ZSB0aGUgcmlnaHQgZWxlbWVudHMgaW4gYSBkdW1teSBkaXZcbiAgICAgICAgICAgIC8vIEV4Y2x1ZGUgc2NyaXB0cyB0byBhdm9pZCBJRSAnUGVybWlzc2lvbiBEZW5pZWQnIGVycm9yc1xuICAgICAgICAgICAgalF1ZXJ5KFwiPGRpdj5cIikuYXBwZW5kKGpRdWVyeS5wYXJzZUhUTUwocmVzcG9uc2VUZXh0KSkuZmluZChzZWxlY3RvcikgOiAvLyBPdGhlcndpc2UgdXNlIHRoZSBmdWxsIHJlc3VsdFxuICAgICAgICAgICAgcmVzcG9uc2VUZXh0KTsgLy8gSWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImRhdGFcIiwgXCJzdGF0dXNcIiwgXCJqcVhIUlwiXG4gICAgICAgICAgICAvLyBidXQgdGhleSBhcmUgaWdub3JlZCBiZWNhdXNlIHJlc3BvbnNlIHdhcyBzZXQgYWJvdmUuXG4gICAgICAgICAgICAvLyBJZiBpdCBmYWlscywgdGhpcyBmdW5jdGlvbiBnZXRzIFwianFYSFJcIiwgXCJzdGF0dXNcIiwgXCJlcnJvclwiXG4gICAgICAgICAgfSkuYWx3YXlzKGNhbGxiYWNrICYmIGZ1bmN0aW9uIChqcVhIUiwgc3RhdHVzKSB7XG4gICAgICAgICAgICBzZWxmLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCByZXNwb25zZSB8fCBbanFYSFIucmVzcG9uc2VUZXh0LCBzdGF0dXMsIGpxWEhSXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTsgLy8gQXR0YWNoIGEgYnVuY2ggb2YgZnVuY3Rpb25zIGZvciBoYW5kbGluZyBjb21tb24gQUpBWCBldmVudHNcblxuXG4gICAgICBqUXVlcnkuZWFjaChbXCJhamF4U3RhcnRcIiwgXCJhamF4U3RvcFwiLCBcImFqYXhDb21wbGV0ZVwiLCBcImFqYXhFcnJvclwiLCBcImFqYXhTdWNjZXNzXCIsIFwiYWpheFNlbmRcIl0sIGZ1bmN0aW9uIChpLCB0eXBlKSB7XG4gICAgICAgIGpRdWVyeS5mblt0eXBlXSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9uKHR5cGUsIGZuKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBqUXVlcnkuZXhwci5wc2V1ZG9zLmFuaW1hdGVkID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGpRdWVyeS5ncmVwKGpRdWVyeS50aW1lcnMsIGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgIHJldHVybiBlbGVtID09PSBmbi5lbGVtO1xuICAgICAgICB9KS5sZW5ndGg7XG4gICAgICB9O1xuXG4gICAgICBqUXVlcnkub2Zmc2V0ID0ge1xuICAgICAgICBzZXRPZmZzZXQ6IGZ1bmN0aW9uIHNldE9mZnNldChlbGVtLCBvcHRpb25zLCBpKSB7XG4gICAgICAgICAgdmFyIGN1clBvc2l0aW9uLFxuICAgICAgICAgICAgICBjdXJMZWZ0LFxuICAgICAgICAgICAgICBjdXJDU1NUb3AsXG4gICAgICAgICAgICAgIGN1clRvcCxcbiAgICAgICAgICAgICAgY3VyT2Zmc2V0LFxuICAgICAgICAgICAgICBjdXJDU1NMZWZ0LFxuICAgICAgICAgICAgICBjYWxjdWxhdGVQb3NpdGlvbixcbiAgICAgICAgICAgICAgcG9zaXRpb24gPSBqUXVlcnkuY3NzKGVsZW0sIFwicG9zaXRpb25cIiksXG4gICAgICAgICAgICAgIGN1ckVsZW0gPSBqUXVlcnkoZWxlbSksXG4gICAgICAgICAgICAgIHByb3BzID0ge307IC8vIFNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cblxuICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgZWxlbS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJPZmZzZXQgPSBjdXJFbGVtLm9mZnNldCgpO1xuICAgICAgICAgIGN1ckNTU1RvcCA9IGpRdWVyeS5jc3MoZWxlbSwgXCJ0b3BcIik7XG4gICAgICAgICAgY3VyQ1NTTGVmdCA9IGpRdWVyeS5jc3MoZWxlbSwgXCJsZWZ0XCIpO1xuICAgICAgICAgIGNhbGN1bGF0ZVBvc2l0aW9uID0gKHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwiZml4ZWRcIikgJiYgKGN1ckNTU1RvcCArIGN1ckNTU0xlZnQpLmluZGV4T2YoXCJhdXRvXCIpID4gLTE7IC8vIE5lZWQgdG8gYmUgYWJsZSB0byBjYWxjdWxhdGUgcG9zaXRpb24gaWYgZWl0aGVyXG4gICAgICAgICAgLy8gdG9wIG9yIGxlZnQgaXMgYXV0byBhbmQgcG9zaXRpb24gaXMgZWl0aGVyIGFic29sdXRlIG9yIGZpeGVkXG5cbiAgICAgICAgICBpZiAoY2FsY3VsYXRlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGN1clBvc2l0aW9uID0gY3VyRWxlbS5wb3NpdGlvbigpO1xuICAgICAgICAgICAgY3VyVG9wID0gY3VyUG9zaXRpb24udG9wO1xuICAgICAgICAgICAgY3VyTGVmdCA9IGN1clBvc2l0aW9uLmxlZnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1clRvcCA9IHBhcnNlRmxvYXQoY3VyQ1NTVG9wKSB8fCAwO1xuICAgICAgICAgICAgY3VyTGVmdCA9IHBhcnNlRmxvYXQoY3VyQ1NTTGVmdCkgfHwgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICAgICAgLy8gVXNlIGpRdWVyeS5leHRlbmQgaGVyZSB0byBhbGxvdyBtb2RpZmljYXRpb24gb2YgY29vcmRpbmF0ZXMgYXJndW1lbnQgKGdoLTE4NDgpXG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucy5jYWxsKGVsZW0sIGksIGpRdWVyeS5leHRlbmQoe30sIGN1ck9mZnNldCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLnRvcCAhPSBudWxsKSB7XG4gICAgICAgICAgICBwcm9wcy50b3AgPSBvcHRpb25zLnRvcCAtIGN1ck9mZnNldC50b3AgKyBjdXJUb3A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9wdGlvbnMubGVmdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBwcm9wcy5sZWZ0ID0gb3B0aW9ucy5sZWZ0IC0gY3VyT2Zmc2V0LmxlZnQgKyBjdXJMZWZ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcInVzaW5nXCIgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucy51c2luZy5jYWxsKGVsZW0sIHByb3BzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VyRWxlbS5jc3MocHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICAvLyBvZmZzZXQoKSByZWxhdGVzIGFuIGVsZW1lbnQncyBib3JkZXIgYm94IHRvIHRoZSBkb2N1bWVudCBvcmlnaW5cbiAgICAgICAgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQob3B0aW9ucykge1xuICAgICAgICAgIC8vIFByZXNlcnZlIGNoYWluaW5nIGZvciBzZXR0ZXJcbiAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgalF1ZXJ5Lm9mZnNldC5zZXRPZmZzZXQodGhpcywgb3B0aW9ucywgaSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjdCxcbiAgICAgICAgICAgICAgd2luLFxuICAgICAgICAgICAgICBlbGVtID0gdGhpc1swXTtcblxuICAgICAgICAgIGlmICghZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiAoZGlzcGxheTogbm9uZSkgZWxlbWVudHMgKGdoLTIzMTApXG4gICAgICAgICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4gICAgICAgICAgLy8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYVxuICAgICAgICAgIC8vIGRpc2Nvbm5lY3RlZCBub2RlIGluIElFIHRocm93cyBhbiBlcnJvclxuXG5cbiAgICAgICAgICBpZiAoIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IC8vIEdldCBkb2N1bWVudC1yZWxhdGl2ZSBwb3NpdGlvbiBieSBhZGRpbmcgdmlld3BvcnQgc2Nyb2xsIHRvIHZpZXdwb3J0LXJlbGF0aXZlIGdCQ1JcblxuXG4gICAgICAgICAgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgd2luID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcG9zaXRpb24oKSByZWxhdGVzIGFuIGVsZW1lbnQncyBtYXJnaW4gYm94IHRvIGl0cyBvZmZzZXQgcGFyZW50J3MgcGFkZGluZyBib3hcbiAgICAgICAgLy8gVGhpcyBjb3JyZXNwb25kcyB0byB0aGUgYmVoYXZpb3Igb2YgQ1NTIGFic29sdXRlIHBvc2l0aW9uaW5nXG4gICAgICAgIHBvc2l0aW9uOiBmdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgICAgICAgICBpZiAoIXRoaXNbMF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgb2Zmc2V0UGFyZW50LFxuICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgICAgZWxlbSA9IHRoaXNbMF0sXG4gICAgICAgICAgICAgIHBhcmVudE9mZnNldCA9IHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICB9OyAvLyBwb3NpdGlvbjpmaXhlZCBlbGVtZW50cyBhcmUgb2Zmc2V0IGZyb20gdGhlIHZpZXdwb3J0LCB3aGljaCBpdHNlbGYgYWx3YXlzIGhhcyB6ZXJvIG9mZnNldFxuXG4gICAgICAgICAgaWYgKGpRdWVyeS5jc3MoZWxlbSwgXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAvLyBBc3N1bWUgcG9zaXRpb246Zml4ZWQgaW1wbGllcyBhdmFpbGFiaWxpdHkgb2YgZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gICAgICAgICAgICBvZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLm9mZnNldCgpOyAvLyBBY2NvdW50IGZvciB0aGUgKnJlYWwqIG9mZnNldCBwYXJlbnQsIHdoaWNoIGNhbiBiZSB0aGUgZG9jdW1lbnQgb3IgaXRzIHJvb3QgZWxlbWVudFxuICAgICAgICAgICAgLy8gd2hlbiBhIHN0YXRpY2FsbHkgcG9zaXRpb25lZCBlbGVtZW50IGlzIGlkZW50aWZpZWRcblxuICAgICAgICAgICAgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgb2Zmc2V0UGFyZW50ID0gZWxlbS5vZmZzZXRQYXJlbnQgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICAgICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiAob2Zmc2V0UGFyZW50ID09PSBkb2MuYm9keSB8fCBvZmZzZXRQYXJlbnQgPT09IGRvYy5kb2N1bWVudEVsZW1lbnQpICYmIGpRdWVyeS5jc3Mob2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIpID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gZWxlbSAmJiBvZmZzZXRQYXJlbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgLy8gSW5jb3Jwb3JhdGUgYm9yZGVycyBpbnRvIGl0cyBvZmZzZXQsIHNpbmNlIHRoZXkgYXJlIG91dHNpZGUgaXRzIGNvbnRlbnQgb3JpZ2luXG4gICAgICAgICAgICAgIHBhcmVudE9mZnNldCA9IGpRdWVyeShvZmZzZXRQYXJlbnQpLm9mZnNldCgpO1xuICAgICAgICAgICAgICBwYXJlbnRPZmZzZXQudG9wICs9IGpRdWVyeS5jc3Mob2Zmc2V0UGFyZW50LCBcImJvcmRlclRvcFdpZHRoXCIsIHRydWUpO1xuICAgICAgICAgICAgICBwYXJlbnRPZmZzZXQubGVmdCArPSBqUXVlcnkuY3NzKG9mZnNldFBhcmVudCwgXCJib3JkZXJMZWZ0V2lkdGhcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBTdWJ0cmFjdCBwYXJlbnQgb2Zmc2V0cyBhbmQgZWxlbWVudCBtYXJnaW5zXG5cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IG9mZnNldC50b3AgLSBwYXJlbnRPZmZzZXQudG9wIC0galF1ZXJ5LmNzcyhlbGVtLCBcIm1hcmdpblRvcFwiLCB0cnVlKSxcbiAgICAgICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQgLSBqUXVlcnkuY3NzKGVsZW0sIFwibWFyZ2luTGVmdFwiLCB0cnVlKVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGRvY3VtZW50RWxlbWVudCBpbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICAgICAgICAvLyAxKSBGb3IgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWUgd2l0aG91dCBvZmZzZXRQYXJlbnQsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuXG4gICAgICAgIC8vICAgIGRvY3VtZW50RWxlbWVudCBvZiB0aGUgcGFyZW50IHdpbmRvd1xuICAgICAgICAvLyAyKSBGb3IgdGhlIGhpZGRlbiBvciBkZXRhY2hlZCBlbGVtZW50XG4gICAgICAgIC8vIDMpIEZvciBib2R5IG9yIGh0bWwgZWxlbWVudCwgaS5lLiBpbiBjYXNlIG9mIHRoZSBodG1sIG5vZGUgLSBpdCB3aWxsIHJldHVybiBpdHNlbGZcbiAgICAgICAgLy9cbiAgICAgICAgLy8gYnV0IHRob3NlIGV4Y2VwdGlvbnMgd2VyZSBuZXZlciBwcmVzZW50ZWQgYXMgYSByZWFsIGxpZmUgdXNlLWNhc2VzXG4gICAgICAgIC8vIGFuZCBtaWdodCBiZSBjb25zaWRlcmVkIGFzIG1vcmUgcHJlZmVyYWJsZSByZXN1bHRzLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGlzIGxvZ2ljLCBob3dldmVyLCBpcyBub3QgZ3VhcmFudGVlZCBhbmQgY2FuIGNoYW5nZSBhdCBhbnkgcG9pbnQgaW4gdGhlIGZ1dHVyZVxuICAgICAgICBvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uIG9mZnNldFBhcmVudCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50O1xuXG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGpRdWVyeS5jc3Mob2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIpID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gQ3JlYXRlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcCBtZXRob2RzXG5cbiAgICAgIGpRdWVyeS5lYWNoKHtcbiAgICAgICAgc2Nyb2xsTGVmdDogXCJwYWdlWE9mZnNldFwiLFxuICAgICAgICBzY3JvbGxUb3A6IFwicGFnZVlPZmZzZXRcIlxuICAgICAgfSwgZnVuY3Rpb24gKG1ldGhvZCwgcHJvcCkge1xuICAgICAgICB2YXIgdG9wID0gXCJwYWdlWU9mZnNldFwiID09PSBwcm9wO1xuXG4gICAgICAgIGpRdWVyeS5mblttZXRob2RdID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHJldHVybiBhY2Nlc3ModGhpcywgZnVuY3Rpb24gKGVsZW0sIG1ldGhvZCwgdmFsKSB7XG4gICAgICAgICAgICAvLyBDb2FsZXNjZSBkb2N1bWVudHMgYW5kIHdpbmRvd3NcbiAgICAgICAgICAgIHZhciB3aW47XG5cbiAgICAgICAgICAgIGlmIChpc1dpbmRvdyhlbGVtKSkge1xuICAgICAgICAgICAgICB3aW4gPSBlbGVtO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgICAgICAgIHdpbiA9IGVsZW0uZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gd2luID8gd2luW3Byb3BdIDogZWxlbVttZXRob2RdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luKSB7XG4gICAgICAgICAgICAgIHdpbi5zY3JvbGxUbyghdG9wID8gdmFsIDogd2luLnBhZ2VYT2Zmc2V0LCB0b3AgPyB2YWwgOiB3aW4ucGFnZVlPZmZzZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbVttZXRob2RdID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIG1ldGhvZCwgdmFsLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgfTtcbiAgICAgIH0pOyAvLyBTdXBwb3J0OiBTYWZhcmkgPD03IC0gOS4xLCBDaHJvbWUgPD0zNyAtIDQ5XG4gICAgICAvLyBBZGQgdGhlIHRvcC9sZWZ0IGNzc0hvb2tzIHVzaW5nIGpRdWVyeS5mbi5wb3NpdGlvblxuICAgICAgLy8gV2Via2l0IGJ1ZzogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MDg0XG4gICAgICAvLyBCbGluayBidWc6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTU4OTM0N1xuICAgICAgLy8gZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIHBlcmNlbnQgd2hlbiBzcGVjaWZpZWQgZm9yIHRvcC9sZWZ0L2JvdHRvbS9yaWdodDtcbiAgICAgIC8vIHJhdGhlciB0aGFuIG1ha2UgdGhlIGNzcyBtb2R1bGUgZGVwZW5kIG9uIHRoZSBvZmZzZXQgbW9kdWxlLCBqdXN0IGNoZWNrIGZvciBpdCBoZXJlXG5cbiAgICAgIGpRdWVyeS5lYWNoKFtcInRvcFwiLCBcImxlZnRcIl0sIGZ1bmN0aW9uIChpLCBwcm9wKSB7XG4gICAgICAgIGpRdWVyeS5jc3NIb29rc1twcm9wXSA9IGFkZEdldEhvb2tJZihzdXBwb3J0LnBpeGVsUG9zaXRpb24sIGZ1bmN0aW9uIChlbGVtLCBjb21wdXRlZCkge1xuICAgICAgICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICAgICAgY29tcHV0ZWQgPSBjdXJDU1MoZWxlbSwgcHJvcCk7IC8vIElmIGN1ckNTUyByZXR1cm5zIHBlcmNlbnRhZ2UsIGZhbGxiYWNrIHRvIG9mZnNldFxuXG4gICAgICAgICAgICByZXR1cm4gcm51bW5vbnB4LnRlc3QoY29tcHV0ZWQpID8galF1ZXJ5KGVsZW0pLnBvc2l0aW9uKClbcHJvcF0gKyBcInB4XCIgOiBjb21wdXRlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vIENyZWF0ZSBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCwgaGVpZ2h0LCB3aWR0aCwgb3V0ZXJIZWlnaHQgYW5kIG91dGVyV2lkdGggbWV0aG9kc1xuXG4gICAgICBqUXVlcnkuZWFjaCh7XG4gICAgICAgIEhlaWdodDogXCJoZWlnaHRcIixcbiAgICAgICAgV2lkdGg6IFwid2lkdGhcIlxuICAgICAgfSwgZnVuY3Rpb24gKG5hbWUsIHR5cGUpIHtcbiAgICAgICAgalF1ZXJ5LmVhY2goe1xuICAgICAgICAgIHBhZGRpbmc6IFwiaW5uZXJcIiArIG5hbWUsXG4gICAgICAgICAgY29udGVudDogdHlwZSxcbiAgICAgICAgICBcIlwiOiBcIm91dGVyXCIgKyBuYW1lXG4gICAgICAgIH0sIGZ1bmN0aW9uIChkZWZhdWx0RXh0cmEsIGZ1bmNOYW1lKSB7XG4gICAgICAgICAgLy8gTWFyZ2luIGlzIG9ubHkgZm9yIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoXG4gICAgICAgICAgalF1ZXJ5LmZuW2Z1bmNOYW1lXSA9IGZ1bmN0aW9uIChtYXJnaW4sIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY2hhaW5hYmxlID0gYXJndW1lbnRzLmxlbmd0aCAmJiAoZGVmYXVsdEV4dHJhIHx8IHR5cGVvZiBtYXJnaW4gIT09IFwiYm9vbGVhblwiKSxcbiAgICAgICAgICAgICAgICBleHRyYSA9IGRlZmF1bHRFeHRyYSB8fCAobWFyZ2luID09PSB0cnVlIHx8IHZhbHVlID09PSB0cnVlID8gXCJtYXJnaW5cIiA6IFwiYm9yZGVyXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBmdW5jdGlvbiAoZWxlbSwgdHlwZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgdmFyIGRvYztcblxuICAgICAgICAgICAgICBpZiAoaXNXaW5kb3coZWxlbSkpIHtcbiAgICAgICAgICAgICAgICAvLyAkKCB3aW5kb3cgKS5vdXRlcldpZHRoL0hlaWdodCByZXR1cm4gdy9oIGluY2x1ZGluZyBzY3JvbGxiYXJzIChnaC0xNzI5KVxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jTmFtZS5pbmRleE9mKFwib3V0ZXJcIikgPT09IDAgPyBlbGVtW1wiaW5uZXJcIiArIG5hbWVdIDogZWxlbS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIiArIG5hbWVdO1xuICAgICAgICAgICAgICB9IC8vIEdldCBkb2N1bWVudCB3aWR0aCBvciBoZWlnaHRcblxuXG4gICAgICAgICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgICAgICAgICAgZG9jID0gZWxlbS5kb2N1bWVudEVsZW1lbnQ7IC8vIEVpdGhlciBzY3JvbGxbV2lkdGgvSGVpZ2h0XSBvciBvZmZzZXRbV2lkdGgvSGVpZ2h0XSBvciBjbGllbnRbV2lkdGgvSGVpZ2h0XSxcbiAgICAgICAgICAgICAgICAvLyB3aGljaGV2ZXIgaXMgZ3JlYXRlc3RcblxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChlbGVtLmJvZHlbXCJzY3JvbGxcIiArIG5hbWVdLCBkb2NbXCJzY3JvbGxcIiArIG5hbWVdLCBlbGVtLmJvZHlbXCJvZmZzZXRcIiArIG5hbWVdLCBkb2NbXCJvZmZzZXRcIiArIG5hbWVdLCBkb2NbXCJjbGllbnRcIiArIG5hbWVdKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gLy8gR2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudCwgcmVxdWVzdGluZyBidXQgbm90IGZvcmNpbmcgcGFyc2VGbG9hdFxuICAgICAgICAgICAgICBqUXVlcnkuY3NzKGVsZW0sIHR5cGUsIGV4dHJhKSA6IC8vIFNldCB3aWR0aCBvciBoZWlnaHQgb24gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgalF1ZXJ5LnN0eWxlKGVsZW0sIHR5cGUsIHZhbHVlLCBleHRyYSk7XG4gICAgICAgICAgICB9LCB0eXBlLCBjaGFpbmFibGUgPyBtYXJnaW4gOiB1bmRlZmluZWQsIGNoYWluYWJsZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeS5lYWNoKChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIFwiICsgXCJtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBcIiArIFwiY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiKS5zcGxpdChcIiBcIiksIGZ1bmN0aW9uIChpLCBuYW1lKSB7XG4gICAgICAgIC8vIEhhbmRsZSBldmVudCBiaW5kaW5nXG4gICAgICAgIGpRdWVyeS5mbltuYW1lXSA9IGZ1bmN0aW9uIChkYXRhLCBmbikge1xuICAgICAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMCA/IHRoaXMub24obmFtZSwgbnVsbCwgZGF0YSwgZm4pIDogdGhpcy50cmlnZ2VyKG5hbWUpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgICAgaG92ZXI6IGZ1bmN0aW9uIGhvdmVyKGZuT3ZlciwgZm5PdXQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb3VzZWVudGVyKGZuT3ZlcikubW91c2VsZWF2ZShmbk91dCB8fCBmbk92ZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKHR5cGVzLCBkYXRhLCBmbikge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9uKHR5cGVzLCBudWxsLCBkYXRhLCBmbik7XG4gICAgICAgIH0sXG4gICAgICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKHR5cGVzLCBmbikge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9mZih0eXBlcywgbnVsbCwgZm4pO1xuICAgICAgICB9LFxuICAgICAgICBkZWxlZ2F0ZTogZnVuY3Rpb24gZGVsZWdhdGUoc2VsZWN0b3IsIHR5cGVzLCBkYXRhLCBmbikge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9uKHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4pO1xuICAgICAgICB9LFxuICAgICAgICB1bmRlbGVnYXRlOiBmdW5jdGlvbiB1bmRlbGVnYXRlKHNlbGVjdG9yLCB0eXBlcywgZm4pIHtcbiAgICAgICAgICAvLyAoIG5hbWVzcGFjZSApIG9yICggc2VsZWN0b3IsIHR5cGVzIFssIGZuXSApXG4gICAgICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyB0aGlzLm9mZihzZWxlY3RvciwgXCIqKlwiKSA6IHRoaXMub2ZmKHR5cGVzLCBzZWxlY3RvciB8fCBcIioqXCIsIGZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHQsIG9wdGlvbmFsbHkgcGFydGlhbGx5IGFwcGx5aW5nIGFueVxuICAgICAgLy8gYXJndW1lbnRzLlxuICAgICAgLy8galF1ZXJ5LnByb3h5IGlzIGRlcHJlY2F0ZWQgdG8gcHJvbW90ZSBzdGFuZGFyZHMgKHNwZWNpZmljYWxseSBGdW5jdGlvbiNiaW5kKVxuICAgICAgLy8gSG93ZXZlciwgaXQgaXMgbm90IHNsYXRlZCBmb3IgcmVtb3ZhbCBhbnkgdGltZSBzb29uXG5cbiAgICAgIGpRdWVyeS5wcm94eSA9IGZ1bmN0aW9uIChmbiwgY29udGV4dCkge1xuICAgICAgICB2YXIgdG1wLCBhcmdzLCBwcm94eTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICB0bXAgPSBmbltjb250ZXh0XTtcbiAgICAgICAgICBjb250ZXh0ID0gZm47XG4gICAgICAgICAgZm4gPSB0bXA7XG4gICAgICAgIH0gLy8gUXVpY2sgY2hlY2sgdG8gZGV0ZXJtaW5lIGlmIHRhcmdldCBpcyBjYWxsYWJsZSwgaW4gdGhlIHNwZWNcbiAgICAgICAgLy8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cblxuXG4gICAgICAgIGlmICghaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9IC8vIFNpbXVsYXRlZCBiaW5kXG5cblxuICAgICAgICBhcmdzID0gX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcblxuICAgICAgICBwcm94eSA9IGZ1bmN0aW9uIHByb3h5KCkge1xuICAgICAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0IHx8IHRoaXMsIGFyZ3MuY29uY2F0KF9zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfTsgLy8gU2V0IHRoZSBndWlkIG9mIHVuaXF1ZSBoYW5kbGVyIHRvIHRoZSBzYW1lIG9mIG9yaWdpbmFsIGhhbmRsZXIsIHNvIGl0IGNhbiBiZSByZW1vdmVkXG5cblxuICAgICAgICBwcm94eS5ndWlkID0gZm4uZ3VpZCA9IGZuLmd1aWQgfHwgalF1ZXJ5Lmd1aWQrKztcbiAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgfTtcblxuICAgICAgalF1ZXJ5LmhvbGRSZWFkeSA9IGZ1bmN0aW9uIChob2xkKSB7XG4gICAgICAgIGlmIChob2xkKSB7XG4gICAgICAgICAgalF1ZXJ5LnJlYWR5V2FpdCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGpRdWVyeS5yZWFkeSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgalF1ZXJ5LmlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICAgICAgalF1ZXJ5LnBhcnNlSlNPTiA9IEpTT04ucGFyc2U7XG4gICAgICBqUXVlcnkubm9kZU5hbWUgPSBub2RlTmFtZTtcbiAgICAgIGpRdWVyeS5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbiAgICAgIGpRdWVyeS5pc1dpbmRvdyA9IGlzV2luZG93O1xuICAgICAgalF1ZXJ5LmNhbWVsQ2FzZSA9IGNhbWVsQ2FzZTtcbiAgICAgIGpRdWVyeS50eXBlID0gdG9UeXBlO1xuICAgICAgalF1ZXJ5Lm5vdyA9IERhdGUubm93O1xuXG4gICAgICBqUXVlcnkuaXNOdW1lcmljID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAvLyBBcyBvZiBqUXVlcnkgMy4wLCBpc051bWVyaWMgaXMgbGltaXRlZCB0b1xuICAgICAgICAvLyBzdHJpbmdzIGFuZCBudW1iZXJzIChwcmltaXRpdmVzIG9yIG9iamVjdHMpXG4gICAgICAgIC8vIHRoYXQgY2FuIGJlIGNvZXJjZWQgdG8gZmluaXRlIG51bWJlcnMgKGdoLTI2NjIpXG4gICAgICAgIHZhciB0eXBlID0galF1ZXJ5LnR5cGUob2JqKTtcbiAgICAgICAgcmV0dXJuICh0eXBlID09PSBcIm51bWJlclwiIHx8IHR5cGUgPT09IFwic3RyaW5nXCIpICYmIC8vIHBhcnNlRmxvYXQgTmFOcyBudW1lcmljLWNhc3QgZmFsc2UgcG9zaXRpdmVzIChcIlwiKVxuICAgICAgICAvLyAuLi5idXQgbWlzaW50ZXJwcmV0cyBsZWFkaW5nLW51bWJlciBzdHJpbmdzLCBwYXJ0aWN1bGFybHkgaGV4IGxpdGVyYWxzIChcIjB4Li4uXCIpXG4gICAgICAgIC8vIHN1YnRyYWN0aW9uIGZvcmNlcyBpbmZpbml0aWVzIHRvIE5hTlxuICAgICAgICAhaXNOYU4ob2JqIC0gcGFyc2VGbG9hdChvYmopKTtcbiAgICAgIH07IC8vIFJlZ2lzdGVyIGFzIGEgbmFtZWQgQU1EIG1vZHVsZSwgc2luY2UgalF1ZXJ5IGNhbiBiZSBjb25jYXRlbmF0ZWQgd2l0aCBvdGhlclxuXG5cbiAgICAgIHZhciAvLyBNYXAgb3ZlciBqUXVlcnkgaW4gY2FzZSBvZiBvdmVyd3JpdGVcbiAgICAgIF9qUXVlcnkgPSB3aW5kb3cualF1ZXJ5LFxuICAgICAgICAgIC8vIE1hcCBvdmVyIHRoZSAkIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG4gICAgICBfJCA9IHdpbmRvdy4kO1xuXG4gICAgICBqUXVlcnkubm9Db25mbGljdCA9IGZ1bmN0aW9uIChkZWVwKSB7XG4gICAgICAgIGlmICh3aW5kb3cuJCA9PT0galF1ZXJ5KSB7XG4gICAgICAgICAgd2luZG93LiQgPSBfJDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWVwICYmIHdpbmRvdy5qUXVlcnkgPT09IGpRdWVyeSkge1xuICAgICAgICAgIHdpbmRvdy5qUXVlcnkgPSBfalF1ZXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpRdWVyeTtcbiAgICAgIH07IC8vIEV4cG9zZSBqUXVlcnkgYW5kICQgaWRlbnRpZmllcnMsIGV2ZW4gaW4gQU1EXG4gICAgICAvLyAoIzcxMDIjY29tbWVudDoxMCwgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvcHVsbC81NTcpXG4gICAgICAvLyBhbmQgQ29tbW9uSlMgZm9yIGJyb3dzZXIgZW11bGF0b3JzICgjMTM1NjYpXG5cblxuICAgICAgaWYgKCFub0dsb2JhbCkge1xuICAgICAgICB3aW5kb3cualF1ZXJ5ID0gd2luZG93LiQgPSBqUXVlcnk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBqUXVlcnk7XG4gICAgfSk7XG4gIH0pO1xuICB2YXIgc3ZnNGV2ZXJ5Ym9keSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAhZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID8gLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAgIC8vIGxpa2UgTm9kZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDogcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xuICAgIH0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qISBzdmc0ZXZlcnlib2R5IHYyLjEuOSB8IGdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9zdmc0ZXZlcnlib2R5ICovXG4gICAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCB0byBob2xkIHRoZSBjb250ZW50cyBvZiB0aGUgdGFyZ2V0XG4gICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgICB2aWV3Qm94ID0gIXN2Zy5oYXNBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpOyAvLyBjb25kaXRpb25hbGx5IHNldCB0aGUgdmlld0JveCBvbiB0aGUgc3ZnXG5cbiAgICAgICAgICB2aWV3Qm94ICYmIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIHZpZXdCb3gpOyAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcblxuICAgICAgICAgIGZvciAoIC8vIGNsb25lIHRoZSB0YXJnZXRcbiAgICAgICAgICB2YXIgY2xvbmUgPSB0YXJnZXQuY2xvbmVOb2RlKCEwKTsgY2xvbmUuY2hpbGROb2Rlcy5sZW5ndGg7KSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICB9IC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG5cblxuICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKSB7XG4gICAgICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSByZXF1ZXN0XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3QgaXMgcmVhZHlcbiAgICAgICAgICBpZiAoNCA9PT0geGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnRcbiAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7IC8vIGVuc3VyZSB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnQgYmFzZWQgb24gdGhlIHhociByZXNwb25zZVxuXG4gICAgICAgICAgICBjYWNoZWREb2N1bWVudCB8fCAoY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLCBjYWNoZWREb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQsIHhoci5fY2FjaGVkVGFyZ2V0ID0ge30pLCAvLyBjbGVhciB0aGUgeGhyIGVtYmVkcyBsaXN0IGFuZCBlbWJlZCBlYWNoIGl0ZW1cbiAgICAgICAgICAgIHhoci5fZW1iZWRzLnNwbGljZSgwKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXTsgLy8gZW5zdXJlIHRoZSBjYWNoZWQgdGFyZ2V0XG5cbiAgICAgICAgICAgICAgdGFyZ2V0IHx8ICh0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXSA9IGNhY2hlZERvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQpKSwgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAvLyB3aGlsZSB0aGUgaW5kZXggZXhpc3RzIGluIHRoZSBsaXZlIDx1c2U+IGNvbGxlY3Rpb25cbiAgICAgICAgICBmb3IgKCAvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgIHZhciBpbmRleCA9IDA7IGluZGV4IDwgdXNlcy5sZW5ndGg7KSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgPHVzZT5cbiAgICAgICAgICAgIHZhciB1c2UgPSB1c2VzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICBzdmcgPSBnZXRTVkdBbmNlc3RvcihwYXJlbnQpLFxuICAgICAgICAgICAgICAgIHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpIHx8IHVzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXG4gICAgICAgICAgICBpZiAoIXNyYyAmJiBvcHRzLmF0dHJpYnV0ZU5hbWUgJiYgKHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUob3B0cy5hdHRyaWJ1dGVOYW1lKSksIHN2ZyAmJiBzcmMpIHtcbiAgICAgICAgICAgICAgaWYgKHBvbHlmaWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgPHVzZT4gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHVzZSk7IC8vIHBhcnNlIHRoZSBzcmMgYW5kIGdldCB0aGUgdXJsIGFuZCBpZFxuXG4gICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHNyY1NwbGl0LnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgICAgICAgaWQgPSBzcmNTcGxpdC5qb2luKFwiI1wiKTsgLy8gaWYgdGhlIGxpbmsgaXMgZXh0ZXJuYWxcblxuICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07IC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG5cbiAgICAgICAgICAgICAgICAgICAgeGhyIHx8ICh4aHIgPSByZXF1ZXN0c1t1cmxdID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHhoci5vcGVuKFwiR0VUXCIsIHVybCksIHhoci5zZW5kKCksIHhoci5fZW1iZWRzID0gW10pLCAvLyBhZGQgdGhlIHN2ZyBhbmQgaWQgYXMgYW4gaXRlbSB0byB0aGUgeGhyIGVtYmVkcyBsaXN0XG4gICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICB9KSwgLy8gcHJlcGFyZSB0aGUgeGhyIHJlYWR5IHN0YXRlIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgICAgICAgICBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICArK2luZGV4LCArK251bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gY29udGludWUgdGhlIGludGVydmFsXG5cblxuICAgICAgICAgICghdXNlcy5sZW5ndGggfHwgdXNlcy5sZW5ndGggLSBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPiAwKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25pbnRlcnZhbCwgNjcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvbHlmaWxsLFxuICAgICAgICAgICAgb3B0cyA9IE9iamVjdChyYXdvcHRzKSxcbiAgICAgICAgICAgIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLFxuICAgICAgICAgICAgd2Via2l0VUEgPSAvXFxiQXBwbGVXZWJLaXRcXC8oXFxkKylcXGIvLFxuICAgICAgICAgICAgb2xkZXJFZGdlVUEgPSAvXFxiRWRnZVxcLzEyXFwuKFxcZCspXFxiLyxcbiAgICAgICAgICAgIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sXG4gICAgICAgICAgICBpbklmcmFtZSA9IHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmO1xuICAgICAgICBwb2x5ZmlsbCA9IFwicG9seWZpbGxcIiBpbiBvcHRzID8gb3B0cy5wb2x5ZmlsbCA6IG5ld2VySUVVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKG9sZGVyRWRnZVVBKSB8fCBbXSlbMV0gPCAxMDU0NyB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh3ZWJraXRVQSkgfHwgW10pWzFdIDwgNTM3IHx8IGVkZ2VVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIGluSWZyYW1lOyAvLyBjcmVhdGUgeGhyIHJlcXVlc3RzIG9iamVjdFxuXG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LFxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0LFxuICAgICAgICAgICAgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpLFxuICAgICAgICAgICAgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDsgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuXG4gICAgICAgIHBvbHlmaWxsICYmIG9uaW50ZXJ2YWwoKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0U1ZHQW5jZXN0b3Iobm9kZSkge1xuICAgICAgICBmb3IgKHZhciBzdmcgPSBub2RlOyBcInN2Z1wiICE9PSBzdmcubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAmJiAoc3ZnID0gc3ZnLnBhcmVudE5vZGUpOykge31cblxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKTtcbiAgICB2YXIgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uYXZpZ2F0aW9uJyk7XG4gICAgdmFyIG1lbnUgPSBuYXZpZ2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5qcy1tZW51Jyk7XG4gICAgdmFyIGJ0bk1lbnUgPSBuYXZpZ2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJ0bl0nKTtcbiAgICB2YXIgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNlYXJjaCcpO1xuICAgIHZhciBzZWFyY2hGb3JtID0gc2VhcmNoLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWFyY2gtZm9ybScpO1xuICAgIHZhciBidG5TZWFyY2hPcGVuID0gc2VhcmNoLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJ0bi1vcGVuXScpO1xuICAgIHZhciBidG5TZWFyY2hDbG9zZSA9IHNlYXJjaC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1idG4tY2xvc2VdJyk7XG4gICAgdmFyIHNtYWxsV2lkdGggPSB3aW5kb3cub3V0ZXJXaWR0aCA8PSAnNzY4JztcblxuICAgIHZhciB0b2dnbGVNZW51ID0gZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgICAgIGlmIChtZW51LmRhdGFzZXQub3BlbiA9PT0gJ2ZhbHNlJykge1xuICAgICAgICBtZW51LmRhdGFzZXQub3BlbiA9ICd0cnVlJztcblxuICAgICAgICBpZiAoc21hbGxXaWR0aCkge1xuICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnUuZGF0YXNldC5vcGVuID0gJ2ZhbHNlJztcblxuICAgICAgICBpZiAoc21hbGxXaWR0aCkge1xuICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2cod2luZG93Lm91dGVyV2lkdGgpO1xuICAgIGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51KTtcblxuICAgIHZhciBvcGVuU2VhcmNoID0gZnVuY3Rpb24gb3BlblNlYXJjaCgpIHtcbiAgICAgIHNlYXJjaEZvcm0uZGF0YXNldC5vcGVuID0gJ3RydWUnO1xuICAgICAgbmF2aWdhdGlvbi5kYXRhc2V0Lm9wZW4gPSAnZmFsc2UnO1xuICAgICAgYnRuU2VhcmNoT3Blbi5kYXRhc2V0LmNsb3NlID0gJ3RydWUnO1xuICAgIH07XG5cbiAgICBidG5TZWFyY2hPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblNlYXJjaCk7XG5cbiAgICB2YXIgY2xvc2VTZWFyY2ggPSBmdW5jdGlvbiBjbG9zZVNlYXJjaCgpIHtcbiAgICAgIHNlYXJjaEZvcm0uZGF0YXNldC5vcGVuID0gJ2ZhbHNlJztcbiAgICAgIG5hdmlnYXRpb24uZGF0YXNldC5vcGVuID0gJ3RydWUnO1xuICAgICAgYnRuU2VhcmNoT3Blbi5kYXRhc2V0LmNsb3NlID0gJ2ZhbHNlJztcbiAgICB9O1xuXG4gICAgYnRuU2VhcmNoQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVNlYXJjaCk7XG4gIH1cblxuICB3aW5kb3cualF1ZXJ5ID0gd2luZG93LiQgPSBqcXVlcnk7XG4gIHN2ZzRldmVyeWJvZHkoKTtcbiAgaGVhZGVyKCk7XG59KTsiXSwiZmlsZSI6InNjcmlwdHMuanMifQ==
