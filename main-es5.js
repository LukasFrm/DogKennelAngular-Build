(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container col-11\">\n  <div class=\"row\">\n    <div class=\"col-xs-11 mx-auto\">\n      <ul class=\"nav nav-tabs whitebg w-100\">\n        <li\n          role=\"presentation\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n        >\n          <a routerLink=\"/\">Pradinis puslapis</a>\n        </li>\n        <li role=\"presentation\" routerLinkActive=\"active\">\n          <a\n            ><div\n            id=\"carret\"\n              class=\"dropdown ng-app {{openClass}}\"\n              (mouseover)=\"openclass=open\"\n              ng-init=\"openclass=closed\"\n            >\n              <a routerLink=\"/our-dogs\">Mūsų šunys </a>\n              <a\n                class=\"dropdown-toggle\"\n                id=\"dropdownMenuButton\"\n                data-toggle=\"dropdown\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n              >\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\" (click)=\"navigateToDog('zyra')\"\n                  >Zyra Puikus medžioklis ♀ RIP</a\n                >\n                <a class=\"dropdown-item\" (click)=\"navigateToDog('brukne')\"\n                  >Bruknė Petesha (LT JCH-CH-VCH) ♀</a\n                >\n                <a class=\"dropdown-item\" (click)=\"navigateToDog('istagram')\"\n                  >Istagram Di Sutri /ETNA/ (LT JCH, LT CH,LV CH,EST, BALT CH,\n                  CH,RU CH) ♀\n                </a>\n                <a class=\"dropdown-item\" (click)=\"navigateToDog('garas')\"\n                  >Garas ištikimas šuo (LT JCH) ♂\n                </a>\n                <a class=\"dropdown-item\" (click)=\"navigateToDog('juka')\"\n                  >Juka ištikimas šuo ♀</a\n                >\n                <a class=\"dropdown-item\" (click)=\"navigateToDog('redsprings')\"\n                  >Redsprings Eleri Hud (LT JCH, LT CH) ♀</a\n                >\n                <a class=\"dropdown-item\" (click)=\"navigateToDog('kruopa')\"\n                  >Kruopa Ištikimas šuo ♀ RIP</a\n                >\n              </div>\n            </div></a\n          >\n        </li>\n        <li role=\"presentation\" routerLinkActive=\"active\">\n          <a routerLink=\"/contacts\">Kontaktai</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<script>\n\n</script>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/brukne/brukne.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/brukne/brukne.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <h1 class=\"text-center text-capitalize mt-5\">Bruknė</h1>\n        <h3 class=\"text-center text-capitalize mt-5\">Giminės medis</h3>\n      </div>\n      <div class=\"container mt-5\">\n        <div class=\"row\">\n          <div class=\"col-12 jumbotron\">\n            <div class=\"col-sm-12 col-md-3 height-100\">\n                <div class=\"btnlump text-center height-100 gen1\">\n                  <h2>1 Karta</h2>\n              <button\n                class=\"f btn pulsebtn\"\n                [popover]=\"bruknePopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('brukne')\"\n              >\n                <h2>Bruknė</h2>\n              </button>\n              <div>\n                <popover-content\n                  #bruknePopover\n                  title=\"{{ dogName }}\"\n                  class=\"mx-auto mt-5\"\n                  placement=\"bottom\"\n                  [animation]=\"true\"\n                  \n                > \n                  <img\n                    *ngIf=\"dogPic != nullCondition\"\n                    src=\"{{ dogPic }}\"\n                    class=\"dog img-responsive mx-auto\"\n                  />\n                  <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\">   <a class=\"closebtn\">❌</a>         \n      \n                    <b> {{ dogChamps }}</b>\n                  </p>\n                  <p *ngIf=\"dogRegno != nullCondition\">\n                    <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                  </p>\n                  <p *ngIf=\"dogOtherNo != nullCondition\">\n                    <b>Originalus nr.: </b>{{ dogOtherNo }}\n                  </p>\n                  <p *ngIf=\"dogDob != nullCondition\">\n                    <b>Gimimo data:</b> {{ dogDob }}\n                  </p>\n                  <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                  <p *ngIf=\"dogColour != nullCondition\">\n                    <b>Spalva:</b> {{ dogColour }}\n                  </p>\n                <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              </div>\n            </div>\n          </div>\n      \n            \n      \n            <!-- GENERATION 2 -->\n            <div\n              class=\"col-sm-12 col-md-3 height-100 \n            \"\n            >\n            <div class=\"btnlump text-center height-100 gen2\">\n              <h2>2 karta</h2>        \n              <button\n                class=\"m btn\"\n                [popover]=\"pabloPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('pablo')\"\n                \n              >\n              <h2>Pablo Z Herbu Sapaly\n\n                </h2>\n              </button>\n              <div>\n              <popover-content\n              \n                #pabloPopover\n                title=\"{{ dogName }}\"\n                class=\"mx-auto mt-5\"\n                placement=\"bottom\"\n                [animation]=\"true\"\n              >\n                <img\n                  *ngIf=\"dogPic != nullCondition\"\n                  src=\"{{ dogPic }}\"\n                  class=\"dog img-responsive mx-auto\"\n                />\n                <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                  <b> {{ dogChamps }}</b>\n                </p>\n                <p *ngIf=\"dogRegno != nullCondition\">\n                  <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                </p>\n                <p *ngIf=\"dogOtherNo != nullCondition\">\n                  <b>Originalus nr.: </b>{{ dogOtherNo }}\n                </p>\n                <p *ngIf=\"dogDob != nullCondition\">\n                  <b>Gimimo data:</b> {{ dogDob }}\n                </p>\n                <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                <p *ngIf=\"dogColour != nullCondition\">\n                  <b>Spalva:</b> {{ dogColour }}\n                </p>\n              <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content></div>\n              <button\n                class=\"f btn\"\n                [popover]=\"pakaPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('paka')\"\n              >\n                <h2>Chilli Paka Wilkolaka\n\n                    </h2>\n              </button>\n              <popover-content\n                #pakaPopover\n                title=\"{{ dogName }}\"\n                class=\"mx-auto mt-5\"\n                placement=\"bottom\"\n                [animation]=\"true\"\n                [closeOnClickOutside]=\"false\"\n              >\n                <img\n                  *ngIf=\"dogPic != nullCondition\"\n                  src=\"{{ dogPic }}\"\n                  class=\"dog img-responsive mx-auto\"\n                />\n                <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                   \n      \n                  <b> {{ dogChamps }}</b>\n                </p>\n                <p *ngIf=\"dogRegno != nullCondition\">\n                  <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                </p>\n                <p *ngIf=\"dogOtherNo != nullCondition\">\n                  <b>Originalus nr.: </b>{{ dogOtherNo }}\n                </p>\n                <p *ngIf=\"dogDob != nullCondition\">\n                  <b>Gimimo data:</b> {{ dogDob }}\n                </p>\n                <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                <p *ngIf=\"dogColour != nullCondition\">\n                  <b>Spalva:</b> {{ dogColour }}\n                </p>\n              <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n            </div>\n          </div>\n      \n            <div\n              class=\"col-sm-12 col-md-3 height-100 \n            \"\n            >\n            <div class=\"btnlump text-center height-100  gen3\">\n      <h2>3 Karta</h2>\n              <button\n                class=\"m btn\"\n                [popover]=\"kingPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('king')\"\n              >\n                <h2>King Bassie's Sharley Chaplin\n\n                    </h2>\n              </button>\n              <popover-content\n              #kingPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"uriPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('uri')\"\n              >\n                <h2>Uri Paka Wilkolaka\n\n                    </h2>\n              </button>\n              <popover-content\n              #uriPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n      \n                class=\"m btn\"\n                [popover]=\"pridePopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('pride')\"\n              >\n                <h2>Suzan's Pride Darjeeling\n\n                    </h2>\n              </button>\n              <popover-content\n              #pridePopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button \n              class=\"f btn\"\n                [popover]=\"vikiPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('viki')\"\n              >\n                <h2>Viki Paka Wilkolaka\n\n                    </h2>\n              </button>\n              <popover-content\n              #vikiPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n            </div>\n          </div>\n      \n            <div\n              class=\"col-sm-12 col-md-3 height-100\n            \"\n            >\n            <div class=\"btnlump text-center height-100  gen4\">\n              <h2>4 Karta</h2>\n              <button\n                class=\"m btn\"\n                [popover]=\"karellPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('karell')\"\n              >\n              <h2>Karrell Trouble Shooter\n\n                </h2>\n              </button>\n              <popover-content\n              #karellPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"kellyPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('kelly')\"\n              >\n                <h2>King Bassie's Golden Girl Kelly\n\n                    </h2>\n              </button>\n              <popover-content\n              #kellyPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"m btn\"\n                [popover]=\"lantakaPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('lantaka')\"\n                \n              >\n      <h2>          Lantaka Poleposition\n\n\n        </h2>        </button>\n              <popover-content\n              #lantakaPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n      \n                class=\"f btn\"\n                [popover]=\"polaPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('pola')\"\n              >\n                <h2>Pola Z Arki Arka\n\n                    </h2>\n              </button>\n              <popover-content\n              #polaPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"m btn\"\n                [popover]=\"adidiPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('adidi')\"\n              >\n                <h2>Adidi</h2>\n              </button>\n              <popover-content\n              #adidiPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"adinaPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('adina')\"\n              >\n                <h2>Suzan's Pride Adina\n\n                    </h2>\n              </button>\n              <popover-content\n              #adinaPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n              class=\"m btn\"\n              [popover]=\"lantakaPopover\"\n              [popoverCloseOnMouseOutside]=\"false\"\n              [popoverOnHover]=\"true\"\n              (mouseenter) = \"lookingAt('lantaka')\"\n              \n            >\n    <h2>          Lantaka Poleposition\n\n\n      </h2>        </button>\n            <popover-content\n            #lantakaPopover\n            title=\"{{ dogName }}\"\n            class=\"mx-auto mt-5\"\n            placement=\"bottom\"\n            [animation]=\"true\"\n            [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"romaPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('roma')\"\n              >\n                <h2>Roma Z Arki Arka\n\n                    </h2>\n              </button>\n              <popover-content\n              #romaPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n              \n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contacts/contacts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 whitebg mt-5\">\n    <div class=\"container my-5 text-center\">\n      <h2>Veislynas \"IŠTIKIMAS ŠUO\"</h2>\n      <h2>Virginija Žiedienė</h2>\n      <img class=\"img-fluid\" alt=\"Virginija\" src=\"https://firebasestorage.googleapis.com/v0/b/random-2d2ff.appspot.com/o/vz.jpg?alt=media&token=4f1ae70d-7b73-4891-b427-97e771890bf5\">\n    </div>\n    <ul>\n      <li>Adresas: Basanavičiaus 32A, Šiauliai, LT-76234 Lietuva</li>\n      <li>Mob. telefonas: +37067790680</li>\n      <li>El. paštas: <a href=\"mail:istikimassuo@gmail.com\">istikimassuo@gmail.com</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error-page/error-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error-page/error-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>error-page works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/garas/garas.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/garas/garas.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <h1 class=\"text-center text-capitalize mt-5\">Bruknė</h1>\n        <h3 class=\"text-center text-capitalize mt-5\">Giminės medis</h3>\n      </div>\n      <div class=\"container mt-5\">\n        <div class=\"row\">\n          <div class=\"col-12 jumbotron\">\n            <div class=\"col-sm-12 col-md-3 height-100\">\n                <div class=\"btnlump text-center height-100 gen1\">\n                  <h2>1 Karta</h2>\n              <button\n                class=\"f btn pulsebtn\"\n                [popover]=\"garas\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt(garasOrJuka)\"\n              >\n                <h2 class=\"text-capitalize\">{{garasOrJuka}}</h2>\n              </button>\n              <div>\n                <popover-content\n                  #garas\n                  title=\"{{ dogName }}\"\n                  class=\"mx-auto mt-5\"\n                  placement=\"bottom\"\n                  [animation]=\"true\"\n                  \n                > \n                  <img\n                    *ngIf=\"dogPic != nullCondition\"\n                    src=\"{{ dogPic }}\"\n                    class=\"dog img-responsive mx-auto\"\n                  />\n                  <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\">   <a class=\"closebtn\">❌</a>         \n      \n                    <b> {{ dogChamps }}</b>\n                  </p>\n                  <p *ngIf=\"dogRegno != nullCondition\">\n                    <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                  </p>\n                  <p *ngIf=\"dogOtherNo != nullCondition\">\n                    <b>Originalus nr.: </b>{{ dogOtherNo }}\n                  </p>\n                  <p *ngIf=\"dogDob != nullCondition\">\n                    <b>Gimimo data:</b> {{ dogDob }}\n                  </p>\n                  <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                  <p *ngIf=\"dogColour != nullCondition\">\n                    <b>Spalva:</b> {{ dogColour }}\n                  </p>\n                <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n                <popover-content\n                #juka\n                title=\"{{ dogName }}\"\n                class=\"mx-auto mt-5\"\n                placement=\"bottom\"\n                [animation]=\"true\"\n                \n              > \n                <img\n                  *ngIf=\"dogPic != nullCondition\"\n                  src=\"{{ dogPic }}\"\n                  class=\"dog img-responsive mx-auto\"\n                />\n                <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\">   <a class=\"closebtn\">❌</a>         \n    \n                  <b> {{ dogChamps }}</b>\n                </p>\n                <p *ngIf=\"dogRegno != nullCondition\">\n                  <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                </p>\n                <p *ngIf=\"dogOtherNo != nullCondition\">\n                  <b>Originalus nr.: </b>{{ dogOtherNo }}\n                </p>\n                <p *ngIf=\"dogDob != nullCondition\">\n                  <b>Gimimo data:</b> {{ dogDob }}\n                </p>\n                <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                <p *ngIf=\"dogColour != nullCondition\">\n                  <b>Spalva:</b> {{ dogColour }}\n                </p>\n              <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              </div>\n            </div>\n          </div>\n      \n            \n      \n            <!-- GENERATION 2 -->\n            <div\n              class=\"col-sm-12 col-md-3 height-100 \n            \"\n            >\n            <div class=\"btnlump text-center height-100 gen2\">\n              <h2>2 karta</h2>        \n              <button\n                class=\"m btn\"\n                [popover]=\"mitsuPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('mitsu')\"\n                \n              >\n              <h2>Merriment Mitsu of Jack's Paradise\n                </h2>\n              </button>\n              <div>\n              <popover-content\n              \n                #mitsuPopover\n                title=\"{{ dogName }}\"\n                class=\"mx-auto mt-5\"\n                placement=\"bottom\"\n                [animation]=\"true\"\n              >\n                <img\n                  *ngIf=\"dogPic != nullCondition\"\n                  src=\"{{ dogPic }}\"\n                  class=\"dog img-responsive mx-auto\"\n                />\n                <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                  <b> {{ dogChamps }}</b>\n                </p>\n                <p *ngIf=\"dogRegno != nullCondition\">\n                  <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                </p>\n                <p *ngIf=\"dogOtherNo != nullCondition\">\n                  <b>Originalus nr.: </b>{{ dogOtherNo }}\n                </p>\n                <p *ngIf=\"dogDob != nullCondition\">\n                  <b>Gimimo data:</b> {{ dogDob }}\n                </p>\n                <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                <p *ngIf=\"dogColour != nullCondition\">\n                  <b>Spalva:</b> {{ dogColour }}\n                </p>\n              <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content></div>\n              <button\n                class=\"f btn\"\n                [popover]=\"bruknePopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('brukne')\"\n              >\n                <h2>Bruknė Petesha\n\n                    </h2>\n              </button>\n              <popover-content\n                #bruknePopover\n                title=\"{{ dogName }}\"\n                class=\"mx-auto mt-5\"\n                placement=\"bottom\"\n                [animation]=\"true\"\n                [closeOnClickOutside]=\"false\"\n              >\n                <img\n                  *ngIf=\"dogPic != nullCondition\"\n                  src=\"{{ dogPic }}\"\n                  class=\"dog img-responsive mx-auto\"\n                />\n                <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                   \n      \n                  <b> {{ dogChamps }}</b>\n                </p>\n                <p *ngIf=\"dogRegno != nullCondition\">\n                  <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                </p>\n                <p *ngIf=\"dogOtherNo != nullCondition\">\n                  <b>Originalus nr.: </b>{{ dogOtherNo }}\n                </p>\n                <p *ngIf=\"dogDob != nullCondition\">\n                  <b>Gimimo data:</b> {{ dogDob }}\n                </p>\n                <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                <p *ngIf=\"dogColour != nullCondition\">\n                  <b>Spalva:</b> {{ dogColour }}\n                </p>\n              <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n            </div>\n          </div>\n      \n            <div\n              class=\"col-sm-12 col-md-3 height-100 \n            \"\n            >\n            <div class=\"btnlump text-center height-100  gen3\">\n      <h2>3 Karta</h2>\n              <button\n                class=\"m btn\"\n                [popover]=\"arcticPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('arctic')\"\n              >\n                <h2>Jackxellent Arctic Franklin\n\n\n\n                    </h2>\n              </button>\n              <popover-content\n              #arcticPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"soundPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('sound')\"\n              >\n                <h2>Sound Soraya of Jack's Paradise\n\n                    </h2>\n              </button>\n              <popover-content\n              #soundPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n      \n                class=\"m btn\"\n                [popover]=\"pabloPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('pablo')\"\n              >\n                <h2>Pablo Z Herbu Sapaly\n\n                    </h2>\n              </button>\n              <popover-content\n              #pabloPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button \n              class=\"f btn\"\n                [popover]=\"wilkolakaPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('wilkolaka')\"\n              >\n                <h2>Chilli Paka Wilkolaka\n\n                    </h2>\n              </button>\n              <popover-content\n              #wilkolakaPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n            </div>\n          </div>\n      \n            <div\n              class=\"col-sm-12 col-md-3 height-100\n            \"\n            >\n            <div class=\"btnlump text-center height-100  gen4\">\n              <h2>4 Karta</h2>\n              <button\n                class=\"m btn\"\n                [popover]=\"huckPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('huck')\"\n              >\n              <h2>Mywin Little Huck\n\n\n\n                </h2>\n              </button>\n              <popover-content\n              #huckPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"dirtPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('dirt')\"\n              >\n                <h2>Dirtdigger's Dragon Eyes\n\n                    </h2>\n              </button>\n              <popover-content\n              #dirtPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"m btn\"\n                [popover]=\"lewisPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('lewis')\"\n                \n              >\n      <h2>          Liberated Lewis of Jack's Paradise\n\n\n\n        </h2>        </button>\n              <popover-content\n              #lewisPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n      \n                class=\"f btn\"\n                [popover]=\"sunnyPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('sunny')\"\n              >\n                <h2>Sunny Shakira of Jack's Paradise\n\n                    </h2>\n              </button>\n              <popover-content\n              #sunnyPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"m btn\"\n                [popover]=\"kingPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('king')\"\n              >\n                <h2>King Bassie's Sharley Chaplin                    </h2>\n              </button>\n              <popover-content\n              #kingPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"uriPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('uri')\"\n              >\n                <h2>Uri Paka Wilkolaka\n\n\n\n                    </h2>\n              </button>\n              <popover-content\n              #uriPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n              class=\"m btn\"\n              [popover]=\"lantakaPopover\"\n              [popoverCloseOnMouseOutside]=\"false\"\n              [popoverOnHover]=\"true\"\n              (mouseenter) = \"lookingAt('lantaka')\"\n              \n            >\n    <h2>          Suzan's Pride Darjeeling\n\n\n      </h2>        </button>\n            <popover-content\n            #lantakaPopover\n            title=\"{{ dogName }}\"\n            class=\"mx-auto mt-5\"\n            placement=\"bottom\"\n            [animation]=\"true\"\n            [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"vikiPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('viki')\"\n              >\n                <h2>Viki Paka Wilkolaka\n\n\n                    </h2>\n              </button>\n              <popover-content\n              #vikiPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n              \n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5 col-11 p-0 whitebg\">\n  <div class=\"row col-8\">\n    <h2>Sveiki, atvykę į veislyno „Ištikimas šuo\" tinklapį!</h2>\n  </div>\n\n  <div class=\"row py-3 col-8\">\n    <p>\n      Veislynas\n      <a\n        href=\"https://firebasestorage.googleapis.com/v0/b/random-2d2ff.appspot.com/o/veislynoRegistracija.jpg?alt=media&token=3f8a067a-96a4-4972-b778-5fde66d575fa\"\n        target=\"_blank\"\n        ><u class=\"texthref\">registruotas</u></a\n      >\n      Lietuvos kinologų draugijoje ir FCI. Mielai pasidalinsime žiniomis ir patirtimi auginant terjerų, valų\n      springerspanielių ar biglių veislės šuniuką.\n    </p>\n\n  </div>\n\n  <div class=\"row mt-5 col-8 m-0 p-0\">\n    <h2 class=\"d-inline\">\n      IŠSKIRTINĖ VADA !!!\n    </h2>\n    <div class=\"row col-12\">\n      <img\n        src=\"https://firebasestorage.googleapis.com/v0/b/random-2d2ff.appspot.com/o/rvada.jpg?alt=media&token=04cb82ba-ce35-45b8-b20c-602337c5dbeb\"\n        style=\"max-height: 150px\"\n        class=\"d-inline\"\n      />\n    </div>\n\n    <p>\n      Veislyne, balandžio men. 14 d., gimė DŽEKO RASELO terjerų veislės\n      šuniukai. Šuniukai bus dehelmetizuoti, paskiepyti, turės mikročipą, Euro\n      pasą. Reikalui esant, sutvarkome dokumentus šuns išvežimui į užsienį.\n      Kokybę garantuoja pirkimo - perdavimo sutartis, sveikatos tyrimai.\n      <br /><br />Tėvas: <b>LOVELY-ORANGE EAGLE DANCE, RU CH</b> <br />\n      Mama: <b>JUKA IŠTIKIMAS ŠUO </b>\n      <a\n        href=\"https://firebasestorage.googleapis.com/v0/b/random-2d2ff.appspot.com/o/juka_akys.jpg?alt=media&token=da557be2-29dc-4ba2-9c93-b5e84e133e1c\"\n        target=\"_blank\" class=\"texthref\"\n        >(Akių tyrimo sertifikatas)</a\n      >\n    </p>\n  </div>\n  <hr />\n  <div class=\"row mt-5 col-8 m-0 p-0\">\n    <h2 class=\"d-inline\">\n      Предлагаются щенки ДЖЕКА РАССЕЛА ТЕРЬЕРА, супер линий!!!\n    </h2>\n\n    <p>\n      Щенки для выставочной карьеры и в качестве друга семьи и компаньона.\n      Ведётся предварительное бронирование. На момент проди дети будут иметь\n      полный пакет документов, заключается договор купли и продажи, акт приёмки\n      щенка. Всесторонняя помощь гарантируется.\n      <br /><br />Отец : <b>LOVELY-ORANGE EAGLE DANCE, RU CH</b> <br />\n      Мать: <b>JUKA IŠTIKIMAS ŠUO </b>\n      <a\n        href=\"https://firebasestorage.googleapis.com/v0/b/random-2d2ff.appspot.com/o/juka_akys.jpg?alt=media&token=da557be2-29dc-4ba2-9c93-b5e84e133e1c\"\n        target=\"_blank\" class=\"texthref\"\n        >(Сертификат о диагностике глаз)</a\n      >\n    </p>\n  </div>\n  <hr />\n  <div class=\"row mt-5 col-8\">\n    <h2>\n      Domina šuniuko įsigyjimas?\n      <button class=\"btn btn-primary pulsebtn mt-5\" (click)=\"onContactsClick()\">\n        <h2>Susisiekime!</h2>\n      </button>\n    </h2>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/istagram/istagram.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/istagram/istagram.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <h1 class=\"text-center text-capitalize mt-5\">Istargram Di Sutri (Etna)</h1>\n        <h3 class=\"text-center text-capitalize mt-5\">Giminės medis</h3>\n      </div>\n      <div class=\"container mt-5\">\n        <div class=\"row\">\n          <div class=\"col-12 jumbotron\">\n            <div class=\"col-sm-12 col-md-3 height-100\">\n                <div class=\"btnlump text-center height-100 gen1\">\n                  <h2>1 Karta</h2>\n              <button\n                class=\"f btn pulsebtn\"\n                [popover]=\"istagramPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('istagram')\"\n              >\n                <h2>Istargram Di Sutri</h2>\n              </button>\n              <div>\n                <popover-content\n                  #istagramPopover\n                  title=\"{{ dogName }}\"\n                  class=\"mx-auto mt-5\"\n                  placement=\"bottom\"\n                  [animation]=\"true\"\n                  \n                > \n                  <img\n                    *ngIf=\"dogPic != nullCondition\"\n                    src=\"{{ dogPic }}\"\n                    class=\"dog img-responsive mx-auto\"\n                  />\n                  <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\">   <a class=\"closebtn\">❌</a>         \n      \n                    <b> {{ dogChamps }}</b>\n                  </p>\n                  <p *ngIf=\"dogRegno != nullCondition\">\n                    <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                  </p>\n                  <p *ngIf=\"dogOtherNo != nullCondition\">\n                    <b>Originalus nr.: </b>{{ dogOtherNo }}\n                  </p>\n                  <p *ngIf=\"dogDob != nullCondition\">\n                    <b>Gimimo data:</b> {{ dogDob }}\n                  </p>\n                  <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                  <p *ngIf=\"dogColour != nullCondition\">\n                    <b>Spalva:</b> {{ dogColour }}\n                  </p>\n                <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              </div>\n            </div>\n          </div>\n      \n            \n      \n            <!-- GENERATION 2 -->\n            <div\n              class=\"col-sm-12 col-md-3 height-100 \n            \"\n            >\n            <div class=\"btnlump text-center height-100 gen2\">\n              <h2>2 karta</h2>        \n              <button\n                class=\"m btn\"\n                [popover]=\"mysterioPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('mysterio')\"\n                \n              >\n              <h2>Lantaka Mysterio\n\n\n\n                </h2>\n              </button>\n              <div>\n              <popover-content\n              \n                #mysterioPopover\n                title=\"{{ dogName }}\"\n                class=\"mx-auto mt-5\"\n                placement=\"bottom\"\n                [animation]=\"true\"\n              >\n                <img\n                  *ngIf=\"dogPic != nullCondition\"\n                  src=\"{{ dogPic }}\"\n                  class=\"dog img-responsive mx-auto\"\n                />\n                <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                  <b> {{ dogChamps }}</b>\n                </p>\n                <p *ngIf=\"dogRegno != nullCondition\">\n                  <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                </p>\n                <p *ngIf=\"dogOtherNo != nullCondition\">\n                  <b>Originalus nr.: </b>{{ dogOtherNo }}\n                </p>\n                <p *ngIf=\"dogDob != nullCondition\">\n                  <b>Gimimo data:</b> {{ dogDob }}\n                </p>\n                <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                <p *ngIf=\"dogColour != nullCondition\">\n                  <b>Spalva:</b> {{ dogColour }}\n                </p>\n              <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content></div>\n              <button\n                class=\"f btn\"\n                [popover]=\"primaPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('prima')\"\n              >\n                <h2>Prima Ballerina Di Sutri\n\n\n\n                    </h2>\n              </button>\n              <popover-content\n                #primaPopover\n                title=\"{{ dogName }}\"\n                class=\"mx-auto mt-5\"\n                placement=\"bottom\"\n                [animation]=\"true\"\n                [closeOnClickOutside]=\"false\"\n              >\n                <img\n                  *ngIf=\"dogPic != nullCondition\"\n                  src=\"{{ dogPic }}\"\n                  class=\"dog img-responsive mx-auto\"\n                />\n                <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                   \n      \n                  <b> {{ dogChamps }}</b>\n                </p>\n                <p *ngIf=\"dogRegno != nullCondition\">\n                  <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                </p>\n                <p *ngIf=\"dogOtherNo != nullCondition\">\n                  <b>Originalus nr.: </b>{{ dogOtherNo }}\n                </p>\n                <p *ngIf=\"dogDob != nullCondition\">\n                  <b>Gimimo data:</b> {{ dogDob }}\n                </p>\n                <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                <p *ngIf=\"dogColour != nullCondition\">\n                  <b>Spalva:</b> {{ dogColour }}\n                </p>\n              <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n            </div>\n          </div>\n      \n            <div\n              class=\"col-sm-12 col-md-3 height-100 \n            \"\n            >\n            <div class=\"btnlump text-center height-100  gen3\">\n      <h2>3 Karta</h2>\n              <button\n                class=\"m btn\"\n                [popover]=\"petePopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('pete')\"\n              >\n                <h2>Myrmidon Jack Pete\n\n\n\n                    </h2>\n              </button>\n              <popover-content\n              #petePopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"dekkaPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('dekka')\"\n              >\n                <h2>Myrmidon Jack Dekka\n\n                    </h2>\n              </button>\n              <popover-content\n              #dekkaPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n      \n                class=\"m btn\"\n                [popover]=\"lyckansPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('lyckans')\"\n              >\n                <h2>Silverlyckans Wishing And Hoping\n\n                    </h2>\n              </button>\n              <popover-content\n              #lyckansPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button \n              class=\"f btn\"\n                [popover]=\"frescaPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('fresca')\"\n              >\n                <h2>Vernice Fresca Di Sutri\n\n                    </h2>\n              </button>\n              <popover-content\n              #frescaPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n            </div>\n          </div>\n      \n            <div\n              class=\"col-sm-12 col-md-3 height-100\n            \"\n            >\n            <div class=\"btnlump text-center height-100  gen4\">\n              <h2>4 Karta</h2>\n              <button\n                class=\"m btn\"\n                [popover]=\"kandoPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('kando')\"\n              >\n              <h2>Pretorium Just Kando\n\n                </h2>\n              </button>\n              <popover-content\n              #kandoPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"periPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('peri')\"\n              >\n                <h2>Myrmidon Jack Peri\n\n                    </h2>\n              </button>\n              <popover-content\n              #periPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"m btn\"\n                [popover]=\"danzeyPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('danzey')\"\n                \n              >\n      <h2>        Myrmidon Jack Danzey\n\n\n        </h2>        </button>\n              <popover-content\n              #danzeyPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n      \n                class=\"f btn\"\n                [popover]=\"myrmidonPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('myrmidon')\"\n              >\n                <h2>Myrmidon Jack Rebecca\n\n                    </h2>\n              </button>\n              <popover-content\n              #myrmidonPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"m btn\"\n                [popover]=\"ultraPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('ultra')\"\n              >\n                <h2>Ultra Pride Of Mayoland                    </h2>\n              </button>\n              <popover-content\n              #ultraPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"magicPopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('magic')\"\n              >\n                <h2>Bushwack's Myrmidon Magic\n                    </h2>\n              </button>\n              <popover-content\n              #magicPopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n              class=\"m btn\"\n              [popover]=\"luckysPopover\"\n              [popoverCloseOnMouseOutside]=\"false\"\n              [popoverOnHover]=\"true\"\n              (mouseenter) = \"lookingAt('luckys')\"\n              \n            >\n    <h2>          Litlenapoleon Luckys Boy\n\n\n      </h2>        </button>\n            <popover-content\n            #luckysPopover\n            title=\"{{ dogName }}\"\n            class=\"mx-auto mt-5\"\n            placement=\"bottom\"\n            [animation]=\"true\"\n            [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"bugammePopover\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('bugamme')\"\n              >\n                <h2>Braperemi Buggame\n\n                    </h2>\n              </button>\n              <popover-content\n              #bugammePopover\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n              \n            <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/kruopa/kruopa.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/kruopa/kruopa.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1 class=\"text-center text-capitalize mt-5\">Zyra</h1>\n    <h3 class=\"text-center text-capitalize mt-5\">Giminės medis</h3>\n  </div>\n  <div class=\"container mt-5\">\n    <div class=\"row\">\n      <div class=\"col-12 jumbotron\">\n        <div class=\"col-sm-12 col-md-3 height-100\">\n            <div class=\"btnlump text-center height-100 gen1\">\n              <h2>1 Karta</h2>\n          <button\n            class=\"f btn pulsebtn\"\n            [popover]=\"kruopa\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('kruopa')\"\n          >\n            <h2>Kruopa</h2>\n          </button>\n          <div>\n            <popover-content\n              #kruopa\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              \n            > \n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\">   <a class=\"closebtn\">❌</a>         \n  \n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n          </div>\n        </div>\n      </div>\n  \n        \n  \n        <!-- GENERATION 2 -->\n        <div\n          class=\"col-sm-12 col-md-3 height-100 \n        \"\n        >\n        <div class=\"btnlump text-center height-100 gen2\">\n          <h2>2 karta</h2>        \n          <button\n            class=\"m btn\"\n            [popover]=\"dodzis\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('dodzis')\"\n            \n          >\n          <h2>Dodžis Puikus medžioklis</h2>\n          </button>\n          <div>\n          <popover-content\n          \n            #dodzis\n            title=\"{{ dogName }}\"\n            class=\"mx-auto mt-5\"\n            placement=\"bottom\"\n            [animation]=\"true\"\n          >\n            <img\n              *ngIf=\"dogPic != nullCondition\"\n              src=\"{{ dogPic }}\"\n              class=\"dog img-responsive mx-auto\"\n            />\n            <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n              <b> {{ dogChamps }}</b>\n            </p>\n            <p *ngIf=\"dogRegno != nullCondition\">\n              <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n            </p>\n            <p *ngIf=\"dogOtherNo != nullCondition\">\n              <b>Originalus nr.: </b>{{ dogOtherNo }}\n            </p>\n            <p *ngIf=\"dogDob != nullCondition\">\n              <b>Gimimo data:</b> {{ dogDob }}\n            </p>\n            <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n            <p *ngIf=\"dogColour != nullCondition\">\n              <b>Spalva:</b> {{ dogColour }}\n            </p>\n          </popover-content></div>\n          <button\n            class=\"f btn\"\n            [popover]=\"zyra\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('zyra')\"\n          >\n            <h2>Zyra Puikus Medžioklis</h2>\n          </button>\n          <popover-content\n            #zyra\n            title=\"{{ dogName }}\"\n            class=\"mx-auto mt-5\"\n            placement=\"bottom\"\n            [animation]=\"true\"\n            [closeOnClickOutside]=\"false\"\n          >\n            <img\n              *ngIf=\"dogPic != nullCondition\"\n              src=\"{{ dogPic }}\"\n              class=\"dog img-responsive mx-auto\"\n            />\n            <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n               \n  \n              <b> {{ dogChamps }}</b>\n            </p>\n            <p *ngIf=\"dogRegno != nullCondition\">\n              <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n            </p>\n            <p *ngIf=\"dogOtherNo != nullCondition\">\n              <b>Originalus nr.: </b>{{ dogOtherNo }}\n            </p>\n            <p *ngIf=\"dogDob != nullCondition\">\n              <b>Gimimo data:</b> {{ dogDob }}\n            </p>\n            <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n            <p *ngIf=\"dogColour != nullCondition\">\n              <b>Spalva:</b> {{ dogColour }}\n            </p>\n          </popover-content>\n        </div>\n      </div>\n  \n        <div\n          class=\"col-sm-12 col-md-3 height-100 \n        \"\n        >\n        <div class=\"btnlump text-center height-100  gen3\">\n  <h2>3 Karta</h2>\n          <button\n            class=\"m btn\"\n            [popover]=\"quel\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('quel')\"\n          >\n            <h2>Duszek Tel Quel</h2>\n          </button>\n          <popover-content\n          #quel\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n          <button\n            class=\"f btn\"\n            [popover]=\"aira\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('aira')\"\n          >\n            <h2>Aira Puikus medžioklis</h2>\n          </button>\n          <popover-content\n          #aira\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n          <button\n  \n            class=\"m btn\"\n            [popover]=\"bournehouse\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('bournehouse')\"\n          >\n            <h2>Bournehouse Masterchef of Dialynne</h2>\n          </button>\n          <popover-content\n          #bournehouse\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n          <button \n          class=\"f btn\"\n            [popover]=\"exa\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('exa')\"\n          >\n            <h2>Exa Puikus Medžioklis</h2>\n          </button>\n          <popover-content\n          #exa\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n        </div>\n      </div>\n  \n        <div\n          class=\"col-sm-12 col-md-3 height-100\n        \"\n        >\n        <div class=\"btnlump text-center height-100  gen4\">\n          <h2>4 Karta</h2>\n          <button\n            class=\"m btn\"\n            [popover]=\"moon\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('moon')\"\n          >\n          <h2>Moon Jumper's Joe Cocker</h2>\n          </button>\n          <popover-content\n          #moon\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n          <button\n            class=\"f btn\"\n            [popover]=\"old\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('old')\"\n          >\n            <h2>Old Ballantaine's Tel Quel</h2>\n          </button>\n          <popover-content\n          #old\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n          <button\n            class=\"m btn\"\n            [popover]=\"shelaft\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('shelaft')\"\n            \n          >\n  <h2>          Shelaft Billy Whizz of Dialynne\n    </h2>        </button>\n          <popover-content\n          #shelaft\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n          <button\n  \n            class=\"f btn\"\n            [popover]=\"chilli\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('chilli')\"\n          >\n            <h2>Chilli Belle Voix</h2>\n          </button>\n          <popover-content\n          #chilli\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n          <button\n            class=\"m btn\"\n            [popover]=\"masterpiece\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('masterpiece')\"\n          >\n            <h2>Dialynne Masterpiece</h2>\n          </button>\n          <popover-content\n          #masterpiece\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n          <button\n            class=\"f btn\"\n            [popover]=\"kiroyale\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('kiroyale')\"\n          >\n            <h2>Buornehuose Kiroyale</h2>\n          </button>\n          <popover-content\n          #kiroyale\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n          <button\n            class=\"m btn\"\n            [popover]=\"blacky\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('blacky')\"\n          >\n            <h2>Blacky The First Catulus</h2>\n          </button>\n          <popover-content\n          #blacky\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n          <button\n            class=\"f btn\"\n            [popover]=\"chilli\"\n            [popoverCloseOnMouseOutside]=\"false\"\n            [popoverOnHover]=\"true\"\n            (mouseenter) = \"lookingAt('chilli')\"\n          >\n            <h2>Chilli Belle Voix</h2>\n          </button>\n          <popover-content\n          #chilli\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/our-dogs/our-dogs.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/our-dogs/our-dogs.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mx-auto\">\n  <h1>Veislyne \"Ištikimas šuo\" laikomi šunys:</h1>\n  <div class=\"col-12 text-center mx-auto mt-5 border border-dark rounded mb-5 whitebg\">\n    <table class=\"table table-hover mt-5\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Lytis</th>\n          <th scope=\"col\">Vardas</th>\n          <th scope=\"col\">Nuotrauka</th>\n          <th scope=\"col\">Dokumentai</th>\n\n\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"fem\">\n          <th scope=\"row\">Kalė</th>\n          <td><a class=\"texthref\" routerLink=\"/our-dogs/zyra\">Zyra Puikus medžioklis ♀ RIP</a></td>\n          <td>\n            <img\n              src=\"http://istikimassuo.puslapiai.lt/images/stories/zyra.jpg\"\n              class=\"img-responsive\"\n            />\n          </td>\n          <td>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/pedigree.jpg\" target=\"_blank\">Kilmės dokumentas</a>\n          </td>\n        </tr>\n        <tr class=\"fem\">\n          <th scope=\"row\">Kalė</th>\n          <td><a class=\"texthref\" routerLink=\"/our-dogs/brukne\">Bruknė Petesha (LT JCH-CH-VCH) ♀</a></td>\n          <td>\n            <img\n              src=\"http://istikimassuo.puslapiai.lt/images/stories/brukne.jpg\"\n              class=\"img-responsive\"\n            />\n          </td>\n          <td>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/pedigree.jpg\" target=\"_blank\">Kilmės dokumentas</a>\n            <br>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/Bruknesakys.jpeg\" target=\"_blank\">Akių tyrimo sertifikatas</a>\n\n          </td>\n        </tr>\n        <tr class=\"fem\">\n          <th scope=\"row\">Kalė</th>\n          <td><a class=\"texthref\" routerLink=\"/our-dogs/istagram\">\n            Istagram Di Sutri /ETNA/ (LT JCH, LT CH,LV CH,EST, BALT CH, CH,RU\n            CH) ♀</a>\n          </td>\n          <td>\n            <img\n              src=\"http://istikimassuo.puslapiai.lt/images/stories/etna.jpg\"\n              class=\"img-responsive\"\n            />\n          </td>\n          <td>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/pedigree.jpg\" target=\"_blank\">Kilmės dokumentas</a>\n            <br>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/Etnosakys.jpg\" target=\"_blank\">Akių tyrimo sertifikatas</a>\n\n          </td>\n        </tr>\n        <tr class=\"male\">\n          <th scope=\"row\">Patinas</th>\n          <td><a class=\"texthref\" routerLink=\"/our-dogs/garas\">Garas ištikimas šuo (LT JCH) ♂</a></td>\n          <td>\n            <img\n              src=\"http://istikimassuo.puslapiai.lt/images/stories/Garas/garas1.jpg\"\n              class=\"img-responsive\"\n            />\n          </td>\n          <td>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/Garas/pedigree.jpg\" target=\"_blank\">Kilmės dokumentas</a>\n          </td>\n        </tr>\n        <tr class=\"fem\">\n          <th scope=\"row\">Kalė</th>\n          <td><a class=\"texthref\" routerLink=\"/our-dogs/juka\">Juka ištikimas šuo ♀</a></td>\n          <td>\n            <img\n              src=\"http://istikimassuo.puslapiai.lt/images/stories/juka.jpg\"\n              class=\"img-responsive\"\n            />\n          </td>\n          <td>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/Juka/pedigree.jpg\" target=\"_blank\">Kilmės dokumentas</a>\n            <br>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/juka_akys.jpg\" target=\"_blank\">Akių tyrimo sertifikatas</a>\n\n          </td>\n        </tr>\n        <tr class=\"fem\">\n          <th scope=\"row\">Kalė</th>\n          <td><a class=\"texthref\" routerLink=\"/our-dogs/redsprings\">Redsprings Eleri Hud (LT JCH, LT CH) ♀</a></td>\n          <td>\n            <img\n              src=\"http://istikimassuo.puslapiai.lt/images/elari%20-%20puslapiui/2.3.jpg\"\n              class=\"img-responsive\"\n            />\n          </td>\n          <td>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/Elari/pedigree.jpg\" target=\"_blank\">Kilmės dokumentas</a>\n            <br>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/elari_akys.jpg\" target=\"_blank\">Akių tyrimo sertifikatas</a>\n            <br>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/elari_displazija.jpg\" target=\"_blank\">Klubo/alkūnės sanario displazijos tyrimo sertifikatas</a>\n\n\n          </td>\n        </tr>\n        <tr class=\"fem\">\n          <th scope=\"row\">Kalė</th>\n          <td><a class=\"texthref\" routerLink=\"/our-dogs/kruopa\">Kruopa Ištikimas šuo ♀ RIP</a></td>\n          <td>\n            <img\n              src=\"http://istikimassuo.puslapiai.lt/images/stories/Kruopa/kruopa.JPG\"\n              class=\"img-responsive\"\n            />\n          </td>\n          <td>\n            <a href=\"http://www.istikimassuo.puslapiai.lt/images/stories/Kruopa/pedigree.jpg\" target=\"_blank\">Kilmės dokumentas</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/our-dogs/zyra/zyra.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/our-dogs/zyra/zyra.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"text-center text-capitalize mt-5\">Zyra</h1>\n  <h3 class=\"text-center text-capitalize mt-5\">Giminės medis</h3>\n</div>\n<div class=\"container mt-5\">\n  <div class=\"row\">\n    <div class=\"col-12 jumbotron\">\n      <div class=\"col-sm-12 col-md-3 height-100\">\n          <div class=\"btnlump text-center height-100 gen1\">\n            <h2>1 Karta</h2>\n        <button\n          class=\"f btn pulsebtn\"\n          [popover]=\"zyraPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('zyra')\"\n        >\n          <h2>Zyra</h2>\n        </button>\n        <div>\n          <popover-content\n            #zyraPopover\n            title=\"{{ dogName }}\"\n            class=\"mx-auto mt-5\"\n            placement=\"bottom\"\n            [animation]=\"true\"\n            \n          > \n            <img\n              *ngIf=\"dogPic != nullCondition\"\n              src=\"{{ dogPic }}\"\n              class=\"dog img-responsive mx-auto\"\n            />\n            <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\">   <a class=\"closebtn\">❌</a>         \n\n              <b> {{ dogChamps }}</b>\n            </p>\n            <p *ngIf=\"dogRegno != nullCondition\">\n              <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n            </p>\n            <p *ngIf=\"dogOtherNo != nullCondition\">\n              <b>Originalus nr.: </b>{{ dogOtherNo }}\n            </p>\n            <p *ngIf=\"dogDob != nullCondition\">\n              <b>Gimimo data:</b> {{ dogDob }}\n            </p>\n            <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n            <p *ngIf=\"dogColour != nullCondition\">\n              <b>Spalva:</b> {{ dogColour }}\n            </p>\n          </popover-content>\n        </div>\n      </div>\n    </div>\n\n      \n\n      <!-- GENERATION 2 -->\n      <div\n        class=\"col-sm-12 col-md-3 height-100 \n      \"\n      >\n      <div class=\"btnlump text-center height-100 gen2\">\n        <h2>2 karta</h2>        \n        <button\n          class=\"m btn\"\n          [popover]=\"bournehousePopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('bournehouse')\"\n          \n        >\n        <h2>Bournehouse Masterchef of Dialynne</h2>\n        </button>\n        <div>\n        <popover-content\n        \n          #bournehousePopover\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content></div>\n        <button\n          class=\"f btn\"\n          [popover]=\"exaPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('exa')\"\n        >\n          <h2>Exa Puikus Medžioklis</h2>\n        </button>\n        <popover-content\n          #exaPopover\n          title=\"{{ dogName }}\"\n          class=\"mx-auto mt-5\"\n          placement=\"bottom\"\n          [animation]=\"true\"\n          [closeOnClickOutside]=\"false\"\n        >\n          <img\n            *ngIf=\"dogPic != nullCondition\"\n            src=\"{{ dogPic }}\"\n            class=\"dog img-responsive mx-auto\"\n          />\n          <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n             \n\n            <b> {{ dogChamps }}</b>\n          </p>\n          <p *ngIf=\"dogRegno != nullCondition\">\n            <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n          </p>\n          <p *ngIf=\"dogOtherNo != nullCondition\">\n            <b>Originalus nr.: </b>{{ dogOtherNo }}\n          </p>\n          <p *ngIf=\"dogDob != nullCondition\">\n            <b>Gimimo data:</b> {{ dogDob }}\n          </p>\n          <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n          <p *ngIf=\"dogColour != nullCondition\">\n            <b>Spalva:</b> {{ dogColour }}\n          </p>\n        </popover-content>\n      </div>\n    </div>\n\n      <div\n        class=\"col-sm-12 col-md-3 height-100 \n      \"\n      >\n      <div class=\"btnlump text-center height-100  gen3\">\n<h2>3 Karta</h2>\n        <button\n          class=\"m btn\"\n          [popover]=\"masterpiecePopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('masterpiece')\"\n        >\n          <h2>Dialynne Masterpiece</h2>\n        </button>\n        <popover-content\n        #masterpiecePopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n        <button\n          class=\"f btn\"\n          [popover]=\"kiroyalePopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('kiroyale')\"\n        >\n          <h2>bournehouse Kiroyale</h2>\n        </button>\n        <popover-content\n        #kiroyalePopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n        <button\n\n          class=\"m btn\"\n          [popover]=\"blackyPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('blacky')\"\n        >\n          <h2>Blacky The First Catulus</h2>\n        </button>\n        <popover-content\n        #blackyPopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n        <button \n        class=\"f btn\"\n          [popover]=\"blackyPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('chilli')\"\n        >\n          <h2>Chilli Belle Voix</h2>\n        </button>\n        <popover-content\n        #blackyPopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n      </div>\n    </div>\n\n      <div\n        class=\"col-sm-12 col-md-3 height-100\n      \"\n      >\n      <div class=\"btnlump text-center height-100  gen4\">\n        <h2>4 Karta</h2>\n        <button\n          class=\"m btn\"\n          [popover]=\"hallmarkPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('hallmark')\"\n        >\n        <h2>Dialynne Hallmark</h2>\n        </button>\n        <popover-content\n        #hallmarkPopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n        <button\n          class=\"f btn\"\n          [popover]=\"rosaPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('rosa')\"\n        >\n          <h2>Dialynne Rosa Lea</h2>\n        </button>\n        <popover-content\n        #rosaPopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n        <button\n          class=\"m btn\"\n          [popover]=\"stormPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('storm')\"\n          \n        >\n<h2>          Storm Away of Dialynne\n  </h2>        </button>\n        <popover-content\n        #stormPopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n        <button\n\n          class=\"f btn\"\n          [popover]=\"kirschPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('kirsch')\"\n        >\n          <h2>Dialynne Kirsch At bournehouse</h2>\n        </button>\n        <popover-content\n        #kirschPopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n        <button\n          class=\"m btn\"\n          [popover]=\"shelaftPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('shelaft')\"\n        >\n          <h2>Shelaft Billy Whizz of Dialynne</h2>\n        </button>\n        <popover-content\n        #shelaftPopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n        <button\n          class=\"f btn\"\n          [popover]=\"olkaPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('olka')\"\n        >\n          <h2>Snugglewood's Olka</h2>\n        </button>\n        <popover-content\n        #olkaPopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n        <button\n          class=\"m btn\"\n          [popover]=\"bayardPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('bayard')\"\n        >\n          <h2>Bayard Harvest Moon</h2>\n        </button>\n        <popover-content\n        #bayardPopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n        <button\n          class=\"f btn\"\n          [popover]=\"bandaPopover\"\n          [popoverCloseOnMouseOutside]=\"false\"\n          [popoverOnHover]=\"true\"\n          (mouseenter) = \"lookingAt('banda')\"\n        >\n          <h2>Banda Belle Voix</h2>\n        </button>\n        <popover-content\n        #bandaPopover\n        title=\"{{ dogName }}\"\n        class=\"mx-auto mt-5\"\n        placement=\"bottom\"\n        [animation]=\"true\"\n        [closeOnClickOutside]=\"false\"\n      >\n        <img\n          *ngIf=\"dogPic != nullCondition\"\n          src=\"{{ dogPic }}\"\n          class=\"dog img-responsive mx-auto\"\n        />\n        <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n          <b> {{ dogChamps }}</b>\n        </p>\n        <p *ngIf=\"dogRegno != nullCondition\">\n          <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n        </p>\n        <p *ngIf=\"dogOtherNo != nullCondition\">\n          <b>Originalus nr.: </b>{{ dogOtherNo }}\n        </p>\n        <p *ngIf=\"dogDob != nullCondition\">\n          <b>Gimimo data:</b> {{ dogDob }}\n        </p>\n        <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n        <p *ngIf=\"dogColour != nullCondition\">\n          <b>Spalva:</b> {{ dogColour }}\n        </p>\n      </popover-content>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/popover/popover.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/popover/popover.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<popover-content\n                  #{{selected}}\n                  title=\"{{ dogName }}\"\n                  class=\"mx-auto mt-5\"\n                  placement=\"bottom\"\n                  [animation]=\"true\"\n                  \n                > \n                  <img\n                    *ngIf=\"dogPic != nullCondition\"\n                    src=\"{{ dogPic }}\"\n                    class=\"dog img-responsive mx-auto\"\n                  />\n                  <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\">   <a class=\"closebtn\">❌</a>         \n      \n                    <b> {{ dogChamps }}</b>\n                  </p>\n                  <p *ngIf=\"dogRegno != nullCondition\">\n                    <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                  </p>\n                  <p *ngIf=\"dogOtherNo != nullCondition\">\n                    <b>Originalus nr.: </b>{{ dogOtherNo }}\n                  </p>\n                  <p *ngIf=\"dogDob != nullCondition\">\n                    <b>Gimimo data:</b> {{ dogDob }}\n                  </p>\n                  <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                  <p *ngIf=\"dogColour != nullCondition\">\n                    <b>Spalva:</b> {{ dogColour }}\n                  </p>\n                <p *ngIf=\"dogNotes != nullCondition\"><b>Kita:</b> {{dogNotes}}</p></popover-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/redsprings/redsprings.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/redsprings/redsprings.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <h1 class=\"text-center text-capitalize mt-5\">Redsprings Eleri Hud</h1>\n        <h3 class=\"text-center text-capitalize mt-5\">Giminės medis</h3>\n      </div>\n      <div class=\"container mt-5\">\n        <div class=\"row\">\n          <div class=\"col-12 jumbotron\">\n            <div class=\"col-sm-12 col-md-3 height-100\">\n                <div class=\"btnlump text-center height-100 gen1\">\n                  <h2>1 Karta</h2>\n              <button\n                class=\"f btn pulsebtn\"\n                [popover]=\"redsprings\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('redsprings')\"\n              >\n                <h2>Redsprings</h2>\n              </button>\n              <div>\n                <popover-content\n                  #redsprings \n                  title=\"{{ dogName }}\"\n                  class=\"mx-auto mt-5\"\n                  placement=\"bottom\"\n                  [animation]=\"true\"\n                  \n                > \n                  <img\n                    *ngIf=\"dogPic != nullCondition\"\n                    src=\"{{ dogPic }}\"\n                    class=\"dog img-responsive mx-auto\"\n                  />\n                  <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\">   <a class=\"closebtn\">❌</a>         \n      \n                    <b> {{ dogChamps }}</b>\n                  </p>\n                  <p *ngIf=\"dogRegno != nullCondition\">\n                    <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                  </p>\n                  <p *ngIf=\"dogOtherNo != nullCondition\">\n                    <b>Originalus nr.: </b>{{ dogOtherNo }}\n                  </p>\n                  <p *ngIf=\"dogDob != nullCondition\">\n                    <b>Gimimo data:</b> {{ dogDob }}\n                  </p>\n                  <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                  <p *ngIf=\"dogColour != nullCondition\">\n                    <b>Spalva:</b> {{ dogColour }}\n                  </p>\n                </popover-content>\n              </div>\n            </div>\n          </div>\n      \n            \n      \n            <!-- GENERATION 2 -->\n            <div\n              class=\"col-sm-12 col-md-3 height-100 \n            \"\n            >\n            <div class=\"btnlump text-center height-100 gen2\">\n              <h2>2 karta</h2>        \n              <button\n                class=\"m btn\"\n                [popover]=\"iagospop\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('iagos')\"\n                \n              >\n              <h2>IAGOS FARTVIND\n\n                </h2>\n              </button>\n              <div>\n              <popover-content\n                #iagospop\n                title=\"{{ dogName }}\"\n                class=\"mx-auto mt-5\"\n                placement=\"bottom\"\n                [animation]=\"true\"\n              >\n                <img\n                  *ngIf=\"dogPic != nullCondition\"\n                  src=\"{{ dogPic }}\"\n                  class=\"dog img-responsive mx-auto\"\n                />\n                <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                  <b> {{ dogChamps }}</b>\n                </p>\n                <p *ngIf=\"dogRegno != nullCondition\">\n                  <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                </p>\n                <p *ngIf=\"dogOtherNo != nullCondition\">\n                  <b>Originalus nr.: </b>{{ dogOtherNo }}\n                </p>\n                <p *ngIf=\"dogDob != nullCondition\">\n                  <b>Gimimo data:</b> {{ dogDob }}\n                </p>\n                <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                <p *ngIf=\"dogColour != nullCondition\">\n                  <b>Spalva:</b> {{ dogColour }}\n                </p>\n              </popover-content></div>\n              <button\n                class=\"f btn\"\n                [popover]=\"arial\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('arial')\"\n              >\n                <h2>ARIAL HELWYR\n\n                    </h2>\n              </button>\n              <popover-content\n                #arial\n                title=\"{{ dogName }}\"\n                class=\"mx-auto mt-5\"\n                placement=\"bottom\"\n                [animation]=\"true\"\n                [closeOnClickOutside]=\"false\"\n              >\n                <img\n                  *ngIf=\"dogPic != nullCondition\"\n                  src=\"{{ dogPic }}\"\n                  class=\"dog img-responsive mx-auto\"\n                />\n                <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                   \n      \n                  <b> {{ dogChamps }}</b>\n                </p>\n                <p *ngIf=\"dogRegno != nullCondition\">\n                  <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n                </p>\n                <p *ngIf=\"dogOtherNo != nullCondition\">\n                  <b>Originalus nr.: </b>{{ dogOtherNo }}\n                </p>\n                <p *ngIf=\"dogDob != nullCondition\">\n                  <b>Gimimo data:</b> {{ dogDob }}\n                </p>\n                <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n                <p *ngIf=\"dogColour != nullCondition\">\n                  <b>Spalva:</b> {{ dogColour }}\n                </p>\n              </popover-content>\n            </div>\n          </div>\n      \n            <div\n              class=\"col-sm-12 col-md-3 height-100 \n            \"\n            >\n            <div class=\"btnlump text-center height-100  gen3\">\n      <h2>3 Karta</h2>\n              <button\n                class=\"m btn\"\n                [popover]=\"dutch\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('dutch')\"\n              >\n                <h2>GULSPORRENS HUNTING DUTCHMAN\n\n                    </h2>\n              </button>\n              <popover-content\n              #dutch\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"money\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('money')\"\n              >\n                <h2>IAGOS ALL 'BOUT THE MONEY\n\n                    </h2>\n              </button>\n              <popover-content\n              #money\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n              <button\n      \n                class=\"m btn\"\n                [popover]=\"taffy\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('taffy')\"\n              >\n                <h2>TAFFY CONOR SEDDA\n\n                    </h2>\n              </button>\n              <popover-content\n              #taffy\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n              <button \n              class=\"f btn\"\n                [popover]=\"brita\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('brita')\"\n              >\n                <h2>BRITA OD NEŽARECKE TUNE\n\n                    </h2>\n              </button>\n              <popover-content\n              #brita\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n            </div>\n          </div>\n      \n            <div\n              class=\"col-sm-12 col-md-3 height-100\n            \"\n            >\n            <div class=\"btnlump text-center height-100  gen4\">\n              <h2>4 Karta</h2>\n              <button\n                class=\"m btn\"\n                [popover]=\"ufo\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('ufo')\"\n              >\n              <h2>UFO OUR LOYAL WELSH\n\n                </h2>\n              </button>\n              <popover-content\n              #ufo\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"sweet\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('sweet')\"\n              >\n                <h2>HAMMALGARDENS LITTLE SWEET</h2>\n              </button>\n              <popover-content\n              #sweet\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n              <button\n                class=\"m btn\"\n                [popover]=\"ham\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('ham')\"\n                \n              >\n      <h2>          HAMMALGARDENS DON'T FORGET ME\n\n\n        </h2>        </button>\n              <popover-content\n              #ham\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n              <button\n      \n                class=\"f btn\"\n                [popover]=\"did\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('did')\"\n              >\n                <h2>HAMMALGARDENS DID I TELL YOU</h2>\n              </button>\n              <popover-content\n              #did\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n              <button\n                class=\"m btn\"\n                [popover]=\"amigos\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('amigos')\"\n              >\n                <h2>AMIGOS CILVER\n\n                    </h2>\n              </button>\n              <popover-content\n              #amigos\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"bonita\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('bonita')\"\n              >\n                <h2>BONITA SEDDA</h2>\n              </button>\n              <popover-content\n              #bonita\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n              <button\n                class=\"m btn\"\n                [popover]=\"duck\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('duck')\"\n              >\n                <h2>EASTFARM'S DYNAMITE DUCK</h2>\n              </button>\n              <popover-content\n              #duck\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n              <button\n                class=\"f btn\"\n                [popover]=\"jifex\"\n                [popoverCloseOnMouseOutside]=\"false\"\n                [popoverOnHover]=\"true\"\n                (mouseenter) = \"lookingAt('jifex')\"\n              >\n                <h2>FATTY JIFEX</h2>\n              </button>\n              <popover-content\n              #jifex\n              title=\"{{ dogName }}\"\n              class=\"mx-auto mt-5\"\n              placement=\"bottom\"\n              [animation]=\"true\"\n              [closeOnClickOutside]=\"false\"\n            >\n              <img\n                *ngIf=\"dogPic != nullCondition\"\n                src=\"{{ dogPic }}\"\n                class=\"dog img-responsive mx-auto\"\n              />\n              <p *ngIf=\"dogChamps != nullCondition\" class=\"champs\"><a class=\"closebtn\">❌</a>\n                <b> {{ dogChamps }}</b>\n              </p>\n              <p *ngIf=\"dogRegno != nullCondition\">\n                <b>LŠVK/Registracijos nr.:</b> {{ dogRegno }}\n              </p>\n              <p *ngIf=\"dogOtherNo != nullCondition\">\n                <b>Originalus nr.: </b>{{ dogOtherNo }}\n              </p>\n              <p *ngIf=\"dogDob != nullCondition\">\n                <b>Gimimo data:</b> {{ dogDob }}\n              </p>\n              <p *ngIf=\"dogLoc != nullCondition\"><b>Vieta:</b> {{ dogLoc }}</p>\n              <p *ngIf=\"dogColour != nullCondition\">\n                <b>Spalva:</b> {{ dogColour }}\n              </p>\n            </popover-content>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n      "

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\r\n    margin-left: 10px;\r\n}\r\n\r\n.dropdown-toggle:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-item:hover{\r\n    cursor: pointer;\r\n    background-color: #17a2b8 !important;\r\n    color:white !important;\r\n}\r\n\r\n.dropdown-menu{\r\n    font-size: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = "Veislynas &ldquo;Ištikimas šuo&rdquo;";
        this.openClass = 'closed';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.currentDog = this.route.snapshot.params['id'];
    };
    AppComponent.prototype.navigateToDog = function (x) {
        this.router.navigate(["/our-dogs/" + x]);
    };
    AppComponent.prototype.addOpen = function () {
        var smth = document.getElementById("carret");
        smth.className += "open";
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _our_dogs_our_dogs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-dogs/our-dogs.component */ "./src/app/our-dogs/our-dogs.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _our_dogs_zyra_zyra_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./our-dogs/zyra/zyra.component */ "./src/app/our-dogs/zyra/zyra.component.ts");
/* harmony import */ var node_modules_angular_popper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! node_modules/angular-popper */ "./node_modules/angular-popper/fesm5/angular-popper.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_popover_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-popover-image */ "./node_modules/ngx-popover-image/ngx-popover-image.umd.js");
/* harmony import */ var ngx_popover_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_popover_image__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var node_modules_ngx_popover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! node_modules/ngx-popover */ "./node_modules/ngx-popover/index.js");
/* harmony import */ var node_modules_ngx_popover__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(node_modules_ngx_popover__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _brukne_brukne_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./brukne/brukne.component */ "./src/app/brukne/brukne.component.ts");
/* harmony import */ var _istagram_istagram_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./istagram/istagram.component */ "./src/app/istagram/istagram.component.ts");
/* harmony import */ var _garas_garas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./garas/garas.component */ "./src/app/garas/garas.component.ts");
/* harmony import */ var _redsprings_redsprings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./redsprings/redsprings.component */ "./src/app/redsprings/redsprings.component.ts");
/* harmony import */ var _kruopa_kruopa_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./kruopa/kruopa.component */ "./src/app/kruopa/kruopa.component.ts");






















