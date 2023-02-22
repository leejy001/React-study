"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MsgList = function(param1) {\n    var smsgs = param1.smsgs, users = param1.users;\n    var _this1 = _this;\n    _s();\n    var client = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var userId = query.userId || query.userid || \"\";\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(smsgs), msgs = ref6[0], setMsgs = ref6[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(fetchMoreEl);\n    var ref2 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(param) {\n        var text = param.text;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.CREATE_MESSAGE, {\n            text: text,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var createMessage = param.createMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                return {\n                    messages: [\n                        createMessage\n                    ].concat(_toConsumableArray(old.messages))\n                };\n            });\n        }\n    }), onCreate = ref2.mutate;\n    var ref3 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(param) {\n        var text = param.text, id = param.id;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.UPDATE_MESSAGE, {\n            text: text,\n            id: id,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var updateMessage = param.updateMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                var targetIndex = old.messages.findIndex(function(msg) {\n                    return msg.id === updateMessage.id;\n                });\n                if (targetIndex < 0) return old;\n                var newMsgs = _toConsumableArray(old.messages);\n                newMsgs.splice(targetIndex, 1, updateMessage);\n                return {\n                    messages: newMsgs\n                };\n            });\n            doneEdit();\n        }\n    }), onUpdate = ref3.mutate;\n    var ref4 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(id) {\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.DELETE_MESSAGE, {\n            id: id,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var deletedId = param.deleteMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                var targetIndex = old.messages.findIndex(function(msg) {\n                    return msg.id === deletedId;\n                });\n                if (targetIndex < 0) return old;\n                var newMsgs = _toConsumableArray(old.messages);\n                newMsgs.splice(targetIndex, 1);\n                return {\n                    messages: newMsgs\n                };\n            });\n        }\n    }), onDelete = ref4.mutate;\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var ref5 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(param) {\n        var _pageParam = param.pageParam, pageParam = _pageParam === void 0 ? \"\" : _pageParam;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.GET_MESSAGES, {\n            cursor: pageParam\n        });\n    }, {\n        getNextPageParam: function(param) {\n            var messages = param.messages;\n            var ref;\n            return (ref = messages[messages.length - 1]) === null || ref === void 0 ? void 0 : ref.id;\n        }\n    }), data = ref5.data, error = ref5.error, isError = ref5.isError, fetchNextPage = ref5.fetchNextPage, hasNextPage = ref5.hasNextPage;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!(data === null || data === void 0 ? void 0 : data.messages)) return;\n        console.log(\"messages changes\");\n        setMsgs(data.messages);\n    }, [\n        data === null || data === void 0 ? void 0 : data.messages\n    ]);\n    if (isError) {\n        console.error(error);\n        return null;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (intersecting && hasNextPage) fetchNextPage();\n    }, [\n        intersecting,\n        hasNextPage\n    ]);\n    console.log(data);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\great\\\\Documents\\\\React-Study\\\\graphql\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 105,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(x1) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, x1, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x1.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x1.id);\n                        },\n                        isEditing: editingId === x1.id,\n                        myId: userId,\n                        user: users.find(function(x) {\n                            return userId === x.id;\n                        })\n                    }), x1.id, false, {\n                        fileName: \"C:\\\\Users\\\\great\\\\Documents\\\\React-Study\\\\graphql\\\\client\\\\components\\\\MsgList.js\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\great\\\\Documents\\\\React-Study\\\\graphql\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\great\\\\Documents\\\\React-Study\\\\graphql\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"6bZkLRmg9gl333OcETdIyAAoj/4=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSzJDLENBQUMsQ0FBQzFCLEVBQUU7O3dCQVBsQzBCLEVBQUMsQ0FBQzFCLEVBQUU7Ozs7Ozs7Ozs7O3dGQVdkZ0MsQ0FBRztnQkFBQ0MsR0FBRyxFQUFFNUMsV0FBVzs7Ozs7Ozs7QUFHM0IsQ0FBQztHQTVHS1gsT0FBTzs7UUFDSVYsdURBQWM7UUFDWEgsa0RBQVM7UUFLTlksZ0VBQWlCO1FBRVRYLG9EQUFXO1FBYVhBLG9EQUFXO1FBa0JYQSxvREFBVztRQW1CcUJDLHlEQUFnQjs7O0tBM0R6RVcsT0FBTztBQThHYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VJbmZpbml0ZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5pbXBvcnQgeyBRdWVyeUtleXMsIGZldGNoZXIgfSBmcm9tIFwiLi4vcXVlcnlDbGllbnRcIjtcclxuaW1wb3J0IHtcclxuICBDUkVBVEVfTUVTU0FHRSxcclxuICBHRVRfTUVTU0FHRVMsXHJcbiAgVVBEQVRFX01FU1NBR0UsXHJcbiAgREVMRVRFX01FU1NBR0UsXHJcbn0gZnJvbSBcIi4uL2dyYXBocWwvbWVzc2FnZVwiO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsXCI7XHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKHsgc21zZ3MsIHVzZXJzIH0pID0+IHtcclxuICBjb25zdCBjbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgXCJcIjtcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShzbXNncyk7XHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKTtcclxuXHJcbiAgY29uc3QgeyBtdXRhdGU6IG9uQ3JlYXRlIH0gPSB1c2VNdXRhdGlvbihcclxuICAgICh7IHRleHQgfSkgPT4gZmV0Y2hlcihDUkVBVEVfTUVTU0FHRSwgeyB0ZXh0LCB1c2VySWQgfSksXHJcbiAgICB7XHJcbiAgICAgIG9uU3VjY2VzczogKHsgY3JlYXRlTWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbY3JlYXRlTWVzc2FnZSwgLi4ub2xkLm1lc3NhZ2VzXSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBtdXRhdGU6IG9uVXBkYXRlIH0gPSB1c2VNdXRhdGlvbihcclxuICAgICh7IHRleHQsIGlkIH0pID0+IGZldGNoZXIoVVBEQVRFX01FU1NBR0UsIHsgdGV4dCwgaWQsIHVzZXJJZCB9KSxcclxuICAgIHtcclxuICAgICAgb25TdWNjZXNzOiAoeyB1cGRhdGVNZXNzYWdlIH0pID0+IHtcclxuICAgICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgKG9sZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBvbGQubWVzc2FnZXMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAobXNnKSA9PiBtc2cuaWQgPT09IHVwZGF0ZU1lc3NhZ2UuaWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gb2xkO1xyXG4gICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5vbGQubWVzc2FnZXNdO1xyXG4gICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHVwZGF0ZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZXM6IG5ld01zZ3MgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb25lRWRpdCgpO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgbXV0YXRlOiBvbkRlbGV0ZSB9ID0gdXNlTXV0YXRpb24oXHJcbiAgICAoaWQpID0+IGZldGNoZXIoREVMRVRFX01FU1NBR0UsIHsgaWQsIHVzZXJJZCB9KSxcclxuICAgIHtcclxuICAgICAgb25TdWNjZXNzOiAoeyBkZWxldGVNZXNzYWdlOiBkZWxldGVkSWQgfSkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5zZXRRdWVyeURhdGEoUXVlcnlLZXlzLk1FU1NBR0VTLCAob2xkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG9sZC5tZXNzYWdlcy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIChtc2cpID0+IG1zZy5pZCA9PT0gZGVsZXRlZElkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG9sZDtcclxuICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ub2xkLm1lc3NhZ2VzXTtcclxuICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2VzOiBuZXdNc2dzIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzRXJyb3IsIGZldGNoTmV4dFBhZ2UsIGhhc05leHRQYWdlIH0gPSB1c2VJbmZpbml0ZVF1ZXJ5KFxyXG4gICAgUXVlcnlLZXlzLk1FU1NBR0VTLFxyXG4gICAgKHsgcGFnZVBhcmFtID0gXCJcIiB9KSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaGVyKEdFVF9NRVNTQUdFUywgeyBjdXJzb3I6IHBhZ2VQYXJhbSB9KTtcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGdldE5leHRQYWdlUGFyYW06ICh7IG1lc3NhZ2VzIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZXNbbWVzc2FnZXMubGVuZ3RoIC0gMV0/LmlkO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRhdGE/Lm1lc3NhZ2VzKSByZXR1cm47XHJcbiAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VzIGNoYW5nZXNcIik7XHJcbiAgICBzZXRNc2dzKGRhdGEubWVzc2FnZXMpO1xyXG4gIH0sIFtkYXRhPy5tZXNzYWdlc10pO1xyXG5cclxuICBpZiAoaXNFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW50ZXJzZWN0aW5nICYmIGhhc05leHRQYWdlKSBmZXRjaE5leHRQYWdlKCk7XHJcbiAgfSwgW2ludGVyc2VjdGluZywgaGFzTmV4dFBhZ2VdKTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJzLmZpbmQoKHgpID0+IHVzZXJJZCA9PT0geC5pZCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9PjwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlUm91dGVyIiwidXNlTXV0YXRpb24iLCJ1c2VJbmZpbml0ZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJNc2dJdGVtIiwiTXNnSW5wdXQiLCJRdWVyeUtleXMiLCJmZXRjaGVyIiwiQ1JFQVRFX01FU1NBR0UiLCJHRVRfTUVTU0FHRVMiLCJVUERBVEVfTUVTU0FHRSIsIkRFTEVURV9NRVNTQUdFIiwidXNlSW5maW5pdGVTY3JvbGwiLCJNc2dMaXN0Iiwic21zZ3MiLCJ1c2VycyIsImNsaWVudCIsInF1ZXJ5IiwidXNlcklkIiwidXNlcmlkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJmZXRjaE1vcmVFbCIsImludGVyc2VjdGluZyIsInRleHQiLCJvblN1Y2Nlc3MiLCJjcmVhdGVNZXNzYWdlIiwic2V0UXVlcnlEYXRhIiwiTUVTU0FHRVMiLCJvbGQiLCJtZXNzYWdlcyIsIm9uQ3JlYXRlIiwibXV0YXRlIiwiaWQiLCJ1cGRhdGVNZXNzYWdlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvblVwZGF0ZSIsImRlbGV0ZWRJZCIsImRlbGV0ZU1lc3NhZ2UiLCJvbkRlbGV0ZSIsInBhZ2VQYXJhbSIsImN1cnNvciIsImdldE5leHRQYWdlUGFyYW0iLCJsZW5ndGgiLCJkYXRhIiwiZXJyb3IiLCJpc0Vycm9yIiwiZmV0Y2hOZXh0UGFnZSIsImhhc05leHRQYWdlIiwiY29uc29sZSIsImxvZyIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJ1c2VyIiwiZmluZCIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});