(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-menu-app-menu-module"],{

/***/ "./src/app/app-menu/app-menu-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/app-menu/app-menu-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AppMenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMenuRoutingModule", function() { return AppMenuRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-menu.component */ "./src/app/app-menu/app-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _app_menu_component__WEBPACK_IMPORTED_MODULE_2__["AppMenuComponent"],
        data: { postMessage: false }
    }
];
var AppMenuRoutingModule = /** @class */ (function () {
    function AppMenuRoutingModule() {
    }
    AppMenuRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppMenuRoutingModule);
    return AppMenuRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-menu/app-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/app-menu/app-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-menu {\r\n  max-height: inherit;\r\n  padding: 8px;\r\n}\r\n\r\n.app-menu .app-menu-container {\r\n  padding: 8px;\r\n  width: 64px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  border: 1px dotted transparent;\r\n}\r\n\r\n.app-menu .app-menu-container:hover {\r\n  border-color: rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.app-menu .app-menu-container .app-image-container {\r\n  text-align: center;\r\n  line-height: 48px;\r\n  height: 48px;\r\n}\r\n\r\n.app-menu .app-menu-container .app-image-container img {\r\n  vertical-align: middle;\r\n}\r\n\r\n.app-menu .app-menu-container .app-label {\r\n  text-align: center;\r\n  font-size: 10px;\r\n  min-height: 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLW1lbnUvYXBwLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0Usa0NBQWtDO0NBQ25DOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC1tZW51L2FwcC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW1lbnUge1xyXG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uYXBwLW1lbnUgLmFwcC1tZW51LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggZG90dGVkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYXBwLW1lbnUgLmFwcC1tZW51LWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uYXBwLW1lbnUgLmFwcC1tZW51LWNvbnRhaW5lciAuYXBwLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG5cclxuLmFwcC1tZW51IC5hcHAtbWVudS1jb250YWluZXIgLmFwcC1pbWFnZS1jb250YWluZXIgaW1nIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uYXBwLW1lbnUgLmFwcC1tZW51LWNvbnRhaW5lciAuYXBwLWxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEycHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app-menu/app-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/app-menu/app-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-menu\" fxLayout=\"row wrap\">\r\n  <div class=\"app-menu-container\" *ngFor=\"let app of apps\" (click)=\"app.onClick()\">\r\n    <div class=\"app-menu-hover-container\"\r\n           style=\"word-break: break-word\">\r\n          <div class=\"app-image-container\">\r\n              <img src=\"{{app.icon}}\" style=\"width: 32px\"/>\r\n          </div>\r\n          <div class=\"app-label\">{{app.label}}</div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"layout-row layout-wrap\">\r\n  <div class=\"app-menu-container\" ng-repeat=\"app in $ctrl.apps\" ng-click=\"app.onClick($ctrl.rwuUrl)\">\r\n      <div class=\"app-menu-hover-container\"\r\n           style=\"word-break: break-word\">\r\n          <div class=\"app-image-container\">\r\n              <img ng-if=\"!app.isMdIcon\" src=\"{{app.icon}}\" ng-style=\"{{app.imageWidth}}\"/>\r\n              <md-icon ng-if=\"app.isMdIcon\" md-svg-src=\"{{app.icon}}\" ng-style=\"{{app.imageWidth}}\"></md-icon>\r\n          </div>\r\n          <div class=\"app-label\">{{app.label}}</div>\r\n      </div>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/app-menu/app-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/app-menu/app-menu.component.ts ***!
  \************************************************/
/*! exports provided: AppMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMenuComponent", function() { return AppMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apps_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps-menu.service */ "./src/app/app-menu/apps-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppMenuComponent = /** @class */ (function () {
    // , 'LMS', 'Communication', 'Classroom', 'RWU', 'Cash', 'Medical'
    function AppMenuComponent(_appsMenuService, route, router) {
        this._appsMenuService = _appsMenuService;
        this.route = route;
        this.router = router;
        this.apps = [];
        this.shouldPostMessage = false;
    }
    AppMenuComponent.prototype.ngOnInit = function () {
        this.apps = this._appsMenuService.getAppsMenu();
    };
    AppMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./app-menu.component.html */ "./src/app/app-menu/app-menu.component.html"),
            styles: [__webpack_require__(/*! ./app-menu.component.css */ "./src/app/app-menu/app-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_apps_menu_service__WEBPACK_IMPORTED_MODULE_2__["AppsMenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppMenuComponent);
    return AppMenuComponent;
}());



/***/ }),

