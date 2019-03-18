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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _branch_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch/login/login.component */ "./src/app/branch/login/login.component.ts");
/* harmony import */ var _branch_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branch/register/register.component */ "./src/app/branch/register/register.component.ts");
/* harmony import */ var _branch_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch/homepage/homepage.component */ "./src/app/branch/homepage/homepage.component.ts");
/* harmony import */ var _branch_member_centre_member_centre_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./branch/member-centre/member-centre.component */ "./src/app/branch/member-centre/member-centre.component.ts");
/* harmony import */ var _branch_manger_centre_manger_centre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branch/manger-centre/manger-centre.component */ "./src/app/branch/manger-centre/manger-centre.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _branch_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'login', component: _branch_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _branch_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'member', component: _branch_member_centre_member_centre_component__WEBPACK_IMPORTED_MODULE_5__["MemberCentreComponent"] },
    { path: 'manager', component: _branch_manger_centre_manger_centre_component__WEBPACK_IMPORTED_MODULE_6__["MangerCentreComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // CommonModule
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<!-- <app-homepage></app-homepage> -->\n<!-- <app-register></app-register> -->\n<router-outlet></router-outlet>\n\n<!-- <app-member-centre></app-member-centre> -->\n\n<app-footer></app-footer>"

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
        this.title = 'lunch-box-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _branch_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./branch/homepage/homepage.component */ "./src/app/branch/homepage/homepage.component.ts");
/* harmony import */ var _branch_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./branch/login/login.component */ "./src/app/branch/login/login.component.ts");
/* harmony import */ var _branch_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./branch/register/register.component */ "./src/app/branch/register/register.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _branch_member_centre_member_centre_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./branch/member-centre/member-centre.component */ "./src/app/branch/member-centre/member-centre.component.ts");
/* harmony import */ var _branch_manger_centre_manger_centre_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./branch/manger-centre/manger-centre.component */ "./src/app/branch/manger-centre/manger-centre.component.ts");
/* harmony import */ var _service_dataService_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/dataService.service */ "./src/app/service/dataService.service.ts");
/* harmony import */ var _service_utilsService_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/utilsService.service */ "./src/app/service/utilsService.service.ts");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var _service_validtion_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/validtion.service */ "./src/app/service/validtion.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _branch_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
                _branch_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _branch_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _branch_member_centre_member_centre_component__WEBPACK_IMPORTED_MODULE_12__["MemberCentreComponent"],
                _branch_manger_centre_manger_centre_component__WEBPACK_IMPORTED_MODULE_13__["MangerCentreComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [_service_dataService_service__WEBPACK_IMPORTED_MODULE_14__["DataService"], _service_http_service__WEBPACK_IMPORTED_MODULE_16__["HttpService"], _service_validtion_service__WEBPACK_IMPORTED_MODULE_17__["ValidationService"], _service_utilsService_service__WEBPACK_IMPORTED_MODULE_15__["UtilsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/branch/homepage/homepage.component.css":
/*!********************************************************!*\
  !*** ./src/app/branch/homepage/homepage.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-img{\n    height: 200px;\n    width: 100%;\n}\n\n.hp-content {\n    margin-top:30px; \n    padding: 100px;\n}\n\n.hp-logo-style {\n    height: 100px;\n    width: 100px;\n    margin-left: 100px;\n}\n\n.logo-style {\n    height: 100px;\n    width: 100px;\n    margin-left: 100px;\n}\n\n"

/***/ }),

