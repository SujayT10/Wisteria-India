import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { confirmedValidator } from '../../confirmed.validator';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  angForm: FormGroup;
  data="Registration"

  constructor(private fb: FormBuilder,private partnerService: PartnerService, private router:Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      referalId: ['', [Validators.required]],
      address: ['', [Validators.required]],
      datetime: ['', [Validators.required]],
      contactno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.minLength(8)] ],
      confirmpassword: ['',[Validators.required]]
      },{
        validator: confirmedValidator('password', 'confirmpassword')
       });
  }

  ngOnInit() {
  }

  postdata(angForm1: any){
    // console.log(angForm1.control);
      this.partnerService.partnerRegistration(angForm1.value.firstname,
                                              angForm1.value.lastname,
                                              angForm1.value.contactno,
                                              angForm1.value.email,
                                              angForm1.value.password,
                                              angForm1.value.datetime,
                                              angForm1.value.referalId,
                                              angForm1.value.address)
      .pipe(first())
      .subscribe(
                  data => {
                  // console.log("Hellooooo");
                  this.router.navigate(['/login']);
                  },

                  error => {
                    console.log("Error from RegisterPage")
                  }
                );

  }

  // onSubmit() { this.submitted = true; }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get confirmpassword() { return this.angForm.get('confirmpassword'); }
  get firstname() { return this.angForm.get('firstname'); }
  get lastname() { return this.angForm.get('lastname'); }
  get contactno() { return this.angForm.get('contactno'); }
  get referalId() { return this.angForm.get('referalId'); }
  get address() { return this.angForm.get('address'); }
  get datetime() { return this.angForm.get('address'); }

}
