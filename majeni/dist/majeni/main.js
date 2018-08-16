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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/main-layout/main-layout.component */ "./src/app/layout/main-layout/main-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_sticky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-sticky */ "./node_modules/ng-sticky/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/main-layout/main-layout.component */ "./src/app/layout/main-layout/main-layout.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _layout_main_nav_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/main-nav.directive */ "./src/app/layout/main-nav.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ng_sticky__WEBPACK_IMPORTED_MODULE_2__["NgStickyDirective"],
                _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"],
                _layout_main_nav_directive__WEBPACK_IMPORTED_MODULE_7__["MainNavDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/main-layout/main-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header\">\r\n  <nav class=\"main-nav\" ng-sticky [offSet]=\"0\" [addClass]=\"'main-sticky'\" appMainNav #ref=\"appMainNav\">\r\n    <div class=\"main-nav__logo \" ng-sticky [offSet]=\"0\" [addClass]=\"'main-sticky__logo'\">\r\n      <img class=\"man-nav__logo-green\" src=\"/assets/images/logo-white.png\">\r\n    </div>\r\n    <div class=\"main-nav__toggle\">\r\n      <i class=\"main-nav__bars fa fa-bars\" ng-sticky [offSet]=\"0\" [addClass]=\"'main-bars'\"></i>\r\n    </div>\r\n    <ul class=\"main-nav__list \" ng-sticky [addClass]=\"'main-sticky-link'\" [ngClass]=\"ref.click === true? 'Navbar__ToggleShow' :''\">\r\n      <li class=\"main-nav__item\">\r\n        <a class=\"main-nav__link\" href=\"#\">Home</a>\r\n      </li>\r\n      <li class=\"main-nav__item\">\r\n        <a class=\"main-nav__link\" href=\"#\">About us</a>\r\n      </li>\r\n      <li class=\"main-nav__item\">\r\n        <a class=\"main-nav__link\" href=\"#\">What we do</a>\r\n      </li>\r\n      <li class=\"main-nav__item\">\r\n        <a class=\"main-nav__link \" href=\"#\">Projects</a>\r\n      </li>\r\n      <li class=\"main-nav__item\">\r\n        <a class=\"main-nav__link \" href=\"#\">Contact</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <div class=\"main-banner\">\r\n    <h2>We are a team of\r\n      <strong>experts</strong>.</h2>\r\n    <p>Founded in 2014, the BDTS Poland specializes in IT personnel outsourcing for the areas of banking, insurance, telecommunications,\r\n      high-tech, pharmacy, logistics and many others</p>\r\n    <a href=\"http://en.astek.pl/about-us/\" class=\"main-banner__green-button main-banner__arrow-right\">Read more\r\n      <i></i>\r\n    </a>\r\n    <a href=\"#\" class=\"main-banner__arrow-down\"></a>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lobortis est. In felis erat, dignissim sed molestie\r\n    sed, dictum sit amet purus. Nulla ultrices rutrum maximus. Aenean hendrerit, nisl sit amet sagittis viverra, tellus erat\r\n    euismod risus, egestas elementum nibh eros sed ante. Donec imperdiet convallis dui, et semper justo venenatis non. Vestibulum\r\n    a tincidunt sem, non bibendum nunc. Nam tincidunt sed lectus condimentum luctus. Fusce ut blandit lacus. In maximus libero\r\n    vitae velit consequat lobortis. Ut pellentesque, neque ut interdum consectetur, dui dui posuere nulla, sit amet luctus\r\n    nibh augue sed justo. Sed quis gravida leo. Sed cursus erat arcu, eget accumsan orci consequat sed. Phasellus quis dui\r\n    sapien. Praesent at maximus neque. Suspendisse pharetra, justo et rhoncus dapibus, dolor leo lacinia est, non semper\r\n    purus tortor ut turpis. Vestibulum pretium tristique purus eu aliquet. In hac habitasse platea dictumst. Pellentesque\r\n    a mi id eros pharetra condimentum. In eu leo sit amet sem dignissim facilisis. Phasellus vitae orci leo. Etiam tempus\r\n    ipsum dui, elementum semper elit interdum vitae. Etiam eget consequat quam, non dignissim ipsum. Morbi quis laoreet massa.\r\n    Fusce commodo mauris eu posuere faucibus. Integer ac urna porta, scelerisque elit id, molestie diam. Pellentesque consectetur\r\n    magna nec dolor accumsan, a auctor justo faucibus. Mauris a dictum lacus. Donec auctor lorem ante, in porttitor eros\r\n    faucibus quis. Sed et libero erat. In quis dolor porttitor, efficitur lacus nec, placerat nulla. Nunc lobortis iaculis\r\n    congue. Nam velit orci, molestie sed lacinia et, semper a ipsum. Duis lacinia efficitur urna nec congue. Etiam rhoncus\r\n    mattis faucibus. Sed malesuada orci vitae convallis rutrum. Sed ac lorem sapien. Maecenas malesuada nunc eu tempor fringilla.\r\n    Integer sit amet nulla neque. Phasellus dictum tortor sed arcu venenatis dapibus. Nullam cursus ligula vel scelerisque\r\n    lobortis. Integer luctus a urna nec sodales. Praesent suscipit ultricies congue. Nulla mattis arcu ut varius euismod.\r\n    Donec vehicula et nisl in molestie. Mauris maximus ligula sed orci ornare, sed ornare tellus varius. Donec erat risus,\r\n    scelerisque quis ipsum ac, vulputate tempus magna. Sed sed justo sed massa consequat facilisis. Sed tempus commodo leo\r\n    ac finibus. Fusce gravida sodales mi. Maecenas eu posuere ante. Quisque et arcu erat. Pellentesque varius nisi feugiat,\r\n    ultricies nulla nec, fringilla turpis. Integer tincidunt maximus urna, quis placerat sapien consectetur eget. Mauris\r\n    dignissim fermentum porttitor. Fusce maximus neque ac elementum mattis. Generated 5 paragraphs, 385 words, 2590 bytes\r\n    of Lorem Ipsum</p>\r\n\r\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lobortis est. In felis erat, dignissim sed molestie sed,\r\n  dictum sit amet purus. Nulla ultrices rutrum maximus. Aenean hendrerit, nisl sit amet sagittis viverra, tellus erat euismod\r\n  risus, egestas elementum nibh eros sed ante. Donec imperdiet convallis dui, et semper justo venenatis non. Vestibulum a\r\n  tincidunt sem, non bibendum nunc. Nam tincidunt sed lectus condimentum luctus. Fusce ut blandit lacus. In maximus libero\r\n  vitae velit consequat lobortis. Ut pellentesque, neque ut interdum consectetur, dui dui posuere nulla, sit amet luctus\r\n  nibh augue sed justo. Sed quis gravida leo. Sed cursus erat arcu, eget accumsan orci consequat sed. Phasellus quis dui\r\n  sapien. Praesent at maximus neque. Suspendisse pharetra, justo et rhoncus dapibus, dolor leo lacinia est, non semper purus\r\n  tortor ut turpis. Vestibulum pretium tristique purus eu aliquet. In hac habitasse platea dictumst. Pellentesque a mi id\r\n  eros pharetra condimentum. In eu leo sit amet sem dignissim facilisis. Phasellus vitae orci leo. Etiam tempus ipsum dui,\r\n  elementum semper elit interdum vitae. Etiam eget consequat quam, non dignissim ipsum. Morbi quis laoreet massa. Fusce commodo\r\n  mauris eu posuere faucibus. Integer ac urna porta, scelerisque elit id, molestie diam. Pellentesque consectetur magna nec\r\n  dolor accumsan, a auctor justo faucibus. Mauris a dictum lacus. Donec auctor lorem ante, in porttitor eros faucibus quis.\r\n  Sed et libero erat. In quis dolor porttitor, efficitur lacus nec, placerat nulla. Nunc lobortis iaculis congue. Nam velit\r\n  orci, molestie sed lacinia et, semper a ipsum. Duis lacinia efficitur urna nec congue. Etiam rhoncus mattis faucibus. Sed\r\n  malesuada orci vitae convallis rutrum. Sed ac lorem sapien. Maecenas malesuada nunc eu tempor fringilla. Integer sit amet\r\n  nulla neque. Phasellus dictum tortor sed arcu venenatis dapibus. Nullam cursus ligula vel scelerisque lobortis. Integer\r\n  luctus a urna nec sodales. Praesent suscipit ultricies congue. Nulla mattis arcu ut varius euismod. Donec vehicula et nisl\r\n  in molestie. Mauris maximus ligula sed orci ornare, sed ornare tellus varius. Donec erat risus, scelerisque quis ipsum\r\n  ac, vulputate tempus magna. Sed sed justo sed massa consequat facilisis. Sed tempus commodo leo ac finibus. Fusce gravida\r\n  sodales mi. Maecenas eu posuere ante. Quisque et arcu erat. Pellentesque varius nisi feugiat, ultricies nulla nec, fringilla\r\n  turpis. Integer tincidunt maximus urna, quis placerat sapien consectetur eget. Mauris dignissim fermentum porttitor. Fusce\r\n  maximus neque ac elementum mattis. Generated 5 paragraphs, 385 words, 2590 bytes of Lorem Ipsum\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/main-layout/main-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'icomoon';\n  src: url(\"/assets/fonts/icomoon.ttf\"); }\n\n.main-header {\n  width: 100%;\n  float: left;\n  display: block;\n  min-height: 100vh;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  padding-bottom: 100px;\n  background-image: url(\"/assets/images/banner.jpg\"); }\n\n.main-sticky {\n  background-color: white;\n  height: 100px; }\n\n.main-sticky__logo {\n    position: relative !important;\n    background-repeat: no-repeat;\n    background-image: url(\"/assets/images/logo-green.png\"); }\n\n.main-sticky-link .main-nav__link {\n  color: #444 !important; }\n\n.main-nav {\n  position: -webkit-sticky;\n  position: sticky;\n  align-items: center;\n  justify-content: space-around;\n  left: 0;\n  display: flex;\n  z-index: 2;\n  width: 100%; }\n\n.main-nav__logo {\n    position: relative; }\n\n.main-nav__bars {\n    color: white; }\n\n.main-nav__list {\n    list-style: none;\n    display: flex;\n    color: white;\n    position: relative !important; }\n\n.main-nav__item {\n    padding: 24px 27px;\n    position: relative; }\n\n.main-nav__item:after {\n      transition: all 0.15s ease-in-out;\n      content: '';\n      display: block;\n      float: left;\n      background-color: #f5f5f5;\n      width: 2px;\n      height: 60px;\n      -webkit-transform: rotate(20deg);\n      transform: skew(155deg);\n      position: absolute;\n      right: 0;\n      bottom: 6px; }\n\n.main-nav__item:last-child::after {\n      content: '';\n      width: 0px; }\n\n.main-nav__item:hover::after {\n      width: calc(100% + 1px); }\n\n.main-nav__item:hover .main-nav__link {\n      color: #444;\n      position: relative;\n      z-index: 3; }\n\n.main-nav__link {\n    list-style: none;\n    font-size: 1rem;\n    color: white;\n    font-family: \"proxima-nova-n6\", \"proxima-nova\";\n    font-style: normal;\n    font-weight: 600; }\n\n.main-nav__bars {\n    display: none; }\n\n.main-banner {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center; }\n\n.main-banner h2 {\n    font-size: 3.75rem;\n    line-height: 5.375rem;\n    margin-bottom: 1.5rem;\n    color: #fff;\n    font-family: \"proxima-nova-n4\", \"proxima-nova\";\n    font-style: normal;\n    font-weight: 400;\n    margin-top: 70px;\n    font-weight: normal; }\n\n.main-banner p {\n    font-size: 1.25rem;\n    font-weight: normal;\n    color: white;\n    text-align: center;\n    max-width: 700px;\n    margin-bottom: 3.375rem;\n    margin-right: auto;\n    margin-left: auto; }\n\n.main-banner__green-button {\n    height: 3.4375rem;\n    background-color: #00964e;\n    text-decoration: none;\n    color: #fff;\n    padding: 11px 13px;\n    display: inline-block;\n    box-sizing: border-box;\n    line-height: 27px;\n    border-radius: 30px;\n    border: 3px solid #00964e;\n    font-size: 1.125rem;\n    padding-right: 50px;\n    font-family: \"proxima-nova-n6\", \"proxima-nova\";\n    font-style: normal;\n    font-weight: 600;\n    position: relative;\n    transition: all 0.15s ease-in-out; }\n\n.main-banner__arrow-right::after {\n    font-family: 'icomoon';\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    content: \"\\e604\" !important;\n    font-size: 33px; }\n\n.main-banner__green-button::after {\n    float: right;\n    content: '';\n    display: block;\n    width: 34px;\n    height: 34px;\n    margin-left: 10px;\n    top: 10px;\n    position: absolute;\n    right: 10px; }\n\n.main-banner__green-button:hover {\n    background-color: white;\n    color: green; }\n\n.main-banner__arrow-down {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    width: 34px;\n    height: 34px;\n    position: absolute;\n    bottom: 100px;\n    margin-left: -17px;\n    left: 50%;\n    z-index: 2;\n    transition: all 0.15s ease-in-out;\n    background-image: url(\"/assets/images/icon-arrow-right.png\"); }\n\n#main-sticky {\n  background-color: white; }\n\n@media only screen and (max-width: 768px) {\n  .main-nav {\n    margin: 0;\n    display: block;\n    position: inherit;\n    height: auto;\n    overflow: auto;\n    background: white; }\n  .main-nav__list {\n    margin-top: 20px;\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n  .main-nav__item:after {\n    content: '';\n    width: 1px; }\n  .Navbar__ToggleShow {\n    display: flex; }\n  .main-nav__logo {\n    position: relative;\n    bottom: 49px;\n    background-repeat: no-repeat;\n    background-image: url(\"/assets/images/logo-green.png\"); }\n  .man-nav__logo-green {\n    visibility: hidden !important; }\n  .main-nav__bars {\n    display: flex;\n    justify-content: flex-end;\n    cursor: pointer;\n    padding: 26px;\n    font-size: 50px;\n    color: #00964e;\n    /* position: absolute; */\n    top: 0;\n    /* bottom: 36px; */\n    /* right: 28px; */\n    margin-top: -196px; }\n  .main-nav__link {\n    color: #444; }\n  .main-banner__arrow-down {\n    display: block !important;\n    position: initial;\n    margin: 0 auto;\n    margin-top: 50px; }\n  .main-banner h2 {\n    text-align: center; } }\n"

/***/ }),

/***/ "./src/app/layout/main-layout/main-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    MainLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-layout',
            template: __webpack_require__(/*! ./main-layout.component.html */ "./src/app/layout/main-layout/main-layout.component.html"),
            styles: [__webpack_require__(/*! ./main-layout.component.scss */ "./src/app/layout/main-layout/main-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/main-nav.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/main-nav.directive.ts ***!
  \**********************************************/
/*! exports provided: MainNavDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavDirective", function() { return MainNavDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavDirective = /** @class */ (function () {
    function MainNavDirective() {
        this.click = false;
    }
    MainNavDirective.prototype.onClick = function () {
        this.click = !this.click;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.is-open'),
        __metadata("design:type", Object)
    ], MainNavDirective.prototype, "click", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MainNavDirective.prototype, "onClick", null);
    MainNavDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMainNav]',
            exportAs: 'appMainNav'
        }),
        __metadata("design:paramtypes", [])
    ], MainNavDirective);
    return MainNavDirective;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bonge\Documents\Projects\agency\majeni\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map