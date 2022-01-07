import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {OrderListModule} from 'primeng/orderlist';
import { ChartPageComponent } from './pages/chart-page/chart-page.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ChartModule } from 'angular2-chartjs';
// import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthModalComponent } from './cmps/auth-modal/auth-modal.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { MovesComponent } from './cmps/moves/moves.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactAppComponent,
    ChartPageComponent,
    AppHeaderComponent,
    HomePageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    // AuthPageComponent,
    AuthModalComponent,
    UserPageComponent,
    ContactEditComponent,
    MovesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OrderListModule,
    MatInputModule,
    MatIconModule,
    InputTextModule,
    InputTextareaModule,
    // MatList,
    ChartModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
