import { PartnerDashboardComponent } from './partner-dashboard/partner-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { CancellationRefundPolicyComponent } from './components/policy/cancellation-refund-policy/cancellation-refund-policy.component';
import { ConditionsOfUseComponent } from './components/policy/conditions-of-use/conditions-of-use.component';
import { InterestBasedAdsComponent } from './components/policy/interest-based-ads/interest-based-ads.component';
import { TopupPartnerComponent } from './dashboard/partner/topup-partner/topup-partner.component';
import { RecentPartnerComponent } from './dashboard/partner/recent-partner/recent-partner.component';
import { FindPartnerComponent } from './dashboard/partner/find-partner/find-partner.component';
import { ManagePartnerComponent } from './dashboard/partner/manage-partner/manage-partner.component';
import { TopupEmployeeComponent } from './dashboard/employee/topup-employee/topup-employee.component';
import { BlackedListedEmployeeComponent } from './dashboard/employee/blacked-listed-employee/blacked-listed-employee.component';
import { FindEmployeeComponent } from './dashboard/employee/find-employee/find-employee.component';
import { ManageEmployeeComponent } from './dashboard/employee/manage-employee/manage-employee.component';

import { TopupMemberComponent } from './dashboard/customer/topup-member/topup-member.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { ManageMemberComponent } from './dashboard/customer/manage-member/manage-member.component';
import { FindMemberComponent } from './dashboard/customer/find-member/find-member.component';
import { BlackListComponent } from './dashboard/customer/black-list/black-list.component';
import { RecentMemberComponent } from './dashboard/customer/recent-member/recent-member.component';
import { RecentEmployeeComponent } from './dashboard/employee/recent-employee/recent-employee.component';
import { BlackListedPartnerComponent } from './dashboard/partner/black-listed-partner/black-listed-partner.component';
import { AdminProfileComponent } from './dashboard/admin-profile/admin-profile.component';
import { AddComponent } from './dashboard/partner/add/add.component';
import { PrivacyPolicyComponent } from './components/policy/privacy-policy/privacy-policy.component';
import { TermAndConditionComponent } from './components/policy/term-and-condition/term-and-condition.component';

const routes: Routes = [
{ path: '', component: LoginComponent, pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'admin-login', component: AdminLoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'aboutUs', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'admin-registration', component: AdminRegisterComponent },

{ path: 'privacy-policy', component: PrivacyPolicyComponent },
{ path: 'term-condition', component: TermAndConditionComponent },
{ path: 'interest-based-ads', component: InterestBasedAdsComponent },
{ path: 'conditions-of-use', component: ConditionsOfUseComponent, },
{ path: 'cancellation-refund-policy', component: CancellationRefundPolicyComponent },

{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },

{ path: 'dashboard/customer/manage-member', component: ManageMemberComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/customer/find-member', component: FindMemberComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/customer/black-listed', component: BlackListComponent, canActivate: [AuthguardGuard]  },
{ path: 'dashboard/customer/recent-member', component: RecentMemberComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/customer/topup-member', component: TopupMemberComponent, canActivate: [AuthguardGuard] },

{ path: 'dashboard/employee/manage-member', component: ManageEmployeeComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/employee/find-member', component: FindEmployeeComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/employee/black-listed', component: BlackedListedEmployeeComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/employee/recent-member', component: RecentEmployeeComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/employee/topup-member', component: TopupEmployeeComponent, canActivate: [AuthguardGuard] },

{ path: 'dashboard/partner/manage-member', component: ManagePartnerComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/find-member', component: FindPartnerComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/black-listed', component: BlackListedPartnerComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/recent-member', component: RecentPartnerComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/topup-member', component: TopupPartnerComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/add', component: AddComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/profile', component: AdminProfileComponent, canActivate: [AuthguardGuard] },

{ path: 'partner-dashboard', component: PartnerDashboardComponent,canActivate: [AuthguardGuard] },

{ path: '**', component: PageNotFoundComponent },

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
