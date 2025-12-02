var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// inject-dependencies:window.mcraft.React
var require_window_mcraft = __commonJS({
  "inject-dependencies:window.mcraft.React"(exports, module) {
    module.exports = window.mcraft.React;
  }
});

// inject-dependencies:window.mcraft.ReactJsxRuntime
var require_window_mcraft2 = __commonJS({
  "inject-dependencies:window.mcraft.ReactJsxRuntime"(exports, module) {
    module.exports = window.mcraft.ReactJsxRuntime;
  }
});

// inject-dependencies:window.mcraft.ReactDOM
var require_window_mcraft3 = __commonJS({
  "inject-dependencies:window.mcraft.ReactDOM"(exports, module) {
    module.exports = window.mcraft.ReactDOM;
  }
});

// src/arwes-ui/ArwesButton.tsx
var import_react39 = __toESM(require_window_mcraft());

// node_modules/.pnpm/@arwes+animated@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/animated/build/esm/easing/easing.js
var pow = Math.pow;
var sqrt = Math.sqrt;
var sin = Math.sin;
var cos = Math.cos;
var PI = Math.PI;
var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * PI / 3;
var c5 = 2 * PI / 4.5;
var bounceOut = (x) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  }
  return n1 * (x -= 2.625 / d1) * x + 0.984375;
};
var easing = {
  linear: (x) => x,
  inQuad: (x) => {
    return x * x;
  },
  outQuad: (x) => {
    return 1 - (1 - x) * (1 - x);
  },
  inOutQuad: (x) => {
    return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
  },
  inCubic: (x) => {
    return x * x * x;
  },
  outCubic: (x) => {
    return 1 - pow(1 - x, 3);
  },
  inOutCubic: (x) => {
    return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
  },
  inQuart: (x) => {
    return x * x * x * x;
  },
  outQuart: (x) => {
    return 1 - pow(1 - x, 4);
  },
  inOutQuart: (x) => {
    return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
  },
  inQuint: (x) => {
    return x * x * x * x * x;
  },
  outQuint: (x) => {
    return 1 - pow(1 - x, 5);
  },
  inOutQuint: (x) => {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
  },
  inSine: (x) => {
    return 1 - cos(x * PI / 2);
  },
  outSine: (x) => {
    return sin(x * PI / 2);
  },
  inOutSine: (x) => {
    return -(cos(PI * x) - 1) / 2;
  },
  inExpo: (x) => {
    return x === 0 ? 0 : pow(2, 10 * x - 10);
  },
  outExpo: (x) => {
    return x === 1 ? 1 : 1 - pow(2, -10 * x);
  },
  inOutExpo: (x) => {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
  },
  inCirc: (x) => {
    return 1 - sqrt(1 - pow(x, 2));
  },
  outCirc: (x) => {
    return sqrt(1 - pow(x - 1, 2));
  },
  inOutCirc: (x) => {
    return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
  },
  inBack: (x) => {
    return c3 * x * x * x - c1 * x * x;
  },
  outBack: (x) => {
    return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
  },
  inOutBack: (x) => {
    return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
  },
  inElastic: (x) => {
    return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
  },
  outElastic: (x) => {
    return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
  },
  inOutElastic: (x) => {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
  },
  inBounce: (x) => {
    return 1 - bounceOut(1 - x);
  },
  outBounce: bounceOut,
  inOutBounce: (x) => {
    return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
  }
};

// node_modules/.pnpm/@arwes+animated@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/animated/build/esm/easeAmong/easeAmong.js
var easeAmong = (breakpoints) => (progress2) => {
  if (breakpoints.length === 1) {
    return progress2 * breakpoints[0];
  }
  if (progress2 <= 0) {
    return breakpoints[0];
  }
  if (progress2 >= 1) {
    return breakpoints[breakpoints.length - 1];
  }
  const portion = 1 / (breakpoints.length - 1);
  const portionBase = Math.floor(progress2 / portion);
  const portionProgress = progress2 / portion - portionBase;
  const current = Math.floor(progress2 * (breakpoints.length - 1));
  const next = current + 1;
  const from = breakpoints[current];
  const to = breakpoints[next];
  if (to > from) {
    const diff2 = to - from;
    return from + diff2 * portionProgress;
  }
  const diff = from - to;
  return from - diff * portionProgress;
};

// node_modules/.pnpm/@arwes+animated@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/animated/build/esm/formatAnimatedCSSProps/formatAnimatedCSSProps.js
var propsTransformDistances = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
var propsTransformAngles = {
  rotate: "rotate",
  rotateX: "rotateX",
  rotateY: "rotateY",
  rotateZ: "rotateZ",
  skew: "skew",
  skewX: "skewX",
  skewY: "skewY"
};
var propsTransformUnitless = {
  scale: "scale",
  scaleX: "scaleX",
  scaleY: "scaleY",
  scaleZ: "scaleZ"
};
var formatAnimatedCSSProps = (cssPropertiesEnhanced) => {
  const cssProperties = {};
  let transform = "";
  Object.keys(cssPropertiesEnhanced).forEach((key) => {
    const raw = cssPropertiesEnhanced[key];
    if (propsTransformDistances[key]) {
      const name = propsTransformDistances[key];
      const value = Number.isFinite(raw) ? `${raw}px` : String(raw);
      transform += ` ${name}(var(--motion-${name}))`;
      cssProperties[`--motion-${name}`] = value;
    } else if (propsTransformAngles[key]) {
      const name = propsTransformAngles[key];
      const value = Number.isFinite(raw) ? `${raw}deg` : String(raw);
      transform += ` ${name}(var(--motion-${name}))`;
      cssProperties[`--motion-${name}`] = value;
    } else if (propsTransformUnitless[key]) {
      const name = propsTransformUnitless[key];
      transform += ` ${name}(var(--motion-${name}))`;
      cssProperties[`--motion-${name}`] = raw;
    } else {
      ;
      cssProperties[key] = raw;
    }
  });
  transform = transform.trim();
  if (transform) {
    cssProperties.transform = transform;
  }
  return cssProperties;
};

// node_modules/.pnpm/@arwes+animated@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/animated/build/esm/applyAnimatedCSSProps/applyAnimatedCSSProps.js
var applyAnimatedCSSProps = (element, props) => {
  const styles = formatAnimatedCSSProps(props);
  Object.keys(styles).forEach((key) => {
    if (/^--[a-zA-Z]/.test(key)) {
      element.style.setProperty(key, styles[key]);
    } else {
      element.style[key] = styles[key];
    }
  });
};

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/array.es.js
function addUniqueItem(array, item) {
  array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  index > -1 && arr.splice(index, 1);
}

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/clamp.es.js
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/defaults.es.js
var defaults = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
};

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/is-number.es.js
var isNumber = (value) => typeof value === "number";

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/is-easing-list.es.js
var isEasingList = (easing2) => Array.isArray(easing2) && !isNumber(easing2[0]);

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/wrap.es.js
var wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/easing.es.js
function getEasingForSegment(easing2, i) {
  return isEasingList(easing2) ? easing2[wrap(0, easing2.length, i)] : easing2;
}

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/mix.es.js
var mix = (min, max, progress2) => -progress2 * min + progress2 * max + min;

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/noop.es.js
var noop = () => {
};
var noopReturn = (v) => v;

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/progress.es.js
var progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/offset.es.js
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mix(min, 1, offsetProgress));
  }
}
function defaultOffset(length) {
  const offset = [0];
  fillOffset(offset, length - 1);
  return offset;
}

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/interpolate.es.js
function interpolate(output, input = defaultOffset(output.length), easing2 = noopReturn) {
  const length = output.length;
  const remainder = length - input.length;
  remainder > 0 && fillOffset(input, remainder);
  return (t) => {
    let i = 0;
    for (; i < length - 2; i++) {
      if (t < input[i + 1])
        break;
    }
    let progressInRange = clamp(0, 1, progress(input[i], input[i + 1], t));
    const segmentEasing = getEasingForSegment(easing2, i);
    progressInRange = segmentEasing(progressInRange);
    return mix(output[i], output[i + 1], progressInRange);
  };
}

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/is-cubic-bezier.es.js
var isCubicBezier = (easing2) => Array.isArray(easing2) && isNumber(easing2[0]);

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/is-easing-generator.es.js
var isEasingGenerator = (easing2) => typeof easing2 === "object" && Boolean(easing2.createAnimation);

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/is-function.es.js
var isFunction = (value) => typeof value === "function";

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/is-string.es.js
var isString = (value) => typeof value === "string";

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/time.es.js
var time = {
  ms: (seconds) => seconds * 1e3,
  s: (milliseconds) => milliseconds / 1e3
};

// node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/velocity.es.js
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/.pnpm/@motionone+easing@10.18.0/node_modules/@motionone/easing/dist/cubic-bezier.es.js
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noopReturn;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/.pnpm/@motionone+easing@10.18.0/node_modules/@motionone/easing/dist/steps.es.js
var steps = (steps2, direction = "end") => (progress2) => {
  progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
  const expanded = progress2 * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};

// node_modules/.pnpm/@motionone+animation@10.18.0/node_modules/@motionone/animation/dist/utils/easing.es.js
var namedEasings = {
  ease: cubicBezier(0.25, 0.1, 0.25, 1),
  "ease-in": cubicBezier(0.42, 0, 1, 1),
  "ease-in-out": cubicBezier(0.42, 0, 0.58, 1),
  "ease-out": cubicBezier(0, 0, 0.58, 1)
};
var functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
  if (isFunction(definition))
    return definition;
  if (isCubicBezier(definition))
    return cubicBezier(...definition);
  const namedEasing = namedEasings[definition];
  if (namedEasing)
    return namedEasing;
  if (definition.startsWith("steps")) {
    const args = functionArgsRegex.exec(definition);
    if (args) {
      const argsArray = args[1].split(",");
      return steps(parseFloat(argsArray[0]), argsArray[1].trim());
    }
  }
  return noopReturn;
}

