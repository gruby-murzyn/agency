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
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_whatwedo_whatwedo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/whatwedo/whatwedo.component */ "./src/app/components/whatwedo/whatwedo.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
        children: [
            {
                path: 'about',
                component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
            },
            {
                path: 'what',
                component: _components_whatwedo_whatwedo_component__WEBPACK_IMPORTED_MODULE_5__["WhatwedoComponent"]
            },
            {
                path: 'projects',
                component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]
            },
            {
                path: 'contacts',
                component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
            }
        ]
    }
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
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/main-layout/main-layout.component */ "./src/app/layout/main-layout/main-layout.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _layout_main_nav_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/main-nav.directive */ "./src/app/layout/main-nav.directive.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_whatwedo_whatwedo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/whatwedo/whatwedo.component */ "./src/app/components/whatwedo/whatwedo.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_why_choose_us_why_choose_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/why-choose-us/why-choose-us.component */ "./src/app/components/why-choose-us/why-choose-us.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/how-it-works/how-it-works.component */ "./src/app/components/how-it-works/how-it-works.component.ts");
/* harmony import */ var _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/partners/partners.component */ "./src/app/components/partners/partners.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ng_sticky__WEBPACK_IMPORTED_MODULE_2__["NgStickyDirective"],
                _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"],
                _layout_main_nav_directive__WEBPACK_IMPORTED_MODULE_8__["MainNavDirective"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_whatwedo_whatwedo_component__WEBPACK_IMPORTED_MODULE_10__["WhatwedoComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_why_choose_us_why_choose_us_component__WEBPACK_IMPORTED_MODULE_12__["WhyChooseUsComponent"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_13__["TeamComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
                _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_17__["ClientsComponent"],
                _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_18__["HowItWorksComponent"],
                _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_19__["PartnersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__["FlashMessagesModule"].forRoot(),
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [_contact_service__WEBPACK_IMPORTED_MODULE_21__["ContactService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-padding\" id=\"about\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col about\">\r\n        <h1>About our company</h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"featured-content-thumb\">\r\n          <img src=\"/assets/images/feature-thumb-2.png\" class=\"img-fluid\" alt=\"About Thumb\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"right-content-md\">\r\n          <div class=\"featured-content\">\r\n            <h3>We’re Innovators\r\n              <span>&amp; Marketing Experts.</span>\r\n            </h3>\r\n            <p class=\"subtext\">It is a long established fact that a reader will be distracted by the readable content of a page when looking\r\n              at its layout.</p>\r\n            <ul>\r\n              <li>It was popularised in the 1960s with the release of Letraset Sheets containing lorem.</li>\r\n              <li>But I must explain to you how all this mistaken</li>\r\n              <li> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".featured-content ul li::before {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  top: 3px;\n  left: -40px;\n  content: url(\"/assets/images/check.png\"); }\n\n.featured-content ul {\n  padding: 0;\n  margin: 25px 0 0 40px;\n  list-style: none; }\n\n.featured-content ul li {\n  position: relative;\n  font-size: 1.5rem; }\n\nh1 {\n  font-size: 4.0rem;\n  font-weight: 800;\n  font-family: 'Satisfy', cursive;\n  color: #16334e;\n  line-height: 1;\n  margin-bottom: 112px; }\n\n.about {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/clients.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/clients/clients.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  clients works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/clients/clients.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/clients/clients.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/clients/clients.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/clients/clients.component.ts ***!
  \*********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
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

var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.scss */ "./src/app/components/clients/clients.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\" id=\"contacts\">\r\n  <div class=\"main-footer__header\">\r\n    <h3>Contact Us</h3>\r\n    <span>Get in touch</span>\r\n  </div>\r\n  <div class=\"main-footer__details\">\r\n    <div class=\"main-footer__left\">\r\n      <p>\r\n        <i class=\"font fa fa-mobile-phone fa-5x\"></i>\r\n        <br>\r\n        <br>\r\n        <span>Call us</span>\r\n        <br>\r\n        <span>729 251 347</span>\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"main-footer__center\">\r\n      <p>\r\n        <i class=\"font fa fa-map-marker fa-5x\"></i>\r\n        <br>\r\n        <br>\r\n        <span>ul.wodna 16</span>\r\n        <br>\r\n        <span>05-503 Głosków</span>\r\n        <br>\r\n        <span>Poland</span>\r\n      </p>\r\n    </div>\r\n    <div class=\"main-footer__right\">\r\n      <p>\r\n        <i class=\"font fa fa-envelope fa-5x\"></i>\r\n        <br>\r\n        <br>\r\n        <span>Email us</span>\r\n        <br>\r\n        <span>majeni@info.com</span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <span class=\"border-top my-3\"></span>\r\n  <form [formGroup]=\"angForm\" method=\"POST\" novalidate>\r\n    <div class=\"message\">\r\n      <h3> Write to us </h3>\r\n    </div>\r\n    <div class=\"form__top\">\r\n      <div class=\"form__left\">\r\n        <div class=\"form__group\">\r\n          <input class=\"form__input form__input--name\" type=\"text\"   formControlName=\"name\" placeholder=\"name\" #name>\r\n        </div>\r\n        <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"angForm.controls['name'].errors.required\">\r\n            Name is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"form__group\">\r\n          <input class=\"form__input form__input--email\" type=\"email\"  formControlName=\"email\" placeholder=\"email\" #email>\r\n        </div>\r\n        <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['message'].dirty || angForm.controls['message'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"angForm.controls['message'].errors.required\">\r\n            message is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form__right\">\r\n        <div class=\"form__group\">\r\n          <textarea class=\"form__input form__input--textarea\" placeholder=\"Message\" formControlName=\"message\"  #message\r\n            rows=\"3\"></textarea>\r\n        </div>\r\n        <div *ngIf=\"angForm.controls['message'].invalid && (angForm.controls['message'].dirty || angForm.controls['message'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"angForm.controls['message'].errors.required\">\r\n            message is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form__center\">\r\n        <flash-messages></flash-messages>\r\n    </div>\r\n    <div class=\"form__down\">\r\n      <div class=\"form__group\">\r\n        <button (click)=\"sendMail(name.value, email.value, message.value)\" [disabled]=\"angForm.pristine || angForm.invalid\"  class=\"form__input form__input--submit\" name=\"submit\" type=\"submit\" value=\"SEND MESSAGE\">SEND MESSAGE\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n  <div class=\"main-footer__copy-right\">\r\n    <div class=\"main-footer__copy-left\">\r\n      <p class=\"copyrights\">Copyright © 2018 BDTS Polska Sp. z o.o. designed by Geofrey Zellah\r\n      </p>\r\n    </div>\r\n    <div class=\"main-footer__caret-up\" [ngx-scroll-to]=\"'up'\">\r\n      <span class=\"fa fa-caret-up icon-round\"></span>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-footer {\n  color: white;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/images/blue-footer-bg.png\"); }\n  .main-footer__header {\n    display: block;\n    text-align: center;\n    padding-top: 60px; }\n  .main-footer__details {\n    padding: 60px;\n    margin-top: 190px;\n    display: flex;\n    justify-content: space-evenly;\n    border-bottom: 2px solid;\n    margin-bottom: 54px; }\n  .form__top {\n  display: flex;\n  justify-content: center; }\n  .form__down {\n  display: flex;\n  justify-content: center;\n  margin: 30px; }\n  .message {\n  display: flex;\n  justify-content: center; }\n  .form__group {\n  margin: 30px; }\n  .form__input {\n  padding: 15px 20px;\n  width: 400px;\n  border-radius: 4px; }\n  .form__input--textarea {\n    height: 146px; }\n  .form__input--submit {\n    font-size: 14px;\n    background-color: #00964e;\n    line-height: 18px;\n    width: 200px !important;\n    padding: 12px 30px;\n    color: white;\n    border: 3px solid #00964e;\n    border-radius: 30px;\n    margin-bottom: 70px;\n    text-transform: uppercase;\n    height: 3.4375rem;\n    width: 200px;\n    cursor: pointer; }\n  .form__input--submit:hover {\n    background-color: white;\n    color: #00964e; }\n  .font {\n  color: red; }\n  .main-footer__copy-right {\n  display: flex;\n  justify-content: space-around;\n  background-color: #00964e;\n  opacity: 0.5; }\n  .main-footer__caret-up .icon-round {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #232838;\n  box-shadow: 0 18px 32px rgba(0, 0, 0, 0.28);\n  line-height: 32px;\n  position: relative;\n  color: #fff;\n  font-size: 2.571em;\n  text-align: center; }\n  .main-footer__caret-up .icon-round:hover {\n  background: red; }\n  @media only screen and (max-width: 768px) {\n  .main-footer__details {\n    display: block;\n    text-align: center;\n    overflow: auto; }\n  .form__top {\n    display: block;\n    overflow: auto; }\n  .form__group {\n    overflow: auto; } }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contact.service */ "./src/app/contact.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(flashMessages, fb, contactService) {
        this.flashMessages = flashMessages;
        this.fb = fb;
        this.contactService = contactService;
        this.createForm();
    }
    FooterComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    FooterComponent.prototype.sendMail = function (name, email, message) {
        var _this = this;
        this.contactService.sendEmail(name, email, message).subscribe(function (success) {
            _this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
        }, function (error) {
            _this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        });
    };
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/how-it-works/how-it-works.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-box weather snow\" id=\"what\">\n<div class=\"container how-it-works\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"header-text\">\n        <h6>Process</h6>\n        <h1>How it work's</h1>\n        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at\n          its layout but also</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row margin-balance\">\n      <div class=\"col-lg-3 col-sm-6\">\n        <div class=\"working-process process-one\">\n          <div class=\"process-icon\">\n            <img src=\"/assets/images/process-icon-1.png\" class=\"img-fluid\" alt=\"Process Icon\">\n          </div>\n          <h5>Research</h5>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6\">\n        <div class=\"working-process process-two\">\n          <div class=\"process-icon\">\n            <img src=\"/assets/images/process-icon-2.png\" class=\"img-fluid\" alt=\"Process Icon\">\n          </div>\n          <h5>Data Collection</h5>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6\">\n        <div class=\"working-process process-three\">\n          <div class=\"process-icon\">\n            <img src=\"/assets/images/process-icon-3.png\" class=\"img-fluid\" alt=\"Process Icon\">\n          </div>\n          <h5>Targeting</h5>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6\">\n        <div class=\"working-process process-four\">\n          <div class=\"process-icon\">\n            <img src=\"/assets/images/process-icon-4.png\" class=\"img-fluid\" alt=\"Process Icon\">\n          </div>\n          <h5>Result</h5>\n        </div>\n      </div>\n    </div>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/how-it-works/how-it-works.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".how-it-works {\n  text-align: center;\n  padding: 130px 0; }\n\n.header-text {\n  max-width: 600px;\n  margin: 0 auto 60px; }\n\n.header-text h1 {\n    font-size: 4.0rem;\n    font-weight: 800;\n    font-family: \"Nunito\", sans-serif;\n    color: #16334e;\n    line-height: 1;\n    margin-bottom: 35px; }\n\n.header-text h6 {\n    font-size: 1.8rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    font-family: \"Nunito\", sans-serif;\n    color: #aaaaaa;\n    margin-bottom: 10px; }\n\n.container-box {\n  background: #f8fcff; }\n"

/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/how-it-works/how-it-works.component.ts ***!
  \*******************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
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

var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/components/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.scss */ "./src/app/components/how-it-works/how-it-works.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/components/partners/partners.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/partners/partners.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"partners-box\">\n  <div class=\"our-partners\">\n    <div class=\"our-partners__header\">\n      <h6>Partners</h6>\n      <h1>Who Supporting Us</h1>\n    </div>\n    <div class=\"our-partners__description\">\n      <div class=\"our-partners__card card\">\n        <img src=\"/assets/images/partner1.png\">\n      </div>\n      <div class=\"our-partners__card card\">\n        <img src=\"/assets/images/partner2.png\">\n      </div>\n      <div class=\"our-partners__card card\">\n        <img src=\"/assets/images/partner3.png\">\n      </div>\n      <div class=\"our-partners__card card\">\n        <img src=\"/assets/images/partner4.png\">\n      </div>\n    </div>\n  </div>\n  \n\n</section>\n"

/***/ }),

/***/ "./src/app/components/partners/partners.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/partners/partners.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".our-partners {\n  text-align: center; }\n  .our-partners__description {\n    display: flex;\n    justify-content: space-around;\n    margin: 0 auto; }\n  .our-partners__header h1 {\n    font-size: 4.0rem;\n    font-weight: 800;\n    font-family: 'Satisfy', cursive;\n    color: #16334e;\n    line-height: 1;\n    margin-bottom: 35px; }\n  .our-partners__header h6 {\n    font-size: 1.8rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    font-family: \"Nunito\", sans-serif;\n    color: #aaaaaa;\n    margin-bottom: 10px; }\n  .our-partners__card {\n    background-color: white;\n    border-width: 1px 1px 1px 1px;\n    border-color: #e6e6e6;\n    box-shadow: 0px 5px 45px 0px rgba(102, 102, 102, 0.24);\n    border-radius: 10px;\n    border-radius: 10px;\n    flex: 0 0 33.3333%;\n    flex-basis: 22%;\n    margin: 30px;\n    padding: 94px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-image: url(\"/assets/images/projects.png\"); }\n  .partners-box {\n  padding: 130px 0; }\n  @media only screen and (max-width: 768px) {\n  .our-partners__description {\n    display: flex;\n    flex-direction: column; } }\n"

/***/ }),

/***/ "./src/app/components/partners/partners.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/partners/partners.component.ts ***!
  \***********************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
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

var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/components/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.scss */ "./src/app/components/partners/partners.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"our-projects\" id=\"projects\">\n  <div class=\"our-projects__header\">\n    <h1><span>Check out our prestigous projects</span> </h1>\n  </div>\n  <div class=\"our-projects__description\">\n    <div class=\"our-projects__description-card card\">\n      <div class=\"our-projects__description-data\">\n        <i class=\"fa fa-lightbulb-o icon-round\"></i>\n        <h5>Electricity</h5>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n      </div>\n    </div>\n    <div class=\"our-projects__description-card card\">\n      <div class=\"our-projects__description-data\">\n        <i class=\"fa fa-medkit icon-round\"></i>\n        <h5>Hospital</h5>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n      </div>\n    </div>\n    <div class=\"our-projects__description-card card\">\n      <div class=\"our-projects__description-data\">\n        <i class=\"fa fa-crop icon-round\"></i>\n        <h5>Agriculture</h5>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n      </div>\n    </div>\n    <div class=\"our-projects__description-card card\">\n      <div class=\"our-projects__description-data\">\n        <i class=\"fa fa-graduation-cap icon-round\"></i>\n        <h5>Education</h5>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n      </div>\n    </div>\n    <div class=\"our-projects__description-card card\">\n      <div class=\"our-projects__description-data\">\n        <i class=\"fa fa-question-circle icon-round\"></i>\n        <h5>Charity</h5>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n      </div>\n    </div>\n    <div class=\"our-projects__description-card card\">\n      <div class=\"our-projects__description-data\">\n        <i class=\"fa fa-university  icon-round\"></i>\n        <h5>Finance</h5>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/projects/projects.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".our-projects {\n  padding-bottom: 178px; }\n  .our-projects__description {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; }\n  .our-projects__description-card {\n      background-color: white;\n      border-width: 1px 1px 1px 1px;\n      border-color: #e6e6e6;\n      box-shadow: 0px 5px 45px 0px rgba(102, 102, 102, 0.24);\n      border-radius: 10px;\n      border-radius: 10px;\n      flex: 0 0 33.3333%;\n      flex-basis: 22%;\n      margin: 30px;\n      padding: 70px;\n      text-align: center;\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-image: url(\"/assets/images/projects.png\"); }\n  .our-projects__description-card:hover {\n      border-color: #ff6363;\n      transition: all 500ms ease; }\n  .our-projects__header {\n    margin: 71px;\n    padding: 57px; }\n  .our-projects__header h1 {\n      font-size: 4.0rem;\n      font-weight: 800;\n      font-family: 'Satisfy', cursive;\n      color: #16334e;\n      line-height: 1;\n      margin-bottom: 50px;\n      text-align: center;\n      font-style: normal;\n      position: relative;\n      top: 50px; }\n  .our-projects .icon-round {\n    width: 86px;\n    height: 86px;\n    border-radius: 50%;\n    background-color: #232838;\n    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.28);\n    line-height: 86px;\n    position: relative;\n    color: #fff;\n    font-size: 2.571em;\n    text-align: center;\n    margin-bottom: 35px; }\n  @media only screen and (max-width: 768px) {\n  .our-projects__description {\n    display: flex;\n    flex-direction: column; } }\n"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
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

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/components/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/team/team.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"our-team\">\n  <div class=\"our-team__header\">\n    <h1>People who make it happen</h1>\n    <p>These guys are the backbone of our company and who bring you the fully immersive app experience.</p>\n  </div>\n  <div class=\"our-team__members\">\n    <div class=\"our-team__members-card card\">\n\n      <div class=\"our-team__members-data\">\n        <img src=\"/assets/images/raphael.jpg\">\n        <h5>Raphael Zellah</h5>\n        <p>President</p>\n      </div>\n    </div>\n    <div class=\"our-team__members-card card\">\n      <div class=\"our-team__members-data\">\n        <img src=\"/assets/images/raphael.jpg\">\n        <h5>Patrycja Megan</h5>\n        <p>Lawyer</p>\n      </div>\n    </div>\n    <div class=\"our-team__members-card card\">\n      <div class=\"our-team__members-data\">\n        <img src=\"/assets/images/raphael.jpg\">\n        <h5>Geofrey Zellah</h5>\n        <p>Developer</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/team/team.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".our-team {\n  width: 100%;\n  height: 100%;\n  background: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 150\" preserveAspectRatio=\"none\" style=\"height: 100%; width: 100%;\"><path d=\"M-5.24,71.94 C229.44,-18.84 206.12,152.85 504.22,50.22 L500.00,150.00 L-8.89,148.91 Z\" style=\"stroke: none; fill: #08f;\"></path></svg>'); }\n  .our-team__members {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    padding: 100px; }\n  .our-team__members-card {\n      background-color: white;\n      box-shadow: 0px 5px 45px 0px rgba(102, 102, 102, 0.24);\n      border-radius: 10px;\n      margin: 20px;\n      width: 300px;\n      margin-top: -68px;\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-image: url(\"/assets/images/projects.png\"); }\n  .our-team__members-data {\n      display: block;\n      flex-direction: column;\n      text-align: center;\n      padding: 70px; }\n  .our-team__members-card:hover {\n      border-color: #ff6363;\n      transition: all 500ms ease; }\n  .our-team__header {\n    text-align: center;\n    margin-top: 120px;\n    margin-bottom: 45px; }\n  .our-team h1 {\n    font-style: normal;\n    text-transform: none;\n    letter-spacing: -1px;\n    font-size: 4.0rem;\n    font-weight: 800;\n    font-family: 'Satisfy', cursive;\n    color: #16334e;\n    line-height: 1;\n    margin-bottom: 70px; }\n  @media only screen and (max-width: 768px) {\n  .our-team__members-card {\n    width: 300px;\n    margin: 20px auto; }\n  .our-team__members {\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    margin-left: 0 auto;\n    padding: 0px; } }\n"

/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
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

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/components/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/components/whatwedo/whatwedo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/whatwedo/whatwedo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"what-we-do\" id=\"what\">\r\n  <div class=\"what-we-do__top\">\r\n    <div class=\"what-we-do__left\">\r\n      <h2>What we\r\n        <strong>do</strong>\r\n      </h2>\r\n    </div>\r\n\r\n    <div class=\"what-we-do__right\">\r\n      <p> {{description}}</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"animation\">\r\n    <div class=\"center\">\r\n      <div class=\"sat1\" (mouseenter)=\"showDetails(1)\" (mouseleave)=\"showDetails(0)\">\r\n      </div>\r\n      <div class=\"sat2\" (mouseenter)=\"showDetails(2)\" (mouseleave)=\"showDetails(0)\">\r\n      </div>\r\n      <div class=\"sat3\" (mouseenter)=\"showDetails(3)\" (mouseleave)=\"showDetails(0)\">\r\n      </div>\r\n      <div class=\"sat4\" (mouseenter)=\"showDetails(4)\" (mouseleave)=\"showDetails(0)\">\r\n      </div>\r\n      <h3>\r\n        <span>{{title_a}}</span>\r\n        <strong>{{title_b}}</strong>\r\n      </h3>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"mobile-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#demo\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#demo\" data-slide-to=\"2\"></li>\r\n    <li data-target=\"#demo\" data-slide-to=\"3\"></li>\r\n  </ol>\r\n\r\n  <!-- The slideshow -->\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-title\">\r\n      <h3>What we do </h3>\r\n    </div>\r\n    <div class=\"carousel-item active\">\r\n      <figure>\r\n        <img src=\"/assets/images/ico_1_light.png\" alt=\"Los Angeles\" width=\"1100\" height=\"500\">\r\n      </figure>\r\n      <div class=\"carousel-caption  d-md-block\">\r\n        <h5>IT</h5>\r\n        <p>OUTSOURCING</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <figure>\r\n        <img src=\"/assets/images/ico_2_light.png\" alt=\"Chicago\" width=\"1100\" height=\"500\">\r\n      </figure>\r\n      <div class=\"carousel-caption  d-md-block\">\r\n        <h5>Team</h5>\r\n        <p>Leasing</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <figure>\r\n        <img src=\"assets/images/ico_3_light.png\" alt=\"New York\" width=\"1100\" height=\"500\">\r\n      </figure>\r\n      <div class=\"carousel-caption  d-md-block\">\r\n        <h5>Managed</h5>\r\n        <p>Service</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"carousel-item\">\r\n      <figure>\r\n        <img src=\"assets/images/ico_4_light.png\" alt=\"New York\" width=\"1100\" height=\"500\">\r\n      </figure>\r\n      <div class=\"carousel-caption  d-md-block\">\r\n        <h5>Fixed Price</h5>\r\n        <p>Project</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/whatwedo/whatwedo.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/whatwedo/whatwedo.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".what-we-do {\n  background-repeat: no-repeat;\n  background-image: url(\"/assets/images/what_we_do_bg.png\");\n  background-size: cover;\n  width: 100%;\n  border-radius: 0 0 50% 50% / 7%;\n  height: 865px;\n  top: -245px;\n  overflow: hidden;\n  position: relative;\n  padding-top: 200px;\n  display: flex;\n  justify-content: space-evenly; }\n  .what-we-do__top {\n    display: flex; }\n  .what-we-do__right p {\n    font-size: 20px;\n    line-height: 24px;\n    width: 100%;\n    max-width: 400px;\n    font-weight: 100; }\n  .what-we-do__left h2 {\n    padding-top: 25px;\n    font-size: 2.25rem;\n    font-weight: 300;\n    line-height: 2.25rem;\n    text-align: right;\n    margin-right: 200px;\n    position: relative;\n    transition: all 0.15s ease-in-out;\n    color: #444; }\n  .what-we-do__left h2 strong {\n      display: block;\n      font-weight: 700; }\n  .what-we-do__left h2::after {\n    content: '';\n    display: block;\n    width: 200px;\n    height: 200px;\n    border-left: 2px solid #444;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    position: absolute;\n    right: -280px;\n    top: 50px; }\n  .what-we-do .animation {\n  position: absolute;\n  z-index: 0;\n  bottom: -50%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 827px;\n  height: 827px;\n  clear: both; }\n  .what-we-do .animation h3 {\n  position: absolute;\n  top: 200px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  text-align: center;\n  font-weight: 700;\n  font-size: 28px;\n  width: 400px; }\n  .what-we-do .animation h3 strong {\n  display: block;\n  margin-top: 0;\n  font-family: 'proxima-nova-n7', 'proxima-nova';\n  font-style: normal;\n  font-weight: 700;\n  color: #444;\n  font-size: 4.6875rem; }\n  .what-we-do .animation h3 span {\n  font-family: 'proxima-nova-n8', 'proxima-nova';\n  font-style: normal;\n  font-weight: 800;\n  color: #444;\n  font-size: 1.75rem;\n  line-height: 2rem; }\n  .what-we-do .animation h3:before {\n  content: '';\n  display: block;\n  width: 84px;\n  height: 3px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  position: absolute;\n  top: -24px;\n  background: #444; }\n  .what-we-do .animation div {\n  border-radius: 50%;\n  border: 2px solid #444; }\n  .what-we-do .animation .center {\n  width: 827px;\n  height: 827px;\n  left: 0px;\n  top: 0;\n  right: 0;\n  margin: 0 auto;\n  position: relative; }\n  .what-we-do .animation .center:after {\n  content: '';\n  display: block;\n  width: 600px;\n  height: 600px;\n  border-radius: 50%;\n  border: 2px solid #444;\n  position: absolute;\n  top: 112px;\n  left: 0;\n  right: 0;\n  margin: 0 auto; }\n  .what-we-do .animation .sat1,\n.what-we-do .animation .sat2,\n.what-we-do .animation .sat3,\n.what-we-do .animation .sat4 {\n  width: 160px;\n  height: 160px;\n  position: absolute;\n  background-color: #444444;\n  cursor: pointer;\n  transition: 0.3s linear all; }\n  .what-we-do .animation .sat1:hover,\n.what-we-do .animation .sat1.active,\n.what-we-do .animation .sat2:hover,\n.what-we-do .animation .sat2.active,\n.what-we-do .animation .sat3:hover,\n.what-we-do .animation .sat3.active,\n.what-we-do .animation .sat4:hover,\n.what-we-do .animation .sat4.active p {\n  background-color: #d9e5ca; }\n  .what-we-do .animation .sat1 {\n  left: -30px;\n  top: 140px;\n  background: url(\"/assets/images/ico_1_light.png\") center center no-repeat #444; }\n  .what-we-do .animation .sat1:hover p,\n.what-we-do .animation .sat1 {\n  visibility: visible;\n  background: url(\"/assets/images/ico_1_dark.png\") center center no-repeat #d9e5ca; }\n  .what-we-do .animation .sat2 {\n  left: 180px;\n  top: -50px;\n  background: url(\"/assets/images/ico_2_light.png\") center center no-repeat #444; }\n  .what-we-do .animation .sat2:hover,\n.what-we-do .animation .sat2.active {\n  background: url(\"/assets/images/ico_2_dark.png\") center center no-repeat #d9e5ca; }\n  .what-we-do .animation .sat3 {\n  right: 180px;\n  top: -50px;\n  background: url(\"/assets/images/ico_3_light.png\") center center no-repeat #444; }\n  .what-we-do .animation .sat3:hover,\n.what-we-do .animation .sat3.active {\n  background: url(\"/assets/images/ico_3_dark.png\") center center no-repeat #d9e5ca; }\n  .what-we-do .animation .sat4 {\n  right: -30px;\n  top: 140px;\n  background: url(\"/assets/images/ico_4_light.png\") center center no-repeat #444; }\n  .what-we-do .animation .sat4:hover,\n.what-we-do .animation .sat4.active {\n  background: url(\"/assets/images/ico_4_dark.png\") center center no-repeat #d9e5ca; }\n  .carousel-inner {\n  background-repeat: no-repeat;\n  height: auto;\n  top: -92px;\n  background-size: cover;\n  background-image: url(\"/assets/images/what_we_do_bg.png\"); }\n  .carousel-inner img {\n    width: 100%;\n    height: 100%; }\n  .carousel-inner h5 {\n    font-size: 32px;\n    line-height: 50px;\n    font-family: \"proxima-nova-n8\", \"proxima-nova\";\n    font-style: normal;\n    font-weight: 800;\n    color: #444;\n    margin-bottom: 20px;\n    float: left;\n    width: 100%;\n    text-align: center; }\n  figure {\n  width: 212px;\n  height: 212px;\n  border-radius: 150px;\n  background-color: #444;\n  margin: 0 auto;\n  position: relative;\n  margin-bottom: 57px;\n  margin-top: 198px; }\n  figure::after {\n  content: '';\n  width: 85px;\n  left: 50%;\n  margin-left: -42.5px;\n  height: 2px;\n  position: absolute;\n  bottom: -50px;\n  background-color: #444; }\n  .d-md-block {\n  position: unset !important;\n  margin: 50px; }\n  .d-md-block p {\n    font-size: 27px;\n    color: black;\n    line-height: 50px;\n    font-weight: bold; }\n  .carousel-indicators {\n  bottom: 100px; }\n  .carousel-indicators li {\n  position: relative;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 30px;\n  margin-right: 3px;\n  margin-left: 3px;\n  border-radius: 50%;\n  color: black;\n  /* background: red; */\n  text-indent: -999px;\n  cursor: pointer; }\n  .carousel-title {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .carousel-title h3 {\n    font-size: 32px;\n    font-weight: bold;\n    top: 90px;\n    position: relative; }\n  #mobile-carousel {\n  display: none; }\n  @media only screen and (max-width: 768px) {\n  #mobile-carousel {\n    display: block; }\n  .what-we-do {\n    display: none; }\n  .carousel-indicators li {\n    background-color: green; }\n  .carousel-indicators .active {\n    background-color: white !important; } }\n"

/***/ }),

/***/ "./src/app/components/whatwedo/whatwedo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/whatwedo/whatwedo.component.ts ***!
  \***********************************************************/
/*! exports provided: WhatwedoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatwedoComponent", function() { return WhatwedoComponent; });
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

var WhatwedoComponent = /** @class */ (function () {
    function WhatwedoComponent() {
        this.title_a = 'Team';
        this.title_b = 'Leasing';
        // tslint:disable-next-line:max-line-length
        this.description = 'BDTS Poland offers its customers the ability to instantly expand their IT department, with the entire team of consultants. This solution guarantees the efficient implementation of the objectives and provides a harmonious and proven team of professionals who work well together.';
    }
    WhatwedoComponent.prototype.showDetails = function (index) {
        switch (index) {
            case 1:
                this.title_a = 'IT';
                this.title_b = 'OUTSOURCING';
                // tslint:disable-next-line:max-line-length
                this.description = 'This service enables to expand the team with the necessary IT professionals, with responsibilities closely corresponding to the current needs of our clients. This solution provides the ability to instantly adjust to changing conditions and market trends.';
                break;
            case 2:
                this.title_a = 'Team';
                this.title_b = 'Leasing';
                // tslint:disable-next-line:max-line-length
                this.description = 'BDTS Poland offers its customers the ability to instantly expand their IT department, with the entire team of consultants. This solution guarantees the efficient implementation of the objectives and provides a harmonious and proven team of professionals who work well together.';
                break;
            case 3:
                this.title_a = 'Managed';
                this.title_b = 'Service';
                // tslint:disable-next-line:max-line-length
                this.description = 'Managed Service gives our customers the opportunity to reduce the costs of the project and guarantees higher standards of work, while maintaining complete control over the different phases of our consultants working progress.';
                break;
            case 4:
                this.title_a = 'Fixed-Price';
                this.title_b = 'Project';
                // tslint:disable-next-line:max-line-length
                this.description = 'Cooperation in Fixed-Price model guarantees the project to be created in accordance with the defined specification in a pre-set time limit. The customer has a right to expect concrete results, achieved in a specific time, without a need to verify the progress of our consultants.';
                break;
        }
    };
    WhatwedoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whatwedo',
            template: __webpack_require__(/*! ./whatwedo.component.html */ "./src/app/components/whatwedo/whatwedo.component.html"),
            styles: [__webpack_require__(/*! ./whatwedo.component.scss */ "./src/app/components/whatwedo/whatwedo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WhatwedoComponent);
    return WhatwedoComponent;
}());



/***/ }),

/***/ "./src/app/components/why-choose-us/why-choose-us.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/why-choose-us/why-choose-us.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"why-choose-us\">\n  <div class=\"why-choose-us__header\">\n    <h4 class=\" text-center why-choose-us__center\">\n      why you should\n      <strong> Choose Us?</strong>\n    </h4>\n  </div>\n  <div class=\"why-choose-us__description\">\n    <div class=\"why-choose-us__description\">\n      <ul class=\"why-choose-us__list-top\">\n        <li class=\"why-choose-us__leader\" (click)=\"toggleCard(leader)\" style=\"background-image: url('/assets/images/solidne-fundamenty.png')\"\n          *ngFor=\"let leader of inspiringLeaders\">\n          <h4>{{leader.name}}</h4>\n          <div class=\"why-choose-us__card card\" *ngIf=\"leader.shown\">\n            <p>{{leader.text}}</p>\n            <div class=\"topRight fa fa-times\"></div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/why-choose-us/why-choose-us.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/why-choose-us/why-choose-us.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".why-choose-us {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/images/dlaczego_warto.jpg\"); }\n\n.why-choose-us li {\n  padding-top: 211px;\n  position: relative;\n  height: 345px;\n  text-align: center;\n  background-position: 50% 25%;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  color: white;\n  width: 25%;\n  text-align: center;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.why-choose-us__center {\n  font-style: normal;\n  font-weight: 400;\n  line-height: 2.5rem;\n  position: relative;\n  top: 50px;\n  font-size: 4.0rem;\n  font-weight: 800;\n  font-family: 'Satisfy', cursive;\n  color: #16334e;\n  line-height: 1;\n  margin-bottom: 112px; }\n\n.why-choose-us__center::after {\n  position: absolute;\n  width: 90px;\n  height: 3px;\n  content: '';\n  display: block;\n  background-color: #00964e;\n  left: 800px;\n  margin-left: 0;\n  margin-top: 12px; }\n\n.why-choose-us__header h4 {\n  color: white; }\n\n.why-choose-us ul {\n  list-style: none;\n  display: flex;\n  justify-content: space-around;\n  padding: 0;\n  margin: 0;\n  margin-top: 3.125rem;\n  flex-wrap: wrap;\n  list-style-type: none; }\n\nh4 {\n  font-size: 1.3rem;\n  font-weight: 600; }\n\n.why-choose-us__card {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  background-color: #e1ebde;\n  padding: 70px 35px;\n  font-size: 0.875rem;\n  text-align: left;\n  box-shadow: 0px 5px 45px 0px rgba(102, 102, 102, 0.24);\n  border-radius: 10px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url(\"/assets/images/projects.png\"); }\n\n.why-choose-us__card > p {\n  font-size: inherit;\n  line-height: 1.6;\n  color: black;\n  margin-bottom: 1rem;\n  text-rendering: optimizeLegibility; }\n\n.fa-times {\n  color: black !important;\n  position: absolute;\n  float: right;\n  right: 10px;\n  top: 0; }\n\n@media only screen and (max-width: 768px) {\n  .why-choose-us__list-top {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .why-choose-us li {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/components/why-choose-us/why-choose-us.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/why-choose-us/why-choose-us.component.ts ***!
  \*********************************************************************/
/*! exports provided: WhyChooseUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyChooseUsComponent", function() { return WhyChooseUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WhyChooseUsComponent = /** @class */ (function () {
    function WhyChooseUsComponent() {
        this.name = 'Angular';
        this.showCard = false;
        this.inspiringLeaders = [
            {
                name: 'Solid Foundations',
                img: '/assets/images/solidne-fundamenty.png',
                // tslint:disable-next-line:max-line-length
                text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
                shown: false
            },
            {
                name: 'Ambitious Projects',
                img: '/assets/images/ambitne-projekty.png',
                // tslint:disable-next-line:max-line-length
                text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
                shown: false
            },
            {
                name: 'Individual approach and friendly atmosphere',
                img: '/assets/images/indywidualny-rozwoj.png',
                // tslint:disable-next-line:max-line-length
                text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
                shown: false
            },
            {
                name: 'Famous Brands',
                img: '/assets/images/znane-marki.png',
                // tslint:disable-next-line:max-line-length
                text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
                shown: false
            },
            {
                name: 'Inspiring Leaders',
                img: '/assets/images/inspirujacy-liderzy.png',
                // tslint:disable-next-line:max-line-length
                text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
                shown: false
            },
            {
                name: 'Flexibility',
                img: '/assets/images/elastycznosc.png',
                // tslint:disable-next-line:max-line-length
                text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
                shown: false
            },
            {
                name: 'Extra Benefits',
                img: '/assets/images/dodatkowe-korzysci.png',
                // tslint:disable-next-line:max-line-length
                text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
                shown: false
            },
            {
                name: 'Referral System',
                img: '/assets/images/system-polecen.png',
                // tslint:disable-next-line:max-line-length
                text: 'Thanks to belonging to an international organization, which operates since 1988 and has a huge knowledge base, ASTEK Poland enjoys its stable position on the market.',
                shown: false
            },
        ];
    }
    WhyChooseUsComponent.prototype.toggleCard = function (leader) {
        this.inspiringLeaders.map(function (l) {
            if (l.name === leader.name) {
                l.shown = !l.shown;
            }
            else {
                l.shown = false;
            }
        });
    };
    WhyChooseUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-why-choose-us',
            template: __webpack_require__(/*! ./why-choose-us.component.html */ "./src/app/components/why-choose-us/why-choose-us.component.html"),
            styles: [__webpack_require__(/*! ./why-choose-us.component.scss */ "./src/app/components/why-choose-us/why-choose-us.component.scss")]
        })
    ], WhyChooseUsComponent);
    return WhyChooseUsComponent;
}());



/***/ }),

