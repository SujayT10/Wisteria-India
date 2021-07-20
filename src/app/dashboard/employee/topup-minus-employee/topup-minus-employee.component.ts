import { ApiService } from 'src/app/services/api.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { PartnerService } from 'src/app/services/partner.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-topup-minus-employee',
  templateUrl: './topup-minus-employee.component.html',
  styleUrls: ['./topup-minus-employee.component.css']
})
export class TopupMinusEmployeeComponent implements OnInit {
  angForm: FormGroup;
  emp_id: string;
  admin_id: string;
  public options:any = {
    showProgressBar: false,
    position: ["bottom", "right"],
    timeOut: 2000,
    animate: "fade",
  };

  constructor(private fb: FormBuilder,
              private router:Router,
              private dataService: ApiService,
              private employeeService: EmployeeService,
              private _service: NotificationsService,
              private routes: ActivatedRoute) {

      this.angForm = this.fb.group({
        amount: ['', [Validators.required]],
        emp_id: ['', [Validators.required]],

      });
  }

  ngOnInit() {
    this.admin_id = this.dataService.getToken();
    const routeParams = this.routes.snapshot.params;
    this.emp_id = routeParams.id;
    // console.log("Referral ID: " + this.partner_id);
  }

  minusEmployee(angForm1: any){
    this.employeeService.minusAmount( angForm1.value.emp_id, angForm1.value.amount )
      .pipe(first())
      .subscribe(
                  data => {
                    this.router.navigate([ '/dashboard/employee/recent-member/' + this.admin_id ]);
                  },
                  error => {
                    console.log("Error from TopUp")
                  }
                );
    // console.log(angForm1.value);

  }

  onSuccess(){ this._service.success('Successfully Registred'); }

  get amount() { return this.angForm.get('amount'); }
}
