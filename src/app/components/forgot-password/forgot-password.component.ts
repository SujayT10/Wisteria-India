import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { PartnerService } from 'src/app/services/partner.service';
import { confirmedValidator } from '../../confirmed.validator';
import { ApiService } from '../../services/api.service';

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

  constructor(private fb: FormBuilder,private apiService: ApiService, private router:Router,private _service: NotificationsService) {
    this.angForm = this.fb.group({

      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      user_id: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      });
  }

  ngOnInit() {
  }

  postdata(angForm1: any){
    // console.log(angForm1.control);
      this.apiService.userregistration(angForm1.value.name,
                                       angForm1.value.lastname,
                                       angForm1.value.email,
                                       angForm1.value.contactno,
                                       angForm1.value.password,
                                       )
      .pipe(first())
      .subscribe(
                  data => {
                  // console.log("Hellooooo");
                  // this.router.navigate(['/login']);
                  this.angForm.reset();
                  },

                  error => {
                    console.log("Error from RegisterPage")
                  }
                );

  }

  onSuccess(){ this._service.success('Successfully Registred'); }
  onCancle(){ this.router.navigate(['/login']); }

  get email() { return this.angForm.get('email'); }
  get user_id() { return this.angForm.get('user_id'); }
}