/***/ "./src/app/contact.service.ts":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = 'http://localhost:3000/contact';
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.sendEmailUrl = '/send';
    }
    ContactService.prototype.sendEmail = function (name, email, message) {
        var uri = "" + (apiUrl + this.sendEmailUrl);
        var obj = {
            name: name,
            email: email,
            message: message,
        };
        return this.http.post(uri, obj);
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/layout/main-layout/main-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header\" id=\"up\">\r\n  <nav class=\"main-nav\" ng-sticky [offSet]=\"0\" [addClass]=\"'main-sticky'\" appMainNav #ref=\"appMainNav\">\r\n    <div class=\"main-nav__logo \" ng-sticky [offSet]=\"0\" [addClass]=\"'main-sticky__logo'\">\r\n      <img class=\"man-nav__logo-green\" src=\"/assets/images/logo-white.png\">\r\n    </div>\r\n    <div class=\"main-nav__toggle\">\r\n      <i class=\"main-nav__bars fa fa-bars\" ng-sticky [offSet]=\"0\" [addClass]=\"'main-bars'\"></i>\r\n    </div>\r\n    <ul class=\"main-nav__list \" ng-sticky [addClass]=\"'main-sticky-link'\" [ngClass]=\"ref.click === true? 'Navbar__ToggleShow' :''\">\r\n      <li class=\"main-nav__item\" routerLinkActive=\"active\">\r\n        <a class=\"main-nav__link\" [ngx-scroll-to]=\"'home'\" routerLink=\"/\">Home</a>\r\n      </li>\r\n      <li class=\"main-nav__item\"  routerLinkActive=\"active\">\r\n        <a class=\"main-nav__link\" [ngx-scroll-to]=\"'about'\" routerLink=\"/home/about\">About us</a>\r\n      </li>\r\n      <li class=\"main-nav__item\" routerLinkActive=\"active\">\r\n        <a class=\"main-nav__link\" [ngx-scroll-to]=\"'what'\" routerLink=\"/home/what\">What we do</a>\r\n      </li>\r\n      <li class=\"main-nav__item\" routerLinkActive=\"active\">\r\n        <a class=\"main-nav__link\" [ngx-scroll-to]=\"'projects'\" routerLink=\"/home/projects\">Projects</a>\r\n      </li>\r\n      <li class=\"main-nav__item\" routerLinkActive=\"active\">\r\n        <a class=\"main-nav__link\" [ngx-scroll-to]=\"'contacts'\" routerLink=\"/home/contacts\">Contacts</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </nav>\r\n\r\n  <div class=\"main-banner\">\r\n    <h2>We are a team of\r\n      <strong>experts</strong>.</h2>\r\n    <p>Founded in 2014, the BDTS Poland specializes in IT personnel outsourcing for the areas of banking, insurance, telecommunications,\r\n      high-tech, pharmacy, logistics and many others</p>\r\n    <a  class=\"main-banner__green-button main-banner__arrow-right\" [ngx-scroll-to]=\"'about'\" >Read more\r\n      <i></i>\r\n    </a>\r\n    <a  class=\"main-banner__arrow-down\" [ngx-scroll-to]=\"'what'\"></a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"majeni-app\">\r\n    <app-whatwedo></app-whatwedo>\r\n    <app-about></app-about>\r\n    <app-projects></app-projects>\r\n    <app-why-choose-us></app-why-choose-us>\r\n    <app-team></app-team>\r\n    <app-partners></app-partners>\r\n    <app-footer></app-footer>\r\n  </div>"

/***/ }),

