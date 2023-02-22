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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import useInfiniteScroll from \"../hooks/useInfiniteScroll\";\nvar MsgList = function(param1) {\n    var smsgs = param1.smsgs, users = param1.users;\n    var _this1 = _this;\n    _s();\n    var client = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var userId = query.userId || query.userid || \"\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(smsgs), msgs = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    // const [hasNext, setHasNext] = useState(true);\n    // const fetchMoreEl = useRef(null);\n    // const intersecting = useInfiniteScroll(fetchMoreEl);\n    var ref2 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(param) {\n        var text = param.text;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.CREATE_MESSAGE, {\n            text: text,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var createMessage = param.createMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                return {\n                    messages: [\n                        createMessage\n                    ].concat(_toConsumableArray(old.messages))\n                };\n            });\n        }\n    }), onCreate = ref2.mutate;\n    var ref3 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(param) {\n        var text = param.text, id = param.id;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.UPDATE_MESSAGE, {\n            text: text,\n            id: id,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var updateMessage = param.updateMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                var targetIndex = old.messages.findIndex(function(msg) {\n                    return msg.id === updateMessage.id;\n                });\n                if (targetIndex < 0) return old;\n                var newMsgs = _toConsumableArray(old.messages);\n                newMsgs.splice(targetIndex, 1, updateMessage);\n                return {\n                    messages: newMsgs\n                };\n            });\n            doneEdit();\n        }\n    }), onUpdate = ref3.mutate;\n    var ref4 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(id) {\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.DELETE_MESSAGE, {\n            id: id,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var deletedId = param.deleteMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                var targetIndex = old.messages.findIndex(function(msg) {\n                    return msg.id === deletedId;\n                });\n                if (targetIndex < 0) return old;\n                var newMsgs = _toConsumableArray(old.messages);\n                newMsgs.splice(targetIndex, 1);\n                return {\n                    messages: newMsgs\n                };\n            });\n        }\n    }), onDelete = ref4.mutate;\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var ref5 = useInfiniteQuery(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(param) {\n        var queryKey = param.queryKey, pageParam = param.pageParam;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.GET_MESSAGES);\n    }), data = ref5.data, error = ref5.error, isError = ref5.isError;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!(data === null || data === void 0 ? void 0 : data.messages)) return;\n        console.log(\"messages changes\");\n        setMsgs(data.messages);\n    }, [\n        data === null || data === void 0 ? void 0 : data.messages\n    ]);\n    if (isError) {\n        console.error(error);\n        return null;\n    }\n    // useEffect(() => {\n    //   if (intersecting && hasNext) getMessages();\n    // }, [intersecting]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\great\\\\Documents\\\\React-Study\\\\graphql\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 99,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(x1) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, x1, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x1.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x1.id);\n                        },\n                        isEditing: editingId === x1.id,\n                        myId: userId,\n                        user: users.find(function(x) {\n                            return userId === x.id;\n                        })\n                    }), x1.id, false, {\n                        fileName: \"C:\\\\Users\\\\great\\\\Documents\\\\React-Study\\\\graphql\\\\client\\\\components\\\\MsgList.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\great\\\\Documents\\\\React-Study\\\\graphql\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"B8Viq3NxE385f9jEejPMwIrTDk4=\", true, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sb0JBRUZtRCxFQUFDO3dCQUNMZixRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCRyxRQUFRLEVBQUUsUUFBUTs0QkFBRkEsTUFBTSxDQUFOQSxRQUFRLENBQUNZLEVBQUMsQ0FBQ3ZCLEVBQUU7O3dCQUM3QndCLFNBQVMsRUFBRSxRQUFROzRCQUFGbEMsTUFBTSxDQUFOQSxZQUFZLENBQUNpQyxFQUFDLENBQUN2QixFQUFFOzt3QkFDbEN5QixTQUFTLEVBQUVwQyxTQUFTLEtBQUtrQyxFQUFDLENBQUN2QixFQUFFO3dCQUM3QjBCLElBQUksRUFBRXpDLE1BQU07d0JBQ1owQyxJQUFJLEVBQUU3QyxLQUFLLENBQUM4QyxJQUFJLENBQUMsUUFBUSxDQUFQTCxDQUFDOzRCQUFLdEMsTUFBTSxDQUFOQSxNQUFNLEtBQUtzQyxDQUFDLENBQUN2QixFQUFFOzt3QkFQbEN1QixFQUFDLENBQUN2QixFQUFFOzs7Ozs7Ozs7Ozs7O0FBY3JCLENBQUM7R0F0R0twQixPQUFPOztRQUNJVCx1REFBYztRQUNYSCxrREFBUztRQVFFQyxvREFBVztRQWFYQSxvREFBVztRQWtCWEEsb0RBQVc7OztLQXpDcENXLE9BQU87QUF3R2IsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcbmltcG9ydCB7IFF1ZXJ5S2V5cywgZmV0Y2hlciB9IGZyb20gXCIuLi9xdWVyeUNsaWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIENSRUFURV9NRVNTQUdFLFxyXG4gIEdFVF9NRVNTQUdFUyxcclxuICBVUERBVEVfTUVTU0FHRSxcclxuICBERUxFVEVfTUVTU0FHRSxcclxufSBmcm9tIFwiLi4vZ3JhcGhxbC9tZXNzYWdlXCI7XHJcbi8vIGltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tIFwiLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGxcIjtcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4ge1xyXG4gIGNvbnN0IGNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdXNlcklkID0gcXVlcnkudXNlcklkIHx8IHF1ZXJ5LnVzZXJpZCB8fCBcIlwiO1xyXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKHNtc2dzKTtcclxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy8gY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgLy8gY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgLy8gY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpO1xyXG5cclxuICBjb25zdCB7IG11dGF0ZTogb25DcmVhdGUgfSA9IHVzZU11dGF0aW9uKFxyXG4gICAgKHsgdGV4dCB9KSA9PiBmZXRjaGVyKENSRUFURV9NRVNTQUdFLCB7IHRleHQsIHVzZXJJZCB9KSxcclxuICAgIHtcclxuICAgICAgb25TdWNjZXNzOiAoeyBjcmVhdGVNZXNzYWdlIH0pID0+IHtcclxuICAgICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgKG9sZCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWVzc2FnZXM6IFtjcmVhdGVNZXNzYWdlLCAuLi5vbGQubWVzc2FnZXNdLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCB7IG11dGF0ZTogb25VcGRhdGUgfSA9IHVzZU11dGF0aW9uKFxyXG4gICAgKHsgdGV4dCwgaWQgfSkgPT4gZmV0Y2hlcihVUERBVEVfTUVTU0FHRSwgeyB0ZXh0LCBpZCwgdXNlcklkIH0pLFxyXG4gICAge1xyXG4gICAgICBvblN1Y2Nlc3M6ICh7IHVwZGF0ZU1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5zZXRRdWVyeURhdGEoUXVlcnlLZXlzLk1FU1NBR0VTLCAob2xkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG9sZC5tZXNzYWdlcy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIChtc2cpID0+IG1zZy5pZCA9PT0gdXBkYXRlTWVzc2FnZS5pZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBvbGQ7XHJcbiAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm9sZC5tZXNzYWdlc107XHJcbiAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgdXBkYXRlTWVzc2FnZSk7XHJcbiAgICAgICAgICByZXR1cm4geyBtZXNzYWdlczogbmV3TXNncyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvbmVFZGl0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBtdXRhdGU6IG9uRGVsZXRlIH0gPSB1c2VNdXRhdGlvbihcclxuICAgIChpZCkgPT4gZmV0Y2hlcihERUxFVEVfTUVTU0FHRSwgeyBpZCwgdXNlcklkIH0pLFxyXG4gICAge1xyXG4gICAgICBvblN1Y2Nlc3M6ICh7IGRlbGV0ZU1lc3NhZ2U6IGRlbGV0ZWRJZCB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gb2xkLm1lc3NhZ2VzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKG1zZykgPT4gbXNnLmlkID09PSBkZWxldGVkSWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gb2xkO1xyXG4gICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5vbGQubWVzc2FnZXNdO1xyXG4gICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZXM6IG5ld01zZ3MgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNFcnJvciB9ID0gdXNlSW5maW5pdGVRdWVyeShcclxuICAgIFF1ZXJ5S2V5cy5NRVNTQUdFUyxcclxuICAgICh7IHF1ZXJ5S2V5LCBwYWdlUGFyYW0gfSkgPT4ge1xyXG4gICAgICByZXR1cm4gZmV0Y2hlcihHRVRfTUVTU0FHRVMpO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRhdGE/Lm1lc3NhZ2VzKSByZXR1cm47XHJcbiAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VzIGNoYW5nZXNcIik7XHJcbiAgICBzZXRNc2dzKGRhdGEubWVzc2FnZXMpO1xyXG4gIH0sIFtkYXRhPy5tZXNzYWdlc10pO1xyXG5cclxuICBpZiAoaXNFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoaW50ZXJzZWN0aW5nICYmIGhhc05leHQpIGdldE1lc3NhZ2VzKCk7XHJcbiAgLy8gfSwgW2ludGVyc2VjdGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz59XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XHJcbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxyXG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgICB1c2VyPXt1c2Vycy5maW5kKCh4KSA9PiB1c2VySWQgPT09IHguaWQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgey8qIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0+PC9kaXY+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlUm91dGVyIiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsInVzZVF1ZXJ5Q2xpZW50IiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiUXVlcnlLZXlzIiwiZmV0Y2hlciIsIkNSRUFURV9NRVNTQUdFIiwiR0VUX01FU1NBR0VTIiwiVVBEQVRFX01FU1NBR0UiLCJERUxFVEVfTUVTU0FHRSIsIk1zZ0xpc3QiLCJzbXNncyIsInVzZXJzIiwiY2xpZW50IiwicXVlcnkiLCJ1c2VySWQiLCJ1c2VyaWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsInRleHQiLCJvblN1Y2Nlc3MiLCJjcmVhdGVNZXNzYWdlIiwic2V0UXVlcnlEYXRhIiwiTUVTU0FHRVMiLCJvbGQiLCJtZXNzYWdlcyIsIm9uQ3JlYXRlIiwibXV0YXRlIiwiaWQiLCJ1cGRhdGVNZXNzYWdlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvblVwZGF0ZSIsImRlbGV0ZWRJZCIsImRlbGV0ZU1lc3NhZ2UiLCJvbkRlbGV0ZSIsInVzZUluZmluaXRlUXVlcnkiLCJxdWVyeUtleSIsInBhZ2VQYXJhbSIsImRhdGEiLCJlcnJvciIsImlzRXJyb3IiLCJjb25zb2xlIiwibG9nIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsInVzZXIiLCJmaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});