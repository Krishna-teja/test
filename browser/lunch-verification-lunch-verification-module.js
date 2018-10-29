(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lunch-verification-lunch-verification-module"],{

/***/ "./src/app/lunch-verification/lunch-verification-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/lunch-verification/lunch-verification-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LunchVerificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LunchVerificationRoutingModule", function() { return LunchVerificationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lunch_verification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lunch-verification.component */ "./src/app/lunch-verification/lunch-verification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _lunch_verification_component__WEBPACK_IMPORTED_MODULE_2__["LunchVerificationComponent"],
        data: { postMessage: true }
    }
];
var LunchVerificationRoutingModule = /** @class */ (function () {
    function LunchVerificationRoutingModule() {
    }
    LunchVerificationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LunchVerificationRoutingModule);
    return LunchVerificationRoutingModule;
}());



/***/ }),

/***/ "./src/app/lunch-verification/lunch-verification.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/lunch-verification/lunch-verification.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1bmNoLXZlcmlmaWNhdGlvbi9sdW5jaC12ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/lunch-verification/lunch-verification.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/lunch-verification/lunch-verification.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  lunch-verification works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/lunch-verification/lunch-verification.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/lunch-verification/lunch-verification.component.ts ***!
  \********************************************************************/
/*! exports provided: LunchVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LunchVerificationComponent", function() { return LunchVerificationComponent; });
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

var LunchVerificationComponent = /** @class */ (function () {
    function LunchVerificationComponent() {
    }
    LunchVerificationComponent.prototype.ngOnInit = function () {
    };
    LunchVerificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lunch-verification',
            template: __webpack_require__(/*! ./lunch-verification.component.html */ "./src/app/lunch-verification/lunch-verification.component.html"),
            styles: [__webpack_require__(/*! ./lunch-verification.component.css */ "./src/app/lunch-verification/lunch-verification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LunchVerificationComponent);
    return LunchVerificationComponent;
}());



/***/ }),

/***/ "./src/app/lunch-verification/lunch-verification.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/lunch-verification/lunch-verification.module.ts ***!
  \*****************************************************************/
/*! exports provided: LunchVerificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LunchVerificationModule", function() { return LunchVerificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lunch_verification_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lunch-verification-routing.module */ "./src/app/lunch-verification/lunch-verification-routing.module.ts");
/* harmony import */ var _lunch_verification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lunch-verification.component */ "./src/app/lunch-verification/lunch-verification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LunchVerificationModule = /** @class */ (function () {
    function LunchVerificationModule() {
    }
    LunchVerificationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _lunch_verification_routing_module__WEBPACK_IMPORTED_MODULE_2__["LunchVerificationRoutingModule"]
            ],
            declarations: [_lunch_verification_component__WEBPACK_IMPORTED_MODULE_3__["LunchVerificationComponent"]]
        })
    ], LunchVerificationModule);
    return LunchVerificationModule;
}());



/***/ })

}]);
//# sourceMappingURL=lunch-verification-lunch-verification-module.js.map