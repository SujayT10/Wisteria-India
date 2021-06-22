import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, Params, ActivatedRoute} from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';
import { NotificationsService } from 'angular2-notifications';
import { animation } from '@angular/animations';
import { confirmedValidator } from 'src/app/confirmed.validator';

@Component({
  selector: 'app-emp-reset-password',
  templateUrl: './emp-reset-password.component.html',
  styleUrls: ['./emp-reset-password.component.css']
})
export class EmpResetPasswordComponent implements OnInit {
  angForm: FormGroup;
  data="Reset Password";
  public options:any = {
    showProgressBar: false,
    position: ["top", "right"],
    timeOut: 2000,
    animate: "fade",
  };
  userId: any;

  constructor(private fb: FormBuilder,private employeeService: EmployeeService, private router:Router,
    private route: ActivatedRoute, private _service: NotificationsService) {
    this.angForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)] ],
      confirmpassword: ['',[Validators.required]]
      },{
        validator: confirmedValidator('password', 'confirmpassword')
       });
  }

  ngOnInit() {
    const routeParams =this.route.snapshot.params;
    console.log(routeParams.id);
    this.userId = routeParams.id;
  }

  postdata(angForm1: any){
    // console.log(angForm1.control);
      this.employeeService.resetPassword( angForm1.value.password, this.userId )
      .pipe(first())
      .subscribe(
                  data => {
                  // this.onSuccess();
                  // console.log("success");
                  this.router.navigate(['/login']);
                  // this.angForm.reset();
                  },

                  error => {
                    this.onSuccess();
                    // console.log("Error from Partner Reset password");
                    this.angForm.reset();
                  }
                );

  }

  onSuccess(){
      this._service.success('Successfully Update');
  }

  get password() { return this.angForm.get('password'); }
  get confirmpassword() { return this.angForm.get('confirmpassword'); }
}
