
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { FooterComponent } from './dashboard/footer/footer.component';

import { ManageMemberComponent } from './dashboard/customer/manage-member/manage-member.component';
import { FindMemberComponent } from './dashboard/customer/find-member/find-member.component';
import { BlackListComponent } from './dashboard/customer/black-list/black-list.component';
import { RecentMemberComponent } from './dashboard/customer/recent-member/recent-member.component';
import { TopupMemberComponent } from './dashboard/customer/topup-member/topup-member.component';

import { ManagePartnerComponent } from './dashboard/partner/manage-partner/manage-partner.component';
import { FindPartnerComponent } from './dashboard/partner/find-partner/find-partner.component';
import { BlackListedPartnerComponent } from './dashboard/partner/black-listed-partner/black-listed-partner.component';
import { RecentPartnerComponent } from './dashboard/partner/recent-partner/recent-partner.component';
import { TopupPartnerComponent } from './dashboard/partner/topup-partner/topup-partner.component';

import { ManageEmployeeComponent } from './dashboard/employee/manage-employee/manage-employee.component';
import { FindEmployeeComponent } from './dashboard/employee/find-employee/find-employee.component';
import { BlackedListedEmployeeComponent } from './dashboard/employee/blacked-listed-employee/blacked-listed-employee.component';
import { RecentEmployeeComponent } from './dashboard/employee/recent-employee/recent-employee.component';
import { TopupEmployeeComponent } from './dashboard/employee/topup-employee/topup-employee.component';

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
    SidebarComponent,
    FooterComponent,
    ManagePartnerComponent,
    FindPartnerComponent,
    BlackListedPartnerComponent,
    RecentPartnerComponent,
    TopupPartnerComponent,
    ManageEmployeeComponent,
    FindEmployeeComponent,
    BlackedListedEmployeeComponent,
    RecentEmployeeComponent,
    TopupEmployeeComponent

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
