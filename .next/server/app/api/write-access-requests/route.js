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
exports.id = "app/api/write-access-requests/route";
exports.ids = ["app/api/write-access-requests/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwrite-access-requests%2Froute&page=%2Fapi%2Fwrite-access-requests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwrite-access-requests%2Froute.ts&appDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwrite-access-requests%2Froute&page=%2Fapi%2Fwrite-access-requests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwrite-access-requests%2Froute.ts&appDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_hasun_Code_OpenAIProject_JiraMCPTestApplication_app_api_write_access_requests_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/write-access-requests/route.ts */ \"(rsc)/./app/api/write-access-requests/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/write-access-requests/route\",\n        pathname: \"/api/write-access-requests\",\n        filename: \"route\",\n        bundlePath: \"app/api/write-access-requests/route\"\n    },\n    resolvedPagePath: \"/Users/hasun/Code/OpenAIProject/JiraMCPTestApplication/app/api/write-access-requests/route.ts\",\n    nextConfigOutput,\n    userland: _Users_hasun_Code_OpenAIProject_JiraMCPTestApplication_app_api_write_access_requests_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/write-access-requests/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3cml0ZS1hY2Nlc3MtcmVxdWVzdHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRndyaXRlLWFjY2Vzcy1yZXF1ZXN0cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRndyaXRlLWFjY2Vzcy1yZXF1ZXN0cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmhhc3VuJTJGQ29kZSUyRk9wZW5BSVByb2plY3QlMkZKaXJhTUNQVGVzdEFwcGxpY2F0aW9uJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmhhc3VuJTJGQ29kZSUyRk9wZW5BSVByb2plY3QlMkZKaXJhTUNQVGVzdEFwcGxpY2F0aW9uJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM2QztBQUMxSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2ppcmEtY29kZXgtY29tcGFuaW9uLz8yMjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9oYXN1bi9Db2RlL09wZW5BSVByb2plY3QvSmlyYU1DUFRlc3RBcHBsaWNhdGlvbi9hcHAvYXBpL3dyaXRlLWFjY2Vzcy1yZXF1ZXN0cy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvd3JpdGUtYWNjZXNzLXJlcXVlc3RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvd3JpdGUtYWNjZXNzLXJlcXVlc3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS93cml0ZS1hY2Nlc3MtcmVxdWVzdHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvaGFzdW4vQ29kZS9PcGVuQUlQcm9qZWN0L0ppcmFNQ1BUZXN0QXBwbGljYXRpb24vYXBwL2FwaS93cml0ZS1hY2Nlc3MtcmVxdWVzdHMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3dyaXRlLWFjY2Vzcy1yZXF1ZXN0cy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwrite-access-requests%2Froute&page=%2Fapi%2Fwrite-access-requests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwrite-access-requests%2Froute.ts&appDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/write-access-requests/route.ts":
/*!************************************************!*\
  !*** ./app/api/write-access-requests/route.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\n\nasync function resolveUserId(request) {\n    if (false) {}\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (session?.user?.id) {\n        return session.user.id;\n    }\n    return null;\n}\nasync function POST(request) {\n    const userId = await resolveUserId(request);\n    if (!userId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const body = await request.json();\n    if (!body.ticketKey || !body.reason || !body.scope || !body.approvalPolicy) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Missing fields\"\n        }, {\n            status: 400\n        });\n    }\n    const ticket = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.ticket.findUnique({\n        where: {\n            key: body.ticketKey\n        }\n    });\n    if (!ticket) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Ticket not found\"\n        }, {\n            status: 404\n        });\n    }\n    const requestRecord = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.writeAccessRequest.create({\n        data: {\n            ticketId: ticket.id,\n            userId,\n            reason: body.reason,\n            scope: body.scope,\n            approvalPolicy: body.approvalPolicy,\n            notes: body.notes ?? null,\n            status: \"pending\"\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        id: requestRecord.id,\n        ticketKey: body.ticketKey,\n        reason: requestRecord.reason,\n        scope: requestRecord.scope,\n        approvalPolicy: requestRecord.approvalPolicy,\n        notes: requestRecord.notes,\n        status: requestRecord.status,\n        createdAt: requestRecord.createdAt.toISOString()\n    });\n}\nasync function GET(request) {\n    const userId = await resolveUserId(request);\n    if (!userId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const { searchParams } = new URL(request.url);\n    const ticketKey = searchParams.get(\"ticketKey\");\n    const requests = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.writeAccessRequest.findMany({\n        where: ticketKey ? {\n            ticket: {\n                key: ticketKey\n            }\n        } : undefined,\n        orderBy: {\n            createdAt: \"desc\"\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(requests.map((requestItem)=>({\n            id: requestItem.id,\n            reason: requestItem.reason,\n            scope: requestItem.scope,\n            approvalPolicy: requestItem.approvalPolicy,\n            notes: requestItem.notes,\n            status: requestItem.status,\n            createdAt: requestItem.createdAt.toISOString()\n        })));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3dyaXRlLWFjY2Vzcy1yZXF1ZXN0cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ0U7QUFDRztBQUNIO0FBRTdDLGVBQWVJLGNBQWNDLE9BQWdCO0lBQzNDLElBQUlDLEtBQStCLEVBQUUsRUFLcEM7SUFFRCxNQUFNSSxVQUFVLE1BQU1ULDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO0lBQ2xELElBQUlRLFNBQVNDLE1BQU1DLElBQUk7UUFDckIsT0FBT0YsUUFBUUMsSUFBSSxDQUFDQyxFQUFFO0lBQ3hCO0lBRUEsT0FBTztBQUNUO0FBRU8sZUFBZUMsS0FBS1IsT0FBZ0I7SUFDekMsTUFBTVMsU0FBUyxNQUFNVixjQUFjQztJQUVuQyxJQUFJLENBQUNTLFFBQVE7UUFDWCxPQUFPZCxxREFBWUEsQ0FBQ2UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNwRTtJQUVBLE1BQU1DLE9BQVEsTUFBTWIsUUFBUVUsSUFBSTtJQVFoQyxJQUFJLENBQUNHLEtBQUtDLFNBQVMsSUFBSSxDQUFDRCxLQUFLRSxNQUFNLElBQUksQ0FBQ0YsS0FBS0csS0FBSyxJQUFJLENBQUNILEtBQUtJLGNBQWMsRUFBRTtRQUMxRSxPQUFPdEIscURBQVlBLENBQUNlLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWlCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3RFO0lBRUEsTUFBTU0sU0FBUyxNQUFNcEIsK0NBQU1BLENBQUNvQixNQUFNLENBQUNDLFVBQVUsQ0FBQztRQUM1Q0MsT0FBTztZQUFFQyxLQUFLUixLQUFLQyxTQUFTO1FBQUM7SUFDL0I7SUFFQSxJQUFJLENBQUNJLFFBQVE7UUFDWCxPQUFPdkIscURBQVlBLENBQUNlLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW1CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3hFO0lBRUEsTUFBTVUsZ0JBQWdCLE1BQU14QiwrQ0FBTUEsQ0FBQ3lCLGtCQUFrQixDQUFDQyxNQUFNLENBQUM7UUFDM0RDLE1BQU07WUFDSkMsVUFBVVIsT0FBT1gsRUFBRTtZQUNuQkU7WUFDQU0sUUFBUUYsS0FBS0UsTUFBTTtZQUNuQkMsT0FBT0gsS0FBS0csS0FBSztZQUNqQkMsZ0JBQWdCSixLQUFLSSxjQUFjO1lBQ25DVSxPQUFPZCxLQUFLYyxLQUFLLElBQUk7WUFDckJmLFFBQVE7UUFDVjtJQUNGO0lBRUEsT0FBT2pCLHFEQUFZQSxDQUFDZSxJQUFJLENBQUM7UUFDdkJILElBQUllLGNBQWNmLEVBQUU7UUFDcEJPLFdBQVdELEtBQUtDLFNBQVM7UUFDekJDLFFBQVFPLGNBQWNQLE1BQU07UUFDNUJDLE9BQU9NLGNBQWNOLEtBQUs7UUFDMUJDLGdCQUFnQkssY0FBY0wsY0FBYztRQUM1Q1UsT0FBT0wsY0FBY0ssS0FBSztRQUMxQmYsUUFBUVUsY0FBY1YsTUFBTTtRQUM1QmdCLFdBQVdOLGNBQWNNLFNBQVMsQ0FBQ0MsV0FBVztJQUNoRDtBQUNGO0FBRU8sZUFBZUMsSUFBSTlCLE9BQWdCO0lBQ3hDLE1BQU1TLFNBQVMsTUFBTVYsY0FBY0M7SUFFbkMsSUFBSSxDQUFDUyxRQUFRO1FBQ1gsT0FBT2QscURBQVlBLENBQUNlLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDcEU7SUFFQSxNQUFNLEVBQUVtQixZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJaEMsUUFBUWlDLEdBQUc7SUFDNUMsTUFBTW5CLFlBQVlpQixhQUFhM0IsR0FBRyxDQUFDO0lBRW5DLE1BQU04QixXQUFXLE1BQU1wQywrQ0FBTUEsQ0FBQ3lCLGtCQUFrQixDQUFDWSxRQUFRLENBQUM7UUFDeERmLE9BQU9OLFlBQVk7WUFBRUksUUFBUTtnQkFBRUcsS0FBS1A7WUFBVTtRQUFFLElBQUlzQjtRQUNwREMsU0FBUztZQUFFVCxXQUFXO1FBQU87SUFDL0I7SUFFQSxPQUFPakMscURBQVlBLENBQUNlLElBQUksQ0FDdEJ3QixTQUFTSSxHQUFHLENBQUMsQ0FBQ0MsY0FBaUI7WUFDN0JoQyxJQUFJZ0MsWUFBWWhDLEVBQUU7WUFDbEJRLFFBQVF3QixZQUFZeEIsTUFBTTtZQUMxQkMsT0FBT3VCLFlBQVl2QixLQUFLO1lBQ3hCQyxnQkFBZ0JzQixZQUFZdEIsY0FBYztZQUMxQ1UsT0FBT1ksWUFBWVosS0FBSztZQUN4QmYsUUFBUTJCLFlBQVkzQixNQUFNO1lBQzFCZ0IsV0FBV1csWUFBWVgsU0FBUyxDQUFDQyxXQUFXO1FBQzlDO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qaXJhLWNvZGV4LWNvbXBhbmlvbi8uL2FwcC9hcGkvd3JpdGUtYWNjZXNzLXJlcXVlc3RzL3JvdXRlLnRzP2YwMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVVc2VySWQocmVxdWVzdDogUmVxdWVzdCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwidGVzdFwiKSB7XG4gICAgY29uc3QgdGVzdFVzZXJJZCA9IHJlcXVlc3QuaGVhZGVycy5nZXQoXCJ4LXRlc3QtdXNlci1pZFwiKTtcbiAgICBpZiAodGVzdFVzZXJJZCkge1xuICAgICAgcmV0dXJuIHRlc3RVc2VySWQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICBpZiAoc2Vzc2lvbj8udXNlcj8uaWQpIHtcbiAgICByZXR1cm4gc2Vzc2lvbi51c2VyLmlkO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVzb2x2ZVVzZXJJZChyZXF1ZXN0KTtcblxuICBpZiAoIXVzZXJJZCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICBjb25zdCBib2R5ID0gKGF3YWl0IHJlcXVlc3QuanNvbigpKSBhcyB7XG4gICAgdGlja2V0S2V5Pzogc3RyaW5nO1xuICAgIHJlYXNvbj86IHN0cmluZztcbiAgICBzY29wZT86IHN0cmluZztcbiAgICBhcHByb3ZhbFBvbGljeT86IHN0cmluZztcbiAgICBub3Rlcz86IHN0cmluZztcbiAgfTtcblxuICBpZiAoIWJvZHkudGlja2V0S2V5IHx8ICFib2R5LnJlYXNvbiB8fCAhYm9keS5zY29wZSB8fCAhYm9keS5hcHByb3ZhbFBvbGljeSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgZmllbGRzXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIGNvbnN0IHRpY2tldCA9IGF3YWl0IHByaXNtYS50aWNrZXQuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsga2V5OiBib2R5LnRpY2tldEtleSB9XG4gIH0pO1xuXG4gIGlmICghdGlja2V0KSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVGlja2V0IG5vdCBmb3VuZFwiIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cblxuICBjb25zdCByZXF1ZXN0UmVjb3JkID0gYXdhaXQgcHJpc21hLndyaXRlQWNjZXNzUmVxdWVzdC5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHRpY2tldElkOiB0aWNrZXQuaWQsXG4gICAgICB1c2VySWQsXG4gICAgICByZWFzb246IGJvZHkucmVhc29uLFxuICAgICAgc2NvcGU6IGJvZHkuc2NvcGUsXG4gICAgICBhcHByb3ZhbFBvbGljeTogYm9keS5hcHByb3ZhbFBvbGljeSxcbiAgICAgIG5vdGVzOiBib2R5Lm5vdGVzID8/IG51bGwsXG4gICAgICBzdGF0dXM6IFwicGVuZGluZ1wiXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgIGlkOiByZXF1ZXN0UmVjb3JkLmlkLFxuICAgIHRpY2tldEtleTogYm9keS50aWNrZXRLZXksXG4gICAgcmVhc29uOiByZXF1ZXN0UmVjb3JkLnJlYXNvbixcbiAgICBzY29wZTogcmVxdWVzdFJlY29yZC5zY29wZSxcbiAgICBhcHByb3ZhbFBvbGljeTogcmVxdWVzdFJlY29yZC5hcHByb3ZhbFBvbGljeSxcbiAgICBub3RlczogcmVxdWVzdFJlY29yZC5ub3RlcyxcbiAgICBzdGF0dXM6IHJlcXVlc3RSZWNvcmQuc3RhdHVzLFxuICAgIGNyZWF0ZWRBdDogcmVxdWVzdFJlY29yZC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlc29sdmVVc2VySWQocmVxdWVzdCk7XG5cbiAgaWYgKCF1c2VySWQpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuICB9XG5cbiAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICBjb25zdCB0aWNrZXRLZXkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidGlja2V0S2V5XCIpO1xuXG4gIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgcHJpc21hLndyaXRlQWNjZXNzUmVxdWVzdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHRpY2tldEtleSA/IHsgdGlja2V0OiB7IGtleTogdGlja2V0S2V5IH0gfSA6IHVuZGVmaW5lZCxcbiAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfVxuICB9KTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgcmVxdWVzdHMubWFwKChyZXF1ZXN0SXRlbSkgPT4gKHtcbiAgICAgIGlkOiByZXF1ZXN0SXRlbS5pZCxcbiAgICAgIHJlYXNvbjogcmVxdWVzdEl0ZW0ucmVhc29uLFxuICAgICAgc2NvcGU6IHJlcXVlc3RJdGVtLnNjb3BlLFxuICAgICAgYXBwcm92YWxQb2xpY3k6IHJlcXVlc3RJdGVtLmFwcHJvdmFsUG9saWN5LFxuICAgICAgbm90ZXM6IHJlcXVlc3RJdGVtLm5vdGVzLFxuICAgICAgc3RhdHVzOiByZXF1ZXN0SXRlbS5zdGF0dXMsXG4gICAgICBjcmVhdGVkQXQ6IHJlcXVlc3RJdGVtLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXG4gICAgfSkpXG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwicmVzb2x2ZVVzZXJJZCIsInJlcXVlc3QiLCJwcm9jZXNzIiwidGVzdFVzZXJJZCIsImhlYWRlcnMiLCJnZXQiLCJzZXNzaW9uIiwidXNlciIsImlkIiwiUE9TVCIsInVzZXJJZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImJvZHkiLCJ0aWNrZXRLZXkiLCJyZWFzb24iLCJzY29wZSIsImFwcHJvdmFsUG9saWN5IiwidGlja2V0IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwia2V5IiwicmVxdWVzdFJlY29yZCIsIndyaXRlQWNjZXNzUmVxdWVzdCIsImNyZWF0ZSIsImRhdGEiLCJ0aWNrZXRJZCIsIm5vdGVzIiwiY3JlYXRlZEF0IiwidG9JU09TdHJpbmciLCJHRVQiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJyZXF1ZXN0cyIsImZpbmRNYW55IiwidW5kZWZpbmVkIiwib3JkZXJCeSIsIm1hcCIsInJlcXVlc3RJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/write-access-requests/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GITHUB_ID ?? \"\",\n            clientSecret: process.env.GITHUB_SECRET ?? \"\"\n        })\n    ],\n    session: {\n        strategy: \"database\"\n    },\n    callbacks: {\n        session: ({ session, user })=>{\n            if (session.user) {\n                session.user.id = user.id;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dEO0FBQ0U7QUFDeEI7QUFFM0IsTUFBTUcsY0FBK0I7SUFDMUNDLFNBQVNILHdFQUFhQSxDQUFDQywyQ0FBTUE7SUFDN0JHLFdBQVc7UUFDVEwsc0VBQWNBLENBQUM7WUFDYk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLElBQUk7WUFDbkNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYSxJQUFJO1FBQzdDO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsV0FBVztRQUNURixTQUFTLENBQUMsRUFBRUEsT0FBTyxFQUFFRyxJQUFJLEVBQUU7WUFDekIsSUFBSUgsUUFBUUcsSUFBSSxFQUFFO2dCQUNoQkgsUUFBUUcsSUFBSSxDQUFDQyxFQUFFLEdBQUdELEtBQUtDLEVBQUU7WUFDM0I7WUFDQSxPQUFPSjtRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamlyYS1jb2RleC1jb21wYW5pb24vLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi9wcmlzbWFcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCA/PyBcIlwiLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUID8/IFwiXCJcbiAgICB9KVxuICBdLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiZGF0YWJhc2VcIlxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiAoeyBzZXNzaW9uLCB1c2VyIH0pID0+IHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJHaXRIdWJQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwidXNlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwrite-access-requests%2Froute&page=%2Fapi%2Fwrite-access-requests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwrite-access-requests%2Froute.ts&appDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhasun%2FCode%2FOpenAIProject%2FJiraMCPTestApplication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();