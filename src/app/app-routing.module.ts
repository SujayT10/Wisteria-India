import { ManageVendorComponent } from './dashboard/vendor/manage-vendor/manage-vendor.component';
import { EmpForgotPasswordComponent } from './employee-dashboard/emp/emp-forgot-password/emp-forgot-password.component';
import { RecentEmpComponent } from './employee-dashboard/emp/recent-emp/recent-emp.component';
import { FindEmpComponent } from './employee-dashboard/emp/find-emp/find-emp.component';
import { PAddComponent } from './partner-dashboard/pPartner/p-add/p-add.component';
import { TopupPpartnerComponent } from './partner-dashboard/pPartner/topup-ppartner/topup-ppartner.component';
import { RecentPpartnerComponent } from './partner-dashboard/pPartner/recent-ppartner/recent-ppartner.component';
import { FindPpartnerComponent } from './partner-dashboard/pPartner/find-ppartner/find-ppartner.component';
import { ManagePpartnerComponent } from './partner-dashboard/pPartner/manage-ppartner/manage-ppartner.component';
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
import { AddEmployeeComponent } from './dashboard/employee/add-employee/add-employee.component';
import { ReferralRegisterComponent } from './components/referral-register/referral-register.component';
import { PartnerProfileComponent } from './partner-dashboard/partner-profile/partner-profile.component';
import { PartnerAuthguardGuard } from './PartnerAuthguard.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UpdateProfileComponent } from './partner-dashboard/update-profile/update-profile.component';
import { PaymentOptionComponent } from './partner-dashboard/pPartner/payment-option/payment-option.component';
import { TalentHuntRegisterComponent } from './components/talent-hunt-register/talent-hunt-register.component';
import { SuccessfulRegisterComponent } from './components/talent-hunt-register/successful-register/successful-register.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmpProfileComponent } from './employee-dashboard/emp-profile/emp-profile.component';
import { ManageEmpComponent } from './employee-dashboard/emp/manage-emp/manage-emp.component';
import { EmpPaymetOptionComponent } from './employee-dashboard/emp/emp-paymet-option/emp-paymet-option.component';
import { EmpResetPasswordComponent } from './employee-dashboard/emp/emp-reset-password/emp-reset-password.component';
import { FindVendorComponent } from './dashboard/vendor/find-vendor/find-vendor.component';
import { RecentVendorComponent } from './dashboard/vendor/recent-vendor/recent-vendor.component';
import { AddVendorComponent } from './dashboard/vendor/add-vendor/add-vendor.component';
import { TopupMinusPartnerComponent } from './dashboard/partner/topup-minus-partner/topup-minus-partner.component';

const routes: Routes = [
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'admin-login', component: AdminLoginComponent },
{ path: 'employee-login', component: EmployeeLoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'aboutUs', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'admin-registration', component: AdminRegisterComponent },
{ path: 'referral-registration/:id', component: ReferralRegisterComponent },
{ path: 'forgotten-password', component: ForgotPasswordComponent },
{ path: 'reset-password/:id', component: ResetPasswordComponent },
{ path: 'employee-forgotten-password', component: EmpForgotPasswordComponent },
{ path: 'employee-reset-password/:id', component: EmpResetPasswordComponent },

{ path: 'talent-hunt-registration', component: TalentHuntRegisterComponent },
{ path: 'talent-hunt-registration/successful', component: SuccessfulRegisterComponent },

{ path: 'privacy-policy', component: PrivacyPolicyComponent },
{ path: 'term-condition', component: TermAndConditionComponent },
{ path: 'interest-based-ads', component: InterestBasedAdsComponent },
{ path: 'conditions-of-use', component: ConditionsOfUseComponent, },
{ path: 'cancellation-refund-policy', component: CancellationRefundPolicyComponent },

{ path: 'dashboard/:id', component: DashboardComponent,canActivate: [AuthguardGuard] },

