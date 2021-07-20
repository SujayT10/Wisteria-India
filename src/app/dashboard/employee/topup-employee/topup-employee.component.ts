import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { PartnerService } from 'src/app/services/partner.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-topup-employee',
  templateUrl: './topup-employee.component.html',
  styleUrls: ['./topup-employee.component.css']
})
export class TopupEmployeeComponent implements OnInit {
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
              private apiService: ApiService,
              private _service: NotificationsService,
              private routes: ActivatedRoute,
              private employeeService: EmployeeService) {

      this.angForm = this.fb.group({
        amount: ['', [Validators.required]],
        emp_id: ['', [Validators.required]],

      });
  }

  ngOnInit() {
    this.admin_id = this.apiService.getToken();
    const routeParams = this.routes.snapshot.params;
    this.emp_id = routeParams.id;
    console.log("Referral ID: " + this.emp_id);
  }

  topUpPartner(angForm1: any){
    this.employeeService.addAmount( angForm1.value.emp_id, angForm1.value.amount )
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
