import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { confirmedValidator } from '../../confirmed.validator';

@Component({
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
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
      this.dataService.userregistration(angForm1.value.name,
                                        angForm1.value.lastname,
                                        angForm1.value.email,
                                        angForm1.value.password,
                                        angForm1.value.contactno,)
      .pipe(first())
      .subscribe(
                  data => {
                  this.router.navigate(['login']);
                  },

                  error => {
                    console.log("error ala re...")
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
