(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mobic\source\repos\Spotistical\SpotisticalAngular\src\main.ts */"zUnb");


/***/ }),

/***/ "9k3z":
/*!************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_userinformation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/userinformation.service */ "qwfk");
/* harmony import */ var _shared_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/login.service */ "nP7O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NavigationBarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.homeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skipLocationChange", true);
} }
function NavigationBarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Top tracks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.topTracksClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skipLocationChange", true);
} }
function NavigationBarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Top artists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.topArtistsClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skipLocationChange", true);
} }
function NavigationBarComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationBarComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavigationBarComponent {
    constructor(userInformationService, loginService, router) {
        this.userInformationService = userInformationService;
        this.loginService = loginService;
        this.router = router;
        this.activeClass = 'nav-link active';
        this.inactiveClass = 'nav-link';
        this.homeClass = this.activeClass;
        this.topTracksClass = this.inactiveClass;
        this.topArtistsClass = this.inactiveClass;
        this.isCollapsed = true;
        this.loginInProgress = false;
        this.loggedIn = false;
        this.userName = '';
        this.loginDoneEventHandler = (loginResult) => {
            this.loggedIn = loginResult;
        };
        router.events.subscribe(e => {
            this.isCollapsed = true;
            var url = router.url;
            if (url === '/top-tracks') {
                this.homeClass = this.inactiveClass;
                this.topTracksClass = this.activeClass;
                this.topArtistsClass = this.inactiveClass;
            }
            else if (url === '/top-artists') {
                this.homeClass = this.inactiveClass;
                this.topTracksClass = this.inactiveClass;
                this.topArtistsClass = this.activeClass;
            }
            else {
                this.homeClass = this.activeClass;
                this.topTracksClass = this.inactiveClass;
                this.topArtistsClass = this.inactiveClass;
            }
        });
        this.loggedIn = loginService.isLoggedIn();
        loginService.loginDoneEvent.subscribe(this.loginDoneEventHandler);
        this.isCollapsed = true;
    }
    ngOnInit() {
    }
    logIn() {
        this.loginService.logIn();
    }
    logOut() {
        this.loginService.logOut();
        this.router.navigate(['']);
    }
}
NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) { return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_userinformation_service__WEBPACK_IMPORTED_MODULE_1__["UserInformationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationBarComponent, selectors: [["app-navigation-bar"]], decls: 17, vars: 8, consts: [[1, "navbar", "navbar-expand-sm", "navbar-dark", "navbar-toggleable-sm", "border-bottom", "box-shadow", "bg-success", "fixed-top"], [1, "container"], ["routerLink", "/", 1, "navbar-brand", "text-dark", 3, "skipLocationChange"], ["height", "30px", "src", "../../assets/icon6.jpg"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], ["class", "nav-item pl-3", 4, "ngIf"], [1, "nav", "navbar-nav", "navbar-right", "my-2", "my-lg-0"], [1, "nav-item"], ["class", "nav-link cursor-pointer", 3, "click", 4, "ngIf"], ["class", "nav-link cursor-pointer mr-auto", 3, "click", 4, "ngIf"], [1, "nav-item", "pl-3"], ["routerLink", "/", 3, "skipLocationChange"], ["routerLink", "top-tracks", 3, "skipLocationChange"], ["routerLink", "top-artists", 3, "skipLocationChange"], [1, "nav-link", "cursor-pointer", 3, "click"], [1, "nav-link", "cursor-pointer", "mr-auto", 3, "click"]], template: function NavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Spotistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_button_click_5_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavigationBarComponent_li_9_Template, 3, 3, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavigationBarComponent_li_10_Template, 3, 3, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavigationBarComponent_li_11_Template, 3, 3, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavigationBarComponent_a_14_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavigationBarComponent_a_16_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skipLocationChange", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn === true);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_userinformation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/userinformation.service */ "qwfk");
/* harmony import */ var _shared_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/login.service */ "nP7O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login using Spotify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Check top tracks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Check top artists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skipLocationChange", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skipLocationChange", true);
} }
class HomeComponent {
    constructor(userInformationService, loginService) {
        this.userInformationService = userInformationService;
        this.loginService = loginService;
        this.loggedIn = false;
        this.loginDoneEventHandler = (loginResult) => {
            this.loggedIn = loginResult;
        };
    }
    ngOnInit() {
        this.loggedIn = this.loginService.isLoggedIn();
        this.loginService.loginDoneEvent.subscribe(this.loginDoneEventHandler);
    }
    logIn() {
        this.loginService.logIn();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_userinformation_service__WEBPACK_IMPORTED_MODULE_1__["UserInformationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 2, consts: [[1, "jumbotron", "bg-light"], [1, "text-center"], [4, "ngIf"], [1, "text-center", "p-5"], [1, "btn", "btn-success", "align-middle", 3, "click"], ["routerLink", "top-tracks", 1, "btn", "btn-success", "align-middle", "m-3", 3, "skipLocationChange"], ["routerLink", "top-artists", 1, "btn", "btn-success", "align-middle", "m-3", 3, "skipLocationChange"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to Spotistics!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn === true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], encapsulation: 2 });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Id7O":
/*!****************************************************!*\
  !*** ./src/app/top-tracks/top-tracks.component.ts ***!
  \****************************************************/
/*! exports provided: TopTracksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTracksComponent", function() { return TopTracksComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_top_tracks_result_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/top-tracks-result.model */ "L9Ps");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_userinformation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/userinformation.service */ "qwfk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TopTracksComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TopTracksComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", i_r3 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", track_r2.coverUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](track_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](track_r2.artists);
} }
class TopTracksComponent {
    constructor(base, http, userInformationService) {
        this.http = http;
        this.userInformationService = userInformationService;
        this.result = new _shared_top_tracks_result_model__WEBPACK_IMPORTED_MODULE_1__["TopTracksResult"]();
        this.tracks = new Array();
        this.shortTermTracks = new Array();
        this.mediumTermTracks = new Array();
        this.longTermTracks = new Array();
        this.tabInactiveClass = 'btn navbar-label';
        this.tabActiveClass = 'btn navbar-label bg-success text-white active';
        this.shortTermClass = '';
        this.mediumTermClass = '';
        this.longTermClass = '';
        this.shortTermString = 'short_term';
        this.mediumTermString = 'medium_term';
        this.longTermString = 'long_term';
        this.baseUrl = base;
    }
    ngOnInit() {
        this.shortTermClass = this.tabActiveClass;
        this.mediumTermClass = this.tabInactiveClass;
        this.longTermClass = this.tabInactiveClass;
        this.getTopTracks(this.shortTermString);
    }
    getTopTracks(timeRange) {
        if (this.checkIfAlreadyCached(timeRange) === true) {
            return;
        }
        var userInfo = this.userInformationService.getUserInformation();
        this.http.get(`${this.baseUrl}/toptracks`, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('userID', userInfo.userID)
                .set('accessToken', userInfo.accessToken)
                .set('timeRange', timeRange)
        })
            .subscribe(res => {
            this.result = res;
            this.userInformationService.setAccessToken(this.result.accessToken);
            this.tracks = this.result.topTracks;
            this.saveTopTracks(this.result.topTracks, timeRange);
        }, err => {
            console.log(err);
        });
    }
    saveTopTracks(tracks, timeRange) {
        if (timeRange === this.shortTermString) {
            this.shortTermTracks = tracks;
        }
        else if (timeRange === this.mediumTermString) {
            this.mediumTermTracks = tracks;
        }
        else {
            this.longTermTracks = tracks;
        }
    }
    checkIfAlreadyCached(timeRange) {
        var isCached = false;
        if (timeRange === this.shortTermString && this.shortTermTracks.length > 0) {
            this.tracks = this.shortTermTracks;
            isCached = true;
        }
        else if (timeRange === this.mediumTermString && this.mediumTermTracks.length > 0) {
            this.tracks = this.mediumTermTracks;
            isCached = true;
        }
        else if (timeRange === this.longTermString && this.longTermTracks.length > 0) {
            this.tracks = this.longTermTracks;
            isCached = true;
        }
        return isCached;
    }
    shortTermClicked() {
        this.shortTermClass = this.tabActiveClass;
        this.mediumTermClass = this.tabInactiveClass;
        this.longTermClass = this.tabInactiveClass;
        this.getTopTracks(this.shortTermString);
    }
    mediumTermClicked() {
        this.shortTermClass = this.tabInactiveClass;
        this.mediumTermClass = this.tabActiveClass;
        this.longTermClass = this.tabInactiveClass;
        this.getTopTracks(this.mediumTermString);
    }
    longTermClicked() {
        this.shortTermClass = this.tabInactiveClass;
        this.mediumTermClass = this.tabInactiveClass;
        this.longTermClass = this.tabActiveClass;
        this.getTopTracks(this.longTermString);
    }
}
TopTracksComponent.ɵfac = function TopTracksComponent_Factory(t) { return new (t || TopTracksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]('API_BASE_URL'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_userinformation_service__WEBPACK_IMPORTED_MODULE_3__["UserInformationService"])); };
TopTracksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TopTracksComponent, selectors: [["app-top-tracks"]], decls: 21, vars: 8, consts: [["role", "tablist", 1, "nav", "nav-tabs", "nav-justified"], ["role", "presentation", 1, "nav-item"], ["type", "button", 3, "click"], [4, "ngIf"], [1, "table", "table-borderless"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "align-middle", 2, "width", "5%"], [1, "font-weight-bold"], [2, "width", "10%"], [2, "max-width", "75px", 3, "src"], [1, "align-middle", 2, "width", "60%"], [1, "align-middle", 2, "width", "25%"]], template: function TopTracksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopTracksComponent_Template_label_click_2_listener() { return ctx.shortTermClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "last 4 weeks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopTracksComponent_Template_label_click_5_listener() { return ctx.mediumTermClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "last 6 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopTracksComponent_Template_label_click_8_listener() { return ctx.longTermClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "max amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TopTracksComponent_div_11_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TopTracksComponent_tr_20_Template, 12, 4, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.shortTermClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.mediumTermClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.longTermClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tracks.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tracks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });


/***/ }),

