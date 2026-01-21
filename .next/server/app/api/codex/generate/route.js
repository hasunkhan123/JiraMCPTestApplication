"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/codex/generate/route";
exports.ids = ["app/api/codex/generate/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcodex%2Fgenerate%2Froute&page=%2Fapi%2Fcodex%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcodex%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcodex%2Fgenerate%2Froute&page=%2Fapi%2Fcodex%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcodex%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_hasun_Code_OpenAIProject_JiraMCPTestApplication_app_api_codex_generate_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/codex/generate/route.ts */ \"(rsc)/./app/api/codex/generate/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/codex/generate/route\",\n        pathname: \"/api/codex/generate\",\n        filename: \"route\",\n        bundlePath: \"app/api/codex/generate/route\"\n    },\n    resolvedPagePath: \"/Users/hasun/Code/OpenAIProject/JiraMCPTestApplication/app/api/codex/generate/route.ts\",\n    nextConfigOutput,\n    userland: _Users_hasun_Code_OpenAIProject_JiraMCPTestApplication_app_api_codex_generate_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/codex/generate/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb2RleCUyRmdlbmVyYXRlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb2RleCUyRmdlbmVyYXRlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29kZXglMkZnZW5lcmF0ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmhhc3VuJTJGQ29kZSUyRk9wZW5BSVByb2plY3QlMkZKaXJhTUNQVGVzdEFwcGxpY2F0aW9uJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmhhc3VuJTJGQ29kZSUyRk9wZW5BSVByb2plY3QlMkZKaXJhTUNQVGVzdEFwcGxpY2F0aW9uJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNzQztBQUNuSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2ppcmEtY29kZXgtY29tcGFuaW9uLz81MDdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9oYXN1bi9Db2RlL09wZW5BSVByb2plY3QvSmlyYU1DUFRlc3RBcHBsaWNhdGlvbi9hcHAvYXBpL2NvZGV4L2dlbmVyYXRlL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jb2RleC9nZW5lcmF0ZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NvZGV4L2dlbmVyYXRlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb2RleC9nZW5lcmF0ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9oYXN1bi9Db2RlL09wZW5BSVByb2plY3QvSmlyYU1DUFRlc3RBcHBsaWNhdGlvbi9hcHAvYXBpL2NvZGV4L2dlbmVyYXRlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jb2RleC9nZW5lcmF0ZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcodex%2Fgenerate%2Froute&page=%2Fapi%2Fcodex%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcodex%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/codex/generate/route.ts":
/*!*****************************************!*\
  !*** ./app/api/codex/generate/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var _lib_codexClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../lib/codexClient */ \"(rsc)/./lib/codexClient.ts\");\n\n\n\n\n\nasync function POST(request) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user?.id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const body = await request.json();\n    if (!body.ticketKey) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"ticketKey required\"\n        }, {\n            status: 400\n        });\n    }\n    const ticket = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.ticket.findUnique({\n        where: {\n            key: body.ticketKey\n        }\n    });\n    if (!ticket) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Ticket not found\"\n        }, {\n            status: 404\n        });\n    }\n    try {\n        const artifact = await (0,_lib_codexClient__WEBPACK_IMPORTED_MODULE_4__.generateCodexArtifact)(ticket);\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.codexRun.create({\n            data: {\n                ticketId: ticket.id,\n                userId: session.user.id,\n                summary: artifact.summary,\n                prTitle: artifact.prTitle,\n                checklistJson: JSON.stringify(artifact.checklist)\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(artifact);\n    } catch (error) {\n        const message = error instanceof Error ? error.message : \"Codex error\";\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvZGV4L2dlbmVyYXRlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFDRTtBQUNNO0FBQ0g7QUFDb0I7QUFFN0QsZUFBZUssS0FBS0MsT0FBZ0I7SUFDekMsTUFBTUMsVUFBVSxNQUFNTiwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUVsRCxJQUFJLENBQUNLLFNBQVNDLE1BQU1DLElBQUk7UUFDdEIsT0FBT1QscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDcEU7SUFFQSxNQUFNQyxPQUFRLE1BQU1QLFFBQVFJLElBQUk7SUFFaEMsSUFBSSxDQUFDRyxLQUFLQyxTQUFTLEVBQUU7UUFDbkIsT0FBT2QscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzFFO0lBRUEsTUFBTUcsU0FBUyxNQUFNWiwrQ0FBTUEsQ0FBQ1ksTUFBTSxDQUFDQyxVQUFVLENBQUM7UUFDNUNDLE9BQU87WUFBRUMsS0FBS0wsS0FBS0MsU0FBUztRQUFDO0lBQy9CO0lBRUEsSUFBSSxDQUFDQyxRQUFRO1FBQ1gsT0FBT2YscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW1CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3hFO0lBRUEsSUFBSTtRQUNGLE1BQU1PLFdBQVcsTUFBTWYsdUVBQXFCQSxDQUFDVztRQUU3QyxNQUFNWiwrQ0FBTUEsQ0FBQ2lCLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1lBQzNCQyxNQUFNO2dCQUNKQyxVQUFVUixPQUFPTixFQUFFO2dCQUNuQmUsUUFBUWpCLFFBQVFDLElBQUksQ0FBQ0MsRUFBRTtnQkFDdkJnQixTQUFTTixTQUFTTSxPQUFPO2dCQUN6QkMsU0FBU1AsU0FBU08sT0FBTztnQkFDekJDLGVBQWVDLEtBQUtDLFNBQVMsQ0FBQ1YsU0FBU1csU0FBUztZQUNsRDtRQUNGO1FBRUEsT0FBTzlCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUNTO0lBQzNCLEVBQUUsT0FBT1IsT0FBTztRQUNkLE1BQU1vQixVQUFVcEIsaUJBQWlCcUIsUUFBUXJCLE1BQU1vQixPQUFPLEdBQUc7UUFDekQsT0FBTy9CLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBT29CO1FBQVEsR0FBRztZQUFFbkIsUUFBUTtRQUFJO0lBQzdEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qaXJhLWNvZGV4LWNvbXBhbmlvbi8uL2FwcC9hcGkvY29kZXgvZ2VuZXJhdGUvcm91dGUudHM/YWY0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvYXV0aFwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGdlbmVyYXRlQ29kZXhBcnRpZmFjdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvY29kZXhDbGllbnRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG5cbiAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICBjb25zdCBib2R5ID0gKGF3YWl0IHJlcXVlc3QuanNvbigpKSBhcyB7IHRpY2tldEtleT86IHN0cmluZyB9O1xuXG4gIGlmICghYm9keS50aWNrZXRLZXkpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJ0aWNrZXRLZXkgcmVxdWlyZWRcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG5cbiAgY29uc3QgdGlja2V0ID0gYXdhaXQgcHJpc21hLnRpY2tldC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBrZXk6IGJvZHkudGlja2V0S2V5IH1cbiAgfSk7XG5cbiAgaWYgKCF0aWNrZXQpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJUaWNrZXQgbm90IGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgYXJ0aWZhY3QgPSBhd2FpdCBnZW5lcmF0ZUNvZGV4QXJ0aWZhY3QodGlja2V0KTtcblxuICAgIGF3YWl0IHByaXNtYS5jb2RleFJ1bi5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB0aWNrZXRJZDogdGlja2V0LmlkLFxuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgc3VtbWFyeTogYXJ0aWZhY3Quc3VtbWFyeSxcbiAgICAgICAgcHJUaXRsZTogYXJ0aWZhY3QucHJUaXRsZSxcbiAgICAgICAgY2hlY2tsaXN0SnNvbjogSlNPTi5zdHJpbmdpZnkoYXJ0aWZhY3QuY2hlY2tsaXN0KVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGFydGlmYWN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkNvZGV4IGVycm9yXCI7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IG1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsImdlbmVyYXRlQ29kZXhBcnRpZmFjdCIsIlBPU1QiLCJyZXF1ZXN0Iiwic2Vzc2lvbiIsInVzZXIiLCJpZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImJvZHkiLCJ0aWNrZXRLZXkiLCJ0aWNrZXQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJrZXkiLCJhcnRpZmFjdCIsImNvZGV4UnVuIiwiY3JlYXRlIiwiZGF0YSIsInRpY2tldElkIiwidXNlcklkIiwic3VtbWFyeSIsInByVGl0bGUiLCJjaGVja2xpc3RKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImNoZWNrbGlzdCIsIm1lc3NhZ2UiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/codex/generate/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GITHUB_ID ?? \"\",\n            clientSecret: process.env.GITHUB_SECRET ?? \"\"\n        })\n    ],\n    session: {\n        strategy: \"database\"\n    },\n    callbacks: {\n        session: ({ session, user })=>{\n            if (session.user) {\n                session.user.id = user.id;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dEO0FBQ0U7QUFDeEI7QUFFM0IsTUFBTUcsY0FBK0I7SUFDMUNDLFNBQVNILHdFQUFhQSxDQUFDQywyQ0FBTUE7SUFDN0JHLFdBQVc7UUFDVEwsc0VBQWNBLENBQUM7WUFDYk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLElBQUk7WUFDbkNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYSxJQUFJO1FBQzdDO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsV0FBVztRQUNURixTQUFTLENBQUMsRUFBRUEsT0FBTyxFQUFFRyxJQUFJLEVBQUU7WUFDekIsSUFBSUgsUUFBUUcsSUFBSSxFQUFFO2dCQUNoQkgsUUFBUUcsSUFBSSxDQUFDQyxFQUFFLEdBQUdELEtBQUtDLEVBQUU7WUFDM0I7WUFDQSxPQUFPSjtRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamlyYS1jb2RleC1jb21wYW5pb24vLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi9wcmlzbWFcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCA/PyBcIlwiLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUID8/IFwiXCJcbiAgICB9KVxuICBdLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiZGF0YWJhc2VcIlxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiAoeyBzZXNzaW9uLCB1c2VyIH0pID0+IHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJHaXRIdWJQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwidXNlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/codexClient.ts":
/*!****************************!*\
  !*** ./lib/codexClient.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateCodexArtifact: () => (/* binding */ generateCodexArtifact)\n/* harmony export */ });\nconst mockChecklist = (ticket)=>[\n        `Confirm expected behavior for ${ticket.key}`,\n        `Update UI for ${ticket.title.toLowerCase()}`,\n        \"Add/adjust tests for new behavior\",\n        \"Notify QA with rollout notes\"\n    ];\nconst mockRationale = (ticket)=>`Codex inferred this from the ticket title and description to keep changes scoped to ${ticket.key}.`;\nasync function generateCodexArtifact(ticket) {\n    const mode = process.env.CODEX_MODE ?? \"mock\";\n    if (mode === \"mock\") {\n        return {\n            summary: `Focused update for ${ticket.key}: ${ticket.description}`,\n            prTitle: `${ticket.key} — ${ticket.title}`,\n            checklist: mockChecklist(ticket),\n            rationale: mockRationale(ticket)\n        };\n    }\n    if (!process.env.CODEX_API_KEY) {\n        throw new Error(\"CODEX_API_KEY is required for live mode.\");\n    }\n    const response = await fetch(\"https://api.openai.com/v1/responses\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            Authorization: `Bearer ${process.env.CODEX_API_KEY}`\n        },\n        body: JSON.stringify({\n            model: \"gpt-4.1-mini\",\n            input: `Summarize ticket ${ticket.key}: ${ticket.title}. ${ticket.description}`\n        })\n    });\n    if (!response.ok) {\n        throw new Error(\"Codex request failed.\");\n    }\n    const data = await response.json();\n    const text = data.output_text ?? \"\";\n    return {\n        summary: text || `Summary for ${ticket.key}`,\n        prTitle: `${ticket.key} — ${ticket.title}`,\n        checklist: mockChecklist(ticket),\n        rationale: \"Generated from live Codex response.\"\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29kZXhDbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7OztBQVNBLE1BQU1BLGdCQUFnQixDQUFDQyxTQUFtQjtRQUN4QyxDQUFDLDhCQUE4QixFQUFFQSxPQUFPQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLGNBQWMsRUFBRUQsT0FBT0UsS0FBSyxDQUFDQyxXQUFXLEdBQUcsQ0FBQztRQUM3QztRQUNBO0tBQ0Q7QUFFRCxNQUFNQyxnQkFBZ0IsQ0FBQ0osU0FDckIsQ0FBQyxvRkFBb0YsRUFBRUEsT0FBT0MsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUvRixlQUFlSSxzQkFBc0JMLE1BQWM7SUFDeEQsTUFBTU0sT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLElBQUk7SUFFdkMsSUFBSUgsU0FBUyxRQUFRO1FBQ25CLE9BQU87WUFDTEksU0FBUyxDQUFDLG1CQUFtQixFQUFFVixPQUFPQyxHQUFHLENBQUMsRUFBRSxFQUFFRCxPQUFPVyxXQUFXLENBQUMsQ0FBQztZQUNsRUMsU0FBUyxDQUFDLEVBQUVaLE9BQU9DLEdBQUcsQ0FBQyxHQUFHLEVBQUVELE9BQU9FLEtBQUssQ0FBQyxDQUFDO1lBQzFDVyxXQUFXZCxjQUFjQztZQUN6QmMsV0FBV1YsY0FBY0o7UUFDM0I7SUFDRjtJQUVBLElBQUksQ0FBQ08sUUFBUUMsR0FBRyxDQUFDTyxhQUFhLEVBQUU7UUFDOUIsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBRUEsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHVDQUF1QztRQUNsRUMsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCQyxlQUFlLENBQUMsT0FBTyxFQUFFZCxRQUFRQyxHQUFHLENBQUNPLGFBQWEsQ0FBQyxDQUFDO1FBQ3REO1FBQ0FPLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNuQkMsT0FBTztZQUNQQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUxQixPQUFPQyxHQUFHLENBQUMsRUFBRSxFQUFFRCxPQUFPRSxLQUFLLENBQUMsRUFBRSxFQUFFRixPQUFPVyxXQUFXLENBQUMsQ0FBQztRQUNqRjtJQUNGO0lBRUEsSUFBSSxDQUFDTSxTQUFTVSxFQUFFLEVBQUU7UUFDaEIsTUFBTSxJQUFJWCxNQUFNO0lBQ2xCO0lBRUEsTUFBTVksT0FBUSxNQUFNWCxTQUFTWSxJQUFJO0lBSWpDLE1BQU1DLE9BQU9GLEtBQUtHLFdBQVcsSUFBSTtJQUVqQyxPQUFPO1FBQ0xyQixTQUFTb0IsUUFBUSxDQUFDLFlBQVksRUFBRTlCLE9BQU9DLEdBQUcsQ0FBQyxDQUFDO1FBQzVDVyxTQUFTLENBQUMsRUFBRVosT0FBT0MsR0FBRyxDQUFDLEdBQUcsRUFBRUQsT0FBT0UsS0FBSyxDQUFDLENBQUM7UUFDMUNXLFdBQVdkLGNBQWNDO1FBQ3pCYyxXQUFXO0lBQ2I7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2ppcmEtY29kZXgtY29tcGFuaW9uLy4vbGliL2NvZGV4Q2xpZW50LnRzPzQ0ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUaWNrZXQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZXhwb3J0IHR5cGUgQ29kZXhBcnRpZmFjdCA9IHtcbiAgc3VtbWFyeTogc3RyaW5nO1xuICBwclRpdGxlOiBzdHJpbmc7XG4gIGNoZWNrbGlzdDogc3RyaW5nW107XG4gIHJhdGlvbmFsZTogc3RyaW5nO1xufTtcblxuY29uc3QgbW9ja0NoZWNrbGlzdCA9ICh0aWNrZXQ6IFRpY2tldCkgPT4gW1xuICBgQ29uZmlybSBleHBlY3RlZCBiZWhhdmlvciBmb3IgJHt0aWNrZXQua2V5fWAsXG4gIGBVcGRhdGUgVUkgZm9yICR7dGlja2V0LnRpdGxlLnRvTG93ZXJDYXNlKCl9YCxcbiAgXCJBZGQvYWRqdXN0IHRlc3RzIGZvciBuZXcgYmVoYXZpb3JcIixcbiAgXCJOb3RpZnkgUUEgd2l0aCByb2xsb3V0IG5vdGVzXCJcbl07XG5cbmNvbnN0IG1vY2tSYXRpb25hbGUgPSAodGlja2V0OiBUaWNrZXQpID0+XG4gIGBDb2RleCBpbmZlcnJlZCB0aGlzIGZyb20gdGhlIHRpY2tldCB0aXRsZSBhbmQgZGVzY3JpcHRpb24gdG8ga2VlcCBjaGFuZ2VzIHNjb3BlZCB0byAke3RpY2tldC5rZXl9LmA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUNvZGV4QXJ0aWZhY3QodGlja2V0OiBUaWNrZXQpOiBQcm9taXNlPENvZGV4QXJ0aWZhY3Q+IHtcbiAgY29uc3QgbW9kZSA9IHByb2Nlc3MuZW52LkNPREVYX01PREUgPz8gXCJtb2NrXCI7XG5cbiAgaWYgKG1vZGUgPT09IFwibW9ja1wiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1bW1hcnk6IGBGb2N1c2VkIHVwZGF0ZSBmb3IgJHt0aWNrZXQua2V5fTogJHt0aWNrZXQuZGVzY3JpcHRpb259YCxcbiAgICAgIHByVGl0bGU6IGAke3RpY2tldC5rZXl9IOKAlCAke3RpY2tldC50aXRsZX1gLFxuICAgICAgY2hlY2tsaXN0OiBtb2NrQ2hlY2tsaXN0KHRpY2tldCksXG4gICAgICByYXRpb25hbGU6IG1vY2tSYXRpb25hbGUodGlja2V0KVxuICAgIH07XG4gIH1cblxuICBpZiAoIXByb2Nlc3MuZW52LkNPREVYX0FQSV9LRVkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDT0RFWF9BUElfS0VZIGlzIHJlcXVpcmVkIGZvciBsaXZlIG1vZGUuXCIpO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvcmVzcG9uc2VzXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkNPREVYX0FQSV9LRVl9YFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbW9kZWw6IFwiZ3B0LTQuMS1taW5pXCIsXG4gICAgICBpbnB1dDogYFN1bW1hcml6ZSB0aWNrZXQgJHt0aWNrZXQua2V5fTogJHt0aWNrZXQudGl0bGV9LiAke3RpY2tldC5kZXNjcmlwdGlvbn1gXG4gICAgfSlcbiAgfSk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvZGV4IHJlcXVlc3QgZmFpbGVkLlwiKTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyB7XG4gICAgb3V0cHV0X3RleHQ/OiBzdHJpbmc7XG4gIH07XG5cbiAgY29uc3QgdGV4dCA9IGRhdGEub3V0cHV0X3RleHQgPz8gXCJcIjtcblxuICByZXR1cm4ge1xuICAgIHN1bW1hcnk6IHRleHQgfHwgYFN1bW1hcnkgZm9yICR7dGlja2V0LmtleX1gLFxuICAgIHByVGl0bGU6IGAke3RpY2tldC5rZXl9IOKAlCAke3RpY2tldC50aXRsZX1gLFxuICAgIGNoZWNrbGlzdDogbW9ja0NoZWNrbGlzdCh0aWNrZXQpLFxuICAgIHJhdGlvbmFsZTogXCJHZW5lcmF0ZWQgZnJvbSBsaXZlIENvZGV4IHJlc3BvbnNlLlwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsibW9ja0NoZWNrbGlzdCIsInRpY2tldCIsImtleSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJtb2NrUmF0aW9uYWxlIiwiZ2VuZXJhdGVDb2RleEFydGlmYWN0IiwibW9kZSIsInByb2Nlc3MiLCJlbnYiLCJDT0RFWF9NT0RFIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwicHJUaXRsZSIsImNoZWNrbGlzdCIsInJhdGlvbmFsZSIsIkNPREVYX0FQSV9LRVkiLCJFcnJvciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kZWwiLCJpbnB1dCIsIm9rIiwiZGF0YSIsImpzb24iLCJ0ZXh0Iiwib3V0cHV0X3RleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/codexClient.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"warn\",\n        \"error\"\n    ] : 0\n});\nif (true) {\n    globalForPrisma.prisma = prisma;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLQyxLQUFzQyxHQUFHO1FBQUM7UUFBUTtLQUFRLEdBQUcsQ0FBUztBQUM3RSxHQUFHO0FBRUwsSUFBSUEsSUFBcUMsRUFBRTtJQUN6Q0osZ0JBQWdCRSxNQUFNLEdBQUdBO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamlyYS1jb2RleC1jb21wYW5pb24vLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7IHByaXNtYT86IFByaXNtYUNsaWVudCB9O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBbXCJ3YXJuXCIsIFwiZXJyb3JcIl0gOiBbXCJlcnJvclwiXVxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hO1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcodex%2Fgenerate%2Froute&page=%2Fapi%2Fcodex%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcodex%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();