// node_modules/.pnpm/@motionone+animation@10.18.0/node_modules/@motionone/animation/dist/Animation.es.js
var Animation = class {
  constructor(output, keyframes = [0, 1], { easing: easing2, duration: initialDuration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, offset, direction = "normal", autoplay = true } = {}) {
    this.startTime = null;
    this.rate = 1;
    this.t = 0;
    this.cancelTimestamp = null;
    this.easing = noopReturn;
    this.duration = 0;
    this.totalDuration = 0;
    this.repeat = 0;
    this.playState = "idle";
    this.finished = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    easing2 = easing2 || defaults.easing;
    if (isEasingGenerator(easing2)) {
      const custom = easing2.createAnimation(keyframes);
      easing2 = custom.easing;
      keyframes = custom.keyframes || keyframes;
      initialDuration = custom.duration || initialDuration;
    }
    this.repeat = repeat;
    this.easing = isEasingList(easing2) ? noopReturn : getEasingFunction(easing2);
    this.updateDuration(initialDuration);
    const interpolate$1 = interpolate(keyframes, offset, isEasingList(easing2) ? easing2.map(getEasingFunction) : noopReturn);
    this.tick = (timestamp) => {
      var _a;
      delay = delay;
      let t = 0;
      if (this.pauseTime !== void 0) {
        t = this.pauseTime;
      } else {
        t = (timestamp - this.startTime) * this.rate;
      }
      this.t = t;
      t /= 1e3;
      t = Math.max(t - delay, 0);
      if (this.playState === "finished" && this.pauseTime === void 0) {
        t = this.totalDuration;
      }
      const progress2 = t / this.duration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      const iterationIsOdd = currentIteration % 2;
      if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) {
        iterationProgress = 1 - iterationProgress;
      }
      const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
      const latest = interpolate$1(this.easing(p));
      output(latest);
      const isAnimationFinished = this.pauseTime === void 0 && (this.playState === "finished" || t >= this.totalDuration + endDelay);
      if (isAnimationFinished) {
        this.playState = "finished";
        (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, latest);
      } else if (this.playState !== "idle") {
        this.frameRequestId = requestAnimationFrame(this.tick);
      }
    };
    if (autoplay)
      this.play();
  }
  play() {
    const now = performance.now();
    this.playState = "running";
    if (this.pauseTime !== void 0) {
      this.startTime = now - this.pauseTime;
    } else if (!this.startTime) {
      this.startTime = now;
    }
    this.cancelTimestamp = this.startTime;
    this.pauseTime = void 0;
    this.frameRequestId = requestAnimationFrame(this.tick);
  }
  pause() {
    this.playState = "paused";
    this.pauseTime = this.t;
  }
  finish() {
    this.playState = "finished";
    this.tick(0);
  }
  stop() {
    var _a;
    this.playState = "idle";
    if (this.frameRequestId !== void 0) {
      cancelAnimationFrame(this.frameRequestId);
    }
    (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
  }
  cancel() {
    this.stop();
    this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {
  }
  updateDuration(duration) {
    this.duration = duration;
    this.totalDuration = duration * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t) {
    if (this.pauseTime !== void 0 || this.rate === 0) {
      this.pauseTime = t;
    } else {
      this.startTime = performance.now() - t / this.rate;
    }
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(rate) {
    this.rate = rate;
  }
};

// node_modules/.pnpm/hey-listen@1.0.8/node_modules/hey-listen/dist/hey-listen.es.js
var warning = function() {
};
var invariant = function() {
};
if (true) {
  warning = function(check, message) {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = function(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/.pnpm/@motionone+types@10.17.1/node_modules/@motionone/types/dist/MotionValue.es.js
var MotionValue = class {
  setAnimation(animation) {
    this.animation = animation;
    animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
};

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/data.es.js
var data = /* @__PURE__ */ new WeakMap();
function getAnimationData(element) {
  if (!data.has(element)) {
    data.set(element, {
      transforms: [],
      values: /* @__PURE__ */ new Map()
    });
  }
  return data.get(element);
}
function getMotionValue(motionValues, name) {
  if (!motionValues.has(name)) {
    motionValues.set(name, new MotionValue());
  }
  return motionValues.get(name);
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js
var axes = ["", "X", "Y", "Z"];
var order = ["translate", "scale", "rotate", "skew"];
var transformAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
var rotation = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (v) => v + "deg"
};
var baseTransformProperties = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (v) => v + "px"
  },
  rotate: rotation,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: noopReturn
  },
  skew: rotation
};
var transformDefinitions = /* @__PURE__ */ new Map();
var asTransformCssVar = (name) => `--motion-${name}`;
var transforms = ["x", "y", "z"];
order.forEach((name) => {
  axes.forEach((axis) => {
    transforms.push(name + axis);
    transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
  });
});
var compareTransformOrder = (a, b) => transforms.indexOf(a) - transforms.indexOf(b);
var transformLookup = new Set(transforms);
var isTransform = (name) => transformLookup.has(name);
var addTransformToElement = (element, name) => {
  if (transformAlias[name])
    name = transformAlias[name];
  const { transforms: transforms2 } = getAnimationData(element);
  addUniqueItem(transforms2, name);
  element.style.transform = buildTransformTemplate(transforms2);
};
var buildTransformTemplate = (transforms2) => transforms2.sort(compareTransformOrder).reduce(transformListToString, "").trim();
var transformListToString = (template, name) => `${template} ${name}(var(${asTransformCssVar(name)}))`;

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/utils/css-var.es.js
var isCssVar = (name) => name.startsWith("--");
var registeredProperties = /* @__PURE__ */ new Set();
function registerCssVariable(name) {
  if (registeredProperties.has(name))
    return;
  registeredProperties.add(name);
  try {
    const { syntax, initialValue } = transformDefinitions.has(name) ? transformDefinitions.get(name) : {};
    CSS.registerProperty({
      name,
      inherits: false,
      syntax,
      initialValue
    });
  } catch (e) {
  }
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js
var testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
var featureTests = {
  cssRegisterProperty: () => typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      testAnimation({ opacity: [1] });
    } catch (e) {
      return false;
    }
    return true;
  },
  finished: () => Boolean(testAnimation({ opacity: [0, 1] }, { duration: 1e-3 }).finished),
  linearEasing: () => {
    try {
      testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e) {
      return false;
    }
    return true;
  }
};
var results = {};
var supports = {};
for (const key in featureTests) {
  supports[key] = () => {
    if (results[key] === void 0)
      results[key] = featureTests[key]();
    return results[key];
  };
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/utils/easing.es.js
var resolution = 0.015;
var generateLinearEasingPoints = (easing2, duration) => {
  let points = "";
  const numPoints = Math.round(duration / resolution);
  for (let i = 0; i < numPoints; i++) {
    points += easing2(progress(0, numPoints - 1, i)) + ", ";
  }
  return points.substring(0, points.length - 2);
};
var convertEasing = (easing2, duration) => {
  if (isFunction(easing2)) {
    return supports.linearEasing() ? `linear(${generateLinearEasingPoints(easing2, duration)})` : defaults.easing;
  } else {
    return isCubicBezier(easing2) ? cubicBezierAsString(easing2) : easing2;
  }
};
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js
function hydrateKeyframes(keyframes, readInitialValue) {
  for (let i = 0; i < keyframes.length; i++) {
    if (keyframes[i] === null) {
      keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
    }
  }
  return keyframes;
}
var keyframesList = (keyframes) => Array.isArray(keyframes) ? keyframes : [keyframes];

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js
function getStyleName(key) {
  if (transformAlias[key])
    key = transformAlias[key];
  return isTransform(key) ? asTransformCssVar(key) : key;
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/style.es.js
var style = {
  get: (element, name) => {
    name = getStyleName(name);
    let value = isCssVar(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
    if (!value && value !== 0) {
      const definition = transformDefinitions.get(name);
      if (definition)
        value = definition.initialValue;
    }
    return value;
  },
  set: (element, name, value) => {
    name = getStyleName(name);
    if (isCssVar(name)) {
      element.style.setProperty(name, value);
    } else {
      element.style[name] = value;
    }
  }
};

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js
function stopAnimation(animation, needsCommit = true) {
  if (!animation || animation.playState === "finished")
    return;
  try {
    if (animation.stop) {
      animation.stop();
    } else {
      needsCommit && animation.commitStyles();
      animation.cancel();
    }
  } catch (e) {
  }
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js
function getUnitConverter(keyframes, definition) {
  var _a;
  let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || noopReturn;
  const finalKeyframe = keyframes[keyframes.length - 1];
  if (isString(finalKeyframe)) {
    const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
    if (unit)
      toUnit = (value) => value + unit;
  }
  return toUnit;
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/animate-style.es.js
function getDevToolsRecord() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
  const record = getDevToolsRecord();
  const isRecording = options.record !== false && record;
  let animation;
  let { duration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, easing: easing2 = defaults.easing, persist = false, direction, offset, allowWebkitAcceleration = false, autoplay = true } = options;
  const data2 = getAnimationData(element);
  const valueIsTransform = isTransform(key);
  let canAnimateNatively = supports.waapi();
  valueIsTransform && addTransformToElement(element, key);
  const name = getStyleName(key);
  const motionValue = getMotionValue(data2.values, name);
  const definition = transformDefinitions.get(name);
  stopAnimation(motionValue.animation, !(isEasingGenerator(easing2) && motionValue.generator) && options.record !== false);
  return () => {
    const readInitialValue = () => {
      var _a, _b;
      return (_b = (_a = style.get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
    };
    let keyframes = hydrateKeyframes(keyframesList(keyframesDefinition), readInitialValue);
    const toUnit = getUnitConverter(keyframes, definition);
    if (isEasingGenerator(easing2)) {
      const custom = easing2.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
      easing2 = custom.easing;
      keyframes = custom.keyframes || keyframes;
      duration = custom.duration || duration;
    }
    if (isCssVar(name)) {
      if (supports.cssRegisterProperty()) {
        registerCssVariable(name);
      } else {
        canAnimateNatively = false;
      }
    }
    if (valueIsTransform && !supports.linearEasing() && (isFunction(easing2) || isEasingList(easing2) && easing2.some(isFunction))) {
      canAnimateNatively = false;
    }
    if (canAnimateNatively) {
      if (definition) {
        keyframes = keyframes.map((value) => isNumber(value) ? definition.toDefaultUnit(value) : value);
      }
      if (keyframes.length === 1 && (!supports.partialKeyframes() || isRecording)) {
        keyframes.unshift(readInitialValue());
      }
      const animationOptions = {
        delay: time.ms(delay),
        duration: time.ms(duration),
        endDelay: time.ms(endDelay),
        easing: !isEasingList(easing2) ? convertEasing(easing2, duration) : void 0,
        direction,
        iterations: repeat + 1,
        fill: "both"
      };
      animation = element.animate({
        [name]: keyframes,
        offset,
        easing: isEasingList(easing2) ? easing2.map((thisEasing) => convertEasing(thisEasing, duration)) : void 0
      }, animationOptions);
      if (!animation.finished) {
        animation.finished = new Promise((resolve, reject) => {
          animation.onfinish = resolve;
          animation.oncancel = reject;
        });
      }
      const target = keyframes[keyframes.length - 1];
      animation.finished.then(() => {
        if (persist)
          return;
        style.set(element, name, target);
        animation.cancel();
      }).catch(noop);
      if (!allowWebkitAcceleration)
        animation.playbackRate = 1.000001;
    } else if (AnimationPolyfill && valueIsTransform) {
      keyframes = keyframes.map((value) => typeof value === "string" ? parseFloat(value) : value);
      if (keyframes.length === 1) {
        keyframes.unshift(parseFloat(readInitialValue()));
      }
      animation = new AnimationPolyfill((latest) => {
        style.set(element, name, toUnit ? toUnit(latest) : latest);
      }, keyframes, Object.assign(Object.assign({}, options), {
        duration,
        easing: easing2
      }));
    } else {
      const target = keyframes[keyframes.length - 1];
      style.set(element, name, definition && isNumber(target) ? definition.toDefaultUnit(target) : target);
    }
    if (isRecording) {
      record(element, key, keyframes, {
        duration,
        delay,
        easing: easing2,
        repeat,
        offset
      }, "motion-one");
    }
    motionValue.setAnimation(animation);
    if (animation && !autoplay)
      animation.pause();
    return animation;
  };
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/utils/options.es.js
var getOptions = (options, key) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options)
);

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/utils/resolve-elements.es.js
function resolveElements(elements, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = document.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/utils/controls.es.js
var createAnimation = (factory) => factory();
var withControls = (animationFactory, options, duration = defaults.duration) => {
  return new Proxy({
    animations: animationFactory.map(createAnimation).filter(Boolean),
    duration,
    options
  }, controls);
};
var getActiveAnimation = (state) => state.animations[0];
var controls = {
  get: (target, key) => {
    const activeAnimation = getActiveAnimation(target);
    switch (key) {
      case "duration":
        return target.duration;
      case "currentTime":
        return time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
      case "playbackRate":
      case "playState":
        return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
      case "finished":
        if (!target.finished) {
          target.finished = Promise.all(target.animations.map(selectFinished)).catch(noop);
        }
        return target.finished;
      case "stop":
        return () => {
          target.animations.forEach((animation) => stopAnimation(animation));
        };
      case "forEachNative":
        return (callback) => {
          target.animations.forEach((animation) => callback(animation, target));
        };
      default:
        return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? void 0 : () => target.animations.forEach((animation) => animation[key]());
    }
  },
  set: (target, key, value) => {
    switch (key) {
      case "currentTime":
        value = time.ms(value);
      // Fall-through
      case "playbackRate":
        for (let i = 0; i < target.animations.length; i++) {
          target.animations[i][key] = value;
        }
        return true;
    }
    return false;
  }
};
var selectFinished = (animation) => animation.finished;

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/utils/stagger.es.js
function stagger(duration = 0.1, { start = 0, from = 0, easing: easing2 } = {}) {
  return (i, total) => {
    const fromIndex = isNumber(from) ? from : getFromIndex(from, total);
    const distance = Math.abs(fromIndex - i);
    let delay = duration * distance;
    if (easing2) {
      const maxDelay = total * duration;
      const easingFunction = getEasingFunction(easing2);
      delay = easingFunction(delay / maxDelay) * maxDelay;
    }
    return start + delay;
  };
}
function getFromIndex(from, total) {
  if (from === "first") {
    return 0;
  } else {
    const lastIndex = total - 1;
    return from === "last" ? lastIndex : lastIndex / 2;
  }
}
function resolveOption(option, i, total) {
  return isFunction(option) ? option(i, total) : option;
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/create-animate.es.js
function createAnimate(AnimatePolyfill) {
  return function animate3(elements, keyframes, options = {}) {
    elements = resolveElements(elements);
    const numElements = elements.length;
    invariant(Boolean(numElements), "No valid element provided.");
    invariant(Boolean(keyframes), "No keyframes defined.");
    const animationFactories = [];
    for (let i = 0; i < numElements; i++) {
      const element = elements[i];
      for (const key in keyframes) {
        const valueOptions = getOptions(options, key);
        valueOptions.delay = resolveOption(valueOptions.delay, i, numElements);
        const animation = animateStyle(element, key, keyframes[key], valueOptions, AnimatePolyfill);
        animationFactories.push(animation);
      }
    }
    return withControls(
      animationFactories,
      options,
      /**
       * TODO:
       * If easing is set to spring or glide, duration will be dynamically
       * generated. Ideally we would dynamically generate this from
       * animation.effect.getComputedTiming().duration but this isn't
       * supported in iOS13 or our number polyfill. Perhaps it's possible
       * to Proxy animations returned from animateStyle that has duration
       * as a getter.
       */
      options.duration
    );
  };
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/animate/index.es.js
var animate = createAnimate(Animation);

// node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/timeline/utils/calc-time.es.js
function calcNextTime(current, next, prev, labels) {
  var _a;
  if (isNumber(next)) {
    return next;
  } else if (next.startsWith("-") || next.startsWith("+")) {
    return Math.max(0, current + parseFloat(next));
  } else if (next === "<") {
    return prev;
  } else {
    return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
  }
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/timeline/utils/edit.es.js
function eraseKeyframes(sequence, startTime, endTime) {
  for (let i = 0; i < sequence.length; i++) {
    const keyframe = sequence[i];
    if (keyframe.at > startTime && keyframe.at < endTime) {
      removeItem(sequence, keyframe);
      i--;
    }
  }
}
function addKeyframes(sequence, keyframes, easing2, offset, startTime, endTime) {
  eraseKeyframes(sequence, startTime, endTime);
  for (let i = 0; i < keyframes.length; i++) {
    sequence.push({
      value: keyframes[i],
      at: mix(startTime, endTime, offset[i]),
      easing: getEasingForSegment(easing2, i)
    });
  }
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/timeline/utils/sort.es.js
function compareByTime(a, b) {
  if (a.at === b.at) {
    return a.value === null ? 1 : -1;
  } else {
    return a.at - b.at;
  }
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/timeline/index.es.js
function timeline(definition, options = {}) {
  var _a;
  const animationDefinitions = createAnimationsFromTimeline(definition, options);
  const animationFactories = animationDefinitions.map((definition2) => animateStyle(...definition2, Animation)).filter(Boolean);
  return withControls(
    animationFactories,
    options,
    // Get the duration from the first animation definition
    (_a = animationDefinitions[0]) === null || _a === void 0 ? void 0 : _a[3].duration
  );
}
function createAnimationsFromTimeline(definition, _a = {}) {
  var { defaultOptions = {} } = _a, timelineOptions = __rest(_a, ["defaultOptions"]);
  const animationDefinitions = [];
  const elementSequences = /* @__PURE__ */ new Map();
  const elementCache = {};
  const timeLabels = /* @__PURE__ */ new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  for (let i = 0; i < definition.length; i++) {
    const segment = definition[i];
    if (isString(segment)) {
      timeLabels.set(segment, currentTime);
      continue;
    } else if (!Array.isArray(segment)) {
      timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
      continue;
    }
    const [elementDefinition, keyframes, options = {}] = segment;
    if (options.at !== void 0) {
      currentTime = calcNextTime(currentTime, options.at, prevTime, timeLabels);
    }
    let maxDuration2 = 0;
    const elements = resolveElements(elementDefinition, elementCache);
    const numElements = elements.length;
    for (let elementIndex = 0; elementIndex < numElements; elementIndex++) {
      const element = elements[elementIndex];
      const elementSequence = getElementSequence(element, elementSequences);
      for (const key in keyframes) {
        const valueSequence = getValueSequence(key, elementSequence);
        let valueKeyframes = keyframesList(keyframes[key]);
        const valueOptions = getOptions(options, key);
        let { duration = defaultOptions.duration || defaults.duration, easing: easing2 = defaultOptions.easing || defaults.easing } = valueOptions;
        if (isEasingGenerator(easing2)) {
          invariant(key === "opacity" || valueKeyframes.length > 1, "spring must be provided 2 keyframes within timeline()");
          const custom = easing2.createAnimation(valueKeyframes, key !== "opacity", () => 0, key);
          easing2 = custom.easing;
          valueKeyframes = custom.keyframes || valueKeyframes;
          duration = custom.duration || duration;
        }
        const delay = resolveOption(options.delay, elementIndex, numElements) || 0;
        const startTime = currentTime + delay;
        const targetTime = startTime + duration;
        let { offset = defaultOffset(valueKeyframes.length) } = valueOptions;
        if (offset.length === 1 && offset[0] === 0) {
          offset[1] = 1;
        }
        const remainder = offset.length - valueKeyframes.length;
        remainder > 0 && fillOffset(offset, remainder);
        valueKeyframes.length === 1 && valueKeyframes.unshift(null);
        addKeyframes(valueSequence, valueKeyframes, easing2, offset, startTime, targetTime);
        maxDuration2 = Math.max(delay + duration, maxDuration2);
        totalDuration = Math.max(targetTime, totalDuration);
      }
    }
    prevTime = currentTime;
    currentTime += maxDuration2;
  }
  elementSequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      valueSequence.sort(compareByTime);
      const keyframes = [];
      const valueOffset = [];
      const valueEasing = [];
      for (let i = 0; i < valueSequence.length; i++) {
        const { at, value, easing: easing2 } = valueSequence[i];
        keyframes.push(value);
        valueOffset.push(progress(0, totalDuration, at));
        valueEasing.push(easing2 || defaults.easing);
      }
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes.unshift(keyframes[0]);
        valueEasing.unshift("linear");
      }
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes.push(null);
      }
      animationDefinitions.push([
        element,
        key,
        keyframes,
        Object.assign(Object.assign(Object.assign({}, defaultOptions), { duration: totalDuration, easing: valueEasing, offset: valueOffset }), timelineOptions)
      ]);
    }
  });
  return animationDefinitions;
}
function getElementSequence(element, sequences) {
  !sequences.has(element) && sequences.set(element, {});
  return sequences.get(element);
}
function getValueSequence(name, sequences) {
  if (!sequences[name])
    sequences[name] = [];
  return sequences[name];
}

// node_modules/.pnpm/@motionone+generators@10.18.0/node_modules/@motionone/generators/dist/utils/velocity.es.js
var sampleT = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - sampleT, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

// node_modules/.pnpm/@motionone+generators@10.18.0/node_modules/@motionone/generators/dist/spring/defaults.es.js
var defaults2 = {
  stiffness: 100,
  damping: 10,
  mass: 1
};

// node_modules/.pnpm/@motionone+generators@10.18.0/node_modules/@motionone/generators/dist/spring/utils.es.js
var calcDampingRatio = (stiffness = defaults2.stiffness, damping = defaults2.damping, mass = defaults2.mass) => damping / (2 * Math.sqrt(stiffness * mass));

// node_modules/.pnpm/@motionone+generators@10.18.0/node_modules/@motionone/generators/dist/utils/has-reached-target.es.js
function hasReachedTarget(origin, target, current) {
  return origin < target && current >= target || origin > target && current <= target;
}

// node_modules/.pnpm/@motionone+generators@10.18.0/node_modules/@motionone/generators/dist/spring/index.es.js
var spring = ({ stiffness = defaults2.stiffness, damping = defaults2.damping, mass = defaults2.mass, from = 0, to = 1, velocity = 0, restSpeed, restDistance } = {}) => {
  velocity = velocity ? time.s(velocity) : 0;
  const state = {
    done: false,
    hasReachedTarget: false,
    current: from,
    target: to
  };
  const initialDelta = to - from;
  const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
  const dampingRatio = calcDampingRatio(stiffness, damping, mass);
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
  restDistance || (restDistance = isGranularScale ? 5e-3 : 0.5);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = undampedAngularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
    resolveSpring = (t) => to - Math.exp(-dampingRatio * undampedAngularFreq * t) * ((-velocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
  } else {
    resolveSpring = (t) => {
      return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (-velocity + undampedAngularFreq * initialDelta) * t);
    };
  }
  return (t) => {
    state.current = resolveSpring(t);
    const currentVelocity = t === 0 ? velocity : calcGeneratorVelocity(resolveSpring, t, state.current);
    const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
    const isBelowDisplacementThreshold = Math.abs(to - state.current) <= restDistance;
    state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
    state.hasReachedTarget = hasReachedTarget(from, to, state.current);
    return state;
  };
};

// node_modules/.pnpm/@motionone+generators@10.18.0/node_modules/@motionone/generators/dist/glide/index.es.js
var glide = ({ from = 0, velocity = 0, power = 0.8, decay = 0.325, bounceDamping, bounceStiffness, changeTarget, min, max, restDistance = 0.5, restSpeed }) => {
  decay = time.ms(decay);
  const state = {
    hasReachedTarget: false,
    done: false,
    current: from,
    target: from
  };
  const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
  const nearestBoundary = (v) => {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = changeTarget === void 0 ? ideal : changeTarget(ideal);
  state.target = target;
  if (target !== ideal)
    amplitude = target - from;
  const calcDelta = (t) => -amplitude * Math.exp(-t / decay);
  const calcLatest = (t) => target + calcDelta(t);
  const applyFriction = (t) => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDistance;
    state.current = state.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t) => {
    if (!isOutOfBounds(state.current))
      return;
    timeReachedBoundary = t;
    spring$1 = spring({
      from: state.current,
      to: nearestBoundary(state.current),
      velocity: calcGeneratorVelocity(calcLatest, t, state.current),
      // TODO: This should be passing * 1000
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDistance,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return (t) => {
    let hasUpdatedFrame = false;
    if (!spring$1 && timeReachedBoundary === void 0) {
      hasUpdatedFrame = true;
      applyFriction(t);
      checkCatchBoundary(t);
    }
    if (timeReachedBoundary !== void 0 && t > timeReachedBoundary) {
      state.hasReachedTarget = true;
      return spring$1(t - timeReachedBoundary);
    } else {
      state.hasReachedTarget = false;
      !hasUpdatedFrame && applyFriction(t);
      return state;
    }
  };
};

// node_modules/.pnpm/@motionone+generators@10.18.0/node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.es.js
var timeStep = 10;
var maxDuration = 1e4;
function pregenerateKeyframes(generator, toUnit = noopReturn) {
  let overshootDuration = void 0;
  let timestamp = timeStep;
  let state = generator(0);
  const keyframes = [toUnit(state.current)];
  while (!state.done && timestamp < maxDuration) {
    state = generator(timestamp);
    keyframes.push(toUnit(state.done ? state.target : state.current));
    if (overshootDuration === void 0 && state.hasReachedTarget) {
      overshootDuration = timestamp;
    }
    timestamp += timeStep;
  }
  const duration = timestamp - timeStep;
  if (keyframes.length === 1)
    keyframes.push(state.current);
  return {
    keyframes,
    duration: duration / 1e3,
    overshootDuration: (overshootDuration !== null && overshootDuration !== void 0 ? overshootDuration : duration) / 1e3
  };
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js
function canGenerate(value) {
  return isNumber(value) && !isNaN(value);
}
function getAsNumber(value) {
  return isString(value) ? parseFloat(value) : value;
}
function createGeneratorEasing(createGenerator) {
  const keyframesCache = /* @__PURE__ */ new WeakMap();
  return (options = {}) => {
    const generatorCache = /* @__PURE__ */ new Map();
    const getGenerator = (from = 0, to = 100, velocity = 0, isScale = false) => {
      const key = `${from}-${to}-${velocity}-${isScale}`;
      if (!generatorCache.has(key)) {
        generatorCache.set(key, createGenerator(Object.assign({
          from,
          to,
          velocity
        }, options)));
      }
      return generatorCache.get(key);
    };
    const getKeyframes = (generator, toUnit) => {
      if (!keyframesCache.has(generator)) {
        keyframesCache.set(generator, pregenerateKeyframes(generator, toUnit));
      }
      return keyframesCache.get(generator);
    };
    return {
      createAnimation: (keyframes, shouldGenerate = true, getOrigin, name, motionValue) => {
        let settings;
        let origin;
        let target;
        let velocity = 0;
        let toUnit = noopReturn;
        const numKeyframes = keyframes.length;
        if (shouldGenerate) {
          toUnit = getUnitConverter(keyframes, name ? transformDefinitions.get(getStyleName(name)) : void 0);
          const targetDefinition = keyframes[numKeyframes - 1];
          target = getAsNumber(targetDefinition);
          if (numKeyframes > 1 && keyframes[0] !== null) {
            origin = getAsNumber(keyframes[0]);
          } else {
            const prevGenerator = motionValue === null || motionValue === void 0 ? void 0 : motionValue.generator;
            if (prevGenerator) {
              const { animation, generatorStartTime } = motionValue;
              const startTime = (animation === null || animation === void 0 ? void 0 : animation.startTime) || generatorStartTime || 0;
              const currentTime = (animation === null || animation === void 0 ? void 0 : animation.currentTime) || performance.now() - startTime;
              const prevGeneratorCurrent = prevGenerator(currentTime).current;
              origin = prevGeneratorCurrent;
              velocity = calcGeneratorVelocity((t) => prevGenerator(t).current, currentTime, prevGeneratorCurrent);
            } else if (getOrigin) {
              origin = getAsNumber(getOrigin());
            }
          }
        }
        if (canGenerate(origin) && canGenerate(target)) {
          const generator = getGenerator(origin, target, velocity, name === null || name === void 0 ? void 0 : name.includes("scale"));
          settings = Object.assign(Object.assign({}, getKeyframes(generator, toUnit)), { easing: "linear" });
          if (motionValue) {
            motionValue.generator = generator;
            motionValue.generatorStartTime = performance.now();
          }
        }
        if (!settings) {
          const keyframesMetadata = getKeyframes(getGenerator(0, 100));
          settings = {
            easing: "ease",
            duration: keyframesMetadata.overshootDuration
          };
        }
        return settings;
      }
    };
  };
}

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/easing/spring/index.es.js
var spring2 = createGeneratorEasing(spring);

// node_modules/.pnpm/@motionone+dom@10.18.0/node_modules/@motionone/dom/dist/easing/glide/index.es.js
var glide2 = createGeneratorEasing(glide);

// node_modules/.pnpm/motion@10.18.0/node_modules/motion/dist/animate.es.js
function animateProgress(target, options = {}) {
  return withControls([
    () => {
      const animation = new Animation(target, [0, 1], options);
      animation.finished.catch(() => {
      });
      return animation;
    }
  ], options, options.duration);
}
function animate2(target, keyframesOrOptions, options) {
  const factory = isFunction(target) ? animateProgress : animate;
  return factory(target, keyframesOrOptions, options);
}

// node_modules/.pnpm/@arwes+animated@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/animated/build/esm/animateDraw/animateDraw.js
var animateDraw = (props) => {
  const { element, duration, delay, isEntering = true } = props;
  if (!(element instanceof SVGPathElement)) {
    throw new Error("ARWES animateDraw() requires a SVGPathElement.");
  }
  const length = element.getTotalLength();
  const easingCustom = typeof props.easing === "string" ? easing[props.easing] : props.easing;
  element.style.strokeDashoffset = String(isEntering ? length : 0);
  element.style.strokeDasharray = String(length);
  const animation = animate2(element, { strokeDashoffset: isEntering ? [length, 0] : [0, length] }, { duration, delay, easing: easingCustom || (isEntering ? easing.outExpo : easing.outSine) });
  if (isEntering) {
    void animation.finished.then(() => {
      element.style.strokeDashoffset = "";
      element.style.strokeDasharray = "";
    });
  }
  return animation;
};

// node_modules/.pnpm/@arwes+animated@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/animated/build/esm/transitions/transitions.js
var transition = (prop, from, to, back, easing2) => ({
  transitions: {
    entering: { [prop]: [from, to], easing: easing2 },
    exiting: { [prop]: [to, back ?? from], easing: easing2 }
  }
});
var fadeTransition = Object.freeze({
  transitions: {
    entering: { opacity: [0, 1] },
    exiting: { opacity: [1, 0] }
  }
});
var fade = () => fadeTransition;
var flickerTransition = Object.freeze({
  transitions: {
    entering: { opacity: [0, 1, 0.5, 1], easing: easing.outSine },
    exiting: { opacity: [1, 0, 0.5, 0], easing: easing.outSine }
  }
});
var flicker = () => flickerTransition;
var draw = (durationCustom, easing2) => ({
  transitions: {
    entering: ({ element, duration }) => animateDraw({
      isEntering: true,
      element,
      duration: durationCustom ?? duration,
      easing: easing2
    }),
    exiting: ({ element, duration }) => animateDraw({
      isEntering: false,
      element,
      duration: durationCustom ?? duration,
      easing: easing2
    })
  }
});

// node_modules/.pnpm/@arwes+animated@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/animated/build/esm/createAnimation/createAnimation.js
var createAnimation2 = (props) => {
  if (props.duration !== void 0 && props.duration < 0) {
    throw new Error("Arwes createAnimation() does not support negative durations.");
  }
  const { duration: durationProvided, easing: easingName = "outSine", direction = "normal", repeat = 0, onUpdate, onFinish, onCancel } = props;
  const ease = typeof easingName === "function" ? easingName : easing[easingName];
  const duration = durationProvided * 1e3;
  let currentAnimationFrame = null;
  let start;
  let slapsed = 0;
  let done;
  let repetitions = 0;
  const promise = new Promise((resolve) => {
    done = resolve;
  });
  const then = (callback) => promise.then(callback);
  const nextAnimation = (timestamp) => {
    if (!start) {
      start = timestamp;
    }
    slapsed = Math.max(timestamp - start, 0);
    const progress2 = ease(duration === 0 ? 1 : Math.min(1, Math.max(0, slapsed / duration)));
    onUpdate(direction === "normal" ? progress2 : 1 - progress2);
    let continueAnimation = duration > 0 && slapsed < duration;
    if (!continueAnimation && repeat > 0 && repetitions < repeat) {
      start = timestamp;
      continueAnimation = true;
      repetitions++;
    }
    if (continueAnimation) {
      currentAnimationFrame = window.requestAnimationFrame(nextAnimation);
    } else {
      currentAnimationFrame = null;
      onFinish?.();
      done();
    }
  };
  const isPending = () => {
    return currentAnimationFrame !== null;
  };
  const cancel = () => {
    if (currentAnimationFrame !== null) {
      window.cancelAnimationFrame(currentAnimationFrame);
      currentAnimationFrame = null;
      onCancel?.();
      done();
    }
  };
  const complete = () => {
    if (currentAnimationFrame !== null) {
      window.cancelAnimationFrame(currentAnimationFrame);
      currentAnimationFrame = null;
      onUpdate(ease(direction === "reverse" ? 0 : 1));
      onFinish?.();
      done();
    }
  };
  currentAnimationFrame = window.requestAnimationFrame(nextAnimation);
  return Object.freeze({ then, isPending, cancel, complete });
};

// node_modules/.pnpm/@arwes+tools@1.0.0-next.25020502/node_modules/@arwes/tools/build/esm/isBrowser/isBrowser.js
var isBrowser = () => typeof window !== "undefined";

// node_modules/.pnpm/@arwes+tools@1.0.0-next.25020502/node_modules/@arwes/tools/build/esm/cx/cx.js
var cx = (...classNames) => {
  return classNames.filter(Boolean).join(" ");
};

// node_modules/.pnpm/@arwes+tools@1.0.0-next.25020502/node_modules/@arwes/tools/build/esm/createTOScheduler/createTOScheduler.js
var ID_DEFAULT = "";
function createTOScheduler() {
  const ledger = /* @__PURE__ */ new Map();
  const isPending = (id = ID_DEFAULT) => {
    return ledger.has(id);
  };
  const stop = (id = ID_DEFAULT) => {
    const cancelSchedule = ledger.get(id);
    if (cancelSchedule) {
      cancelSchedule();
    }
    ledger.delete(id);
  };
  const stopAll = () => {
    Array.from(ledger.keys()).forEach(stop);
  };
  const start = (a, b, c) => {
    const id = c ? a : ID_DEFAULT;
    const delay = (c ? b : a) * 1e3;
    const callback = c || b;
    stop(id);
    const timeoutId = setTimeout(() => {
      ledger.delete(id);
      callback();
    }, delay);
    ledger.set(id, () => {
      clearTimeout(timeoutId);
    });
  };
  return Object.freeze({ isPending, stop, stopAll, start });
}

// node_modules/.pnpm/@arwes+tools@1.0.0-next.25020502/node_modules/@arwes/tools/build/esm/randomizeList/randomizeList.js
var randomizeList = (providedList) => {
  const list = providedList.slice(0);
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

// node_modules/.pnpm/@arwes+tools@1.0.0-next.25020502/node_modules/@arwes/tools/build/esm/filterProps/filterProps.js
var filterProps = (props) => {
  const propsNew = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    if (props[key] !== void 0) {
      propsNew[key] = props[key];
    }
  }
  return propsNew;
};

// node_modules/.pnpm/@arwes+animated@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/animated/build/esm/createAnimatedElement/createAnimatedElement.js
var animatedPresets = {
  fade,
  flicker,
  draw
};
var createAnimatedElement = (props) => {
  const { element, animator } = props;
  const getSettings = () => ({
    hideOnExited: true,
    renderInitials: true,
    ...filterProps(props.settingsRef.current)
  });
  const animations = /* @__PURE__ */ new Set();
  const settingsInitial = getSettings();
  if (settingsInitial.renderInitials) {
    const { animated } = settingsInitial;
    const animatedListReceived = Array.isArray(animated) ? animated : [animated];
    const animatedList = animatedListReceived.map((item) => typeof item === "string" || Array.isArray(item) ? void 0 : item).filter(Boolean);
    const initialAttributes = animatedList.map((item) => item ? item.initialAttributes : null).reduce((total, item) => ({ ...total, ...item }), {});
    Object.keys(initialAttributes).forEach((attribute) => {
      element.setAttribute(attribute, initialAttributes[attribute]);
    });
    const dynamicStyles = animatedList.map((item) => item ? item.initialStyle : null).reduce((total, item) => ({ ...total, ...item }), {});
    applyAnimatedCSSProps(element, dynamicStyles);
  }
  const unsubscribe = animator.subscribe((node) => {
    const { animated, hideOnExited, hideOnEntered, onTransition } = getSettings();
    element.style.visibility = hideOnExited && node.state === "exited" || hideOnEntered && node.state === "entered" ? "hidden" : "";
    const nodeSettings = node.settings;
    const nodeDuration = nodeSettings.duration;
    const transitionDuration = node.state === "entering" || node.state === "entered" ? nodeDuration.enter : nodeDuration.exit;
    const $ = (query) => Array.from(element.querySelectorAll(query));
    const animatedListReceived = Array.isArray(animated) ? animated : [animated];
    const animatedList = animatedListReceived.filter(Boolean);
    animatedList.filter(Boolean).map((item) => {
      if (typeof item === "string") {
        const preset = animatedPresets[item];
        if (!preset) {
          throw new Error(`ARWES createAnimatedElement() unexpected animated preset "${item}".`);
        }
        return preset();
      }
      if (Array.isArray(item)) {
        return transition(...item);
      }
      return item;
    }).map((settingsItem) => settingsItem ? settingsItem.transitions?.[node.state] : null).filter(Boolean).forEach((transition2) => {
      if (typeof transition2 === "function") {
        const animation = transition2({
          element,
          $,
          duration: transitionDuration,
          nodeDuration,
          easing,
          animate: animate2,
          timeline,
          stagger,
          spring: spring2,
          glide: glide2
        });
        if (animation) {
          animations.add(animation);
          if (animation.then) {
            void animation.then(() => {
              animations.delete(animation);
            });
          } else if (animation.finished) {
            void animation.finished.then(() => {
              animations.delete(animation);
            });
          }
        }
      } else if (transition2) {
        const { duration: durationInitial, delay, easing: ease, repeat, direction, options, ...definition } = transition2;
        const duration = durationInitial || transitionDuration;
        if (duration <= 0) {
          throw new Error("ARWES createAnimatedElement() animation duration must be greater than 0.");
        }
        try {
          const animation = animate2(element, definition, {
            duration,
            delay,
            easing: typeof ease === "string" ? easing[ease] ?? ease : ease,
            repeat,
            direction,
            ...options
          });
          animations.add(animation);
          void animation.finished.then(() => {
            animations.delete(animation);
          });
        } catch (err) {
          throw new Error(`ARWES createAnimatedElement() animation error:
${String(err)}`);
        }
      }
    });
    onTransition?.(element, node);
  });
  const cancel = () => {
    unsubscribe();
    animations.forEach((animation) => animation.cancel());
    animations.clear();
  };
  return Object.freeze({ settingsRef: props.settingsRef, cancel });
};

// node_modules/.pnpm/@arwes+animated@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/animated/build/esm/createAnimatedXElement/createAnimatedXElement.js
var createAnimatedXElement = (props) => {
  const { element } = props;
  const getSettings = () => ({
    hideOnStates: [],
    renderInitials: true,
    ...filterProps(props.settingsRef.current)
  });
  let stateLastExecuted = props.settingsRef.current.state;
  const animations = /* @__PURE__ */ new Set();
  const settingsInitial = getSettings();
  if (settingsInitial.renderInitials) {
    const { animated } = settingsInitial;
    const animatedListReceived = Array.isArray(animated) ? animated : [animated];
    const animatedList = animatedListReceived.filter(Boolean);
    const initialAttributes = animatedList.map((item) => item?.initialAttributes).reduce((total, item) => ({ ...total, ...item }), {});
    Object.keys(initialAttributes).forEach((attribute) => {
      element.setAttribute(attribute, initialAttributes[attribute]);
    });
    const dynamicStyles = animatedList.map((item) => item?.initialStyle).reduce((total, item) => ({ ...total, ...item }), {});
    applyAnimatedCSSProps(element, dynamicStyles);
  }
  const runAnimations = () => {
    const { state, animated, hideOnStates } = getSettings();
    stateLastExecuted = state;
    const animatedListReceived = Array.isArray(animated) ? animated : [animated];
    const animatedList = animatedListReceived.filter(Boolean);
    element.style.visibility = hideOnStates?.includes(state) ? "hidden" : "";
    const $ = (query) => Array.from(element.querySelectorAll(query));
    animatedList.map((settingsItem) => settingsItem.transitions?.[state]).filter(Boolean).forEach((transition2) => {
      if (typeof transition2 === "function") {
        const animation = transition2({
          element,
          $,
          easing,
          animate: animate2,
          timeline,
          stagger,
          spring: spring2,
          glide: glide2
        });
        if (animation) {
          animations.add(animation);
          if (animation.then) {
            void animation.then(() => {
              animations.delete(animation);
            });
          } else if (animation.finished) {
            void animation.finished.then(() => {
              animations.delete(animation);
            });
          }
        }
      } else {
        const { duration, delay, easing: ease, repeat, direction, options, ...definition } = transition2;
        if (Number.isFinite(duration) && duration <= 0) {
          throw new Error("ARWES createAnimatedXElement() animation duration must be greater than 0.");
        }
        try {
          const animation = animate2(element, definition, {
            duration,
            delay,
            easing: typeof ease === "string" ? easing[ease] : ease,
            repeat,
            direction,
            ...options
          });
          animations.add(animation);
          void animation.finished.then(() => {
            animations.delete(animation);
          });
        } catch (err) {
          throw new Error(`ARWES createAnimatedXElement() animation error:
${String(err)}`);
        }
      }
    });
  };
  runAnimations();
  const refresh = () => {
    if (stateLastExecuted !== props.settingsRef.current.state) {
      runAnimations();
    }
  };
  const cancel = () => {
    animations.forEach((animation) => animation.cancel());
    animations.clear();
  };
  return Object.freeze({ refresh, cancel });
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/internal/renderFrameElements.js
var renderFrameElements = (parent, elements, animator, animations) => {
  const children = Array.from(parent.children);
  for (let index = 0; index < elements.length; index++) {
    const settings = elements[index];
    const element = children[index] ?? document.createElementNS("http://www.w3.org/2000/svg", settings.type ?? "path");
    const { name, id, className, style: style3 } = settings;
    if (name) {
      element.dataset.name = name;
    }
    if (id) {
      element.id = id;
    }
    if (className) {
      element.classList.value = className;
    }
    if (style3) {
      applyAnimatedCSSProps(element, style3);
    }
    if (settings.type === "svg") {
      element.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    }
    switch (settings.type) {
      case "svg":
      case "g":
      case "defs":
      case "clipPath":
      case "mask": {
        if (typeof settings.elements === "string") {
          element.innerHTML = settings.elements;
        } else {
          renderFrameElements(element, settings.elements, animator, animations);
        }
        break;
      }
    }
    if (animator && settings.animated) {
      const elementAnimations = animations.get(element) ?? /* @__PURE__ */ new Map();
      const currentAnimatedElement = elementAnimations.get("__animator__");
      if (currentAnimatedElement) {
        currentAnimatedElement.settingsRef.current = {
          ...settings.animatedSettings,
          animated: settings.animated
        };
      } else {
        const animatedElement = createAnimatedElement({
          element,
          animator,
          settingsRef: {
            current: {
              ...settings.animatedSettings,
              animated: settings.animated
            }
          }
        });
        elementAnimations.set("__animator__", animatedElement);
      }
      animations.set(element, elementAnimations);
    }
    if (!element.parentNode) {
      parent.appendChild(element);
    }
  }
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/internal/formatFrameDimension.js
var formatFrameDimension = (size, dimension) => {
  if (typeof dimension === "number") {
    return String(dimension);
  }
  if (/[^\d.\-+*/%\s()]/.test(dimension)) {
    throw new Error("ARWES frames does not support formulas with text different from math expressions.");
  }
  const formula = String(dimension).replace(/(\d{1,}\.)?\d{1,}%/g, (percentage) => String(size * (Number(percentage.replace("%", "")) / 100)));
  return String(eval(formula));
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/internal/formatFramePath.js
var formatCommand = (width, height, command) => {
  if (Array.isArray(command)) {
    const [name, ...dimensions] = command;
    if (name === "H" || name === "h") {
      return `${name} ${formatFrameDimension(width, dimensions[0])}`;
    }
    if (name === "V" || name === "v") {
      return `${name} ${formatFrameDimension(height, dimensions[0])}`;
    }
    if (name === "A" || name === "a") {
      const [rx, ry, angle, largeArcFlag, sweepFlag, x, y] = dimensions;
      const values2 = [
        formatFrameDimension(width, rx),
        formatFrameDimension(height, ry),
        angle,
        largeArcFlag,
        sweepFlag,
        formatFrameDimension(width, x),
        formatFrameDimension(height, y)
      ].join(",");
      return name + " " + values2;
    }
    const values = dimensions.map((dimension2, index) => {
      const isEven = index % 2 === 0;
      const size2 = isEven ? width : height;
      return formatFrameDimension(size2, dimension2);
    }).join(",");
    return name + " " + values;
  }
  return command;
};
var formatFramePath = (width, height, path) => {
  return path.map((command) => formatCommand(width, height, command)).join(" ");
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/internal/drawFrameElements.js
var drawFrameElements = (parent, width, height, elementsSettings, contexts) => {
  const children = Array.from(parent.children);
  for (let index = 0; index < elementsSettings.length; index++) {
    const element = children[index];
    const settings = { ...elementsSettings[index] };
    const contextsNames = settings.contexts ? Object.keys(settings.contexts) : [];
    if (!element) {
      throw new Error("ARWES frame elements did not match the original setup on drawing.");
    }
    if (settings.type === void 0 || settings.type === "path") {
      for (const contextName of contextsNames) {
        const state = contexts[contextName];
        const elementState = settings.contexts[contextName][state];
        if (!elementState) {
          continue;
        }
        elementState.path && (settings.path = elementState.path);
      }
      const d = typeof settings.path === "string" ? settings.path : typeof settings.path === "function" ? settings.path({ width, height }) : formatFramePath(width, height, settings.path);
      if (element.getAttribute("d") !== d) {
        element.setAttribute("d", d);
      }
    } else if (settings.type === "rect") {
      for (const contextName of contextsNames) {
        const state = contexts[contextName];
        const elementState = settings.contexts[contextName][state];
        if (!elementState) {
          continue;
        }
        elementState.x !== void 0 && (settings.x = elementState.x);
        elementState.y !== void 0 && (settings.y = elementState.y);
        elementState.width !== void 0 && (settings.width = elementState.width);
        elementState.height !== void 0 && (settings.height = elementState.height);
        elementState.rx !== void 0 && (settings.rx = elementState.rx);
        elementState.ry !== void 0 && (settings.ry = elementState.ry);
      }
      element.setAttribute("x", formatFrameDimension(width, settings.x));
      element.setAttribute("y", formatFrameDimension(height, settings.y));
      element.setAttribute("width", formatFrameDimension(width, settings.width));
      element.setAttribute("height", formatFrameDimension(height, settings.height));
      settings.rx !== void 0 && element.setAttribute("rx", String(settings.rx));
      settings.ry !== void 0 && element.setAttribute("ry", String(settings.ry));
    } else if (settings.type === "ellipse") {
      let cx2 = settings.cx;
      let cy = settings.cy;
      let rx = settings.rx;
      let ry = settings.ry;
      for (const contextName of contextsNames) {
        const state = contexts[contextName];
        const elementState = settings.contexts[contextName][state];
        if (!elementState) {
          continue;
        }
        elementState.cx !== void 0 && (cx2 = elementState.cx);
        elementState.cy !== void 0 && (cy = elementState.cy);
        elementState.rx !== void 0 && (rx = elementState.rx);
        elementState.ry !== void 0 && (ry = elementState.ry);
      }
      cx2 = formatFrameDimension(width, cx2);
      cy = formatFrameDimension(height, cy);
      rx = formatFrameDimension(width, rx);
      ry = formatFrameDimension(height, ry);
      element.setAttribute("cx", cx2);
      element.setAttribute("cy", cy);
      element.setAttribute("rx", rx);
      element.setAttribute("ry", ry);
    } else if (settings.type === "svg") {
      let viewBox = settings.viewBox;
      let x = settings.x;
      let y = settings.y;
      let w = settings.width;
      let h = settings.height;
      for (const contextName of contextsNames) {
        const state = contexts[contextName];
        const elementState = settings.contexts[contextName][state];
        if (!elementState) {
          continue;
        }
        elementState.viewBox !== void 0 && (viewBox = elementState.viewBox);
        elementState.x !== void 0 && (x = elementState.x);
        elementState.y !== void 0 && (y = elementState.y);
        elementState.width !== void 0 && (w = elementState.width);
        elementState.height !== void 0 && (h = elementState.height);
      }
      w = formatFrameDimension(width, w);
      h = formatFrameDimension(height, h);
      x = formatFrameDimension(width, x);
      y = formatFrameDimension(height, y);
      element.setAttribute("viewBox", viewBox);
      element.setAttribute("x", x);
      element.setAttribute("y", y);
      element.setAttribute("width", w);
      element.setAttribute("height", h);
      if (Array.isArray(settings.elements)) {
        drawFrameElements(element, +w, +h, settings.elements, contexts);
      }
    }
    switch (settings.type) {
      case "g":
      case "defs":
      case "clipPath":
      case "mask": {
        if (Array.isArray(settings.elements)) {
          drawFrameElements(element, width, height, settings.elements, contexts);
        }
        break;
      }
    }
    if (settings.draw) {
      settings.draw({ element, width, height });
    }
  }
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/internal/transitionFrameElements.js
var transitionElement = (element, contexts, animations, settings) => {
  if (!settings.contexts) {
    return;
  }
  const contextNames = Object.keys(settings.contexts);
  contextNames.map((name) => settings.contexts[name]).filter(Boolean).map((context) => Object.keys(context).map((stateName) => context[stateName]).map((state) => state?.className)).flat().filter(Boolean).forEach((className) => element.classList.remove(className));
  for (const contextName of contextNames) {
    const context = settings.contexts[contextName];
    const state = context[contexts[contextName]];
    if (!state) {
      continue;
    }
    if (state.className) {
      element.classList.add(state.className);
    }
    if (state.style) {
      applyAnimatedCSSProps(element, state.style);
    }
    if (state.animate) {
      const elementContextAnimations = animations.get(element) ?? /* @__PURE__ */ new Map();
      elementContextAnimations.get(contextName)?.cancel();
      const animation = createAnimatedXElement({
        element,
        settingsRef: {
          current: {
            state: "initial",
            animated: {
              transitions: {
                initial: state.animate
              }
            }
          }
        }
      });
      elementContextAnimations.set(contextName, animation);
    }
  }
};
var transitionFrameElements = (parent, contexts, animations, elementsSettings) => {
  const children = Array.from(parent.children);
  for (let index = 0; index < elementsSettings.length; index++) {
    const element = children[index];
    const settings = elementsSettings[index];
    if (!element) {
      throw new Error("ARWES frame elements did not match the original setup on transition.");
    }
    transitionElement(element, contexts, animations, settings);
    switch (settings.type) {
      case "svg":
      case "g":
      case "defs":
      case "clipPath":
      case "mask": {
        if (Array.isArray(settings.elements)) {
          transitionFrameElements(element, contexts, animations, settings.elements);
        }
        break;
      }
    }
  }
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/createFrame/createFrame.js
var createFrame = (svg, settings) => {
  if (!(svg instanceof SVGSVGElement)) {
    throw new Error("ARWES createFrame requires a <svg> element.");
  }
  const { animator } = settings;
  let width = 0;
  let height = 0;
  let observer;
  const container = settings.container ?? document.createElementNS("http://www.w3.org/2000/svg", "g");
  const contexts = { ...settings.contexts };
  const animations = /* @__PURE__ */ new Map();
  const resize = () => {
    width = Math.floor(svg.clientWidth);
    height = Math.floor(svg.clientHeight);
    if (svg.getAttribute("viewBox") !== `0 0 ${width} ${height}`) {
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    }
  };
  const render = () => {
    renderFrameElements(container, settings.elements, animator, animations);
  };
  const draw2 = () => {
    if (width <= 0 || height <= 0) {
      return;
    }
    drawFrameElements(container, width, height, settings.elements, contexts);
  };
  const transition2 = (context, state) => {
    contexts[context] = state;
    draw2();
    transitionFrameElements(container, contexts, animations, settings.elements);
  };
  const cancel = () => {
    observer.disconnect();
    animations.forEach((context) => context.forEach((animation) => animation.cancel()));
  };
  const remove = () => {
    cancel();
    Array.from(container.children).forEach((child) => child.remove());
  };
  container.dataset.frame = "";
  container.style.setProperty("vector-effect", "non-scaling-stroke");
  resize();
  render();
  draw2();
  if (contexts) {
    const contextNames = Object.keys(contexts);
    for (const contextName of contextNames) {
      transition2(contextName, contexts[contextName]);
    }
  }
  if (!container.parentNode) {
    svg.appendChild(container);
  }
  let isFirstResize = true;
  observer = new ResizeObserver(() => {
    if (isFirstResize) {
      isFirstResize = false;
      return;
    }
    resize();
    draw2();
  });
  observer.observe(svg);
  return Object.freeze({
    get contexts() {
      return Object.freeze({ ...contexts });
    },
    render: () => {
      resize();
      render();
      draw2();
    },
    transition: transition2,
    cancel,
    remove
  });
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/createFrameUnderlineSettings/createFrameUnderlineSettings.js
var defaultProps = {
  styled: true,
  animated: true,
  padding: 0,
  squareSize: 16,
  strokeWidth: 1
};
var createFrameUnderlineSettings = (props) => {
  const { styled, animated, squareSize: ss, strokeWidth: sw, padding: p } = { ...defaultProps, ...props ? filterProps(props) : null };
  const so = sw / 2;
  return {
    elements: [
      {
        name: "bg",
        style: {
          filter: styled ? "var(--arwes-frames-bg-filter)" : void 0,
          fill: styled ? "var(--arwes-frames-bg-color, currentcolor)" : void 0,
          strokeWidth: 0
        },
        animated: animated && ["fade"],
        path: [
          ["M", p, p],
          ["L", p, `100% - ${p}`],
          ["L", `100% - ${ss} - ${p}`, `100% - ${p}`],
          ["L", `100% - ${p}`, `100% - ${ss} - ${p}`],
          ["L", `100% - ${p}`, p]
        ]
      },
      {
        name: "line",
        style: {
          filter: styled ? "var(--arwes-frames-line-filter)" : void 0,
          fill: styled ? "none" : void 0,
          stroke: styled ? "var(--arwes-frames-line-color, currentcolor)" : void 0,
          strokeLinecap: styled ? "round" : void 0,
          strokeLinejoin: styled ? "round" : void 0,
          strokeWidth: String(sw)
        },
        animated: animated && {
          transitions: {
            entering: ({ element, duration }) => animateDraw({ isEntering: true, element, duration }),
            exiting: ({ element, duration }) => animateDraw({ isEntering: false, element, duration })
          }
        },
        path: [
          ["M", so + p, `100% - ${so} - ${p}`],
          ["L", `100% - ${ss} - ${p}`, `100% - ${so} - ${p}`],
          ["L", `100% - ${so} - ${p}`, `100% - ${ss - so} - ${p}`]
        ]
      }
    ]
  };
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/createFrameLinesSettings/createFrameLinesSettings.js
var defaultProps2 = {
  styled: true,
  animated: true,
  padding: 0,
  largeLineWidth: 1,
  smallLineWidth: 1,
  smallLineLength: 16
};
var createFrameLinesSettings = (props) => {
  const { styled, animated, padding: p, largeLineWidth, smallLineWidth, smallLineLength } = { ...defaultProps2, ...props ? filterProps(props) : null };
  const largePolylines = [
    [
      ["M", p, p + largeLineWidth / 2],
      ["H", "50% + 0.1"]
    ],
    [
      ["M", `100% - ${p + largeLineWidth / 2}`, p + largeLineWidth / 2],
      ["H", "50% - 0.1"]
    ],
    [
      ["M", p + largeLineWidth / 2, `100% - ${p + largeLineWidth / 2}`],
      ["H", "50% + 0.1"]
    ],
    [
      ["M", `100% - ${p + largeLineWidth / 2}`, `100% - ${p + largeLineWidth / 2}`],
      ["H", "50% - 0.1"]
    ]
  ];
  const smallPolylines = [
    [
      ["M", p, p + smallLineWidth / 2],
      ["h", smallLineLength]
    ],
    [
      ["M", `100% - ${p}`, p + smallLineWidth / 2],
      ["h", -smallLineLength]
    ],
    [
      ["M", p, `100% - ${p + smallLineWidth / 2}`],
      ["h", smallLineLength]
    ],
    [
      ["M", `100% - ${p}`, `100% - ${p + smallLineWidth / 2}`],
      ["h", -smallLineLength]
    ]
  ];
  return {
    elements: [
      {
        type: "rect",
        name: "bg",
        style: {
          filter: styled ? "var(--arwes-frames-bg-filter)" : void 0,
          fill: styled ? "var(--arwes-frames-bg-color, currentcolor)" : void 0,
          strokeWidth: 0
        },
        animated: animated && ["fade"],
        x: p,
        y: p,
        width: `100% - ${p * 2}`,
        height: `100% - ${p * 2}`
      },
      {
        type: "g",
        style: {
          filter: styled ? "var(--arwes-frames-line-filter)" : void 0,
          fill: styled ? "none" : void 0,
          stroke: styled ? "var(--arwes-frames-line-color, currentcolor)" : void 0,
          strokeWidth: String(largeLineWidth)
        },
        elements: largePolylines.map((polyline) => ({
          name: "line",
          animated: animated && ["draw"],
          path: polyline
        }))
      },
      {
        type: "g",
        style: {
          filter: styled ? "var(--arwes-frames-deco-filter)" : void 0,
          fill: styled ? "none" : void 0,
          stroke: styled ? "var(--arwes-frames-deco-color, currentcolor)" : void 0,
          strokeWidth: String(smallLineWidth)
        },
        animated: animated && {
          transitions: {
            entering: ({ element, duration, animate: animate3 }) => animate3(element, { opacity: [0, 1, 0.5, 1] }, { duration: duration / 2 }),
            exiting: ({ element, duration, animate: animate3 }) => animate3(element, { opacity: [1, 0, 0.5, 0] }, { duration: duration / 2 })
          }
        },
        elements: smallPolylines.map((polyline) => ({ name: "deco", path: polyline }))
      }
    ]
  };
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/createFrameCornersSettings/createFrameCornersSettings.js
var defaultProps3 = {
  styled: true,
  animated: true,
  padding: 0,
  strokeWidth: 1,
  cornerLength: 16
};
var createFrameCornersSettings = (props) => {
  const { styled, animated, padding: p, strokeWidth: cw, cornerLength: cl } = { ...defaultProps3, ...props ? filterProps(props) : null };
  const co = cw / 2;
  const linesPaths = [
    [
      ["M", co + p, co + p],
      ["L", co + p, cl + p]
    ],
    [
      ["M", co + p, co + p],
      ["L", cl + p, co + p]
    ],
    [
      ["M", `100% - ${co} - ${p}`, co + p],
      ["L", `100% - ${cl} - ${p}`, co + p]
    ],
    [
      ["M", `100% - ${co} - ${p}`, co + p],
      ["L", `100% - ${co} - ${p}`, cl + p]
    ],
    [
      ["M", `100% - ${co} - ${p}`, `100% - ${co} - ${p}`],
      ["L", `100% - ${co} - ${p}`, `100% - ${cl} - ${p}`]
    ],
    [
      ["M", `100% - ${co} - ${p}`, `100% - ${co} - ${p}`],
      ["L", `100% - ${cl} - ${p}`, `100% - ${co} - ${p}`]
    ],
    [
      ["M", co + p, `100% - ${co} - ${p}`],
      ["L", cl + p, `100% - ${co} - ${p}`]
    ],
    [
      ["M", co + p, `100% - ${co} - ${p}`],
      ["L", co + p, `100% - ${cl} - ${p}`]
    ]
  ];
  return {
    elements: [
      {
        type: "rect",
        name: "bg",
        style: {
          filter: styled ? "var(--arwes-frames-bg-filter)" : void 0,
          fill: styled ? "var(--arwes-frames-bg-color, currentcolor)" : void 0,
          strokeWidth: 0
        },
        animated: animated && ["fade"],
        x: p + cw,
        y: p + cw,
        width: `100% - ${(p + cw) * 2}`,
        height: `100% - ${(p + cw) * 2}`
      },
      {
        type: "g",
        style: {
          filter: styled ? "var(--arwes-frames-line-filter)" : void 0,
          fill: styled ? "none" : void 0,
          stroke: styled ? "var(--arwes-frames-line-color, currentcolor)" : void 0,
          strokeLinecap: styled ? "round" : void 0,
          strokeLinejoin: styled ? "round" : void 0,
          strokeWidth: String(cw)
        },
        elements: linesPaths.map((path) => ({
          type: "path",
          name: "line",
          animated: animated && {
            transitions: {
              entering: ({ element, duration }) => animateDraw({ isEntering: true, element, duration }),
              exiting: ({ element, duration }) => animateDraw({ isEntering: false, element, duration })
            }
          },
          path
        }))
      }
    ]
  };
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/createFrameOctagonSettings/createFrameOctagonSettings.js
var defaultProps4 = {
  styled: true,
  animated: true,
  padding: 0,
  leftTop: true,
  rightTop: true,
  rightBottom: true,
  leftBottom: true,
  squareSize: 16,
  strokeWidth: 1
};
var createFrameOctagonSettings = (props) => {
  const { styled, animated, padding: p, leftTop, rightTop, rightBottom, leftBottom, squareSize, strokeWidth } = { ...defaultProps4, ...props ? filterProps(props) : null };
  const so = strokeWidth / 2;
  return {
    elements: [
      {
        type: "path",
        name: "bg",
        style: {
          filter: styled ? "var(--arwes-frames-bg-filter)" : void 0,
          fill: styled ? "var(--arwes-frames-bg-color, currentcolor)" : void 0,
          strokeWidth: 0
        },
        animated: animated && ["fade"],
        path: [
          ...leftTop ? [
            ["M", p + so, p + so + squareSize],
            ["l", squareSize, -squareSize]
          ] : [["M", p + so, p + so]],
          ...rightTop ? [
            ["H", `100% - ${p + so + squareSize}`],
            ["l", squareSize, squareSize]
          ] : [["H", `100% - ${p + so}`]],
          ...rightBottom ? [
            ["V", `100% - ${p + so + squareSize}`],
            ["l", -squareSize, squareSize]
          ] : [["V", `100% - ${p + so}`]],
          ...leftBottom ? [
            ["H", p + so + squareSize],
            ["l", -squareSize, -squareSize]
          ] : [["H", p + so]],
          "Z"
        ]
      },
      {
        type: "g",
        style: {
          filter: styled ? "var(--arwes-frames-line-filter)" : void 0,
          fill: styled ? "none" : void 0,
          stroke: styled ? "var(--arwes-frames-line-color, currentcolor)" : void 0,
          strokeLinecap: styled ? "round" : void 0,
          strokeLinejoin: styled ? "round" : void 0,
          strokeWidth: String(strokeWidth)
        },
        elements: [
          {
            type: "path",
            name: "line",
            animated: animated && ["draw"],
            path: [
              ...leftTop ? [
                ["M", p + so, p + so + squareSize],
                ["l", squareSize, -squareSize]
              ] : [["M", p + so, p + so]],
              ...rightTop ? [
                ["H", `100% - ${p + so + squareSize}`],
                ["l", squareSize, squareSize]
              ] : [["H", `100% - ${p + so}`]],
              ...rightBottom ? [["V", `100% - ${p + so + squareSize}`]] : [["V", `100% - ${p + so}`]]
            ]
          },
          {
            type: "path",
            name: "line",
            animated: animated && ["draw"],
            path: [
              ...rightBottom ? [
                ["M", `100% - ${p + so}`, `100% - ${p + so + squareSize}`],
                ["l", -squareSize, squareSize]
              ] : [["M", `100% - ${p + so}`, `100% - ${p + so}`]],
              ...leftBottom ? [
                ["H", p + so + squareSize],
                ["l", -squareSize, -squareSize]
              ] : [["H", p + so]],
              ...leftTop ? [["V", p + so + squareSize]] : [["V", p + so]]
            ]
          }
        ]
      }
    ]
  };
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/createFrameNeroSettings/createFrameNeroSettings.js
var defaultProps5 = {
  styled: true,
  animated: true,
  padding: 0,
  cornerLength: 24,
  cornerWidth: 2
};
var createFrameNeroSettings = (props) => {
  const { styled, animated, padding: p, cornerWidth, cornerLength } = { ...defaultProps5, ...props ? filterProps(props) : null };
  const cornerHalf = cornerLength / 2;
  const cornerInternal = cornerLength / 2 - cornerWidth * 2;
  return {
    elements: [
      {
        type: "rect",
        name: "bg",
        x: p,
        y: p,
        width: `100% - ${p * 2}`,
        height: `100% - ${p * 2}`,
        style: {
          filter: styled ? "var(--arwes-frames-bg-filter)" : void 0,
          fill: styled ? "var(--arwes-frames-bg-color, currentcolor)" : void 0,
          strokeWidth: styled ? "0" : void 0
        },
        animated: animated && {
          initialStyle: { opacity: 0 },
          transitions: {
            entering: ({ element, duration, animate: animate3 }) => animate3(element, { opacity: 1 }, { delay: duration / 2, duration: duration / 2 }),
            exiting: ({ element, duration, animate: animate3 }) => animate3(element, { opacity: 0 }, { duration: duration / 2 })
          }
        }
      },
      {
        type: "g",
        style: {
          filter: styled ? "var(--arwes-frames-deco-filter)" : void 0,
          fill: styled ? "var(--arwes-frames-deco-color, currentcolor)" : void 0,
          strokeWidth: styled ? "0" : void 0
        },
        animated: animated && {
          transitions: {
            entering: ({ element, duration, animate: animate3 }) => animate3(element, { opacity: [0, 1, 0.5, 1] }, { duration: duration / 2 }),
            exiting: ({ element, duration, animate: animate3 }) => animate3(element, { opacity: [1, 0, 0.5, 0] }, { delay: duration / 2, duration: duration / 2 })
          }
        },
        elements: [
          {
            type: "path",
            name: "deco",
            animated: animated && [
              ["x", cornerHalf, 0, void 0, "outExpo"],
              ["y", cornerHalf, 0, void 0, "outExpo"]
            ],
            path: [
              ["M", p, p],
              ["h", cornerLength],
              ["l", -cornerWidth, cornerWidth],
              ["h", -cornerHalf],
              ["l", -cornerInternal, cornerInternal],
              ["v", cornerHalf],
              ["l", -cornerWidth, cornerWidth],
              "z"
            ]
          },
          {
            type: "path",
            name: "deco",
            animated: animated && [
              ["x", -cornerHalf, 0, void 0, "outExpo"],
              ["y", cornerHalf, 0, void 0, "outExpo"]
            ],
            path: [
              ["M", `100% - ${p}`, p],
              ["v", cornerLength],
              ["l", -cornerWidth, -cornerWidth],
              ["v", -cornerHalf],
              ["l", -cornerInternal, -cornerInternal],
              ["h", -cornerHalf],
              ["l", -cornerWidth, -cornerWidth],
              "z"
            ]
          },
          {
            type: "path",
            name: "deco",
            animated: animated && [
              ["x", -cornerHalf, 0, void 0, "outExpo"],
              ["y", -cornerHalf, 0, void 0, "outExpo"]
            ],
            path: [
              ["M", `100% - ${p}`, `100% - ${p}`],
              ["h", -cornerLength],
              ["l", cornerWidth, -cornerWidth],
              ["h", cornerHalf],
              ["l", cornerInternal, -cornerInternal],
              ["v", -cornerHalf],
              ["l", cornerWidth, -cornerWidth],
              "z"
            ]
          },
          {
            type: "path",
            name: "deco",
            animated: animated && [
              ["x", cornerHalf, 0, void 0, "outExpo"],
              ["y", -cornerHalf, 0, void 0, "outExpo"]
            ],
            path: [
              ["M", p, `100% - ${p}`],
              ["h", cornerLength],
              ["l", -cornerWidth, -cornerWidth],
              ["h", -cornerHalf],
              ["l", -cornerInternal, -cornerInternal],
              ["v", -cornerHalf],
              ["l", -cornerWidth, -cornerWidth],
              "z"
            ]
          }
        ]
      }
    ]
  };
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/createFrameNefrexSettings/createFrameNefrexSettings.js
var defaultProps6 = {
  styled: true,
  animated: true,
  padding: 0,
  leftTop: true,
  leftBottom: false,
  rightTop: false,
  rightBottom: true,
  squareSize: 16,
  strokeWidth: 1,
  smallLineLength: 16,
  largeLineLength: 64
};
var createFrameNefrexSettings = (props) => {
  const { styled, animated, padding: p, leftTop, leftBottom, rightTop, rightBottom, squareSize: ss, strokeWidth, smallLineLength, largeLineLength } = { ...defaultProps6, ...props ? filterProps(props) : null };
  const so = strokeWidth / 2;
  const bgLeftTop = leftTop ? [
    ["M", p + so, p + so + ss + smallLineLength],
    ["v", -smallLineLength],
    ["l", ss, -ss],
    ["h", largeLineLength]
  ] : [["M", p + so, p + so]];
  const bgRightTop = rightTop ? [
    ["L", `100% - ${p + so + ss + largeLineLength}`, p + so],
    ["h", largeLineLength],
    ["l", ss, ss],
    ["v", smallLineLength]
  ] : [["L", `100% - ${p + so}`, p + so]];
  const bgRightBottom = rightBottom ? [
    ["L", `100% - ${p + so}`, `100% - ${p + so + ss + smallLineLength}`],
    ["v", smallLineLength],
    ["l", -ss, ss],
    ["h", -largeLineLength]
  ] : [["L", `100% - ${p + so}`, `100% - ${p + so}`]];
  const bgLeftBottom = leftBottom ? [
    ["L", p + so + ss + largeLineLength, `100% - ${p + so}`],
    ["h", -largeLineLength],
    ["l", -ss, -ss],
    ["v", -smallLineLength]
  ] : [["L", p + so, `100% - ${p + so}`]];
  const elements = [
    {
      name: "bg",
      style: {
        filter: styled ? "var(--arwes-frames-bg-filter)" : void 0,
        fill: styled ? "var(--arwes-frames-bg-color, currentcolor)" : void 0,
        strokeWidth: 0
      },
      animated: animated && {
        transitions: {
          entering: ({ element, duration, animate: animate3 }) => animate3(element, { opacity: [0, 1] }, { duration: duration / 2, delay: duration / 2 }),
          exiting: ({ element, duration, animate: animate3, easing: easing2 }) => animate3(element, { opacity: [1, 0] }, { duration: duration / 2, easing: easing2.outExpo })
        }
      },
      path: bgLeftTop.concat(bgRightTop).concat(bgRightBottom).concat(bgLeftBottom)
    },
    {
      type: "g",
      style: {
        filter: styled ? "var(--arwes-frames-line-filter)" : void 0,
        fill: styled ? "none" : void 0,
        stroke: styled ? "var(--arwes-frames-line-color, currentcolor)" : void 0,
        strokeLinecap: styled ? "round" : void 0,
        strokeLinejoin: styled ? "round" : void 0,
        strokeWidth: String(strokeWidth)
      },
      elements: [
        {
          type: "g",
          animated: animated && [["x", ss, 0, void 0, "outExpo"]],
          elements: [
            leftTop && {
              name: "line",
              animated: animated && ["draw"],
              path: [
                ["M", p + so, p + so + ss + smallLineLength],
                ["v", -smallLineLength],
                ["l", ss, -ss],
                ["h", largeLineLength]
              ]
            },
            leftBottom && {
              name: "line",
              animated: animated && ["draw"],
              path: [
                ["M", p + so, `100% - ${p + so + ss + smallLineLength}`],
                ["v", smallLineLength],
                ["l", ss, ss],
                ["h", largeLineLength]
              ]
            }
          ].filter(Boolean)
        },
        {
          type: "g",
          animated: animated && [["x", -ss, 0, void 0, "outExpo"]],
          elements: [
            rightTop && {
              name: "line",
              animated: animated && ["draw"],
              path: [
                ["M", `100% - ${p + so}`, p + so + ss + smallLineLength],
                ["v", -smallLineLength],
                ["l", -ss, -ss],
                ["h", -largeLineLength]
              ]
            },
            rightBottom && {
              name: "line",
              animated: animated && ["draw"],
              path: [
                ["M", `100% - ${p + so}`, `100% - ${p + so + ss + smallLineLength}`],
                ["v", smallLineLength],
                ["l", -ss, ss],
                ["h", -largeLineLength]
              ]
            }
          ].filter(Boolean)
        }
      ]
    }
  ];
  return { elements };
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/createFrameKranoxSettings/createFrameKranoxSettings.js
var defaultProps7 = {
  styled: true,
  animated: true,
  padding: 0,
  strokeWidth: 2,
  bgStrokeWidth: 0,
  squareSize: 16,
  smallLineLength: 16,
  largeLineLength: 64
};
var toPath = (points) => points.map((p, i) => [i === 0 ? "M" : "L", ...p]);
var createFrameKranoxSettings = (props) => {
  const { styled, animated, padding: p, strokeWidth: sw, bgStrokeWidth: bsw, squareSize: ss, smallLineLength: sll, largeLineLength: lll } = { ...defaultProps7, ...props ? filterProps(props) : null };
  const so = sw / 2;
  const bso = bsw / 2;
  const leftTopBgPolyline = [
    [p + bso + ss * 2, `100% - ${p + bso + sw * 2}`],
    [p + bso + ss, `100% - ${p + bso + sw * 2 + ss}`],
    [p + bso + ss, p + bso + sw * 2 + lll + ss * 3 + sll],
    [p + bso, p + bso + sw * 2 + lll + ss * 2 + sll],
    [p + bso, p + bso + sw * 2 + ss * 2 + sll],
    [p + bso + ss, p + bso + sw * 2 + sll + ss],
    [p + bso + ss, p + bso + sw + ss],
    [p + bso + ss * 2 - sw, p + bso + sw * 2],
    [`100% - ${p + bso + ss * 2}`, p + bso + sw * 2]
  ];
  const rightBottomBgPolyline = [
    [`100% - ${p + bso + ss * 2}`, p + bso + sw * 2],
    [`100% - ${p + bso + ss}`, p + bso + sw * 2 + ss],
    [`100% - ${p + bso + ss}`, `100% - ${p + bso + sw * 2 + ss * 3 + sll + lll}`],
    [`100% - ${p + bso}`, `100% - ${p + bso + sw * 2 + ss * 2 + sll + lll}`],
    [`100% - ${p + bso}`, `100% - ${p + bso + sw * 2 + ss * 2 + sll}`],
    [`100% - ${p + bso + ss}`, `100% - ${p + bso + sw * 2 + ss + sll}`],
    [`100% - ${p + bso + ss}`, `100% - ${p + bso + sw + ss}`],
    [`100% - ${p + bso + ss * 2 - sw}`, `100% - ${p + bso + sw * 2}`],
    [bso + p + ss * 2, `100% - ${p + bso + sw * 2}`]
  ];
  const leftTopLine = [
    [p + so - sw * 2 + ss, p + so + ss + sll],
    [p + so - sw * 2 + ss, p + so + ss],
    [p + so - sw * 2 + ss * 2, p + so],
    [p + so - sw * 2 + ss * 2 + lll, p + so]
  ];
  const rightBottomLine = [
    [`100% - ${p + so + ss} + ${sw * 2}`, `100% - ${p + so + ss + sll}`],
    [`100% - ${p + so + ss} + ${sw * 2}`, `100% - ${p + so + ss}`],
    [`100% - ${p + so + ss * 2} + ${sw * 2}`, `100% - ${p + so}`],
    [`100% - ${p + so + ss * 2 + lll} + ${sw * 2}`, `100% - ${p + so}`]
  ];
  return {
    elements: [
      {
        name: "bg",
        style: {
          filter: styled ? "var(--arwes-frames-bg-filter)" : void 0,
          fill: styled ? "var(--arwes-frames-bg-color, currentcolor)" : void 0,
          stroke: styled ? "var(--arwes-frames-bg-stroke, currentcolor)" : void 0,
          strokeWidth: String(bsw)
        },
        animated: animated && ["fade"],
        path: toPath(leftTopBgPolyline.concat(rightBottomBgPolyline))
      },
      {
        type: "g",
        style: {
          filter: styled ? "var(--arwes-frames-line-filter)" : void 0,
          fill: styled ? "none" : void 0,
          stroke: styled ? "var(--arwes-frames-line-color, currentcolor)" : void 0,
          strokeLinecap: styled ? "round" : void 0,
          strokeLinejoin: styled ? "round" : void 0,
          strokeWidth: String(sw)
        },
        elements: [
          {
            name: "line",
            animated: animated && ["draw"],
            path: toPath(leftTopLine)
          },
          {
            name: "line",
            animated: animated && ["draw"],
            path: toPath(rightBottomLine)
          }
        ]
      }
    ]
  };
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/createFrameHeaderSettings/createFrameHeaderSettings.js
var defaultProps8 = {
  styled: true,
  animated: true,
  padding: 0,
  strokeWidth: 1,
  decoWidth: 4,
  direction: "horizontal",
  align: "left",
  contentLength: 0
};
var createFrameHeaderSettings = (props) => {
  const { styled, animated, padding: p, strokeWidth, decoWidth, direction, align, contentLength } = { ...defaultProps8, ...props ? filterProps(props) : null };
  const strokeOffset = strokeWidth / 2;
  const lineStyle = {
    filter: styled ? "var(--arwes-frames-line-filter)" : void 0,
    stroke: styled ? "var(--arwes-frames-line-color, currentcolor)" : void 0,
    fill: styled ? "none" : void 0,
    strokeWidth: String(strokeWidth)
  };
  const decoDashStyle = {
    filter: styled ? "var(--arwes-frames-deco-filter)" : void 0,
    stroke: styled ? "var(--arwes-frames-deco-color, currentcolor)" : void 0,
    fill: styled ? "none" : void 0,
    strokeWidth: String(strokeWidth)
  };
  const decoBoxesStyle = {
    filter: styled ? "var(--arwes-frames-deco-filter)" : void 0,
    fill: styled ? "var(--arwes-frames-deco-color, currentcolor)" : void 0,
    strokeWidth: "0"
  };
  const decoDashAnimated = animated ? {
    transitions: {
      entering: ({ element, duration }) => animate2(element, { opacity: [0, 1, 0.5, 1] }, { duration: duration * 0.4 }),
      exiting: ({ element, duration }) => animate2(element, { opacity: [1, 0, 0.5, 0] }, { duration: duration * 0.4, delay: duration * 0.6 })
    }
  } : void 0;
  const lineAnimated = animated ? ["draw"] : void 0;
  const decoBoxesAnimated = animated ? {
    transitions: {
      entering: ({ element, duration }) => animate2(element, { opacity: [0, 1, 0.5, 1] }, { delay: duration * 0.6, duration: duration * 0.4 }),
      exiting: { opacity: [1, 0, 0.5, 0] }
    }
  } : void 0;
  const verticalBoxes = [
    {
      type: "rect",
      x: 0,
      y: 0,
      width: "100%",
      height: "20%"
    },
    {
      type: "rect",
      x: 0,
      y: "40%",
      width: "100%",
      height: "20%"
    },
    {
      type: "rect",
      x: 0,
      y: "80%",
      width: "100%",
      height: "20%"
    }
  ];
  if (direction === "vertical") {
    if (align === "bottom") {
      return {
        elements: [
          {
            type: "path",
            name: "deco",
            style: decoDashStyle,
            animated: decoDashAnimated,
            path: [
              ["M", contentLength ? `100% - ${p + strokeOffset}` : p + strokeOffset, `100% - ${p}`],
              ["v", -decoWidth * 2],
              ["m", 0, -decoWidth],
              ["v", -decoWidth * 2]
            ]
          },
          {
            type: "path",
            name: "line",
            style: lineStyle,
            animated: lineAnimated,
            path: ({ width, height }) => [
              "M",
              contentLength ? width - (p + strokeOffset) : p + strokeOffset,
              height - (p + decoWidth * 6),
              "v",
              -Math.max(0, contentLength - decoWidth * 6),
              "L",
              contentLength ? width * 0.5 : p + strokeOffset,
              height - (p + contentLength + width * 0.5),
              "V",
              p + decoWidth * 6.5
            ].join(" ")
          },
          {
            type: "g",
            name: "deco",
            style: {
              ...decoBoxesStyle,
              skewY: -45,
              transformOrigin: contentLength ? "top center" : "top left"
            },
            animated: decoBoxesAnimated,
            elements: [
              {
                type: "svg",
                viewBox: `0 0 ${decoWidth * 2} ${decoWidth * 5}`,
                x: contentLength ? `50% - ${strokeOffset}` : p,
                y: p + decoWidth * 2,
                width: decoWidth * 2,
                height: decoWidth * 5,
                elements: verticalBoxes
              }
            ]
          }
        ]
      };
    }
    return {
      elements: [
        {
          type: "path",
          name: "deco",
          style: decoDashStyle,
          animated: decoDashAnimated,
          path: [
            ["M", contentLength ? `100% - ${p + strokeOffset}` : p + strokeOffset, p],
            ["v", decoWidth * 2],
            ["m", 0, decoWidth],
            ["v", decoWidth * 2]
          ]
        },
        {
          type: "path",
          name: "line",
          style: lineStyle,
          animated: lineAnimated,
          path: ({ width, height }) => [
            "M",
            contentLength ? width - (p + strokeOffset) : p + strokeOffset,
            p + decoWidth * 6,
            "v",
            Math.max(0, contentLength - decoWidth * 6),
            "L",
            contentLength ? width * 0.5 : p + strokeOffset,
            p + contentLength + width * 0.5,
            "V",
            height - (p + decoWidth * 6.5)
          ].join(" ")
        },
        {
          type: "g",
          name: "deco",
          style: {
            ...decoBoxesStyle,
            transformOrigin: contentLength ? "bottom center" : "bottom left",
            skewY: 45
          },
          animated: decoBoxesAnimated,
          elements: [
            {
              type: "svg",
              viewBox: `0 0 ${decoWidth * 2} ${decoWidth * 5}`,
              x: contentLength ? `50% - ${strokeOffset}` : p,
              y: `100% - ${p + decoWidth * 7}`,
              width: decoWidth * 2,
              height: decoWidth * 5,
              elements: verticalBoxes
            }
          ]
        }
      ]
    };
  }
  const horizontalBoxes = [
    {
      type: "rect",
      x: 0,
      y: 0,
      width: "20%",
      height: "100%"
    },
    {
      type: "rect",
      x: "40%",
      y: 0,
      width: "20%",
      height: "100%"
    },
    {
      type: "rect",
      x: "80%",
      y: 0,
      width: "20%",
      height: "100%"
    }
  ];
  if (align === "right") {
    return {
      elements: [
        {
          type: "path",
          name: "deco",
          style: decoDashStyle,
          animated: decoDashAnimated,
          path: [
            ["M", `100% - ${p}`, contentLength ? `100% - ${p + strokeOffset}` : p + strokeOffset],
            ["h", -decoWidth * 2],
            ["m", -decoWidth, 0],
            ["h", -decoWidth * 2]
          ]
        },
        {
          type: "path",
          name: "line",
          style: lineStyle,
          animated: lineAnimated,
          path: ({ width, height }) => [
            "M",
            width - (p + decoWidth * 6),
            contentLength ? height - (p + strokeOffset) : p + strokeOffset,
            "h",
            -Math.max(0, contentLength - decoWidth * 6),
            "L",
            width - (p + contentLength + height * 0.5),
            contentLength ? height * 0.5 : p + strokeOffset,
            "H",
            p + decoWidth * 6.5
          ].join(" ")
        },
        {
          type: "g",
          name: "deco",
          animated: decoBoxesAnimated,
          style: {
            ...decoBoxesStyle,
            transformOrigin: contentLength ? "left center" : "left top",
            skewX: -45
          },
          elements: [
            {
              type: "svg",
              viewBox: `0 0 ${decoWidth * 5} ${decoWidth * 2}`,
              x: p + decoWidth * 2,
              y: contentLength ? `50% - ${strokeOffset}` : p,
              width: decoWidth * 5,
              height: decoWidth * 2,
              elements: horizontalBoxes
            }
          ]
        }
      ]
    };
  }
  return {
    elements: [
      {
        type: "path",
        name: "deco",
        style: decoDashStyle,
        animated: decoDashAnimated,
        path: [
          ["M", p, contentLength ? `100% - ${p + strokeOffset}` : p + strokeOffset],
          ["h", decoWidth * 2],
          ["m", decoWidth, 0],
          ["h", decoWidth * 2]
        ]
      },
      {
        type: "path",
        name: "line",
        style: lineStyle,
        animated: lineAnimated,
        path: ({ width, height }) => [
          "M",
          p + decoWidth * 6,
          contentLength ? height - (p + strokeOffset) : p + strokeOffset,
          "h",
          Math.max(0, contentLength - decoWidth * 6),
          "L",
          p + contentLength + height * 0.5,
          contentLength ? height * 0.5 : p + strokeOffset,
          "H",
          width - (p + decoWidth * 6.5)
        ].join(" ")
      },
      {
        type: "g",
        name: "deco",
        animated: decoBoxesAnimated,
        style: {
          ...decoBoxesStyle,
          transformOrigin: contentLength ? "right center" : "right top",
          skewX: 45
        },
        elements: [
          {
            type: "svg",
            viewBox: `0 0 ${decoWidth * 5} ${decoWidth * 2}`,
            x: `100% - ${p + decoWidth * 7}`,
            y: contentLength ? `50% - ${strokeOffset}` : p,
            width: decoWidth * 5,
            height: decoWidth * 2,
            elements: horizontalBoxes
          }
        ]
      }
    ]
  };
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/createFrameCircleSettings/createFrameCircleSettings.js
var defaultProps9 = {
  styled: true,
  animated: true,
  padding: 0,
  strokeWidth: 1,
  separation: 0,
  sideWidth: 24
};
var createFrameCircleSettings = (props) => {
  const { styled, animated, padding: p, strokeWidth, separation, sideWidth } = { ...defaultProps9, ...props ? filterProps(props) : null };
  const strokeOffset = strokeWidth / 2;
  return {
    elements: [
      {
        type: "g",
        style: {
          transformOrigin: "center"
        },
        animated: animated && {
          initialStyle: { rotate: -45 },
          transitions: {
            entering: { rotate: [-45, 0], easing: "outExpo" },
            exiting: { rotate: [0, 45], easing: "outExpo" }
          }
        },
        elements: [
          {
            type: "g",
            animated: animated && {
              transitions: {
                entering: ({ element, duration }) => animate2(element, { opacity: [0, 1] }, { delay: duration / 2, duration: duration / 2 }),
                exiting: ({ element, duration }) => animate2(element, { opacity: [1, 0] }, { duration: duration / 2 })
              }
            },
            elements: [
              {
                type: "ellipse",
                name: "bg",
                cx: "50%",
                cy: "50%",
                rx: `50% - ${p + strokeWidth + strokeWidth * 3 + separation}`,
                ry: `50% - ${p + strokeWidth + strokeWidth * 3 + separation}`,
                style: {
                  filter: styled ? "var(--arwes-frames-bg-filter)" : void 0,
                  fill: styled ? "var(--arwes-frames-bg-color, currentcolor)" : void 0,
                  strokeWidth: 0
                }
              },
              {
                type: "ellipse",
                name: "line",
                cx: "50%",
                cy: "50%",
                rx: `50% - ${p + strokeOffset + strokeWidth * 3}`,
                ry: `50% - ${p + strokeOffset + strokeWidth * 3}`,
                style: {
                  filter: styled ? "var(--arwes-frames-line-filter)" : void 0,
                  fill: styled ? "none" : void 0,
                  stroke: styled ? "var(--arwes-frames-line-color, currentcolor)" : void 0,
                  strokeWidth: String(strokeWidth)
                }
              }
            ]
          },
          {
            type: "g",
            name: "deco",
            style: {
              transformOrigin: "center"
            },
            animated: animated && {
              transitions: {
                entering: ({ element, duration }) => animate2(element, { opacity: [0, 1, 0.5, 1], scale: [0.9, 1] }, { duration: duration / 2 }),
                exiting: ({ element, duration }) => animate2(element, { opacity: [1, 0, 0.5, 0], scale: [1, 0.9] }, { delay: duration / 2, duration: duration / 2 })
              }
            },
            elements: [
              {
                type: "ellipse",
                cx: "50%",
                cy: "50%",
                rx: `50% - ${p + strokeOffset + strokeWidth * 3}`,
                ry: `50% - ${p + strokeOffset + strokeWidth * 3}`,
                style: {
                  filter: styled ? "var(--arwes-frames-deco-filter)" : void 0,
                  fill: styled ? "none" : void 0,
                  stroke: styled ? "var(--arwes-frames-deco-color, currentcolor)" : void 0,
                  strokeWidth: String(strokeWidth),
                  transformOrigin: "center",
                  rotate: -(360 / 16)
                },
                draw: ({ element }) => {
                  const radius = Number(element.getAttribute("rx"));
                  const length = radius * Math.PI * 2;
                  element.setAttribute("stroke-dasharray", String(length / 8));
                }
              },
              {
                type: "g",
                style: {
                  filter: styled ? "var(--arwes-frames-deco-filter)" : void 0,
                  fill: styled ? "var(--arwes-frames-deco-color, currentcolor)" : void 0,
                  stroke: styled ? "none" : void 0,
                  strokeWidth: "0"
                },
                elements: [
                  {
                    type: "path",
                    path: [
                      ["M", p, `50% - ${sideWidth * 0.2}`],
                      ["l", strokeWidth * 2, -sideWidth * 0.3],
                      ["h", strokeWidth * 2],
                      ["v", sideWidth],
                      ["h", -strokeWidth * 2],
                      ["l", -strokeWidth * 2, -sideWidth * 0.3],
                      "z"
                    ]
                  },
                  {
                    type: "path",
                    path: [
                      ["M", `100% - ${p}`, `50% - ${sideWidth * 0.2}`],
                      ["l", -strokeWidth * 2, -sideWidth * 0.3],
                      ["h", -strokeWidth * 2],
                      ["v", sideWidth],
                      ["h", strokeWidth * 2],
                      ["l", strokeWidth * 2, -sideWidth * 0.3],
                      "z"
                    ]
                  },
                  {
                    type: "path",
                    path: [
                      ["M", `50% + ${sideWidth * 0.2}`, p],
                      ["l", sideWidth * 0.3, strokeWidth * 2],
                      ["v", strokeWidth * 2],
                      ["h", -sideWidth],
                      ["v", -strokeWidth * 2],
                      ["l", sideWidth * 0.3, -strokeWidth * 2],
                      "z"
                    ]
                  },
                  {
                    type: "path",
                    path: [
                      ["M", `50% + ${sideWidth * 0.2}`, `100% - ${p}`],
                      ["l", sideWidth * 0.3, -strokeWidth * 2],
                      ["v", -strokeWidth * 2],
                      ["h", -sideWidth],
                      ["v", strokeWidth * 2],
                      ["l", sideWidth * 0.3, strokeWidth * 2],
                      "z"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/animateFrameAssembler/animateFrameAssembler.js
var animateFrameAssembler = (props) => {
  const { element, duration, isEntering = true } = props;
  const bgs = Array.from(element.querySelectorAll("[data-name=bg]"));
  const lines = Array.from(element.querySelectorAll("[data-name=line]"));
  const decos = Array.from(element.querySelectorAll("[data-name=deco]"));
  const elements = [...bgs, ...lines, ...decos];
  for (const line of lines) {
    const length = line.getTotalLength();
    line.style.opacity = "1";
    line.style.strokeDasharray = String(length);
    line.dataset.length = String(length);
  }
  const lineAnimations = lines.map((line) => {
    const length = Number(line.dataset.length);
    return [line, { strokeDashoffset: [length, 0] }, { at: 0, duration, easing: easing.outSine }];
  });
  const animation = timeline([
    [bgs, { opacity: [0, 1] }, { at: 0, duration: duration / 2, easing: easing.outSine }],
    [
      decos,
      { opacity: [0, 1, 0.5, 1] },
      { at: duration / 2, duration: duration / 2, easing: easing.outSine }
    ],
    ...lineAnimations
  ], {
    direction: isEntering ? "normal" : "reverse"
  });
  void animation.finished.then(() => {
    for (const element2 of elements) {
      element2.style.opacity = isEntering ? "1" : "0";
    }
    for (const line of lines) {
      line.style.strokeDasharray = "";
      line.style.strokeDashoffset = "";
    }
  });
  return animation;
};

// node_modules/.pnpm/@arwes+frames@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/frames/build/esm/styleFrameClipOctagon/styleFrameClipOctagon.js
var styleFrameClipOctagon = (props) => {
  const { squareSize = "16px", leftTop = true, leftBottom = true, rightTop = true, rightBottom = true } = props ?? {};
  const ss = typeof squareSize === "number" ? `${squareSize}px` : squareSize;
  const leftTopPoints = leftTop ? `0 ${ss},
${ss} 0,` : "0 0,";
  const rightTopPoints = rightTop ? `calc(100% - ${ss}) 0,
100% ${ss},` : "100% 0,";
  const rightBottomPoints = rightBottom ? `100% calc(100% - ${ss}),
calc(100% - ${ss}) 100%,` : "100% 100%,";
  const leftBottomPoints = leftBottom ? `${ss} 100%,
0 calc(100% - ${ss})` : "0 100%";
  return `polygon(
${leftTopPoints}
${rightTopPoints}
${rightBottomPoints}
${leftBottomPoints}
)`;
};

// node_modules/.pnpm/@arwes+animator@1.0.0-next.25020502/node_modules/@arwes/animator/build/esm/constants.js
var ANIMATOR_STATES = Object.freeze({
  entered: "entered",
  entering: "entering",
  exiting: "exiting",
  exited: "exited"
});
var ANIMATOR_ACTIONS = Object.freeze({
  setup: "setup",
  enter: "enter",
  enterEnd: "enterEnd",
  exit: "exit",
  exitEnd: "exitEnd",
  update: "update",
  refresh: "refresh"
});
var ANIMATOR_MANAGER_NAMES = Object.freeze({
  parallel: "parallel",
  stagger: "stagger",
  staggerReverse: "staggerReverse",
  sequence: "sequence",
  sequenceReverse: "sequenceReverse",
  switch: "switch"
});
var ANIMATOR_DEFAULT_DURATION = Object.freeze({
  enter: 0.4,
  exit: 0.4,
  delay: 0,
  offset: 0,
  stagger: 0.04,
  limit: -1
});
var ANIMATOR_DEFAULT_SETTINGS = Object.freeze({
  active: true,
  duration: ANIMATOR_DEFAULT_DURATION,
  manager: ANIMATOR_MANAGER_NAMES.parallel,
  merge: false,
  combine: false,
  initialState: "exited"
});

// node_modules/.pnpm/@arwes+animator@1.0.0-next.25020502/node_modules/@arwes/animator/build/esm/internal/createAnimatorManager.js
var createAnimatorManagerParallel = (node) => {
  const getDurationEnter = (childrenProvided) => {
    const children = childrenProvided || Array.from(node._children);
    return children.reduce((total, child) => {
      const { duration } = child.settings;
      return Math.max(total, duration.delay + duration.enter);
    }, 0);
  };
  const enterChildren = (children) => {
    for (const child of children) {
      const { duration } = child.settings;
      child._scheduler.start(duration.delay, () => child.send(ANIMATOR_ACTIONS.enter));
    }
  };
  const exitChildren = (children) => {
    for (const child of children) {
      child._scheduler.start(0, () => child.send(ANIMATOR_ACTIONS.exit));
    }
  };
  const destroy = () => {
  };
  return Object.freeze({
    name: ANIMATOR_MANAGER_NAMES.parallel,
    getDurationEnter,
    enterChildren,
    exitChildren,
    destroy
  });
};
var createAnimatorManagerStagger = (node, name) => {
  const timelineCache = /* @__PURE__ */ new Map();
  const getDurationEnter = (childrenProvided) => {
    let children = childrenProvided || Array.from(node._children);
    if (!children.length) {
      return 0;
    }
    if (name === ANIMATOR_MANAGER_NAMES.staggerReverse) {
      children = children.reverse();
    }
    const { duration: { stagger: stagger2 } } = node._getUserSettings();
    let total = 0;
    let totalOffset = 0;
    let index = 0;
    for (const child of children) {
      const { enter, offset = 0, delay = 0 } = child.settings.duration;
      totalOffset += offset;
      total = Math.max(total, index * stagger2 + totalOffset + enter + delay);
      index++;
    }
    return total;
  };
  const enterChildren = (childrenProvided) => {
    let children = childrenProvided || Array.from(node._children);
    if (!children.length) {
      return;
    }
    if (name === ANIMATOR_MANAGER_NAMES.staggerReverse) {
      children = [...children].reverse();
    }
    const now = Date.now();
    const parentSettings = node._getUserSettings();
    const staggerInMS = parentSettings.duration.stagger * 1e3;
    const limit = parentSettings.duration.limit;
    for (const child of children) {
      if (timelineCache.has(child)) {
        continue;
      }
      const { duration } = child.settings;
      const offsetInMS = duration.offset * 1e3;
      const enterDurationInMS = duration.enter * 1e3 + offsetInMS;
      const timeline2 = Array.from(timelineCache).map(([, durations]) => durations).filter(([startTime, , enterDuration]) => startTime + enterDuration >= now).sort((a, b) => a[0] - b[0]);
      let startTimeInMS = offsetInMS;
      let index = 0;
      for (const [itemStartTimeInMS] of timeline2) {
        if (index === timeline2.length - 1) {
          startTimeInMS = Math.max(0, itemStartTimeInMS + staggerInMS + offsetInMS - now);
          break;
        }
        const [nextItemStartTimeInMS, nextItemOffsetInMS] = timeline2[index + 1];
        if (nextItemStartTimeInMS - itemStartTimeInMS - nextItemOffsetInMS >= staggerInMS * 2 + offsetInMS) {
          startTimeInMS = Math.max(0, itemStartTimeInMS + staggerInMS + offsetInMS - now);
          break;
        }
        index++;
      }
      if (limit >= 0) {
        startTimeInMS = Math.min(startTimeInMS, limit * staggerInMS);
      }
      timelineCache.set(child, [now + startTimeInMS, offsetInMS, enterDurationInMS]);
      const onRemove = () => {
        timelineCache.delete(child);
      };
      const onTransition = () => {
        if (child.state !== ANIMATOR_STATES.entering) {
          onRemove();
          child._watchers.delete(onRemove);
          child._subscribers.delete(onTransition);
        }
      };
      child._watchers.add(onRemove);
      child._subscribers.add(onTransition);
      const scheduleTime = startTimeInMS / 1e3 + duration.delay;
      child._scheduler.start(scheduleTime, () => child.send(ANIMATOR_ACTIONS.enter));
    }
  };
  const exitChildren = (children) => {
    for (const child of children) {
      timelineCache.delete(child);
      child._scheduler.start(0, () => child.send(ANIMATOR_ACTIONS.exit));
    }
  };
  const destroy = () => {
    timelineCache.clear();
  };
  return Object.freeze({ name, getDurationEnter, enterChildren, exitChildren, destroy });
};
var createAnimatorManagerSequence = (node, name) => {
  const timelineCache = /* @__PURE__ */ new Map();
  const getDurationEnter = (childrenProvided) => {
    let children = childrenProvided || Array.from(node._children);
    if (!children.length) {
      return 0;
    }
    if (name === ANIMATOR_MANAGER_NAMES.sequenceReverse) {
      children = [...children].reverse();
    }
    let total = 0;
    let endTime = 0;
    for (const child of children) {
      const { enter, offset = 0, delay = 0 } = child.settings.duration;
      endTime += offset + enter;
      total = Math.max(total, endTime + delay);
    }
    return total;
  };
  const enterChildren = (childrenProvided) => {
    let children = childrenProvided || Array.from(node._children);
    if (!children.length) {
      return;
    }
    if (name === ANIMATOR_MANAGER_NAMES.sequenceReverse) {
      children = [...children].reverse();
    }
    const now = Date.now();
    const parentSettings = node._getUserSettings();
    const limit = parentSettings.duration.limit;
    for (const child of children) {
      if (timelineCache.has(child)) {
        continue;
      }
      const { duration } = child.settings;
      const enterDurationInMS = duration.enter * 1e3 + duration.offset * 1e3;
      const timeline2 = Array.from(timelineCache).map(([, durations]) => durations).filter(([startTime, enterDuration]) => startTime + enterDuration >= now).sort((a, b) => a[0] - b[0]);
      let startTimeInMS = 0;
      let index = 0;
      for (const [itemStartTimeInMS, itemEnterDurationInMS] of timeline2) {
        const itemEndTimeInMS = itemStartTimeInMS + itemEnterDurationInMS;
        if (index === timeline2.length - 1) {
          startTimeInMS = Math.max(0, itemEndTimeInMS - now);
          break;
        }
        const [nextItemStartTimeInMS] = timeline2[index + 1];
        if (nextItemStartTimeInMS - itemEndTimeInMS >= enterDurationInMS) {
          startTimeInMS = Math.max(0, itemEndTimeInMS - now);
          break;
        }
        index++;
      }
      if (limit > 0 && timeline2.length >= limit) {
        const [lastItemInTimelineStartTimeInMS] = timeline2[limit - 1];
        startTimeInMS = lastItemInTimelineStartTimeInMS - now;
      }
      timelineCache.set(child, [now + startTimeInMS, enterDurationInMS]);
      const onRemove = () => {
        timelineCache.delete(child);
      };
      const onTransition = () => {
        if (child.state !== ANIMATOR_STATES.entering) {
          onRemove();
          child._watchers.delete(onRemove);
          child._subscribers.delete(onTransition);
        }
      };
      child._watchers.add(onRemove);
      child._subscribers.add(onTransition);
      const scheduleTime = startTimeInMS / 1e3 + duration.offset + duration.delay;
      child._scheduler.start(scheduleTime, () => child.send(ANIMATOR_ACTIONS.enter));
    }
  };
  const exitChildren = (children) => {
    for (const child of children) {
      timelineCache.delete(child);
      child._scheduler.start(0, () => child.send(ANIMATOR_ACTIONS.exit));
    }
  };
  const destroy = () => {
    timelineCache.clear();
  };
  return Object.freeze({ name, getDurationEnter, enterChildren, exitChildren, destroy });
};
var createAnimatorManagerSwitch = (node) => {
  let nodeHiding;
  let nodeVisible;
  let nodeSubscriberUnsubscribe;
  const getDurationEnter = () => {
    if (nodeVisible) {
      return nodeVisible.settings.duration.enter;
    }
    const nodeVisibleCurrent = Array.from(node._children).find((child) => {
      const { condition } = child._getUserSettings();
      return typeof condition === "function" ? condition(child) : typeof condition === "boolean" ? condition : true;
    });
    if (nodeVisibleCurrent) {
      return nodeVisibleCurrent.settings.duration.enter;
    }
    return 0;
  };
  const enterChildren = () => {
    nodeSubscriberUnsubscribe?.();
    nodeSubscriberUnsubscribe = void 0;
    const children = Array.from(node._children);
    const nodeVisibleNew = children.find((child) => {
      const { condition } = child._getUserSettings();
      return typeof condition === "function" ? condition(child) : typeof condition === "boolean" ? condition : true;
    });
    const onNextEnter = () => {
      if (nodeVisibleNew) {
        if (nodeVisibleNew === nodeVisible) {
          nodeVisibleNew.send(ANIMATOR_ACTIONS.enter);
        } else {
          if (nodeVisible) {
            nodeHiding = nodeVisible;
            nodeSubscriberUnsubscribe = nodeHiding.subscribe((nodeHidingSubscribed) => {
              if (nodeHidingSubscribed.state === ANIMATOR_STATES.exited) {
                nodeSubscriberUnsubscribe?.();
                nodeSubscriberUnsubscribe = void 0;
                nodeHiding = void 0;
                nodeVisibleNew.send(ANIMATOR_ACTIONS.enter);
              }
            });
            nodeHiding?.send(ANIMATOR_ACTIONS.exit);
          } else {
            nodeVisibleNew.send(ANIMATOR_ACTIONS.enter);
            nodeHiding = void 0;
          }
          nodeVisible = nodeVisibleNew;
        }
      } else {
        nodeHiding = nodeVisible;
        nodeVisible = void 0;
      }
    };
    if (nodeHiding) {
      nodeSubscriberUnsubscribe = nodeHiding.subscribe((nodeHiding2) => {
        if (nodeHiding2.state === ANIMATOR_STATES.exited) {
          onNextEnter();
        }
      });
    } else {
      onNextEnter();
    }
    children.filter((child) => child !== nodeVisibleNew).forEach((child) => child.send(ANIMATOR_ACTIONS.exit));
  };
  const exitChildren = (children) => {
    for (const child of children) {
      child._scheduler.start(0, () => child.send(ANIMATOR_ACTIONS.exit));
    }
  };
  const destroy = () => {
    nodeHiding = void 0;
    nodeVisible = void 0;
    nodeSubscriberUnsubscribe?.();
    nodeSubscriberUnsubscribe = void 0;
  };
  return Object.freeze({
    name: ANIMATOR_MANAGER_NAMES.switch,
    getDurationEnter,
    enterChildren,
    exitChildren,
    destroy
  });
};
var createAnimatorManager = (node, manager) => {
  switch (manager) {
    case ANIMATOR_MANAGER_NAMES.stagger:
      return createAnimatorManagerStagger(node, ANIMATOR_MANAGER_NAMES.stagger);
    case ANIMATOR_MANAGER_NAMES.staggerReverse:
      return createAnimatorManagerStagger(node, ANIMATOR_MANAGER_NAMES.staggerReverse);
    case ANIMATOR_MANAGER_NAMES.sequence:
      return createAnimatorManagerSequence(node, ANIMATOR_MANAGER_NAMES.sequence);
    case ANIMATOR_MANAGER_NAMES.sequenceReverse:
      return createAnimatorManagerSequence(node, ANIMATOR_MANAGER_NAMES.sequenceReverse);
    case ANIMATOR_MANAGER_NAMES.switch:
      return createAnimatorManagerSwitch(node, ANIMATOR_MANAGER_NAMES.switch);
    default:
      return createAnimatorManagerParallel(node, ANIMATOR_MANAGER_NAMES.parallel);
  }
};

// node_modules/.pnpm/@arwes+animator@1.0.0-next.25020502/node_modules/@arwes/animator/build/esm/internal/createAnimatorMachine.js
var createAnimatorMachine = (node, initialState) => {
  let state = initialState;
  const statesMap = {
    [ANIMATOR_STATES.exited]: {
      onActions: {
        [ANIMATOR_ACTIONS.enter]: ANIMATOR_STATES.entering,
        [ANIMATOR_ACTIONS.setup]: () => {
          const settings = node._getUserSettings();
          if (node._parent) {
            const parentSettings = node._parent._getUserSettings();
            const { condition } = settings;
            switch (node._parent.state) {
              case ANIMATOR_STATES.entering: {
                const allowed = typeof condition === "function" ? condition(node) : typeof condition === "boolean" ? condition : true;
                if ((parentSettings.combine || settings.merge) && allowed) {
                  node._parent._manager.enterChildren([node]);
                }
                break;
              }
              case ANIMATOR_STATES.entered: {
                const allowed = typeof condition === "function" ? condition(node) : typeof condition === "boolean" ? condition : true;
                if (allowed) {
                  node._parent._manager.enterChildren([node]);
                }
                break;
              }
            }
          } else {
            const isActive = settings.active === void 0 || settings.active;
            if (isActive) {
              if (settings.duration.delay > 0) {
                return {
                  duration: settings.duration.delay,
                  state: ANIMATOR_STATES.entering
                };
              }
              return ANIMATOR_STATES.entering;
            }
          }
        }
      }
    },
    [ANIMATOR_STATES.entering]: {
      onEntry: {
        execute: () => {
          const settings = node._getUserSettings();
          const children = Array.from(node._children).filter((child) => {
            const childSettings = child._getUserSettings();
            if (settings.combine || childSettings.merge) {
              const { condition } = childSettings;
              const childAllowedToEnter = typeof condition === "function" ? condition(child) : typeof condition === "boolean" ? condition : true;
              return childAllowedToEnter;
            }
            return false;
          });
          node._manager.enterChildren(children);
        },
        schedule: () => ({
          duration: node.settings.duration.enter,
          action: ANIMATOR_ACTIONS.enterEnd
        })
      },
      onActions: {
        [ANIMATOR_ACTIONS.enterEnd]: ANIMATOR_STATES.entered,
        [ANIMATOR_ACTIONS.exit]: ANIMATOR_STATES.exiting
      }
    },
    [ANIMATOR_STATES.entered]: {
      onEntry: {
        execute: () => {
          const settings = node._getUserSettings();
          if (settings.combine) {
            return;
          }
          const children = Array.from(node._children).filter((child) => {
            const childSettings = child._getUserSettings();
            const { condition } = childSettings;
            const allowed = typeof condition === "function" ? condition(child) : typeof condition === "boolean" ? condition : true;
            return !childSettings.merge && allowed;
          });
          node._manager.enterChildren(children);
        }
      },
      onActions: {
        [ANIMATOR_ACTIONS.exit]: ANIMATOR_STATES.exiting
      }
    },
    [ANIMATOR_STATES.exiting]: {
      onEntry: {
        execute: () => {
          node._manager.exitChildren(Array.from(node._children));
        },
        schedule: () => ({
          duration: node.settings.duration.exit,
          action: ANIMATOR_ACTIONS.exitEnd
        })
      },
      onActions: {
        [ANIMATOR_ACTIONS.exitEnd]: ANIMATOR_STATES.exited,
        [ANIMATOR_ACTIONS.enter]: ANIMATOR_STATES.entering
      }
    },
    "*": {
      onActions: {
        [ANIMATOR_ACTIONS.update]: () => {
          const settings = node._getUserSettings();
          if (settings.manager !== node._manager.name) {
            node._manager.destroy?.();
            node._manager = createAnimatorManager(node, settings.manager);
          }
          if (!node._parent) {
            const isActive = settings.active === true || settings.active === void 0;
            if ((state === ANIMATOR_STATES.exited || state === ANIMATOR_STATES.exiting) && isActive) {
              if (settings.duration.delay > 0) {
                return {
                  duration: settings.duration.delay,
                  state: ANIMATOR_STATES.entering
                };
              }
              return ANIMATOR_STATES.entering;
            } else if ((state === ANIMATOR_STATES.entered || state === ANIMATOR_STATES.entering) && !isActive) {
              return ANIMATOR_STATES.exiting;
            }
          }
        },
        [ANIMATOR_ACTIONS.refresh]: () => {
          const settings = node._getUserSettings();
          const childrenWithSettings = Array.from(node._children).map((child) => ({
            node: child,
            settings: child._getUserSettings()
          }));
          if (node.state === ANIMATOR_STATES.entering || node.state === ANIMATOR_STATES.entered) {
            const childrenInEnterToExit = childrenWithSettings.filter((child) => child.node.state === ANIMATOR_STATES.entering || child.node.state === ANIMATOR_STATES.entered).filter((child) => {
              if (node.state === ANIMATOR_STATES.entering) {
                return settings.combine || child.settings.merge;
              }
              return true;
            }).filter((child) => {
              const { condition } = child.settings;
              const allowed = typeof condition === "function" ? condition(child.node) : typeof condition === "boolean" ? condition : true;
              return !allowed;
            }).map((child) => child.node);
            const childrenInExitToEnter = childrenWithSettings.filter((child) => child.node.state === ANIMATOR_STATES.exiting || child.node.state === ANIMATOR_STATES.exited).filter((child) => {
              const { condition } = child.settings;
              const allowed = typeof condition === "function" ? condition(child.node) : typeof condition === "boolean" ? condition : true;
              return allowed;
            }).map((child) => child.node);
            node._manager.exitChildren(childrenInEnterToExit);
            node._manager.enterChildren(childrenInExitToEnter);
          }
        }
      }
    }
  };
  const transition2 = (newState) => {
    if (!newState || state === newState) {
      return;
    }
    state = newState;
    const { onEntry } = statesMap[state] || {};
    const { onTransition } = node.control.getSettings();
    node._scheduler.stopAll();
    if (onEntry?.execute) {
      onEntry.execute();
    }
    if (onEntry?.schedule) {
      const task = onEntry.schedule();
      node._scheduler.start(task.duration, () => send(task.action));
    }
    onTransition?.(node);
    for (const subscriber of node._subscribers) {
      subscriber(node);
    }
  };
  const processAction = (procedure) => {
    if (procedure === void 0) {
      return;
    }
    if (typeof procedure === "string") {
      transition2(procedure);
    } else {
      const newState = procedure();
      if (typeof newState === "object" && newState !== null) {
        node._scheduler.start(newState.duration, () => transition2(newState.state));
      } else if (newState) {
        transition2(newState);
      }
    }
  };
  const getState = () => state;
  const send = (action) => {
    if (!isBrowser()) {
      return;
    }
    processAction(statesMap[state]?.onActions?.[action]);
    processAction(statesMap["*"]?.onActions?.[action]);
  };
  const machine = Object.freeze({ getState, send });
  return machine;
};

// node_modules/.pnpm/@arwes+animator@1.0.0-next.25020502/node_modules/@arwes/animator/build/esm/internal/isNodeConditionCorrect.js
var isNodeConditionCorrect = (node, condition) => typeof condition === "function" ? condition(node) : typeof condition === "boolean" ? condition : true;

// node_modules/.pnpm/@arwes+animator@1.0.0-next.25020502/node_modules/@arwes/animator/build/esm/createAnimatorSystem/createAnimatorSystem.js
var createAnimatorSystem = () => {
  const systemId = `s${Math.random()}`.replace(".", "");
  let nodeIdCounter = 0;
  let root;
  const createNode = (parent, setup) => {
    const nodeId = `${systemId}-n${nodeIdCounter++}`;
    const node = { id: nodeId };
    let dynamicSettingsOptional = null;
    let foreign = null;
    const control = Object.freeze({
      getSettings: () => {
        const setupSettings = setup?.getSettings() || {};
        const dynamicSettings = dynamicSettingsOptional || {};
        return {
          ...setupSettings,
          ...dynamicSettings,
          duration: {
            ...setupSettings.duration,
            ...dynamicSettings.duration
          },
          condition: dynamicSettings.condition !== void 0 ? dynamicSettings.condition : setupSettings.condition !== void 0 ? setupSettings.condition : void 0,
          onTransition: (node2) => {
            setupSettings.onTransition?.(node2);
            dynamicSettings.onTransition?.(node2);
          }
        };
      },
      setSettings: (newSettings) => {
        if (newSettings === null) {
          dynamicSettingsOptional = null;
          return;
        }
        dynamicSettingsOptional = {
          ...dynamicSettingsOptional,
          ...newSettings,
          duration: {
            ...dynamicSettingsOptional?.duration,
            ...newSettings.duration
          }
        };
      },
      getForeign: () => foreign,
      setForeign: (value) => {
        foreign = value;
      }
    });
    const initialSettings = control.getSettings();
    const machine = createAnimatorMachine(node, initialSettings.initialState ?? ANIMATOR_DEFAULT_SETTINGS.initialState);
    const manager = createAnimatorManager(node, initialSettings.manager ?? ANIMATOR_DEFAULT_SETTINGS.manager);
    const nodeProps = {
      _parent: {
        value: parent,
        enumerable: true
      },
      _children: {
        value: /* @__PURE__ */ new Set(),
        enumerable: true
      },
      _subscribers: {
        value: /* @__PURE__ */ new Set(),
        enumerable: true
      },
      _watchers: {
        value: /* @__PURE__ */ new Set(),
        enumerable: true
      },
      _scheduler: {
        value: createTOScheduler(),
        enumerable: true
      },
      _getUserSettings: {
        value: () => {
          const controlSettings = node.control.getSettings();
          return {
            ...ANIMATOR_DEFAULT_SETTINGS,
            ...filterProps(controlSettings),
            duration: {
              ...ANIMATOR_DEFAULT_SETTINGS.duration,
              ...controlSettings.duration ? filterProps(controlSettings.duration) : null
            }
          };
        },
        enumerable: true
      },
      _manager: {
        value: manager,
        enumerable: true,
        writable: true
      },
      id: {
        value: nodeId,
        enumerable: true
      },
      state: {
        get: () => machine.getState(),
        enumerable: true
      },
      control: {
        value: control,
        enumerable: true
      },
      settings: {
        get: () => {
          const settings = node._getUserSettings();
          let enter = settings.duration.enter;
          if (settings.combine) {
            const children = Array.from(node._children).filter((child) => {
              const { condition } = child.control.getSettings();
              return isNodeConditionCorrect(child, condition);
            });
            enter = node._manager.getDurationEnter(children);
          }
          return { ...settings, duration: { ...settings.duration, enter } };
        },
        enumerable: true
      },
      subscribe: {
        value: (subscriber) => {
          node._subscribers.add(subscriber);
          subscriber(node);
          return () => node._subscribers.delete(subscriber);
        },
        enumerable: true
      },
      unsubscribe: {
        value: (subscriber) => {
          node._subscribers.delete(subscriber);
        },
        enumerable: true
      },
      send: {
        value: machine.send,
        enumerable: true
      }
    };
    Object.defineProperties(node, nodeProps);
    if (parent) {
      parent._children.add(node);
    }
    return node;
  };
  const removeNode = (node) => {
    node._scheduler.stopAll();
    for (const child of node._children) {
      removeNode(child);
    }
    if (node._parent) {
      node._parent._children.delete(node);
    }
    node._children.clear();
    node._subscribers.clear();
    node._watchers.clear();
  };
  const register = (parentNode, setup) => {
    if (parentNode === void 0 || parentNode === null) {
      if (root) {
        throw new Error("ARWES animator root node must be unregistered before registering another root node.");
      }
      root = createNode(void 0, setup);
      return root;
    }
    if (!root) {
      throw new Error("ARWES animator system requires an animator root node before registering children nodes. This means the provided animator parent node does not belong to the system.");
    }
    return createNode(parentNode, setup);
  };
  const unregister = (node) => {
    if (!root) {
      return;
    }
    for (const watcher of node._watchers) {
      watcher(node);
    }
    removeNode(node);
    if (root.id === node.id) {
      root = void 0;
    }
  };
  const system = {};
  const systemProps = {
    id: {
      value: systemId,
      enumerable: true
    },
    root: {
      get: () => root,
      enumerable: true
    },
    register: {
      value: register,
      enumerable: true
    },
    unregister: {
      value: unregister,
      enumerable: true
    }
  };
  Object.defineProperties(system, systemProps);
  return system;
};

// node_modules/.pnpm/@arwes+theme@1.0.0-next.25020502/node_modules/@arwes/theme/build/esm/createThemeMultiplier/createThemeMultiplier.js
var createThemeMultiplier = (settings) => (index) => {
  if (Number.isFinite(settings)) {
    const baseValue = settings;
    return baseValue * index;
  }
  if (Array.isArray(settings)) {
    if (!settings.length) {
      return 0;
    }
    const series = settings;
    const seriesIndex = Math.round(index);
    return series[seriesIndex > series.length - 1 ? series.length - 1 : seriesIndex];
  }
  const multiplier = settings;
  return multiplier(index);
};

// node_modules/.pnpm/@arwes+theme@1.0.0-next.25020502/node_modules/@arwes/theme/build/esm/createThemeUnit/createThemeUnit.js
var getSeriesItem = (list, indexProvided) => {
  const index = Math.round(indexProvided);
  return list[index > list.length - 1 ? list.length - 1 : index];
};
var createThemeUnit = (settings) => (index) => {
  if (typeof index === "string") {
    return index;
  }
  const indexes = Array.isArray(index) ? index : [index];
  if (Array.isArray(settings)) {
    if (!settings.length) {
      return "";
    }
    return indexes.map((subIndex) => {
      if (typeof subIndex === "string") {
        return subIndex;
      }
      return getSeriesItem(settings, subIndex);
    }).join(" ");
  }
  return indexes.map((subIndex) => {
    if (typeof subIndex === "string") {
      return subIndex;
    }
    return settings(subIndex);
  }).join(" ");
};

// node_modules/.pnpm/@arwes+theme@1.0.0-next.25020502/node_modules/@arwes/theme/build/esm/createThemeColor/createThemeColor.js
var minMax = (min, max) => (value) => Math.min(max, Math.max(min, value));
var minMax0to100 = minMax(0, 100);
var minMax0to230 = minMax(0, 230);
var minMax0to360 = minMax(0, 360);
var minMax0to1 = minMax(0, 1);
var searchRegExp = (string, regexp) => {
  const result = string.match(regexp);
  if (Array.isArray(result)) {
    return String(result[0]);
  }
  return null;
};
var colorOptionsDefault = {};
var fromArrayToHSL = (src, options = colorOptionsDefault) => {
  const [hue, saturation, lightness, alpha = 1] = src;
  const { alpha: alphaOverwrite = 1 } = options;
  const h = minMax0to360(hue);
  const s = minMax0to100(saturation);
  const l = minMax0to100(lightness);
  const a = minMax0to1(alpha) * minMax0to1(alphaOverwrite);
  return `hsl(${h},${s}%,${l}%,${a})`;
};
var fromArrayToRGB = (src, options = colorOptionsDefault) => {
  const [red, green, blue, alpha = 1] = src;
  const { alpha: alphaOverwrite = 1 } = options;
  const r = minMax0to100(red);
  const g = minMax0to100(green);
  const b = minMax0to100(blue);
  const a = minMax0to1(alpha) * minMax0to1(alphaOverwrite);
  return `rgb(${r}%,${g}%,${b}%,${a})`;
};
var fromArrayToLCH = (src, options = colorOptionsDefault) => {
  const [light, chroma, hue, alpha = 1] = src;
  const { alpha: alphaOverwrite = 1 } = options;
  const l = minMax0to100(light);
  const c = minMax0to230(chroma);
  const h = minMax0to360(hue);
  const a = minMax0to1(alpha) * minMax0to1(alphaOverwrite);
  return `lch(${l} ${c} ${h} / ${a})`;
};
var fromArrayToHWB = (src, options = colorOptionsDefault) => {
  const [hue, whiteness, blackness, alpha = 1] = src;
  const { alpha: alphaOverwrite = 1 } = options;
  const h = minMax0to360(hue);
  const w = minMax0to100(whiteness);
  const b = minMax0to100(blackness);
  const a = minMax0to1(alpha) * minMax0to1(alphaOverwrite);
  return `hwb(${h} ${w}% ${b}% / ${a})`;
};
var formatColor = (color, options = colorOptionsDefault) => {
  const { alpha } = options;
  if (alpha === void 0 || alpha === null) {
    return color;
  }
  if (!/^(hsla?|rgba?|lch|hwb)\([a-zA-Z0-9,./% -]+\)$/.test(color)) {
    return color;
  }
  const separators = Array.from(color.matchAll(/(,\s?|\s?\/\s?|\s)/g));
  const hasCurrentAlpha = separators.length === 3;
  const isCommaSeparated = color.includes(",");
  const alphaAdjust = minMax0to1(alpha);
  if (hasCurrentAlpha) {
    const alphaCurrentMatch = searchRegExp(color, /\d+(\.\d+)?%?\)$/);
    const isPercentage = alphaCurrentMatch.includes("%");
    let alphaCurrent = Number(alphaCurrentMatch.replace(/%?\)$/g, ""));
    alphaCurrent = isPercentage ? minMax0to100(alphaCurrent) : minMax0to1(alphaCurrent);
    return color.replace(/\d+(\.\d+)?%?\)$/, `${alphaCurrent * alphaAdjust}${isPercentage ? "%" : ""})`);
  }
  return color.replace(/\)$/, isCommaSeparated ? `,${alphaAdjust})` : ` / ${alphaAdjust})`);
};
var createThemeColorBySeries = (name, series) => (indexProvided, options) => {
  if (!series.length) {
    return "";
  }
  const index = Math.round(indexProvided);
  const color = series[index > series.length - 1 ? series.length - 1 : index];
  if (typeof color === "string") {
    return formatColor(color, options);
  }
  if (name === "rgb") {
    return fromArrayToRGB(color, options);
  }
  if (name === "lch") {
    return fromArrayToLCH(color, options);
  }
  if (name === "hwb") {
    return fromArrayToHWB(color, options);
  }
  return fromArrayToHSL(color, options);
};
var createThemeColorByFunction = (name, create) => (indexProvided, options) => {
  const index = Math.round(indexProvided);
  const color = create(index);
  if (typeof color === "string") {
    return formatColor(color, options);
  }
  if (name === "rgb") {
    return fromArrayToRGB(color, options);
  }
  if (name === "lch") {
    return fromArrayToLCH(color, options);
  }
  if (name === "hwb") {
    return fromArrayToHWB(color, options);
  }
  return fromArrayToHSL(color, options);
};
var createThemeColor = (settings) => {
  if (Array.isArray(settings)) {
    return createThemeColorBySeries("hsl", settings);
  }
  if (typeof settings === "function") {
    return createThemeColorByFunction("hsl", settings);
  }
  if (Array.isArray(settings.list)) {
    return createThemeColorBySeries(settings.color, settings.list);
  }
  const createColor = settings.create;
  if (typeof createColor !== "function") {
    throw new Error("ARWES createThemeColor requires a valid list of colors or a color creator.");
  }
  return createThemeColorByFunction(settings.color, createColor);
};

// node_modules/.pnpm/@arwes+styles@1.0.0-next.25020502/node_modules/@arwes/styles/build/esm/styleSteps/styleSteps.js
var styleSteps = (props) => {
  const { length, direction = "to right", color = "currentcolor" } = props;
  if (length < 2) {
    return color;
  }
  const total = length + length - 1;
  const steps2 = Array(total).fill(null).map((_, index) => {
    if (index % 2 === 0) {
      return [
        `${color} ${index / total * 100}%`,
        `${color} ${(index + 1) / total * 100}%`
      ].join(", ");
    }
    return [
      `transparent ${index / total * 100}%`,
      `transparent ${(index + 1) / total * 100}%`
    ].join(", ");
  }).join(", ");
  return `linear-gradient(${direction}, ${steps2})`;
};

// node_modules/.pnpm/@arwes+bleeps@1.0.0-next.25020502/node_modules/@arwes/bleeps/build/esm/constants.js
var BLEEPS_CATEGORIES = {
  background: "background",
  transition: "transition",
  interaction: "interaction",
  notification: "notification",
  voice: "voice"
};

// node_modules/.pnpm/@arwes+bleeps@1.0.0-next.25020502/node_modules/@arwes/bleeps/build/esm/createBleep/createBleepSource.js
var createBleepSource = (props) => {
  const { context, buffer, gain, loop, onStop } = props;
  const source = context.createBufferSource();
  let started = false;
  let stopped = false;
  source.buffer = buffer;
  source.loop = !!loop;
  if (loop) {
    source.loopStart = 0;
    source.loopEnd = buffer.duration;
  }
  const start = () => {
    if (!started) {
      source.start();
      started = true;
    }
  };
  const stop = () => {
    if (!stopped) {
      source.stop();
      source.disconnect(gain);
      stopped = true;
      onStop?.();
    }
  };
  source.connect(gain);
  source.onended = () => {
    if (!stopped) {
      onStop?.();
    }
  };
  return {
    get started() {
      return started;
    },
    get stopped() {
      return stopped;
    },
    start,
    stop
  };
};

// node_modules/.pnpm/@arwes+bleeps@1.0.0-next.25020502/node_modules/@arwes/bleeps/build/esm/createBleep/createBleep.js
var createBleep = (props) => {
  const isBrowser2 = typeof window !== "undefined";
  const isBrowserSafari = isBrowser2 && window.navigator.userAgent.includes("Safari") && !window.navigator.userAgent.includes("Chrome");
  const isBleepsAvailable = isBrowser2 && !!window.AudioContext;
  if (!isBleepsAvailable) {
    return null;
  }
  const { sources, preload = true, asyncLoad, loop, fetchHeaders, masterGain, maxPlaybackDelay = 0.25, muteOnWindowBlur } = props;
  let volume = props.volume ?? 1;
  let muted = !!props.muted;
  let isExternallyMuted = false;
  let isBufferLoading = false;
  let isBufferError = false;
  let isBufferPlaying = false;
  let playbackCallbackTime = 0;
  let asyncLoadCallbackId;
  let bleepSource = null;
  let buffer = null;
  let duration = 0;
  let fetchPromise;
  const context = props.context ?? new window.AudioContext();
  const gain = context.createGain();
  const callersAccount = /* @__PURE__ */ new Set();
  const fetchAudioFile = (src, type, callback) => {
    try {
      void window.fetch(src, {
        method: "GET",
        headers: fetchHeaders
      }).then((response) => {
        if (!response.ok) {
          throw new Error("ARWES bleep source could not be fetched.");
        }
        return response;
      }).then((response) => response.arrayBuffer()).then((audioArrayBuffer) => context.decodeAudioData(audioArrayBuffer)).then((audioBuffer) => {
        buffer = audioBuffer;
        duration = buffer.duration;
      }).catch((err) => {
        isBufferError = true;
        console.error(`ARWES bleep with source URL "${src}" and type "${type}" could not be used:`, err);
      }).then(() => {
        isBufferLoading = false;
        callback();
      });
    } catch (err) {
      isBufferError = true;
      isBufferLoading = false;
      console.error(`ARWES bleep throws when fetched.`);
    }
  };
  function loadAudioBuffer() {
    if (buffer || isBufferLoading || isBufferError) {
      return;
    }
    if (!sources.length) {
      isBufferError = true;
      console.error("ARWES bleep must have at least one source with a valid audio file URL and type.");
      return;
    }
    const audioTest = new window.Audio();
    const source = sources.find((source2) => {
      if (isBrowserSafari && source2.type.includes("audio/webm")) {
        return false;
      }
      const support = audioTest.canPlayType(source2.type || "");
      return support === "probably" || support === "maybe";
    });
    if (!source) {
      isBufferError = true;
      console.error(`ARWES bleep sources "${JSON.stringify(sources)}" are not supported on this navigator.`);
      return;
    }
    const { src, type } = source;
    isBufferLoading = true;
    fetchPromise = new Promise((resolve) => {
      if (asyncLoad) {
        asyncLoadCallbackId = window.setTimeout(() => {
          fetchAudioFile(src, type, resolve);
        }, 0);
      } else {
        fetchAudioFile(src, type, resolve);
      }
    });
  }
  function onUserAllowAudio() {
    window.removeEventListener("click", onUserAllowAudio);
    if (context.state === "suspended") {
      void context.resume();
    }
  }
  function onUserWindowFocus() {
    if (muteOnWindowBlur) {
      isExternallyMuted = false;
      update({});
    }
  }
  function onUserWindowBlur() {
    if (muteOnWindowBlur) {
      isExternallyMuted = true;
      update({});
    }
  }
  function play(caller) {
    const schedulePlay = () => {
      if (Date.now() <= playbackCallbackTime + maxPlaybackDelay * 1e3) {
        play(caller);
      }
    };
    playbackCallbackTime = Date.now();
    if (isBufferError) {
      return;
    }
    if (isBufferLoading) {
      void fetchPromise.then(schedulePlay);
      return;
    }
    if (!buffer) {
      loadAudioBuffer();
      void fetchPromise.then(schedulePlay);
      return;
    }
    if (caller !== void 0) {
      callersAccount.add(caller);
    }
    if (loop && isBufferPlaying) {
      return;
    }
    if (context.state === "suspended") {
      window.addEventListener("click", onUserAllowAudio);
      context.resume().then(schedulePlay).catch((err) => {
        const sourcesText = JSON.stringify(sources);
        console.error(`ARWES bleep audio context with sources "${sourcesText}" could not be resumed to be played:`, err);
      });
      return;
    }
    if (bleepSource) {
      bleepSource.stop();
    }
    bleepSource = createBleepSource({
      context,
      buffer,
      gain,
      loop,
      onStop() {
        isBufferPlaying = false;
      }
    });
    isBufferPlaying = true;
    bleepSource.start();
  }
  function stop(caller) {
    if (!buffer) {
      return;
    }
    if (caller !== void 0) {
      callersAccount.delete(caller);
    }
    const canStop = loop ? !callersAccount.size : true;
    if (canStop) {
      if (bleepSource) {
        bleepSource.stop();
      }
      isBufferPlaying = false;
    }
  }
  function load() {
    loadAudioBuffer();
  }
  function unload() {
    if (bleepSource) {
      bleepSource.stop();
    }
    bleepSource = null;
    buffer = null;
    isBufferLoading = false;
    isBufferError = false;
    isBufferPlaying = false;
    window.clearTimeout(asyncLoadCallbackId);
    window.removeEventListener("click", onUserAllowAudio);
    window.removeEventListener("focus", onUserWindowFocus);
    window.removeEventListener("blur", onUserWindowBlur);
  }
  function update(newProps) {
    if (newProps.volume !== void 0) {
      volume = Math.max(0, Math.min(1, newProps.volume));
    }
    if (newProps.muted !== void 0) {
      muted = !!newProps.muted;
    }
    const newVolume = muted || isExternallyMuted ? 0 : volume;
    if (newVolume !== gain.gain.value) {
      gain.gain.value = newVolume;
    }
  }
  const bleep = {};
  const bleepAPI = {
    duration: {
      get: () => duration,
      enumerable: true
    },
    volume: {
      get: () => volume,
      set: (volume2) => update({ volume: volume2 }),
      enumerable: true
    },
    muted: {
      get: () => muted,
      set: (muted2) => update({ muted: muted2 }),
      enumerable: true
    },
    isPlaying: {
      get: () => isBufferPlaying,
      enumerable: true
    },
    isLoaded: {
      get: () => !!buffer,
      enumerable: true
    },
    play: {
      value: play,
      enumerable: true
    },
    stop: {
      value: stop,
      enumerable: true
    },
    load: {
      value: load,
      enumerable: true
    },
    unload: {
      value: unload,
      enumerable: true
    },
    update: {
      value: update,
      enumerable: true
    }
  };
  Object.defineProperties(bleep, bleepAPI);
  if (masterGain) {
    gain.connect(masterGain);
  } else {
    gain.connect(context.destination);
  }
  update({ volume });
  if (preload) {
    loadAudioBuffer();
  }
  if (muteOnWindowBlur) {
    window.addEventListener("focus", onUserWindowFocus);
    window.addEventListener("blur", onUserWindowBlur);
  }
  return bleep;
};

// node_modules/.pnpm/@arwes+bleeps@1.0.0-next.25020502/node_modules/@arwes/bleeps/build/esm/createBleepsManager/createBleepsManager.js
var categoryNames = Object.keys(BLEEPS_CATEGORIES);
var createBleepsManager = (propsInitials) => {
  const props = structuredClone(propsInitials);
  const isBleepsAvailable = typeof window !== "undefined" && !!window.AudioContext;
  const context = isBleepsAvailable ? new window.AudioContext() : null;
  const masterGain = isBleepsAvailable ? context.createGain() : null;
  const bleepNames = new Set(Object.keys(props.bleeps));
  const bleepsInternal = {};
  const syncVolume = () => {
    const globalVolume = Math.max(0, Math.min(1, props.master?.volume ?? 1));
    masterGain.gain.setValueAtTime(globalVolume, context.currentTime);
  };
  const getBleepProps = (bleepName) => {
    const bleepProps = props.bleeps[bleepName];
    const category = bleepProps.category ?? props.common?.category;
    const categoryProps = category ? props.categories?.[category] : null;
    const generalProps = { ...props.common, ...categoryProps };
    return { ...generalProps, ...bleepProps, context, masterGain };
  };
  const unload = () => {
    if (!isBleepsAvailable) {
      return;
    }
    bleepNames.forEach((bleepName) => {
      bleepsInternal[bleepName]?.unload();
    });
  };
  const updateProps = (newProps) => {
    if (newProps.master) {
      props.master = { ...props.master, ...filterProps(newProps.master) };
    }
    if (newProps.common) {
      props.common = { ...props.common, ...filterProps(newProps.common) };
    }
    const newCategoriesProps = newProps.categories;
    if (newCategoriesProps) {
      categoryNames.forEach((category) => {
        props.categories = props.categories ?? {};
        props.categories[category] = {
          ...props.categories?.[category],
          ...newCategoriesProps[category]
        };
      });
    }
    const newBleepsProps = newProps.bleeps;
    if (newBleepsProps) {
      Object.keys(newBleepsProps).forEach((key) => bleepNames.add(key));
      bleepNames.forEach((bleepName) => {
        props.bleeps[bleepName] = {
          ...props.bleeps[bleepName],
          ...newBleepsProps[bleepName]
        };
      });
    }
  };
  const updateBleeps = () => {
    bleepNames.forEach((bleepName) => {
      const bleepProps = getBleepProps(bleepName);
      if (bleepProps.disabled) {
        const bleep = bleepsInternal[bleepName];
        if (bleep) {
          bleep.muted = true;
          bleep.unload();
        }
        bleepsInternal[bleepName] = null;
      } else {
        const bleep = bleepsInternal[bleepName];
        if (bleep) {
          bleep.update(bleepProps);
        } else {
          bleepsInternal[bleepName] = createBleep(bleepProps);
        }
      }
    });
  };
  const update = (newProps) => {
    if (!isBleepsAvailable) {
      return;
    }
    updateProps(newProps);
    syncVolume();
    updateBleeps();
  };
  if (isBleepsAvailable) {
    masterGain.connect(context.destination);
    syncVolume();
    updateBleeps();
  }
  const bleeps = new Proxy(bleepsInternal, {
    get(obj, key) {
      const bleepName = key;
      if (bleepNames.has(bleepName)) {
        return obj[bleepName];
      }
      console.error(`ARWES bleeps manager bleep "${bleepName}" was not found and can not be played.`);
      return null;
    }
  });
  return Object.freeze({ bleeps, unload, update });
};

// node_modules/.pnpm/@arwes+text@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/text/build/esm/internal/walkTextNodes/walkTextNodes.js
var walkTextNodes = (node, callback) => {
  Array.from(node.childNodes).forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      callback(child);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      walkTextNodes(child, callback);
    }
  });
};

// node_modules/.pnpm/@arwes+text@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/text/build/esm/internal/setTextNodesContent/setTextNodesContent.js
var setTextNodesContent = (textNodes, texts, contentLength, onCurrentNode) => {
  let markerLength = 0;
  for (let index = 0; index < textNodes.length; index++) {
    const textNode = textNodes[index];
    const text = texts[index];
    const newMarkerLength = markerLength + text.length;
    if (newMarkerLength <= contentLength) {
      if (textNode.textContent !== text) {
        textNode.textContent = text;
      }
      if (newMarkerLength === contentLength) {
        onCurrentNode?.(textNode);
      }
    } else if (markerLength < contentLength) {
      const currentTextNodeLengthPortion = contentLength - markerLength;
      const currentTextNodeText = text.substring(0, currentTextNodeLengthPortion);
      if (textNode.textContent !== currentTextNodeText) {
        textNode.textContent = currentTextNodeText;
      }
      onCurrentNode?.(textNode);
    } else {
      if (textNode.textContent !== "") {
        textNode.textContent = "";
      }
      if (contentLength === 0 && index === 0) {
        onCurrentNode?.(textNode);
      }
    }
    markerLength = newMarkerLength;
  }
};

// node_modules/.pnpm/@arwes+text@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/text/build/esm/animateTextSequence/animateTextSequence.js
var animateTextSequence = (props) => {
  const { rootElement, contentElement, duration, easing: easing2 = "linear", blink = true, blinkDuration = 0.1, isEntering = true, hideOnExited = true, hideOnEntered } = filterProps(props);
  if (!rootElement || !contentElement) {
    throw new Error("ARWES animateTextSequence() requires valid DOM elements.");
  }
  let blinkElement;
  let blinkAnimation;
  const cloneElement = contentElement.cloneNode(true);
  Object.assign(cloneElement.style, {
    position: "absolute",
    inset: 0,
    visibility: "visible",
    opacity: 1
  });
  if (blink) {
    blinkElement = document.createElement("span");
    blinkElement.classList.add("arwes-text__blink");
    blinkElement.innerHTML = "&#9614;";
    Object.assign(blinkElement.style, {
      position: "relative",
      display: "inline-block",
      width: 0,
      height: 0,
      lineHeight: "0",
      color: "inherit"
    });
  }
  const textNodes = [];
  const texts = [];
  walkTextNodes(cloneElement, (child) => {
    textNodes.push(child);
    texts.push(child.textContent || "");
    if (isEntering) {
      child.textContent = "";
    }
  });
  const length = texts.join("").length;
  rootElement.appendChild(cloneElement);
  contentElement.style.visibility = "hidden";
  if (blink && blinkElement) {
    const blinkAnimationEaseColor = easeAmong([0, 1, 2]);
    const blinkAnimationColors = ["transparent", "inherit", "transparent"];
    blinkAnimation = createAnimation2({
      duration: blinkDuration,
      easing: "linear",
      repeat: Infinity,
      onUpdate(progress2) {
        const index = Math.round(blinkAnimationEaseColor(progress2));
        blinkElement.style.color = blinkAnimationColors[index];
      }
    });
  }
  return createAnimation2({
    duration,
    easing: easing2,
    direction: isEntering ? "normal" : "reverse",
    onUpdate: (progress2) => {
      const newLength = Math.round(progress2 * length);
      setTextNodesContent(textNodes, texts, newLength, (textNode) => {
        if (blinkElement && textNode.parentNode && textNode.parentNode !== blinkElement.parentNode) {
          textNode.parentNode.appendChild(blinkElement);
        }
      });
    },
    onFinish: () => {
      contentElement.style.visibility = isEntering && hideOnEntered || !isEntering && hideOnExited ? "hidden" : "";
      cloneElement.remove();
      blinkAnimation?.cancel();
    },
    onCancel: () => {
      contentElement.style.visibility = "";
      cloneElement.remove();
      blinkAnimation?.cancel();
    }
  });
};

// node_modules/.pnpm/@arwes+text@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/text/build/esm/animateTextDecipher/animateTextDecipher.js
var CIPHERED_CHARACTERS = "    ----____abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var animateTextDecipher = (props) => {
  const { rootElement, contentElement, duration, easing: easing2 = "linear", isEntering = true, hideOnExited = true, hideOnEntered, characters = CIPHERED_CHARACTERS } = filterProps(props);
  if (!rootElement || !contentElement) {
    throw new Error("ARWES animateTextDecipher() requires valid DOM elements.");
  }
  const cloneElement = contentElement.cloneNode(true);
  Object.assign(cloneElement.style, {
    position: "absolute",
    inset: 0,
    visibility: "visible",
    opacity: 1
  });
  const textNodes = [];
  const textsReal = [];
  walkTextNodes(cloneElement, (child) => {
    textNodes.push(child);
    textsReal.push(child.textContent || "");
  });
  const length = textsReal.join("").length;
  const indexes = randomizeList(Array(length).fill(null).map((_, i) => i));
  const deciphered = {};
  rootElement.appendChild(cloneElement);
  contentElement.style.visibility = "hidden";
  return createAnimation2({
    duration,
    easing: easing2,
    direction: isEntering ? "normal" : "reverse",
    onUpdate: (progress2) => {
      const newPositionsLength = Math.round(length * progress2);
      for (let index = 0; index < length; index++) {
        deciphered[indexes[index]] = index < newPositionsLength;
      }
      const textsCurrent = textsReal.map((text) => text.split("").map((char, index) => {
        if (char === " ")
          return " ";
        if (deciphered[index])
          return char;
        return characters[Math.round(Math.random() * (characters.length - 1))];
      }).join(""));
      setTextNodesContent(textNodes, textsCurrent, length);
    },
    onFinish: () => {
      contentElement.style.visibility = isEntering && hideOnEntered || !isEntering && hideOnExited ? "hidden" : "";
      cloneElement.remove();
    },
    onCancel: () => {
      contentElement.style.visibility = "";
      cloneElement.remove();
    }
  });
};

// node_modules/.pnpm/@arwes+text@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/text/build/esm/getAnimationTextDuration/getAnimationTextDuration.js
var getAnimationTextDuration = (props) => {
  const { length, maxDuration: maxDuration2 = 4, charactersPerSecond = 100 } = props;
  const realDuration = 1e3 / charactersPerSecond * length / 1e3;
  return Math.min(realDuration, maxDuration2);
};

// node_modules/.pnpm/@arwes+bgs@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/bgs/build/esm/createBackgroundDots/getDistanceFromOriginToCornerProgress.js
var getDistanceBetweenTwoPoints = (x1, y1, x2, y2) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};
var getDistanceFromOriginToCornerProgress = (width, height, x1, y1, origin) => {
  switch (origin) {
    case "left":
      return x1 / width;
    case "right":
      return 1 - x1 / width;
    case "top":
      return y1 / height;
    case "bottom":
      return 1 - y1 / height;
    case "center":
      origin = [0.5, 0.5];
      break;
  }
  const [x2Percentage, y2Percentage] = origin;
  const x2 = width * x2Percentage;
  const y2 = height * y2Percentage;
  const distanceFromOrigin = getDistanceBetweenTwoPoints(x1, y1, x2, y2);
  const x3 = x2 < width / 2 ? width : 0;
  const y3 = y2 < height / 2 ? height : 0;
  const maxDistanceToCorner = getDistanceBetweenTwoPoints(x2, y2, x3, y3);
  return distanceFromOrigin / maxDistanceToCorner;
};

// node_modules/.pnpm/@arwes+bgs@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/bgs/build/esm/createBackgroundDots/createBackgroundDots.js
var defaultProps10 = {
  color: "#777",
  type: "box",
  distance: 30,
  size: 4,
  crossSize: 1,
  origin: "center",
  originInverted: false,
  easing: easing.inSine
};
var createBackgroundDots = (props) => {
  const { canvas, animator } = props;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { cancel: () => {
    } };
  }
  const dpr = Math.min(window.devicePixelRatio || 2, 2);
  let transitionControl;
  let resizeObserver;
  let unsubscribe;
  const getSettings = () => ({
    ...defaultProps10,
    ...props.settingsRef.current
  });
  const resize = () => {
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  };
  const draw2 = (isEntering, progress2) => {
    if (!ctx) {
      return;
    }
    const { color, type, distance, size: size2, crossSize, origin, originInverted } = getSettings();
    const { width, height } = canvas;
    const xLength = 1 + Math.floor(width / distance);
    const yLength = 1 + Math.floor(height / distance);
    const xMargin = width % distance;
    const yMargin = height % distance;
    ctx.clearRect(0, 0, width, height);
    for (let xIndex = 0; xIndex < xLength; xIndex++) {
      const x = xMargin / 2 + xIndex * distance;
      for (let yIndex = 0; yIndex < yLength; yIndex++) {
        const y = yMargin / 2 + yIndex * distance;
        const distanceFromOriginProgress = getDistanceFromOriginToCornerProgress(width / dpr, height / dpr, x, y, origin);
        const distancePercentage = isEntering && originInverted || !isEntering && !originInverted ? 1 - distanceFromOriginProgress : distanceFromOriginProgress;
        const alphaProgress = progress2 / distancePercentage;
        const alpha = Math.max(0, Math.min(1, alphaProgress));
        ctx.beginPath();
        ctx.globalAlpha = isEntering ? alpha : 1 - alpha;
        if (type === "circle") {
          ctx.arc(x, y, size2, 0, 2 * Math.PI);
        } else if (type === "cross") {
          const l = size2 / 2;
          const b = crossSize / 2;
          ctx.moveTo(x - l, y + b);
          ctx.lineTo(x - l, y - b);
          ctx.lineTo(x - b, y - b);
          ctx.lineTo(x - b, y - l);
          ctx.lineTo(x + b, y - l);
          ctx.lineTo(x + b, y - b);
          ctx.lineTo(x + l, y - b);
          ctx.lineTo(x + l, y + b);
          ctx.lineTo(x + b, y + b);
          ctx.lineTo(x + b, y + l);
          ctx.lineTo(x - b, y + l);
          ctx.lineTo(x - b, y + b);
        } else {
          ctx.rect(x - size2 / 2, y - size2 / 2, size2, size2);
        }
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
      }
    }
  };
  const setup = () => {
    canvas.style.opacity = "1";
    if (typeof window !== "undefined" && !resizeObserver) {
      resizeObserver = new window.ResizeObserver(() => {
        resize();
        if (animator) {
          switch (animator.state) {
            case "entered": {
              draw2(true, 1);
              break;
            }
          }
        } else {
          draw2(true, 1);
        }
      });
      resizeObserver.observe(canvas);
      resize();
    }
  };
  const stop = () => {
    canvas.style.opacity = "0";
    resizeObserver?.disconnect();
    resizeObserver = void 0;
    transitionControl?.cancel();
    transitionControl = void 0;
  };
  const start = () => {
    if (!animator) {
      setup();
      draw2(true, 1);
      return;
    }
    unsubscribe = animator.subscribe((node) => {
      const settings = getSettings();
      switch (node.state) {
        case "entering": {
          setup();
          transitionControl?.cancel();
          transitionControl = createAnimation2({
            duration: node.settings.duration.enter,
            easing: settings.easing,
            onUpdate(progress2) {
              draw2(true, progress2);
            }
          });
          break;
        }
        case "entered": {
          setup();
          transitionControl?.cancel();
          draw2(true, 1);
          break;
        }
        case "exiting": {
          setup();
          transitionControl?.cancel();
          transitionControl = createAnimation2({
            duration: node.settings.duration.exit,
            easing: settings.easing,
            onUpdate(progress2) {
              draw2(false, progress2);
            }
          });
          break;
        }
        case "exited": {
          stop();
          break;
        }
      }
    });
  };
  const cancel = () => {
    unsubscribe?.();
    stop();
  };
  start();
  return Object.freeze({ cancel });
};

// node_modules/.pnpm/@arwes+bgs@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/bgs/build/esm/createBackgroundPuffs/createBackgroundPuffs.js
var defaultProps11 = {
  color: "#777",
  quantity: 10,
  padding: 50,
  xOffset: [0, 0],
  yOffset: [-10, -100],
  radiusInitial: 4,
  radiusOffset: [4, 40],
  sets: 5
};
var minmaxOverflow01 = (value) => Math.min(1, Math.max(0, value === 1 ? 1 : value % 1));
var createBackgroundPuffs = (props) => {
  const { canvas, animator } = props;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { cancel: () => {
    } };
  }
  let resizeObserver;
  let transitionControl;
  let runningControl;
  let unsubscribe;
  let runningControlTimeoutId;
  let puffsSets = [];
  const getSettings = () => ({
    ...defaultProps11,
    ...props.settingsRef.current
  });
  const createPuff = (width, height) => {
    const { padding, xOffset, yOffset, radiusInitial, radiusOffset } = getSettings();
    const x = padding + Math.random() * (width - padding * 2);
    const y = padding + Math.random() * (height - padding * 2);
    const r = radiusInitial;
    const xo = xOffset[0] + Math.random() * xOffset[1];
    const yo = yOffset[0] + Math.random() * yOffset[1];
    const ro = radiusOffset[0] + Math.random() * radiusOffset[1];
    return { x, y, r, xo, yo, ro };
  };
  const createPuffsSets = (width, height) => {
    const { quantity, sets } = getSettings();
    const puffsSetQuantity = Math.round(quantity / sets);
    return Array(sets).fill(null).map(() => Array(puffsSetQuantity).fill(null).map(() => createPuff(width, height)));
  };
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 2, 2);
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    puffsSets = createPuffsSets(width, height);
  };
  const drawPuffs = (puffs, progress2) => {
    const { color } = getSettings();
    ctx.globalAlpha = progress2 <= 0.5 ? progress2 * 2 : -2 * progress2 + 2;
    puffs.forEach((puff) => {
      const x = puff.x + progress2 * puff.xo;
      const y = puff.y + progress2 * puff.yo;
      const r = puff.r + progress2 * puff.ro;
      const grd = ctx.createRadialGradient(x, y, 0, x, y, r);
      grd.addColorStop(0, color);
      grd.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.fillStyle = grd;
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    });
  };
  const draw2 = (progress2) => {
    const { sets } = getSettings();
    const { width, height } = canvas;
    const puffsSetOffset = 1 / sets;
    ctx.clearRect(0, 0, width, height);
    puffsSets.forEach((puffs, index) => {
      const puffsOffset = puffsSetOffset * index;
      const puffsProgress = minmaxOverflow01(progress2 + puffsOffset);
      drawPuffs(puffs, easing.outSine(puffsProgress));
    });
  };
  const run = () => {
    if (!animator) {
      return;
    }
    const { duration: { interval = 2, intervalPause = 0 } } = animator.settings;
    runningControl?.cancel();
    runningControl = createAnimation2({
      duration: interval,
      easing: "linear",
      onUpdate(progress2) {
        draw2(progress2);
      },
      onFinish() {
        const emptyDuration = intervalPause * 1e3;
        window.clearTimeout(runningControlTimeoutId);
        runningControlTimeoutId = window.setTimeout(run, emptyDuration);
      }
    });
  };
  const setup = () => {
    if (typeof window !== "undefined" && !resizeObserver) {
      resizeObserver = new window.ResizeObserver(() => {
        resize();
        if (!animator) {
          draw2(1);
        }
      });
      resizeObserver.observe(canvas);
      resize();
    }
  };
  const stop = () => {
    resizeObserver?.disconnect();
    resizeObserver = void 0;
    transitionControl?.cancel();
    transitionControl = void 0;
    runningControl?.cancel();
    runningControl = void 0;
    window.clearTimeout(runningControlTimeoutId);
    runningControlTimeoutId = void 0;
  };
  const start = () => {
    if (!animator) {
      setup();
      draw2(1);
      canvas.style.opacity = "1";
      return;
    }
    unsubscribe = animator.subscribe((node) => {
      switch (node.state) {
        case "entering": {
          setup();
          if (runningControl === void 0) {
            run();
          }
          transitionControl?.cancel();
          transitionControl = createAnimation2({
            duration: node.settings.duration.enter,
            onUpdate(progress2) {
              canvas.style.opacity = String(progress2);
            }
          });
          break;
        }
        case "entered": {
          setup();
          if (runningControl === void 0) {
            run();
          }
          canvas.style.opacity = "1";
          break;
        }
        case "exiting": {
          transitionControl?.cancel();
          transitionControl = createAnimation2({
            duration: node.settings.duration.exit,
            onUpdate(progress2) {
              canvas.style.opacity = String(1 - progress2);
            }
          });
          break;
        }
        case "exited": {
          stop();
          canvas.style.opacity = "0";
          break;
        }
      }
    });
  };
  const cancel = () => {
    unsubscribe?.();
    stop();
    canvas.style.opacity = "0";
  };
  start();
  return Object.freeze({ cancel });
};

// node_modules/.pnpm/@arwes+bgs@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/bgs/build/esm/createBackgroundGridLines/createBackgroundGridLines.js
var defaultProps12 = {
  lineWidth: 1,
  lineColor: "#777",
  horizontalLineDash: [4],
  verticalLineDash: [],
  distance: 30
};
var createBackgroundGridLines = (props) => {
  const { canvas, animator } = props;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { cancel: () => {
    } };
  }
  let resizeObserver;
  let transitionControl;
  let unsubscribe;
  const getSettings = () => ({
    ...defaultProps12,
    ...props.settingsRef.current
  });
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 2, 2);
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  };
  const draw2 = () => {
    const { lineWidth, lineColor, horizontalLineDash, verticalLineDash, distance } = getSettings();
    const { width, height } = canvas;
    const xLength = 1 + Math.floor(width / distance);
    const yLength = 1 + Math.floor(height / distance);
    const xMargin = width % distance;
    const yMargin = height % distance;
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.setLineDash(horizontalLineDash);
    for (let yIndex = 0; yIndex < yLength; yIndex++) {
      const y = yMargin / 2 + yIndex * distance;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
      ctx.closePath();
    }
    ctx.setLineDash(verticalLineDash);
    for (let xIndex = 0; xIndex < xLength; xIndex++) {
      const x = xMargin / 2 + xIndex * distance;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
      ctx.closePath();
    }
  };
  const setup = () => {
    if (typeof window !== "undefined" && !resizeObserver) {
      resizeObserver = new window.ResizeObserver(() => {
        resize();
        draw2();
      });
      resizeObserver.observe(canvas);
      resize();
    }
  };
  const stop = () => {
    resizeObserver?.disconnect();
    resizeObserver = void 0;
    transitionControl?.cancel();
    transitionControl = void 0;
  };
  const start = () => {
    if (!animator) {
      setup();
      draw2();
      canvas.style.opacity = "1";
      return;
    }
    unsubscribe = animator.subscribe((node) => {
      switch (node.state) {
        case "entering": {
          setup();
          draw2();
          transitionControl = createAnimation2({
            duration: node.settings.duration.enter,
            onUpdate(progress2) {
              canvas.style.opacity = String(progress2);
            }
          });
          break;
        }
        case "entered": {
          setup();
          draw2();
          canvas.style.opacity = "1";
          break;
        }
        case "exiting": {
          transitionControl = createAnimation2({
            duration: node.settings.duration.exit,
            onUpdate(progress2) {
              canvas.style.opacity = String(1 - progress2);
            }
          });
          break;
        }
        case "exited": {
          stop();
          canvas.style.opacity = "0";
          break;
        }
      }
    });
  };
  const cancel = () => {
    unsubscribe?.();
    stop();
    canvas.style.opacity = "0";
  };
  start();
  return Object.freeze({ cancel });
};

// node_modules/.pnpm/@arwes+bgs@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/bgs/build/esm/createBackgroundMovingLines/createBackgroundMovingLines.js
var defaultProps13 = {
  lineWidth: 1,
  lineColor: "#777",
  distance: 30,
  sets: 5
};
var random = (min, max) => (max - min) * Math.random();
var minmaxOverflow012 = (value) => Math.min(1, Math.max(0, value === 1 ? 1 : value % 1));
var createLinesSet = (config) => {
  const { distance, positionsLength, margin, size: size2 } = config;
  const linesLength = Math.floor(random(0.1, 0.5) * positionsLength);
  const positions = Array(positionsLength).fill(0).map((_, i) => i);
  const positionsRandom = randomizeList(positions);
  const positionsSelected = positionsRandom.slice(0, linesLength);
  return positionsSelected.map((position) => {
    const axis1 = margin / 2 + position * distance;
    const axis2Initial = Math.random() * (size2 / 2);
    const length = Math.floor(random(0.1, 0.5) * size2);
    return { axis1, axis2Initial, length };
  });
};
var createBackgroundMovingLines = (props) => {
  const { canvas, animator } = props;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { cancel: () => {
    } };
  }
  let resizeObserver;
  let transitionControl;
  let runningControl;
  let unsubscribe;
  let linesSets = [];
  const getSettings = () => ({
    ...defaultProps13,
    ...props.settingsRef.current
  });
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 2, 2);
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  };
  const draw2 = (intervalProgress) => {
    const { lineWidth, lineColor, distance, sets: linesSetsLength } = getSettings();
    const { width, height } = canvas;
    const isResized = canvas.width !== width || canvas.height !== height;
    const axis1Size = width;
    const axis2Size = height;
    const positionsLength = 1 + Math.floor(axis1Size / distance);
    const margin = axis1Size % distance;
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.shadowBlur = lineWidth;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = lineColor;
    if (linesSets.length === 0 || isResized) {
      linesSets = Array(linesSetsLength).fill(null).map(() => createLinesSet({ positionsLength, margin, distance, size: axis2Size }));
    }
    linesSets.forEach((linesSet, linesSetIndex) => {
      const linesSetProgressOffset = 1 / linesSetsLength * linesSetIndex;
      const progress2 = minmaxOverflow012(intervalProgress + linesSetProgressOffset);
      const progressEase = easing.inOutCubic(progress2);
      linesSet.forEach((line) => {
        const { axis1, axis2Initial, length } = line;
        const axis2Move = axis2Size * 2 * progressEase - axis2Size;
        ctx.beginPath();
        ctx.moveTo(axis1, axis2Size - (axis2Initial + axis2Move));
        ctx.lineTo(axis1, axis2Size - (axis2Initial + length + axis2Move));
        ctx.stroke();
        ctx.closePath();
      });
    });
  };
  const run = () => {
    if (!animator) {
      return;
    }
    const { duration: { interval = 10 } } = animator.settings;
    runningControl?.cancel();
    runningControl = createAnimation2({
      duration: interval,
      easing: "linear",
      repeat: Infinity,
      onUpdate: draw2
    });
  };
  const setup = () => {
    if (typeof window !== "undefined" && !resizeObserver) {
      resizeObserver = new window.ResizeObserver(() => {
        resize();
        if (!animator) {
          draw2(1);
        }
      });
      resizeObserver.observe(canvas);
      resize();
    }
  };
  const stop = () => {
    resizeObserver?.disconnect();
    resizeObserver = void 0;
    transitionControl?.cancel();
    transitionControl = void 0;
    runningControl?.cancel();
    runningControl = void 0;
  };
  const start = () => {
    if (!animator) {
      setup();
      draw2(1);
      canvas.style.opacity = "1";
      return;
    }
    unsubscribe = animator.subscribe((node) => {
      switch (node.state) {
        case "entering": {
          setup();
          if (runningControl === void 0) {
            run();
          }
          transitionControl = createAnimation2({
            duration: node.settings.duration.enter,
            onUpdate(progress2) {
              canvas.style.opacity = String(progress2);
            }
          });
          break;
        }
        case "entered": {
          setup();
          if (runningControl === void 0) {
            run();
          }
          canvas.style.opacity = "1";
          break;
        }
        case "exiting": {
          transitionControl = createAnimation2({
            duration: node.settings.duration.exit,
            onUpdate(progress2) {
              canvas.style.opacity = String(1 - progress2);
            }
          });
          break;
        }
        case "exited": {
          stop();
          canvas.style.opacity = "0";
          break;
        }
      }
    });
  };
  const cancel = () => {
    unsubscribe?.();
    stop();
    canvas.style.opacity = "0";
  };
  start();
  return Object.freeze({ cancel });
};

// node_modules/.pnpm/@arwes+effects@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/effects/build/esm/createEffectIlluminator/createEffectIlluminator.js
var createEffectIlluminator = (props) => {
  const { container, color = "hsl(0 0% 50% / 5%)", size: size2 = 300, className, style: style3 } = props;
  const element = document.createElement("div");
  element.role = "presentation";
  element.dataset.name = "illuminator";
  if (className) {
    element.className = className;
  }
  Object.assign(element.style, {
    position: "absolute",
    left: 0,
    top: 0,
    width: `${size2}px`,
    height: `${size2}px`,
    background: `radial-gradient(closest-side, ${color}, transparent)`,
    opacity: 0,
    transition: "opacity 200ms ease-out",
    pointerEvents: "none",
    ...style3
  });
  let bounds;
  let x;
  let y;
  let isVisible;
  let opacity;
  const onMove = (event) => {
    bounds = container.getBoundingClientRect();
    x = event.clientX - bounds.left;
    y = event.clientY - bounds.top;
    isVisible = x >= -(size2 / 2) && x <= bounds.width + size2 / 2 && y >= -(size2 / 2) && y <= bounds.height + size2 / 2;
    opacity = isVisible ? "1" : "0";
    if (element.style.opacity !== opacity) {
      element.style.opacity = opacity;
    }
    if (isVisible) {
      element.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    }
  };
  const onHide = () => {
    if (element.style.opacity !== "0") {
      element.style.opacity = "0";
    }
  };
  container.appendChild(element);
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseleave", onHide);
  const cancel = () => {
    element.remove();
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseleave", onHide);
  };
  return Object.freeze({ cancel });
};

// node_modules/.pnpm/@arwes+effects@1.0.0-next.25020502_motion@10.18.0/node_modules/@arwes/effects/build/esm/createEffectIlluminatorSVG/createEffectIlluminatorSVG.js
var createEffectIlluminatorSVG = (props) => {
  const { svg, container, color = "hsl(0 0% 50% / 5%)", size: size2 = 300, className, style: style3 } = props;
  const element = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const gradientId = `illuminator-${Math.random()}`;
  element.dataset.name = "illuminator";
  if (className) {
    element.classList.add(className);
  }
  Object.assign(element.style, style3);
  element.innerHTML = `
    <defs>
      <radialGradient id="${gradientId}">
        <stop offset="0%" stop-color="${color}" />
        <stop offset="100%" stop-color="transparent" />
      </radialGradient>
    </defs>
    <circle
      r="${size2 / 2}"
      style="
        position: absolute;
        transition: opacity 200ms ease-out;
        opacity: 0;
      "
      fill="url(#${gradientId})"
    />
  `;
  const illuminator = element.querySelector("circle");
  illuminator.style.transform = `translate(-${size2 / 2}px, -${size2 / 2}px)`;
  const onMove = (event) => {
    const bounds = svg.getBoundingClientRect();
    const x = event.clientX - bounds.left + size2 / 2;
    const y = event.clientY - bounds.top + size2 / 2;
    illuminator.style.opacity = "1";
    illuminator.setAttribute("cx", String(x));
    illuminator.setAttribute("cy", String(y));
  };
  const onHide = () => {
    illuminator.style.opacity = "0";
  };
  container.appendChild(element);
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseleave", onHide);
  const cancel = () => {
    element.remove();
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseleave", onHide);
  };
  return Object.freeze({ cancel });
};

// node_modules/.pnpm/@arwes+react-tools@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-tools/build/esm/memo/memo.js
var import_react = __toESM(require_window_mcraft(), 1);
var memo = (component, comparator) => {
  return (0, import_react.memo)(component, comparator);
};

// node_modules/.pnpm/@arwes+react-tools@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-tools/build/esm/mergeRefs/mergeRefs.js
var mergeRefs = (...refs) => {
  return (value) => {
    refs.filter(Boolean).forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref && typeof ref === "object") {
        ref.current = value;
      }
    });
  };
};

// node_modules/.pnpm/@arwes+react-tools@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-tools/build/esm/NoSSR/NoSSR.js
var import_react2 = __toESM(require_window_mcraft(), 1);

// node_modules/.pnpm/@arwes+react-tools@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-tools/build/esm/useUpdateEffect/useUpdateEffect.js
var import_react3 = __toESM(require_window_mcraft(), 1);
var useUpdateEffect = (callback, deps) => {
  const isFirstRenderRef = (0, import_react3.useRef)(true);
  (0, import_react3.useEffect)(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    callback();
  }, deps);
};

// node_modules/.pnpm/@arwes+react-animator@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-animator/build/esm/Animator/Animator.js
var import_react6 = __toESM(require_window_mcraft(), 1);

// node_modules/.pnpm/@arwes+react-animator@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-animator/build/esm/internal/AnimatorContext/AnimatorContext.js
var import_react4 = __toESM(require_window_mcraft(), 1);
var AnimatorContext = (0, import_react4.createContext)(void 0);

// node_modules/.pnpm/@arwes+react-animator@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-animator/build/esm/internal/AnimatorGeneralContext/AnimatorGeneralContext.js
var import_react5 = __toESM(require_window_mcraft(), 1);
var AnimatorGeneralContext = (0, import_react5.createContext)(void 0);

// node_modules/.pnpm/@arwes+react-animator@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-animator/build/esm/Animator/Animator.js
var setNodeRefValue = (nodeRef, node) => {
  if (typeof nodeRef === "function") {
    nodeRef(node);
  } else if (nodeRef) {
    nodeRef.current = node;
  }
};
var Animator = (props) => {
  const { root, disabled, dismissed, unmountOnExited, unmountOnEntered, unmountOnDisabled, refreshOn, nodeRef, children, ...settings } = props;
  const parentAnimatorInterface = (0, import_react6.useContext)(AnimatorContext);
  const animatorGeneralInterface = (0, import_react6.useContext)(AnimatorGeneralContext);
  const settingsRef = (0, import_react6.useRef)(settings);
  const prevAnimatorRef = (0, import_react6.useRef)(void 0);
  const isMountedRef = (0, import_react6.useRef)(true);
  settingsRef.current = settings;
  const animatorGeneralSettings = animatorGeneralInterface?.getSettings();
  const isRoot = !!root || !parentAnimatorInterface;
  const isDismissed = dismissed !== void 0 ? !!dismissed : !!animatorGeneralSettings?.dismissed;
  const isDisabled = disabled !== void 0 ? !!disabled : !!animatorGeneralSettings?.disabled;
  const animatorInterface = (0, import_react6.useMemo)(() => {
    if (prevAnimatorRef.current) {
      prevAnimatorRef.current.system.unregister(prevAnimatorRef.current.node);
    }
    if (isDismissed) {
      setNodeRefValue(nodeRef, null);
      return parentAnimatorInterface;
    }
    if (isDisabled) {
      setNodeRefValue(nodeRef, null);
      return void 0;
    }
    const system = isRoot ? createAnimatorSystem() : parentAnimatorInterface.system;
    const getSettings = () => {
      const animatorGeneralSettings2 = animatorGeneralInterface?.getSettings();
      const duration = {
        ...animatorGeneralSettings2?.duration,
        ...settingsRef.current.duration
      };
      return {
        ...animatorGeneralSettings2,
        ...settingsRef.current,
        duration
      };
    };
    const node = isRoot ? system.register(void 0, { getSettings }) : system.register(parentAnimatorInterface.node, { getSettings });
    setNodeRefValue(nodeRef, node);
    return Object.freeze({ system, node });
  }, [parentAnimatorInterface, isRoot, isDisabled, isDismissed]);
  prevAnimatorRef.current = animatorInterface;
  const [isEnabledToUnmount, setIsEnabledToUnmount] = (0, import_react6.useState)(() => unmountOnExited && animatorInterface?.node.state === ANIMATOR_STATES.exited || unmountOnEntered && animatorInterface?.node.state === ANIMATOR_STATES.entered || unmountOnDisabled && isDisabled);
  (0, import_react6.useEffect)(() => {
    return () => {
      isMountedRef.current = false;
      if (prevAnimatorRef.current) {
        prevAnimatorRef.current.system.unregister(prevAnimatorRef.current.node);
      }
    };
  }, []);
  (0, import_react6.useEffect)(() => {
    if (!animatorInterface) {
      return;
    }
    queueMicrotask(() => {
      if (!isMountedRef.current) {
        return;
      }
      animatorInterface.node.send(ANIMATOR_ACTIONS.setup);
    });
  }, [!!animatorInterface]);
  const isFirstRender1Ref = (0, import_react6.useRef)(true);
  (0, import_react6.useEffect)(() => {
    if (isFirstRender1Ref.current) {
      isFirstRender1Ref.current = false;
      return;
    }
    if (!animatorInterface) {
      return;
    }
    queueMicrotask(() => {
      if (!isMountedRef.current) {
        return;
      }
      animatorInterface.node.send(ANIMATOR_ACTIONS.update);
    });
  }, [settings.active, settings.manager, settings.merge, settings.combine]);
  (0, import_react6.useEffect)(() => {
    if (animatorInterface) {
      const cancelSubscription = animatorInterface.node.subscribe((node) => {
        setIsEnabledToUnmount(unmountOnExited && node.state === ANIMATOR_STATES.exited || unmountOnEntered && node.state === ANIMATOR_STATES.entered);
      });
      return () => cancelSubscription();
    } else {
      setIsEnabledToUnmount(unmountOnDisabled);
    }
  }, [animatorInterface, unmountOnExited, unmountOnEntered, unmountOnDisabled]);
  const isFirstRender2Ref = (0, import_react6.useRef)(true);
  (0, import_react6.useEffect)(() => {
    if (isFirstRender2Ref.current) {
      isFirstRender2Ref.current = false;
      return;
    }
    if (animatorInterface) {
      queueMicrotask(() => {
        if (!isMountedRef.current) {
          return;
        }
        animatorInterface.node.send(ANIMATOR_ACTIONS.refresh);
      });
    }
  }, refreshOn ?? []);
  return (0, import_react6.createElement)(AnimatorContext.Provider, { value: animatorInterface }, isEnabledToUnmount ? null : children);
};

// node_modules/.pnpm/@arwes+react-animator@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-animator/build/esm/Animator/index.js
var Animator2 = memo(Animator);

// node_modules/.pnpm/@arwes+react-animator@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-animator/build/esm/useAnimator/useAnimator.js
var import_react7 = __toESM(require_window_mcraft(), 1);
var useAnimator = () => {
  return (0, import_react7.useContext)(AnimatorContext);
};

// node_modules/.pnpm/@arwes+react-animator@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-animator/build/esm/AnimatorGeneralProvider/AnimatorGeneralProvider.js
var import_react8 = __toESM(require_window_mcraft(), 1);
var AnimatorGeneralProvider = (props) => {
  const { children, ...animatorGeneralSettings } = props;
  const animatorGeneralSettingsRef = (0, import_react8.useRef)(animatorGeneralSettings);
  animatorGeneralSettingsRef.current = animatorGeneralSettings;
  const animatorGeneralInterface = (0, import_react8.useMemo)(() => {
    const getSettings = () => animatorGeneralSettingsRef.current;
    return Object.freeze({ getSettings });
  }, []);
  return (0, import_react8.createElement)(AnimatorGeneralContext.Provider, { value: animatorGeneralInterface }, children);
};

// node_modules/.pnpm/@arwes+react-animator@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-animator/build/esm/AnimatorGeneralProvider/index.js
var AnimatorGeneralProvider2 = memo(AnimatorGeneralProvider);

// node_modules/.pnpm/@arwes+react-animator@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-animator/build/esm/useAnimatorGeneral/useAnimatorGeneral.js
var import_react9 = __toESM(require_window_mcraft(), 1);

// node_modules/.pnpm/@arwes+react-animated@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-animated/build/esm/useAnimated/useAnimated.js
var import_react10 = __toESM(require_window_mcraft(), 1);
var useAnimated = (elementRef, animated, settings) => {
  const animator = useAnimator();
  const settingsRef = (0, import_react10.useRef)({ animated: void 0 });
  settingsRef.current = {
    ...settings,
    animated
  };
  (0, import_react10.useEffect)(() => {
    const element = elementRef.current;
    if (!element || !animator) {
      return;
    }
    const animatedElement = createAnimatedElement({
      element,
      animator: animator.node,
      settingsRef
    });
    return () => animatedElement.cancel();
  }, [animator]);
};

// node_modules/.pnpm/@arwes+react-animated@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-animated/build/esm/Animated/index.js
var import_react12 = __toESM(require_window_mcraft(), 1);

// node_modules/.pnpm/@arwes+react-animated@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-animated/build/esm/Animated/Animated.js
var import_react11 = __toESM(require_window_mcraft(), 1);
var AnimatedComponent = (props) => {
  const { as: asProvided, animated, className, style: style3, elementRef: externalElementRef, hideOnExited = true, hideOnEntered, onTransition, ...otherProps } = props;
  const animator = useAnimator();
  const as = (0, import_react11.useMemo)(() => asProvided || "div", []);
  const elementRef = (0, import_react11.useRef)(null);
  useAnimated(elementRef, animated, {
    renderInitials: false,
    hideOnExited,
    hideOnEntered,
    onTransition
  });
  const animatedSettingsListReceived = Array.isArray(animated) ? animated : [animated];
  const animatedSettingsList = animatedSettingsListReceived.map((item) => typeof item === "string" || Array.isArray(item) ? void 0 : item).filter(Boolean);
  let initialAttributes;
  if (animator) {
    initialAttributes = animatedSettingsList.map((item) => item ? item.initialAttributes : void 0).reduce((total, item) => ({ ...total, ...item }), {});
  }
  let dynamicStyles;
  if (animator) {
    dynamicStyles = animatedSettingsList.map((item) => item ? item.initialStyle : void 0).filter(Boolean).map((styles) => formatAnimatedCSSProps(styles)).reduce((total, item) => ({ ...total, ...item }), {});
  }
  return (0, import_react11.createElement)(as, {
    ...otherProps,
    ...initialAttributes,
    ref: mergeRefs(externalElementRef, elementRef),
    className,
    style: {
      ...style3,
      visibility: animator && (hideOnExited && animator.node.state === "exited" || hideOnEntered && animator.node.state === "entered") ? "hidden" : "",
      ...dynamicStyles
    }
  });
};
var Animated = memo(AnimatedComponent);

// node_modules/.pnpm/@arwes+react-animated@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-animated/build/esm/Animated/index.js
var Animated2 = (0, import_react12.memo)((0, import_react12.forwardRef)((props, forwardedRef) => (0, import_react12.createElement)(Animated, {
  elementRef: forwardedRef,
  ...props
})));

// node_modules/.pnpm/@arwes+react-animated@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-animated/build/esm/useAnimatedX/useAnimatedX.js
var import_react13 = __toESM(require_window_mcraft(), 1);
var useAnimatedX = (state, elementRef, animated, settings) => {
  const settingsRef = (0, import_react13.useRef)({});
  settingsRef.current = {
    ...settings,
    state,
    animated
  };
  (0, import_react13.useEffect)(() => {
    const element = elementRef.current;
    if (state === void 0 || state === null || !element) {
      return;
    }
    const animatedXElement = createAnimatedXElement({ element, settingsRef });
    return () => animatedXElement.cancel();
  }, [state]);
};

// node_modules/.pnpm/@arwes+react-animated@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-animated/build/esm/AnimatedX/index.js
var import_react15 = __toESM(require_window_mcraft(), 1);

// node_modules/.pnpm/@arwes+react-animated@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-animated/build/esm/AnimatedX/AnimatedX.js
var import_react14 = __toESM(require_window_mcraft(), 1);
var AnimatedX = (props) => {
  const { as: asProvided, state: animatedState, hideOnStates = [], animated, className, style: style3, elementRef: externalElementRef, ...otherProps } = props;
  const hasState = animatedState !== void 0 && animatedState !== null;
  const as = (0, import_react14.useMemo)(() => asProvided || "div", []);
  const elementRef = (0, import_react14.useRef)(null);
  useAnimatedX(animatedState, elementRef, animated, { renderInitials: false, hideOnStates });
  const animatedSettingsListReceived = Array.isArray(animated) ? animated : [animated];
  const animatedSettingsList = animatedSettingsListReceived.filter(Boolean);
  let initialAttributes;
  if (hasState) {
    initialAttributes = animatedSettingsList.map((item) => item?.initialAttributes).reduce((total, item) => ({ ...total, ...item }), {});
  }
  let dynamicStyles;
  if (hasState) {
    dynamicStyles = animatedSettingsList.map((item) => item.initialStyle).filter(Boolean).map((styles) => formatAnimatedCSSProps(styles)).reduce((total, item) => ({ ...total, ...item }), {});
  }
  return (0, import_react14.createElement)(as, {
    ...otherProps,
    ...initialAttributes,
    ref: mergeRefs(externalElementRef, elementRef),
    className,
    style: {
      ...style3,
      visibility: hasState && hideOnStates.includes(animatedState) ? "hidden" : "",
      ...dynamicStyles
    }
  });
};

// node_modules/.pnpm/@arwes+react-animated@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-animated/build/esm/AnimatedX/index.js
var AnimatedX2 = (0, import_react15.memo)((0, import_react15.forwardRef)((props, forwardedRef) => (0, import_react15.createElement)(AnimatedX, {
  elementRef: forwardedRef,
  ...props
})));

// node_modules/.pnpm/@arwes+react-bleeps@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-bleeps/build/esm/BleepsProvider/BleepsProvider.js
var import_react17 = __toESM(require_window_mcraft(), 1);

// node_modules/.pnpm/@arwes+react-bleeps@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-bleeps/build/esm/internal/BleepsManagerContext.js
var import_react16 = __toESM(require_window_mcraft(), 1);
var BleepsManagerContext = (0, import_react16.createContext)(null);

// node_modules/.pnpm/@arwes+react-bleeps@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-bleeps/build/esm/BleepsProvider/BleepsProvider.js
var BleepsProvider = (props) => {
  const { master, common, categories, bleeps, children } = props;
  const bleepsManager = (0, import_react17.useMemo)(() => createBleepsManager({ master, common, categories, bleeps }), []);
  (0, import_react17.useEffect)(() => {
    bleepsManager?.update({ master, common, categories, bleeps });
  }, [master, common, categories, bleeps]);
  (0, import_react17.useEffect)(() => {
    return () => {
      bleepsManager?.update({ common: { muted: true } });
      bleepsManager?.unload();
    };
  }, []);
  return import_react17.default.createElement(BleepsManagerContext.Provider, { value: bleepsManager }, children);
};

// node_modules/.pnpm/@arwes+react-bleeps@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-bleeps/build/esm/BleepsProvider/index.js
var BleepsProvider2 = memo(BleepsProvider);

// node_modules/.pnpm/@arwes+react-bleeps@1.0.0-next.25020502_react@19.2.0/node_modules/@arwes/react-bleeps/build/esm/useBleeps/useBleeps.js
var import_react18 = __toESM(require_window_mcraft(), 1);
var defaultProps14 = {};
var useBleeps = (props = defaultProps14) => {
  if (props.disabled) {
    return {};
  }
  const bleepsManager = (0, import_react18.useContext)(BleepsManagerContext);
  return bleepsManager?.bleeps ?? {};
};

// node_modules/.pnpm/@arwes+react-text@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-text/build/esm/Text/Text.js
var import_react19 = __toESM(require_window_mcraft(), 1);
var Text = memo((props) => {
  const { as: asProvided = "p", className, contentClassName, contentStyle, children, manager, easing: easing2, fixed, blink, blinkDuration, characters, hideOnEntered, hideOnExited = true, elementRef: elementRefProvided, ...otherProps } = props;
  const as = (0, import_react19.useMemo)(() => asProvided, []);
  const [childrenText, setChildrenText] = (0, import_react19.useState)("");
  const elementRef = (0, import_react19.useRef)(null);
  const contentElementRef = (0, import_react19.useRef)(null);
  const transitionControl = (0, import_react19.useRef)(null);
  const animator = useAnimator();
  (0, import_react19.useEffect)(() => {
    setChildrenText(contentElementRef.current?.textContent ?? "");
  }, [children]);
  (0, import_react19.useEffect)(() => {
    const rootElement = elementRef.current;
    const contentElement = contentElementRef.current;
    if (!animator || !childrenText.length || !rootElement || !contentElement) {
      return;
    }
    if (!fixed) {
      const { settings } = animator.node;
      const durationEnter = getAnimationTextDuration({
        length: childrenText.length,
        maxDuration: settings.duration.enter
      });
      const durationExit = getAnimationTextDuration({
        length: childrenText.length,
        maxDuration: settings.duration.exit
      });
      animator.node.control.setSettings({
        duration: { enter: durationEnter, exit: durationExit }
      });
    }
    const transition2 = (duration, isEntering) => {
      const baseOptions = {
        rootElement,
        contentElement,
        duration,
        isEntering,
        easing: easing2,
        hideOnExited,
        hideOnEntered
      };
      transitionControl.current?.cancel();
      if (manager === "decipher") {
        transitionControl.current = animateTextDecipher({ ...baseOptions, characters });
      } else {
        transitionControl.current = animateTextSequence({ ...baseOptions, blink, blinkDuration });
      }
    };
    const unsubscribe = animator.node.subscribe((node) => {
      switch (node.state) {
        case "entering": {
          transition2(node.settings.duration.enter, true);
          break;
        }
        case "entered": {
          if (!transitionControl.current) {
            transition2(node.settings.duration.enter, true);
          }
          break;
        }
        case "exiting": {
          transition2(node.settings.duration.exit, false);
          break;
        }
      }
    });
    return () => {
      unsubscribe();
      transitionControl.current?.cancel();
      transitionControl.current = null;
    };
  }, [animator, childrenText]);
  return (0, import_react19.createElement)(as, {
    ...otherProps,
    className: cx("arwes-text-text", className),
    style: {
      position: "relative",
      ...otherProps.style
    },
    ref: mergeRefs(elementRefProvided, elementRef)
  }, (0, import_react19.createElement)("span", {
    ref: contentElementRef,
    className: cx("arwes-text-text__content", contentClassName),
    style: {
      position: "relative",
      visibility: animator ? animator.node.state === "exited" && hideOnExited || animator.node.state === "entered" && hideOnEntered ? "hidden" : "" : void 0,
      ...contentStyle
    }
  }, children));
});

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/FrameBase/FrameBase.js
var import_react20 = __toESM(require_window_mcraft(), 1);

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/internal/styles.js
var positionedStyle = {
  position: "absolute",
  inset: 0,
  display: "block",
  border: 0,
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%"
};

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/FrameBase/FrameBase.js
var FrameBase = memo((props) => {
  const { elementRef, positioned = true, settings, className, style: style3, preserveAspectRatio = "none", children } = props;
  const animator = useAnimator();
  const svgRef = (0, import_react20.useRef)(null);
  const frameRef = (0, import_react20.useRef)(null);
  const settingsRef = (0, import_react20.useRef)(settings);
  Object.assign(settingsRef.current, settings, { animator: animator?.node });
  (0, import_react20.useEffect)(() => {
    const svg = svgRef.current;
    if (!svg) {
      return;
    }
    frameRef.current = createFrame(svg, settingsRef.current);
    return () => frameRef.current?.remove();
  }, [animator]);
  useUpdateEffect(() => {
    frameRef.current?.render();
  }, [settings]);
  return import_react20.default.createElement("svg", { role: "presentation", ref: mergeRefs(svgRef, elementRef), className: cx("arwes-frames-frame", className), style: { ...positioned ? positionedStyle : null, ...style3 }, xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio }, children);
});

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/FrameOctagon/FrameOctagon.js
var import_react21 = __toESM(require_window_mcraft(), 1);
var FrameOctagon = memo((props) => {
  const { styled, animated, padding, leftTop, rightTop, rightBottom, leftBottom, squareSize, strokeWidth } = props;
  const settings = (0, import_react21.useMemo)(() => createFrameOctagonSettings({
    styled,
    animated,
    padding,
    leftTop,
    rightTop,
    rightBottom,
    leftBottom,
    squareSize,
    strokeWidth
  }), [styled, animated, padding, leftTop, rightTop, rightBottom, leftBottom, squareSize, strokeWidth]);
  return import_react21.default.createElement(FrameBase, { ...props, className: cx("arwes-frames-frameoctagon", props.className), settings });
});

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/FrameUnderline/FrameUnderline.js
var import_react22 = __toESM(require_window_mcraft(), 1);
var FrameUnderline = memo((props) => {
  const { styled, squareSize, strokeWidth, padding } = props;
  const settings = (0, import_react22.useMemo)(() => createFrameUnderlineSettings({ styled, squareSize, strokeWidth, padding }), [styled, squareSize, strokeWidth, padding]);
  return import_react22.default.createElement(FrameBase, { ...props, className: cx("arwes-frames-frameunderline", props.className), settings });
});

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/FrameCorners/FrameCorners.js
var import_react23 = __toESM(require_window_mcraft(), 1);
var FrameCorners = memo((props) => {
  const { styled, animated, padding, strokeWidth, cornerLength } = props;
  const settings = (0, import_react23.useMemo)(() => createFrameCornersSettings({ styled, animated, padding, strokeWidth, cornerLength }), [styled, animated, padding, strokeWidth, cornerLength]);
  return import_react23.default.createElement(FrameBase, { ...props, className: cx("arwes-frames-framecorners", props.className), settings });
});

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/FrameLines/FrameLines.js
var import_react24 = __toESM(require_window_mcraft(), 1);
var FrameLines = memo((props) => {
  const { styled, animated, padding, largeLineWidth, smallLineWidth, smallLineLength } = props;
  const settings = (0, import_react24.useMemo)(() => createFrameLinesSettings({
    styled,
    animated,
    padding,
    largeLineWidth,
    smallLineWidth,
    smallLineLength
  }), [styled, animated, padding, largeLineWidth, smallLineWidth, smallLineLength]);
  return import_react24.default.createElement(FrameBase, { ...props, className: cx("arwes-frames-framelines", props.className), settings });
});

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/FrameNero/FrameNero.js
var import_react25 = __toESM(require_window_mcraft(), 1);
var FrameNero = memo((props) => {
  const { styled, animated, padding, cornerLength, cornerWidth } = props;
  const settings = (0, import_react25.useMemo)(() => createFrameNeroSettings({ styled, animated, padding, cornerLength, cornerWidth }), [styled, animated, padding, cornerLength, cornerWidth]);
  return import_react25.default.createElement(FrameBase, { ...props, className: cx("arwes-frames-framenero", props.className), settings });
});

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/FrameNefrex/FrameNefrex.js
var import_react26 = __toESM(require_window_mcraft(), 1);
var FrameNefrex = memo((props) => {
  const { styled, animated, padding, leftTop, leftBottom, rightTop, rightBottom, squareSize, strokeWidth, smallLineLength, largeLineLength } = props;
  const settings = (0, import_react26.useMemo)(() => createFrameNefrexSettings({
    styled,
    animated,
    padding,
    leftTop,
    leftBottom,
    rightTop,
    rightBottom,
    squareSize,
    strokeWidth,
    smallLineLength,
    largeLineLength
  }), [
    styled,
    animated,
    padding,
    leftTop,
    leftBottom,
    rightTop,
    rightBottom,
    squareSize,
    strokeWidth,
    smallLineLength,
    largeLineLength
  ]);
  return import_react26.default.createElement(FrameBase, { ...props, className: cx("arwes-frames-framenefrex", props.className), settings });
});

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/FrameKranox/FrameKranox.js
var import_react27 = __toESM(require_window_mcraft(), 1);
var FrameKranox = memo((props) => {
  const { styled, animated, padding, strokeWidth, bgStrokeWidth, squareSize, smallLineLength, largeLineLength } = props;
  const settings = (0, import_react27.useMemo)(() => createFrameKranoxSettings({
    styled,
    animated,
    padding,
    strokeWidth,
    bgStrokeWidth,
    squareSize,
    smallLineLength,
    largeLineLength
  }), [
    styled,
    animated,
    padding,
    strokeWidth,
    bgStrokeWidth,
    squareSize,
    smallLineLength,
    largeLineLength
  ]);
  return import_react27.default.createElement(FrameBase, { ...props, className: cx("arwes-frames-framekranox", props.className), settings });
});

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/FrameHeader/FrameHeader.js
var import_react28 = __toESM(require_window_mcraft(), 1);
var FrameHeader = memo((props) => {
  const { styled, animated, padding, strokeWidth, decoWidth, direction, align, contentLength } = props;
  const settings = (0, import_react28.useMemo)(() => createFrameHeaderSettings({
    styled,
    animated,
    padding,
    strokeWidth,
    decoWidth,
    direction,
    align,
    contentLength
  }), [styled, animated, padding, strokeWidth, decoWidth, direction, align, contentLength]);
  return import_react28.default.createElement(FrameBase, { ...props, className: cx("arwes-frames-frameheader", props.className), settings });
});

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/FrameCircle/FrameCircle.js
var import_react29 = __toESM(require_window_mcraft(), 1);
var FrameCircle = memo((props) => {
  const { styled, animated, padding, strokeWidth, separation, sideWidth } = props;
  const settings = (0, import_react29.useMemo)(() => createFrameCircleSettings({ styled, animated, padding, strokeWidth, separation, sideWidth }), [styled, animated, padding, strokeWidth, separation, sideWidth]);
  return import_react29.default.createElement(FrameBase, { ...props, className: cx("arwes-frames-framecircle", props.className), settings });
});

// node_modules/.pnpm/@arwes+react-frames@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-frames/build/esm/useFrameAssembler/useFrameAssembler.js
var import_react30 = __toESM(require_window_mcraft(), 1);
var useFrameAssembler = (svgRef) => {
  const animator = useAnimator();
  (0, import_react30.useEffect)(() => {
    const container = svgRef.current;
    if (!animator || !container) {
      return;
    }
    let animation;
    const unsubscribe = animator.node.subscribe((node) => {
      switch (node.state) {
        case "entering": {
          animation?.cancel();
          animation = animateFrameAssembler({
            element: container,
            duration: node.settings.duration.enter,
            isEntering: true
          });
          break;
        }
        case "exiting": {
          animation?.cancel();
          animation = animateFrameAssembler({
            element: container,
            duration: node.settings.duration.exit,
            isEntering: false
          });
          break;
        }
      }
    });
    return () => {
      animation?.cancel();
      unsubscribe();
    };
  }, [animator]);
};

// node_modules/.pnpm/@arwes+react-bgs@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-bgs/build/esm/Dots/Dots.js
var import_react31 = __toESM(require_window_mcraft(), 1);

// node_modules/.pnpm/@arwes+react-bgs@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-bgs/build/esm/internal/styles.js
var positionedStyle2 = {
  position: "absolute",
  inset: 0,
  display: "block",
  border: 0,
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%"
};

// node_modules/.pnpm/@arwes+react-bgs@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-bgs/build/esm/Dots/Dots.js
var Dots = memo((props) => {
  const { elementRef: elementRefExternal, id, className, style: style3, positioned = true } = props;
  const animator = useAnimator();
  const elementRef = (0, import_react31.useRef)(null);
  const settingsRef = (0, import_react31.useRef)(props);
  settingsRef.current = props;
  (0, import_react31.useEffect)(() => {
    const canvas = elementRef.current;
    if (!canvas) {
      return;
    }
    const background = createBackgroundDots({
      canvas,
      animator: animator?.node,
      settingsRef
    });
    return () => background.cancel();
  }, [animator]);
  return import_react31.default.createElement("canvas", { role: "presentation", ref: mergeRefs(elementRef, elementRefExternal), id, className: cx("arwes-bgs-dots", className), style: { ...positioned ? positionedStyle2 : null, ...style3 } });
});

// node_modules/.pnpm/@arwes+react-bgs@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-bgs/build/esm/Puffs/Puffs.js
var import_react32 = __toESM(require_window_mcraft(), 1);
var Puffs = memo((props) => {
  const { elementRef: elementRefExternal, id, className, style: style3, positioned = true } = props;
  const animator = useAnimator();
  const elementRef = (0, import_react32.useRef)(null);
  const settingsRef = (0, import_react32.useRef)(props);
  settingsRef.current = props;
  (0, import_react32.useEffect)(() => {
    const canvas = elementRef.current;
    if (!canvas) {
      return;
    }
    const background = createBackgroundPuffs({
      canvas,
      animator: animator?.node,
      settingsRef
    });
    return () => background.cancel();
  }, [animator]);
  return import_react32.default.createElement("canvas", { role: "presentation", ref: mergeRefs(elementRef, elementRefExternal), id, className: cx("arwes-bgs-puffs", className), style: { ...positioned ? positionedStyle2 : null, ...style3 } });
});

// node_modules/.pnpm/@arwes+react-bgs@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-bgs/build/esm/GridLines/GridLines.js
var import_react33 = __toESM(require_window_mcraft(), 1);
var GridLines = memo((props) => {
  const { elementRef: elementRefExternal, id, className, style: style3, positioned = true } = props;
  const animator = useAnimator();
  const elementRef = (0, import_react33.useRef)(null);
  const settingsRef = (0, import_react33.useRef)(props);
  settingsRef.current = props;
  (0, import_react33.useEffect)(() => {
    const canvas = elementRef.current;
    if (!canvas) {
      return;
    }
    const background = createBackgroundGridLines({
      canvas,
      animator: animator?.node,
      settingsRef
    });
    return () => background.cancel();
  }, [animator]);
  return import_react33.default.createElement("canvas", { role: "presentation", ref: mergeRefs(elementRef, elementRefExternal), id, className: cx("arwes-bgs-gridlines", className), style: { ...positioned ? positionedStyle2 : null, ...style3 } });
});

// node_modules/.pnpm/@arwes+react-bgs@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-bgs/build/esm/MovingLines/MovingLines.js
var import_react34 = __toESM(require_window_mcraft(), 1);
var MovingLines = memo((props) => {
  const { elementRef: elementRefExternal, id, className, style: style3, positioned = true } = props;
  const animator = useAnimator();
  const elementRef = (0, import_react34.useRef)(null);
  const settingsRef = (0, import_react34.useRef)(props);
  settingsRef.current = props;
  (0, import_react34.useEffect)(() => {
    const canvas = elementRef.current;
    if (!canvas) {
      return;
    }
    const background = createBackgroundMovingLines({
      canvas,
      animator: animator?.node,
      settingsRef
    });
    return () => background.cancel();
  }, [animator]);
  return import_react34.default.createElement("canvas", { role: "presentation", ref: mergeRefs(elementRef, elementRefExternal), id, className: cx("arwes-bgs-movinglines", className), style: { ...positioned ? positionedStyle2 : null, ...style3 } });
});

// node_modules/.pnpm/@arwes+react-effects@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-effects/build/esm/Illuminator/Illuminator.js
var import_react35 = __toESM(require_window_mcraft(), 1);
var Illuminator = memo((props) => {
  const { elementRef, color, size: size2, ...otherProps } = props;
  const containerRef = (0, import_react35.useRef)(null);
  (0, import_react35.useEffect)(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const illuminator = createEffectIlluminator({ container, color, size: size2 });
    return () => illuminator.cancel();
  }, [color, size2]);
  return import_react35.default.createElement("div", { ref: mergeRefs(containerRef, elementRef), role: "presentation", ...otherProps, className: cx("arwes-frames-illuminator", otherProps.className), style: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    ...otherProps.style
  } });
});

// node_modules/.pnpm/@arwes+react-effects@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-effects/build/esm/IlluminatorSVG/IlluminatorSVG.js
var import_react36 = __toESM(require_window_mcraft(), 1);
var IlluminatorSVG = memo((props) => {
  const { elementRef, svgRef, color, size: size2, ...otherProps } = props;
  const containerRef = (0, import_react36.useRef)(null);
  (0, import_react36.useEffect)(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) {
      return;
    }
    const effect = createEffectIlluminatorSVG({ svg, container, size: size2, color });
    return () => effect.cancel();
  }, [size2, color]);
  return import_react36.default.createElement("g", { ref: mergeRefs(containerRef, elementRef), ...otherProps, className: cx("arwes-frames-illuminatorsvg", otherProps.className), style: {
    pointerEvents: "none",
    ...otherProps.style
  } });
});

// node_modules/.pnpm/@arwes+react-core@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-core/build/esm/BleepsOnAnimator/BleepsOnAnimator.js
var import_react37 = __toESM(require_window_mcraft(), 1);
var import_react38 = __toESM(require_window_mcraft(), 1);
var BleepsOnAnimator = (props) => {
  const { id: externalId, transitions, continuous } = props;
  const internalId = (0, import_react38.useId)();
  const transitionsRef = (0, import_react37.useRef)(transitions);
  const animator = useAnimator();
  const bleeps = useBleeps();
  transitionsRef.current = transitions;
  const id = externalId ?? internalId;
  (0, import_react38.useEffect)(() => {
    if (!animator) {
      return;
    }
    let currentBleep = null;
    const cancelSubscription = animator.node.subscribe((node) => {
      const bleepName = transitionsRef.current[node.state];
      if (!continuous) {
        currentBleep?.stop(id);
      }
      if (bleepName) {
        const newBleep = bleeps[bleepName];
        if (newBleep) {
          currentBleep?.stop(id);
          currentBleep = newBleep;
          currentBleep.play(id);
        }
      }
    });
    return () => {
      cancelSubscription();
      currentBleep?.stop(id);
    };
  }, [id, animator, bleeps]);
  return import_react38.default.createElement(import_react38.default.Fragment, null);
};

// node_modules/.pnpm/@arwes+react-core@1.0.0-next.25020502_motion@10.18.0_react@19.2.0/node_modules/@arwes/react-core/build/esm/BleepsOnAnimator/index.js
var BleepsOnAnimator2 = memo(BleepsOnAnimator);

// src/arwes-ui/ArwesButton.tsx
var import_jsx_runtime = __toESM(require_window_mcraft2());
var BUTTON_COLOR_PALETTES = {
  default: {
    // Main cyan color used for border/frame to match reference (#4bf2f6)
    text: "#a9fdff",
    // text: 'white',
    textHover: "#aefbff",
    line: "#4bf2f6",
    lineHover: "#aefbff",
    // Background fill colors (matching mainMenu MenuButton behavior)
    bg: "rgba(6, 43, 45, 0.4)",
    // Hover background: much brighter cyan glow
    bgHover: "rgb(75, 239, 239, 0.5)",
    bgOpacity: 0.4,
    bgHoverOpacity: 1
  }
};
var theme = {
  spacen: createThemeMultiplier((index) => index * 4)
};
var ButtonFrame = ({ frameRef, cornerLength, className }) => {
  useFrameAssembler(frameRef);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FrameCorners, { elementRef: frameRef, animated: true, cornerLength, className });
};
var addAllButtonStyles = () => {
  const styleElement = document.createElement("style");
  styleElement.id = "arwes-button-with-frame-styles";
  const existing = document.getElementById("arwes-button-with-frame-styles");
  if (existing) {
    existing.remove();
  }
  let styles = "";
  for (const [paletteName, palette] of Object.entries(BUTTON_COLOR_PALETTES)) {
    styles += `
      .arwes-button-with-frame[data-palette="${paletteName}"] {
        position: relative;
        outline: none;
        border: 1px solid ${palette.line};
        /* padding: 0.25rem 1.75rem; */
        /* line-height: 2rem; */
        font-size: 0.75rem;
        font-family: inherit;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        color: ${palette.text} !important;
        background: ${palette.bg};
        cursor: pointer;
        transition: color 0.2s ease-out, transform 0.2s ease-out, background 0.2s ease-out, border-color 0.2s ease-out;
      }
      .arwes-button-with-frame[data-palette="${paletteName}"] .arwes-button-with-frame-frame {
        position: absolute;
        top: -1.5px !important;
        left: -1.5px !important;
        width: calc(100% + 3px) !important;
        height: calc(100% + 3px) !important;
        pointer-events: none;
      }
      .arwes-button-with-frame[data-palette="${paletteName}"] .arwes-frames-framesvg {
        width: 100%;
        height: 100%;
        transition: transform 0.2s ease-out;
      }
      .arwes-button-with-frame[data-palette="${paletteName}"] .arwes-button-with-frame-content {
        position: relative;
        z-index: 1;
      }
      .arwes-button-with-frame[data-palette="${paletteName}"] [data-name=line] {
        color: ${palette.line};
        transition: color 0.2s ease-out;
      }
      .arwes-button-with-frame[data-palette="${paletteName}"] [data-name=bg] {
        color: transparent;
        opacity: 0;
      }
      .arwes-button-with-frame[data-palette="${paletteName}"]:hover,
      .arwes-button-with-frame[data-palette="${paletteName}"]:focus-visible {
        color: ${palette.textHover};
        border-color: ${palette.lineHover};
        background: ${palette.bgHover};
        transform: translateY(-2px);
      }
      .arwes-button-with-frame[data-palette="${paletteName}"]:hover [data-name=line],
      .arwes-button-with-frame[data-palette="${paletteName}"]:focus-visible [data-name=line] {
        color: ${palette.lineHover};
      }
    `;
  }
  styleElement.innerHTML = styles;
  document.body.appendChild(styleElement);
};
if (typeof document !== "undefined") {
  addAllButtonStyles();
}
var ButtonWithFrame = ({
  animated,
  colorPalette = "default",
  animationDelay,
  onMouseEnter,
  onClick,
  children
}) => {
  const frameRef = (0, import_react39.useRef)(null);
  const [showFrame, setShowFrame] = (0, import_react39.useState)(false);
  (0, import_react39.useEffect)(() => {
    if (animationDelay === void 0) {
      setShowFrame(true);
    } else {
      const timer = setTimeout(() => {
        setShowFrame(true);
      }, animationDelay);
      return () => clearTimeout(timer);
    }
  }, [animationDelay]);
  const animationProp = animated ?? (animationDelay === void 0 ? ["flicker"] : ["flicker", { transitions: { entering: { delay: animationDelay } } }]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    Animated2,
    {
      as: "button",
      className: "arwes-button-with-frame",
      "data-palette": colorPalette,
      animated: animationProp,
      onMouseEnter,
      onClick,
      children: [
        showFrame && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ButtonFrame,
          {
            frameRef,
            cornerLength: theme.spacen(3),
            className: "arwes-button-with-frame-frame"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "arwes-button-with-frame-content", children })
      ]
    }
  );
};
window.mcraft.ui.registerReactWrapper("button", "arwes", ButtonWithFrame);

// src/arwes-ui/mainMenu.tsx
var import_react41 = __toESM(require_window_mcraft());

// src/arwes-ui/title.webp
var title_default = "data:image/webp;base64,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8u2ujtH1JTMEHgmQUqpKhgnJl8ZGiiLxiLSMtKRK9a+DJEApSSBliUxJVFYmNUrKyFZK6SxEXSUziboqTabAezCBBNxz8YL+y6+6+PL7DirGG4BkUjUCTAKB8cs0V3nBJySkBSbSMkASCASYceZGV+2ME3iMKgUS1Qpgvat6mxlGpmRULwmBgTgxtUntLOPlqVkiU0KQPO+a4JSHdw2Xyon3ifeSQDLJzHvv47g8cvro568/eN9Arws+umnEEpOEPIAkKnpv5VJ5fN+/XNW9A3987+TBz7e8+c4n3506fW5o6NzpU4e+3/nmc/evvPHKy/vnzp59gau6ff79b+06eOjIidODo8VSuVwuFcdGz5469MOur3Z9s3vXznf+cd/ls119C7Me+Gj3j0f2f/vVh5/t2nf8zODguaFzPx8/+MOuLz755OMP333zX3/8798/9Oi6dQ/eNbD0xvv//cn+E6fPnhsaLSeJ92YmmQRIZmbeTDKTkMyUaSBJVcjIVoq0BDKlTKSVpo5SisqSAJGtLKQspSSBqCxJoCrNIEOSeUjAG8Sl8sE35/V0d/T0dHV1dvb0P/jal98c+PHE6cGx2HymmfdJOfY+jseGB3/64dW7f+OqLSxY/7f339u+dfPb732678cTp8+e++X0sf1f73z75ZdefPW1t15bv2710svnTSu46udfvuSaa5fdsPT6W1bf99hLL//71ddee2Pj5k1b33nrX8/8buC6JYtn9bW56m9+5dsz4+Wx8VI5MUnmzSwp+3KxVC6Xk6Q0NjJ85LWB2a5p91713Dcnz54brDg6OjI8NHju3Nmz5375+dSJEx+vv/3SLtckoygq1BplF6Iocnm+4PJrbl6xasUtS6++9tprlly55Oqblw0M3HJd/0VzZkyb1lWIXB2jyDnnoqiQGUVR5BobZRYKbZmFQqEQVekaGkVR5CpG2a6RURRFhbaOnqnT+qbPmDl7zpwL585Lz507f/6Chb+9fMk1S6+/8ZblAwMDAytWrlq1csXAioGB5emVq9bccfd9v3vg4UceefDe29esueuee++99977H3j4oXUPPHD/vXffe/vKm65bcu31A6vuWPf4C//492sb3ty4adPmtzdv2vjmG6+/+uqGDRveeHPjprffeWfrtm3btm3dunXbu//rg48+/uyLr775/ofdu/fu23/gwMGDBw8c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";

// src/arwes-ui/edition.svg
var edition_default = 'data:image/svg+xml,<svg width="2240" height="440" viewBox="0 0 2240 440" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M385.182 417.87L246.204 128.925L134.922 358.641H315.036L345.358 417.87H23.3354L219.622 22.0284H272.484L468.77 417.87H385.182Z" fill="%2300FFFF"/>%0A<g filter="url(%23filter0_d_3107_3072)">%0A<path d="M271.17 24.0568L465.435 415.842H386.395L249.742 131.866L246.103 124.361L242.465 131.866L134.517 354.888L131.687 360.669H138.156H313.823L342.124 415.74H26.5698L220.835 24.0568H271.17ZM273.697 20H218.308L20 419.899H348.694L316.249 356.714H138.156L246.204 133.692L383.969 420H472.106L273.697 20Z" fill="%2366FFFF"/>%0A</g>%0A<path d="M806.763 417.87L689.011 281.156L683.755 274.97H587.634L618.36 213.103H766.333C779.877 213.103 792.208 207.627 802.922 196.876C815.758 183.996 822.328 167.769 822.328 148.6C822.328 129.331 815.758 113.002 802.922 100.122C792.208 89.3712 779.877 83.8946 766.333 83.8946H582.074V417.769H504.045V22.0284H766.333C804.64 22.0284 837.489 35.4159 863.971 61.9879C888.229 86.3286 900.459 115.436 900.459 148.702C900.459 181.765 888.128 210.872 863.971 235.112C841.532 257.627 813.838 270.811 781.696 274.26L777.855 274.665L901.065 417.972H806.763V417.87Z" fill="%2300FFFF"/>%0A<g filter="url(%23filter1_d_3107_3072)">%0A<path d="M766.333 24.0568C785.234 24.0568 802.922 27.4036 818.892 33.8945C834.861 40.3854 849.517 50.3245 862.455 63.4077C874.381 75.3753 883.478 88.6613 889.442 102.759C895.405 116.856 898.437 132.373 898.437 148.702C898.437 164.929 895.405 180.345 889.442 194.442C883.478 208.54 874.381 221.724 862.455 233.692C840.319 255.903 813.029 268.884 781.393 272.231L773.711 273.043L778.765 278.925L896.618 415.842H807.773L690.628 279.838L685.979 274.361L684.766 272.941H682.947H590.969L619.674 215.132H766.333C780.483 215.132 793.32 209.452 804.337 198.296C817.578 185.01 824.35 168.276 824.35 148.6C824.35 128.824 817.578 111.988 804.337 98.7018C793.219 87.5456 780.483 81.8661 766.333 81.8661H584.096H580.053V85.9229V415.74H506.066V24.0568H766.333ZM766.333 20H502.023V419.899H584.096V85.9229H766.333C779.473 85.9229 791.197 91.0953 801.507 101.542C814.04 114.118 820.307 129.838 820.307 148.6C820.307 167.262 814.04 182.779 801.507 195.355C791.096 205.801 779.372 210.974 766.333 210.974H617.147L584.399 276.897H682.846L687.495 282.373L805.853 419.797H905.411L781.797 276.085C814.545 272.637 842.341 259.351 865.285 236.43C890.048 211.582 902.379 182.373 902.379 148.6C902.379 114.625 890.048 85.3144 865.285 60.4665C838.399 33.4888 805.449 20 766.333 20Z" fill="%2366FFFF"/>%0A</g>%0A<path d="M1256.95 417.87L1203.78 222.84L1235.92 104.888L1285.05 259.047L1367.83 22.0284H1452.73L1318.81 417.87H1256.95ZM1059.95 417.87L924.919 22.0284H1004.36L1088.36 259.25L1155.97 22.0284H1230.87L1121.81 417.87H1059.95Z" fill="%2300FFFF"/>%0A<g filter="url(%23filter2_d_3107_3072)">%0A<path d="M1450 24.0568L1317.49 415.842H1258.46L1205.91 222.738L1236.13 111.886L1281.31 253.773L1284.95 265.335L1288.89 253.874L1369.24 23.9554H1450M1228.24 24.0568L1120.3 415.842H1061.37L927.749 24.0568H1002.95L1084.41 253.976L1088.66 265.943L1092.1 253.773L1157.59 24.0568H1228.24ZM1455.66 20H1366.51L1285.25 252.657L1235.92 97.789L1201.86 222.84L1255.63 419.899H1320.52L1455.66 20ZM1233.6 20H1154.46L1088.15 252.657L1005.78 20H921.988L1058.34 419.899H1123.23L1233.6 20Z" fill="%2366FFFF"/>%0A</g>%0A<path d="M1577.86 417.87L1609.09 356.004H1831.76L1806.19 417.87H1577.86ZM1487.7 417.87V22.0284H1834.49L1808.92 83.8946H1565.73V417.769H1487.7V417.87ZM1577.86 250.832L1609.09 188.966H1831.76L1806.19 250.832H1577.86Z" fill="%2300FFFF"/>%0A<g filter="url(%23filter3_d_3107_3072)">%0A<path d="M1831.45 24.0568L1807.5 81.8661H1567.75H1563.71V85.9229V415.74H1489.72V24.0568H1831.45ZM1828.73 190.994L1804.77 248.803H1581.09L1610.3 190.994H1828.73ZM1828.73 357.931L1804.77 415.74H1581.09L1610.3 357.931H1828.73ZM1837.52 20H1485.68V419.899H1567.75V85.9229H1810.23L1837.52 20ZM1834.79 186.937H1607.88L1574.62 252.86H1807.6L1834.79 186.937ZM1834.79 353.874H1607.88L1574.62 419.797H1807.6L1834.79 353.874Z" fill="%2366FFFF"/>%0A</g>%0A<path d="M1853.69 417.87L1879.26 356.004H2086.26C2098.59 356.004 2108.6 353.367 2115.78 348.195C2124.47 342.414 2129.02 331.46 2129.22 315.639C2129.62 293.124 2119.01 276.998 2097.79 267.465C2080.6 259.554 2053.11 252.556 2016.12 246.471C1979.43 240.487 1948.6 231.562 1924.34 219.797C1904.43 210.365 1889.27 197.789 1879.26 182.678C1869.26 167.566 1864.2 149.209 1864.1 128.316C1864.1 96.2678 1876.53 69.8986 1900.99 50.0203C1923.84 31.4605 1952.14 22.0284 1985.09 22.0284H2190.47L2164.9 83.8946H1990.55C1977.51 83.8946 1966.89 88.0528 1959.11 96.2678C1951.33 104.28 1947.39 115.03 1947.39 128.316C1947.39 147.586 1961.44 162.495 1989.13 172.637H1989.23H1989.33C2005.51 176.795 2030.07 181.562 2062.21 186.633C2094.15 191.704 2122.75 199.817 2147.21 210.872C2171.06 221.623 2189.16 235.923 2200.88 253.367C2212.61 270.811 2218.37 292.008 2217.96 316.248C2217.46 350.02 2204.42 376.187 2179.25 394.037C2156.61 409.757 2129.02 417.769 2097.18 417.769H1853.69V417.87Z" fill="%2300FFFF"/>%0A<g filter="url(%23filter4_d_3107_3072)">%0A<path d="M2187.44 24.0568L2163.48 81.8661H1990.55C1976.9 81.8661 1965.78 86.2272 1957.7 94.8479C1949.51 103.266 1945.37 114.523 1945.37 128.316C1945.37 148.499 1959.82 164.118 1988.42 174.564L1988.63 174.665H1988.83C2005.1 178.925 2029.66 183.59 2061.9 188.661C2093.64 193.732 2122.14 201.744 2146.4 212.698C2169.95 223.245 2187.74 237.343 2199.26 254.483C2210.79 271.623 2216.35 292.312 2216.04 316.247C2215.74 332.88 2212.51 347.688 2206.14 360.365C2199.87 372.941 2190.47 383.692 2178.24 392.414C2155.9 407.931 2128.71 415.74 2097.38 415.74H1856.82L1880.78 357.931H2086.26C2099 357.931 2109.31 355.193 2116.89 349.817C2126.19 343.529 2130.94 332.069 2131.14 315.639C2131.54 292.211 2120.53 275.375 2098.49 265.639C2081.11 257.627 2053.52 250.527 2016.32 244.544C1979.83 238.661 1949.21 229.736 1925.05 218.073C1905.44 208.742 1890.58 196.572 1880.78 181.663C1871.08 166.856 1866.02 148.905 1865.92 128.418C1865.92 112.698 1868.95 98.2962 1874.92 85.5173C1880.88 72.8398 1889.98 61.3793 1902 51.643C1924.44 33.3874 1952.34 24.0568 1984.78 24.0568H2187.44ZM2193.5 20H1985.09C1951.43 20 1923.03 29.5335 1899.68 48.499C1874.61 68.9858 1862.08 95.5578 1862.08 128.418C1862.28 171.318 1882.7 202.454 1923.43 221.724C1947.99 233.59 1978.72 242.515 2015.81 248.499C2052.81 254.483 2079.9 261.481 2096.98 269.29C2117.5 278.418 2127.6 293.834 2127.3 315.538C2127.1 330.649 2122.95 340.994 2114.77 346.471C2107.89 351.44 2098.39 353.874 2086.36 353.874H1877.95L1850.66 419.797H2097.28C2129.62 419.797 2157.42 411.785 2180.46 395.761C2206.24 377.505 2219.48 351.034 2219.98 316.349C2220.69 266.755 2196.74 230.953 2148.02 209.047C2123.26 197.89 2094.75 189.777 2062.51 184.706C2030.27 179.635 2006.01 174.97 1989.84 170.71C1962.95 160.872 1949.51 146.673 1949.51 128.316C1949.51 115.538 1953.25 105.294 1960.73 97.6876C1968.21 89.8783 1978.21 85.9229 1990.75 85.9229H2166.42L2193.5 20Z" fill="%2366FFFF"/>%0A</g>%0A<defs>%0A<filter id="filter0_d_3107_3072" x="0" y="0" width="492.106" height="440" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">%0A<feFlood flood-opacity="0" result="BackgroundImageFix"/>%0A<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>%0A<feOffset/>%0A<feGaussianBlur stdDeviation="10"/>%0A<feComposite in2="hardAlpha" operator="out"/>%0A<feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>%0A<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3107_3072"/>%0A<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3107_3072" result="shape"/>%0A</filter>%0A<filter id="filter1_d_3107_3072" x="482.023" y="0" width="443.388" height="439.899" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">%0A<feFlood flood-opacity="0" result="BackgroundImageFix"/>%0A<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>%0A<feOffset/>%0A<feGaussianBlur stdDeviation="10"/>%0A<feComposite in2="hardAlpha" operator="out"/>%0A<feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>%0A<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3107_3072"/>%0A<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3107_3072" result="shape"/>%0A</filter>%0A<filter id="filter2_d_3107_3072" x="901.988" y="0" width="573.673" height="439.899" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">%0A<feFlood flood-opacity="0" result="BackgroundImageFix"/>%0A<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>%0A<feOffset/>%0A<feGaussianBlur stdDeviation="10"/>%0A<feComposite in2="hardAlpha" operator="out"/>%0A<feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>%0A<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3107_3072"/>%0A<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3107_3072" result="shape"/>%0A</filter>%0A<filter id="filter3_d_3107_3072" x="1465.68" y="0" width="391.84" height="439.899" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">%0A<feFlood flood-opacity="0" result="BackgroundImageFix"/>%0A<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>%0A<feOffset/>%0A<feGaussianBlur stdDeviation="10"/>%0A<feComposite in2="hardAlpha" operator="out"/>%0A<feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>%0A<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3107_3072"/>%0A<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3107_3072" result="shape"/>%0A</filter>%0A<filter id="filter4_d_3107_3072" x="1830.66" y="0" width="409.341" height="439.797" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">%0A<feFlood flood-opacity="0" result="BackgroundImageFix"/>%0A<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>%0A<feOffset/>%0A<feGaussianBlur stdDeviation="10"/>%0A<feComposite in2="hardAlpha" operator="out"/>%0A<feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>%0A<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3107_3072"/>%0A<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3107_3072" result="shape"/>%0A</filter>%0A</defs>%0A</svg>%0A';

// src/arwes-ui/mainMenu.tsx
var import_jsx_runtime2 = __toESM(require_window_mcraft2());
var addStyles = (css, id) => {
  if (id && document.getElementById(id)) {
    document.getElementById(id)?.remove();
  }
  const styleElement = document.createElement("style");
  if (id) {
    styleElement.id = id;
  }
  styleElement.innerHTML = css;
  document.body.appendChild(styleElement);
};
var TITLE_SCALE = 0.95;
var theme2 = {
  space: createThemeUnit((index) => `${index * 0.25}rem`),
  spacen: createThemeMultiplier((index) => index * 4),
  colors: {
    background: "hsla(180, 100%, 3%)",
    // Primary accent color: hsl(180deg 100% 61.5%)
    primary: createThemeColor(() => [180, 100, 61.5]),
    secondary: createThemeColor((i) => [60, 100, 100 - i * 10])
  }
};
addStyles(`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    background: ${theme2.colors.background};
  }
`, "arwes-page-styles");
var bleepsSettings = {
  master: { volume: 0.5 },
  categories: {
    background: { volume: 0.25 },
    transition: { volume: 0.5 },
    interaction: { volume: 0.75 }
  },
  bleeps: {
    hover: {
      category: "background",
      sources: [
        { src: "https://next.arwes.dev/assets/sounds/hover.webm", type: "audio/webm" },
        { src: "https://next.arwes.dev/assets/sounds/hover.mp3", type: "audio/mpeg" }
      ]
    },
    assemble: {
      category: "transition",
      sources: [
        { src: "https://next.arwes.dev/assets/sounds/assemble.webm", type: "audio/webm" },
        { src: "https://next.arwes.dev/assets/sounds/assemble.mp3", type: "audio/mpeg" }
      ]
    },
    type: {
      category: "transition",
      sources: [
        { src: "https://next.arwes.dev/assets/sounds/type.webm", type: "audio/webm" },
        { src: "https://next.arwes.dev/assets/sounds/type.mp3", type: "audio/mpeg" }
      ]
    },
    click: {
      category: "interaction",
      sources: [
        { src: "https://next.arwes.dev/assets/sounds/click.webm", type: "audio/webm" },
        { src: "https://next.arwes.dev/assets/sounds/click.mp3", type: "audio/mpeg" }
      ]
    }
  }
};
var pageFrameSettings = {
  elements: [
    {
      name: "line",
      path: [
        ["M", 10, 10],
        ["h", "7%"],
        ["l", 10, 10],
        ["h", "7%"]
      ]
    },
    {
      name: "line",
      path: [
        ["M", "100%-10", 10],
        ["h", "-7%"],
        ["l", -10, 10],
        ["h", "-7%"]
      ]
    },
    {
      name: "line",
      path: [
        ["M", "100%-10", "100%-10"],
        ["h", "-7%"],
        ["l", -10, -10],
        ["h", "-7%"]
      ]
    },
    {
      name: "line",
      path: [
        ["M", "10", "100%-10"],
        ["h", "7%"],
        ["l", 10, -10],
        ["h", "7%"]
      ]
    }
  ]
};
var PageFrame = () => {
  const frameRef = (0, import_react41.useRef)(null);
  useFrameAssembler(frameRef);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FrameBase, { elementRef: frameRef, className: "page-frame", settings: pageFrameSettings });
};
addStyles(`
  .page-frame {
    position: fixed;
    inset: 0;
    pointer-events: none;
  }
  .page-frame [data-name=line] {
    stroke: ${theme2.colors.primary(5)};
    stroke-width: 1;
    fill: none;
  }
`, "arwes-menu-button-styles");
var MainFrame = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "main-frame", style: { clipPath: styleFrameClipOctagon() }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FrameNefrex, { leftBottom: true, rightTop: true }) });
addStyles(`
  .main-frame {
    position: fixed;
    inset: 0;
  }
    /* contianer background color */
  .main-frame [data-name=bg] {
    color: rgba(2, 20, 20, 0.7);
  }
  .main-frame [data-name=line] {
    color: ${theme2.colors.primary(5)};
  }
`);
addStyles(`
  .arwes-menu-button {
    position: relative;
    outline: none;
    border: none;
    padding: 0.25rem 1.75rem;
    line-height: 2rem;
    font-size: 0.75rem;
    font-family: inherit;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: ${theme2.colors.secondary(5)};
    background: transparent;
    cursor: pointer;
    transition: color 0.2s ease-out, transform 0.2s ease-out;
  }
  .arwes-menu-button-frame {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .arwes-menu-button .arwes-frames-framesvg {
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease-out;
  }
  .arwes-menu-button-content {
    position: relative;
    z-index: 1;
  }
  .arwes-menu-button [data-name=line] {
    color: ${theme2.colors.secondary(5)};
    transition: color 0.2s ease-out;
  }
  .arwes-menu-button [data-name=bg] {
    color: ${theme2.colors.secondary(9)};
    opacity: 0.4;
    transition: color 0.2s ease-out, opacity 0.2s ease-out;
  }
  .arwes-menu-button:hover,
  .arwes-menu-button:focus-visible {
    color: ${theme2.colors.secondary(4)};
    transform: translateY(-2px);
  }
  .arwes-menu-button:hover [data-name=line],
  .arwes-menu-button:focus-visible [data-name=line] {
    color: ${theme2.colors.secondary(4)};
  }
  .arwes-menu-button:hover [data-name=bg],
  .arwes-menu-button:focus-visible [data-name=bg] {
    color: ${theme2.colors.secondary(7)};
    opacity: 0.6;
  }
`, "arwes-page-styles");
var ArwesMainMenuBase = ({
  active = true,
  header,
  header2,
  title,
  separator,
  description,
  buttons,
  footer
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BleepsProvider2, { ...bleepsSettings, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { active, duration: { enter: 0.3, exit: 0.2 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "arwes-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PageFrame, {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BleepsOnAnimator2, { transitions: { entering: "assemble" } }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { combine: true, manager: "stagger", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Animated2, { as: "main", className: "arwes-page-main", animated: [["scale", 0.92, 1]], children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MainFrame, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { merge: true, duration: { delay: 0.25, enter: 0.25 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BleepsOnAnimator2, { transitions: { entering: "type" } }) }),
      header && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animated2, { className: "arwes-page-header", animated: [["x", -10, 0, 0]], children: header }) }),
      header2 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animated2, { className: "arwes-page-header2", animated: [["x", -10, 0, 0]], children: header2 }) }),
      title && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { duration: { offset: 0.4 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animated2, { as: "h1", animated: ["flicker", ["y", 15, 0, 0]], children: title }) }),
      separator !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        Animated2,
        {
          className: "arwes-page-separator",
          style: {
            background: styleSteps({
              length: 20,
              color: "currentcolor",
              direction: "-45deg"
            })
          },
          animated: [["y", 20, 1, 0]]
        }
      ) }),
      description && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animated2, { as: "p", animated: [["y", 20, 0, 0]], children: description }) }),
      buttons && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "arwes-page-buttons", children: buttons }),
      footer && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animated2, { className: "arwes-page-footer", animated: [["x", 10, 0, 0]], children: footer }) })
    ] }) })
  ] }) }) });
};
addStyles(`
  .arwes-page {
    position: fixed;
    inset: 0;
    display: flex;
    text-align: center;
  }
  .arwes-page-main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 32px;
    width: 340px;
    height: 240px;
  }
  .arwes-page-separator {
    position: relative;
    width: 50%;
    height: 0.35rem;
    color: ${theme2.colors.primary(8)};
  }
  .arwes-page-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
  .arwes-page-header,
  .arwes-page-header2,
  .arwes-page-footer {
    position: absolute;
    font-size: 6px;
    letter-spacing: 0.08rem;
    color: ${theme2.colors.primary(8)};
  }
  .arwes-page-header {
    right: 1.5rem;
    top: 0.5rem;
  }
  .arwes-page-header2 {
    right: 1.5rem;
    top: 1.5rem;
  }
  .arwes-page-footer {
    left: 1.5rem;
    bottom: 0.5rem;
  }
  .arwes-page h1 {
    line-height: 1;
    font-size: 1.5rem;
    font-weight: 300;
    font-family: inherit;
    color: ${theme2.colors.primary(6)};
  }
  .arwes-page p {
    line-height: 1.6;
    text-wrap: pretty;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme2.colors.primary(7)};
  }
  .arwes-title-block {
    position: relative;
    width: ${300 * TITLE_SCALE}px;
    height: ${70 * TITLE_SCALE}px;
    margin: 0 auto;
  }
  .arwes-title-image {
    width: ${300 * TITLE_SCALE}px;
    display: block;
  }
  .arwes-edition-image {
    position: absolute;
    top: ${52 * TITLE_SCALE}px;
    left: 50%;
    transform: translateX(-50%);
    width: ${200 * TITLE_SCALE}px;
    height: ${18 * TITLE_SCALE}px;
    display: block;
    opacity: 0.9;
  }
`);
var ArwesMainMenu = (props) => {
  const { connectToServerAction, singleplayerAction, optionsAction, onVersionStatusClick, onVersionTextClick, versionText, singleplayerAvailable } = props;
  const [active, setActive] = (0, import_react41.useState)(true);
  (0, import_react41.useEffect)(() => {
    const handleKeyPress = (e) => {
      if (e.key === "j" || e.key === "J") {
        setActive((curr) => !curr);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  const wrap2 = (action) => () => {
    setActive(false);
    setTimeout(() => {
      action();
    }, 300);
  };
  const Button = window.builtinComponents.Button;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: {}, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    ArwesMainMenuBase,
    {
      active,
      header: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Credits: Romel Perez, Zardoy" }),
      title: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "arwes-title-block", style: { marginTop: 0 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: title_default, alt: "Minecraft Title", className: "arwes-title-image" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: edition_default, alt: "Edition", className: "arwes-edition-image" })
      ] }),
      separator: void 0,
      buttons: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", marginTop: 25 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animated2, { animated: [["y", 20, 0, 0]], children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { label: "Multiplayer", onClick: wrap2(connectToServerAction) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animated2, { animated: [["y", 20, 0, 0]], children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { label: "Singleplayer", onClick: wrap2(singleplayerAction) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animator2, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Animated2, { animated: [["y", 20, 0, 0]], children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { label: "Options", onClick: wrap2(optionsAction) }) }) })
      ] }),
      footer: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { onClick: onVersionTextClick, children: [
        "| ",
        versionText || "v0.0.100"
      ] })
    }
  ) });
};
window.mcraft.ui.registerReactWrapper("mainMenu", "arwes", ArwesMainMenu);