/***/ "L9Ps":
/*!***************************************************!*\
  !*** ./src/app/shared/top-tracks-result.model.ts ***!
  \***************************************************/
/*! exports provided: TopTracksResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTracksResult", function() { return TopTracksResult; });
class TopTracksResult {
    constructor() {
        this.accessToken = '';
        this.topTracks = new Array();
    }
}


/***/ }),

/***/ "OzGC":
/*!*************************************************!*\
  !*** ./src/app/shared/userinformation.model.ts ***!
  \*************************************************/
/*! exports provided: UserInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformation", function() { return UserInformation; });
class UserInformation {
    constructor() {
        this.name = "";
        this.userID = "";
        this.accessToken = "";
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ahDk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/login.service */ "nP7O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "9k3z");







function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-navigation-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, activatedRoute, loginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.loginInProgress = false;
        this.loginInProgressEventHandler = (loginInProgress) => {
            this.loginInProgress = loginInProgress;
        };
        this.title = 'Spotistical';
        this.activatedRoute.queryParams.subscribe(data => {
        });
        if (loginService.isLoggedIn() === false) {
            loginService.loginInProgressEvent.subscribe(this.loginInProgressEventHandler);
        }
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"])).subscribe(() => {
            this.loginService.checkForCodeAndFinishLogin();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginInProgress === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginInProgress === true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavigationBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-tracks/top-tracks.component */ "Id7O");
