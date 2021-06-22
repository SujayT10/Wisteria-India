import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/employee';
import { Partner } from 'src/app/classes/partner';
import { ApiService } from 'src/app/services/api.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  employee: Employee[];
  totalLength: any;
  page: number = 1;
  admin_id:string;

  constructor(private _empService: EmployeeService, private dataService: ApiService) { }

  ngOnInit(): void {
    this._empService.getEmp().subscribe((data: Employee[]) =>{
    this.employee = data;
    // console.log(this.employee);
    this.totalLength= data.length;
  });
  this.admin_id = this.dataService.getToken();

  }

}