/***/ "./src/app/app-menu/app-menu.module.ts":
/*!*********************************************!*\
  !*** ./src/app/app-menu/app-menu.module.ts ***!
  \*********************************************/
/*! exports provided: AppMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMenuModule", function() { return AppMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_menu_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-menu-routing.module */ "./src/app/app-menu/app-menu-routing.module.ts");
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-menu.component */ "./src/app/app-menu/app-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppMenuModule = /** @class */ (function () {
    function AppMenuModule() {
    }
    AppMenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_menu_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppMenuRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
            ],
            declarations: [_app_menu_component__WEBPACK_IMPORTED_MODULE_4__["AppMenuComponent"]]
        })
    ], AppMenuModule);
    return AppMenuModule;
}());



/***/ }),

/***/ "./src/app/app-menu/apps-menu.service.ts":
/*!***********************************************!*\
  !*** ./src/app/app-menu/apps-menu.service.ts ***!
  \***********************************************/
/*! exports provided: AppsMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsMenuService", function() { return AppsMenuService; });
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

var AppsMenuService = /** @class */ (function () {
    function AppsMenuService() {
    }
    AppsMenuService.prototype.getAppsMenu = function () {
        var apps = new Array();
        apps.push({
            label: 'SIS',
            icon: 'assets/images/Sis.svg',
            imageWidth: '{"width": "32px"}',
            onClick: this.openRW1,
            isMdIcon: false
        }, {
            label: 'Classroom',
            icon: 'assets/images/Classroom.svg',
            imageWidth: '{"width": "32px"}',
            onClick: null,
            isMdIcon: false
        }, {
            label: 'LMS',
            icon: 'assets/images/rlm_icon.png',
            imageWidth: '{"width": "32px"}',
            onClick: null,
            isMdIcon: false
        }, {
            label: 'Email',
            icon: 'assets/images/Communications.svg',
            imageWidth: '{"width": "32px"}',
            onClick: null,
            isMdIcon: false
        }, {
            label: 'Medical',
            icon: 'assets/images/medical-bag.svg',
            imageWidth: '{"width": "32px"}',
            onClick: null,
            isMdIcon: false
        }, {
            label: 'RWU',
            icon: 'assets/images/rwu_justUsquare.svg',
            imageWidth: '{"width": "32px"}',
            onClick: null,
            isMdIcon: false
        }, {
            label: 'UserVoice',
            icon: 'assets/images/uservoice_icon.png',
            imageWidth: '{"width": "32px", "height": "32px"}',
            onClick: null,
            isMdIcon: false
        }, {
            label: 'Time Clock',
            icon: 'assets/images/ic_access_time_black_24px.svg',
            imageWidth: '{"width": "32px", "height": "32px"}',
            onClick: null,
            isMdIcon: false
        }, {
            label: 'Chat Support',
            icon: 'assets/images/ic_person_pin_black_24px.svg',
            imageWidth: '{"width": "32px", "height": "32px"}',
            onClick: null,
            isMdIcon: false
        });
        return apps;
    };
    AppsMenuService.prototype.openRW1 = function () {
        var tabId = sessionStorage.getItem('tabId');
        var newWindow = window.open('http://renweb1-local.renweb.com/renweb1/', '');
    };
    AppsMenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppsMenuService);
    return AppsMenuService;
}());



/***/ })

}]);
//# sourceMappingURL=app-menu-app-menu-module.js.map