/* harmony import */ var _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-artists/top-artists.component */ "x1pK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "9k3z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'top-tracks', component: _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_4__["TopTracksComponent"] },
    { path: 'top-artists', component: _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_5__["TopArtistsComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: 'API_BASE_URL', useValue: 'https://spotistics.azurewebsites.net/api' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_4__["TopTracksComponent"],
        _top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_5__["TopArtistsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavigationBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]] }); })();


/***/ }),

/***/ "gJri":
/*!****************************************************!*\
  !*** ./src/app/shared/top-artists-result.model.ts ***!
  \****************************************************/
/*! exports provided: TopArtistsResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopArtistsResult", function() { return TopArtistsResult; });
class TopArtistsResult {
    constructor() {
        this.topArtists = new Array();
        this.accessToken = '';
    }
}


/***/ }),

/***/ "nP7O":
/*!*****************************************!*\
  !*** ./src/app/shared/login.service.ts ***!
  \*****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _spotifycode_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spotifycode.model */ "ntnH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _userinformation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userinformation.service */ "qwfk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







class LoginService {
    constructor(base, router, route, http, userInformationService, location) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.userInformationService = userInformationService;
        this.location = location;
        this.spotifyLoginUrl = '';
        this.codeQueryParameter = '';
        this.myStorage = window.localStorage;
        this.loggedInStatusString = 'spotistics-loggedin';
        this.loginInProgressEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loginDoneEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.baseUrl = base;
    }
    logIn() {
        this.loginInProgressEvent.emit(true);
        this.http.get(`${this.baseUrl}/login`, { responseType: 'text' })
            .subscribe(res => {
            this.spotifyLoginUrl = res;
            window.location.href = this.spotifyLoginUrl;
        }, err => {
            console.log(err);
        });
    }
    checkForCodeAndFinishLogin() {
        this.route.queryParamMap.subscribe(params => {
            this.codeQueryParameter = params.get('code');
            if (this.codeQueryParameter !== "" && this.codeQueryParameter !== null) {
                this.loginInProgressEvent.emit(true);
                this.finishLogin();
            }
        });
    }
    finishLogin() {
        var spotifyCode = new _spotifycode_model__WEBPACK_IMPORTED_MODULE_1__["SpotifyCode"]();
        spotifyCode.code = this.codeQueryParameter;
        this.http.post(`${this.baseUrl}/login`, spotifyCode)
            .subscribe(res => {
            var userInformation = res;
            this.userInformationService.storeUserInformation(userInformation);
            this.setLogin();
            this.loginDoneEvent.emit(true);
            this.loginInProgressEvent.emit(false);
            this.router.navigate(['']);
        }, err => {
            console.log(err);
        });
    }
    logOut() {
        this.myStorage.removeItem(this.loggedInStatusString);
        this.userInformationService.deleteUserInformation();
        this.loginDoneEvent.emit(false);
    }
    setLogin() {
        this.myStorage.setItem(this.loggedInStatusString, '');
    }
    isLoggedIn() {
        if (this.myStorage.getItem(this.loggedInStatusString) !== null) {
            return true;
        }
        else {
            return false;
        }
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('API_BASE_URL'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_userinformation_service__WEBPACK_IMPORTED_MODULE_4__["UserInformationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ntnH":
/*!*********************************************!*\
  !*** ./src/app/shared/spotifycode.model.ts ***!
  \*********************************************/
/*! exports provided: SpotifyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyCode", function() { return SpotifyCode; });
class SpotifyCode {
    constructor() {
        this.code = "";
    }
}


/***/ }),

/***/ "qwfk":
/*!***************************************************!*\
  !*** ./src/app/shared/userinformation.service.ts ***!
  \***************************************************/
/*! exports provided: UserInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationService", function() { return UserInformationService; });
/* harmony import */ var _userinformation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userinformation.model */ "OzGC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserInformationService {
    constructor() {
        this.accessTokenString = 'spotistics-accesstoken';
        this.nameString = 'spotistics-username';
        this.userIDString = 'spotistics-userid';
        this.storage = window.localStorage;
    }
    storeUserInformation(userInformation) {
        var storage = window.localStorage;
        storage.setItem(this.accessTokenString, userInformation.accessToken);
        storage.setItem(this.nameString, userInformation.name);
        storage.setItem(this.userIDString, userInformation.userID);
    }
    setAccessToken(accessToken) {
        this.storage.setItem(this.accessTokenString, accessToken);
    }
    checkIfUserExists() {
        if (this.storage.getItem(this.nameString) !== null &&
            this.storage.getItem(this.userIDString) !== null &&
            this.storage.getItem(this.accessTokenString) !== null) {
            return true;
        }
        return false;
    }
    getUserInformation() {
        var userInformation = new _userinformation_model__WEBPACK_IMPORTED_MODULE_0__["UserInformation"]();
        if (this.checkIfUserExists() === false) {
            return userInformation;
        }
        userInformation.accessToken = this.storage.getItem(this.accessTokenString);
        userInformation.name = this.storage.getItem(this.nameString);
        userInformation.userID = this.storage.getItem(this.userIDString);
        return userInformation;
    }
    deleteUserInformation() {
        this.storage.removeItem(this.accessTokenString);
        this.storage.removeItem(this.nameString);
        this.storage.removeItem(this.userIDString);
    }
}
UserInformationService.ɵfac = function UserInformationService_Factory(t) { return new (t || UserInformationService)(); };
UserInformationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserInformationService, factory: UserInformationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "x1pK":
/*!******************************************************!*\
  !*** ./src/app/top-artists/top-artists.component.ts ***!
  \******************************************************/