var appRoutes = [
    { path: "", component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"] },
    { path: "our-dogs", component: _our_dogs_our_dogs_component__WEBPACK_IMPORTED_MODULE_6__["OurDogsComponent"] },
    { path: "our-dogs/zyra", component: _our_dogs_zyra_zyra_component__WEBPACK_IMPORTED_MODULE_10__["ZyraComponent"] },
    { path: "our-dogs/brukne", component: _brukne_brukne_component__WEBPACK_IMPORTED_MODULE_17__["BrukneComponent"] },
    { path: "our-dogs/istagram", component: _istagram_istagram_component__WEBPACK_IMPORTED_MODULE_18__["IstagramComponent"] },
    { path: "our-dogs/garas", component: _garas_garas_component__WEBPACK_IMPORTED_MODULE_19__["GarasComponent"] },
    { path: "our-dogs/juka", component: _garas_garas_component__WEBPACK_IMPORTED_MODULE_19__["GarasComponent"] },
    { path: "our-dogs/redsprings", component: _redsprings_redsprings_component__WEBPACK_IMPORTED_MODULE_20__["RedspringsComponent"] },
    { path: "our-dogs/kruopa", component: _kruopa_kruopa_component__WEBPACK_IMPORTED_MODULE_21__["KruopaComponent"] },
    { path: "contacts", component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"] },
    { path: "**", component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__["ErrorPageComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _our_dogs_our_dogs_component__WEBPACK_IMPORTED_MODULE_6__["OurDogsComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__["ErrorPageComponent"],
                _our_dogs_zyra_zyra_component__WEBPACK_IMPORTED_MODULE_10__["ZyraComponent"],
                _popover_popover_component__WEBPACK_IMPORTED_MODULE_15__["PopoverComponent"],
                _brukne_brukne_component__WEBPACK_IMPORTED_MODULE_17__["BrukneComponent"],
                _istagram_istagram_component__WEBPACK_IMPORTED_MODULE_18__["IstagramComponent"],
                _garas_garas_component__WEBPACK_IMPORTED_MODULE_19__["GarasComponent"],
                _redsprings_redsprings_component__WEBPACK_IMPORTED_MODULE_20__["RedspringsComponent"],
                _kruopa_kruopa_component__WEBPACK_IMPORTED_MODULE_21__["KruopaComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                node_modules_angular_popper__WEBPACK_IMPORTED_MODULE_11__["NgxPopper"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                ngx_popover_image__WEBPACK_IMPORTED_MODULE_14__["NgxPopoverImageModule"],
                node_modules_ngx_popover__WEBPACK_IMPORTED_MODULE_16__["PopoverModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/brukne/brukne.component.css":
/*!*********************************************!*\
  !*** ./src/app/brukne/brukne.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JydWtuZS9icnVrbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/brukne/brukne.component.ts":
/*!********************************************!*\
  !*** ./src/app/brukne/brukne.component.ts ***!
  \********************************************/
/*! exports provided: BrukneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrukneComponent", function() { return BrukneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var BrukneComponent = /** @class */ (function () {
    function BrukneComponent(route, router, ds) {
        this.route = route;
        this.router = router;
        this.ds = ds;
        this.nullCondition = '-';
        this.zyra = false;
    }
    BrukneComponent.prototype.ngOnInit = function () {
    };
    BrukneComponent.prototype.lookingAt = function (x) {
        this.dogLookedAt = x;
        console.warn('dogLookedAt:' + this.dogLookedAt);
        this.dogName = this.ds.dogs[x].name;
        this.dogChamps = this.ds.dogs[x].champs;
        this.dogPic = this.ds.dogs[x].pic;
        this.dogRegno = this.ds.dogs[x].regno;
        this.dogDob = this.ds.dogs[x].dob;
        this.dogLoc = this.ds.dogs[x].loc;
        this.dogColour = this.ds.dogs[x].colour;
        this.dogOtherNo = this.ds.dogs[x].otherno;
        this.dogNotes = this.ds.dogs[x].notes;
        this.zyra = true;
    };
    BrukneComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    BrukneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brukne',
            template: __webpack_require__(/*! raw-loader!./brukne.component.html */ "./node_modules/raw-loader/index.js!./src/app/brukne/brukne.component.html"),
            styles: [__webpack_require__(/*! ./brukne.component.css */ "./src/app/brukne/brukne.component.css")]
        })
        // @Output() selected:string
    ], BrukneComponent);
    return BrukneComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        })
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
        this.dogs = {
            zyra: {
                champs: " ",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/zyra.jpg",
                name: "Zyra Puikus Medžioklis ♀ RIP",
                regno: "LŠVK BIG0256/08",
                dob: "2008.02.01",
                otherno: "-",
                loc: "Šiauliai",
                colour: "Trispalvė"
            },
            brukne: {
                champs: " ",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/brukne.jpg",
                name: "Bruknė Petesha (LT JCH-CH-VCH)",
                regno: "LŠVK JRT 0069/09",
                dob: "2009.05.20",
                otherno: "-",
                loc: "Šiauliai",
                colour: "Trispalvė",
                notes: "-"
            },
            exa: {
                champs: "LT JCH-CH, 4xJN, 11xCAC, 6xN, 2xCACIB, 2xBOB",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/z_mama2.jpg",
                name: "Exa Puikus Medžioklis",
                regno: "LŠVK BIG 0049/04",
                dob: "-",
                otherno: "-",
                loc: "-",
                colour: "Trispalvė"
            },
            bournehouse: {
                champs: "LT-LV JCH-CH, BY JCH, 21xCAC, EST-BALT-RUS CH, 8xJN, 9xN, 2xCACIB, 2xR. CACIB, 4xBOB",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/z_tetis2.jpg",
                name: "bournehouse Masterchef of Dialynne",
                regno: "LŠVK BIG 0089/05",
                dob: "-",
                otherno: "-",
                loc: "-",
                colour: "Trispalvė"
            },
            masterpiece: {
                champs: "CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/dialynne%20masterpiece.jpg",
                name: "Dialynne Masterpiece",
                regno: "-",
                dob: "-",
                otherno: "3276CN",
                loc: "-",
                colour: "Trispalvė"
            },
            kiroyale: {
                champs: " ",
                pic: "-",
                name: "bournehouse Kiroyale",
                regno: "-",
                dob: "-",
                otherno: "AA04418204",
                loc: "-",
                colour: "Trispalvė"
            },
            blacky: {
                champs: "LT JCH-CH, 3xLT JN, 4xLT CAC, 2xN, R. CACIB, BOB",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/lakis.jpg",
                name: "Blacky The First Catulus",
                regno: "LŠVK BIG 0014/03",
                dob: "-",
                otherno: "PKR. VI-7421",
                loc: "-",
                colour: "Trispalvė"
            },
            chilli: {
                champs: "JCH-CH, 3xJN, 4xBOB, 4xLT CAC, 4xN",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/biga.jpg",
                name: "Chilli Belle Voix",
                regno: "-",
                dob: "-",
                otherno: "AA04418204",
                loc: "-",
                colour: "Trispalvė"
            },
            hallmark: {
                champs: " ",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/dialynnehallmark.jpg",
                name: "Dialynne Hallmark",
                regno: "-",
                dob: "-",
                otherno: "1072CL",
                loc: "-",
                colour: "Trispalvė"
            },
            rosa: {
                champs: " ",
                pic: "",
                name: "Dialynne Rosa Lea",
                regno: "-",
                dob: "-",
                otherno: "Z0210401Z01",
                loc: "-",
                colour: "Trispalvė"
            },
            storm: {
                champs: "CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/stormaway.jpg",
                name: "Storm Away of Dialynne",
                regno: "-",
                dob: "-",
                otherno: "0550CH",
                loc: "-",
                colour: "Trispalvė"
            },
            kirsch: {
                champs: "CH",
                pic: "",
                name: "Dialynne Kirsch At bournehouse",
                regno: "-",
                dob: "-",
                otherno: "1195CJ",
                loc: "-",
                colour: "Trispalvė"
            },
            shelaft: {
                champs: "NT-D-L-T-BY CH, PL JCH-CH, KL.W",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/shelaft%20billy%20whizz%20of%20dialynne.jpg",
                name: "Shelaft Billy Whizz of Dialynne",
                regno: "KC Z4139604Z04 ",
                dob: "-",
                otherno: "PKR. VI-5389",
                loc: "-",
                colour: "Trispalvė"
            },
            olka: {
                champs: "INT-PL CH, MI.CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/olka.png",
                name: "Snugglewood's Olka",
                regno: "NHSB 2239124 KT.D-1",
                dob: "-",
                otherno: "PKR. VI-5220",
                loc: "-",
                colour: "Trispalvė"
            },
            bayard: {
                champs: "INT-PL CH, MI.CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/byard%20harvest%20moon.jpg",
                name: "Bayard Harvest Moon",
                regno: "-",
                dob: "-",
                otherno: "PKR. VI-4916",
                loc: "-",
                colour: "Trispalvė"
            },
            banda: {
                champs: "PL MICH, PL CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/banda1.jpg",
                name: "Banda Belle Voix",
                regno: "-",
                dob: "-",
                otherno: "PKR. VI-3222",
                loc: "-",
                colour: "Trispalvė"
            },
            pablo: {
                champs: "LT-LV-BY JCH, 2xBOB",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/pablo3.jpg",
                name: "Pablo Z Herbu Sapaly",
                regno: "LŠVK JRT 0020/08",
                dob: "-",
                otherno: "PKR III-59968",
                loc: "-",
                colour: "-",
                notes: "FT I-kr. pėds. (Blood trace)"
            },
            paka: {
                champs: " ",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/chile.jpg",
                name: "Uri Paka Wilkolaka",
                regno: "LŠVK JRT 017A/08",
                dob: "-",
                otherno: "KW III-428/JRT",
                loc: "-",
                colour: "Trispalvė",
                notes: "-"
            },
            king: {
                champs: "PL CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/king%20bassies%20sharley%20chaplin.png",
                name: "King Bassie's Sharley Chaplin",
                regno: "-",
                dob: "-",
                otherno: "KW III-234/JRT",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            uri: {
                champs: "PL CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/uri%20paka%20wilkoaka.png",
                name: "Uri Paka Wilkolaka",
                regno: "-",
                dob: "-",
                otherno: "PKR III-55355",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            pride: {
                champs: "SK-PL-CZ CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/suzans%20pride%20darjeeling.jpg",
                name: "Suzan's Pride Darjeeling",
                regno: "ALSH 0062447",
                dob: "-",
                otherno: "PKR. VI-7421",
                loc: "-",
                colour: "-",
                notes: "CLP/JRT/ZREG/201/06"
            },
            viki: {
                champs: " ",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/viki.jpg",
                name: "Viki Paka Wilkolaka",
                regno: "-",
                dob: "-",
                otherno: "PKR III-57017",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            karell: {
                champs: "JW'03",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/karell%20trouble%20shooter.png",
                name: "Karrell Trouble Shooter",
                regno: "-",
                dob: "-",
                otherno: "ANKC 4100088947",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            kelly: {
                champs: "JW'00",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/king%20bassies%20golden%20girl%20kelly.png",
                name: "King Bassie's Golden Girl Kelly",
                regno: "-",
                dob: "-",
                otherno: "VR 17686",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            lantaka: {
                champs: "INT-SK CH, SK-CZ JCH, 4xCACIB, 5xBOB",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/poleposition.jpg",
                name: "Lantaka Poleposition",
                regno: "-",
                dob: "-",
                otherno: "-",
                loc: "-",
                colour: "-",
                notes: "LOI 04/34831, ČLP/JRT/31/04"
            },
            pola: {
                champs: "PL CH, 3xBOB",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/pola%20z%20arki%20arka.jpg",
                name: "Pola Z Arki Arka",
                regno: "-",
                dob: "-",
                otherno: "KW III-130/JRT",
                loc: "-",
                colour: "Trispalvė",
                notes: "-"
            },
            adidi: {
                champs: " ",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/adidi1.jpg",
                name: "Adidi",
                regno: "-",
                dob: "-",
                otherno: "RISH C/031/A",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            adina: {
                champs: " ",
                pic: "-",
                name: "Suzan's Pride Adina",
                regno: "-",
                dob: "-",
                otherno: "ALSH 0060260",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            roma: {
                champs: "PL JCH, PL CH, CACIB",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/roma.jpg",
                name: "Roma Z Arki Arka",
                regno: "-",
                dob: "-",
                otherno: "KW III-170/JRT",
                loc: "-",
                colour: "Trispalvė",
                notes: "-"
            },
            istagram: {
                champs: "LT JCH, LT CH,LV CH,EST CH,BALT CH,RU CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/etna.jpg",
                name: "Istagram Di Sutri (Etna)",
                regno: "LŠVK JRT 0321/13",
                dob: "2013.07.12",
                otherno: "-",
                loc: "Šiauliai",
                colour: "-",
                notes: "-"
            },
            mysterio: {
                champs: "-",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/lantakamysterio_2.jpg",
                name: "Lantaka Mysterio",
                regno: "-",
                dob: "-",
                otherno: "ROI 06/35430",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            prima: {
                champs: "-",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/Primaballerina_1.jpg",
                name: "Prima Ballerina Di Sutri",
                regno: "-",
                dob: "-",
                otherno: "ROI 12/131592",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            pete: {
                champs: "AUS-IT CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/MyrmidonJackPete.jpg",
                name: "Myrmidon Jack Pete",
                regno: "-",
                dob: "-",
                otherno: "ROI 02/67443",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            dekka: {
                champs: "-",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/MyrmidonJackDekka.jpg",
                name: "Myrmidon Jack Dekka",
                regno: "-",
                dob: "-",
                otherno: "ROI 02/125651",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            lyckans: {
                champs: "-",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/silverlyck.jpg",
                name: "Silverlyckans Wishing And Hoping",
                regno: "-",
                dob: "-",
                otherno: "ROI 09/83593",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            fresca: {
                champs: "-",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/VerniceFresca.jpg",
                name: "Vernice Fresca Di Sutri",
                regno: "-",
                dob: "-",
                otherno: "ROI 09/42076",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            kando: {
                champs: "-",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/PretoriumJustKando.jpg",
                name: "Pretorium Just Kando",
                regno: "-",
                dob: "-",
                otherno: "2100001567",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            peri: {
                champs: "-",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/MyrmidonJackPeri.jpg",
                name: "Myrmidon Jack Peri",
                regno: "-",
                dob: "-",
                otherno: "2100034196",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            danzey: {
                champs: "MULTI CH, INT CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/MyrmidonJackDanzey.jpg",
                name: "Myrmidon Jack Danzey",
                regno: "-",
                dob: "-",
                otherno: "2100045638",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            myrmidon: {
                champs: "-",
                pic: "",
                name: "Myrmidon Jack Rebecca",
                regno: "-",
                dob: "-",
                otherno: "210001874",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            ultra: {
                champs: "MULTI CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/Ultrapride_grass.jpg",
                name: "Ultra Pride Of Mayoland",
                regno: "-",
                dob: "-",
                otherno: "ROI 04/31471",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            magic: {
                champs: "INT. GR. CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/INT%20GR%20CH%20Bushwack's%20Myrmidons%20Magic.jpg",
                name: "Bushwack's Myrmidon Magic",
                regno: "-",
                dob: "-",
                otherno: "S42436/2002",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            luckys: {
                champs: "AUS CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/LittlNapoleonluckysboy.jpg",
                name: "Litlenapoleon Luckys Boy",
                regno: "-",
                dob: "-",
                otherno: "ROI 08/57145",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            bugamme: {
                champs: "AUS CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Etna/AUSTR%20CH%20Braperemi%20Buggame.jpg",
                name: "Braperemi Buggame",
                regno: "-",
                dob: "-",
                otherno: "ROI 08/47896",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            garas: {
                champs: "LT JCH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Garas/garas1.jpg",
                name: "Garas Ištikimas šuo",
                regno: "LŠVK JRT 0366/14",
                dob: "2014.02.10",
                otherno: "-",
                loc: "Šiauliai",
                colour: "Balta su ruda",
                notes: "-"
            },
            mitsu: {
                champs: "LT CH, BOB, R.CACIB",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Garas/mitsu.JPG",
                name: "Merriment Mitsu of Jack's Paradise",
                regno: "LŠVK JRT 0059/09",
                dob: "-",
                otherno: "NHSB BULG-2-2710179",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            arctic: {
                champs: "-",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Garas/Jackxellent%20Arctic%20Franklin.jpg",
                name: "Jackxellent Arctic Franklin",
                regno: "-",
                dob: "-",
                otherno: "NHSB BIJL G-1-2548138",
                loc: "-",
                colour: "-",
                notes: "-"
            }, sound: {
                champs: "-",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Garas/sound%20soraya%20of%20jacks%20paradise.jpg",
                name: "Sound Soraya of Jack's Paradise",
                regno: "-",
                dob: "-",
                otherno: "NHSB BIJL G-1-2623011",
                loc: "-",
                colour: "-",
                notes: "-"
            }, wilkolaka: {
                champs: "-",
                pic: "-",
                name: "Chilli Paka Wilkolaka",
                regno: "LŠVK JRT 017A/08",
                dob: "-",
                otherno: "KW III-428/JRT",
                loc: "-",
                colour: "Trispalvė",
                notes: "-"
            }, huck: {
                champs: "S & EST CH-05 ESTW",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Garas/mywin%20little%20huck.jpg",
                name: "Mywin Little Huck",
                regno: "-",
                dob: "-",
                otherno: "S55860/2002",
                loc: "-",
                colour: "-",
                notes: "-"
            }, dirt: {
                champs: "FIN & SE & RU CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Garas/dirtdiggers%20dragon%20eyes.jpg",
                name: "Dirtdigger's Dragon Eyes",
                regno: "-",
                dob: "-",
                otherno: "ER 16776/03",
                loc: "-",
                colour: "-",
                notes: "-"
            }, lewis: {
                champs: "VDH CH. Lux. DTS. KAMP",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Garas/liberated%20lewis%20of%20jacks%20paradise.jpg",
                name: "Liberated Lewis of Jack's Paradise",
                regno: "-",
                dob: "-",
                otherno: "NHSB BIJL G-0-2438424",
                loc: "-",
                colour: "-",
                notes: "-"
            }, sunny: {
                champs: "-",
                pic: "-",
                name: "Sunny Shakira of Jack's Paradise",
                regno: "-",
                dob: "-",
                otherno: "NHSB BIJL G-0-2412356",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            juka: {
                champs: "-",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/juka.jpg",
                name: "Juka Ištikimas šuo",
                regno: "LŠVK JRT 0519/15",
                dob: "2015.04.18",
                otherno: "-",
                loc: "Šiauliai",
                colour: "Trispalvė",
                notes: "-"
            },
            iagos: {
                champs: "-",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/iagos%20fartvind.jpg",
                name: "IAGOS FARTVIND",
                regno: "-",
                dob: "-",
                otherno: "S29398/2007",
                loc: "-",
                colour: "-",
                notes: "HD-B"
            },
            redsprings: {
                champs: "LT JCH, LT CH",
                pic: "http://istikimassuo.puslapiai.lt/images/elari%20-%20puslapiui/2.3.jpg",
                name: "Redsprings Eleri Hud",
                regno: "LŠVK WSS 0002/15",
                dob: "2015.06.10",
                otherno: "-",
                loc: "Šiauliai",
                colour: "-",
                notes: "-"
            },
            arial: {
                champs: "LV JCH, CAC, CACIB",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/arial%20helwyr.jpg",
                name: "ARIAL HELWYR",
                regno: "-",
                dob: "-",
                otherno: "LV -28026/12",
                loc: "-",
                colour: "-",
                notes: "HD-A, ED-0, III p. p., III as. p."
            },
            dutch: {
                champs: "-",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/gulsporrens%20hunting%20dutchman.jpg",
                name: "GULSPORRENS HUNTING DUTCHMAN",
                regno: "-",
                dob: "-",
                otherno: "S24683/2003",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            money: {
                champs: "-",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/iagos_all_bout_the_money.jpg",
                name: "IAGOS ALL 'BOUT THE MONEY",
                regno: "-",
                dob: "-",
                otherno: "S58066/2001",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            taffy: {
                champs: "PLJ&PL&LV CH",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/taffy%20conor%20sedda.jpg",
                name: "TAFFY CONOR SEDDA",
                regno: "-",
                dob: "-",
                otherno: "PKR. VIII-23050",
                loc: "-",
                colour: "-",
                notes: "HD-A, II"
            },
            brita: {
                champs: "LV&LT CH",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/brita%20od%20nezarecke%20tune.jpg",
                name: "BRITA OD NEŽARECKE TUNE",
                regno: "-",
                dob: "-",
                otherno: "ČLP/WSS/4326 / LV-VSS-39/10",
                loc: "-",
                colour: "-",
                notes: "HD-B/C, ED-0"
            },
            ufo: {
                champs: "-",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/ufo%20our%20loyal%20welsh.jpg",
                name: "UFO OUR LOYAL WELSH",
                regno: "-",
                dob: "-",
                otherno: "NHSB2301985",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            sweet: {
                champs: "SE&NO CH",
                pic: "",
                name: "HAMMALGARDENS LITTLE SWEET",
                regno: "-",
                dob: "-",
                otherno: "S19932/2000",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            ham: {
                champs: "SE&NO CH",
                pic: "",
                name: "HAMMALGARDENS DON'T FORGET ME",
                regno: "-",
                dob: "-",
                otherno: "S40447/2000",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            did: {
                champs: "SE CH, SEW'00",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/hammalgardens%20did%20i%20tell%20you.jpg",
                name: "HAMMALGARDENS DID I TELL YOU",
                regno: "-",
                dob: "-",
                otherno: "S44710/99",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            amigos: {
                champs: "LVJ&LV&LT CH",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/amigos%20cilver.jpg",
                name: "AMIGOS CILVER",
                regno: "-",
                dob: "-",
                otherno: "LV-6194/02",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            bonita: {
                champs: "PLJ&PL CH",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/bonita%20sedda.jpg",
                name: "BONITA SEDDA",
                regno: "-",
                dob: "-",
                otherno: "PKR. VIII-17032",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            duck: {
                champs: "CIB&CZ&PL&AT CH",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/eastfarms%20dynamite%20duck.jpg",
                name: "EASTFARM'S DYNAMITE DUCK",
                regno: "-",
                dob: "-",
                otherno: "ČLP/WSS/3789/03",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            jifex: {
                champs: "CZ CH, R. CACIB",
                pic: "http://istikimassuo.puslapiai.lt/images/stories/Elari/fatty%20jifex.jpg",
                name: "FATTY JIFEX",
                regno: "-",
                dob: "-",
                otherno: "ČLP/WSS/3929/08",
                loc: "-",
                colour: "-",
                notes: "-"
            },
            kruopa: {
                champs: "-",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Kruopa/kruopa.JPG",
                name: "Kruopa Ištikimas šuo",
                regno: "LŠVK BIG1029/16",
                dob: "2016.04.17",
                otherno: "",
                loc: "Šiauliai",
                colour: "-",
                notes: "-"
            },
            dodzis: {
                champs: "LT-JCH-CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/dodzis-puikus-medzioklis.jpg",
                name: "Dodžis Puikus medžioklis",
                regno: "LŠVK BIG 0159/07",
                dob: "-",
                otherno: "",
                loc: "-",
                colour: "Trispalvė",
                notes: "-"
            },
            quel: {
                champs: "RU-CH, EST-CH, LV-CH, LT-CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Kruopa/duszek-tel-quel.jpg",
                name: "Duszek Tel Quel",
                regno: "-",
                dob: "-",
                otherno: "PKR. VI-7257",
                loc: "-",
                colour: "Trispalvė",
                notes: "D-II"
            },
            aira: {
                champs: "LT JCH-CH",
                pic: "",
                name: "Aira Puikus medžioklis",
                regno: "LŠVK BIG 0006/01",
                dob: "-",
                otherno: "",
                loc: "-",
                colour: "Trispalvė",
                notes: "-"
            },
            moon: {
                champs: "",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Kruopa/Moon-Jumper's-Joe-Cocker.jpg",
                name: "Moon Jumper's Joe Cocker",
                regno: "-",
                dob: "-",
                otherno: "DKK 12722/99 ",
                loc: "-",
                colour: "Trispalvė",
                notes: "PKR.VI-5926"
            },
            old: {
                champs: "PL-CH",
                pic: "http://www.istikimassuo.puslapiai.lt/images/stories/Kruopa/Old-Ballantaine's-Tel-Quel.jpg",
                name: "Old Ballantaine's Tel Quel",
                regno: "-",
                dob: "-",
                otherno: "PKR.VI-4402",
                loc: "-",
                colour: "Trispalvė",
                notes: "-"
            },
        };
    }
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")]
        })
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/garas/garas.component.css":
/*!*******************************************!*\
  !*** ./src/app/garas/garas.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhcmFzL2dhcmFzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/garas/garas.component.ts":
/*!******************************************!*\
  !*** ./src/app/garas/garas.component.ts ***!
  \******************************************/
/*! exports provided: GarasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GarasComponent", function() { return GarasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GarasComponent = /** @class */ (function () {
    function GarasComponent(ds, route, router) {
        this.ds = ds;
        this.route = route;
        this.router = router;
        this.nullCondition = "-";
        this.zyra = false;
    }
    GarasComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url == '/our-dogs/juka') {
            this.garasOrJuka = 'juka';
        }
        if (this.router.url == '/our-dogs/garas') {
            this.garasOrJuka = 'garas';
        }
        this.selected = {
            currentChoice: this.route.snapshot.params["id"]
        };
        this.route.params.subscribe(function (params) {
            _this.selected.currentChoice = params["id"];
        });
    };
    GarasComponent.prototype.lookingAt = function (x) {
        this.dogLookedAt = x;
        this.dogName = this.ds.dogs[x].name;
        this.dogChamps = this.ds.dogs[x].champs;
        this.dogPic = this.ds.dogs[x].pic;
        this.dogRegno = this.ds.dogs[x].regno;
        this.dogDob = this.ds.dogs[x].dob;
        this.dogLoc = this.ds.dogs[x].loc;
        this.dogColour = this.ds.dogs[x].colour;
        this.dogOtherNo = this.ds.dogs[x].otherno;
        this.dogNotes = this.ds.dogs[x].notes;
        this.zyra = true;
    };
    GarasComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    GarasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-garas",
            template: __webpack_require__(/*! raw-loader!./garas.component.html */ "./node_modules/raw-loader/index.js!./src/app/garas/garas.component.html"),
            styles: [__webpack_require__(/*! ./garas.component.css */ "./src/app/garas/garas.component.css")]
        })
    ], GarasComponent);
    return GarasComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe {\r\n    margin:0 5px 5px 0\r\n}\r\n\r\nhr {\r\n    -moz-border-bottom-colors: none;\r\n    -moz-border-left-colors: none;\r\n    -moz-border-right-colors: none;\r\n    -moz-border-top-colors: none;\r\n    border-color: #9e9e9e -moz-use-text-color #9e9e9e;\r\n    border-style: solid none;\r\n    border-width: 1px 0;\r\n    margin: 18px 0;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixpREFBaUQ7SUFDakQsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1lIHtcclxuICAgIG1hcmdpbjowIDVweCA1cHggMFxyXG59XHJcblxyXG5ociB7XHJcbiAgICAtbW96LWJvcmRlci1ib3R0b20tY29sb3JzOiBub25lO1xyXG4gICAgLW1vei1ib3JkZXItbGVmdC1jb2xvcnM6IG5vbmU7XHJcbiAgICAtbW96LWJvcmRlci1yaWdodC1jb2xvcnM6IG5vbmU7XHJcbiAgICAtbW96LWJvcmRlci10b3AtY29sb3JzOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOWU5ZTllIC1tb3otdXNlLXRleHQtY29sb3IgIzllOWU5ZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4IDA7XHJcbiAgICBtYXJnaW46IDE4cHggMDtcclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    HomePageComponent.prototype.ngOnInit = function () { };
    HomePageComponent.prototype.onContactsClick = function () {
        this.router.navigate(["/contacts"]);
        console.warn(this.route);
    };
    HomePageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home-page",
            template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/istagram/istagram.component.css":
/*!*************************************************!*\
  !*** ./src/app/istagram/istagram.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzdGFncmFtL2lzdGFncmFtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/istagram/istagram.component.ts":
/*!************************************************!*\
  !*** ./src/app/istagram/istagram.component.ts ***!
  \************************************************/
/*! exports provided: IstagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IstagramComponent", function() { return IstagramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var IstagramComponent = /** @class */ (function () {
    function IstagramComponent(ds) {
        this.ds = ds;
        this.nullCondition = "-";
        this.zyra = false;
    }
    IstagramComponent.prototype.ngOnInit = function () { };
    IstagramComponent.prototype.lookingAt = function (x) {
        this.dogLookedAt = x;
        console.warn("dogLookedAt:" + this.dogLookedAt);
        this.dogName = this.ds.dogs[x].name;
        this.dogChamps = this.ds.dogs[x].champs;
        this.dogPic = this.ds.dogs[x].pic;
        this.dogRegno = this.ds.dogs[x].regno;
        this.dogDob = this.ds.dogs[x].dob;
        this.dogLoc = this.ds.dogs[x].loc;
        this.dogColour = this.ds.dogs[x].colour;
        this.dogOtherNo = this.ds.dogs[x].otherno;
        this.dogNotes = this.ds.dogs[x].notes;
        this.zyra = true;
    };
    IstagramComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    IstagramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-istagram",
            template: __webpack_require__(/*! raw-loader!./istagram.component.html */ "./node_modules/raw-loader/index.js!./src/app/istagram/istagram.component.html"),
            styles: [__webpack_require__(/*! ./istagram.component.css */ "./src/app/istagram/istagram.component.css")]
        })
    ], IstagramComponent);
    return IstagramComponent;
}());



/***/ }),

/***/ "./src/app/kruopa/kruopa.component.css":
/*!*********************************************!*\
  !*** ./src/app/kruopa/kruopa.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tydW9wYS9rcnVvcGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/kruopa/kruopa.component.ts":
/*!********************************************!*\
  !*** ./src/app/kruopa/kruopa.component.ts ***!
  \********************************************/
/*! exports provided: KruopaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KruopaComponent", function() { return KruopaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var KruopaComponent = /** @class */ (function () {
    function KruopaComponent(route, router, ds) {
        this.route = route;
        this.router = router;
        this.ds = ds;
        this.nullCondition = '-';
        this.zyra = false;
    }
    KruopaComponent.prototype.ngOnInit = function () {
    };
    KruopaComponent.prototype.lookingAt = function (x) {
        this.dogLookedAt = x;
        console.warn('dogLookedAt:' + this.dogLookedAt);
        console.warn();
        this.dogName = this.ds.dogs[x].name;
        this.dogChamps = this.ds.dogs[x].champs;
        this.dogPic = this.ds.dogs[x].pic;
        this.dogRegno = this.ds.dogs[x].regno;
        this.dogDob = this.ds.dogs[x].dob;
        this.dogLoc = this.ds.dogs[x].loc;
        this.dogColour = this.ds.dogs[x].colour;
        this.dogOtherNo = this.ds.dogs[x].otherno;
        this.zyra = true;
    };
    KruopaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    KruopaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kruopa',
            template: __webpack_require__(/*! raw-loader!./kruopa.component.html */ "./node_modules/raw-loader/index.js!./src/app/kruopa/kruopa.component.html"),
            styles: [__webpack_require__(/*! ./kruopa.component.css */ "./src/app/kruopa/kruopa.component.css")]
        })
    ], KruopaComponent);
    return KruopaComponent;
}());



/***/ }),

/***/ "./src/app/our-dogs/our-dogs.component.css":
/*!*************************************************!*\
  !*** ./src/app/our-dogs/our-dogs.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-item:hover{\r\n    cursor: pointer;\r\n    background-color: #585858;\r\n    color:white !important\r\n}\r\n\r\n h1{\r\n    text-align: center;\r\n    padding-top: 35px !important\r\n}\r\n\r\n ul {\r\n    list-style: none\r\n}\r\n\r\n .f:hover {\r\n    background-color: #FF69B4 !important;\r\n    color:white !important;\r\n\r\n}\r\n\r\n .f:hover a {\r\n    color:white !important;\r\n}\r\n\r\n .m:hover{\r\n    background-color: #17a2b8 !important;\r\n    color:white !important;\r\n}\r\n\r\n .m:hover a {\r\n    color:white !important;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyLWRvZ3Mvb3VyLWRvZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekI7QUFDSjs7Q0FFQztJQUNHLGtCQUFrQjtJQUNsQjtBQUNKOztDQUVBO0lBQ0k7QUFDSjs7Q0FFQTtJQUNJLG9DQUFvQztJQUNwQyxzQkFBc0I7O0FBRTFCOztDQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztDQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHNCQUFzQjtBQUMxQjs7Q0FFQTtJQUNJLHNCQUFzQjs7QUFFMUIiLCJmaWxlIjoic3JjL2FwcC9vdXItZG9ncy9vdXItZG9ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1ODU4O1xyXG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudFxyXG59XHJcblxyXG4gaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMzVweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxufVxyXG5cclxuLmY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjlCNCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5mOmhvdmVyIGEge1xyXG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubTpob3ZlciBhIHtcclxuICAgIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/our-dogs/our-dogs.component.ts":
/*!************************************************!*\
  !*** ./src/app/our-dogs/our-dogs.component.ts ***!
  \************************************************/
/*! exports provided: OurDogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurDogsComponent", function() { return OurDogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var OurDogsComponent = /** @class */ (function () {
    function OurDogsComponent(router, renderer) {
        this.router = router;
    }
    OurDogsComponent.prototype.ngOnInit = function () { };
    OurDogsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    OurDogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-our-dogs",
            template: __webpack_require__(/*! raw-loader!./our-dogs.component.html */ "./node_modules/raw-loader/index.js!./src/app/our-dogs/our-dogs.component.html"),
            styles: [__webpack_require__(/*! ./our-dogs.component.css */ "./src/app/our-dogs/our-dogs.component.css")]
        })
    ], OurDogsComponent);
    return OurDogsComponent;
}());



/***/ }),

/***/ "./src/app/our-dogs/zyra/zyra.component.css":
/*!**************************************************!*\
  !*** ./src/app/our-dogs/zyra/zyra.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291ci1kb2dzL3p5cmEvenlyYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/our-dogs/zyra/zyra.component.ts":
/*!*************************************************!*\
  !*** ./src/app/our-dogs/zyra/zyra.component.ts ***!
  \*************************************************/
/*! exports provided: ZyraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZyraComponent", function() { return ZyraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");




var ZyraComponent = /** @class */ (function () {
    function ZyraComponent(route, router, ds) {
        this.route = route;
        this.router = router;
        this.ds = ds;
        this.nullCondition = '-';
        this.zyra = false;
    }
    ZyraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected = {
            currentChoice: this.route.snapshot.params["id"]
        };
        this.route.params.subscribe(function (params) {
            _this.selected.currentChoice = params["id"];
        });
    };
    ZyraComponent.prototype.lookingAt = function (x) {
        this.dogLookedAt = x;
        console.warn('dogLookedAt:' + this.dogLookedAt);
        console.warn();
        this.dogName = this.ds.dogs[x].name;
        this.dogChamps = this.ds.dogs[x].champs;
        this.dogPic = this.ds.dogs[x].pic;
        this.dogRegno = this.ds.dogs[x].regno;
        this.dogDob = this.ds.dogs[x].dob;
        this.dogLoc = this.ds.dogs[x].loc;
        this.dogColour = this.ds.dogs[x].colour;
        this.dogOtherNo = this.ds.dogs[x].otherno;
        this.zyra = true;
    };
    ZyraComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    ZyraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-zyra",
            template: __webpack_require__(/*! raw-loader!./zyra.component.html */ "./node_modules/raw-loader/index.js!./src/app/our-dogs/zyra/zyra.component.html"),
            styles: [__webpack_require__(/*! ./zyra.component.css */ "./src/app/our-dogs/zyra/zyra.component.css")]
        })
    ], ZyraComponent);
    return ZyraComponent;
}());



/***/ }),

/***/ "./src/app/popover/popover.component.css":
/*!***********************************************!*\
  !*** ./src/app/popover/popover.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/popover/popover.component.ts":
/*!**********************************************!*\
  !*** ./src/app/popover/popover.component.ts ***!
  \**********************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(ds, selected) {
        if (selected === void 0) { selected = 'bruknePopover'; }
        this.ds = ds;
        this.selected = selected;
        this.nullCondition = '-';
        this.zyra = false;
    }
    PopoverComponent.prototype.ngOnInit = function () {
    };
    PopoverComponent.prototype.lookingAt = function (x) {
        this.dogLookedAt = x;
        console.warn('dogLookedAt:' + this.dogLookedAt);
        this.dogName = this.ds.dogs[x].name;
        this.dogChamps = this.ds.dogs[x].champs;
        this.dogPic = this.ds.dogs[x].pic;
        this.dogRegno = this.ds.dogs[x].regno;
        this.dogDob = this.ds.dogs[x].dob;
        this.dogLoc = this.ds.dogs[x].loc;
        this.dogColour = this.ds.dogs[x].colour;
        this.dogOtherNo = this.ds.dogs[x].otherno;
        this.dogNotes = this.ds.dogs[x].notes;
        this.zyra = true;
    };
    PopoverComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: String }
    ]; };
    PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/index.js!./src/app/popover/popover.component.html"),
            styles: [__webpack_require__(/*! ./popover.component.css */ "./src/app/popover/popover.component.css")]
        })
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/redsprings/redsprings.component.css":
/*!*****************************************************!*\
  !*** ./src/app/redsprings/redsprings.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZHNwcmluZ3MvcmVkc3ByaW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/redsprings/redsprings.component.ts":
/*!****************************************************!*\
  !*** ./src/app/redsprings/redsprings.component.ts ***!
  \****************************************************/
