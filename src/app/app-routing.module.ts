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

const routes: Routes = [
{ path: '', component: LoginComponent, pathMatch: 'full' },
{ path: 'login', component: LoginComponent, pathMatch: 'full' },
{ path: 'home', component: HomeComponent, pathMatch: 'full' },
{ path: 'aboutUs', component: HomeComponent, pathMatch: 'full' },
{ path: 'registration', component: RegisterComponent, pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard], },

{ path: 'dashboard/customer/manage-member', component: ManageMemberComponent },
{ path: 'dashboard/customer/find-member', component: FindMemberComponent },
{ path: 'dashboard/customer/black-listed', component: BlackListComponent },
{ path: 'dashboard/customer/recent-member', component: RecentMemberComponent },
{ path: 'dashboard/customer/topup-member', component: TopupMemberComponent },

{ path: 'dashboard/employee/manage-member', component: ManageEmployeeComponent },
{ path: 'dashboard/employee/find-member', component: FindEmployeeComponent },
{ path: 'dashboard/employee/black-listed', component: BlackedListedEmployeeComponent },
{ path: 'dashboard/employee/recent-member', component: RecentEmployeeComponent },
{ path: 'dashboard/employee/topup-member', component: TopupEmployeeComponent },

{ path: 'dashboard/partner/manage-member', component: ManagePartnerComponent },
{ path: 'dashboard/partner/find-member', component: FindPartnerComponent },
{ path: 'dashboard/partner/black-listed', component: BlackListedPartnerComponent },
{ path: 'dashboard/partner/recent-member', component: RecentPartnerComponent },
{ path: 'dashboard/partner/topup-member', component: TopupPartnerComponent },
// { path: '**', component: PageNotFoundComponent },

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
