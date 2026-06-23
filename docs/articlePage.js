/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) // removed by dead control flow
{}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(6221);
} else // removed by dead control flow
{}


/***/ }),

/***/ 1247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/

var Scheduler = __webpack_require__(9982),
  React = __webpack_require__(6540),
  ReactDOM = __webpack_require__(961);
function formatProdErrorMessage(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return (
    "Minified React error #" +
    code +
    "; visit " +
    url +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function isValidContainer(node) {
  return !(
    !node ||
    (1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType)
  );
}
function getNearestMountedFiber(fiber) {
  var node = fiber,
    nearestMounted = fiber;
  if (fiber.alternate) for (; node.return; ) node = node.return;
  else {
    fiber = node;
    do
      (node = fiber),
        0 !== (node.flags & 4098) && (nearestMounted = node.return),
        (fiber = node.return);
    while (fiber);
  }
  return 3 === node.tag ? nearestMounted : null;
}
function getSuspenseInstanceFromFiber(fiber) {
  if (13 === fiber.tag) {
    var suspenseState = fiber.memoizedState;
    null === suspenseState &&
      ((fiber = fiber.alternate),
      null !== fiber && (suspenseState = fiber.memoizedState));
    if (null !== suspenseState) return suspenseState.dehydrated;
  }
  return null;
}
function getActivityInstanceFromFiber(fiber) {
  if (31 === fiber.tag) {
    var activityState = fiber.memoizedState;
    null === activityState &&
      ((fiber = fiber.alternate),
      null !== fiber && (activityState = fiber.memoizedState));
    if (null !== activityState) return activityState.dehydrated;
  }
  return null;
}
function assertIsMounted(fiber) {
  if (getNearestMountedFiber(fiber) !== fiber)
    throw Error(formatProdErrorMessage(188));
}
function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    alternate = getNearestMountedFiber(fiber);
    if (null === alternate) throw Error(formatProdErrorMessage(188));
    return alternate !== fiber ? null : fiber;
  }
  for (var a = fiber, b = alternate; ; ) {
    var parentA = a.return;
    if (null === parentA) break;
    var parentB = parentA.alternate;
    if (null === parentB) {
      b = parentA.return;
      if (null !== b) {
        a = b;
        continue;
      }
      break;
    }
    if (parentA.child === parentB.child) {
      for (parentB = parentA.child; parentB; ) {
        if (parentB === a) return assertIsMounted(parentA), fiber;
        if (parentB === b) return assertIsMounted(parentA), alternate;
        parentB = parentB.sibling;
      }
      throw Error(formatProdErrorMessage(188));
    }
    if (a.return !== b.return) (a = parentA), (b = parentB);
    else {
      for (var didFindChild = !1, child$0 = parentA.child; child$0; ) {
        if (child$0 === a) {
          didFindChild = !0;
          a = parentA;
          b = parentB;
          break;
        }
        if (child$0 === b) {
          didFindChild = !0;
          b = parentA;
          a = parentB;
          break;
        }
        child$0 = child$0.sibling;
      }
      if (!didFindChild) {
        for (child$0 = parentB.child; child$0; ) {
          if (child$0 === a) {
            didFindChild = !0;
            a = parentB;
            b = parentA;
            break;
          }
          if (child$0 === b) {
            didFindChild = !0;
            b = parentB;
            a = parentA;
            break;
          }
          child$0 = child$0.sibling;
        }
        if (!didFindChild) throw Error(formatProdErrorMessage(189));
      }
    }
    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
  }
  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
  return a.stateNode.current === a ? fiber : alternate;
}
function findCurrentHostFiberImpl(node) {
  var tag = node.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
  for (node = node.child; null !== node; ) {
    tag = findCurrentHostFiberImpl(node);
    if (null !== tag) return tag;
    node = node.sibling;
  }
  return null;
}
var assign = Object.assign,
  REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"),
  REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy");
Symbol.for("react.scope");
var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
Symbol.for("react.legacy_hidden");
Symbol.for("react.tracing_marker");
var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
Symbol.for("react.view_transition");
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
function getComponentNameFromType(type) {
  if (null == type) return null;
  if ("function" === typeof type)
    return type.$$typeof === REACT_CLIENT_REFERENCE
      ? null
      : type.displayName || type.name || null;
  if ("string" === typeof type) return type;
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return "Fragment";
    case REACT_PROFILER_TYPE:
      return "Profiler";
    case REACT_STRICT_MODE_TYPE:
      return "StrictMode";
    case REACT_SUSPENSE_TYPE:
      return "Suspense";
    case REACT_SUSPENSE_LIST_TYPE:
      return "SuspenseList";
    case REACT_ACTIVITY_TYPE:
      return "Activity";
  }
  if ("object" === typeof type)
    switch (type.$$typeof) {
      case REACT_PORTAL_TYPE:
        return "Portal";
      case REACT_CONTEXT_TYPE:
        return type.displayName || "Context";
      case REACT_CONSUMER_TYPE:
        return (type._context.displayName || "Context") + ".Consumer";
      case REACT_FORWARD_REF_TYPE:
        var innerType = type.render;
        type = type.displayName;
        type ||
          ((type = innerType.displayName || innerType.name || ""),
          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
        return type;
      case REACT_MEMO_TYPE:
        return (
          (innerType = type.displayName || null),
          null !== innerType
            ? innerType
            : getComponentNameFromType(type.type) || "Memo"
        );
      case REACT_LAZY_TYPE:
        innerType = type._payload;
        type = type._init;
        try {
          return getComponentNameFromType(type(innerType));
        } catch (x) {}
    }
  return null;
}
var isArrayImpl = Array.isArray,
  ReactSharedInternals =
    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  ReactDOMSharedInternals =
    ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  sharedNotPendingObject = {
    pending: !1,
    data: null,
    method: null,
    action: null
  },
  valueStack = [],
  index = -1;
function createCursor(defaultValue) {
  return { current: defaultValue };
}
function pop(cursor) {
  0 > index ||
    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
}
function push(cursor, value) {
  index++;
  valueStack[index] = cursor.current;
  cursor.current = value;
}
var contextStackCursor = createCursor(null),
  contextFiberStackCursor = createCursor(null),
  rootInstanceStackCursor = createCursor(null),
  hostTransitionProviderCursor = createCursor(null);
function pushHostContainer(fiber, nextRootInstance) {
  push(rootInstanceStackCursor, nextRootInstance);
  push(contextFiberStackCursor, fiber);
  push(contextStackCursor, null);
  switch (nextRootInstance.nodeType) {
    case 9:
    case 11:
      fiber = (fiber = nextRootInstance.documentElement)
        ? (fiber = fiber.namespaceURI)
          ? getOwnHostContext(fiber)
          : 0
        : 0;
      break;
    default:
      if (
        ((fiber = nextRootInstance.tagName),
        (nextRootInstance = nextRootInstance.namespaceURI))
      )
        (nextRootInstance = getOwnHostContext(nextRootInstance)),
          (fiber = getChildHostContextProd(nextRootInstance, fiber));
      else
        switch (fiber) {
          case "svg":
            fiber = 1;
            break;
          case "math":
            fiber = 2;
            break;
          default:
            fiber = 0;
        }
  }
  pop(contextStackCursor);
  push(contextStackCursor, fiber);
}
function popHostContainer() {
  pop(contextStackCursor);
  pop(contextFiberStackCursor);
  pop(rootInstanceStackCursor);
}
function pushHostContext(fiber) {
  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
  var context = contextStackCursor.current;
  var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
  context !== JSCompiler_inline_result &&
    (push(contextFiberStackCursor, fiber),
    push(contextStackCursor, JSCompiler_inline_result));
}
function popHostContext(fiber) {
  contextFiberStackCursor.current === fiber &&
    (pop(contextStackCursor), pop(contextFiberStackCursor));
  hostTransitionProviderCursor.current === fiber &&
    (pop(hostTransitionProviderCursor),
    (HostTransitionContext._currentValue = sharedNotPendingObject));
}
var prefix, suffix;
function describeBuiltInComponentFrame(name) {
  if (void 0 === prefix)
    try {
      throw Error();
    } catch (x) {
      var match = x.stack.trim().match(/\n( *(at )?)/);
      prefix = (match && match[1]) || "";
      suffix =
        -1 < x.stack.indexOf("\n    at")
          ? " (<anonymous>)"
          : -1 < x.stack.indexOf("@")
            ? "@unknown:0:0"
            : "";
    }
  return "\n" + prefix + name + suffix;
}
var reentry = !1;
function describeNativeComponentFrame(fn, construct) {
  if (!fn || reentry) return "";
  reentry = !0;
  var previousPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var RunInRootFrame = {
      DetermineComponentFrameRoot: function () {
        try {
          if (construct) {
            var Fake = function () {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function () {
                throw Error();
              }
            });
            if ("object" === typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                var control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x$1) {
                control = x$1;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x$2) {
              control = x$2;
            }
            (Fake = fn()) &&
              "function" === typeof Fake.catch &&
              Fake.catch(function () {});
          }
        } catch (sample) {
          if (sample && control && "string" === typeof sample.stack)
            return [sample.stack, control.stack];
        }
        return [null, null];
      }
    };
    RunInRootFrame.DetermineComponentFrameRoot.displayName =
      "DetermineComponentFrameRoot";
    var namePropDescriptor = Object.getOwnPropertyDescriptor(
      RunInRootFrame.DetermineComponentFrameRoot,
      "name"
    );
    namePropDescriptor &&
      namePropDescriptor.configurable &&
      Object.defineProperty(
        RunInRootFrame.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
      sampleStack = _RunInRootFrame$Deter[0],
      controlStack = _RunInRootFrame$Deter[1];
    if (sampleStack && controlStack) {
      var sampleLines = sampleStack.split("\n"),
        controlLines = controlStack.split("\n");
      for (
        namePropDescriptor = RunInRootFrame = 0;
        RunInRootFrame < sampleLines.length &&
        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

      )
        RunInRootFrame++;
      for (
        ;
        namePropDescriptor < controlLines.length &&
        !controlLines[namePropDescriptor].includes(
          "DetermineComponentFrameRoot"
        );

      )
        namePropDescriptor++;
      if (
        RunInRootFrame === sampleLines.length ||
        namePropDescriptor === controlLines.length
      )
        for (
          RunInRootFrame = sampleLines.length - 1,
            namePropDescriptor = controlLines.length - 1;
          1 <= RunInRootFrame &&
          0 <= namePropDescriptor &&
          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

        )
          namePropDescriptor--;
      for (
        ;
        1 <= RunInRootFrame && 0 <= namePropDescriptor;
        RunInRootFrame--, namePropDescriptor--
      )
        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
            do
              if (
                (RunInRootFrame--,
                namePropDescriptor--,
                0 > namePropDescriptor ||
                  sampleLines[RunInRootFrame] !==
                    controlLines[namePropDescriptor])
              ) {
                var frame =
                  "\n" +
                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
                fn.displayName &&
                  frame.includes("<anonymous>") &&
                  (frame = frame.replace("<anonymous>", fn.displayName));
                return frame;
              }
            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
          }
          break;
        }
    }
  } finally {
    (reentry = !1), (Error.prepareStackTrace = previousPrepareStackTrace);
  }
  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
    : "";
}
function describeFiber(fiber, childFiber) {
  switch (fiber.tag) {
    case 26:
    case 27:
    case 5:
      return describeBuiltInComponentFrame(fiber.type);
    case 16:
      return describeBuiltInComponentFrame("Lazy");
    case 13:
      return fiber.child !== childFiber && null !== childFiber
        ? describeBuiltInComponentFrame("Suspense Fallback")
        : describeBuiltInComponentFrame("Suspense");
    case 19:
      return describeBuiltInComponentFrame("SuspenseList");
    case 0:
    case 15:
      return describeNativeComponentFrame(fiber.type, !1);
    case 11:
      return describeNativeComponentFrame(fiber.type.render, !1);
    case 1:
      return describeNativeComponentFrame(fiber.type, !0);
    case 31:
      return describeBuiltInComponentFrame("Activity");
    default:
      return "";
  }
}
function getStackByFiberInDevAndProd(workInProgress) {
  try {
    var info = "",
      previous = null;
    do
      (info += describeFiber(workInProgress, previous)),
        (previous = workInProgress),
        (workInProgress = workInProgress.return);
    while (workInProgress);
    return info;
  } catch (x) {
    return "\nError generating stack: " + x.message + "\n" + x.stack;
  }
}
var hasOwnProperty = Object.prototype.hasOwnProperty,
  scheduleCallback$3 = Scheduler.unstable_scheduleCallback,
  cancelCallback$1 = Scheduler.unstable_cancelCallback,
  shouldYield = Scheduler.unstable_shouldYield,
  requestPaint = Scheduler.unstable_requestPaint,
  now = Scheduler.unstable_now,
  getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
  ImmediatePriority = Scheduler.unstable_ImmediatePriority,
  UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
  NormalPriority$1 = Scheduler.unstable_NormalPriority,
  LowPriority = Scheduler.unstable_LowPriority,
  IdlePriority = Scheduler.unstable_IdlePriority,
  log$1 = Scheduler.log,
  unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue,
  rendererID = null,
  injectedHook = null;
function setIsStrictModeForDevtools(newIsStrictMode) {
  "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
  if (injectedHook && "function" === typeof injectedHook.setStrictMode)
    try {
      injectedHook.setStrictMode(rendererID, newIsStrictMode);
    } catch (err) {}
}
var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
  log = Math.log,
  LN2 = Math.LN2;
function clz32Fallback(x) {
  x >>>= 0;
  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
}
var nextTransitionUpdateLane = 256,
  nextTransitionDeferredLane = 262144,
  nextRetryLane = 4194304;
function getHighestPriorityLanes(lanes) {
  var pendingSyncLanes = lanes & 42;
  if (0 !== pendingSyncLanes) return pendingSyncLanes;
  switch (lanes & -lanes) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
      return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
      return lanes & 261888;
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return lanes & 3932160;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return lanes & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return lanes;
  }
}
function getNextLanes(root, wipLanes, rootHasPendingCommit) {
  var pendingLanes = root.pendingLanes;
  if (0 === pendingLanes) return 0;
  var nextLanes = 0,
    suspendedLanes = root.suspendedLanes,
    pingedLanes = root.pingedLanes;
  root = root.warmLanes;
  var nonIdlePendingLanes = pendingLanes & 134217727;
  0 !== nonIdlePendingLanes
    ? ((pendingLanes = nonIdlePendingLanes & ~suspendedLanes),
      0 !== pendingLanes
        ? (nextLanes = getHighestPriorityLanes(pendingLanes))
        : ((pingedLanes &= nonIdlePendingLanes),
          0 !== pingedLanes
            ? (nextLanes = getHighestPriorityLanes(pingedLanes))
            : rootHasPendingCommit ||
              ((rootHasPendingCommit = nonIdlePendingLanes & ~root),
              0 !== rootHasPendingCommit &&
                (nextLanes = getHighestPriorityLanes(rootHasPendingCommit)))))
    : ((nonIdlePendingLanes = pendingLanes & ~suspendedLanes),
      0 !== nonIdlePendingLanes
        ? (nextLanes = getHighestPriorityLanes(nonIdlePendingLanes))
        : 0 !== pingedLanes
          ? (nextLanes = getHighestPriorityLanes(pingedLanes))
          : rootHasPendingCommit ||
            ((rootHasPendingCommit = pendingLanes & ~root),
            0 !== rootHasPendingCommit &&
              (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
  return 0 === nextLanes
    ? 0
    : 0 !== wipLanes &&
        wipLanes !== nextLanes &&
        0 === (wipLanes & suspendedLanes) &&
        ((suspendedLanes = nextLanes & -nextLanes),
        (rootHasPendingCommit = wipLanes & -wipLanes),
        suspendedLanes >= rootHasPendingCommit ||
          (32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)))
      ? wipLanes
      : nextLanes;
}
function checkIfRootIsPrerendering(root, renderLanes) {
  return (
    0 ===
    (root.pendingLanes &
      ~(root.suspendedLanes & ~root.pingedLanes) &
      renderLanes)
  );
}
function computeExpirationTime(lane, currentTime) {
  switch (lane) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return currentTime + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return currentTime + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function claimNextRetryLane() {
  var lane = nextRetryLane;
  nextRetryLane <<= 1;
  0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
  return lane;
}
function createLaneMap(initial) {
  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
  return laneMap;
}
function markRootUpdated$1(root, updateLane) {
  root.pendingLanes |= updateLane;
  268435456 !== updateLane &&
    ((root.suspendedLanes = 0), (root.pingedLanes = 0), (root.warmLanes = 0));
}
function markRootFinished(
  root,
  finishedLanes,
  remainingLanes,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes
) {
  var previouslyPendingLanes = root.pendingLanes;
  root.pendingLanes = remainingLanes;
  root.suspendedLanes = 0;
  root.pingedLanes = 0;
  root.warmLanes = 0;
  root.expiredLanes &= remainingLanes;
  root.entangledLanes &= remainingLanes;
  root.errorRecoveryDisabledLanes &= remainingLanes;
  root.shellSuspendCounter = 0;
  var entanglements = root.entanglements,
    expirationTimes = root.expirationTimes,
    hiddenUpdates = root.hiddenUpdates;
  for (
    remainingLanes = previouslyPendingLanes & ~remainingLanes;
    0 < remainingLanes;

  ) {
    var index$7 = 31 - clz32(remainingLanes),
      lane = 1 << index$7;
    entanglements[index$7] = 0;
    expirationTimes[index$7] = -1;
    var hiddenUpdatesForLane = hiddenUpdates[index$7];
    if (null !== hiddenUpdatesForLane)
      for (
        hiddenUpdates[index$7] = null, index$7 = 0;
        index$7 < hiddenUpdatesForLane.length;
        index$7++
      ) {
        var update = hiddenUpdatesForLane[index$7];
        null !== update && (update.lane &= -536870913);
      }
    remainingLanes &= ~lane;
  }
  0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
  0 !== suspendedRetryLanes &&
    0 === updatedLanes &&
    0 !== root.tag &&
    (root.suspendedLanes |=
      suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
}
function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
  root.pendingLanes |= spawnedLane;
  root.suspendedLanes &= ~spawnedLane;
  var spawnedLaneIndex = 31 - clz32(spawnedLane);
  root.entangledLanes |= spawnedLane;
  root.entanglements[spawnedLaneIndex] =
    root.entanglements[spawnedLaneIndex] |
    1073741824 |
    (entangledLanes & 261930);
}
function markRootEntangled(root, entangledLanes) {
  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
  for (root = root.entanglements; rootEntangledLanes; ) {
    var index$8 = 31 - clz32(rootEntangledLanes),
      lane = 1 << index$8;
    (lane & entangledLanes) | (root[index$8] & entangledLanes) &&
      (root[index$8] |= entangledLanes);
    rootEntangledLanes &= ~lane;
  }
}
function getBumpedLaneForHydration(root, renderLanes) {
  var renderLane = renderLanes & -renderLanes;
  renderLane =
    0 !== (renderLane & 42) ? 1 : getBumpedLaneForHydrationByLane(renderLane);
  return 0 !== (renderLane & (root.suspendedLanes | renderLanes))
    ? 0
    : renderLane;
}
function getBumpedLaneForHydrationByLane(lane) {
  switch (lane) {
    case 2:
      lane = 1;
      break;
    case 8:
      lane = 4;
      break;
    case 32:
      lane = 16;
      break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      lane = 128;
      break;
    case 268435456:
      lane = 134217728;
      break;
    default:
      lane = 0;
  }
  return lane;
}
function lanesToEventPriority(lanes) {
  lanes &= -lanes;
  return 2 < lanes
    ? 8 < lanes
      ? 0 !== (lanes & 134217727)
        ? 32
        : 268435456
      : 8
    : 2;
}
function resolveUpdatePriority() {
  var updatePriority = ReactDOMSharedInternals.p;
  if (0 !== updatePriority) return updatePriority;
  updatePriority = window.event;
  return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
}
function runWithPriority(priority, fn) {
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    return (ReactDOMSharedInternals.p = priority), fn();
  } finally {
    ReactDOMSharedInternals.p = previousPriority;
  }
}
var randomKey = Math.random().toString(36).slice(2),
  internalInstanceKey = "__reactFiber$" + randomKey,
  internalPropsKey = "__reactProps$" + randomKey,
  internalContainerInstanceKey = "__reactContainer$" + randomKey,
  internalEventHandlersKey = "__reactEvents$" + randomKey,
  internalEventHandlerListenersKey = "__reactListeners$" + randomKey,
  internalEventHandlesSetKey = "__reactHandles$" + randomKey,
  internalRootNodeResourcesKey = "__reactResources$" + randomKey,
  internalHoistableMarker = "__reactMarker$" + randomKey;
function detachDeletedInstance(node) {
  delete node[internalInstanceKey];
  delete node[internalPropsKey];
  delete node[internalEventHandlersKey];
  delete node[internalEventHandlerListenersKey];
  delete node[internalEventHandlesSetKey];
}
function getClosestInstanceFromNode(targetNode) {
  var targetInst = targetNode[internalInstanceKey];
  if (targetInst) return targetInst;
  for (var parentNode = targetNode.parentNode; parentNode; ) {
    if (
      (targetInst =
        parentNode[internalContainerInstanceKey] ||
        parentNode[internalInstanceKey])
    ) {
      parentNode = targetInst.alternate;
      if (
        null !== targetInst.child ||
        (null !== parentNode && null !== parentNode.child)
      )
        for (
          targetNode = getParentHydrationBoundary(targetNode);
          null !== targetNode;

        ) {
          if ((parentNode = targetNode[internalInstanceKey])) return parentNode;
          targetNode = getParentHydrationBoundary(targetNode);
        }
      return targetInst;
    }
    targetNode = parentNode;
    parentNode = targetNode.parentNode;
  }
  return null;
}
function getInstanceFromNode(node) {
  if (
    (node = node[internalInstanceKey] || node[internalContainerInstanceKey])
  ) {
    var tag = node.tag;
    if (
      5 === tag ||
      6 === tag ||
      13 === tag ||
      31 === tag ||
      26 === tag ||
      27 === tag ||
      3 === tag
    )
      return node;
  }
  return null;
}
function getNodeFromInstance(inst) {
  var tag = inst.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
  throw Error(formatProdErrorMessage(33));
}
function getResourcesFromRoot(root) {
  var resources = root[internalRootNodeResourcesKey];
  resources ||
    (resources = root[internalRootNodeResourcesKey] =
      { hoistableStyles: new Map(), hoistableScripts: new Map() });
  return resources;
}
function markNodeAsHoistable(node) {
  node[internalHoistableMarker] = !0;
}
var allNativeEvents = new Set(),
  registrationNameDependencies = {};
function registerTwoPhaseEvent(registrationName, dependencies) {
  registerDirectEvent(registrationName, dependencies);
  registerDirectEvent(registrationName + "Capture", dependencies);
}
function registerDirectEvent(registrationName, dependencies) {
  registrationNameDependencies[registrationName] = dependencies;
  for (
    registrationName = 0;
    registrationName < dependencies.length;
    registrationName++
  )
    allNativeEvents.add(dependencies[registrationName]);
}
var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ),
  illegalAttributeNameCache = {},
  validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
    return !0;
  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
    return (validatedAttributeNameCache[attributeName] = !0);
  illegalAttributeNameCache[attributeName] = !0;
  return !1;
}
function setValueForAttribute(node, name, value) {
  if (isAttributeNameSafe(name))
    if (null === value) node.removeAttribute(name);
    else {
      switch (typeof value) {
        case "undefined":
        case "function":
        case "symbol":
          node.removeAttribute(name);
          return;
        case "boolean":
          var prefix$10 = name.toLowerCase().slice(0, 5);
          if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
            node.removeAttribute(name);
            return;
          }
      }
      node.setAttribute(name, "" + value);
    }
}
function setValueForKnownAttribute(node, name, value) {
  if (null === value) node.removeAttribute(name);
  else {
    switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        node.removeAttribute(name);
        return;
    }
    node.setAttribute(name, "" + value);
  }
}
function setValueForNamespacedAttribute(node, namespace, name, value) {
  if (null === value) node.removeAttribute(name);
  else {
    switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        node.removeAttribute(name);
        return;
    }
    node.setAttributeNS(namespace, name, "" + value);
  }
}
function getToStringValue(value) {
  switch (typeof value) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return value;
    case "object":
      return value;
    default:
      return "";
  }
}
function isCheckable(elem) {
  var type = elem.type;
  return (
    (elem = elem.nodeName) &&
    "input" === elem.toLowerCase() &&
    ("checkbox" === type || "radio" === type)
  );
}
function trackValueOnNode(node, valueField, currentValue) {
  var descriptor = Object.getOwnPropertyDescriptor(
    node.constructor.prototype,
    valueField
  );
  if (
    !node.hasOwnProperty(valueField) &&
    "undefined" !== typeof descriptor &&
    "function" === typeof descriptor.get &&
    "function" === typeof descriptor.set
  ) {
    var get = descriptor.get,
      set = descriptor.set;
    Object.defineProperty(node, valueField, {
      configurable: !0,
      get: function () {
        return get.call(this);
      },
      set: function (value) {
        currentValue = "" + value;
        set.call(this, value);
      }
    });
    Object.defineProperty(node, valueField, {
      enumerable: descriptor.enumerable
    });
    return {
      getValue: function () {
        return currentValue;
      },
      setValue: function (value) {
        currentValue = "" + value;
      },
      stopTracking: function () {
        node._valueTracker = null;
        delete node[valueField];
      }
    };
  }
}
function track(node) {
  if (!node._valueTracker) {
    var valueField = isCheckable(node) ? "checked" : "value";
    node._valueTracker = trackValueOnNode(
      node,
      valueField,
      "" + node[valueField]
    );
  }
}
function updateValueIfChanged(node) {
  if (!node) return !1;
  var tracker = node._valueTracker;
  if (!tracker) return !0;
  var lastValue = tracker.getValue();
  var value = "";
  node &&
    (value = isCheckable(node)
      ? node.checked
        ? "true"
        : "false"
      : node.value);
  node = value;
  return node !== lastValue ? (tracker.setValue(node), !0) : !1;
}
function getActiveElement(doc) {
  doc = doc || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof doc) return null;
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
  return value.replace(
    escapeSelectorAttributeValueInsideDoubleQuotesRegex,
    function (ch) {
      return "\\" + ch.charCodeAt(0).toString(16) + " ";
    }
  );
}
function updateInput(
  element,
  value,
  defaultValue,
  lastDefaultValue,
  checked,
  defaultChecked,
  type,
  name
) {
  element.name = "";
  null != type &&
  "function" !== typeof type &&
  "symbol" !== typeof type &&
  "boolean" !== typeof type
    ? (element.type = type)
    : element.removeAttribute("type");
  if (null != value)
    if ("number" === type) {
      if ((0 === value && "" === element.value) || element.value != value)
        element.value = "" + getToStringValue(value);
    } else
      element.value !== "" + getToStringValue(value) &&
        (element.value = "" + getToStringValue(value));
  else
    ("submit" !== type && "reset" !== type) || element.removeAttribute("value");
  null != value
    ? setDefaultValue(element, type, getToStringValue(value))
    : null != defaultValue
      ? setDefaultValue(element, type, getToStringValue(defaultValue))
      : null != lastDefaultValue && element.removeAttribute("value");
  null == checked &&
    null != defaultChecked &&
    (element.defaultChecked = !!defaultChecked);
  null != checked &&
    (element.checked =
      checked && "function" !== typeof checked && "symbol" !== typeof checked);
  null != name &&
  "function" !== typeof name &&
  "symbol" !== typeof name &&
  "boolean" !== typeof name
    ? (element.name = "" + getToStringValue(name))
    : element.removeAttribute("name");
}
function initInput(
  element,
  value,
  defaultValue,
  checked,
  defaultChecked,
  type,
  name,
  isHydrating
) {
  null != type &&
    "function" !== typeof type &&
    "symbol" !== typeof type &&
    "boolean" !== typeof type &&
    (element.type = type);
  if (null != value || null != defaultValue) {
    if (
      !(
        ("submit" !== type && "reset" !== type) ||
        (void 0 !== value && null !== value)
      )
    ) {
      track(element);
      return;
    }
    defaultValue =
      null != defaultValue ? "" + getToStringValue(defaultValue) : "";
    value = null != value ? "" + getToStringValue(value) : defaultValue;
    isHydrating || value === element.value || (element.value = value);
    element.defaultValue = value;
  }
  checked = null != checked ? checked : defaultChecked;
  checked =
    "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
  element.checked = isHydrating ? element.checked : !!checked;
  element.defaultChecked = !!checked;
  null != name &&
    "function" !== typeof name &&
    "symbol" !== typeof name &&
    "boolean" !== typeof name &&
    (element.name = name);
  track(element);
}
function setDefaultValue(node, type, value) {
  ("number" === type && getActiveElement(node.ownerDocument) === node) ||
    node.defaultValue === "" + value ||
    (node.defaultValue = "" + value);
}
function updateOptions(node, multiple, propValue, setDefaultSelected) {
  node = node.options;
  if (multiple) {
    multiple = {};
    for (var i = 0; i < propValue.length; i++)
      multiple["$" + propValue[i]] = !0;
    for (propValue = 0; propValue < node.length; propValue++)
      (i = multiple.hasOwnProperty("$" + node[propValue].value)),
        node[propValue].selected !== i && (node[propValue].selected = i),
        i && setDefaultSelected && (node[propValue].defaultSelected = !0);
  } else {
    propValue = "" + getToStringValue(propValue);
    multiple = null;
    for (i = 0; i < node.length; i++) {
      if (node[i].value === propValue) {
        node[i].selected = !0;
        setDefaultSelected && (node[i].defaultSelected = !0);
        return;
      }
      null !== multiple || node[i].disabled || (multiple = node[i]);
    }
    null !== multiple && (multiple.selected = !0);
  }
}
function updateTextarea(element, value, defaultValue) {
  if (
    null != value &&
    ((value = "" + getToStringValue(value)),
    value !== element.value && (element.value = value),
    null == defaultValue)
  ) {
    element.defaultValue !== value && (element.defaultValue = value);
    return;
  }
  element.defaultValue =
    null != defaultValue ? "" + getToStringValue(defaultValue) : "";
}
function initTextarea(element, value, defaultValue, children) {
  if (null == value) {
    if (null != children) {
      if (null != defaultValue) throw Error(formatProdErrorMessage(92));
      if (isArrayImpl(children)) {
        if (1 < children.length) throw Error(formatProdErrorMessage(93));
        children = children[0];
      }
      defaultValue = children;
    }
    null == defaultValue && (defaultValue = "");
    value = defaultValue;
  }
  defaultValue = getToStringValue(value);
  element.defaultValue = defaultValue;
  children = element.textContent;
  children === defaultValue &&
    "" !== children &&
    null !== children &&
    (element.value = children);
  track(element);
}
function setTextContent(node, text) {
  if (text) {
    var firstChild = node.firstChild;
    if (
      firstChild &&
      firstChild === node.lastChild &&
      3 === firstChild.nodeType
    ) {
      firstChild.nodeValue = text;
      return;
    }
  }
  node.textContent = text;
}
var unitlessNumbers = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
);
function setValueForStyle(style, styleName, value) {
  var isCustomProperty = 0 === styleName.indexOf("--");
  null == value || "boolean" === typeof value || "" === value
    ? isCustomProperty
      ? style.setProperty(styleName, "")
      : "float" === styleName
        ? (style.cssFloat = "")
        : (style[styleName] = "")
    : isCustomProperty
      ? style.setProperty(styleName, value)
      : "number" !== typeof value ||
          0 === value ||
          unitlessNumbers.has(styleName)
        ? "float" === styleName
          ? (style.cssFloat = value)
          : (style[styleName] = ("" + value).trim())
        : (style[styleName] = value + "px");
}
function setValueForStyles(node, styles, prevStyles) {
  if (null != styles && "object" !== typeof styles)
    throw Error(formatProdErrorMessage(62));
  node = node.style;
  if (null != prevStyles) {
    for (var styleName in prevStyles)
      !prevStyles.hasOwnProperty(styleName) ||
        (null != styles && styles.hasOwnProperty(styleName)) ||
        (0 === styleName.indexOf("--")
          ? node.setProperty(styleName, "")
          : "float" === styleName
            ? (node.cssFloat = "")
            : (node[styleName] = ""));
    for (var styleName$16 in styles)
      (styleName = styles[styleName$16]),
        styles.hasOwnProperty(styleName$16) &&
          prevStyles[styleName$16] !== styleName &&
          setValueForStyle(node, styleName$16, styleName);
  } else
    for (var styleName$17 in styles)
      styles.hasOwnProperty(styleName$17) &&
        setValueForStyle(node, styleName$17, styles[styleName$17]);
}
function isCustomElement(tagName) {
  if (-1 === tagName.indexOf("-")) return !1;
  switch (tagName) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var aliases = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]),
  isJavaScriptProtocol =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function sanitizeURL(url) {
  return isJavaScriptProtocol.test("" + url)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : url;
}
function noop$1() {}
var currentReplayingEvent = null;
function getEventTarget(nativeEvent) {
  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
  nativeEvent.correspondingUseElement &&
    (nativeEvent = nativeEvent.correspondingUseElement);
  return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
}
var restoreTarget = null,
  restoreQueue = null;
function restoreStateOfTarget(target) {
  var internalInstance = getInstanceFromNode(target);
  if (internalInstance && (target = internalInstance.stateNode)) {
    var props = target[internalPropsKey] || null;
    a: switch (((target = internalInstance.stateNode), internalInstance.type)) {
      case "input":
        updateInput(
          target,
          props.value,
          props.defaultValue,
          props.defaultValue,
          props.checked,
          props.defaultChecked,
          props.type,
          props.name
        );
        internalInstance = props.name;
        if ("radio" === props.type && null != internalInstance) {
          for (props = target; props.parentNode; ) props = props.parentNode;
          props = props.querySelectorAll(
            'input[name="' +
              escapeSelectorAttributeValueInsideDoubleQuotes(
                "" + internalInstance
              ) +
              '"][type="radio"]'
          );
          for (
            internalInstance = 0;
            internalInstance < props.length;
            internalInstance++
          ) {
            var otherNode = props[internalInstance];
            if (otherNode !== target && otherNode.form === target.form) {
              var otherProps = otherNode[internalPropsKey] || null;
              if (!otherProps) throw Error(formatProdErrorMessage(90));
              updateInput(
                otherNode,
                otherProps.value,
                otherProps.defaultValue,
                otherProps.defaultValue,
                otherProps.checked,
                otherProps.defaultChecked,
                otherProps.type,
                otherProps.name
              );
            }
          }
          for (
            internalInstance = 0;
            internalInstance < props.length;
            internalInstance++
          )
            (otherNode = props[internalInstance]),
              otherNode.form === target.form && updateValueIfChanged(otherNode);
        }
        break a;
      case "textarea":
        updateTextarea(target, props.value, props.defaultValue);
        break a;
      case "select":
        (internalInstance = props.value),
          null != internalInstance &&
            updateOptions(target, !!props.multiple, internalInstance, !1);
    }
  }
}
var isInsideEventHandler = !1;
function batchedUpdates$1(fn, a, b) {
  if (isInsideEventHandler) return fn(a, b);
  isInsideEventHandler = !0;
  try {
    var JSCompiler_inline_result = fn(a);
    return JSCompiler_inline_result;
  } finally {
    if (
      ((isInsideEventHandler = !1),
      null !== restoreTarget || null !== restoreQueue)
    )
      if (
        (flushSyncWork$1(),
        restoreTarget &&
          ((a = restoreTarget),
          (fn = restoreQueue),
          (restoreQueue = restoreTarget = null),
          restoreStateOfTarget(a),
          fn))
      )
        for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
  }
}
function getListener(inst, registrationName) {
  var stateNode = inst.stateNode;
  if (null === stateNode) return null;
  var props = stateNode[internalPropsKey] || null;
  if (null === props) return null;
  stateNode = props[registrationName];
  a: switch (registrationName) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (props = !props.disabled) ||
        ((inst = inst.type),
        (props = !(
          "button" === inst ||
          "input" === inst ||
          "select" === inst ||
          "textarea" === inst
        )));
      inst = !props;
      break a;
    default:
      inst = !1;
  }
  if (inst) return null;
  if (stateNode && "function" !== typeof stateNode)
    throw Error(
      formatProdErrorMessage(231, registrationName, typeof stateNode)
    );
  return stateNode;
}
var canUseDOM = !(
    "undefined" === typeof window ||
    "undefined" === typeof window.document ||
    "undefined" === typeof window.document.createElement
  ),
  passiveBrowserEventsSupported = !1;
if (canUseDOM)
  try {
    var options = {};
    Object.defineProperty(options, "passive", {
      get: function () {
        passiveBrowserEventsSupported = !0;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (e) {
    passiveBrowserEventsSupported = !1;
  }
var root = null,
  startText = null,
  fallbackText = null;
function getData() {
  if (fallbackText) return fallbackText;
  var start,
    startValue = startText,
    startLength = startValue.length,
    end,
    endValue = "value" in root ? root.value : root.textContent,
    endLength = endValue.length;
  for (
    start = 0;
    start < startLength && startValue[start] === endValue[start];
    start++
  );
  var minEnd = startLength - start;
  for (
    end = 1;
    end <= minEnd &&
    startValue[startLength - end] === endValue[endLength - end];
    end++
  );
  return (fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0));
}
function getEventCharCode(nativeEvent) {
  var keyCode = nativeEvent.keyCode;
  "charCode" in nativeEvent
    ? ((nativeEvent = nativeEvent.charCode),
      0 === nativeEvent && 13 === keyCode && (nativeEvent = 13))
    : (nativeEvent = keyCode);
  10 === nativeEvent && (nativeEvent = 13);
  return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
}
function functionThatReturnsTrue() {
  return !0;
}
function functionThatReturnsFalse() {
  return !1;
}
function createSyntheticEvent(Interface) {
  function SyntheticBaseEvent(
    reactName,
    reactEventType,
    targetInst,
    nativeEvent,
    nativeEventTarget
  ) {
    this._reactName = reactName;
    this._targetInst = targetInst;
    this.type = reactEventType;
    this.nativeEvent = nativeEvent;
    this.target = nativeEventTarget;
    this.currentTarget = null;
    for (var propName in Interface)
      Interface.hasOwnProperty(propName) &&
        ((reactName = Interface[propName]),
        (this[propName] = reactName
          ? reactName(nativeEvent)
          : nativeEvent[propName]));
    this.isDefaultPrevented = (
      null != nativeEvent.defaultPrevented
        ? nativeEvent.defaultPrevented
        : !1 === nativeEvent.returnValue
    )
      ? functionThatReturnsTrue
      : functionThatReturnsFalse;
    this.isPropagationStopped = functionThatReturnsFalse;
    return this;
  }
  assign(SyntheticBaseEvent.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var event = this.nativeEvent;
      event &&
        (event.preventDefault
          ? event.preventDefault()
          : "unknown" !== typeof event.returnValue && (event.returnValue = !1),
        (this.isDefaultPrevented = functionThatReturnsTrue));
    },
    stopPropagation: function () {
      var event = this.nativeEvent;
      event &&
        (event.stopPropagation
          ? event.stopPropagation()
          : "unknown" !== typeof event.cancelBubble &&
            (event.cancelBubble = !0),
        (this.isPropagationStopped = functionThatReturnsTrue));
    },
    persist: function () {},
    isPersistent: functionThatReturnsTrue
  });
  return SyntheticBaseEvent;
}
var EventInterface = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  SyntheticEvent = createSyntheticEvent(EventInterface),
  UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }),
  SyntheticUIEvent = createSyntheticEvent(UIEventInterface),
  lastMovementX,
  lastMovementY,
  lastMouseEvent,
  MouseEventInterface = assign({}, UIEventInterface, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: getEventModifierState,
    button: 0,
    buttons: 0,
    relatedTarget: function (event) {
      return void 0 === event.relatedTarget
        ? event.fromElement === event.srcElement
          ? event.toElement
          : event.fromElement
        : event.relatedTarget;
    },
    movementX: function (event) {
      if ("movementX" in event) return event.movementX;
      event !== lastMouseEvent &&
        (lastMouseEvent && "mousemove" === event.type
          ? ((lastMovementX = event.screenX - lastMouseEvent.screenX),
            (lastMovementY = event.screenY - lastMouseEvent.screenY))
          : (lastMovementY = lastMovementX = 0),
        (lastMouseEvent = event));
      return lastMovementX;
    },
    movementY: function (event) {
      return "movementY" in event ? event.movementY : lastMovementY;
    }
  }),
  SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface),
  DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }),
  SyntheticDragEvent = createSyntheticEvent(DragEventInterface),
  FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }),
  SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface),
  AnimationEventInterface = assign({}, EventInterface, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface),
  ClipboardEventInterface = assign({}, EventInterface, {
    clipboardData: function (event) {
      return "clipboardData" in event
        ? event.clipboardData
        : window.clipboardData;
    }
  }),
  SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface),
  CompositionEventInterface = assign({}, EventInterface, { data: 0 }),
  SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface),
  normalizeKey = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  translateToKey = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  modifierKeyToProp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function modifierStateGetter(keyArg) {
  var nativeEvent = this.nativeEvent;
  return nativeEvent.getModifierState
    ? nativeEvent.getModifierState(keyArg)
    : (keyArg = modifierKeyToProp[keyArg])
      ? !!nativeEvent[keyArg]
      : !1;
}
function getEventModifierState() {
  return modifierStateGetter;
}
var KeyboardEventInterface = assign({}, UIEventInterface, {
    key: function (nativeEvent) {
      if (nativeEvent.key) {
        var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
        if ("Unidentified" !== key) return key;
      }
      return "keypress" === nativeEvent.type
        ? ((nativeEvent = getEventCharCode(nativeEvent)),
          13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent))
        : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type
          ? translateToKey[nativeEvent.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: getEventModifierState,
    charCode: function (event) {
      return "keypress" === event.type ? getEventCharCode(event) : 0;
    },
    keyCode: function (event) {
      return "keydown" === event.type || "keyup" === event.type
        ? event.keyCode
        : 0;
    },
    which: function (event) {
      return "keypress" === event.type
        ? getEventCharCode(event)
        : "keydown" === event.type || "keyup" === event.type
          ? event.keyCode
          : 0;
    }
  }),
  SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface),
  PointerEventInterface = assign({}, MouseEventInterface, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface),
  TouchEventInterface = assign({}, UIEventInterface, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: getEventModifierState
  }),
  SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface),
  TransitionEventInterface = assign({}, EventInterface, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface),
  WheelEventInterface = assign({}, MouseEventInterface, {
    deltaX: function (event) {
      return "deltaX" in event
        ? event.deltaX
        : "wheelDeltaX" in event
          ? -event.wheelDeltaX
          : 0;
    },
    deltaY: function (event) {
      return "deltaY" in event
        ? event.deltaY
        : "wheelDeltaY" in event
          ? -event.wheelDeltaY
          : "wheelDelta" in event
            ? -event.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface),
  ToggleEventInterface = assign({}, EventInterface, {
    newState: 0,
    oldState: 0
  }),
  SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface),
  END_KEYCODES = [9, 13, 27, 32],
  canUseCompositionEvent = canUseDOM && "CompositionEvent" in window,
  documentMode = null;
canUseDOM &&
  "documentMode" in document &&
  (documentMode = document.documentMode);
var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode,
  useFallbackCompositionData =
    canUseDOM &&
    (!canUseCompositionEvent ||
      (documentMode && 8 < documentMode && 11 >= documentMode)),
  SPACEBAR_CHAR = String.fromCharCode(32),
  hasSpaceKeypress = !1;
function isFallbackCompositionEnd(domEventName, nativeEvent) {
  switch (domEventName) {
    case "keyup":
      return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
    case "keydown":
      return 229 !== nativeEvent.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function getDataFromCustomEvent(nativeEvent) {
  nativeEvent = nativeEvent.detail;
  return "object" === typeof nativeEvent && "data" in nativeEvent
    ? nativeEvent.data
    : null;
}
var isComposing = !1;
function getNativeBeforeInputChars(domEventName, nativeEvent) {
  switch (domEventName) {
    case "compositionend":
      return getDataFromCustomEvent(nativeEvent);
    case "keypress":
      if (32 !== nativeEvent.which) return null;
      hasSpaceKeypress = !0;
      return SPACEBAR_CHAR;
    case "textInput":
      return (
        (domEventName = nativeEvent.data),
        domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName
      );
    default:
      return null;
  }
}
function getFallbackBeforeInputChars(domEventName, nativeEvent) {
  if (isComposing)
    return "compositionend" === domEventName ||
      (!canUseCompositionEvent &&
        isFallbackCompositionEnd(domEventName, nativeEvent))
      ? ((domEventName = getData()),
        (fallbackText = startText = root = null),
        (isComposing = !1),
        domEventName)
      : null;
  switch (domEventName) {
    case "paste":
      return null;
    case "keypress":
      if (
        !(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) ||
        (nativeEvent.ctrlKey && nativeEvent.altKey)
      ) {
        if (nativeEvent.char && 1 < nativeEvent.char.length)
          return nativeEvent.char;
        if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
      }
      return null;
    case "compositionend":
      return useFallbackCompositionData && "ko" !== nativeEvent.locale
        ? null
        : nativeEvent.data;
    default:
      return null;
  }
}
var supportedInputTypes = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return "input" === nodeName
    ? !!supportedInputTypes[elem.type]
    : "textarea" === nodeName
      ? !0
      : !1;
}
function createAndAccumulateChangeEvent(
  dispatchQueue,
  inst,
  nativeEvent,
  target
) {
  restoreTarget
    ? restoreQueue
      ? restoreQueue.push(target)
      : (restoreQueue = [target])
    : (restoreTarget = target);
  inst = accumulateTwoPhaseListeners(inst, "onChange");
  0 < inst.length &&
    ((nativeEvent = new SyntheticEvent(
      "onChange",
      "change",
      null,
      nativeEvent,
      target
    )),
    dispatchQueue.push({ event: nativeEvent, listeners: inst }));
}
var activeElement$1 = null,
  activeElementInst$1 = null;
function runEventInBatch(dispatchQueue) {
  processDispatchQueue(dispatchQueue, 0);
}
function getInstIfValueChanged(targetInst) {
  var targetNode = getNodeFromInstance(targetInst);
  if (updateValueIfChanged(targetNode)) return targetInst;
}
function getTargetInstForChangeEvent(domEventName, targetInst) {
  if ("change" === domEventName) return targetInst;
}
var isInputEventSupported = !1;
if (canUseDOM) {
  var JSCompiler_inline_result$jscomp$286;
  if (canUseDOM) {
    var isSupported$jscomp$inline_427 = "oninput" in document;
    if (!isSupported$jscomp$inline_427) {
      var element$jscomp$inline_428 = document.createElement("div");
      element$jscomp$inline_428.setAttribute("oninput", "return;");
      isSupported$jscomp$inline_427 =
        "function" === typeof element$jscomp$inline_428.oninput;
    }
    JSCompiler_inline_result$jscomp$286 = isSupported$jscomp$inline_427;
  } else JSCompiler_inline_result$jscomp$286 = !1;
  isInputEventSupported =
    JSCompiler_inline_result$jscomp$286 &&
    (!document.documentMode || 9 < document.documentMode);
}
function stopWatchingForValueChange() {
  activeElement$1 &&
    (activeElement$1.detachEvent("onpropertychange", handlePropertyChange),
    (activeElementInst$1 = activeElement$1 = null));
}
function handlePropertyChange(nativeEvent) {
  if (
    "value" === nativeEvent.propertyName &&
    getInstIfValueChanged(activeElementInst$1)
  ) {
    var dispatchQueue = [];
    createAndAccumulateChangeEvent(
      dispatchQueue,
      activeElementInst$1,
      nativeEvent,
      getEventTarget(nativeEvent)
    );
    batchedUpdates$1(runEventInBatch, dispatchQueue);
  }
}
function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
  "focusin" === domEventName
    ? (stopWatchingForValueChange(),
      (activeElement$1 = target),
      (activeElementInst$1 = targetInst),
      activeElement$1.attachEvent("onpropertychange", handlePropertyChange))
    : "focusout" === domEventName && stopWatchingForValueChange();
}
function getTargetInstForInputEventPolyfill(domEventName) {
  if (
    "selectionchange" === domEventName ||
    "keyup" === domEventName ||
    "keydown" === domEventName
  )
    return getInstIfValueChanged(activeElementInst$1);
}
function getTargetInstForClickEvent(domEventName, targetInst) {
  if ("click" === domEventName) return getInstIfValueChanged(targetInst);
}
function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
  if ("input" === domEventName || "change" === domEventName)
    return getInstIfValueChanged(targetInst);
}
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is;
function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) return !0;
  if (
    "object" !== typeof objA ||
    null === objA ||
    "object" !== typeof objB ||
    null === objB
  )
    return !1;
  var keysA = Object.keys(objA),
    keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return !1;
  for (keysB = 0; keysB < keysA.length; keysB++) {
    var currentKey = keysA[keysB];
    if (
      !hasOwnProperty.call(objB, currentKey) ||
      !objectIs(objA[currentKey], objB[currentKey])
    )
      return !1;
  }
  return !0;
}
function getLeafNode(node) {
  for (; node && node.firstChild; ) node = node.firstChild;
  return node;
}
function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  root = 0;
  for (var nodeEnd; node; ) {
    if (3 === node.nodeType) {
      nodeEnd = root + node.textContent.length;
      if (root <= offset && nodeEnd >= offset)
        return { node: node, offset: offset - root };
      root = nodeEnd;
    }
    a: {
      for (; node; ) {
        if (node.nextSibling) {
          node = node.nextSibling;
          break a;
        }
        node = node.parentNode;
      }
      node = void 0;
    }
    node = getLeafNode(node);
  }
}
function containsNode(outerNode, innerNode) {
  return outerNode && innerNode
    ? outerNode === innerNode
      ? !0
      : outerNode && 3 === outerNode.nodeType
        ? !1
        : innerNode && 3 === innerNode.nodeType
          ? containsNode(outerNode, innerNode.parentNode)
          : "contains" in outerNode
            ? outerNode.contains(innerNode)
            : outerNode.compareDocumentPosition
              ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
              : !1
    : !1;
}
function getActiveElementDeep(containerInfo) {
  containerInfo =
    null != containerInfo &&
    null != containerInfo.ownerDocument &&
    null != containerInfo.ownerDocument.defaultView
      ? containerInfo.ownerDocument.defaultView
      : window;
  for (
    var element = getActiveElement(containerInfo.document);
    element instanceof containerInfo.HTMLIFrameElement;

  ) {
    try {
      var JSCompiler_inline_result =
        "string" === typeof element.contentWindow.location.href;
    } catch (err) {
      JSCompiler_inline_result = !1;
    }
    if (JSCompiler_inline_result) containerInfo = element.contentWindow;
    else break;
    element = getActiveElement(containerInfo.document);
  }
  return element;
}
function hasSelectionCapabilities(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return (
    nodeName &&
    (("input" === nodeName &&
      ("text" === elem.type ||
        "search" === elem.type ||
        "tel" === elem.type ||
        "url" === elem.type ||
        "password" === elem.type)) ||
      "textarea" === nodeName ||
      "true" === elem.contentEditable)
  );
}
var skipSelectionChangeEvent =
    canUseDOM && "documentMode" in document && 11 >= document.documentMode,
  activeElement = null,
  activeElementInst = null,
  lastSelection = null,
  mouseDown = !1;
function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
  var doc =
    nativeEventTarget.window === nativeEventTarget
      ? nativeEventTarget.document
      : 9 === nativeEventTarget.nodeType
        ? nativeEventTarget
        : nativeEventTarget.ownerDocument;
  mouseDown ||
    null == activeElement ||
    activeElement !== getActiveElement(doc) ||
    ((doc = activeElement),
    "selectionStart" in doc && hasSelectionCapabilities(doc)
      ? (doc = { start: doc.selectionStart, end: doc.selectionEnd })
      : ((doc = (
          (doc.ownerDocument && doc.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (doc = {
          anchorNode: doc.anchorNode,
          anchorOffset: doc.anchorOffset,
          focusNode: doc.focusNode,
          focusOffset: doc.focusOffset
        })),
    (lastSelection && shallowEqual(lastSelection, doc)) ||
      ((lastSelection = doc),
      (doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect")),
      0 < doc.length &&
        ((nativeEvent = new SyntheticEvent(
          "onSelect",
          "select",
          null,
          nativeEvent,
          nativeEventTarget
        )),
        dispatchQueue.push({ event: nativeEvent, listeners: doc }),
        (nativeEvent.target = activeElement))));
}
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit" + styleProp] = "webkit" + eventName;
  prefixes["Moz" + styleProp] = "moz" + eventName;
  return prefixes;
}
var vendorPrefixes = {
    animationend: makePrefixMap("Animation", "AnimationEnd"),
    animationiteration: makePrefixMap("Animation", "AnimationIteration"),
    animationstart: makePrefixMap("Animation", "AnimationStart"),
    transitionrun: makePrefixMap("Transition", "TransitionRun"),
    transitionstart: makePrefixMap("Transition", "TransitionStart"),
    transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
    transitionend: makePrefixMap("Transition", "TransitionEnd")
  },
  prefixedEventNames = {},
  style = {};
canUseDOM &&
  ((style = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vendorPrefixes.animationend.animation,
    delete vendorPrefixes.animationiteration.animation,
    delete vendorPrefixes.animationstart.animation),
  "TransitionEvent" in window ||
    delete vendorPrefixes.transitionend.transition);
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
  if (!vendorPrefixes[eventName]) return eventName;
  var prefixMap = vendorPrefixes[eventName],
    styleProp;
  for (styleProp in prefixMap)
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
      return (prefixedEventNames[eventName] = prefixMap[styleProp]);
  return eventName;
}
var ANIMATION_END = getVendorPrefixedEventName("animationend"),
  ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"),
  ANIMATION_START = getVendorPrefixedEventName("animationstart"),
  TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"),
  TRANSITION_START = getVendorPrefixedEventName("transitionstart"),
  TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"),
  TRANSITION_END = getVendorPrefixedEventName("transitionend"),
  topLevelEventsToReactNames = new Map(),
  simpleEventPluginEvents =
    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
simpleEventPluginEvents.push("scrollEnd");
function registerSimpleEvent(domEventName, reactName) {
  topLevelEventsToReactNames.set(domEventName, reactName);
  registerTwoPhaseEvent(reactName, [domEventName]);
}
var reportGlobalError =
    "function" === typeof reportError
      ? reportError
      : function (error) {
          if (
            "object" === typeof window &&
            "function" === typeof window.ErrorEvent
          ) {
            var event = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                "object" === typeof error &&
                null !== error &&
                "string" === typeof error.message
                  ? String(error.message)
                  : String(error),
              error: error
            });
            if (!window.dispatchEvent(event)) return;
          } else if (
            "object" === typeof process &&
            "function" === typeof process.emit
          ) {
            process.emit("uncaughtException", error);
            return;
          }
          console.error(error);
        },
  concurrentQueues = [],
  concurrentQueuesIndex = 0,
  concurrentlyUpdatedLanes = 0;
function finishQueueingConcurrentUpdates() {
  for (
    var endIndex = concurrentQueuesIndex,
      i = (concurrentlyUpdatedLanes = concurrentQueuesIndex = 0);
    i < endIndex;

  ) {
    var fiber = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var queue = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var update = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var lane = concurrentQueues[i];
    concurrentQueues[i++] = null;
    if (null !== queue && null !== update) {
      var pending = queue.pending;
      null === pending
        ? (update.next = update)
        : ((update.next = pending.next), (pending.next = update));
      queue.pending = update;
    }
    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
  }
}
function enqueueUpdate$1(fiber, queue, update, lane) {
  concurrentQueues[concurrentQueuesIndex++] = fiber;
  concurrentQueues[concurrentQueuesIndex++] = queue;
  concurrentQueues[concurrentQueuesIndex++] = update;
  concurrentQueues[concurrentQueuesIndex++] = lane;
  concurrentlyUpdatedLanes |= lane;
  fiber.lanes |= lane;
  fiber = fiber.alternate;
  null !== fiber && (fiber.lanes |= lane);
}
function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
  enqueueUpdate$1(fiber, queue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function enqueueConcurrentRenderForLane(fiber, lane) {
  enqueueUpdate$1(fiber, null, null, lane);
  return getRootForUpdatedFiber(fiber);
}
function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
  sourceFiber.lanes |= lane;
  var alternate = sourceFiber.alternate;
  null !== alternate && (alternate.lanes |= lane);
  for (var isHidden = !1, parent = sourceFiber.return; null !== parent; )
    (parent.childLanes |= lane),
      (alternate = parent.alternate),
      null !== alternate && (alternate.childLanes |= lane),
      22 === parent.tag &&
        ((sourceFiber = parent.stateNode),
        null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = !0)),
      (sourceFiber = parent),
      (parent = parent.return);
  return 3 === sourceFiber.tag
    ? ((parent = sourceFiber.stateNode),
      isHidden &&
        null !== update &&
        ((isHidden = 31 - clz32(lane)),
        (sourceFiber = parent.hiddenUpdates),
        (alternate = sourceFiber[isHidden]),
        null === alternate
          ? (sourceFiber[isHidden] = [update])
          : alternate.push(update),
        (update.lane = lane | 536870912)),
      parent)
    : null;
}
function getRootForUpdatedFiber(sourceFiber) {
  if (50 < nestedUpdateCount)
    throw (
      ((nestedUpdateCount = 0),
      (rootWithNestedUpdates = null),
      Error(formatProdErrorMessage(185)))
    );
  for (var parent = sourceFiber.return; null !== parent; )
    (sourceFiber = parent), (parent = sourceFiber.return);
  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
}
var emptyContextObject = {};
function FiberNode(tag, pendingProps, key, mode) {
  this.tag = tag;
  this.key = key;
  this.sibling =
    this.child =
    this.return =
    this.stateNode =
    this.type =
    this.elementType =
      null;
  this.index = 0;
  this.refCleanup = this.ref = null;
  this.pendingProps = pendingProps;
  this.dependencies =
    this.memoizedState =
    this.updateQueue =
    this.memoizedProps =
      null;
  this.mode = mode;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function createFiberImplClass(tag, pendingProps, key, mode) {
  return new FiberNode(tag, pendingProps, key, mode);
}
function shouldConstruct(Component) {
  Component = Component.prototype;
  return !(!Component || !Component.isReactComponent);
}
function createWorkInProgress(current, pendingProps) {
  var workInProgress = current.alternate;
  null === workInProgress
    ? ((workInProgress = createFiberImplClass(
        current.tag,
        pendingProps,
        current.key,
        current.mode
      )),
      (workInProgress.elementType = current.elementType),
      (workInProgress.type = current.type),
      (workInProgress.stateNode = current.stateNode),
      (workInProgress.alternate = current),
      (current.alternate = workInProgress))
    : ((workInProgress.pendingProps = pendingProps),
      (workInProgress.type = current.type),
      (workInProgress.flags = 0),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null));
  workInProgress.flags = current.flags & 65011712;
  workInProgress.childLanes = current.childLanes;
  workInProgress.lanes = current.lanes;
  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;
  pendingProps = current.dependencies;
  workInProgress.dependencies =
    null === pendingProps
      ? null
      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;
  workInProgress.refCleanup = current.refCleanup;
  return workInProgress;
}
function resetWorkInProgress(workInProgress, renderLanes) {
  workInProgress.flags &= 65011714;
  var current = workInProgress.alternate;
  null === current
    ? ((workInProgress.childLanes = 0),
      (workInProgress.lanes = renderLanes),
      (workInProgress.child = null),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.memoizedProps = null),
      (workInProgress.memoizedState = null),
      (workInProgress.updateQueue = null),
      (workInProgress.dependencies = null),
      (workInProgress.stateNode = null))
    : ((workInProgress.childLanes = current.childLanes),
      (workInProgress.lanes = current.lanes),
      (workInProgress.child = current.child),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null),
      (workInProgress.memoizedProps = current.memoizedProps),
      (workInProgress.memoizedState = current.memoizedState),
      (workInProgress.updateQueue = current.updateQueue),
      (workInProgress.type = current.type),
      (renderLanes = current.dependencies),
      (workInProgress.dependencies =
        null === renderLanes
          ? null
          : {
              lanes: renderLanes.lanes,
              firstContext: renderLanes.firstContext
            }));
  return workInProgress;
}
function createFiberFromTypeAndProps(
  type,
  key,
  pendingProps,
  owner,
  mode,
  lanes
) {
  var fiberTag = 0;
  owner = type;
  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
  else if ("string" === typeof type)
    fiberTag = isHostHoistableType(
      type,
      pendingProps,
      contextStackCursor.current
    )
      ? 26
      : "html" === type || "head" === type || "body" === type
        ? 27
        : 5;
  else
    a: switch (type) {
      case REACT_ACTIVITY_TYPE:
        return (
          (type = createFiberImplClass(31, pendingProps, key, mode)),
          (type.elementType = REACT_ACTIVITY_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
      case REACT_STRICT_MODE_TYPE:
        fiberTag = 8;
        mode |= 24;
        break;
      case REACT_PROFILER_TYPE:
        return (
          (type = createFiberImplClass(12, pendingProps, key, mode | 2)),
          (type.elementType = REACT_PROFILER_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_TYPE:
        return (
          (type = createFiberImplClass(13, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_LIST_TYPE:
        return (
          (type = createFiberImplClass(19, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_LIST_TYPE),
          (type.lanes = lanes),
          type
        );
      default:
        if ("object" === typeof type && null !== type)
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              fiberTag = 10;
              break a;
            case REACT_CONSUMER_TYPE:
              fiberTag = 9;
              break a;
            case REACT_FORWARD_REF_TYPE:
              fiberTag = 11;
              break a;
            case REACT_MEMO_TYPE:
              fiberTag = 14;
              break a;
            case REACT_LAZY_TYPE:
              fiberTag = 16;
              owner = null;
              break a;
          }
        fiberTag = 29;
        pendingProps = Error(
          formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
        );
        owner = null;
    }
  key = createFiberImplClass(fiberTag, pendingProps, key, mode);
  key.elementType = type;
  key.type = owner;
  key.lanes = lanes;
  return key;
}
function createFiberFromFragment(elements, mode, lanes, key) {
  elements = createFiberImplClass(7, elements, key, mode);
  elements.lanes = lanes;
  return elements;
}
function createFiberFromText(content, mode, lanes) {
  content = createFiberImplClass(6, content, null, mode);
  content.lanes = lanes;
  return content;
}
function createFiberFromDehydratedFragment(dehydratedNode) {
  var fiber = createFiberImplClass(18, null, null, 0);
  fiber.stateNode = dehydratedNode;
  return fiber;
}
function createFiberFromPortal(portal, mode, lanes) {
  mode = createFiberImplClass(
    4,
    null !== portal.children ? portal.children : [],
    portal.key,
    mode
  );
  mode.lanes = lanes;
  mode.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null,
    implementation: portal.implementation
  };
  return mode;
}
var CapturedStacks = new WeakMap();
function createCapturedValueAtFiber(value, source) {
  if ("object" === typeof value && null !== value) {
    var existing = CapturedStacks.get(value);
    if (void 0 !== existing) return existing;
    source = {
      value: value,
      source: source,
      stack: getStackByFiberInDevAndProd(source)
    };
    CapturedStacks.set(value, source);
    return source;
  }
  return {
    value: value,
    source: source,
    stack: getStackByFiberInDevAndProd(source)
  };
}
var forkStack = [],
  forkStackIndex = 0,
  treeForkProvider = null,
  treeForkCount = 0,
  idStack = [],
  idStackIndex = 0,
  treeContextProvider = null,
  treeContextId = 1,
  treeContextOverflow = "";
function pushTreeFork(workInProgress, totalChildren) {
  forkStack[forkStackIndex++] = treeForkCount;
  forkStack[forkStackIndex++] = treeForkProvider;
  treeForkProvider = workInProgress;
  treeForkCount = totalChildren;
}
function pushTreeId(workInProgress, totalChildren, index) {
  idStack[idStackIndex++] = treeContextId;
  idStack[idStackIndex++] = treeContextOverflow;
  idStack[idStackIndex++] = treeContextProvider;
  treeContextProvider = workInProgress;
  var baseIdWithLeadingBit = treeContextId;
  workInProgress = treeContextOverflow;
  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
  baseIdWithLeadingBit &= ~(1 << baseLength);
  index += 1;
  var length = 32 - clz32(totalChildren) + baseLength;
  if (30 < length) {
    var numberOfOverflowBits = baseLength - (baseLength % 5);
    length = (
      baseIdWithLeadingBit &
      ((1 << numberOfOverflowBits) - 1)
    ).toString(32);
    baseIdWithLeadingBit >>= numberOfOverflowBits;
    baseLength -= numberOfOverflowBits;
    treeContextId =
      (1 << (32 - clz32(totalChildren) + baseLength)) |
      (index << baseLength) |
      baseIdWithLeadingBit;
    treeContextOverflow = length + workInProgress;
  } else
    (treeContextId =
      (1 << length) | (index << baseLength) | baseIdWithLeadingBit),
      (treeContextOverflow = workInProgress);
}
function pushMaterializedTreeId(workInProgress) {
  null !== workInProgress.return &&
    (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
}
function popTreeContext(workInProgress) {
  for (; workInProgress === treeForkProvider; )
    (treeForkProvider = forkStack[--forkStackIndex]),
      (forkStack[forkStackIndex] = null),
      (treeForkCount = forkStack[--forkStackIndex]),
      (forkStack[forkStackIndex] = null);
  for (; workInProgress === treeContextProvider; )
    (treeContextProvider = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null),
      (treeContextOverflow = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null),
      (treeContextId = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null);
}
function restoreSuspendedTreeContext(workInProgress, suspendedContext) {
  idStack[idStackIndex++] = treeContextId;
  idStack[idStackIndex++] = treeContextOverflow;
  idStack[idStackIndex++] = treeContextProvider;
  treeContextId = suspendedContext.id;
  treeContextOverflow = suspendedContext.overflow;
  treeContextProvider = workInProgress;
}
var hydrationParentFiber = null,
  nextHydratableInstance = null,
  isHydrating = !1,
  hydrationErrors = null,
  rootOrSingletonContext = !1,
  HydrationMismatchException = Error(formatProdErrorMessage(519));
function throwOnHydrationMismatch(fiber) {
  var error = Error(
    formatProdErrorMessage(
      418,
      1 < arguments.length && void 0 !== arguments[1] && arguments[1]
        ? "text"
        : "HTML",
      ""
    )
  );
  queueHydrationError(createCapturedValueAtFiber(error, fiber));
  throw HydrationMismatchException;
}
function prepareToHydrateHostInstance(fiber) {
  var instance = fiber.stateNode,
    type = fiber.type,
    props = fiber.memoizedProps;
  instance[internalInstanceKey] = fiber;
  instance[internalPropsKey] = props;
  switch (type) {
    case "dialog":
      listenToNonDelegatedEvent("cancel", instance);
      listenToNonDelegatedEvent("close", instance);
      break;
    case "iframe":
    case "object":
    case "embed":
      listenToNonDelegatedEvent("load", instance);
      break;
    case "video":
    case "audio":
      for (type = 0; type < mediaEventTypes.length; type++)
        listenToNonDelegatedEvent(mediaEventTypes[type], instance);
      break;
    case "source":
      listenToNonDelegatedEvent("error", instance);
      break;
    case "img":
    case "image":
    case "link":
      listenToNonDelegatedEvent("error", instance);
      listenToNonDelegatedEvent("load", instance);
      break;
    case "details":
      listenToNonDelegatedEvent("toggle", instance);
      break;
    case "input":
      listenToNonDelegatedEvent("invalid", instance);
      initInput(
        instance,
        props.value,
        props.defaultValue,
        props.checked,
        props.defaultChecked,
        props.type,
        props.name,
        !0
      );
      break;
    case "select":
      listenToNonDelegatedEvent("invalid", instance);
      break;
    case "textarea":
      listenToNonDelegatedEvent("invalid", instance),
        initTextarea(instance, props.value, props.defaultValue, props.children);
  }
  type = props.children;
  ("string" !== typeof type &&
    "number" !== typeof type &&
    "bigint" !== typeof type) ||
  instance.textContent === "" + type ||
  !0 === props.suppressHydrationWarning ||
  checkForUnmatchedText(instance.textContent, type)
    ? (null != props.popover &&
        (listenToNonDelegatedEvent("beforetoggle", instance),
        listenToNonDelegatedEvent("toggle", instance)),
      null != props.onScroll && listenToNonDelegatedEvent("scroll", instance),
      null != props.onScrollEnd &&
        listenToNonDelegatedEvent("scrollend", instance),
      null != props.onClick && (instance.onclick = noop$1),
      (instance = !0))
    : (instance = !1);
  instance || throwOnHydrationMismatch(fiber, !0);
}
function popToNextHostParent(fiber) {
  for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
    switch (hydrationParentFiber.tag) {
      case 5:
      case 31:
      case 13:
        rootOrSingletonContext = !1;
        return;
      case 27:
      case 3:
        rootOrSingletonContext = !0;
        return;
      default:
        hydrationParentFiber = hydrationParentFiber.return;
    }
}
function popHydrationState(fiber) {
  if (fiber !== hydrationParentFiber) return !1;
  if (!isHydrating) return popToNextHostParent(fiber), (isHydrating = !0), !1;
  var tag = fiber.tag,
    JSCompiler_temp;
  if ((JSCompiler_temp = 3 !== tag && 27 !== tag)) {
    if ((JSCompiler_temp = 5 === tag))
      (JSCompiler_temp = fiber.type),
        (JSCompiler_temp =
          !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) ||
          shouldSetTextContent(fiber.type, fiber.memoizedProps));
    JSCompiler_temp = !JSCompiler_temp;
  }
  JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
  popToNextHostParent(fiber);
  if (13 === tag) {
    fiber = fiber.memoizedState;
    fiber = null !== fiber ? fiber.dehydrated : null;
    if (!fiber) throw Error(formatProdErrorMessage(317));
    nextHydratableInstance =
      getNextHydratableInstanceAfterHydrationBoundary(fiber);
  } else if (31 === tag) {
    fiber = fiber.memoizedState;
    fiber = null !== fiber ? fiber.dehydrated : null;
    if (!fiber) throw Error(formatProdErrorMessage(317));
    nextHydratableInstance =
      getNextHydratableInstanceAfterHydrationBoundary(fiber);
  } else
    27 === tag
      ? ((tag = nextHydratableInstance),
        isSingletonScope(fiber.type)
          ? ((fiber = previousHydratableOnEnteringScopedSingleton),
            (previousHydratableOnEnteringScopedSingleton = null),
            (nextHydratableInstance = fiber))
          : (nextHydratableInstance = tag))
      : (nextHydratableInstance = hydrationParentFiber
          ? getNextHydratable(fiber.stateNode.nextSibling)
          : null);
  return !0;
}
function resetHydrationState() {
  nextHydratableInstance = hydrationParentFiber = null;
  isHydrating = !1;
}
function upgradeHydrationErrorsToRecoverable() {
  var queuedErrors = hydrationErrors;
  null !== queuedErrors &&
    (null === workInProgressRootRecoverableErrors
      ? (workInProgressRootRecoverableErrors = queuedErrors)
      : workInProgressRootRecoverableErrors.push.apply(
          workInProgressRootRecoverableErrors,
          queuedErrors
        ),
    (hydrationErrors = null));
  return queuedErrors;
}
function queueHydrationError(error) {
  null === hydrationErrors
    ? (hydrationErrors = [error])
    : hydrationErrors.push(error);
}
var valueCursor = createCursor(null),
  currentlyRenderingFiber$1 = null,
  lastContextDependency = null;
function pushProvider(providerFiber, context, nextValue) {
  push(valueCursor, context._currentValue);
  context._currentValue = nextValue;
}
function popProvider(context) {
  context._currentValue = valueCursor.current;
  pop(valueCursor);
}
function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
  for (; null !== parent; ) {
    var alternate = parent.alternate;
    (parent.childLanes & renderLanes) !== renderLanes
      ? ((parent.childLanes |= renderLanes),
        null !== alternate && (alternate.childLanes |= renderLanes))
      : null !== alternate &&
        (alternate.childLanes & renderLanes) !== renderLanes &&
        (alternate.childLanes |= renderLanes);
    if (parent === propagationRoot) break;
    parent = parent.return;
  }
}
function propagateContextChanges(
  workInProgress,
  contexts,
  renderLanes,
  forcePropagateEntireTree
) {
  var fiber = workInProgress.child;
  null !== fiber && (fiber.return = workInProgress);
  for (; null !== fiber; ) {
    var list = fiber.dependencies;
    if (null !== list) {
      var nextFiber = fiber.child;
      list = list.firstContext;
      a: for (; null !== list; ) {
        var dependency = list;
        list = fiber;
        for (var i = 0; i < contexts.length; i++)
          if (dependency.context === contexts[i]) {
            list.lanes |= renderLanes;
            dependency = list.alternate;
            null !== dependency && (dependency.lanes |= renderLanes);
            scheduleContextWorkOnParentPath(
              list.return,
              renderLanes,
              workInProgress
            );
            forcePropagateEntireTree || (nextFiber = null);
            break a;
          }
        list = dependency.next;
      }
    } else if (18 === fiber.tag) {
      nextFiber = fiber.return;
      if (null === nextFiber) throw Error(formatProdErrorMessage(341));
      nextFiber.lanes |= renderLanes;
      list = nextFiber.alternate;
      null !== list && (list.lanes |= renderLanes);
      scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
      nextFiber = null;
    } else nextFiber = fiber.child;
    if (null !== nextFiber) nextFiber.return = fiber;
    else
      for (nextFiber = fiber; null !== nextFiber; ) {
        if (nextFiber === workInProgress) {
          nextFiber = null;
          break;
        }
        fiber = nextFiber.sibling;
        if (null !== fiber) {
          fiber.return = nextFiber.return;
          nextFiber = fiber;
          break;
        }
        nextFiber = nextFiber.return;
      }
    fiber = nextFiber;
  }
}
function propagateParentContextChanges(
  current,
  workInProgress,
  renderLanes,
  forcePropagateEntireTree
) {
  current = null;
  for (
    var parent = workInProgress, isInsidePropagationBailout = !1;
    null !== parent;

  ) {
    if (!isInsidePropagationBailout)
      if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = !0;
      else if (0 !== (parent.flags & 262144)) break;
    if (10 === parent.tag) {
      var currentParent = parent.alternate;
      if (null === currentParent) throw Error(formatProdErrorMessage(387));
      currentParent = currentParent.memoizedProps;
      if (null !== currentParent) {
        var context = parent.type;
        objectIs(parent.pendingProps.value, currentParent.value) ||
          (null !== current ? current.push(context) : (current = [context]));
      }
    } else if (parent === hostTransitionProviderCursor.current) {
      currentParent = parent.alternate;
      if (null === currentParent) throw Error(formatProdErrorMessage(387));
      currentParent.memoizedState.memoizedState !==
        parent.memoizedState.memoizedState &&
        (null !== current
          ? current.push(HostTransitionContext)
          : (current = [HostTransitionContext]));
    }
    parent = parent.return;
  }
  null !== current &&
    propagateContextChanges(
      workInProgress,
      current,
      renderLanes,
      forcePropagateEntireTree
    );
  workInProgress.flags |= 262144;
}
function checkIfContextChanged(currentDependencies) {
  for (
    currentDependencies = currentDependencies.firstContext;
    null !== currentDependencies;

  ) {
    if (
      !objectIs(
        currentDependencies.context._currentValue,
        currentDependencies.memoizedValue
      )
    )
      return !0;
    currentDependencies = currentDependencies.next;
  }
  return !1;
}
function prepareToReadContext(workInProgress) {
  currentlyRenderingFiber$1 = workInProgress;
  lastContextDependency = null;
  workInProgress = workInProgress.dependencies;
  null !== workInProgress && (workInProgress.firstContext = null);
}
function readContext(context) {
  return readContextForConsumer(currentlyRenderingFiber$1, context);
}
function readContextDuringReconciliation(consumer, context) {
  null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
  return readContextForConsumer(consumer, context);
}
function readContextForConsumer(consumer, context) {
  var value = context._currentValue;
  context = { context: context, memoizedValue: value, next: null };
  if (null === lastContextDependency) {
    if (null === consumer) throw Error(formatProdErrorMessage(308));
    lastContextDependency = context;
    consumer.dependencies = { lanes: 0, firstContext: context };
    consumer.flags |= 524288;
  } else lastContextDependency = lastContextDependency.next = context;
  return value;
}
var AbortControllerLocal =
    "undefined" !== typeof AbortController
      ? AbortController
      : function () {
          var listeners = [],
            signal = (this.signal = {
              aborted: !1,
              addEventListener: function (type, listener) {
                listeners.push(listener);
              }
            });
          this.abort = function () {
            signal.aborted = !0;
            listeners.forEach(function (listener) {
              return listener();
            });
          };
        },
  scheduleCallback$2 = Scheduler.unstable_scheduleCallback,
  NormalPriority = Scheduler.unstable_NormalPriority,
  CacheContext = {
    $$typeof: REACT_CONTEXT_TYPE,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
function createCache() {
  return {
    controller: new AbortControllerLocal(),
    data: new Map(),
    refCount: 0
  };
}
function releaseCache(cache) {
  cache.refCount--;
  0 === cache.refCount &&
    scheduleCallback$2(NormalPriority, function () {
      cache.controller.abort();
    });
}
var currentEntangledListeners = null,
  currentEntangledPendingCount = 0,
  currentEntangledLane = 0,
  currentEntangledActionThenable = null;
function entangleAsyncAction(transition, thenable) {
  if (null === currentEntangledListeners) {
    var entangledListeners = (currentEntangledListeners = []);
    currentEntangledPendingCount = 0;
    currentEntangledLane = requestTransitionLane();
    currentEntangledActionThenable = {
      status: "pending",
      value: void 0,
      then: function (resolve) {
        entangledListeners.push(resolve);
      }
    };
  }
  currentEntangledPendingCount++;
  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
  return thenable;
}
function pingEngtangledActionScope() {
  if (
    0 === --currentEntangledPendingCount &&
    null !== currentEntangledListeners
  ) {
    null !== currentEntangledActionThenable &&
      (currentEntangledActionThenable.status = "fulfilled");
    var listeners = currentEntangledListeners;
    currentEntangledListeners = null;
    currentEntangledLane = 0;
    currentEntangledActionThenable = null;
    for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
  }
}
function chainThenableValue(thenable, result) {
  var listeners = [],
    thenableWithOverride = {
      status: "pending",
      value: null,
      reason: null,
      then: function (resolve) {
        listeners.push(resolve);
      }
    };
  thenable.then(
    function () {
      thenableWithOverride.status = "fulfilled";
      thenableWithOverride.value = result;
      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
    },
    function (error) {
      thenableWithOverride.status = "rejected";
      thenableWithOverride.reason = error;
      for (error = 0; error < listeners.length; error++)
        (0, listeners[error])(void 0);
    }
  );
  return thenableWithOverride;
}
var prevOnStartTransitionFinish = ReactSharedInternals.S;
ReactSharedInternals.S = function (transition, returnValue) {
  globalMostRecentTransitionTime = now();
  "object" === typeof returnValue &&
    null !== returnValue &&
    "function" === typeof returnValue.then &&
    entangleAsyncAction(transition, returnValue);
  null !== prevOnStartTransitionFinish &&
    prevOnStartTransitionFinish(transition, returnValue);
};
var resumedCache = createCursor(null);
function peekCacheFromPool() {
  var cacheResumedFromPreviousRender = resumedCache.current;
  return null !== cacheResumedFromPreviousRender
    ? cacheResumedFromPreviousRender
    : workInProgressRoot.pooledCache;
}
function pushTransition(offscreenWorkInProgress, prevCachePool) {
  null === prevCachePool
    ? push(resumedCache, resumedCache.current)
    : push(resumedCache, prevCachePool.pool);
}
function getSuspendedCache() {
  var cacheFromPool = peekCacheFromPool();
  return null === cacheFromPool
    ? null
    : { parent: CacheContext._currentValue, pool: cacheFromPool };
}
var SuspenseException = Error(formatProdErrorMessage(460)),
  SuspenseyCommitException = Error(formatProdErrorMessage(474)),
  SuspenseActionException = Error(formatProdErrorMessage(542)),
  noopSuspenseyCommitThenable = { then: function () {} };
function isThenableResolved(thenable) {
  thenable = thenable.status;
  return "fulfilled" === thenable || "rejected" === thenable;
}
function trackUsedThenable(thenableState, thenable, index) {
  index = thenableState[index];
  void 0 === index
    ? thenableState.push(thenable)
    : index !== thenable && (thenable.then(noop$1, noop$1), (thenable = index));
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw (
        ((thenableState = thenable.reason),
        checkIfUseWrappedInAsyncCatch(thenableState),
        thenableState)
      );
    default:
      if ("string" === typeof thenable.status) thenable.then(noop$1, noop$1);
      else {
        thenableState = workInProgressRoot;
        if (null !== thenableState && 100 < thenableState.shellSuspendCounter)
          throw Error(formatProdErrorMessage(482));
        thenableState = thenable;
        thenableState.status = "pending";
        thenableState.then(
          function (fulfilledValue) {
            if ("pending" === thenable.status) {
              var fulfilledThenable = thenable;
              fulfilledThenable.status = "fulfilled";
              fulfilledThenable.value = fulfilledValue;
            }
          },
          function (error) {
            if ("pending" === thenable.status) {
              var rejectedThenable = thenable;
              rejectedThenable.status = "rejected";
              rejectedThenable.reason = error;
            }
          }
        );
      }
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw (
            ((thenableState = thenable.reason),
            checkIfUseWrappedInAsyncCatch(thenableState),
            thenableState)
          );
      }
      suspendedThenable = thenable;
      throw SuspenseException;
  }
}
function resolveLazy(lazyType) {
  try {
    var init = lazyType._init;
    return init(lazyType._payload);
  } catch (x) {
    if (null !== x && "object" === typeof x && "function" === typeof x.then)
      throw ((suspendedThenable = x), SuspenseException);
    throw x;
  }
}
var suspendedThenable = null;
function getSuspendedThenable() {
  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
  var thenable = suspendedThenable;
  suspendedThenable = null;
  return thenable;
}
function checkIfUseWrappedInAsyncCatch(rejectedReason) {
  if (
    rejectedReason === SuspenseException ||
    rejectedReason === SuspenseActionException
  )
    throw Error(formatProdErrorMessage(483));
}
var thenableState$1 = null,
  thenableIndexCounter$1 = 0;
function unwrapThenable(thenable) {
  var index = thenableIndexCounter$1;
  thenableIndexCounter$1 += 1;
  null === thenableState$1 && (thenableState$1 = []);
  return trackUsedThenable(thenableState$1, thenable, index);
}
function coerceRef(workInProgress, element) {
  element = element.props.ref;
  workInProgress.ref = void 0 !== element ? element : null;
}
function throwOnInvalidObjectTypeImpl(returnFiber, newChild) {
  if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
    throw Error(formatProdErrorMessage(525));
  returnFiber = Object.prototype.toString.call(newChild);
  throw Error(
    formatProdErrorMessage(
      31,
      "[object Object]" === returnFiber
        ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
        : returnFiber
    )
  );
}
function createChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (shouldTrackSideEffects) {
      var deletions = returnFiber.deletions;
      null === deletions
        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
        : deletions.push(childToDelete);
    }
  }
  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) return null;
    for (; null !== currentFirstChild; )
      deleteChild(returnFiber, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return null;
  }
  function mapRemainingChildren(currentFirstChild) {
    for (var existingChildren = new Map(); null !== currentFirstChild; )
      null !== currentFirstChild.key
        ? existingChildren.set(currentFirstChild.key, currentFirstChild)
        : existingChildren.set(currentFirstChild.index, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return existingChildren;
  }
  function useFiber(fiber, pendingProps) {
    fiber = createWorkInProgress(fiber, pendingProps);
    fiber.index = 0;
    fiber.sibling = null;
    return fiber;
  }
  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects)
      return (newFiber.flags |= 1048576), lastPlacedIndex;
    newIndex = newFiber.alternate;
    if (null !== newIndex)
      return (
        (newIndex = newIndex.index),
        newIndex < lastPlacedIndex
          ? ((newFiber.flags |= 67108866), lastPlacedIndex)
          : newIndex
      );
    newFiber.flags |= 67108866;
    return lastPlacedIndex;
  }
  function placeSingleChild(newFiber) {
    shouldTrackSideEffects &&
      null === newFiber.alternate &&
      (newFiber.flags |= 67108866);
    return newFiber;
  }
  function updateTextNode(returnFiber, current, textContent, lanes) {
    if (null === current || 6 !== current.tag)
      return (
        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, textContent);
    current.return = returnFiber;
    return current;
  }
  function updateElement(returnFiber, current, element, lanes) {
    var elementType = element.type;
    if (elementType === REACT_FRAGMENT_TYPE)
      return updateFragment(
        returnFiber,
        current,
        element.props.children,
        lanes,
        element.key
      );
    if (
      null !== current &&
      (current.elementType === elementType ||
        ("object" === typeof elementType &&
          null !== elementType &&
          elementType.$$typeof === REACT_LAZY_TYPE &&
          resolveLazy(elementType) === current.type))
    )
      return (
        (current = useFiber(current, element.props)),
        coerceRef(current, element),
        (current.return = returnFiber),
        current
      );
    current = createFiberFromTypeAndProps(
      element.type,
      element.key,
      element.props,
      null,
      returnFiber.mode,
      lanes
    );
    coerceRef(current, element);
    current.return = returnFiber;
    return current;
  }
  function updatePortal(returnFiber, current, portal, lanes) {
    if (
      null === current ||
      4 !== current.tag ||
      current.stateNode.containerInfo !== portal.containerInfo ||
      current.stateNode.implementation !== portal.implementation
    )
      return (
        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, portal.children || []);
    current.return = returnFiber;
    return current;
  }
  function updateFragment(returnFiber, current, fragment, lanes, key) {
    if (null === current || 7 !== current.tag)
      return (
        (current = createFiberFromFragment(
          fragment,
          returnFiber.mode,
          lanes,
          key
        )),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, fragment);
    current.return = returnFiber;
    return current;
  }
  function createChild(returnFiber, newChild, lanes) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return (
        (newChild = createFiberFromText(
          "" + newChild,
          returnFiber.mode,
          lanes
        )),
        (newChild.return = returnFiber),
        newChild
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (lanes = createFiberFromTypeAndProps(
              newChild.type,
              newChild.key,
              newChild.props,
              null,
              returnFiber.mode,
              lanes
            )),
            coerceRef(lanes, newChild),
            (lanes.return = returnFiber),
            lanes
          );
        case REACT_PORTAL_TYPE:
          return (
            (newChild = createFiberFromPortal(
              newChild,
              returnFiber.mode,
              lanes
            )),
            (newChild.return = returnFiber),
            newChild
          );
        case REACT_LAZY_TYPE:
          return (
            (newChild = resolveLazy(newChild)),
            createChild(returnFiber, newChild, lanes)
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (newChild = createFiberFromFragment(
            newChild,
            returnFiber.mode,
            lanes,
            null
          )),
          (newChild.return = returnFiber),
          newChild
        );
      if ("function" === typeof newChild.then)
        return createChild(returnFiber, unwrapThenable(newChild), lanes);
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return createChild(
          returnFiber,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
    }
    return null;
  }
  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
    var key = null !== oldFiber ? oldFiber.key : null;
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return null !== key
        ? null
        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return newChild.key === key
            ? updateElement(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_PORTAL_TYPE:
          return newChild.key === key
            ? updatePortal(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_LAZY_TYPE:
          return (
            (newChild = resolveLazy(newChild)),
            updateSlot(returnFiber, oldFiber, newChild, lanes)
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return null !== key
          ? null
          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
      if ("function" === typeof newChild.then)
        return updateSlot(
          returnFiber,
          oldFiber,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateSlot(
          returnFiber,
          oldFiber,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
    }
    return null;
  }
  function updateFromMap(
    existingChildren,
    returnFiber,
    newIdx,
    newChild,
    lanes
  ) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return (
        (existingChildren = existingChildren.get(newIdx) || null),
        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updateElement(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_PORTAL_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updatePortal(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_LAZY_TYPE:
          return (
            (newChild = resolveLazy(newChild)),
            updateFromMap(
              existingChildren,
              returnFiber,
              newIdx,
              newChild,
              lanes
            )
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (existingChildren = existingChildren.get(newIdx) || null),
          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
        );
      if ("function" === typeof newChild.then)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
    }
    return null;
  }
  function reconcileChildrenArray(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null;
      null !== oldFiber && newIdx < newChildren.length;
      newIdx++
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(
        returnFiber,
        oldFiber,
        newChildren[newIdx],
        lanes
      );
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (newIdx === newChildren.length)
      return (
        deleteRemainingChildren(returnFiber, oldFiber),
        isHydrating && pushTreeFork(returnFiber, newIdx),
        resultingFirstChild
      );
    if (null === oldFiber) {
      for (; newIdx < newChildren.length; newIdx++)
        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
          null !== oldFiber &&
            ((currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            )),
            null === previousNewFiber
              ? (resultingFirstChild = oldFiber)
              : (previousNewFiber.sibling = oldFiber),
            (previousNewFiber = oldFiber));
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(oldFiber);
      newIdx < newChildren.length;
      newIdx++
    )
      (nextOldFiber = updateFromMap(
        oldFiber,
        returnFiber,
        newIdx,
        newChildren[newIdx],
        lanes
      )),
        null !== nextOldFiber &&
          (shouldTrackSideEffects &&
            null !== nextOldFiber.alternate &&
            oldFiber.delete(
              null === nextOldFiber.key ? newIdx : nextOldFiber.key
            ),
          (currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          )),
          null === previousNewFiber
            ? (resultingFirstChild = nextOldFiber)
            : (previousNewFiber.sibling = nextOldFiber),
          (previousNewFiber = nextOldFiber));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return resultingFirstChild;
  }
  function reconcileChildrenIterator(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    if (null == newChildren) throw Error(formatProdErrorMessage(151));
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null,
        step = newChildren.next();
      null !== oldFiber && !step.done;
      newIdx++, step = newChildren.next()
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (step.done)
      return (
        deleteRemainingChildren(returnFiber, oldFiber),
        isHydrating && pushTreeFork(returnFiber, newIdx),
        resultingFirstChild
      );
    if (null === oldFiber) {
      for (; !step.done; newIdx++, step = newChildren.next())
        (step = createChild(returnFiber, step.value, lanes)),
          null !== step &&
            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
            null === previousNewFiber
              ? (resultingFirstChild = step)
              : (previousNewFiber.sibling = step),
            (previousNewFiber = step));
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(oldFiber);
      !step.done;
      newIdx++, step = newChildren.next()
    )
      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
        null !== step &&
          (shouldTrackSideEffects &&
            null !== step.alternate &&
            oldFiber.delete(null === step.key ? newIdx : step.key),
          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
          null === previousNewFiber
            ? (resultingFirstChild = step)
            : (previousNewFiber.sibling = step),
          (previousNewFiber = step));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return resultingFirstChild;
  }
  function reconcileChildFibersImpl(
    returnFiber,
    currentFirstChild,
    newChild,
    lanes
  ) {
    "object" === typeof newChild &&
      null !== newChild &&
      newChild.type === REACT_FRAGMENT_TYPE &&
      null === newChild.key &&
      (newChild = newChild.props.children);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          a: {
            for (var key = newChild.key; null !== currentFirstChild; ) {
              if (currentFirstChild.key === key) {
                key = newChild.type;
                if (key === REACT_FRAGMENT_TYPE) {
                  if (7 === currentFirstChild.tag) {
                    deleteRemainingChildren(
                      returnFiber,
                      currentFirstChild.sibling
                    );
                    lanes = useFiber(
                      currentFirstChild,
                      newChild.props.children
                    );
                    lanes.return = returnFiber;
                    returnFiber = lanes;
                    break a;
                  }
                } else if (
                  currentFirstChild.elementType === key ||
                  ("object" === typeof key &&
                    null !== key &&
                    key.$$typeof === REACT_LAZY_TYPE &&
                    resolveLazy(key) === currentFirstChild.type)
                ) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  lanes = useFiber(currentFirstChild, newChild.props);
                  coerceRef(lanes, newChild);
                  lanes.return = returnFiber;
                  returnFiber = lanes;
                  break a;
                }
                deleteRemainingChildren(returnFiber, currentFirstChild);
                break;
              } else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            newChild.type === REACT_FRAGMENT_TYPE
              ? ((lanes = createFiberFromFragment(
                  newChild.props.children,
                  returnFiber.mode,
                  lanes,
                  newChild.key
                )),
                (lanes.return = returnFiber),
                (returnFiber = lanes))
              : ((lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                )),
                coerceRef(lanes, newChild),
                (lanes.return = returnFiber),
                (returnFiber = lanes));
          }
          return placeSingleChild(returnFiber);
        case REACT_PORTAL_TYPE:
          a: {
            for (key = newChild.key; null !== currentFirstChild; ) {
              if (currentFirstChild.key === key)
                if (
                  4 === currentFirstChild.tag &&
                  currentFirstChild.stateNode.containerInfo ===
                    newChild.containerInfo &&
                  currentFirstChild.stateNode.implementation ===
                    newChild.implementation
                ) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  lanes = useFiber(currentFirstChild, newChild.children || []);
                  lanes.return = returnFiber;
                  returnFiber = lanes;
                  break a;
                } else {
                  deleteRemainingChildren(returnFiber, currentFirstChild);
                  break;
                }
              else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
            lanes.return = returnFiber;
            returnFiber = lanes;
          }
          return placeSingleChild(returnFiber);
        case REACT_LAZY_TYPE:
          return (
            (newChild = resolveLazy(newChild)),
            reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            )
          );
      }
      if (isArrayImpl(newChild))
        return reconcileChildrenArray(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      if (getIteratorFn(newChild)) {
        key = getIteratorFn(newChild);
        if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
        newChild = key.call(newChild);
        return reconcileChildrenIterator(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      }
      if ("function" === typeof newChild.then)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
    }
    return ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
      ? ((newChild = "" + newChild),
        null !== currentFirstChild && 6 === currentFirstChild.tag
          ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
            (lanes = useFiber(currentFirstChild, newChild)),
            (lanes.return = returnFiber),
            (returnFiber = lanes))
          : (deleteRemainingChildren(returnFiber, currentFirstChild),
            (lanes = createFiberFromText(newChild, returnFiber.mode, lanes)),
            (lanes.return = returnFiber),
            (returnFiber = lanes)),
        placeSingleChild(returnFiber))
      : deleteRemainingChildren(returnFiber, currentFirstChild);
  }
  return function (returnFiber, currentFirstChild, newChild, lanes) {
    try {
      thenableIndexCounter$1 = 0;
      var firstChildFiber = reconcileChildFibersImpl(
        returnFiber,
        currentFirstChild,
        newChild,
        lanes
      );
      thenableState$1 = null;
      return firstChildFiber;
    } catch (x) {
      if (x === SuspenseException || x === SuspenseActionException) throw x;
      var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
      fiber.lanes = lanes;
      fiber.return = returnFiber;
      return fiber;
    } finally {
    }
  };
}
var reconcileChildFibers = createChildReconciler(!0),
  mountChildFibers = createChildReconciler(!1),
  hasForceUpdate = !1;
function initializeUpdateQueue(fiber) {
  fiber.updateQueue = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null
  };
}
function cloneUpdateQueue(current, workInProgress) {
  current = current.updateQueue;
  workInProgress.updateQueue === current &&
    (workInProgress.updateQueue = {
      baseState: current.baseState,
      firstBaseUpdate: current.firstBaseUpdate,
      lastBaseUpdate: current.lastBaseUpdate,
      shared: current.shared,
      callbacks: null
    });
}
function createUpdate(lane) {
  return { lane: lane, tag: 0, payload: null, callback: null, next: null };
}
function enqueueUpdate(fiber, update, lane) {
  var updateQueue = fiber.updateQueue;
  if (null === updateQueue) return null;
  updateQueue = updateQueue.shared;
  if (0 !== (executionContext & 2)) {
    var pending = updateQueue.pending;
    null === pending
      ? (update.next = update)
      : ((update.next = pending.next), (pending.next = update));
    updateQueue.pending = update;
    update = getRootForUpdatedFiber(fiber);
    markUpdateLaneFromFiberToRoot(fiber, null, lane);
    return update;
  }
  enqueueUpdate$1(fiber, updateQueue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function entangleTransitions(root, fiber, lane) {
  fiber = fiber.updateQueue;
  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 4194048))) {
    var queueLanes = fiber.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    fiber.lanes = lane;
    markRootEntangled(root, lane);
  }
}
function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
  var queue = workInProgress.updateQueue,
    current = workInProgress.alternate;
  if (
    null !== current &&
    ((current = current.updateQueue), queue === current)
  ) {
    var newFirst = null,
      newLast = null;
    queue = queue.firstBaseUpdate;
    if (null !== queue) {
      do {
        var clone = {
          lane: queue.lane,
          tag: queue.tag,
          payload: queue.payload,
          callback: null,
          next: null
        };
        null === newLast
          ? (newFirst = newLast = clone)
          : (newLast = newLast.next = clone);
        queue = queue.next;
      } while (null !== queue);
      null === newLast
        ? (newFirst = newLast = capturedUpdate)
        : (newLast = newLast.next = capturedUpdate);
    } else newFirst = newLast = capturedUpdate;
    queue = {
      baseState: current.baseState,
      firstBaseUpdate: newFirst,
      lastBaseUpdate: newLast,
      shared: current.shared,
      callbacks: current.callbacks
    };
    workInProgress.updateQueue = queue;
    return;
  }
  workInProgress = queue.lastBaseUpdate;
  null === workInProgress
    ? (queue.firstBaseUpdate = capturedUpdate)
    : (workInProgress.next = capturedUpdate);
  queue.lastBaseUpdate = capturedUpdate;
}
var didReadFromEntangledAsyncAction = !1;
function suspendIfUpdateReadFromEntangledAsyncAction() {
  if (didReadFromEntangledAsyncAction) {
    var entangledActionThenable = currentEntangledActionThenable;
    if (null !== entangledActionThenable) throw entangledActionThenable;
  }
}
function processUpdateQueue(
  workInProgress$jscomp$0,
  props,
  instance$jscomp$0,
  renderLanes
) {
  didReadFromEntangledAsyncAction = !1;
  var queue = workInProgress$jscomp$0.updateQueue;
  hasForceUpdate = !1;
  var firstBaseUpdate = queue.firstBaseUpdate,
    lastBaseUpdate = queue.lastBaseUpdate,
    pendingQueue = queue.shared.pending;
  if (null !== pendingQueue) {
    queue.shared.pending = null;
    var lastPendingUpdate = pendingQueue,
      firstPendingUpdate = lastPendingUpdate.next;
    lastPendingUpdate.next = null;
    null === lastBaseUpdate
      ? (firstBaseUpdate = firstPendingUpdate)
      : (lastBaseUpdate.next = firstPendingUpdate);
    lastBaseUpdate = lastPendingUpdate;
    var current = workInProgress$jscomp$0.alternate;
    null !== current &&
      ((current = current.updateQueue),
      (pendingQueue = current.lastBaseUpdate),
      pendingQueue !== lastBaseUpdate &&
        (null === pendingQueue
          ? (current.firstBaseUpdate = firstPendingUpdate)
          : (pendingQueue.next = firstPendingUpdate),
        (current.lastBaseUpdate = lastPendingUpdate)));
  }
  if (null !== firstBaseUpdate) {
    var newState = queue.baseState;
    lastBaseUpdate = 0;
    current = firstPendingUpdate = lastPendingUpdate = null;
    pendingQueue = firstBaseUpdate;
    do {
      var updateLane = pendingQueue.lane & -536870913,
        isHiddenUpdate = updateLane !== pendingQueue.lane;
      if (
        isHiddenUpdate
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        0 !== updateLane &&
          updateLane === currentEntangledLane &&
          (didReadFromEntangledAsyncAction = !0);
        null !== current &&
          (current = current.next =
            {
              lane: 0,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: null,
              next: null
            });
        a: {
          var workInProgress = workInProgress$jscomp$0,
            update = pendingQueue;
          updateLane = props;
          var instance = instance$jscomp$0;
          switch (update.tag) {
            case 1:
              workInProgress = update.payload;
              if ("function" === typeof workInProgress) {
                newState = workInProgress.call(instance, newState, updateLane);
                break a;
              }
              newState = workInProgress;
              break a;
            case 3:
              workInProgress.flags = (workInProgress.flags & -65537) | 128;
            case 0:
              workInProgress = update.payload;
              updateLane =
                "function" === typeof workInProgress
                  ? workInProgress.call(instance, newState, updateLane)
                  : workInProgress;
              if (null === updateLane || void 0 === updateLane) break a;
              newState = assign({}, newState, updateLane);
              break a;
            case 2:
              hasForceUpdate = !0;
          }
        }
        updateLane = pendingQueue.callback;
        null !== updateLane &&
          ((workInProgress$jscomp$0.flags |= 64),
          isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192),
          (isHiddenUpdate = queue.callbacks),
          null === isHiddenUpdate
            ? (queue.callbacks = [updateLane])
            : isHiddenUpdate.push(updateLane));
      } else
        (isHiddenUpdate = {
          lane: updateLane,
          tag: pendingQueue.tag,
          payload: pendingQueue.payload,
          callback: pendingQueue.callback,
          next: null
        }),
          null === current
            ? ((firstPendingUpdate = current = isHiddenUpdate),
              (lastPendingUpdate = newState))
            : (current = current.next = isHiddenUpdate),
          (lastBaseUpdate |= updateLane);
      pendingQueue = pendingQueue.next;
      if (null === pendingQueue)
        if (((pendingQueue = queue.shared.pending), null === pendingQueue))
          break;
        else
          (isHiddenUpdate = pendingQueue),
            (pendingQueue = isHiddenUpdate.next),
            (isHiddenUpdate.next = null),
            (queue.lastBaseUpdate = isHiddenUpdate),
            (queue.shared.pending = null);
    } while (1);
    null === current && (lastPendingUpdate = newState);
    queue.baseState = lastPendingUpdate;
    queue.firstBaseUpdate = firstPendingUpdate;
    queue.lastBaseUpdate = current;
    null === firstBaseUpdate && (queue.shared.lanes = 0);
    workInProgressRootSkippedLanes |= lastBaseUpdate;
    workInProgress$jscomp$0.lanes = lastBaseUpdate;
    workInProgress$jscomp$0.memoizedState = newState;
  }
}
function callCallback(callback, context) {
  if ("function" !== typeof callback)
    throw Error(formatProdErrorMessage(191, callback));
  callback.call(context);
}
function commitCallbacks(updateQueue, context) {
  var callbacks = updateQueue.callbacks;
  if (null !== callbacks)
    for (
      updateQueue.callbacks = null, updateQueue = 0;
      updateQueue < callbacks.length;
      updateQueue++
    )
      callCallback(callbacks[updateQueue], context);
}
var currentTreeHiddenStackCursor = createCursor(null),
  prevEntangledRenderLanesCursor = createCursor(0);
function pushHiddenContext(fiber, context) {
  fiber = entangledRenderLanes;
  push(prevEntangledRenderLanesCursor, fiber);
  push(currentTreeHiddenStackCursor, context);
  entangledRenderLanes = fiber | context.baseLanes;
}
function reuseHiddenContextOnStack() {
  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
}
function popHiddenContext() {
  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
  pop(currentTreeHiddenStackCursor);
  pop(prevEntangledRenderLanesCursor);
}
var suspenseHandlerStackCursor = createCursor(null),
  shellBoundary = null;
function pushPrimaryTreeSuspenseHandler(handler) {
  var current = handler.alternate;
  push(suspenseStackCursor, suspenseStackCursor.current & 1);
  push(suspenseHandlerStackCursor, handler);
  null === shellBoundary &&
    (null === current || null !== currentTreeHiddenStackCursor.current
      ? (shellBoundary = handler)
      : null !== current.memoizedState && (shellBoundary = handler));
}
function pushDehydratedActivitySuspenseHandler(fiber) {
  push(suspenseStackCursor, suspenseStackCursor.current);
  push(suspenseHandlerStackCursor, fiber);
  null === shellBoundary && (shellBoundary = fiber);
}
function pushOffscreenSuspenseHandler(fiber) {
  22 === fiber.tag
    ? (push(suspenseStackCursor, suspenseStackCursor.current),
      push(suspenseHandlerStackCursor, fiber),
      null === shellBoundary && (shellBoundary = fiber))
    : reuseSuspenseHandlerOnStack(fiber);
}
function reuseSuspenseHandlerOnStack() {
  push(suspenseStackCursor, suspenseStackCursor.current);
  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
}
function popSuspenseHandler(fiber) {
  pop(suspenseHandlerStackCursor);
  shellBoundary === fiber && (shellBoundary = null);
  pop(suspenseStackCursor);
}
var suspenseStackCursor = createCursor(0);
function findFirstSuspended(row) {
  for (var node = row; null !== node; ) {
    if (13 === node.tag) {
      var state = node.memoizedState;
      if (
        null !== state &&
        ((state = state.dehydrated),
        null === state ||
          isSuspenseInstancePending(state) ||
          isSuspenseInstanceFallback(state))
      )
        return node;
    } else if (
      19 === node.tag &&
      ("forwards" === node.memoizedProps.revealOrder ||
        "backwards" === node.memoizedProps.revealOrder ||
        "unstable_legacy-backwards" === node.memoizedProps.revealOrder ||
        "together" === node.memoizedProps.revealOrder)
    ) {
      if (0 !== (node.flags & 128)) return node;
    } else if (null !== node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === row) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === row) return null;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  return null;
}
var renderLanes = 0,
  currentlyRenderingFiber = null,
  currentHook = null,
  workInProgressHook = null,
  didScheduleRenderPhaseUpdate = !1,
  didScheduleRenderPhaseUpdateDuringThisPass = !1,
  shouldDoubleInvokeUserFnsInHooksDEV = !1,
  localIdCounter = 0,
  thenableIndexCounter = 0,
  thenableState = null,
  globalClientIdCounter = 0;
function throwInvalidHookError() {
  throw Error(formatProdErrorMessage(321));
}
function areHookInputsEqual(nextDeps, prevDeps) {
  if (null === prevDeps) return !1;
  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
    if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
  return !0;
}
function renderWithHooks(
  current,
  workInProgress,
  Component,
  props,
  secondArg,
  nextRenderLanes
) {
  renderLanes = nextRenderLanes;
  currentlyRenderingFiber = workInProgress;
  workInProgress.memoizedState = null;
  workInProgress.updateQueue = null;
  workInProgress.lanes = 0;
  ReactSharedInternals.H =
    null === current || null === current.memoizedState
      ? HooksDispatcherOnMount
      : HooksDispatcherOnUpdate;
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  nextRenderLanes = Component(props, secondArg);
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  didScheduleRenderPhaseUpdateDuringThisPass &&
    (nextRenderLanes = renderWithHooksAgain(
      workInProgress,
      Component,
      props,
      secondArg
    ));
  finishRenderingHooks(current);
  return nextRenderLanes;
}
function finishRenderingHooks(current) {
  ReactSharedInternals.H = ContextOnlyDispatcher;
  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber = null;
  didScheduleRenderPhaseUpdate = !1;
  thenableIndexCounter = 0;
  thenableState = null;
  if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
  null === current ||
    didReceiveUpdate ||
    ((current = current.dependencies),
    null !== current &&
      checkIfContextChanged(current) &&
      (didReceiveUpdate = !0));
}
function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
  currentlyRenderingFiber = workInProgress;
  var numberOfReRenders = 0;
  do {
    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
    thenableIndexCounter = 0;
    didScheduleRenderPhaseUpdateDuringThisPass = !1;
    if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
    numberOfReRenders += 1;
    workInProgressHook = currentHook = null;
    if (null != workInProgress.updateQueue) {
      var children = workInProgress.updateQueue;
      children.lastEffect = null;
      children.events = null;
      children.stores = null;
      null != children.memoCache && (children.memoCache.index = 0);
    }
    ReactSharedInternals.H = HooksDispatcherOnRerender;
    children = Component(props, secondArg);
  } while (didScheduleRenderPhaseUpdateDuringThisPass);
  return children;
}
function TransitionAwareHostComponent() {
  var dispatcher = ReactSharedInternals.H,
    maybeThenable = dispatcher.useState()[0];
  maybeThenable =
    "function" === typeof maybeThenable.then
      ? useThenable(maybeThenable)
      : maybeThenable;
  dispatcher = dispatcher.useState()[0];
  (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher &&
    (currentlyRenderingFiber.flags |= 1024);
  return maybeThenable;
}
function checkDidRenderIdHook() {
  var didRenderIdHook = 0 !== localIdCounter;
  localIdCounter = 0;
  return didRenderIdHook;
}
function bailoutHooks(current, workInProgress, lanes) {
  workInProgress.updateQueue = current.updateQueue;
  workInProgress.flags &= -2053;
  current.lanes &= ~lanes;
}
function resetHooksOnUnwind(workInProgress) {
  if (didScheduleRenderPhaseUpdate) {
    for (
      workInProgress = workInProgress.memoizedState;
      null !== workInProgress;

    ) {
      var queue = workInProgress.queue;
      null !== queue && (queue.pending = null);
      workInProgress = workInProgress.next;
    }
    didScheduleRenderPhaseUpdate = !1;
  }
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber = null;
  didScheduleRenderPhaseUpdateDuringThisPass = !1;
  thenableIndexCounter = localIdCounter = 0;
  thenableState = null;
}
function mountWorkInProgressHook() {
  var hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === workInProgressHook
    ? (currentlyRenderingFiber.memoizedState = workInProgressHook = hook)
    : (workInProgressHook = workInProgressHook.next = hook);
  return workInProgressHook;
}
function updateWorkInProgressHook() {
  if (null === currentHook) {
    var nextCurrentHook = currentlyRenderingFiber.alternate;
    nextCurrentHook =
      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
  } else nextCurrentHook = currentHook.next;
  var nextWorkInProgressHook =
    null === workInProgressHook
      ? currentlyRenderingFiber.memoizedState
      : workInProgressHook.next;
  if (null !== nextWorkInProgressHook)
    (workInProgressHook = nextWorkInProgressHook),
      (currentHook = nextCurrentHook);
  else {
    if (null === nextCurrentHook) {
      if (null === currentlyRenderingFiber.alternate)
        throw Error(formatProdErrorMessage(467));
      throw Error(formatProdErrorMessage(310));
    }
    currentHook = nextCurrentHook;
    nextCurrentHook = {
      memoizedState: currentHook.memoizedState,
      baseState: currentHook.baseState,
      baseQueue: currentHook.baseQueue,
      queue: currentHook.queue,
      next: null
    };
    null === workInProgressHook
      ? (currentlyRenderingFiber.memoizedState = workInProgressHook =
          nextCurrentHook)
      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
  }
  return workInProgressHook;
}
function createFunctionComponentUpdateQueue() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function useThenable(thenable) {
  var index = thenableIndexCounter;
  thenableIndexCounter += 1;
  null === thenableState && (thenableState = []);
  thenable = trackUsedThenable(thenableState, thenable, index);
  index = currentlyRenderingFiber;
  null ===
    (null === workInProgressHook
      ? index.memoizedState
      : workInProgressHook.next) &&
    ((index = index.alternate),
    (ReactSharedInternals.H =
      null === index || null === index.memoizedState
        ? HooksDispatcherOnMount
        : HooksDispatcherOnUpdate));
  return thenable;
}
function use(usable) {
  if (null !== usable && "object" === typeof usable) {
    if ("function" === typeof usable.then) return useThenable(usable);
    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
  }
  throw Error(formatProdErrorMessage(438, String(usable)));
}
function useMemoCache(size) {
  var memoCache = null,
    updateQueue = currentlyRenderingFiber.updateQueue;
  null !== updateQueue && (memoCache = updateQueue.memoCache);
  if (null == memoCache) {
    var current = currentlyRenderingFiber.alternate;
    null !== current &&
      ((current = current.updateQueue),
      null !== current &&
        ((current = current.memoCache),
        null != current &&
          (memoCache = {
            data: current.data.map(function (array) {
              return array.slice();
            }),
            index: 0
          })));
  }
  null == memoCache && (memoCache = { data: [], index: 0 });
  null === updateQueue &&
    ((updateQueue = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber.updateQueue = updateQueue));
  updateQueue.memoCache = memoCache;
  updateQueue = memoCache.data[memoCache.index];
  if (void 0 === updateQueue)
    for (
      updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0;
      current < size;
      current++
    )
      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
  memoCache.index++;
  return updateQueue;
}
function basicStateReducer(state, action) {
  return "function" === typeof action ? action(state) : action;
}
function updateReducer(reducer) {
  var hook = updateWorkInProgressHook();
  return updateReducerImpl(hook, currentHook, reducer);
}
function updateReducerImpl(hook, current, reducer) {
  var queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var baseQueue = hook.baseQueue,
    pendingQueue = queue.pending;
  if (null !== pendingQueue) {
    if (null !== baseQueue) {
      var baseFirst = baseQueue.next;
      baseQueue.next = pendingQueue.next;
      pendingQueue.next = baseFirst;
    }
    current.baseQueue = baseQueue = pendingQueue;
    queue.pending = null;
  }
  pendingQueue = hook.baseState;
  if (null === baseQueue) hook.memoizedState = pendingQueue;
  else {
    current = baseQueue.next;
    var newBaseQueueFirst = (baseFirst = null),
      newBaseQueueLast = null,
      update = current,
      didReadFromEntangledAsyncAction$60 = !1;
    do {
      var updateLane = update.lane & -536870913;
      if (
        updateLane !== update.lane
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        var revertLane = update.revertLane;
        if (0 === revertLane)
          null !== newBaseQueueLast &&
            (newBaseQueueLast = newBaseQueueLast.next =
              {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }),
            updateLane === currentEntangledLane &&
              (didReadFromEntangledAsyncAction$60 = !0);
        else if ((renderLanes & revertLane) === revertLane) {
          update = update.next;
          revertLane === currentEntangledLane &&
            (didReadFromEntangledAsyncAction$60 = !0);
          continue;
        } else
          (updateLane = {
            lane: 0,
            revertLane: update.revertLane,
            gesture: null,
            action: update.action,
            hasEagerState: update.hasEagerState,
            eagerState: update.eagerState,
            next: null
          }),
            null === newBaseQueueLast
              ? ((newBaseQueueFirst = newBaseQueueLast = updateLane),
                (baseFirst = pendingQueue))
              : (newBaseQueueLast = newBaseQueueLast.next = updateLane),
            (currentlyRenderingFiber.lanes |= revertLane),
            (workInProgressRootSkippedLanes |= revertLane);
        updateLane = update.action;
        shouldDoubleInvokeUserFnsInHooksDEV &&
          reducer(pendingQueue, updateLane);
        pendingQueue = update.hasEagerState
          ? update.eagerState
          : reducer(pendingQueue, updateLane);
      } else
        (revertLane = {
          lane: updateLane,
          revertLane: update.revertLane,
          gesture: update.gesture,
          action: update.action,
          hasEagerState: update.hasEagerState,
          eagerState: update.eagerState,
          next: null
        }),
          null === newBaseQueueLast
            ? ((newBaseQueueFirst = newBaseQueueLast = revertLane),
              (baseFirst = pendingQueue))
            : (newBaseQueueLast = newBaseQueueLast.next = revertLane),
          (currentlyRenderingFiber.lanes |= updateLane),
          (workInProgressRootSkippedLanes |= updateLane);
      update = update.next;
    } while (null !== update && update !== current);
    null === newBaseQueueLast
      ? (baseFirst = pendingQueue)
      : (newBaseQueueLast.next = newBaseQueueFirst);
    if (
      !objectIs(pendingQueue, hook.memoizedState) &&
      ((didReceiveUpdate = !0),
      didReadFromEntangledAsyncAction$60 &&
        ((reducer = currentEntangledActionThenable), null !== reducer))
    )
      throw reducer;
    hook.memoizedState = pendingQueue;
    hook.baseState = baseFirst;
    hook.baseQueue = newBaseQueueLast;
    queue.lastRenderedState = pendingQueue;
  }
  null === baseQueue && (queue.lanes = 0);
  return [hook.memoizedState, queue.dispatch];
}
function rerenderReducer(reducer) {
  var hook = updateWorkInProgressHook(),
    queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var dispatch = queue.dispatch,
    lastRenderPhaseUpdate = queue.pending,
    newState = hook.memoizedState;
  if (null !== lastRenderPhaseUpdate) {
    queue.pending = null;
    var update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
    do (newState = reducer(newState, update.action)), (update = update.next);
    while (update !== lastRenderPhaseUpdate);
    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
    hook.memoizedState = newState;
    null === hook.baseQueue && (hook.baseState = newState);
    queue.lastRenderedState = newState;
  }
  return [newState, dispatch];
}
function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var fiber = currentlyRenderingFiber,
    hook = updateWorkInProgressHook(),
    isHydrating$jscomp$0 = isHydrating;
  if (isHydrating$jscomp$0) {
    if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
    getServerSnapshot = getServerSnapshot();
  } else getServerSnapshot = getSnapshot();
  var snapshotChanged = !objectIs(
    (currentHook || hook).memoizedState,
    getServerSnapshot
  );
  snapshotChanged &&
    ((hook.memoizedState = getServerSnapshot), (didReceiveUpdate = !0));
  hook = hook.queue;
  updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
    subscribe
  ]);
  if (
    hook.getSnapshot !== getSnapshot ||
    snapshotChanged ||
    (null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1)
  ) {
    fiber.flags |= 2048;
    pushSimpleEffect(
      9,
      { destroy: void 0 },
      updateStoreInstance.bind(
        null,
        fiber,
        hook,
        getServerSnapshot,
        getSnapshot
      ),
      null
    );
    if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
    isHydrating$jscomp$0 ||
      0 !== (renderLanes & 127) ||
      pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
  }
  return getServerSnapshot;
}
function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
  fiber.flags |= 16384;
  fiber = { getSnapshot: getSnapshot, value: renderedSnapshot };
  getSnapshot = currentlyRenderingFiber.updateQueue;
  null === getSnapshot
    ? ((getSnapshot = createFunctionComponentUpdateQueue()),
      (currentlyRenderingFiber.updateQueue = getSnapshot),
      (getSnapshot.stores = [fiber]))
    : ((renderedSnapshot = getSnapshot.stores),
      null === renderedSnapshot
        ? (getSnapshot.stores = [fiber])
        : renderedSnapshot.push(fiber));
}
function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
  inst.value = nextSnapshot;
  inst.getSnapshot = getSnapshot;
  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
}
function subscribeToStore(fiber, inst, subscribe) {
  return subscribe(function () {
    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
  });
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function forceStoreRerender(fiber) {
  var root = enqueueConcurrentRenderForLane(fiber, 2);
  null !== root && scheduleUpdateOnFiber(root, fiber, 2);
}
function mountStateImpl(initialState) {
  var hook = mountWorkInProgressHook();
  if ("function" === typeof initialState) {
    var initialStateInitializer = initialState;
    initialState = initialStateInitializer();
    if (shouldDoubleInvokeUserFnsInHooksDEV) {
      setIsStrictModeForDevtools(!0);
      try {
        initialStateInitializer();
      } finally {
        setIsStrictModeForDevtools(!1);
      }
    }
  }
  hook.memoizedState = hook.baseState = initialState;
  hook.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState
  };
  return hook;
}
function updateOptimisticImpl(hook, current, passthrough, reducer) {
  hook.baseState = passthrough;
  return updateReducerImpl(
    hook,
    currentHook,
    "function" === typeof reducer ? reducer : basicStateReducer
  );
}
function dispatchActionState(
  fiber,
  actionQueue,
  setPendingState,
  setState,
  payload
) {
  if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
  fiber = actionQueue.action;
  if (null !== fiber) {
    var actionNode = {
      payload: payload,
      action: fiber,
      next: null,
      isTransition: !0,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function (listener) {
        actionNode.listeners.push(listener);
      }
    };
    null !== ReactSharedInternals.T
      ? setPendingState(!0)
      : (actionNode.isTransition = !1);
    setState(actionNode);
    setPendingState = actionQueue.pending;
    null === setPendingState
      ? ((actionNode.next = actionQueue.pending = actionNode),
        runActionStateAction(actionQueue, actionNode))
      : ((actionNode.next = setPendingState.next),
        (actionQueue.pending = setPendingState.next = actionNode));
  }
}
function runActionStateAction(actionQueue, node) {
  var action = node.action,
    payload = node.payload,
    prevState = actionQueue.state;
  if (node.isTransition) {
    var prevTransition = ReactSharedInternals.T,
      currentTransition = {};
    ReactSharedInternals.T = currentTransition;
    try {
      var returnValue = action(prevState, payload),
        onStartTransitionFinish = ReactSharedInternals.S;
      null !== onStartTransitionFinish &&
        onStartTransitionFinish(currentTransition, returnValue);
      handleActionReturnValue(actionQueue, node, returnValue);
    } catch (error) {
      onActionError(actionQueue, node, error);
    } finally {
      null !== prevTransition &&
        null !== currentTransition.types &&
        (prevTransition.types = currentTransition.types),
        (ReactSharedInternals.T = prevTransition);
    }
  } else
    try {
      (prevTransition = action(prevState, payload)),
        handleActionReturnValue(actionQueue, node, prevTransition);
    } catch (error$66) {
      onActionError(actionQueue, node, error$66);
    }
}
function handleActionReturnValue(actionQueue, node, returnValue) {
  null !== returnValue &&
  "object" === typeof returnValue &&
  "function" === typeof returnValue.then
    ? returnValue.then(
        function (nextState) {
          onActionSuccess(actionQueue, node, nextState);
        },
        function (error) {
          return onActionError(actionQueue, node, error);
        }
      )
    : onActionSuccess(actionQueue, node, returnValue);
}
function onActionSuccess(actionQueue, actionNode, nextState) {
  actionNode.status = "fulfilled";
  actionNode.value = nextState;
  notifyActionListeners(actionNode);
  actionQueue.state = nextState;
  actionNode = actionQueue.pending;
  null !== actionNode &&
    ((nextState = actionNode.next),
    nextState === actionNode
      ? (actionQueue.pending = null)
      : ((nextState = nextState.next),
        (actionNode.next = nextState),
        runActionStateAction(actionQueue, nextState)));
}
function onActionError(actionQueue, actionNode, error) {
  var last = actionQueue.pending;
  actionQueue.pending = null;
  if (null !== last) {
    last = last.next;
    do
      (actionNode.status = "rejected"),
        (actionNode.reason = error),
        notifyActionListeners(actionNode),
        (actionNode = actionNode.next);
    while (actionNode !== last);
  }
  actionQueue.action = null;
}
function notifyActionListeners(actionNode) {
  actionNode = actionNode.listeners;
  for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
}
function actionStateReducer(oldState, newState) {
  return newState;
}
function mountActionState(action, initialStateProp) {
  if (isHydrating) {
    var ssrFormState = workInProgressRoot.formState;
    if (null !== ssrFormState) {
      a: {
        var JSCompiler_inline_result = currentlyRenderingFiber;
        if (isHydrating) {
          if (nextHydratableInstance) {
            b: {
              var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
              for (
                var inRootOrSingleton = rootOrSingletonContext;
                8 !== JSCompiler_inline_result$jscomp$0.nodeType;

              ) {
                if (!inRootOrSingleton) {
                  JSCompiler_inline_result$jscomp$0 = null;
                  break b;
                }
                JSCompiler_inline_result$jscomp$0 = getNextHydratable(
                  JSCompiler_inline_result$jscomp$0.nextSibling
                );
                if (null === JSCompiler_inline_result$jscomp$0) {
                  JSCompiler_inline_result$jscomp$0 = null;
                  break b;
                }
              }
              inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
              JSCompiler_inline_result$jscomp$0 =
                "F!" === inRootOrSingleton || "F" === inRootOrSingleton
                  ? JSCompiler_inline_result$jscomp$0
                  : null;
            }
            if (JSCompiler_inline_result$jscomp$0) {
              nextHydratableInstance = getNextHydratable(
                JSCompiler_inline_result$jscomp$0.nextSibling
              );
              JSCompiler_inline_result =
                "F!" === JSCompiler_inline_result$jscomp$0.data;
              break a;
            }
          }
          throwOnHydrationMismatch(JSCompiler_inline_result);
        }
        JSCompiler_inline_result = !1;
      }
      JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
    }
  }
  ssrFormState = mountWorkInProgressHook();
  ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
  JSCompiler_inline_result = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: actionStateReducer,
    lastRenderedState: initialStateProp
  };
  ssrFormState.queue = JSCompiler_inline_result;
  ssrFormState = dispatchSetState.bind(
    null,
    currentlyRenderingFiber,
    JSCompiler_inline_result
  );
  JSCompiler_inline_result.dispatch = ssrFormState;
  JSCompiler_inline_result = mountStateImpl(!1);
  inRootOrSingleton = dispatchOptimisticSetState.bind(
    null,
    currentlyRenderingFiber,
    !1,
    JSCompiler_inline_result.queue
  );
  JSCompiler_inline_result = mountWorkInProgressHook();
  JSCompiler_inline_result$jscomp$0 = {
    state: initialStateProp,
    dispatch: null,
    action: action,
    pending: null
  };
  JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
  ssrFormState = dispatchActionState.bind(
    null,
    currentlyRenderingFiber,
    JSCompiler_inline_result$jscomp$0,
    inRootOrSingleton,
    ssrFormState
  );
  JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
  JSCompiler_inline_result.memoizedState = action;
  return [initialStateProp, ssrFormState, !1];
}
function updateActionState(action) {
  var stateHook = updateWorkInProgressHook();
  return updateActionStateImpl(stateHook, currentHook, action);
}
function updateActionStateImpl(stateHook, currentStateHook, action) {
  currentStateHook = updateReducerImpl(
    stateHook,
    currentStateHook,
    actionStateReducer
  )[0];
  stateHook = updateReducer(basicStateReducer)[0];
  if (
    "object" === typeof currentStateHook &&
    null !== currentStateHook &&
    "function" === typeof currentStateHook.then
  )
    try {
      var state = useThenable(currentStateHook);
    } catch (x) {
      if (x === SuspenseException) throw SuspenseActionException;
      throw x;
    }
  else state = currentStateHook;
  currentStateHook = updateWorkInProgressHook();
  var actionQueue = currentStateHook.queue,
    dispatch = actionQueue.dispatch;
  action !== currentStateHook.memoizedState &&
    ((currentlyRenderingFiber.flags |= 2048),
    pushSimpleEffect(
      9,
      { destroy: void 0 },
      actionStateActionEffect.bind(null, actionQueue, action),
      null
    ));
  return [state, dispatch, stateHook];
}
function actionStateActionEffect(actionQueue, action) {
  actionQueue.action = action;
}
function rerenderActionState(action) {
  var stateHook = updateWorkInProgressHook(),
    currentStateHook = currentHook;
  if (null !== currentStateHook)
    return updateActionStateImpl(stateHook, currentStateHook, action);
  updateWorkInProgressHook();
  stateHook = stateHook.memoizedState;
  currentStateHook = updateWorkInProgressHook();
  var dispatch = currentStateHook.queue.dispatch;
  currentStateHook.memoizedState = action;
  return [stateHook, dispatch, !1];
}
function pushSimpleEffect(tag, inst, create, deps) {
  tag = { tag: tag, create: create, deps: deps, inst: inst, next: null };
  inst = currentlyRenderingFiber.updateQueue;
  null === inst &&
    ((inst = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber.updateQueue = inst));
  create = inst.lastEffect;
  null === create
    ? (inst.lastEffect = tag.next = tag)
    : ((deps = create.next),
      (create.next = tag),
      (tag.next = deps),
      (inst.lastEffect = tag));
  return tag;
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = mountWorkInProgressHook();
  currentlyRenderingFiber.flags |= fiberFlags;
  hook.memoizedState = pushSimpleEffect(
    1 | hookFlags,
    { destroy: void 0 },
    create,
    void 0 === deps ? null : deps
  );
}
function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var inst = hook.memoizedState.inst;
  null !== currentHook &&
  null !== deps &&
  areHookInputsEqual(deps, currentHook.memoizedState.deps)
    ? (hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps))
    : ((currentlyRenderingFiber.flags |= fiberFlags),
      (hook.memoizedState = pushSimpleEffect(
        1 | hookFlags,
        inst,
        create,
        deps
      )));
}
function mountEffect(create, deps) {
  mountEffectImpl(8390656, 8, create, deps);
}
function updateEffect(create, deps) {
  updateEffectImpl(2048, 8, create, deps);
}
function useEffectEventImpl(payload) {
  currentlyRenderingFiber.flags |= 4;
  var componentUpdateQueue = currentlyRenderingFiber.updateQueue;
  if (null === componentUpdateQueue)
    (componentUpdateQueue = createFunctionComponentUpdateQueue()),
      (currentlyRenderingFiber.updateQueue = componentUpdateQueue),
      (componentUpdateQueue.events = [payload]);
  else {
    var events = componentUpdateQueue.events;
    null === events
      ? (componentUpdateQueue.events = [payload])
      : events.push(payload);
  }
}
function updateEvent(callback) {
  var ref = updateWorkInProgressHook().memoizedState;
  useEffectEventImpl({ ref: ref, nextImpl: callback });
  return function () {
    if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
    return ref.impl.apply(void 0, arguments);
  };
}
function updateInsertionEffect(create, deps) {
  return updateEffectImpl(4, 2, create, deps);
}
function updateLayoutEffect(create, deps) {
  return updateEffectImpl(4, 4, create, deps);
}
function imperativeHandleEffect(create, ref) {
  if ("function" === typeof ref) {
    create = create();
    var refCleanup = ref(create);
    return function () {
      "function" === typeof refCleanup ? refCleanup() : ref(null);
    };
  }
  if (null !== ref && void 0 !== ref)
    return (
      (create = create()),
      (ref.current = create),
      function () {
        ref.current = null;
      }
    );
}
function updateImperativeHandle(ref, create, deps) {
  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
}
function mountDebugValue() {}
function updateCallback(callback, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  hook.memoizedState = [callback, deps];
  return callback;
}
function updateMemo(nextCreate, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  prevState = nextCreate();
  if (shouldDoubleInvokeUserFnsInHooksDEV) {
    setIsStrictModeForDevtools(!0);
    try {
      nextCreate();
    } finally {
      setIsStrictModeForDevtools(!1);
    }
  }
  hook.memoizedState = [prevState, deps];
  return prevState;
}
function mountDeferredValueImpl(hook, value, initialValue) {
  if (
    void 0 === initialValue ||
    (0 !== (renderLanes & 1073741824) &&
      0 === (workInProgressRootRenderLanes & 261930))
  )
    return (hook.memoizedState = value);
  hook.memoizedState = initialValue;
  hook = requestDeferredLane();
  currentlyRenderingFiber.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return initialValue;
}
function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
  if (objectIs(value, prevValue)) return value;
  if (null !== currentTreeHiddenStackCursor.current)
    return (
      (hook = mountDeferredValueImpl(hook, value, initialValue)),
      objectIs(hook, prevValue) || (didReceiveUpdate = !0),
      hook
    );
  if (
    0 === (renderLanes & 42) ||
    (0 !== (renderLanes & 1073741824) &&
      0 === (workInProgressRootRenderLanes & 261930))
  )
    return (didReceiveUpdate = !0), (hook.memoizedState = value);
  hook = requestDeferredLane();
  currentlyRenderingFiber.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return prevValue;
}
function startTransition(fiber, queue, pendingState, finishedState, callback) {
  var previousPriority = ReactDOMSharedInternals.p;
  ReactDOMSharedInternals.p =
    0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
  var prevTransition = ReactSharedInternals.T,
    currentTransition = {};
  ReactSharedInternals.T = currentTransition;
  dispatchOptimisticSetState(fiber, !1, queue, pendingState);
  try {
    var returnValue = callback(),
      onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    if (
      null !== returnValue &&
      "object" === typeof returnValue &&
      "function" === typeof returnValue.then
    ) {
      var thenableForFinishedState = chainThenableValue(
        returnValue,
        finishedState
      );
      dispatchSetStateInternal(
        fiber,
        queue,
        thenableForFinishedState,
        requestUpdateLane(fiber)
      );
    } else
      dispatchSetStateInternal(
        fiber,
        queue,
        finishedState,
        requestUpdateLane(fiber)
      );
  } catch (error) {
    dispatchSetStateInternal(
      fiber,
      queue,
      { then: function () {}, status: "rejected", reason: error },
      requestUpdateLane()
    );
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      null !== prevTransition &&
        null !== currentTransition.types &&
        (prevTransition.types = currentTransition.types),
      (ReactSharedInternals.T = prevTransition);
  }
}
function noop() {}
function startHostTransition(formFiber, pendingState, action, formData) {
  if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
  var queue = ensureFormComponentIsStateful(formFiber).queue;
  startTransition(
    formFiber,
    queue,
    pendingState,
    sharedNotPendingObject,
    null === action
      ? noop
      : function () {
          requestFormReset$1(formFiber);
          return action(formData);
        }
  );
}
function ensureFormComponentIsStateful(formFiber) {
  var existingStateHook = formFiber.memoizedState;
  if (null !== existingStateHook) return existingStateHook;
  existingStateHook = {
    memoizedState: sharedNotPendingObject,
    baseState: sharedNotPendingObject,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: sharedNotPendingObject
    },
    next: null
  };
  var initialResetState = {};
  existingStateHook.next = {
    memoizedState: initialResetState,
    baseState: initialResetState,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: initialResetState
    },
    next: null
  };
  formFiber.memoizedState = existingStateHook;
  formFiber = formFiber.alternate;
  null !== formFiber && (formFiber.memoizedState = existingStateHook);
  return existingStateHook;
}
function requestFormReset$1(formFiber) {
  var stateHook = ensureFormComponentIsStateful(formFiber);
  null === stateHook.next && (stateHook = formFiber.alternate.memoizedState);
  dispatchSetStateInternal(
    formFiber,
    stateHook.next.queue,
    {},
    requestUpdateLane()
  );
}
function useHostTransitionStatus() {
  return readContext(HostTransitionContext);
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
function refreshCache(fiber) {
  for (var provider = fiber.return; null !== provider; ) {
    switch (provider.tag) {
      case 24:
      case 3:
        var lane = requestUpdateLane();
        fiber = createUpdate(lane);
        var root$69 = enqueueUpdate(provider, fiber, lane);
        null !== root$69 &&
          (scheduleUpdateOnFiber(root$69, provider, lane),
          entangleTransitions(root$69, provider, lane));
        provider = { cache: createCache() };
        fiber.payload = provider;
        return;
    }
    provider = provider.return;
  }
}
function dispatchReducerAction(fiber, queue, action) {
  var lane = requestUpdateLane();
  action = {
    lane: lane,
    revertLane: 0,
    gesture: null,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  isRenderPhaseUpdate(fiber)
    ? enqueueRenderPhaseUpdate(queue, action)
    : ((action = enqueueConcurrentHookUpdate(fiber, queue, action, lane)),
      null !== action &&
        (scheduleUpdateOnFiber(action, fiber, lane),
        entangleTransitionUpdate(action, queue, lane)));
}
function dispatchSetState(fiber, queue, action) {
  var lane = requestUpdateLane();
  dispatchSetStateInternal(fiber, queue, action, lane);
}
function dispatchSetStateInternal(fiber, queue, action, lane) {
  var update = {
    lane: lane,
    revertLane: 0,
    gesture: null,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
  else {
    var alternate = fiber.alternate;
    if (
      0 === fiber.lanes &&
      (null === alternate || 0 === alternate.lanes) &&
      ((alternate = queue.lastRenderedReducer), null !== alternate)
    )
      try {
        var currentState = queue.lastRenderedState,
          eagerState = alternate(currentState, action);
        update.hasEagerState = !0;
        update.eagerState = eagerState;
        if (objectIs(eagerState, currentState))
          return (
            enqueueUpdate$1(fiber, queue, update, 0),
            null === workInProgressRoot && finishQueueingConcurrentUpdates(),
            !1
          );
      } catch (error) {
      } finally {
      }
    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
    if (null !== action)
      return (
        scheduleUpdateOnFiber(action, fiber, lane),
        entangleTransitionUpdate(action, queue, lane),
        !0
      );
  }
  return !1;
}
function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
  action = {
    lane: 2,
    revertLane: requestTransitionLane(),
    gesture: null,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) {
    if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
  } else
    (throwIfDuringRender = enqueueConcurrentHookUpdate(
      fiber,
      queue,
      action,
      2
    )),
      null !== throwIfDuringRender &&
        scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
}
function isRenderPhaseUpdate(fiber) {
  var alternate = fiber.alternate;
  return (
    fiber === currentlyRenderingFiber ||
    (null !== alternate && alternate === currentlyRenderingFiber)
  );
}
function enqueueRenderPhaseUpdate(queue, update) {
  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate =
    !0;
  var pending = queue.pending;
  null === pending
    ? (update.next = update)
    : ((update.next = pending.next), (pending.next = update));
  queue.pending = update;
}
function entangleTransitionUpdate(root, queue, lane) {
  if (0 !== (lane & 4194048)) {
    var queueLanes = queue.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    queue.lanes = lane;
    markRootEntangled(root, lane);
  }
}
var ContextOnlyDispatcher = {
  readContext: readContext,
  use: use,
  useCallback: throwInvalidHookError,
  useContext: throwInvalidHookError,
  useEffect: throwInvalidHookError,
  useImperativeHandle: throwInvalidHookError,
  useLayoutEffect: throwInvalidHookError,
  useInsertionEffect: throwInvalidHookError,
  useMemo: throwInvalidHookError,
  useReducer: throwInvalidHookError,
  useRef: throwInvalidHookError,
  useState: throwInvalidHookError,
  useDebugValue: throwInvalidHookError,
  useDeferredValue: throwInvalidHookError,
  useTransition: throwInvalidHookError,
  useSyncExternalStore: throwInvalidHookError,
  useId: throwInvalidHookError,
  useHostTransitionStatus: throwInvalidHookError,
  useFormState: throwInvalidHookError,
  useActionState: throwInvalidHookError,
  useOptimistic: throwInvalidHookError,
  useMemoCache: throwInvalidHookError,
  useCacheRefresh: throwInvalidHookError
};
ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
var HooksDispatcherOnMount = {
    readContext: readContext,
    use: use,
    useCallback: function (callback, deps) {
      mountWorkInProgressHook().memoizedState = [
        callback,
        void 0 === deps ? null : deps
      ];
      return callback;
    },
    useContext: readContext,
    useEffect: mountEffect,
    useImperativeHandle: function (ref, create, deps) {
      deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
      mountEffectImpl(
        4194308,
        4,
        imperativeHandleEffect.bind(null, create, ref),
        deps
      );
    },
    useLayoutEffect: function (create, deps) {
      return mountEffectImpl(4194308, 4, create, deps);
    },
    useInsertionEffect: function (create, deps) {
      mountEffectImpl(4, 2, create, deps);
    },
    useMemo: function (nextCreate, deps) {
      var hook = mountWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var nextValue = nextCreate();
      if (shouldDoubleInvokeUserFnsInHooksDEV) {
        setIsStrictModeForDevtools(!0);
        try {
          nextCreate();
        } finally {
          setIsStrictModeForDevtools(!1);
        }
      }
      hook.memoizedState = [nextValue, deps];
      return nextValue;
    },
    useReducer: function (reducer, initialArg, init) {
      var hook = mountWorkInProgressHook();
      if (void 0 !== init) {
        var initialState = init(initialArg);
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(!0);
          try {
            init(initialArg);
          } finally {
            setIsStrictModeForDevtools(!1);
          }
        }
      } else initialState = initialArg;
      hook.memoizedState = hook.baseState = initialState;
      reducer = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: reducer,
        lastRenderedState: initialState
      };
      hook.queue = reducer;
      reducer = reducer.dispatch = dispatchReducerAction.bind(
        null,
        currentlyRenderingFiber,
        reducer
      );
      return [hook.memoizedState, reducer];
    },
    useRef: function (initialValue) {
      var hook = mountWorkInProgressHook();
      initialValue = { current: initialValue };
      return (hook.memoizedState = initialValue);
    },
    useState: function (initialState) {
      initialState = mountStateImpl(initialState);
      var queue = initialState.queue,
        dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
      queue.dispatch = dispatch;
      return [initialState.memoizedState, dispatch];
    },
    useDebugValue: mountDebugValue,
    useDeferredValue: function (value, initialValue) {
      var hook = mountWorkInProgressHook();
      return mountDeferredValueImpl(hook, value, initialValue);
    },
    useTransition: function () {
      var stateHook = mountStateImpl(!1);
      stateHook = startTransition.bind(
        null,
        currentlyRenderingFiber,
        stateHook.queue,
        !0,
        !1
      );
      mountWorkInProgressHook().memoizedState = stateHook;
      return [!1, stateHook];
    },
    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
      var fiber = currentlyRenderingFiber,
        hook = mountWorkInProgressHook();
      if (isHydrating) {
        if (void 0 === getServerSnapshot)
          throw Error(formatProdErrorMessage(407));
        getServerSnapshot = getServerSnapshot();
      } else {
        getServerSnapshot = getSnapshot();
        if (null === workInProgressRoot)
          throw Error(formatProdErrorMessage(349));
        0 !== (workInProgressRootRenderLanes & 127) ||
          pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
      }
      hook.memoizedState = getServerSnapshot;
      var inst = { value: getServerSnapshot, getSnapshot: getSnapshot };
      hook.queue = inst;
      mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
        subscribe
      ]);
      fiber.flags |= 2048;
      pushSimpleEffect(
        9,
        { destroy: void 0 },
        updateStoreInstance.bind(
          null,
          fiber,
          inst,
          getServerSnapshot,
          getSnapshot
        ),
        null
      );
      return getServerSnapshot;
    },
    useId: function () {
      var hook = mountWorkInProgressHook(),
        identifierPrefix = workInProgressRoot.identifierPrefix;
      if (isHydrating) {
        var JSCompiler_inline_result = treeContextOverflow;
        var idWithLeadingBit = treeContextId;
        JSCompiler_inline_result =
          (
            idWithLeadingBit & ~(1 << (32 - clz32(idWithLeadingBit) - 1))
          ).toString(32) + JSCompiler_inline_result;
        identifierPrefix =
          "_" + identifierPrefix + "R_" + JSCompiler_inline_result;
        JSCompiler_inline_result = localIdCounter++;
        0 < JSCompiler_inline_result &&
          (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
        identifierPrefix += "_";
      } else
        (JSCompiler_inline_result = globalClientIdCounter++),
          (identifierPrefix =
            "_" +
            identifierPrefix +
            "r_" +
            JSCompiler_inline_result.toString(32) +
            "_");
      return (hook.memoizedState = identifierPrefix);
    },
    useHostTransitionStatus: useHostTransitionStatus,
    useFormState: mountActionState,
    useActionState: mountActionState,
    useOptimistic: function (passthrough) {
      var hook = mountWorkInProgressHook();
      hook.memoizedState = hook.baseState = passthrough;
      var queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      hook.queue = queue;
      hook = dispatchOptimisticSetState.bind(
        null,
        currentlyRenderingFiber,
        !0,
        queue
      );
      queue.dispatch = hook;
      return [passthrough, hook];
    },
    useMemoCache: useMemoCache,
    useCacheRefresh: function () {
      return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
        null,
        currentlyRenderingFiber
      ));
    },
    useEffectEvent: function (callback) {
      var hook = mountWorkInProgressHook(),
        ref = { impl: callback };
      hook.memoizedState = ref;
      return function () {
        if (0 !== (executionContext & 2))
          throw Error(formatProdErrorMessage(440));
        return ref.impl.apply(void 0, arguments);
      };
    }
  },
  HooksDispatcherOnUpdate = {
    readContext: readContext,
    use: use,
    useCallback: updateCallback,
    useContext: readContext,
    useEffect: updateEffect,
    useImperativeHandle: updateImperativeHandle,
    useInsertionEffect: updateInsertionEffect,
    useLayoutEffect: updateLayoutEffect,
    useMemo: updateMemo,
    useReducer: updateReducer,
    useRef: updateRef,
    useState: function () {
      return updateReducer(basicStateReducer);
    },
    useDebugValue: mountDebugValue,
    useDeferredValue: function (value, initialValue) {
      var hook = updateWorkInProgressHook();
      return updateDeferredValueImpl(
        hook,
        currentHook.memoizedState,
        value,
        initialValue
      );
    },
    useTransition: function () {
      var booleanOrThenable = updateReducer(basicStateReducer)[0],
        start = updateWorkInProgressHook().memoizedState;
      return [
        "boolean" === typeof booleanOrThenable
          ? booleanOrThenable
          : useThenable(booleanOrThenable),
        start
      ];
    },
    useSyncExternalStore: updateSyncExternalStore,
    useId: updateId,
    useHostTransitionStatus: useHostTransitionStatus,
    useFormState: updateActionState,
    useActionState: updateActionState,
    useOptimistic: function (passthrough, reducer) {
      var hook = updateWorkInProgressHook();
      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
    },
    useMemoCache: useMemoCache,
    useCacheRefresh: updateRefresh
  };
HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
var HooksDispatcherOnRerender = {
  readContext: readContext,
  use: use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: rerenderReducer,
  useRef: updateRef,
  useState: function () {
    return rerenderReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value, initialValue) {
    var hook = updateWorkInProgressHook();
    return null === currentHook
      ? mountDeferredValueImpl(hook, value, initialValue)
      : updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
  },
  useTransition: function () {
    var booleanOrThenable = rerenderReducer(basicStateReducer)[0],
      start = updateWorkInProgressHook().memoizedState;
    return [
      "boolean" === typeof booleanOrThenable
        ? booleanOrThenable
        : useThenable(booleanOrThenable),
      start
    ];
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId,
  useHostTransitionStatus: useHostTransitionStatus,
  useFormState: rerenderActionState,
  useActionState: rerenderActionState,
  useOptimistic: function (passthrough, reducer) {
    var hook = updateWorkInProgressHook();
    if (null !== currentHook)
      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
    hook.baseState = passthrough;
    return [passthrough, hook.queue.dispatch];
  },
  useMemoCache: useMemoCache,
  useCacheRefresh: updateRefresh
};
HooksDispatcherOnRerender.useEffectEvent = updateEvent;
function applyDerivedStateFromProps(
  workInProgress,
  ctor,
  getDerivedStateFromProps,
  nextProps
) {
  ctor = workInProgress.memoizedState;
  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
  getDerivedStateFromProps =
    null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps
      ? ctor
      : assign({}, ctor, getDerivedStateFromProps);
  workInProgress.memoizedState = getDerivedStateFromProps;
  0 === workInProgress.lanes &&
    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
}
var classComponentUpdater = {
  enqueueSetState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(),
      update = createUpdate(lane);
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
  },
  enqueueReplaceState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(),
      update = createUpdate(lane);
    update.tag = 1;
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
  },
  enqueueForceUpdate: function (inst, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(),
      update = createUpdate(lane);
    update.tag = 2;
    void 0 !== callback && null !== callback && (update.callback = callback);
    callback = enqueueUpdate(inst, update, lane);
    null !== callback &&
      (scheduleUpdateOnFiber(callback, inst, lane),
      entangleTransitions(callback, inst, lane));
  }
};
function checkShouldComponentUpdate(
  workInProgress,
  ctor,
  oldProps,
  newProps,
  oldState,
  newState,
  nextContext
) {
  workInProgress = workInProgress.stateNode;
  return "function" === typeof workInProgress.shouldComponentUpdate
    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
    : ctor.prototype && ctor.prototype.isPureReactComponent
      ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
      : !0;
}
function callComponentWillReceiveProps(
  workInProgress,
  instance,
  newProps,
  nextContext
) {
  workInProgress = instance.state;
  "function" === typeof instance.componentWillReceiveProps &&
    instance.componentWillReceiveProps(newProps, nextContext);
  "function" === typeof instance.UNSAFE_componentWillReceiveProps &&
    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
  instance.state !== workInProgress &&
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
}
function resolveClassComponentProps(Component, baseProps) {
  var newProps = baseProps;
  if ("ref" in baseProps) {
    newProps = {};
    for (var propName in baseProps)
      "ref" !== propName && (newProps[propName] = baseProps[propName]);
  }
  if ((Component = Component.defaultProps)) {
    newProps === baseProps && (newProps = assign({}, newProps));
    for (var propName$73 in Component)
      void 0 === newProps[propName$73] &&
        (newProps[propName$73] = Component[propName$73]);
  }
  return newProps;
}
function defaultOnUncaughtError(error) {
  reportGlobalError(error);
}
function defaultOnCaughtError(error) {
  console.error(error);
}
function defaultOnRecoverableError(error) {
  reportGlobalError(error);
}
function logUncaughtError(root, errorInfo) {
  try {
    var onUncaughtError = root.onUncaughtError;
    onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
  } catch (e$74) {
    setTimeout(function () {
      throw e$74;
    });
  }
}
function logCaughtError(root, boundary, errorInfo) {
  try {
    var onCaughtError = root.onCaughtError;
    onCaughtError(errorInfo.value, {
      componentStack: errorInfo.stack,
      errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
    });
  } catch (e$75) {
    setTimeout(function () {
      throw e$75;
    });
  }
}
function createRootErrorUpdate(root, errorInfo, lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  lane.payload = { element: null };
  lane.callback = function () {
    logUncaughtError(root, errorInfo);
  };
  return lane;
}
function createClassErrorUpdate(lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  return lane;
}
function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
  if ("function" === typeof getDerivedStateFromError) {
    var error = errorInfo.value;
    update.payload = function () {
      return getDerivedStateFromError(error);
    };
    update.callback = function () {
      logCaughtError(root, fiber, errorInfo);
    };
  }
  var inst = fiber.stateNode;
  null !== inst &&
    "function" === typeof inst.componentDidCatch &&
    (update.callback = function () {
      logCaughtError(root, fiber, errorInfo);
      "function" !== typeof getDerivedStateFromError &&
        (null === legacyErrorBoundariesThatAlreadyFailed
          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
          : legacyErrorBoundariesThatAlreadyFailed.add(this));
      var stack = errorInfo.stack;
      this.componentDidCatch(errorInfo.value, {
        componentStack: null !== stack ? stack : ""
      });
    });
}
function throwException(
  root,
  returnFiber,
  sourceFiber,
  value,
  rootRenderLanes
) {
  sourceFiber.flags |= 32768;
  if (
    null !== value &&
    "object" === typeof value &&
    "function" === typeof value.then
  ) {
    returnFiber = sourceFiber.alternate;
    null !== returnFiber &&
      propagateParentContextChanges(
        returnFiber,
        sourceFiber,
        rootRenderLanes,
        !0
      );
    sourceFiber = suspenseHandlerStackCursor.current;
    if (null !== sourceFiber) {
      switch (sourceFiber.tag) {
        case 31:
        case 13:
          return (
            null === shellBoundary
              ? renderDidSuspendDelayIfPossible()
              : null === sourceFiber.alternate &&
                0 === workInProgressRootExitStatus &&
                (workInProgressRootExitStatus = 3),
            (sourceFiber.flags &= -257),
            (sourceFiber.flags |= 65536),
            (sourceFiber.lanes = rootRenderLanes),
            value === noopSuspenseyCommitThenable
              ? (sourceFiber.flags |= 16384)
              : ((returnFiber = sourceFiber.updateQueue),
                null === returnFiber
                  ? (sourceFiber.updateQueue = new Set([value]))
                  : returnFiber.add(value),
                attachPingListener(root, value, rootRenderLanes)),
            !1
          );
        case 22:
          return (
            (sourceFiber.flags |= 65536),
            value === noopSuspenseyCommitThenable
              ? (sourceFiber.flags |= 16384)
              : ((returnFiber = sourceFiber.updateQueue),
                null === returnFiber
                  ? ((returnFiber = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([value])
                    }),
                    (sourceFiber.updateQueue = returnFiber))
                  : ((sourceFiber = returnFiber.retryQueue),
                    null === sourceFiber
                      ? (returnFiber.retryQueue = new Set([value]))
                      : sourceFiber.add(value)),
                attachPingListener(root, value, rootRenderLanes)),
            !1
          );
      }
      throw Error(formatProdErrorMessage(435, sourceFiber.tag));
    }
    attachPingListener(root, value, rootRenderLanes);
    renderDidSuspendDelayIfPossible();
    return !1;
  }
  if (isHydrating)
    return (
      (returnFiber = suspenseHandlerStackCursor.current),
      null !== returnFiber
        ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256),
          (returnFiber.flags |= 65536),
          (returnFiber.lanes = rootRenderLanes),
          value !== HydrationMismatchException &&
            ((root = Error(formatProdErrorMessage(422), { cause: value })),
            queueHydrationError(createCapturedValueAtFiber(root, sourceFiber))))
        : (value !== HydrationMismatchException &&
            ((returnFiber = Error(formatProdErrorMessage(423), {
              cause: value
            })),
            queueHydrationError(
              createCapturedValueAtFiber(returnFiber, sourceFiber)
            )),
          (root = root.current.alternate),
          (root.flags |= 65536),
          (rootRenderLanes &= -rootRenderLanes),
          (root.lanes |= rootRenderLanes),
          (value = createCapturedValueAtFiber(value, sourceFiber)),
          (rootRenderLanes = createRootErrorUpdate(
            root.stateNode,
            value,
            rootRenderLanes
          )),
          enqueueCapturedUpdate(root, rootRenderLanes),
          4 !== workInProgressRootExitStatus &&
            (workInProgressRootExitStatus = 2)),
      !1
    );
  var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
  wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
  null === workInProgressRootConcurrentErrors
    ? (workInProgressRootConcurrentErrors = [wrapperError])
    : workInProgressRootConcurrentErrors.push(wrapperError);
  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
  if (null === returnFiber) return !0;
  value = createCapturedValueAtFiber(value, sourceFiber);
  sourceFiber = returnFiber;
  do {
    switch (sourceFiber.tag) {
      case 3:
        return (
          (sourceFiber.flags |= 65536),
          (root = rootRenderLanes & -rootRenderLanes),
          (sourceFiber.lanes |= root),
          (root = createRootErrorUpdate(sourceFiber.stateNode, value, root)),
          enqueueCapturedUpdate(sourceFiber, root),
          !1
        );
      case 1:
        if (
          ((returnFiber = sourceFiber.type),
          (wrapperError = sourceFiber.stateNode),
          0 === (sourceFiber.flags & 128) &&
            ("function" === typeof returnFiber.getDerivedStateFromError ||
              (null !== wrapperError &&
                "function" === typeof wrapperError.componentDidCatch &&
                (null === legacyErrorBoundariesThatAlreadyFailed ||
                  !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError)))))
        )
          return (
            (sourceFiber.flags |= 65536),
            (rootRenderLanes &= -rootRenderLanes),
            (sourceFiber.lanes |= rootRenderLanes),
            (rootRenderLanes = createClassErrorUpdate(rootRenderLanes)),
            initializeClassErrorUpdate(
              rootRenderLanes,
              root,
              sourceFiber,
              value
            ),
            enqueueCapturedUpdate(sourceFiber, rootRenderLanes),
            !1
          );
    }
    sourceFiber = sourceFiber.return;
  } while (null !== sourceFiber);
  return !1;
}
var SelectiveHydrationException = Error(formatProdErrorMessage(461)),
  didReceiveUpdate = !1;
function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
  workInProgress.child =
    null === current
      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
      : reconcileChildFibers(
          workInProgress,
          current.child,
          nextChildren,
          renderLanes
        );
}
function updateForwardRef(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  Component = Component.render;
  var ref = workInProgress.ref;
  if ("ref" in nextProps) {
    var propsWithoutRef = {};
    for (var key in nextProps)
      "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
  } else propsWithoutRef = nextProps;
  prepareToReadContext(workInProgress);
  nextProps = renderWithHooks(
    current,
    workInProgress,
    Component,
    propsWithoutRef,
    ref,
    renderLanes
  );
  key = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && key && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null === current) {
    var type = Component.type;
    if (
      "function" === typeof type &&
      !shouldConstruct(type) &&
      void 0 === type.defaultProps &&
      null === Component.compare
    )
      return (
        (workInProgress.tag = 15),
        (workInProgress.type = type),
        updateSimpleMemoComponent(
          current,
          workInProgress,
          type,
          nextProps,
          renderLanes
        )
      );
    current = createFiberFromTypeAndProps(
      Component.type,
      null,
      nextProps,
      workInProgress,
      workInProgress.mode,
      renderLanes
    );
    current.ref = workInProgress.ref;
    current.return = workInProgress;
    return (workInProgress.child = current);
  }
  type = current.child;
  if (!checkScheduledUpdateOrContext(current, renderLanes)) {
    var prevProps = type.memoizedProps;
    Component = Component.compare;
    Component = null !== Component ? Component : shallowEqual;
    if (Component(prevProps, nextProps) && current.ref === workInProgress.ref)
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
  }
  workInProgress.flags |= 1;
  current = createWorkInProgress(type, nextProps);
  current.ref = workInProgress.ref;
  current.return = workInProgress;
  return (workInProgress.child = current);
}
function updateSimpleMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null !== current) {
    var prevProps = current.memoizedProps;
    if (
      shallowEqual(prevProps, nextProps) &&
      current.ref === workInProgress.ref
    )
      if (
        ((didReceiveUpdate = !1),
        (workInProgress.pendingProps = nextProps = prevProps),
        checkScheduledUpdateOrContext(current, renderLanes))
      )
        0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
      else
        return (
          (workInProgress.lanes = current.lanes),
          bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
        );
  }
  return updateFunctionComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    renderLanes
  );
}
function updateOffscreenComponent(
  current,
  workInProgress,
  renderLanes,
  nextProps
) {
  var nextChildren = nextProps.children,
    prevState = null !== current ? current.memoizedState : null;
  null === current &&
    null === workInProgress.stateNode &&
    (workInProgress.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    });
  if ("hidden" === nextProps.mode) {
    if (0 !== (workInProgress.flags & 128)) {
      prevState =
        null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
      if (null !== current) {
        nextProps = workInProgress.child = current.child;
        for (nextChildren = 0; null !== nextProps; )
          (nextChildren =
            nextChildren | nextProps.lanes | nextProps.childLanes),
            (nextProps = nextProps.sibling);
        nextProps = nextChildren & ~prevState;
      } else (nextProps = 0), (workInProgress.child = null);
      return deferHiddenOffscreenComponent(
        current,
        workInProgress,
        prevState,
        renderLanes,
        nextProps
      );
    }
    if (0 !== (renderLanes & 536870912))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        null !== current &&
          pushTransition(
            workInProgress,
            null !== prevState ? prevState.cachePool : null
          ),
        null !== prevState
          ? pushHiddenContext(workInProgress, prevState)
          : reuseHiddenContextOnStack(),
        pushOffscreenSuspenseHandler(workInProgress);
    else
      return (
        (nextProps = workInProgress.lanes = 536870912),
        deferHiddenOffscreenComponent(
          current,
          workInProgress,
          null !== prevState ? prevState.baseLanes | renderLanes : renderLanes,
          renderLanes,
          nextProps
        )
      );
  } else
    null !== prevState
      ? (pushTransition(workInProgress, prevState.cachePool),
        pushHiddenContext(workInProgress, prevState),
        reuseSuspenseHandlerOnStack(workInProgress),
        (workInProgress.memoizedState = null))
      : (null !== current && pushTransition(workInProgress, null),
        reuseHiddenContextOnStack(),
        reuseSuspenseHandlerOnStack(workInProgress));
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
function bailoutOffscreenComponent(current, workInProgress) {
  (null !== current && 22 === current.tag) ||
    null !== workInProgress.stateNode ||
    (workInProgress.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    });
  return workInProgress.sibling;
}
function deferHiddenOffscreenComponent(
  current,
  workInProgress,
  nextBaseLanes,
  renderLanes,
  remainingChildLanes
) {
  var JSCompiler_inline_result = peekCacheFromPool();
  JSCompiler_inline_result =
    null === JSCompiler_inline_result
      ? null
      : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
  workInProgress.memoizedState = {
    baseLanes: nextBaseLanes,
    cachePool: JSCompiler_inline_result
  };
  null !== current && pushTransition(workInProgress, null);
  reuseHiddenContextOnStack();
  pushOffscreenSuspenseHandler(workInProgress);
  null !== current &&
    propagateParentContextChanges(current, workInProgress, renderLanes, !0);
  workInProgress.childLanes = remainingChildLanes;
  return null;
}
function mountActivityChildren(workInProgress, nextProps) {
  nextProps = mountWorkInProgressOffscreenFiber(
    { mode: nextProps.mode, children: nextProps.children },
    workInProgress.mode
  );
  nextProps.ref = workInProgress.ref;
  workInProgress.child = nextProps;
  nextProps.return = workInProgress;
  return nextProps;
}
function retryActivityComponentWithoutHydrating(
  current,
  workInProgress,
  renderLanes
) {
  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
  current = mountActivityChildren(workInProgress, workInProgress.pendingProps);
  current.flags |= 2;
  popSuspenseHandler(workInProgress);
  workInProgress.memoizedState = null;
  return current;
}
function updateActivityComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    didSuspend = 0 !== (workInProgress.flags & 128);
  workInProgress.flags &= -129;
  if (null === current) {
    if (isHydrating) {
      if ("hidden" === nextProps.mode)
        return (
          (current = mountActivityChildren(workInProgress, nextProps)),
          (workInProgress.lanes = 536870912),
          bailoutOffscreenComponent(null, current)
        );
      pushDehydratedActivitySuspenseHandler(workInProgress);
      (current = nextHydratableInstance)
        ? ((current = canHydrateHydrationBoundary(
            current,
            rootOrSingletonContext
          )),
          (current = null !== current && "&" === current.data ? current : null),
          null !== current &&
            ((workInProgress.memoizedState = {
              dehydrated: current,
              treeContext:
                null !== treeContextProvider
                  ? { id: treeContextId, overflow: treeContextOverflow }
                  : null,
              retryLane: 536870912,
              hydrationErrors: null
            }),
            (renderLanes = createFiberFromDehydratedFragment(current)),
            (renderLanes.return = workInProgress),
            (workInProgress.child = renderLanes),
            (hydrationParentFiber = workInProgress),
            (nextHydratableInstance = null)))
        : (current = null);
      if (null === current) throw throwOnHydrationMismatch(workInProgress);
      workInProgress.lanes = 536870912;
      return null;
    }
    return mountActivityChildren(workInProgress, nextProps);
  }
  var prevState = current.memoizedState;
  if (null !== prevState) {
    var dehydrated = prevState.dehydrated;
    pushDehydratedActivitySuspenseHandler(workInProgress);
    if (didSuspend)
      if (workInProgress.flags & 256)
        (workInProgress.flags &= -257),
          (workInProgress = retryActivityComponentWithoutHydrating(
            current,
            workInProgress,
            renderLanes
          ));
      else if (null !== workInProgress.memoizedState)
        (workInProgress.child = current.child),
          (workInProgress.flags |= 128),
          (workInProgress = null);
      else throw Error(formatProdErrorMessage(558));
    else if (
      (didReceiveUpdate ||
        propagateParentContextChanges(current, workInProgress, renderLanes, !1),
      (didSuspend = 0 !== (renderLanes & current.childLanes)),
      didReceiveUpdate || didSuspend)
    ) {
      nextProps = workInProgressRoot;
      if (
        null !== nextProps &&
        ((dehydrated = getBumpedLaneForHydration(nextProps, renderLanes)),
        0 !== dehydrated && dehydrated !== prevState.retryLane)
      )
        throw (
          ((prevState.retryLane = dehydrated),
          enqueueConcurrentRenderForLane(current, dehydrated),
          scheduleUpdateOnFiber(nextProps, current, dehydrated),
          SelectiveHydrationException)
        );
      renderDidSuspendDelayIfPossible();
      workInProgress = retryActivityComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes
      );
    } else
      (current = prevState.treeContext),
        (nextHydratableInstance = getNextHydratable(dehydrated.nextSibling)),
        (hydrationParentFiber = workInProgress),
        (isHydrating = !0),
        (hydrationErrors = null),
        (rootOrSingletonContext = !1),
        null !== current &&
          restoreSuspendedTreeContext(workInProgress, current),
        (workInProgress = mountActivityChildren(workInProgress, nextProps)),
        (workInProgress.flags |= 4096);
    return workInProgress;
  }
  current = createWorkInProgress(current.child, {
    mode: nextProps.mode,
    children: nextProps.children
  });
  current.ref = workInProgress.ref;
  workInProgress.child = current;
  current.return = workInProgress;
  return current;
}
function markRef(current, workInProgress) {
  var ref = workInProgress.ref;
  if (null === ref)
    null !== current &&
      null !== current.ref &&
      (workInProgress.flags |= 4194816);
  else {
    if ("function" !== typeof ref && "object" !== typeof ref)
      throw Error(formatProdErrorMessage(284));
    if (null === current || current.ref !== ref)
      workInProgress.flags |= 4194816;
  }
}
function updateFunctionComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  prepareToReadContext(workInProgress);
  Component = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    void 0,
    renderLanes
  );
  nextProps = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, Component, renderLanes);
  return workInProgress.child;
}
function replayFunctionComponent(
  current,
  workInProgress,
  nextProps,
  Component,
  secondArg,
  renderLanes
) {
  prepareToReadContext(workInProgress);
  workInProgress.updateQueue = null;
  nextProps = renderWithHooksAgain(
    workInProgress,
    Component,
    nextProps,
    secondArg
  );
  finishRenderingHooks(current);
  Component = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && Component && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateClassComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  prepareToReadContext(workInProgress);
  if (null === workInProgress.stateNode) {
    var context = emptyContextObject,
      contextType = Component.contextType;
    "object" === typeof contextType &&
      null !== contextType &&
      (context = readContext(contextType));
    context = new Component(nextProps, context);
    workInProgress.memoizedState =
      null !== context.state && void 0 !== context.state ? context.state : null;
    context.updater = classComponentUpdater;
    workInProgress.stateNode = context;
    context._reactInternals = workInProgress;
    context = workInProgress.stateNode;
    context.props = nextProps;
    context.state = workInProgress.memoizedState;
    context.refs = {};
    initializeUpdateQueue(workInProgress);
    contextType = Component.contextType;
    context.context =
      "object" === typeof contextType && null !== contextType
        ? readContext(contextType)
        : emptyContextObject;
    context.state = workInProgress.memoizedState;
    contextType = Component.getDerivedStateFromProps;
    "function" === typeof contextType &&
      (applyDerivedStateFromProps(
        workInProgress,
        Component,
        contextType,
        nextProps
      ),
      (context.state = workInProgress.memoizedState));
    "function" === typeof Component.getDerivedStateFromProps ||
      "function" === typeof context.getSnapshotBeforeUpdate ||
      ("function" !== typeof context.UNSAFE_componentWillMount &&
        "function" !== typeof context.componentWillMount) ||
      ((contextType = context.state),
      "function" === typeof context.componentWillMount &&
        context.componentWillMount(),
      "function" === typeof context.UNSAFE_componentWillMount &&
        context.UNSAFE_componentWillMount(),
      contextType !== context.state &&
        classComponentUpdater.enqueueReplaceState(context, context.state, null),
      processUpdateQueue(workInProgress, nextProps, context, renderLanes),
      suspendIfUpdateReadFromEntangledAsyncAction(),
      (context.state = workInProgress.memoizedState));
    "function" === typeof context.componentDidMount &&
      (workInProgress.flags |= 4194308);
    nextProps = !0;
  } else if (null === current) {
    context = workInProgress.stateNode;
    var unresolvedOldProps = workInProgress.memoizedProps,
      oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
    context.props = oldProps;
    var oldContext = context.context,
      contextType$jscomp$0 = Component.contextType;
    contextType = emptyContextObject;
    "object" === typeof contextType$jscomp$0 &&
      null !== contextType$jscomp$0 &&
      (contextType = readContext(contextType$jscomp$0));
    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
    contextType$jscomp$0 =
      "function" === typeof getDerivedStateFromProps ||
      "function" === typeof context.getSnapshotBeforeUpdate;
    unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
    contextType$jscomp$0 ||
      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof context.componentWillReceiveProps) ||
      ((unresolvedOldProps || oldContext !== contextType) &&
        callComponentWillReceiveProps(
          workInProgress,
          context,
          nextProps,
          contextType
        ));
    hasForceUpdate = !1;
    var oldState = workInProgress.memoizedState;
    context.state = oldState;
    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    oldContext = workInProgress.memoizedState;
    unresolvedOldProps || oldState !== oldContext || hasForceUpdate
      ? ("function" === typeof getDerivedStateFromProps &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            getDerivedStateFromProps,
            nextProps
          ),
          (oldContext = workInProgress.memoizedState)),
        (oldProps =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            oldProps,
            nextProps,
            oldState,
            oldContext,
            contextType
          ))
          ? (contextType$jscomp$0 ||
              ("function" !== typeof context.UNSAFE_componentWillMount &&
                "function" !== typeof context.componentWillMount) ||
              ("function" === typeof context.componentWillMount &&
                context.componentWillMount(),
              "function" === typeof context.UNSAFE_componentWillMount &&
                context.UNSAFE_componentWillMount()),
            "function" === typeof context.componentDidMount &&
              (workInProgress.flags |= 4194308))
          : ("function" === typeof context.componentDidMount &&
              (workInProgress.flags |= 4194308),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = oldContext)),
        (context.props = nextProps),
        (context.state = oldContext),
        (context.context = contextType),
        (nextProps = oldProps))
      : ("function" === typeof context.componentDidMount &&
          (workInProgress.flags |= 4194308),
        (nextProps = !1));
  } else {
    context = workInProgress.stateNode;
    cloneUpdateQueue(current, workInProgress);
    contextType = workInProgress.memoizedProps;
    contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
    context.props = contextType$jscomp$0;
    getDerivedStateFromProps = workInProgress.pendingProps;
    oldState = context.context;
    oldContext = Component.contextType;
    oldProps = emptyContextObject;
    "object" === typeof oldContext &&
      null !== oldContext &&
      (oldProps = readContext(oldContext));
    unresolvedOldProps = Component.getDerivedStateFromProps;
    (oldContext =
      "function" === typeof unresolvedOldProps ||
      "function" === typeof context.getSnapshotBeforeUpdate) ||
      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof context.componentWillReceiveProps) ||
      ((contextType !== getDerivedStateFromProps || oldState !== oldProps) &&
        callComponentWillReceiveProps(
          workInProgress,
          context,
          nextProps,
          oldProps
        ));
    hasForceUpdate = !1;
    oldState = workInProgress.memoizedState;
    context.state = oldState;
    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    var newState = workInProgress.memoizedState;
    contextType !== getDerivedStateFromProps ||
    oldState !== newState ||
    hasForceUpdate ||
    (null !== current &&
      null !== current.dependencies &&
      checkIfContextChanged(current.dependencies))
      ? ("function" === typeof unresolvedOldProps &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            unresolvedOldProps,
            nextProps
          ),
          (newState = workInProgress.memoizedState)),
        (contextType$jscomp$0 =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            contextType$jscomp$0,
            nextProps,
            oldState,
            newState,
            oldProps
          ) ||
          (null !== current &&
            null !== current.dependencies &&
            checkIfContextChanged(current.dependencies)))
          ? (oldContext ||
              ("function" !== typeof context.UNSAFE_componentWillUpdate &&
                "function" !== typeof context.componentWillUpdate) ||
              ("function" === typeof context.componentWillUpdate &&
                context.componentWillUpdate(nextProps, newState, oldProps),
              "function" === typeof context.UNSAFE_componentWillUpdate &&
                context.UNSAFE_componentWillUpdate(
                  nextProps,
                  newState,
                  oldProps
                )),
            "function" === typeof context.componentDidUpdate &&
              (workInProgress.flags |= 4),
            "function" === typeof context.getSnapshotBeforeUpdate &&
              (workInProgress.flags |= 1024))
          : ("function" !== typeof context.componentDidUpdate ||
              (contextType === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 4),
            "function" !== typeof context.getSnapshotBeforeUpdate ||
              (contextType === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 1024),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = newState)),
        (context.props = nextProps),
        (context.state = newState),
        (context.context = oldProps),
        (nextProps = contextType$jscomp$0))
      : ("function" !== typeof context.componentDidUpdate ||
          (contextType === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 4),
        "function" !== typeof context.getSnapshotBeforeUpdate ||
          (contextType === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 1024),
        (nextProps = !1));
  }
  context = nextProps;
  markRef(current, workInProgress);
  nextProps = 0 !== (workInProgress.flags & 128);
  context || nextProps
    ? ((context = workInProgress.stateNode),
      (Component =
        nextProps && "function" !== typeof Component.getDerivedStateFromError
          ? null
          : context.render()),
      (workInProgress.flags |= 1),
      null !== current && nextProps
        ? ((workInProgress.child = reconcileChildFibers(
            workInProgress,
            current.child,
            null,
            renderLanes
          )),
          (workInProgress.child = reconcileChildFibers(
            workInProgress,
            null,
            Component,
            renderLanes
          )))
        : reconcileChildren(current, workInProgress, Component, renderLanes),
      (workInProgress.memoizedState = context.state),
      (current = workInProgress.child))
    : (current = bailoutOnAlreadyFinishedWork(
        current,
        workInProgress,
        renderLanes
      ));
  return current;
}
function mountHostRootWithoutHydrating(
  current,
  workInProgress,
  nextChildren,
  renderLanes
) {
  resetHydrationState();
  workInProgress.flags |= 256;
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
var SUSPENDED_MARKER = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null
};
function mountSuspenseOffscreenState(renderLanes) {
  return { baseLanes: renderLanes, cachePool: getSuspendedCache() };
}
function getRemainingWorkInPrimaryTree(
  current,
  primaryTreeDidDefer,
  renderLanes
) {
  current = null !== current ? current.childLanes & ~renderLanes : 0;
  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
  return current;
}
function updateSuspenseComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    showFallback = !1,
    didSuspend = 0 !== (workInProgress.flags & 128),
    JSCompiler_temp;
  (JSCompiler_temp = didSuspend) ||
    (JSCompiler_temp =
      null !== current && null === current.memoizedState
        ? !1
        : 0 !== (suspenseStackCursor.current & 2));
  JSCompiler_temp && ((showFallback = !0), (workInProgress.flags &= -129));
  JSCompiler_temp = 0 !== (workInProgress.flags & 32);
  workInProgress.flags &= -33;
  if (null === current) {
    if (isHydrating) {
      showFallback
        ? pushPrimaryTreeSuspenseHandler(workInProgress)
        : reuseSuspenseHandlerOnStack(workInProgress);
      (current = nextHydratableInstance)
        ? ((current = canHydrateHydrationBoundary(
            current,
            rootOrSingletonContext
          )),
          (current = null !== current && "&" !== current.data ? current : null),
          null !== current &&
            ((workInProgress.memoizedState = {
              dehydrated: current,
              treeContext:
                null !== treeContextProvider
                  ? { id: treeContextId, overflow: treeContextOverflow }
                  : null,
              retryLane: 536870912,
              hydrationErrors: null
            }),
            (renderLanes = createFiberFromDehydratedFragment(current)),
            (renderLanes.return = workInProgress),
            (workInProgress.child = renderLanes),
            (hydrationParentFiber = workInProgress),
            (nextHydratableInstance = null)))
        : (current = null);
      if (null === current) throw throwOnHydrationMismatch(workInProgress);
      isSuspenseInstanceFallback(current)
        ? (workInProgress.lanes = 32)
        : (workInProgress.lanes = 536870912);
      return null;
    }
    var nextPrimaryChildren = nextProps.children;
    nextProps = nextProps.fallback;
    if (showFallback)
      return (
        reuseSuspenseHandlerOnStack(workInProgress),
        (showFallback = workInProgress.mode),
        (nextPrimaryChildren = mountWorkInProgressOffscreenFiber(
          { mode: "hidden", children: nextPrimaryChildren },
          showFallback
        )),
        (nextProps = createFiberFromFragment(
          nextProps,
          showFallback,
          renderLanes,
          null
        )),
        (nextPrimaryChildren.return = workInProgress),
        (nextProps.return = workInProgress),
        (nextPrimaryChildren.sibling = nextProps),
        (workInProgress.child = nextPrimaryChildren),
        (nextProps = workInProgress.child),
        (nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes)),
        (nextProps.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        bailoutOffscreenComponent(null, nextProps)
      );
    pushPrimaryTreeSuspenseHandler(workInProgress);
    return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren);
  }
  var prevState = current.memoizedState;
  if (
    null !== prevState &&
    ((nextPrimaryChildren = prevState.dehydrated), null !== nextPrimaryChildren)
  ) {
    if (didSuspend)
      workInProgress.flags & 256
        ? (pushPrimaryTreeSuspenseHandler(workInProgress),
          (workInProgress.flags &= -257),
          (workInProgress = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress,
            renderLanes
          )))
        : null !== workInProgress.memoizedState
          ? (reuseSuspenseHandlerOnStack(workInProgress),
            (workInProgress.child = current.child),
            (workInProgress.flags |= 128),
            (workInProgress = null))
          : (reuseSuspenseHandlerOnStack(workInProgress),
            (nextPrimaryChildren = nextProps.fallback),
            (showFallback = workInProgress.mode),
            (nextProps = mountWorkInProgressOffscreenFiber(
              { mode: "visible", children: nextProps.children },
              showFallback
            )),
            (nextPrimaryChildren = createFiberFromFragment(
              nextPrimaryChildren,
              showFallback,
              renderLanes,
              null
            )),
            (nextPrimaryChildren.flags |= 2),
            (nextProps.return = workInProgress),
            (nextPrimaryChildren.return = workInProgress),
            (nextProps.sibling = nextPrimaryChildren),
            (workInProgress.child = nextProps),
            reconcileChildFibers(
              workInProgress,
              current.child,
              null,
              renderLanes
            ),
            (nextProps = workInProgress.child),
            (nextProps.memoizedState =
              mountSuspenseOffscreenState(renderLanes)),
            (nextProps.childLanes = getRemainingWorkInPrimaryTree(
              current,
              JSCompiler_temp,
              renderLanes
            )),
            (workInProgress.memoizedState = SUSPENDED_MARKER),
            (workInProgress = bailoutOffscreenComponent(null, nextProps)));
    else if (
      (pushPrimaryTreeSuspenseHandler(workInProgress),
      isSuspenseInstanceFallback(nextPrimaryChildren))
    ) {
      JSCompiler_temp =
        nextPrimaryChildren.nextSibling &&
        nextPrimaryChildren.nextSibling.dataset;
      if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
      JSCompiler_temp = digest;
      nextProps = Error(formatProdErrorMessage(419));
      nextProps.stack = "";
      nextProps.digest = JSCompiler_temp;
      queueHydrationError({ value: nextProps, source: null, stack: null });
      workInProgress = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes
      );
    } else if (
      (didReceiveUpdate ||
        propagateParentContextChanges(current, workInProgress, renderLanes, !1),
      (JSCompiler_temp = 0 !== (renderLanes & current.childLanes)),
      didReceiveUpdate || JSCompiler_temp)
    ) {
      JSCompiler_temp = workInProgressRoot;
      if (
        null !== JSCompiler_temp &&
        ((nextProps = getBumpedLaneForHydration(JSCompiler_temp, renderLanes)),
        0 !== nextProps && nextProps !== prevState.retryLane)
      )
        throw (
          ((prevState.retryLane = nextProps),
          enqueueConcurrentRenderForLane(current, nextProps),
          scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps),
          SelectiveHydrationException)
        );
      isSuspenseInstancePending(nextPrimaryChildren) ||
        renderDidSuspendDelayIfPossible();
      workInProgress = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes
      );
    } else
      isSuspenseInstancePending(nextPrimaryChildren)
        ? ((workInProgress.flags |= 192),
          (workInProgress.child = current.child),
          (workInProgress = null))
        : ((current = prevState.treeContext),
          (nextHydratableInstance = getNextHydratable(
            nextPrimaryChildren.nextSibling
          )),
          (hydrationParentFiber = workInProgress),
          (isHydrating = !0),
          (hydrationErrors = null),
          (rootOrSingletonContext = !1),
          null !== current &&
            restoreSuspendedTreeContext(workInProgress, current),
          (workInProgress = mountSuspensePrimaryChildren(
            workInProgress,
            nextProps.children
          )),
          (workInProgress.flags |= 4096));
    return workInProgress;
  }
  if (showFallback)
    return (
      reuseSuspenseHandlerOnStack(workInProgress),
      (nextPrimaryChildren = nextProps.fallback),
      (showFallback = workInProgress.mode),
      (prevState = current.child),
      (digest = prevState.sibling),
      (nextProps = createWorkInProgress(prevState, {
        mode: "hidden",
        children: nextProps.children
      })),
      (nextProps.subtreeFlags = prevState.subtreeFlags & 65011712),
      null !== digest
        ? (nextPrimaryChildren = createWorkInProgress(
            digest,
            nextPrimaryChildren
          ))
        : ((nextPrimaryChildren = createFiberFromFragment(
            nextPrimaryChildren,
            showFallback,
            renderLanes,
            null
          )),
          (nextPrimaryChildren.flags |= 2)),
      (nextPrimaryChildren.return = workInProgress),
      (nextProps.return = workInProgress),
      (nextProps.sibling = nextPrimaryChildren),
      (workInProgress.child = nextProps),
      bailoutOffscreenComponent(null, nextProps),
      (nextProps = workInProgress.child),
      (nextPrimaryChildren = current.child.memoizedState),
      null === nextPrimaryChildren
        ? (nextPrimaryChildren = mountSuspenseOffscreenState(renderLanes))
        : ((showFallback = nextPrimaryChildren.cachePool),
          null !== showFallback
            ? ((prevState = CacheContext._currentValue),
              (showFallback =
                showFallback.parent !== prevState
                  ? { parent: prevState, pool: prevState }
                  : showFallback))
            : (showFallback = getSuspendedCache()),
          (nextPrimaryChildren = {
            baseLanes: nextPrimaryChildren.baseLanes | renderLanes,
            cachePool: showFallback
          })),
      (nextProps.memoizedState = nextPrimaryChildren),
      (nextProps.childLanes = getRemainingWorkInPrimaryTree(
        current,
        JSCompiler_temp,
        renderLanes
      )),
      (workInProgress.memoizedState = SUSPENDED_MARKER),
      bailoutOffscreenComponent(current.child, nextProps)
    );
  pushPrimaryTreeSuspenseHandler(workInProgress);
  renderLanes = current.child;
  current = renderLanes.sibling;
  renderLanes = createWorkInProgress(renderLanes, {
    mode: "visible",
    children: nextProps.children
  });
  renderLanes.return = workInProgress;
  renderLanes.sibling = null;
  null !== current &&
    ((JSCompiler_temp = workInProgress.deletions),
    null === JSCompiler_temp
      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
      : JSCompiler_temp.push(current));
  workInProgress.child = renderLanes;
  workInProgress.memoizedState = null;
  return renderLanes;
}
function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
  primaryChildren = mountWorkInProgressOffscreenFiber(
    { mode: "visible", children: primaryChildren },
    workInProgress.mode
  );
  primaryChildren.return = workInProgress;
  return (workInProgress.child = primaryChildren);
}
function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
  offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
  offscreenProps.lanes = 0;
  return offscreenProps;
}
function retrySuspenseComponentWithoutHydrating(
  current,
  workInProgress,
  renderLanes
) {
  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
  current = mountSuspensePrimaryChildren(
    workInProgress,
    workInProgress.pendingProps.children
  );
  current.flags |= 2;
  workInProgress.memoizedState = null;
  return current;
}
function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
  fiber.lanes |= renderLanes;
  var alternate = fiber.alternate;
  null !== alternate && (alternate.lanes |= renderLanes);
  scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
}
function initSuspenseListRenderState(
  workInProgress,
  isBackwards,
  tail,
  lastContentRow,
  tailMode,
  treeForkCount
) {
  var renderState = workInProgress.memoizedState;
  null === renderState
    ? (workInProgress.memoizedState = {
        isBackwards: isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail: tail,
        tailMode: tailMode,
        treeForkCount: treeForkCount
      })
    : ((renderState.isBackwards = isBackwards),
      (renderState.rendering = null),
      (renderState.renderingStartTime = 0),
      (renderState.last = lastContentRow),
      (renderState.tail = tail),
      (renderState.tailMode = tailMode),
      (renderState.treeForkCount = treeForkCount));
}
function updateSuspenseListComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    revealOrder = nextProps.revealOrder,
    tailMode = nextProps.tail;
  nextProps = nextProps.children;
  var suspenseContext = suspenseStackCursor.current,
    shouldForceFallback = 0 !== (suspenseContext & 2);
  shouldForceFallback
    ? ((suspenseContext = (suspenseContext & 1) | 2),
      (workInProgress.flags |= 128))
    : (suspenseContext &= 1);
  push(suspenseStackCursor, suspenseContext);
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  nextProps = isHydrating ? treeForkCount : 0;
  if (!shouldForceFallback && null !== current && 0 !== (current.flags & 128))
    a: for (current = workInProgress.child; null !== current; ) {
      if (13 === current.tag)
        null !== current.memoizedState &&
          scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
      else if (19 === current.tag)
        scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
      else if (null !== current.child) {
        current.child.return = current;
        current = current.child;
        continue;
      }
      if (current === workInProgress) break a;
      for (; null === current.sibling; ) {
        if (null === current.return || current.return === workInProgress)
          break a;
        current = current.return;
      }
      current.sibling.return = current.return;
      current = current.sibling;
    }
  switch (revealOrder) {
    case "forwards":
      renderLanes = workInProgress.child;
      for (revealOrder = null; null !== renderLanes; )
        (current = renderLanes.alternate),
          null !== current &&
            null === findFirstSuspended(current) &&
            (revealOrder = renderLanes),
          (renderLanes = renderLanes.sibling);
      renderLanes = revealOrder;
      null === renderLanes
        ? ((revealOrder = workInProgress.child), (workInProgress.child = null))
        : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
      initSuspenseListRenderState(
        workInProgress,
        !1,
        revealOrder,
        renderLanes,
        tailMode,
        nextProps
      );
      break;
    case "backwards":
    case "unstable_legacy-backwards":
      renderLanes = null;
      revealOrder = workInProgress.child;
      for (workInProgress.child = null; null !== revealOrder; ) {
        current = revealOrder.alternate;
        if (null !== current && null === findFirstSuspended(current)) {
          workInProgress.child = revealOrder;
          break;
        }
        current = revealOrder.sibling;
        revealOrder.sibling = renderLanes;
        renderLanes = revealOrder;
        revealOrder = current;
      }
      initSuspenseListRenderState(
        workInProgress,
        !0,
        renderLanes,
        null,
        tailMode,
        nextProps
      );
      break;
    case "together":
      initSuspenseListRenderState(
        workInProgress,
        !1,
        null,
        null,
        void 0,
        nextProps
      );
      break;
    default:
      workInProgress.memoizedState = null;
  }
  return workInProgress.child;
}
function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
  null !== current && (workInProgress.dependencies = current.dependencies);
  workInProgressRootSkippedLanes |= workInProgress.lanes;
  if (0 === (renderLanes & workInProgress.childLanes))
    if (null !== current) {
      if (
        (propagateParentContextChanges(
          current,
          workInProgress,
          renderLanes,
          !1
        ),
        0 === (renderLanes & workInProgress.childLanes))
      )
        return null;
    } else return null;
  if (null !== current && workInProgress.child !== current.child)
    throw Error(formatProdErrorMessage(153));
  if (null !== workInProgress.child) {
    current = workInProgress.child;
    renderLanes = createWorkInProgress(current, current.pendingProps);
    workInProgress.child = renderLanes;
    for (renderLanes.return = workInProgress; null !== current.sibling; )
      (current = current.sibling),
        (renderLanes = renderLanes.sibling =
          createWorkInProgress(current, current.pendingProps)),
        (renderLanes.return = workInProgress);
    renderLanes.sibling = null;
  }
  return workInProgress.child;
}
function checkScheduledUpdateOrContext(current, renderLanes) {
  if (0 !== (current.lanes & renderLanes)) return !0;
  current = current.dependencies;
  return null !== current && checkIfContextChanged(current) ? !0 : !1;
}
function attemptEarlyBailoutIfNoScheduledUpdate(
  current,
  workInProgress,
  renderLanes
) {
  switch (workInProgress.tag) {
    case 3:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
      resetHydrationState();
      break;
    case 27:
    case 5:
      pushHostContext(workInProgress);
      break;
    case 4:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      break;
    case 10:
      pushProvider(
        workInProgress,
        workInProgress.type,
        workInProgress.memoizedProps.value
      );
      break;
    case 31:
      if (null !== workInProgress.memoizedState)
        return (
          (workInProgress.flags |= 128),
          pushDehydratedActivitySuspenseHandler(workInProgress),
          null
        );
      break;
    case 13:
      var state$102 = workInProgress.memoizedState;
      if (null !== state$102) {
        if (null !== state$102.dehydrated)
          return (
            pushPrimaryTreeSuspenseHandler(workInProgress),
            (workInProgress.flags |= 128),
            null
          );
        if (0 !== (renderLanes & workInProgress.child.childLanes))
          return updateSuspenseComponent(current, workInProgress, renderLanes);
        pushPrimaryTreeSuspenseHandler(workInProgress);
        current = bailoutOnAlreadyFinishedWork(
          current,
          workInProgress,
          renderLanes
        );
        return null !== current ? current.sibling : null;
      }
      pushPrimaryTreeSuspenseHandler(workInProgress);
      break;
    case 19:
      var didSuspendBefore = 0 !== (current.flags & 128);
      state$102 = 0 !== (renderLanes & workInProgress.childLanes);
      state$102 ||
        (propagateParentContextChanges(
          current,
          workInProgress,
          renderLanes,
          !1
        ),
        (state$102 = 0 !== (renderLanes & workInProgress.childLanes)));
      if (didSuspendBefore) {
        if (state$102)
          return updateSuspenseListComponent(
            current,
            workInProgress,
            renderLanes
          );
        workInProgress.flags |= 128;
      }
      didSuspendBefore = workInProgress.memoizedState;
      null !== didSuspendBefore &&
        ((didSuspendBefore.rendering = null),
        (didSuspendBefore.tail = null),
        (didSuspendBefore.lastEffect = null));
      push(suspenseStackCursor, suspenseStackCursor.current);
      if (state$102) break;
      else return null;
    case 22:
      return (
        (workInProgress.lanes = 0),
        updateOffscreenComponent(
          current,
          workInProgress,
          renderLanes,
          workInProgress.pendingProps
        )
      );
    case 24:
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
  }
  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
}
function beginWork(current, workInProgress, renderLanes) {
  if (null !== current)
    if (current.memoizedProps !== workInProgress.pendingProps)
      didReceiveUpdate = !0;
    else {
      if (
        !checkScheduledUpdateOrContext(current, renderLanes) &&
        0 === (workInProgress.flags & 128)
      )
        return (
          (didReceiveUpdate = !1),
          attemptEarlyBailoutIfNoScheduledUpdate(
            current,
            workInProgress,
            renderLanes
          )
        );
      didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
    }
  else
    (didReceiveUpdate = !1),
      isHydrating &&
        0 !== (workInProgress.flags & 1048576) &&
        pushTreeId(workInProgress, treeForkCount, workInProgress.index);
  workInProgress.lanes = 0;
  switch (workInProgress.tag) {
    case 16:
      a: {
        var props = workInProgress.pendingProps;
        current = resolveLazy(workInProgress.elementType);
        workInProgress.type = current;
        if ("function" === typeof current)
          shouldConstruct(current)
            ? ((props = resolveClassComponentProps(current, props)),
              (workInProgress.tag = 1),
              (workInProgress = updateClassComponent(
                null,
                workInProgress,
                current,
                props,
                renderLanes
              )))
            : ((workInProgress.tag = 0),
              (workInProgress = updateFunctionComponent(
                null,
                workInProgress,
                current,
                props,
                renderLanes
              )));
        else {
          if (void 0 !== current && null !== current) {
            var $$typeof = current.$$typeof;
            if ($$typeof === REACT_FORWARD_REF_TYPE) {
              workInProgress.tag = 11;
              workInProgress = updateForwardRef(
                null,
                workInProgress,
                current,
                props,
                renderLanes
              );
              break a;
            } else if ($$typeof === REACT_MEMO_TYPE) {
              workInProgress.tag = 14;
              workInProgress = updateMemoComponent(
                null,
                workInProgress,
                current,
                props,
                renderLanes
              );
              break a;
            }
          }
          workInProgress = getComponentNameFromType(current) || current;
          throw Error(formatProdErrorMessage(306, workInProgress, ""));
        }
      }
      return workInProgress;
    case 0:
      return updateFunctionComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 1:
      return (
        (props = workInProgress.type),
        ($$typeof = resolveClassComponentProps(
          props,
          workInProgress.pendingProps
        )),
        updateClassComponent(
          current,
          workInProgress,
          props,
          $$typeof,
          renderLanes
        )
      );
    case 3:
      a: {
        pushHostContainer(
          workInProgress,
          workInProgress.stateNode.containerInfo
        );
        if (null === current) throw Error(formatProdErrorMessage(387));
        props = workInProgress.pendingProps;
        var prevState = workInProgress.memoizedState;
        $$typeof = prevState.element;
        cloneUpdateQueue(current, workInProgress);
        processUpdateQueue(workInProgress, props, null, renderLanes);
        var nextState = workInProgress.memoizedState;
        props = nextState.cache;
        pushProvider(workInProgress, CacheContext, props);
        props !== prevState.cache &&
          propagateContextChanges(
            workInProgress,
            [CacheContext],
            renderLanes,
            !0
          );
        suspendIfUpdateReadFromEntangledAsyncAction();
        props = nextState.element;
        if (prevState.isDehydrated)
          if (
            ((prevState = {
              element: props,
              isDehydrated: !1,
              cache: nextState.cache
            }),
            (workInProgress.updateQueue.baseState = prevState),
            (workInProgress.memoizedState = prevState),
            workInProgress.flags & 256)
          ) {
            workInProgress = mountHostRootWithoutHydrating(
              current,
              workInProgress,
              props,
              renderLanes
            );
            break a;
          } else if (props !== $$typeof) {
            $$typeof = createCapturedValueAtFiber(
              Error(formatProdErrorMessage(424)),
              workInProgress
            );
            queueHydrationError($$typeof);
            workInProgress = mountHostRootWithoutHydrating(
              current,
              workInProgress,
              props,
              renderLanes
            );
            break a;
          } else {
            current = workInProgress.stateNode.containerInfo;
            switch (current.nodeType) {
              case 9:
                current = current.body;
                break;
              default:
                current =
                  "HTML" === current.nodeName
                    ? current.ownerDocument.body
                    : current;
            }
            nextHydratableInstance = getNextHydratable(current.firstChild);
            hydrationParentFiber = workInProgress;
            isHydrating = !0;
            hydrationErrors = null;
            rootOrSingletonContext = !0;
            renderLanes = mountChildFibers(
              workInProgress,
              null,
              props,
              renderLanes
            );
            for (workInProgress.child = renderLanes; renderLanes; )
              (renderLanes.flags = (renderLanes.flags & -3) | 4096),
                (renderLanes = renderLanes.sibling);
          }
        else {
          resetHydrationState();
          if (props === $$typeof) {
            workInProgress = bailoutOnAlreadyFinishedWork(
              current,
              workInProgress,
              renderLanes
            );
            break a;
          }
          reconcileChildren(current, workInProgress, props, renderLanes);
        }
        workInProgress = workInProgress.child;
      }
      return workInProgress;
    case 26:
      return (
        markRef(current, workInProgress),
        null === current
          ? (renderLanes = getResource(
              workInProgress.type,
              null,
              workInProgress.pendingProps,
              null
            ))
            ? (workInProgress.memoizedState = renderLanes)
            : isHydrating ||
              ((renderLanes = workInProgress.type),
              (current = workInProgress.pendingProps),
              (props = getOwnerDocumentFromRootContainer(
                rootInstanceStackCursor.current
              ).createElement(renderLanes)),
              (props[internalInstanceKey] = workInProgress),
              (props[internalPropsKey] = current),
              setInitialProperties(props, renderLanes, current),
              markNodeAsHoistable(props),
              (workInProgress.stateNode = props))
          : (workInProgress.memoizedState = getResource(
              workInProgress.type,
              current.memoizedProps,
              workInProgress.pendingProps,
              current.memoizedState
            )),
        null
      );
    case 27:
      return (
        pushHostContext(workInProgress),
        null === current &&
          isHydrating &&
          ((props = workInProgress.stateNode =
            resolveSingletonInstance(
              workInProgress.type,
              workInProgress.pendingProps,
              rootInstanceStackCursor.current
            )),
          (hydrationParentFiber = workInProgress),
          (rootOrSingletonContext = !0),
          ($$typeof = nextHydratableInstance),
          isSingletonScope(workInProgress.type)
            ? ((previousHydratableOnEnteringScopedSingleton = $$typeof),
              (nextHydratableInstance = getNextHydratable(props.firstChild)))
            : (nextHydratableInstance = $$typeof)),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        markRef(current, workInProgress),
        null === current && (workInProgress.flags |= 4194304),
        workInProgress.child
      );
    case 5:
      if (null === current && isHydrating) {
        if (($$typeof = props = nextHydratableInstance))
          (props = canHydrateInstance(
            props,
            workInProgress.type,
            workInProgress.pendingProps,
            rootOrSingletonContext
          )),
            null !== props
              ? ((workInProgress.stateNode = props),
                (hydrationParentFiber = workInProgress),
                (nextHydratableInstance = getNextHydratable(props.firstChild)),
                (rootOrSingletonContext = !1),
                ($$typeof = !0))
              : ($$typeof = !1);
        $$typeof || throwOnHydrationMismatch(workInProgress);
      }
      pushHostContext(workInProgress);
      $$typeof = workInProgress.type;
      prevState = workInProgress.pendingProps;
      nextState = null !== current ? current.memoizedProps : null;
      props = prevState.children;
      shouldSetTextContent($$typeof, prevState)
        ? (props = null)
        : null !== nextState &&
          shouldSetTextContent($$typeof, nextState) &&
          (workInProgress.flags |= 32);
      null !== workInProgress.memoizedState &&
        (($$typeof = renderWithHooks(
          current,
          workInProgress,
          TransitionAwareHostComponent,
          null,
          null,
          renderLanes
        )),
        (HostTransitionContext._currentValue = $$typeof));
      markRef(current, workInProgress);
      reconcileChildren(current, workInProgress, props, renderLanes);
      return workInProgress.child;
    case 6:
      if (null === current && isHydrating) {
        if ((current = renderLanes = nextHydratableInstance))
          (renderLanes = canHydrateTextInstance(
            renderLanes,
            workInProgress.pendingProps,
            rootOrSingletonContext
          )),
            null !== renderLanes
              ? ((workInProgress.stateNode = renderLanes),
                (hydrationParentFiber = workInProgress),
                (nextHydratableInstance = null),
                (current = !0))
              : (current = !1);
        current || throwOnHydrationMismatch(workInProgress);
      }
      return null;
    case 13:
      return updateSuspenseComponent(current, workInProgress, renderLanes);
    case 4:
      return (
        pushHostContainer(
          workInProgress,
          workInProgress.stateNode.containerInfo
        ),
        (props = workInProgress.pendingProps),
        null === current
          ? (workInProgress.child = reconcileChildFibers(
              workInProgress,
              null,
              props,
              renderLanes
            ))
          : reconcileChildren(current, workInProgress, props, renderLanes),
        workInProgress.child
      );
    case 11:
      return updateForwardRef(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 7:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps,
          renderLanes
        ),
        workInProgress.child
      );
    case 8:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 12:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 10:
      return (
        (props = workInProgress.pendingProps),
        pushProvider(workInProgress, workInProgress.type, props.value),
        reconcileChildren(current, workInProgress, props.children, renderLanes),
        workInProgress.child
      );
    case 9:
      return (
        ($$typeof = workInProgress.type._context),
        (props = workInProgress.pendingProps.children),
        prepareToReadContext(workInProgress),
        ($$typeof = readContext($$typeof)),
        (props = props($$typeof)),
        (workInProgress.flags |= 1),
        reconcileChildren(current, workInProgress, props, renderLanes),
        workInProgress.child
      );
    case 14:
      return updateMemoComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 15:
      return updateSimpleMemoComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 19:
      return updateSuspenseListComponent(current, workInProgress, renderLanes);
    case 31:
      return updateActivityComponent(current, workInProgress, renderLanes);
    case 22:
      return updateOffscreenComponent(
        current,
        workInProgress,
        renderLanes,
        workInProgress.pendingProps
      );
    case 24:
      return (
        prepareToReadContext(workInProgress),
        (props = readContext(CacheContext)),
        null === current
          ? (($$typeof = peekCacheFromPool()),
            null === $$typeof &&
              (($$typeof = workInProgressRoot),
              (prevState = createCache()),
              ($$typeof.pooledCache = prevState),
              prevState.refCount++,
              null !== prevState && ($$typeof.pooledCacheLanes |= renderLanes),
              ($$typeof = prevState)),
            (workInProgress.memoizedState = { parent: props, cache: $$typeof }),
            initializeUpdateQueue(workInProgress),
            pushProvider(workInProgress, CacheContext, $$typeof))
          : (0 !== (current.lanes & renderLanes) &&
              (cloneUpdateQueue(current, workInProgress),
              processUpdateQueue(workInProgress, null, null, renderLanes),
              suspendIfUpdateReadFromEntangledAsyncAction()),
            ($$typeof = current.memoizedState),
            (prevState = workInProgress.memoizedState),
            $$typeof.parent !== props
              ? (($$typeof = { parent: props, cache: props }),
                (workInProgress.memoizedState = $$typeof),
                0 === workInProgress.lanes &&
                  (workInProgress.memoizedState =
                    workInProgress.updateQueue.baseState =
                      $$typeof),
                pushProvider(workInProgress, CacheContext, props))
              : ((props = prevState.cache),
                pushProvider(workInProgress, CacheContext, props),
                props !== $$typeof.cache &&
                  propagateContextChanges(
                    workInProgress,
                    [CacheContext],
                    renderLanes,
                    !0
                  ))),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 29:
      throw workInProgress.pendingProps;
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
}
function markUpdate(workInProgress) {
  workInProgress.flags |= 4;
}
function preloadInstanceAndSuspendIfNeeded(
  workInProgress,
  type,
  oldProps,
  newProps,
  renderLanes
) {
  if ((type = 0 !== (workInProgress.mode & 32))) type = !1;
  if (type) {
    if (
      ((workInProgress.flags |= 16777216),
      (renderLanes & 335544128) === renderLanes)
    )
      if (workInProgress.stateNode.complete) workInProgress.flags |= 8192;
      else if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
      else
        throw (
          ((suspendedThenable = noopSuspenseyCommitThenable),
          SuspenseyCommitException)
        );
  } else workInProgress.flags &= -16777217;
}
function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
  if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
    workInProgress.flags &= -16777217;
  else if (((workInProgress.flags |= 16777216), !preloadResource(resource)))
    if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
    else
      throw (
        ((suspendedThenable = noopSuspenseyCommitThenable),
        SuspenseyCommitException)
      );
}
function scheduleRetryEffect(workInProgress, retryQueue) {
  null !== retryQueue && (workInProgress.flags |= 4);
  workInProgress.flags & 16384 &&
    ((retryQueue =
      22 !== workInProgress.tag ? claimNextRetryLane() : 536870912),
    (workInProgress.lanes |= retryQueue),
    (workInProgressSuspendedRetryLanes |= retryQueue));
}
function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
  if (!isHydrating)
    switch (renderState.tailMode) {
      case "hidden":
        hasRenderedATailFallback = renderState.tail;
        for (var lastTailNode = null; null !== hasRenderedATailFallback; )
          null !== hasRenderedATailFallback.alternate &&
            (lastTailNode = hasRenderedATailFallback),
            (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
        null === lastTailNode
          ? (renderState.tail = null)
          : (lastTailNode.sibling = null);
        break;
      case "collapsed":
        lastTailNode = renderState.tail;
        for (var lastTailNode$106 = null; null !== lastTailNode; )
          null !== lastTailNode.alternate && (lastTailNode$106 = lastTailNode),
            (lastTailNode = lastTailNode.sibling);
        null === lastTailNode$106
          ? hasRenderedATailFallback || null === renderState.tail
            ? (renderState.tail = null)
            : (renderState.tail.sibling = null)
          : (lastTailNode$106.sibling = null);
    }
}
function bubbleProperties(completedWork) {
  var didBailout =
      null !== completedWork.alternate &&
      completedWork.alternate.child === completedWork.child,
    newChildLanes = 0,
    subtreeFlags = 0;
  if (didBailout)
    for (var child$107 = completedWork.child; null !== child$107; )
      (newChildLanes |= child$107.lanes | child$107.childLanes),
        (subtreeFlags |= child$107.subtreeFlags & 65011712),
        (subtreeFlags |= child$107.flags & 65011712),
        (child$107.return = completedWork),
        (child$107 = child$107.sibling);
  else
    for (child$107 = completedWork.child; null !== child$107; )
      (newChildLanes |= child$107.lanes | child$107.childLanes),
        (subtreeFlags |= child$107.subtreeFlags),
        (subtreeFlags |= child$107.flags),
        (child$107.return = completedWork),
        (child$107 = child$107.sibling);
  completedWork.subtreeFlags |= subtreeFlags;
  completedWork.childLanes = newChildLanes;
  return didBailout;
}
function completeWork(current, workInProgress, renderLanes) {
  var newProps = workInProgress.pendingProps;
  popTreeContext(workInProgress);
  switch (workInProgress.tag) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return bubbleProperties(workInProgress), null;
    case 1:
      return bubbleProperties(workInProgress), null;
    case 3:
      renderLanes = workInProgress.stateNode;
      newProps = null;
      null !== current && (newProps = current.memoizedState.cache);
      workInProgress.memoizedState.cache !== newProps &&
        (workInProgress.flags |= 2048);
      popProvider(CacheContext);
      popHostContainer();
      renderLanes.pendingContext &&
        ((renderLanes.context = renderLanes.pendingContext),
        (renderLanes.pendingContext = null));
      if (null === current || null === current.child)
        popHydrationState(workInProgress)
          ? markUpdate(workInProgress)
          : null === current ||
            (current.memoizedState.isDehydrated &&
              0 === (workInProgress.flags & 256)) ||
            ((workInProgress.flags |= 1024),
            upgradeHydrationErrorsToRecoverable());
      bubbleProperties(workInProgress);
      return null;
    case 26:
      var type = workInProgress.type,
        nextResource = workInProgress.memoizedState;
      null === current
        ? (markUpdate(workInProgress),
          null !== nextResource
            ? (bubbleProperties(workInProgress),
              preloadResourceAndSuspendIfNeeded(workInProgress, nextResource))
            : (bubbleProperties(workInProgress),
              preloadInstanceAndSuspendIfNeeded(
                workInProgress,
                type,
                null,
                newProps,
                renderLanes
              )))
        : nextResource
          ? nextResource !== current.memoizedState
            ? (markUpdate(workInProgress),
              bubbleProperties(workInProgress),
              preloadResourceAndSuspendIfNeeded(workInProgress, nextResource))
            : (bubbleProperties(workInProgress),
              (workInProgress.flags &= -16777217))
          : ((current = current.memoizedProps),
            current !== newProps && markUpdate(workInProgress),
            bubbleProperties(workInProgress),
            preloadInstanceAndSuspendIfNeeded(
              workInProgress,
              type,
              current,
              newProps,
              renderLanes
            ));
      return null;
    case 27:
      popHostContext(workInProgress);
      renderLanes = rootInstanceStackCursor.current;
      type = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(formatProdErrorMessage(166));
          bubbleProperties(workInProgress);
          return null;
        }
        current = contextStackCursor.current;
        popHydrationState(workInProgress)
          ? prepareToHydrateHostInstance(workInProgress, current)
          : ((current = resolveSingletonInstance(type, newProps, renderLanes)),
            (workInProgress.stateNode = current),
            markUpdate(workInProgress));
      }
      bubbleProperties(workInProgress);
      return null;
    case 5:
      popHostContext(workInProgress);
      type = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(formatProdErrorMessage(166));
          bubbleProperties(workInProgress);
          return null;
        }
        nextResource = contextStackCursor.current;
        if (popHydrationState(workInProgress))
          prepareToHydrateHostInstance(workInProgress, nextResource);
        else {
          var ownerDocument = getOwnerDocumentFromRootContainer(
            rootInstanceStackCursor.current
          );
          switch (nextResource) {
            case 1:
              nextResource = ownerDocument.createElementNS(
                "http://www.w3.org/2000/svg",
                type
              );
              break;
            case 2:
              nextResource = ownerDocument.createElementNS(
                "http://www.w3.org/1998/Math/MathML",
                type
              );
              break;
            default:
              switch (type) {
                case "svg":
                  nextResource = ownerDocument.createElementNS(
                    "http://www.w3.org/2000/svg",
                    type
                  );
                  break;
                case "math":
                  nextResource = ownerDocument.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    type
                  );
                  break;
                case "script":
                  nextResource = ownerDocument.createElement("div");
                  nextResource.innerHTML = "<script>\x3c/script>";
                  nextResource = nextResource.removeChild(
                    nextResource.firstChild
                  );
                  break;
                case "select":
                  nextResource =
                    "string" === typeof newProps.is
                      ? ownerDocument.createElement("select", {
                          is: newProps.is
                        })
                      : ownerDocument.createElement("select");
                  newProps.multiple
                    ? (nextResource.multiple = !0)
                    : newProps.size && (nextResource.size = newProps.size);
                  break;
                default:
                  nextResource =
                    "string" === typeof newProps.is
                      ? ownerDocument.createElement(type, { is: newProps.is })
                      : ownerDocument.createElement(type);
              }
          }
          nextResource[internalInstanceKey] = workInProgress;
          nextResource[internalPropsKey] = newProps;
          a: for (
            ownerDocument = workInProgress.child;
            null !== ownerDocument;

          ) {
            if (5 === ownerDocument.tag || 6 === ownerDocument.tag)
              nextResource.appendChild(ownerDocument.stateNode);
            else if (
              4 !== ownerDocument.tag &&
              27 !== ownerDocument.tag &&
              null !== ownerDocument.child
            ) {
              ownerDocument.child.return = ownerDocument;
              ownerDocument = ownerDocument.child;
              continue;
            }
            if (ownerDocument === workInProgress) break a;
            for (; null === ownerDocument.sibling; ) {
              if (
                null === ownerDocument.return ||
                ownerDocument.return === workInProgress
              )
                break a;
              ownerDocument = ownerDocument.return;
            }
            ownerDocument.sibling.return = ownerDocument.return;
            ownerDocument = ownerDocument.sibling;
          }
          workInProgress.stateNode = nextResource;
          a: switch (
            (setInitialProperties(nextResource, type, newProps), type)
          ) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              newProps = !!newProps.autoFocus;
              break a;
            case "img":
              newProps = !0;
              break a;
            default:
              newProps = !1;
          }
          newProps && markUpdate(workInProgress);
        }
      }
      bubbleProperties(workInProgress);
      preloadInstanceAndSuspendIfNeeded(
        workInProgress,
        workInProgress.type,
        null === current ? null : current.memoizedProps,
        workInProgress.pendingProps,
        renderLanes
      );
      return null;
    case 6:
      if (current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if ("string" !== typeof newProps && null === workInProgress.stateNode)
          throw Error(formatProdErrorMessage(166));
        current = rootInstanceStackCursor.current;
        if (popHydrationState(workInProgress)) {
          current = workInProgress.stateNode;
          renderLanes = workInProgress.memoizedProps;
          newProps = null;
          type = hydrationParentFiber;
          if (null !== type)
            switch (type.tag) {
              case 27:
              case 5:
                newProps = type.memoizedProps;
            }
          current[internalInstanceKey] = workInProgress;
          current =
            current.nodeValue === renderLanes ||
            (null !== newProps && !0 === newProps.suppressHydrationWarning) ||
            checkForUnmatchedText(current.nodeValue, renderLanes)
              ? !0
              : !1;
          current || throwOnHydrationMismatch(workInProgress, !0);
        } else
          (current =
            getOwnerDocumentFromRootContainer(current).createTextNode(
              newProps
            )),
            (current[internalInstanceKey] = workInProgress),
            (workInProgress.stateNode = current);
      }
      bubbleProperties(workInProgress);
      return null;
    case 31:
      renderLanes = workInProgress.memoizedState;
      if (null === current || null !== current.memoizedState) {
        newProps = popHydrationState(workInProgress);
        if (null !== renderLanes) {
          if (null === current) {
            if (!newProps) throw Error(formatProdErrorMessage(318));
            current = workInProgress.memoizedState;
            current = null !== current ? current.dehydrated : null;
            if (!current) throw Error(formatProdErrorMessage(557));
            current[internalInstanceKey] = workInProgress;
          } else
            resetHydrationState(),
              0 === (workInProgress.flags & 128) &&
                (workInProgress.memoizedState = null),
              (workInProgress.flags |= 4);
          bubbleProperties(workInProgress);
          current = !1;
        } else
          (renderLanes = upgradeHydrationErrorsToRecoverable()),
            null !== current &&
              null !== current.memoizedState &&
              (current.memoizedState.hydrationErrors = renderLanes),
            (current = !0);
        if (!current) {
          if (workInProgress.flags & 256)
            return popSuspenseHandler(workInProgress), workInProgress;
          popSuspenseHandler(workInProgress);
          return null;
        }
        if (0 !== (workInProgress.flags & 128))
          throw Error(formatProdErrorMessage(558));
      }
      bubbleProperties(workInProgress);
      return null;
    case 13:
      newProps = workInProgress.memoizedState;
      if (
        null === current ||
        (null !== current.memoizedState &&
          null !== current.memoizedState.dehydrated)
      ) {
        type = popHydrationState(workInProgress);
        if (null !== newProps && null !== newProps.dehydrated) {
          if (null === current) {
            if (!type) throw Error(formatProdErrorMessage(318));
            type = workInProgress.memoizedState;
            type = null !== type ? type.dehydrated : null;
            if (!type) throw Error(formatProdErrorMessage(317));
            type[internalInstanceKey] = workInProgress;
          } else
            resetHydrationState(),
              0 === (workInProgress.flags & 128) &&
                (workInProgress.memoizedState = null),
              (workInProgress.flags |= 4);
          bubbleProperties(workInProgress);
          type = !1;
        } else
          (type = upgradeHydrationErrorsToRecoverable()),
            null !== current &&
              null !== current.memoizedState &&
              (current.memoizedState.hydrationErrors = type),
            (type = !0);
        if (!type) {
          if (workInProgress.flags & 256)
            return popSuspenseHandler(workInProgress), workInProgress;
          popSuspenseHandler(workInProgress);
          return null;
        }
      }
      popSuspenseHandler(workInProgress);
      if (0 !== (workInProgress.flags & 128))
        return (workInProgress.lanes = renderLanes), workInProgress;
      renderLanes = null !== newProps;
      current = null !== current && null !== current.memoizedState;
      renderLanes &&
        ((newProps = workInProgress.child),
        (type = null),
        null !== newProps.alternate &&
          null !== newProps.alternate.memoizedState &&
          null !== newProps.alternate.memoizedState.cachePool &&
          (type = newProps.alternate.memoizedState.cachePool.pool),
        (nextResource = null),
        null !== newProps.memoizedState &&
          null !== newProps.memoizedState.cachePool &&
          (nextResource = newProps.memoizedState.cachePool.pool),
        nextResource !== type && (newProps.flags |= 2048));
      renderLanes !== current &&
        renderLanes &&
        (workInProgress.child.flags |= 8192);
      scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
      bubbleProperties(workInProgress);
      return null;
    case 4:
      return (
        popHostContainer(),
        null === current &&
          listenToAllSupportedEvents(workInProgress.stateNode.containerInfo),
        bubbleProperties(workInProgress),
        null
      );
    case 10:
      return (
        popProvider(workInProgress.type), bubbleProperties(workInProgress), null
      );
    case 19:
      pop(suspenseStackCursor);
      newProps = workInProgress.memoizedState;
      if (null === newProps) return bubbleProperties(workInProgress), null;
      type = 0 !== (workInProgress.flags & 128);
      nextResource = newProps.rendering;
      if (null === nextResource)
        if (type) cutOffTailIfNeeded(newProps, !1);
        else {
          if (
            0 !== workInProgressRootExitStatus ||
            (null !== current && 0 !== (current.flags & 128))
          )
            for (current = workInProgress.child; null !== current; ) {
              nextResource = findFirstSuspended(current);
              if (null !== nextResource) {
                workInProgress.flags |= 128;
                cutOffTailIfNeeded(newProps, !1);
                current = nextResource.updateQueue;
                workInProgress.updateQueue = current;
                scheduleRetryEffect(workInProgress, current);
                workInProgress.subtreeFlags = 0;
                current = renderLanes;
                for (renderLanes = workInProgress.child; null !== renderLanes; )
                  resetWorkInProgress(renderLanes, current),
                    (renderLanes = renderLanes.sibling);
                push(
                  suspenseStackCursor,
                  (suspenseStackCursor.current & 1) | 2
                );
                isHydrating &&
                  pushTreeFork(workInProgress, newProps.treeForkCount);
                return workInProgress.child;
              }
              current = current.sibling;
            }
          null !== newProps.tail &&
            now() > workInProgressRootRenderTargetTime &&
            ((workInProgress.flags |= 128),
            (type = !0),
            cutOffTailIfNeeded(newProps, !1),
            (workInProgress.lanes = 4194304));
        }
      else {
        if (!type)
          if (
            ((current = findFirstSuspended(nextResource)), null !== current)
          ) {
            if (
              ((workInProgress.flags |= 128),
              (type = !0),
              (current = current.updateQueue),
              (workInProgress.updateQueue = current),
              scheduleRetryEffect(workInProgress, current),
              cutOffTailIfNeeded(newProps, !0),
              null === newProps.tail &&
                "hidden" === newProps.tailMode &&
                !nextResource.alternate &&
                !isHydrating)
            )
              return bubbleProperties(workInProgress), null;
          } else
            2 * now() - newProps.renderingStartTime >
              workInProgressRootRenderTargetTime &&
              536870912 !== renderLanes &&
              ((workInProgress.flags |= 128),
              (type = !0),
              cutOffTailIfNeeded(newProps, !1),
              (workInProgress.lanes = 4194304));
        newProps.isBackwards
          ? ((nextResource.sibling = workInProgress.child),
            (workInProgress.child = nextResource))
          : ((current = newProps.last),
            null !== current
              ? (current.sibling = nextResource)
              : (workInProgress.child = nextResource),
            (newProps.last = nextResource));
      }
      if (null !== newProps.tail)
        return (
          (current = newProps.tail),
          (newProps.rendering = current),
          (newProps.tail = current.sibling),
          (newProps.renderingStartTime = now()),
          (current.sibling = null),
          (renderLanes = suspenseStackCursor.current),
          push(
            suspenseStackCursor,
            type ? (renderLanes & 1) | 2 : renderLanes & 1
          ),
          isHydrating && pushTreeFork(workInProgress, newProps.treeForkCount),
          current
        );
      bubbleProperties(workInProgress);
      return null;
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        (newProps = null !== workInProgress.memoizedState),
        null !== current
          ? (null !== current.memoizedState) !== newProps &&
            (workInProgress.flags |= 8192)
          : newProps && (workInProgress.flags |= 8192),
        newProps
          ? 0 !== (renderLanes & 536870912) &&
            0 === (workInProgress.flags & 128) &&
            (bubbleProperties(workInProgress),
            workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192))
          : bubbleProperties(workInProgress),
        (renderLanes = workInProgress.updateQueue),
        null !== renderLanes &&
          scheduleRetryEffect(workInProgress, renderLanes.retryQueue),
        (renderLanes = null),
        null !== current &&
          null !== current.memoizedState &&
          null !== current.memoizedState.cachePool &&
          (renderLanes = current.memoizedState.cachePool.pool),
        (newProps = null),
        null !== workInProgress.memoizedState &&
          null !== workInProgress.memoizedState.cachePool &&
          (newProps = workInProgress.memoizedState.cachePool.pool),
        newProps !== renderLanes && (workInProgress.flags |= 2048),
        null !== current && pop(resumedCache),
        null
      );
    case 24:
      return (
        (renderLanes = null),
        null !== current && (renderLanes = current.memoizedState.cache),
        workInProgress.memoizedState.cache !== renderLanes &&
          (workInProgress.flags |= 2048),
        popProvider(CacheContext),
        bubbleProperties(workInProgress),
        null
      );
    case 25:
      return null;
    case 30:
      return null;
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
}
function unwindWork(current, workInProgress) {
  popTreeContext(workInProgress);
  switch (workInProgress.tag) {
    case 1:
      return (
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 3:
      return (
        popProvider(CacheContext),
        popHostContainer(),
        (current = workInProgress.flags),
        0 !== (current & 65536) && 0 === (current & 128)
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 26:
    case 27:
    case 5:
      return popHostContext(workInProgress), null;
    case 31:
      if (null !== workInProgress.memoizedState) {
        popSuspenseHandler(workInProgress);
        if (null === workInProgress.alternate)
          throw Error(formatProdErrorMessage(340));
        resetHydrationState();
      }
      current = workInProgress.flags;
      return current & 65536
        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
        : null;
    case 13:
      popSuspenseHandler(workInProgress);
      current = workInProgress.memoizedState;
      if (null !== current && null !== current.dehydrated) {
        if (null === workInProgress.alternate)
          throw Error(formatProdErrorMessage(340));
        resetHydrationState();
      }
      current = workInProgress.flags;
      return current & 65536
        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
        : null;
    case 19:
      return pop(suspenseStackCursor), null;
    case 4:
      return popHostContainer(), null;
    case 10:
      return popProvider(workInProgress.type), null;
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        null !== current && pop(resumedCache),
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 24:
      return popProvider(CacheContext), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function unwindInterruptedWork(current, interruptedWork) {
  popTreeContext(interruptedWork);
  switch (interruptedWork.tag) {
    case 3:
      popProvider(CacheContext);
      popHostContainer();
      break;
    case 26:
    case 27:
    case 5:
      popHostContext(interruptedWork);
      break;
    case 4:
      popHostContainer();
      break;
    case 31:
      null !== interruptedWork.memoizedState &&
        popSuspenseHandler(interruptedWork);
      break;
    case 13:
      popSuspenseHandler(interruptedWork);
      break;
    case 19:
      pop(suspenseStackCursor);
      break;
    case 10:
      popProvider(interruptedWork.type);
      break;
    case 22:
    case 23:
      popSuspenseHandler(interruptedWork);
      popHiddenContext();
      null !== current && pop(resumedCache);
      break;
    case 24:
      popProvider(CacheContext);
  }
}
function commitHookEffectListMount(flags, finishedWork) {
  try {
    var updateQueue = finishedWork.updateQueue,
      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
    if (null !== lastEffect) {
      var firstEffect = lastEffect.next;
      updateQueue = firstEffect;
      do {
        if ((updateQueue.tag & flags) === flags) {
          lastEffect = void 0;
          var create = updateQueue.create,
            inst = updateQueue.inst;
          lastEffect = create();
          inst.destroy = lastEffect;
        }
        updateQueue = updateQueue.next;
      } while (updateQueue !== firstEffect);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHookEffectListUnmount(
  flags,
  finishedWork,
  nearestMountedAncestor$jscomp$0
) {
  try {
    var updateQueue = finishedWork.updateQueue,
      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
    if (null !== lastEffect) {
      var firstEffect = lastEffect.next;
      updateQueue = firstEffect;
      do {
        if ((updateQueue.tag & flags) === flags) {
          var inst = updateQueue.inst,
            destroy = inst.destroy;
          if (void 0 !== destroy) {
            inst.destroy = void 0;
            lastEffect = finishedWork;
            var nearestMountedAncestor = nearestMountedAncestor$jscomp$0,
              destroy_ = destroy;
            try {
              destroy_();
            } catch (error) {
              captureCommitPhaseError(
                lastEffect,
                nearestMountedAncestor,
                error
              );
            }
          }
        }
        updateQueue = updateQueue.next;
      } while (updateQueue !== firstEffect);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitClassCallbacks(finishedWork) {
  var updateQueue = finishedWork.updateQueue;
  if (null !== updateQueue) {
    var instance = finishedWork.stateNode;
    try {
      commitCallbacks(updateQueue, instance);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
  }
}
function safelyCallComponentWillUnmount(
  current,
  nearestMountedAncestor,
  instance
) {
  instance.props = resolveClassComponentProps(
    current.type,
    current.memoizedProps
  );
  instance.state = current.memoizedState;
  try {
    instance.componentWillUnmount();
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyAttachRef(current, nearestMountedAncestor) {
  try {
    var ref = current.ref;
    if (null !== ref) {
      switch (current.tag) {
        case 26:
        case 27:
        case 5:
          var instanceToUse = current.stateNode;
          break;
        case 30:
          instanceToUse = current.stateNode;
          break;
        default:
          instanceToUse = current.stateNode;
      }
      "function" === typeof ref
        ? (current.refCleanup = ref(instanceToUse))
        : (ref.current = instanceToUse);
    }
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyDetachRef(current, nearestMountedAncestor) {
  var ref = current.ref,
    refCleanup = current.refCleanup;
  if (null !== ref)
    if ("function" === typeof refCleanup)
      try {
        refCleanup();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      } finally {
        (current.refCleanup = null),
          (current = current.alternate),
          null != current && (current.refCleanup = null);
      }
    else if ("function" === typeof ref)
      try {
        ref(null);
      } catch (error$140) {
        captureCommitPhaseError(current, nearestMountedAncestor, error$140);
      }
    else ref.current = null;
}
function commitHostMount(finishedWork) {
  var type = finishedWork.type,
    props = finishedWork.memoizedProps,
    instance = finishedWork.stateNode;
  try {
    a: switch (type) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        props.autoFocus && instance.focus();
        break a;
      case "img":
        props.src
          ? (instance.src = props.src)
          : props.srcSet && (instance.srcset = props.srcSet);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHostUpdate(finishedWork, newProps, oldProps) {
  try {
    var domElement = finishedWork.stateNode;
    updateProperties(domElement, finishedWork.type, oldProps, newProps);
    domElement[internalPropsKey] = newProps;
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function isHostParent(fiber) {
  return (
    5 === fiber.tag ||
    3 === fiber.tag ||
    26 === fiber.tag ||
    (27 === fiber.tag && isSingletonScope(fiber.type)) ||
    4 === fiber.tag
  );
}
function getHostSibling(fiber) {
  a: for (;;) {
    for (; null === fiber.sibling; ) {
      if (null === fiber.return || isHostParent(fiber.return)) return null;
      fiber = fiber.return;
    }
    fiber.sibling.return = fiber.return;
    for (
      fiber = fiber.sibling;
      5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;

    ) {
      if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
      if (fiber.flags & 2) continue a;
      if (null === fiber.child || 4 === fiber.tag) continue a;
      else (fiber.child.return = fiber), (fiber = fiber.child);
    }
    if (!(fiber.flags & 2)) return fiber.stateNode;
  }
}
function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before
        ? (9 === parent.nodeType
            ? parent.body
            : "HTML" === parent.nodeName
              ? parent.ownerDocument.body
              : parent
          ).insertBefore(node, before)
        : ((before =
            9 === parent.nodeType
              ? parent.body
              : "HTML" === parent.nodeName
                ? parent.ownerDocument.body
                : parent),
          before.appendChild(node),
          (parent = parent._reactRootContainer),
          (null !== parent && void 0 !== parent) ||
            null !== before.onclick ||
            (before.onclick = noop$1));
  else if (
    4 !== tag &&
    (27 === tag &&
      isSingletonScope(node.type) &&
      ((parent = node.stateNode), (before = null)),
    (node = node.child),
    null !== node)
  )
    for (
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        (node = node.sibling);
}
function insertOrAppendPlacementNode(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before ? parent.insertBefore(node, before) : parent.appendChild(node);
  else if (
    4 !== tag &&
    (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode),
    (node = node.child),
    null !== node)
  )
    for (
      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNode(node, before, parent), (node = node.sibling);
}
function commitHostSingletonAcquisition(finishedWork) {
  var singleton = finishedWork.stateNode,
    props = finishedWork.memoizedProps;
  try {
    for (
      var type = finishedWork.type, attributes = singleton.attributes;
      attributes.length;

    )
      singleton.removeAttributeNode(attributes[0]);
    setInitialProperties(singleton, type, props);
    singleton[internalInstanceKey] = finishedWork;
    singleton[internalPropsKey] = props;
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
var offscreenSubtreeIsHidden = !1,
  offscreenSubtreeWasHidden = !1,
  needsFormReset = !1,
  PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set,
  nextEffect = null;
function commitBeforeMutationEffects(root, firstChild) {
  root = root.containerInfo;
  eventsEnabled = _enabled;
  root = getActiveElementDeep(root);
  if (hasSelectionCapabilities(root)) {
    if ("selectionStart" in root)
      var JSCompiler_temp = {
        start: root.selectionStart,
        end: root.selectionEnd
      };
    else
      a: {
        JSCompiler_temp =
          ((JSCompiler_temp = root.ownerDocument) &&
            JSCompiler_temp.defaultView) ||
          window;
        var selection =
          JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
        if (selection && 0 !== selection.rangeCount) {
          JSCompiler_temp = selection.anchorNode;
          var anchorOffset = selection.anchorOffset,
            focusNode = selection.focusNode;
          selection = selection.focusOffset;
          try {
            JSCompiler_temp.nodeType, focusNode.nodeType;
          } catch (e$20) {
            JSCompiler_temp = null;
            break a;
          }
          var length = 0,
            start = -1,
            end = -1,
            indexWithinAnchor = 0,
            indexWithinFocus = 0,
            node = root,
            parentNode = null;
          b: for (;;) {
            for (var next; ; ) {
              node !== JSCompiler_temp ||
                (0 !== anchorOffset && 3 !== node.nodeType) ||
                (start = length + anchorOffset);
              node !== focusNode ||
                (0 !== selection && 3 !== node.nodeType) ||
                (end = length + selection);
              3 === node.nodeType && (length += node.nodeValue.length);
              if (null === (next = node.firstChild)) break;
              parentNode = node;
              node = next;
            }
            for (;;) {
              if (node === root) break b;
              parentNode === JSCompiler_temp &&
                ++indexWithinAnchor === anchorOffset &&
                (start = length);
              parentNode === focusNode &&
                ++indexWithinFocus === selection &&
                (end = length);
              if (null !== (next = node.nextSibling)) break;
              node = parentNode;
              parentNode = node.parentNode;
            }
            node = next;
          }
          JSCompiler_temp =
            -1 === start || -1 === end ? null : { start: start, end: end };
        } else JSCompiler_temp = null;
      }
    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
  } else JSCompiler_temp = null;
  selectionInformation = { focusedElem: root, selectionRange: JSCompiler_temp };
  _enabled = !1;
  for (nextEffect = firstChild; null !== nextEffect; )
    if (
      ((firstChild = nextEffect),
      (root = firstChild.child),
      0 !== (firstChild.subtreeFlags & 1028) && null !== root)
    )
      (root.return = firstChild), (nextEffect = root);
    else
      for (; null !== nextEffect; ) {
        firstChild = nextEffect;
        focusNode = firstChild.alternate;
        root = firstChild.flags;
        switch (firstChild.tag) {
          case 0:
            if (
              0 !== (root & 4) &&
              ((root = firstChild.updateQueue),
              (root = null !== root ? root.events : null),
              null !== root)
            )
              for (
                JSCompiler_temp = 0;
                JSCompiler_temp < root.length;
                JSCompiler_temp++
              )
                (anchorOffset = root[JSCompiler_temp]),
                  (anchorOffset.ref.impl = anchorOffset.nextImpl);
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (0 !== (root & 1024) && null !== focusNode) {
              root = void 0;
              JSCompiler_temp = firstChild;
              anchorOffset = focusNode.memoizedProps;
              focusNode = focusNode.memoizedState;
              selection = JSCompiler_temp.stateNode;
              try {
                var resolvedPrevProps = resolveClassComponentProps(
                  JSCompiler_temp.type,
                  anchorOffset
                );
                root = selection.getSnapshotBeforeUpdate(
                  resolvedPrevProps,
                  focusNode
                );
                selection.__reactInternalSnapshotBeforeUpdate = root;
              } catch (error) {
                captureCommitPhaseError(
                  JSCompiler_temp,
                  JSCompiler_temp.return,
                  error
                );
              }
            }
            break;
          case 3:
            if (0 !== (root & 1024))
              if (
                ((root = firstChild.stateNode.containerInfo),
                (JSCompiler_temp = root.nodeType),
                9 === JSCompiler_temp)
              )
                clearContainerSparingly(root);
              else if (1 === JSCompiler_temp)
                switch (root.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    clearContainerSparingly(root);
                    break;
                  default:
                    root.textContent = "";
                }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (0 !== (root & 1024)) throw Error(formatProdErrorMessage(163));
        }
        root = firstChild.sibling;
        if (null !== root) {
          root.return = firstChild.return;
          nextEffect = root;
          break;
        }
        nextEffect = firstChild.return;
      }
}
function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitHookEffectListMount(5, finishedWork);
      break;
    case 1:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (flags & 4)
        if (((finishedRoot = finishedWork.stateNode), null === current))
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        else {
          var prevProps = resolveClassComponentProps(
            finishedWork.type,
            current.memoizedProps
          );
          current = current.memoizedState;
          try {
            finishedRoot.componentDidUpdate(
              prevProps,
              current,
              finishedRoot.__reactInternalSnapshotBeforeUpdate
            );
          } catch (error$139) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$139
            );
          }
        }
      flags & 64 && commitClassCallbacks(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 3:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (
        flags & 64 &&
        ((finishedRoot = finishedWork.updateQueue), null !== finishedRoot)
      ) {
        current = null;
        if (null !== finishedWork.child)
          switch (finishedWork.child.tag) {
            case 27:
            case 5:
              current = finishedWork.child.stateNode;
              break;
            case 1:
              current = finishedWork.child.stateNode;
          }
        try {
          commitCallbacks(finishedRoot, current);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      break;
    case 27:
      null === current &&
        flags & 4 &&
        commitHostSingletonAcquisition(finishedWork);
    case 26:
    case 5:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      null === current && flags & 4 && commitHostMount(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 12:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      break;
    case 31:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
      break;
    case 13:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
      flags & 64 &&
        ((finishedRoot = finishedWork.memoizedState),
        null !== finishedRoot &&
          ((finishedRoot = finishedRoot.dehydrated),
          null !== finishedRoot &&
            ((finishedWork = retryDehydratedSuspenseBoundary.bind(
              null,
              finishedWork
            )),
            registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
      break;
    case 22:
      flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
      if (!flags) {
        current =
          (null !== current && null !== current.memoizedState) ||
          offscreenSubtreeWasHidden;
        prevProps = offscreenSubtreeIsHidden;
        var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
        offscreenSubtreeIsHidden = flags;
        (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden
          ? recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              0 !== (finishedWork.subtreeFlags & 8772)
            )
          : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
        offscreenSubtreeIsHidden = prevProps;
        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
      }
      break;
    case 30:
      break;
    default:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
  }
}
function detachFiberAfterEffects(fiber) {
  var alternate = fiber.alternate;
  null !== alternate &&
    ((fiber.alternate = null), detachFiberAfterEffects(alternate));
  fiber.child = null;
  fiber.deletions = null;
  fiber.sibling = null;
  5 === fiber.tag &&
    ((alternate = fiber.stateNode),
    null !== alternate && detachDeletedInstance(alternate));
  fiber.stateNode = null;
  fiber.return = null;
  fiber.dependencies = null;
  fiber.memoizedProps = null;
  fiber.memoizedState = null;
  fiber.pendingProps = null;
  fiber.stateNode = null;
  fiber.updateQueue = null;
}
var hostParent = null,
  hostParentIsContainer = !1;
function recursivelyTraverseDeletionEffects(
  finishedRoot,
  nearestMountedAncestor,
  parent
) {
  for (parent = parent.child; null !== parent; )
    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent),
      (parent = parent.sibling);
}
function commitDeletionEffectsOnFiber(
  finishedRoot,
  nearestMountedAncestor,
  deletedFiber
) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
    try {
      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
    } catch (err) {}
  switch (deletedFiber.tag) {
    case 26:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      deletedFiber.memoizedState
        ? deletedFiber.memoizedState.count--
        : deletedFiber.stateNode &&
          ((deletedFiber = deletedFiber.stateNode),
          deletedFiber.parentNode.removeChild(deletedFiber));
      break;
    case 27:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
      var prevHostParent = hostParent,
        prevHostParentIsContainer = hostParentIsContainer;
      isSingletonScope(deletedFiber.type) &&
        ((hostParent = deletedFiber.stateNode), (hostParentIsContainer = !1));
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      releaseSingletonInstance(deletedFiber.stateNode);
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      break;
    case 5:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
    case 6:
      prevHostParent = hostParent;
      prevHostParentIsContainer = hostParentIsContainer;
      hostParent = null;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      if (null !== hostParent)
        if (hostParentIsContainer)
          try {
            (9 === hostParent.nodeType
              ? hostParent.body
              : "HTML" === hostParent.nodeName
                ? hostParent.ownerDocument.body
                : hostParent
            ).removeChild(deletedFiber.stateNode);
          } catch (error) {
            captureCommitPhaseError(
              deletedFiber,
              nearestMountedAncestor,
              error
            );
          }
        else
          try {
            hostParent.removeChild(deletedFiber.stateNode);
          } catch (error) {
            captureCommitPhaseError(
              deletedFiber,
              nearestMountedAncestor,
              error
            );
          }
      break;
    case 18:
      null !== hostParent &&
        (hostParentIsContainer
          ? ((finishedRoot = hostParent),
            clearHydrationBoundary(
              9 === finishedRoot.nodeType
                ? finishedRoot.body
                : "HTML" === finishedRoot.nodeName
                  ? finishedRoot.ownerDocument.body
                  : finishedRoot,
              deletedFiber.stateNode
            ),
            retryIfBlockedOn(finishedRoot))
          : clearHydrationBoundary(hostParent, deletedFiber.stateNode));
      break;
    case 4:
      prevHostParent = hostParent;
      prevHostParentIsContainer = hostParentIsContainer;
      hostParent = deletedFiber.stateNode.containerInfo;
      hostParentIsContainer = !0;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
      offscreenSubtreeWasHidden ||
        commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 1:
      offscreenSubtreeWasHidden ||
        (safelyDetachRef(deletedFiber, nearestMountedAncestor),
        (prevHostParent = deletedFiber.stateNode),
        "function" === typeof prevHostParent.componentWillUnmount &&
          safelyCallComponentWillUnmount(
            deletedFiber,
            nearestMountedAncestor,
            prevHostParent
          ));
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 21:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 22:
      offscreenSubtreeWasHidden =
        (prevHostParent = offscreenSubtreeWasHidden) ||
        null !== deletedFiber.memoizedState;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      offscreenSubtreeWasHidden = prevHostParent;
      break;
    default:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
  }
}
function commitActivityHydrationCallbacks(finishedRoot, finishedWork) {
  if (
    null === finishedWork.memoizedState &&
    ((finishedRoot = finishedWork.alternate),
    null !== finishedRoot &&
      ((finishedRoot = finishedRoot.memoizedState), null !== finishedRoot))
  ) {
    finishedRoot = finishedRoot.dehydrated;
    try {
      retryIfBlockedOn(finishedRoot);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
  }
}
function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
  if (
    null === finishedWork.memoizedState &&
    ((finishedRoot = finishedWork.alternate),
    null !== finishedRoot &&
      ((finishedRoot = finishedRoot.memoizedState),
      null !== finishedRoot &&
        ((finishedRoot = finishedRoot.dehydrated), null !== finishedRoot)))
  )
    try {
      retryIfBlockedOn(finishedRoot);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
}
function getRetryCache(finishedWork) {
  switch (finishedWork.tag) {
    case 31:
    case 13:
    case 19:
      var retryCache = finishedWork.stateNode;
      null === retryCache &&
        (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
      return retryCache;
    case 22:
      return (
        (finishedWork = finishedWork.stateNode),
        (retryCache = finishedWork._retryCache),
        null === retryCache &&
          (retryCache = finishedWork._retryCache = new PossiblyWeakSet()),
        retryCache
      );
    default:
      throw Error(formatProdErrorMessage(435, finishedWork.tag));
  }
}
function attachSuspenseRetryListeners(finishedWork, wakeables) {
  var retryCache = getRetryCache(finishedWork);
  wakeables.forEach(function (wakeable) {
    if (!retryCache.has(wakeable)) {
      retryCache.add(wakeable);
      var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
      wakeable.then(retry, retry);
    }
  });
}
function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
  var deletions = parentFiber.deletions;
  if (null !== deletions)
    for (var i = 0; i < deletions.length; i++) {
      var childToDelete = deletions[i],
        root = root$jscomp$0,
        returnFiber = parentFiber,
        parent = returnFiber;
      a: for (; null !== parent; ) {
        switch (parent.tag) {
          case 27:
            if (isSingletonScope(parent.type)) {
              hostParent = parent.stateNode;
              hostParentIsContainer = !1;
              break a;
            }
            break;
          case 5:
            hostParent = parent.stateNode;
            hostParentIsContainer = !1;
            break a;
          case 3:
          case 4:
            hostParent = parent.stateNode.containerInfo;
            hostParentIsContainer = !0;
            break a;
        }
        parent = parent.return;
      }
      if (null === hostParent) throw Error(formatProdErrorMessage(160));
      commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
      hostParent = null;
      hostParentIsContainer = !1;
      root = childToDelete.alternate;
      null !== root && (root.return = null);
      childToDelete.return = null;
    }
  if (parentFiber.subtreeFlags & 13886)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0),
        (parentFiber = parentFiber.sibling);
}
var currentHoistableRoot = null;
function commitMutationEffectsOnFiber(finishedWork, root) {
  var current = finishedWork.alternate,
    flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 &&
        (commitHookEffectListUnmount(3, finishedWork, finishedWork.return),
        commitHookEffectListMount(3, finishedWork),
        commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
      break;
    case 1:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      flags & 64 &&
        offscreenSubtreeIsHidden &&
        ((finishedWork = finishedWork.updateQueue),
        null !== finishedWork &&
          ((flags = finishedWork.callbacks),
          null !== flags &&
            ((current = finishedWork.shared.hiddenCallbacks),
            (finishedWork.shared.hiddenCallbacks =
              null === current ? flags : current.concat(flags)))));
      break;
    case 26:
      var hoistableRoot = currentHoistableRoot;
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      if (flags & 4) {
        var currentResource = null !== current ? current.memoizedState : null;
        flags = finishedWork.memoizedState;
        if (null === current)
          if (null === flags)
            if (null === finishedWork.stateNode) {
              a: {
                flags = finishedWork.type;
                current = finishedWork.memoizedProps;
                hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
                b: switch (flags) {
                  case "title":
                    currentResource =
                      hoistableRoot.getElementsByTagName("title")[0];
                    if (
                      !currentResource ||
                      currentResource[internalHoistableMarker] ||
                      currentResource[internalInstanceKey] ||
                      "http://www.w3.org/2000/svg" ===
                        currentResource.namespaceURI ||
                      currentResource.hasAttribute("itemprop")
                    )
                      (currentResource = hoistableRoot.createElement(flags)),
                        hoistableRoot.head.insertBefore(
                          currentResource,
                          hoistableRoot.querySelector("head > title")
                        );
                    setInitialProperties(currentResource, flags, current);
                    currentResource[internalInstanceKey] = finishedWork;
                    markNodeAsHoistable(currentResource);
                    flags = currentResource;
                    break a;
                  case "link":
                    var maybeNodes = getHydratableHoistableCache(
                      "link",
                      "href",
                      hoistableRoot
                    ).get(flags + (current.href || ""));
                    if (maybeNodes)
                      for (var i = 0; i < maybeNodes.length; i++)
                        if (
                          ((currentResource = maybeNodes[i]),
                          currentResource.getAttribute("href") ===
                            (null == current.href || "" === current.href
                              ? null
                              : current.href) &&
                            currentResource.getAttribute("rel") ===
                              (null == current.rel ? null : current.rel) &&
                            currentResource.getAttribute("title") ===
                              (null == current.title ? null : current.title) &&
                            currentResource.getAttribute("crossorigin") ===
                              (null == current.crossOrigin
                                ? null
                                : current.crossOrigin))
                        ) {
                          maybeNodes.splice(i, 1);
                          break b;
                        }
                    currentResource = hoistableRoot.createElement(flags);
                    setInitialProperties(currentResource, flags, current);
                    hoistableRoot.head.appendChild(currentResource);
                    break;
                  case "meta":
                    if (
                      (maybeNodes = getHydratableHoistableCache(
                        "meta",
                        "content",
                        hoistableRoot
                      ).get(flags + (current.content || "")))
                    )
                      for (i = 0; i < maybeNodes.length; i++)
                        if (
                          ((currentResource = maybeNodes[i]),
                          currentResource.getAttribute("content") ===
                            (null == current.content
                              ? null
                              : "" + current.content) &&
                            currentResource.getAttribute("name") ===
                              (null == current.name ? null : current.name) &&
                            currentResource.getAttribute("property") ===
                              (null == current.property
                                ? null
                                : current.property) &&
                            currentResource.getAttribute("http-equiv") ===
                              (null == current.httpEquiv
                                ? null
                                : current.httpEquiv) &&
                            currentResource.getAttribute("charset") ===
                              (null == current.charSet
                                ? null
                                : current.charSet))
                        ) {
                          maybeNodes.splice(i, 1);
                          break b;
                        }
                    currentResource = hoistableRoot.createElement(flags);
                    setInitialProperties(currentResource, flags, current);
                    hoistableRoot.head.appendChild(currentResource);
                    break;
                  default:
                    throw Error(formatProdErrorMessage(468, flags));
                }
                currentResource[internalInstanceKey] = finishedWork;
                markNodeAsHoistable(currentResource);
                flags = currentResource;
              }
              finishedWork.stateNode = flags;
            } else
              mountHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.stateNode
              );
          else
            finishedWork.stateNode = acquireResource(
              hoistableRoot,
              flags,
              finishedWork.memoizedProps
            );
        else
          currentResource !== flags
            ? (null === currentResource
                ? null !== current.stateNode &&
                  ((current = current.stateNode),
                  current.parentNode.removeChild(current))
                : currentResource.count--,
              null === flags
                ? mountHoistable(
                    hoistableRoot,
                    finishedWork.type,
                    finishedWork.stateNode
                  )
                : acquireResource(
                    hoistableRoot,
                    flags,
                    finishedWork.memoizedProps
                  ))
            : null === flags &&
              null !== finishedWork.stateNode &&
              commitHostUpdate(
                finishedWork,
                finishedWork.memoizedProps,
                current.memoizedProps
              );
      }
      break;
    case 27:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      null !== current &&
        flags & 4 &&
        commitHostUpdate(
          finishedWork,
          finishedWork.memoizedProps,
          current.memoizedProps
        );
      break;
    case 5:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      if (finishedWork.flags & 32) {
        hoistableRoot = finishedWork.stateNode;
        try {
          setTextContent(hoistableRoot, "");
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      flags & 4 &&
        null != finishedWork.stateNode &&
        ((hoistableRoot = finishedWork.memoizedProps),
        commitHostUpdate(
          finishedWork,
          hoistableRoot,
          null !== current ? current.memoizedProps : hoistableRoot
        ));
      flags & 1024 && (needsFormReset = !0);
      break;
    case 6:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      if (flags & 4) {
        if (null === finishedWork.stateNode)
          throw Error(formatProdErrorMessage(162));
        flags = finishedWork.memoizedProps;
        current = finishedWork.stateNode;
        try {
          current.nodeValue = flags;
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      break;
    case 3:
      tagCaches = null;
      hoistableRoot = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(root.containerInfo);
      recursivelyTraverseMutationEffects(root, finishedWork);
      currentHoistableRoot = hoistableRoot;
      commitReconciliationEffects(finishedWork);
      if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
        try {
          retryIfBlockedOn(root.containerInfo);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      needsFormReset &&
        ((needsFormReset = !1), recursivelyResetForms(finishedWork));
      break;
    case 4:
      flags = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(
        finishedWork.stateNode.containerInfo
      );
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      currentHoistableRoot = flags;
      break;
    case 12:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      break;
    case 31:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 13:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      finishedWork.child.flags & 8192 &&
        (null !== finishedWork.memoizedState) !==
          (null !== current && null !== current.memoizedState) &&
        (globalMostRecentFallbackTime = now());
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 22:
      hoistableRoot = null !== finishedWork.memoizedState;
      var wasHidden = null !== current && null !== current.memoizedState,
        prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
        prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
      recursivelyTraverseMutationEffects(root, finishedWork);
      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
      commitReconciliationEffects(finishedWork);
      if (flags & 8192)
        a: for (
          root = finishedWork.stateNode,
            root._visibility = hoistableRoot
              ? root._visibility & -2
              : root._visibility | 1,
            hoistableRoot &&
              (null === current ||
                wasHidden ||
                offscreenSubtreeIsHidden ||
                offscreenSubtreeWasHidden ||
                recursivelyTraverseDisappearLayoutEffects(finishedWork)),
            current = null,
            root = finishedWork;
          ;

        ) {
          if (5 === root.tag || 26 === root.tag) {
            if (null === current) {
              wasHidden = current = root;
              try {
                if (((currentResource = wasHidden.stateNode), hoistableRoot))
                  (maybeNodes = currentResource.style),
                    "function" === typeof maybeNodes.setProperty
                      ? maybeNodes.setProperty("display", "none", "important")
                      : (maybeNodes.display = "none");
                else {
                  i = wasHidden.stateNode;
                  var styleProp = wasHidden.memoizedProps.style,
                    display =
                      void 0 !== styleProp &&
                      null !== styleProp &&
                      styleProp.hasOwnProperty("display")
                        ? styleProp.display
                        : null;
                  i.style.display =
                    null == display || "boolean" === typeof display
                      ? ""
                      : ("" + display).trim();
                }
              } catch (error) {
                captureCommitPhaseError(wasHidden, wasHidden.return, error);
              }
            }
          } else if (6 === root.tag) {
            if (null === current) {
              wasHidden = root;
              try {
                wasHidden.stateNode.nodeValue = hoistableRoot
                  ? ""
                  : wasHidden.memoizedProps;
              } catch (error) {
                captureCommitPhaseError(wasHidden, wasHidden.return, error);
              }
            }
          } else if (18 === root.tag) {
            if (null === current) {
              wasHidden = root;
              try {
                var instance = wasHidden.stateNode;
                hoistableRoot
                  ? hideOrUnhideDehydratedBoundary(instance, !0)
                  : hideOrUnhideDehydratedBoundary(wasHidden.stateNode, !1);
              } catch (error) {
                captureCommitPhaseError(wasHidden, wasHidden.return, error);
              }
            }
          } else if (
            ((22 !== root.tag && 23 !== root.tag) ||
              null === root.memoizedState ||
              root === finishedWork) &&
            null !== root.child
          ) {
            root.child.return = root;
            root = root.child;
            continue;
          }
          if (root === finishedWork) break a;
          for (; null === root.sibling; ) {
            if (null === root.return || root.return === finishedWork) break a;
            current === root && (current = null);
            root = root.return;
          }
          current === root && (current = null);
          root.sibling.return = root.return;
          root = root.sibling;
        }
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((current = flags.retryQueue),
          null !== current &&
            ((flags.retryQueue = null),
            attachSuspenseRetryListeners(finishedWork, current))));
      break;
    case 19:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      recursivelyTraverseMutationEffects(root, finishedWork),
        commitReconciliationEffects(finishedWork);
  }
}
function commitReconciliationEffects(finishedWork) {
  var flags = finishedWork.flags;
  if (flags & 2) {
    try {
      for (
        var hostParentFiber, parentFiber = finishedWork.return;
        null !== parentFiber;

      ) {
        if (isHostParent(parentFiber)) {
          hostParentFiber = parentFiber;
          break;
        }
        parentFiber = parentFiber.return;
      }
      if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
      switch (hostParentFiber.tag) {
        case 27:
          var parent = hostParentFiber.stateNode,
            before = getHostSibling(finishedWork);
          insertOrAppendPlacementNode(finishedWork, before, parent);
          break;
        case 5:
          var parent$141 = hostParentFiber.stateNode;
          hostParentFiber.flags & 32 &&
            (setTextContent(parent$141, ""), (hostParentFiber.flags &= -33));
          var before$142 = getHostSibling(finishedWork);
          insertOrAppendPlacementNode(finishedWork, before$142, parent$141);
          break;
        case 3:
        case 4:
          var parent$143 = hostParentFiber.stateNode.containerInfo,
            before$144 = getHostSibling(finishedWork);
          insertOrAppendPlacementNodeIntoContainer(
            finishedWork,
            before$144,
            parent$143
          );
          break;
        default:
          throw Error(formatProdErrorMessage(161));
      }
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    finishedWork.flags &= -3;
  }
  flags & 4096 && (finishedWork.flags &= -4097);
}
function recursivelyResetForms(parentFiber) {
  if (parentFiber.subtreeFlags & 1024)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      var fiber = parentFiber;
      recursivelyResetForms(fiber);
      5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
      parentFiber = parentFiber.sibling;
    }
}
function recursivelyTraverseLayoutEffects(root, parentFiber) {
  if (parentFiber.subtreeFlags & 8772)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber),
        (parentFiber = parentFiber.sibling);
}
function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedWork = parentFiber;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 1:
        safelyDetachRef(finishedWork, finishedWork.return);
        var instance = finishedWork.stateNode;
        "function" === typeof instance.componentWillUnmount &&
          safelyCallComponentWillUnmount(
            finishedWork,
            finishedWork.return,
            instance
          );
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 27:
        releaseSingletonInstance(finishedWork.stateNode);
      case 26:
      case 5:
        safelyDetachRef(finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 22:
        null === finishedWork.memoizedState &&
          recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 30:
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      default:
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseReappearLayoutEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var current = parentFiber.alternate,
      finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        commitHookEffectListMount(4, finishedWork);
        break;
      case 1:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        current = finishedWork;
        finishedRoot = current.stateNode;
        if ("function" === typeof finishedRoot.componentDidMount)
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(current, current.return, error);
          }
        current = finishedWork;
        finishedRoot = current.updateQueue;
        if (null !== finishedRoot) {
          var instance = current.stateNode;
          try {
            var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
            if (null !== hiddenCallbacks)
              for (
                finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0;
                finishedRoot < hiddenCallbacks.length;
                finishedRoot++
              )
                callCallback(hiddenCallbacks[finishedRoot], instance);
          } catch (error) {
            captureCommitPhaseError(current, current.return, error);
          }
        }
        includeWorkInProgressEffects &&
          flags & 64 &&
          commitClassCallbacks(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 27:
        commitHostSingletonAcquisition(finishedWork);
      case 26:
      case 5:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          null === current &&
          flags & 4 &&
          commitHostMount(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 12:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        break;
      case 31:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 4 &&
          commitActivityHydrationCallbacks(finishedRoot, finishedWork);
        break;
      case 13:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 4 &&
          commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
        break;
      case 22:
        null === finishedWork.memoizedState &&
          recursivelyTraverseReappearLayoutEffects(
            finishedRoot,
            finishedWork,
            includeWorkInProgressEffects
          );
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 30:
        break;
      default:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitOffscreenPassiveMountEffects(current, finishedWork) {
  var previousCache = null;
  null !== current &&
    null !== current.memoizedState &&
    null !== current.memoizedState.cachePool &&
    (previousCache = current.memoizedState.cachePool.pool);
  current = null;
  null !== finishedWork.memoizedState &&
    null !== finishedWork.memoizedState.cachePool &&
    (current = finishedWork.memoizedState.cachePool.pool);
  current !== previousCache &&
    (null != current && current.refCount++,
    null != previousCache && releaseCache(previousCache));
}
function commitCachePassiveMountEffect(current, finishedWork) {
  current = null;
  null !== finishedWork.alternate &&
    (current = finishedWork.alternate.memoizedState.cache);
  finishedWork = finishedWork.memoizedState.cache;
  finishedWork !== current &&
    (finishedWork.refCount++, null != current && releaseCache(current));
}
function recursivelyTraversePassiveMountEffects(
  root,
  parentFiber,
  committedLanes,
  committedTransitions
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveMountOnFiber(
        root,
        parentFiber,
        committedLanes,
        committedTransitions
      ),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveMountOnFiber(
  finishedRoot,
  finishedWork,
  committedLanes,
  committedTransitions
) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 && commitHookEffectListMount(9, finishedWork);
      break;
    case 1:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      break;
    case 3:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        ((finishedRoot = null),
        null !== finishedWork.alternate &&
          (finishedRoot = finishedWork.alternate.memoizedState.cache),
        (finishedWork = finishedWork.memoizedState.cache),
        finishedWork !== finishedRoot &&
          (finishedWork.refCount++,
          null != finishedRoot && releaseCache(finishedRoot)));
      break;
    case 12:
      if (flags & 2048) {
        recursivelyTraversePassiveMountEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions
        );
        finishedRoot = finishedWork.stateNode;
        try {
          var _finishedWork$memoize2 = finishedWork.memoizedProps,
            id = _finishedWork$memoize2.id,
            onPostCommit = _finishedWork$memoize2.onPostCommit;
          "function" === typeof onPostCommit &&
            onPostCommit(
              id,
              null === finishedWork.alternate ? "mount" : "update",
              finishedRoot.passiveEffectDuration,
              -0
            );
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      } else
        recursivelyTraversePassiveMountEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions
        );
      break;
    case 31:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      break;
    case 13:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      break;
    case 23:
      break;
    case 22:
      _finishedWork$memoize2 = finishedWork.stateNode;
      id = finishedWork.alternate;
      null !== finishedWork.memoizedState
        ? _finishedWork$memoize2._visibility & 2
          ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            )
          : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork)
        : _finishedWork$memoize2._visibility & 2
          ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            )
          : ((_finishedWork$memoize2._visibility |= 2),
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              0 !== (finishedWork.subtreeFlags & 10256) || !1
            ));
      flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
      break;
    case 24:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
      break;
    default:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
  }
}
function recursivelyTraverseReconnectPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  committedLanes$jscomp$0,
  committedTransitions$jscomp$0,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects &&
    (0 !== (parentFiber.subtreeFlags & 10256) || !1);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      committedLanes = committedLanes$jscomp$0,
      committedTransitions = committedTransitions$jscomp$0,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        commitHookEffectListMount(8, finishedWork);
        break;
      case 23:
        break;
      case 22:
        var instance = finishedWork.stateNode;
        null !== finishedWork.memoizedState
          ? instance._visibility & 2
            ? recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              )
            : recursivelyTraverseAtomicPassiveEffects(
                finishedRoot,
                finishedWork
              )
          : ((instance._visibility |= 2),
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ));
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitOffscreenPassiveMountEffects(
            finishedWork.alternate,
            finishedWork
          );
        break;
      case 24:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
        break;
      default:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseAtomicPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      var finishedRoot = finishedRoot$jscomp$0,
        finishedWork = parentFiber,
        flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 22:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork
            );
          break;
        case 24:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
          break;
        default:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
      }
      parentFiber = parentFiber.sibling;
    }
}
var suspenseyCommitFlag = 8192;
function recursivelyAccumulateSuspenseyCommit(
  parentFiber,
  committedLanes,
  suspendedState
) {
  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      accumulateSuspenseyCommitOnFiber(
        parentFiber,
        committedLanes,
        suspendedState
      ),
        (parentFiber = parentFiber.sibling);
}
function accumulateSuspenseyCommitOnFiber(
  fiber,
  committedLanes,
  suspendedState
) {
  switch (fiber.tag) {
    case 26:
      recursivelyAccumulateSuspenseyCommit(
        fiber,
        committedLanes,
        suspendedState
      );
      fiber.flags & suspenseyCommitFlag &&
        null !== fiber.memoizedState &&
        suspendResource(
          suspendedState,
          currentHoistableRoot,
          fiber.memoizedState,
          fiber.memoizedProps
        );
      break;
    case 5:
      recursivelyAccumulateSuspenseyCommit(
        fiber,
        committedLanes,
        suspendedState
      );
      break;
    case 3:
    case 4:
      var previousHoistableRoot = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
      recursivelyAccumulateSuspenseyCommit(
        fiber,
        committedLanes,
        suspendedState
      );
      currentHoistableRoot = previousHoistableRoot;
      break;
    case 22:
      null === fiber.memoizedState &&
        ((previousHoistableRoot = fiber.alternate),
        null !== previousHoistableRoot &&
        null !== previousHoistableRoot.memoizedState
          ? ((previousHoistableRoot = suspenseyCommitFlag),
            (suspenseyCommitFlag = 16777216),
            recursivelyAccumulateSuspenseyCommit(
              fiber,
              committedLanes,
              suspendedState
            ),
            (suspenseyCommitFlag = previousHoistableRoot))
          : recursivelyAccumulateSuspenseyCommit(
              fiber,
              committedLanes,
              suspendedState
            ));
      break;
    default:
      recursivelyAccumulateSuspenseyCommit(
        fiber,
        committedLanes,
        suspendedState
      );
  }
}
function detachAlternateSiblings(parentFiber) {
  var previousFiber = parentFiber.alternate;
  if (
    null !== previousFiber &&
    ((parentFiber = previousFiber.child), null !== parentFiber)
  ) {
    previousFiber.child = null;
    do
      (previousFiber = parentFiber.sibling),
        (parentFiber.sibling = null),
        (parentFiber = previousFiber);
    while (null !== parentFiber);
  }
}
function recursivelyTraversePassiveUnmountEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveUnmountOnFiber(parentFiber),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveUnmountOnFiber(finishedWork) {
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      finishedWork.flags & 2048 &&
        commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
      break;
    case 3:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    case 12:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    case 22:
      var instance = finishedWork.stateNode;
      null !== finishedWork.memoizedState &&
      instance._visibility & 2 &&
      (null === finishedWork.return || 13 !== finishedWork.return.tag)
        ? ((instance._visibility &= -3),
          recursivelyTraverseDisconnectPassiveEffects(finishedWork))
        : recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    default:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
  }
}
function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    deletions = parentFiber;
    switch (deletions.tag) {
      case 0:
      case 11:
      case 15:
        commitHookEffectListUnmount(8, deletions, deletions.return);
        recursivelyTraverseDisconnectPassiveEffects(deletions);
        break;
      case 22:
        i = deletions.stateNode;
        i._visibility & 2 &&
          ((i._visibility &= -3),
          recursivelyTraverseDisconnectPassiveEffects(deletions));
        break;
      default:
        recursivelyTraverseDisconnectPassiveEffects(deletions);
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
  deletedSubtreeRoot,
  nearestMountedAncestor
) {
  for (; null !== nextEffect; ) {
    var fiber = nextEffect;
    switch (fiber.tag) {
      case 0:
      case 11:
      case 15:
        commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
        break;
      case 23:
      case 22:
        if (
          null !== fiber.memoizedState &&
          null !== fiber.memoizedState.cachePool
        ) {
          var cache = fiber.memoizedState.cachePool.pool;
          null != cache && cache.refCount++;
        }
        break;
      case 24:
        releaseCache(fiber.memoizedState.cache);
    }
    cache = fiber.child;
    if (null !== cache) (cache.return = fiber), (nextEffect = cache);
    else
      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
        cache = nextEffect;
        var sibling = cache.sibling,
          returnFiber = cache.return;
        detachFiberAfterEffects(cache);
        if (cache === fiber) {
          nextEffect = null;
          break a;
        }
        if (null !== sibling) {
          sibling.return = returnFiber;
          nextEffect = sibling;
          break a;
        }
        nextEffect = returnFiber;
      }
  }
}
var DefaultAsyncDispatcher = {
    getCacheForType: function (resourceType) {
      var cache = readContext(CacheContext),
        cacheForType = cache.data.get(resourceType);
      void 0 === cacheForType &&
        ((cacheForType = resourceType()),
        cache.data.set(resourceType, cacheForType));
      return cacheForType;
    },
    cacheSignal: function () {
      return readContext(CacheContext).controller.signal;
    }
  },
  PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map,
  executionContext = 0,
  workInProgressRoot = null,
  workInProgress = null,
  workInProgressRootRenderLanes = 0,
  workInProgressSuspendedReason = 0,
  workInProgressThrownValue = null,
  workInProgressRootDidSkipSuspendedSiblings = !1,
  workInProgressRootIsPrerendering = !1,
  workInProgressRootDidAttachPingListener = !1,
  entangledRenderLanes = 0,
  workInProgressRootExitStatus = 0,
  workInProgressRootSkippedLanes = 0,
  workInProgressRootInterleavedUpdatedLanes = 0,
  workInProgressRootPingedLanes = 0,
  workInProgressDeferredLane = 0,
  workInProgressSuspendedRetryLanes = 0,
  workInProgressRootConcurrentErrors = null,
  workInProgressRootRecoverableErrors = null,
  workInProgressRootDidIncludeRecursiveRenderUpdate = !1,
  globalMostRecentFallbackTime = 0,
  globalMostRecentTransitionTime = 0,
  workInProgressRootRenderTargetTime = Infinity,
  workInProgressTransitions = null,
  legacyErrorBoundariesThatAlreadyFailed = null,
  pendingEffectsStatus = 0,
  pendingEffectsRoot = null,
  pendingFinishedWork = null,
  pendingEffectsLanes = 0,
  pendingEffectsRemainingLanes = 0,
  pendingPassiveTransitions = null,
  pendingRecoverableErrors = null,
  nestedUpdateCount = 0,
  rootWithNestedUpdates = null;
function requestUpdateLane() {
  return 0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes
    ? workInProgressRootRenderLanes & -workInProgressRootRenderLanes
    : null !== ReactSharedInternals.T
      ? requestTransitionLane()
      : resolveUpdatePriority();
}
function requestDeferredLane() {
  if (0 === workInProgressDeferredLane)
    if (0 === (workInProgressRootRenderLanes & 536870912) || isHydrating) {
      var lane = nextTransitionDeferredLane;
      nextTransitionDeferredLane <<= 1;
      0 === (nextTransitionDeferredLane & 3932160) &&
        (nextTransitionDeferredLane = 262144);
      workInProgressDeferredLane = lane;
    } else workInProgressDeferredLane = 536870912;
  lane = suspenseHandlerStackCursor.current;
  null !== lane && (lane.flags |= 32);
  return workInProgressDeferredLane;
}
function scheduleUpdateOnFiber(root, fiber, lane) {
  if (
    (root === workInProgressRoot &&
      (2 === workInProgressSuspendedReason ||
        9 === workInProgressSuspendedReason)) ||
    null !== root.cancelPendingCommit
  )
    prepareFreshStack(root, 0),
      markRootSuspended(
        root,
        workInProgressRootRenderLanes,
        workInProgressDeferredLane,
        !1
      );
  markRootUpdated$1(root, lane);
  if (0 === (executionContext & 2) || root !== workInProgressRoot)
    root === workInProgressRoot &&
      (0 === (executionContext & 2) &&
        (workInProgressRootInterleavedUpdatedLanes |= lane),
      4 === workInProgressRootExitStatus &&
        markRootSuspended(
          root,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          !1
        )),
      ensureRootIsScheduled(root);
}
function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  var shouldTimeSlice =
      (!forceSync &&
        0 === (lanes & 127) &&
        0 === (lanes & root$jscomp$0.expiredLanes)) ||
      checkIfRootIsPrerendering(root$jscomp$0, lanes),
    exitStatus = shouldTimeSlice
      ? renderRootConcurrent(root$jscomp$0, lanes)
      : renderRootSync(root$jscomp$0, lanes, !0),
    renderWasConcurrent = shouldTimeSlice;
  do {
    if (0 === exitStatus) {
      workInProgressRootIsPrerendering &&
        !shouldTimeSlice &&
        markRootSuspended(root$jscomp$0, lanes, 0, !1);
      break;
    } else {
      forceSync = root$jscomp$0.current.alternate;
      if (
        renderWasConcurrent &&
        !isRenderConsistentWithExternalStores(forceSync)
      ) {
        exitStatus = renderRootSync(root$jscomp$0, lanes, !1);
        renderWasConcurrent = !1;
        continue;
      }
      if (2 === exitStatus) {
        renderWasConcurrent = lanes;
        if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
          var JSCompiler_inline_result = 0;
        else
          (JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913),
            (JSCompiler_inline_result =
              0 !== JSCompiler_inline_result
                ? JSCompiler_inline_result
                : JSCompiler_inline_result & 536870912
                  ? 536870912
                  : 0);
        if (0 !== JSCompiler_inline_result) {
          lanes = JSCompiler_inline_result;
          a: {
            var root = root$jscomp$0;
            exitStatus = workInProgressRootConcurrentErrors;
            var wasRootDehydrated = root.current.memoizedState.isDehydrated;
            wasRootDehydrated &&
              (prepareFreshStack(root, JSCompiler_inline_result).flags |= 256);
            JSCompiler_inline_result = renderRootSync(
              root,
              JSCompiler_inline_result,
              !1
            );
            if (2 !== JSCompiler_inline_result) {
              if (
                workInProgressRootDidAttachPingListener &&
                !wasRootDehydrated
              ) {
                root.errorRecoveryDisabledLanes |= renderWasConcurrent;
                workInProgressRootInterleavedUpdatedLanes |=
                  renderWasConcurrent;
                exitStatus = 4;
                break a;
              }
              renderWasConcurrent = workInProgressRootRecoverableErrors;
              workInProgressRootRecoverableErrors = exitStatus;
              null !== renderWasConcurrent &&
                (null === workInProgressRootRecoverableErrors
                  ? (workInProgressRootRecoverableErrors = renderWasConcurrent)
                  : workInProgressRootRecoverableErrors.push.apply(
                      workInProgressRootRecoverableErrors,
                      renderWasConcurrent
                    ));
            }
            exitStatus = JSCompiler_inline_result;
          }
          renderWasConcurrent = !1;
          if (2 !== exitStatus) continue;
        }
      }
      if (1 === exitStatus) {
        prepareFreshStack(root$jscomp$0, 0);
        markRootSuspended(root$jscomp$0, lanes, 0, !0);
        break;
      }
      a: {
        shouldTimeSlice = root$jscomp$0;
        renderWasConcurrent = exitStatus;
        switch (renderWasConcurrent) {
          case 0:
          case 1:
            throw Error(formatProdErrorMessage(345));
          case 4:
            if ((lanes & 4194048) !== lanes) break;
          case 6:
            markRootSuspended(
              shouldTimeSlice,
              lanes,
              workInProgressDeferredLane,
              !workInProgressRootDidSkipSuspendedSiblings
            );
            break a;
          case 2:
            workInProgressRootRecoverableErrors = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(formatProdErrorMessage(329));
        }
        if (
          (lanes & 62914560) === lanes &&
          ((exitStatus = globalMostRecentFallbackTime + 300 - now()),
          10 < exitStatus)
        ) {
          markRootSuspended(
            shouldTimeSlice,
            lanes,
            workInProgressDeferredLane,
            !workInProgressRootDidSkipSuspendedSiblings
          );
          if (0 !== getNextLanes(shouldTimeSlice, 0, !0)) break a;
          pendingEffectsLanes = lanes;
          shouldTimeSlice.timeoutHandle = scheduleTimeout(
            commitRootWhenReady.bind(
              null,
              shouldTimeSlice,
              forceSync,
              workInProgressRootRecoverableErrors,
              workInProgressTransitions,
              workInProgressRootDidIncludeRecursiveRenderUpdate,
              lanes,
              workInProgressDeferredLane,
              workInProgressRootInterleavedUpdatedLanes,
              workInProgressSuspendedRetryLanes,
              workInProgressRootDidSkipSuspendedSiblings,
              renderWasConcurrent,
              "Throttled",
              -0,
              0
            ),
            exitStatus
          );
          break a;
        }
        commitRootWhenReady(
          shouldTimeSlice,
          forceSync,
          workInProgressRootRecoverableErrors,
          workInProgressTransitions,
          workInProgressRootDidIncludeRecursiveRenderUpdate,
          lanes,
          workInProgressDeferredLane,
          workInProgressRootInterleavedUpdatedLanes,
          workInProgressSuspendedRetryLanes,
          workInProgressRootDidSkipSuspendedSiblings,
          renderWasConcurrent,
          null,
          -0,
          0
        );
      }
    }
    break;
  } while (1);
  ensureRootIsScheduled(root$jscomp$0);
}
function commitRootWhenReady(
  root,
  finishedWork,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  lanes,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes,
  didSkipSuspendedSiblings,
  exitStatus,
  suspendedCommitReason,
  completedRenderStartTime,
  completedRenderEndTime
) {
  root.timeoutHandle = -1;
  suspendedCommitReason = finishedWork.subtreeFlags;
  if (
    suspendedCommitReason & 8192 ||
    16785408 === (suspendedCommitReason & 16785408)
  ) {
    suspendedCommitReason = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: noop$1
    };
    accumulateSuspenseyCommitOnFiber(
      finishedWork,
      lanes,
      suspendedCommitReason
    );
    var timeoutOffset =
      (lanes & 62914560) === lanes
        ? globalMostRecentFallbackTime - now()
        : (lanes & 4194048) === lanes
          ? globalMostRecentTransitionTime - now()
          : 0;
    timeoutOffset = waitForCommitToBeReady(
      suspendedCommitReason,
      timeoutOffset
    );
    if (null !== timeoutOffset) {
      pendingEffectsLanes = lanes;
      root.cancelPendingCommit = timeoutOffset(
        commitRoot.bind(
          null,
          root,
          finishedWork,
          lanes,
          recoverableErrors,
          transitions,
          didIncludeRenderPhaseUpdate,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes,
          exitStatus,
          suspendedCommitReason,
          null,
          completedRenderStartTime,
          completedRenderEndTime
        )
      );
      markRootSuspended(root, lanes, spawnedLane, !didSkipSuspendedSiblings);
      return;
    }
  }
  commitRoot(
    root,
    finishedWork,
    lanes,
    recoverableErrors,
    transitions,
    didIncludeRenderPhaseUpdate,
    spawnedLane,
    updatedLanes,
    suspendedRetryLanes
  );
}
function isRenderConsistentWithExternalStores(finishedWork) {
  for (var node = finishedWork; ; ) {
    var tag = node.tag;
    if (
      (0 === tag || 11 === tag || 15 === tag) &&
      node.flags & 16384 &&
      ((tag = node.updateQueue),
      null !== tag && ((tag = tag.stores), null !== tag))
    )
      for (var i = 0; i < tag.length; i++) {
        var check = tag[i],
          getSnapshot = check.getSnapshot;
        check = check.value;
        try {
          if (!objectIs(getSnapshot(), check)) return !1;
        } catch (error) {
          return !1;
        }
      }
    tag = node.child;
    if (node.subtreeFlags & 16384 && null !== tag)
      (tag.return = node), (node = tag);
    else {
      if (node === finishedWork) break;
      for (; null === node.sibling; ) {
        if (null === node.return || node.return === finishedWork) return !0;
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  return !0;
}
function markRootSuspended(
  root,
  suspendedLanes,
  spawnedLane,
  didAttemptEntireTree
) {
  suspendedLanes &= ~workInProgressRootPingedLanes;
  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
  root.suspendedLanes |= suspendedLanes;
  root.pingedLanes &= ~suspendedLanes;
  didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
  didAttemptEntireTree = root.expirationTimes;
  for (var lanes = suspendedLanes; 0 < lanes; ) {
    var index$6 = 31 - clz32(lanes),
      lane = 1 << index$6;
    didAttemptEntireTree[index$6] = -1;
    lanes &= ~lane;
  }
  0 !== spawnedLane &&
    markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
}
function flushSyncWork$1() {
  return 0 === (executionContext & 6)
    ? (flushSyncWorkAcrossRoots_impl(0, !1), !1)
    : !0;
}
function resetWorkInProgressStack() {
  if (null !== workInProgress) {
    if (0 === workInProgressSuspendedReason)
      var interruptedWork = workInProgress.return;
    else
      (interruptedWork = workInProgress),
        (lastContextDependency = currentlyRenderingFiber$1 = null),
        resetHooksOnUnwind(interruptedWork),
        (thenableState$1 = null),
        (thenableIndexCounter$1 = 0),
        (interruptedWork = workInProgress);
    for (; null !== interruptedWork; )
      unwindInterruptedWork(interruptedWork.alternate, interruptedWork),
        (interruptedWork = interruptedWork.return);
    workInProgress = null;
  }
}
function prepareFreshStack(root, lanes) {
  var timeoutHandle = root.timeoutHandle;
  -1 !== timeoutHandle &&
    ((root.timeoutHandle = -1), cancelTimeout(timeoutHandle));
  timeoutHandle = root.cancelPendingCommit;
  null !== timeoutHandle &&
    ((root.cancelPendingCommit = null), timeoutHandle());
  pendingEffectsLanes = 0;
  resetWorkInProgressStack();
  workInProgressRoot = root;
  workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
  workInProgressRootRenderLanes = lanes;
  workInProgressSuspendedReason = 0;
  workInProgressThrownValue = null;
  workInProgressRootDidSkipSuspendedSiblings = !1;
  workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
  workInProgressRootDidAttachPingListener = !1;
  workInProgressSuspendedRetryLanes =
    workInProgressDeferredLane =
    workInProgressRootPingedLanes =
    workInProgressRootInterleavedUpdatedLanes =
    workInProgressRootSkippedLanes =
    workInProgressRootExitStatus =
      0;
  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors =
    null;
  workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
  0 !== (lanes & 8) && (lanes |= lanes & 32);
  var allEntangledLanes = root.entangledLanes;
  if (0 !== allEntangledLanes)
    for (
      root = root.entanglements, allEntangledLanes &= lanes;
      0 < allEntangledLanes;

    ) {
      var index$4 = 31 - clz32(allEntangledLanes),
        lane = 1 << index$4;
      lanes |= root[index$4];
      allEntangledLanes &= ~lane;
    }
  entangledRenderLanes = lanes;
  finishQueueingConcurrentUpdates();
  return timeoutHandle;
}
function handleThrow(root, thrownValue) {
  currentlyRenderingFiber = null;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  thrownValue === SuspenseException || thrownValue === SuspenseActionException
    ? ((thrownValue = getSuspendedThenable()),
      (workInProgressSuspendedReason = 3))
    : thrownValue === SuspenseyCommitException
      ? ((thrownValue = getSuspendedThenable()),
        (workInProgressSuspendedReason = 4))
      : (workInProgressSuspendedReason =
          thrownValue === SelectiveHydrationException
            ? 8
            : null !== thrownValue &&
                "object" === typeof thrownValue &&
                "function" === typeof thrownValue.then
              ? 6
              : 1);
  workInProgressThrownValue = thrownValue;
  null === workInProgress &&
    ((workInProgressRootExitStatus = 1),
    logUncaughtError(
      root,
      createCapturedValueAtFiber(thrownValue, root.current)
    ));
}
function shouldRemainOnPreviousScreen() {
  var handler = suspenseHandlerStackCursor.current;
  return null === handler
    ? !0
    : (workInProgressRootRenderLanes & 4194048) ===
        workInProgressRootRenderLanes
      ? null === shellBoundary
        ? !0
        : !1
      : (workInProgressRootRenderLanes & 62914560) ===
            workInProgressRootRenderLanes ||
          0 !== (workInProgressRootRenderLanes & 536870912)
        ? handler === shellBoundary
        : !1;
}
function pushDispatcher() {
  var prevDispatcher = ReactSharedInternals.H;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
}
function pushAsyncDispatcher() {
  var prevAsyncDispatcher = ReactSharedInternals.A;
  ReactSharedInternals.A = DefaultAsyncDispatcher;
  return prevAsyncDispatcher;
}
function renderDidSuspendDelayIfPossible() {
  workInProgressRootExitStatus = 4;
  workInProgressRootDidSkipSuspendedSiblings ||
    ((workInProgressRootRenderLanes & 4194048) !==
      workInProgressRootRenderLanes &&
      null !== suspenseHandlerStackCursor.current) ||
    (workInProgressRootIsPrerendering = !0);
  (0 === (workInProgressRootSkippedLanes & 134217727) &&
    0 === (workInProgressRootInterleavedUpdatedLanes & 134217727)) ||
    null === workInProgressRoot ||
    markRootSuspended(
      workInProgressRoot,
      workInProgressRootRenderLanes,
      workInProgressDeferredLane,
      !1
    );
}
function renderRootSync(root, lanes, shouldYieldForPrerendering) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevAsyncDispatcher = pushAsyncDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
    (workInProgressTransitions = null), prepareFreshStack(root, lanes);
  lanes = !1;
  var exitStatus = workInProgressRootExitStatus;
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        var unitOfWork = workInProgress,
          thrownValue = workInProgressThrownValue;
        switch (workInProgressSuspendedReason) {
          case 8:
            resetWorkInProgressStack();
            exitStatus = 6;
            break a;
          case 3:
          case 2:
          case 9:
          case 6:
            null === suspenseHandlerStackCursor.current && (lanes = !0);
            var reason = workInProgressSuspendedReason;
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
            if (
              shouldYieldForPrerendering &&
              workInProgressRootIsPrerendering
            ) {
              exitStatus = 0;
              break a;
            }
            break;
          default:
            (reason = workInProgressSuspendedReason),
              (workInProgressSuspendedReason = 0),
              (workInProgressThrownValue = null),
              throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
        }
      }
      workLoopSync();
      exitStatus = workInProgressRootExitStatus;
      break;
    } catch (thrownValue$165) {
      handleThrow(root, thrownValue$165);
    }
  while (1);
  lanes && root.shellSuspendCounter++;
  lastContextDependency = currentlyRenderingFiber$1 = null;
  executionContext = prevExecutionContext;
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  null === workInProgress &&
    ((workInProgressRoot = null),
    (workInProgressRootRenderLanes = 0),
    finishQueueingConcurrentUpdates());
  return exitStatus;
}
function workLoopSync() {
  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
}
function renderRootConcurrent(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevAsyncDispatcher = pushAsyncDispatcher();
  workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes
    ? ((workInProgressTransitions = null),
      (workInProgressRootRenderTargetTime = now() + 500),
      prepareFreshStack(root, lanes))
    : (workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
        root,
        lanes
      ));
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        lanes = workInProgress;
        var thrownValue = workInProgressThrownValue;
        b: switch (workInProgressSuspendedReason) {
          case 1:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue, 1);
            break;
          case 2:
          case 9:
            if (isThenableResolved(thrownValue)) {
              workInProgressSuspendedReason = 0;
              workInProgressThrownValue = null;
              replaySuspendedUnitOfWork(lanes);
              break;
            }
            lanes = function () {
              (2 !== workInProgressSuspendedReason &&
                9 !== workInProgressSuspendedReason) ||
                workInProgressRoot !== root ||
                (workInProgressSuspendedReason = 7);
              ensureRootIsScheduled(root);
            };
            thrownValue.then(lanes, lanes);
            break a;
          case 3:
            workInProgressSuspendedReason = 7;
            break a;
          case 4:
            workInProgressSuspendedReason = 5;
            break a;
          case 7:
            isThenableResolved(thrownValue)
              ? ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                replaySuspendedUnitOfWork(lanes))
              : ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                throwAndUnwindWorkLoop(root, lanes, thrownValue, 7));
            break;
          case 5:
            var resource = null;
            switch (workInProgress.tag) {
              case 26:
                resource = workInProgress.memoizedState;
              case 5:
              case 27:
                var hostFiber = workInProgress;
                if (
                  resource
                    ? preloadResource(resource)
                    : hostFiber.stateNode.complete
                ) {
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  var sibling = hostFiber.sibling;
                  if (null !== sibling) workInProgress = sibling;
                  else {
                    var returnFiber = hostFiber.return;
                    null !== returnFiber
                      ? ((workInProgress = returnFiber),
                        completeUnitOfWork(returnFiber))
                      : (workInProgress = null);
                  }
                  break b;
                }
            }
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue, 5);
            break;
          case 6:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue, 6);
            break;
          case 8:
            resetWorkInProgressStack();
            workInProgressRootExitStatus = 6;
            break a;
          default:
            throw Error(formatProdErrorMessage(462));
        }
      }
      workLoopConcurrentByScheduler();
      break;
    } catch (thrownValue$167) {
      handleThrow(root, thrownValue$167);
    }
  while (1);
  lastContextDependency = currentlyRenderingFiber$1 = null;
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  executionContext = prevExecutionContext;
  if (null !== workInProgress) return 0;
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  finishQueueingConcurrentUpdates();
  return workInProgressRootExitStatus;
}
function workLoopConcurrentByScheduler() {
  for (; null !== workInProgress && !shouldYield(); )
    performUnitOfWork(workInProgress);
}
function performUnitOfWork(unitOfWork) {
  var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
}
function replaySuspendedUnitOfWork(unitOfWork) {
  var next = unitOfWork;
  var current = next.alternate;
  switch (next.tag) {
    case 15:
    case 0:
      next = replayFunctionComponent(
        current,
        next,
        next.pendingProps,
        next.type,
        void 0,
        workInProgressRootRenderLanes
      );
      break;
    case 11:
      next = replayFunctionComponent(
        current,
        next,
        next.pendingProps,
        next.type.render,
        next.ref,
        workInProgressRootRenderLanes
      );
      break;
    case 5:
      resetHooksOnUnwind(next);
    default:
      unwindInterruptedWork(current, next),
        (next = workInProgress =
          resetWorkInProgress(next, entangledRenderLanes)),
        (next = beginWork(current, next, entangledRenderLanes));
  }
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
}
function throwAndUnwindWorkLoop(
  root,
  unitOfWork,
  thrownValue,
  suspendedReason
) {
  lastContextDependency = currentlyRenderingFiber$1 = null;
  resetHooksOnUnwind(unitOfWork);
  thenableState$1 = null;
  thenableIndexCounter$1 = 0;
  var returnFiber = unitOfWork.return;
  try {
    if (
      throwException(
        root,
        returnFiber,
        unitOfWork,
        thrownValue,
        workInProgressRootRenderLanes
      )
    ) {
      workInProgressRootExitStatus = 1;
      logUncaughtError(
        root,
        createCapturedValueAtFiber(thrownValue, root.current)
      );
      workInProgress = null;
      return;
    }
  } catch (error) {
    if (null !== returnFiber) throw ((workInProgress = returnFiber), error);
    workInProgressRootExitStatus = 1;
    logUncaughtError(
      root,
      createCapturedValueAtFiber(thrownValue, root.current)
    );
    workInProgress = null;
    return;
  }
  if (unitOfWork.flags & 32768) {
    if (isHydrating || 1 === suspendedReason) root = !0;
    else if (
      workInProgressRootIsPrerendering ||
      0 !== (workInProgressRootRenderLanes & 536870912)
    )
      root = !1;
    else if (
      ((workInProgressRootDidSkipSuspendedSiblings = root = !0),
      2 === suspendedReason ||
        9 === suspendedReason ||
        3 === suspendedReason ||
        6 === suspendedReason)
    )
      (suspendedReason = suspenseHandlerStackCursor.current),
        null !== suspendedReason &&
          13 === suspendedReason.tag &&
          (suspendedReason.flags |= 16384);
    unwindUnitOfWork(unitOfWork, root);
  } else completeUnitOfWork(unitOfWork);
}
function completeUnitOfWork(unitOfWork) {
  var completedWork = unitOfWork;
  do {
    if (0 !== (completedWork.flags & 32768)) {
      unwindUnitOfWork(
        completedWork,
        workInProgressRootDidSkipSuspendedSiblings
      );
      return;
    }
    unitOfWork = completedWork.return;
    var next = completeWork(
      completedWork.alternate,
      completedWork,
      entangledRenderLanes
    );
    if (null !== next) {
      workInProgress = next;
      return;
    }
    completedWork = completedWork.sibling;
    if (null !== completedWork) {
      workInProgress = completedWork;
      return;
    }
    workInProgress = completedWork = unitOfWork;
  } while (null !== completedWork);
  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
}
function unwindUnitOfWork(unitOfWork, skipSiblings) {
  do {
    var next = unwindWork(unitOfWork.alternate, unitOfWork);
    if (null !== next) {
      next.flags &= 32767;
      workInProgress = next;
      return;
    }
    next = unitOfWork.return;
    null !== next &&
      ((next.flags |= 32768), (next.subtreeFlags = 0), (next.deletions = null));
    if (
      !skipSiblings &&
      ((unitOfWork = unitOfWork.sibling), null !== unitOfWork)
    ) {
      workInProgress = unitOfWork;
      return;
    }
    workInProgress = unitOfWork = next;
  } while (null !== unitOfWork);
  workInProgressRootExitStatus = 6;
  workInProgress = null;
}
function commitRoot(
  root,
  finishedWork,
  lanes,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes
) {
  root.cancelPendingCommit = null;
  do flushPendingEffects();
  while (0 !== pendingEffectsStatus);
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  if (null !== finishedWork) {
    if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
    didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
    didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
    markRootFinished(
      root,
      lanes,
      didIncludeRenderPhaseUpdate,
      spawnedLane,
      updatedLanes,
      suspendedRetryLanes
    );
    root === workInProgressRoot &&
      ((workInProgress = workInProgressRoot = null),
      (workInProgressRootRenderLanes = 0));
    pendingFinishedWork = finishedWork;
    pendingEffectsRoot = root;
    pendingEffectsLanes = lanes;
    pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
    pendingPassiveTransitions = transitions;
    pendingRecoverableErrors = recoverableErrors;
    0 !== (finishedWork.subtreeFlags & 10256) ||
    0 !== (finishedWork.flags & 10256)
      ? ((root.callbackNode = null),
        (root.callbackPriority = 0),
        scheduleCallback$1(NormalPriority$1, function () {
          flushPassiveEffects();
          return null;
        }))
      : ((root.callbackNode = null), (root.callbackPriority = 0));
    recoverableErrors = 0 !== (finishedWork.flags & 13878);
    if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
      recoverableErrors = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      transitions = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      spawnedLane = executionContext;
      executionContext |= 4;
      try {
        commitBeforeMutationEffects(root, finishedWork, lanes);
      } finally {
        (executionContext = spawnedLane),
          (ReactDOMSharedInternals.p = transitions),
          (ReactSharedInternals.T = recoverableErrors);
      }
    }
    pendingEffectsStatus = 1;
    flushMutationEffects();
    flushLayoutEffects();
    flushSpawnedWork();
  }
}
function flushMutationEffects() {
  if (1 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    var root = pendingEffectsRoot,
      finishedWork = pendingFinishedWork,
      rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
    if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
      rootMutationHasEffect = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      var prevExecutionContext = executionContext;
      executionContext |= 4;
      try {
        commitMutationEffectsOnFiber(finishedWork, root);
        var priorSelectionInformation = selectionInformation,
          curFocusedElem = getActiveElementDeep(root.containerInfo),
          priorFocusedElem = priorSelectionInformation.focusedElem,
          priorSelectionRange = priorSelectionInformation.selectionRange;
        if (
          curFocusedElem !== priorFocusedElem &&
          priorFocusedElem &&
          priorFocusedElem.ownerDocument &&
          containsNode(
            priorFocusedElem.ownerDocument.documentElement,
            priorFocusedElem
          )
        ) {
          if (
            null !== priorSelectionRange &&
            hasSelectionCapabilities(priorFocusedElem)
          ) {
            var start = priorSelectionRange.start,
              end = priorSelectionRange.end;
            void 0 === end && (end = start);
            if ("selectionStart" in priorFocusedElem)
              (priorFocusedElem.selectionStart = start),
                (priorFocusedElem.selectionEnd = Math.min(
                  end,
                  priorFocusedElem.value.length
                ));
            else {
              var doc = priorFocusedElem.ownerDocument || document,
                win = (doc && doc.defaultView) || window;
              if (win.getSelection) {
                var selection = win.getSelection(),
                  length = priorFocusedElem.textContent.length,
                  start$jscomp$0 = Math.min(priorSelectionRange.start, length),
                  end$jscomp$0 =
                    void 0 === priorSelectionRange.end
                      ? start$jscomp$0
                      : Math.min(priorSelectionRange.end, length);
                !selection.extend &&
                  start$jscomp$0 > end$jscomp$0 &&
                  ((curFocusedElem = end$jscomp$0),
                  (end$jscomp$0 = start$jscomp$0),
                  (start$jscomp$0 = curFocusedElem));
                var startMarker = getNodeForCharacterOffset(
                    priorFocusedElem,
                    start$jscomp$0
                  ),
                  endMarker = getNodeForCharacterOffset(
                    priorFocusedElem,
                    end$jscomp$0
                  );
                if (
                  startMarker &&
                  endMarker &&
                  (1 !== selection.rangeCount ||
                    selection.anchorNode !== startMarker.node ||
                    selection.anchorOffset !== startMarker.offset ||
                    selection.focusNode !== endMarker.node ||
                    selection.focusOffset !== endMarker.offset)
                ) {
                  var range = doc.createRange();
                  range.setStart(startMarker.node, startMarker.offset);
                  selection.removeAllRanges();
                  start$jscomp$0 > end$jscomp$0
                    ? (selection.addRange(range),
                      selection.extend(endMarker.node, endMarker.offset))
                    : (range.setEnd(endMarker.node, endMarker.offset),
                      selection.addRange(range));
                }
              }
            }
          }
          doc = [];
          for (
            selection = priorFocusedElem;
            (selection = selection.parentNode);

          )
            1 === selection.nodeType &&
              doc.push({
                element: selection,
                left: selection.scrollLeft,
                top: selection.scrollTop
              });
          "function" === typeof priorFocusedElem.focus &&
            priorFocusedElem.focus();
          for (
            priorFocusedElem = 0;
            priorFocusedElem < doc.length;
            priorFocusedElem++
          ) {
            var info = doc[priorFocusedElem];
            info.element.scrollLeft = info.left;
            info.element.scrollTop = info.top;
          }
        }
        _enabled = !!eventsEnabled;
        selectionInformation = eventsEnabled = null;
      } finally {
        (executionContext = prevExecutionContext),
          (ReactDOMSharedInternals.p = previousPriority),
          (ReactSharedInternals.T = rootMutationHasEffect);
      }
    }
    root.current = finishedWork;
    pendingEffectsStatus = 2;
  }
}
function flushLayoutEffects() {
  if (2 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    var root = pendingEffectsRoot,
      finishedWork = pendingFinishedWork,
      rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
    if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
      rootHasLayoutEffect = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      var prevExecutionContext = executionContext;
      executionContext |= 4;
      try {
        commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
      } finally {
        (executionContext = prevExecutionContext),
          (ReactDOMSharedInternals.p = previousPriority),
          (ReactSharedInternals.T = rootHasLayoutEffect);
      }
    }
    pendingEffectsStatus = 3;
  }
}
function flushSpawnedWork() {
  if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    requestPaint();
    var root = pendingEffectsRoot,
      finishedWork = pendingFinishedWork,
      lanes = pendingEffectsLanes,
      recoverableErrors = pendingRecoverableErrors;
    0 !== (finishedWork.subtreeFlags & 10256) ||
    0 !== (finishedWork.flags & 10256)
      ? (pendingEffectsStatus = 5)
      : ((pendingEffectsStatus = 0),
        (pendingFinishedWork = pendingEffectsRoot = null),
        releaseRootPooledCache(root, root.pendingLanes));
    var remainingLanes = root.pendingLanes;
    0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
    lanesToEventPriority(lanes);
    finishedWork = finishedWork.stateNode;
    if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
      try {
        injectedHook.onCommitFiberRoot(
          rendererID,
          finishedWork,
          void 0,
          128 === (finishedWork.current.flags & 128)
        );
      } catch (err) {}
    if (null !== recoverableErrors) {
      finishedWork = ReactSharedInternals.T;
      remainingLanes = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      ReactSharedInternals.T = null;
      try {
        for (
          var onRecoverableError = root.onRecoverableError, i = 0;
          i < recoverableErrors.length;
          i++
        ) {
          var recoverableError = recoverableErrors[i];
          onRecoverableError(recoverableError.value, {
            componentStack: recoverableError.stack
          });
        }
      } finally {
        (ReactSharedInternals.T = finishedWork),
          (ReactDOMSharedInternals.p = remainingLanes);
      }
    }
    0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
    ensureRootIsScheduled(root);
    remainingLanes = root.pendingLanes;
    0 !== (lanes & 261930) && 0 !== (remainingLanes & 42)
      ? root === rootWithNestedUpdates
        ? nestedUpdateCount++
        : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root))
      : (nestedUpdateCount = 0);
    flushSyncWorkAcrossRoots_impl(0, !1);
  }
}
function releaseRootPooledCache(root, remainingLanes) {
  0 === (root.pooledCacheLanes &= remainingLanes) &&
    ((remainingLanes = root.pooledCache),
    null != remainingLanes &&
      ((root.pooledCache = null), releaseCache(remainingLanes)));
}
function flushPendingEffects() {
  flushMutationEffects();
  flushLayoutEffects();
  flushSpawnedWork();
  return flushPassiveEffects();
}
function flushPassiveEffects() {
  if (5 !== pendingEffectsStatus) return !1;
  var root = pendingEffectsRoot,
    remainingLanes = pendingEffectsRemainingLanes;
  pendingEffectsRemainingLanes = 0;
  var renderPriority = lanesToEventPriority(pendingEffectsLanes),
    prevTransition = ReactSharedInternals.T,
    previousPriority = ReactDOMSharedInternals.p;
  try {
    ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
    ReactSharedInternals.T = null;
    renderPriority = pendingPassiveTransitions;
    pendingPassiveTransitions = null;
    var root$jscomp$0 = pendingEffectsRoot,
      lanes = pendingEffectsLanes;
    pendingEffectsStatus = 0;
    pendingFinishedWork = pendingEffectsRoot = null;
    pendingEffectsLanes = 0;
    if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
    var prevExecutionContext = executionContext;
    executionContext |= 4;
    commitPassiveUnmountOnFiber(root$jscomp$0.current);
    commitPassiveMountOnFiber(
      root$jscomp$0,
      root$jscomp$0.current,
      lanes,
      renderPriority
    );
    executionContext = prevExecutionContext;
    flushSyncWorkAcrossRoots_impl(0, !1);
    if (
      injectedHook &&
      "function" === typeof injectedHook.onPostCommitFiberRoot
    )
      try {
        injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
      } catch (err) {}
    return !0;
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      (ReactSharedInternals.T = prevTransition),
      releaseRootPooledCache(root, remainingLanes);
  }
}
function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
  sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
  null !== rootFiber &&
    (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
}
function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
  if (3 === sourceFiber.tag)
    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
  else
    for (; null !== nearestMountedAncestor; ) {
      if (3 === nearestMountedAncestor.tag) {
        captureCommitPhaseErrorOnRoot(
          nearestMountedAncestor,
          sourceFiber,
          error
        );
        break;
      } else if (1 === nearestMountedAncestor.tag) {
        var instance = nearestMountedAncestor.stateNode;
        if (
          "function" ===
            typeof nearestMountedAncestor.type.getDerivedStateFromError ||
          ("function" === typeof instance.componentDidCatch &&
            (null === legacyErrorBoundariesThatAlreadyFailed ||
              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
        ) {
          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
          error = createClassErrorUpdate(2);
          instance = enqueueUpdate(nearestMountedAncestor, error, 2);
          null !== instance &&
            (initializeClassErrorUpdate(
              error,
              instance,
              nearestMountedAncestor,
              sourceFiber
            ),
            markRootUpdated$1(instance, 2),
            ensureRootIsScheduled(instance));
          break;
        }
      }
      nearestMountedAncestor = nearestMountedAncestor.return;
    }
}
function attachPingListener(root, wakeable, lanes) {
  var pingCache = root.pingCache;
  if (null === pingCache) {
    pingCache = root.pingCache = new PossiblyWeakMap();
    var threadIDs = new Set();
    pingCache.set(wakeable, threadIDs);
  } else
    (threadIDs = pingCache.get(wakeable)),
      void 0 === threadIDs &&
        ((threadIDs = new Set()), pingCache.set(wakeable, threadIDs));
  threadIDs.has(lanes) ||
    ((workInProgressRootDidAttachPingListener = !0),
    threadIDs.add(lanes),
    (root = pingSuspendedRoot.bind(null, root, wakeable, lanes)),
    wakeable.then(root, root));
}
function pingSuspendedRoot(root, wakeable, pingedLanes) {
  var pingCache = root.pingCache;
  null !== pingCache && pingCache.delete(wakeable);
  root.pingedLanes |= root.suspendedLanes & pingedLanes;
  root.warmLanes &= ~pingedLanes;
  workInProgressRoot === root &&
    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
    (4 === workInProgressRootExitStatus ||
    (3 === workInProgressRootExitStatus &&
      (workInProgressRootRenderLanes & 62914560) ===
        workInProgressRootRenderLanes &&
      300 > now() - globalMostRecentFallbackTime)
      ? 0 === (executionContext & 2) && prepareFreshStack(root, 0)
      : (workInProgressRootPingedLanes |= pingedLanes),
    workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes &&
      (workInProgressSuspendedRetryLanes = 0));
  ensureRootIsScheduled(root);
}
function retryTimedOutBoundary(boundaryFiber, retryLane) {
  0 === retryLane && (retryLane = claimNextRetryLane());
  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
  null !== boundaryFiber &&
    (markRootUpdated$1(boundaryFiber, retryLane),
    ensureRootIsScheduled(boundaryFiber));
}
function retryDehydratedSuspenseBoundary(boundaryFiber) {
  var suspenseState = boundaryFiber.memoizedState,
    retryLane = 0;
  null !== suspenseState && (retryLane = suspenseState.retryLane);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function resolveRetryWakeable(boundaryFiber, wakeable) {
  var retryLane = 0;
  switch (boundaryFiber.tag) {
    case 31:
    case 13:
      var retryCache = boundaryFiber.stateNode;
      var suspenseState = boundaryFiber.memoizedState;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      break;
    case 19:
      retryCache = boundaryFiber.stateNode;
      break;
    case 22:
      retryCache = boundaryFiber.stateNode._retryCache;
      break;
    default:
      throw Error(formatProdErrorMessage(314));
  }
  null !== retryCache && retryCache.delete(wakeable);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function scheduleCallback$1(priorityLevel, callback) {
  return scheduleCallback$3(priorityLevel, callback);
}
var firstScheduledRoot = null,
  lastScheduledRoot = null,
  didScheduleMicrotask = !1,
  mightHavePendingSyncWork = !1,
  isFlushingWork = !1,
  currentEventTransitionLane = 0;
function ensureRootIsScheduled(root) {
  root !== lastScheduledRoot &&
    null === root.next &&
    (null === lastScheduledRoot
      ? (firstScheduledRoot = lastScheduledRoot = root)
      : (lastScheduledRoot = lastScheduledRoot.next = root));
  mightHavePendingSyncWork = !0;
  didScheduleMicrotask ||
    ((didScheduleMicrotask = !0), scheduleImmediateRootScheduleTask());
}
function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
  if (!isFlushingWork && mightHavePendingSyncWork) {
    isFlushingWork = !0;
    do {
      var didPerformSomeWork = !1;
      for (var root$170 = firstScheduledRoot; null !== root$170; ) {
        if (!onlyLegacy)
          if (0 !== syncTransitionLanes) {
            var pendingLanes = root$170.pendingLanes;
            if (0 === pendingLanes) var JSCompiler_inline_result = 0;
            else {
              var suspendedLanes = root$170.suspendedLanes,
                pingedLanes = root$170.pingedLanes;
              JSCompiler_inline_result =
                (1 << (31 - clz32(42 | syncTransitionLanes) + 1)) - 1;
              JSCompiler_inline_result &=
                pendingLanes & ~(suspendedLanes & ~pingedLanes);
              JSCompiler_inline_result =
                JSCompiler_inline_result & 201326741
                  ? (JSCompiler_inline_result & 201326741) | 1
                  : JSCompiler_inline_result
                    ? JSCompiler_inline_result | 2
                    : 0;
            }
            0 !== JSCompiler_inline_result &&
              ((didPerformSomeWork = !0),
              performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
          } else
            (JSCompiler_inline_result = workInProgressRootRenderLanes),
              (JSCompiler_inline_result = getNextLanes(
                root$170,
                root$170 === workInProgressRoot ? JSCompiler_inline_result : 0,
                null !== root$170.cancelPendingCommit ||
                  -1 !== root$170.timeoutHandle
              )),
              0 === (JSCompiler_inline_result & 3) ||
                checkIfRootIsPrerendering(root$170, JSCompiler_inline_result) ||
                ((didPerformSomeWork = !0),
                performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
        root$170 = root$170.next;
      }
    } while (didPerformSomeWork);
    isFlushingWork = !1;
  }
}
function processRootScheduleInImmediateTask() {
  processRootScheduleInMicrotask();
}
function processRootScheduleInMicrotask() {
  mightHavePendingSyncWork = didScheduleMicrotask = !1;
  var syncTransitionLanes = 0;
  0 !== currentEventTransitionLane &&
    shouldAttemptEagerTransition() &&
    (syncTransitionLanes = currentEventTransitionLane);
  for (
    var currentTime = now(), prev = null, root = firstScheduledRoot;
    null !== root;

  ) {
    var next = root.next,
      nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
    if (0 === nextLanes)
      (root.next = null),
        null === prev ? (firstScheduledRoot = next) : (prev.next = next),
        null === next && (lastScheduledRoot = prev);
    else if (
      ((prev = root), 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
    )
      mightHavePendingSyncWork = !0;
    root = next;
  }
  (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus) ||
    flushSyncWorkAcrossRoots_impl(syncTransitionLanes, !1);
  0 !== currentEventTransitionLane && (currentEventTransitionLane = 0);
}
function scheduleTaskForRootDuringMicrotask(root, currentTime) {
  for (
    var suspendedLanes = root.suspendedLanes,
      pingedLanes = root.pingedLanes,
      expirationTimes = root.expirationTimes,
      lanes = root.pendingLanes & -62914561;
    0 < lanes;

  ) {
    var index$5 = 31 - clz32(lanes),
      lane = 1 << index$5,
      expirationTime = expirationTimes[index$5];
    if (-1 === expirationTime) {
      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
        expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
    lanes &= ~lane;
  }
  currentTime = workInProgressRoot;
  suspendedLanes = workInProgressRootRenderLanes;
  suspendedLanes = getNextLanes(
    root,
    root === currentTime ? suspendedLanes : 0,
    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
  );
  pingedLanes = root.callbackNode;
  if (
    0 === suspendedLanes ||
    (root === currentTime &&
      (2 === workInProgressSuspendedReason ||
        9 === workInProgressSuspendedReason)) ||
    null !== root.cancelPendingCommit
  )
    return (
      null !== pingedLanes &&
        null !== pingedLanes &&
        cancelCallback$1(pingedLanes),
      (root.callbackNode = null),
      (root.callbackPriority = 0)
    );
  if (
    0 === (suspendedLanes & 3) ||
    checkIfRootIsPrerendering(root, suspendedLanes)
  ) {
    currentTime = suspendedLanes & -suspendedLanes;
    if (currentTime === root.callbackPriority) return currentTime;
    null !== pingedLanes && cancelCallback$1(pingedLanes);
    switch (lanesToEventPriority(suspendedLanes)) {
      case 2:
      case 8:
        suspendedLanes = UserBlockingPriority;
        break;
      case 32:
        suspendedLanes = NormalPriority$1;
        break;
      case 268435456:
        suspendedLanes = IdlePriority;
        break;
      default:
        suspendedLanes = NormalPriority$1;
    }
    pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
    suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
    root.callbackPriority = currentTime;
    root.callbackNode = suspendedLanes;
    return currentTime;
  }
  null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
  root.callbackPriority = 2;
  root.callbackNode = null;
  return 2;
}
function performWorkOnRootViaSchedulerTask(root, didTimeout) {
  if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
    return (root.callbackNode = null), (root.callbackPriority = 0), null;
  var originalCallbackNode = root.callbackNode;
  if (flushPendingEffects() && root.callbackNode !== originalCallbackNode)
    return null;
  var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
  workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
  );
  if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
  performWorkOnRoot(root, workInProgressRootRenderLanes$jscomp$0, didTimeout);
  scheduleTaskForRootDuringMicrotask(root, now());
  return null != root.callbackNode && root.callbackNode === originalCallbackNode
    ? performWorkOnRootViaSchedulerTask.bind(null, root)
    : null;
}
function performSyncWorkOnRoot(root, lanes) {
  if (flushPendingEffects()) return null;
  performWorkOnRoot(root, lanes, !0);
}
function scheduleImmediateRootScheduleTask() {
  scheduleMicrotask(function () {
    0 !== (executionContext & 6)
      ? scheduleCallback$3(
          ImmediatePriority,
          processRootScheduleInImmediateTask
        )
      : processRootScheduleInMicrotask();
  });
}
function requestTransitionLane() {
  if (0 === currentEventTransitionLane) {
    var actionScopeLane = currentEntangledLane;
    0 === actionScopeLane &&
      ((actionScopeLane = nextTransitionUpdateLane),
      (nextTransitionUpdateLane <<= 1),
      0 === (nextTransitionUpdateLane & 261888) &&
        (nextTransitionUpdateLane = 256));
    currentEventTransitionLane = actionScopeLane;
  }
  return currentEventTransitionLane;
}
function coerceFormActionProp(actionProp) {
  return null == actionProp ||
    "symbol" === typeof actionProp ||
    "boolean" === typeof actionProp
    ? null
    : "function" === typeof actionProp
      ? actionProp
      : sanitizeURL("" + actionProp);
}
function createFormDataWithSubmitter(form, submitter) {
  var temp = submitter.ownerDocument.createElement("input");
  temp.name = submitter.name;
  temp.value = submitter.value;
  form.id && temp.setAttribute("form", form.id);
  submitter.parentNode.insertBefore(temp, submitter);
  form = new FormData(form);
  temp.parentNode.removeChild(temp);
  return form;
}
function extractEvents$1(
  dispatchQueue,
  domEventName,
  maybeTargetInst,
  nativeEvent,
  nativeEventTarget
) {
  if (
    "submit" === domEventName &&
    maybeTargetInst &&
    maybeTargetInst.stateNode === nativeEventTarget
  ) {
    var action = coerceFormActionProp(
        (nativeEventTarget[internalPropsKey] || null).action
      ),
      submitter = nativeEvent.submitter;
    submitter &&
      ((domEventName = (domEventName = submitter[internalPropsKey] || null)
        ? coerceFormActionProp(domEventName.formAction)
        : submitter.getAttribute("formAction")),
      null !== domEventName && ((action = domEventName), (submitter = null)));
    var event = new SyntheticEvent(
      "action",
      "action",
      null,
      nativeEvent,
      nativeEventTarget
    );
    dispatchQueue.push({
      event: event,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (nativeEvent.defaultPrevented) {
              if (0 !== currentEventTransitionLane) {
                var formData = submitter
                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
                  : new FormData(nativeEventTarget);
                startHostTransition(
                  maybeTargetInst,
                  {
                    pending: !0,
                    data: formData,
                    method: nativeEventTarget.method,
                    action: action
                  },
                  null,
                  formData
                );
              }
            } else
              "function" === typeof action &&
                (event.preventDefault(),
                (formData = submitter
                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
                  : new FormData(nativeEventTarget)),
                startHostTransition(
                  maybeTargetInst,
                  {
                    pending: !0,
                    data: formData,
                    method: nativeEventTarget.method,
                    action: action
                  },
                  action,
                  formData
                ));
          },
          currentTarget: nativeEventTarget
        }
      ]
    });
  }
}
for (
  var i$jscomp$inline_1577 = 0;
  i$jscomp$inline_1577 < simpleEventPluginEvents.length;
  i$jscomp$inline_1577++
) {
  var eventName$jscomp$inline_1578 =
      simpleEventPluginEvents[i$jscomp$inline_1577],
    domEventName$jscomp$inline_1579 =
      eventName$jscomp$inline_1578.toLowerCase(),
    capitalizedEvent$jscomp$inline_1580 =
      eventName$jscomp$inline_1578[0].toUpperCase() +
      eventName$jscomp$inline_1578.slice(1);
  registerSimpleEvent(
    domEventName$jscomp$inline_1579,
    "on" + capitalizedEvent$jscomp$inline_1580
  );
}
registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
registerSimpleEvent(ANIMATION_START, "onAnimationStart");
registerSimpleEvent("dblclick", "onDoubleClick");
registerSimpleEvent("focusin", "onFocus");
registerSimpleEvent("focusout", "onBlur");
registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
registerSimpleEvent(TRANSITION_START, "onTransitionStart");
registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
registerTwoPhaseEvent(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
registerTwoPhaseEvent(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
registerTwoPhaseEvent("onBeforeInput", [
  "compositionend",
  "keypress",
  "textInput",
  "paste"
]);
registerTwoPhaseEvent(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mediaEventTypes =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  nonDelegatedEvents = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle"
      .split(" ")
      .concat(mediaEventTypes)
  );
function processDispatchQueue(dispatchQueue, eventSystemFlags) {
  eventSystemFlags = 0 !== (eventSystemFlags & 4);
  for (var i = 0; i < dispatchQueue.length; i++) {
    var _dispatchQueue$i = dispatchQueue[i],
      event = _dispatchQueue$i.event;
    _dispatchQueue$i = _dispatchQueue$i.listeners;
    a: {
      var previousInstance = void 0;
      if (eventSystemFlags)
        for (
          var i$jscomp$0 = _dispatchQueue$i.length - 1;
          0 <= i$jscomp$0;
          i$jscomp$0--
        ) {
          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0],
            instance = _dispatchListeners$i.instance,
            currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          previousInstance = _dispatchListeners$i;
          event.currentTarget = currentTarget;
          try {
            previousInstance(event);
          } catch (error) {
            reportGlobalError(error);
          }
          event.currentTarget = null;
          previousInstance = instance;
        }
      else
        for (
          i$jscomp$0 = 0;
          i$jscomp$0 < _dispatchQueue$i.length;
          i$jscomp$0++
        ) {
          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
          instance = _dispatchListeners$i.instance;
          currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          previousInstance = _dispatchListeners$i;
          event.currentTarget = currentTarget;
          try {
            previousInstance(event);
          } catch (error) {
            reportGlobalError(error);
          }
          event.currentTarget = null;
          previousInstance = instance;
        }
    }
  }
}
function listenToNonDelegatedEvent(domEventName, targetElement) {
  var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
  void 0 === JSCompiler_inline_result &&
    (JSCompiler_inline_result = targetElement[internalEventHandlersKey] =
      new Set());
  var listenerSetKey = domEventName + "__bubble";
  JSCompiler_inline_result.has(listenerSetKey) ||
    (addTrappedEventListener(targetElement, domEventName, 2, !1),
    JSCompiler_inline_result.add(listenerSetKey));
}
function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
  var eventSystemFlags = 0;
  isCapturePhaseListener && (eventSystemFlags |= 4);
  addTrappedEventListener(
    target,
    domEventName,
    eventSystemFlags,
    isCapturePhaseListener
  );
}
var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
function listenToAllSupportedEvents(rootContainerElement) {
  if (!rootContainerElement[listeningMarker]) {
    rootContainerElement[listeningMarker] = !0;
    allNativeEvents.forEach(function (domEventName) {
      "selectionchange" !== domEventName &&
        (nonDelegatedEvents.has(domEventName) ||
          listenToNativeEvent(domEventName, !1, rootContainerElement),
        listenToNativeEvent(domEventName, !0, rootContainerElement));
    });
    var ownerDocument =
      9 === rootContainerElement.nodeType
        ? rootContainerElement
        : rootContainerElement.ownerDocument;
    null === ownerDocument ||
      ownerDocument[listeningMarker] ||
      ((ownerDocument[listeningMarker] = !0),
      listenToNativeEvent("selectionchange", !1, ownerDocument));
  }
}
function addTrappedEventListener(
  targetContainer,
  domEventName,
  eventSystemFlags,
  isCapturePhaseListener
) {
  switch (getEventPriority(domEventName)) {
    case 2:
      var listenerWrapper = dispatchDiscreteEvent;
      break;
    case 8:
      listenerWrapper = dispatchContinuousEvent;
      break;
    default:
      listenerWrapper = dispatchEvent;
  }
  eventSystemFlags = listenerWrapper.bind(
    null,
    domEventName,
    eventSystemFlags,
    targetContainer
  );
  listenerWrapper = void 0;
  !passiveBrowserEventsSupported ||
    ("touchstart" !== domEventName &&
      "touchmove" !== domEventName &&
      "wheel" !== domEventName) ||
    (listenerWrapper = !0);
  isCapturePhaseListener
    ? void 0 !== listenerWrapper
      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
          capture: !0,
          passive: listenerWrapper
        })
      : targetContainer.addEventListener(domEventName, eventSystemFlags, !0)
    : void 0 !== listenerWrapper
      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
          passive: listenerWrapper
        })
      : targetContainer.addEventListener(domEventName, eventSystemFlags, !1);
}
function dispatchEventForPluginEventSystem(
  domEventName,
  eventSystemFlags,
  nativeEvent,
  targetInst$jscomp$0,
  targetContainer
) {
  var ancestorInst = targetInst$jscomp$0;
  if (
    0 === (eventSystemFlags & 1) &&
    0 === (eventSystemFlags & 2) &&
    null !== targetInst$jscomp$0
  )
    a: for (;;) {
      if (null === targetInst$jscomp$0) return;
      var nodeTag = targetInst$jscomp$0.tag;
      if (3 === nodeTag || 4 === nodeTag) {
        var container = targetInst$jscomp$0.stateNode.containerInfo;
        if (container === targetContainer) break;
        if (4 === nodeTag)
          for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
            var grandTag = nodeTag.tag;
            if (
              (3 === grandTag || 4 === grandTag) &&
              nodeTag.stateNode.containerInfo === targetContainer
            )
              return;
            nodeTag = nodeTag.return;
          }
        for (; null !== container; ) {
          nodeTag = getClosestInstanceFromNode(container);
          if (null === nodeTag) return;
          grandTag = nodeTag.tag;
          if (
            5 === grandTag ||
            6 === grandTag ||
            26 === grandTag ||
            27 === grandTag
          ) {
            targetInst$jscomp$0 = ancestorInst = nodeTag;
            continue a;
          }
          container = container.parentNode;
        }
      }
      targetInst$jscomp$0 = targetInst$jscomp$0.return;
    }
  batchedUpdates$1(function () {
    var targetInst = ancestorInst,
      nativeEventTarget = getEventTarget(nativeEvent),
      dispatchQueue = [];
    a: {
      var reactName = topLevelEventsToReactNames.get(domEventName);
      if (void 0 !== reactName) {
        var SyntheticEventCtor = SyntheticEvent,
          reactEventType = domEventName;
        switch (domEventName) {
          case "keypress":
            if (0 === getEventCharCode(nativeEvent)) break a;
          case "keydown":
          case "keyup":
            SyntheticEventCtor = SyntheticKeyboardEvent;
            break;
          case "focusin":
            reactEventType = "focus";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "focusout":
            reactEventType = "blur";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "beforeblur":
          case "afterblur":
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "click":
            if (2 === nativeEvent.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            SyntheticEventCtor = SyntheticMouseEvent;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            SyntheticEventCtor = SyntheticDragEvent;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            SyntheticEventCtor = SyntheticTouchEvent;
            break;
          case ANIMATION_END:
          case ANIMATION_ITERATION:
          case ANIMATION_START:
            SyntheticEventCtor = SyntheticAnimationEvent;
            break;
          case TRANSITION_END:
            SyntheticEventCtor = SyntheticTransitionEvent;
            break;
          case "scroll":
          case "scrollend":
            SyntheticEventCtor = SyntheticUIEvent;
            break;
          case "wheel":
            SyntheticEventCtor = SyntheticWheelEvent;
            break;
          case "copy":
          case "cut":
          case "paste":
            SyntheticEventCtor = SyntheticClipboardEvent;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            SyntheticEventCtor = SyntheticPointerEvent;
            break;
          case "toggle":
          case "beforetoggle":
            SyntheticEventCtor = SyntheticToggleEvent;
        }
        var inCapturePhase = 0 !== (eventSystemFlags & 4),
          accumulateTargetOnly =
            !inCapturePhase &&
            ("scroll" === domEventName || "scrollend" === domEventName),
          reactEventName = inCapturePhase
            ? null !== reactName
              ? reactName + "Capture"
              : null
            : reactName;
        inCapturePhase = [];
        for (
          var instance = targetInst, lastHostComponent;
          null !== instance;

        ) {
          var _instance = instance;
          lastHostComponent = _instance.stateNode;
          _instance = _instance.tag;
          (5 !== _instance && 26 !== _instance && 27 !== _instance) ||
            null === lastHostComponent ||
            null === reactEventName ||
            ((_instance = getListener(instance, reactEventName)),
            null != _instance &&
              inCapturePhase.push(
                createDispatchListener(instance, _instance, lastHostComponent)
              ));
          if (accumulateTargetOnly) break;
          instance = instance.return;
        }
        0 < inCapturePhase.length &&
          ((reactName = new SyntheticEventCtor(
            reactName,
            reactEventType,
            null,
            nativeEvent,
            nativeEventTarget
          )),
          dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
      }
    }
    if (0 === (eventSystemFlags & 7)) {
      a: {
        reactName =
          "mouseover" === domEventName || "pointerover" === domEventName;
        SyntheticEventCtor =
          "mouseout" === domEventName || "pointerout" === domEventName;
        if (
          reactName &&
          nativeEvent !== currentReplayingEvent &&
          (reactEventType =
            nativeEvent.relatedTarget || nativeEvent.fromElement) &&
          (getClosestInstanceFromNode(reactEventType) ||
            reactEventType[internalContainerInstanceKey])
        )
          break a;
        if (SyntheticEventCtor || reactName) {
          reactName =
            nativeEventTarget.window === nativeEventTarget
              ? nativeEventTarget
              : (reactName = nativeEventTarget.ownerDocument)
                ? reactName.defaultView || reactName.parentWindow
                : window;
          if (SyntheticEventCtor) {
            if (
              ((reactEventType =
                nativeEvent.relatedTarget || nativeEvent.toElement),
              (SyntheticEventCtor = targetInst),
              (reactEventType = reactEventType
                ? getClosestInstanceFromNode(reactEventType)
                : null),
              null !== reactEventType &&
                ((accumulateTargetOnly =
                  getNearestMountedFiber(reactEventType)),
                (inCapturePhase = reactEventType.tag),
                reactEventType !== accumulateTargetOnly ||
                  (5 !== inCapturePhase &&
                    27 !== inCapturePhase &&
                    6 !== inCapturePhase)))
            )
              reactEventType = null;
          } else (SyntheticEventCtor = null), (reactEventType = targetInst);
          if (SyntheticEventCtor !== reactEventType) {
            inCapturePhase = SyntheticMouseEvent;
            _instance = "onMouseLeave";
            reactEventName = "onMouseEnter";
            instance = "mouse";
            if ("pointerout" === domEventName || "pointerover" === domEventName)
              (inCapturePhase = SyntheticPointerEvent),
                (_instance = "onPointerLeave"),
                (reactEventName = "onPointerEnter"),
                (instance = "pointer");
            accumulateTargetOnly =
              null == SyntheticEventCtor
                ? reactName
                : getNodeFromInstance(SyntheticEventCtor);
            lastHostComponent =
              null == reactEventType
                ? reactName
                : getNodeFromInstance(reactEventType);
            reactName = new inCapturePhase(
              _instance,
              instance + "leave",
              SyntheticEventCtor,
              nativeEvent,
              nativeEventTarget
            );
            reactName.target = accumulateTargetOnly;
            reactName.relatedTarget = lastHostComponent;
            _instance = null;
            getClosestInstanceFromNode(nativeEventTarget) === targetInst &&
              ((inCapturePhase = new inCapturePhase(
                reactEventName,
                instance + "enter",
                reactEventType,
                nativeEvent,
                nativeEventTarget
              )),
              (inCapturePhase.target = lastHostComponent),
              (inCapturePhase.relatedTarget = accumulateTargetOnly),
              (_instance = inCapturePhase));
            accumulateTargetOnly = _instance;
            if (SyntheticEventCtor && reactEventType)
              b: {
                inCapturePhase = getParent;
                reactEventName = SyntheticEventCtor;
                instance = reactEventType;
                lastHostComponent = 0;
                for (
                  _instance = reactEventName;
                  _instance;
                  _instance = inCapturePhase(_instance)
                )
                  lastHostComponent++;
                _instance = 0;
                for (var tempB = instance; tempB; tempB = inCapturePhase(tempB))
                  _instance++;
                for (; 0 < lastHostComponent - _instance; )
                  (reactEventName = inCapturePhase(reactEventName)),
                    lastHostComponent--;
                for (; 0 < _instance - lastHostComponent; )
                  (instance = inCapturePhase(instance)), _instance--;
                for (; lastHostComponent--; ) {
                  if (
                    reactEventName === instance ||
                    (null !== instance && reactEventName === instance.alternate)
                  ) {
                    inCapturePhase = reactEventName;
                    break b;
                  }
                  reactEventName = inCapturePhase(reactEventName);
                  instance = inCapturePhase(instance);
                }
                inCapturePhase = null;
              }
            else inCapturePhase = null;
            null !== SyntheticEventCtor &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                reactName,
                SyntheticEventCtor,
                inCapturePhase,
                !1
              );
            null !== reactEventType &&
              null !== accumulateTargetOnly &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                accumulateTargetOnly,
                reactEventType,
                inCapturePhase,
                !0
              );
          }
        }
      }
      a: {
        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
        SyntheticEventCtor =
          reactName.nodeName && reactName.nodeName.toLowerCase();
        if (
          "select" === SyntheticEventCtor ||
          ("input" === SyntheticEventCtor && "file" === reactName.type)
        )
          var getTargetInstFunc = getTargetInstForChangeEvent;
        else if (isTextInputElement(reactName))
          if (isInputEventSupported)
            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
          else {
            getTargetInstFunc = getTargetInstForInputEventPolyfill;
            var handleEventFunc = handleEventsForInputEventPolyfill;
          }
        else
          (SyntheticEventCtor = reactName.nodeName),
            !SyntheticEventCtor ||
            "input" !== SyntheticEventCtor.toLowerCase() ||
            ("checkbox" !== reactName.type && "radio" !== reactName.type)
              ? targetInst &&
                isCustomElement(targetInst.elementType) &&
                (getTargetInstFunc = getTargetInstForChangeEvent)
              : (getTargetInstFunc = getTargetInstForClickEvent);
        if (
          getTargetInstFunc &&
          (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))
        ) {
          createAndAccumulateChangeEvent(
            dispatchQueue,
            getTargetInstFunc,
            nativeEvent,
            nativeEventTarget
          );
          break a;
        }
        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
        "focusout" === domEventName &&
          targetInst &&
          "number" === reactName.type &&
          null != targetInst.memoizedProps.value &&
          setDefaultValue(reactName, "number", reactName.value);
      }
      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
      switch (domEventName) {
        case "focusin":
          if (
            isTextInputElement(handleEventFunc) ||
            "true" === handleEventFunc.contentEditable
          )
            (activeElement = handleEventFunc),
              (activeElementInst = targetInst),
              (lastSelection = null);
          break;
        case "focusout":
          lastSelection = activeElementInst = activeElement = null;
          break;
        case "mousedown":
          mouseDown = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          mouseDown = !1;
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
          break;
        case "selectionchange":
          if (skipSelectionChangeEvent) break;
        case "keydown":
        case "keyup":
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
      }
      var fallbackData;
      if (canUseCompositionEvent)
        b: {
          switch (domEventName) {
            case "compositionstart":
              var eventType = "onCompositionStart";
              break b;
            case "compositionend":
              eventType = "onCompositionEnd";
              break b;
            case "compositionupdate":
              eventType = "onCompositionUpdate";
              break b;
          }
          eventType = void 0;
        }
      else
        isComposing
          ? isFallbackCompositionEnd(domEventName, nativeEvent) &&
            (eventType = "onCompositionEnd")
          : "keydown" === domEventName &&
            229 === nativeEvent.keyCode &&
            (eventType = "onCompositionStart");
      eventType &&
        (useFallbackCompositionData &&
          "ko" !== nativeEvent.locale &&
          (isComposing || "onCompositionStart" !== eventType
            ? "onCompositionEnd" === eventType &&
              isComposing &&
              (fallbackData = getData())
            : ((root = nativeEventTarget),
              (startText = "value" in root ? root.value : root.textContent),
              (isComposing = !0))),
        (handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType)),
        0 < handleEventFunc.length &&
          ((eventType = new SyntheticCompositionEvent(
            eventType,
            domEventName,
            null,
            nativeEvent,
            nativeEventTarget
          )),
          dispatchQueue.push({ event: eventType, listeners: handleEventFunc }),
          fallbackData
            ? (eventType.data = fallbackData)
            : ((fallbackData = getDataFromCustomEvent(nativeEvent)),
              null !== fallbackData && (eventType.data = fallbackData))));
      if (
        (fallbackData = canUseTextInputEvent
          ? getNativeBeforeInputChars(domEventName, nativeEvent)
          : getFallbackBeforeInputChars(domEventName, nativeEvent))
      )
        (eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput")),
          0 < eventType.length &&
            ((handleEventFunc = new SyntheticCompositionEvent(
              "onBeforeInput",
              "beforeinput",
              null,
              nativeEvent,
              nativeEventTarget
            )),
            dispatchQueue.push({
              event: handleEventFunc,
              listeners: eventType
            }),
            (handleEventFunc.data = fallbackData));
      extractEvents$1(
        dispatchQueue,
        domEventName,
        targetInst,
        nativeEvent,
        nativeEventTarget
      );
    }
    processDispatchQueue(dispatchQueue, eventSystemFlags);
  });
}
function createDispatchListener(instance, listener, currentTarget) {
  return {
    instance: instance,
    listener: listener,
    currentTarget: currentTarget
  };
}
function accumulateTwoPhaseListeners(targetFiber, reactName) {
  for (
    var captureName = reactName + "Capture", listeners = [];
    null !== targetFiber;

  ) {
    var _instance2 = targetFiber,
      stateNode = _instance2.stateNode;
    _instance2 = _instance2.tag;
    (5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2) ||
      null === stateNode ||
      ((_instance2 = getListener(targetFiber, captureName)),
      null != _instance2 &&
        listeners.unshift(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ),
      (_instance2 = getListener(targetFiber, reactName)),
      null != _instance2 &&
        listeners.push(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ));
    if (3 === targetFiber.tag) return listeners;
    targetFiber = targetFiber.return;
  }
  return [];
}
function getParent(inst) {
  if (null === inst) return null;
  do inst = inst.return;
  while (inst && 5 !== inst.tag && 27 !== inst.tag);
  return inst ? inst : null;
}
function accumulateEnterLeaveListenersForEvent(
  dispatchQueue,
  event,
  target,
  common,
  inCapturePhase
) {
  for (
    var registrationName = event._reactName, listeners = [];
    null !== target && target !== common;

  ) {
    var _instance3 = target,
      alternate = _instance3.alternate,
      stateNode = _instance3.stateNode;
    _instance3 = _instance3.tag;
    if (null !== alternate && alternate === common) break;
    (5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3) ||
      null === stateNode ||
      ((alternate = stateNode),
      inCapturePhase
        ? ((stateNode = getListener(target, registrationName)),
          null != stateNode &&
            listeners.unshift(
              createDispatchListener(target, stateNode, alternate)
            ))
        : inCapturePhase ||
          ((stateNode = getListener(target, registrationName)),
          null != stateNode &&
            listeners.push(
              createDispatchListener(target, stateNode, alternate)
            )));
    target = target.return;
  }
  0 !== listeners.length &&
    dispatchQueue.push({ event: event, listeners: listeners });
}
var NORMALIZE_NEWLINES_REGEX = /\r\n?/g,
  NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
function normalizeMarkupForTextOrAttribute(markup) {
  return ("string" === typeof markup ? markup : "" + markup)
    .replace(NORMALIZE_NEWLINES_REGEX, "\n")
    .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
}
function checkForUnmatchedText(serverText, clientText) {
  clientText = normalizeMarkupForTextOrAttribute(clientText);
  return normalizeMarkupForTextOrAttribute(serverText) === clientText ? !0 : !1;
}
function setProp(domElement, tag, key, value, props, prevValue) {
  switch (key) {
    case "children":
      "string" === typeof value
        ? "body" === tag ||
          ("textarea" === tag && "" === value) ||
          setTextContent(domElement, value)
        : ("number" === typeof value || "bigint" === typeof value) &&
          "body" !== tag &&
          setTextContent(domElement, "" + value);
      break;
    case "className":
      setValueForKnownAttribute(domElement, "class", value);
      break;
    case "tabIndex":
      setValueForKnownAttribute(domElement, "tabindex", value);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      setValueForKnownAttribute(domElement, key, value);
      break;
    case "style":
      setValueForStyles(domElement, value, prevValue);
      break;
    case "data":
      if ("object" !== tag) {
        setValueForKnownAttribute(domElement, "data", value);
        break;
      }
    case "src":
    case "href":
      if ("" === value && ("a" !== tag || "href" !== key)) {
        domElement.removeAttribute(key);
        break;
      }
      if (
        null == value ||
        "function" === typeof value ||
        "symbol" === typeof value ||
        "boolean" === typeof value
      ) {
        domElement.removeAttribute(key);
        break;
      }
      value = sanitizeURL("" + value);
      domElement.setAttribute(key, value);
      break;
    case "action":
    case "formAction":
      if ("function" === typeof value) {
        domElement.setAttribute(
          key,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        "function" === typeof prevValue &&
          ("formAction" === key
            ? ("input" !== tag &&
                setProp(domElement, tag, "name", props.name, props, null),
              setProp(
                domElement,
                tag,
                "formEncType",
                props.formEncType,
                props,
                null
              ),
              setProp(
                domElement,
                tag,
                "formMethod",
                props.formMethod,
                props,
                null
              ),
              setProp(
                domElement,
                tag,
                "formTarget",
                props.formTarget,
                props,
                null
              ))
            : (setProp(domElement, tag, "encType", props.encType, props, null),
              setProp(domElement, tag, "method", props.method, props, null),
              setProp(domElement, tag, "target", props.target, props, null)));
      if (
        null == value ||
        "symbol" === typeof value ||
        "boolean" === typeof value
      ) {
        domElement.removeAttribute(key);
        break;
      }
      value = sanitizeURL("" + value);
      domElement.setAttribute(key, value);
      break;
    case "onClick":
      null != value && (domElement.onclick = noop$1);
      break;
    case "onScroll":
      null != value && listenToNonDelegatedEvent("scroll", domElement);
      break;
    case "onScrollEnd":
      null != value && listenToNonDelegatedEvent("scrollend", domElement);
      break;
    case "dangerouslySetInnerHTML":
      if (null != value) {
        if ("object" !== typeof value || !("__html" in value))
          throw Error(formatProdErrorMessage(61));
        key = value.__html;
        if (null != key) {
          if (null != props.children) throw Error(formatProdErrorMessage(60));
          domElement.innerHTML = key;
        }
      }
      break;
    case "multiple":
      domElement.multiple =
        value && "function" !== typeof value && "symbol" !== typeof value;
      break;
    case "muted":
      domElement.muted =
        value && "function" !== typeof value && "symbol" !== typeof value;
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (
        null == value ||
        "function" === typeof value ||
        "boolean" === typeof value ||
        "symbol" === typeof value
      ) {
        domElement.removeAttribute("xlink:href");
        break;
      }
      key = sanitizeURL("" + value);
      domElement.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        key
      );
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      null != value && "function" !== typeof value && "symbol" !== typeof value
        ? domElement.setAttribute(key, "" + value)
        : domElement.removeAttribute(key);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      value && "function" !== typeof value && "symbol" !== typeof value
        ? domElement.setAttribute(key, "")
        : domElement.removeAttribute(key);
      break;
    case "capture":
    case "download":
      !0 === value
        ? domElement.setAttribute(key, "")
        : !1 !== value &&
            null != value &&
            "function" !== typeof value &&
            "symbol" !== typeof value
          ? domElement.setAttribute(key, value)
          : domElement.removeAttribute(key);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      null != value &&
      "function" !== typeof value &&
      "symbol" !== typeof value &&
      !isNaN(value) &&
      1 <= value
        ? domElement.setAttribute(key, value)
        : domElement.removeAttribute(key);
      break;
    case "rowSpan":
    case "start":
      null == value ||
      "function" === typeof value ||
      "symbol" === typeof value ||
      isNaN(value)
        ? domElement.removeAttribute(key)
        : domElement.setAttribute(key, value);
      break;
    case "popover":
      listenToNonDelegatedEvent("beforetoggle", domElement);
      listenToNonDelegatedEvent("toggle", domElement);
      setValueForAttribute(domElement, "popover", value);
      break;
    case "xlinkActuate":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:actuate",
        value
      );
      break;
    case "xlinkArcrole":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:arcrole",
        value
      );
      break;
    case "xlinkRole":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:role",
        value
      );
      break;
    case "xlinkShow":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:show",
        value
      );
      break;
    case "xlinkTitle":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:title",
        value
      );
      break;
    case "xlinkType":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:type",
        value
      );
      break;
    case "xmlBase":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:base",
        value
      );
      break;
    case "xmlLang":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:lang",
        value
      );
      break;
    case "xmlSpace":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:space",
        value
      );
      break;
    case "is":
      setValueForAttribute(domElement, "is", value);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (
        !(2 < key.length) ||
        ("o" !== key[0] && "O" !== key[0]) ||
        ("n" !== key[1] && "N" !== key[1])
      )
        (key = aliases.get(key) || key),
          setValueForAttribute(domElement, key, value);
  }
}
function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
  switch (key) {
    case "style":
      setValueForStyles(domElement, value, prevValue);
      break;
    case "dangerouslySetInnerHTML":
      if (null != value) {
        if ("object" !== typeof value || !("__html" in value))
          throw Error(formatProdErrorMessage(61));
        key = value.__html;
        if (null != key) {
          if (null != props.children) throw Error(formatProdErrorMessage(60));
          domElement.innerHTML = key;
        }
      }
      break;
    case "children":
      "string" === typeof value
        ? setTextContent(domElement, value)
        : ("number" === typeof value || "bigint" === typeof value) &&
          setTextContent(domElement, "" + value);
      break;
    case "onScroll":
      null != value && listenToNonDelegatedEvent("scroll", domElement);
      break;
    case "onScrollEnd":
      null != value && listenToNonDelegatedEvent("scrollend", domElement);
      break;
    case "onClick":
      null != value && (domElement.onclick = noop$1);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!registrationNameDependencies.hasOwnProperty(key))
        a: {
          if (
            "o" === key[0] &&
            "n" === key[1] &&
            ((props = key.endsWith("Capture")),
            (tag = key.slice(2, props ? key.length - 7 : void 0)),
            (prevValue = domElement[internalPropsKey] || null),
            (prevValue = null != prevValue ? prevValue[key] : null),
            "function" === typeof prevValue &&
              domElement.removeEventListener(tag, prevValue, props),
            "function" === typeof value)
          ) {
            "function" !== typeof prevValue &&
              null !== prevValue &&
              (key in domElement
                ? (domElement[key] = null)
                : domElement.hasAttribute(key) &&
                  domElement.removeAttribute(key));
            domElement.addEventListener(tag, value, props);
            break a;
          }
          key in domElement
            ? (domElement[key] = value)
            : !0 === value
              ? domElement.setAttribute(key, "")
              : setValueForAttribute(domElement, key, value);
        }
  }
}
function setInitialProperties(domElement, tag, props) {
  switch (tag) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      listenToNonDelegatedEvent("error", domElement);
      listenToNonDelegatedEvent("load", domElement);
      var hasSrc = !1,
        hasSrcSet = !1,
        propKey;
      for (propKey in props)
        if (props.hasOwnProperty(propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "src":
                hasSrc = !0;
                break;
              case "srcSet":
                hasSrcSet = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(formatProdErrorMessage(137, tag));
              default:
                setProp(domElement, tag, propKey, propValue, props, null);
            }
        }
      hasSrcSet &&
        setProp(domElement, tag, "srcSet", props.srcSet, props, null);
      hasSrc && setProp(domElement, tag, "src", props.src, props, null);
      return;
    case "input":
      listenToNonDelegatedEvent("invalid", domElement);
      var defaultValue = (propKey = propValue = hasSrcSet = null),
        checked = null,
        defaultChecked = null;
      for (hasSrc in props)
        if (props.hasOwnProperty(hasSrc)) {
          var propValue$184 = props[hasSrc];
          if (null != propValue$184)
            switch (hasSrc) {
              case "name":
                hasSrcSet = propValue$184;
                break;
              case "type":
                propValue = propValue$184;
                break;
              case "checked":
                checked = propValue$184;
                break;
              case "defaultChecked":
                defaultChecked = propValue$184;
                break;
              case "value":
                propKey = propValue$184;
                break;
              case "defaultValue":
                defaultValue = propValue$184;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (null != propValue$184)
                  throw Error(formatProdErrorMessage(137, tag));
                break;
              default:
                setProp(domElement, tag, hasSrc, propValue$184, props, null);
            }
        }
      initInput(
        domElement,
        propKey,
        defaultValue,
        checked,
        defaultChecked,
        propValue,
        hasSrcSet,
        !1
      );
      return;
    case "select":
      listenToNonDelegatedEvent("invalid", domElement);
      hasSrc = propValue = propKey = null;
      for (hasSrcSet in props)
        if (
          props.hasOwnProperty(hasSrcSet) &&
          ((defaultValue = props[hasSrcSet]), null != defaultValue)
        )
          switch (hasSrcSet) {
            case "value":
              propKey = defaultValue;
              break;
            case "defaultValue":
              propValue = defaultValue;
              break;
            case "multiple":
              hasSrc = defaultValue;
            default:
              setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
          }
      tag = propKey;
      props = propValue;
      domElement.multiple = !!hasSrc;
      null != tag
        ? updateOptions(domElement, !!hasSrc, tag, !1)
        : null != props && updateOptions(domElement, !!hasSrc, props, !0);
      return;
    case "textarea":
      listenToNonDelegatedEvent("invalid", domElement);
      propKey = hasSrcSet = hasSrc = null;
      for (propValue in props)
        if (
          props.hasOwnProperty(propValue) &&
          ((defaultValue = props[propValue]), null != defaultValue)
        )
          switch (propValue) {
            case "value":
              hasSrc = defaultValue;
              break;
            case "defaultValue":
              hasSrcSet = defaultValue;
              break;
            case "children":
              propKey = defaultValue;
              break;
            case "dangerouslySetInnerHTML":
              if (null != defaultValue) throw Error(formatProdErrorMessage(91));
              break;
            default:
              setProp(domElement, tag, propValue, defaultValue, props, null);
          }
      initTextarea(domElement, hasSrc, hasSrcSet, propKey);
      return;
    case "option":
      for (checked in props)
        if (
          props.hasOwnProperty(checked) &&
          ((hasSrc = props[checked]), null != hasSrc)
        )
          switch (checked) {
            case "selected":
              domElement.selected =
                hasSrc &&
                "function" !== typeof hasSrc &&
                "symbol" !== typeof hasSrc;
              break;
            default:
              setProp(domElement, tag, checked, hasSrc, props, null);
          }
      return;
    case "dialog":
      listenToNonDelegatedEvent("beforetoggle", domElement);
      listenToNonDelegatedEvent("toggle", domElement);
      listenToNonDelegatedEvent("cancel", domElement);
      listenToNonDelegatedEvent("close", domElement);
      break;
    case "iframe":
    case "object":
      listenToNonDelegatedEvent("load", domElement);
      break;
    case "video":
    case "audio":
      for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
        listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
      break;
    case "image":
      listenToNonDelegatedEvent("error", domElement);
      listenToNonDelegatedEvent("load", domElement);
      break;
    case "details":
      listenToNonDelegatedEvent("toggle", domElement);
      break;
    case "embed":
    case "source":
    case "link":
      listenToNonDelegatedEvent("error", domElement),
        listenToNonDelegatedEvent("load", domElement);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (defaultChecked in props)
        if (
          props.hasOwnProperty(defaultChecked) &&
          ((hasSrc = props[defaultChecked]), null != hasSrc)
        )
          switch (defaultChecked) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(formatProdErrorMessage(137, tag));
            default:
              setProp(domElement, tag, defaultChecked, hasSrc, props, null);
          }
      return;
    default:
      if (isCustomElement(tag)) {
        for (propValue$184 in props)
          props.hasOwnProperty(propValue$184) &&
            ((hasSrc = props[propValue$184]),
            void 0 !== hasSrc &&
              setPropOnCustomElement(
                domElement,
                tag,
                propValue$184,
                hasSrc,
                props,
                void 0
              ));
        return;
      }
  }
  for (defaultValue in props)
    props.hasOwnProperty(defaultValue) &&
      ((hasSrc = props[defaultValue]),
      null != hasSrc &&
        setProp(domElement, tag, defaultValue, hasSrc, props, null));
}
function updateProperties(domElement, tag, lastProps, nextProps) {
  switch (tag) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var name = null,
        type = null,
        value = null,
        defaultValue = null,
        lastDefaultValue = null,
        checked = null,
        defaultChecked = null;
      for (propKey in lastProps) {
        var lastProp = lastProps[propKey];
        if (lastProps.hasOwnProperty(propKey) && null != lastProp)
          switch (propKey) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              lastDefaultValue = lastProp;
            default:
              nextProps.hasOwnProperty(propKey) ||
                setProp(domElement, tag, propKey, null, nextProps, lastProp);
          }
      }
      for (var propKey$201 in nextProps) {
        var propKey = nextProps[propKey$201];
        lastProp = lastProps[propKey$201];
        if (
          nextProps.hasOwnProperty(propKey$201) &&
          (null != propKey || null != lastProp)
        )
          switch (propKey$201) {
            case "type":
              type = propKey;
              break;
            case "name":
              name = propKey;
              break;
            case "checked":
              checked = propKey;
              break;
            case "defaultChecked":
              defaultChecked = propKey;
              break;
            case "value":
              value = propKey;
              break;
            case "defaultValue":
              defaultValue = propKey;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != propKey)
                throw Error(formatProdErrorMessage(137, tag));
              break;
            default:
              propKey !== lastProp &&
                setProp(
                  domElement,
                  tag,
                  propKey$201,
                  propKey,
                  nextProps,
                  lastProp
                );
          }
      }
      updateInput(
        domElement,
        value,
        defaultValue,
        lastDefaultValue,
        checked,
        defaultChecked,
        type,
        name
      );
      return;
    case "select":
      propKey = value = defaultValue = propKey$201 = null;
      for (type in lastProps)
        if (
          ((lastDefaultValue = lastProps[type]),
          lastProps.hasOwnProperty(type) && null != lastDefaultValue)
        )
          switch (type) {
            case "value":
              break;
            case "multiple":
              propKey = lastDefaultValue;
            default:
              nextProps.hasOwnProperty(type) ||
                setProp(
                  domElement,
                  tag,
                  type,
                  null,
                  nextProps,
                  lastDefaultValue
                );
          }
      for (name in nextProps)
        if (
          ((type = nextProps[name]),
          (lastDefaultValue = lastProps[name]),
          nextProps.hasOwnProperty(name) &&
            (null != type || null != lastDefaultValue))
        )
          switch (name) {
            case "value":
              propKey$201 = type;
              break;
            case "defaultValue":
              defaultValue = type;
              break;
            case "multiple":
              value = type;
            default:
              type !== lastDefaultValue &&
                setProp(
                  domElement,
                  tag,
                  name,
                  type,
                  nextProps,
                  lastDefaultValue
                );
          }
      tag = defaultValue;
      lastProps = value;
      nextProps = propKey;
      null != propKey$201
        ? updateOptions(domElement, !!lastProps, propKey$201, !1)
        : !!nextProps !== !!lastProps &&
          (null != tag
            ? updateOptions(domElement, !!lastProps, tag, !0)
            : updateOptions(domElement, !!lastProps, lastProps ? [] : "", !1));
      return;
    case "textarea":
      propKey = propKey$201 = null;
      for (defaultValue in lastProps)
        if (
          ((name = lastProps[defaultValue]),
          lastProps.hasOwnProperty(defaultValue) &&
            null != name &&
            !nextProps.hasOwnProperty(defaultValue))
        )
          switch (defaultValue) {
            case "value":
              break;
            case "children":
              break;
            default:
              setProp(domElement, tag, defaultValue, null, nextProps, name);
          }
      for (value in nextProps)
        if (
          ((name = nextProps[value]),
          (type = lastProps[value]),
          nextProps.hasOwnProperty(value) && (null != name || null != type))
        )
          switch (value) {
            case "value":
              propKey$201 = name;
              break;
            case "defaultValue":
              propKey = name;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (null != name) throw Error(formatProdErrorMessage(91));
              break;
            default:
              name !== type &&
                setProp(domElement, tag, value, name, nextProps, type);
          }
      updateTextarea(domElement, propKey$201, propKey);
      return;
    case "option":
      for (var propKey$217 in lastProps)
        if (
          ((propKey$201 = lastProps[propKey$217]),
          lastProps.hasOwnProperty(propKey$217) &&
            null != propKey$201 &&
            !nextProps.hasOwnProperty(propKey$217))
        )
          switch (propKey$217) {
            case "selected":
              domElement.selected = !1;
              break;
            default:
              setProp(
                domElement,
                tag,
                propKey$217,
                null,
                nextProps,
                propKey$201
              );
          }
      for (lastDefaultValue in nextProps)
        if (
          ((propKey$201 = nextProps[lastDefaultValue]),
          (propKey = lastProps[lastDefaultValue]),
          nextProps.hasOwnProperty(lastDefaultValue) &&
            propKey$201 !== propKey &&
            (null != propKey$201 || null != propKey))
        )
          switch (lastDefaultValue) {
            case "selected":
              domElement.selected =
                propKey$201 &&
                "function" !== typeof propKey$201 &&
                "symbol" !== typeof propKey$201;
              break;
            default:
              setProp(
                domElement,
                tag,
                lastDefaultValue,
                propKey$201,
                nextProps,
                propKey
              );
          }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var propKey$222 in lastProps)
        (propKey$201 = lastProps[propKey$222]),
          lastProps.hasOwnProperty(propKey$222) &&
            null != propKey$201 &&
            !nextProps.hasOwnProperty(propKey$222) &&
            setProp(domElement, tag, propKey$222, null, nextProps, propKey$201);
      for (checked in nextProps)
        if (
          ((propKey$201 = nextProps[checked]),
          (propKey = lastProps[checked]),
          nextProps.hasOwnProperty(checked) &&
            propKey$201 !== propKey &&
            (null != propKey$201 || null != propKey))
        )
          switch (checked) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != propKey$201)
                throw Error(formatProdErrorMessage(137, tag));
              break;
            default:
              setProp(
                domElement,
                tag,
                checked,
                propKey$201,
                nextProps,
                propKey
              );
          }
      return;
    default:
      if (isCustomElement(tag)) {
        for (var propKey$227 in lastProps)
          (propKey$201 = lastProps[propKey$227]),
            lastProps.hasOwnProperty(propKey$227) &&
              void 0 !== propKey$201 &&
              !nextProps.hasOwnProperty(propKey$227) &&
              setPropOnCustomElement(
                domElement,
                tag,
                propKey$227,
                void 0,
                nextProps,
                propKey$201
              );
        for (defaultChecked in nextProps)
          (propKey$201 = nextProps[defaultChecked]),
            (propKey = lastProps[defaultChecked]),
            !nextProps.hasOwnProperty(defaultChecked) ||
              propKey$201 === propKey ||
              (void 0 === propKey$201 && void 0 === propKey) ||
              setPropOnCustomElement(
                domElement,
                tag,
                defaultChecked,
                propKey$201,
                nextProps,
                propKey
              );
        return;
      }
  }
  for (var propKey$232 in lastProps)
    (propKey$201 = lastProps[propKey$232]),
      lastProps.hasOwnProperty(propKey$232) &&
        null != propKey$201 &&
        !nextProps.hasOwnProperty(propKey$232) &&
        setProp(domElement, tag, propKey$232, null, nextProps, propKey$201);
  for (lastProp in nextProps)
    (propKey$201 = nextProps[lastProp]),
      (propKey = lastProps[lastProp]),
      !nextProps.hasOwnProperty(lastProp) ||
        propKey$201 === propKey ||
        (null == propKey$201 && null == propKey) ||
        setProp(domElement, tag, lastProp, propKey$201, nextProps, propKey);
}
function isLikelyStaticResource(initiatorType) {
  switch (initiatorType) {
    case "css":
    case "script":
    case "font":
    case "img":
    case "image":
    case "input":
    case "link":
      return !0;
    default:
      return !1;
  }
}
function estimateBandwidth() {
  if ("function" === typeof performance.getEntriesByType) {
    for (
      var count = 0,
        bits = 0,
        resourceEntries = performance.getEntriesByType("resource"),
        i = 0;
      i < resourceEntries.length;
      i++
    ) {
      var entry = resourceEntries[i],
        transferSize = entry.transferSize,
        initiatorType = entry.initiatorType,
        duration = entry.duration;
      if (transferSize && duration && isLikelyStaticResource(initiatorType)) {
        initiatorType = 0;
        duration = entry.responseEnd;
        for (i += 1; i < resourceEntries.length; i++) {
          var overlapEntry = resourceEntries[i],
            overlapStartTime = overlapEntry.startTime;
          if (overlapStartTime > duration) break;
          var overlapTransferSize = overlapEntry.transferSize,
            overlapInitiatorType = overlapEntry.initiatorType;
          overlapTransferSize &&
            isLikelyStaticResource(overlapInitiatorType) &&
            ((overlapEntry = overlapEntry.responseEnd),
            (initiatorType +=
              overlapTransferSize *
              (overlapEntry < duration
                ? 1
                : (duration - overlapStartTime) /
                  (overlapEntry - overlapStartTime))));
        }
        --i;
        bits += (8 * (transferSize + initiatorType)) / (entry.duration / 1e3);
        count++;
        if (10 < count) break;
      }
    }
    if (0 < count) return bits / count / 1e6;
  }
  return navigator.connection &&
    ((count = navigator.connection.downlink), "number" === typeof count)
    ? count
    : 5;
}
var eventsEnabled = null,
  selectionInformation = null;
function getOwnerDocumentFromRootContainer(rootContainerElement) {
  return 9 === rootContainerElement.nodeType
    ? rootContainerElement
    : rootContainerElement.ownerDocument;
}
function getOwnHostContext(namespaceURI) {
  switch (namespaceURI) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function getChildHostContextProd(parentNamespace, type) {
  if (0 === parentNamespace)
    switch (type) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return 1 === parentNamespace && "foreignObject" === type
    ? 0
    : parentNamespace;
}
function shouldSetTextContent(type, props) {
  return (
    "textarea" === type ||
    "noscript" === type ||
    "string" === typeof props.children ||
    "number" === typeof props.children ||
    "bigint" === typeof props.children ||
    ("object" === typeof props.dangerouslySetInnerHTML &&
      null !== props.dangerouslySetInnerHTML &&
      null != props.dangerouslySetInnerHTML.__html)
  );
}
var currentPopstateTransitionEvent = null;
function shouldAttemptEagerTransition() {
  var event = window.event;
  if (event && "popstate" === event.type) {
    if (event === currentPopstateTransitionEvent) return !1;
    currentPopstateTransitionEvent = event;
    return !0;
  }
  currentPopstateTransitionEvent = null;
  return !1;
}
var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0,
  cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0,
  localPromise = "function" === typeof Promise ? Promise : void 0,
  scheduleMicrotask =
    "function" === typeof queueMicrotask
      ? queueMicrotask
      : "undefined" !== typeof localPromise
        ? function (callback) {
            return localPromise
              .resolve(null)
              .then(callback)
              .catch(handleErrorInNextTick);
          }
        : scheduleTimeout;
function handleErrorInNextTick(error) {
  setTimeout(function () {
    throw error;
  });
}
function isSingletonScope(type) {
  return "head" === type;
}
function clearHydrationBoundary(parentInstance, hydrationInstance) {
  var node = hydrationInstance,
    depth = 0;
  do {
    var nextNode = node.nextSibling;
    parentInstance.removeChild(node);
    if (nextNode && 8 === nextNode.nodeType)
      if (((node = nextNode.data), "/$" === node || "/&" === node)) {
        if (0 === depth) {
          parentInstance.removeChild(nextNode);
          retryIfBlockedOn(hydrationInstance);
          return;
        }
        depth--;
      } else if (
        "$" === node ||
        "$?" === node ||
        "$~" === node ||
        "$!" === node ||
        "&" === node
      )
        depth++;
      else if ("html" === node)
        releaseSingletonInstance(parentInstance.ownerDocument.documentElement);
      else if ("head" === node) {
        node = parentInstance.ownerDocument.head;
        releaseSingletonInstance(node);
        for (var node$jscomp$0 = node.firstChild; node$jscomp$0; ) {
          var nextNode$jscomp$0 = node$jscomp$0.nextSibling,
            nodeName = node$jscomp$0.nodeName;
          node$jscomp$0[internalHoistableMarker] ||
            "SCRIPT" === nodeName ||
            "STYLE" === nodeName ||
            ("LINK" === nodeName &&
              "stylesheet" === node$jscomp$0.rel.toLowerCase()) ||
            node.removeChild(node$jscomp$0);
          node$jscomp$0 = nextNode$jscomp$0;
        }
      } else
        "body" === node &&
          releaseSingletonInstance(parentInstance.ownerDocument.body);
    node = nextNode;
  } while (node);
  retryIfBlockedOn(hydrationInstance);
}
function hideOrUnhideDehydratedBoundary(suspenseInstance, isHidden) {
  var node = suspenseInstance;
  suspenseInstance = 0;
  do {
    var nextNode = node.nextSibling;
    1 === node.nodeType
      ? isHidden
        ? ((node._stashedDisplay = node.style.display),
          (node.style.display = "none"))
        : ((node.style.display = node._stashedDisplay || ""),
          "" === node.getAttribute("style") && node.removeAttribute("style"))
      : 3 === node.nodeType &&
        (isHidden
          ? ((node._stashedText = node.nodeValue), (node.nodeValue = ""))
          : (node.nodeValue = node._stashedText || ""));
    if (nextNode && 8 === nextNode.nodeType)
      if (((node = nextNode.data), "/$" === node))
        if (0 === suspenseInstance) break;
        else suspenseInstance--;
      else
        ("$" !== node && "$?" !== node && "$~" !== node && "$!" !== node) ||
          suspenseInstance++;
    node = nextNode;
  } while (node);
}
function clearContainerSparingly(container) {
  var nextNode = container.firstChild;
  nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
  for (; nextNode; ) {
    var node = nextNode;
    nextNode = nextNode.nextSibling;
    switch (node.nodeName) {
      case "HTML":
      case "HEAD":
      case "BODY":
        clearContainerSparingly(node);
        detachDeletedInstance(node);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if ("stylesheet" === node.rel.toLowerCase()) continue;
    }
    container.removeChild(node);
  }
}
function canHydrateInstance(instance, type, props, inRootOrSingleton) {
  for (; 1 === instance.nodeType; ) {
    var anyProps = props;
    if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
      if (
        !inRootOrSingleton &&
        ("INPUT" !== instance.nodeName || "hidden" !== instance.type)
      )
        break;
    } else if (!inRootOrSingleton)
      if ("input" === type && "hidden" === instance.type) {
        var name = null == anyProps.name ? null : "" + anyProps.name;
        if (
          "hidden" === anyProps.type &&
          instance.getAttribute("name") === name
        )
          return instance;
      } else return instance;
    else if (!instance[internalHoistableMarker])
      switch (type) {
        case "meta":
          if (!instance.hasAttribute("itemprop")) break;
          return instance;
        case "link":
          name = instance.getAttribute("rel");
          if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
            break;
          else if (
            name !== anyProps.rel ||
            instance.getAttribute("href") !==
              (null == anyProps.href || "" === anyProps.href
                ? null
                : anyProps.href) ||
            instance.getAttribute("crossorigin") !==
              (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) ||
            instance.getAttribute("title") !==
              (null == anyProps.title ? null : anyProps.title)
          )
            break;
          return instance;
        case "style":
          if (instance.hasAttribute("data-precedence")) break;
          return instance;
        case "script":
          name = instance.getAttribute("src");
          if (
            (name !== (null == anyProps.src ? null : anyProps.src) ||
              instance.getAttribute("type") !==
                (null == anyProps.type ? null : anyProps.type) ||
              instance.getAttribute("crossorigin") !==
                (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) &&
            name &&
            instance.hasAttribute("async") &&
            !instance.hasAttribute("itemprop")
          )
            break;
          return instance;
        default:
          return instance;
      }
    instance = getNextHydratable(instance.nextSibling);
    if (null === instance) break;
  }
  return null;
}
function canHydrateTextInstance(instance, text, inRootOrSingleton) {
  if ("" === text) return null;
  for (; 3 !== instance.nodeType; ) {
    if (
      (1 !== instance.nodeType ||
        "INPUT" !== instance.nodeName ||
        "hidden" !== instance.type) &&
      !inRootOrSingleton
    )
      return null;
    instance = getNextHydratable(instance.nextSibling);
    if (null === instance) return null;
  }
  return instance;
}
function canHydrateHydrationBoundary(instance, inRootOrSingleton) {
  for (; 8 !== instance.nodeType; ) {
    if (
      (1 !== instance.nodeType ||
        "INPUT" !== instance.nodeName ||
        "hidden" !== instance.type) &&
      !inRootOrSingleton
    )
      return null;
    instance = getNextHydratable(instance.nextSibling);
    if (null === instance) return null;
  }
  return instance;
}
function isSuspenseInstancePending(instance) {
  return "$?" === instance.data || "$~" === instance.data;
}
function isSuspenseInstanceFallback(instance) {
  return (
    "$!" === instance.data ||
    ("$?" === instance.data && "loading" !== instance.ownerDocument.readyState)
  );
}
function registerSuspenseInstanceRetry(instance, callback) {
  var ownerDocument = instance.ownerDocument;
  if ("$~" === instance.data) instance._reactRetry = callback;
  else if ("$?" !== instance.data || "loading" !== ownerDocument.readyState)
    callback();
  else {
    var listener = function () {
      callback();
      ownerDocument.removeEventListener("DOMContentLoaded", listener);
    };
    ownerDocument.addEventListener("DOMContentLoaded", listener);
    instance._reactRetry = listener;
  }
}
function getNextHydratable(node) {
  for (; null != node; node = node.nextSibling) {
    var nodeType = node.nodeType;
    if (1 === nodeType || 3 === nodeType) break;
    if (8 === nodeType) {
      nodeType = node.data;
      if (
        "$" === nodeType ||
        "$!" === nodeType ||
        "$?" === nodeType ||
        "$~" === nodeType ||
        "&" === nodeType ||
        "F!" === nodeType ||
        "F" === nodeType
      )
        break;
      if ("/$" === nodeType || "/&" === nodeType) return null;
    }
  }
  return node;
}
var previousHydratableOnEnteringScopedSingleton = null;
function getNextHydratableInstanceAfterHydrationBoundary(hydrationInstance) {
  hydrationInstance = hydrationInstance.nextSibling;
  for (var depth = 0; hydrationInstance; ) {
    if (8 === hydrationInstance.nodeType) {
      var data = hydrationInstance.data;
      if ("/$" === data || "/&" === data) {
        if (0 === depth)
          return getNextHydratable(hydrationInstance.nextSibling);
        depth--;
      } else
        ("$" !== data &&
          "$!" !== data &&
          "$?" !== data &&
          "$~" !== data &&
          "&" !== data) ||
          depth++;
    }
    hydrationInstance = hydrationInstance.nextSibling;
  }
  return null;
}
function getParentHydrationBoundary(targetInstance) {
  targetInstance = targetInstance.previousSibling;
  for (var depth = 0; targetInstance; ) {
    if (8 === targetInstance.nodeType) {
      var data = targetInstance.data;
      if (
        "$" === data ||
        "$!" === data ||
        "$?" === data ||
        "$~" === data ||
        "&" === data
      ) {
        if (0 === depth) return targetInstance;
        depth--;
      } else ("/$" !== data && "/&" !== data) || depth++;
    }
    targetInstance = targetInstance.previousSibling;
  }
  return null;
}
function resolveSingletonInstance(type, props, rootContainerInstance) {
  props = getOwnerDocumentFromRootContainer(rootContainerInstance);
  switch (type) {
    case "html":
      type = props.documentElement;
      if (!type) throw Error(formatProdErrorMessage(452));
      return type;
    case "head":
      type = props.head;
      if (!type) throw Error(formatProdErrorMessage(453));
      return type;
    case "body":
      type = props.body;
      if (!type) throw Error(formatProdErrorMessage(454));
      return type;
    default:
      throw Error(formatProdErrorMessage(451));
  }
}
function releaseSingletonInstance(instance) {
  for (var attributes = instance.attributes; attributes.length; )
    instance.removeAttributeNode(attributes[0]);
  detachDeletedInstance(instance);
}
var preloadPropsMap = new Map(),
  preconnectsSet = new Set();
function getHoistableRoot(container) {
  return "function" === typeof container.getRootNode
    ? container.getRootNode()
    : 9 === container.nodeType
      ? container
      : container.ownerDocument;
}
var previousDispatcher = ReactDOMSharedInternals.d;
ReactDOMSharedInternals.d = {
  f: flushSyncWork,
  r: requestFormReset,
  D: prefetchDNS,
  C: preconnect,
  L: preload,
  m: preloadModule,
  X: preinitScript,
  S: preinitStyle,
  M: preinitModuleScript
};
function flushSyncWork() {
  var previousWasRendering = previousDispatcher.f(),
    wasRendering = flushSyncWork$1();
  return previousWasRendering || wasRendering;
}
function requestFormReset(form) {
  var formInst = getInstanceFromNode(form);
  null !== formInst && 5 === formInst.tag && "form" === formInst.type
    ? requestFormReset$1(formInst)
    : previousDispatcher.r(form);
}
var globalDocument = "undefined" === typeof document ? null : document;
function preconnectAs(rel, href, crossOrigin) {
  var ownerDocument = globalDocument;
  if (ownerDocument && "string" === typeof href && href) {
    var limitedEscapedHref =
      escapeSelectorAttributeValueInsideDoubleQuotes(href);
    limitedEscapedHref =
      'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
    "string" === typeof crossOrigin &&
      (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
    preconnectsSet.has(limitedEscapedHref) ||
      (preconnectsSet.add(limitedEscapedHref),
      (rel = { rel: rel, crossOrigin: crossOrigin, href: href }),
      null === ownerDocument.querySelector(limitedEscapedHref) &&
        ((href = ownerDocument.createElement("link")),
        setInitialProperties(href, "link", rel),
        markNodeAsHoistable(href),
        ownerDocument.head.appendChild(href)));
  }
}
function prefetchDNS(href) {
  previousDispatcher.D(href);
  preconnectAs("dns-prefetch", href, null);
}
function preconnect(href, crossOrigin) {
  previousDispatcher.C(href, crossOrigin);
  preconnectAs("preconnect", href, crossOrigin);
}
function preload(href, as, options) {
  previousDispatcher.L(href, as, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href && as) {
    var preloadSelector =
      'link[rel="preload"][as="' +
      escapeSelectorAttributeValueInsideDoubleQuotes(as) +
      '"]';
    "image" === as
      ? options && options.imageSrcSet
        ? ((preloadSelector +=
            '[imagesrcset="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(
              options.imageSrcSet
            ) +
            '"]'),
          "string" === typeof options.imageSizes &&
            (preloadSelector +=
              '[imagesizes="' +
              escapeSelectorAttributeValueInsideDoubleQuotes(
                options.imageSizes
              ) +
              '"]'))
        : (preloadSelector +=
            '[href="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(href) +
            '"]')
      : (preloadSelector +=
          '[href="' +
          escapeSelectorAttributeValueInsideDoubleQuotes(href) +
          '"]');
    var key = preloadSelector;
    switch (as) {
      case "style":
        key = getStyleKey(href);
        break;
      case "script":
        key = getScriptKey(href);
    }
    preloadPropsMap.has(key) ||
      ((href = assign(
        {
          rel: "preload",
          href:
            "image" === as && options && options.imageSrcSet ? void 0 : href,
          as: as
        },
        options
      )),
      preloadPropsMap.set(key, href),
      null !== ownerDocument.querySelector(preloadSelector) ||
        ("style" === as &&
          ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) ||
        ("script" === as &&
          ownerDocument.querySelector(getScriptSelectorFromKey(key))) ||
        ((as = ownerDocument.createElement("link")),
        setInitialProperties(as, "link", href),
        markNodeAsHoistable(as),
        ownerDocument.head.appendChild(as)));
  }
}
function preloadModule(href, options) {
  previousDispatcher.m(href, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href) {
    var as = options && "string" === typeof options.as ? options.as : "script",
      preloadSelector =
        'link[rel="modulepreload"][as="' +
        escapeSelectorAttributeValueInsideDoubleQuotes(as) +
        '"][href="' +
        escapeSelectorAttributeValueInsideDoubleQuotes(href) +
        '"]',
      key = preloadSelector;
    switch (as) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        key = getScriptKey(href);
    }
    if (
      !preloadPropsMap.has(key) &&
      ((href = assign({ rel: "modulepreload", href: href }, options)),
      preloadPropsMap.set(key, href),
      null === ownerDocument.querySelector(preloadSelector))
    ) {
      switch (as) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
            return;
      }
      as = ownerDocument.createElement("link");
      setInitialProperties(as, "link", href);
      markNodeAsHoistable(as);
      ownerDocument.head.appendChild(as);
    }
  }
}
function preinitStyle(href, precedence, options) {
  previousDispatcher.S(href, precedence, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href) {
    var styles = getResourcesFromRoot(ownerDocument).hoistableStyles,
      key = getStyleKey(href);
    precedence = precedence || "default";
    var resource = styles.get(key);
    if (!resource) {
      var state = { loading: 0, preload: null };
      if (
        (resource = ownerDocument.querySelector(
          getStylesheetSelectorFromKey(key)
        ))
      )
        state.loading = 5;
      else {
        href = assign(
          { rel: "stylesheet", href: href, "data-precedence": precedence },
          options
        );
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForStylesheet(href, options);
        var link = (resource = ownerDocument.createElement("link"));
        markNodeAsHoistable(link);
        setInitialProperties(link, "link", href);
        link._p = new Promise(function (resolve, reject) {
          link.onload = resolve;
          link.onerror = reject;
        });
        link.addEventListener("load", function () {
          state.loading |= 1;
        });
        link.addEventListener("error", function () {
          state.loading |= 2;
        });
        state.loading |= 4;
        insertStylesheet(resource, precedence, ownerDocument);
      }
      resource = {
        type: "stylesheet",
        instance: resource,
        count: 1,
        state: state
      };
      styles.set(key, resource);
    }
  }
}
function preinitScript(src, options) {
  previousDispatcher.X(src, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && src) {
    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
      key = getScriptKey(src),
      resource = scripts.get(key);
    resource ||
      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
      resource ||
        ((src = assign({ src: src, async: !0 }, options)),
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForScript(src, options),
        (resource = ownerDocument.createElement("script")),
        markNodeAsHoistable(resource),
        setInitialProperties(resource, "link", src),
        ownerDocument.head.appendChild(resource)),
      (resource = {
        type: "script",
        instance: resource,
        count: 1,
        state: null
      }),
      scripts.set(key, resource));
  }
}
function preinitModuleScript(src, options) {
  previousDispatcher.M(src, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && src) {
    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
      key = getScriptKey(src),
      resource = scripts.get(key);
    resource ||
      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
      resource ||
        ((src = assign({ src: src, async: !0, type: "module" }, options)),
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForScript(src, options),
        (resource = ownerDocument.createElement("script")),
        markNodeAsHoistable(resource),
        setInitialProperties(resource, "link", src),
        ownerDocument.head.appendChild(resource)),
      (resource = {
        type: "script",
        instance: resource,
        count: 1,
        state: null
      }),
      scripts.set(key, resource));
  }
}
function getResource(type, currentProps, pendingProps, currentResource) {
  var JSCompiler_inline_result = (JSCompiler_inline_result =
    rootInstanceStackCursor.current)
    ? getHoistableRoot(JSCompiler_inline_result)
    : null;
  if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
  switch (type) {
    case "meta":
    case "title":
      return null;
    case "style":
      return "string" === typeof pendingProps.precedence &&
        "string" === typeof pendingProps.href
        ? ((currentProps = getStyleKey(pendingProps.href)),
          (pendingProps = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableStyles),
          (currentResource = pendingProps.get(currentProps)),
          currentResource ||
            ((currentResource = {
              type: "style",
              instance: null,
              count: 0,
              state: null
            }),
            pendingProps.set(currentProps, currentResource)),
          currentResource)
        : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if (
        "stylesheet" === pendingProps.rel &&
        "string" === typeof pendingProps.href &&
        "string" === typeof pendingProps.precedence
      ) {
        type = getStyleKey(pendingProps.href);
        var styles$243 = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableStyles,
          resource$244 = styles$243.get(type);
        resource$244 ||
          ((JSCompiler_inline_result =
            JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result),
          (resource$244 = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }),
          styles$243.set(type, resource$244),
          (styles$243 = JSCompiler_inline_result.querySelector(
            getStylesheetSelectorFromKey(type)
          )) &&
            !styles$243._p &&
            ((resource$244.instance = styles$243),
            (resource$244.state.loading = 5)),
          preloadPropsMap.has(type) ||
            ((pendingProps = {
              rel: "preload",
              as: "style",
              href: pendingProps.href,
              crossOrigin: pendingProps.crossOrigin,
              integrity: pendingProps.integrity,
              media: pendingProps.media,
              hrefLang: pendingProps.hrefLang,
              referrerPolicy: pendingProps.referrerPolicy
            }),
            preloadPropsMap.set(type, pendingProps),
            styles$243 ||
              preloadStylesheet(
                JSCompiler_inline_result,
                type,
                pendingProps,
                resource$244.state
              )));
        if (currentProps && null === currentResource)
          throw Error(formatProdErrorMessage(528, ""));
        return resource$244;
      }
      if (currentProps && null !== currentResource)
        throw Error(formatProdErrorMessage(529, ""));
      return null;
    case "script":
      return (
        (currentProps = pendingProps.async),
        (pendingProps = pendingProps.src),
        "string" === typeof pendingProps &&
        currentProps &&
        "function" !== typeof currentProps &&
        "symbol" !== typeof currentProps
          ? ((currentProps = getScriptKey(pendingProps)),
            (pendingProps = getResourcesFromRoot(
              JSCompiler_inline_result
            ).hoistableScripts),
            (currentResource = pendingProps.get(currentProps)),
            currentResource ||
              ((currentResource = {
                type: "script",
                instance: null,
                count: 0,
                state: null
              }),
              pendingProps.set(currentProps, currentResource)),
            currentResource)
          : { type: "void", instance: null, count: 0, state: null }
      );
    default:
      throw Error(formatProdErrorMessage(444, type));
  }
}
function getStyleKey(href) {
  return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
}
function getStylesheetSelectorFromKey(key) {
  return 'link[rel="stylesheet"][' + key + "]";
}
function stylesheetPropsFromRawProps(rawProps) {
  return assign({}, rawProps, {
    "data-precedence": rawProps.precedence,
    precedence: null
  });
}
function preloadStylesheet(ownerDocument, key, preloadProps, state) {
  ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]")
    ? (state.loading = 1)
    : ((key = ownerDocument.createElement("link")),
      (state.preload = key),
      key.addEventListener("load", function () {
        return (state.loading |= 1);
      }),
      key.addEventListener("error", function () {
        return (state.loading |= 2);
      }),
      setInitialProperties(key, "link", preloadProps),
      markNodeAsHoistable(key),
      ownerDocument.head.appendChild(key));
}
function getScriptKey(src) {
  return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
}
function getScriptSelectorFromKey(key) {
  return "script[async]" + key;
}
function acquireResource(hoistableRoot, resource, props) {
  resource.count++;
  if (null === resource.instance)
    switch (resource.type) {
      case "style":
        var instance = hoistableRoot.querySelector(
          'style[data-href~="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(props.href) +
            '"]'
        );
        if (instance)
          return (
            (resource.instance = instance),
            markNodeAsHoistable(instance),
            instance
          );
        var styleProps = assign({}, props, {
          "data-href": props.href,
          "data-precedence": props.precedence,
          href: null,
          precedence: null
        });
        instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
          "style"
        );
        markNodeAsHoistable(instance);
        setInitialProperties(instance, "style", styleProps);
        insertStylesheet(instance, props.precedence, hoistableRoot);
        return (resource.instance = instance);
      case "stylesheet":
        styleProps = getStyleKey(props.href);
        var instance$249 = hoistableRoot.querySelector(
          getStylesheetSelectorFromKey(styleProps)
        );
        if (instance$249)
          return (
            (resource.state.loading |= 4),
            (resource.instance = instance$249),
            markNodeAsHoistable(instance$249),
            instance$249
          );
        instance = stylesheetPropsFromRawProps(props);
        (styleProps = preloadPropsMap.get(styleProps)) &&
          adoptPreloadPropsForStylesheet(instance, styleProps);
        instance$249 = (
          hoistableRoot.ownerDocument || hoistableRoot
        ).createElement("link");
        markNodeAsHoistable(instance$249);
        var linkInstance = instance$249;
        linkInstance._p = new Promise(function (resolve, reject) {
          linkInstance.onload = resolve;
          linkInstance.onerror = reject;
        });
        setInitialProperties(instance$249, "link", instance);
        resource.state.loading |= 4;
        insertStylesheet(instance$249, props.precedence, hoistableRoot);
        return (resource.instance = instance$249);
      case "script":
        instance$249 = getScriptKey(props.src);
        if (
          (styleProps = hoistableRoot.querySelector(
            getScriptSelectorFromKey(instance$249)
          ))
        )
          return (
            (resource.instance = styleProps),
            markNodeAsHoistable(styleProps),
            styleProps
          );
        instance = props;
        if ((styleProps = preloadPropsMap.get(instance$249)))
          (instance = assign({}, props)),
            adoptPreloadPropsForScript(instance, styleProps);
        hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
        styleProps = hoistableRoot.createElement("script");
        markNodeAsHoistable(styleProps);
        setInitialProperties(styleProps, "link", instance);
        hoistableRoot.head.appendChild(styleProps);
        return (resource.instance = styleProps);
      case "void":
        return null;
      default:
        throw Error(formatProdErrorMessage(443, resource.type));
    }
  else
    "stylesheet" === resource.type &&
      0 === (resource.state.loading & 4) &&
      ((instance = resource.instance),
      (resource.state.loading |= 4),
      insertStylesheet(instance, props.precedence, hoistableRoot));
  return resource.instance;
}
function insertStylesheet(instance, precedence, root) {
  for (
    var nodes = root.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ),
      last = nodes.length ? nodes[nodes.length - 1] : null,
      prior = last,
      i = 0;
    i < nodes.length;
    i++
  ) {
    var node = nodes[i];
    if (node.dataset.precedence === precedence) prior = node;
    else if (prior !== last) break;
  }
  prior
    ? prior.parentNode.insertBefore(instance, prior.nextSibling)
    : ((precedence = 9 === root.nodeType ? root.head : root),
      precedence.insertBefore(instance, precedence.firstChild));
}
function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
  null == stylesheetProps.crossOrigin &&
    (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
  null == stylesheetProps.referrerPolicy &&
    (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
  null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
}
function adoptPreloadPropsForScript(scriptProps, preloadProps) {
  null == scriptProps.crossOrigin &&
    (scriptProps.crossOrigin = preloadProps.crossOrigin);
  null == scriptProps.referrerPolicy &&
    (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
  null == scriptProps.integrity &&
    (scriptProps.integrity = preloadProps.integrity);
}
var tagCaches = null;
function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
  if (null === tagCaches) {
    var cache = new Map();
    var caches = (tagCaches = new Map());
    caches.set(ownerDocument, cache);
  } else
    (caches = tagCaches),
      (cache = caches.get(ownerDocument)),
      cache || ((cache = new Map()), caches.set(ownerDocument, cache));
  if (cache.has(type)) return cache;
  cache.set(type, null);
  ownerDocument = ownerDocument.getElementsByTagName(type);
  for (caches = 0; caches < ownerDocument.length; caches++) {
    var node = ownerDocument[caches];
    if (
      !(
        node[internalHoistableMarker] ||
        node[internalInstanceKey] ||
        ("link" === type && "stylesheet" === node.getAttribute("rel"))
      ) &&
      "http://www.w3.org/2000/svg" !== node.namespaceURI
    ) {
      var nodeKey = node.getAttribute(keyAttribute) || "";
      nodeKey = type + nodeKey;
      var existing = cache.get(nodeKey);
      existing ? existing.push(node) : cache.set(nodeKey, [node]);
    }
  }
  return cache;
}
function mountHoistable(hoistableRoot, type, instance) {
  hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
  hoistableRoot.head.insertBefore(
    instance,
    "title" === type ? hoistableRoot.querySelector("head > title") : null
  );
}
function isHostHoistableType(type, props, hostContext) {
  if (1 === hostContext || null != props.itemProp) return !1;
  switch (type) {
    case "meta":
    case "title":
      return !0;
    case "style":
      if (
        "string" !== typeof props.precedence ||
        "string" !== typeof props.href ||
        "" === props.href
      )
        break;
      return !0;
    case "link":
      if (
        "string" !== typeof props.rel ||
        "string" !== typeof props.href ||
        "" === props.href ||
        props.onLoad ||
        props.onError
      )
        break;
      switch (props.rel) {
        case "stylesheet":
          return (
            (type = props.disabled),
            "string" === typeof props.precedence && null == type
          );
        default:
          return !0;
      }
    case "script":
      if (
        props.async &&
        "function" !== typeof props.async &&
        "symbol" !== typeof props.async &&
        !props.onLoad &&
        !props.onError &&
        props.src &&
        "string" === typeof props.src
      )
        return !0;
  }
  return !1;
}
function preloadResource(resource) {
  return "stylesheet" === resource.type && 0 === (resource.state.loading & 3)
    ? !1
    : !0;
}
function suspendResource(state, hoistableRoot, resource, props) {
  if (
    "stylesheet" === resource.type &&
    ("string" !== typeof props.media ||
      !1 !== matchMedia(props.media).matches) &&
    0 === (resource.state.loading & 4)
  ) {
    if (null === resource.instance) {
      var key = getStyleKey(props.href),
        instance = hoistableRoot.querySelector(
          getStylesheetSelectorFromKey(key)
        );
      if (instance) {
        hoistableRoot = instance._p;
        null !== hoistableRoot &&
          "object" === typeof hoistableRoot &&
          "function" === typeof hoistableRoot.then &&
          (state.count++,
          (state = onUnsuspend.bind(state)),
          hoistableRoot.then(state, state));
        resource.state.loading |= 4;
        resource.instance = instance;
        markNodeAsHoistable(instance);
        return;
      }
      instance = hoistableRoot.ownerDocument || hoistableRoot;
      props = stylesheetPropsFromRawProps(props);
      (key = preloadPropsMap.get(key)) &&
        adoptPreloadPropsForStylesheet(props, key);
      instance = instance.createElement("link");
      markNodeAsHoistable(instance);
      var linkInstance = instance;
      linkInstance._p = new Promise(function (resolve, reject) {
        linkInstance.onload = resolve;
        linkInstance.onerror = reject;
      });
      setInitialProperties(instance, "link", props);
      resource.instance = instance;
    }
    null === state.stylesheets && (state.stylesheets = new Map());
    state.stylesheets.set(resource, hoistableRoot);
    (hoistableRoot = resource.state.preload) &&
      0 === (resource.state.loading & 3) &&
      (state.count++,
      (resource = onUnsuspend.bind(state)),
      hoistableRoot.addEventListener("load", resource),
      hoistableRoot.addEventListener("error", resource));
  }
}
var estimatedBytesWithinLimit = 0;
function waitForCommitToBeReady(state, timeoutOffset) {
  state.stylesheets &&
    0 === state.count &&
    insertSuspendedStylesheets(state, state.stylesheets);
  return 0 < state.count || 0 < state.imgCount
    ? function (commit) {
        var stylesheetTimer = setTimeout(function () {
          state.stylesheets &&
            insertSuspendedStylesheets(state, state.stylesheets);
          if (state.unsuspend) {
            var unsuspend = state.unsuspend;
            state.unsuspend = null;
            unsuspend();
          }
        }, 6e4 + timeoutOffset);
        0 < state.imgBytes &&
          0 === estimatedBytesWithinLimit &&
          (estimatedBytesWithinLimit = 62500 * estimateBandwidth());
        var imgTimer = setTimeout(
          function () {
            state.waitingForImages = !1;
            if (
              0 === state.count &&
              (state.stylesheets &&
                insertSuspendedStylesheets(state, state.stylesheets),
              state.unsuspend)
            ) {
              var unsuspend = state.unsuspend;
              state.unsuspend = null;
              unsuspend();
            }
          },
          (state.imgBytes > estimatedBytesWithinLimit ? 50 : 800) +
            timeoutOffset
        );
        state.unsuspend = commit;
        return function () {
          state.unsuspend = null;
          clearTimeout(stylesheetTimer);
          clearTimeout(imgTimer);
        };
      }
    : null;
}
function onUnsuspend() {
  this.count--;
  if (0 === this.count && (0 === this.imgCount || !this.waitingForImages))
    if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
    else if (this.unsuspend) {
      var unsuspend = this.unsuspend;
      this.unsuspend = null;
      unsuspend();
    }
}
var precedencesByRoot = null;
function insertSuspendedStylesheets(state, resources) {
  state.stylesheets = null;
  null !== state.unsuspend &&
    (state.count++,
    (precedencesByRoot = new Map()),
    resources.forEach(insertStylesheetIntoRoot, state),
    (precedencesByRoot = null),
    onUnsuspend.call(state));
}
function insertStylesheetIntoRoot(root, resource) {
  if (!(resource.state.loading & 4)) {
    var precedences = precedencesByRoot.get(root);
    if (precedences) var last = precedences.get(null);
    else {
      precedences = new Map();
      precedencesByRoot.set(root, precedences);
      for (
        var nodes = root.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ),
          i = 0;
        i < nodes.length;
        i++
      ) {
        var node = nodes[i];
        if (
          "LINK" === node.nodeName ||
          "not all" !== node.getAttribute("media")
        )
          precedences.set(node.dataset.precedence, node), (last = node);
      }
      last && precedences.set(null, last);
    }
    nodes = resource.instance;
    node = nodes.getAttribute("data-precedence");
    i = precedences.get(node) || last;
    i === last && precedences.set(null, nodes);
    precedences.set(node, nodes);
    this.count++;
    last = onUnsuspend.bind(this);
    nodes.addEventListener("load", last);
    nodes.addEventListener("error", last);
    i
      ? i.parentNode.insertBefore(nodes, i.nextSibling)
      : ((root = 9 === root.nodeType ? root.head : root),
        root.insertBefore(nodes, root.firstChild));
    resource.state.loading |= 4;
  }
}
var HostTransitionContext = {
  $$typeof: REACT_CONTEXT_TYPE,
  Provider: null,
  Consumer: null,
  _currentValue: sharedNotPendingObject,
  _currentValue2: sharedNotPendingObject,
  _threadCount: 0
};
function FiberRootNode(
  containerInfo,
  tag,
  hydrate,
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  onDefaultTransitionIndicator,
  formState
) {
  this.tag = 1;
  this.containerInfo = containerInfo;
  this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode =
    this.next =
    this.pendingContext =
    this.context =
    this.cancelPendingCommit =
      null;
  this.callbackPriority = 0;
  this.expirationTimes = createLaneMap(-1);
  this.entangledLanes =
    this.shellSuspendCounter =
    this.errorRecoveryDisabledLanes =
    this.expiredLanes =
    this.warmLanes =
    this.pingedLanes =
    this.suspendedLanes =
    this.pendingLanes =
      0;
  this.entanglements = createLaneMap(0);
  this.hiddenUpdates = createLaneMap(null);
  this.identifierPrefix = identifierPrefix;
  this.onUncaughtError = onUncaughtError;
  this.onCaughtError = onCaughtError;
  this.onRecoverableError = onRecoverableError;
  this.pooledCache = null;
  this.pooledCacheLanes = 0;
  this.formState = formState;
  this.incompleteTransitions = new Map();
}
function createFiberRoot(
  containerInfo,
  tag,
  hydrate,
  initialChildren,
  hydrationCallbacks,
  isStrictMode,
  identifierPrefix,
  formState,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  onDefaultTransitionIndicator
) {
  containerInfo = new FiberRootNode(
    containerInfo,
    tag,
    hydrate,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    onDefaultTransitionIndicator,
    formState
  );
  tag = 1;
  !0 === isStrictMode && (tag |= 24);
  isStrictMode = createFiberImplClass(3, null, null, tag);
  containerInfo.current = isStrictMode;
  isStrictMode.stateNode = containerInfo;
  tag = createCache();
  tag.refCount++;
  containerInfo.pooledCache = tag;
  tag.refCount++;
  isStrictMode.memoizedState = {
    element: initialChildren,
    isDehydrated: hydrate,
    cache: tag
  };
  initializeUpdateQueue(isStrictMode);
  return containerInfo;
}
function getContextForSubtree(parentComponent) {
  if (!parentComponent) return emptyContextObject;
  parentComponent = emptyContextObject;
  return parentComponent;
}
function updateContainerImpl(
  rootFiber,
  lane,
  element,
  container,
  parentComponent,
  callback
) {
  parentComponent = getContextForSubtree(parentComponent);
  null === container.context
    ? (container.context = parentComponent)
    : (container.pendingContext = parentComponent);
  container = createUpdate(lane);
  container.payload = { element: element };
  callback = void 0 === callback ? null : callback;
  null !== callback && (container.callback = callback);
  element = enqueueUpdate(rootFiber, container, lane);
  null !== element &&
    (scheduleUpdateOnFiber(element, rootFiber, lane),
    entangleTransitions(element, rootFiber, lane));
}
function markRetryLaneImpl(fiber, retryLane) {
  fiber = fiber.memoizedState;
  if (null !== fiber && null !== fiber.dehydrated) {
    var a = fiber.retryLane;
    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
  }
}
function markRetryLaneIfNotHydrated(fiber, retryLane) {
  markRetryLaneImpl(fiber, retryLane);
  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
}
function attemptContinuousHydration(fiber) {
  if (13 === fiber.tag || 31 === fiber.tag) {
    var root = enqueueConcurrentRenderForLane(fiber, 67108864);
    null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
    markRetryLaneIfNotHydrated(fiber, 67108864);
  }
}
function attemptHydrationAtCurrentPriority(fiber) {
  if (13 === fiber.tag || 31 === fiber.tag) {
    var lane = requestUpdateLane();
    lane = getBumpedLaneForHydrationByLane(lane);
    var root = enqueueConcurrentRenderForLane(fiber, lane);
    null !== root && scheduleUpdateOnFiber(root, fiber, lane);
    markRetryLaneIfNotHydrated(fiber, lane);
  }
}
var _enabled = !0;
function dispatchDiscreteEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  var prevTransition = ReactSharedInternals.T;
  ReactSharedInternals.T = null;
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    (ReactDOMSharedInternals.p = 2),
      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      (ReactSharedInternals.T = prevTransition);
  }
}
function dispatchContinuousEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  var prevTransition = ReactSharedInternals.T;
  ReactSharedInternals.T = null;
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    (ReactDOMSharedInternals.p = 8),
      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      (ReactSharedInternals.T = prevTransition);
  }
}
function dispatchEvent(
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (_enabled) {
    var blockedOn = findInstanceBlockingEvent(nativeEvent);
    if (null === blockedOn)
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        return_targetInst,
        targetContainer
      ),
        clearIfContinuousEvent(domEventName, nativeEvent);
    else if (
      queueIfContinuousEvent(
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      )
    )
      nativeEvent.stopPropagation();
    else if (
      (clearIfContinuousEvent(domEventName, nativeEvent),
      eventSystemFlags & 4 &&
        -1 < discreteReplayableEvents.indexOf(domEventName))
    ) {
      for (; null !== blockedOn; ) {
        var fiber = getInstanceFromNode(blockedOn);
        if (null !== fiber)
          switch (fiber.tag) {
            case 3:
              fiber = fiber.stateNode;
              if (fiber.current.memoizedState.isDehydrated) {
                var lanes = getHighestPriorityLanes(fiber.pendingLanes);
                if (0 !== lanes) {
                  var root = fiber;
                  root.pendingLanes |= 2;
                  for (root.entangledLanes |= 2; lanes; ) {
                    var lane = 1 << (31 - clz32(lanes));
                    root.entanglements[1] |= lane;
                    lanes &= ~lane;
                  }
                  ensureRootIsScheduled(fiber);
                  0 === (executionContext & 6) &&
                    ((workInProgressRootRenderTargetTime = now() + 500),
                    flushSyncWorkAcrossRoots_impl(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              (root = enqueueConcurrentRenderForLane(fiber, 2)),
                null !== root && scheduleUpdateOnFiber(root, fiber, 2),
                flushSyncWork$1(),
                markRetryLaneIfNotHydrated(fiber, 2);
          }
        fiber = findInstanceBlockingEvent(nativeEvent);
        null === fiber &&
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            return_targetInst,
            targetContainer
          );
        if (fiber === blockedOn) break;
        blockedOn = fiber;
      }
      null !== blockedOn && nativeEvent.stopPropagation();
    } else
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        null,
        targetContainer
      );
  }
}
function findInstanceBlockingEvent(nativeEvent) {
  nativeEvent = getEventTarget(nativeEvent);
  return findInstanceBlockingTarget(nativeEvent);
}
var return_targetInst = null;
function findInstanceBlockingTarget(targetNode) {
  return_targetInst = null;
  targetNode = getClosestInstanceFromNode(targetNode);
  if (null !== targetNode) {
    var nearestMounted = getNearestMountedFiber(targetNode);
    if (null === nearestMounted) targetNode = null;
    else {
      var tag = nearestMounted.tag;
      if (13 === tag) {
        targetNode = getSuspenseInstanceFromFiber(nearestMounted);
        if (null !== targetNode) return targetNode;
        targetNode = null;
      } else if (31 === tag) {
        targetNode = getActivityInstanceFromFiber(nearestMounted);
        if (null !== targetNode) return targetNode;
        targetNode = null;
      } else if (3 === tag) {
        if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
          return 3 === nearestMounted.tag
            ? nearestMounted.stateNode.containerInfo
            : null;
        targetNode = null;
      } else nearestMounted !== targetNode && (targetNode = null);
    }
  }
  return_targetInst = targetNode;
  return null;
}
function getEventPriority(domEventName) {
  switch (domEventName) {
    case "beforetoggle":
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "toggle":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (getCurrentPriorityLevel()) {
        case ImmediatePriority:
          return 2;
        case UserBlockingPriority:
          return 8;
        case NormalPriority$1:
        case LowPriority:
          return 32;
        case IdlePriority:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var hasScheduledReplayAttempt = !1,
  queuedFocus = null,
  queuedDrag = null,
  queuedMouse = null,
  queuedPointers = new Map(),
  queuedPointerCaptures = new Map(),
  queuedExplicitHydrationTargets = [],
  discreteReplayableEvents =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    );
function clearIfContinuousEvent(domEventName, nativeEvent) {
  switch (domEventName) {
    case "focusin":
    case "focusout":
      queuedFocus = null;
      break;
    case "dragenter":
    case "dragleave":
      queuedDrag = null;
      break;
    case "mouseover":
    case "mouseout":
      queuedMouse = null;
      break;
    case "pointerover":
    case "pointerout":
      queuedPointers.delete(nativeEvent.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      queuedPointerCaptures.delete(nativeEvent.pointerId);
  }
}
function accumulateOrCreateContinuousQueuedReplayableEvent(
  existingQueuedEvent,
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (
    null === existingQueuedEvent ||
    existingQueuedEvent.nativeEvent !== nativeEvent
  )
    return (
      (existingQueuedEvent = {
        blockedOn: blockedOn,
        domEventName: domEventName,
        eventSystemFlags: eventSystemFlags,
        nativeEvent: nativeEvent,
        targetContainers: [targetContainer]
      }),
      null !== blockedOn &&
        ((blockedOn = getInstanceFromNode(blockedOn)),
        null !== blockedOn && attemptContinuousHydration(blockedOn)),
      existingQueuedEvent
    );
  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
  blockedOn = existingQueuedEvent.targetContainers;
  null !== targetContainer &&
    -1 === blockedOn.indexOf(targetContainer) &&
    blockedOn.push(targetContainer);
  return existingQueuedEvent;
}
function queueIfContinuousEvent(
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  switch (domEventName) {
    case "focusin":
      return (
        (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedFocus,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "dragenter":
      return (
        (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedDrag,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "mouseover":
      return (
        (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedMouse,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "pointerover":
      var pointerId = nativeEvent.pointerId;
      queuedPointers.set(
        pointerId,
        accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedPointers.get(pointerId) || null,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )
      );
      return !0;
    case "gotpointercapture":
      return (
        (pointerId = nativeEvent.pointerId),
        queuedPointerCaptures.set(
          pointerId,
          accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedPointerCaptures.get(pointerId) || null,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          )
        ),
        !0
      );
  }
  return !1;
}
function attemptExplicitHydrationTarget(queuedTarget) {
  var targetInst = getClosestInstanceFromNode(queuedTarget.target);
  if (null !== targetInst) {
    var nearestMounted = getNearestMountedFiber(targetInst);
    if (null !== nearestMounted)
      if (((targetInst = nearestMounted.tag), 13 === targetInst)) {
        if (
          ((targetInst = getSuspenseInstanceFromFiber(nearestMounted)),
          null !== targetInst)
        ) {
          queuedTarget.blockedOn = targetInst;
          runWithPriority(queuedTarget.priority, function () {
            attemptHydrationAtCurrentPriority(nearestMounted);
          });
          return;
        }
      } else if (31 === targetInst) {
        if (
          ((targetInst = getActivityInstanceFromFiber(nearestMounted)),
          null !== targetInst)
        ) {
          queuedTarget.blockedOn = targetInst;
          runWithPriority(queuedTarget.priority, function () {
            attemptHydrationAtCurrentPriority(nearestMounted);
          });
          return;
        }
      } else if (
        3 === targetInst &&
        nearestMounted.stateNode.current.memoizedState.isDehydrated
      ) {
        queuedTarget.blockedOn =
          3 === nearestMounted.tag
            ? nearestMounted.stateNode.containerInfo
            : null;
        return;
      }
  }
  queuedTarget.blockedOn = null;
}
function attemptReplayContinuousQueuedEvent(queuedEvent) {
  if (null !== queuedEvent.blockedOn) return !1;
  for (
    var targetContainers = queuedEvent.targetContainers;
    0 < targetContainers.length;

  ) {
    var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
    if (null === nextBlockedOn) {
      nextBlockedOn = queuedEvent.nativeEvent;
      var nativeEventClone = new nextBlockedOn.constructor(
        nextBlockedOn.type,
        nextBlockedOn
      );
      currentReplayingEvent = nativeEventClone;
      nextBlockedOn.target.dispatchEvent(nativeEventClone);
      currentReplayingEvent = null;
    } else
      return (
        (targetContainers = getInstanceFromNode(nextBlockedOn)),
        null !== targetContainers &&
          attemptContinuousHydration(targetContainers),
        (queuedEvent.blockedOn = nextBlockedOn),
        !1
      );
    targetContainers.shift();
  }
  return !0;
}
function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
}
function replayUnblockedEvents() {
  hasScheduledReplayAttempt = !1;
  null !== queuedFocus &&
    attemptReplayContinuousQueuedEvent(queuedFocus) &&
    (queuedFocus = null);
  null !== queuedDrag &&
    attemptReplayContinuousQueuedEvent(queuedDrag) &&
    (queuedDrag = null);
  null !== queuedMouse &&
    attemptReplayContinuousQueuedEvent(queuedMouse) &&
    (queuedMouse = null);
  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
}
function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
  queuedEvent.blockedOn === unblocked &&
    ((queuedEvent.blockedOn = null),
    hasScheduledReplayAttempt ||
      ((hasScheduledReplayAttempt = !0),
      Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        replayUnblockedEvents
      )));
}
var lastScheduledReplayQueue = null;
function scheduleReplayQueueIfNeeded(formReplayingQueue) {
  lastScheduledReplayQueue !== formReplayingQueue &&
    ((lastScheduledReplayQueue = formReplayingQueue),
    Scheduler.unstable_scheduleCallback(
      Scheduler.unstable_NormalPriority,
      function () {
        lastScheduledReplayQueue === formReplayingQueue &&
          (lastScheduledReplayQueue = null);
        for (var i = 0; i < formReplayingQueue.length; i += 3) {
          var form = formReplayingQueue[i],
            submitterOrAction = formReplayingQueue[i + 1],
            formData = formReplayingQueue[i + 2];
          if ("function" !== typeof submitterOrAction)
            if (null === findInstanceBlockingTarget(submitterOrAction || form))
              continue;
            else break;
          var formInst = getInstanceFromNode(form);
          null !== formInst &&
            (formReplayingQueue.splice(i, 3),
            (i -= 3),
            startHostTransition(
              formInst,
              {
                pending: !0,
                data: formData,
                method: form.method,
                action: submitterOrAction
              },
              submitterOrAction,
              formData
            ));
        }
      }
    ));
}
function retryIfBlockedOn(unblocked) {
  function unblock(queuedEvent) {
    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
  }
  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
  queuedPointers.forEach(unblock);
  queuedPointerCaptures.forEach(unblock);
  for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
    var queuedTarget = queuedExplicitHydrationTargets[i];
    queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
  }
  for (
    ;
    0 < queuedExplicitHydrationTargets.length &&
    ((i = queuedExplicitHydrationTargets[0]), null === i.blockedOn);

  )
    attemptExplicitHydrationTarget(i),
      null === i.blockedOn && queuedExplicitHydrationTargets.shift();
  i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
  if (null != i)
    for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
      var form = i[queuedTarget],
        submitterOrAction = i[queuedTarget + 1],
        formProps = form[internalPropsKey] || null;
      if ("function" === typeof submitterOrAction)
        formProps || scheduleReplayQueueIfNeeded(i);
      else if (formProps) {
        var action = null;
        if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
          if (
            ((form = submitterOrAction),
            (formProps = submitterOrAction[internalPropsKey] || null))
          )
            action = formProps.formAction;
          else {
            if (null !== findInstanceBlockingTarget(form)) continue;
          }
        else action = formProps.action;
        "function" === typeof action
          ? (i[queuedTarget + 1] = action)
          : (i.splice(queuedTarget, 3), (queuedTarget -= 3));
        scheduleReplayQueueIfNeeded(i);
      }
    }
}
function defaultOnDefaultTransitionIndicator() {
  function handleNavigate(event) {
    event.canIntercept &&
      "react-transition" === event.info &&
      event.intercept({
        handler: function () {
          return new Promise(function (resolve) {
            return (pendingResolve = resolve);
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
  }
  function handleNavigateComplete() {
    null !== pendingResolve && (pendingResolve(), (pendingResolve = null));
    isCancelled || setTimeout(startFakeNavigation, 20);
  }
  function startFakeNavigation() {
    if (!isCancelled && !navigation.transition) {
      var currentEntry = navigation.currentEntry;
      currentEntry &&
        null != currentEntry.url &&
        navigation.navigate(currentEntry.url, {
          state: currentEntry.getState(),
          info: "react-transition",
          history: "replace"
        });
    }
  }
  if ("object" === typeof navigation) {
    var isCancelled = !1,
      pendingResolve = null;
    navigation.addEventListener("navigate", handleNavigate);
    navigation.addEventListener("navigatesuccess", handleNavigateComplete);
    navigation.addEventListener("navigateerror", handleNavigateComplete);
    setTimeout(startFakeNavigation, 100);
    return function () {
      isCancelled = !0;
      navigation.removeEventListener("navigate", handleNavigate);
      navigation.removeEventListener("navigatesuccess", handleNavigateComplete);
      navigation.removeEventListener("navigateerror", handleNavigateComplete);
      null !== pendingResolve && (pendingResolve(), (pendingResolve = null));
    };
  }
}
function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render =
  function (children) {
    var root = this._internalRoot;
    if (null === root) throw Error(formatProdErrorMessage(409));
    var current = root.current,
      lane = requestUpdateLane();
    updateContainerImpl(current, lane, children, root, null, null);
  };
ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount =
  function () {
    var root = this._internalRoot;
    if (null !== root) {
      this._internalRoot = null;
      var container = root.containerInfo;
      updateContainerImpl(root.current, 2, null, root, null, null);
      flushSyncWork$1();
      container[internalContainerInstanceKey] = null;
    }
  };
function ReactDOMHydrationRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function (target) {
  if (target) {
    var updatePriority = resolveUpdatePriority();
    target = { blockedOn: null, target: target, priority: updatePriority };
    for (
      var i = 0;
      i < queuedExplicitHydrationTargets.length &&
      0 !== updatePriority &&
      updatePriority < queuedExplicitHydrationTargets[i].priority;
      i++
    );
    queuedExplicitHydrationTargets.splice(i, 0, target);
    0 === i && attemptExplicitHydrationTarget(target);
  }
};
var isomorphicReactPackageVersion$jscomp$inline_1840 = React.version;
if (
  "19.2.6" !==
  isomorphicReactPackageVersion$jscomp$inline_1840
)
  throw Error(
    formatProdErrorMessage(
      527,
      isomorphicReactPackageVersion$jscomp$inline_1840,
      "19.2.6"
    )
  );
ReactDOMSharedInternals.findDOMNode = function (componentOrElement) {
  var fiber = componentOrElement._reactInternals;
  if (void 0 === fiber) {
    if ("function" === typeof componentOrElement.render)
      throw Error(formatProdErrorMessage(188));
    componentOrElement = Object.keys(componentOrElement).join(",");
    throw Error(formatProdErrorMessage(268, componentOrElement));
  }
  componentOrElement = findCurrentFiberUsingSlowPath(fiber);
  componentOrElement =
    null !== componentOrElement
      ? findCurrentHostFiberImpl(componentOrElement)
      : null;
  componentOrElement =
    null === componentOrElement ? null : componentOrElement.stateNode;
  return componentOrElement;
};
var internals$jscomp$inline_2347 = {
  bundleType: 0,
  version: "19.2.6",
  rendererPackageName: "react-dom",
  currentDispatcherRef: ReactSharedInternals,
  reconcilerVersion: "19.2.6"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var hook$jscomp$inline_2348 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (
    !hook$jscomp$inline_2348.isDisabled &&
    hook$jscomp$inline_2348.supportsFiber
  )
    try {
      (rendererID = hook$jscomp$inline_2348.inject(
        internals$jscomp$inline_2347
      )),
        (injectedHook = hook$jscomp$inline_2348);
    } catch (err) {}
}
exports.createRoot = function (container, options) {
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  var isStrictMode = !1,
    identifierPrefix = "",
    onUncaughtError = defaultOnUncaughtError,
    onCaughtError = defaultOnCaughtError,
    onRecoverableError = defaultOnRecoverableError;
  null !== options &&
    void 0 !== options &&
    (!0 === options.unstable_strictMode && (isStrictMode = !0),
    void 0 !== options.identifierPrefix &&
      (identifierPrefix = options.identifierPrefix),
    void 0 !== options.onUncaughtError &&
      (onUncaughtError = options.onUncaughtError),
    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
    void 0 !== options.onRecoverableError &&
      (onRecoverableError = options.onRecoverableError));
  options = createFiberRoot(
    container,
    1,
    !1,
    null,
    null,
    isStrictMode,
    identifierPrefix,
    null,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    defaultOnDefaultTransitionIndicator
  );
  container[internalContainerInstanceKey] = options.current;
  listenToAllSupportedEvents(container);
  return new ReactDOMRoot(options);
};
__webpack_unused_export__ = function (container, initialChildren, options) {
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  var isStrictMode = !1,
    identifierPrefix = "",
    onUncaughtError = defaultOnUncaughtError,
    onCaughtError = defaultOnCaughtError,
    onRecoverableError = defaultOnRecoverableError,
    formState = null;
  null !== options &&
    void 0 !== options &&
    (!0 === options.unstable_strictMode && (isStrictMode = !0),
    void 0 !== options.identifierPrefix &&
      (identifierPrefix = options.identifierPrefix),
    void 0 !== options.onUncaughtError &&
      (onUncaughtError = options.onUncaughtError),
    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
    void 0 !== options.onRecoverableError &&
      (onRecoverableError = options.onRecoverableError),
    void 0 !== options.formState && (formState = options.formState));
  initialChildren = createFiberRoot(
    container,
    1,
    !0,
    initialChildren,
    null != options ? options : null,
    isStrictMode,
    identifierPrefix,
    formState,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    defaultOnDefaultTransitionIndicator
  );
  initialChildren.context = getContextForSubtree(null);
  options = initialChildren.current;
  isStrictMode = requestUpdateLane();
  isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
  identifierPrefix = createUpdate(isStrictMode);
  identifierPrefix.callback = null;
  enqueueUpdate(options, identifierPrefix, isStrictMode);
  options = isStrictMode;
  initialChildren.current.lanes = options;
  markRootUpdated$1(initialChildren, options);
  ensureRootIsScheduled(initialChildren);
  container[internalContainerInstanceKey] = initialChildren.current;
  listenToAllSupportedEvents(container);
  return new ReactDOMHydrationRoot(initialChildren);
};
__webpack_unused_export__ = "19.2.6";


/***/ }),

/***/ 4477:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  a: for (; 0 < index; ) {
    var parentIndex = (index - 1) >>> 1,
      parent = heap[parentIndex];
    if (0 < compare(parent, node))
      (heap[parentIndex] = node), (heap[index] = parent), (index = parentIndex);
    else break a;
  }
}
function peek(heap) {
  return 0 === heap.length ? null : heap[0];
}
function pop(heap) {
  if (0 === heap.length) return null;
  var first = heap[0],
    last = heap.pop();
  if (last !== first) {
    heap[0] = last;
    a: for (
      var index = 0, length = heap.length, halfLength = length >>> 1;
      index < halfLength;

    ) {
      var leftIndex = 2 * (index + 1) - 1,
        left = heap[leftIndex],
        rightIndex = leftIndex + 1,
        right = heap[rightIndex];
      if (0 > compare(left, last))
        rightIndex < length && 0 > compare(right, left)
          ? ((heap[index] = right),
            (heap[rightIndex] = last),
            (index = rightIndex))
          : ((heap[index] = left),
            (heap[leftIndex] = last),
            (index = leftIndex));
      else if (rightIndex < length && 0 > compare(right, last))
        (heap[index] = right), (heap[rightIndex] = last), (index = rightIndex);
      else break a;
    }
  }
  return first;
}
function compare(a, b) {
  var diff = a.sortIndex - b.sortIndex;
  return 0 !== diff ? diff : a.id - b.id;
}
exports.unstable_now = void 0;
if ("object" === typeof performance && "function" === typeof performance.now) {
  var localPerformance = performance;
  exports.unstable_now = function () {
    return localPerformance.now();
  };
} else {
  var localDate = Date,
    initialTime = localDate.now();
  exports.unstable_now = function () {
    return localDate.now() - initialTime;
  };
}
var taskQueue = [],
  timerQueue = [],
  taskIdCounter = 1,
  currentTask = null,
  currentPriorityLevel = 3,
  isPerformingWork = !1,
  isHostCallbackScheduled = !1,
  isHostTimeoutScheduled = !1,
  needsPaint = !1,
  localSetTimeout = "function" === typeof setTimeout ? setTimeout : null,
  localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null,
  localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
function advanceTimers(currentTime) {
  for (var timer = peek(timerQueue); null !== timer; ) {
    if (null === timer.callback) pop(timerQueue);
    else if (timer.startTime <= currentTime)
      pop(timerQueue),
        (timer.sortIndex = timer.expirationTime),
        push(taskQueue, timer);
    else break;
    timer = peek(timerQueue);
  }
}
function handleTimeout(currentTime) {
  isHostTimeoutScheduled = !1;
  advanceTimers(currentTime);
  if (!isHostCallbackScheduled)
    if (null !== peek(taskQueue))
      (isHostCallbackScheduled = !0),
        isMessageLoopRunning ||
          ((isMessageLoopRunning = !0), schedulePerformWorkUntilDeadline());
    else {
      var firstTimer = peek(timerQueue);
      null !== firstTimer &&
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }
}
var isMessageLoopRunning = !1,
  taskTimeoutID = -1,
  frameInterval = 5,
  startTime = -1;
function shouldYieldToHost() {
  return needsPaint
    ? !0
    : exports.unstable_now() - startTime < frameInterval
      ? !1
      : !0;
}
function performWorkUntilDeadline() {
  needsPaint = !1;
  if (isMessageLoopRunning) {
    var currentTime = exports.unstable_now();
    startTime = currentTime;
    var hasMoreWork = !0;
    try {
      a: {
        isHostCallbackScheduled = !1;
        isHostTimeoutScheduled &&
          ((isHostTimeoutScheduled = !1),
          localClearTimeout(taskTimeoutID),
          (taskTimeoutID = -1));
        isPerformingWork = !0;
        var previousPriorityLevel = currentPriorityLevel;
        try {
          b: {
            advanceTimers(currentTime);
            for (
              currentTask = peek(taskQueue);
              null !== currentTask &&
              !(
                currentTask.expirationTime > currentTime && shouldYieldToHost()
              );

            ) {
              var callback = currentTask.callback;
              if ("function" === typeof callback) {
                currentTask.callback = null;
                currentPriorityLevel = currentTask.priorityLevel;
                var continuationCallback = callback(
                  currentTask.expirationTime <= currentTime
                );
                currentTime = exports.unstable_now();
                if ("function" === typeof continuationCallback) {
                  currentTask.callback = continuationCallback;
                  advanceTimers(currentTime);
                  hasMoreWork = !0;
                  break b;
                }
                currentTask === peek(taskQueue) && pop(taskQueue);
                advanceTimers(currentTime);
              } else pop(taskQueue);
              currentTask = peek(taskQueue);
            }
            if (null !== currentTask) hasMoreWork = !0;
            else {
              var firstTimer = peek(timerQueue);
              null !== firstTimer &&
                requestHostTimeout(
                  handleTimeout,
                  firstTimer.startTime - currentTime
                );
              hasMoreWork = !1;
            }
          }
          break a;
        } finally {
          (currentTask = null),
            (currentPriorityLevel = previousPriorityLevel),
            (isPerformingWork = !1);
        }
        hasMoreWork = void 0;
      }
    } finally {
      hasMoreWork
        ? schedulePerformWorkUntilDeadline()
        : (isMessageLoopRunning = !1);
    }
  }
}
var schedulePerformWorkUntilDeadline;
if ("function" === typeof localSetImmediate)
  schedulePerformWorkUntilDeadline = function () {
    localSetImmediate(performWorkUntilDeadline);
  };
else if ("undefined" !== typeof MessageChannel) {
  var channel = new MessageChannel(),
    port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;
  schedulePerformWorkUntilDeadline = function () {
    port.postMessage(null);
  };
} else
  schedulePerformWorkUntilDeadline = function () {
    localSetTimeout(performWorkUntilDeadline, 0);
  };
function requestHostTimeout(callback, ms) {
  taskTimeoutID = localSetTimeout(function () {
    callback(exports.unstable_now());
  }, ms);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (task) {
  task.callback = null;
};
exports.unstable_forceFrameRate = function (fps) {
  0 > fps || 125 < fps
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5);
};
exports.unstable_getCurrentPriorityLevel = function () {
  return currentPriorityLevel;
};
exports.unstable_next = function (eventHandler) {
  switch (currentPriorityLevel) {
    case 1:
    case 2:
    case 3:
      var priorityLevel = 3;
      break;
    default:
      priorityLevel = currentPriorityLevel;
  }
  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;
  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
};
exports.unstable_requestPaint = function () {
  needsPaint = !0;
};
exports.unstable_runWithPriority = function (priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      priorityLevel = 3;
  }
  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;
  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
};
exports.unstable_scheduleCallback = function (
  priorityLevel,
  callback,
  options
) {
  var currentTime = exports.unstable_now();
  "object" === typeof options && null !== options
    ? ((options = options.delay),
      (options =
        "number" === typeof options && 0 < options
          ? currentTime + options
          : currentTime))
    : (options = currentTime);
  switch (priorityLevel) {
    case 1:
      var timeout = -1;
      break;
    case 2:
      timeout = 250;
      break;
    case 5:
      timeout = 1073741823;
      break;
    case 4:
      timeout = 1e4;
      break;
    default:
      timeout = 5e3;
  }
  timeout = options + timeout;
  priorityLevel = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: options,
    expirationTime: timeout,
    sortIndex: -1
  };
  options > currentTime
    ? ((priorityLevel.sortIndex = options),
      push(timerQueue, priorityLevel),
      null === peek(taskQueue) &&
        priorityLevel === peek(timerQueue) &&
        (isHostTimeoutScheduled
          ? (localClearTimeout(taskTimeoutID), (taskTimeoutID = -1))
          : (isHostTimeoutScheduled = !0),
        requestHostTimeout(handleTimeout, options - currentTime)))
    : ((priorityLevel.sortIndex = timeout),
      push(taskQueue, priorityLevel),
      isHostCallbackScheduled ||
        isPerformingWork ||
        ((isHostCallbackScheduled = !0),
        isMessageLoopRunning ||
          ((isMessageLoopRunning = !0), schedulePerformWorkUntilDeadline())));
  return priorityLevel;
};
exports.unstable_shouldYield = shouldYieldToHost;
exports.unstable_wrapCallback = function (callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;
    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
};


/***/ }),

/***/ 5338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) // removed by dead control flow
{}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(1247);
} else // removed by dead control flow
{}


/***/ }),

/***/ 6221:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(6540);
function formatProdErrorMessage(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return (
    "Minified React error #" +
    code +
    "; visit " +
    url +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function noop() {}
var Internals = {
    d: {
      f: noop,
      r: function () {
        throw Error(formatProdErrorMessage(522));
      },
      D: noop,
      C: noop,
      L: noop,
      m: noop,
      X: noop,
      S: noop,
      M: noop
    },
    p: 0,
    findDOMNode: null
  },
  REACT_PORTAL_TYPE = Symbol.for("react.portal");
function createPortal$1(children, containerInfo, implementation) {
  var key =
    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: null == key ? null : "" + key,
    children: children,
    containerInfo: containerInfo,
    implementation: implementation
  };
}
var ReactSharedInternals =
  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function getCrossOriginStringAs(as, input) {
  if ("font" === as) return "";
  if ("string" === typeof input)
    return "use-credentials" === input ? input : "";
}
exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  Internals;
exports.createPortal = function (children, container) {
  var key =
    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (
    !container ||
    (1 !== container.nodeType &&
      9 !== container.nodeType &&
      11 !== container.nodeType)
  )
    throw Error(formatProdErrorMessage(299));
  return createPortal$1(children, container, null, key);
};
exports.flushSync = function (fn) {
  var previousTransition = ReactSharedInternals.T,
    previousUpdatePriority = Internals.p;
  try {
    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
  } finally {
    (ReactSharedInternals.T = previousTransition),
      (Internals.p = previousUpdatePriority),
      Internals.d.f();
  }
};
exports.preconnect = function (href, options) {
  "string" === typeof href &&
    (options
      ? ((options = options.crossOrigin),
        (options =
          "string" === typeof options
            ? "use-credentials" === options
              ? options
              : ""
            : void 0))
      : (options = null),
    Internals.d.C(href, options));
};
exports.prefetchDNS = function (href) {
  "string" === typeof href && Internals.d.D(href);
};
exports.preinit = function (href, options) {
  if ("string" === typeof href && options && "string" === typeof options.as) {
    var as = options.as,
      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
      integrity =
        "string" === typeof options.integrity ? options.integrity : void 0,
      fetchPriority =
        "string" === typeof options.fetchPriority
          ? options.fetchPriority
          : void 0;
    "style" === as
      ? Internals.d.S(
          href,
          "string" === typeof options.precedence ? options.precedence : void 0,
          {
            crossOrigin: crossOrigin,
            integrity: integrity,
            fetchPriority: fetchPriority
          }
        )
      : "script" === as &&
        Internals.d.X(href, {
          crossOrigin: crossOrigin,
          integrity: integrity,
          fetchPriority: fetchPriority,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
  }
};
exports.preinitModule = function (href, options) {
  if ("string" === typeof href)
    if ("object" === typeof options && null !== options) {
      if (null == options.as || "script" === options.as) {
        var crossOrigin = getCrossOriginStringAs(
          options.as,
          options.crossOrigin
        );
        Internals.d.M(href, {
          crossOrigin: crossOrigin,
          integrity:
            "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
      }
    } else null == options && Internals.d.M(href);
};
exports.preload = function (href, options) {
  if (
    "string" === typeof href &&
    "object" === typeof options &&
    null !== options &&
    "string" === typeof options.as
  ) {
    var as = options.as,
      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
    Internals.d.L(href, as, {
      crossOrigin: crossOrigin,
      integrity:
        "string" === typeof options.integrity ? options.integrity : void 0,
      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
      type: "string" === typeof options.type ? options.type : void 0,
      fetchPriority:
        "string" === typeof options.fetchPriority
          ? options.fetchPriority
          : void 0,
      referrerPolicy:
        "string" === typeof options.referrerPolicy
          ? options.referrerPolicy
          : void 0,
      imageSrcSet:
        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
      imageSizes:
        "string" === typeof options.imageSizes ? options.imageSizes : void 0,
      media: "string" === typeof options.media ? options.media : void 0
    });
  }
};
exports.preloadModule = function (href, options) {
  if ("string" === typeof href)
    if (options) {
      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
      Internals.d.m(href, {
        as:
          "string" === typeof options.as && "script" !== options.as
            ? options.as
            : void 0,
        crossOrigin: crossOrigin,
        integrity:
          "string" === typeof options.integrity ? options.integrity : void 0
      });
    } else Internals.d.m(href);
};
exports.requestFormReset = function (form) {
  Internals.d.r(form);
};
exports.unstable_batchedUpdates = function (fn, a) {
  return fn(a);
};
exports.useFormState = function (action, initialState, permalink) {
  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
};
exports.useFormStatus = function () {
  return ReactSharedInternals.H.useHostTransitionStatus();
};
exports.version = "19.2.6";


/***/ }),

/***/ 6540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(9869);
} else // removed by dead control flow
{}


/***/ }),

/***/ 9869:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
  REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var ReactNoopUpdateQueue = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  assign = Object.assign,
  emptyObject = {};
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function (partialState, callback) {
  if (
    "object" !== typeof partialState &&
    "function" !== typeof partialState &&
    null != partialState
  )
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = !0;
var isArrayImpl = Array.isArray;
function noop() {}
var ReactSharedInternals = { H: null, A: null, T: null, S: null },
  hasOwnProperty = Object.prototype.hasOwnProperty;
function ReactElement(type, key, props) {
  var refProp = props.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: void 0 !== refProp ? refProp : null,
    props: props
  };
}
function cloneAndReplaceKey(oldElement, newKey) {
  return ReactElement(oldElement.type, newKey, oldElement.props);
}
function isValidElement(object) {
  return (
    "object" === typeof object &&
    null !== object &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}
function escape(key) {
  var escaperLookup = { "=": "=0", ":": "=2" };
  return (
    "$" +
    key.replace(/[=:]/g, function (match) {
      return escaperLookup[match];
    })
  );
}
var userProvidedKeyEscapeRegex = /\/+/g;
function getElementKey(element, index) {
  return "object" === typeof element && null !== element && null != element.key
    ? escape("" + element.key)
    : index.toString(36);
}
function resolveThenable(thenable) {
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw thenable.reason;
    default:
      switch (
        ("string" === typeof thenable.status
          ? thenable.then(noop, noop)
          : ((thenable.status = "pending"),
            thenable.then(
              function (fulfilledValue) {
                "pending" === thenable.status &&
                  ((thenable.status = "fulfilled"),
                  (thenable.value = fulfilledValue));
              },
              function (error) {
                "pending" === thenable.status &&
                  ((thenable.status = "rejected"), (thenable.reason = error));
              }
            )),
        thenable.status)
      ) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
      }
  }
  throw thenable;
}
function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;
  if ("undefined" === type || "boolean" === type) children = null;
  var invokeCallback = !1;
  if (null === children) invokeCallback = !0;
  else
    switch (type) {
      case "bigint":
      case "string":
      case "number":
        invokeCallback = !0;
        break;
      case "object":
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = !0;
            break;
          case REACT_LAZY_TYPE:
            return (
              (invokeCallback = children._init),
              mapIntoArray(
                invokeCallback(children._payload),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              )
            );
        }
    }
  if (invokeCallback)
    return (
      (callback = callback(children)),
      (invokeCallback =
        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
      isArrayImpl(callback)
        ? ((escapedPrefix = ""),
          null != invokeCallback &&
            (escapedPrefix =
              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
            return c;
          }))
        : null != callback &&
          (isValidElement(callback) &&
            (callback = cloneAndReplaceKey(
              callback,
              escapedPrefix +
                (null == callback.key ||
                (children && children.key === callback.key)
                  ? ""
                  : ("" + callback.key).replace(
                      userProvidedKeyEscapeRegex,
                      "$&/"
                    ) + "/") +
                invokeCallback
            )),
          array.push(callback)),
      1
    );
  invokeCallback = 0;
  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
  if (isArrayImpl(children))
    for (var i = 0; i < children.length; i++)
      (nameSoFar = children[i]),
        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if (((i = getIteratorFn(children)), "function" === typeof i))
    for (
      children = i.call(children), i = 0;
      !(nameSoFar = children.next()).done;

    )
      (nameSoFar = nameSoFar.value),
        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if ("object" === type) {
    if ("function" === typeof children.then)
      return mapIntoArray(
        resolveThenable(children),
        array,
        escapedPrefix,
        nameSoFar,
        callback
      );
    array = String(children);
    throw Error(
      "Objects are not valid as a React child (found: " +
        ("[object Object]" === array
          ? "object with keys {" + Object.keys(children).join(", ") + "}"
          : array) +
        "). If you meant to render a collection of children, use an array instead."
    );
  }
  return invokeCallback;
}
function mapChildren(children, func, context) {
  if (null == children) return children;
  var result = [],
    count = 0;
  mapIntoArray(children, result, "", "", function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
function lazyInitializer(payload) {
  if (-1 === payload._status) {
    var ctor = payload._result;
    ctor = ctor();
    ctor.then(
      function (moduleObject) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 1), (payload._result = moduleObject);
      },
      function (error) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 2), (payload._result = error);
      }
    );
    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
  }
  if (1 === payload._status) return payload._result.default;
  throw payload._result;
}
var reportGlobalError =
    "function" === typeof reportError
      ? reportError
      : function (error) {
          if (
            "object" === typeof window &&
            "function" === typeof window.ErrorEvent
          ) {
            var event = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                "object" === typeof error &&
                null !== error &&
                "string" === typeof error.message
                  ? String(error.message)
                  : String(error),
              error: error
            });
            if (!window.dispatchEvent(event)) return;
          } else if (
            "object" === typeof process &&
            "function" === typeof process.emit
          ) {
            process.emit("uncaughtException", error);
            return;
          }
          console.error(error);
        },
  Children = {
    map: mapChildren,
    forEach: function (children, forEachFunc, forEachContext) {
      mapChildren(
        children,
        function () {
          forEachFunc.apply(this, arguments);
        },
        forEachContext
      );
    },
    count: function (children) {
      var n = 0;
      mapChildren(children, function () {
        n++;
      });
      return n;
    },
    toArray: function (children) {
      return (
        mapChildren(children, function (child) {
          return child;
        }) || []
      );
    },
    only: function (children) {
      if (!isValidElement(children))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return children;
    }
  };
exports.Activity = REACT_ACTIVITY_TYPE;
exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  ReactSharedInternals;
exports.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (size) {
    return ReactSharedInternals.H.useMemoCache(size);
  }
};
exports.cache = function (fn) {
  return function () {
    return fn.apply(null, arguments);
  };
};
exports.cacheSignal = function () {
  return null;
};
exports.cloneElement = function (element, config, children) {
  if (null === element || void 0 === element)
    throw Error(
      "The argument must be a React element, but you passed " + element + "."
    );
  var props = assign({}, element.props),
    key = element.key;
  if (null != config)
    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
      !hasOwnProperty.call(config, propName) ||
        "key" === propName ||
        "__self" === propName ||
        "__source" === propName ||
        ("ref" === propName && void 0 === config.ref) ||
        (props[propName] = config[propName]);
  var propName = arguments.length - 2;
  if (1 === propName) props.children = children;
  else if (1 < propName) {
    for (var childArray = Array(propName), i = 0; i < propName; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  return ReactElement(element.type, key, props);
};
exports.createContext = function (defaultValue) {
  defaultValue = {
    $$typeof: REACT_CONTEXT_TYPE,
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  defaultValue.Provider = defaultValue;
  defaultValue.Consumer = {
    $$typeof: REACT_CONSUMER_TYPE,
    _context: defaultValue
  };
  return defaultValue;
};
exports.createElement = function (type, config, children) {
  var propName,
    props = {},
    key = null;
  if (null != config)
    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
      hasOwnProperty.call(config, propName) &&
        "key" !== propName &&
        "__self" !== propName &&
        "__source" !== propName &&
        (props[propName] = config[propName]);
  var childrenLength = arguments.length - 2;
  if (1 === childrenLength) props.children = children;
  else if (1 < childrenLength) {
    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  if (type && type.defaultProps)
    for (propName in ((childrenLength = type.defaultProps), childrenLength))
      void 0 === props[propName] &&
        (props[propName] = childrenLength[propName]);
  return ReactElement(type, key, props);
};
exports.createRef = function () {
  return { current: null };
};
exports.forwardRef = function (render) {
  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
};
exports.isValidElement = isValidElement;
exports.lazy = function (ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _payload: { _status: -1, _result: ctor },
    _init: lazyInitializer
  };
};
exports.memo = function (type, compare) {
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: void 0 === compare ? null : compare
  };
};
exports.startTransition = function (scope) {
  var prevTransition = ReactSharedInternals.T,
    currentTransition = {};
  ReactSharedInternals.T = currentTransition;
  try {
    var returnValue = scope(),
      onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    "object" === typeof returnValue &&
      null !== returnValue &&
      "function" === typeof returnValue.then &&
      returnValue.then(noop, reportGlobalError);
  } catch (error) {
    reportGlobalError(error);
  } finally {
    null !== prevTransition &&
      null !== currentTransition.types &&
      (prevTransition.types = currentTransition.types),
      (ReactSharedInternals.T = prevTransition);
  }
};
exports.unstable_useCacheRefresh = function () {
  return ReactSharedInternals.H.useCacheRefresh();
};
exports.use = function (usable) {
  return ReactSharedInternals.H.use(usable);
};
exports.useActionState = function (action, initialState, permalink) {
  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
};
exports.useCallback = function (callback, deps) {
  return ReactSharedInternals.H.useCallback(callback, deps);
};
exports.useContext = function (Context) {
  return ReactSharedInternals.H.useContext(Context);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (value, initialValue) {
  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
};
exports.useEffect = function (create, deps) {
  return ReactSharedInternals.H.useEffect(create, deps);
};
exports.useEffectEvent = function (callback) {
  return ReactSharedInternals.H.useEffectEvent(callback);
};
exports.useId = function () {
  return ReactSharedInternals.H.useId();
};
exports.useImperativeHandle = function (ref, create, deps) {
  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
};
exports.useInsertionEffect = function (create, deps) {
  return ReactSharedInternals.H.useInsertionEffect(create, deps);
};
exports.useLayoutEffect = function (create, deps) {
  return ReactSharedInternals.H.useLayoutEffect(create, deps);
};
exports.useMemo = function (create, deps) {
  return ReactSharedInternals.H.useMemo(create, deps);
};
exports.useOptimistic = function (passthrough, reducer) {
  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
};
exports.useReducer = function (reducer, initialArg, init) {
  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
};
exports.useRef = function (initialValue) {
  return ReactSharedInternals.H.useRef(initialValue);
};
exports.useState = function (initialState) {
  return ReactSharedInternals.H.useState(initialState);
};
exports.useSyncExternalStore = function (
  subscribe,
  getSnapshot,
  getServerSnapshot
) {
  return ReactSharedInternals.H.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
};
exports.useTransition = function () {
  return ReactSharedInternals.H.useTransition();
};
exports.version = "19.2.6";


/***/ }),

/***/ 9982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(4477);
} else // removed by dead control flow
{}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
;// ./src/data/articles.json
const articles_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":"art_1","order":1,"title":"очень нишевая статья","h1":"нишевость","description":"давайте разбираться, что это и откуда взялось","slug":"nishevost","cover":"./images/articles/art_1/cover.webp","tags":["новые мемы","для переписок"],"media":{"images":["./images/articles/art_1/image_1.webp"],"videos":["./images/articles/art_1/video_1.webm","./images/articles/art_1/video_2.webm"]},"content":[{"type":"h2","text":"все нынче хотят быть нишевыми"},{"type":"p","text":"Слово «нишевый» внезапно захватило тикток. Так называют и людей, и мемы, и хобби, и слова, да и в целом вообще всё подряд. Нишевость нынче в моде, чем более редкий, никому неизвестный контент или продукт у тебя есть, тем ты круче."},{"type":"p","text":"Сама по себе нишевость подразумевает продукт не для всех. Это что-то странное, сложное, только для шарящих. Раньше это слово частенько можно было услышать в контексте парфюмерии, когда крутые нестандартные люди хотели пахнуть мокрой землёй или ладаном. А теперь так оценивают и людей."},{"type":"h2","text":"а ты точно нишевый?"},{"type":"p","text":"Проверить можно! Нишевый человек обязательно слушает что-то, о чём никто никогда не знал, смотрит ч/б кино, где простой плебс ничего не поймёт, одевается не по заветам массмаркета, смеётся над тем, что непонятно другим..."},{"type":"p","text":"Ну вы поняли. Главное вот что — чем меньше народу в теме, тем лучше."},{"type":"note","text":"Быть как все уже давно вышло из моды!"},{"type":"h2","text":"за что нравится? ой.. или всё же не нравится"},{"type":"p","text":"Загадочность! Да и банальное желание отличиться, знать что-то, чего другие не поймут, да и хорошо же это, это притягивает. А в мемах и наш любимый абсурд подтягивается!"},{"type":"p","text":"В интернете нишевых людей становилось всё больше, поэтому, конечно же, пошла волна подколов. Многие начали подозревать, что большинство не нишевые, а просто собирают эдакие увлечения, чтобы привлечь внимание; ставят эстетику на первый план. Однако, не забываем, что самовыражение — это здорово! Нравится быть нишевым? Так к чему расстройства, если это так интересно! Главное — быть, а не казаться, ага."}],"url":"./pages/articles/art_1.html"},{"id":"art_2","order":2,"title":"7 × 7 = мой типаж","h1":"7 × 7 = 49","description":"почему интернет влюбился в цифры?","slug":"7x7","cover":"./images/articles/art_2/cover.webp","tags":["новые мемы","жизненные мемы","абсурд"],"media":{"images":[],"videos":["./images/articles/art_2/video_1.webm","./images/articles/art_2/video_2.webm","./images/articles/art_2/video_3.webm"]},"content":[{"type":"h2","text":"он буквально 7 × 7 = 49"},{"type":"p","text":"В тиктоке внезапно начали оценивать людей… по таблице умножения. Да, теперь можно быть не просто красавчиком, а буквально «7 × 7 = 49». А ещё люди массово симпатизируют символу &, фигурным скобкам и арифметическим примерам. Что ж творится-то?"},{"type":"p","text":"Началось всё с видео про «доказательство того, что девушкам не важна внешность». В ролике мелькали всякие странные объекты, которые почему-то кажутся привлекательными: манекен в галстуке, амперсанд, лампа из pixar и тот самый пример 7 × 7 = 49. Комментарии моментально заполнились признаниями в любви всем этим примерам."},{"type":"h2","text":"а что это вообще значит?"},{"type":"p","text":"У каждого примера появился свой вайб. Интернет коллективно решил, что:   7 × 7 = 49 — харизматичный красавчик с аурой главного персонажа, 5 × 5 = 25 — добрый спортивный парень с golden retriever energy, а 9 × 9 = 81 — взрослый серьёзный мужчина в костюме, который уже разобрался в жизни."},{"type":"p","text":"Причём никто это специально не придумывал. Люди просто смотрели на цифры и ориентировались на свои чувства. И самое смешное, что у огромного количества пользователей ассоциации совпали."},{"type":"note","text":"Ура! Теперь фильтруем людей через таблицу умножения!"},{"type":"h2","text":"а вот в чём дело!"},{"type":"p","text":"Многие объясняют тренд синестезией — это когда мозг связывает вещи, которые вообще не должны быть связаны. Например, кто-то видит у букв цвета или чувствует, что пятница пахнет определённым образом. Да, звучит странненько, но это мощно привлекает."},{"type":"p","text":"Так что да. Раньше люди влюблялись в персонажей, потом — в вайбы, а теперь очередь дошла и до математики!"}],"url":"./pages/articles/art_2.html"},{"id":"art_3","order":3,"title":"Что такое chinamaxxing?","h1":"CHINAMAXXING? Что?","description":"Почему интерес к Китаю всё не утихает?","slug":"chinamaxxing","cover":"./images/articles/art_3/cover.webp","tags":["абсурд","ии"],"media":{"images":["./images/articles/art_3/image_1.gif"],"videos":["./images/articles/art_3/video_1.webm","./images/articles/art_3/video_2.webm"]},"content":[{"type":"h2","text":"откуда взялся мем?"},{"type":"p","text":"Всё началось в 2025 году с твита-пародии на цитату из «Бойцовского клуба» «you met me at a very chinese time in my life». Фраза звучала абсурдно, и именно поэтому она зашла. К концу 2025 тренд подхватила TikTok-креаторка Шерри Чжу. В ироничных видео она «обучала» зрителей, как стать китайцами через образ жизни (всегда ходить с руками за спиной, есть конджи и т.д.). Ролики набрали десятки миллионов просмотров, и дальше понеслось. В 2026 TikTok заполонили ироничные видео с подписью «I’ve always been Chinese»."},{"type":"note","text":"Мем держится на границе между приколом и лайфстайлом"},{"type":"h2","text":"Почему мем зашёл"},{"type":"p","text":"Во-первых, это абсурд. Никто буквально не «становится» китайцем — это игра в гиперболу. Во-вторых, это лайфстайл. Мем попал в welness-зону: забота о здоровье, дисциплина, минимализм."},{"type":"p","text":"В-третьих, лёгкая провокация. В 2026 медиа вроде The New York Times писали, что это может быть и шуткой, и формой протеста, и признаком растущей «мягкой силы» Китая — или всё сразу."},{"type":"h2","text":"Смешно было не всем"},{"type":"p","text":"Реакция получилась смешанной. Одни китайские креаторы радовались вниманию к культуре. Другие говорили, что это поверхностный тренд, фетишизация «китайскости» без понимания контекста."},{"type":"p","text":"Дискуссия колеблется между «культурной апроприацией» и «культурной благодарностью». Кто-то видит в этом уважение, а кто-то очередной disposable-тренд, который завтра сменится новым."}],"url":"./pages/articles/art_3.html"},{"id":"art_4","order":4,"title":"Назад в 2016! Ура!","h1":"2026 is new 2016","description":"Почему все массово снимают бэк ту скул и вайны?","slug":"2026is2016","cover":"./images/articles/art_4/cover.webp","tags":["ностальгическое","жизненные мемы"],"media":{"images":["./images/articles/art_4/image_1.webp"],"videos":["./images/articles/art_4/video_1.webm"]},"content":[{"type":"h2","text":"откуда взялся мем?"},{"type":"p","text":"В начале января 2026 в TikTok и X начали массово появляться ролики “2026 is the new 2016”. Люди стали снимать старые мемы с монтажом эпохи вайнов и музыкой из середины 2010-х."},{"type":"p","text":"Люди хотят вернуть вайб 2016 года. Тогда интернет был быстрым, странным, абсурдным, без бесконечной мета-иронии В 2026 пользователи специально копируют этот стиль, используя резкие обрывы видео, нелепые фразы, плохое качество картинки, максимально простые шутки без глубокого подтекста."},{"type":"note","text":"Бежим покупать чехол на телефон с фламинго!"},{"type":"h2","text":"Почему мем зашёл"},{"type":"p","text":"Интернет сейчас перегружен ИИ-контентом, гипер-иронией, брейнротом. Многим хочется вернуть искренность, смеяться над самой шуткой, а не над абсурдностью или попыткой угодить алгоритмам"},{"type":"p","text":"Это и ностальгия, и усталость. 2016 считают последним весёлым годом интернета. И если тренд продолжит расти, нас ждёт ещё больше ремиксов старых мемов, челленджей и звуков, потому что иногда лучший способ двигаться вперёд — это немного откатиться назад."}],"url":"./pages/articles/art_4.html"},{"id":"art_5","order":5,"title":"бюджет статьи 30 рублей","h1":"морковка пять рублей","description":"ура! узнаём рецепт дешёвой пищи","slug":"fiveroubles","cover":"./images/articles/art_5/cover.webp","tags":["новые мемы","абсурд"],"media":{"images":[],"videos":["./images/articles/art_5/video_1.webm","./images/articles/art_5/video_2.webm"]},"content":[{"type":"h2","text":"откуда взялся мем"},{"type":"p","text":"Весной 2026 в тик токе возник рецепт ультрабюджетного рациона, причём с таким постироничным удовольствем. Начали вируситься видео, где люди максимально спокойно рассказывают рецепты уровня: картошка — 5 рублей, гречка — 5 рублей, морковка — 5 рублей, лук — 5 рублей, подсолнечное масло — 5 рублей.. Ну вы поняли"},{"type":"p","text":"Автор мема @evgenyjimm снимает видео в таком стиле, где делится, как можно питаться на 30 рублей в день. Также он отвечает на вопросы подписчиков, по типу «а можно ли добавить в рацион хлеб 5 рублей»."},{"type":"note","text":"Хотите, опубликуем рецепт рациона за 29 рублей в день?"},{"type":"h2","text":"а в чём прикол"},{"type":"p","text":"Ну конечно же, постирония! Все видосы сняты по одному шаблону, рецепт рассказывается спокойным монотонным голосом. А самое забавное, что многие не выкупили, что автор просто стебётся."},{"type":"p","text":"Вот так-то! После прочтения статьи обязательно сходите в магазин и купите морковку 5 рублей, лук 5 рублей, гречку 5 рублей. Повторите гениальный рецепт!"}],"url":"./pages/articles/art_5.html"},{"id":"art_6","order":6,"title":"Обернитесь, сзади яблоко","h1":"Сок любимый","description":"почему в любом соке внезапно находится яблоко","slug":"lubimiyapple","cover":"./images/articles/art_6/cover.webp","tags":["абсурд","жизненные мемы"],"media":{"images":["./images/articles/art_6/image_1.webp"],"videos":["./images/articles/art_6/video_1.webm","./images/articles/art_6/video_2.webm"]},"content":[{"type":"h2","text":"главный герой упаковки"},{"type":"p","text":"Если вы хоть раз видели мемы про сок «Любимый», то наверняка замечали одну странную вещь. На упаковке может быть вишня, черника, малина, абрикос, манго, короче что угодно. Но где-то глубоко внутри всё равно скрывается яблоко."},{"type":"p","text":"Пользователи начали замечать такую забавную закономерность. На лицевой стороне упаковки обычно красуются именно те фрукты и ягоды, которые заявлены во вкусе, они большие, яркие и занимают почти всё пространство. А потом кто-то открывал состав, и внезапно выяснялось, что на первом месте там часто стоит яблочный сок."},{"type":"h2","text":"где яблоко?"},{"type":"p","text":"Самое смешное началось, когда пользователи стали искать яблоко на самих упаковках. Оказалось, что дизайнеры действительно добавляют его в дизайн, но обычно максимально незаметно, где-нибудь на заднем плане, в углу, между ягодами или вообще в виде маленького элемента композиции."},{"type":"p","text":"После этого соцсети начали массово публиковать фотографии упаковок с подписями уровня «найди яблоко», да и в целом пошёл форс этого мема"},{"type":"note","text":"Это мем про персонажа, который всё это время был рядом."},{"type":"h2","text":"почему именно яблоко?"},{"type":"p","text":"На самом деле причина довольно простая. Яблочный сок дешевле многих других фруктовых соков, хорошо хранится и обладает достаточно нейтральным вкусом. Благодаря этому его удобно использовать как основу для разных напитков. А уже потом добавлять соки и пюре других фруктов и ягод."},{"type":"p","text":"Но мему на это абсолютно всё равно, ведь это правда смешно! За нами всеми следит яблоко. Яблоко не просит внимания, яблоко не спорит, яблоко просто всегда было рядом. Именно поэтому оно и стало мемом."}],"url":"./pages/articles/art_6.html"},{"id":"art_7","order":7,"title":"WHO IS HE?","h1":"кто это вообще?","description":"а он сейчас с нами в одной комнате","slug":"whoisthat","cover":"./images/articles/art_7/cover.webp","tags":["для переписок","абсурд","новые мемы"],"media":{"images":["./images/articles/art_7/image_1.webp"],"videos":["./images/articles/art_7/video_1.webm"]},"content":[{"type":"h2","text":"всё началось со свинки Пеппы"},{"type":"p","text":"Источник мема максимально угарный. Кто-то заметил превью ролика про загадки во вселенной Свинки Пеппы, где на картинке семья Пеппы спокойно сидит за столом, а за окном стоит какой-то мужик."},{"type":"p","text":"Причём проблема в том, что в самом мультфильме такого персонажа никогда не было. Его просто дорисовали специально для превью. А чтобы никто не пропустил находку, рядом добавили огромную стрелку, жёлтый круг и подпись WHO IS HE?"},{"type":"note","text":"Именно со Свинкой Пеппой, кстати, можно больше всего таких мемов найти. Большинство, конечно, уже после зарождения форса были созданы"},{"type":"h2","text":"новый герой комментариев"},{"type":"p","text":"Очень быстро картинка начала жить отдельной жизнью. Её массово отправляли в комментарии тиктока как реакцию вообще на что угодно. Как и положено хорошему тикток-мему, формат быстро вышел за пределы оригинала."},{"type":"p","text":"Появились версии с Симпсонами, Гриффинами, разными играми, фильмами, мультфильмами. Везде схема оставалась одинаковой! Несуществующий персонаж, красный круг, стрелка и тревожный вопрос."}],"url":"./pages/articles/art_7.html"},{"id":"art_8","order":8,"title":"Нейросети и за мемы взялись","h1":"ИИ-вечеринка","description":"поговорим про ии мемы","slug":"aimemes","cover":"./images/articles/art_8/cover.webp","tags":["ии","абсурд"],"media":{"images":[],"videos":["./images/articles/art_8/video_1.webm","./images/articles/art_8/video_2.webm","./images/articles/art_8/video_3.webm","./images/articles/art_8/video_4.webm"]},"content":[{"type":"h2","text":"Когда это вообще началось?"},{"type":"p","text":"Тик ток завален нейросетевыми приколами, и, конечно, грех жаловаться — это проще, чем склеивать угар в фотошопе. Да и часто получается смешно! Но этого становится всё больше, и невозможно точно нащупать ту грань, с какого момента это началось. В какой момент лента тик тока начала стремительно превращаться в галерею генераций?"},{"type":"p","text":"Принято считать, что пошло всё с Уилла Смита, поедающего спагетти, что позже стало эталоном в области развития нейросетей. Видео опубликовали в далёком 2023. Оно быстро завирусилось из-за сумасшедшего уровня деформации Уилла и его окружения."},{"type":"h2","text":"Почему это так популярно?"},{"type":"p","text":"ИИ мемы в основном идут двумя дорогами. Первая — полный абсурд, чтобы происходящее на экране вызывало ощущение сна."},{"type":"p","text":"Абсурд = смешно, да ещё и загадочная атмосфера странных вещей вызывает какие-то мурашки. Нагенерировать можно абсолютно всё, что угодно, и контентмейкеры, создающие \\"сон при температуре 40\\"-подобные видеоролики получили таким образом знатного конкурента"},{"type":"h2","text":"ого! дипфейки!"},{"type":"p","text":"Второй вехой ИИ-мемов мы будем считать всё, где реальных известных людей ставят в нереальные условия. Сейчас нейронки создают качественные дипфейки, поэтому такого рода видосов развелось много!"},{"type":"p","text":"Звучит трудно, но вот вам пример! Видели, как Канье Уэст грустит из-за болезни капибары? А мы видели! Забавно ещё и то, что люди на это попадались, хотя бы один раз так точно."},{"type":"note","text":"Да ладно вам, признавайтесь, что разок хотя бы велись на дипфейк"},{"type":"h2","text":"ИИ-сторителлинг"},{"type":"p","text":"Третья сторона развития — нарратив, ух ты! Пользователи нашли способ проиллюстрировать душераздирающие жизненные истории котов, успешно идущих к успеху, которым вечно кто-то да вставит палки в колёса."},{"type":"p","text":"Такие дела! И тут и контентмейкерам, и пользователям нужно выбирать — смириться, научиться и пользоваться или попытаться переплюнуть. А ИИ, в свою очередь, вряд ли уже уйдёт из нашей жизни, ведь нейросети всё сильнее вплетаются в наш лайфстайл."}],"url":"./pages/articles/art_8.html"},{"id":"art_9","order":9,"title":"FFFFFFFFFUUUUUUUUUU","h1":"рейджкомиксы","description":"как рейджкомиксы захватили интернет и подарили нам Trollface","slug":"ragecomics","cover":"./images/articles/art_9/cover.webp","tags":["ностальгическое","абсурд","для переписок"],"media":{"images":["./images/articles/art_9/image_1.webp"],"videos":["./images/articles/art_9/video_1.webm","./images/articles/art_9/video_2.webm"]},"content":[{"type":"h2","text":"с чего всё началось"},{"type":"p","text":"Тогда пользователи открывали Paint, рисовали максимально кривые лица и рассказывали истории из жизни в формате небольших комиксов. Вот так и появились рейджкомиксы — один из самых влиятельных мемных форматов за всю историю интернета."},{"type":"p","text":"История началась в 2008 году на имиджборде 4chan. Один из пользователей нарисовал простой четырёхпанельный комикс про бытовую неудачу и закончил его лицом, кричащим FFFFFFFFFFFFFUUUUUUUUUUUU. Комикс быстро разошёлся по форумам, а другие пользователи начали создавать похожие истории, и вот родился целый жанр"},{"type":"h2","text":"целая вселенная лиц"},{"type":"p","text":"Очень быстро одного персонажа стало недостаточно. Пользователи начали придумывать новых героев для разных эмоций и ситуаций. Например, троллфейс! Его знают даже люди, которые никогда не слышали словосочетание «рейджкомикс»."},{"type":"p","text":"Персонажа нарисовал художник Карлос Рамирес в 2008 году. Изначально это была шутка про интернет-троллинг, но очень быстро ухмылка Trollface стала универсальным символом любого розыгрыша и провокации."},{"type":"note","text":"В рейджкомиксах много-много персонажей! Forever Alone, Me Gusta, Okay Guy, Troll Face, Y U No Guy... И так далее"},{"type":"h2","text":"золотая эпоха рунета"},{"type":"p","text":"В начале 2010-х рейджкомиксы были буквально везде. Их публиковали во «ВКонтакте», на форумах, в пабликах и развлекательных сайтах. Существовали даже специальные редакторы, где можно было собрать собственный комикс за несколько минут."},{"type":"p","text":"К середине 2010-х золотая эпоха рейджкомиксов закончилась. Тем не менее, рейджкомиксы всё ещё на плаву! Их возрождают!! Благодаря постиронии, рейджфейсы снова начали использовать в видео и мемах! Неплохой результат для мемов, созданных в paint!"}],"url":"./pages/articles/art_9.html"},{"id":"art_10","order":10,"title":"gleebgla globgla","h1":"bogos binted?","description":"инопланетная бессмысленная переписка с пришельцем как мем","slug":"bogosbinted","cover":"./images/articles/art_10/cover.webp","tags":["абсурд","для переписок"],"media":{"images":[],"videos":["./images/articles/art_10/video_1.webm","./images/articles/art_10/video_2.webm"]},"content":[{"type":"h2","text":"откуда он прилетел-то"},{"type":"p","text":"История началась с публикации на Tumblr. Пользователь выложил скриншот переписки, где обычный вопрос про распечатанные фотографии превращается в разговор на загадочном инопланетном языке. Человек пишет нормальное сообщение, получает в ответ «Bogos binted?», закономерно спрашивает «What?», а дальше ему просто присылают эмодзи пришельца."},{"type":"p","text":"Со временем пользователи начали воспринимать bogos binted как своеобразный инопланетный перевод фразы \\"photos printed\\". А потом уже и появились десятки похожих выражений: logos binted, phobos filtered, boat goes binted и другие вариации."},{"type":"note","text":"В честь мема, кстати, назвали относительно недавно выпущенную кооп-игру в Steam про инопланетян!"},{"type":"h2","text":"а дальше что"},{"type":"p","text":"Настоящий взрыв популярности произошёл уже в 2021 году, когда пользователи начали делать озвученные версии переписки. Звук начали использовать в TikTok, а сам диалог превратился в шаблон для тысяч видео и пародий. Во многом поэтому мем отлично вписался в эпоху постиронии, когда абсурд сам по себе уже может быть шуткой."},{"type":"p","text":"За несколько лет Bogos Binted успел превратиться из случайного скриншота в один из самых узнаваемых абсурдных мемов интернета. Появились анимации, озвучки, бесконечные ремиксы и новые вариации оригинального диалога."}],"url":"./pages/articles/art_10.html"},{"id":"art_11","order":11,"title":"скелета видели??","h1":"DID YOU GUYS SEE THAT?","description":"как бегущий скелет превратился в коллективную галлюцинацию","slug":"skeletonrunning","cover":"./images/articles/art_11/cover.webp","tags":["абсурд"],"media":{"images":[],"videos":["./images/articles/art_11/video_1.webm","./images/articles/art_11/video_2.webm"]},"content":[{"type":"h2","text":"вы тоже это видели?"},{"type":"p","text":"Главный герой мема — маленький бегущий скелет, которого обычно вставляют в видео буквально на долю секунды. Сам скелет появился не в тиктоке. Его модель взяли из The Elder Scrolls V: Skyrim. Со временем люди вырезали анимацию из игры и превратили её в прозрачную GIF-картинку, которая годами использовалась как локальная шутка на форумах и в Discord-сообществах."},{"type":"p","text":"Обычно автор выкладывает максимально спокойное видео. Красивый пейзаж, рецепт, прогулку по городу или может даже околокриповое видео. Зритель начинает ждать какой-то сюжетный поворот. А потом через экран просто пробегает скелет."},{"type":"note","text":"такие видосы идут в комплекте с подписью вроде «DID YOU GUYS SEE THAT??»"},{"type":"h2","text":"чем тупее, тем лучше"},{"type":"p","text":"Очень быстро мем превратился в соревнование по абсурду. Пользователи начали специально растягивать видосы на 20–30 секунд, чтобы заставить зрителя ждать. Скелет появляется в последние полсекунды!"},{"type":"p","text":"Причём он даже не пытается выглядеть частью видео. Наоборот, его специально оставляют максимально очевидным. Видно, что это наложенная анимация из игры, которая никак не связана с происходящим на экране."}],"url":"./pages/articles/art_11.html"},{"id":"art_12","order":12,"title":"Я знаю, но не могу доказать","h1":"Не могу доказать","description":"что он знает? что он кому доказать пытается?","slug":"iknowbutcantprove","cover":"./images/articles/art_12/cover.webp","tags":["фильмы/сериалы","для переписок","жизненные мемы"],"media":{"images":["./images/articles/art_12/image_1.webp"],"videos":["./images/articles/art_12/video_1.webm"]},"content":[{"type":"h2","text":"Откуда взялся мем?"},{"type":"p","text":"Мем сделан на основе кадра из фильма \\"Декстер\\". В этой сцене персонаж уже Джеймс Доакс догадывается, что Декстер — серийный убийца, но доказательств у него нет."},{"type":"p","text":"Да что тут — скажем большое спасибо уважаемому Эрику Кингу, потому что лишь взгляда на его эмоцию хватит, чтобы понять, о чём в этом меме идёт речь."},{"type":"note","text":"Кстати, забавных картинок и стикеров с кадрами из этого сериала много! Но завирусился именно этот мем"},{"type":"h2","text":"Почему это популярно?"},{"type":"p","text":"Снова пользователи тик тока сыграли на контрасте серьёзности сцены, тревожной музыки и различных ситуаций. Хотя куда чаще мем накладывали на забавные ситуации."},{"type":"p","text":"Такой формат в соцсетях любят, особенно ценится универсальность применения, и мем завирусился летом 2025 года. Пользователи подхватили волну и начали делать много-много мемов с участием Доакса про свой опыт, в том числе коллективный."}],"url":"./pages/articles/art_12.html"},{"id":"art_13","order":13,"title":"ох зря я туда полез","h1":"ох зря я туда полез","description":"как криповые страшилки превратились в мем","slug":"ohzrya","cover":"./images/articles/art_13/cover.webp","tags":["для переписок","абсурд","ностальгическое"],"media":{"images":[],"videos":["./images/articles/art_13/video_1.webm","./images/articles/art_13/video_2.webm"]},"content":[{"type":"h2","text":"ох зря я туда полез..."},{"type":"p","text":"Если вы сидели в тиктоке в 2022–2024 годах, то наверняка помните этот голос!! Медленный и хриплый, под жуткую музыку: «Оооох... зряяяя я туууда полез...». А на экране тем временем появлялась какая-то жуть и крипота."},{"type":"p","text":"Сам звук завирусился благодаря роликам в жанре интернет-страшилок. Особенно часто пользователи связывают его с видео «Гость из подвала» от WorldBegemotKot, где использовалась знаменитая обложка с подписью «Ох зря я туда полез»."},{"type":"note","text":"Много вариаций было! Вспоминаем и «Не надо было это кушать», и «Кремируйте её быстрее!!»... И так далее"},{"type":"h2","text":"и смех и страх"},{"type":"p","text":"Со временем сама картинка стала жить отдельно от оригинального видео. Людей смешило то, насколько серьёзно подавались максимально абсурдные ситуации. Голос звучал так, будто сейчас произойдёт нечто ужасное, а потом оказывалось, что речь идёт о каком-нибудь школьном подвале или старом холодильнике."},{"type":"p","text":"Большую роль сыграл и другой интернет-тренд — аналоговый хоррор. Рунет быстро адаптировал этот стиль под мемы. Пользователи начали специально ухудшать качество видео, добавлять страшные звуки и озвучивать максимально нелепые истории как можно криповее!!"}],"url":"./pages/articles/art_13.html"},{"id":"art_14","order":14,"title":"aura farming","h1":"+1000 aura","description":"что за аура? давайте узнаем, что это за статы","slug":"aurafarming","cover":"./images/articles/art_14/cover.webp","tags":["новые мемы","для переписок","жизненные мемы"],"media":{"images":[],"videos":["./images/articles/art_14/video_1.webm","./images/articles/art_14/video_2.webm"]},"content":[{"type":"h2","text":"интернет начал качать ауру"},{"type":"p","text":"В какой-то момент тикток решил, что обычной популярности людям уже недостаточно. Теперь все хотят ауру. Так появился мем aura farming — ситуация, когда человек делает что-то настолько эффектное, странное или просто крутое, что будто специально фармит себе очки харизмы."},{"type":"p","text":"Классический aura farming выглядит примерно так: человек молча уходит в туман, ребёнок уверенно смотрит в камеру под phonk, дед эффектно закуривает, футболист стоит как финальный босс, кто-то делает максимально обычную вещь так, будто это крутецкая катсцена. И обязательно!! Обязательно нужна подпись +1000 aura или bro farming aura."},{"type":"note","text":"Говорят, что если включать в голове фонк, то все действия автоматом будут фармить вам ауру. Мы проверили"},{"type":"h2","text":"откуда это взялось"},{"type":"p","text":"Сам термин aura существовал в интернете давно — им описывали харизму и вайб человека. Но в 2025–2026 тикток превратил это в своеобразную игровую механику. Теперь любое действие можно оценить как + aura или - aura."},{"type":"p","text":"Особенно тикток любит моменты, где кто-то случайно выглядит слишком cinematic: идёт под дождём, смотрит вдаль или просто стоит слишком уверенно для простого смертного. Короче, интернет снова придумал характеристику для вайба, ух ты ж."}],"url":"./pages/articles/art_14.html"},{"id":"art_15","order":15,"title":"sonion","h1":"son","description":"мем son как реакция абсолютно на всё, вот круто","slug":"sonionsonson","cover":"./images/articles/art_15/cover.webp","tags":["новые мемы","для переписок","абсурд","ии"],"media":{"images":["./images/articles/art_15/image_1.webp"],"videos":["./images/articles/art_15/video_1.webm","./images/articles/art_15/video_2.webm"]},"content":[{"type":"h2","text":"откуда взялся мем"},{"type":"p","text":"Оригинальная версия мема связана с фотографией актёра Энтони Маки. Пользователи взяли его известное ухмыляющееся фото и дополнительно отредактировали изображение, сделав лицо более округлым. Поверх картинки появилась подпись «Son»."},{"type":"p","text":"Настоящую популярность мем получил именно в комментариях. Картинку начали массово отправлять под видео, мемами и постами, где кто-то попадал в неловкую ситуацию или принимал максимально сомнительное решение."},{"type":"h2","text":"чей сын-то?"},{"type":"p","text":"В конце 2025 мем перебрался в тик ток, и пользователи начали публиковать в комментах картинки с подписью «Son» и десятком плачущих эмодзи. Чаще всего их использовали как реакцию на что-то тотально нелепое."},{"type":"p","text":"Постепенно мем превратился в универсальный способ сказать что-то вроде «ты серьёзно?», «как так получилось?», то есть по своей функции мем оказался очень похож на старые реакции вроде bruh, но выглядел намного абсурднее."},{"type":"note","text":"главное не забывать добавить много-много рыдающих смайликов!!"},{"type":"h2","text":"мем начал мутировать"},{"type":"p","text":"Как это часто бывает, пользователям быстро наскучила оригинальная версия. Уже через несколько месяцев начали появляться десятки вариаций. Вместо Энтони Маки использовали других знаменитостей, персонажей игр, мультфильмов и даже случайные фотографии из интернета."},{"type":"p","text":"Особенно популярной стала версия с Чарли Кирком, а позже появились совсем абсурдные производные вроде Sonion — гибрида оригинального мема и луковицы. В какой-то момент пользователи начали придумывать новые варианты быстрее, чем кто-либо успевал их запоминать. И всё! Мы получили новый универсальный мем."}],"url":"./pages/articles/art_15.html"},{"id":"art_16","order":16,"title":"это легенда!","h1":"демотиваторы","description":"как демотиваторы стали легендой мемной культуры","slug":"demotivators","cover":"./images/articles/art_16/cover.webp","tags":["ностальгическое","для переписок"],"media":{"images":["./images/articles/art_16/image_1.webp","./images/articles/art_16/image_2.webp"],"videos":["./images/articles/art_16/video_1.webm"]},"content":[{"type":"h2","text":"откуда они вообще взялись"},{"type":"p","text":"Забавно, но изначально демотиваторы вообще не были мемами. В 1990-х в американских офисах были популярны мотивационные постеры. Обычно на них изображали горы, закаты или успешных людей, а внизу писали вдохновляющие фразы про успех, лидерство и достижение целей."},{"type":"p","text":"Очень быстро кому-то пришла в голову идея сделать наоборот, и так появились демотиваторы — пародии на мотивационные плакаты. Вместо вдохновляющих лозунгов там были саркастичные подписи, чёрный юмор и максимально пессимистичные выводы."},{"type":"note","text":"формат оказался настолько удачным, что быстро перекочевал в интернет!"},{"type":"h2","text":"золотая эпоха демотиваторов"},{"type":"p","text":"В русскоязычном интернете демотиваторы взорвались примерно в конце 2000-х и начале 2010-х. Их публиковали буквально везде!! На форумах, в пабликах, на развлекательных сайтах и социальных сетях. Формула всегда была одинаковой. Берётся фотография, добавляется громкий заголовок и короткая подпись снизу."},{"type":"p","text":"По сути, это был один из первых массовых шаблонов для создания мемов. Современные мемы часто строятся по тому же принципу: берётся знакомая картинка и добавляется новый контекст."},{"type":"h2","text":"легенда старого интернета"},{"type":"p","text":"Сейчас демотиваторы выглядят как артефакт из прошлого. Они появились задолго до тиктока, нейроной и брейнротов, но когда-то были главным мемным форматом рунета."},{"type":"p","text":"И если современные мемы живут несколько дней, то демотиваторы успели прожить целую эпоху. Для старого интернета это была настоящая классика!! Но самое крутое, что это всё ещё работает!"}],"url":"./pages/articles/art_16.html"},{"id":"art_17","order":17,"title":"чё за тотя?","h1":"тотя","description":"что такое тотя и почему с этого смеются по итогу","slug":"totr","cover":"./images/articles/art_17/cover.webp","tags":["абсурд","для переписок"],"media":{"images":["./images/articles/art_17/image_1.webp"],"videos":["./images/articles/art_17/video_1.webm","./images/articles/art_17/video_2.webm"]},"content":[{"type":"h2","text":"тотя"},{"type":"p","text":"В 2025 году появился мем «Тотя», на котором изображены два Спанч Боба, которые идут рядом с максимально довольными лицами. Поверх написано «тотя», плюс сердечко. Никаких объяснений, это просто тотя и всё."},{"type":"p","text":"И каким-то образом этого оказалось достаточно, чтобы мем собрал миллионы просмотров и вышел далеко за пределы ру тиктока. Людям нравятся шутки, которые невозможно объяснить никому, даже себе!"},{"type":"h2","text":"откуда тотя"},{"type":"p","text":"Первые вирусные ролики с тотей появились в начале сентября 2025 года в тик токе. Пользователь ddghfjwiedi3929 выложил видео, которое заканчивалось знаменитой картинкой с двумя Спанч Бобами и подписью «тотя». Ролик быстро набрал миллионы просмотров и запустил целую волну подражаний."},{"type":"p","text":"Сама картинка при этом существовала намного раньше. Пользователи выяснили, что кадр с двумя губками бобами происходит из серии «SpongeBob, You\'re Fired!» и гулял по интернету ещё до появления мема."},{"type":"note","text":"именно подпись «тотя» превратила обычный скриншот в полноценный интернет-феномен!"},{"type":"h2","text":"а что это значит"},{"type":"p","text":"Никто не знает, в этом и весь прикол. Мем относится к жанру brainrot-контента: абсурдных, повторяющихся и практически бессмысленных шуток, которые намертво застревают в голове."},{"type":"p","text":"Чем больше люди пытались понять, что такое Тотя, тем популярнее становился мем. В комментариях начали появляться теории, объяснения и целые философские трактаты, которые только добавляли происходящему абсурда!"}],"url":"./pages/articles/art_17.html"},{"id":"art_18","order":18,"title":"delulu — solulu?","h1":"delulu","description":"почему немного жить в фантазиях — это нормально","slug":"delulu","cover":"./images/articles/art_18/cover.webp","tags":["жизненные мемы","для переписок"],"media":{"images":["./images/articles/art_18/image_1.webp"],"videos":["./images/articles/art_18/video_1.webm","./images/articles/art_18/video_2.webm"]},"content":[{"type":"h2","text":"быть delulu теперь не стыдно"},{"type":"p","text":"Когда-то слово «delusional» использовали, чтобы назвать человека оторванным от реальности. Но, конечно же, это начали форсить. Так появилось delulu — максимально сокращённая и намеренно глуповатая версия исходного слова."},{"type":"p","text":"В соцсетях так называют людей, которые живут в своих фантазиях, придумывают себе романтический лор и уверены, что всё обязательно сложится идеально, даже если реальность буквально говорит обратное. И самое крутое и смешное, что это не осуждают!"},{"type":"h2","text":"откуда это вообще взялось"},{"type":"p","text":"Термин активно форсился внутри фанатских сообществ, где словом delulu называли людей, которые слишком сильно верили в свои фантазии про айдолов и отношения с ними. Но потом тикток быстро вытащил слово за пределы фандомов и превратил его в огромный самоироничный мем про жизнь в целом."},{"type":"p","text":"Главная идея delulu максимально простая: если жизнь не даёт нормальный сценарий, значит, его нужно придумать самому. Именно отсюда пошла фраза «delulu is the solulu»."},{"type":"note","text":"Delulu правда помогает некоторым не развалиться и пережить трудности, так что не осуждаем!"},{"type":"h2","text":"устали мы быть реалистами"},{"type":"p","text":"Вообще популярность delulu очень хорошо показывает настроение интернета последних лет. Люди устали от тревоги и выгорания, поэтому тикток внезапно начал романтизировать лёгкое отрицание реальности. Не в серьёзном смысле, а скорее как способ пережить хаос вокруг."},{"type":"p","text":"Да и по итогу, иногда быть немного delulu веселее, чем быть слишком реалистичным! Всё равно каждый из нас хоть немного да живёт по такому принципу."}],"url":"./pages/articles/art_18.html"},{"id":"art_19","order":19,"title":"лучше звоните солу","h1":"better call saul","description":"почему лучше звонить солу, и как адвокат из сериала стал мемом","slug":"saulgoodman","cover":"./images/articles/art_19/cover.webp","tags":["для переписок","фильмы/сериалы"],"media":{"images":["./images/articles/art_19/image_1.webp"],"videos":["./images/articles/art_19/video_1.webm"]},"content":[{"type":"h2","text":"лучше звоните Солу"},{"type":"p","text":"Сол Гудман впервые появился в сериале «Во все тяжкие» как адвокат Уолтера Уайта и Джесси Пинкмана. Персонаж настолько понравился зрителям, что позже получил собственный сериал под названием «Лучше звоните Солу». Однако для соцсетей Сол быстро стал чем-то большим, чем просто герой популярного шоу."},{"type":"p","text":"В мемах его изображают как человека, который способен решить абсолютно любую проблему, причём желательно самым сомнительным способом. Именно поэтому фраза «Better Call Saul» постепенно превратилась в универсальную реакцию на любые неприятности! Особенно популярным стал кадр с улыбающимся Солом на ярком рекламном фоне, который идеально подошёл для мемов."},{"type":"note","text":"Это чувство, кстати, работает и в форсе дримкора и liminal spaces, ведь и там у всех возникает ощущение чего-то знакомого"},{"type":"h2","text":"как Сол стал мемом"},{"type":"p","text":"Настоящий взрыв популярности произошёл в начале 2020-х. Пользователи TikTok, YouTube и Reddit начали массово делать эдиты с Солом Гудманом, накладывая на него драматичную музыку, сигма-монтажи и максимально серьёзные подписи."},{"type":"p","text":"Со временем Сол оказался в той же категории мемных персонажей, что Тайлер Дёрден, Патрик Бейтман и Райан Гослинг. Сол чаще воспринимается как человек, который каким-то чудом способен выкрутиться из любой ситуации. Ведь где бы ни возникла проблема, всегда найдётся кто-то, кто напишет в комментариях: «Better Call Saul»."}],"url":"./pages/articles/art_19.html"},{"id":"art_20","order":20,"title":"подпевайте","h1":"bakamitai","description":"dame da ne или как грустная песня превратилась мем","slug":"bakamitai","cover":"./images/articles/art_20/cover.webp","tags":["ностальгическое","абсурд"],"media":{"images":[],"videos":["./images/articles/art_20/video_1.webm","./images/articles/art_20/video_2.webm","./images/articles/art_20/video_3.webm"]},"content":[{"type":"p","text":"### фотографии научились петь"},{"type":"p","text":"В 2020 году интернет научился оживлять фотографии. Благодаря сервису Deep Nostalgia от MyHeritage пользователи могли загрузить снимок, после чего нейросеть заставляла человека на фотографии моргать, улыбаться и слегка двигать головой."},{"type":"p","text":"Очень быстро этот хайтек превратился в мем. Пользователи начали анимировать всё подряд! Старые семейные фотографии, известных актёров, исторических личностей, персонажей игр и даже мемных героев. А поверх этих роликов всё чаще накладывали песню Bakamitai из серии игр Yakuza."},{"type":"h2","text":"откуда взялась песня"},{"type":"p","text":"На самом деле Bakamitai появилась задолго до мемов. Это караоке-песня из серии игр Yakuza, которую исполняет главный герой Кадзума Кирю. Внутри игры она была обычным мини-развлечением, но спустя годы неожиданно получила вторую жизнь."},{"type":"p","text":"Весной 2020 года пользователи начали использовать технологию deepfake и специальные нейросети для анимации лиц. Они брали фотографии известных людей, персонажей фильмов, животных и даже исторических деятелей, после чего заставляли их исполнять Bakamitai. Именно этот формат и стал вирусным."},{"type":"note","text":"Конечно, петь заставляли и другие песни, но отчего-то именно bakamitai так залетела!"},{"type":"h2","text":"почему мем стал таким популярным"},{"type":"p","text":"Петь могли коты, известные люди, персонажи мультфильмов, мемные герои и даже неодушевлённые предметы. Чем меньше объект подходил для драматичного японского караоке, тем смешнее работал мем. Кроме того, это был один из первых случаев, когда технология дипфейков стала по-настоящему массовым развлечением."},{"type":"p","text":"Bakamitai появился в тот момент, когда интернет только начинал активно играться с нейросетями и дипфейками. Сегодня анимировать лицо может практически любое приложение, но в 2020 году подобные ролики выглядели почти магией."}],"url":"./pages/articles/art_20.html"},{"id":"art_21","order":21,"title":"плачущий купер","h1":"плачущий купер","description":"как одна из самых грустных сцен «Интерстеллара» стала мемом","slug":"crying-cooper","cover":"./images/articles/art_21/cover.webp","tags":["ностальгическое","фильмы/сериалы","жизненные мемы"],"media":{"images":["./images/articles/art_21/image_1.webp"],"videos":["./images/articles/art_21/video_1.webm","./images/articles/art_21/video_2.webm"]},"content":[{"type":"h2","text":"та самая сцена из интерстеллара"},{"type":"p","text":"Мем основан на сцене из фильма Кристофера Нолана, где герой Мэттью Макконахи возвращается на корабль после высадки на планету Миллер и обнаруживает, что из-за эффектов времени прошло уже 23 года. После этого Купер начинает смотреть накопившиеся видеосообщения от своих детей и не может сдержать слёз."},{"type":"p","text":"Сцена быстро стала одной из самых запоминающихся во всём фильме, а позже разошлась по интернету как универсальная реакция на грусть, разочарование и эмоциональные потрясения."},{"type":"h2","text":"как купер стал мемом"},{"type":"p","text":"В конце 2010-х и особенно в 2020-х пользователи начали массово использовать кадры с плачущим Купером в мемах. Обычно формат строился на контрасте: сверху показывали какое-нибудь незначительное событие, а снизу — героя «Интерстеллара», который переживает его максимально трагично."},{"type":"p","text":"Особенно хорошо мем прижился в TikTok и Twitter, где сцену начали использовать для шуток про ностальгию, старые игры, удалённые фотографии, закрывшиеся проекты и на самом-то деле про любые вещи."},{"type":"note","text":"Даже если вы не смотрели «Интерстеллар», есть шанс, что вы всё равно видели плачущего Купера!"},{"type":"h2","text":"почему мем зашёл"},{"type":"p","text":"Мем используют не только для шуток про грусть, но и для ситуаций, когда человек внезапно понимает, сколько времени прошло. Например, когда пересматривает старые видео, возвращается в заброшенную игру или вспоминает мемы, которые казались популярными буквально вчера."},{"type":"p","text":"Наверное, именно поэтому спустя больше десяти лет после выхода фильма кадры с Купером продолжают регулярно появляться в интернете. Некоторые сцены становятся мемами на пару недель."}],"url":"./pages/articles/art_21.html"},{"id":"art_22","order":22,"title":"да кто это","h1":"Данил Колбасенко","description":"подскажите!! кто такой данил колбасенко","slug":"danilkolbasenko","cover":"./images/articles/art_22/cover.webp","tags":["абсурд","для переписок"],"media":{"images":["./images/articles/art_22/image_1.webp"],"videos":["./images/articles/art_22/video_1.webm"]},"content":[{"type":"h2","text":"Откуда взялся мем?"},{"type":"p","text":"История началась довольно буднично, на обычном стриме на платформе Twitch. Блогер heliN139 общался через чат-рулетку. В какой-то момент в чат попал мальчик, он предложил Кириллу сыграть против него один на один в игру Standoff 2, и стример попросил назвать ID игрока, чтобы добавить его в друзья."},{"type":"p","text":"Вместо ника мальчик радостно выкрикнул своё имя: «Данил Колбасенко!». Стример спросил ещё раз, а мальчик снова повторил то же самое уверенным детским голосом. Вот и всё! Видео выложили, но оно лежало без внимания до 2026."},{"type":"note","text":"Кстати, Данила Колбасенко пытались найти, и у него в тот период возникло очень много двойников"},{"type":"h2","text":"Почему это популярно?"},{"type":"p","text":"Детский, максимально уверенный голос, который вместо нужной информации просто называет своё имя. Это звучит настолько искренне, что это уже забавно. Аудио из ролика пошло по рукам."},{"type":"p","text":"В этих видео Данил Колбасенко становится своеобразным главным героем сцены, человеком, который появляется, уверенно заявляет о себе и ломает всю ситуацию. А ещё! Отчего-то у многих возникало ощущение ностальгии, ведь в этой фразе есть некая абсолютная детская наивность."}],"url":"./pages/articles/art_22.html"},{"id":"art_23","order":23,"title":"интернет всегда был таким","h1":"nyan nyan nyan","description":"разбираемся, почему nyan cat — это отец брейнротов","slug":"nyancat","cover":"./images/articles/art_23/cover.webp","tags":["ностальгическое","абсурд"],"media":{"images":[],"videos":["./images/articles/art_23/video_1.webm","./images/articles/art_23/video_2.webm"]},"content":[{"type":"h2","text":"мы не деградировали, мы такие и были"},{"type":"p","text":"Когда люди жалуются, что тикток окончательно превратил интернет в brainrot-помойку, хочется показать им Nyan Cat. Это бородатый мем из далёкого 2011 года, где пиксельный кот с телом из печеньки летит через космос под бесконечное «nyan nyan nyan», пока радуга тянется за ним через весь экран. И миллионы людей смотрели это часами абсолютно добровольно. Так что нет! Интернет не стал странным недавно, он таким и был всегда."},{"type":"p","text":"Мем появился почти из ниоткуда. Художник prguitarman нарисовал кота с телом Pop-Tart, а пользователь saraj00n наложил сверху японскую песню «Nyanyanyanyanyanyanya!». Дальше интернет сделал то, что умеет лучше всего. Видео и зацикливали, и растягивали, и вставляли туда всякое, иначе говоря — безжалостно форсили."},{"type":"note","text":"Nyan nyan nyan! ^_^"},{"type":"h2","text":"от нянкэта до брейнрота"},{"type":"p","text":"Между старым и новым интернетом не такая уж огромная пропасть. От nyan cat пошёл MLG монтаж, а там и до абсурда и брейнротов рукой подать."},{"type":"p","text":"Меняются инструменты, качество картинки и скорость алгоритмов, но сам принцип остаётся тем же. Интернет просто обожает хаотичные штуковины. В Nyan Cat нет шутки как таковой. Это просто летающий кот под музыку. Но именно поэтому он и стал легендой."}],"url":"./pages/articles/art_23.html"},{"id":"art_24","order":24,"title":"бьём по столу вместе","h1":"Дензел бьёт по столу","description":"Давайте разбираться, зачем он бьёт по столу","slug":"denzelwashingtonvstable","cover":"./images/articles/art_24/cover.webp","tags":["фильмы/сериалы","для переписок","жизненные мемы"],"media":{"images":[],"videos":["./images/articles/art_24/video_1.webm","./images/articles/art_24/video_2.webm"]},"content":[{"type":"h2","text":"Откуда взялся мем?"},{"type":"p","text":"В конце декабря рунет внезапно накрыло старым кадром, где актёр Дензел Вашингтон с разочарованием яростно бьёт ладонью по столу. Сцена взята из фильма «Малкольм Икс» (1992). Смысл у мема максимально прямолинейный, ведь само движение и эмоция сразу дают понять всё."},{"type":"p","text":"На эти кадры авторы видеороликов накладывают личные ситуации, связанные с работой, финансами, обманом; а иногда место имеют постироничные ситуации, и мем начинает играть новыми красками."},{"type":"note","text":"Надеемся, следующим популярным мемом будет удар по креслу"},{"type":"h2","text":"Почему мем зашёл"},{"type":"p","text":"Во-первых, это чистая эмоция без объяснений, и даже без знания фильма всё понятно за секунду. Во-вторых, жёсткий физический жест. Очень часто этот удар по столу хочется повторить хотя бы мысленно."},{"type":"p","text":"Плюс музыка! Чаще всего видео делают под трек «По глазам» от Слава Мэрлоу или под «Matadora». Треки усиливают драму и делают момент ещё болезненнее."}],"url":"./pages/articles/art_24.html"},{"id":"art_25","order":25,"title":"что ни день то экшен лютый","h1":"собака и яблоко","description":"у этой собаки с яблоком в жизни творится тотальный экшн... надо разобраться","slug":"appledog","cover":"./images/articles/art_25/cover.webp","tags":["ии","абсурд","новые мемы"],"media":{"images":[],"videos":["./images/articles/art_25/video_1.webm","./images/articles/art_25/video_2.webm"]},"content":[{"type":"h2","text":"пёс, который не отпустит яблоко"},{"type":"p","text":"Само изображение собаки с яблоком существовало и раньше, и пользователи публиковали его как реакционную картинку, а иногда просто пересылали друг другу как милое фото. Однако настоящая популярность пришла к псу только после бума ии видосов!"},{"type":"p","text":"Одним из первых вирусных роликов считается видео, опубликованное в ноябре 2024 года пользователем artsdd6. Автор загрузил фотографию собаки в нейросеть Hailuo AI и попросил систему превратить её в видео. Результат оказался настолько странным и динамичным, что быстро разлетелся по TikTok: собака с яблоком во рту убегала от преследователя, а происходящее больше напоминало сон, чем реальную сцену."},{"type":"note","text":"Самое главное любой ценой сохранить яблоко"},{"type":"h2","text":"чем безумнее, тем лучше"},{"type":"p","text":"После успеха первых роликов пользователи начали массово экспериментировать с тем же изображением. Собаку отправляли в космос, помещали в средневековые битвы, заставляли убегать от супергероев, участвовать в погонях и проходить через взрывы. Всё это создавалось с помощью генераторов видео вроде Hailuo AI и других сервисов image-to-video."},{"type":"p","text":"Особую популярность мем получил благодаря ошибкам нейросетей. Алгоритмы пытались сохранить яблоко в пасти собаки, но по пути ломали физику происходящего. В результате яблоко могло внезапно срастись с головой пса, сама собака превращалась в странное гибридное существо, а сюжет ролика за несколько секунд успевал пройти путь от погони до полноценного фантастического фильма."}],"url":"./pages/articles/art_25.html"},{"id":"art_26","order":26,"title":"подумскроллим?","h1":"думскроллинг","description":"что такое думскроллинг и почему так сложно остановиться","slug":"doomscrolling","cover":"./images/articles/art_26/cover.webp","tags":["жизненные мемы"],"media":{"images":["./images/articles/art_26/image_1.webp"],"videos":["./images/articles/art_26/video_1.webm"]},"content":[{"type":"h2","text":"что это вообще такое"},{"type":"p","text":"Слово doomscrolling появилось примерно в конце 2010-х и стало особенно популярным во время пандемии. Сам термин состоит из двух частей: doom — что-то мрачное, тревожное и scrolling — бесконечная прокрутка ленты."},{"type":"p","text":"Особенно хорошо для этого подходят бесконечные ленты, где новый контент появляется автоматически и нет нормальной точки остановки. Даже создатель концепции бесконечного скролла позже говорил, что сожалеет о том, насколько сильно такой формат удерживает внимание пользователей."},{"type":"note","text":"думскроллинг специально не начнёшь! оно само..."},{"type":"h2","text":"мем или реальная привычка?"},{"type":"p","text":"Сегодня слово думскроллинг уже стало мемом. Его используют под видео про ночное зависание в телефоне и бесконечное обновление ленты."},{"type":"p","text":"Но сама привычка вполне реальна. Исследования связывают думскроллинг с ухудшением самочувствия, тревожностью и ощущением перегруженности информацией."}],"url":"./pages/articles/art_26.html"},{"id":"art_27","order":27,"title":"это тот хомяк из пэинта!","h1":"хомяк","description":"как криво нарисованный хомяк стал универсальной эмоцией интернета","slug":"almarts27hamster","cover":"./images/articles/art_27/cover.webp","tags":["новые мемы","для переписок","жизненные мемы"],"media":{"images":["./images/articles/art_27/image_1.webp"],"videos":["./images/articles/art_27/video_1.webm"]},"content":[{"type":"h2","text":"на все случаи жизни"},{"type":"p","text":"TikTok, Telegram и Pinterest заполонили картинки с простым белым хомяком, нарисованным будто за пару минут в Paint. У персонажа почти всегда одинаковый внешний вид, его легко узнать! Грушевидное тело, маленькие лапки, розовый нос и максимально простые линии. Несмотря на такую примитивность, именно этот стиль сделал хомяка узнаваемым."},{"type":"p","text":"Автором персонажа считается художник под ником almarts27. Постепенно начали появляться новые версии хомяка, менялось выражение лица, поза или детали. Так появились плачущий хомяк, хомяк в очках, хомяк-бизнесмен, хомяк со стеклянными глазами и десятки других вариаций."},{"type":"note","text":"Каждая из вариаций быстро превратилась в отдельную реакцию для конкретных жизненных ситуаций!"},{"type":"h2","text":"почему мем стал таким популярным"},{"type":"p","text":"Секрет популярности хомяка оказался довольно простым. В отличие от многих мемов, его не нужно объяснять. Пользователь сразу понимает, что чувствует персонаж: усталость, панику, радость, отчаяние или попытку выглядеть серьёзно. Поэтому рисунки начали активно использовать как реакции в комментариях, переписках и стикерпаках."},{"type":"p","text":"Со временем мем вышел далеко за пределы TikTok. Хомяка стали печатать на футболках, рисовать на холстах, превращать в брелоки и даже вырезать из ковров. При этом сам персонаж почти не менялся — менялись только его эмоции. Возможно, именно поэтому хомяк оказался настолько живучим, ведь среди десятков вариантов практически каждый может найти того самого хомяка, который лучше всего описывает его текущее состояние."}],"url":"./pages/articles/art_27.html"},{"id":"art_28","order":28,"title":"подпевайте","h1":"гора эверест","description":"как кавер на песню из «Эйфории» превратился в мем","slug":"mounteverest","cover":"./images/articles/art_28/cover.webp","tags":["новые мемы","для переписок"],"media":{"images":[],"videos":["./images/articles/art_28/video_1.webm","./images/articles/art_28/video_2.webm"]},"content":[{"type":"h2","text":"гора эверест это ерунда"},{"type":"p","text":"Весной 2025 года русскоязычный TikTok захватила фраза «Гора Эверест на фоне меня». Источником мема стал блогер Константин Кудесник, который записал вольный перевод песни Mount Everest британского музыканта Labrinth, известной многим по сериалу «Эйфория»."},{"type":"p","text":"В оригинале герой песни заявляет, что находится на вершине мира. Кудесник превратил эту идею в максимально самоуверенный и абсурдный монолог, где даже самая высокая гора планеты оказывается незначительной на его фоне. Ролик быстро набрал миллионы просмотров, а отдельные строчки начали жить собственной жизнью далеко за пределами оригинального видео."},{"type":"note","text":"Настоящая популярность пришла к мему после появления многочисленных эдитов!"},{"type":"h2","text":"мем про людей, которые слишком уверены в себе"},{"type":"p","text":"Фразой стали описывать спортсменов, преподавателей, родственников и просто знакомых, которые любят преувеличивать собственные достижения или смотреть на окружающих свысока. Появились коллективные перепевки, ремиксы и новые версии трека, а сам мем превратился в универсальную шутку про завышенную самооценку."},{"type":"p","text":"В результате обычный кавер на песню из «Эйфории» неожиданно стал одним из самых заметных русскоязычных мемов 2025 года. И теперь каждый раз, когда кто-то слишком сильно верит в собственное величие, где-то на фоне уже начинает играть знакомая мелодия."}],"url":"./pages/articles/art_28.html"},{"id":"art_29","order":29,"title":"ой! это ж буквально я!","h1":"Райан Гослинг","description":"Как Райан Гослинг стал мемом (да не умер он в конце «Драйва»!!)","slug":"literallymegosling","cover":"./images/articles/art_29/cover.webp","tags":["жизненные мемы","для переписок","фильмы/сериалы"],"media":{"images":["./images/articles/art_29/image_1.webp","./images/articles/art_29/image_2.webp"],"videos":["./images/articles/art_29/video_1.webm"]},"content":[{"type":"h2","text":"почему именно райан гослинг"},{"type":"p","text":"Не каждый актёр становится мемом, а ещё меньше актёров остаются мемом больше десяти лет. Райану Гослингу каким-то образом удалось и то, и другое. За это время он успел побыть героем романтических мемов, символом грустных сигма эдитов, главным персонажем культуры literally me и даже лицом одного из самых абсурдных интернет-приколов про хлопья."},{"type":"p","text":"При этом большинство мемов строится не на самом актёре, а на его образе. В интернете Гослинг давно превратился в отдельного персонажа, который существует параллельно с реальным человеком."},{"type":"h2","text":"откуда всё пошло"},{"type":"p","text":"Одной из первых больших мемных волн стал Ryan Gosling Won\'t Eat His Cereal. В 2013 году пользователь Райан Макгенри начал публиковать короткие видео, где пытался накормить Гослинга хлопьями через экран телевизора. В каждом ролике актёр демонстративно отказывался есть предложенный завтрак. Шутка оказалась настолько нелепой, что быстро разошлась по всему интернету."},{"type":"p","text":"Позже эстафету подхватили фильмы «Драйв» и «Бегущий по лезвию 2049». Их герои оказались идеальным материалом для новой волны мемов про одиночество, размышления о жизни и ощущение собственной исключительности."},{"type":"note","text":"Мемы про Райана Гослинга приходят и уходят, а он всё ещё не умер в конце «Драйва»"},{"type":"h2","text":"буквально райан гослинг"},{"type":"p","text":"К началу 2020-х Райан Гослинг стал одним из самых узнаваемых лиц интернет-культуры. Пользователи начали использовать его фотографии буквально в любой ситуации!  Дополнительную волну популярности принесла «Барби», где Гослинг сыграл Кена."},{"type":"p","text":"В итоге получилась довольно редкая история. Большинство мемов живут несколько месяцев или лет. Райан Гослинг остаётся мемом уже больше десятилетия, постоянно меняя форму, но не исчезая из интернета."}],"url":"./pages/articles/art_29.html"},{"id":"art_30","order":30,"title":"это не муся вроде....","h1":"муся, это ты?","description":"кто такая муся?","slug":"musya","cover":"./images/articles/art_30/cover.webp","tags":["новые мемы","для переписок","абсурд"],"media":{"images":["./images/articles/art_30/image_1.webp"],"videos":["./images/articles/art_30/video_1.webm"]},"content":[{"type":"h2","text":"муся, вернись домой"},{"type":"p","text":"Мем «Муся, это ты?» появился благодаря юмористическому ролику на YouTube-канале Batek_Official. По сюжету один из героев рассказывает, что у него пропала любимая кошка Муся. Позже ему звонят по телефону, и в трубке раздаётся мяуканье. Обрадованный хозяин тут же спрашивает: «Муся, это ты? Вернись домой, я скучаю!». Однако оказывается, что звонок был всего лишь жестокой шуткой."},{"type":"p","text":"Фраза быстро разлетелась по интернету и сначала использовалась в анимациях, ремиксах и коротких скетчах. Но настоящую популярность мем получил уже в 2026 году, когда пользователи TikTok начали использовать звук в совершенно новом контексте."},{"type":"note","text":"Муся, это ты? Нет, это точно не Муся."},{"type":"h2","text":"как тигр стал мусей"},{"type":"p","text":"Самой популярной вариацией стали ролики с дикими животными. Пользователи брали фотографии тигров, леопардов, крокодилов и других грозных хищников, сидящих где-нибудь в болоте, тумане или зарослях, а поверх накладывали звук с поисками Муси. Контраст между безобидной домашней кошкой и огромным опасным зверем оказался настолько нелепым, что быстро превратился в отдельный мемный формат."},{"type":"p","text":"Со временем Мусей начали называть вообще что угодно. Старые игрушки, изменившихся знакомых, самолёты с необычной раскраской и любые объекты, которые хотя бы отдалённо напоминали потерянную кошку. Мем постепенно ушёл в постиронию и потерял связь с оригинальным сюжетом!"}],"url":"./pages/articles/art_30.html"},{"id":"art_31","order":31,"title":"ishowspeed","h1":"ishowspeed","description":"как стримерские реакции ishowspeed стали отдельным мемом","slug":"ishowspeed","cover":"./images/articles/art_31/cover.webp","tags":["для переписок","абсурд","новые мемы"],"media":{"images":[],"videos":["./images/articles/art_31/video_1.webm","./images/articles/art_31/video_2.webm"]},"content":[{"type":"h2","text":"стример, которого разобрали на реакции"},{"type":"p","text":"IShowSpeed — один из тех интернет-персонажей, которых многие знают не по полным стримам, а по нарезкам. Популярность он начал быстро набирать ещё в 2021 году благодаря игровым трансляциям, громким реакциям и очень эмоциональной манере поведения перед камерой."},{"type":"p","text":"Со временем отдельные моменты со стримов начали жить отдельно от самого автора. Speed Dance, испуганные реакции, крики, внезапные танцы и разговоры с Talking Ben быстро разошлись по TikTok, YouTube Shorts и мемным пабликам. В итоге iShowSpeed стал постоянным источником реакционных мемов."},{"type":"note","text":"Иногда достаточно одного выражения лица, чтобы попасть в мемы на годы!"},{"type":"h2","text":"почему его клипы так легко становятся мемами"},{"type":"p","text":"Главная особенность мемов с iShowSpeed — их очень просто вырывать из контекста. Он может резко удивиться, испугаться, начать танцевать или спорить с приложением Talking Ben, и этот фрагмент уже работает как готовая реакция. Поэтому его клипы часто используют не только фанаты, но и люди, которые вообще не смотрят стримы."},{"type":"p","text":"Особенно важную роль сыграли вертикальные платформы. TikTok и YouTube Shorts идеально подходят для таких нарезок, так как зрителю не нужно знать весь стрим, достаточно увидеть одну сильную эмоцию. Так из длинных трансляций появляются короткие мемы, которые потом расходятся дальше уже как самостоятельные картинки, звуки и реакции."}],"url":"./pages/articles/art_31.html"},{"id":"art_32","order":32,"title":"ага! попались!","h1":"рикролл","description":"история самого известного троллинга","slug":"rickroll","cover":"./images/articles/art_32/cover.webp","tags":["ностальгическое","абсурд"],"media":{"images":[],"videos":["./images/articles/art_32/video_1.webm","./images/articles/art_32/video_2.webm"]},"content":[{"type":"h2","text":"что такое рикролл"},{"type":"p","text":"Рикролл — это интернет-розыгрыш, в котором человеку обещают одну ссылку, а на самом деле отправляют музыкальный клип Рика Эстли на песню Never Gonna Give You Up. Жертва ожидает увидеть важную новость, редкое видео, интересную находку или полезную информацию, а получает Рика Эстли образца 1987 года."},{"type":"p","text":"История начинается в середине 2000-х на имиджборде 4chan. Тогда там уже существовал похожий розыгрыш под названием duckroll. В 2007 году пользователи решили заменить утку на клип Never Gonna Give You Up, и родился рикролл."},{"type":"note","text":"Ссылкой могли замаскировать что угодно! Чем интереснее была приманка, тем лучше."},{"type":"h2","text":"почему это стало таким популярным"},{"type":"p","text":"Во многом из-за своей простоты, ведь для рикролла не нужны специальные картинки, сложный монтаж или контекст, хватит одной ссылки. К концу 2000-х рикролл стал настолько популярным, что начал появляться уже вне сети."},{"type":"p","text":"В 2008 году во время бейсбольного матча на экране стадиона внезапно показали клип Рика Эстли вместо анонсированного видео. Примерно в то же время рикроллы начали устраивать на телевидении, концертах и различных публичных мероприятиях. Фактически интернет-шутка стала частью поп-культуры."}],"url":"./pages/articles/art_32.html"},{"id":"art_33","order":33,"title":"пов вы читаете статью","h1":"POV форматы","description":"пов три буквы стали отдельным жанром тиктока","slug":"POV","cover":"./images/articles/art_33/cover.webp","tags":["ностальгическое","жизненные мемы"],"media":{"images":[],"videos":["./images/articles/art_33/video_1.webm","./images/articles/art_33/video_2.webm","./images/articles/art_33/video_3.webm"]},"content":[{"type":"h2","text":"точка зрения"},{"type":"p","text":"POV расшифровывается как point of view, то есть точка зрения. В TikTok этим словом начали обозначать ролики, где зрителя как будто помещают внутрь конкретной ситуации. Обычно видео подписывали фразой вроде «POV: ты новенький в классе» или «POV: ты случайно встретил бывшего друга», а дальше автор разыгрывал короткую сценку прямо в камеру."},{"type":"p","text":"Формат стал особенно заметным в 2020–2021 годах, когда TikTok активно рос, а короткие ролики всё чаще превращались в мини-скетчи. В отличие от обычного видео, POV сразу задавал роль зрителю, ведь он становился участником ситуации. Именно поэтому формат быстро прижился в комедийных сценках, романтических роликах, хоррор-зарисовках и подростковых драмах."},{"type":"h2","text":"от ролевых сценок до абсурда"},{"type":"p","text":"Изначально POV-видео часто были почти актёрскими миниатюрами. Авторы изображали персонажей, которые обращаются к зрителю, разговаривают с ним или реагируют на его воображаемые действия. Формат вырос именно из тик токов, где пользователь получал необычную перспективу внутри конкретной сцены. Позже такие видео стали объединяться хэштегом pov и быстро превратились в отдельный мемный жанр."},{"type":"p","text":"Со временем формат начали всё чаще использовать неправильно или специально абсурдно. Вместо настоящей «точки зрения» появлялись мега абсурдные подписи. Пользователи могли показывать не взгляд героя, а просто любую ситуацию, где подпись сама по себе становилась шуткой."},{"type":"note","text":"В итоге POV перестал быть только способом съёмки и стал забавным форматом для мемов!"},{"type":"h2","text":"почему формат выжил"},{"type":"p","text":"POV оказался удобным, потому что его можно применить почти к чему угодно. Достаточно написать короткую подпись, и обычный ролик сразу получает сюжет, а зритель понимает, кем он должен быть, где находится и почему происходящее выглядит смешно или неловко. Поэтому формат пережил пик 2020–2021 годов и до сих пор периодически возвращается в новых версиях."},{"type":"p","text":"Сейчас POV используют не только для драматичных или романтических сценок, но и для постироничных мемов, рекламных роликов, хоррор-видео и обычных бытовых ситуаций. Формат стал настолько привычным, что его уже не всегда воспринимают как отдельный тренд. Но именно с этих трёх букв для многих начиналась эпоха TikTok, где любой пользователь мог попасть в любой сценарий!"}],"url":"./pages/articles/art_33.html"},{"id":"art_34","order":34,"title":"хоумлендер вздыхает","h1":"хоумлендер вздыхает","description":"как кадр из «Пацанов» стал универсальной реакцией","slug":"homelander","cover":"./images/articles/art_34/cover.webp","tags":["новые мемы","фильмы/сериалы","для переписок","жизненные мемы"],"media":{"images":["./images/articles/art_34/image_1.webp"],"videos":["./images/articles/art_34/video_1.webm"]},"content":[{"type":"h2","text":"тот самый выдох"},{"type":"p","text":"В 2022 году после выхода седьмой серии третьего сезона сериала «Пацаны» зрители обратили внимание на момент с Хоумлендером. По сюжету персонаж выступает перед толпой и замечает человека, которого на секунду принимает за Солдатика. Закончив речь и оказавшись за кулисами, он делает тяжёлый выдох, пытаясь справиться с напряжением."},{"type":"p","text":"Спустя некоторое время этот фрагмент начали активно распространять в соцсетях в виде гифок и коротких видео. Пользователи быстро нашли ему десятки бытовых применений! Мем оказался удобной реакцией для любых ситуаций, когда человек долго находился в стрессе и наконец получает возможность выдохнуть."},{"type":"note","text":"Мем стал очень универсальным, его активно используют и в тик токах, и в стикерах!"},{"type":"h2","text":"что там дальше творилось"},{"type":"p","text":"Со временем мем начал жить собственной жизнью. Пользователи стали редактировать оригинальный кадр, всё сильнее раздувая щёки Хоумлендера. В TikTok, X и Telegram появились версии, где лицо персонажа увеличивалось до совершенно абсурдных размеров, а сам кадр превращался в полноценный шаблон для монтажа и стикеров."},{"type":"p","text":"При этом смысл мема почти не изменился. Как и в оригинальной сцене, его продолжают использовать для изображения усталости, нервного напряжения, облегчения или попытки сдержать эмоции. Благодаря этому короткий эпизод из «Пацанов» превратился в одну из самых узнаваемых реакций последних лет, а многочисленные редактирования сделали его ещё более заметным за пределами самого сериала."}],"url":"./pages/articles/art_34.html"},{"id":"art_35","order":35,"title":"жизнь мемов","h1":"жизненный цикл мемов","description":"почему раньше мемы жили годами, а сейчас умирают за неделю","slug":"memelifecycle","cover":"./images/articles/art_35/cover.webp","tags":["ностальгическое"],"media":{"images":["./images/articles/art_35/image_1.webp"],"videos":["./images/articles/art_35/video_1.webm","./images/articles/art_35/video_2.webm"]},"content":[{"type":"h2","text":"рождение"},{"type":"p","text":"Каждый день в интернете появляются тысячи потенциальных мемов. Забавное видео, странная фотография, неудачный кадр из интервью или случайная фраза  может внезапно оказаться в рекомендациях миллионов людей."},{"type":"p","text":"Но мемом становится далеко не каждый прикол! Чтобы закрепиться в интернете, контент должен быть простым, узнаваемым и легко адаптируемым. Именно поэтому многие популярные мемы быстро начинают обрастать вариациями, ремиксами и новыми форматами."},{"type":"note","text":"если мем начали массово переделывать — ура, он выжил!"},{"type":"h2","text":"вот и всё!"},{"type":"p","text":"Люди делают эдиты, создают новые шаблоны, используют мем в комментариях и вставляют его в совершенно неожиданные ситуации. Сейчас этот этап может наступить за считанные дни. Иногда достаточно одного вирусного ролика в тиктоке, чтобы о новом формате узнал весь интернет."},{"type":"p","text":"Раньше, во времена форумов и раннего YouTube мемы распространялись постепенно и могли быть популярными месяцами и даже годами. Но у любого мема есть момент, когда его становится слишком много, ведь когда формат появляется буквально везде, шутка перестаёт удивлять, а новые версии уже не вызывают той же реакции. Так мем постепенно уходит из рекомендаций и освобождает место следующему."},{"type":"h2","text":"почему сейчас всё происходит быстрее"},{"type":"p","text":"Во многом дело в алгоритмах. Современные платформы вроде TikTok способны показать новый тренд огромному количеству людей буквально за несколько часов. Благодаря этому мемы взлетают гораздо быстрее, чем раньше."},{"type":"p","text":"Но работает это и в обратную сторону. Если контента становится слишком много, алгоритмы быстро переключают внимание пользователей на что-то новое. Поэтому многие современные мемы живут неделю, а иногда и вовсе несколько дней. Но не боимся! Иногда мемы получают вторую жизнь!!"}],"url":"./pages/articles/art_35.html"},{"id":"art_36","order":36,"title":"алло алло звонят","h1":"возьми телефон детка","description":"как фрагмент стрима Toxi$ превратился в мем","slug":"vozmitelefondetka","cover":"./images/articles/art_36/cover.webp","tags":["новые мемы","для переписок"],"media":{"images":["./images/articles/art_36/image_1.webp"],"videos":["./images/articles/art_36/video_1.webm"]},"content":[{"type":"h2","text":"откуда взялся мем"},{"type":"p","text":"Фраза «Возьми телефон, детка» пришла в мемы из трека Nobody рэпера Toxi$, выпущенного осенью 2025. Однако настоящая популярность настигла её только несколько месяцев спустя. В феврале 2026 года пользователи начали массово распространять фрагмент стрима, на котором музыкант сидит дома и напевает собственную песню в непринуждённой обстановке."},{"type":"p","text":"Именно этот момент быстро разошёлся по TikTok, Telegram и другим соцсетям. Пользователи стали вырезать отдельные фразы, делать ремиксы и использовать звук в коротких роликах. Вместе с вирусным припевом популярность получили и другие фрагменты стрима, включая момент, где Токсис начинает танцевать и вместо ответа на собственный вопрос отбивает ритм пальцами."},{"type":"note","text":"После вирусного распространения звук начал жить отдельно от оригинальной песни, конечно же!"},{"type":"h2","text":"почему мем стал популярным"},{"type":"p","text":"Пользователи стали использовать его в роликах про любые ситуации, связанные со звонками, сообщениями и попытками выйти на связь. Чаще всего мем появлялся в шутках про бывших партнёров, родственников, начальство или людей, которые внезапно вспоминают о вас в самый неподходящий момент."},{"type":"p","text":"Постепенно формат расширился. Фраза стала использоваться не только буквально, но и как реакция на любые вещи, которые настойчиво напоминают о себе. Благодаря этому звук быстро превратился в универсальный шаблон, который продолжает использоваться далеко за пределами контекста оригинального трека."}],"url":"./pages/articles/art_36.html"},{"id":"art_37","order":37,"title":"без суеты","h1":"не спеша","description":"пародия на ностальгические видео, которая превратилась в  брейнрот","slug":"cheremsha","cover":"./images/articles/art_37/cover.webp","tags":["ии","абсурд","новые мемы"],"media":{"images":["./images/articles/art_37/image_1.webp"],"videos":["./images/articles/art_37/video_1.webm"]},"content":[{"type":"h2","text":"тихо, не спеша, без суеты"},{"type":"p","text":"Весной 2026 года русскоязычный TikTok заполонили ролики, начинавшиеся со слов «В Советском Союзе...». Видео были стилизованы под советские документальные фильмы и сопровождались спокойным дикторским голосом, рассказывающим о жизни в СССР. Однако вместо реальных историй зрителей ждали всё более абсурдные сюжеты, где люди купались в ядерных реакторах, использовали стекловату в быту и решали бытовые проблемы совершенно невероятными способами."},{"type":"p","text":"Сам мем вырос из популярности нейросетевых роликов о «советской жизни», которые активно распространялись в конце 2025 и начале 2026 года. Со временем пользователи начали пародировать однотипные сюжеты и характерный стиль повествования."},{"type":"note","text":"Особенно быстро вирусными стали фразы вроде «тихо, не спеша, без суеты»"},{"type":"h2","text":"черемша, стекловата и обогащённый уран"},{"type":"p","text":"По мере развития тренда вокруг него появилась собственная мемная вселенная. В роликах начали регулярно появляться персонажи вроде Черемши, который мог заменить транспорт, отопление, лифт и практически любую вещь в стране. Компанию ему составляли Брдыщ, Сёмга и другие герои, а сами истории становились всё более сюрреалистичными."},{"type":"p","text":"Одной из особенностей мема стало сочетание ностальгической эстетики с нейросетевой нелогичностью. Ролики использовали узнаваемые образы советской эпохи, но наполняли их абсурдными деталями и скороговорками. Благодаря этому формат быстро превратился в отдельный жанр контента, породив десятки персонажей, тысячи пародий и собственный набор мемных фраз!"}],"url":"./pages/articles/art_37.html"},{"id":"art_38","order":38,"title":"синдром главного героя","h1":"main character syndrome","description":"почему люди в интернете называют других главными героями?","slug":"maincharactersyndrome","cover":"./images/articles/art_38/cover.webp","tags":["жизненные мемы","для переписок"],"media":{"images":["./images/articles/art_38/image_1.webp"],"videos":["./images/articles/art_38/video_1.webm","./images/articles/art_38/video_2.webm"]},"content":[{"type":"h2","text":"ты не в фильме. или по итогу да?"},{"type":"p","text":"В какой-то момент интернет начал массово вести себя так, будто жизнь — это долгожданный фильм от A24. Люди идут по улице в наушниках под грустную музыку, смотрят в окно автобуса как после тяжёлого сюжетного поворота и снимают видео так, будто прямо сейчас начинается финальная сцена сезона."},{"type":"p","text":"Так появился термин main character syndrome или синдром главного героя. Им называют состояние, когда человек начинает воспринимать себя как центрального персонажа собственной истории, а весь остальной мир — как фон для своего лора, эстетики и прокачка персонажа."},{"type":"h2","text":"откуда это взялось"},{"type":"p","text":"Сам термин начал активно форситься в тиктоке в начале 2020-х, когда люди массово начали романтизировать повседневность. Интернет внезапно решил, что даже самые обычные вещи должны ощущаться cinematic. Поездка в метро превращалась в меланхоличный монтаж, поход за кофе — в инди-фильм, а случайный взгляд в зеркало — в момент «главный герой осознаёт себя»."},{"type":"p","text":"Особенно сильно это подхватил тикток, потому что сама платформа идеально работает на ощущение персонального кино. Алгоритм постоянно показывает чужую жизнь как набор красивых сцен, вайбов и эстетичных моментов. Из-за этого люди начали не просто жить, а будто бы постоянно наблюдать за собой со стороны камеры."},{"type":"note","text":"Воображая себя главным героем, обычный вторник становится куда круче!"},{"type":"h2","text":"да мы все немного main characters"},{"type":"p","text":"С одной стороны, над синдромом гг постоянно шутят. Мемами стали люди, которые слишком драматично пьют кофе, танцуют посреди улицы или ведут себя так, будто случайные прохожие обязаны участвовать в их character arc. Особенно тикток любит видео с подписями уровня «bro thinks he’s the main character»."},{"type":"p","text":"Но с другой стороны, в этом есть что-то даже полезное. Многие начали воспринимать синдром главного героя как способ сделать жизнь чуть интереснее. Романтизировать мелочи, замечать красивые моменты и хоть иногда чувствовать себя не NPC в бесконечной рутине — звучит не так уж плохо."}],"url":"./pages/articles/art_38.html"},{"id":"art_39","order":39,"title":"caramelldansen","h1":"caramelldansen","description":"как шведская песня начала нулевых форсилась в эпоху карантина","slug":"caramelldansen","cover":"./images/articles/art_39/cover.webp","tags":["ностальгическое"],"media":{"images":[],"videos":["./images/articles/art_39/video_1.webm","./images/articles/art_39/video_2.webm"]},"content":[{"type":"h2","text":"от аниме-мема до мега-флешмоба"},{"type":"p","text":"В середине 2000-х пользователи ускорили трек Caramelldansen группы Caramell и наложили его на короткую зацикленную анимацию персонажей из визуальной новеллы Popotan. Так появился знаменитый танец с руками над головой, изображающими заячьи ушки."},{"type":"p","text":"Мем быстро вышел далеко за пределы аниме-сообщества. Пользователи начали перерисовывать танец с героями других аниме, игр, фильмов и мультфильмов. К концу 2000-х Caramelldansen уже был настоящей интернет-классикой, а сам танец стал одним из самых узнаваемых символов ранней эпохи YouTube и фанатской культуры."},{"type":"note","text":"Для многих, кстати, было большим удивлением, что песня эта исполняется на шведском языке."},{"type":"h2","text":"карантинный рейв в четырёх стенах"},{"type":"p","text":"Весной 2020 года мем неожиданно пережил новую волну популярности. Во время локдаунов пользователи TikTok массово начали использовать песню в роликах с домашними вечеринками и импровизированными рейвами. Популярности способствовал специальный эффект, который превращал экран в мигающий клубный стробоскоп."},{"type":"p","text":"Формат был максимально простым: человек сидел дома с уставшим видом, а затем под первые секунды Caramelldansen резко превращал свою комнату в танцпол. Многие снимали такие видео в пижаме, спальне или за рабочим столом, подчёркивая абсурдность ситуации. На фоне всеобщей изоляции мем стал способом посмеяться над собственным заточением и хотя бы ненадолго почувствовать атмосферу вечеринки."},{"type":"p","text":"В итоге Caramelldansen оказался одним из немногих мемов, который смог пережить сразу несколько эпох интернета. От аниме-форумов середины 2000-х до TikTok времён карантина — всё это время ускоренная шведская песня продолжала заставлять людей танцевать."}],"url":"./pages/articles/art_39.html"},{"id":"art_40","order":40,"title":"а я патрик бейтман","h1":"сигма","description":"как герой «Американского психопата» стал мемом про ауру","slug":"patrickbateman","cover":"./images/articles/art_40/cover.webp","tags":["фильмы/сериалы"],"media":{"images":[],"videos":["./images/articles/art_40/video_1.webm","./images/articles/art_40/video_2.webm"]},"content":[{"type":"h2","text":"откуда взялся мем"},{"type":"p","text":"Фильм «Американский психопат» вышел в 2000 году и со временем получил культовый статус. Мемы по нему начали появляться ещё в конце 2000-х, но по-настоящему активно Патрик Бейтман разошёлся в интернете уже в 2020-х. Даже если человек никогда не смотрел кино целиком, он всё равно мог видеть его в эдитах, реакциях и мемах."},{"type":"p","text":"Особенно популярным стал кадр, где Бейтман делает то самое сигма-лицо. В оригинальной сцене герой сидит за ужином с Полом Алленом, а тот не узнаёт его и говорит о нём в третьем лице. Бейтман в ответ странно кривит лицо, и именно этот момент позже стал основой для Sigma Face — тикток-тренда, где пользователи повторяли его выражение как реакцию на что-то максимально уверенное, странное или «аурное»."},{"type":"note","text":"В фильме Патрик нервничает, сравнивает себя с другими, бесится из-за мелочей и постоянно пытается поддерживать идеальную картинку. Но в коротких эдитах остаётся только костюм, уверенный взгляд и красивый кадр."},{"type":"h2","text":"эдиты сделали своё дело"},{"type":"p","text":"В тиктоке и рилсах Бейтмана часто используют в нарезках под фонк, замедленные треки и резкий монтаж. Там он появляется рядом с другими узнаваемыми персонажами из фильмов и сериалов, а его образ постепенно превращается не столько в героя конкретного фильма, сколько в универсальную картинку для крутого вайба."},{"type":"p","text":"Патрик Бейтман стал удобным мемом, ведь им можно показать уверенность,  удовольствие или просто странную реакцию. Где-то это ирония, где-то эдит ради красоты, а где-то просто картинка, которая хорошо работает в комметнах."}],"url":"./pages/articles/art_40.html"},{"id":"art_41","order":41,"title":"эстетика выгорания","h1":"tiredcore","description":"почему усталость внезапно стала красивой","slug":"burnoutaesthetic","cover":"./images/articles/art_41/cover.webp","tags":["жизненные мемы"],"media":{"images":["./images/articles/art_41/image_1.webp"],"videos":["./images/articles/art_41/video_1.webm"]},"content":[{"type":"h2","text":"быть уставшим это новый вайб?"},{"type":"p","text":"В какой-то момент соцсети начали превращать выгорание в эстетику. Ночные поездки под медленную музыку, кофе в три часа ночи, переписки «я опять ничего не успеваю», тёмные круги под глазами, учёба под дождь за окном и бесконечные видео с подписью «working until i stop feeling anything»."},{"type":"p","text":"Во многом эстетика выгорания выросла из культуры продуктивности. Люди годами смотрели контент про бесконечную «лучшую версию себя», пока в какой-то момент все коллективно не устали. Но вместо того чтобы просто остановиться, соцсети начали романтизировать саму усталость."},{"type":"note","text":"Так-то! Усталость можно романтизировать, и так и правда может стать легче! Хотя бы на время"},{"type":"h2","text":"а что цепляет?"},{"type":"p","text":"Наверное, такие видео дают странное чувство понимания. Когда видишь очередной ролик про человека, который сидит ночью перед ноутбуком под грустный эмбиент, невольно думаешь о том, что это буквально ты."},{"type":"p","text":"Эстетика выгорания превращает хаос, тревогу и усталость во что-то визуально понятное. Пусть и немного слишком красивое для нервного срыва."}],"url":"./pages/articles/art_41.html"},{"id":"art_42","order":42,"title":"это статья или торт","h1":"real or cake?","description":"почему в какой-то момент интернет перестал доверять даже торту","slug":"cakeorfake","cover":"./images/articles/art_42/cover.webp","tags":["абсурд","ностальгическое"],"media":{"images":[],"videos":["./images/articles/art_42/video_1.webm","./images/articles/art_42/video_2.webm"]},"content":[{"type":"h2","text":"а вдруг это торт?"},{"type":"p","text":"Летом 2020 года интернет столкнулся с неожиданной проблемой, ведь оказалось, что практически любой предмет может быть тортом. Вирусными стали ролики кондитеров, создававших гиперреалистичные торты в виде кроссовок, туалетной бумаги, растений, фруктов и даже людей."},{"type":"p","text":"Видео обычно заканчивалось одинаково! Кто-то брал нож и разрезал объект пополам, после чего выяснялось, что внутри находится обычный бисквит. Особенно сильно тренд разлетелся после публикаций работ турецкой кондитерки Тубы Гечкил, чьи торты регулярно принимали за настоящие предметы."},{"type":"note","text":"Со временем мода на гиперреалистичные торты немного утихла, но сам вопрос никуда не исчез.."},{"type":"h2","text":"а это торт?"},{"type":"p","text":"Очень быстро ролики превратились в полноценный мем. Пользователи начали публиковать фотографии предметов и предлагать угадать: перед нами реальная вещь или очередной торт. Так появился формат, который позже стали называть Cake or Fake или Is It Cake?"},{"type":"p","text":"Популярность оказалась настолько большой, что в 2022 году Netflix запустил шоу Is It Cake?, целиком построенное вокруг этой идеи. Участники создавали торты, замаскированные под сумки, обувь, фрукты и другие предметы, а жюри пыталось определить, где находится настоящий объект, а где десерт."}],"url":"./pages/articles/art_42.html"},{"id":"art_43","order":43,"title":"о нет это же 67","h1":"67","description":"67, оно же six seven, ща узнаем откуда оно взялось","slug":"sixseven","cover":"./images/articles/art_43/cover.webp","tags":["абсурд","новые мемы"],"media":{"images":[],"videos":["./images/articles/art_43/video_1.webm","./images/articles/art_43/video_2.webm"]},"content":[{"type":"h2","text":"откуда всё пошло"},{"type":"p","text":"Истоки мема обычно связывают с треком «Doot Doot (6 7)» американского рэпера Skrilla. Фраза «6-7» звучала в припеве и быстро разлетелась по TikTok благодаря спортивным эдитам и роликам про баскетбол. Особенно часто мем связывали с игроком ЛаМело Боллом, чей рост составляет 6 футов 7 дюймов."},{"type":"p","text":"Настоящий взрыв произошёл уже позже, когда пользователи начали использовать число отдельно от песни. Появились мемные жесты, локальные приколы и знаменитый «67 Kid» — школьник, который завирусился после видео с баскетбольного матча. После этого число начало жить собственной жизнью и стало одним из символов brainrot-культуры середины 2020-х."},{"type":"note","text":"Одни связывали число с баскетболом, другие — с рэпом, третьи вообще использовали его просто потому, что все вокруг тоже говорили «67»"},{"type":"h2","text":"мем, который никто не смог объяснить"},{"type":"p","text":"К концу 2025 года six seven вышел далеко за пределы TikTok. Его использовали в комментариях, шутках, песнях и мемах, а некоторые словари даже включили его в списки самых заметных интернет-слов года. При этом большинство пользователей всё ещё не могли внятно объяснить, что именно означает эта фраза."},{"type":"p","text":"Наверное, именно поэтому мем и запомнился. В эпоху, когда интернет всё чаще строится на абсурде и постиронии, число «67» стало идеальным символом шутки, которую никто не понимает, но все почему-то продолжают повторять."}],"url":"./pages/articles/art_43.html"},{"id":"art_44","order":44,"title":"статья от тайлера","h1":"я тайлер дерден","description":"как Тайлер Дерден стал главным героем эдитов","slug":"tylerdurden","cover":"./images/articles/art_44/cover.webp","tags":["жизненные мемы","фильмы/сериалы"],"media":{"images":[],"videos":["./images/articles/art_44/video_1.webm","./images/articles/art_44/video_2.webm"]},"content":[{"type":"h2","text":"мы не должны были говорить о тайлере"},{"type":"p","text":"Даже если вы никогда не смотрели «Бойцовский клуб», есть большой шанс, что вы всё равно его видели. В эдитах под фонк, в сигма-эдитах, в подборках персонажей или просто в очередном видео про мотивацию."},{"type":"p","text":"За последние годы Тайлер стал одним из самых узнаваемых героев интернет-культуры. Тайлер Дёрден — персонаж фильма «Бойцовский клуб» 1999 года, снятого по роману Чака Паланика. В фильме он появляется как харизматичный бунтарь, который выступает против скучной офисной жизни, потребительства и привычных правил."},{"type":"note","text":"Образ быстро стал культовым, а со временем кадры из фильма превратились в мемы."},{"type":"h2","text":"ну буквально я!"},{"type":"p","text":"Новый виток популярности Тайлер получил уже в эпоху тиктока. Его начали массово добавлять в так называемые literally me-подборки, иными словами мемный формат, где пользователи собирают персонажей, с которыми якобы себя ассоциируют. В такие списки обычно попадают Райан Гослинг, Патрик Бейтман и Томми Шелби."},{"type":"p","text":"В результате для многих пользователей Тайлер стал не столько персонажем фильма, сколько символом целого жанра эдитов. Старые кадры из фильма начали нарезать под фонк, замедлять, добавлять контраст, чёрные полосы и мотивационные цитаты. Очень быстро Тайлер стал одним из главных лиц сигма-культуры наряду с Патриком Бейтманом и другими героями подобных эдитов."}],"url":"./pages/articles/art_44.html"},{"id":"art_45","order":45,"title":"дикий огурец","h1":"дикий огурец","description":"разбираемся, что там за дикий огурец","slug":"wildcucumber","cover":"./images/articles/art_45/cover.webp","tags":["ИИ","ностальгическое","абсурд"],"media":{"images":["./images/articles/art_45/image_1.webp"],"videos":["./images/articles/art_45/video_1.webm"]},"content":[{"type":"h2","text":"до появления человека"},{"type":"p","text":"Мем «Дикий огурец» появился из тикток-роликов про то, как выглядели фрукты и овощи до вмешательства человека. В таких видео показывали условную морковь, банан, арбуз, клубнику или кукурузу «до» и «после» селекции. И где-то среди этих сравнений появлялся тот самый шипастый дикий огурец."},{"type":"p","text":"Первым источником обычно называют ролик пользователя TikTok @colossus, опубликованный в январе 2025 года. Видео было скорее познавательным: оно показывало, как менялись привычные нам продукты благодаря селекции и одомашниванию растений."},{"type":"note","text":"К лету 2025 года именно фраза «дикий огурец» начала жить отдельно от образовательного контекста!"},{"type":"h2","text":"мем без причины"},{"type":"p","text":"Со временем пользователи начали зацикливать фразы из оригинального ролика, менять их местами и доводить образовательный формат до абсурда. «Дикий огурец» стали вставлять в ролики просто ради неожиданности, как скример, пасхалку или бессмысленный финальный акцент. Он мог появиться там, где его вообще никто не ждал, и именно поэтому работал."},{"type":"p","text":"К августу 2025 года мем уже попадал в подборки главных мемов месяца и года. Его описывали как один из самых абсурдных трендов! Понять его логически сложно, зато легко почувствовать, если вы хоть раз видели эти ролики с ломаной озвучкой, странными картинками овощей и внезапным появлением дикого огурца."}],"url":"./pages/articles/art_45.html"},{"id":"art_46","order":46,"title":"still water","h1":"still water","description":"почему стоячая вода внезапно стала мемом","slug":"stillwater","cover":"./images/articles/art_46/cover.webp","tags":["ностальгическое"],"media":{"images":[],"videos":["./images/articles/art_46/video_1.webm","./images/articles/art_46/video_2.webm"]},"content":[{"type":"h2","text":"бойтесь стоячей воды"},{"type":"p","text":"Всё началось вполне серьёзно. В 2024 году в TikTok начали вируситься видео исследователей, которые лазили по заброшенным зданиям и постоянно находили там так называемую still water или стоячую воду. Авторы рассказывали, что такая вода может содержать бактерии, грибки и даже опасных микроорганизмов, поэтому её стоит избегать. Некоторые ролики собирали десятки миллионов просмотров."},{"type":"p","text":"Проблема была в том, что очень быстро пользователи начали относиться к этому слишком серьёзно. В комментариях под любыми видео появлялись предупреждения про смертоносную амёбу, бактерии и прочие ужасы. В какой-то момент тик ток решил, что обычная стоячая вода это чуть ли не самое страшное, что можно встретить в жизни."},{"type":"note","text":"Начало появляться очень много комментариев по типу «те, кто знают...» с черепками"},{"type":"h2","text":"от страшилки до мема"},{"type":"p","text":"Когда паника дошла до абсурда, начались пародии. Пользователи начали снимать видео, где находили «still water» в раковине, стакане, миске для кота или даже в туалете."},{"type":"p","text":"При этом ролики монтировались так, будто автор только что обнаружил древнее проклятие. Чем бессмысленнее становилась комбинация, тем смешнее она казалась. В итоге обычная вода превратилась в один из мемов середины 2020-х."}],"url":"./pages/articles/art_46.html"},{"id":"art_47","order":47,"title":"ностальгия по тому, чего не было","h1":"fake nostalgia","description":"почему мы грустим по тому, чего не было","slug":"fakenostalgia","cover":"./images/articles/art_47/cover.webp","tags":["ностальгическое","жизненные мемы"],"media":{"images":["./images/articles/art_47/image_1.webp"],"videos":["./images/articles/art_47/video_1.webm","./images/articles/art_47/video_2.webm"]},"content":[{"type":"h2","text":"скучать по выдуманному нормально?"},{"type":"p","text":"В последние годы тикток захлебнулся в странной ностальгии. Люди массово грустят по старым дворам, летним вечерам, шуму телевизора ночью, поездкам в машине под музыку и каким-то максимально размытым воспоминаниям, которые ощущаются знакомыми даже тем, кто никогда этого не переживал."},{"type":"p","text":"Так появился термин fake nostalgia. Это чувство, когда человек начинает тосковать по атмосфере, времени или воспоминанию, которого у него на самом деле никогда не было."},{"type":"h2","text":"откуда берётся это ощущение"},{"type":"p","text":"Обычно fake nostalgia строится не вокруг конкретного события, а вокруг вайба. Зернистое видео, вспышка камеры, старый трек, неон ночью, пустой торговый центр или вид из окна автобуса, и мозг моментально начинает воспринимать всё это как что-то очень личное."},{"type":"p","text":"Поэтому так хорошо работают старые цифровые камеры, видео в плохом качестве, кадры из нулевых, старые интерфейсы винды, детские площадки ночью лето «как в детстве». Даже если человек родился слишком поздно, чтобы реально помнить эту эпоху, ощущение всё равно появляется."},{"type":"note","text":"Это чувство, кстати, работает и в форсе дримкора и liminal spaces, ведь и там у всех возникает ощущение чего-то знакомого"},{"type":"h2","text":"почему это стало таким популярным"},{"type":"p","text":"Во многом fake nostalgia идеально совпала с настроением последних лет. Люди устали от постоянной перегруженности, тревоги и ощущения, что всё вокруг происходит слишком быстро. Из-за этого прошлое, даже выдуманное, начинает казаться безопаснее и уютнее настоящего."},{"type":"p","text":"Особенно сильно это чувствуется в тикток-эдитах, где обычную поездку на велосипеде или случайный закат превращают почти в потерянное воспоминание из детства. Такие видео выглядят так, будто их нашли на старой флешке из параллельной реальности."}],"url":"./pages/articles/art_47.html"},{"id":"art_48","order":48,"title":"большой шлёпа","h1":"большой шлёпа","description":"как домашний каракал Гоша стал легендой или просто Шлёпой :)","slug":"bigfloppa","cover":"./images/articles/art_48/cover.webp","tags":["ностальгическое","для переписок"],"media":{"images":["./images/articles/art_48/image_1.webp"],"videos":["./images/articles/art_48/video_1.webm"]},"content":[{"type":"h2","text":"кто такой шлёпа"},{"type":"p","text":"Большой Шлёпа это домашний каракал по кличке Гоша. Он родился в 2017 году и жил у семьи Бондаревых, пока его фотографии не начали распространяться в интернете. В конце 2019 года пользователи Reddit заметили необычного кота с огромными ушами и дали ему прозвище Big Floppa."},{"type":"p","text":"Очень быстро мем добрался и до русскоязычного интернета. Здесь каракал получил новое имя — Большой Шлёпа. Пользователей зацепила его серьёзная морда, необычная внешность и тот факт, что любая фотография Гоши уже выглядела как готовый мем."},{"type":"note","text":"в мемах рядом с Шлёпой потом появлялись другие животные и персонажи, например Бингус, Sogga и домашние коты из окружения Гоши"},{"type":"h2","text":"как шлёпа стал легендой"},{"type":"p","text":"В начале 2020-х Шлёпа был буквально повсюду. Его вставляли в картинки, эдиты и мемы, рисовали фан-арты и придумывали вокруг него целые истории. Постепенно каракал перестал быть просто фотографией животного и превратился в полноценного персонажа интернет-культуры."},{"type":"p","text":"Во многом мем сработал благодаря своей простоте. Шлёпа не был привязан к конкретной шутке или событию. Его можно было поместить в любую ситуацию, и это работало. Пока одни мемы исчезали через пару месяцев, Большой Шлёпа продолжал жить в интернете, став одним из самых узнаваемых мемных котов последних лет."}],"url":"./pages/articles/art_48.html"},{"id":"art_49","order":49,"title":"Окак.... отак...","h1":"Окак","description":"Что за кот в капюшоне? Что такое окак??","slug":"okak","cover":"./images/articles/art_49/cover.webp","tags":["ностальгическое","жизненные мемы"],"media":{"images":["./images/articles/art_49/image_1.webp"],"videos":["./images/articles/art_49/video_1.webm"]},"content":[{"type":"h2","text":"откуда взялся мем?"},{"type":"p","text":"«Окак» — это мем из русскоязычного интернета, который взорвался в 2025 году. Всё началось с вирусного видео, где кот с каменным лицом повторяет «окак»."},{"type":"p","text":"Абсурдная озвучка для ситуаций, когда слова излишни. Мем быстро разлетелся по TikTok, VK, Telegram — от реакций на фейлы до иронии. Однако наибольшую популярность этот мем получил в контексте переписок."},{"type":"note","text":"Окак вместо сложных и долгих объяснений! И собеседнику всё сразу ясно"},{"type":"h2","text":"Почему он зацепил всех"},{"type":"p","text":"Мем стал универсальным. Кидают дедлайн — окак. Друг подводит — окак. Даже политики в монтажах вставляют. Плюс ремиксы с музыкой, плюс рандомные футажи!"},{"type":"p","text":"Сейчас он эволюционирует в стикеры и гифки, однако суть та же: коротко, смешно, уместно, весело. В эпоху короткого контента работает идеально."}],"url":"./pages/articles/art_49.html"},{"id":"art_50","order":50,"title":"скачать обои","h1":"умный человек скачать обои","description":"что это было? какой умный человек?","slug":"smartmanahh","cover":"./images/articles/art_50/cover.webp","tags":["ностальгическое","абсурд"],"media":{"images":["./images/articles/art_50/image_1.webp"],"videos":["./images/articles/art_50/video_1.webm"]},"content":[{"type":"h2","text":"умный человек в очках скачать обои"},{"type":"p","text":"Летом 2025 года интернет захватила фотография Яна Топлеса. На снимке он просто стоит в очках, джинсовке и смотрит в камеру, вот и всё. Но дело всё в подписи! Сверху была надпись «умный человек в очках скачать обои», после чего мем оказался буквально повсюду."},{"type":"p","text":"Сначала картинку просто публиковали отдельно, но очень быстро появился новый формат. Фото Топлеса начали вставлять в самые случайные видео.  На этом шутка заканчивалась. Большинство людей, впервые увидевших мем, пытались понять, что именно смешного в фотографии человека в очках."},{"type":"note","text":"Подпись выглядела как случайный набор слов, а сама фотография напоминала типичную картинку из поисковика или фотостока"},{"type":"h2","text":"мем вышел из-под контроля"},{"type":"p","text":"Очень быстро фотография Топлеса начала жить собственной жизнью. Мем появлялся на рекламных экранах, в игровых модификациях, в Wallpaper Engine и даже за пределами русскоязычного интернета. Пользователи массово делали ремиксы, эдиты и новые вариации оригинальной картинки."},{"type":"p","text":"Самое забавное произошло позже. В августе 2025 года Ян Топлес признался, что мем изначально был экспериментом его команды. Они специально помогали распространять изображение и наблюдали за тем, насколько далеко сможет зайти абсолютно бессмысленная картинка. Эксперимент оказался успешнее, чем кто-либо ожидал!"}],"url":"./pages/articles/art_50.html"},{"id":"art_51","order":51,"title":"Ура!! Фани готовка!!","h1":"смажьте мясо маслом","description":"Зачем мазать мясо маслом?","slug":"buttermeatbutter","cover":"./images/articles/art_51/cover.webp","tags":["ии","абсурд"],"media":{"images":["./images/articles/art_51/image_1.webp"],"videos":["./images/articles/art_51/video_1.webm"]},"content":[{"type":"h2","text":"откуда взялся мем?"},{"type":"p","text":"В сентябре 2025 года по рунету начало гулять странное видео: отрывок ИИ-рецепта с фразой «Смажьте мясо маслом», зацикленной так, что она повторяется несколько раз подряд."},{"type":"p","text":"Часть зрителей даже не поняла, что рецепт отредактирован, и всерьёз обсуждала, надо ли реально столько мазать. Видео быстро разошлось, а в TikTok оно очень быстро превратилось в полноценный мемный тренд."},{"type":"note","text":"Тут формула простая! На досуге повторите одну фразу полторы тысячи раз и заметите, что создали свой личный брейнрот!"},{"type":"h2","text":"а дальше уже хаос"},{"type":"p","text":"Дальше пользователи начали повторять фишку, искажая текст, ломая слова, доводя рецепт до полной бессмыслицы. В какой-то момент мем полностью ушёл в ИИ-зону, и это стало классическим брейнротом. В итоге под реальными рецептами теперь можно найти комментарии про мясо и масло."},{"type":"p","text":"Это абсурдное нейросетевое творчество, которое работает по тем же законам, что и старые ютуб-пупы. Берём реальное видео, режем, циклим, ломаем речь и готово!"}],"url":"./pages/articles/art_51.html"},{"id":"art_52","order":52,"title":"тун тун тун сахур","h1":"Тун Тун Тун Сахур","description":"что это такое? у него дубинка, он опасен?","slug":"tungtungtungsahur","cover":"./images/articles/art_52/cover.webp","tags":["ии","абсурд"],"media":{"images":["./images/articles/art_52/image_1.webp"],"videos":["./images/articles/art_52/video_1.webm"]},"content":[{"type":"h2","text":"откуда взялся мем?"},{"type":"p","text":"Странное существо c большими глазами трясётся под громкий бас, а голос повторяет «Сахур». Оторваться сложно, хотя ничего особенного. Это брейнрот."},{"type":"p","text":"Тренд начался в конце 2024 года. Хэштег #TunTunTunSahur собрал больше 500 миллионов просмотров. ИИ помогает: программы вроде Midjourney создают новых монстров по простым описаниям. Каждый делает свою версию, и видео разлетаются."},{"type":"note","text":"А ещё люди делали костюмы, косплеи, пародии... Тун тун тун сахур стал полноценным персонажем"},{"type":"h2","text":"Почему это сработало?"},{"type":"p","text":"Это всё из одной оперы! Skibidi Toilet с унитазами, которые дерутся, GigaChad с басами или взрывающиеся фигуры. Да и вся брейнрот-семья сюда подтягивается."},{"type":"p","text":"Зацепило, потому что TikTok показывает такие видео всем подряд, люди смотрят долго. Это как попкорн для мозга — после серьёзного хочется лёгкого. Но много контента от ИИ ведёт к тому, что мозг устаёт. Скоро, наверное, появится «Тун Тун Тун» в VR, наконец-то можно будет с ним пообщаться."}],"url":"./pages/articles/art_52.html"},{"id":"art_53","order":53,"title":"фа ватафа... пэпэ шнейне...","h1":"фа ватафа","description":"давайте разбираться фа что значат эти слова пепе","slug":"pepeshneyne","cover":"./images/articles/art_53/cover.webp","tags":["абсурд","для переписок"],"media":{"images":[],"videos":["./images/articles/art_53/video_1.webm","./images/articles/art_53/video_2.webm"]},"content":[{"type":"h2","text":"ура в интернете новый язык"},{"type":"p","text":"В начале 2026 интернет внезапно захватили слова пепе, шнейне, фа, ватафа. Люди начали вставлять их буквально везде, и в кружочки, и в мемы, и в обычные разговоры. Все улавливали вайб, так что всё чётко!"},{"type":"p","text":"За всем этим стоял рэпер Ганвест, который ещё в конце 2025 резко сменил образ и начал разговаривать вот этим набором слов. Сначала это выглядело как щитпостинг, но в один момент, конечно же, начало форситься. А после шоу мем окончательно вышел за пределы локального угара."},{"type":"note","text":"Да, звучит бессмысленно, но к языку прицепилось, что ж тут поделать"},{"type":"h2","text":"а что это значит?"},{"type":"p","text":"Самое смешное, что слова изначально вообще были почти бессмысленными. Позже Ганвест начал сам придумывать им объяснения: «шнейне» — что-то роскошное, отсылка к Chanel, «пепе» — мемный лягушонок Pepe, «фа» — одобрение, что-то вроде «да» или «кайф», «ватафа» — негативная реакция от what the fuck."},{"type":"p","text":"Но в реальности смысл был вообще не главным. Интернету понравился сам звук и хаос, а также ритм. Под пепе шнейне начали переделывать скороговорки, в песни, а также генерить видосы. В общем, у нас тут мемный язык, где всё по вайбу."}],"url":"./pages/articles/art_53.html"},{"id":"art_54","order":54,"title":"грустный хомяк","h1":"Грустный хомяк","description":"кто ж его так расстроил? разбираемся, что, почему и откуда!","slug":"sadhamster","cover":"./images/articles/art_54/cover.webp","tags":["жизненные мемы","для переписок","ностальгическое"],"media":{"images":["./images/articles/art_54/image_1.webp"],"videos":["./images/articles/art_54/video_1.webm"]},"content":[{"type":"h2","text":"откуда взялся мем?"},{"type":"p","text":"Давайте попробуем окунуться в 2024! Помните грустного хомячка? Этот мем завирусился с невероятной мощью, даже сейчас иногда мы видим стикеры, картинки, видео про него."},{"type":"p","text":"Крайне грустный отфотошопленный бедолага-хомяк с очень большими глазами жалобно смотрел в камеру под трагичную скрипку, и это очень быстро разошлось как мем, подходящий как и для реально грустных ситуаций, так и для абсурдных."},{"type":"note","text":"У грустного хомяка ещё и вариации появились! Люди делали кастомные стикеры, где хомяк с бантиком, с ноутбуком... В общем, кто на что горазд"},{"type":"h2","text":"Почему мем зашел"},{"type":"p","text":"Во-первых, мем крайне универсален. Его можно использовать и без подписей, и без музыки. Во-вторых, это откликается. Многие пользователи хотя бы раз в жизни в какой-то сложной ситуации чувствовали себя этим хомяком."},{"type":"p","text":"В-третьих, ну его реально жалко, бедный! Надеемся, у него по итогу всё наладилось и теперь всё чётко."}],"url":"./pages/articles/art_54.html"}]');
;// ./node_modules/plyr/dist/plyr.mjs
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r);
  }
}
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e;
}
function ownKeys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _objectSpread2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ownKeys(Object(n), true).forEach(function (t) {
      _defineProperty(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
var defaults$1 = {
  addCSS: true,
  thumbWidth: 15,
  watch: true
};
function matches$1(e, t) {
  return function () {
    return Array.from(document.querySelectorAll(t)).includes(this);
  }.call(e, t);
}
function trigger(e, t) {
  if (e && t) {
    var n = new Event(t, {
      bubbles: true
    });
    e.dispatchEvent(n);
  }
}
var getConstructor$1 = function (e) {
    return null != e ? e.constructor : null;
  },
  instanceOf$1 = function (e, t) {
    return !!(e && t && e instanceof t);
  },
  isNullOrUndefined$1 = function (e) {
    return null == e;
  },
  isObject$1 = function (e) {
    return getConstructor$1(e) === Object;
  },
  isNumber$1 = function (e) {
    return getConstructor$1(e) === Number && !Number.isNaN(e);
  },
  isString$1 = function (e) {
    return getConstructor$1(e) === String;
  },
  isBoolean$1 = function (e) {
    return getConstructor$1(e) === Boolean;
  },
  isFunction$1 = function (e) {
    return getConstructor$1(e) === Function;
  },
  isArray$1 = function (e) {
    return Array.isArray(e);
  },
  isNodeList$1 = function (e) {
    return instanceOf$1(e, NodeList);
  },
  isElement$1 = function (e) {
    return instanceOf$1(e, Element);
  },
  isEvent$1 = function (e) {
    return instanceOf$1(e, Event);
  },
  isEmpty$1 = function (e) {
    return isNullOrUndefined$1(e) || (isString$1(e) || isArray$1(e) || isNodeList$1(e)) && !e.length || isObject$1(e) && !Object.keys(e).length;
  },
  is$1 = {
    nullOrUndefined: isNullOrUndefined$1,
    object: isObject$1,
    number: isNumber$1,
    string: isString$1,
    boolean: isBoolean$1,
    function: isFunction$1,
    array: isArray$1,
    nodeList: isNodeList$1,
    element: isElement$1,
    event: isEvent$1,
    empty: isEmpty$1
  };
function getDecimalPlaces(e) {
  var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
function round(e, t) {
  if (1 > t) {
    var n = getDecimalPlaces(t);
    return parseFloat(e.toFixed(n));
  }
  return Math.round(e / t) * t;
}
var RangeTouch = function () {
  function e(t, n) {
    _classCallCheck(this, e), is$1.element(t) ? this.element = t : is$1.string(t) && (this.element = document.querySelector(t)), is$1.element(this.element) && is$1.empty(this.element.rangeTouch) && (this.config = _objectSpread2({}, defaults$1, {}, n), this.init());
  }
  return _createClass(e, [{
    key: "init",
    value: function () {
      e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
    }
  }, {
    key: "destroy",
    value: function () {
      e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
    }
  }, {
    key: "listeners",
    value: function (e) {
      var t = this,
        n = e ? "addEventListener" : "removeEventListener";
      ["touchstart", "touchmove", "touchend"].forEach(function (e) {
        t.element[n](e, function (e) {
          return t.set(e);
        }, false);
      });
    }
  }, {
    key: "get",
    value: function (t) {
      if (!e.enabled || !is$1.event(t)) return null;
      var n,
        r = t.target,
        i = t.changedTouches[0],
        o = parseFloat(r.getAttribute("min")) || 0,
        s = parseFloat(r.getAttribute("max")) || 100,
        u = parseFloat(r.getAttribute("step")) || 1,
        c = r.getBoundingClientRect(),
        a = 100 / c.width * (this.config.thumbWidth / 2) / 100;
      return 0 > (n = 100 / c.width * (i.clientX - c.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * a : 50 < n && (n += 2 * (n - 50) * a), o + round(n / 100 * (s - o), u);
    }
  }, {
    key: "set",
    value: function (t) {
      e.enabled && is$1.event(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), trigger(t.target, "touchend" === t.type ? "change" : "input"));
    }
  }], [{
    key: "setup",
    value: function (t) {
      var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        r = null;
      if (is$1.empty(t) || is$1.string(t) ? r = Array.from(document.querySelectorAll(is$1.string(t) ? t : 'input[type="range"]')) : is$1.element(t) ? r = [t] : is$1.nodeList(t) ? r = Array.from(t) : is$1.array(t) && (r = t.filter(is$1.element)), is$1.empty(r)) return null;
      var i = _objectSpread2({}, defaults$1, {}, n);
      if (is$1.string(t) && i.watch) {
        var o = new MutationObserver(function (n) {
          Array.from(n).forEach(function (n) {
            Array.from(n.addedNodes).forEach(function (n) {
              is$1.element(n) && matches$1(n, t) && new e(n, i);
            });
          });
        });
        o.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
      return r.map(function (t) {
        return new e(t, n);
      });
    }
  }, {
    key: "enabled",
    get: function () {
      return "ontouchstart" in document.documentElement;
    }
  }]), e;
}();

// ==========================================================================
// Type checking utils
// ==========================================================================

const getConstructor = input => input !== null && typeof input !== 'undefined' ? input.constructor : null;
const instanceOf = (input, constructor) => Boolean(input && constructor && input instanceof constructor);
const isNullOrUndefined = input => input === null || typeof input === 'undefined';
const isObject = input => getConstructor(input) === Object;
const isNumber = input => getConstructor(input) === Number && !Number.isNaN(input);
const isString = input => getConstructor(input) === String;
const isBoolean = input => getConstructor(input) === Boolean;
const isFunction = input => typeof input === 'function';
const isArray = input => Array.isArray(input);
const isWeakMap = input => instanceOf(input, WeakMap);
const isNodeList = input => instanceOf(input, NodeList);
const isTextNode = input => getConstructor(input) === Text;
const isEvent = input => instanceOf(input, Event);
const isKeyboardEvent = input => instanceOf(input, KeyboardEvent);
const isCue = input => instanceOf(input, window.TextTrackCue) || instanceOf(input, window.VTTCue);
const isTrack = input => instanceOf(input, TextTrack) || !isNullOrUndefined(input) && isString(input.kind);
const isPromise = input => instanceOf(input, Promise) && isFunction(input.then);
function isElement(input) {
  return input !== null && typeof input === 'object' && input.nodeType === 1 && typeof input.style === 'object' && typeof input.ownerDocument === 'object';
}
function isEmpty(input) {
  return isNullOrUndefined(input) || (isString(input) || isArray(input) || isNodeList(input)) && !input.length || isObject(input) && !Object.keys(input).length;
}
function isUrl(input) {
  // Accept a URL object
  if (instanceOf(input, window.URL)) {
    return true;
  }

  // Must be string from here
  if (!isString(input)) {
    return false;
  }

  // Add the protocol if required
  let string = input;
  if (!input.startsWith('http://') || !input.startsWith('https://')) {
    string = `http://${input}`;
  }
  try {
    return !isEmpty(new URL(string).hostname);
  } catch {
    return false;
  }
}
var is = {
  nullOrUndefined: isNullOrUndefined,
  object: isObject,
  number: isNumber,
  string: isString,
  boolean: isBoolean,
  function: isFunction,
  array: isArray,
  weakMap: isWeakMap,
  nodeList: isNodeList,
  element: isElement,
  textNode: isTextNode,
  event: isEvent,
  keyboardEvent: isKeyboardEvent,
  cue: isCue,
  track: isTrack,
  promise: isPromise,
  url: isUrl,
  empty: isEmpty
};

// ==========================================================================
// Animation utils
// ==========================================================================

const transitionEndEvent = (() => {
  const element = document.createElement('span');
  const events = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };
  const type = Object.keys(events).find(event => element.style[event] !== undefined);
  return is.string(type) ? events[type] : false;
})();

// Force repaint of element
function repaint(element, delay) {
  setTimeout(() => {
    try {
      element.hidden = true;
      // eslint-disable-next-line no-unused-expressions
      element.offsetHeight;
      element.hidden = false;
    } catch {}
  }, delay);
}

// ==========================================================================
// Object utils
// ==========================================================================


// Clone nested objects
function cloneDeep(object) {
  return JSON.parse(JSON.stringify(object));
}

// Get a nested value in an object
function getDeep(object, path) {
  return path.split('.').reduce((obj, key) => obj && obj[key], object);
}

// Deep extend destination object with N more objects
function extend(target = {}, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (!is.object(source)) {
    return target;
  }
  Object.keys(source).forEach(key => {
    if (is.object(source[key])) {
      if (!Object.keys(target).includes(key)) {
        Object.assign(target, {
          [key]: {}
        });
      }
      extend(target[key], source[key]);
    } else {
      Object.assign(target, {
        [key]: source[key]
      });
    }
  });
  return extend(target, ...sources);
}

// ==========================================================================
// Element utils
// ==========================================================================


// Wrap an element
function wrap(elements, wrapper) {
  // Convert `elements` to an array, if necessary.
  const targets = elements.length ? elements : [elements];

  // Loops backwards to prevent having to clone the wrapper on the
  // first element (see `child` below).
  Array.from(targets).reverse().forEach((element, index) => {
    const child = index > 0 ? wrapper.cloneNode(true) : wrapper;
    // Cache the current parent and sibling.
    const parent = element.parentNode;
    const sibling = element.nextSibling;

    // Wrap the element (is automatically removed from its current
    // parent).
    child.appendChild(element);

    // If the element had a sibling, insert the wrapper before
    // the sibling to maintain the HTML structure; otherwise, just
    // append it to the parent.
    if (sibling) {
      parent.insertBefore(child, sibling);
    } else {
      parent.appendChild(child);
    }
  });
}

// Set attributes
function setAttributes(element, attributes) {
  if (!is.element(element) || is.empty(attributes)) return;

  // Assume null and undefined attributes should be left out,
  // Setting them would otherwise convert them to "null" and "undefined"
  Object.entries(attributes).filter(([, value]) => !is.nullOrUndefined(value)).forEach(([key, value]) => element.setAttribute(key, value));
}

// Create a DocumentFragment
function createElement(type, attributes, text) {
  // Create a new <element>
  const element = document.createElement(type);

  // Set all passed attributes
  if (is.object(attributes)) {
    setAttributes(element, attributes);
  }

  // Add text node
  if (is.string(text)) {
    element.textContent = text;
  }

  // Return built element
  return element;
}

// Insert an element after another
function insertAfter(element, target) {
  if (!is.element(element) || !is.element(target)) return;
  target.parentNode.insertBefore(element, target.nextSibling);
}

// Insert a DocumentFragment
function insertElement(type, parent, attributes, text) {
  if (!is.element(parent)) return;
  parent.appendChild(createElement(type, attributes, text));
}

// Remove element(s)
function removeElement(element) {
  if (is.nodeList(element) || is.array(element)) {
    Array.from(element).forEach(removeElement);
    return;
  }
  if (!is.element(element) || !is.element(element.parentNode)) {
    return;
  }
  element.parentNode.removeChild(element);
}

// Remove all child elements
function emptyElement(element) {
  if (!is.element(element)) return;
  let {
    length
  } = element.childNodes;
  while (length > 0) {
    element.removeChild(element.lastChild);
    length -= 1;
  }
}

// Replace element
function replaceElement(newChild, oldChild) {
  if (!is.element(oldChild) || !is.element(oldChild.parentNode) || !is.element(newChild)) return null;
  oldChild.parentNode.replaceChild(newChild, oldChild);
  return newChild;
}

// Get an attribute object from a string selector
function getAttributesFromSelector(sel, existingAttributes) {
  // For example:
  // '.test' to { class: 'test' }
  // '#test' to { id: 'test' }
  // '[data-test="test"]' to { 'data-test': 'test' }

  if (!is.string(sel) || is.empty(sel)) return {};
  const attributes = {};
  const existing = extend({}, existingAttributes);
  sel.split(',').forEach(s => {
    // Remove whitespace
    const selector = s.trim();
    const className = selector.replace('.', '');
    const stripped = selector.replace(/[[\]]/g, '');
    // Get the parts and value
    const parts = stripped.split('=');
    const [key] = parts;
    const value = parts.length > 1 ? parts[1].replace(/["']/g, '') : '';
    // Get the first character
    const start = selector.charAt(0);
    switch (start) {
      case '.':
        // Add to existing classname
        if (is.string(existing.class)) {
          attributes.class = `${existing.class} ${className}`;
        } else {
          attributes.class = className;
        }
        break;
      case '#':
        // ID selector
        attributes.id = selector.replace('#', '');
        break;
      case '[':
        // Attribute selector
        attributes[key] = value;
        break;
    }
  });
  return extend(existing, attributes);
}

// Toggle hidden
function toggleHidden(element, hidden) {
  if (!is.element(element)) return;
  let hide = hidden;
  if (!is.boolean(hide)) {
    hide = !element.hidden;
  }
  element.hidden = hide;
}

// Mirror Element.classList.toggle, with IE compatibility for "force" argument
function toggleClass(element, className, force) {
  if (is.nodeList(element)) {
    return Array.from(element).map(e => toggleClass(e, className, force));
  }
  if (is.element(element)) {
    let method = 'toggle';
    if (typeof force !== 'undefined') {
      method = force ? 'add' : 'remove';
    }
    element.classList[method](className);
    return element.classList.contains(className);
  }
  return false;
}

// Has class name
function hasClass(element, className) {
  return is.element(element) && element.classList.contains(className);
}

// Element matches selector
function matches(element, selector) {
  const {
    prototype
  } = Element;
  function match() {
    return Array.from(document.querySelectorAll(selector)).includes(this);
  }
  const method = prototype.matches || prototype.webkitMatchesSelector || prototype.mozMatchesSelector || prototype.msMatchesSelector || match;
  return method.call(element, selector);
}

// Closest ancestor element matching selector (also tests element itself)
function closest$1(element, selector) {
  const {
    prototype
  } = Element;

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
  function closestElement() {
    let el = this;
    do {
      if (matches.matches(el, selector)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  }
  const method = prototype.closest || closestElement;
  return method.call(element, selector);
}

// Find all elements
function getElements(selector) {
  return this.elements.container.querySelectorAll(selector);
}

// Find a single element
function getElement(selector) {
  return this.elements.container.querySelector(selector);
}

// Set focus and tab focus class
function setFocus(element = null, focusVisible = false) {
  if (!is.element(element)) return;

  // Set regular focus
  element.focus({
    preventScroll: true,
    focusVisible
  });
}

// ==========================================================================
// Plyr support checks
// ==========================================================================


// Default codecs for checking mimetype support
const defaultCodecs = {
  'audio/ogg': 'vorbis',
  'audio/wav': '1',
  'video/webm': 'vp8, vorbis',
  'video/mp4': 'avc1.42E01E, mp4a.40.2',
  'video/ogg': 'theora'
};

// Check for feature support
const support = {
  // Basic support
  audio: 'canPlayType' in document.createElement('audio'),
  video: 'canPlayType' in document.createElement('video'),
  // Check for support
  // Basic functionality vs full UI
  check(type, provider) {
    const api = support[type] || provider !== 'html5';
    const ui = api && support.rangeInput;
    return {
      api,
      ui
    };
  },
  // Picture-in-picture support
  pip: (() => {
    return document.pictureInPictureEnabled && !createElement('video').disablePictureInPicture;
  })(),
  // Airplay support
  // Safari only currently
  airplay: is.function(window.WebKitPlaybackTargetAvailabilityEvent),
  // Inline playback support
  // https://webkit.org/blog/6784/new-video-policies-for-ios/
  playsinline: 'playsInline' in document.createElement('video'),
  // Check for mime type support against a player instance
  // Credits: http://diveintohtml5.info/everything.html
  // Related: http://www.leanbackplayer.com/test/h5mt.html
  mime(input) {
    if (is.empty(input)) {
      return false;
    }
    const [mediaType] = input.split('/');
    let type = input;

    // Verify we're using HTML5 and there's no media type mismatch
    if (!this.isHTML5 || mediaType !== this.type) {
      return false;
    }

    // Add codec if required
    if (Object.keys(defaultCodecs).includes(type)) {
      type += `; codecs="${defaultCodecs[input]}"`;
    }
    try {
      return Boolean(type && this.media.canPlayType(type).replace(/no/, ''));
    } catch {
      return false;
    }
  },
  // Check for textTracks support
  textTracks: 'textTracks' in document.createElement('video'),
  // <input type="range"> Sliders
  rangeInput: (() => {
    const range = document.createElement('input');
    range.type = 'range';
    return range.type === 'range';
  })(),
  // Touch
  // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
  touch: 'ontouchstart' in document.documentElement,
  // Detect transitions support
  transitions: transitionEndEvent !== false,
  // Reduced motion iOS & MacOS setting
  // https://webkit.org/blog/7551/responsive-design-for-motion/
  reducedMotion: 'matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches
};

// ==========================================================================
// Event utils
// ==========================================================================


// Check for passive event listener support
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
// https://www.youtube.com/watch?v=NPM6172J22g
const supportsPassiveListeners = (() => {
  // Test via a getter in the options object to see if the passive property is accessed
  let supported = false;
  try {
    const options = Object.defineProperty({}, 'passive', {
      get() {
        supported = true;
        return null;
      }
    });
    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch {}
  return supported;
})();

// Toggle event listener
function toggleListener(element, event, callback, toggle = false, passive = true, capture = false) {
  // Bail if no element, event, or callback
  if (!element || !('addEventListener' in element) || is.empty(event) || !is.function(callback)) {
    return;
  }

  // Allow multiple events
  const events = event.split(' ');
  // Build options
  // Default to just the capture boolean for browsers with no passive listener support
  let options = capture;

  // If passive events listeners are supported
  if (supportsPassiveListeners) {
    options = {
      // Whether the listener can be passive (i.e. default never prevented)
      passive,
      // Whether the listener is a capturing listener or not
      capture
    };
  }

  // If a single node is passed, bind the event listener
  events.forEach(type => {
    if (this && this.eventListeners && toggle) {
      // Cache event listener
      this.eventListeners.push({
        element,
        type,
        callback,
        options
      });
    }
    element[toggle ? 'addEventListener' : 'removeEventListener'](type, callback, options);
  });
}

// Bind event handler
function on(element, events = '', callback, passive = true, capture = false) {
  toggleListener.call(this, element, events, callback, true, passive, capture);
}

// Unbind event handler
function off(element, events = '', callback, passive = true, capture = false) {
  toggleListener.call(this, element, events, callback, false, passive, capture);
}

// Bind once-only event handler
function once(element, events = '', callback, passive = true, capture = false) {
  const onceCallback = (...args) => {
    off(element, events, onceCallback, passive, capture);
    callback.apply(this, args);
  };
  toggleListener.call(this, element, events, onceCallback, true, passive, capture);
}

// Trigger event
function triggerEvent(element, type = '', bubbles = false, detail = {}) {
  // Bail if no element
  if (!is.element(element) || is.empty(type)) {
    return;
  }

  // Create and dispatch the event
  const event = new CustomEvent(type, {
    bubbles,
    detail: {
      ...detail,
      plyr: this
    }
  });

  // Dispatch the event
  element.dispatchEvent(event);
}

// Unbind all cached event listeners
function unbindListeners() {
  if (this && this.eventListeners) {
    this.eventListeners.forEach(item => {
      const {
        element,
        type,
        callback,
        options
      } = item;
      element.removeEventListener(type, callback, options);
    });
    this.eventListeners = [];
  }
}

// Run method when / if player is ready
function ready() {
  return new Promise(resolve => this.ready ? setTimeout(resolve, 0) : on.call(this, this.elements.container, 'ready', resolve)).then(() => {});
}

/**
 * Silence a Promise-like object.
 * This is useful for avoiding non-harmful, but potentially confusing "uncaught
 * play promise" rejection error messages.
 * @param  {object} value An object that may or may not be `Promise`-like.
 */
function silencePromise(value) {
  if (is.promise(value)) {
    value.then(null, () => {});
  }
}

// ==========================================================================
// Array utils
// ==========================================================================


// Remove duplicates in an array
function dedupe(array) {
  if (!is.array(array)) {
    return array;
  }
  return array.filter((item, index) => array.indexOf(item) === index);
}

// Get the closest value in an array
function closest(array, value) {
  if (!is.array(array) || !array.length) {
    return null;
  }
  return array.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
}

// ==========================================================================
// Style utils
// ==========================================================================


// Check support for a CSS declaration
function supportsCSS(declaration) {
  if (!window || !window.CSS) {
    return false;
  }
  return window.CSS.supports(declaration);
}

// Standard/common aspect ratios
const standardRatios = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((out, [x, y]) => ({
  ...out,
  [x / y]: [x, y]
}), {});

// Validate an aspect ratio
function validateAspectRatio(input) {
  if (!is.array(input) && (!is.string(input) || !input.includes(':'))) {
    return false;
  }
  const ratio = is.array(input) ? input : input.split(':');
  return ratio.map(Number).every(is.number);
}

// Reduce an aspect ratio to it's lowest form
function reduceAspectRatio(ratio) {
  if (!is.array(ratio) || !ratio.every(is.number)) {
    return null;
  }
  const [width, height] = ratio;
  const getDivider = (w, h) => h === 0 ? w : getDivider(h, w % h);
  const divider = getDivider(width, height);
  return [width / divider, height / divider];
}

// Calculate an aspect ratio
function getAspectRatio(input) {
  const parse = ratio => validateAspectRatio(ratio) ? ratio.split(':').map(Number) : null;
  // Try provided ratio
  let ratio = parse(input);

  // Get from config
  if (ratio === null) {
    ratio = parse(this.config.ratio);
  }

  // Get from embed
  if (ratio === null && !is.empty(this.embed) && is.array(this.embed.ratio)) {
    ({
      ratio
    } = this.embed);
  }

  // Get from HTML5 video
  if (ratio === null && this.isHTML5) {
    const {
      videoWidth,
      videoHeight
    } = this.media;
    ratio = [videoWidth, videoHeight];
  }
  return reduceAspectRatio(ratio);
}

// Set aspect ratio for responsive container
function setAspectRatio(input) {
  if (!this.isVideo) {
    return {};
  }
  const {
    wrapper
  } = this.elements;
  const ratio = getAspectRatio.call(this, input);
  if (!is.array(ratio)) {
    return {};
  }
  const [x, y] = reduceAspectRatio(ratio);
  const useNative = supportsCSS(`aspect-ratio: ${x}/${y}`);
  const padding = 100 / x * y;
  if (useNative) {
    wrapper.style.aspectRatio = `${x}/${y}`;
  } else {
    wrapper.style.paddingBottom = `${padding}%`;
  }

  // For Vimeo we have an extra <div> to hide the standard controls and UI
  if (this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
    const height = 100 / this.media.offsetWidth * Number.parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
    const offset = (height - padding) / (height / 50);
    if (this.fullscreen.active) {
      wrapper.style.paddingBottom = null;
    } else {
      this.media.style.transform = `translateY(-${offset}%)`;
    }
  } else if (this.isHTML5) {
    wrapper.classList.add(this.config.classNames.videoFixedRatio);
  }
  return {
    padding,
    ratio
  };
}

// Round an aspect ratio to closest standard ratio
function roundAspectRatio(x, y, tolerance = 0.05) {
  const ratio = x / y;
  const closestRatio = closest(Object.keys(standardRatios), ratio);

  // Check match is within tolerance
  if (Math.abs(closestRatio - ratio) <= tolerance) {
    return standardRatios[closestRatio];
  }

  // No match
  return [x, y];
}

// Get the size of the viewport
// https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
function getViewportSize() {
  const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  return [width, height];
}

// ==========================================================================
// Plyr HTML5 helpers
// ==========================================================================

const html5 = {
  getSources() {
    if (!this.isHTML5) {
      return [];
    }
    const sources = Array.from(this.media.querySelectorAll('source'));

    // Filter out unsupported sources (if type is specified)
    return sources.filter(source => {
      const type = source.getAttribute('type');
      if (is.empty(type)) {
        return true;
      }
      return support.mime.call(this, type);
    });
  },
  // Get quality levels
  getQualityOptions() {
    // Whether we're forcing all options (e.g. for streaming)
    if (this.config.quality.forced) {
      return this.config.quality.options;
    }

    // Get sizes from <source> elements
    return html5.getSources.call(this).map(source => Number(source.getAttribute('size'))).filter(Boolean);
  },
  setup() {
    if (!this.isHTML5) {
      return;
    }
    const player = this;

    // Set speed options from config
    player.options.speed = player.config.speed.options;

    // Set aspect ratio if fixed
    if (!is.empty(this.config.ratio)) {
      setAspectRatio.call(player);
    }

    // Quality
    Object.defineProperty(player.media, 'quality', {
      get() {
        // Get sources
        const sources = html5.getSources.call(player);
        const source = sources.find(s => s.getAttribute('src') === player.source);

        // Return size, if match is found
        return source && Number(source.getAttribute('size'));
      },
      set(input) {
        if (player.quality === input) {
          return;
        }

        // If we're using an external handler...
        if (player.config.quality.forced && is.function(player.config.quality.onChange)) {
          player.config.quality.onChange(input);
        } else {
          // Get sources
          const sources = html5.getSources.call(player);
          // Get first match for requested size
          const source = sources.find(s => Number(s.getAttribute('size')) === input);

          // No matching source found
          if (!source) {
            return;
          }

          // Get current state
          const {
            currentTime,
            paused,
            preload,
            readyState,
            playbackRate
          } = player.media;

          // Set new source
          player.media.src = source.getAttribute('src');

          // Prevent loading if preload="none" and the current source isn't loaded (#1044)
          if (preload !== 'none' || readyState) {
            // Restore time
            player.once('loadedmetadata', () => {
              player.speed = playbackRate;
              player.currentTime = currentTime;

              // Resume playing
              if (!paused) {
                silencePromise(player.play());
              }
            });

            // Load new source
            player.media.load();
          }
        }

        // Trigger change event
        triggerEvent.call(player, player.media, 'qualitychange', false, {
          quality: input
        });
      }
    });
  },
  // Cancel current network requests
  // See https://github.com/sampotts/plyr/issues/174
  cancelRequests() {
    if (!this.isHTML5) {
      return;
    }

    // Remove child sources
    removeElement(html5.getSources.call(this));

    // Set blank video src attribute
    // This is to prevent a MEDIA_ERR_SRC_NOT_SUPPORTED error
    // Info: http://stackoverflow.com/questions/32231579/how-to-properly-dispose-of-an-html5-video-and-close-socket-or-connection
    this.media.setAttribute('src', this.config.blankVideo);

    // Load the new empty source
    // This will cancel existing requests
    // See https://github.com/sampotts/plyr/issues/174
    this.media.load();

    // Debugging
    this.debug.log('Cancelled network requests');
  }
};

// ==========================================================================
// Browser sniffing
// Unfortunately, due to mixed support, UA sniffing is required
// ==========================================================================

const isIE = Boolean(window.document.documentMode);
const isEdge = /Edge/.test(navigator.userAgent);
const isWebKit = 'WebkitAppearance' in document.documentElement.style && !/Edge/.test(navigator.userAgent);
// navigator.platform may be deprecated but this check is still required
const isIPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
const isIos = /iPad|iPhone|iPod/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
var browser = {
  isIE,
  isEdge,
  isWebKit,
  isIPadOS,
  isIos
};

// ==========================================================================
// String utils
// ==========================================================================


// Generate a random ID
function generateId(prefix) {
  return `${prefix}-${Math.floor(Math.random() * 10000)}`;
}

// Format string
function format(input, ...args) {
  if (is.empty(input)) return input;
  return input.toString().replace(/\{(\d+)\}/g, (_, i) => args[i].toString());
}

// Get percentage
function getPercentage(current, max) {
  if (current === 0 || max === 0 || Number.isNaN(current) || Number.isNaN(max)) {
    return 0;
  }
  return (current / max * 100).toFixed(2);
}

// Replace all occurrences of a string in a string
function replaceAll(input = '', find = '', replace = '') {
  return input.replace(new RegExp(find.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1'), 'g'), replace.toString());
}

// Convert to title case
function toTitleCase(input = '') {
  return input.toString().replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
}

// Convert string to pascalCase
function toPascalCase(input = '') {
  let string = input.toString();

  // Convert kebab case
  string = replaceAll(string, '-', ' ');

  // Convert snake case
  string = replaceAll(string, '_', ' ');

  // Convert to title case
  string = toTitleCase(string);

  // Convert to pascal case
  return replaceAll(string, ' ', '');
}

// Convert string to pascalCase
function toCamelCase(input = '') {
  let string = input.toString();

  // Convert to pascal case
  string = toPascalCase(string);

  // Convert first character to lowercase
  return string.charAt(0).toLowerCase() + string.slice(1);
}

// Remove HTML from a string
function stripHTML(source) {
  const fragment = document.createDocumentFragment();
  const element = document.createElement('div');
  fragment.appendChild(element);
  element.innerHTML = source;
  return fragment.firstChild.textContent;
}

// Like outerHTML, but also works for DocumentFragment
function getHTML(element) {
  const wrapper = document.createElement('div');
  wrapper.appendChild(element);
  return wrapper.innerHTML;
}

// ==========================================================================
// Plyr internationalization
// ==========================================================================


// Skip i18n for abbreviations and brand names
const resources = {
  pip: 'PIP',
  airplay: 'AirPlay',
  html5: 'HTML5',
  vimeo: 'Vimeo',
  youtube: 'YouTube'
};
const i18n = {
  get(key = '', config = {}) {
    if (is.empty(key) || is.empty(config)) {
      return '';
    }
    let string = getDeep(config.i18n, key);
    if (is.empty(string)) {
      if (Object.keys(resources).includes(key)) {
        return resources[key];
      }
      return '';
    }
    const replace = {
      '{seektime}': config.seekTime,
      '{title}': config.title
    };
    Object.entries(replace).forEach(([k, v]) => {
      string = replaceAll(string, k, v);
    });
    return string;
  }
};

class Storage {
  constructor(player) {
    _defineProperty$1(this, "get", key => {
      if (!Storage.supported || !this.enabled) {
        return null;
      }
      const store = window.localStorage.getItem(this.key);
      if (is.empty(store)) return null;
      const json = JSON.parse(store);
      return is.string(key) && key.length ? json[key] : json;
    });
    _defineProperty$1(this, "set", object => {
      // Bail if we don't have localStorage support or it's disabled
      if (!Storage.supported || !this.enabled) {
        return;
      }

      // Can only store objects
      if (!is.object(object)) {
        return;
      }

      // Get current storage
      let storage = this.get();

      // Default to empty object
      if (is.empty(storage)) {
        storage = {};
      }

      // Update the working copy of the values
      extend(storage, object);

      // Update storage
      try {
        window.localStorage.setItem(this.key, JSON.stringify(storage));
      } catch {}
    });
    this.enabled = player.config.storage.enabled;
    this.key = player.config.storage.key;
  }

  // Check for actual support (see if we can use it)
  static get supported() {
    try {
      if (!('localStorage' in window)) return false;
      const test = '___test';
      // Try to use it (it might be disabled, e.g. user is in private mode)
      // see: https://github.com/sampotts/plyr/issues/131
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }
}

// ==========================================================================
// Fetch wrapper
// Using XHR to avoid issues with older browsers
// ==========================================================================

function fetch(url, responseType = 'text', withCredentials = false) {
  return new Promise((resolve, reject) => {
    try {
      const request = new XMLHttpRequest();

      // Check for CORS support
      if (!('withCredentials' in request)) return;

      // Set to true if needed for CORS
      if (withCredentials) {
        request.withCredentials = true;
      }
      request.addEventListener('load', () => {
        if (responseType === 'text') {
          try {
            resolve(JSON.parse(request.responseText));
          } catch {
            resolve(request.responseText);
          }
        } else {
          resolve(request.response);
        }
      });
      request.addEventListener('error', () => {
        throw new Error(request.status);
      });
      request.open('GET', url, true);
      request.responseType = responseType;
      request.send();
    } catch (error) {
      reject(error);
    }
  });
}

// ==========================================================================
// Sprite loader
// ==========================================================================


// Load an external SVG sprite
function loadSprite(url, id) {
  if (!is.string(url)) {
    return;
  }
  const prefix = 'cache';
  const hasId = is.string(id);
  let isCached = false;
  const exists = () => document.getElementById(id) !== null;
  const update = (container, data) => {
    container.innerHTML = data;

    // Check again incase of race condition
    if (hasId && exists()) {
      return;
    }

    // Inject the SVG to the body
    document.body.insertAdjacentElement('afterbegin', container);
  };

  // Only load once if ID set
  if (!hasId || !exists()) {
    const useStorage = Storage.supported;
    // Create container
    const container = document.createElement('div');
    container.setAttribute('hidden', '');
    if (hasId) {
      container.setAttribute('id', id);
    }

    // Check in cache
    if (useStorage) {
      const cached = window.localStorage.getItem(`${prefix}-${id}`);
      isCached = cached !== null;
      if (isCached) {
        const data = JSON.parse(cached);
        update(container, data.content);
      }
    }

    // Get the sprite
    fetch(url).then(result => {
      if (is.empty(result)) {
        return;
      }
      if (useStorage) {
        try {
          window.localStorage.setItem(`${prefix}-${id}`, JSON.stringify({
            content: result
          }));
        } catch {}
      }
      update(container, result);
    }).catch(() => {});
  }
}

// ==========================================================================
// Time utils
// ==========================================================================


// Time helpers
const getHours = value => Math.trunc(value / 60 / 60 % 60, 10);
const getMinutes = value => Math.trunc(value / 60 % 60, 10);
const getSeconds = value => Math.trunc(value % 60, 10);

// Format time to UI friendly string
function formatTime(time = 0, displayHours = false, inverted = false) {
  // Bail if the value isn't a number
  if (!is.number(time)) {
    return formatTime(undefined, displayHours, inverted);
  }

  // Format time component to add leading zero
  const format = value => `0${value}`.slice(-2);
  // Breakdown to hours, mins, secs
  let hours = getHours(time);
  const mins = getMinutes(time);
  const secs = getSeconds(time);

  // Do we need to display hours?
  if (displayHours || hours > 0) {
    hours = `${hours}:`;
  } else {
    hours = '';
  }

  // Render
  return `${inverted && time > 0 ? '-' : ''}${hours}${format(mins)}:${format(secs)}`;
}

// ==========================================================================
// Plyr controls
// TODO: This needs to be split into smaller files and cleaned up
// ==========================================================================


// TODO: Don't export a massive object - break down and create class
const controls = {
  // Get icon URL
  getIconUrl() {
    const url = new URL(this.config.iconUrl, window.location);
    const host = window.location.host ? window.location.host : window.top.location.host;
    const cors = url.host !== host || browser.isIE && !window.svg4everybody;
    return {
      url: this.config.iconUrl,
      cors
    };
  },
  // Find the UI controls
  findElements() {
    try {
      this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper);

      // Buttons
      this.elements.buttons = {
        play: getElements.call(this, this.config.selectors.buttons.play),
        pause: getElement.call(this, this.config.selectors.buttons.pause),
        restart: getElement.call(this, this.config.selectors.buttons.restart),
        rewind: getElement.call(this, this.config.selectors.buttons.rewind),
        fastForward: getElement.call(this, this.config.selectors.buttons.fastForward),
        mute: getElement.call(this, this.config.selectors.buttons.mute),
        pip: getElement.call(this, this.config.selectors.buttons.pip),
        airplay: getElement.call(this, this.config.selectors.buttons.airplay),
        settings: getElement.call(this, this.config.selectors.buttons.settings),
        captions: getElement.call(this, this.config.selectors.buttons.captions),
        fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen)
      };

      // Progress
      this.elements.progress = getElement.call(this, this.config.selectors.progress);

      // Inputs
      this.elements.inputs = {
        seek: getElement.call(this, this.config.selectors.inputs.seek),
        volume: getElement.call(this, this.config.selectors.inputs.volume)
      };

      // Display
      this.elements.display = {
        buffer: getElement.call(this, this.config.selectors.display.buffer),
        currentTime: getElement.call(this, this.config.selectors.display.currentTime),
        duration: getElement.call(this, this.config.selectors.display.duration)
      };

      // Seek tooltip
      if (is.element(this.elements.progress)) {
        this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`);
      }
      return true;
    } catch (error) {
      // Log it
      this.debug.warn('It looks like there is a problem with your custom controls HTML', error);

      // Restore native video controls
      this.toggleNativeControls(true);
      return false;
    }
  },
  // Create <svg> icon
  createIcon(type, attributes) {
    const namespace = 'http://www.w3.org/2000/svg';
    const iconUrl = controls.getIconUrl.call(this);
    const iconPath = `${!iconUrl.cors ? iconUrl.url : ''}#${this.config.iconPrefix}`;
    // Create <svg>
    const icon = document.createElementNS(namespace, 'svg');
    setAttributes(icon, extend(attributes, {
      'aria-hidden': 'true',
      'focusable': 'false'
    }));

    // Create the <use> to reference sprite
    const use = document.createElementNS(namespace, 'use');
    const path = `${iconPath}-${type}`;

    // Set `href` attributes
    // https://github.com/sampotts/plyr/issues/460
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href
    if ('href' in use) {
      use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
    }

    // Always set the older attribute even though it's "deprecated" (it'll be around for ages)
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', path);

    // Add <use> to <svg>
    icon.appendChild(use);
    return icon;
  },
  // Create hidden text label
  createLabel(key, attr = {}) {
    const text = i18n.get(key, this.config);
    const attributes = {
      ...attr,
      class: [attr.class, this.config.classNames.hidden].filter(Boolean).join(' ')
    };
    return createElement('span', attributes, text);
  },
  // Create a badge
  createBadge(text) {
    if (is.empty(text)) {
      return null;
    }
    const badge = createElement('span', {
      class: this.config.classNames.menu.value
    });
    badge.appendChild(createElement('span', {
      class: this.config.classNames.menu.badge
    }, text));
    return badge;
  },
  // Create a <button>
  createButton(buttonType, attr) {
    const attributes = extend({}, attr);
    let type = toCamelCase(buttonType);
    const props = {
      element: 'button',
      toggle: false,
      label: null,
      icon: null,
      labelPressed: null,
      iconPressed: null
    };
    ['element', 'icon', 'label'].forEach(key => {
      if (Object.keys(attributes).includes(key)) {
        props[key] = attributes[key];
        delete attributes[key];
      }
    });

    // Default to 'button' type to prevent form submission
    if (props.element === 'button' && !Object.keys(attributes).includes('type')) {
      attributes.type = 'button';
    }

    // Set class name
    if (Object.keys(attributes).includes('class')) {
      if (!attributes.class.split(' ').includes(this.config.classNames.control)) {
        extend(attributes, {
          class: `${attributes.class} ${this.config.classNames.control}`
        });
      }
    } else {
      attributes.class = this.config.classNames.control;
    }

    // Large play button
    switch (buttonType) {
      case 'play':
        props.toggle = true;
        props.label = 'play';
        props.labelPressed = 'pause';
        props.icon = 'play';
        props.iconPressed = 'pause';
        break;
      case 'mute':
        props.toggle = true;
        props.label = 'mute';
        props.labelPressed = 'unmute';
        props.icon = 'volume';
        props.iconPressed = 'muted';
        break;
      case 'captions':
        props.toggle = true;
        props.label = 'enableCaptions';
        props.labelPressed = 'disableCaptions';
        props.icon = 'captions-off';
        props.iconPressed = 'captions-on';
        break;
      case 'fullscreen':
        props.toggle = true;
        props.label = 'enterFullscreen';
        props.labelPressed = 'exitFullscreen';
        props.icon = 'enter-fullscreen';
        props.iconPressed = 'exit-fullscreen';
        break;
      case 'play-large':
        attributes.class += ` ${this.config.classNames.control}--overlaid`;
        type = 'play';
        props.label = 'play';
        props.icon = 'play';
        break;
      default:
        if (is.empty(props.label)) {
          props.label = type;
        }
        if (is.empty(props.icon)) {
          props.icon = buttonType;
        }
    }
    const button = createElement(props.element);

    // Setup toggle icon and labels
    if (props.toggle) {
      // Icon
      button.appendChild(controls.createIcon.call(this, props.iconPressed, {
        class: 'icon--pressed'
      }));
      button.appendChild(controls.createIcon.call(this, props.icon, {
        class: 'icon--not-pressed'
      }));

      // Label/Tooltip
      button.appendChild(controls.createLabel.call(this, props.labelPressed, {
        class: 'label--pressed'
      }));
      button.appendChild(controls.createLabel.call(this, props.label, {
        class: 'label--not-pressed'
      }));
    } else {
      button.appendChild(controls.createIcon.call(this, props.icon));
      button.appendChild(controls.createLabel.call(this, props.label));
    }

    // Merge and set attributes
    extend(attributes, getAttributesFromSelector(this.config.selectors.buttons[type], attributes));
    setAttributes(button, attributes);

    // We have multiple play buttons
    if (type === 'play') {
      if (!is.array(this.elements.buttons[type])) {
        this.elements.buttons[type] = [];
      }
      this.elements.buttons[type].push(button);
    } else {
      this.elements.buttons[type] = button;
    }
    return button;
  },
  // Create an <input type='range'>
  createRange(type, attributes) {
    // Seek input
    const input = createElement('input', extend(getAttributesFromSelector(this.config.selectors.inputs[type]), {
      'type': 'range',
      'min': 0,
      'max': 100,
      'step': 0.01,
      'value': 0,
      'autocomplete': 'off',
      // A11y fixes for https://github.com/sampotts/plyr/issues/905
      'role': 'slider',
      'aria-label': i18n.get(type, this.config),
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-valuenow': 0
    }, attributes));
    this.elements.inputs[type] = input;

    // Set the fill for webkit now
    controls.updateRangeFill.call(this, input);

    // Improve support on touch devices
    RangeTouch.setup(input);
    return input;
  },
  // Create a <progress>
  createProgress(type, attributes) {
    const progress = createElement('progress', extend(getAttributesFromSelector(this.config.selectors.display[type]), {
      'min': 0,
      'max': 100,
      'value': 0,
      'role': 'progressbar',
      'aria-hidden': true
    }, attributes));

    // Create the label inside
    if (type !== 'volume') {
      progress.appendChild(createElement('span', null, '0'));
      const suffixKey = {
        played: 'played',
        buffer: 'buffered'
      }[type];
      const suffix = suffixKey ? i18n.get(suffixKey, this.config) : '';
      progress.textContent = `% ${suffix.toLowerCase()}`;
    }
    this.elements.display[type] = progress;
    return progress;
  },
  // Create time display
  createTime(type, attrs) {
    const attributes = getAttributesFromSelector(this.config.selectors.display[type], attrs);
    const container = createElement('div', extend(attributes, {
      'class': `${attributes.class ? attributes.class : ''} ${this.config.classNames.display.time} `.trim(),
      'aria-label': i18n.get(type, this.config),
      'role': 'timer'
    }), '00:00');

    // Reference for updates
    this.elements.display[type] = container;
    return container;
  },
  // Bind keyboard shortcuts for a menu item
  // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
  bindMenuItemShortcuts(menuItem, type) {
    // Navigate through menus via arrow keys and space
    on.call(this, menuItem, 'keydown keyup', event => {
      // We only care about space and ⬆️ ⬇️️ ➡️
      if (![' ', 'ArrowUp', 'ArrowDown', 'ArrowRight'].includes(event.key)) {
        return;
      }

      // Prevent play / seek
      event.preventDefault();
      event.stopPropagation();

      // We're just here to prevent the keydown bubbling
      if (event.type === 'keydown') {
        return;
      }
      const isRadioButton = matches(menuItem, '[role="menuitemradio"]');

      // Show the respective menu
      if (!isRadioButton && [' ', 'ArrowRight'].includes(event.key)) {
        controls.showMenuPanel.call(this, type, true);
      } else {
        let target;
        if (event.key !== ' ') {
          if (event.key === 'ArrowDown' || isRadioButton && event.key === 'ArrowRight') {
            target = menuItem.nextElementSibling;
            if (!is.element(target)) {
              target = menuItem.parentNode.firstElementChild;
            }
          } else {
            target = menuItem.previousElementSibling;
            if (!is.element(target)) {
              target = menuItem.parentNode.lastElementChild;
            }
          }
          setFocus.call(this, target, true);
        }
      }
    }, false);

    // Enter will fire a `click` event but we still need to manage focus
    // So we bind to keyup which fires after and set focus here
    on.call(this, menuItem, 'keyup', event => {
      if (event.key !== 'Return') return;
      controls.focusFirstMenuItem.call(this, null, true);
    });
  },
  // Create a settings menu item
  createMenuItem({
    value,
    list,
    type,
    title,
    badge = null,
    checked = false
  }) {
    const attributes = getAttributesFromSelector(this.config.selectors.inputs[type]);
    const menuItem = createElement('button', extend(attributes, {
      'type': 'button',
      'role': 'menuitemradio',
      'class': `${this.config.classNames.control} ${attributes.class ? attributes.class : ''}`.trim(),
      'aria-checked': checked,
      value
    }));
    const flex = createElement('span');

    // We have to set as HTML incase of special characters
    flex.innerHTML = title;
    if (is.element(badge)) {
      flex.appendChild(badge);
    }
    menuItem.appendChild(flex);

    // Replicate radio button behavior
    Object.defineProperty(menuItem, 'checked', {
      enumerable: true,
      get() {
        return menuItem.getAttribute('aria-checked') === 'true';
      },
      set(check) {
        // Ensure exclusivity
        if (check) {
          Array.from(menuItem.parentNode.children).filter(node => matches(node, '[role="menuitemradio"]')).forEach(node => node.setAttribute('aria-checked', 'false'));
        }
        menuItem.setAttribute('aria-checked', check ? 'true' : 'false');
      }
    });
    this.listeners.bind(menuItem, 'click keyup', event => {
      if (is.keyboardEvent(event) && event.key !== ' ') {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      menuItem.checked = true;
      switch (type) {
        case 'language':
          this.currentTrack = Number(value);
          break;
        case 'quality':
          this.quality = value;
          break;
        case 'speed':
          this.speed = Number.parseFloat(value);
          break;
      }
      controls.showMenuPanel.call(this, 'home', is.keyboardEvent(event));
    }, type, false);
    controls.bindMenuItemShortcuts.call(this, menuItem, type);
    list.appendChild(menuItem);
  },
  // Format a time for display
  formatTime(time = 0, inverted = false) {
    // Bail if the value isn't a number
    if (!is.number(time)) {
      return time;
    }

    // Always display hours if duration is over an hour
    const forceHours = getHours(this.duration) > 0;
    return formatTime(time, forceHours, inverted);
  },
  // Update the displayed time
  updateTimeDisplay(target = null, time = 0, inverted = false) {
    // Bail if there's no element to display or the value isn't a number
    if (!is.element(target) || !is.number(time)) {
      return;
    }
    target.textContent = controls.formatTime(time, inverted);
  },
  // Update volume UI and storage
  updateVolume() {
    if (!this.supported.ui) {
      return;
    }

    // Update range
    if (is.element(this.elements.inputs.volume)) {
      controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
    }

    // Update mute state
    if (is.element(this.elements.buttons.mute)) {
      this.elements.buttons.mute.pressed = this.muted || this.volume === 0;
    }
  },
  // Update seek value and lower fill
  setRange(target, value = 0) {
    if (!is.element(target)) {
      return;
    }
    target.value = value;

    // Webkit range fill
    controls.updateRangeFill.call(this, target);
  },
  // Update <progress> elements
  updateProgress(event) {
    if (!this.supported.ui || !is.event(event)) {
      return;
    }
    let value = 0;
    const setProgress = (target, input) => {
      const val = is.number(input) ? input : 0;
      const progress = is.element(target) ? target : this.elements.display.buffer;

      // Update value and label
      if (is.element(progress)) {
        progress.value = val;

        // Update text label inside
        const label = progress.getElementsByTagName('span')[0];
        if (is.element(label)) {
          label.childNodes[0].nodeValue = val;
        }
      }
    };
    if (event) {
      switch (event.type) {
        // Video playing
        case 'timeupdate':
        case 'seeking':
        case 'seeked':
          value = getPercentage(this.currentTime, this.duration);

          // Set seek range value only if it's a 'natural' time event
          if (event.type === 'timeupdate') {
            controls.setRange.call(this, this.elements.inputs.seek, value);
          }
          break;

        // Check buffer status
        case 'playing':
        case 'progress':
          setProgress(this.elements.display.buffer, this.buffered * 100);
          break;
      }
    }
  },
  // Webkit polyfill for lower fill range
  updateRangeFill(target) {
    // Get range from event if event passed
    const range = is.event(target) ? target.target : target;

    // Needs to be a valid <input type='range'>
    if (!is.element(range) || range.getAttribute('type') !== 'range') {
      return;
    }

    // Set aria values for https://github.com/sampotts/plyr/issues/905
    if (matches(range, this.config.selectors.inputs.seek)) {
      range.setAttribute('aria-valuenow', this.currentTime);
      const currentTime = controls.formatTime(this.currentTime);
      const duration = controls.formatTime(this.duration);
      const format = i18n.get('seekLabel', this.config);
      range.setAttribute('aria-valuetext', format.replace('{currentTime}', currentTime).replace('{duration}', duration));
    } else if (matches(range, this.config.selectors.inputs.volume)) {
      const percent = range.value * 100;
      range.setAttribute('aria-valuenow', percent);
      range.setAttribute('aria-valuetext', `${percent.toFixed(1)}%`);
    } else {
      range.setAttribute('aria-valuenow', range.value);
    }

    // WebKit only
    if (!browser.isWebKit && !browser.isIPadOS) {
      return;
    }

    // Set CSS custom property
    range.style.setProperty('--value', `${range.value / range.max * 100}%`);
  },
  // Update hover tooltip for seeking
  updateSeekTooltip(event) {
    var _this$config$markers, _this$config$markers$;
    // Bail if setting not true
    if (!this.config.tooltips.seek || !is.element(this.elements.inputs.seek) || !is.element(this.elements.display.seekTooltip) || this.duration === 0) {
      return;
    }
    const tipElement = this.elements.display.seekTooltip;
    const visible = `${this.config.classNames.tooltip}--visible`;
    const toggle = show => toggleClass(tipElement, visible, show);

    // Hide on touch
    if (this.touch) {
      toggle(false);
      return;
    }

    // Determine percentage, if already visible
    let percent = 0;
    const clientRect = this.elements.progress.getBoundingClientRect();
    if (is.event(event)) {
      const scrollLeft = event.pageX - event.clientX;
      percent = 100 / clientRect.width * (event.pageX - clientRect.left - scrollLeft);
    } else if (hasClass(tipElement, visible)) {
      percent = Number.parseFloat(tipElement.style.left, 10);
    } else {
      return;
    }

    // Set bounds
    if (percent < 0) {
      percent = 0;
    } else if (percent > 100) {
      percent = 100;
    }
    const time = this.duration / 100 * percent;

    // Display the time a click would seek to
    tipElement.textContent = controls.formatTime(time);

    // Get marker point for time
    const point = (_this$config$markers = this.config.markers) === null || _this$config$markers === void 0 ? void 0 : (_this$config$markers$ = _this$config$markers.points) === null || _this$config$markers$ === void 0 ? void 0 : _this$config$markers$.find(({
      time: t
    }) => t === Math.round(time));

    // Append the point label to the tooltip
    if (point) {
      tipElement.insertAdjacentHTML('afterbegin', `${point.label}<br>`);
    }

    // Set position
    tipElement.style.left = `${percent}%`;

    // Show/hide the tooltip
    // If the event is a moues in/out and percentage is inside bounds
    if (is.event(event) && ['mouseenter', 'mouseleave'].includes(event.type)) {
      toggle(event.type === 'mouseenter');
    }
  },
  // Handle time change event
  timeUpdate(event) {
    // Only invert if only one time element is displayed and used for both duration and currentTime
    const invert = !is.element(this.elements.display.duration) && this.config.invertTime;

    // Duration
    controls.updateTimeDisplay.call(this, this.elements.display.currentTime, invert ? this.duration - this.currentTime : this.currentTime, invert);

    // Ignore updates while seeking
    if (event && event.type === 'timeupdate' && this.media.seeking) {
      return;
    }

    // Playing progress
    controls.updateProgress.call(this, event);
  },
  // Show the duration on metadataloaded or durationchange events
  durationUpdate() {
    // Bail if no UI or durationchange event triggered after playing/seek when invertTime is false
    if (!this.supported.ui || !this.config.invertTime && this.currentTime) {
      return;
    }

    // If duration is the 2**32 (shaka), Infinity (HLS), DASH-IF (Number.MAX_SAFE_INTEGER || Number.MAX_VALUE) indicating live we hide the currentTime and progressbar.
    // https://github.com/video-dev/hls.js/blob/5820d29d3c4c8a46e8b75f1e3afa3e68c1a9a2db/src/controller/buffer-controller.js#L415
    // https://github.com/google/shaka-player/blob/4d889054631f4e1cf0fbd80ddd2b71887c02e232/lib/media/streaming_engine.js#L1062
    // https://github.com/Dash-Industry-Forum/dash.js/blob/69859f51b969645b234666800d4cb596d89c602d/src/dash/models/DashManifestModel.js#L338
    if (this.duration >= 2 ** 32) {
      toggleHidden(this.elements.display.currentTime, true);
      toggleHidden(this.elements.progress, true);
      return;
    }

    // Update ARIA values
    if (is.element(this.elements.inputs.seek)) {
      this.elements.inputs.seek.setAttribute('aria-valuemax', this.duration);
    }

    // If there's a spot to display duration
    const hasDuration = is.element(this.elements.display.duration);

    // If there's only one time display, display duration there
    if (!hasDuration && this.config.displayDuration && this.paused) {
      controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
    }

    // If there's a duration element, update content
    if (hasDuration) {
      controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
    }
    if (this.config.markers.enabled) {
      controls.setMarkers.call(this);
    }

    // Update the tooltip (if visible)
    controls.updateSeekTooltip.call(this);
  },
  // Hide/show a tab
  toggleMenuButton(setting, toggle) {
    toggleHidden(this.elements.settings.buttons[setting], !toggle);
  },
  // Update the selected setting
  updateSetting(setting, container, input) {
    const pane = this.elements.settings.panels[setting];
    let value = null;
    let list = container;
    if (setting === 'captions') {
      value = this.currentTrack;
    } else {
      value = !is.empty(input) ? input : this[setting];

      // Get default
      if (is.empty(value)) {
        value = this.config[setting].default;
      }

      // Unsupported value
      if (!is.empty(this.options[setting]) && !this.options[setting].includes(value)) {
        this.debug.warn(`Unsupported value of '${value}' for ${setting}`);
        return;
      }

      // Disabled value
      if (!this.config[setting].options.includes(value)) {
        this.debug.warn(`Disabled value of '${value}' for ${setting}`);
        return;
      }
    }

    // Get the list if we need to
    if (!is.element(list)) {
      list = pane && pane.querySelector('[role="menu"]');
    }

    // If there's no list it means it's not been rendered...
    if (!is.element(list)) {
      return;
    }

    // Update the label
    const label = this.elements.settings.buttons[setting].querySelector(`.${this.config.classNames.menu.value}`);
    label.innerHTML = controls.getLabel.call(this, setting, value);

    // Find the radio option and check it
    const target = list && list.querySelector(`[value="${value}"]`);
    if (is.element(target)) {
      target.checked = true;
    }
  },
  // Translate a value into a nice label
  getLabel(setting, value) {
    switch (setting) {
      case 'speed':
        return value === 1 ? i18n.get('normal', this.config) : `${value}&times;`;
      case 'quality':
        if (is.number(value)) {
          const label = i18n.get(`qualityLabel.${value}`, this.config);
          if (!label.length) {
            return `${value}p`;
          }
          return label;
        }
        return toTitleCase(value);
      case 'captions':
        return captions.getLabel.call(this);
      default:
        return null;
    }
  },
  // Set the quality menu
  setQualityMenu(options) {
    // Menu required
    if (!is.element(this.elements.settings.panels.quality)) {
      return;
    }
    const type = 'quality';
    const list = this.elements.settings.panels.quality.querySelector('[role="menu"]');

    // Set options if passed and filter based on uniqueness and config
    if (is.array(options)) {
      this.options.quality = dedupe(options).filter(quality => this.config.quality.options.includes(quality));
    }

    // Toggle the pane and tab
    const toggle = !is.empty(this.options.quality) && this.options.quality.length > 1;
    controls.toggleMenuButton.call(this, type, toggle);

    // Empty the menu
    emptyElement(list);

    // Check if we need to toggle the parent
    controls.checkMenu.call(this);

    // If we're hiding, nothing more to do
    if (!toggle) {
      return;
    }

    // Get the badge HTML for HD, 4K etc
    const getBadge = quality => {
      const label = i18n.get(`qualityBadge.${quality}`, this.config);
      if (!label.length) {
        return null;
      }
      return controls.createBadge.call(this, label);
    };

    // Sort options by the config and then render options
    this.options.quality.sort((a, b) => {
      const sorting = this.config.quality.options;
      return sorting.indexOf(a) > sorting.indexOf(b) ? 1 : -1;
    }).forEach(quality => {
      controls.createMenuItem.call(this, {
        value: quality,
        list,
        type,
        title: controls.getLabel.call(this, 'quality', quality),
        badge: getBadge(quality)
      });
    });
    controls.updateSetting.call(this, type, list);
  },
  // Set the looping options
  /* setLoopMenu() {
        // Menu required
        if (!is.element(this.elements.settings.panels.loop)) {
            return;
        }
         const options = ['start', 'end', 'all', 'reset'];
        const list = this.elements.settings.panels.loop.querySelector('[role="menu"]');
         // Show the pane and tab
        toggleHidden(this.elements.settings.buttons.loop, false);
        toggleHidden(this.elements.settings.panels.loop, false);
         // Toggle the pane and tab
        const toggle = !is.empty(this.loop.options);
        controls.toggleMenuButton.call(this, 'loop', toggle);
         // Empty the menu
        emptyElement(list);
         options.forEach(option => {
            const item = createElement('li');
             const button = createElement(
                'button',
                extend(getAttributesFromSelector(this.config.selectors.buttons.loop), {
                    type: 'button',
                    class: this.config.classNames.control,
                    'data-plyr-loop-action': option,
                }),
                i18n.get(option, this.config)
            );
             if (['start', 'end'].includes(option)) {
                const badge = controls.createBadge.call(this, '00:00');
                button.appendChild(badge);
            }
             item.appendChild(button);
            list.appendChild(item);
        });
    }, */

  // Get current selected caption language
  // TODO: rework this to user the getter in the API?

  // Set a list of available captions languages
  setCaptionsMenu() {
    // Menu required
    if (!is.element(this.elements.settings.panels.captions)) {
      return;
    }

    // TODO: Captions or language? Currently it's mixed
    const type = 'captions';
    const list = this.elements.settings.panels.captions.querySelector('[role="menu"]');
    const tracks = captions.getTracks.call(this);
    const toggle = Boolean(tracks.length);

    // Toggle the pane and tab
    controls.toggleMenuButton.call(this, type, toggle);

    // Empty the menu
    emptyElement(list);

    // Check if we need to toggle the parent
    controls.checkMenu.call(this);

    // If there's no captions, bail
    if (!toggle) {
      return;
    }

    // Generate options data
    const options = tracks.map((track, value) => ({
      value,
      checked: this.captions.toggled && this.currentTrack === value,
      title: captions.getLabel.call(this, track),
      badge: track.language && controls.createBadge.call(this, track.language.toUpperCase()),
      list,
      type: 'language'
    }));

    // Add the "Disabled" option to turn off captions
    options.unshift({
      value: -1,
      checked: !this.captions.toggled,
      title: i18n.get('disabled', this.config),
      list,
      type: 'language'
    });

    // Generate options
    options.forEach(controls.createMenuItem.bind(this));
    controls.updateSetting.call(this, type, list);
  },
  // Set a list of available captions languages
  setSpeedMenu() {
    // Menu required
    if (!is.element(this.elements.settings.panels.speed)) {
      return;
    }
    const type = 'speed';
    const list = this.elements.settings.panels.speed.querySelector('[role="menu"]');

    // Filter out invalid speeds
    this.options.speed = this.options.speed.filter(o => o >= this.minimumSpeed && o <= this.maximumSpeed);

    // Toggle the pane and tab
    const toggle = !is.empty(this.options.speed) && this.options.speed.length > 1;
    controls.toggleMenuButton.call(this, type, toggle);

    // Empty the menu
    emptyElement(list);

    // Check if we need to toggle the parent
    controls.checkMenu.call(this);

    // If we're hiding, nothing more to do
    if (!toggle) {
      return;
    }

    // Create items
    this.options.speed.forEach(speed => {
      controls.createMenuItem.call(this, {
        value: speed,
        list,
        type,
        title: controls.getLabel.call(this, 'speed', speed)
      });
    });
    controls.updateSetting.call(this, type, list);
  },
  // Check if we need to hide/show the settings menu
  checkMenu() {
    const {
      buttons
    } = this.elements.settings;
    const visible = !is.empty(buttons) && Object.values(buttons).some(button => !button.hidden);
    toggleHidden(this.elements.settings.menu, !visible);
  },
  // Focus the first menu item in a given (or visible) menu
  focusFirstMenuItem(pane, focusVisible = false) {
    if (this.elements.settings.popup.hidden) {
      return;
    }
    let target = pane;
    if (!is.element(target)) {
      target = Object.values(this.elements.settings.panels).find(p => !p.hidden);
    }
    const firstItem = target.querySelector('[role^="menuitem"]');
    setFocus.call(this, firstItem, focusVisible);
  },
  // Show/hide menu
  toggleMenu(input) {
    const {
      popup
    } = this.elements.settings;
    const button = this.elements.buttons.settings;

    // Menu and button are required
    if (!is.element(popup) || !is.element(button)) {
      return;
    }

    // True toggle by default
    const {
      hidden
    } = popup;
    let show = hidden;
    if (is.boolean(input)) {
      show = input;
    } else if (is.keyboardEvent(input) && input.key === 'Escape') {
      show = false;
    } else if (is.event(input)) {
      // If Plyr is in a shadowDOM, the event target is set to the component, instead of the
      // Element in the shadowDOM. The path, if available, is complete.
      const target = is.function(input.composedPath) ? input.composedPath()[0] : input.target;
      const isMenuItem = popup.contains(target);

      // If the click was inside the menu or if the click
      // wasn't the button or menu item and we're trying to
      // show the menu (a doc click shouldn't show the menu)
      if (isMenuItem || !isMenuItem && input.target !== button && show) {
        return;
      }
    }

    // Set button attributes
    button.setAttribute('aria-expanded', show);

    // Show the actual popup
    toggleHidden(popup, !show);

    // Add class hook
    toggleClass(this.elements.container, this.config.classNames.menu.open, show);

    // Focus the first item if key interaction
    if (show && is.keyboardEvent(input)) {
      controls.focusFirstMenuItem.call(this, null, true);
    } else if (!show && !hidden) {
      // If closing, re-focus the button
      setFocus.call(this, button, is.keyboardEvent(input));
    }
  },
  // Get the natural size of a menu panel
  getMenuSize(tab) {
    const clone = tab.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.opacity = 0;
    clone.removeAttribute('hidden');

    // Append to parent so we get the "real" size
    tab.parentNode.appendChild(clone);

    // Get the sizes before we remove
    const width = clone.scrollWidth;
    const height = clone.scrollHeight;

    // Remove from the DOM
    removeElement(clone);
    return {
      width,
      height
    };
  },
  // Show a panel in the menu
  showMenuPanel(type = '', focusVisible = false) {
    const target = this.elements.container.querySelector(`#plyr-settings-${this.id}-${type}`);

    // Nothing to show, bail
    if (!is.element(target)) {
      return;
    }

    // Hide all other panels
    const container = target.parentNode;
    const current = Array.from(container.children).find(node => !node.hidden);

    // If we can do fancy animations, we'll animate the height/width
    if (support.transitions && !support.reducedMotion) {
      // Set the current width as a base
      container.style.width = `${current.scrollWidth}px`;
      container.style.height = `${current.scrollHeight}px`;

      // Get potential sizes
      const size = controls.getMenuSize.call(this, target);

      // Restore auto height/width
      const restore = event => {
        // We're only bothered about height and width on the container
        if (event.target !== container || !['width', 'height'].includes(event.propertyName)) {
          return;
        }

        // Revert back to auto
        container.style.width = '';
        container.style.height = '';

        // Only listen once
        off.call(this, container, transitionEndEvent, restore);
      };

      // Listen for the transition finishing and restore auto height/width
      on.call(this, container, transitionEndEvent, restore);

      // Set dimensions to target
      container.style.width = `${size.width}px`;
      container.style.height = `${size.height}px`;
    }

    // Set attributes on current tab
    toggleHidden(current, true);

    // Set attributes on target
    toggleHidden(target, false);

    // Focus the first item
    controls.focusFirstMenuItem.call(this, target, focusVisible);
  },
  // Set the download URL
  setDownloadUrl() {
    const button = this.elements.buttons.download;

    // Bail if no button
    if (!is.element(button)) {
      return;
    }

    // Set attribute
    button.setAttribute('href', this.download);
  },
  // Build the default HTML
  create(data) {
    const {
      bindMenuItemShortcuts,
      createButton,
      createProgress,
      createRange,
      createTime,
      setQualityMenu,
      setSpeedMenu,
      showMenuPanel
    } = controls;
    this.elements.controls = null;

    // Larger overlaid play button
    if (is.array(this.config.controls) && this.config.controls.includes('play-large')) {
      this.elements.container.appendChild(createButton.call(this, 'play-large'));
    }

    // Create the container
    const container = createElement('div', getAttributesFromSelector(this.config.selectors.controls.wrapper));
    this.elements.controls = container;

    // Default item attributes
    const defaultAttributes = {
      class: 'plyr__controls__item'
    };

    // Loop through controls in order
    dedupe(is.array(this.config.controls) ? this.config.controls : []).forEach(control => {
      // Restart button
      if (control === 'restart') {
        container.appendChild(createButton.call(this, 'restart', defaultAttributes));
      }

      // Rewind button
      if (control === 'rewind') {
        container.appendChild(createButton.call(this, 'rewind', defaultAttributes));
      }

      // Play/Pause button
      if (control === 'play') {
        container.appendChild(createButton.call(this, 'play', defaultAttributes));
      }

      // Fast forward button
      if (control === 'fast-forward') {
        container.appendChild(createButton.call(this, 'fast-forward', defaultAttributes));
      }

      // Progress
      if (control === 'progress') {
        const progressContainer = createElement('div', {
          class: `${defaultAttributes.class} plyr__progress__container`
        });
        const progress = createElement('div', getAttributesFromSelector(this.config.selectors.progress));

        // Seek range slider
        progress.appendChild(createRange.call(this, 'seek', {
          id: `plyr-seek-${data.id}`
        }));

        // Buffer progress
        progress.appendChild(createProgress.call(this, 'buffer'));

        // TODO: Add loop display indicator

        // Seek tooltip
        if (this.config.tooltips.seek) {
          const tooltip = createElement('span', {
            class: this.config.classNames.tooltip
          }, '00:00');
          progress.appendChild(tooltip);
          this.elements.display.seekTooltip = tooltip;
        }
        this.elements.progress = progress;
        progressContainer.appendChild(this.elements.progress);
        container.appendChild(progressContainer);
      }

      // Media current time display
      if (control === 'current-time') {
        container.appendChild(createTime.call(this, 'currentTime', defaultAttributes));
      }

      // Media duration display
      if (control === 'duration') {
        container.appendChild(createTime.call(this, 'duration', defaultAttributes));
      }

      // Volume controls
      if (control === 'mute' || control === 'volume') {
        let {
          volume
        } = this.elements;

        // Create the volume container if needed
        if (!is.element(volume) || !container.contains(volume)) {
          volume = createElement('div', extend({}, defaultAttributes, {
            class: `${defaultAttributes.class} plyr__volume`.trim()
          }));
          this.elements.volume = volume;
          container.appendChild(volume);
        }

        // Toggle mute button
        if (control === 'mute') {
          volume.appendChild(createButton.call(this, 'mute'));
        }

        // Volume range control
        // Ignored on iOS as it's handled globally
        // https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html
        if (control === 'volume' && !browser.isIos && !browser.isIPadOS) {
          // Set the attributes
          const attributes = {
            max: 1,
            step: 0.05,
            value: this.config.volume
          };

          // Create the volume range slider
          volume.appendChild(createRange.call(this, 'volume', extend(attributes, {
            id: `plyr-volume-${data.id}`
          })));
        }
      }

      // Toggle captions button
      if (control === 'captions') {
        container.appendChild(createButton.call(this, 'captions', defaultAttributes));
      }

      // Settings button / menu
      if (control === 'settings' && !is.empty(this.config.settings)) {
        const wrapper = createElement('div', extend({}, defaultAttributes, {
          class: `${defaultAttributes.class} plyr__menu`.trim(),
          hidden: ''
        }));
        wrapper.appendChild(createButton.call(this, 'settings', {
          'aria-haspopup': true,
          'aria-controls': `plyr-settings-${data.id}`,
          'aria-expanded': false
        }));
        const popup = createElement('div', {
          class: 'plyr__menu__container',
          id: `plyr-settings-${data.id}`,
          hidden: ''
        });
        const inner = createElement('div');
        const home = createElement('div', {
          id: `plyr-settings-${data.id}-home`
        });

        // Create the menu
        const menu = createElement('div', {
          role: 'menu'
        });
        home.appendChild(menu);
        inner.appendChild(home);
        this.elements.settings.panels.home = home;

        // Build the menu items
        this.config.settings.forEach(type => {
          // TODO: bundle this with the createMenuItem helper and bindings
          const menuItem = createElement('button', extend(getAttributesFromSelector(this.config.selectors.buttons.settings), {
            'type': 'button',
            'class': `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
            'role': 'menuitem',
            'aria-haspopup': true,
            'hidden': ''
          }));

          // Bind menu shortcuts for keyboard users
          bindMenuItemShortcuts.call(this, menuItem, type);

          // Show menu on click
          on.call(this, menuItem, 'click', () => {
            showMenuPanel.call(this, type, false);
          });
          const flex = createElement('span', null, i18n.get(type, this.config));
          const value = createElement('span', {
            class: this.config.classNames.menu.value
          });

          // Speed contains HTML entities
          value.innerHTML = data[type];
          flex.appendChild(value);
          menuItem.appendChild(flex);
          menu.appendChild(menuItem);

          // Build the panes
          const pane = createElement('div', {
            id: `plyr-settings-${data.id}-${type}`,
            hidden: ''
          });

          // Back button
          const backButton = createElement('button', {
            type: 'button',
            class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
          });

          // Visible label
          backButton.appendChild(createElement('span', {
            'aria-hidden': true
          }, i18n.get(type, this.config)));

          // Screen reader label
          backButton.appendChild(createElement('span', {
            class: this.config.classNames.hidden
          }, i18n.get('menuBack', this.config)));

          // Go back via keyboard
          on.call(this, pane, 'keydown', event => {
            if (event.key !== 'ArrowLeft') return;

            // Prevent seek
            event.preventDefault();
            event.stopPropagation();

            // Show the respective menu
            showMenuPanel.call(this, 'home', true);
          }, false);

          // Go back via button click
          on.call(this, backButton, 'click', () => {
            showMenuPanel.call(this, 'home', false);
          });

          // Add to pane
          pane.appendChild(backButton);

          // Menu
          pane.appendChild(createElement('div', {
            role: 'menu'
          }));
          inner.appendChild(pane);
          this.elements.settings.buttons[type] = menuItem;
          this.elements.settings.panels[type] = pane;
        });
        popup.appendChild(inner);
        wrapper.appendChild(popup);
        container.appendChild(wrapper);
        this.elements.settings.popup = popup;
        this.elements.settings.menu = wrapper;
      }

      // Picture in picture button
      if (control === 'pip' && support.pip) {
        container.appendChild(createButton.call(this, 'pip', defaultAttributes));
      }

      // Airplay button
      if (control === 'airplay' && support.airplay) {
        container.appendChild(createButton.call(this, 'airplay', defaultAttributes));
      }

      // Download button
      if (control === 'download') {
        const attributes = extend({}, defaultAttributes, {
          element: 'a',
          href: this.download,
          target: '_blank'
        });

        // Set download attribute for HTML5 only
        if (this.isHTML5) {
          attributes.download = '';
        }
        const {
          download
        } = this.config.urls;
        if (!is.url(download) && this.isEmbed) {
          extend(attributes, {
            icon: `logo-${this.provider}`,
            label: this.provider
          });
        }
        container.appendChild(createButton.call(this, 'download', attributes));
      }

      // Toggle fullscreen button
      if (control === 'fullscreen') {
        container.appendChild(createButton.call(this, 'fullscreen', defaultAttributes));
      }
    });

    // Set available quality levels
    if (this.isHTML5) {
      setQualityMenu.call(this, html5.getQualityOptions.call(this));
    }
    setSpeedMenu.call(this);
    return container;
  },
  // Insert controls
  inject() {
    // Sprite
    if (this.config.loadSprite) {
      const icon = controls.getIconUrl.call(this);

      // Only load external sprite using AJAX
      if (icon.cors) {
        loadSprite(icon.url, 'sprite-plyr');
      }
    }

    // Create a unique ID
    this.id = Math.floor(Math.random() * 10000);

    // Null by default
    let container = null;
    this.elements.controls = null;

    // Set template properties
    const props = {
      id: this.id,
      seektime: this.config.seekTime,
      title: this.config.title
    };
    let update = true;

    // If function, run it and use output
    if (is.function(this.config.controls)) {
      this.config.controls = this.config.controls.call(this, props);
    }

    // Convert falsy controls to empty array (primarily for empty strings)
    if (!this.config.controls) {
      this.config.controls = [];
    }
    if (is.element(this.config.controls) || is.string(this.config.controls)) {
      // HTMLElement or Non-empty string passed as the option
      container = this.config.controls;
    } else {
      // Create controls
      container = controls.create.call(this, {
        id: this.id,
        seektime: this.config.seekTime,
        speed: this.speed,
        quality: this.quality,
        captions: captions.getLabel.call(this)
        // TODO: Looping
        // loop: 'None',
      });
      update = false;
    }

    // Replace props with their value
    const replace = input => {
      let result = input;
      Object.entries(props).forEach(([key, value]) => {
        result = replaceAll(result, `{${key}}`, value);
      });
      return result;
    };

    // Update markup
    if (update) {
      if (is.string(this.config.controls)) {
        container = replace(container);
      }
    }

    // Controls container
    let target;

    // Inject to custom location
    if (is.string(this.config.selectors.controls.container)) {
      target = document.querySelector(this.config.selectors.controls.container);
    }

    // Inject into the container by default
    if (!is.element(target)) {
      target = this.elements.container;
    }

    // Inject controls HTML (needs to be before captions, hence "afterbegin")
    const insertMethod = is.element(container) ? 'insertAdjacentElement' : 'insertAdjacentHTML';
    target[insertMethod]('afterbegin', container);

    // Find the elements if need be
    if (!is.element(this.elements.controls)) {
      controls.findElements.call(this);
    }

    // Add pressed property to buttons
    if (!is.empty(this.elements.buttons)) {
      const addProperty = button => {
        const className = this.config.classNames.controlPressed;
        button.setAttribute('aria-pressed', 'false');
        Object.defineProperty(button, 'pressed', {
          configurable: true,
          enumerable: true,
          get() {
            return hasClass(button, className);
          },
          set(pressed = false) {
            toggleClass(button, className, pressed);
            button.setAttribute('aria-pressed', pressed ? 'true' : 'false');
          }
        });
      };

      // Toggle classname when pressed property is set
      Object.values(this.elements.buttons).filter(Boolean).forEach(button => {
        if (is.array(button) || is.nodeList(button)) {
          Array.from(button).filter(Boolean).forEach(addProperty);
        } else {
          addProperty(button);
        }
      });
    }

    // Edge sometimes doesn't finish the paint so force a repaint
    if (browser.isEdge) {
      repaint(target);
    }

    // Setup tooltips
    if (this.config.tooltips.controls) {
      const {
        classNames,
        selectors
      } = this.config;
      const selector = `${selectors.controls.wrapper} ${selectors.labels} .${classNames.hidden}`;
      const labels = getElements.call(this, selector);
      Array.from(labels).forEach(label => {
        toggleClass(label, this.config.classNames.hidden, false);
        toggleClass(label, this.config.classNames.tooltip, true);
      });
    }
  },
  // Set media metadata
  setMediaMetadata() {
    try {
      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new window.MediaMetadata({
          title: this.config.mediaMetadata.title,
          artist: this.config.mediaMetadata.artist,
          album: this.config.mediaMetadata.album,
          artwork: this.config.mediaMetadata.artwork
        });
      }
    } catch {
      // Do nothing
    }
  },
  // Add markers
  setMarkers() {
    var _this$config$markers2, _this$config$markers3;
    if (!this.duration || this.elements.markers) return;

    // Get valid points
    const points = (_this$config$markers2 = this.config.markers) === null || _this$config$markers2 === void 0 ? void 0 : (_this$config$markers3 = _this$config$markers2.points) === null || _this$config$markers3 === void 0 ? void 0 : _this$config$markers3.filter(({
      time
    }) => time > 0 && time < this.duration);
    if (!(points !== null && points !== void 0 && points.length)) return;
    const containerFragment = document.createDocumentFragment();
    const pointsFragment = document.createDocumentFragment();
    let tipElement = null;
    const tipVisible = `${this.config.classNames.tooltip}--visible`;
    const toggleTip = show => toggleClass(tipElement, tipVisible, show);

    // Inject markers to progress container
    points.forEach(point => {
      const markerElement = createElement('span', {
        class: this.config.classNames.marker
      }, '');
      const left = `${point.time / this.duration * 100}%`;
      if (tipElement) {
        // Show on hover
        markerElement.addEventListener('mouseenter', () => {
          if (point.label) return;
          tipElement.style.left = left;
          tipElement.innerHTML = point.label;
          toggleTip(true);
        });

        // Hide on leave
        markerElement.addEventListener('mouseleave', () => {
          toggleTip(false);
        });
      }
      markerElement.addEventListener('click', () => {
        this.currentTime = point.time;
      });
      markerElement.style.left = left;
      pointsFragment.appendChild(markerElement);
    });
    containerFragment.appendChild(pointsFragment);

    // Inject a tooltip if needed
    if (!this.config.tooltips.seek) {
      tipElement = createElement('span', {
        class: this.config.classNames.tooltip
      }, '');
      containerFragment.appendChild(tipElement);
    }
    this.elements.markers = {
      points: pointsFragment,
      tip: tipElement
    };
    this.elements.progress.appendChild(containerFragment);
  }
};

// ==========================================================================
// URL utils
// ==========================================================================


/**
 * Parse a string to a URL object
 * @param {string} input - the URL to be parsed
 * @param {boolean} safe - failsafe parsing
 */
function parseUrl(input, safe = true) {
  let url = input;
  if (safe) {
    const parser = document.createElement('a');
    parser.href = url;
    url = parser.href;
  }
  try {
    return new URL(url);
  } catch {
    return null;
  }
}

// Convert object to URLSearchParams
function buildUrlParams(input) {
  const params = new URLSearchParams();
  if (is.object(input)) {
    Object.entries(input).forEach(([key, value]) => {
      params.set(key, value);
    });
  }
  return params;
}

// ==========================================================================
// Plyr Captions
// TODO: Create as class
// ==========================================================================

const captions = {
  // Setup captions
  setup() {
    // Requires UI support
    if (!this.supported.ui) {
      return;
    }

    // Only Vimeo and HTML5 video supported at this point
    if (!this.isVideo || this.isYouTube || this.isHTML5 && !support.textTracks) {
      // Clear menu and hide
      if (is.array(this.config.controls) && this.config.controls.includes('settings') && this.config.settings.includes('captions')) {
        controls.setCaptionsMenu.call(this);
      }
      return;
    }

    // Inject the container
    if (!is.element(this.elements.captions)) {
      this.elements.captions = createElement('div', getAttributesFromSelector(this.config.selectors.captions));
      this.elements.captions.setAttribute('dir', 'auto');
      insertAfter(this.elements.captions, this.elements.wrapper);
    }

    // Fix IE captions if CORS is used
    // Fetch captions and inject as blobs instead (data URIs not supported!)
    if (browser.isIE && window.URL) {
      const elements = this.media.querySelectorAll('track');
      Array.from(elements).forEach(track => {
        const src = track.getAttribute('src');
        const url = parseUrl(src);
        if (url !== null && url.hostname !== window.location.href.hostname && ['http:', 'https:'].includes(url.protocol)) {
          fetch(src, 'blob').then(blob => {
            track.setAttribute('src', window.URL.createObjectURL(blob));
          }).catch(() => {
            removeElement(track);
          });
        }
      });
    }

    // Get and set initial data
    // The "preferred" options are not realized unless / until the wanted language has a match
    // * languages: Array of user's browser languages.
    // * language:  The language preferred by user settings or config
    // * active:    The state preferred by user settings or config
    // * toggled:   The real captions state

    const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
    const languages = dedupe(browserLanguages.map(language => language.split('-')[0]));
    let language = (this.storage.get('language') || this.captions.language || this.config.captions.language || 'auto').toLowerCase();

    // Use first browser language when language is 'auto'
    if (language === 'auto') {
      [language] = languages;
    }
    let active = this.storage.get('captions') || this.captions.active;
    if (!is.boolean(active)) {
      ({
        active
      } = this.config.captions);
    }
    Object.assign(this.captions, {
      toggled: false,
      active,
      language,
      languages
    });

    // Watch changes to textTracks and update captions menu
    if (this.isHTML5) {
      const trackEvents = this.config.captions.update ? 'addtrack removetrack' : 'removetrack';
      on.call(this, this.media.textTracks, trackEvents, captions.update.bind(this));
    }

    // Update available languages in list next tick (the event must not be triggered before the listeners)
    setTimeout(captions.update.bind(this), 0);
  },
  // Update available language options in settings based on tracks
  update() {
    const tracks = captions.getTracks.call(this, true);
    // Get the wanted language
    const {
      active,
      language,
      meta,
      currentTrackNode
    } = this.captions;
    const languageExists = Boolean(tracks.find(track => track.language === language));

    // Handle tracks (add event listener and "pseudo"-default)
    if (this.isHTML5 && this.isVideo) {
      tracks.filter(track => !meta.get(track)).forEach(track => {
        this.debug.log('Track added', track);

        // Attempt to store if the original dom element was "default"
        meta.set(track, {
          default: track.mode === 'showing'
        });

        // Turn off native caption rendering to avoid double captions
        // Note: mode='hidden' forces a track to download. To ensure every track
        // isn't downloaded at once, only 'showing' tracks should be reassigned

        if (track.mode === 'showing') {
          track.mode = 'hidden';
        }

        // Add event listener for cue changes
        on.call(this, track, 'cuechange', () => captions.updateCues.call(this));
      });
    }

    // Update language first time it matches, or if the previous matching track was removed
    if (languageExists && this.language !== language || !tracks.includes(currentTrackNode)) {
      captions.setLanguage.call(this, language);
      captions.toggle.call(this, active && languageExists);
    }

    // Enable or disable captions based on track length
    if (this.elements) {
      toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is.empty(tracks));
    }

    // Update available languages in list
    if (is.array(this.config.controls) && this.config.controls.includes('settings') && this.config.settings.includes('captions')) {
      controls.setCaptionsMenu.call(this);
    }
  },
  // Toggle captions display
  // Used internally for the toggleCaptions method, with the passive option forced to false
  toggle(input, passive = true) {
    // If there's no full support
    if (!this.supported.ui) {
      return;
    }
    const {
      toggled
    } = this.captions; // Current state
    const activeClass = this.config.classNames.captions.active;
    // Get the next state
    // If the method is called without parameter, toggle based on current value
    const active = is.nullOrUndefined(input) ? !toggled : input;

    // Update state and trigger event
    if (active !== toggled) {
      // When passive, don't override user preferences
      if (!passive) {
        this.captions.active = active;
        this.storage.set({
          captions: active
        });
      }

      // Force language if the call isn't passive and there is no matching language to toggle to
      if (!this.language && active && !passive) {
        const tracks = captions.getTracks.call(this);
        const track = captions.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);

        // Override user preferences to avoid switching languages if a matching track is added
        this.captions.language = track.language;

        // Set caption, but don't store in localStorage as user preference
        captions.set.call(this, tracks.indexOf(track));
        return;
      }

      // Toggle button if it's enabled
      if (this.elements.buttons.captions) {
        this.elements.buttons.captions.pressed = active;
      }

      // Add class hook
      toggleClass(this.elements.container, activeClass, active);
      this.captions.toggled = active;

      // Update settings menu
      controls.updateSetting.call(this, 'captions');

      // Trigger event (not used internally)
      triggerEvent.call(this, this.media, active ? 'captionsenabled' : 'captionsdisabled');
    }

    // Wait for the call stack to clear before setting mode='hidden'
    // on the active track - forcing the browser to download it
    setTimeout(() => {
      if (active && this.captions.toggled) {
        this.captions.currentTrackNode.mode = 'hidden';
      }
    });
  },
  // Set captions by track index
  // Used internally for the currentTrack setter with the passive option forced to false
  set(index, passive = true) {
    const tracks = captions.getTracks.call(this);

    // Disable captions if setting to -1
    if (index === -1) {
      captions.toggle.call(this, false, passive);
      return;
    }
    if (!is.number(index)) {
      this.debug.warn('Invalid caption argument', index);
      return;
    }
    if (!(index in tracks)) {
      this.debug.warn('Track not found', index);
      return;
    }
    if (this.captions.currentTrack !== index) {
      this.captions.currentTrack = index;
      const track = tracks[index];
      const {
        language
      } = track || {};

      // Store reference to node for invalidation on remove
      this.captions.currentTrackNode = track;

      // Update settings menu
      controls.updateSetting.call(this, 'captions');

      // When passive, don't override user preferences
      if (!passive) {
        this.captions.language = language;
        this.storage.set({
          language
        });
      }

      // Handle Vimeo captions
      if (this.isVimeo) {
        // Enable text track but don't render captions within the player
        // Since we handle that ourselves
        this.embed.enableTextTrack(language, null, false);
      }

      // Trigger event
      triggerEvent.call(this, this.media, 'languagechange');
    }

    // Show captions
    captions.toggle.call(this, true, passive);
    if (this.isHTML5 && this.isVideo) {
      // If we change the active track while a cue is already displayed we need to update it
      captions.updateCues.call(this);
    }
  },
  // Set captions by language
  // Used internally for the language setter with the passive option forced to false
  setLanguage(input, passive = true) {
    if (!is.string(input)) {
      this.debug.warn('Invalid language argument', input);
      return;
    }
    // Normalize
    const language = input.toLowerCase();
    this.captions.language = language;

    // Set currentTrack
    const tracks = captions.getTracks.call(this);
    const track = captions.findTrack.call(this, [language]);
    captions.set.call(this, tracks.indexOf(track), passive);
  },
  // Get current valid caption tracks
  // If update is false it will also ignore tracks without metadata
  // This is used to "freeze" the language options when captions.update is false
  getTracks(update = false) {
    // Handle media or textTracks missing or null
    const tracks = Array.from((this.media || {}).textTracks || []);
    // For HTML5, use cache instead of current tracks when it exists (if captions.update is false)
    // Filter out removed tracks and tracks that aren't captions/subtitles (for example metadata)
    return tracks.filter(track => !this.isHTML5 || update || this.captions.meta.has(track)).filter(track => ['captions', 'subtitles'].includes(track.kind));
  },
  // Match tracks based on languages and get the first
  findTrack(languages, force = false) {
    const tracks = captions.getTracks.call(this);
    const sortIsDefault = track => Number((this.captions.meta.get(track) || {}).default);
    const sorted = Array.from(tracks).sort((a, b) => sortIsDefault(b) - sortIsDefault(a));
    let track;
    languages.every(language => {
      track = sorted.find(t => t.language === language);
      return !track; // Break iteration if there is a match
    });

    // If no match is found but is required, get first
    return track || (force ? sorted[0] : undefined);
  },
  // Get the current track
  getCurrentTrack() {
    return captions.getTracks.call(this)[this.currentTrack];
  },
  // Get UI label for track
  getLabel(track) {
    let currentTrack = track;
    if (!is.track(currentTrack) && support.textTracks && this.captions.toggled) {
      currentTrack = captions.getCurrentTrack.call(this);
    }
    if (is.track(currentTrack)) {
      if (!is.empty(currentTrack.label)) {
        return currentTrack.label;
      }
      if (!is.empty(currentTrack.language)) {
        return track.language.toUpperCase();
      }
      return i18n.get('enabled', this.config);
    }
    return i18n.get('disabled', this.config);
  },
  // Update captions using current track's active cues
  // Also optional array argument in case there isn't any track (ex: vimeo)
  updateCues(input) {
    // Requires UI
    if (!this.supported.ui) {
      return;
    }
    if (!is.element(this.elements.captions)) {
      this.debug.warn('No captions element to render to');
      return;
    }

    // Only accept array or empty input
    if (!is.nullOrUndefined(input) && !Array.isArray(input)) {
      this.debug.warn('updateCues: Invalid input', input);
      return;
    }
    let cues = input;

    // Get cues from track
    if (!cues) {
      const track = captions.getCurrentTrack.call(this);
      cues = Array.from((track || {}).activeCues || []).map(cue => cue.getCueAsHTML()).map(getHTML);
    }

    // Set new caption text
    const content = cues.map(cueText => cueText.trim()).join('\n');
    const changed = content !== this.elements.captions.innerHTML;
    if (changed) {
      // Empty the container and create a new child element
      emptyElement(this.elements.captions);
      const caption = createElement('span', getAttributesFromSelector(this.config.selectors.caption));
      caption.innerHTML = content;
      this.elements.captions.appendChild(caption);

      // Trigger event
      triggerEvent.call(this, this.media, 'cuechange');
    }
  }
};

// ==========================================================================
// Plyr default config
// ==========================================================================

const defaults = {
  // Disable
  enabled: true,
  // Custom media title
  title: '',
  // Logging to console
  debug: false,
  // Auto play (if supported)
  autoplay: false,
  // Only allow one media playing at once (vimeo only)
  autopause: true,
  // Allow inline playback on iOS
  playsinline: true,
  // Default time to skip when rewind/fast forward
  seekTime: 10,
  // Default volume
  volume: 1,
  muted: false,
  // Pass a custom duration
  duration: null,
  // Display the media duration on load in the current time position
  // If you have opted to display both duration and currentTime, this is ignored
  displayDuration: true,
  // Invert the current time to be a countdown
  invertTime: true,
  // Clicking the currentTime inverts it's value to show time left rather than elapsed
  toggleInvert: true,
  // Force an aspect ratio
  // The format must be `'w:h'` (e.g. `'16:9'`)
  ratio: null,
  // Click video container to play/pause
  clickToPlay: true,
  // Auto hide the controls
  hideControls: true,
  // Reset to start when playback ended
  resetOnEnd: false,
  // Disable the standard context menu
  disableContextMenu: true,
  // Sprite (for icons)
  loadSprite: true,
  iconPrefix: 'plyr',
  iconUrl: 'https://cdn.plyr.io/3.8.4/plyr.svg',
  // Blank video (used to prevent errors on source change)
  blankVideo: 'https://cdn.plyr.io/static/blank.mp4',
  // Quality default
  quality: {
    default: 576,
    // The options to display in the UI, if available for the source media
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
    forced: false,
    onChange: null
  },
  // Set loops
  loop: {
    active: false
    // start: null,
    // end: null,
  },
  // Speed default and options to display
  speed: {
    selected: 1,
    // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
    options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
  },
  // Keyboard shortcut settings
  keyboard: {
    focused: true,
    global: false
  },
  // Display tooltips
  tooltips: {
    controls: false,
    seek: true
  },
  // Captions settings
  captions: {
    active: false,
    language: 'auto',
    // Listen to new tracks added after Plyr is initialized.
    // This is needed for streaming captions, but may result in unselectable options
    update: false
  },
  // Fullscreen settings
  fullscreen: {
    enabled: true,
    // Allow fullscreen?
    fallback: true,
    // Fallback using full viewport/window
    iosNative: false // Use the native fullscreen in iOS (disables custom controls)
    // Selector for the fullscreen container so contextual / non-player content can remain visible in fullscreen mode
    // Non-ancestors of the player element will be ignored
    // container: null, // defaults to the player element
  },
  // Local storage
  storage: {
    enabled: true,
    key: 'plyr'
  },
  // Default controls
  controls: ['play-large',
  // 'restart',
  // 'rewind',
  'play',
  // 'fast-forward',
  'progress', 'current-time',
  // 'duration',
  'mute', 'volume', 'captions', 'settings', 'pip', 'airplay',
  // 'download',
  'fullscreen'],
  settings: ['captions', 'quality', 'speed'],
  // Localisation
  i18n: {
    restart: 'Restart',
    rewind: 'Rewind {seektime}s',
    play: 'Play',
    pause: 'Pause',
    fastForward: 'Forward {seektime}s',
    seek: 'Seek',
    seekLabel: '{currentTime} of {duration}',
    played: 'Played',
    buffered: 'Buffered',
    currentTime: 'Current time',
    duration: 'Duration',
    volume: 'Volume',
    mute: 'Mute',
    unmute: 'Unmute',
    enableCaptions: 'Enable captions',
    disableCaptions: 'Disable captions',
    download: 'Download',
    enterFullscreen: 'Enter fullscreen',
    exitFullscreen: 'Exit fullscreen',
    frameTitle: 'Player for {title}',
    captions: 'Captions',
    settings: 'Settings',
    pip: 'PIP',
    menuBack: 'Go back to previous menu',
    speed: 'Speed',
    normal: 'Normal',
    quality: 'Quality',
    loop: 'Loop',
    start: 'Start',
    end: 'End',
    all: 'All',
    reset: 'Reset',
    disabled: 'Disabled',
    enabled: 'Enabled',
    advertisement: 'Ad',
    qualityBadge: {
      2160: '4K',
      1440: 'HD',
      1080: 'HD',
      720: 'HD',
      576: 'SD',
      480: 'SD'
    }
  },
  // URLs
  urls: {
    download: null,
    vimeo: {
      sdk: 'https://player.vimeo.com/api/player.js',
      iframe: 'https://player.vimeo.com/video/{0}?{1}',
      api: 'https://vimeo.com/api/oembed.json?url={0}'
    },
    youtube: {
      sdk: 'https://www.youtube.com/iframe_api',
      api: 'https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}'
    },
    googleIMA: {
      sdk: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js'
    }
  },
  // Custom control listeners
  listeners: {
    seek: null,
    play: null,
    pause: null,
    restart: null,
    rewind: null,
    fastForward: null,
    mute: null,
    volume: null,
    captions: null,
    download: null,
    fullscreen: null,
    pip: null,
    airplay: null,
    speed: null,
    quality: null,
    loop: null,
    language: null
  },
  // Events to watch and bubble
  events: [
  // Events to watch on HTML5 media elements and bubble
  // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
  'ended', 'progress', 'stalled', 'playing', 'waiting', 'canplay', 'canplaythrough', 'loadstart', 'loadeddata', 'loadedmetadata', 'timeupdate', 'volumechange', 'play', 'pause', 'error', 'seeking', 'seeked', 'emptied', 'ratechange', 'cuechange',
  // Custom events
  'download', 'enterfullscreen', 'exitfullscreen', 'captionsenabled', 'captionsdisabled', 'languagechange', 'controlshidden', 'controlsshown', 'ready',
  // YouTube
  'statechange',
  // Quality
  'qualitychange',
  // Ads
  'adsloaded', 'adscontentpause', 'adscontentresume', 'adstarted', 'adsmidpoint', 'adscomplete', 'adsallcomplete', 'adsimpression', 'adsclick'],
  // Selectors
  // Change these to match your template if using custom HTML
  selectors: {
    editable: 'input, textarea, select, [contenteditable]',
    container: '.plyr',
    controls: {
      container: null,
      wrapper: '.plyr__controls'
    },
    labels: '[data-plyr]',
    buttons: {
      play: '[data-plyr="play"]',
      pause: '[data-plyr="pause"]',
      restart: '[data-plyr="restart"]',
      rewind: '[data-plyr="rewind"]',
      fastForward: '[data-plyr="fast-forward"]',
      mute: '[data-plyr="mute"]',
      captions: '[data-plyr="captions"]',
      download: '[data-plyr="download"]',
      fullscreen: '[data-plyr="fullscreen"]',
      pip: '[data-plyr="pip"]',
      airplay: '[data-plyr="airplay"]',
      settings: '[data-plyr="settings"]',
      loop: '[data-plyr="loop"]'
    },
    inputs: {
      seek: '[data-plyr="seek"]',
      volume: '[data-plyr="volume"]',
      speed: '[data-plyr="speed"]',
      language: '[data-plyr="language"]',
      quality: '[data-plyr="quality"]'
    },
    display: {
      currentTime: '.plyr__time--current',
      duration: '.plyr__time--duration',
      buffer: '.plyr__progress__buffer',
      loop: '.plyr__progress__loop',
      // Used later
      volume: '.plyr__volume--display'
    },
    progress: '.plyr__progress',
    captions: '.plyr__captions',
    caption: '.plyr__caption'
  },
  // Class hooks added to the player in different states
  classNames: {
    type: 'plyr--{0}',
    provider: 'plyr--{0}',
    video: 'plyr__video-wrapper',
    embed: 'plyr__video-embed',
    videoFixedRatio: 'plyr__video-wrapper--fixed-ratio',
    embedContainer: 'plyr__video-embed__container',
    poster: 'plyr__poster',
    posterEnabled: 'plyr__poster-enabled',
    ads: 'plyr__ads',
    control: 'plyr__control',
    controlPressed: 'plyr__control--pressed',
    playing: 'plyr--playing',
    paused: 'plyr--paused',
    stopped: 'plyr--stopped',
    loading: 'plyr--loading',
    hover: 'plyr--hover',
    tooltip: 'plyr__tooltip',
    cues: 'plyr__cues',
    marker: 'plyr__progress__marker',
    hidden: 'plyr__sr-only',
    hideControls: 'plyr--hide-controls',
    isTouch: 'plyr--is-touch',
    uiSupported: 'plyr--full-ui',
    noTransition: 'plyr--no-transition',
    display: {
      time: 'plyr__time'
    },
    menu: {
      value: 'plyr__menu__value',
      badge: 'plyr__badge',
      open: 'plyr--menu-open'
    },
    captions: {
      enabled: 'plyr--captions-enabled',
      active: 'plyr--captions-active'
    },
    fullscreen: {
      enabled: 'plyr--fullscreen-enabled',
      fallback: 'plyr--fullscreen-fallback'
    },
    pip: {
      supported: 'plyr--pip-supported',
      active: 'plyr--pip-active'
    },
    airplay: {
      supported: 'plyr--airplay-supported',
      active: 'plyr--airplay-active'
    },
    previewThumbnails: {
      // Tooltip thumbs
      thumbContainer: 'plyr__preview-thumb',
      thumbContainerShown: 'plyr__preview-thumb--is-shown',
      imageContainer: 'plyr__preview-thumb__image-container',
      timeContainer: 'plyr__preview-thumb__time-container',
      // Scrubbing
      scrubbingContainer: 'plyr__preview-scrubbing',
      scrubbingContainerShown: 'plyr__preview-scrubbing--is-shown'
    }
  },
  // Embed attributes
  attributes: {
    embed: {
      provider: 'data-plyr-provider',
      id: 'data-plyr-embed-id',
      hash: 'data-plyr-embed-hash'
    }
  },
  // Advertisements plugin
  // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
  ads: {
    enabled: false,
    publisherId: '',
    tagUrl: ''
  },
  // Preview Thumbnails plugin
  previewThumbnails: {
    enabled: false,
    src: '',
    withCredentials: false
  },
  // Vimeo plugin
  vimeo: {
    byline: false,
    portrait: false,
    title: false,
    speed: true,
    transparent: false,
    // Custom settings from Plyr
    customControls: true,
    referrerPolicy: null,
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy
    // Whether the owner of the video has a Pro or Business account
    // (which allows us to properly hide controls without CSS hacks, etc)
    premium: false
  },
  // YouTube plugin
  youtube: {
    rel: 0,
    // No related vids
    showinfo: 0,
    // Hide info
    iv_load_policy: 3,
    // Hide annotations
    modestbranding: 1,
    // Hide logos as much as possible (they still show one in the corner when paused)
    // Custom settings from Plyr
    customControls: true,
    noCookie: false // Whether to use an alternative version of YouTube without cookies
  },
  // Media Metadata
  mediaMetadata: {
    title: '',
    artist: '',
    album: '',
    artwork: []
  },
  // Markers
  markers: {
    enabled: false,
    points: []
  }
};

// ==========================================================================
// Plyr states
// ==========================================================================

const pip = {
  active: 'picture-in-picture',
  inactive: 'inline'
};

// ==========================================================================
// Plyr supported types and providers
// ==========================================================================

const providers = {
  html5: 'html5',
  youtube: 'youtube',
  vimeo: 'vimeo'
};
const types = {
  audio: 'audio',
  video: 'video'
};

/**
 * Get provider by URL
 * @param {string} url
 */
function getProviderByUrl(url) {
  // YouTube
  if (/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(url)) {
    return providers.youtube;
  }

  // Vimeo
  if (/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(url)) {
    return providers.vimeo;
  }
  return null;
}

// ==========================================================================
// Console wrapper
// ==========================================================================

function noop() {}
class Console {
  constructor(enabled = false) {
    this.enabled = window.console && enabled;
    if (this.enabled) {
      this.log('Debugging enabled');
    }
  }
  get log() {
    // eslint-disable-next-line no-console
    return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
  }
  get warn() {
    return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
  }
  get error() {
    return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
  }
}

class Fullscreen {
  constructor(player) {
    _defineProperty$1(this, "onChange", () => {
      if (!this.supported) return;

      // Update toggle button
      const button = this.player.elements.buttons.fullscreen;
      if (is.element(button)) {
        button.pressed = this.active;
      }

      // Always trigger events on the plyr / media element (not a fullscreen container) and let them bubble up
      const target = this.target === this.player.media ? this.target : this.player.elements.container;
      // Trigger an event
      triggerEvent.call(this.player, target, this.active ? 'enterfullscreen' : 'exitfullscreen', true);
    });
    _defineProperty$1(this, "toggleFallback", (toggle = false) => {
      // Store or restore scroll position
      if (toggle) {
        var _window$scrollX, _window$scrollY;
        this.scrollPosition = {
          x: (_window$scrollX = window.scrollX) !== null && _window$scrollX !== void 0 ? _window$scrollX : 0,
          y: (_window$scrollY = window.scrollY) !== null && _window$scrollY !== void 0 ? _window$scrollY : 0
        };
      } else {
        window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
      }

      // Toggle scroll
      document.body.style.overflow = toggle ? 'hidden' : '';

      // Toggle class hook
      toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, toggle);

      // Force full viewport on iPhone X+
      if (browser.isIos) {
        let viewport = document.head.querySelector('meta[name="viewport"]');
        const property = 'viewport-fit=cover';

        // Inject the viewport meta if required
        if (!viewport) {
          viewport = document.createElement('meta');
          viewport.setAttribute('name', 'viewport');
        }

        // Check if the property already exists
        const hasProperty = is.string(viewport.content) && viewport.content.includes(property);
        if (toggle) {
          this.cleanupViewport = !hasProperty;
          if (!hasProperty) viewport.content += `,${property}`;
        } else if (this.cleanupViewport) {
          viewport.content = viewport.content.split(',').filter(part => part.trim() !== property).join(',');
        }
      }

      // Toggle button and fire events
      this.onChange();
    });
    // Trap focus inside container
    _defineProperty$1(this, "trapFocus", event => {
      // Bail if iOS/iPadOS, not active, not the tab key
      if (browser.isIos || browser.isIPadOS || !this.active || event.key !== 'Tab') return;

      // Get the current focused element
      const focused = document.activeElement;
      const focusable = getElements.call(this.player, 'a[href], button:not(:disabled), input:not(:disabled), [tabindex]');
      const [first] = focusable;
      const last = focusable[focusable.length - 1];
      if (focused === last && !event.shiftKey) {
        // Move focus to first element that can be tabbed if Shift isn't used
        first.focus();
        event.preventDefault();
      } else if (focused === first && event.shiftKey) {
        // Move focus to last element that can be tabbed if Shift is used
        last.focus();
        event.preventDefault();
      }
    });
    // Update UI
    _defineProperty$1(this, "update", () => {
      if (this.supported) {
        let mode;
        if (this.forceFallback) mode = 'Fallback (forced)';else if (Fullscreen.nativeSupported) mode = 'Native';else mode = 'Fallback';
        this.player.debug.log(`${mode} fullscreen enabled`);
      } else {
        this.player.debug.log('Fullscreen not supported and fallback disabled');
      }

      // Add styling hook to show button
      toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
    });
    // Make an element fullscreen
    _defineProperty$1(this, "enter", () => {
      if (!this.supported) return;

      // iOS native fullscreen doesn't need the request step
      if (browser.isIos && this.player.config.fullscreen.iosNative) {
        if (this.player.isVimeo) {
          this.player.embed.requestFullscreen();
        } else {
          this.target.webkitEnterFullscreen();
        }
      } else if (!Fullscreen.nativeSupported || this.forceFallback) {
        this.toggleFallback(true);
      } else if (!this.prefix) {
        this.target.requestFullscreen({
          navigationUI: 'hide'
        });
      } else if (!is.empty(this.prefix)) {
        this.target[`${this.prefix}Request${this.property}`]();
      }
    });
    // Bail from fullscreen
    _defineProperty$1(this, "exit", () => {
      if (!this.supported) return;

      // iOS native fullscreen
      if (browser.isIos && this.player.config.fullscreen.iosNative) {
        if (this.player.isVimeo) {
          this.player.embed.exitFullscreen();
        } else {
          this.target.webkitEnterFullscreen();
        }
        silencePromise(this.player.play());
      } else if (!Fullscreen.nativeSupported || this.forceFallback) {
        this.toggleFallback(false);
      } else if (!this.prefix) {
        (document.cancelFullScreen || document.exitFullscreen).call(document);
      } else if (!is.empty(this.prefix)) {
        const action = this.prefix === 'moz' ? 'Cancel' : 'Exit';
        document[`${this.prefix}${action}${this.property}`]();
      }
    });
    // Toggle state
    _defineProperty$1(this, "toggle", () => {
      if (!this.active) this.enter();else this.exit();
    });
    // Keep reference to parent
    this.player = player;

    // Get prefix
    this.prefix = Fullscreen.prefix;
    this.property = Fullscreen.property;

    // Scroll position
    this.scrollPosition = {
      x: 0,
      y: 0
    };

    // Force the use of 'full window/browser' rather than fullscreen
    this.forceFallback = player.config.fullscreen.fallback === 'force';

    // Get the fullscreen element
    // Checks container is an ancestor, defaults to null
    this.player.elements.fullscreen = player.config.fullscreen.container && closest$1(this.player.elements.container, player.config.fullscreen.container);

    // Register event listeners
    // Handle event (incase user presses escape etc)
    on.call(this.player, document, this.prefix === 'ms' ? 'MSFullscreenChange' : `${this.prefix}fullscreenchange`, () => {
      // TODO: Filter for target??
      this.onChange();
    });

    // Fullscreen toggle on double click
    on.call(this.player, this.player.elements.container, 'dblclick', event => {
      // Ignore double click in controls
      if (is.element(this.player.elements.controls) && this.player.elements.controls.contains(event.target)) {
        return;
      }
      this.player.listeners.proxy(event, this.toggle, 'fullscreen');
    });

    // Tap focus when in fullscreen
    on.call(this, this.player.elements.container, 'keydown', event => this.trapFocus(event));

    // Update the UI
    this.update();
  }

  // Determine if native supported
  static get nativeSupported() {
    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
  }

  // If we're actually using native
  get useNative() {
    return Fullscreen.nativeSupported && !this.forceFallback;
  }

  // Get the prefix for handlers
  static get prefix() {
    // No prefix
    if (is.function(document.exitFullscreen)) return '';

    // Check for fullscreen support by vendor prefix
    let value = '';
    const prefixes = ['webkit', 'moz', 'ms'];
    prefixes.some(pre => {
      if (is.function(document[`${pre}ExitFullscreen`]) || is.function(document[`${pre}CancelFullScreen`])) {
        value = pre;
        return true;
      }
      return false;
    });
    return value;
  }
  static get property() {
    return this.prefix === 'moz' ? 'FullScreen' : 'Fullscreen';
  }

  // Determine if fullscreen is supported
  get supported() {
    return [
    // Fullscreen is enabled in config
    this.player.config.fullscreen.enabled,
    // Must be a video
    this.player.isVideo,
    // Either native is supported or fallback enabled
    Fullscreen.nativeSupported || this.player.config.fullscreen.fallback,
    // YouTube has no way to trigger fullscreen, so on devices with no native support, playsinline
    // must be enabled and iosNative fullscreen must be disabled to offer the fullscreen fallback
    !this.player.isYouTube || Fullscreen.nativeSupported || !browser.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative].every(Boolean);
  }

  // Get active state
  get active() {
    if (!this.supported) return false;

    // Fallback using classname
    if (!Fullscreen.nativeSupported || this.forceFallback) {
      return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
    }
    const element = !this.prefix ? this.target.getRootNode().fullscreenElement : this.target.getRootNode()[`${this.prefix}${this.property}Element`];
    return element && element.shadowRoot ? element === this.target.getRootNode().host : element === this.target;
  }

  // Get target element
  get target() {
    var _this$player$elements;
    return browser.isIos && this.player.config.fullscreen.iosNative ? this.player.media : (_this$player$elements = this.player.elements.fullscreen) !== null && _this$player$elements !== void 0 ? _this$player$elements : this.player.elements.container;
  }
}

// ==========================================================================
// Load image avoiding xhr/fetch CORS issues
// Server status can't be obtained this way unfortunately, so this uses "naturalWidth" to determine if the image has loaded
// By default it checks if it is at least 1px, but you can add a second argument to change this
// ==========================================================================

function loadImage(src, minWidth = 1) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const handler = () => {
      delete image.onload;
      delete image.onerror;
      (image.naturalWidth >= minWidth ? resolve : reject)(image);
    };
    Object.assign(image, {
      onload: handler,
      onerror: handler,
      src
    });
  });
}

// ==========================================================================
// Plyr UI
// ==========================================================================

const ui = {
  addStyleHook() {
    toggleClass(this.elements.container, this.config.selectors.container.replace('.', ''), true);
    toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
  },
  // Toggle native HTML5 media controls
  toggleNativeControls(toggle = false) {
    if (toggle && this.isHTML5) {
      this.media.setAttribute('controls', '');
    } else {
      this.media.removeAttribute('controls');
    }
  },
  // Setup the UI
  build() {
    // Re-attach media element listeners
    // TODO: Use event bubbling?
    this.listeners.media();

    // Don't setup interface if no support
    if (!this.supported.ui) {
      this.debug.warn(`Basic support only for ${this.provider} ${this.type}`);

      // Restore native controls
      ui.toggleNativeControls.call(this, true);

      // Bail
      return;
    }

    // Inject custom controls if not present
    if (!is.element(this.elements.controls)) {
      // Inject custom controls
      controls.inject.call(this);

      // Re-attach control listeners
      this.listeners.controls();
    }

    // Remove native controls
    ui.toggleNativeControls.call(this);

    // Setup captions for HTML5
    if (this.isHTML5) {
      captions.setup.call(this);
    }

    // Reset volume
    this.volume = null;

    // Reset mute state
    this.muted = null;

    // Reset loop state
    this.loop = null;

    // Reset quality setting
    this.quality = null;

    // Reset speed
    this.speed = null;

    // Reset volume display
    controls.updateVolume.call(this);

    // Reset time display
    controls.timeUpdate.call(this);

    // Reset duration display
    controls.durationUpdate.call(this);

    // Update the UI
    ui.checkPlaying.call(this);

    // Check for picture-in-picture support
    toggleClass(this.elements.container, this.config.classNames.pip.supported, support.pip && this.isHTML5 && this.isVideo);

    // Check for airplay support
    toggleClass(this.elements.container, this.config.classNames.airplay.supported, support.airplay && this.isHTML5);

    // Add touch class
    toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch);

    // Ready for API calls
    this.ready = true;

    // Ready event at end of execution stack
    setTimeout(() => {
      triggerEvent.call(this, this.media, 'ready');
    }, 0);

    // Set the title
    ui.setTitle.call(this);

    // Assure the poster image is set, if the property was added before the element was created
    if (this.poster) {
      ui.setPoster.call(this, this.poster, false).catch(() => {});
    }

    // Manually set the duration if user has overridden it.
    // The event listeners for it doesn't get called if preload is disabled (#701)
    if (this.config.duration) {
      controls.durationUpdate.call(this);
    }

    // Media metadata
    if (this.config.mediaMetadata) {
      controls.setMediaMetadata.call(this);
    }
  },
  // Setup aria attribute for play and iframe title
  setTitle() {
    // Find the current text
    let label = i18n.get('play', this.config);

    // If there's a media title set, use that for the label
    if (is.string(this.config.title) && !is.empty(this.config.title)) {
      label += `, ${this.config.title}`;
    }

    // If there's a play button, set label
    Array.from(this.elements.buttons.play || []).forEach(button => {
      button.setAttribute('aria-label', label);
    });

    // Set iframe title
    // https://github.com/sampotts/plyr/issues/124
    if (this.isEmbed) {
      const iframe = getElement.call(this, 'iframe');
      if (!is.element(iframe)) {
        return;
      }

      // Default to media type
      const title = !is.empty(this.config.title) ? this.config.title : 'video';
      const format = i18n.get('frameTitle', this.config);
      iframe.setAttribute('title', format.replace('{title}', title));
    }
  },
  // Toggle poster
  togglePoster(enable) {
    toggleClass(this.elements.container, this.config.classNames.posterEnabled, enable);
  },
  // Set the poster image (async)
  // Used internally for the poster setter, with the passive option forced to false
  setPoster(poster, passive = true) {
    // Don't override if call is passive
    if (passive && this.poster) {
      return Promise.reject(new Error('Poster already set'));
    }

    // Set property synchronously to respect the call order
    this.media.setAttribute('data-poster', poster);

    // Show the poster
    this.elements.poster.removeAttribute('hidden');

    // Wait until ui is ready
    return ready.call(this)
    // Load image
    .then(() => loadImage(poster)).catch(error => {
      // Hide poster on error unless it's been set by another call
      if (poster === this.poster) {
        ui.togglePoster.call(this, false);
      }
      // Rethrow
      throw error;
    }).then(() => {
      // Prevent race conditions
      if (poster !== this.poster) {
        throw new Error('setPoster cancelled by later call to setPoster');
      }
    }).then(() => {
      Object.assign(this.elements.poster.style, {
        backgroundImage: `url('${poster}')`,
        // Reset backgroundSize as well (since it can be set to "cover" for padded thumbnails for youtube)
        backgroundSize: ''
      });
      ui.togglePoster.call(this, true);
      return poster;
    });
  },
  // Check playing state
  checkPlaying(event) {
    // Class hooks
    toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
    toggleClass(this.elements.container, this.config.classNames.paused, this.paused);
    toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped);

    // Set state
    Array.from(this.elements.buttons.play || []).forEach(target => {
      Object.assign(target, {
        pressed: this.playing
      });
      target.setAttribute('aria-label', i18n.get(this.playing ? 'pause' : 'play', this.config));
    });

    // Only update controls on non timeupdate events
    if (is.event(event) && event.type === 'timeupdate') {
      return;
    }

    // Toggle controls
    ui.toggleControls.call(this);
  },
  // Check if media is loading
  checkLoading(event) {
    this.loading = ['stalled', 'waiting'].includes(event.type);

    // Clear timer
    clearTimeout(this.timers.loading);

    // Timer to prevent flicker when seeking
    this.timers.loading = setTimeout(() => {
      // Update progress bar loading class state
      toggleClass(this.elements.container, this.config.classNames.loading, this.loading);

      // Update controls visibility
      ui.toggleControls.call(this);
    }, this.loading ? 250 : 0);
  },
  // Toggle controls based on state and `force` argument
  toggleControls(force) {
    const {
      controls: controlsElement
    } = this.elements;
    if (controlsElement && this.config.hideControls) {
      // Don't hide controls if a touch-device user recently seeked. (Must be limited to touch devices, or it occasionally prevents desktop controls from hiding.)
      const recentTouchSeek = this.touch && this.lastSeekTime + 2000 > Date.now();

      // Show controls if force, loading, paused, button interaction, or recent seek, otherwise hide
      this.toggleControls(Boolean(force || this.loading || this.paused || controlsElement.pressed || controlsElement.hover || recentTouchSeek));
    }
  },
  // Migrate any custom properties from the media to the parent
  migrateStyles() {
    // Loop through values (as they are the keys when the object is spread 🤔)
    Object.values({
      ...this.media.style
    })
    // We're only fussed about Plyr specific properties
    .filter(key => !is.empty(key) && is.string(key) && key.startsWith('--plyr')).forEach(key => {
      // Set on the container
      this.elements.container.style.setProperty(key, this.media.style.getPropertyValue(key));

      // Clean up from media element
      this.media.style.removeProperty(key);
    });

    // Remove attribute if empty
    if (is.empty(this.media.style)) {
      this.media.removeAttribute('style');
    }
  }
};

class Listeners {
  constructor(_player) {
    // Device is touch enabled
    _defineProperty$1(this, "firstTouch", () => {
      const {
        player
      } = this;
      const {
        elements
      } = player;
      player.touch = true;

      // Add touch class
      toggleClass(elements.container, player.config.classNames.isTouch, true);
    });
    // Global window & document listeners
    _defineProperty$1(this, "global", (toggle = true) => {
      const {
        player
      } = this;

      // Keyboard shortcuts
      if (player.config.keyboard.global) {
        toggleListener.call(player, window, 'keydown keyup', this.handleKey, toggle, false);
      }

      // Click anywhere closes menu
      toggleListener.call(player, document.body, 'click', this.toggleMenu, toggle);

      // Detect touch by events
      once.call(player, document.body, 'touchstart', this.firstTouch);
    });
    // Container listeners
    _defineProperty$1(this, "container", () => {
      const {
        player
      } = this;
      const {
        config,
        elements,
        timers
      } = player;

      // Keyboard shortcuts
      if (!config.keyboard.global && config.keyboard.focused) {
        on.call(player, elements.container, 'keydown keyup', this.handleKey, false);
      }

      // Toggle controls on mouse events and entering fullscreen
      on.call(player, elements.container, 'mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen', event => {
        const {
          controls: controlsElement
        } = elements;

        // Remove button states for fullscreen
        if (controlsElement && event.type === 'enterfullscreen') {
          controlsElement.pressed = false;
          controlsElement.hover = false;
        }

        // Show, then hide after a timeout unless another control event occurs
        const show = ['touchstart', 'touchmove', 'mousemove'].includes(event.type);
        let delay = 0;
        if (show) {
          ui.toggleControls.call(player, true);
          // Use longer timeout for touch devices
          delay = player.touch ? 3000 : 2000;
        }

        // Clear timer
        clearTimeout(timers.controls);

        // Set new timer to prevent flicker when seeking
        timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
      });

      // Set a gutter for Vimeo
      const setGutter = () => {
        if (!player.isVimeo || player.config.vimeo.premium) {
          return;
        }
        const target = elements.wrapper;
        const {
          active
        } = player.fullscreen;
        const [videoWidth, videoHeight] = getAspectRatio.call(player);
        const useNativeAspectRatio = supportsCSS(`aspect-ratio: ${videoWidth} / ${videoHeight}`);

        // If not active, remove styles
        if (!active) {
          if (useNativeAspectRatio) {
            target.style.width = null;
            target.style.height = null;
          } else {
            target.style.maxWidth = null;
            target.style.margin = null;
          }
          return;
        }

        // Determine which dimension will overflow and constrain view
        const [viewportWidth, viewportHeight] = getViewportSize();
        const overflow = viewportWidth / viewportHeight > videoWidth / videoHeight;
        if (useNativeAspectRatio) {
          target.style.width = overflow ? 'auto' : '100%';
          target.style.height = overflow ? '100%' : 'auto';
        } else {
          target.style.maxWidth = overflow ? `${viewportHeight / videoHeight * videoWidth}px` : null;
          target.style.margin = overflow ? '0 auto' : null;
        }
      };

      // Handle resizing
      const resized = () => {
        clearTimeout(timers.resized);
        timers.resized = setTimeout(setGutter, 50);
      };
      on.call(player, elements.container, 'enterfullscreen exitfullscreen', event => {
        const {
          target
        } = player.fullscreen;

        // Ignore events not from target
        if (target !== elements.container) {
          return;
        }

        // If it's not an embed and no ratio specified
        if (!player.isEmbed && is.empty(player.config.ratio)) {
          return;
        }

        // Set Vimeo gutter
        setGutter();

        // Watch for resizes
        const method = event.type === 'enterfullscreen' ? on : off;
        method.call(player, window, 'resize', resized);
      });
    });
    // Listen for media events
    _defineProperty$1(this, "media", () => {
      const {
        player
      } = this;
      const {
        elements
      } = player;

      // Time change on media
      on.call(player, player.media, 'timeupdate seeking seeked', event => controls.timeUpdate.call(player, event));

      // Display duration
      on.call(player, player.media, 'durationchange loadeddata loadedmetadata', event => controls.durationUpdate.call(player, event));

      // Handle the media finishing
      on.call(player, player.media, 'ended', () => {
        // Show poster on end
        if (player.isHTML5 && player.isVideo && player.config.resetOnEnd) {
          // Restart
          player.restart();

          // Call pause otherwise IE11 will start playing the video again
          player.pause();
        }
      });

      // Check for buffer progress
      on.call(player, player.media, 'progress playing seeking seeked', event => controls.updateProgress.call(player, event));

      // Handle volume changes
      on.call(player, player.media, 'volumechange', event => controls.updateVolume.call(player, event));

      // Handle play/pause
      on.call(player, player.media, 'playing play pause ended emptied timeupdate', event => ui.checkPlaying.call(player, event));

      // Loading state
      on.call(player, player.media, 'waiting canplay seeked playing', event => ui.checkLoading.call(player, event));

      // Click video
      if (player.supported.ui && player.config.clickToPlay && !player.isAudio) {
        // Re-fetch the wrapper
        const wrapper = getElement.call(player, `.${player.config.classNames.video}`);

        // Bail if there's no wrapper (this should never happen)
        if (!is.element(wrapper)) {
          return;
        }

        // On click play, pause or restart
        on.call(player, elements.container, 'click', event => {
          const targets = [elements.container, wrapper];

          // Ignore if click if not container or in video wrapper
          if (!targets.includes(event.target) && !wrapper.contains(event.target)) {
            return;
          }

          // Touch devices will just show controls (if hidden)
          if (player.touch && player.config.hideControls) {
            return;
          }
          if (player.ended) {
            this.proxy(event, player.restart, 'restart');
            this.proxy(event, () => {
              silencePromise(player.play());
            }, 'play');
          } else {
            this.proxy(event, () => {
              silencePromise(player.togglePlay());
            }, 'play');
          }
        });
      }

      // Disable right click
      if (player.supported.ui && player.config.disableContextMenu) {
        on.call(player, elements.wrapper, 'contextmenu', event => {
          event.preventDefault();
        }, false);
      }

      // Volume change
      on.call(player, player.media, 'volumechange', () => {
        // Save to storage
        player.storage.set({
          volume: player.volume,
          muted: player.muted
        });
      });

      // Speed change
      on.call(player, player.media, 'ratechange', () => {
        // Update UI
        controls.updateSetting.call(player, 'speed');

        // Save to storage
        player.storage.set({
          speed: player.speed
        });
      });

      // Quality change
      on.call(player, player.media, 'qualitychange', event => {
        // Update UI
        controls.updateSetting.call(player, 'quality', null, event.detail.quality);
      });

      // Update download link when ready and if quality changes
      on.call(player, player.media, 'ready qualitychange', () => {
        controls.setDownloadUrl.call(player);
      });

      // Proxy events to container
      // Bubble up key events for Edge
      const proxyEvents = player.config.events.concat(['keyup', 'keydown']).join(' ');
      on.call(player, player.media, proxyEvents, event => {
        let {
          detail = {}
        } = event;

        // Get error details from media
        if (event.type === 'error') {
          detail = player.media.error;
        }
        triggerEvent.call(player, elements.container, event.type, true, detail);
      });
    });
    // Run default and custom handlers
    _defineProperty$1(this, "proxy", (event, defaultHandler, customHandlerKey) => {
      const {
        player
      } = this;
      const customHandler = player.config.listeners[customHandlerKey];
      const hasCustomHandler = is.function(customHandler);
      let returned = true;

      // Execute custom handler
      if (hasCustomHandler) {
        returned = customHandler.call(player, event);
      }

      // Only call default handler if not prevented in custom handler
      if (returned !== false && is.function(defaultHandler)) {
        defaultHandler.call(player, event);
      }
    });
    // Trigger custom and default handlers
    _defineProperty$1(this, "bind", (element, type, defaultHandler, customHandlerKey, passive = true) => {
      const {
        player
      } = this;
      const customHandler = player.config.listeners[customHandlerKey];
      const hasCustomHandler = is.function(customHandler);
      on.call(player, element, type, event => this.proxy(event, defaultHandler, customHandlerKey), passive && !hasCustomHandler);
    });
    // Listen for control events
    _defineProperty$1(this, "controls", () => {
      const {
        player
      } = this;
      const {
        elements
      } = player;
      // IE doesn't support input event, so we fallback to change
      const inputEvent = browser.isIE ? 'change' : 'input';

      // Play/pause toggle
      if (elements.buttons.play) {
        Array.from(elements.buttons.play).forEach(button => {
          this.bind(button, 'click', () => {
            silencePromise(player.togglePlay());
          }, 'play');
        });
      }

      // Pause
      this.bind(elements.buttons.restart, 'click', player.restart, 'restart');

      // Rewind
      this.bind(elements.buttons.rewind, 'click', () => {
        // Record seek time so we can prevent hiding controls for a few seconds after rewind
        player.lastSeekTime = Date.now();
        player.rewind();
      }, 'rewind');

      // Rewind
      this.bind(elements.buttons.fastForward, 'click', () => {
        // Record seek time so we can prevent hiding controls for a few seconds after fast forward
        player.lastSeekTime = Date.now();
        player.forward();
      }, 'fastForward');

      // Mute toggle
      this.bind(elements.buttons.mute, 'click', () => {
        player.muted = !player.muted;
      }, 'mute');

      // Captions toggle
      this.bind(elements.buttons.captions, 'click', () => player.toggleCaptions());

      // Download
      this.bind(elements.buttons.download, 'click', () => {
        triggerEvent.call(player, player.media, 'download');
      }, 'download');

      // Fullscreen toggle
      this.bind(elements.buttons.fullscreen, 'click', () => {
        player.fullscreen.toggle();
      }, 'fullscreen');

      // Picture-in-Picture
      this.bind(elements.buttons.pip, 'click', () => {
        player.pip = 'toggle';
      }, 'pip');

      // Airplay
      this.bind(elements.buttons.airplay, 'click', player.airplay, 'airplay');

      // Settings menu - click toggle
      this.bind(elements.buttons.settings, 'click', event => {
        // Prevent the document click listener closing the menu
        event.stopPropagation();
        event.preventDefault();
        controls.toggleMenu.call(player, event);
      }, null, false); // Can't be passive as we're preventing default

      // Settings menu - keyboard toggle
      // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
      this.bind(elements.buttons.settings, 'keyup', event => {
        if (![' ', 'Enter'].includes(event.key)) {
          return;
        }

        // Because return triggers a click anyway, all we need to do is set focus
        if (event.key === 'Enter') {
          controls.focusFirstMenuItem.call(player, null, true);
          return;
        }

        // Prevent scroll
        event.preventDefault();

        // Prevent playing video (Firefox)
        event.stopPropagation();

        // Toggle menu
        controls.toggleMenu.call(player, event);
      }, null, false // Can't be passive as we're preventing default
      );

      // Escape closes menu
      this.bind(elements.settings.menu, 'keydown', event => {
        if (event.key === 'Escape') {
          controls.toggleMenu.call(player, event);
        }
      });

      // Set range input alternative "value", which matches the tooltip time (#954)
      this.bind(elements.inputs.seek, 'mousedown mousemove', event => {
        const rect = elements.progress.getBoundingClientRect();
        const scrollLeft = event.pageX - event.clientX;
        const percent = 100 / rect.width * (event.pageX - rect.left - scrollLeft);
        event.currentTarget.setAttribute('seek-value', percent);
      });

      // Pause while seeking
      this.bind(elements.inputs.seek, 'mousedown mouseup keydown keyup touchstart touchend', event => {
        const seek = event.currentTarget;
        const attribute = 'play-on-seeked';
        if (is.keyboardEvent(event) && !['ArrowLeft', 'ArrowRight'].includes(event.key)) {
          return;
        }

        // Record seek time so we can prevent hiding controls for a few seconds after seek
        player.lastSeekTime = Date.now();

        // Was playing before?
        const play = seek.hasAttribute(attribute);
        // Done seeking
        const done = ['mouseup', 'touchend', 'keyup'].includes(event.type);

        // If we're done seeking and it was playing, resume playback
        if (play && done) {
          seek.removeAttribute(attribute);
          silencePromise(player.play());
        } else if (!done && player.playing) {
          seek.setAttribute(attribute, '');
          player.pause();
        }
      });

      // Fix range inputs on iOS
      // Super weird iOS bug where after you interact with an <input type="range">,
      // it takes over further interactions on the page. This is a hack
      if (browser.isIos) {
        const inputs = getElements.call(player, 'input[type="range"]');
        Array.from(inputs).forEach(input => this.bind(input, inputEvent, event => repaint(event.target)));
      }

      // Seek
      this.bind(elements.inputs.seek, inputEvent, event => {
        const seek = event.currentTarget;
        // If it exists, use seek-value instead of "value" for consistency with tooltip time (#954)
        let seekTo = seek.getAttribute('seek-value');
        if (is.empty(seekTo)) {
          seekTo = seek.value;
        }
        seek.removeAttribute('seek-value');
        player.currentTime = seekTo / seek.max * player.duration;
      }, 'seek');

      // Seek tooltip
      this.bind(elements.progress, 'mouseenter mouseleave mousemove', event => controls.updateSeekTooltip.call(player, event));

      // Preview thumbnails plugin
      // TODO: Really need to work on some sort of plug-in wide event bus or pub-sub for this
      this.bind(elements.progress, 'mousemove touchmove', event => {
        const {
          previewThumbnails
        } = player;
        if (previewThumbnails && previewThumbnails.loaded) {
          previewThumbnails.startMove(event);
        }
      });

      // Hide thumbnail preview - on mouse click, mouse leave, and video play/seek. All four are required, e.g., for buffering
      this.bind(elements.progress, 'mouseleave touchend click', () => {
        const {
          previewThumbnails
        } = player;
        if (previewThumbnails && previewThumbnails.loaded) {
          previewThumbnails.endMove(false, true);
        }
      });

      // Show scrubbing preview
      this.bind(elements.progress, 'mousedown touchstart', event => {
        const {
          previewThumbnails
        } = player;
        if (previewThumbnails && previewThumbnails.loaded) {
          previewThumbnails.startScrubbing(event);
        }
      });
      this.bind(elements.progress, 'mouseup touchend', event => {
        const {
          previewThumbnails
        } = player;
        if (previewThumbnails && previewThumbnails.loaded) {
          previewThumbnails.endScrubbing(event);
        }
      });

      // Polyfill for lower fill in <input type="range"> for webkit
      if (browser.isWebKit) {
        Array.from(getElements.call(player, 'input[type="range"]')).forEach(element => {
          this.bind(element, 'input', event => controls.updateRangeFill.call(player, event.target));
        });
      }

      // Current time invert
      // Only if one time element is used for both currentTime and duration
      if (player.config.toggleInvert && !is.element(elements.display.duration)) {
        this.bind(elements.display.currentTime, 'click', () => {
          // Do nothing if we're at the start
          if (player.currentTime === 0) {
            return;
          }
          player.config.invertTime = !player.config.invertTime;
          controls.timeUpdate.call(player);
        });
      }

      // Volume
      this.bind(elements.inputs.volume, inputEvent, event => {
        player.volume = event.target.value;
      }, 'volume');

      // Update controls.hover state (used for ui.toggleControls to avoid hiding when interacting)
      this.bind(elements.controls, 'mouseenter mouseleave', event => {
        elements.controls.hover = !player.touch && event.type === 'mouseenter';
      });

      // Also update controls.hover state for any non-player children of fullscreen element (as above)
      if (elements.fullscreen) {
        Array.from(elements.fullscreen.children).filter(c => !c.contains(elements.container)).forEach(child => {
          this.bind(child, 'mouseenter mouseleave', event => {
            if (elements.controls) {
              elements.controls.hover = !player.touch && event.type === 'mouseenter';
            }
          });
        });
      }

      // Update controls.pressed state (used for ui.toggleControls to avoid hiding when interacting)
      this.bind(elements.controls, 'mousedown mouseup touchstart touchend touchcancel', event => {
        elements.controls.pressed = ['mousedown', 'touchstart'].includes(event.type);
      });

      // Show controls when they receive focus (e.g., when using keyboard tab key)
      this.bind(elements.controls, 'focusin', () => {
        const {
          config,
          timers
        } = player;

        // Skip transition to prevent focus from scrolling the parent element
        toggleClass(elements.controls, config.classNames.noTransition, true);

        // Toggle
        ui.toggleControls.call(player, true);

        // Restore transition
        setTimeout(() => {
          toggleClass(elements.controls, config.classNames.noTransition, false);
        }, 0);

        // Delay a little more for mouse users
        const delay = this.touch ? 3000 : 4000;

        // Clear timer
        clearTimeout(timers.controls);

        // Hide again after delay
        timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
      });

      // Mouse wheel for volume
      this.bind(elements.inputs.volume, 'wheel', event => {
        // Detect "natural" scroll - supported on OS X Safari only
        // Other browsers on OS X will be inverted until support improves
        const inverted = event.webkitDirectionInvertedFromDevice;
        // Get delta from event. Invert if `inverted` is true
        const [x, y] = [event.deltaX, -event.deltaY].map(value => inverted ? -value : value);
        // Using the biggest delta, normalize to 1 or -1 (or 0 if no delta)
        const direction = Math.sign(Math.abs(x) > Math.abs(y) ? x : y);

        // Change the volume by 2%
        player.increaseVolume(direction / 50);

        // Don't break page scrolling at max and min
        const {
          volume
        } = player.media;
        if (direction === 1 && volume < 1 || direction === -1 && volume > 0) {
          event.preventDefault();
        }
      }, 'volume', false);
    });
    this.player = _player;
    this.lastKey = null;
    this.focusTimer = null;
    this.lastKeyDown = null;
    this.handleKey = this.handleKey.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.firstTouch = this.firstTouch.bind(this);
  }

  // Handle key presses
  handleKey(event) {
    const {
      player
    } = this;
    const {
      elements
    } = player;
    const {
      key,
      type,
      altKey,
      ctrlKey,
      metaKey,
      shiftKey
    } = event;
    const pressed = type === 'keydown';
    const repeat = pressed && key === this.lastKey;

    // Bail if a modifier key is set
    if (altKey || ctrlKey || metaKey || shiftKey) {
      return;
    }

    // If the event is bubbled from the media element
    // Firefox doesn't get the key for whatever reason
    if (!key) {
      return;
    }

    // Seek by increment
    const seekByIncrement = increment => {
      // Divide the max duration into 10th's and times by the number value
      player.currentTime = player.duration / 10 * increment;
    };

    // Handle the key on keydown
    // Reset on keyup
    if (pressed) {
      // Check focused element
      // and if the focused element is not editable (e.g. text input)
      // and any that accept key input http://webaim.org/techniques/keyboard/
      const focused = document.activeElement;
      if (is.element(focused)) {
        const {
          editable
        } = player.config.selectors;
        const {
          seek
        } = elements.inputs;
        if (focused !== seek && matches(focused, editable)) {
          return;
        }
        if (event.key === ' ' && matches(focused, 'button, [role^="menuitem"]')) {
          return;
        }
      }

      // Which keys should we prevent default
      const preventDefault = [' ', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'c', 'f', 'k', 'l', 'm'];

      // If the key is found prevent default (e.g. prevent scrolling for arrows)
      if (preventDefault.includes(key)) {
        event.preventDefault();
        event.stopPropagation();
      }
      switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          if (!repeat) {
            seekByIncrement(Number.parseInt(key, 10));
          }
          break;
        case ' ':
        case 'k':
          if (!repeat) {
            silencePromise(player.togglePlay());
          }
          break;
        case 'ArrowUp':
          player.increaseVolume(0.1);
          break;
        case 'ArrowDown':
          player.decreaseVolume(0.1);
          break;
        case 'm':
          if (!repeat) {
            player.muted = !player.muted;
          }
          break;
        case 'ArrowRight':
          player.forward();
          break;
        case 'ArrowLeft':
          player.rewind();
          break;
        case 'f':
          player.fullscreen.toggle();
          break;
        case 'c':
          if (!repeat) {
            player.toggleCaptions();
          }
          break;
        case 'l':
          player.loop = !player.loop;
          break;
      }

      // Escape is handle natively when in full screen
      // So we only need to worry about non native
      if (key === 'Escape' && !player.fullscreen.usingNative && player.fullscreen.active) {
        player.fullscreen.toggle();
      }

      // Store last key for next cycle
      this.lastKey = key;
    } else {
      this.lastKey = null;
    }
  }

  // Toggle menu
  toggleMenu(event) {
    controls.toggleMenu.call(this.player, event);
  }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var loadjs_umd$1 = {exports: {}};

var loadjs_umd = loadjs_umd$1.exports;
var hasRequiredLoadjs_umd;
function requireLoadjs_umd() {
  if (hasRequiredLoadjs_umd) return loadjs_umd$1.exports;
  hasRequiredLoadjs_umd = 1;
  (function (module, exports) {
    (function (root, factory) {
      {
        module.exports = factory();
      }
    })(loadjs_umd, function () {
      /**
       * Global dependencies.
       * @global {Object} document - DOM
       */

      var devnull = function () {},
        bundleIdCache = {},
        bundleResultCache = {},
        bundleCallbackQueue = {};

      /**
       * Subscribe to bundle load event.
       * @param {string[]} bundleIds - Bundle ids
       * @param {Function} callbackFn - The callback function
       */
      function subscribe(bundleIds, callbackFn) {
        // listify
        bundleIds = bundleIds.push ? bundleIds : [bundleIds];
        var depsNotFound = [],
          i = bundleIds.length,
          numWaiting = i,
          fn,
          bundleId,
          r,
          q;

        // define callback function
        fn = function (bundleId, pathsNotFound) {
          if (pathsNotFound.length) depsNotFound.push(bundleId);
          numWaiting--;
          if (!numWaiting) callbackFn(depsNotFound);
        };

        // register callback
        while (i--) {
          bundleId = bundleIds[i];

          // execute callback if in result cache
          r = bundleResultCache[bundleId];
          if (r) {
            fn(bundleId, r);
            continue;
          }

          // add to callback queue
          q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
          q.push(fn);
        }
      }

      /**
       * Publish bundle load event.
       * @param {string} bundleId - Bundle id
       * @param {string[]} pathsNotFound - List of files not found
       */
      function publish(bundleId, pathsNotFound) {
        // exit if id isn't defined
        if (!bundleId) return;
        var q = bundleCallbackQueue[bundleId];

        // cache result
        bundleResultCache[bundleId] = pathsNotFound;

        // exit if queue is empty
        if (!q) return;

        // empty callback queue
        while (q.length) {
          q[0](bundleId, pathsNotFound);
          q.splice(0, 1);
        }
      }

      /**
       * Execute callbacks.
       * @param {Object or Function} args - The callback args
       * @param {string[]} depsNotFound - List of dependencies not found
       */
      function executeCallbacks(args, depsNotFound) {
        // accept function as argument
        if (args.call) args = {
          success: args
        };

        // success and error callbacks
        if (depsNotFound.length) (args.error || devnull)(depsNotFound);else (args.success || devnull)(args);
      }

      /**
       * Load individual file.
       * @param {string} path - The file path
       * @param {Function} callbackFn - The callback function
       */
      function loadFile(path, callbackFn, args, numTries) {
        var doc = document,
          async = args.async,
          maxTries = (args.numRetries || 0) + 1,
          beforeCallbackFn = args.before || devnull,
          pathname = path.replace(/[\?|#].*$/, ''),
          pathStripped = path.replace(/^(css|img|module|nomodule)!/, ''),
          isLegacyIECss,
          hasModuleSupport,
          e;
        numTries = numTries || 0;
        if (/(^css!|\.css$)/.test(pathname)) {
          // css
          e = doc.createElement('link');
          e.rel = 'stylesheet';
          e.href = pathStripped;

          // tag IE9+
          isLegacyIECss = 'hideFocus' in e;

          // use preload in IE Edge (to detect load errors)
          if (isLegacyIECss && e.relList) {
            isLegacyIECss = 0;
            e.rel = 'preload';
            e.as = 'style';
          }
        } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
          // image
          e = doc.createElement('img');
          e.src = pathStripped;
        } else {
          // javascript
          e = doc.createElement('script');
          e.src = pathStripped;
          e.async = async === undefined ? true : async;

          // handle es modules
          // modern browsers:
          //   module: add to dom with type="module"
          //   nomodule: call success() callback without adding to dom
          // legacy browsers:
          //   module: call success() callback without adding to dom
          //   nomodule: add to dom with default type ("text/javascript")
          hasModuleSupport = 'noModule' in e;
          if (/^module!/.test(pathname)) {
            if (!hasModuleSupport) return callbackFn(path, 'l');
            e.type = "module";
          } else if (/^nomodule!/.test(pathname) && hasModuleSupport) return callbackFn(path, 'l');
        }
        e.onload = e.onerror = e.onbeforeload = function (ev) {
          var result = ev.type[0];

          // treat empty stylesheets as failures to get around lack of onerror
          // support in IE9-11
          if (isLegacyIECss) {
            try {
              if (!e.sheet.cssText.length) result = 'e';
            } catch (x) {
              // sheets objects created from load errors don't allow access to
              // `cssText` (unless error is Code:18 SecurityError)
              if (x.code != 18) result = 'e';
            }
          }

          // handle retries in case of load failure
          if (result == 'e') {
            // increment counter
            numTries += 1;

            // exit function and try again
            if (numTries < maxTries) {
              return loadFile(path, callbackFn, args, numTries);
            }
          } else if (e.rel == 'preload' && e.as == 'style') {
            // activate preloaded stylesheets
            return e.rel = 'stylesheet'; // jshint ignore:line
          }

          // execute callback
          callbackFn(path, result, ev.defaultPrevented);
        };

        // add to document (unless callback returns `false`)
        if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
      }

      /**
       * Load multiple files.
       * @param {string[]} paths - The file paths
       * @param {Function} callbackFn - The callback function
       */
      function loadFiles(paths, callbackFn, args) {
        // listify paths
        paths = paths.push ? paths : [paths];
        var numWaiting = paths.length,
          x = numWaiting,
          pathsNotFound = [],
          fn,
          i;

        // define callback function
        fn = function (path, result, defaultPrevented) {
          // handle error
          if (result == 'e') pathsNotFound.push(path);

          // handle beforeload event. If defaultPrevented then that means the load
          // will be blocked (ex. Ghostery/ABP on Safari)
          if (result == 'b') {
            if (defaultPrevented) pathsNotFound.push(path);else return;
          }
          numWaiting--;
          if (!numWaiting) callbackFn(pathsNotFound);
        };

        // load scripts
        for (i = 0; i < x; i++) loadFile(paths[i], fn, args);
      }

      /**
       * Initiate script load and register bundle.
       * @param {(string|string[])} paths - The file paths
       * @param {(string|Function|Object)} [arg1] - The (1) bundleId or (2) success
       *   callback or (3) object literal with success/error arguments, numRetries,
       *   etc.
       * @param {(Function|Object)} [arg2] - The (1) success callback or (2) object
       *   literal with success/error arguments, numRetries, etc.
       */
      function loadjs(paths, arg1, arg2) {
        var bundleId, args;

        // bundleId (if string)
        if (arg1 && arg1.trim) bundleId = arg1;

        // args (default is {})
        args = (bundleId ? arg2 : arg1) || {};

        // throw error if bundle is already defined
        if (bundleId) {
          if (bundleId in bundleIdCache) {
            throw "LoadJS";
          } else {
            bundleIdCache[bundleId] = true;
          }
        }
        function loadFn(resolve, reject) {
          loadFiles(paths, function (pathsNotFound) {
            // execute callbacks
            executeCallbacks(args, pathsNotFound);

            // resolve Promise
            if (resolve) {
              executeCallbacks({
                success: resolve,
                error: reject
              }, pathsNotFound);
            }

            // publish bundle load event
            publish(bundleId, pathsNotFound);
          }, args);
        }
        if (args.returnPromise) return new Promise(loadFn);else loadFn();
      }

      /**
       * Execute callbacks when dependencies have been satisfied.
       * @param {(string|string[])} deps - List of bundle ids
       * @param {Object} args - success/error arguments
       */
      loadjs.ready = function ready(deps, args) {
        // subscribe to bundle load event
        subscribe(deps, function (depsNotFound) {
          // execute callbacks
          executeCallbacks(args, depsNotFound);
        });
        return loadjs;
      };

      /**
       * Manually satisfy bundle dependencies.
       * @param {string} bundleId - The bundle id
       */
      loadjs.done = function done(bundleId) {
        publish(bundleId, []);
      };

      /**
       * Reset loadjs dependencies statuses
       */
      loadjs.reset = function reset() {
        bundleIdCache = {};
        bundleResultCache = {};
        bundleCallbackQueue = {};
      };

      /**
       * Determine if bundle has already been defined
       * @param String} bundleId - The bundle id
       */
      loadjs.isDefined = function isDefined(bundleId) {
        return bundleId in bundleIdCache;
      };

      // export
      return loadjs;
    });
  })(loadjs_umd$1);
  return loadjs_umd$1.exports;
}

var loadjs_umdExports = requireLoadjs_umd();
var loadjs = /*@__PURE__*/getDefaultExportFromCjs(loadjs_umdExports);

// ==========================================================================
// Load an external script
// ==========================================================================

function loadScript(url) {
  return new Promise((resolve, reject) => {
    loadjs(url, {
      success: resolve,
      error: reject
    });
  });
}

// ==========================================================================
// Vimeo plugin
// ==========================================================================


// Parse Vimeo ID from URL
function parseId$1(url) {
  if (is.empty(url)) {
    return null;
  }
  if (is.number(Number(url))) {
    return url;
  }

  // eslint-disable-next-line regexp/optimal-quantifier-concatenation
  const regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
  const match = url.match(regex);
  return match ? match[2] : url;
}

// Try to extract a hash for private videos from the URL
function parseHash(url) {
  /* This regex matches a hexadecimal hash if given in any of these forms:
   *  - [https://player.]vimeo.com/video/{id}/{hash}[?params]
   *  - [https://player.]vimeo.com/video/{id}?h={hash}[&params]
   *  - [https://player.]vimeo.com/video/{id}?[params]&h={hash}
   *  - video/{id}/{hash}
   * If matched, the hash is available in capture group 4
   */
  const regex = /^.*(vimeo.com\/|video\/)(\d+)(\?.*h=|\/)+([\d,a-f]+)/;
  const found = url.match(regex);
  return found && found.length === 5 ? found[4] : null;
}

// Set playback state and trigger change (only on actual change)
function assurePlaybackState$1(play) {
  if (play && !this.embed.hasPlayed) {
    this.embed.hasPlayed = true;
  }
  if (this.media.paused === play) {
    this.media.paused = !play;
    triggerEvent.call(this, this.media, play ? 'play' : 'pause');
  }
}
const vimeo = {
  setup() {
    const player = this;

    // Add embed class for responsive
    toggleClass(player.elements.wrapper, player.config.classNames.embed, true);

    // Set speed options from config
    player.options.speed = player.config.speed.options;

    // Set initial ratio
    setAspectRatio.call(player);

    // Load the SDK if not already
    if (!is.object(window.Vimeo)) {
      loadScript(player.config.urls.vimeo.sdk).then(() => {
        vimeo.ready.call(player);
      }).catch(error => {
        player.debug.warn('Vimeo SDK (player.js) failed to load', error);
      });
    } else {
      vimeo.ready.call(player);
    }
  },
  // API Ready
  ready() {
    const player = this;
    const config = player.config.vimeo;
    const {
      premium,
      referrerPolicy,
      ...frameParams
    } = config;
    // Get the source URL or ID
    let source = player.media.getAttribute('src');
    let hash = '';
    // Get from <div> if needed
    if (is.empty(source)) {
      source = player.media.getAttribute(player.config.attributes.embed.id);
      // hash can also be set as attribute on the <div>
      hash = player.media.getAttribute(player.config.attributes.embed.hash);
    } else {
      hash = parseHash(source);
    }
    const hashParam = hash ? {
      h: hash
    } : {};

    // If the owner has a pro or premium account then we can hide controls etc
    if (premium) {
      Object.assign(frameParams, {
        controls: false,
        sidedock: false
      });
    }

    // Get Vimeo params for the iframe
    const params = buildUrlParams({
      loop: player.config.loop.active,
      autoplay: player.autoplay,
      muted: player.muted,
      gesture: 'media',
      playsinline: player.config.playsinline,
      // hash has to be added to iframe-URL
      ...hashParam,
      ...frameParams
    });
    const id = parseId$1(source);
    // Build an iframe
    const iframe = createElement('iframe');
    const src = format(player.config.urls.vimeo.iframe, id, params);
    iframe.setAttribute('src', src);
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', ['autoplay', 'fullscreen', 'picture-in-picture', 'encrypted-media', 'accelerometer', 'gyroscope'].join('; '));

    // Set the referrer policy if required
    if (!is.empty(referrerPolicy)) {
      iframe.setAttribute('referrerPolicy', referrerPolicy);
    }

    // Inject the package
    if (premium || !config.customControls) {
      iframe.setAttribute('data-poster', player.poster);
      player.media = replaceElement(iframe, player.media);
    } else {
      const wrapper = createElement('div', {
        'class': player.config.classNames.embedContainer,
        'data-poster': player.poster
      });
      wrapper.appendChild(iframe);
      player.media = replaceElement(wrapper, player.media);
    }

    // Get poster image
    if (!config.customControls) {
      fetch(format(player.config.urls.vimeo.api, src)).then(response => {
        if (is.empty(response) || !response.thumbnail_url) {
          return;
        }

        // Set and show poster
        ui.setPoster.call(player, response.thumbnail_url).catch(() => {});
      });
    }

    // Setup instance
    // https://github.com/vimeo/player.js
    player.embed = new window.Vimeo.Player(iframe, {
      autopause: player.config.autopause,
      muted: player.muted
    });
    player.media.paused = true;
    player.media.currentTime = 0;

    // Disable native text track rendering
    if (player.supported.ui) {
      player.embed.disableTextTrack();
    }

    // Create a faux HTML5 API using the Vimeo API
    player.media.play = () => {
      assurePlaybackState$1.call(player, true);
      return player.embed.play();
    };
    player.media.pause = () => {
      assurePlaybackState$1.call(player, false);
      return player.embed.pause();
    };
    player.media.stop = () => {
      player.pause();
      player.currentTime = 0;
    };

    // Seeking
    let {
      currentTime
    } = player.media;
    Object.defineProperty(player.media, 'currentTime', {
      get() {
        return currentTime;
      },
      set(time) {
        // Vimeo will automatically play on seek if the video hasn't been played before

        // Get current paused state and volume etc
        const {
          embed,
          media,
          paused,
          volume
        } = player;
        const restorePause = paused && !embed.hasPlayed;

        // Set seeking state and trigger event
        media.seeking = true;
        triggerEvent.call(player, media, 'seeking');

        // If paused, mute until seek is complete
        Promise.resolve(restorePause && embed.setVolume(0))
        // Seek
        .then(() => embed.setCurrentTime(time))
        // Restore paused
        .then(() => restorePause && embed.pause())
        // Restore volume
        .then(() => restorePause && embed.setVolume(volume)).catch(() => {
          // Do nothing
        });
      }
    });

    // Playback speed
    let speed = player.config.speed.selected;
    Object.defineProperty(player.media, 'playbackRate', {
      get() {
        return speed;
      },
      set(input) {
        player.embed.setPlaybackRate(input).then(() => {
          speed = input;
          triggerEvent.call(player, player.media, 'ratechange');
        }).catch(() => {
          // Cannot set Playback Rate, Video is probably not on Pro account
          player.options.speed = [1];
        });
      }
    });

    // Volume
    let {
      volume
    } = player.config;
    Object.defineProperty(player.media, 'volume', {
      get() {
        return volume;
      },
      set(input) {
        player.embed.setVolume(input).then(() => {
          volume = input;
          triggerEvent.call(player, player.media, 'volumechange');
        });
      }
    });

    // Muted
    let {
      muted
    } = player.config;
    Object.defineProperty(player.media, 'muted', {
      get() {
        return muted;
      },
      set(input) {
        const toggle = is.boolean(input) ? input : false;
        player.embed.setMuted(toggle ? true : player.config.muted).then(() => {
          muted = toggle;
          triggerEvent.call(player, player.media, 'volumechange');
        });
      }
    });

    // Loop
    let {
      loop
    } = player.config;
    Object.defineProperty(player.media, 'loop', {
      get() {
        return loop;
      },
      set(input) {
        const toggle = is.boolean(input) ? input : player.config.loop.active;
        player.embed.setLoop(toggle).then(() => {
          loop = toggle;
        });
      }
    });

    // Source
    let currentSrc;
    player.embed.getVideoUrl().then(value => {
      currentSrc = value;
      controls.setDownloadUrl.call(player);
    }).catch(error => {
      this.debug.warn(error);
    });
    Object.defineProperty(player.media, 'currentSrc', {
      get() {
        return currentSrc;
      }
    });

    // Ended
    Object.defineProperty(player.media, 'ended', {
      get() {
        return player.currentTime === player.duration;
      }
    });

    // Set aspect ratio based on video size
    Promise.all([player.embed.getVideoWidth(), player.embed.getVideoHeight()]).then(dimensions => {
      const [width, height] = dimensions;
      player.embed.ratio = roundAspectRatio(width, height);
      setAspectRatio.call(this);
    });

    // Set autopause
    player.embed.setAutopause(player.config.autopause).then(state => {
      player.config.autopause = state;
    });

    // Get title
    player.embed.getVideoTitle().then(title => {
      player.config.title = title;
      ui.setTitle.call(this);
    });

    // Get current time
    player.embed.getCurrentTime().then(value => {
      currentTime = value;
      triggerEvent.call(player, player.media, 'timeupdate');
    });

    // Get duration
    player.embed.getDuration().then(value => {
      player.media.duration = value;
      triggerEvent.call(player, player.media, 'durationchange');
    });

    // Get captions
    player.embed.getTextTracks().then(tracks => {
      player.media.textTracks = tracks;
      captions.setup.call(player);
    });
    player.embed.on('cuechange', ({
      cues = []
    }) => {
      const strippedCues = cues.map(cue => stripHTML(cue.text));
      captions.updateCues.call(player, strippedCues);
    });
    player.embed.on('loaded', () => {
      // Assure state and events are updated on autoplay
      player.embed.getPaused().then(paused => {
        assurePlaybackState$1.call(player, !paused);
        if (!paused) {
          triggerEvent.call(player, player.media, 'playing');
        }
      });
      if (is.element(player.embed.element) && player.supported.ui) {
        const frame = player.embed.element;

        // Fix keyboard focus issues
        // https://github.com/sampotts/plyr/issues/317
        frame.setAttribute('tabindex', -1);
      }
    });
    player.embed.on('bufferstart', () => {
      triggerEvent.call(player, player.media, 'waiting');
    });
    player.embed.on('bufferend', () => {
      triggerEvent.call(player, player.media, 'playing');
    });
    player.embed.on('play', () => {
      assurePlaybackState$1.call(player, true);
      triggerEvent.call(player, player.media, 'playing');
    });
    player.embed.on('pause', () => {
      assurePlaybackState$1.call(player, false);
    });
    player.embed.on('timeupdate', data => {
      player.media.seeking = false;
      currentTime = data.seconds;
      triggerEvent.call(player, player.media, 'timeupdate');
    });
    player.embed.on('progress', data => {
      player.media.buffered = data.percent;
      triggerEvent.call(player, player.media, 'progress');

      // Check all loaded
      if (Number.parseInt(data.percent, 10) === 1) {
        triggerEvent.call(player, player.media, 'canplaythrough');
      }

      // Get duration as if we do it before load, it gives an incorrect value
      // https://github.com/sampotts/plyr/issues/891
      player.embed.getDuration().then(value => {
        if (value !== player.media.duration) {
          player.media.duration = value;
          triggerEvent.call(player, player.media, 'durationchange');
        }
      });
    });
    player.embed.on('seeked', () => {
      player.media.seeking = false;
      triggerEvent.call(player, player.media, 'seeked');
    });
    player.embed.on('ended', () => {
      player.media.paused = true;
      triggerEvent.call(player, player.media, 'ended');
    });
    player.embed.on('error', detail => {
      player.media.error = detail;
      triggerEvent.call(player, player.media, 'error');
    });

    // Rebuild UI
    if (config.customControls) {
      setTimeout(() => ui.build.call(player), 0);
    }
  }
};

// ==========================================================================
// YouTube plugin
// ==========================================================================


// Parse YouTube ID from URL
function parseId(url) {
  if (is.empty(url)) {
    return null;
  }
  const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regex);
  return match && match[2] ? match[2] : url;
}

// Set playback state and trigger change (only on actual change)
function assurePlaybackState(play) {
  if (play && !this.embed.hasPlayed) {
    this.embed.hasPlayed = true;
  }
  if (this.media.paused === play) {
    this.media.paused = !play;
    triggerEvent.call(this, this.media, play ? 'play' : 'pause');
  }
}
function getHost(config) {
  if (config.noCookie) {
    return 'https://www.youtube-nocookie.com';
  }
  if (window.location.protocol === 'http:') {
    return 'http://www.youtube.com';
  }

  // Use YouTube's default
  return undefined;
}
const youtube = {
  setup() {
    // Add embed class for responsive
    toggleClass(this.elements.wrapper, this.config.classNames.embed, true);

    // Setup API
    if (is.object(window.YT) && is.function(window.YT.Player)) {
      youtube.ready.call(this);
    } else {
      // Reference current global callback
      const callback = window.onYouTubeIframeAPIReady;

      // Set callback to process queue
      window.onYouTubeIframeAPIReady = () => {
        // Call global callback if set
        if (is.function(callback)) {
          callback();
        }
        youtube.ready.call(this);
      };

      // Load the SDK
      loadScript(this.config.urls.youtube.sdk).catch(error => {
        this.debug.warn('YouTube API failed to load', error);
      });
    }
  },
  // Get the media title
  getTitle(videoId) {
    const url = format(this.config.urls.youtube.api, videoId);
    fetch(url).then(data => {
      if (is.object(data)) {
        const {
          title,
          height,
          width
        } = data;

        // Set title
        this.config.title = title;
        ui.setTitle.call(this);

        // Set aspect ratio
        this.embed.ratio = roundAspectRatio(width, height);
      }
      setAspectRatio.call(this);
    }).catch(() => {
      // Set aspect ratio
      setAspectRatio.call(this);
    });
  },
  // API ready
  ready() {
    const player = this;
    const config = player.config.youtube;
    // Ignore already setup (race condition)
    const currentId = player.media && player.media.getAttribute('id');
    if (!is.empty(currentId) && currentId.startsWith('youtube-')) {
      return;
    }

    // Get the source URL or ID
    let source = player.media.getAttribute('src');

    // Get from <div> if needed
    if (is.empty(source)) {
      source = player.media.getAttribute(this.config.attributes.embed.id);
    }

    // Replace the <iframe> with a <div> due to YouTube API issues
    const videoId = parseId(source);
    const id = generateId(player.provider);
    // Replace media element
    const container = createElement('div', {
      id,
      'data-poster': config.customControls ? player.poster : undefined
    });
    player.media = replaceElement(container, player.media);

    // Only load the poster when using custom controls
    if (config.customControls) {
      const posterSrc = s => `https://i.ytimg.com/vi/${videoId}/${s}default.jpg`;

      // Check thumbnail images in order of quality, but reject fallback thumbnails (120px wide)
      loadImage(posterSrc('maxres'), 121) // Highest quality and un-padded
      .catch(() => loadImage(posterSrc('sd'), 121)) // 480p padded 4:3
      .catch(() => loadImage(posterSrc('hq'))) // 360p padded 4:3. Always exists
      .then(image => ui.setPoster.call(player, image.src)).then(src => {
        // If the image is padded, use background-size "cover" instead (like youtube does too with their posters)
        if (!src.includes('maxres')) {
          player.elements.poster.style.backgroundSize = 'cover';
        }
      }).catch(() => {});
    }

    // Setup instance
    // https://developers.google.com/youtube/iframe_api_reference
    player.embed = new window.YT.Player(player.media, {
      videoId,
      host: getHost(config),
      playerVars: extend({}, {
        // Autoplay
        autoplay: player.config.autoplay ? 1 : 0,
        // iframe interface language
        hl: player.config.hl,
        // Only show controls if not fully supported or opted out
        controls: player.supported.ui && config.customControls ? 0 : 1,
        // Disable keyboard as we handle it
        disablekb: 1,
        // Allow iOS inline playback
        playsinline: player.config.playsinline && !player.config.fullscreen.iosNative ? 1 : 0,
        // Captions are flaky on YouTube
        cc_load_policy: player.captions.active ? 1 : 0,
        cc_lang_pref: player.config.captions.language,
        // Tracking for stats
        widget_referrer: window ? window.location.href : null
      }, config),
      events: {
        onError(event) {
          // YouTube may fire onError twice, so only handle it once
          if (!player.media.error) {
            const code = event.data;
            // Messages copied from https://developers.google.com/youtube/iframe_api_reference#onError
            const message = {
              2: 'The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.',
              5: 'The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.',
              100: 'The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.',
              101: 'The owner of the requested video does not allow it to be played in embedded players.',
              150: 'The owner of the requested video does not allow it to be played in embedded players.'
            }[code] || 'An unknown error occurred';
            player.media.error = {
              code,
              message
            };
            triggerEvent.call(player, player.media, 'error');
          }
        },
        onPlaybackRateChange(event) {
          // Get the instance
          const instance = event.target;

          // Get current speed
          player.media.playbackRate = instance.getPlaybackRate();
          triggerEvent.call(player, player.media, 'ratechange');
        },
        onReady(event) {
          // Bail if onReady has already been called. See issue #1108
          if (is.function(player.media.play)) {
            return;
          }
          // Get the instance
          const instance = event.target;

          // Get the title
          youtube.getTitle.call(player, videoId);

          // Create a faux HTML5 API using the YouTube API
          player.media.play = () => {
            assurePlaybackState.call(player, true);
            instance.playVideo();
          };
          player.media.pause = () => {
            assurePlaybackState.call(player, false);
            instance.pauseVideo();
          };
          player.media.stop = () => {
            instance.stopVideo();
          };
          player.media.duration = instance.getDuration();
          player.media.paused = true;

          // Seeking
          player.media.currentTime = 0;
          Object.defineProperty(player.media, 'currentTime', {
            get() {
              return Number(instance.getCurrentTime());
            },
            set(time) {
              // If paused and never played, mute audio preventively (YouTube starts playing on seek if the video hasn't been played yet).
              if (player.paused && !player.embed.hasPlayed) {
                player.embed.mute();
              }

              // Set seeking state and trigger event
              player.media.seeking = true;
              triggerEvent.call(player, player.media, 'seeking');

              // Seek after events sent
              instance.seekTo(time);
            }
          });

          // Playback speed
          Object.defineProperty(player.media, 'playbackRate', {
            get() {
              return instance.getPlaybackRate();
            },
            set(input) {
              instance.setPlaybackRate(input);
            }
          });

          // Volume
          let {
            volume
          } = player.config;
          Object.defineProperty(player.media, 'volume', {
            get() {
              return volume;
            },
            set(input) {
              volume = input;
              instance.setVolume(volume * 100);
              triggerEvent.call(player, player.media, 'volumechange');
            }
          });

          // Muted
          let {
            muted
          } = player.config;
          Object.defineProperty(player.media, 'muted', {
            get() {
              return muted;
            },
            set(input) {
              const toggle = is.boolean(input) ? input : muted;
              muted = toggle;
              instance[toggle ? 'mute' : 'unMute']();
              instance.setVolume(volume * 100);
              triggerEvent.call(player, player.media, 'volumechange');
            }
          });

          // Source
          Object.defineProperty(player.media, 'currentSrc', {
            get() {
              return instance.getVideoUrl();
            }
          });

          // Ended
          Object.defineProperty(player.media, 'ended', {
            get() {
              return player.currentTime === player.duration;
            }
          });

          // Get available speeds
          const speeds = instance.getAvailablePlaybackRates();
          // Filter based on config
          player.options.speed = speeds.filter(s => player.config.speed.options.includes(s));

          // Set the tabindex to avoid focus entering iframe
          if (player.supported.ui && config.customControls) {
            player.media.setAttribute('tabindex', -1);
          }
          triggerEvent.call(player, player.media, 'timeupdate');
          triggerEvent.call(player, player.media, 'durationchange');

          // Reset timer
          clearInterval(player.timers.buffering);

          // Setup buffering
          player.timers.buffering = setInterval(() => {
            // Get loaded % from YouTube
            player.media.buffered = instance.getVideoLoadedFraction();

            // Trigger progress only when we actually buffer something
            if (player.media.lastBuffered === null || player.media.lastBuffered < player.media.buffered) {
              triggerEvent.call(player, player.media, 'progress');
            }

            // Set last buffer point
            player.media.lastBuffered = player.media.buffered;

            // Bail if we're at 100%
            if (player.media.buffered === 1) {
              clearInterval(player.timers.buffering);

              // Trigger event
              triggerEvent.call(player, player.media, 'canplaythrough');
            }
          }, 200);

          // Rebuild UI
          if (config.customControls) {
            setTimeout(() => ui.build.call(player), 50);
          }
        },
        onStateChange(event) {
          // Get the instance
          const instance = event.target;

          // Reset timer
          clearInterval(player.timers.playing);
          const seeked = player.media.seeking && [1, 2].includes(event.data);
          if (seeked) {
            // Unset seeking and fire seeked event
            player.media.seeking = false;
            triggerEvent.call(player, player.media, 'seeked');
          }

          // Handle events
          // -1   Unstarted
          // 0    Ended
          // 1    Playing
          // 2    Paused
          // 3    Buffering
          // 5    Video cued
          switch (event.data) {
            case -1:
              // Update scrubber
              triggerEvent.call(player, player.media, 'timeupdate');

              // Get loaded % from YouTube
              player.media.buffered = instance.getVideoLoadedFraction();
              triggerEvent.call(player, player.media, 'progress');
              break;
            case 0:
              assurePlaybackState.call(player, false);

              // YouTube doesn't support loop for a single video, so mimick it.
              if (player.media.loop) {
                // YouTube needs a call to `stopVideo` before playing again
                instance.stopVideo();
                instance.playVideo();
              } else {
                triggerEvent.call(player, player.media, 'ended');
              }
              break;
            case 1:
              // Restore paused state (YouTube starts playing on seek if the video hasn't been played yet)
              if (config.customControls && !player.config.autoplay && player.media.paused && !player.embed.hasPlayed) {
                player.media.pause();
              } else {
                assurePlaybackState.call(player, true);
                triggerEvent.call(player, player.media, 'playing');

                // Poll to get playback progress
                player.timers.playing = setInterval(() => {
                  triggerEvent.call(player, player.media, 'timeupdate');
                }, 50);

                // Check duration again due to YouTube bug
                // https://github.com/sampotts/plyr/issues/374
                // https://code.google.com/p/gdata-issues/issues/detail?id=8690
                if (player.media.duration !== instance.getDuration()) {
                  player.media.duration = instance.getDuration();
                  triggerEvent.call(player, player.media, 'durationchange');
                }
              }
              break;
            case 2:
              // Restore audio (YouTube starts playing on seek if the video hasn't been played yet)
              if (!player.muted) {
                player.embed.unMute();
              }
              assurePlaybackState.call(player, false);
              break;
            case 3:
              // Trigger waiting event to add loading classes to container as the video buffers.
              triggerEvent.call(player, player.media, 'waiting');
              break;
          }
          triggerEvent.call(player, player.elements.container, 'statechange', false, {
            code: event.data
          });
        }
      }
    });
  }
};

// ==========================================================================
// Plyr Media
// ==========================================================================

const media = {
  // Setup media
  setup() {
    // If there's no media, bail
    if (!this.media) {
      this.debug.warn('No media element found!');
      return;
    }

    // Add type class
    toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', this.type), true);

    // Add provider class
    toggleClass(this.elements.container, this.config.classNames.provider.replace('{0}', this.provider), true);

    // Add video class for embeds
    // This will require changes if audio embeds are added
    if (this.isEmbed) {
      toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', 'video'), true);
    }

    // Inject the player wrapper
    if (this.isVideo) {
      // Create the wrapper div
      this.elements.wrapper = createElement('div', {
        class: this.config.classNames.video
      });

      // Wrap the video in a container
      wrap(this.media, this.elements.wrapper);

      // Poster image container
      this.elements.poster = createElement('div', {
        class: this.config.classNames.poster
      });
      this.elements.wrapper.appendChild(this.elements.poster);
    }
    if (this.isHTML5) {
      html5.setup.call(this);
    } else if (this.isYouTube) {
      youtube.setup.call(this);
    } else if (this.isVimeo) {
      vimeo.setup.call(this);
    }
  }
};

function destroy(instance) {
  // Destroy our adsManager
  if (instance.manager) {
    instance.manager.destroy();
  }

  // Destroy our adsManager
  if (instance.elements.displayContainer) {
    instance.elements.displayContainer.destroy();
  }
  instance.elements.container.remove();
}
class Ads {
  /**
   * Ads constructor.
   * @param {object} player
   * @return {Ads}
   */
  constructor(player) {
    /**
     * Load the IMA SDK
     */
    _defineProperty$1(this, "load", () => {
      if (!this.enabled) {
        return;
      }

      // Check if the Google IMA3 SDK is loaded or load it ourselves
      if (!is.object(window.google) || !is.object(window.google.ima)) {
        loadScript(this.player.config.urls.googleIMA.sdk).then(() => {
          this.ready();
        }).catch(() => {
          // Script failed to load or is blocked
          this.trigger('error', new Error('Google IMA SDK failed to load'));
        });
      } else {
        this.ready();
      }
    });
    /**
     * Get the ads instance ready
     */
    _defineProperty$1(this, "ready", () => {
      // Double check we're enabled
      if (!this.enabled) {
        destroy(this);
      }

      // Start ticking our safety timer. If the whole advertisement
      // thing doesn't resolve within our set time; we bail
      this.startSafetyTimer(12000, 'ready()');

      // Clear the safety timer
      this.managerPromise.then(() => {
        this.clearSafetyTimer('onAdsManagerLoaded()');
      });

      // Set listeners on the Plyr instance
      this.listeners();

      // Setup the IMA SDK
      this.setupIMA();
    });
    /**
     * In order for the SDK to display ads for our video, we need to tell it where to put them,
     * so here we define our ad container. This div is set up to render on top of the video player.
     * Using the code below, we tell the SDK to render ads within that div. We also provide a
     * handle to the content video player - the SDK will poll the current time of our player to
     * properly place mid-rolls. After we create the ad display container, we initialize it. On
     * mobile devices, this initialization is done as the result of a user action.
     */
    _defineProperty$1(this, "setupIMA", () => {
      // Create the container for our advertisements
      this.elements.container = createElement('div', {
        class: this.player.config.classNames.ads
      });
      this.player.elements.container.appendChild(this.elements.container);

      // So we can run VPAID2
      google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);

      // Set language
      google.ima.settings.setLocale(this.player.config.ads.language);

      // Set playback for iOS10+
      google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline);

      // We assume the adContainer is the video container of the plyr element that will house the ads
      this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media);

      // Create ads loader
      this.loader = new google.ima.AdsLoader(this.elements.displayContainer);

      // Listen and respond to ads loaded and error events
      this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, event => this.onAdsManagerLoaded(event), false);
      this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, error => this.onAdError(error), false);

      // Request video ads to be pre-loaded
      this.requestAds();
    });
    /**
     * Request advertisements
     */
    _defineProperty$1(this, "requestAds", () => {
      const {
        container
      } = this.player.elements;
      try {
        // Request video ads
        const request = new google.ima.AdsRequest();
        request.adTagUrl = this.tagUrl;

        // Specify the linear and nonlinear slot sizes. This helps the SDK
        // to select the correct creative if multiple are returned
        request.linearAdSlotWidth = container.offsetWidth;
        request.linearAdSlotHeight = container.offsetHeight;
        request.nonLinearAdSlotWidth = container.offsetWidth;
        request.nonLinearAdSlotHeight = container.offsetHeight;

        // We only overlay ads as we only support video.
        request.forceNonLinearFullSlot = false;

        // Mute based on current state
        request.setAdWillPlayMuted(!this.player.muted);
        this.loader.requestAds(request);
      } catch (error) {
        this.onAdError(error);
      }
    });
    /**
     * Update the ad countdown
     * @param {boolean} start
     */
    _defineProperty$1(this, "pollCountdown", (start = false) => {
      if (!start) {
        clearInterval(this.countdownTimer);
        this.elements.container.removeAttribute('data-badge-text');
        return;
      }
      const update = () => {
        const time = formatTime(Math.max(this.manager.getRemainingTime(), 0));
        const label = `${i18n.get('advertisement', this.player.config)} - ${time}`;
        this.elements.container.setAttribute('data-badge-text', label);
      };
      this.countdownTimer = setInterval(update, 100);
    });
    /**
     * This method is called whenever the ads are ready inside the AdDisplayContainer
     * @param {Event} event - adsManagerLoadedEvent
     */
    _defineProperty$1(this, "onAdsManagerLoaded", event => {
      // Load could occur after a source change (race condition)
      if (!this.enabled) {
        return;
      }

      // Get the ads manager
      const settings = new google.ima.AdsRenderingSettings();

      // Tell the SDK to save and restore content video state on our behalf
      settings.restoreCustomPlaybackStateOnAdBreakComplete = true;
      settings.enablePreloading = true;

      // The SDK is polling currentTime on the contentPlayback. And needs a duration
      // so it can determine when to start the mid- and post-roll
      this.manager = event.getAdsManager(this.player, settings);

      // Get the cue points for any mid-rolls by filtering out the pre- and post-roll
      this.cuePoints = this.manager.getCuePoints();

      // Add listeners to the required events
      // Advertisement error events
      this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, error => this.onAdError(error));

      // Advertisement regular events
      Object.keys(google.ima.AdEvent.Type).forEach(type => {
        this.manager.addEventListener(google.ima.AdEvent.Type[type], e => this.onAdEvent(e));
      });

      // Resolve our adsManager
      this.trigger('loaded');
    });
    _defineProperty$1(this, "addCuePoints", () => {
      // Add advertisement cue's within the time line if available
      if (!is.empty(this.cuePoints)) {
        this.cuePoints.forEach(cuePoint => {
          if (cuePoint !== 0 && cuePoint !== -1 && cuePoint < this.player.duration) {
            const seekElement = this.player.elements.progress;
            if (is.element(seekElement)) {
              const cuePercentage = 100 / this.player.duration * cuePoint;
              const cue = createElement('span', {
                class: this.player.config.classNames.cues
              });
              cue.style.left = `${cuePercentage.toString()}%`;
              seekElement.appendChild(cue);
            }
          }
        });
      }
    });
    /**
     * This is where all the event handling takes place. Retrieve the ad from the event. Some
     * events (e.g. ALL_ADS_COMPLETED) don't have the ad object associated
     * https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdEvent.Type
     * @param {Event} event
     */
    _defineProperty$1(this, "onAdEvent", event => {
      const {
        container
      } = this.player.elements;
      // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
      // don't have ad object associated
      const ad = event.getAd();
      const adData = event.getAdData();

      // Proxy event
      const dispatchEvent = type => {
        triggerEvent.call(this.player, this.player.media, `ads${type.replace(/_/g, '').toLowerCase()}`);
      };

      // Bubble the event
      dispatchEvent(event.type);
      switch (event.type) {
        case google.ima.AdEvent.Type.LOADED:
          // This is the first event sent for an ad - it is possible to determine whether the
          // ad is a video ad or an overlay
          this.trigger('loaded');

          // Start countdown
          this.pollCountdown(true);
          if (!ad.isLinear()) {
            // Position AdDisplayContainer correctly for overlay
            ad.width = container.offsetWidth;
            ad.height = container.offsetHeight;
          }

          // console.info('Ad type: ' + event.getAd().getAdPodInfo().getPodIndex());
          // console.info('Ad time: ' + event.getAd().getAdPodInfo().getTimeOffset());

          break;
        case google.ima.AdEvent.Type.STARTED:
          // Set volume to match player
          this.manager.setVolume(this.player.volume);
          break;
        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
          // All ads for the current videos are done. We can now request new advertisements
          // in case the video is re-played

          // TODO: Example for what happens when a next video in a playlist would be loaded.
          // So here we load a new video when all ads are done.
          // Then we load new ads within a new adsManager. When the video
          // Is started - after - the ads are loaded, then we get ads.
          // You can also easily test cancelling and reloading by running
          // player.ads.cancel() and player.ads.play from the console I guess.
          // this.player.source = {
          //     type: 'video',
          //     title: 'View From A Blue Moon',
          //     sources: [{
          //         src:
          // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4', type:
          // 'video/mp4', }], poster:
          // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg', tracks:
          // [ { kind: 'captions', label: 'English', srclang: 'en', src:
          // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
          // default: true, }, { kind: 'captions', label: 'French', srclang: 'fr', src:
          // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt', }, ],
          // };

          // TODO: So there is still this thing where a video should only be allowed to start
          // playing when the IMA SDK is ready or has failed

          if (this.player.ended) {
            this.loadAds();
          } else {
            // The SDK won't allow new ads to be called without receiving a contentComplete()
            this.loader.contentComplete();
          }
          break;
        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
          // This event indicates the ad has started - the video player can adjust the UI,
          // for example display a pause button and remaining time. Fired when content should
          // be paused. This usually happens right before an ad is about to cover the content

          this.pauseContent();
          break;
        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
          // This event indicates the ad has finished - the video player can perform
          // appropriate UI actions, such as removing the timer for remaining time detection.
          // Fired when content should be resumed. This usually happens when an ad finishes
          // or collapses

          this.pollCountdown();
          this.resumeContent();
          break;
        case google.ima.AdEvent.Type.LOG:
          if (adData.adError) {
            this.player.debug.warn(`Non-fatal ad error: ${adData.adError.getMessage()}`);
          }
          break;
      }
    });
    /**
     * Any ad error handling comes through here
     * @param {Event} event
     */
    _defineProperty$1(this, "onAdError", event => {
      this.cancel();
      this.player.debug.warn('Ads error', event);
    });
    /**
     * Setup hooks for Plyr and window events. This ensures
     * the mid- and post-roll launch at the correct time. And
     * resize the advertisement when the player resizes
     */
    _defineProperty$1(this, "listeners", () => {
      const {
        container
      } = this.player.elements;
      let time;
      this.player.on('canplay', () => {
        this.addCuePoints();
      });
      this.player.on('ended', () => {
        this.loader.contentComplete();
      });
      this.player.on('timeupdate', () => {
        time = this.player.currentTime;
      });
      this.player.on('seeked', () => {
        const seekedTime = this.player.currentTime;
        if (is.empty(this.cuePoints)) {
          return;
        }
        this.cuePoints.forEach((cuePoint, index) => {
          if (time < cuePoint && cuePoint < seekedTime) {
            this.manager.discardAdBreak();
            this.cuePoints.splice(index, 1);
          }
        });
      });

      // Listen to the resizing of the window. And resize ad accordingly
      // TODO: eventually implement ResizeObserver
      window.addEventListener('resize', () => {
        if (this.manager) {
          this.manager.resize(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
        }
      });
    });
    /**
     * Initialize the adsManager and start playing advertisements
     */
    _defineProperty$1(this, "play", () => {
      const {
        container
      } = this.player.elements;
      if (!this.managerPromise) {
        this.resumeContent();
      }

      // Play the requested advertisement whenever the adsManager is ready
      this.managerPromise.then(() => {
        // Set volume to match player
        this.manager.setVolume(this.player.volume);

        // Initialize the container. Must be done via a user action on mobile devices
        this.elements.displayContainer.initialize();
        try {
          if (!this.initialized) {
            // Initialize the ads manager. Ad rules playlist will start at this time
            this.manager.init(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);

            // Call play to start showing the ad. Single video and overlay ads will
            // start at this time; the call will be ignored for ad rules
            this.manager.start();
          }
          this.initialized = true;
        } catch (adError) {
          // An error may be thrown if there was a problem with the
          // VAST response
          this.onAdError(adError);
        }
      }).catch(() => {});
    });
    /**
     * Resume our video
     */
    _defineProperty$1(this, "resumeContent", () => {
      // Hide the advertisement container
      this.elements.container.style.zIndex = '';

      // Ad is stopped
      this.playing = false;

      // Play video
      silencePromise(this.player.media.play());
    });
    /**
     * Pause our video
     */
    _defineProperty$1(this, "pauseContent", () => {
      // Show the advertisement container
      this.elements.container.style.zIndex = 3;

      // Ad is playing
      this.playing = true;

      // Pause our video.
      this.player.media.pause();
    });
    /**
     * Destroy the adsManager so we can grab new ads after this. If we don't then we're not
     * allowed to call new ads based on google policies, as they interpret this as an accidental
     * video requests. https://developers.google.com/interactive-
     * media-ads/docs/sdks/android/faq#8
     */
    _defineProperty$1(this, "cancel", () => {
      // Pause our video
      if (this.initialized) {
        this.resumeContent();
      }

      // Tell our instance that we're done for now
      this.trigger('error');

      // Re-create our adsManager
      this.loadAds();
    });
    /**
     * Re-create our adsManager
     */
    _defineProperty$1(this, "loadAds", () => {
      // Tell our adsManager to go bye bye
      this.managerPromise.then(() => {
        // Destroy our adsManager
        if (this.manager) {
          this.manager.destroy();
        }

        // Re-set our adsManager promises
        this.managerPromise = new Promise(resolve => {
          this.on('loaded', resolve);
          this.player.debug.log(this.manager);
        });
        // Now that the manager has been destroyed set it to also be un-initialized
        this.initialized = false;

        // Now request some new advertisements
        this.requestAds();
      }).catch(() => {});
    });
    /**
     * Handles callbacks after an ad event was invoked
     * @param {string} event - Event type
     * @param args
     */
    _defineProperty$1(this, "trigger", (event, ...args) => {
      const handlers = this.events[event];
      if (is.array(handlers)) {
        handlers.forEach(handler => {
          if (is.function(handler)) {
            handler.apply(this, args);
          }
        });
      }
    });
    /**
     * Add event listeners
     * @param {string} event - Event type
     * @param {Function} callback - Callback for when event occurs
     * @return {Ads}
     */
    _defineProperty$1(this, "on", (event, callback) => {
      if (!is.array(this.events[event])) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
      return this;
    });
    /**
     * Setup a safety timer for when the ad network doesn't respond for whatever reason.
     * The advertisement has 12 seconds to get its things together. We stop this timer when the
     * advertisement is playing, or when a user action is required to start, then we clear the
     * timer on ad ready
     * @param {number} time
     * @param {string} from
     */
    _defineProperty$1(this, "startSafetyTimer", (time, from) => {
      this.player.debug.log(`Safety timer invoked from: ${from}`);
      this.safetyTimer = setTimeout(() => {
        this.cancel();
        this.clearSafetyTimer('startSafetyTimer()');
      }, time);
    });
    /**
     * Clear our safety timer(s)
     * @param {string} from
     */
    _defineProperty$1(this, "clearSafetyTimer", from => {
      if (!is.nullOrUndefined(this.safetyTimer)) {
        this.player.debug.log(`Safety timer cleared from: ${from}`);
        clearTimeout(this.safetyTimer);
        this.safetyTimer = null;
      }
    });
    this.player = player;
    this.config = player.config.ads;
    this.playing = false;
    this.initialized = false;
    this.elements = {
      container: null,
      displayContainer: null
    };
    this.manager = null;
    this.loader = null;
    this.cuePoints = null;
    this.events = {};
    this.safetyTimer = null;
    this.countdownTimer = null;

    // Setup a promise to resolve when the IMA manager is ready
    this.managerPromise = new Promise((resolve, reject) => {
      // The ad is loaded and ready
      this.on('loaded', resolve);

      // Ads failed
      this.on('error', reject);
    });
    this.load();
  }
  get enabled() {
    const {
      config
    } = this;
    return this.player.isHTML5 && this.player.isVideo && config.enabled && (!is.empty(config.publisherId) || is.url(config.tagUrl));
  }
  // Build the tag URL
  get tagUrl() {
    const {
      config
    } = this;
    if (is.url(config.tagUrl)) {
      return config.tagUrl;
    }
    const params = {
      AV_PUBLISHERID: '58c25bb0073ef448b1087ad6',
      AV_CHANNELID: '5a0458dc28a06145e4519d21',
      AV_URL: window.location.hostname,
      cb: Date.now(),
      AV_WIDTH: 640,
      AV_HEIGHT: 480,
      AV_CDIM2: config.publisherId
    };
    const base = 'https://go.aniview.com/api/adserver6/vast/';
    return `${base}?${buildUrlParams(params)}`;
  }
}

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {number} input
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns A number within the bounds of min and max
 * @type Number
 */
function clamp(input = 0, min = 0, max = 255) {
  return Math.min(Math.max(input, min), max);
}

// Arg: vttDataString example: "WEBVTT\n\n1\n00:00:05.000 --> 00:00:10.000\n1080p-00001.jpg"
function parseVtt(vttDataString) {
  const processedList = [];
  const frames = vttDataString.split(/\r\n\r\n|\n\n|\r\r/);
  frames.forEach(frame => {
    const result = {};
    const lines = frame.split(/\r\n|\n|\r/);
    lines.forEach(line => {
      if (!is.number(result.startTime)) {
        // The line with start and end times on it is the first line of interest
        const matchTimes = line.match(/(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})( ?--> ?)(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})/); // Note that this currently ignores caption formatting directives that are optionally on the end of this line - fine for non-captions VTT

        if (matchTimes) {
          result.startTime = Number(matchTimes[1] || 0) * 60 * 60 + Number(matchTimes[2]) * 60 + Number(matchTimes[3]) + Number(`0.${matchTimes[4]}`);
          result.endTime = Number(matchTimes[6] || 0) * 60 * 60 + Number(matchTimes[7]) * 60 + Number(matchTimes[8]) + Number(`0.${matchTimes[9]}`);
        }
      } else if (!is.empty(line.trim()) && is.empty(result.text)) {
        // If we already have the startTime, then we're definitely up to the text line(s)
        const lineSplit = line.trim().split('#xywh=');
        [result.text] = lineSplit;

        // If there's content in lineSplit[1], then we have sprites. If not, then it's just one frame per image
        if (lineSplit[1]) {
          [result.x, result.y, result.w, result.h] = lineSplit[1].split(',');
        }
      }
    });
    if (result.text) {
      processedList.push(result);
    }
  });
  return processedList;
}

/**
 * Preview thumbnails for seek hover and scrubbing
 * Seeking: Hover over the seek bar (desktop only): shows a small preview container above the seek bar
 * Scrubbing: Click and drag the seek bar (desktop and mobile): shows the preview image over the entire video, as if the video is scrubbing at very high speed
 *
 * Notes:
 * - Thumbs are set via JS settings on Plyr init, not HTML5 'track' property. Using the track property would be a bit gross, because it doesn't support custom 'kinds'. kind=metadata might be used for something else, and we want to allow multiple thumbnails tracks. Tracks must have a unique combination of 'kind' and 'label'. We would have to do something like kind=metadata,label=thumbnails1 / kind=metadata,label=thumbnails2. Square peg, round hole
 * - VTT info: the image URL is relative to the VTT, not the current document. But if the url starts with a slash, it will naturally be relative to the current domain. https://support.jwplayer.com/articles/how-to-add-preview-thumbnails
 * - This implementation uses multiple separate img elements. Other implementations use background-image on one element. This would be nice and simple, but Firefox and Safari have flickering issues with replacing backgrounds of larger images. It seems that YouTube perhaps only avoids this because they don't have the option for high-res previews (even the fullscreen ones, when mousedown/seeking). Images appear over the top of each other, and previous ones are discarded once the new ones have been rendered
 */

function fitRatio(ratio, outer) {
  const targetRatio = outer.width / outer.height;
  const result = {};
  if (ratio > targetRatio) {
    result.width = outer.width;
    result.height = 1 / ratio * outer.width;
  } else {
    result.height = outer.height;
    result.width = ratio * outer.height;
  }
  return result;
}
class PreviewThumbnails {
  /**
   * PreviewThumbnails constructor.
   * @param {Plyr} player
   * @return {PreviewThumbnails}
   */
  constructor(player) {
    _defineProperty$1(this, "load", () => {
      // Toggle the regular seek tooltip
      if (this.player.elements.display.seekTooltip) {
        this.player.elements.display.seekTooltip.hidden = this.enabled;
      }
      if (!this.enabled) return;
      this.getThumbnails().then(() => {
        if (!this.enabled) {
          return;
        }

        // Render DOM elements
        this.render();

        // Check to see if thumb container size was specified manually in CSS
        this.determineContainerAutoSizing();

        // Set up listeners
        this.listeners();
        this.loaded = true;
      });
    });
    // Download VTT files and parse them
    _defineProperty$1(this, "getThumbnails", () => {
      return new Promise(resolve => {
        const {
          src
        } = this.player.config.previewThumbnails;
        if (is.empty(src)) {
          throw new Error('Missing previewThumbnails.src config attribute');
        }

        // Resolve promise
        const sortAndResolve = () => {
          // Sort smallest to biggest (e.g., [120p, 480p, 1080p])
          this.thumbnails.sort((x, y) => x.height - y.height);
          this.player.debug.log('Preview thumbnails', this.thumbnails);
          resolve();
        };

        // Via callback()
        if (is.function(src)) {
          src(thumbnails => {
            this.thumbnails = thumbnails;
            sortAndResolve();
          });
        }
        // VTT urls
        else {
          // If string, convert into single-element list
          const urls = is.string(src) ? [src] : src;
          // Loop through each src URL. Download and process the VTT file, storing the resulting data in this.thumbnails
          const promises = urls.map(u => this.getThumbnail(u));
          // Resolve
          Promise.all(promises).then(sortAndResolve);
        }
      });
    });
    // Process individual VTT file
    _defineProperty$1(this, "getThumbnail", url => {
      return new Promise(resolve => {
        fetch(url, undefined, this.player.config.previewThumbnails.withCredentials).then(response => {
          const thumbnail = {
            frames: parseVtt(response),
            height: null,
            urlPrefix: ''
          };

          // If the URLs don't start with '/', then we need to set their relative path to be the location of the VTT file
          // If the URLs do start with '/', then they obviously don't need a prefix, so it will remain blank
          // If the thumbnail URLs start with with none of '/', 'http://' or 'https://', then we need to set their relative path to be the location of the VTT file
          if (!thumbnail.frames[0].text.startsWith('/') && !thumbnail.frames[0].text.startsWith('http://') && !thumbnail.frames[0].text.startsWith('https://')) {
            thumbnail.urlPrefix = url.substring(0, url.lastIndexOf('/') + 1);
          }

          // Download the first frame, so that we can determine/set the height of this thumbnailsDef
          const tempImage = new Image();
          tempImage.onload = () => {
            thumbnail.height = tempImage.naturalHeight;
            thumbnail.width = tempImage.naturalWidth;
            this.thumbnails.push(thumbnail);
            resolve();
          };
          tempImage.src = thumbnail.urlPrefix + thumbnail.frames[0].text;
        });
      });
    });
    _defineProperty$1(this, "startMove", event => {
      if (!this.loaded) return;
      if (!is.event(event) || !['touchmove', 'mousemove'].includes(event.type)) return;

      // Wait until media has a duration
      if (!this.player.media.duration) return;
      if (event.type === 'touchmove') {
        // Calculate seek hover position as approx video seconds
        this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
      } else {
        var _this$player$config$m, _this$player$config$m2;
        // Calculate seek hover position as approx video seconds
        const clientRect = this.player.elements.progress.getBoundingClientRect();
        const percentage = 100 / clientRect.width * (event.pageX - clientRect.left);
        this.seekTime = this.player.media.duration * (percentage / 100);
        if (this.seekTime < 0) {
          // The mousemove fires for 10+px out to the left
          this.seekTime = 0;
        }
        if (this.seekTime > this.player.media.duration - 1) {
          // Took 1 second off the duration for safety, because different players can disagree on the real duration of a video
          this.seekTime = this.player.media.duration - 1;
        }
        this.mousePosX = event.pageX;

        // Set time text inside image container
        this.elements.thumb.time.textContent = formatTime(this.seekTime);

        // Get marker point for time
        const point = (_this$player$config$m = this.player.config.markers) === null || _this$player$config$m === void 0 ? void 0 : (_this$player$config$m2 = _this$player$config$m.points) === null || _this$player$config$m2 === void 0 ? void 0 : _this$player$config$m2.find(({
          time: t
        }) => t === Math.round(this.seekTime));

        // Append the point label to the tooltip
        if (point) {
          // this.elements.thumb.time.innerText.concat('\n');
          this.elements.thumb.time.insertAdjacentHTML('afterbegin', `${point.label}<br>`);
        }
      }

      // Download and show image
      this.showImageAtCurrentTime();
    });
    _defineProperty$1(this, "endMove", () => {
      this.toggleThumbContainer(false, true);
    });
    _defineProperty$1(this, "startScrubbing", event => {
      // Only act on left mouse button (0), or touch device (event.button does not exist or is false)
      if (is.nullOrUndefined(event.button) || event.button === false || event.button === 0) {
        this.mouseDown = true;

        // Wait until media has a duration
        if (this.player.media.duration) {
          this.toggleScrubbingContainer(true);
          this.toggleThumbContainer(false, true);

          // Download and show image
          this.showImageAtCurrentTime();
        }
      }
    });
    _defineProperty$1(this, "endScrubbing", () => {
      this.mouseDown = false;

      // Hide scrubbing preview. But wait until the video has successfully seeked before hiding the scrubbing preview
      if (Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime)) {
        // The video was already seeked/loaded at the chosen time - hide immediately
        this.toggleScrubbingContainer(false);
      } else {
        // The video hasn't seeked yet. Wait for that
        once.call(this.player, this.player.media, 'timeupdate', () => {
          // Re-check mousedown - we might have already started scrubbing again
          if (!this.mouseDown) {
            this.toggleScrubbingContainer(false);
          }
        });
      }
    });
    /**
     * Setup hooks for Plyr and window events
     */
    _defineProperty$1(this, "listeners", () => {
      // Hide thumbnail preview - on mouse click, mouse leave (in listeners.js for now), and video play/seek. All four are required, e.g., for buffering
      this.player.on('play', () => {
        this.toggleThumbContainer(false, true);
      });
      this.player.on('seeked', () => {
        this.toggleThumbContainer(false);
      });
      this.player.on('timeupdate', () => {
        this.lastTime = this.player.media.currentTime;
      });
    });
    /**
     * Create HTML elements for image containers
     */
    _defineProperty$1(this, "render", () => {
      // Create HTML element: plyr__preview-thumbnail-container
      this.elements.thumb.container = createElement('div', {
        class: this.player.config.classNames.previewThumbnails.thumbContainer
      });

      // Wrapper for the image for styling
      this.elements.thumb.imageContainer = createElement('div', {
        class: this.player.config.classNames.previewThumbnails.imageContainer
      });
      this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);

      // Create HTML element, parent+span: time text (e.g., 01:32:00)
      const timeContainer = createElement('div', {
        class: this.player.config.classNames.previewThumbnails.timeContainer
      });
      this.elements.thumb.time = createElement('span', {}, '00:00');
      timeContainer.appendChild(this.elements.thumb.time);
      this.elements.thumb.imageContainer.appendChild(timeContainer);

      // Inject the whole thumb
      if (is.element(this.player.elements.progress)) {
        this.player.elements.progress.appendChild(this.elements.thumb.container);
      }

      // Create HTML element: plyr__preview-scrubbing-container
      this.elements.scrubbing.container = createElement('div', {
        class: this.player.config.classNames.previewThumbnails.scrubbingContainer
      });
      this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
    });
    _defineProperty$1(this, "destroy", () => {
      if (this.elements.thumb.container) {
        this.elements.thumb.container.remove();
      }
      if (this.elements.scrubbing.container) {
        this.elements.scrubbing.container.remove();
      }
    });
    _defineProperty$1(this, "showImageAtCurrentTime", () => {
      if (this.mouseDown) {
        this.setScrubbingContainerSize();
      } else {
        this.setThumbContainerSizeAndPos();
      }

      // Find the desired thumbnail index
      // TODO: Handle a video longer than the thumbs where thumbNum is null
      const thumbNum = this.thumbnails[0].frames.findIndex(frame => this.seekTime >= frame.startTime && this.seekTime <= frame.endTime);
      const hasThumb = thumbNum >= 0;
      let qualityIndex = 0;

      // Show the thumb container if we're not scrubbing
      if (!this.mouseDown) {
        this.toggleThumbContainer(hasThumb);
      }

      // No matching thumb found
      if (!hasThumb) {
        return;
      }

      // Check to see if we've already downloaded higher quality versions of this image
      this.thumbnails.forEach((thumbnail, index) => {
        if (this.loadedImages.includes(thumbnail.frames[thumbNum].text)) {
          qualityIndex = index;
        }
      });

      // Only proceed if either thumb num or thumbfilename has changed
      if (thumbNum !== this.showingThumb) {
        this.showingThumb = thumbNum;
        this.loadImage(qualityIndex);
      }
    });
    // Show the image that's currently specified in this.showingThumb
    _defineProperty$1(this, "loadImage", (qualityIndex = 0) => {
      const thumbNum = this.showingThumb;
      const thumbnail = this.thumbnails[qualityIndex];
      const {
        urlPrefix
      } = thumbnail;
      const frame = thumbnail.frames[thumbNum];
      const thumbFilename = thumbnail.frames[thumbNum].text;
      const thumbUrl = urlPrefix + thumbFilename;
      if (!this.currentImageElement || this.currentImageElement.dataset.filename !== thumbFilename) {
        // If we're already loading a previous image, remove its onload handler - we don't want it to load after this one
        // Only do this if not using sprites. Without sprites we really want to show as many images as possible, as a best-effort
        if (this.loadingImage && this.usingSprites) {
          this.loadingImage.onload = null;
        }

        // We're building and adding a new image. In other implementations of similar functionality (YouTube), background image
        // is instead used. But this causes issues with larger images in Firefox and Safari - switching between background
        // images causes a flicker. Putting a new image over the top does not
        const previewImage = new Image();
        previewImage.src = thumbUrl;
        previewImage.dataset.index = thumbNum;
        previewImage.dataset.filename = thumbFilename;
        this.showingThumbFilename = thumbFilename;
        this.player.debug.log(`Loading image: ${thumbUrl}`);

        // For some reason, passing the named function directly causes it to execute immediately. So I've wrapped it in an anonymous function...
        previewImage.onload = () => this.showImage(previewImage, frame, qualityIndex, thumbNum, thumbFilename, true);
        this.loadingImage = previewImage;
        this.removeOldImages(previewImage);
      } else {
        // Update the existing image
        this.showImage(this.currentImageElement, frame, qualityIndex, thumbNum, thumbFilename, false);
        this.currentImageElement.dataset.index = thumbNum;
        this.removeOldImages(this.currentImageElement);
      }
    });
    _defineProperty$1(this, "showImage", (previewImage, frame, qualityIndex, thumbNum, thumbFilename, newImage = true) => {
      this.player.debug.log(`Showing thumb: ${thumbFilename}. num: ${thumbNum}. qual: ${qualityIndex}. newimg: ${newImage}`);
      this.setImageSizeAndOffset(previewImage, frame);
      if (newImage) {
        this.currentImageContainer.appendChild(previewImage);
        this.currentImageElement = previewImage;
        if (!this.loadedImages.includes(thumbFilename)) {
          this.loadedImages.push(thumbFilename);
        }
      }

      // Preload images before and after the current one
      // Show higher quality of the same frame
      // Each step here has a short time delay, and only continues if still hovering/seeking the same spot. This is to protect slow connections from overloading
      this.preloadNearby(thumbNum, true).then(this.preloadNearby(thumbNum, false)).then(this.getHigherQuality(qualityIndex, previewImage, frame, thumbFilename));
    });
    // Remove all preview images that aren't the designated current image
    _defineProperty$1(this, "removeOldImages", currentImage => {
      // Get a list of all images, convert it from a DOM list to an array
      Array.from(this.currentImageContainer.children).forEach(image => {
        if (image.tagName.toLowerCase() !== 'img') {
          return;
        }
        const removeDelay = this.usingSprites ? 500 : 1000;
        if (image.dataset.index !== currentImage.dataset.index && !image.dataset.deleting) {
          // Wait 200ms, as the new image can take some time to show on certain browsers (even though it was downloaded before showing). This will prevent flicker, and show some generosity towards slower clients
          // First set attribute 'deleting' to prevent multi-handling of this on repeat firing of this function

          image.dataset.deleting = true;

          // This has to be set before the timeout - to prevent issues switching between hover and scrub
          const {
            currentImageContainer
          } = this;
          setTimeout(() => {
            currentImageContainer.removeChild(image);
            this.player.debug.log(`Removing thumb: ${image.dataset.filename}`);
          }, removeDelay);
        }
      });
    });
    // Preload images before and after the current one. Only if the user is still hovering/seeking the same frame
    // This will only preload the lowest quality
    _defineProperty$1(this, "preloadNearby", (thumbNum, forward = true) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const oldThumbFilename = this.thumbnails[0].frames[thumbNum].text;
          if (this.showingThumbFilename === oldThumbFilename) {
            // Find the nearest thumbs with different filenames. Sometimes it'll be the next index, but in the case of sprites, it might be 100+ away
            let thumbnailsClone;
            if (forward) {
              thumbnailsClone = this.thumbnails[0].frames.slice(thumbNum);
            } else {
              thumbnailsClone = this.thumbnails[0].frames.slice(0, thumbNum).reverse();
            }
            let foundOne = false;
            thumbnailsClone.forEach(frame => {
              const newThumbFilename = frame.text;
              if (newThumbFilename !== oldThumbFilename) {
                // Found one with a different filename. Make sure it hasn't already been loaded on this page visit
                if (!this.loadedImages.includes(newThumbFilename)) {
                  foundOne = true;
                  this.player.debug.log(`Preloading thumb filename: ${newThumbFilename}`);
                  const {
                    urlPrefix
                  } = this.thumbnails[0];
                  const thumbURL = urlPrefix + newThumbFilename;
                  const previewImage = new Image();
                  previewImage.src = thumbURL;
                  previewImage.onload = () => {
                    this.player.debug.log(`Preloaded thumb filename: ${newThumbFilename}`);
                    if (!this.loadedImages.includes(newThumbFilename)) this.loadedImages.push(newThumbFilename);

                    // We don't resolve until the thumb is loaded
                    resolve();
                  };
                }
              }
            });

            // If there are none to preload then we want to resolve immediately
            if (!foundOne) {
              resolve();
            }
          }
        }, 300);
      });
    });
    // If user has been hovering current image for half a second, look for a higher quality one
    _defineProperty$1(this, "getHigherQuality", (currentQualityIndex, previewImage, frame, thumbFilename) => {
      if (currentQualityIndex < this.thumbnails.length - 1) {
        // Only use the higher quality version if it's going to look any better - if the current thumb is of a lower pixel density than the thumbnail container
        let previewImageHeight = previewImage.naturalHeight;
        if (this.usingSprites) {
          previewImageHeight = frame.h;
        }
        if (previewImageHeight < this.thumbContainerHeight) {
          // Recurse back to the loadImage function - show a higher quality one, but only if the viewer is on this frame for a while
          setTimeout(() => {
            // Make sure the mouse hasn't already moved on and started hovering at another image
            if (this.showingThumbFilename === thumbFilename) {
              this.player.debug.log(`Showing higher quality thumb for: ${thumbFilename}`);
              this.loadImage(currentQualityIndex + 1);
            }
          }, 300);
        }
      }
    });
    _defineProperty$1(this, "toggleThumbContainer", (toggle = false, clearShowing = false) => {
      const className = this.player.config.classNames.previewThumbnails.thumbContainerShown;
      this.elements.thumb.container.classList.toggle(className, toggle);
      if (!toggle && clearShowing) {
        this.showingThumb = null;
        this.showingThumbFilename = null;
      }
    });
    _defineProperty$1(this, "toggleScrubbingContainer", (toggle = false) => {
      const className = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
      this.elements.scrubbing.container.classList.toggle(className, toggle);
      if (!toggle) {
        this.showingThumb = null;
        this.showingThumbFilename = null;
      }
    });
    _defineProperty$1(this, "determineContainerAutoSizing", () => {
      if (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) {
        // This will prevent auto sizing in this.setThumbContainerSizeAndPos()
        this.sizeSpecifiedInCSS = true;
      }
    });
    // Set the size to be about a quarter of the size of video. Unless option dynamicSize === false, in which case it needs to be set in CSS
    _defineProperty$1(this, "setThumbContainerSizeAndPos", () => {
      const {
        imageContainer
      } = this.elements.thumb;
      if (!this.sizeSpecifiedInCSS) {
        const thumbWidth = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
        imageContainer.style.height = `${this.thumbContainerHeight}px`;
        imageContainer.style.width = `${thumbWidth}px`;
      } else if (imageContainer.clientHeight > 20 && imageContainer.clientWidth < 20) {
        const thumbWidth = Math.floor(imageContainer.clientHeight * this.thumbAspectRatio);
        imageContainer.style.width = `${thumbWidth}px`;
      } else if (imageContainer.clientHeight < 20 && imageContainer.clientWidth > 20) {
        const thumbHeight = Math.floor(imageContainer.clientWidth / this.thumbAspectRatio);
        imageContainer.style.height = `${thumbHeight}px`;
      }
      this.setThumbContainerPos();
    });
    _defineProperty$1(this, "setThumbContainerPos", () => {
      const scrubberRect = this.player.elements.progress.getBoundingClientRect();
      const containerRect = this.player.elements.container.getBoundingClientRect();
      const {
        container
      } = this.elements.thumb;
      // Find the lowest and highest desired left-position, so we don't slide out the side of the video container
      const min = containerRect.left - scrubberRect.left + 10;
      const max = containerRect.right - scrubberRect.left - container.clientWidth - 10;
      // Set preview container position to: mousepos, minus seekbar.left, minus half of previewContainer.clientWidth
      const position = this.mousePosX - scrubberRect.left - container.clientWidth / 2;
      const clamped = clamp(position, min, max);

      // Move the popover position
      container.style.left = `${clamped}px`;

      // The arrow can follow the cursor
      container.style.setProperty('--preview-arrow-offset', `${position - clamped}px`);
    });
    // Can't use 100% width, in case the video is a different aspect ratio to the video container
    _defineProperty$1(this, "setScrubbingContainerSize", () => {
      const {
        width,
        height
      } = fitRatio(this.thumbAspectRatio, {
        width: this.player.media.clientWidth,
        height: this.player.media.clientHeight
      });
      this.elements.scrubbing.container.style.width = `${width}px`;
      this.elements.scrubbing.container.style.height = `${height}px`;
    });
    // Sprites need to be offset to the correct location
    _defineProperty$1(this, "setImageSizeAndOffset", (previewImage, frame) => {
      if (!this.usingSprites) return;

      // Find difference between height and preview container height
      const multiplier = this.thumbContainerHeight / frame.h;
      previewImage.style.height = `${previewImage.naturalHeight * multiplier}px`;
      previewImage.style.width = `${previewImage.naturalWidth * multiplier}px`;
      previewImage.style.left = `-${frame.x * multiplier}px`;
      previewImage.style.top = `-${frame.y * multiplier}px`;
    });
    this.player = player;
    this.thumbnails = [];
    this.loaded = false;
    this.lastMouseMoveTime = Date.now();
    this.mouseDown = false;
    this.loadedImages = [];
    this.elements = {
      thumb: {},
      scrubbing: {}
    };
    this.load();
  }
  get enabled() {
    return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
  }
  get currentImageContainer() {
    return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
  }
  get usingSprites() {
    return Object.keys(this.thumbnails[0].frames[0]).includes('w');
  }
  get thumbAspectRatio() {
    if (this.usingSprites) {
      return this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h;
    }
    return this.thumbnails[0].width / this.thumbnails[0].height;
  }
  get thumbContainerHeight() {
    if (this.mouseDown) {
      const {
        height
      } = fitRatio(this.thumbAspectRatio, {
        width: this.player.media.clientWidth,
        height: this.player.media.clientHeight
      });
      return height;
    }

    // If css is used this needs to return the css height for sprites to work (see setImageSizeAndOffset)
    if (this.sizeSpecifiedInCSS) {
      return this.elements.thumb.imageContainer.clientHeight;
    }
    return Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
  }
  get currentImageElement() {
    return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
  }
  set currentImageElement(element) {
    if (this.mouseDown) {
      this.currentScrubbingImageElement = element;
    } else {
      this.currentThumbnailImageElement = element;
    }
  }
}

// ==========================================================================
// Plyr source update
// ==========================================================================

const source = {
  // Add elements to HTML5 media (source, tracks, etc)
  insertElements(type, attributes) {
    if (is.string(attributes)) {
      insertElement(type, this.media, {
        src: attributes
      });
    } else if (is.array(attributes)) {
      attributes.forEach(attribute => {
        insertElement(type, this.media, attribute);
      });
    }
  },
  // Update source
  // Sources are not checked for support so be careful
  change(input) {
    if (!getDeep(input, 'sources.length')) {
      this.debug.warn('Invalid source format');
      return;
    }

    // Cancel current network requests
    html5.cancelRequests.call(this);

    // Destroy instance and re-setup
    this.destroy(() => {
      // Reset quality options
      this.options.quality = [];

      // Remove elements
      removeElement(this.media);
      this.media = null;

      // Reset class name
      if (is.element(this.elements.container)) {
        this.elements.container.removeAttribute('class');
      }

      // Set the type and provider
      const {
        sources,
        type
      } = input;
      const [{
        provider = providers.html5,
        src
      }] = sources;
      const tagName = provider === 'html5' ? type : 'div';
      const attributes = provider === 'html5' ? {} : {
        src
      };
      Object.assign(this, {
        provider,
        type,
        // Check for support
        supported: support.check(type, provider, this.config.playsinline),
        // Create new element
        media: createElement(tagName, attributes)
      });

      // Inject the new element
      this.elements.container.appendChild(this.media);

      // Autoplay the new source?
      if (is.boolean(input.autoplay)) {
        this.config.autoplay = input.autoplay;
      }

      // Set attributes for audio and video
      if (this.isHTML5) {
        if (this.config.crossorigin) {
          this.media.setAttribute('crossorigin', '');
        }
        if (this.config.autoplay) {
          this.media.setAttribute('autoplay', '');
        }
        if (!is.empty(input.poster)) {
          this.poster = input.poster;
        }
        if (this.config.loop.active) {
          this.media.setAttribute('loop', '');
        }
        if (this.config.muted) {
          this.media.setAttribute('muted', '');
        }
        if (this.config.playsinline) {
          this.media.setAttribute('playsinline', '');
        }
      }

      // Restore class hook
      ui.addStyleHook.call(this);

      // Set new sources for html5
      if (this.isHTML5) {
        source.insertElements.call(this, 'source', sources);
      }

      // Set video title
      this.config.title = input.title;

      // Set up from scratch
      media.setup.call(this);

      // HTML5 stuff
      if (this.isHTML5) {
        // Setup captions
        if (Object.keys(input).includes('tracks')) {
          source.insertElements.call(this, 'track', input.tracks);
        }
      }

      // If HTML5 or embed but not fully supported, setupInterface and call ready now
      if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
        // Setup interface
        ui.build.call(this);
      }

      // Load HTML5 sources
      if (this.isHTML5) {
        this.media.load();
      }

      // Update previewThumbnails config & reload plugin
      if (!is.empty(input.previewThumbnails)) {
        Object.assign(this.config.previewThumbnails, input.previewThumbnails);

        // Cleanup previewThumbnails plugin if it was loaded
        if (this.previewThumbnails && this.previewThumbnails.loaded) {
          this.previewThumbnails.destroy();
          this.previewThumbnails = null;
        }

        // Create new instance if it is still enabled
        if (this.config.previewThumbnails.enabled) {
          this.previewThumbnails = new PreviewThumbnails(this);
        }
      }

      // Update the fullscreen support
      this.fullscreen.update();
    }, true);
  }
};

// Private properties
// TODO: Use a WeakMap for private globals
// const globals = new WeakMap();

// Plyr instance
class Plyr {
  constructor(target, options) {
    /**
     * Play the media, or play the advertisement (if they are not blocked)
     */
    _defineProperty$1(this, "play", () => {
      if (!is.function(this.media.play)) {
        return null;
      }

      // Intecept play with ads
      if (this.ads && this.ads.enabled) {
        this.ads.managerPromise.then(() => this.ads.play()).catch(() => silencePromise(this.media.play()));
      }

      // Return the promise (for HTML5)
      return this.media.play();
    });
    /**
     * Pause the media
     */
    _defineProperty$1(this, "pause", () => {
      if (!this.playing || !is.function(this.media.pause)) {
        return null;
      }
      return this.media.pause();
    });
    /**
     * Toggle playback based on current status
     * @param {boolean} input
     */
    _defineProperty$1(this, "togglePlay", input => {
      // Toggle based on current state if nothing passed
      const toggle = is.boolean(input) ? input : !this.playing;
      if (toggle) {
        return this.play();
      }
      return this.pause();
    });
    /**
     * Stop playback
     */
    _defineProperty$1(this, "stop", () => {
      if (this.isHTML5) {
        this.pause();
        this.restart();
      } else if (is.function(this.media.stop)) {
        this.media.stop();
      }
    });
    /**
     * Restart playback
     */
    _defineProperty$1(this, "restart", () => {
      this.currentTime = 0;
    });
    /**
     * Rewind
     * @param {number} seekTime - how far to rewind in seconds. Defaults to the config.seekTime
     */
    _defineProperty$1(this, "rewind", seekTime => {
      this.currentTime -= is.number(seekTime) ? seekTime : this.config.seekTime;
    });
    /**
     * Fast forward
     * @param {number} seekTime - how far to fast forward in seconds. Defaults to the config.seekTime
     */
    _defineProperty$1(this, "forward", seekTime => {
      this.currentTime += is.number(seekTime) ? seekTime : this.config.seekTime;
    });
    /**
     * Increase volume
     * @param {boolean} step - How much to decrease by (between 0 and 1)
     */
    _defineProperty$1(this, "increaseVolume", step => {
      const volume = this.media.muted ? 0 : this.volume;
      this.volume = volume + (is.number(step) ? step : 0);
    });
    /**
     * Decrease volume
     * @param {boolean} step - How much to decrease by (between 0 and 1)
     */
    _defineProperty$1(this, "decreaseVolume", step => {
      this.increaseVolume(-step);
    });
    /**
     * Trigger the airplay dialog
     * TODO: update player with state, support, enabled
     */
    _defineProperty$1(this, "airplay", () => {
      // Show dialog if supported
      if (support.airplay) {
        this.media.webkitShowPlaybackTargetPicker();
      }
    });
    /**
     * Toggle the player controls
     * @param {boolean} [toggle] - Whether to show the controls
     */
    _defineProperty$1(this, "toggleControls", toggle => {
      // Don't toggle if missing UI support or if it's audio
      if (this.supported.ui && !this.isAudio) {
        // Get state before change
        const isHidden = hasClass(this.elements.container, this.config.classNames.hideControls);
        // Negate the argument if not undefined since adding the class to hides the controls
        const force = typeof toggle === 'undefined' ? undefined : !toggle;
        // Apply and get updated state
        const hiding = toggleClass(this.elements.container, this.config.classNames.hideControls, force);

        // Close menu
        if (hiding && is.array(this.config.controls) && this.config.controls.includes('settings') && !is.empty(this.config.settings)) {
          controls.toggleMenu.call(this, false);
        }

        // Trigger event on change
        if (hiding !== isHidden) {
          const eventName = hiding ? 'controlshidden' : 'controlsshown';
          triggerEvent.call(this, this.media, eventName);
        }
        return !hiding;
      }
      return false;
    });
    /**
     * Add event listeners
     * @param {string} event - Event type
     * @param {Function} callback - Callback for when event occurs
     */
    _defineProperty$1(this, "on", (event, callback) => {
      on.call(this, this.elements.container, event, callback);
    });
    /**
     * Add event listeners once
     * @param {string} event - Event type
     * @param {Function} callback - Callback for when event occurs
     */
    _defineProperty$1(this, "once", (event, callback) => {
      once.call(this, this.elements.container, event, callback);
    });
    /**
     * Remove event listeners
     * @param {string} event - Event type
     * @param {Function} callback - Callback for when event occurs
     */
    _defineProperty$1(this, "off", (event, callback) => {
      off(this.elements.container, event, callback);
    });
    /**
     * Destroy an instance
     * Event listeners are removed when elements are removed
     * http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
     * @param {Function} callback - Callback for when destroy is complete
     * @param {boolean} soft - Whether it's a soft destroy (for source changes etc)
     */
    _defineProperty$1(this, "destroy", (callback, soft = false) => {
      if (!this.ready) {
        return;
      }
      const done = () => {
        // Reset overflow (incase destroyed while in fullscreen)
        document.body.style.overflow = '';

        // GC for embed
        this.embed = null;

        // If it's a soft destroy, make minimal changes
        if (soft) {
          if (Object.keys(this.elements).length) {
            // Remove elements
            removeElement(this.elements.buttons.play);
            removeElement(this.elements.captions);
            removeElement(this.elements.controls);
            removeElement(this.elements.wrapper);

            // Clear for GC
            this.elements.buttons.play = null;
            this.elements.captions = null;
            this.elements.controls = null;
            this.elements.wrapper = null;
          }

          // Callback
          if (is.function(callback)) {
            callback();
          }
        } else {
          // Unbind listeners
          unbindListeners.call(this);

          // Cancel current network requests
          html5.cancelRequests.call(this);

          // Replace the container with the original element provided
          replaceElement(this.elements.original, this.elements.container);

          // Event
          triggerEvent.call(this, this.elements.original, 'destroyed', true);

          // Callback
          if (is.function(callback)) {
            callback.call(this.elements.original);
          }

          // Reset state
          this.ready = false;

          // Clear for garbage collection
          setTimeout(() => {
            this.elements = null;
            this.media = null;
          }, 200);
        }
      };

      // Stop playback
      this.stop();

      // Clear timeouts
      clearTimeout(this.timers.loading);
      clearTimeout(this.timers.controls);
      clearTimeout(this.timers.resized);

      // Provider specific stuff
      if (this.isHTML5) {
        // Restore native video controls
        ui.toggleNativeControls.call(this, true);

        // Clean up
        done();
      } else if (this.isYouTube) {
        // Clear timers
        clearInterval(this.timers.buffering);
        clearInterval(this.timers.playing);

        // Destroy YouTube API
        if (this.embed !== null && is.function(this.embed.destroy)) {
          this.embed.destroy();
        }

        // Clean up
        done();
      } else if (this.isVimeo) {
        // Destroy Vimeo API
        // then clean up (wait, to prevent postmessage errors)
        if (this.embed !== null) {
          this.embed.unload().then(done);
        }

        // Vimeo does not always return
        setTimeout(done, 200);
      }
    });
    /**
     * Check for support for a mime type (HTML5 only)
     * @param {string} type - Mime type
     */
    _defineProperty$1(this, "supports", type => support.mime.call(this, type));
    this.timers = {};

    // State
    this.ready = false;
    this.loading = false;
    this.failed = false;

    // Touch device
    this.touch = support.touch;

    // Set the media element
    this.media = target;

    // String selector passed
    if (is.string(this.media)) {
      this.media = document.querySelectorAll(this.media);
    }

    // jQuery, NodeList or Array passed, use first element
    if (window.jQuery && this.media instanceof jQuery || is.nodeList(this.media) || is.array(this.media)) {
      this.media = this.media[0];
    }

    // Set config
    this.config = extend({}, defaults, Plyr.defaults, options || {}, (() => {
      try {
        return JSON.parse(this.media.getAttribute('data-plyr-config'));
      } catch {
        return {};
      }
    })());

    // Elements cache
    this.elements = {
      container: null,
      fullscreen: null,
      captions: null,
      buttons: {},
      display: {},
      progress: {},
      inputs: {},
      settings: {
        popup: null,
        menu: null,
        panels: {},
        buttons: {}
      }
    };

    // Captions
    this.captions = {
      active: null,
      currentTrack: -1,
      meta: new WeakMap()
    };

    // Fullscreen
    this.fullscreen = {
      active: false
    };

    // Options
    this.options = {
      speed: [],
      quality: []
    };

    // Debugging
    // TODO: move to globals
    this.debug = new Console(this.config.debug);

    // Log config options and support
    this.debug.log('Config', this.config);
    this.debug.log('Support', support);

    // We need an element to setup
    if (is.nullOrUndefined(this.media) || !is.element(this.media)) {
      this.debug.error('Setup failed: no suitable element passed');
      return;
    }

    // Bail if the element is initialized
    if (this.media.plyr) {
      this.debug.warn('Target already setup');
      return;
    }

    // Bail if not enabled
    if (!this.config.enabled) {
      this.debug.error('Setup failed: disabled by config');
      return;
    }

    // Bail if disabled or no basic support
    // You may want to disable certain UAs etc
    if (!support.check().api) {
      this.debug.error('Setup failed: no support');
      return;
    }

    // Cache original element state for .destroy()
    const clone = this.media.cloneNode(true);
    clone.autoplay = false;
    this.elements.original = clone;

    // Set media type based on tag or data attribute
    // Supported: video, audio, vimeo, youtube
    const _type = this.media.tagName.toLowerCase();
    // Embed properties
    let iframe = null;
    let url = null;

    // Different setup based on type
    switch (_type) {
      case 'div':
        // Find the frame
        iframe = this.media.querySelector('iframe');

        // <iframe> type
        if (is.element(iframe)) {
          // Detect provider
          url = parseUrl(iframe.getAttribute('src'));
          this.provider = getProviderByUrl(url.toString());

          // Rework elements
          this.elements.container = this.media;
          this.media = iframe;

          // Reset classname
          this.elements.container.className = '';

          // Get attributes from URL and set config
          if (url.search.length) {
            const truthy = ['1', 'true'];
            if (truthy.includes(url.searchParams.get('autoplay'))) {
              this.config.autoplay = true;
            }
            if (truthy.includes(url.searchParams.get('loop'))) {
              this.config.loop.active = true;
            }

            // TODO: replace fullscreen.iosNative with this playsinline config option
            // YouTube requires the playsinline in the URL
            if (this.isYouTube) {
              this.config.playsinline = truthy.includes(url.searchParams.get('playsinline'));
              this.config.youtube.hl = url.searchParams.get('hl'); // TODO: Should this be setting language?
            } else {
              this.config.playsinline = true;
            }
          }
        } else {
          // <div> with attributes
          this.provider = this.media.getAttribute(this.config.attributes.embed.provider);

          // Remove attribute
          this.media.removeAttribute(this.config.attributes.embed.provider);
        }

        // Unsupported or missing provider
        if (is.empty(this.provider) || !Object.values(providers).includes(this.provider)) {
          this.debug.error('Setup failed: Invalid provider');
          return;
        }

        // Audio will come later for external providers
        this.type = types.video;
        break;
      case 'video':
      case 'audio':
        this.type = _type;
        this.provider = providers.html5;

        // Get config from attributes
        if (this.media.hasAttribute('crossorigin')) {
          this.config.crossorigin = true;
        }
        if (this.media.hasAttribute('autoplay')) {
          this.config.autoplay = true;
        }
        if (this.media.hasAttribute('playsinline') || this.media.hasAttribute('webkit-playsinline')) {
          this.config.playsinline = true;
        }
        if (this.media.hasAttribute('muted')) {
          this.config.muted = true;
        }
        if (this.media.hasAttribute('loop')) {
          this.config.loop.active = true;
        }
        break;
      default:
        this.debug.error('Setup failed: unsupported type');
        return;
    }

    // Check for support again but with type
    this.supported = support.check(this.type, this.provider);

    // If no support for even API, bail
    if (!this.supported.api) {
      this.debug.error('Setup failed: no support');
      return;
    }
    this.eventListeners = [];

    // Create listeners
    this.listeners = new Listeners(this);

    // Setup local storage for user settings
    this.storage = new Storage(this);

    // Store reference
    this.media.plyr = this;

    // Wrap media
    if (!is.element(this.elements.container)) {
      this.elements.container = createElement('div');
      wrap(this.media, this.elements.container);
    }

    // Migrate custom properties from media to container (so they work 😉)
    ui.migrateStyles.call(this);

    // Add style hook
    ui.addStyleHook.call(this);

    // Setup media
    media.setup.call(this);

    // Listen for events if debugging
    if (this.config.debug) {
      on.call(this, this.elements.container, this.config.events.join(' '), event => {
        this.debug.log(`event: ${event.type}`);
      });
    }

    // Setup fullscreen
    this.fullscreen = new Fullscreen(this);

    // Setup interface
    // If embed but not fully supported, build interface now to avoid flash of controls
    if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
      ui.build.call(this);
    }

    // Container listeners
    this.listeners.container();

    // Global listeners
    this.listeners.global();

    // Setup ads if provided
    if (this.config.ads.enabled) {
      this.ads = new Ads(this);
    }

    // Autoplay if required
    if (this.isHTML5 && this.config.autoplay) {
      this.once('canplay', () => silencePromise(this.play()));
    }

    // Seek time will be recorded (in listeners.js) so we can prevent hiding controls for a few seconds after seek
    this.lastSeekTime = 0;

    // Setup preview thumbnails if enabled
    if (this.config.previewThumbnails.enabled) {
      this.previewThumbnails = new PreviewThumbnails(this);
    }
  }

  // ---------------------------------------
  // API
  // ---------------------------------------

  /**
   * Types and provider helpers
   */
  get isHTML5() {
    return this.provider === providers.html5;
  }
  get isEmbed() {
    return this.isYouTube || this.isVimeo;
  }
  get isYouTube() {
    return this.provider === providers.youtube;
  }
  get isVimeo() {
    return this.provider === providers.vimeo;
  }
  get isVideo() {
    return this.type === types.video;
  }
  get isAudio() {
    return this.type === types.audio;
  }
  /**
   * Get playing state
   */
  get playing() {
    return Boolean(this.ready && !this.paused && !this.ended);
  }

  /**
   * Get paused state
   */
  get paused() {
    return Boolean(this.media.paused);
  }

  /**
   * Get stopped state
   */
  get stopped() {
    return Boolean(this.paused && this.currentTime === 0);
  }

  /**
   * Get ended state
   */
  get ended() {
    return Boolean(this.media.ended);
  }
  /**
   * Seek to a time
   * @param {number} input - where to seek to in seconds. Defaults to 0 (the start)
   */
  set currentTime(input) {
    // Bail if media duration isn't available yet
    if (!this.duration) {
      return;
    }

    // Validate input
    const inputIsValid = is.number(input) && input > 0;

    // Set
    this.media.currentTime = inputIsValid ? Math.min(input, this.duration) : 0;

    // Logging
    this.debug.log(`Seeking to ${this.currentTime} seconds`);
  }

  /**
   * Get current time
   */
  get currentTime() {
    return Number(this.media.currentTime);
  }

  /**
   * Get buffered
   */
  get buffered() {
    const {
      buffered
    } = this.media;

    // YouTube / Vimeo return a float between 0-1
    if (is.number(buffered)) {
      return buffered;
    }

    // HTML5
    // TODO: Handle buffered chunks of the media
    // (i.e. seek to another section buffers only that section)
    if (buffered && buffered.length && this.duration > 0) {
      return buffered.end(0) / this.duration;
    }
    return 0;
  }

  /**
   * Get seeking status
   */
  get seeking() {
    return Boolean(this.media.seeking);
  }

  /**
   * Get the duration of the current media
   */
  get duration() {
    // Faux duration set via config
    const fauxDuration = Number.parseFloat(this.config.duration);
    // Media duration can be NaN or Infinity before the media has loaded
    const realDuration = (this.media || {}).duration;
    const duration = !is.number(realDuration) || realDuration === Infinity ? 0 : realDuration;

    // If config duration is funky, use regular duration
    return fauxDuration || duration;
  }

  /**
   * Set the player volume
   * @param {number} value - must be between 0 and 1. Defaults to the value from local storage and config.volume if not set in storage
   */
  set volume(value) {
    let volume = value;
    const max = 1;
    const min = 0;
    if (is.string(volume)) {
      volume = Number(volume);
    }

    // Load volume from storage if no value specified
    if (!is.number(volume)) {
      volume = this.storage.get('volume');
    }

    // Use config if all else fails
    if (!is.number(volume)) {
      ({
        volume
      } = this.config);
    }

    // Maximum is volumeMax
    if (volume > max) {
      volume = max;
    }
    // Minimum is volumeMin
    if (volume < min) {
      volume = min;
    }

    // Update config
    this.config.volume = volume;

    // Set the player volume
    this.media.volume = volume;

    // If muted, and we're increasing volume manually, reset muted state
    if (!is.empty(value) && this.muted && volume > 0) {
      this.muted = false;
    }
  }

  /**
   * Get the current player volume
   */
  get volume() {
    return Number(this.media.volume);
  }
  /**
   * Set muted state
   * @param {boolean} mute
   */
  set muted(mute) {
    let toggle = mute;

    // Load muted state from storage
    if (!is.boolean(toggle)) {
      toggle = this.storage.get('muted');
    }

    // Use config if all else fails
    if (!is.boolean(toggle)) {
      toggle = this.config.muted;
    }

    // Update config
    this.config.muted = toggle;

    // Set mute on the player
    this.media.muted = toggle;
  }

  /**
   * Get current muted state
   */
  get muted() {
    return Boolean(this.media.muted);
  }

  /**
   * Check if the media has audio
   */
  get hasAudio() {
    // Assume yes for all non HTML5 (as we can't tell...)
    if (!this.isHTML5) {
      return true;
    }
    if (this.isAudio) {
      return true;
    }

    // Get audio tracks
    return Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
  }

  /**
   * Set playback speed
   * @param {number} input - the speed of playback (0.5-2.0)
   */
  set speed(input) {
    let speed = null;
    if (is.number(input)) {
      speed = input;
    }
    if (!is.number(speed)) {
      speed = this.storage.get('speed');
    }
    if (!is.number(speed)) {
      speed = this.config.speed.selected;
    }

    // Clamp to min/max
    const {
      minimumSpeed: min,
      maximumSpeed: max
    } = this;
    speed = clamp(speed, min, max);

    // Update config
    this.config.speed.selected = speed;

    // Set media speed
    setTimeout(() => {
      if (this.media) {
        this.media.playbackRate = speed;
      }
    }, 0);
  }

  /**
   * Get current playback speed
   */
  get speed() {
    return Number(this.media.playbackRate);
  }

  /**
   * Get the minimum allowed speed
   */
  get minimumSpeed() {
    if (this.isYouTube) {
      // https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate
      return Math.min(...this.options.speed);
    }
    if (this.isVimeo) {
      // https://github.com/vimeo/player.js/#setplaybackrateplaybackrate-number-promisenumber-rangeerrorerror
      return 0.5;
    }

    // https://stackoverflow.com/a/32320020/1191319
    return 0.0625;
  }

  /**
   * Get the maximum allowed speed
   */
  get maximumSpeed() {
    if (this.isYouTube) {
      // https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate
      return Math.max(...this.options.speed);
    }
    if (this.isVimeo) {
      // https://github.com/vimeo/player.js/#setplaybackrateplaybackrate-number-promisenumber-rangeerrorerror
      return 2;
    }

    // https://stackoverflow.com/a/32320020/1191319
    return 16;
  }

  /**
   * Set playback quality
   * Currently HTML5 & YouTube only
   * @param {number} input - Quality level
   */
  set quality(input) {
    const config = this.config.quality;
    const options = this.options.quality;
    if (!options.length) {
      return;
    }
    let quality = [!is.empty(input) && Number(input), this.storage.get('quality'), config.selected, config.default].find(is.number);
    let updateStorage = true;
    if (!options.includes(quality)) {
      const value = closest(options, quality);
      this.debug.warn(`Unsupported quality option: ${quality}, using ${value} instead`);
      quality = value;

      // Don't update storage if quality is not supported
      updateStorage = false;
    }

    // Update config
    config.selected = quality;

    // Set quality
    this.media.quality = quality;

    // Save to storage
    if (updateStorage) {
      this.storage.set({
        quality
      });
    }
  }

  /**
   * Get current quality level
   */
  get quality() {
    return this.media.quality;
  }

  /**
   * Toggle loop
   * TODO: Finish fancy new logic. Set the indicator on load as user may pass loop as config
   * @param {boolean} input - Whether to loop or not
   */
  set loop(input) {
    const toggle = is.boolean(input) ? input : this.config.loop.active;
    this.config.loop.active = toggle;
    this.media.loop = toggle;

    // Set default to be a true toggle
    /* const type = ['start', 'end', 'all', 'none', 'toggle'].includes(input) ? input : 'toggle';
         switch (type) {
            case 'start':
                if (this.config.loop.end && this.config.loop.end <= this.currentTime) {
                    this.config.loop.end = null;
                }
                this.config.loop.start = this.currentTime;
                // this.config.loop.indicator.start = this.elements.display.played.value;
                break;
             case 'end':
                if (this.config.loop.start >= this.currentTime) {
                    return this;
                }
                this.config.loop.end = this.currentTime;
                // this.config.loop.indicator.end = this.elements.display.played.value;
                break;
             case 'all':
                this.config.loop.start = 0;
                this.config.loop.end = this.duration - 2;
                this.config.loop.indicator.start = 0;
                this.config.loop.indicator.end = 100;
                break;
             case 'toggle':
                if (this.config.loop.active) {
                    this.config.loop.start = 0;
                    this.config.loop.end = null;
                } else {
                    this.config.loop.start = 0;
                    this.config.loop.end = this.duration - 2;
                }
                break;
             default:
                this.config.loop.start = 0;
                this.config.loop.end = null;
                break;
        } */
  }

  /**
   * Get current loop state
   */
  get loop() {
    return Boolean(this.media.loop);
  }

  /**
   * Set new media source
   * @param {object} input - The new source object (see docs)
   */
  set source(input) {
    source.change.call(this, input);
  }

  /**
   * Get current source
   */
  get source() {
    return this.media.currentSrc;
  }

  /**
   * Get a download URL (either source or custom)
   */
  get download() {
    const {
      download
    } = this.config.urls;
    return is.url(download) ? download : this.source;
  }

  /**
   * Set the download URL
   */
  set download(input) {
    if (!is.url(input)) {
      return;
    }
    this.config.urls.download = input;
    controls.setDownloadUrl.call(this);
  }

  /**
   * Set the poster image for a video
   * @param {string} input - the URL for the new poster image
   */
  set poster(input) {
    if (!this.isVideo) {
      this.debug.warn('Poster can only be set for video');
      return;
    }
    ui.setPoster.call(this, input, false).catch(() => {});
  }

  /**
   * Get the current poster image
   */
  get poster() {
    if (!this.isVideo) {
      return null;
    }
    return this.media.getAttribute('poster') || this.media.getAttribute('data-poster');
  }

  /**
   * Get the current aspect ratio in use
   */
  get ratio() {
    if (!this.isVideo) {
      return null;
    }
    const ratio = reduceAspectRatio(getAspectRatio.call(this));
    return is.array(ratio) ? ratio.join(':') : ratio;
  }

  /**
   * Set video aspect ratio
   */
  set ratio(input) {
    if (!this.isVideo) {
      this.debug.warn('Aspect ratio can only be set for video');
      return;
    }
    if (!is.string(input) || !validateAspectRatio(input)) {
      this.debug.error(`Invalid aspect ratio specified (${input})`);
      return;
    }
    this.config.ratio = reduceAspectRatio(input);
    setAspectRatio.call(this);
  }

  /**
   * Set the autoplay state
   * @param {boolean} input - Whether to autoplay or not
   */
  set autoplay(input) {
    this.config.autoplay = is.boolean(input) ? input : this.config.autoplay;
  }

  /**
   * Get the current autoplay state
   */
  get autoplay() {
    return Boolean(this.config.autoplay);
  }

  /**
   * Toggle captions
   * @param {boolean} input - Whether to enable captions
   */
  toggleCaptions(input) {
    captions.toggle.call(this, input, false);
  }

  /**
   * Set the caption track by index
   * @param {number} input - Caption index
   */
  set currentTrack(input) {
    captions.set.call(this, input, false);
    captions.setup.call(this);
  }

  /**
   * Get the current caption track index (-1 if disabled)
   */
  get currentTrack() {
    const {
      toggled,
      currentTrack
    } = this.captions;
    return toggled ? currentTrack : -1;
  }

  /**
   * Set the wanted language for captions
   * Since tracks can be added later it won't update the actual caption track until there is a matching track
   * @param {string} input - Two character ISO language code (e.g. EN, FR, PT, etc)
   */
  set language(input) {
    captions.setLanguage.call(this, input, false);
  }

  /**
   * Get the current track's language
   */
  get language() {
    return (captions.getCurrentTrack.call(this) || {}).language;
  }

  /**
   * Toggle picture-in-picture playback on WebKit/MacOS
   * TODO: update player with state, support, enabled
   * TODO: detect outside changes
   */
  set pip(input) {
    // Bail if no support
    if (!support.pip) {
      return;
    }

    // Toggle based on current state if not passed
    const toggle = is.boolean(input) ? input : !this.pip;

    // Toggle based on current state
    // Safari
    if (is.function(this.media.webkitSetPresentationMode)) {
      this.media.webkitSetPresentationMode(toggle ? pip.active : pip.inactive);
    }

    // Chrome
    if (is.function(this.media.requestPictureInPicture)) {
      if (!this.pip && toggle) {
        this.media.requestPictureInPicture();
      } else if (this.pip && !toggle) {
        document.exitPictureInPicture();
      }
    }
  }

  /**
   * Get the current picture-in-picture state
   */
  get pip() {
    if (!support.pip) {
      return null;
    }

    // Safari
    if (!is.empty(this.media.webkitPresentationMode)) {
      return this.media.webkitPresentationMode === pip.active;
    }

    // Chrome
    return this.media === document.pictureInPictureElement;
  }

  /**
   * Sets the preview thumbnails for the current source
   */
  setPreviewThumbnails(thumbnailSource) {
    if (this.previewThumbnails && this.previewThumbnails.loaded) {
      this.previewThumbnails.destroy();
      this.previewThumbnails = null;
    }
    Object.assign(this.config.previewThumbnails, thumbnailSource);

    // Create new instance if it is still enabled
    if (this.config.previewThumbnails.enabled) {
      this.previewThumbnails = new PreviewThumbnails(this);
    }
  }
  /**
   * Check for support
   * @param {string} type - Player type (audio/video)
   * @param {string} provider - Provider (html5/youtube/vimeo)
   */
  static supported(type, provider) {
    return support.check(type, provider);
  }

  /**
   * Load an SVG sprite into the page
   * @param {string} url - URL for the SVG sprite
   * @param {string} [id] - Unique ID
   */
  static loadSprite(url, id) {
    return loadSprite(url, id);
  }

  /**
   * Setup multiple instances
   * @param {*} selector
   * @param {object} options
   */
  static setup(selector, options = {}) {
    let targets = null;
    if (is.string(selector)) {
      targets = Array.from(document.querySelectorAll(selector));
    } else if (is.nodeList(selector)) {
      targets = Array.from(selector);
    } else if (is.array(selector)) {
      targets = selector.filter(is.element);
    }
    if (is.empty(targets)) {
      return null;
    }
    return targets.map(t => new Plyr(t, options));
  }
}
Plyr.defaults = cloneDeep(defaults);


//# sourceMappingURL=plyr.js.map

;// ./src/components/W_ArticlePage.jsx
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


function getArticleIdFromUrl() {
  return window.location.pathname.split("/").pop().replace(".html", "");
}
function getFixedPath(src) {
  return String(src).replace("./images/", "../../images/");
}
function splitContentIntoSections(content) {
  var sections = [];
  var currentSection = null;
  content.forEach(function (block) {
    if (block.type === "h2") {
      currentSection = {
        title: block.text,
        paragraphs: [],
        notes: []
      };
      sections.push(currentSection);
      return;
    }
    if (!currentSection) {
      currentSection = {
        title: "",
        paragraphs: [],
        notes: []
      };
      sections.push(currentSection);
    }
    if (block.type === "p") {
      currentSection.paragraphs.push(block.text);
    }
    if (block.type === "note") {
      currentSection.notes.push(block.text);
    }
  });
  return sections;
}
function getMediaItems(article) {
  var images = article.media.images.map(function (src) {
    return {
      type: "image",
      src: src
    };
  });
  var videos = article.media.videos.map(function (src) {
    return {
      type: "video",
      src: src
    };
  });
  return [].concat(_toConsumableArray(images), _toConsumableArray(videos));
}
function shouldRenderMediaFirst(articleOrder, sectionIndex) {
  var isEvenArticle = articleOrder % 2 === 0;
  var isEvenSection = sectionIndex % 2 === 0;
  return isEvenArticle ? isEvenSection : !isEvenSection;
}
function M_ArticleHead(_ref) {
  var article = _ref.article;
  return /*#__PURE__*/react.createElement("section", {
    className: "M_ArticleHead"
  }, /*#__PURE__*/react.createElement("div", {
    className: "A_H2"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "hd Q_Header2Text",
    "data-text": article.h1
  }, article.h1)), /*#__PURE__*/react.createElement("div", {
    className: "W_Tags"
  }, article.tags.map(function (tag, index) {
    return /*#__PURE__*/react.createElement("button", {
      className: "A_FilterTag Filter-".concat(index + 1),
      key: tag
    }, /*#__PURE__*/react.createElement("span", {
      className: "Q_FilterText"
    }, tag));
  })));
}
function fixHangingPrepositions(text) {
  return String(text).replace(/(^|\s)(в|во|на|за|к|ко|с|со|о|об|от|до|у|и|а|но|по|из|не|же|ли|бы)\s+/gi, "$1$2\xA0");
}
function M_ArticleText(_ref2) {
  var section = _ref2.section;
  var fixedTitle = fixHangingPrepositions(section.title);
  return /*#__PURE__*/react.createElement("div", {
    className: "M_ArticleText"
  }, section.title && /*#__PURE__*/react.createElement("div", {
    className: "A_H4"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "hd Q_Header4Text",
    "data-text": fixedTitle
  }, fixedTitle)), section.paragraphs.map(function (paragraph, index) {
    return /*#__PURE__*/react.createElement("p", {
      className: "A_ArticleTextBlock",
      key: index
    }, paragraph);
  }));
}
function A_ArticleImage(_ref3) {
  var src = _ref3.src;
  return /*#__PURE__*/react.createElement("div", {
    className: "A_Image"
  }, /*#__PURE__*/react.createElement("div", {
    className: "toned Q_ImageContent"
  }, /*#__PURE__*/react.createElement("img", {
    src: getFixedPath(src),
    className: "Q_ImageSelf",
    alt: "article image"
  })), /*#__PURE__*/react.createElement("span", {
    className: "Q_ImageHoverFrame",
    "aria-hidden": "true"
  }));
}


function A_ArticleVideo(_ref4) {
  var src = _ref4.src;
  var videoRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    if (videoRef.current) {
      new Plyr(videoRef.current, {
        controls: ["play-large", "play", "progress", "mute", "fullscreen"]
      });
    }
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "A_Video"
  }, /*#__PURE__*/react.createElement("video", {
    ref: videoRef,
    className: "Q_ArticleVideo",
    src: getFixedPath(src),
    controls: true,
    loop: true,
    playsInline: true
  }));
}
function A_ArticleMedia(_ref5) {
  var media = _ref5.media;
  if (!media) return null;
  if (media.type === "video") {
    return /*#__PURE__*/react.createElement(A_ArticleVideo, {
      src: media.src
    });
  }
  return /*#__PURE__*/react.createElement(A_ArticleImage, {
    src: media.src
  });
}
function A_Interrupt(_ref6) {
  var text = _ref6.text;
  return /*#__PURE__*/react.createElement("div", {
    className: "A_Interrupt"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "Q_Header3Text"
  }, text));
}
function O_ArticleSection(_ref7) {
  var article = _ref7.article,
    section = _ref7.section,
    media = _ref7.media,
    sectionIndex = _ref7.sectionIndex;
  var mediaFirst = shouldRenderMediaFirst(article.order, sectionIndex);
  var textBlock = /*#__PURE__*/react.createElement(M_ArticleText, {
    section: section
  });
  var mediaBlock = /*#__PURE__*/react.createElement(A_ArticleMedia, {
    media: media
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("section", {
    className: "O_ArticleSect"
  }, mediaFirst ? /*#__PURE__*/react.createElement(react.Fragment, null, mediaBlock, textBlock) : /*#__PURE__*/react.createElement(react.Fragment, null, textBlock, mediaBlock)), section.notes.map(function (note, index) {
    return /*#__PURE__*/react.createElement(A_Interrupt, {
      text: note,
      key: index
    });
  }));
}
function W_MainButtons(_ref8) {
  var previousArticle = _ref8.previousArticle,
    nextArticle = _ref8.nextArticle;
  return /*#__PURE__*/react.createElement("div", {
    className: "W_MainButtons"
  }, previousArticle && /*#__PURE__*/react.createElement("a", {
    href: "./".concat(previousArticle.id, ".html")
  }, /*#__PURE__*/react.createElement("button", {
    className: "A_Button"
  }, "\u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F")), /*#__PURE__*/react.createElement("a", {
    href: "../articles.html"
  }, /*#__PURE__*/react.createElement("button", {
    className: "A_Button"
  }, "\u043D\u0430\u0437\u0430\u0434 \u043A \u0441\u0442\u0430\u0442\u044C\u044F\u043C!")), nextArticle && /*#__PURE__*/react.createElement("a", {
    href: "./".concat(nextArticle.id, ".html")
  }, /*#__PURE__*/react.createElement("button", {
    className: "A_Button"
  }, "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F")));
}
function W_ArticlePage() {
  var articleId = getArticleIdFromUrl();
  var article = articles_namespaceObject.find(function (item) {
    return item.id === articleId;
  });
  if (!article) {
    return /*#__PURE__*/react.createElement("p", {
      className: "A_ArticleTextBlock"
    }, "\u0421\u0442\u0430\u0442\u044C\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430");
  }
  document.title = article.title || article.h1 || "ME.ME";
  var sections = splitContentIntoSections(article.content);
  var mediaItems = getMediaItems(article);
  var fallbackMedia = {
    type: "image",
    src: article.cover
  };
  var articleIndex = articles_namespaceObject.findIndex(function (item) {
    return item.id === article.id;
  });
  var previousArticle = articles_namespaceObject[articleIndex - 1];
  var nextArticle = articles_namespaceObject[articleIndex + 1];
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(M_ArticleHead, {
    article: article
  }), sections.map(function (section, index) {
    return /*#__PURE__*/react.createElement(O_ArticleSection, {
      article: article,
      section: section,
      media: mediaItems.length ? mediaItems[index % mediaItems.length] : fallbackMedia,
      sectionIndex: index,
      key: "".concat(article.id, "-section-").concat(index)
    });
  }), /*#__PURE__*/react.createElement(W_MainButtons, {
    previousArticle: previousArticle,
    nextArticle: nextArticle
  }));
}
;// ./src/javascripts/typographer.js
// обводка на типографике

function applyOutlineText() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  root.querySelectorAll(".txt, .hd, .nv, .A_HeaderPart").forEach(function (el) {
    el.setAttribute("data-text", el.textContent.trim());
  });
}

// типограф

function applyTypographer() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var paragraphs = root.querySelectorAll("p");
  paragraphs.forEach(function (paragraph) {
    paragraph.childNodes.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = typographText(node.textContent);
      }
    });
  });
}
function typographText(text) {
  return String(text || "").replace(/&nbsp;/g, " ").replace(/\u00A0/g, " ").replace(/\s-\s/g, " — ").replace(/([^\s])\s+—\s+/g, "$1\xA0\u2014 ").replace(/(^|[\s(«"„“])((?:(?:в|к|с|у|о|а|и|но|да|во|ко|со|об|от|до|за|из|по|на|над|под|при|про|без|для|не|ни|же|ли|бы|то|что|как|это)\s+)+)(?=[а-яёa-z0-9])/gi, function (match, before, chain) {
    return before + chain.trim().replace(/\s+/g, "\xA0") + "\xA0";
  }).replace(/(—\s+)((?:(?:это|то|не|и|а|но|как|что)\s+)+)(?=[а-яёa-z0-9])/gi, function (match, dash, chain) {
    return dash + chain.trim().replace(/\s+/g, "\xA0") + "\xA0";
  });
}
;// ./src/javascripts/article_content.js




document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".W_ArticleContent");
  if (!container) return;
  var root = (0,client.createRoot)(container);
  root.render(/*#__PURE__*/react.createElement(W_ArticlePage, null));
  requestAnimationFrame(function () {
    applyTypographer();
    applyOutlineText();
    setTimeout(function () {
      applyTypographer();
      applyOutlineText();
    }, 100);
  });
});
/******/ })()
;