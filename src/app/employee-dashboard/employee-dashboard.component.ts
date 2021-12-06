import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { PartnerService } from '../services/partner.service';
import { first } from 'rxjs/operators';
import { Partner } from '../classes/partner';
import { CommonLinksService } from '../services/common-links.service';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  emp_id : string;
  activeEmp:Employee[];
  partner: Partner[];
  totalLength: any;
  page: number = 1;
  link : string;
  showMe:boolean = false;

  constructor(private partnerService: PartnerService,
              private _linksService : CommonLinksService,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.emp_id  = this.employeeService.getToken();
    this.link = this._linksService.referal_link + this.emp_id;
    this.postId(this.emp_id);
    this.activeId(this.emp_id);
  }

  public postId(emp_id: any){
    this.partnerService.recentPartnerBYID(emp_id)
        .pipe(first())
        .subscribe((data: Partner[]) =>{
          this.partner= data;
        })
  }

  public activeId(emp_id: any){
    this.employeeService.activeEmployee(emp_id)
    .pipe(first())
    .subscribe((data:Employee[]) =>{
      this.activeEmp= data;
      // console.log(this.activePartner);
    })
  }

  public toggleMe(){ this.showMe =! this.showMe; }
}