/***/ "./src/app/branch/homepage/homepage.component.html":
/*!*********************************************************!*\
  !*** ./src/app/branch/homepage/homepage.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carousel-example-generic\" class=\"carousel slide\" style=\"margin-top:-30px;\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" style=\"height:500px;\">\n    <div class=\"item active\">\n      <img src=\"../../assets/img/food_indexTitle1.jpg\" class=\"carousel-img\" style=\"height:500px;\" alt=\"...\">\n      <div class=\"carousel-caption\">\n        ...\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"../../assets/img/food_indexTitle2.jpg\" class=\"carousel-img\" style=\"height:500px;\" alt=\"...\">\n      <div class=\"carousel-caption\">\n        ...\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"../../assets/img/food_indexTitle3.jpg\" class=\"carousel-img\" style=\"height:500px;\" alt=\"...\">\n      <div class=\"carousel-caption\">\n        ...\n      </div>\n    </div>\n  </div>\n\n  <!-- Controls -->\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"container-fluid\" style=\"margin-top:50px;\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <img src=\"../../assets/img/homePage_icon.png\" class=\"hp-logo-style\" >\n    </div>\n    <div class=\"col-md-4\">\n      <img src=\"../../assets/img/homePage_icon2.png\" class=\"hp-logo-style\">\n    </div>\n    <div class=\"col-md-4\">\n      <img src=\"../../assets/img/homePage_icon3.png\" class=\"hp-logo-style\">\n    </div>\n  </div>\n  <div class=\"hp-content\" >\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n    veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n  </div>\n  <div class=\"row hp-content\" >\n    <div class=\"col-md-6\">\n      <img src=\"../../assets/img/food_indexTitle3.jpg\" style=\"width: 200px; height:200px; margin-left:50px;\">\n    </div>\n    <div class=\"col-md-6\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/branch/homepage/homepage.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/branch/homepage/homepage.component.ts ***!
  \*******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
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

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/branch/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/branch/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/branch/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/branch/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/branch/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/branch/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"panel panel-default\" style=\"width: 500px; margin-left: 30%;\">\n  <div class=\"panel-heading\">會員登入</div>\n  <div class=\"panel-body\">\n    <form class=\"form-horizontal\">\n      <div class=\"form-group\">\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">帳號</label>\n        <div class=\"col-sm-10\">\n          <input type=\"email\" class=\"form-control\" #account placeholder=\"Email\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">密碼</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" #password placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <div class=\"checkbox\">\n            <!-- <label>\n              <input type=\"checkbox\"> Remember me\n            </label> -->\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"login(account.value, password.value)\">登入</button>\n          <button type=\"submit\" class=\"btn btn-default\" style=\"margin-left:10px;\" routerLink=\"/register\">加入會員</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/branch/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/branch/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_dataService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/dataService.service */ "./src/app/service/dataService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (id, password) {
        for (var i = 0; this.data.test_userData.length; i++) {
            if (this.data.test_userData[i].id == id && this.data.test_userData[i].password == password) {
                this.data.isLogin = true;
                this.data.signInData.push(this.data.test_userData[i]);
                alert(this.data.test_userData[i].name + '歡迎登入!!');
                // console.log(this.data.signInData);
                this.router.navigate(['']);
                break;
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/branch/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/branch/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_dataService_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/branch/manger-centre/manger-centre.component.css":
/*!******************************************************************!*\
  !*** ./src/app/branch/manger-centre/manger-centre.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".member-btn{\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n}\n\n.member-btnIcon{\n    margin-left: 30%;\n    margin-top: 40px;\n}\n\n.member-title{\n    margin-left: 35%;\n}\n\n.member-title2{\n    margin-left: 12%;\n}"

/***/ }),

/***/ "./src/app/branch/manger-centre/manger-centre.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/branch/manger-centre/manger-centre.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- row 1 start-->\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default ml20 member-btn\">\n        <a href=\"\">\n          <i class=\"fa fa-cutlery fa-5x member-btnIcon\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <label class=\"member-title\">新增訂單</label>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default ml20 member-btn\">\n        <a href=\"\">\n          <i class=\"fa fa-search fa-5x member-btnIcon\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <label class=\"member-title\">查詢訂單</label>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default ml20 member-btn\">\n        <a href=\"\">\n          <i class=\"fa fa-pencil-square-o fa-5x member-btnIcon\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <label class=\"member-title\">修改訂單</label>\n    </div>\n  </div>\n  <!-- row 1 end-->\n\n  <!-- row 2 start-->\n  <div class=\"row\">\n    <div class=\"col-md-4 ml20\">\n      <div class=\"panel panel-default  member-btn\">\n        <a href=\"\">\n          <i class=\"fa fa-users fa-5x member-btnIcon\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <label class=\"member-title2\">修改會員資料</label>\n    </div>\n    <!-- <div class=\"col-md-4\">\n      <div class=\"panel panel-default ml20 member-btn\">\n        <div class=\"panel-body\">\n          Basic panel example\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default ml20 member-btn\">\n        <div class=\"panel-body\">\n          Basic panel example\n        </div>\n      </div>\n    </div> -->\n  </div>\n  <!-- row 2 end-->\n</div>"

/***/ }),

/***/ "./src/app/branch/manger-centre/manger-centre.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/branch/manger-centre/manger-centre.component.ts ***!
  \*****************************************************************/
/*! exports provided: MangerCentreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangerCentreComponent", function() { return MangerCentreComponent; });
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

var MangerCentreComponent = /** @class */ (function () {
    function MangerCentreComponent() {
    }
    MangerCentreComponent.prototype.ngOnInit = function () {
    };
    MangerCentreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manger-centre',
            template: __webpack_require__(/*! ./manger-centre.component.html */ "./src/app/branch/manger-centre/manger-centre.component.html"),
            styles: [__webpack_require__(/*! ./manger-centre.component.css */ "./src/app/branch/manger-centre/manger-centre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MangerCentreComponent);
    return MangerCentreComponent;
}());



/***/ }),

