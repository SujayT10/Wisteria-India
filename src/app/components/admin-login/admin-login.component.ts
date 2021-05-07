import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  angForm: FormGroup;
  data="Admin Login";

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
      this.angForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        userId: ['', [Validators.required ]],
        password: ['', Validators.required]
      });
  }

  ngOnInit() {
  }

  error = "User name or password is incorrect";
  postdata(angForm1: any){
      this.dataService.userlogin(angForm1.value.email, angForm1.value.userId, angForm1.value.password)
      .pipe(first())
      .subscribe(
                data => {
                  const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
                  // sessionStorage.setItem('loggedUser', data.Username);
                  this.router.navigate([redirect]);
                },
                error => {
                  alert("User name or password is incorrect");

                }
                );
  }

  get email() { return this.angForm.get('email'); }
  get userId() { return this.angForm.get('userId'); }
  get password() { return this.angForm.get('password'); }

}
