import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogoComponent } from './components/logo/logo.component';
import { ManageMemberComponent } from './dashboard/manage-member/manage-member.component';
import { FindMemberComponent } from './dashboard/find-member/find-member.component';
import { BlackListComponent } from './dashboard/black-list/black-list.component';
import { RecentMemberComponent } from './dashboard/recent-member/recent-member.component';
import { TopupMemberComponent } from './dashboard/topup-member/topup-member.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LogoComponent,
    ManageMemberComponent,
    FindMemberComponent,
    BlackListComponent,
    RecentMemberComponent,
    TopupMemberComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