/*! exports provided: RedspringsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedspringsComponent", function() { return RedspringsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var RedspringsComponent = /** @class */ (function () {
    function RedspringsComponent(route, router, ds) {
        this.route = route;
        this.router = router;
        this.ds = ds;
        this.nullCondition = '-';
        this.zyra = false;
    }
    RedspringsComponent.prototype.ngOnInit = function () {
    };
    RedspringsComponent.prototype.lookingAt = function (x) {
        this.dogLookedAt = x;
        console.warn('dogLookedAt:' + this.dogLookedAt);
        console.warn();
        this.dogName = this.ds.dogs[x].name;
        this.dogChamps = this.ds.dogs[x].champs;
        this.dogPic = this.ds.dogs[x].pic;
        this.dogRegno = this.ds.dogs[x].regno;
        this.dogDob = this.ds.dogs[x].dob;
        this.dogLoc = this.ds.dogs[x].loc;
        this.dogColour = this.ds.dogs[x].colour;
        this.dogOtherNo = this.ds.dogs[x].otherno;
        this.zyra = true;
    };
    RedspringsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    RedspringsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redsprings',
            template: __webpack_require__(/*! raw-loader!./redsprings.component.html */ "./node_modules/raw-loader/index.js!./src/app/redsprings/redsprings.component.html"),
            styles: [__webpack_require__(/*! ./redsprings.component.css */ "./src/app/redsprings/redsprings.component.css")]
        })
    ], RedspringsComponent);
    return RedspringsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\DogKennelAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map