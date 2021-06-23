import { Users } from './../classes/users';
import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../services/partner.service';
import { Partner } from '../classes/partner';
import { first } from 'rxjs/operators';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../classes/employee';
import { CommonLinksService } from '../services/common-links.service';
import * as $ from 'jquery';
import { CustomerService } from '../services/customer.service';
import { TelentHunt } from '../classes/telent-hunt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  partner: Partner[];
  employee: Employee[];
  activeUser: Users[];
  telentHunt: TelentHunt[];
  totalLength: any;
  page: number = 1;
  totalEmpLength: any;
  userDisplayName: any;
  admin_id:string;
  link : string;
  showMe:boolean = false;

  constructor(private partnerService: PartnerService,
              private dataService: ApiService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private _linksService : CommonLinksService) { }

  ngOnInit(): void {
      this.partnerService.recentPartner().subscribe((partner: Partner[]) =>{
      this.partner= partner;
      this.totalLength= partner.length;
    });

    this.employeeService.recentEmployee().subscribe((emp: Employee[]) =>{
      this.employee= emp;
      this.totalEmpLength= emp.length;
    });

     this.customerService.recentCustomer().subscribe((telentHunt: TelentHunt[]) =>{
      this.telentHunt= telentHunt;
      this.totalEmpLength= telentHunt.length;
    });

    this.admin_id = this.dataService.getToken();
    this.link = this._linksService.referal_link + this.admin_id;
    this.activeId(this.admin_id);

  }

  public activeId(activeId: string){
    this.dataService.activeUser(activeId)
    .pipe(first())
    .subscribe((data:Users[]) =>{
      this.activeUser= data;
      // console.log(this.activeUser);
    })
  }

  public toggleMe(){ this.showMe =! this.showMe; }

}
