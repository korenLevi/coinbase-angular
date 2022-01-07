"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var contact_app_component_1 = require("./pages/contact-app/contact-app.component");
var forms_1 = require("@angular/forms");
var list_1 = require("@angular/material/list");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var orderlist_1 = require("primeng/orderlist");
var chart_page_component_1 = require("./pages/chart-page/chart-page.component");
var inputtext_1 = require("primeng/inputtext");
var inputtextarea_1 = require("primeng/inputtextarea");
var app_header_component_1 = require("./cmps/app-header/app-header.component");
var home_page_component_1 = require("./pages/home-page/home-page.component");
var contact_list_component_1 = require("./cmps/contact-list/contact-list.component");
var contact_preview_component_1 = require("./cmps/contact-preview/contact-preview.component");
var angular2_chartjs_1 = require("angular2-chartjs");
// import { AuthPageComponent } from './pages/auth-page/auth-page.component';
var auth_modal_component_1 = require("./cmps/auth-modal/auth-modal.component");
var user_page_component_1 = require("./pages/user-page/user-page.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                contact_app_component_1.ContactAppComponent,
                chart_page_component_1.ChartPageComponent,
                app_header_component_1.AppHeaderComponent,
                home_page_component_1.HomePageComponent,
                contact_list_component_1.ContactListComponent,
                contact_preview_component_1.ContactPreviewComponent,
                // AuthPageComponent,
                auth_modal_component_1.AuthModalComponent,
                user_page_component_1.UserPageComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                orderlist_1.OrderListModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                inputtext_1.InputTextModule,
                inputtextarea_1.InputTextareaModule,
                // MatList,
                angular2_chartjs_1.ChartModule,
                http_1.HttpClientModule,
                list_1.MatListModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