/***/ "./src/app/branch/member-centre/member-centre.component.css":
/*!******************************************************************!*\
  !*** ./src/app/branch/member-centre/member-centre.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".member-btn{\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n}\n\n.member-btnIcon{\n    margin-left: 30%;\n    margin-top: 40px;\n}\n\n.member-title{\n    margin-left: 35%;\n}\n\n.member-title2{\n    margin-left: 12%;\n}"

/***/ }),

/***/ "./src/app/branch/member-centre/member-centre.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/branch/member-centre/member-centre.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- row 1 start-->\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default ml20 member-btn\">\n        <a href=\"\">\n          <i class=\"fa fa-cutlery fa-5x member-btnIcon\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <label class=\"member-title\">新增訂單</label>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default ml20 member-btn\">\n        <a href=\"\">\n          <i class=\"fa fa-search fa-5x member-btnIcon\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <label class=\"member-title\">查詢訂單</label>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default ml20 member-btn\">\n        <a href=\"\">\n          <i class=\"fa fa-pencil-square-o fa-5x member-btnIcon\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <label class=\"member-title\">修改訂單</label>\n    </div>\n  </div>\n  <!-- row 1 end-->\n\n  <!-- row 2 start-->\n  <div class=\"row\">\n    <div class=\"col-md-4 ml20\">\n      <div class=\"panel panel-default  member-btn\">\n        <a href=\"\">\n          <i class=\"fa fa-users fa-5x member-btnIcon\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <label class=\"member-title2\">修改會員資料</label>\n    </div>\n    <!-- <div class=\"col-md-4\">\n      <div class=\"panel panel-default ml20 member-btn\">\n        <div class=\"panel-body\">\n          Basic panel example\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default ml20 member-btn\">\n        <div class=\"panel-body\">\n          Basic panel example\n        </div>\n      </div>\n    </div> -->\n  </div>\n  <!-- row 2 end-->\n</div>"

/***/ }),

/***/ "./src/app/branch/member-centre/member-centre.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/branch/member-centre/member-centre.component.ts ***!
  \*****************************************************************/
/*! exports provided: MemberCentreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCentreComponent", function() { return MemberCentreComponent; });
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

var MemberCentreComponent = /** @class */ (function () {
    function MemberCentreComponent() {
    }
    MemberCentreComponent.prototype.ngOnInit = function () {
    };
    MemberCentreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-centre',
            template: __webpack_require__(/*! ./member-centre.component.html */ "./src/app/branch/member-centre/member-centre.component.html"),
            styles: [__webpack_require__(/*! ./member-centre.component.css */ "./src/app/branch/member-centre/member-centre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberCentreComponent);
    return MemberCentreComponent;
}());



/***/ }),

