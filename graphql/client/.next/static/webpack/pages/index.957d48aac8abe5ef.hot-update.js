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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar findTargetIndex = function(pages, id) {\n    var pageIndex = data.pages.findIndex(function(param) {\n        var messages = param.messages;\n        var msgIndex = messages.findIndex(function(msg) {\n            return msg.id === id;\n        });\n        if (msgIndex > -1) {\n            return true;\n        }\n        return false;\n    });\n    return {\n        pageIndex: pageIndex,\n        msgIndex: msgIndex\n    };\n};\nvar MsgList = function(param1) {\n    var smsgs = param1.smsgs, users = param1.users;\n    var _this1 = _this;\n    _s();\n    var client = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var userId = query.userId || query.userid || \"\";\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            messages: smsgs\n        }\n    ]), msgs = ref6[0], setMsgs = ref6[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(fetchMoreEl);\n    var ref2 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(param) {\n        var text = param.text;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.CREATE_MESSAGE, {\n            text: text,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var createMessage = param.createMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                return {\n                    pageParam: old.pageParam,\n                    pages: [\n                        {\n                            messages: [\n                                createMessage\n                            ].concat(_toConsumableArray(old.pages[0].messages))\n                        }, \n                    ].concat(_toConsumableArray(old.pages.slice(1)))\n                };\n            });\n        }\n    }), onCreate = ref2.mutate;\n    var ref3 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(param) {\n        var text = param.text, id = param.id;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.UPDATE_MESSAGE, {\n            text: text,\n            id: id,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var updateMessage = param.updateMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                var ref = findTargetIndex(old.pages, updateMessage.id), pageIndex = ref.pageIndex, msgIndex = ref.msgIndex;\n                if (pageIndex < 0 || msgIndex < 0) return old;\n                var newMsgs = _toConsumableArray(old.messages);\n                newMsgs.splice(targetIndex, 1, updateMessage);\n                return {\n                    messages: newMsgs\n                };\n            });\n            doneEdit();\n        }\n    }), onUpdate = ref3.mutate;\n    var ref4 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(id) {\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.DELETE_MESSAGE, {\n            id: id,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var deletedId = param.deleteMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                var targetIndex = old.messages.findIndex(function(msg) {\n                    return msg.id === deletedId;\n                });\n                if (targetIndex < 0) return old;\n                var newMsgs = _toConsumableArray(old.messages);\n                newMsgs.splice(targetIndex, 1);\n                return {\n                    messages: newMsgs\n                };\n            });\n        }\n    }), onDelete = ref4.mutate;\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var ref5 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(param) {\n        var _pageParam = param.pageParam, pageParam = _pageParam === void 0 ? \"\" : _pageParam;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.GET_MESSAGES, {\n            cursor: pageParam\n        });\n    }, {\n        getNextPageParam: function(param) {\n            var messages = param.messages;\n            var ref;\n            return (ref = messages[messages.length - 1]) === null || ref === void 0 ? void 0 : ref.id;\n        }\n    }), data = ref5.data, error = ref5.error, isError = ref5.isError, fetchNextPage = ref5.fetchNextPage, hasNextPage = ref5.hasNextPage;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!(data === null || data === void 0 ? void 0 : data.pages)) return;\n        console.log(\"messages changes\");\n        // const mergedMsgs = data.pages.flatMap((d) => d.messages);\n        setMsgs(data.pages);\n    }, [\n        data === null || data === void 0 ? void 0 : data.pages\n    ]);\n    if (isError) {\n        console.error(error);\n        return null;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (intersecting && hasNextPage) fetchNextPage();\n    }, [\n        intersecting,\n        hasNextPage\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\great\\\\Documents\\\\React-Study\\\\graphql\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 120,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(param) {\n                    var messages = param.messages;\n                    return messages.map(function(x1) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, x1, {\n                            onUpdate: onUpdate,\n                            onDelete: function() {\n                                return onDelete(x1.id);\n                            },\n                            startEdit: function() {\n                                return setEditingId(x1.id);\n                            },\n                            isEditing: editingId === x1.id,\n                            myId: userId,\n                            user: users.find(function(x) {\n                                return userId === x.id;\n                            })\n                        }), x1.id, false, {\n                            fileName: \"C:\\\\Users\\\\great\\\\Documents\\\\React-Study\\\\graphql\\\\client\\\\components\\\\MsgList.js\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, _this1);\n                    });\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\great\\\\Documents\\\\React-Study\\\\graphql\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\great\\\\Documents\\\\React-Study\\\\graphql\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"v59O5Nd633dgTvet1ppLlCR6hzA=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztHQWxIS1gsT0FBTzs7UUFDSW5CLHVEQUFjO1FBQ1hILGtEQUFTO1FBS05ZLGdFQUFpQjtRQUVUWCxvREFBVztRQWlCWEEsb0RBQVc7UUFtQlhBLG9EQUFXO1FBbUJxQkMseURBQWdCOzs7S0FoRXpFb0IsT0FBTztBQW9IYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VJbmZpbml0ZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5pbXBvcnQgeyBRdWVyeUtleXMsIGZldGNoZXIgfSBmcm9tIFwiLi4vcXVlcnlDbGllbnRcIjtcclxuaW1wb3J0IHtcclxuICBDUkVBVEVfTUVTU0FHRSxcclxuICBHRVRfTUVTU0FHRVMsXHJcbiAgVVBEQVRFX01FU1NBR0UsXHJcbiAgREVMRVRFX01FU1NBR0UsXHJcbn0gZnJvbSBcIi4uL2dyYXBocWwvbWVzc2FnZVwiO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsXCI7XHJcblxyXG5jb25zdCBmaW5kVGFyZ2V0SW5kZXggPSAocGFnZXMsIGlkKSA9PiB7XHJcbiAgY29uc3QgcGFnZUluZGV4ID0gZGF0YS5wYWdlcy5maW5kSW5kZXgoKHsgbWVzc2FnZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgbXNnSW5kZXggPSBtZXNzYWdlcy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcbiAgICBpZiAobXNnSW5kZXggPiAtMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuICByZXR1cm4geyBwYWdlSW5kZXgsIG1zZ0luZGV4IH07XHJcbn07XHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKHsgc21zZ3MsIHVzZXJzIH0pID0+IHtcclxuICBjb25zdCBjbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgXCJcIjtcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbeyBtZXNzYWdlczogc21zZ3MgfV0pO1xyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7XHJcblxyXG4gIGNvbnN0IHsgbXV0YXRlOiBvbkNyZWF0ZSB9ID0gdXNlTXV0YXRpb24oXHJcbiAgICAoeyB0ZXh0IH0pID0+IGZldGNoZXIoQ1JFQVRFX01FU1NBR0UsIHsgdGV4dCwgdXNlcklkIH0pLFxyXG4gICAge1xyXG4gICAgICBvblN1Y2Nlc3M6ICh7IGNyZWF0ZU1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5zZXRRdWVyeURhdGEoUXVlcnlLZXlzLk1FU1NBR0VTLCAob2xkKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYWdlUGFyYW06IG9sZC5wYWdlUGFyYW0sXHJcbiAgICAgICAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgICAgICAgeyBtZXNzYWdlczogW2NyZWF0ZU1lc3NhZ2UsIC4uLm9sZC5wYWdlc1swXS5tZXNzYWdlc10gfSxcclxuICAgICAgICAgICAgICAuLi5vbGQucGFnZXMuc2xpY2UoMSksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgbXV0YXRlOiBvblVwZGF0ZSB9ID0gdXNlTXV0YXRpb24oXHJcbiAgICAoeyB0ZXh0LCBpZCB9KSA9PiBmZXRjaGVyKFVQREFURV9NRVNTQUdFLCB7IHRleHQsIGlkLCB1c2VySWQgfSksXHJcbiAgICB7XHJcbiAgICAgIG9uU3VjY2VzczogKHsgdXBkYXRlTWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgcGFnZUluZGV4LCBtc2dJbmRleCB9ID0gZmluZFRhcmdldEluZGV4KFxyXG4gICAgICAgICAgICBvbGQucGFnZXMsXHJcbiAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UuaWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAocGFnZUluZGV4IDwgMCB8fCBtc2dJbmRleCA8IDApIHJldHVybiBvbGQ7XHJcbiAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm9sZC5tZXNzYWdlc107XHJcbiAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgdXBkYXRlTWVzc2FnZSk7XHJcbiAgICAgICAgICByZXR1cm4geyBtZXNzYWdlczogbmV3TXNncyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvbmVFZGl0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBtdXRhdGU6IG9uRGVsZXRlIH0gPSB1c2VNdXRhdGlvbihcclxuICAgIChpZCkgPT4gZmV0Y2hlcihERUxFVEVfTUVTU0FHRSwgeyBpZCwgdXNlcklkIH0pLFxyXG4gICAge1xyXG4gICAgICBvblN1Y2Nlc3M6ICh7IGRlbGV0ZU1lc3NhZ2U6IGRlbGV0ZWRJZCB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gb2xkLm1lc3NhZ2VzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKG1zZykgPT4gbXNnLmlkID09PSBkZWxldGVkSWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gb2xkO1xyXG4gICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5vbGQubWVzc2FnZXNdO1xyXG4gICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZXM6IG5ld01zZ3MgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNFcnJvciwgZmV0Y2hOZXh0UGFnZSwgaGFzTmV4dFBhZ2UgfSA9IHVzZUluZmluaXRlUXVlcnkoXHJcbiAgICBRdWVyeUtleXMuTUVTU0FHRVMsXHJcbiAgICAoeyBwYWdlUGFyYW0gPSBcIlwiIH0pID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoZXIoR0VUX01FU1NBR0VTLCB7IGN1cnNvcjogcGFnZVBhcmFtIH0pO1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZ2V0TmV4dFBhZ2VQYXJhbTogKHsgbWVzc2FnZXMgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlc1ttZXNzYWdlcy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YT8ucGFnZXMpIHJldHVybjtcclxuICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZXMgY2hhbmdlc1wiKTtcclxuICAgIC8vIGNvbnN0IG1lcmdlZE1zZ3MgPSBkYXRhLnBhZ2VzLmZsYXRNYXAoKGQpID0+IGQubWVzc2FnZXMpO1xyXG4gICAgc2V0TXNncyhkYXRhLnBhZ2VzKTtcclxuICB9LCBbZGF0YT8ucGFnZXNdKTtcclxuXHJcbiAgaWYgKGlzRXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0UGFnZSkgZmV0Y2hOZXh0UGFnZSgpO1xyXG4gIH0sIFtpbnRlcnNlY3RpbmcsIGhhc05leHRQYWdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAge21zZ3MubWFwKCh7IG1lc3NhZ2VzIH0pID0+XHJcbiAgICAgICAgICBtZXNzYWdlcy5tYXAoKHgpID0+IChcclxuICAgICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgICAgey4uLnh9XHJcbiAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAgICAgdXNlcj17dXNlcnMuZmluZCgoeCkgPT4gdXNlcklkID09PSB4LmlkKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfT48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZVJvdXRlciIsInVzZU11dGF0aW9uIiwidXNlSW5maW5pdGVRdWVyeSIsInVzZVF1ZXJ5Q2xpZW50IiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiUXVlcnlLZXlzIiwiZmV0Y2hlciIsIkNSRUFURV9NRVNTQUdFIiwiR0VUX01FU1NBR0VTIiwiVVBEQVRFX01FU1NBR0UiLCJERUxFVEVfTUVTU0FHRSIsInVzZUluZmluaXRlU2Nyb2xsIiwiZmluZFRhcmdldEluZGV4IiwiaWQiLCJwYWdlcyIsInBhZ2VJbmRleCIsImRhdGEiLCJmaW5kSW5kZXgiLCJtZXNzYWdlcyIsIm1zZ0luZGV4IiwibXNnIiwiTXNnTGlzdCIsInNtc2dzIiwidXNlcnMiLCJjbGllbnQiLCJxdWVyeSIsInVzZXJJZCIsInVzZXJpZCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwiZmV0Y2hNb3JlRWwiLCJpbnRlcnNlY3RpbmciLCJ0ZXh0Iiwib25TdWNjZXNzIiwiY3JlYXRlTWVzc2FnZSIsInNldFF1ZXJ5RGF0YSIsIk1FU1NBR0VTIiwib2xkIiwicGFnZVBhcmFtIiwic2xpY2UiLCJvbkNyZWF0ZSIsIm11dGF0ZSIsInVwZGF0ZU1lc3NhZ2UiLCJuZXdNc2dzIiwic3BsaWNlIiwidGFyZ2V0SW5kZXgiLCJkb25lRWRpdCIsIm9uVXBkYXRlIiwiZGVsZXRlZElkIiwiZGVsZXRlTWVzc2FnZSIsIm9uRGVsZXRlIiwiY3Vyc29yIiwiZ2V0TmV4dFBhZ2VQYXJhbSIsImxlbmd0aCIsImVycm9yIiwiaXNFcnJvciIsImZldGNoTmV4dFBhZ2UiLCJoYXNOZXh0UGFnZSIsImNvbnNvbGUiLCJsb2ciLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsIngiLCJzdGFydEVkaXQiLCJpc0VkaXRpbmciLCJteUlkIiwidXNlciIsImZpbmQiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});