{ path: 'dashboard/employee/manage-member/:id', component: ManageEmployeeComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/employee/find-member/:id', component: FindEmployeeComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/employee/black-listed/:id', component: BlackedListedEmployeeComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/employee/recent-member/:id', component: RecentEmployeeComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/employee/topup-member/:id', component: TopupEmployeeComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/employee/add/:id', component: AddEmployeeComponent, canActivate: [AuthguardGuard] },

{ path: 'dashboard/partner/manage-member/:id', component: ManagePartnerComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/find-member/:id', component: FindPartnerComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/black-listed/:id', component: BlackListedPartnerComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/recent-member/:id', component: RecentPartnerComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/topup-member/:id', component: TopupPartnerComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/minus-amount-member/:id', component: TopupMinusPartnerComponent, canActivate: [AuthguardGuard] },

{ path: 'dashboard/partner/add/:id', component: AddComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/partner/profile/:id', component: AdminProfileComponent, canActivate: [AuthguardGuard] },

{ path: 'dashboard/vendor/manage-member/:id', component: ManageVendorComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/vendor/find-member/:id', component: FindVendorComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/vendor/black-listed/:id', component: BlackListComponent, canActivate: [AuthguardGuard]  },
{ path: 'dashboard/vendor/recent-member/:id', component: RecentVendorComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/vendor/topup-member/:id', component: TopupMemberComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/vendor/add/:id', component: AddVendorComponent, canActivate: [AuthguardGuard] },

{ path: 'dashboard/customer/manage-member/:id', component: ManageVendorComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/customer/find-member/:id', component: FindVendorComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/customer/black-listed/:id', component: BlackListComponent, canActivate: [AuthguardGuard]  },
{ path: 'dashboard/customer/recent-member/:id', component: RecentVendorComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/customer/topup-member/:id', component: TopupMemberComponent, canActivate: [AuthguardGuard] },

{ path: 'dashboard/talent-hunt/manage-member/:id', component: ManageMemberComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/talent-hunt/find-member/:id', component: FindMemberComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/talent-hunt/black-listed/:id', component: BlackListComponent, canActivate: [AuthguardGuard]  },
{ path: 'dashboard/talent-hunt/recent-member/:id', component: RecentMemberComponent, canActivate: [AuthguardGuard] },
{ path: 'dashboard/talent-hunt/topup-member/:id', component: TopupMemberComponent, canActivate: [AuthguardGuard] },

{ path: 'partner-dashboard/:id', component: PartnerDashboardComponent,canActivate: [PartnerAuthguardGuard] },
{ path: 'partner-dashboard/partner/manage-member/:id', component: ManagePpartnerComponent, canActivate: [PartnerAuthguardGuard] },
{ path: 'partner-dashboard/partner/find-member/:id', component: FindPpartnerComponent, canActivate: [PartnerAuthguardGuard] },
{ path: 'partner-dashboard/partner/recent-member/:id', component: RecentPpartnerComponent, canActivate: [PartnerAuthguardGuard] },
{ path: 'partner-dashboard/partner/topup-member/:id', component: TopupPpartnerComponent, canActivate: [PartnerAuthguardGuard] },
{ path: 'partner-dashboard/partner/payment-option/:id', component: PaymentOptionComponent, canActivate: [PartnerAuthguardGuard] },
{ path: 'partner-dashboard/partner/add/:id', component: PAddComponent, canActivate: [PartnerAuthguardGuard] },
{ path: 'partner-dashboard/partner/partner-profile/:id', component: PartnerProfileComponent, canActivate: [PartnerAuthguardGuard] },
{ path: 'partner-dashboard/partner/partner-update-profile/:id', component: UpdateProfileComponent, canActivate: [PartnerAuthguardGuard] },

{ path: 'employee-dashboard/:id', component: EmployeeDashboardComponent, canActivate: [AuthguardGuard] },
{ path: 'employee-dashboard/employee/manage-member/:id', component: ManageEmpComponent, canActivate: [AuthguardGuard] },
{ path: 'employee-dashboard/employee/find-member/:id', component: FindEmpComponent, canActivate: [AuthguardGuard] },
{ path: 'employee-dashboard/employee/recent-member/:id', component: RecentEmpComponent, canActivate: [AuthguardGuard] },
// { path: 'employee-dashboard/employee/topup-member/:id', component: TopupPpartnerComponent, canActivate: [AuthguardGuard] },
{ path: 'employee-dashboard/employee/payment-option/:id', component: EmpPaymetOptionComponent, canActivate: [AuthguardGuard] },
// { path: 'employee-dashboard/employee/add/:id', component: PAddComponent, canActivate: [AuthguardGuard] },
{ path: 'employee-dashboard/employee/employee-profile/:id', component: EmpProfileComponent, canActivate: [AuthguardGuard] },
// { path: 'employee-dashboard/employee/employee-update-profile/:id', component: UpdateProfileComponent, canActivate: [AuthguardGuard] },

{ path: '**', component: PageNotFoundComponent },

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