// src/arwes-ui/background-large.webp
var background_large_default = "data:image/webp;base64,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";

// src/arwes-ui/screens.tsx
var import_jsx_runtime3 = __toESM(require_window_mcraft2());
var ScreenBackdrop = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Animator2, { duration: { enter: 2, exit: 2 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "img",
      {
        src: background_large_default,
        alt: "",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Dots, { color: "hsla(180, 100%, 75%, 0.4)" })
  ] }) });
};
window.mcraft.ui.registerReactWrapper("screenDirtBg", "arwes", ScreenBackdrop);

// src/arwes-ui/SciFiLoader.tsx
var import_react_dom = __toESM(require_window_mcraft3());
var import_jsx_runtime4 = __toESM(require_window_mcraft2());
var motion = window.mcraft.framerMotion.motion;
var containerVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08
    }
  },
  exit: {
    scale: 2.5,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.05,
      staggerDirection: 1
    }
  }
};
var childVariants = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5
    }
  },
  exit: {
    scale: 1.5,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};
var SciFiLoader = ({
  message = "CONNECTING TO SERVER...",
  connected = false,
  className
}) => {
  const circles = [
    { width: 440, height: 440, duration: 35, dashArray: "12 5" },
    { width: 380, height: 380, duration: 30, dashArray: "10 5" },
    { width: 320, height: 320, duration: 25, dashArray: "15 3" },
    { width: 260, height: 260, duration: 20, dashArray: "8 4" },
    { width: 200, height: 200, duration: 15, dashArray: "5 3" },
    { width: 140, height: 140, duration: 10, dashArray: "4 2" }
  ];
  const tickMarks = Array.from({ length: 72 }, (_, i) => i);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    motion.div,
    {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(5, 20, 40, 1)",
        overflow: "hidden"
      },
      className,
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        motion.div,
        {
          style: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "520px",
            height: "520px"
          },
          variants: containerVariants,
          initial: "hidden",
          animate: "visible",
          exit: "exit",
          children: [
            circles.map((circle, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              motion.div,
              {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  margin: "auto",
                  width: `${circle.width}px`,
                  height: `${circle.height}px`,
                  borderRadius: "50%",
                  borderColor: "rgba(34, 211, 238, 0.3)",
                  borderStyle: "dashed",
                  borderWidth: "2px",
                  WebkitMaskImage: `repeating-linear-gradient(0deg, transparent, transparent ${circle.dashArray.split(" ")[1]}px, black ${circle.dashArray.split(" ")[1]}px ${circle.dashArray.split(" ")[0]}px)`
                },
                variants: childVariants,
                animate: {
                  rotate: 360
                },
                transition: {
                  duration: circle.duration,
                  ease: "linear",
                  repeat: Infinity
                }
              },
              index
            )),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              motion.div,
              {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  margin: "auto",
                  width: "480px",
                  height: "480px"
                },
                variants: childVariants,
                children: tickMarks.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: "4px",
                      height: "12px",
                      backgroundColor: "rgba(34, 211, 238, 0.3)",
                      transform: `rotate(${i * 5}deg) translateX(-50%) translateY(-240px)`,
                      transformOrigin: "center"
                    }
                  },
                  i
                ))
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              motion.div,
              {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  margin: "auto",
                  width: "500px",
                  height: "500px"
                },
                animate: { rotate: 360 },
                transition: {
                  duration: 40,
                  ease: "linear",
                  repeat: Infinity
                },
                variants: childVariants,
                children: [0, 90, 180, 270].map((rotation2) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      transform: `rotate(${rotation2}deg)`
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                      motion.div,
                      {
                        style: {
                          position: "absolute",
                          top: 0,
                          left: "50%",
                          width: "4px",
                          height: "32px",
                          transform: "translateX(-50%)",
                          transformOrigin: "bottom",
                          borderRadius: "9999px"
                        },
                        animate: {
                          backgroundColor: connected ? "rgba(50, 255, 50, 0.6)" : "rgba(34, 211, 238, 0.5)"
                        },
                        transition: {
                          duration: 0.8,
                          ease: "easeInOut"
                        }
                      }
                    )
                  },
                  rotation2
                ))
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
              motion.div,
              {
                style: {
                  position: "relative",
                  zIndex: 10,
                  marginTop: 8,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                },
                variants: childVariants,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    motion.div,
                    {
                      style: {
                        width: "64px",
                        height: "64px"
                      },
                      animate: { rotate: -360 },
                      transition: {
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity
                      },
                      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                        "div",
                        {
                          style: {
                            width: "100%",
                            height: "100%",
                            border: "4px solid",
                            borderTopColor: "rgb(34, 211, 238)",
                            borderRightColor: "rgba(34, 211, 238, 0.5)",
                            borderBottomColor: "rgba(34, 211, 238, 0.3)",
                            borderLeftColor: "rgba(34, 211, 238, 0.1)",
                            borderRadius: "50%"
                          }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: {
                    color: "rgb(34, 211, 238)",
                    fontSize: "14px",
                    fontFamily: "monospace",
                    marginTop: 20,
                    letterSpacing: "0.1em"
                  }, children: message })
                ]
              }
            )
          ]
        }
      )
    }
  );
};
var LoaderWrapper = ({ children, status, isError }) => {
  const { hadConnected } = window.mcraft.valtio.useSnapshot(window.miscUiState);
  if (isError) return children;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: import_react_dom.default.createPortal(
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1e3,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SciFiLoader, { connected: hadConnected, message: status })
      }
    ),
    document.body
  ) });
};
window.mcraft.ui.registerReactWrapper("appStatus", "arwes", LoaderWrapper);

