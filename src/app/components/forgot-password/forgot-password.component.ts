import { PartnerService } from './../../services/partner.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  angForm: FormGroup;
  data = "Find Your Account";
  public options:any = {
    showProgressBar: false,
    position: ["top", "right"],
    timeOut: 2000,
    animate: "fade",
  };

  constructor(private fb: FormBuilder,private PartnerService: PartnerService, private router:Router,private _service: NotificationsService) {
    this.angForm = this.fb.group({

      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      userId: ['', [Validators.required ]],
      });
  }

  ngOnInit() {
  }

  postdata(angForm1: any){
    // console.log(angForm1.control);
      this.PartnerService.forgotPassword( angForm1.value.email,
                                          angForm1.value.userId,
                                        )
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

  onSuccess(){ this._service.success('Successfully Registred'); }
  onCancle(){ this.router.navigate(['/login']); }

  get email() { return this.angForm.get('email'); }
  get userId() { return this.angForm.get('userId'); }
}
