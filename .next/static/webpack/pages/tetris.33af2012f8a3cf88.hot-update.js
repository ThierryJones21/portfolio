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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n// pages/index.js\n\nvar _s = $RefreshSig$();\nvar ROWS = 20;\nvar COLS = 10;\nvar BLOCK_SIZE = 30;\nvar MOVE_DOWN_INTERVAL = 1000; // Adjust the interval based on your preference\nvar Tetris = function() {\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var context;\n    // Tetromino shapes\n    var tetrominoes = [\n        [\n            [\n                1,\n                1,\n                1,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                0\n            ],\n            [\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                0\n            ],\n            [\n                0,\n                0,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                0\n            ],\n            [\n                0,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                0,\n                0\n            ],\n            [\n                1,\n                1\n            ]\n        ],\n        [\n            [\n                0,\n                1,\n                1,\n                0\n            ],\n            [\n                1,\n                1\n            ]\n        ], \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), gameIsResetting = ref[0], setGameIsResetting = ref[1];\n    // Game state\n    var board = Array.from({\n        length: ROWS\n    }, function() {\n        return Array(COLS).fill(0);\n    });\n    var currentTetromino;\n    var currentPosition;\n    var lastTimestamp = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        context = canvasRef.current.getContext(\"2d\");\n        spawnTetromino();\n        gameLoop();\n    }, []);\n    var draw = function() {\n        context.clearRect(0, 0, context.canvas.width, context.canvas.height);\n        drawBoard();\n        drawTetromino();\n    };\n    var drawBoard = function() {\n        for(var row = 0; row < ROWS; row++){\n            for(var col = 0; col < COLS; col++){\n                if (board[row][col]) {\n                    drawBlock(col, row);\n                }\n            }\n        }\n    };\n    var drawTetromino = function() {\n        if (!currentTetromino) return;\n        currentTetromino.forEach(function(row, i) {\n            row.forEach(function(cell, j) {\n                if (cell) {\n                    drawBlock(currentPosition.x + j, currentPosition.y + i);\n                }\n            });\n        });\n    };\n    var drawBlock = function(x, y) {\n        context.fillStyle = \"blue\";\n        context.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);\n        context.strokeStyle = \"white\";\n        context.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);\n    };\n    var rotateTetromino = function() {\n        var rotatedTetromino = currentTetromino[0].map(function(_, i) {\n            return currentTetromino.map(function(row) {\n                return row[i];\n            });\n        });\n        // Reverse the order of rows to get the proper rotation\n        rotatedTetromino.forEach(function(row) {\n            return row.reverse();\n        });\n        if (!isCollision(rotatedTetromino, currentPosition)) {\n            currentTetromino = rotatedTetromino;\n        }\n    };\n    var moveDown = function(timestamp) {\n        var elapsed = timestamp - lastTimestamp;\n        if (elapsed > MOVE_DOWN_INTERVAL) {\n            lastTimestamp = timestamp;\n            currentPosition.y++;\n            if (isCollision(currentTetromino, currentPosition)) {\n                currentPosition.y--;\n                mergeTetromino();\n                clearRows();\n                spawnTetromino();\n                if (isCollision(currentTetromino, currentPosition)) {\n                    resetGame();\n                }\n            }\n            draw();\n        }\n        requestAnimationFrame(function(nextTimestamp) {\n            return moveDown(nextTimestamp);\n        });\n    };\n    var moveLeft = function() {\n        currentPosition.x--;\n        if (isCollision(currentTetromino, currentPosition)) {\n            currentPosition.x++;\n        }\n        draw();\n    };\n    var moveRight = function() {\n        currentPosition.x++;\n        if (isCollision(currentTetromino, currentPosition)) {\n            currentPosition.x--;\n        }\n        draw();\n    };\n    var isCollision = function(tetromino, position) {\n        for(var i = 0; i < tetromino.length; i++){\n            for(var j = 0; j < tetromino[i].length; j++){\n                if (tetromino[i][j] && (board[position.y + i] && board[position.y + i][position.x + j]) !== 0) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    };\n    var mergeTetromino = function() {\n        currentTetromino.forEach(function(row, i) {\n            row.forEach(function(cell, j) {\n                if (cell) {\n                    board[currentPosition.y + i][currentPosition.x + j] = 1;\n                }\n            });\n        });\n    };\n    var clearRows = function() {\n        for(var row = ROWS - 1; row >= 0; row--){\n            if (board[row].every(function(cell) {\n                return cell;\n            })) {\n                board.splice(row, 1);\n                board.unshift(Array(COLS).fill(0));\n            }\n        }\n    };\n    var spawnTetromino = function() {\n        var randomIndex = Math.floor(Math.random() * tetrominoes.length);\n        currentTetromino = tetrominoes[randomIndex];\n        currentPosition = {\n            x: Math.floor(COLS / 2) - 1,\n            y: 0\n        };\n    };\n    var resetGame = function() {\n        setGameIsResetting(true);\n        board.forEach(function(row) {\n            return row.fill(0);\n        });\n        setGameIsResetting(false);\n        spawnTetromino();\n    };\n    var gameLoop = function(timestamp) {\n        if (!gameIsResetting) {\n            moveDown(timestamp);\n            requestAnimationFrame(gameLoop);\n        }\n    };\n    var handleKeyDown = function(event) {\n        switch(event.code){\n            case \"ArrowUp\":\n                rotateTetromino();\n                break;\n            case \"ArrowDown\":\n                moveDown(performance.now());\n                break;\n            case \"ArrowLeft\":\n                moveLeft();\n                break;\n            case \"ArrowRight\":\n                moveRight();\n                break;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Add event listener for keydown\n        window.addEventListener(\"keydown\", handleKeyDown);\n        // Cleanup event listener on component unmount\n        return function() {\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Tetris\"\n            }, void 0, false, {\n                fileName: \"/Users/thierryjones/Documents/portfolio/pages/tetris.js\",\n                lineNumber: 206,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                width: COLS * BLOCK_SIZE,\n                height: ROWS * BLOCK_SIZE,\n                tabIndex: \"0\",\n                style: {\n                    border: \"1px solid black\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/thierryjones/Documents/portfolio/pages/tetris.js\",\n                lineNumber: 207,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thierryjones/Documents/portfolio/pages/tetris.js\",\n        lineNumber: 205,\n        columnNumber: 5\n    }, _this);\n};\n_s(Tetris, \"GrZqye92wCDzv9p++XzKWiCCa9c=\");\n_c = Tetris;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tetris);\nvar _c;\n$RefreshReg$(_c, \"Tetris\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDRiw4REFBQ0MsSUFBRTswQkFBQyxtQkFBaUI7Ozs7O3FCQUFLOzBCQUMxQiw4REFBQ3BELFFBQU07Z0JBQ0xxRCxHQUFHLEVBQUV4RSxTQUFTO2dCQUNkb0IsS0FBSyxFQUFFeEIsSUFBSSxHQUFHQyxVQUFVO2dCQUN4QndCLE1BQU0sRUFBRTFCLElBQUksR0FBR0UsVUFBVTtnQkFDekI0RSxRQUFRLEVBQUMsR0FBRztnQkFDWkMsS0FBSyxFQUFFO29CQUFFQyxNQUFNLEVBQUUsaUJBQWlCO2lCQUFFOzs7OztxQkFDcEM7Ozs7OzthQUNFLENBQ047Q0FDSDtHQS9NSzVFLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQWlOWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RldHJpcy5qcz9mOWVkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LmpzXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUk9XUyA9IDIwO1xuY29uc3QgQ09MUyA9IDEwO1xuY29uc3QgQkxPQ0tfU0laRSA9IDMwO1xuY29uc3QgTU9WRV9ET1dOX0lOVEVSVkFMID0gMTAwMDsgLy8gQWRqdXN0IHRoZSBpbnRlcnZhbCBiYXNlZCBvbiB5b3VyIHByZWZlcmVuY2VcblxuY29uc3QgVGV0cmlzID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBjb250ZXh0O1xuXG4gIC8vIFRldHJvbWlubyBzaGFwZXNcbiAgY29uc3QgdGV0cm9taW5vZXMgPSBbXG4gICAgW1sxLCAxLCAxLCAxXV0sXG4gICAgW1sxLCAxLCAxLCAwXSwgWzFdXSxcbiAgICBbWzEsIDEsIDEsIDBdLCBbMCwgMCwgMV1dLFxuICAgIFtbMSwgMSwgMSwgMF0sIFswLCAxXV0sXG4gICAgW1sxLCAxLCAxLCAxXV0sXG4gICAgW1sxLCAxLCAwLCAwXSwgWzEsIDFdXSxcbiAgICBbWzAsIDEsIDEsIDBdLCBbMSwgMV1dLFxuICBdO1xuXG4gIGNvbnN0IFtnYW1lSXNSZXNldHRpbmcsIHNldEdhbWVJc1Jlc2V0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gR2FtZSBzdGF0ZVxuICBjb25zdCBib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IFJPV1MgfSwgKCkgPT4gQXJyYXkoQ09MUykuZmlsbCgwKSk7XG4gIGxldCBjdXJyZW50VGV0cm9taW5vO1xuICBsZXQgY3VycmVudFBvc2l0aW9uO1xuICBsZXQgbGFzdFRpbWVzdGFtcCA9IDA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb250ZXh0ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHNwYXduVGV0cm9taW5vKCk7XG4gICAgZ2FtZUxvb3AoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGRyYXcgPSAoKSA9PiB7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgZHJhd0JvYXJkKCk7XG4gICAgZHJhd1RldHJvbWlubygpO1xuICB9O1xuXG4gIGNvbnN0IGRyYXdCb2FyZCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBST1dTOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgQ09MUzsgY29sKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXSkge1xuICAgICAgICAgIGRyYXdCbG9jayhjb2wsIHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhd1RldHJvbWlubyA9ICgpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRUZXRyb21pbm8pIHJldHVybjtcbiAgICBjdXJyZW50VGV0cm9taW5vLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNlbGwsIGopID0+IHtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICBkcmF3QmxvY2soY3VycmVudFBvc2l0aW9uLnggKyBqLCBjdXJyZW50UG9zaXRpb24ueSArIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkcmF3QmxvY2sgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgY29udGV4dC5maWxsUmVjdCh4ICogQkxPQ0tfU0laRSwgeSAqIEJMT0NLX1NJWkUsIEJMT0NLX1NJWkUsIEJMT0NLX1NJWkUpO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY29udGV4dC5zdHJva2VSZWN0KHggKiBCTE9DS19TSVpFLCB5ICogQkxPQ0tfU0laRSwgQkxPQ0tfU0laRSwgQkxPQ0tfU0laRSk7XG4gIH07XG5cbiAgY29uc3Qgcm90YXRlVGV0cm9taW5vID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdGF0ZWRUZXRyb21pbm8gPSBjdXJyZW50VGV0cm9taW5vWzBdLm1hcCgoXywgaSkgPT5cbiAgICAgIGN1cnJlbnRUZXRyb21pbm8ubWFwKChyb3cpID0+IHJvd1tpXSlcbiAgICApO1xuICBcbiAgICAvLyBSZXZlcnNlIHRoZSBvcmRlciBvZiByb3dzIHRvIGdldCB0aGUgcHJvcGVyIHJvdGF0aW9uXG4gICAgcm90YXRlZFRldHJvbWluby5mb3JFYWNoKChyb3cpID0+IHJvdy5yZXZlcnNlKCkpO1xuICBcbiAgICBpZiAoIWlzQ29sbGlzaW9uKHJvdGF0ZWRUZXRyb21pbm8sIGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgIGN1cnJlbnRUZXRyb21pbm8gPSByb3RhdGVkVGV0cm9taW5vO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IG1vdmVEb3duID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIGNvbnN0IGVsYXBzZWQgPSB0aW1lc3RhbXAgLSBsYXN0VGltZXN0YW1wO1xuICBcbiAgICBpZiAoZWxhcHNlZCA+IE1PVkVfRE9XTl9JTlRFUlZBTCkge1xuICAgICAgbGFzdFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55Kys7XG4gIFxuICAgICAgaWYgKGlzQ29sbGlzaW9uKGN1cnJlbnRUZXRyb21pbm8sIGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgY3VycmVudFBvc2l0aW9uLnktLTtcbiAgICAgICAgbWVyZ2VUZXRyb21pbm8oKTtcbiAgICAgICAgY2xlYXJSb3dzKCk7XG4gICAgICAgIHNwYXduVGV0cm9taW5vKCk7XG4gICAgICAgIGlmIChpc0NvbGxpc2lvbihjdXJyZW50VGV0cm9taW5vLCBjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBkcmF3KCk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgobmV4dFRpbWVzdGFtcCkgPT4gbW92ZURvd24obmV4dFRpbWVzdGFtcCkpO1xuICB9O1xuICBcblxuICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHtcbiAgICBjdXJyZW50UG9zaXRpb24ueC0tO1xuICAgIGlmIChpc0NvbGxpc2lvbihjdXJyZW50VGV0cm9taW5vLCBjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICBjdXJyZW50UG9zaXRpb24ueCsrO1xuICAgIH1cbiAgICBkcmF3KCk7XG4gIH07XG5cbiAgY29uc3QgbW92ZVJpZ2h0ID0gKCkgPT4ge1xuICAgIGN1cnJlbnRQb3NpdGlvbi54Kys7XG4gICAgaWYgKGlzQ29sbGlzaW9uKGN1cnJlbnRUZXRyb21pbm8sIGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbi54LS07XG4gICAgfVxuICAgIGRyYXcoKTtcbiAgfTtcblxuICBjb25zdCBpc0NvbGxpc2lvbiA9ICh0ZXRyb21pbm8sIHBvc2l0aW9uKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXRyb21pbm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGV0cm9taW5vW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0ZXRyb21pbm9baV1bal0gJiZcbiAgICAgICAgICAoYm9hcmRbcG9zaXRpb24ueSArIGldICYmIGJvYXJkW3Bvc2l0aW9uLnkgKyBpXVtwb3NpdGlvbi54ICsgal0pICE9PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBtZXJnZVRldHJvbWlubyA9ICgpID0+IHtcbiAgICBjdXJyZW50VGV0cm9taW5vLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNlbGwsIGopID0+IHtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICBib2FyZFtjdXJyZW50UG9zaXRpb24ueSArIGldW2N1cnJlbnRQb3NpdGlvbi54ICsgal0gPSAxO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhclJvd3MgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgcm93ID0gUk9XUyAtIDE7IHJvdyA+PSAwOyByb3ctLSkge1xuICAgICAgaWYgKGJvYXJkW3Jvd10uZXZlcnkoKGNlbGwpID0+IGNlbGwpKSB7XG4gICAgICAgIGJvYXJkLnNwbGljZShyb3csIDEpO1xuICAgICAgICBib2FyZC51bnNoaWZ0KEFycmF5KENPTFMpLmZpbGwoMCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzcGF3blRldHJvbWlubyA9ICgpID0+IHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRldHJvbWlub2VzLmxlbmd0aCk7XG4gICAgY3VycmVudFRldHJvbWlubyA9IHRldHJvbWlub2VzW3JhbmRvbUluZGV4XTtcbiAgICBjdXJyZW50UG9zaXRpb24gPSB7IHg6IE1hdGguZmxvb3IoQ09MUyAvIDIpIC0gMSwgeTogMCB9O1xuICB9O1xuXG5cbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIHNldEdhbWVJc1Jlc2V0dGluZyh0cnVlKTtcbiAgICBib2FyZC5mb3JFYWNoKChyb3cpID0+IHJvdy5maWxsKDApKTtcbiAgICBzZXRHYW1lSXNSZXNldHRpbmcoZmFsc2UpO1xuICAgIHNwYXduVGV0cm9taW5vKCk7XG4gIH07XG4gIFxuICBjb25zdCBnYW1lTG9vcCA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBpZiAoIWdhbWVJc1Jlc2V0dGluZykge1xuICAgICAgbW92ZURvd24odGltZXN0YW1wKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgIHJvdGF0ZVRldHJvbWlubygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgbW92ZURvd24ocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgbW92ZUxlZnQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICBtb3ZlUmlnaHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBrZXlkb3duXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIC8vIENsZWFudXAgZXZlbnQgbGlzdGVuZXIgb24gY29tcG9uZW50IHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+V2VsY29tZSB0byBUZXRyaXM8L2gxPlxuICAgICAgPGNhbnZhc1xuICAgICAgICByZWY9e2NhbnZhc1JlZn1cbiAgICAgICAgd2lkdGg9e0NPTFMgKiBCTE9DS19TSVpFfVxuICAgICAgICBoZWlnaHQ9e1JPV1MgKiBCTE9DS19TSVpFfVxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXRyaXM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJST1dTIiwiQ09MUyIsIkJMT0NLX1NJWkUiLCJNT1ZFX0RPV05fSU5URVJWQUwiLCJUZXRyaXMiLCJjYW52YXNSZWYiLCJjb250ZXh0IiwidGV0cm9taW5vZXMiLCJnYW1lSXNSZXNldHRpbmciLCJzZXRHYW1lSXNSZXNldHRpbmciLCJib2FyZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImZpbGwiLCJjdXJyZW50VGV0cm9taW5vIiwiY3VycmVudFBvc2l0aW9uIiwibGFzdFRpbWVzdGFtcCIsImN1cnJlbnQiLCJnZXRDb250ZXh0Iiwic3Bhd25UZXRyb21pbm8iLCJnYW1lTG9vcCIsImRyYXciLCJjbGVhclJlY3QiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImRyYXdCb2FyZCIsImRyYXdUZXRyb21pbm8iLCJyb3ciLCJjb2wiLCJkcmF3QmxvY2siLCJmb3JFYWNoIiwiaSIsImNlbGwiLCJqIiwieCIsInkiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsInJvdGF0ZVRldHJvbWlubyIsInJvdGF0ZWRUZXRyb21pbm8iLCJtYXAiLCJfIiwicmV2ZXJzZSIsImlzQ29sbGlzaW9uIiwibW92ZURvd24iLCJ0aW1lc3RhbXAiLCJlbGFwc2VkIiwibWVyZ2VUZXRyb21pbm8iLCJjbGVhclJvd3MiLCJyZXNldEdhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJuZXh0VGltZXN0YW1wIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJ0ZXRyb21pbm8iLCJwb3NpdGlvbiIsImV2ZXJ5Iiwic3BsaWNlIiwidW5zaGlmdCIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwiY29kZSIsInBlcmZvcm1hbmNlIiwibm93Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJoMSIsInJlZiIsInRhYkluZGV4Iiwic3R5bGUiLCJib3JkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tetris.js\n");

/***/ })

});