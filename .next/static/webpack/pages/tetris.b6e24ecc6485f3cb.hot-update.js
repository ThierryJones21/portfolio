"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tetris",{

/***/ "./pages/tetris.js":
/*!*************************!*\
  !*** ./pages/tetris.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n// pages/index.js\n\nvar _s = $RefreshSig$();\nvar ROWS = 20;\nvar COLS = 10;\nvar BLOCK_SIZE = 30;\nvar MOVE_DOWN_INTERVAL = 1000; // Adjust the interval based on your preference\nvar Tetris = function() {\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var context;\n    // Tetromino shapes\n    var tetrominoes = [\n        [\n            [\n                1,\n                1,\n                1,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                0\n            ],\n            [\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                0\n            ],\n            [\n                0,\n                0,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                0\n            ],\n            [\n                0,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                0,\n                0\n            ],\n            [\n                1,\n                1\n            ]\n        ],\n        [\n            [\n                0,\n                1,\n                1,\n                0\n            ],\n            [\n                1,\n                1\n            ]\n        ], \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), gameIsResetting = ref[0], setGameIsResetting = ref[1];\n    // Game state\n    var board = Array.from({\n        length: ROWS\n    }, function() {\n        return Array(COLS).fill(0);\n    });\n    var currentTetromino;\n    var currentPosition;\n    var lastTimestamp = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        context = canvasRef.current.getContext(\"2d\");\n        spawnTetromino();\n        gameLoop();\n    }, []);\n    var draw = function() {\n        context.clearRect(0, 0, context.canvas.width, context.canvas.height);\n        drawBoard();\n        drawTetromino();\n    };\n    var drawBoard = function() {\n        for(var row = 0; row < ROWS; row++){\n            for(var col = 0; col < COLS; col++){\n                if (board[row][col]) {\n                    drawBlock(col, row);\n                }\n            }\n        }\n    };\n    var drawTetromino = function() {\n        if (!currentTetromino) return;\n        currentTetromino.forEach(function(row, i) {\n            row.forEach(function(cell, j) {\n                if (cell) {\n                    drawBlock(currentPosition.x + j, currentPosition.y + i);\n                }\n            });\n        });\n    };\n    var drawBlock = function(x, y) {\n        context.fillStyle = \"blue\";\n        context.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);\n        context.strokeStyle = \"white\";\n        context.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);\n    };\n    var rotateTetromino = function() {\n        var rotatedTetromino = currentTetromino[0].map(function(_, i) {\n            return currentTetromino.map(function(row) {\n                return row[i];\n            });\n        });\n        // Reverse the order of rows to get the proper rotation\n        rotatedTetromino.forEach(function(row) {\n            return row.reverse();\n        });\n        if (!isCollision(rotatedTetromino, currentPosition)) {\n            currentTetromino = rotatedTetromino;\n        }\n    };\n    var moveDown = function() {\n        currentPosition.y++;\n        if (isCollision(currentTetromino, currentPosition)) {\n            currentPosition.y--;\n            mergeTetromino();\n            clearRows();\n            spawnTetromino();\n            if (isCollision(currentTetromino, currentPosition)) {\n                resetGame();\n                return; // Stop further execution after resetting the game\n            }\n        }\n        draw();\n        // Use requestAnimationFrame to call moveDown in the next frame\n        requestAnimationFrame(moveDown);\n    };\n    var moveLeft = function() {\n        currentPosition.x--;\n        if (isCollision(currentTetromino, currentPosition)) {\n            currentPosition.x++;\n        }\n        draw();\n    };\n    var moveRight = function() {\n        currentPosition.x++;\n        if (isCollision(currentTetromino, currentPosition)) {\n            currentPosition.x--;\n        }\n        draw();\n    };\n    var isCollision = function(tetromino, position) {\n        for(var i = 0; i < tetromino.length; i++){\n            for(var j = 0; j < tetromino[i].length; j++){\n                if (tetromino[i][j] && (board[position.y + i] && board[position.y + i][position.x + j]) !== 0) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    };\n    var mergeTetromino = function() {\n        currentTetromino.forEach(function(row, i) {\n            row.forEach(function(cell, j) {\n                if (cell) {\n                    board[currentPosition.y + i][currentPosition.x + j] = 1;\n                }\n            });\n        });\n    };\n    var clearRows = function() {\n        for(var row = ROWS - 1; row >= 0; row--){\n            if (board[row].every(function(cell) {\n                return cell;\n            })) {\n                board.splice(row, 1);\n                board.unshift(Array(COLS).fill(0));\n            }\n        }\n    };\n    var spawnTetromino = function() {\n        var randomIndex = Math.floor(Math.random() * tetrominoes.length);\n        currentTetromino = tetrominoes[randomIndex];\n        currentPosition = {\n            x: Math.floor(COLS / 2) - 1,\n            y: 0\n        };\n    };\n    var resetGame = function() {\n        setGameIsResetting(true);\n        board.forEach(function(row) {\n            return row.fill(0);\n        });\n        setGameIsResetting(false);\n        spawnTetromino();\n    };\n    var gameLoop = function(timestamp) {\n        if (!gameIsResetting) {\n            moveDown(timestamp);\n            requestAnimationFrame(gameLoop);\n        }\n    };\n    var handleKeyDown = function(event) {\n        switch(event.code){\n            case \"ArrowUp\":\n                rotateTetromino();\n                break;\n            case \"ArrowDown\":\n                moveDown(performance.now());\n                break;\n            case \"ArrowLeft\":\n                moveLeft();\n                break;\n            case \"ArrowRight\":\n                moveRight();\n                break;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Add event listener for keydown\n        window.addEventListener(\"keydown\", handleKeyDown);\n        // Cleanup event listener on component unmount\n        return function() {\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Tetris\"\n            }, void 0, false, {\n                fileName: \"/Users/thierryjones/Documents/portfolio/pages/tetris.js\",\n                lineNumber: 205,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                width: COLS * BLOCK_SIZE,\n                height: ROWS * BLOCK_SIZE,\n                tabIndex: \"0\",\n                style: {\n                    border: \"1px solid black\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/thierryjones/Documents/portfolio/pages/tetris.js\",\n                lineNumber: 206,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thierryjones/Documents/portfolio/pages/tetris.js\",\n        lineNumber: 204,\n        columnNumber: 5\n    }, _this);\n};\n_s(Tetris, \"GrZqye92wCDzv9p++XzKWiCCa9c=\");\n_c = Tetris;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tetris);\nvar _c;\n$RefreshReg$(_c, \"Tetris\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxFQUFFMUIsSUFBSSxHQUFHRSxVQUFVO2dCQUN6QjBFLFFBQVEsRUFBQyxHQUFHO2dCQUNaQyxLQUFLLEVBQUU7b0JBQUVDLE1BQU0sRUFBRSxpQkFBaUI7aUJBQUU7Ozs7O3FCQUNwQzs7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBOU1LMUUsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBZ05aLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGV0cmlzLmpzP2Y5ZWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBST1dTID0gMjA7XG5jb25zdCBDT0xTID0gMTA7XG5jb25zdCBCTE9DS19TSVpFID0gMzA7XG5jb25zdCBNT1ZFX0RPV05fSU5URVJWQUwgPSAxMDAwOyAvLyBBZGp1c3QgdGhlIGludGVydmFsIGJhc2VkIG9uIHlvdXIgcHJlZmVyZW5jZVxuXG5jb25zdCBUZXRyaXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgLy8gVGV0cm9taW5vIHNoYXBlc1xuICBjb25zdCB0ZXRyb21pbm9lcyA9IFtcbiAgICBbWzEsIDEsIDEsIDFdXSxcbiAgICBbWzEsIDEsIDEsIDBdLCBbMV1dLFxuICAgIFtbMSwgMSwgMSwgMF0sIFswLCAwLCAxXV0sXG4gICAgW1sxLCAxLCAxLCAwXSwgWzAsIDFdXSxcbiAgICBbWzEsIDEsIDEsIDFdXSxcbiAgICBbWzEsIDEsIDAsIDBdLCBbMSwgMV1dLFxuICAgIFtbMCwgMSwgMSwgMF0sIFsxLCAxXV0sXG4gIF07XG5cbiAgY29uc3QgW2dhbWVJc1Jlc2V0dGluZywgc2V0R2FtZUlzUmVzZXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBHYW1lIHN0YXRlXG4gIGNvbnN0IGJvYXJkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogUk9XUyB9LCAoKSA9PiBBcnJheShDT0xTKS5maWxsKDApKTtcbiAgbGV0IGN1cnJlbnRUZXRyb21pbm87XG4gIGxldCBjdXJyZW50UG9zaXRpb247XG4gIGxldCBsYXN0VGltZXN0YW1wID0gMDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnRleHQgPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgc3Bhd25UZXRyb21pbm8oKTtcbiAgICBnYW1lTG9vcCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZHJhdyA9ICgpID0+IHtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICBkcmF3Qm9hcmQoKTtcbiAgICBkcmF3VGV0cm9taW5vKCk7XG4gIH07XG5cbiAgY29uc3QgZHJhd0JvYXJkID0gKCkgPT4ge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IFJPV1M7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBDT0xTOyBjb2wrKykge1xuICAgICAgICBpZiAoYm9hcmRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgZHJhd0Jsb2NrKGNvbCwgcm93KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcmF3VGV0cm9taW5vID0gKCkgPT4ge1xuICAgIGlmICghY3VycmVudFRldHJvbWlubykgcmV0dXJuO1xuICAgIGN1cnJlbnRUZXRyb21pbm8uZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCwgaikgPT4ge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIGRyYXdCbG9jayhjdXJyZW50UG9zaXRpb24ueCArIGosIGN1cnJlbnRQb3NpdGlvbi55ICsgaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRyYXdCbG9jayA9ICh4LCB5KSA9PiB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KHggKiBCTE9DS19TSVpFLCB5ICogQkxPQ0tfU0laRSwgQkxPQ0tfU0laRSwgQkxPQ0tfU0laRSk7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjb250ZXh0LnN0cm9rZVJlY3QoeCAqIEJMT0NLX1NJWkUsIHkgKiBCTE9DS19TSVpFLCBCTE9DS19TSVpFLCBCTE9DS19TSVpFKTtcbiAgfTtcblxuICBjb25zdCByb3RhdGVUZXRyb21pbm8gPSAoKSA9PiB7XG4gICAgY29uc3Qgcm90YXRlZFRldHJvbWlubyA9IGN1cnJlbnRUZXRyb21pbm9bMF0ubWFwKChfLCBpKSA9PlxuICAgICAgY3VycmVudFRldHJvbWluby5tYXAoKHJvdykgPT4gcm93W2ldKVxuICAgICk7XG4gIFxuICAgIC8vIFJldmVyc2UgdGhlIG9yZGVyIG9mIHJvd3MgdG8gZ2V0IHRoZSBwcm9wZXIgcm90YXRpb25cbiAgICByb3RhdGVkVGV0cm9taW5vLmZvckVhY2goKHJvdykgPT4gcm93LnJldmVyc2UoKSk7XG4gIFxuICAgIGlmICghaXNDb2xsaXNpb24ocm90YXRlZFRldHJvbWlubywgY3VycmVudFBvc2l0aW9uKSkge1xuICAgICAgY3VycmVudFRldHJvbWlubyA9IHJvdGF0ZWRUZXRyb21pbm87XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgbW92ZURvd24gPSAoKSA9PiB7XG4gICAgY3VycmVudFBvc2l0aW9uLnkrKztcbiAgXG4gICAgaWYgKGlzQ29sbGlzaW9uKGN1cnJlbnRUZXRyb21pbm8sIGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55LS07XG4gICAgICBtZXJnZVRldHJvbWlubygpO1xuICAgICAgY2xlYXJSb3dzKCk7XG4gICAgICBzcGF3blRldHJvbWlubygpO1xuICAgICAgaWYgKGlzQ29sbGlzaW9uKGN1cnJlbnRUZXRyb21pbm8sIGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgIHJldHVybjsgLy8gU3RvcCBmdXJ0aGVyIGV4ZWN1dGlvbiBhZnRlciByZXNldHRpbmcgdGhlIGdhbWVcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGRyYXcoKTtcbiAgXG4gICAgLy8gVXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byBjYWxsIG1vdmVEb3duIGluIHRoZSBuZXh0IGZyYW1lXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1vdmVEb3duKTtcbiAgfTtcbiAgXG4gIFxuXG4gIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xuICAgIGN1cnJlbnRQb3NpdGlvbi54LS07XG4gICAgaWYgKGlzQ29sbGlzaW9uKGN1cnJlbnRUZXRyb21pbm8sIGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbi54Kys7XG4gICAgfVxuICAgIGRyYXcoKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XG4gICAgY3VycmVudFBvc2l0aW9uLngrKztcbiAgICBpZiAoaXNDb2xsaXNpb24oY3VycmVudFRldHJvbWlubywgY3VycmVudFBvc2l0aW9uKSkge1xuICAgICAgY3VycmVudFBvc2l0aW9uLngtLTtcbiAgICB9XG4gICAgZHJhdygpO1xuICB9O1xuXG4gIGNvbnN0IGlzQ29sbGlzaW9uID0gKHRldHJvbWlubywgcG9zaXRpb24pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRldHJvbWluby5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0ZXRyb21pbm9baV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRldHJvbWlub1tpXVtqXSAmJlxuICAgICAgICAgIChib2FyZFtwb3NpdGlvbi55ICsgaV0gJiYgYm9hcmRbcG9zaXRpb24ueSArIGldW3Bvc2l0aW9uLnggKyBqXSkgIT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IG1lcmdlVGV0cm9taW5vID0gKCkgPT4ge1xuICAgIGN1cnJlbnRUZXRyb21pbm8uZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCwgaikgPT4ge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIGJvYXJkW2N1cnJlbnRQb3NpdGlvbi55ICsgaV1bY3VycmVudFBvc2l0aW9uLnggKyBqXSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyUm93cyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCByb3cgPSBST1dTIC0gMTsgcm93ID49IDA7IHJvdy0tKSB7XG4gICAgICBpZiAoYm9hcmRbcm93XS5ldmVyeSgoY2VsbCkgPT4gY2VsbCkpIHtcbiAgICAgICAgYm9hcmQuc3BsaWNlKHJvdywgMSk7XG4gICAgICAgIGJvYXJkLnVuc2hpZnQoQXJyYXkoQ09MUykuZmlsbCgwKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNwYXduVGV0cm9taW5vID0gKCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGV0cm9taW5vZXMubGVuZ3RoKTtcbiAgICBjdXJyZW50VGV0cm9taW5vID0gdGV0cm9taW5vZXNbcmFuZG9tSW5kZXhdO1xuICAgIGN1cnJlbnRQb3NpdGlvbiA9IHsgeDogTWF0aC5mbG9vcihDT0xTIC8gMikgLSAxLCB5OiAwIH07XG4gIH07XG5cblxuICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgc2V0R2FtZUlzUmVzZXR0aW5nKHRydWUpO1xuICAgIGJvYXJkLmZvckVhY2goKHJvdykgPT4gcm93LmZpbGwoMCkpO1xuICAgIHNldEdhbWVJc1Jlc2V0dGluZyhmYWxzZSk7XG4gICAgc3Bhd25UZXRyb21pbm8oKTtcbiAgfTtcbiAgXG4gIGNvbnN0IGdhbWVMb29wID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIGlmICghZ2FtZUlzUmVzZXR0aW5nKSB7XG4gICAgICBtb3ZlRG93bih0aW1lc3RhbXApO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgcm90YXRlVGV0cm9taW5vKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICBtb3ZlRG93bihwZXJmb3JtYW5jZS5ub3coKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICBtb3ZlTGVmdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgIG1vdmVSaWdodCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGtleWRvd25cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgLy8gQ2xlYW51cCBldmVudCBsaXN0ZW5lciBvbiBjb21wb25lbnQgdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5XZWxjb21lIHRvIFRldHJpczwvaDE+XG4gICAgICA8Y2FudmFzXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICB3aWR0aD17Q09MUyAqIEJMT0NLX1NJWkV9XG4gICAgICAgIGhlaWdodD17Uk9XUyAqIEJMT0NLX1NJWkV9XG4gICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIiB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRldHJpcztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlJPV1MiLCJDT0xTIiwiQkxPQ0tfU0laRSIsIk1PVkVfRE9XTl9JTlRFUlZBTCIsIlRldHJpcyIsImNhbnZhc1JlZiIsImNvbnRleHQiLCJ0ZXRyb21pbm9lcyIsImdhbWVJc1Jlc2V0dGluZyIsInNldEdhbWVJc1Jlc2V0dGluZyIsImJvYXJkIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZmlsbCIsImN1cnJlbnRUZXRyb21pbm8iLCJjdXJyZW50UG9zaXRpb24iLCJsYXN0VGltZXN0YW1wIiwiY3VycmVudCIsImdldENvbnRleHQiLCJzcGF3blRldHJvbWlubyIsImdhbWVMb29wIiwiZHJhdyIsImNsZWFyUmVjdCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0JvYXJkIiwiZHJhd1RldHJvbWlubyIsInJvdyIsImNvbCIsImRyYXdCbG9jayIsImZvckVhY2giLCJpIiwiY2VsbCIsImoiLCJ4IiwieSIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0Iiwicm90YXRlVGV0cm9taW5vIiwicm90YXRlZFRldHJvbWlubyIsIm1hcCIsIl8iLCJyZXZlcnNlIiwiaXNDb2xsaXNpb24iLCJtb3ZlRG93biIsIm1lcmdlVGV0cm9taW5vIiwiY2xlYXJSb3dzIiwicmVzZXRHYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJ0ZXRyb21pbm8iLCJwb3NpdGlvbiIsImV2ZXJ5Iiwic3BsaWNlIiwidW5zaGlmdCIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGltZXN0YW1wIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwiY29kZSIsInBlcmZvcm1hbmNlIiwibm93Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJoMSIsInJlZiIsInRhYkluZGV4Iiwic3R5bGUiLCJib3JkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tetris.js\n");

/***/ })

});