
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

const routes: Routes = [
{ path: '', component: LoginComponent, pathMatch: 'full' },
{ path: 'login', component: LoginComponent, pathMatch: 'full' },
{ path: 'home', component: HomeComponent, pathMatch: 'full' },
{ path: 'aboutUs', component: HomeComponent, pathMatch: 'full' },
{ path: 'registration', component: RegisterComponent, pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard], },
{ path: 'dashboard/manage-member', component: ManageMemberComponent },
{ path: 'dashboard/find-member', component: FindMemberComponent },
{ path: 'dashboard/black-listed', component: BlackListComponent },
{ path: 'dashboard/recent-member', component: RecentMemberComponent },
{ path: 'dashboard/topup-member', component: TopupMemberComponent },
// { path: '**', component: PageNotFoundComponent },

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