/*! exports provided: TopArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopArtistsComponent", function() { return TopArtistsComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_top_artists_result_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/top-artists-result.model */ "gJri");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_userinformation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/userinformation.service */ "qwfk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TopArtistsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TopArtistsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artist_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", i_r3 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", artist_r2.coverUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](artist_r2.name);
} }
class TopArtistsComponent {
    constructor(base, http, userInformationService) {
        this.http = http;
        this.userInformationService = userInformationService;
        this.result = new _shared_top_artists_result_model__WEBPACK_IMPORTED_MODULE_1__["TopArtistsResult"]();
        this.artists = new Array();
        this.shortTermArtists = new Array();
        this.mediumTermArtists = new Array();
        this.longTermArtists = new Array();
        this.tabInactiveClass = 'btn navbar-label';
        this.tabActiveClass = 'btn navbar-label bg-success text-white active';
        this.shortTermClass = '';
        this.mediumTermClass = '';
        this.longTermClass = '';
        this.shortTermString = 'short_term';
        this.mediumTermString = 'medium_term';
        this.longTermString = 'long_term';
        this.baseUrl = base;
    }
    ngOnInit() {
        this.shortTermClass = this.tabActiveClass;
        this.mediumTermClass = this.tabInactiveClass;
        this.longTermClass = this.tabInactiveClass;
        this.getTopArtists(this.shortTermString);
    }
    getTopArtists(timeRange) {
        if (this.checkIfAlreadyCached(timeRange) === true) {
            return;
        }
        var userInfo = this.userInformationService.getUserInformation();
        this.http.get(`${this.baseUrl}/topartists`, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('userID', userInfo.userID)
                .set('accessToken', userInfo.accessToken)
                .set('timeRange', timeRange)
        })
            .subscribe(res => {
            this.result = res;
            this.userInformationService.setAccessToken(this.result.accessToken);
            this.artists = this.result.topArtists;
            this.saveTopArtists(this.result.topArtists, timeRange);
        }, err => {
            console.log(err);
        });
    }
    saveTopArtists(artists, timeRange) {
        if (timeRange === this.shortTermString) {
            this.shortTermArtists = artists;
        }
        else if (timeRange === this.mediumTermString) {
            this.mediumTermArtists = artists;
        }
        else {
            this.longTermArtists = artists;
        }
    }
    checkIfAlreadyCached(timeRange) {
        var isCached = false;
        if (timeRange === this.shortTermString && this.shortTermArtists.length > 0) {
            this.artists = this.shortTermArtists;
            isCached = true;
        }
        else if (timeRange === this.mediumTermString && this.mediumTermArtists.length > 0) {
            this.artists = this.mediumTermArtists;
            isCached = true;
        }
        else if (timeRange === this.longTermString && this.longTermArtists.length > 0) {
            this.artists = this.longTermArtists;
            isCached = true;
        }
        return isCached;
    }
    shortTermClicked() {
        this.shortTermClass = this.tabActiveClass;
        this.mediumTermClass = this.tabInactiveClass;
        this.longTermClass = this.tabInactiveClass;
        this.getTopArtists(this.shortTermString);
    }
    mediumTermClicked() {
        this.shortTermClass = this.tabInactiveClass;
        this.mediumTermClass = this.tabActiveClass;
        this.longTermClass = this.tabInactiveClass;
        this.getTopArtists(this.mediumTermString);
    }
    longTermClicked() {
        this.shortTermClass = this.tabInactiveClass;
        this.mediumTermClass = this.tabInactiveClass;
        this.longTermClass = this.tabActiveClass;
        this.getTopArtists(this.longTermString);
    }
}
TopArtistsComponent.ɵfac = function TopArtistsComponent_Factory(t) { return new (t || TopArtistsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]('API_BASE_URL'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_userinformation_service__WEBPACK_IMPORTED_MODULE_3__["UserInformationService"])); };
TopArtistsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TopArtistsComponent, selectors: [["app-top-artists"]], decls: 14, vars: 8, consts: [["role", "tablist", 1, "nav", "nav-tabs", "nav-justified"], ["role", "presentation", 1, "nav-item"], ["type", "button", 3, "click"], [4, "ngIf"], [1, "table", "table-borderless"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "align-middle", 2, "width", "5%"], [1, "font-weight-bold"], [2, "width", "10%"], [2, "max-width", "100px", 3, "src"], [1, "align-middle", 2, "width", "85%"]], template: function TopArtistsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopArtistsComponent_Template_label_click_2_listener() { return ctx.shortTermClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "last 4 weeks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopArtistsComponent_Template_label_click_5_listener() { return ctx.mediumTermClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "last 6 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopArtistsComponent_Template_label_click_8_listener() { return ctx.longTermClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "max amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TopArtistsComponent_div_11_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TopArtistsComponent_tr_13_Template, 9, 3, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.shortTermClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.mediumTermClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.longTermClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.artists.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.artists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map