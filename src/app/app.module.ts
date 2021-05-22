
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ClipboardModule } from "@angular/cdk/clipboard";

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
import { NgxPaginationModule } from 'ngx-pagination';
import { PartnerDashboardComponent } from './partner-dashboard/partner-dashboard.component';
import { AdminProfileComponent } from './dashboard/admin-profile/admin-profile.component';
import { AddComponent } from './dashboard/partner/add/add.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { PrivacyPolicyComponent } from './components/policy/privacy-policy/privacy-policy.component';
import { TermAndConditionComponent } from './components/policy/term-and-condition/term-and-condition.component';
import { InterestBasedAdsComponent } from './components/policy/interest-based-ads/interest-based-ads.component';
import { ConditionsOfUseComponent } from './components/policy/conditions-of-use/conditions-of-use.component';
import { CancellationRefundPolicyComponent } from './components/policy/cancellation-refund-policy/cancellation-refund-policy.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PsidebarComponent } from './partner-dashboard/psidebar/psidebar.component';
import { PnavbarComponent } from './partner-dashboard/pnavbar/pnavbar.component';
import { ManagePpartnerComponent } from './partner-dashboard/pPartner/manage-ppartner/manage-ppartner.component';
import { FindPpartnerComponent } from './partner-dashboard/pPartner/find-ppartner/find-ppartner.component';
import { RecentPpartnerComponent } from './partner-dashboard/pPartner/recent-ppartner/recent-ppartner.component';
import { TopupPpartnerComponent } from './partner-dashboard/pPartner/topup-ppartner/topup-ppartner.component';
import { PAddComponent } from './partner-dashboard/pPartner/p-add/p-add.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpNavbarComponent } from './employee-dashboard/emp-navbar/emp-navbar.component';
import { EmpSidebarComponent } from './employee-dashboard/emp-sidebar/emp-sidebar.component';
import { AddEmployeeComponent } from './dashboard/employee/add-employee/add-employee.component';
import { ReferralRegisterComponent } from './components/referral-register/referral-register.component';
import { PartnerProfileComponent } from './partner-dashboard/partner-profile/partner-profile.component';


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
    TopupEmployeeComponent,
    PartnerDashboardComponent,
    AdminProfileComponent,
    AddComponent,
    HomeFooterComponent,
    PrivacyPolicyComponent,
    TermAndConditionComponent,
    InterestBasedAdsComponent,
    ConditionsOfUseComponent,
    CancellationRefundPolicyComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    PsidebarComponent,
    PnavbarComponent,
    ManagePpartnerComponent,
    FindPpartnerComponent,
    RecentPpartnerComponent,
    TopupPpartnerComponent,
    PAddComponent,
    EmpNavbarComponent,
    EmpSidebarComponent,
    AddEmployeeComponent,
    ReferralRegisterComponent,
    PartnerProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SimpleNotificationsModule.forRoot(),
    ClipboardModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
