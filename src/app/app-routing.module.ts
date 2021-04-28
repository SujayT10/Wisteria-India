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

const routes: Routes = [
{ path: '', component: LoginComponent, pathMatch: 'full' },
{ path: 'login', component: LoginComponent, pathMatch: 'full' },
{ path: 'home', component: HomeComponent, pathMatch: 'full' },
{ path: 'aboutUs', component: HomeComponent, pathMatch: 'full' },
{ path: 'registration', component: RegisterComponent, pathMatch: 'full' },
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


{ path: '**', component: PageNotFoundComponent },

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
