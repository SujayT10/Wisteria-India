import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { first } from 'rxjs/operators';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {
  angForm: FormGroup;
  admin: {
    title: String,
    button1: String,
    button2:  String,
  };

  public options:any = {
    showProgressBar: false,
    position: ["top", "right"],
    timeOut: 2000,
    animate: "fade",
};

  constructor(private fb: FormBuilder,private vendorService: VendorService,private router:Router, private _service: NotificationsService) {
      this.angForm = this.fb.group({
        userId: ['', [Validators.required ]],
        password: ['', Validators.required]
      });
  }

  ngOnInit() {
    // this.admin = this.vendorService.getStaticData().admin;
  }

  postdata(angForm1: any){
      this.vendorService.vendorLogin(angForm1.value.userId, angForm1.value.password )
      .pipe(first())
      .subscribe(
                data => {
                  const redirect = this.vendorService.redirectUrl ? this.vendorService.redirectUrl : ['/vendor-dashboard/?'];
                  this.router.navigate([redirect + angForm1.value.userId]);
                },
                error =>{
                  this.onError();
                });
  }

  onError(){ this._service.error('Error','Email, UserId or Password Not Match'); }

  get userId() { return this.angForm.get('userId'); }
  get password() { return this.angForm.get('password'); }
}
