import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { first } from 'rxjs/operators';
import { confirmedValidator } from 'src/app/confirmed.validator';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css']
})
export class VendorRegisterComponent implements OnInit {

  angForm: FormGroup;
  data = "Vendor Registration";
  public options:any = {
    showProgressBar: false,
    position: ["top", "right"],
    timeOut: 2000,
    animate: "fade",
  };
  todayDate = new Date();

  constructor(private fb: FormBuilder,private vendorService: VendorService, private _service: NotificationsService) {}

  ngOnInit() {
    this.angForm = this.fb.group({

      cName: ['', [Validators.required, Validators.minLength(2)]],
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contactno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', [Validators.required, Validators.minLength(2),]],
      zipCode: ['', [Validators.required ] ],
      password: ['', [Validators.required, Validators.minLength(8)] ],
      confirmpassword: ['',[Validators.required]]
      },{
        validator: confirmedValidator('password', 'confirmpassword')
       });
  }

  postdata(angForm1: any){
    // console.log(angForm1.control);
      this.vendorService.vendorRegistration(angForm1.value.cName,
                                       angForm1.value.fullName,
                                       angForm1.value.email,
                                       angForm1.value.contactno,
                                       angForm1.value.password,
                                       angForm1.value.address,
                                       angForm1.value.zip,
                                       this.todayDate
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

  onSuccess(){
    this._service.success('Successfully Registred');
}

  get cName() { return this.angForm.get('cName'); }
  get fullName() { return this.angForm.get('fullName'); }
  get email() { return this.angForm.get('email'); }
  get contactno() { return this.angForm.get('contactno'); }
  get address(){ return this.angForm.get('address'); }
  get zipCode(){ return this.angForm.get('zipCode') }
  get password() { return this.angForm.get('password'); }
  get confirmpassword() { return this.angForm.get('confirmpassword'); }
}
