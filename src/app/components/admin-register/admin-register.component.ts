import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { PartnerService } from 'src/app/services/partner.service';
import { confirmedValidator } from '../../confirmed.validator';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  angForm: FormGroup;
  data = "Admin Registration";

  constructor(private fb: FormBuilder,private apiService: ApiService, private router:Router) {
    this.angForm = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
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
  get name() { return this.angForm.get('name'); }
  get lastname() { return this.angForm.get('lastname'); }
  get contactno() { return this.angForm.get('contactno'); }

}