/***/ "./src/app/layout/main-layout/main-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'icomoon';\n  src: url(\"/assets/fonts/icomoon.ttf\"); }\n\n.main-header {\n  width: 100%;\n  float: left;\n  display: block;\n  min-height: 100vh;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  padding-bottom: 100px;\n  background-image: url(\"/assets/images/banner.jpg\"); }\n\n.main-sticky {\n  background-color: white;\n  height: 100px;\n  box-shadow: 0 0 1px #cacaca; }\n\n.main-sticky__logo {\n    position: relative !important;\n    background-repeat: no-repeat;\n    background-image: url(\"/assets/images/logo-green.png\"); }\n\n.main-sticky-link .main-nav__link {\n  color: #444 !important; }\n\n.main-nav {\n  position: -webkit-sticky;\n  position: sticky;\n  align-items: center;\n  justify-content: space-around;\n  left: 0;\n  display: flex;\n  z-index: 2;\n  width: 100%; }\n\n.main-nav__logo {\n    position: relative; }\n\n.main-nav__bars {\n    color: white; }\n\n.main-nav__list {\n    list-style: none;\n    display: flex;\n    color: white;\n    position: relative !important; }\n\n.main-nav__item {\n    padding: 24px 27px;\n    position: relative; }\n\n.main-nav__item:after {\n      transition: all 0.15s ease-in-out;\n      content: '';\n      display: block;\n      float: left;\n      background-color: #f5f5f5;\n      width: 2px;\n      height: 60px;\n      -webkit-transform: rotate(20deg);\n      transform: skew(155deg);\n      position: absolute;\n      right: 0;\n      bottom: 6px; }\n\n.main-nav__item:last-child::after {\n      content: '';\n      width: 0px; }\n\n.main-nav__item:hover::after {\n      width: calc(100% + 1px); }\n\n.main-nav__item:hover .main-nav__link {\n      color: #444;\n      position: relative;\n      z-index: 3; }\n\n.main-nav__link {\n    list-style: none;\n    font-size: 1rem;\n    color: white;\n    font-family: \"proxima-nova-n6\", \"proxima-nova\";\n    font-style: normal;\n    font-weight: 600; }\n\n.main-nav__bars {\n    display: none; }\n\n.main-banner {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 197px; }\n\n.main-banner h2 {\n    font-size: 3.75rem;\n    line-height: 5.375rem;\n    margin-bottom: 1.5rem;\n    color: #fff;\n    font-family: \"proxima-nova-n4\", \"proxima-nova\";\n    font-style: normal;\n    font-weight: 400;\n    margin-top: 70px;\n    font-weight: normal; }\n\n.main-banner p {\n    font-size: 1.25rem;\n    font-weight: normal;\n    color: white;\n    text-align: center;\n    max-width: 700px;\n    margin-bottom: 3.375rem;\n    margin-right: auto;\n    margin-left: auto; }\n\n.main-banner__green-button {\n    height: 3.4375rem;\n    background-color: #00964e;\n    text-decoration: none;\n    color: #fff;\n    padding: 11px 13px;\n    display: inline-block;\n    box-sizing: border-box;\n    line-height: 27px;\n    border-radius: 30px;\n    border: 3px solid #00964e;\n    font-size: 1.125rem;\n    padding-right: 50px;\n    font-family: \"proxima-nova-n6\", \"proxima-nova\";\n    font-style: normal;\n    font-weight: 600;\n    position: relative;\n    transition: all 0.15s ease-in-out;\n    cursor: pointer; }\n\n.main-banner__arrow-right::after {\n    font-family: 'icomoon';\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    content: \"\\e604\" !important;\n    font-size: 33px; }\n\n.main-banner__green-button::after {\n    float: right;\n    content: '';\n    display: block;\n    width: 34px;\n    height: 34px;\n    margin-left: 10px;\n    top: 10px;\n    position: absolute;\n    right: 10px; }\n\n.main-banner__green-button:hover {\n    background-color: white;\n    color: green; }\n\n.main-banner__arrow-down {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    width: 34px;\n    height: 34px;\n    position: absolute;\n    bottom: 176px;\n    margin-left: -17px;\n    left: 50%;\n    z-index: 2;\n    cursor: pointer;\n    transition: all 0.15s ease-in-out;\n    background-image: url(\"/assets/images/icon-arrow-right.png\"); }\n\n#main-sticky {\n  background-color: white; }\n\n@media only screen and (max-width: 768px) {\n  .main-nav {\n    display: block;\n    min-height: 100px;\n    overflow: hidden;\n    background: white; }\n  .main-nav__list {\n    margin-top: 20px;\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n  .main-nav__item:after {\n    content: '';\n    width: 1px; }\n  .Navbar__ToggleShow {\n    display: flex; }\n  .main-nav__logo {\n    position: relative !important;\n    margin-top: -49px;\n    background-repeat: no-repeat;\n    background-image: url(\"/assets/images/logo-green.png\"); }\n  .man-nav__logo-green {\n    visibility: hidden !important;\n    height: 125px; }\n  .main-nav__bars {\n    cursor: pointer;\n    padding: 26px;\n    font-size: 50px;\n    color: #00964e;\n    top: 0;\n    position: relative !important;\n    display: flex;\n    justify-content: flex-end;\n    margin-top: -80px; }\n  .main-nav__link {\n    color: #444; }\n  .main-banner {\n    height: auto; }\n    .main-banner__arrow-down {\n      display: block !important;\n      position: initial;\n      margin: 0 auto;\n      margin-top: 50px; }\n    .main-banner h2 {\n      text-align: center; } }\n\n@media only screen and (min-width: 320px) and (max-width: 568px) {\n  .main-header {\n    min-height: 165vh; } }\n\n@media only screen and (min-width: 375px) and (max-width: 667px) {\n  .main-header {\n    min-height: 127vh; } }\n\n@media only screen and (min-width: 414px) and (max-width: 735px) {\n  .main-header {\n    min-height: 103vh; } }\n\n@media only screen and (min-width: 360px) and (max-width: 640px) {\n  .main-header {\n    min-height: 123vh; } }\n\n@media only screen and (min-width: 411px) and (max-width: 731px) {\n  .main-header {\n    min-height: 103vh; } }\n\n@media only screen and (min-width: 411px) and (max-width: 823px) {\n  .main-header {\n    min-height: 3vh; } }\n\n@media only screen and (min-width: 375px) and (max-width: 667px) {\n  .main-header {\n    min-height: 127vh; } }\n"

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