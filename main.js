(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/core/components/app/app.component.css":
/*!*******************************************************!*\
  !*** ./src/app/core/components/app/app.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/app/app.component.html":
/*!********************************************************!*\
  !*** ./src/app/core/components/app/app.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Routing in\n    <strong>#Angular</strong>\n</h1>\n\n<nav>\n    <ul>\n        <li>\n            <a routerLink>Strona główna</a>\n        </li>\n        <li>\n            <a routerLink=\"/ga\">Galeria</a>\n        </li>\n        <li>\n            <a routerLink=\"/authors\">Autorzy</a>\n        </li>\n    </ul>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/core/components/app/app.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core/components/app/app.component.ts ***!
  \******************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test-angular-routing';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/core/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/core/components/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_page_gallery_page_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-gallery/page-gallery.component */ "./src/app/core/pages/page-gallery/page-gallery.component.ts");
/* harmony import */ var _pages_page_authors_page_authors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-authors/page-authors.component */ "./src/app/core/pages/page-authors/page-authors.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/core/pages/page-not-found/page-not-found.component.ts");






var routes = [
    {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    },
    {
        path: 'ga',
        pathMatch: 'prefix',
        redirectTo: '/gallery'
    },
    {
        path: 'gallery',
        component: _pages_page_gallery_page_gallery_component__WEBPACK_IMPORTED_MODULE_3__["PageGalleryComponent"]
    },
    {
        path: 'a',
        pathMatch: 'prefix',
        redirectTo: '/authors'
    },
    {
        path: 'authors',
        component: _pages_page_authors_page_authors_component__WEBPACK_IMPORTED_MODULE_4__["PageAuthorsComponent"]
    },
    {
        path: '**',
        component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/core/components/app/app.component.ts");
/* harmony import */ var _pages_page_gallery_page_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-gallery/page-gallery.component */ "./src/app/core/pages/page-gallery/page-gallery.component.ts");
/* harmony import */ var _pages_page_authors_page_authors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-authors/page-authors.component */ "./src/app/core/pages/page-authors/page-authors.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/core/pages/page-not-found/page-not-found.component.ts");








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_page_gallery_page_gallery_component__WEBPACK_IMPORTED_MODULE_5__["PageGalleryComponent"],
                _pages_page_authors_page_authors_component__WEBPACK_IMPORTED_MODULE_6__["PageAuthorsComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreRoutingModule"]
            ],
            providers: [],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/pages/page-authors/page-authors.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/pages/page-authors/page-authors.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcGFnZS1hdXRob3JzL3BhZ2UtYXV0aG9ycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/pages/page-authors/page-authors.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/core/pages/page-authors/page-authors.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-authors works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/pages/page-authors/page-authors.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/pages/page-authors/page-authors.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageAuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAuthorsComponent", function() { return PageAuthorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageAuthorsComponent = /** @class */ (function () {
    function PageAuthorsComponent() {
    }
    PageAuthorsComponent.prototype.ngOnInit = function () {
    };
    PageAuthorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-authors',
            template: __webpack_require__(/*! ./page-authors.component.html */ "./src/app/core/pages/page-authors/page-authors.component.html"),
            styles: [__webpack_require__(/*! ./page-authors.component.css */ "./src/app/core/pages/page-authors/page-authors.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageAuthorsComponent);
    return PageAuthorsComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-gallery/page-gallery.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/pages/page-gallery/page-gallery.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcGFnZS1nYWxsZXJ5L3BhZ2UtZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/pages/page-gallery/page-gallery.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/core/pages/page-gallery/page-gallery.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-gallery works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/pages/page-gallery/page-gallery.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/pages/page-gallery/page-gallery.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageGalleryComponent", function() { return PageGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageGalleryComponent = /** @class */ (function () {
    function PageGalleryComponent() {
    }
    PageGalleryComponent.prototype.ngOnInit = function () {
    };
    PageGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-gallery',
            template: __webpack_require__(/*! ./page-gallery.component.html */ "./src/app/core/pages/page-gallery/page-gallery.component.html"),
            styles: [__webpack_require__(/*! ./page-gallery.component.css */ "./src/app/core/pages/page-gallery/page-gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageGalleryComponent);
    return PageGalleryComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/core/pages/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/pages/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/pages/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/pages/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/core/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/core/pages/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/piecioshka/projects/test-angular-routing/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map