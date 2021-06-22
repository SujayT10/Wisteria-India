import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { PartnerService } from 'src/app/services/partner.service';
import { NotificationsService } from 'angular2-notifications';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  angForm: FormGroup;
  title = "Employee Login"
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
        userId: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  ngOnInit() {
  }

  postdata(angForm1: any){
      this.employeeService.employeeLogin( angForm1.value.userId, angForm1.value.password )
      .pipe(first())
      .subscribe(
                data => {
                  const redirect = this.employeeService.redirectUrl ? this.employeeService.redirectUrl : '/employee-dashboard/WIE-';
                  this.router.navigate([redirect + angForm1.value.userId ]);
                },
                error => {
                  this.onError();
                }
                );
  }

  onError(){ this._service.error('Error','Email, UserId or Password Not Match'); }

  get userId() { return this.angForm.get('userId'); }
  get password() { return this.angForm.get('password'); }
}