// src/arwes-ui/index.tsx
var import_jsx_runtime5 = __toESM(require_window_mcraft2());
var ArwesPlayground = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children });
};
window.mcraft.ui.registerReactWrapper("root", "arwes", ArwesPlayground);
var patchStylesToInject = (
  /* css */
  `
  button::before, button::after {
    opacity: 0;
  }
  body button {
    background: transparent;
    color: inherit !important;
  }
  .dirt-bg {
    display: none;
  }
  .slider::before, .slider::after, .slider-thumb::before, .slider-thumb::after {
    display: none;
  }
  .slider {
    background: rgb(75, 239, 239, 0.1);
    border: 1px solid rgb(75, 239, 239);
    color: #a9fdff;
  }
  .slider-thumb {
    background: rgba(75, 239, 239, 0.5);
    border: 1px solid rgb(75, 239, 239);
  }
`
);
var style2 = document.createElement("style");
style2.textContent = patchStylesToInject;
document.head.appendChild(style2);

// src/mod.tsx
console.log("Arwes UI mod loaded");
window.loadSound("https://next.arwes.dev/assets/sounds/click.webm");
var originalPlaySound = window.playSound;
window.playSound = (...args) => {
  if (args[0] === "button_click.mp3") {
    args[0] = "https://next.arwes.dev/assets/sounds/click.webm";
  }
  originalPlaySound(...args);
};
var oldDispatchEvent = window.dispatchEvent;
window.dispatchEvent = (event) => {
  if (event.type === "connect") {
    window.setLoadingScreenStatus("CONNECTING TO SERVER...");
    setTimeout(() => {
      oldDispatchEvent(event);
    }, 1e3);
    return;
  }
  oldDispatchEvent(event);
};
window.serverMetadataConnect ?? (window.serverMetadataConnect = {});
window.serverMetadataConnect.isArwes = true;
