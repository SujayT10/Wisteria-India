import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'aboutUs', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
// { path: '**', component: PageNotFoundComponent },

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
