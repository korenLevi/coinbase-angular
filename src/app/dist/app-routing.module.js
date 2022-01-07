"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_page_component_1 = require("./pages/home-page/home-page.component");
var contact_app_component_1 = require("./pages/contact-app/contact-app.component");
var user_page_component_1 = require("./pages/user-page/user-page.component");
var chart_page_component_1 = require("./pages/chart-page/chart-page.component");
var routes = [
    { path: '', component: home_page_component_1.HomePageComponent },
    { path: 'contacts', component: contact_app_component_1.ContactAppComponent },
    { path: 'charts', component: chart_page_component_1.ChartPageComponent },
    { path: 'user', component: user_page_component_1.UserPageComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
