import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-forgot-password',
  templateUrl: './emp-forgot-password.component.html',
  styleUrls: ['./emp-forgot-password.component.css']
})
export class EmpForgotPasswordComponent implements OnInit {
  angForm: FormGroup;
  data = "Find Your Account";
  public options:any = {
    showProgressBar: false,
    position: ["top", "right"],
    timeOut: 2000,
    animate: "fade",
  };

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService,
              private router:Router,
              private _service: NotificationsService) {
    this.angForm = this.fb.group({

      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      userId: ['', [Validators.required ]],
      });
  }

  ngOnInit() {
  }

  postdata(angForm1: any){
    // console.log(angForm1.control);
      this.employeeService.forgotPassword( angForm1.value.email, angForm1.value.userId,)
      .pipe(first())
      .subscribe(
                  data => {
                  // this.onSuccess();
                  // this.angForm.reset();
                  console.log("I am Forgot Password");
                  },
                  error => {
                    this.onSuccess();
                    this.angForm.reset();
                    // console.log("Error from RegisterPage")
                  }
                );

  }

  onSuccess(){ this._service.success('Successfully Send'); }
  onCancle(){ this.router.navigate(['/employee-login']); }

  get email() { return this.angForm.get('email'); }
  get userId() { return this.angForm.get('userId'); }
}
