import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/employee';
import { Partner } from 'src/app/classes/partner';
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

  constructor(private _empService: EmployeeService) { }

  ngOnInit(): void {
    this._empService.getEmp().subscribe((data: Employee[]) =>{
    this.employee = data;
    this.totalLength= data.length;
  });

  }

}
