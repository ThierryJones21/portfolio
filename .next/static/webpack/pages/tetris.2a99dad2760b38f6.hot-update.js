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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n// pages/index.js\n\nvar _s = $RefreshSig$();\nvar ROWS = 20;\nvar COLS = 10;\nvar BLOCK_SIZE = 30;\nvar MOVE_DOWN_INTERVAL = 1000; // Adjust the interval based on your preference\nvar Tetris = function() {\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var context;\n    // Tetromino shapes\n    var tetrominoes = [\n        [\n            [\n                1,\n                1,\n                1,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                0\n            ],\n            [\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                0\n            ],\n            [\n                0,\n                0,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                0\n            ],\n            [\n                0,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                1,\n                1\n            ]\n        ],\n        [\n            [\n                1,\n                1,\n                0,\n                0\n            ],\n            [\n                1,\n                1\n            ]\n        ],\n        [\n            [\n                0,\n                1,\n                1,\n                0\n            ],\n            [\n                1,\n                1\n            ]\n        ], \n    ];\n    // Game state\n    var board = Array.from({\n        length: ROWS\n    }, function() {\n        return Array(COLS).fill(0);\n    });\n    var currentTetromino;\n    var currentPosition;\n    var lastTimestamp = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        context = canvasRef.current.getContext(\"2d\");\n        spawnTetromino();\n        gameLoop();\n    }, []);\n    var draw = function() {\n        context.clearRect(0, 0, context.canvas.width, context.canvas.height);\n        drawBoard();\n        drawTetromino();\n    };\n    var drawBoard = function() {\n        for(var row = 0; row < ROWS; row++){\n            for(var col = 0; col < COLS; col++){\n                if (board[row][col]) {\n                    drawBlock(col, row);\n                }\n            }\n        }\n    };\n    var drawTetromino = function() {\n        if (!currentTetromino) return;\n        currentTetromino.forEach(function(row, i) {\n            row.forEach(function(cell, j) {\n                if (cell) {\n                    drawBlock(currentPosition.x + j, currentPosition.y + i);\n                }\n            });\n        });\n    };\n    var drawBlock = function(x, y) {\n        context.fillStyle = \"blue\";\n        context.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);\n        context.strokeStyle = \"white\";\n        context.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);\n    };\n    var rotateTetromino = function() {\n        var rotatedTetromino = currentTetromino[0].map(function(_, i) {\n            return currentTetromino.map(function(row) {\n                return row[i];\n            });\n        });\n        // Reverse the order of rows to get the proper rotation\n        rotatedTetromino.reverse();\n        if (!isCollision(rotatedTetromino, currentPosition)) {\n            currentTetromino = [\n                rotatedTetromino\n            ];\n        }\n    };\n    var moveDown = function(timestamp) {\n        var elapsed = timestamp - lastTimestamp;\n        if (elapsed > MOVE_DOWN_INTERVAL) {\n            lastTimestamp = timestamp;\n            currentPosition.y++;\n            if (isCollision(currentTetromino, currentPosition)) {\n                currentPosition.y--;\n                mergeTetromino();\n                clearRows();\n                spawnTetromino();\n                if (isCollision(currentTetromino, currentPosition)) {\n                    resetGame();\n                    return;\n                }\n            }\n            draw();\n        }\n        requestAnimationFrame(function(nextTimestamp) {\n            return moveDown(nextTimestamp);\n        });\n    };\n    var moveLeft = function() {\n        currentPosition.x--;\n        if (isCollision(currentTetromino, currentPosition)) {\n            currentPosition.x++;\n        }\n        draw();\n    };\n    var moveRight = function() {\n        currentPosition.x++;\n        if (isCollision(currentTetromino, currentPosition)) {\n            currentPosition.x--;\n        }\n        draw();\n    };\n    var isCollision = function(tetromino, position) {\n        for(var i = 0; i < tetromino.length; i++){\n            for(var j = 0; j < tetromino[i].length; j++){\n                if (tetromino[i][j] && (board[position.y + i] && board[position.y + i][position.x + j]) !== 0) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    };\n    var mergeTetromino = function() {\n        currentTetromino.forEach(function(row, i) {\n            row.forEach(function(cell, j) {\n                if (cell) {\n                    board[currentPosition.y + i][currentPosition.x + j] = 1;\n                }\n            });\n        });\n    };\n    var clearRows = function() {\n        for(var row = ROWS - 1; row >= 0; row--){\n            if (board[row].every(function(cell) {\n                return cell;\n            })) {\n                board.splice(row, 1);\n                board.unshift(Array(COLS).fill(0));\n            }\n        }\n    };\n    var spawnTetromino = function() {\n        var randomIndex = Math.floor(Math.random() * tetrominoes.length);\n        currentTetromino = tetrominoes[randomIndex];\n        currentPosition = {\n            x: Math.floor(COLS / 2) - 1,\n            y: 0\n        };\n    };\n    var resetGame = function() {\n        board.forEach(function(row) {\n            return row.fill(0);\n        });\n    };\n    var gameLoop = function(timestamp) {\n        moveDown(timestamp);\n    };\n    var handleKeyDown = function(event) {\n        switch(event.code){\n            case \"ArrowUp\":\n                rotateTetromino();\n                break;\n            case \"ArrowDown\":\n                moveDown(performance.now());\n                break;\n            case \"ArrowLeft\":\n                moveLeft();\n                break;\n            case \"ArrowRight\":\n                moveRight();\n                break;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Add event listener for keydown\n        window.addEventListener(\"keydown\", handleKeyDown);\n        // Cleanup event listener on component unmount\n        return function() {\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Tetris\"\n            }, void 0, false, {\n                fileName: \"/Users/thierryjones/Documents/portfolio/pages/tetris.js\",\n                lineNumber: 198,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                width: COLS * BLOCK_SIZE,\n                height: ROWS * BLOCK_SIZE,\n                tabIndex: \"0\",\n                style: {\n                    border: \"1px solid black\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/thierryjones/Documents/portfolio/pages/tetris.js\",\n                lineNumber: 199,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thierryjones/Documents/portfolio/pages/tetris.js\",\n        lineNumber: 197,\n        columnNumber: 5\n    }, _this);\n};\n_s(Tetris, \"1O11hef6JMAr7xpSnL0aZ5Ib60Q=\");\n_c = Tetris;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tetris);\nvar _c;\n$RefreshReg$(_c, \"Tetris\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RldHJpcy5qcz9mOWVkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LmpzXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBST1dTID0gMjA7XG5jb25zdCBDT0xTID0gMTA7XG5jb25zdCBCTE9DS19TSVpFID0gMzA7XG5jb25zdCBNT1ZFX0RPV05fSU5URVJWQUwgPSAxMDAwOyAvLyBBZGp1c3QgdGhlIGludGVydmFsIGJhc2VkIG9uIHlvdXIgcHJlZmVyZW5jZVxuXG5jb25zdCBUZXRyaXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgLy8gVGV0cm9taW5vIHNoYXBlc1xuICBjb25zdCB0ZXRyb21pbm9lcyA9IFtcbiAgICBbWzEsIDEsIDEsIDFdXSxcbiAgICBbWzEsIDEsIDEsIDBdLCBbMV1dLFxuICAgIFtbMSwgMSwgMSwgMF0sIFswLCAwLCAxXV0sXG4gICAgW1sxLCAxLCAxLCAwXSwgWzAsIDFdXSxcbiAgICBbWzEsIDEsIDEsIDFdXSxcbiAgICBbWzEsIDEsIDAsIDBdLCBbMSwgMV1dLFxuICAgIFtbMCwgMSwgMSwgMF0sIFsxLCAxXV0sXG4gIF07XG5cbiAgLy8gR2FtZSBzdGF0ZVxuICBjb25zdCBib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IFJPV1MgfSwgKCkgPT4gQXJyYXkoQ09MUykuZmlsbCgwKSk7XG4gIGxldCBjdXJyZW50VGV0cm9taW5vO1xuICBsZXQgY3VycmVudFBvc2l0aW9uO1xuICBsZXQgbGFzdFRpbWVzdGFtcCA9IDA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb250ZXh0ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHNwYXduVGV0cm9taW5vKCk7XG4gICAgZ2FtZUxvb3AoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGRyYXcgPSAoKSA9PiB7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgZHJhd0JvYXJkKCk7XG4gICAgZHJhd1RldHJvbWlubygpO1xuICB9O1xuXG4gIGNvbnN0IGRyYXdCb2FyZCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBST1dTOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgQ09MUzsgY29sKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXSkge1xuICAgICAgICAgIGRyYXdCbG9jayhjb2wsIHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhd1RldHJvbWlubyA9ICgpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRUZXRyb21pbm8pIHJldHVybjtcbiAgICBjdXJyZW50VGV0cm9taW5vLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNlbGwsIGopID0+IHtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICBkcmF3QmxvY2soY3VycmVudFBvc2l0aW9uLnggKyBqLCBjdXJyZW50UG9zaXRpb24ueSArIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkcmF3QmxvY2sgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgY29udGV4dC5maWxsUmVjdCh4ICogQkxPQ0tfU0laRSwgeSAqIEJMT0NLX1NJWkUsIEJMT0NLX1NJWkUsIEJMT0NLX1NJWkUpO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY29udGV4dC5zdHJva2VSZWN0KHggKiBCTE9DS19TSVpFLCB5ICogQkxPQ0tfU0laRSwgQkxPQ0tfU0laRSwgQkxPQ0tfU0laRSk7XG4gIH07XG5cbiAgY29uc3Qgcm90YXRlVGV0cm9taW5vID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdGF0ZWRUZXRyb21pbm8gPSBjdXJyZW50VGV0cm9taW5vWzBdLm1hcCgoXywgaSkgPT5cbiAgICAgIGN1cnJlbnRUZXRyb21pbm8ubWFwKChyb3cpID0+IHJvd1tpXSlcbiAgICApO1xuICBcbiAgICAvLyBSZXZlcnNlIHRoZSBvcmRlciBvZiByb3dzIHRvIGdldCB0aGUgcHJvcGVyIHJvdGF0aW9uXG4gICAgcm90YXRlZFRldHJvbWluby5yZXZlcnNlKCk7XG4gIFxuICAgIGlmICghaXNDb2xsaXNpb24ocm90YXRlZFRldHJvbWlubywgY3VycmVudFBvc2l0aW9uKSkge1xuICAgICAgY3VycmVudFRldHJvbWlubyA9IFtyb3RhdGVkVGV0cm9taW5vXTtcbiAgICB9XG4gIH07XG4gIFxuXG4gIGNvbnN0IG1vdmVEb3duID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIGNvbnN0IGVsYXBzZWQgPSB0aW1lc3RhbXAgLSBsYXN0VGltZXN0YW1wO1xuICAgIGlmIChlbGFwc2VkID4gTU9WRV9ET1dOX0lOVEVSVkFMKSB7XG4gICAgICBsYXN0VGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgY3VycmVudFBvc2l0aW9uLnkrKztcblxuICAgICAgaWYgKGlzQ29sbGlzaW9uKGN1cnJlbnRUZXRyb21pbm8sIGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgY3VycmVudFBvc2l0aW9uLnktLTtcbiAgICAgICAgbWVyZ2VUZXRyb21pbm8oKTtcbiAgICAgICAgY2xlYXJSb3dzKCk7XG4gICAgICAgIHNwYXduVGV0cm9taW5vKCk7XG4gICAgICAgIGlmIChpc0NvbGxpc2lvbihjdXJyZW50VGV0cm9taW5vLCBjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRyYXcoKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKG5leHRUaW1lc3RhbXApID0+IG1vdmVEb3duKG5leHRUaW1lc3RhbXApKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHtcbiAgICBjdXJyZW50UG9zaXRpb24ueC0tO1xuICAgIGlmIChpc0NvbGxpc2lvbihjdXJyZW50VGV0cm9taW5vLCBjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICBjdXJyZW50UG9zaXRpb24ueCsrO1xuICAgIH1cbiAgICBkcmF3KCk7XG4gIH07XG5cbiAgY29uc3QgbW92ZVJpZ2h0ID0gKCkgPT4ge1xuICAgIGN1cnJlbnRQb3NpdGlvbi54Kys7XG4gICAgaWYgKGlzQ29sbGlzaW9uKGN1cnJlbnRUZXRyb21pbm8sIGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbi54LS07XG4gICAgfVxuICAgIGRyYXcoKTtcbiAgfTtcblxuICBjb25zdCBpc0NvbGxpc2lvbiA9ICh0ZXRyb21pbm8sIHBvc2l0aW9uKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXRyb21pbm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGV0cm9taW5vW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0ZXRyb21pbm9baV1bal0gJiZcbiAgICAgICAgICAoYm9hcmRbcG9zaXRpb24ueSArIGldICYmIGJvYXJkW3Bvc2l0aW9uLnkgKyBpXVtwb3NpdGlvbi54ICsgal0pICE9PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBtZXJnZVRldHJvbWlubyA9ICgpID0+IHtcbiAgICBjdXJyZW50VGV0cm9taW5vLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNlbGwsIGopID0+IHtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICBib2FyZFtjdXJyZW50UG9zaXRpb24ueSArIGldW2N1cnJlbnRQb3NpdGlvbi54ICsgal0gPSAxO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhclJvd3MgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgcm93ID0gUk9XUyAtIDE7IHJvdyA+PSAwOyByb3ctLSkge1xuICAgICAgaWYgKGJvYXJkW3Jvd10uZXZlcnkoKGNlbGwpID0+IGNlbGwpKSB7XG4gICAgICAgIGJvYXJkLnNwbGljZShyb3csIDEpO1xuICAgICAgICBib2FyZC51bnNoaWZ0KEFycmF5KENPTFMpLmZpbGwoMCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzcGF3blRldHJvbWlubyA9ICgpID0+IHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRldHJvbWlub2VzLmxlbmd0aCk7XG4gICAgY3VycmVudFRldHJvbWlubyA9IHRldHJvbWlub2VzW3JhbmRvbUluZGV4XTtcbiAgICBjdXJyZW50UG9zaXRpb24gPSB7IHg6IE1hdGguZmxvb3IoQ09MUyAvIDIpIC0gMSwgeTogMCB9O1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICBib2FyZC5mb3JFYWNoKChyb3cpID0+IHJvdy5maWxsKDApKTtcbiAgfTtcblxuICBjb25zdCBnYW1lTG9vcCA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBtb3ZlRG93bih0aW1lc3RhbXApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgIHJvdGF0ZVRldHJvbWlubygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgbW92ZURvd24ocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgbW92ZUxlZnQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICBtb3ZlUmlnaHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBrZXlkb3duXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIC8vIENsZWFudXAgZXZlbnQgbGlzdGVuZXIgb24gY29tcG9uZW50IHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+V2VsY29tZSB0byBUZXRyaXM8L2gxPlxuICAgICAgPGNhbnZhc1xuICAgICAgICByZWY9e2NhbnZhc1JlZn1cbiAgICAgICAgd2lkdGg9e0NPTFMgKiBCTE9DS19TSVpFfVxuICAgICAgICBoZWlnaHQ9e1JPV1MgKiBCTE9DS19TSVpFfVxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXRyaXM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiUk9XUyIsIkNPTFMiLCJCTE9DS19TSVpFIiwiTU9WRV9ET1dOX0lOVEVSVkFMIiwiVGV0cmlzIiwiY2FudmFzUmVmIiwiY29udGV4dCIsInRldHJvbWlub2VzIiwiYm9hcmQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJmaWxsIiwiY3VycmVudFRldHJvbWlubyIsImN1cnJlbnRQb3NpdGlvbiIsImxhc3RUaW1lc3RhbXAiLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsInNwYXduVGV0cm9taW5vIiwiZ2FtZUxvb3AiLCJkcmF3IiwiY2xlYXJSZWN0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3Qm9hcmQiLCJkcmF3VGV0cm9taW5vIiwicm93IiwiY29sIiwiZHJhd0Jsb2NrIiwiZm9yRWFjaCIsImkiLCJjZWxsIiwiaiIsIngiLCJ5IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJyb3RhdGVUZXRyb21pbm8iLCJyb3RhdGVkVGV0cm9taW5vIiwibWFwIiwiXyIsInJldmVyc2UiLCJpc0NvbGxpc2lvbiIsIm1vdmVEb3duIiwidGltZXN0YW1wIiwiZWxhcHNlZCIsIm1lcmdlVGV0cm9taW5vIiwiY2xlYXJSb3dzIiwicmVzZXRHYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibmV4dFRpbWVzdGFtcCIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwidGV0cm9taW5vIiwicG9zaXRpb24iLCJldmVyeSIsInNwbGljZSIsInVuc2hpZnQiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhhbmRsZUtleURvd24iLCJldmVudCIsImNvZGUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiaDEiLCJyZWYiLCJ0YWJJbmRleCIsInN0eWxlIiwiYm9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tetris.js\n");

/***/ })

});