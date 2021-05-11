  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
  import { first } from 'rxjs/operators';
  import { Router } from '@angular/router';
  import { ApiService } from '../../services/api.service';
  import { PartnerService } from 'src/app/services/partner.service';
  import { NotificationsService } from 'angular2-notifications';

@Component({
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    angForm: FormGroup;
    public options:any = {
      showProgressBar: false,
      position: ["top", "right"],
      timeOut: 2000,
      animate: "fade",
  };

    constructor(private fb: FormBuilder,private partnerService: PartnerService,private router:Router,private _service: NotificationsService) {
        this.angForm = this.fb.group({
          email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
          userId: ['', Validators.required],
          password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    postdata(angForm1: any){
        this.partnerService.partnerlogin(angForm1.value.email,angForm1.value.userId, angForm1.value.password)
        .pipe(first())
        .subscribe(
                  data => {
                    const redirect = this.partnerService.redirectUrl ? this.partnerService.redirectUrl : '/partner-dashboard';
                    this.router.navigate([redirect]);
                  },
                  error => {
                    this.onError();
                  }
                  );
    }

    onError(){
      this._service.error('Error','Email, UserId or Password Not Match');
  }

    get email() { return this.angForm.get('email'); }
    get userId() { return this.angForm.get('userId'); }
    get password() { return this.angForm.get('password'); }

}