/***/ "./src/app/branch/register/register.component.css":
/*!********************************************************!*\
  !*** ./src/app/branch/register/register.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/branch/register/register.component.html":
/*!*********************************************************!*\
  !*** ./src/app/branch/register/register.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"panel panel-default\" style=\"width: 1000px; margin-left:50px;\">\n  <div class=\"panel-heading\">加入會員</div>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"registForm\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email</label><span>email為帳號</span>\n        <input type=\"text\" class=\"form-control\" formControlName=\"account\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n        \n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">密碼</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"exampleInputPassword1\" placeholder=\"密碼\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">再次確認密碼</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password2\" id=\"exampleInputPassword1\" placeholder=\"密碼\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">姓名</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"exampleInputPassword1\" placeholder=\"姓名\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">手機</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"phone\" id=\"exampleInputPassword1\" placeholder=\"電話\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">公司</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"company\" id=\"exampleInputPassword1\" placeholder=\"公司\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">地址</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"address\" id=\"exampleInputPassword1\" placeholder=\"地址\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\" (click)=\"onSubmit(registForm)\">確認</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/branch/register/register.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/branch/register/register.component.ts ***!
  \*******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_dataService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/dataService.service */ "./src/app/service/dataService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(data, router) {
        this.data = data;
        this.router = router;
        this.registForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            account: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
        });
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.ngAfterViewInit = function () { };
    RegisterComponent.prototype.onSubmit = function (form) {
        var Registform = {
            id: form.controls.account.value,
            password: form.controls.password.value,
            name: form.controls.name.value,
            phone: form.controls.phone.value,
            company: form.controls.company.value,
            address: form.controls.address.value,
            isManager: "0"
        };
        this.data.registerAddData(Registform);
        this.data.signInData.push(Registform);
        this.data.isLogin = true;
        alert(form.controls.name.value + "感謝你加入");
        this.router.navigate([""]);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/branch/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/branch/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_dataService_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foot-style {\n    height: 60px; \n    bottom: 0px;\n    border-radius: 0%;\n    background: rgba(0, 0, 0, 1);\n    border:  rgba(0, 0, 0, 1);\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well well-sm\" class=\"foot-style\" >footer</div>"

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
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav > li > a:hover,\n.nav > li > a:focus {\n    text-decoration: none;\n    background: rgba(0, 0, 0, 0);\n\n}\n\n.button_style>li>a{\n    color:#aaa;\n    transition: color 0.5s;\n}\n\n.button_style>li>a:hover{\n    color:#9b7d3b;\n}\n\n.header-style{\n    z-index:1000;\n    border-radius: 0%;\n    position: fixed;\n    height: 100px;\n    width: 100%;\n    background: rgba(203, 64, 66, 0.5);\n    border:  rgba(203, 64, 66, 0.5);\n}\n\n.header-style i {\n    color: aliceblue;\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"allcontain\" style=\"max-width:100%\" >\n  <div class=\"header header_style header_position nav_bar\">\n    <ul class=\"socialicon button_style\">\n      <li><a href=\"#\">hp</a></li>\n      <li><a href=\"#\">111</a><span style=\"color: #aaa;\">|&nbsp;</span></li>\n      <li><a href=\"#\">222</a><span style=\"color: #aaa;\">|&nbsp;</span></li>\n      <li><a href=\"#\">3333</a></li>\n    </ul>\n    <ul class=\"logreg register_style\">\n      <li><a href=\"#\">{{languagesList.login}} </a> </li>\n      <li><a href=\"#\"><span class=\"register\">{{languagesList.register}}</span></a></li>\n    </ul>\n\n  </div>\n  <div class=\"btn-group header_position header_style nav_btn\">\n    <a class=\"btn btn-default dropdown-toggle header_dropDown_btn\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n      aria-expanded=\"false\">\n      <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n    </a>\n    <ul class=\"dropdown-menu nav_list\">\n      <li><a href=\"#\">hp</a></li>\n      <li role=\"separator\" class=\"divider\"></li>\n      <li><a href=\"#\">111</a></li>\n      <li><a href=\"#\">222</a></li>\n      <li><a href=\"#\">333</a></li>\n    </ul>\n    <ul class=\"logreg register_styleMin\">\n      <li><a href=\"#\">llooogginnn </a> </li>\n      <li><a href=\"#\"><span class=\"register\">register</span></a></li>\n    </ul>\n  </div>\n</div> -->\n<nav class=\"navbar navbar-default header-style\">\n  <div class=\"container-fluid\" style=\"margin-top:40px;\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n        data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"\"><i>芙蓉便當</i></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a routerLink=\"/register\" *ngIf=\"!data.isLogin\">\n            <i class=\"fa fa-user-plus  fa-2x\" aria-hidden=\"true\"></i>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/login\" *ngIf=\"!data.isLogin\">\n            <i class=\"fa fa-user  fa-2x\" aria-hidden=\"true\"></i>\n          </a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"data.isLogin\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\n            aria-expanded=\"false\"><i class=\"fa fa-user  fa-2x\" aria-hidden=\"true\"></i> <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li>{{data.signInData.name}}</li>\n            <li><a routerLink=\"/member\">會員中心</a></li>\n            <li><a href=\"#\">登出</a></li>\n          </ul>\n        </li>\n        \n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_dataService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/dataService.service */ "./src/app/service/dataService.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data) {
        this.data = data;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // console.log(this.data.isLogin);
        // this.isLogin = this.data.isLogin;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_dataService_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  content works!\n</p>\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
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

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
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

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/service/dataService.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/dataService.service.ts ***!
  \************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.isLogin = false;
        this.test_userData = [
            {
                id: "loveyou@gmail",
                password: "1234",
                name: "林約翰",
                phone: "0911222333",
                company: "日商熱天",
                address: "台北市內湖區瑞光路",
                isManager: "0"
            },
            {
                id: "manager@gmail",
                password: "4321",
                name: "張珍妮",
                phone: "0911222333",
                company: "",
                address: "",
                isManager: "1"
            }
        ];
        this.signInData = [];
    }
    /* setForm(form: any) {
        
      const Registform = {
          id: form.controls.account,
          password: form.controls.password,
          name: form.controls.name,
          phone: form.controls.phone,
          componay: form.controls.componay,
          address: form.controls.address,
          isManager: "0"
      };
        return Registform;
    } */
    DataService.prototype.loginAddData = function (data) { };
    DataService.prototype.registerAddData = function (data) {
        this.test_userData.push(data);
        this.signInData.push(data);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/service/http.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/service/utilsService.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/utilsService.service.ts ***!
  \*************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/service/validtion.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/validtion.service.ts ***!
  \**********************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ValidationService);
    return ValidationService;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! /Users/jamesshyuu/source_code/lunch-box-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map