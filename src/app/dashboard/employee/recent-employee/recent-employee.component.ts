import { Employee } from './../../../classes/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-recent-employee',
  templateUrl: './recent-employee.component.html',
  styleUrls: ['./recent-employee.component.css']
})
export class RecentEmployeeComponent implements OnInit {

  employee: Employee[];
  totalLength: any;
  page: number = 1;

  constructor(private _empService: EmployeeService) { }

  ngOnInit(): void {
    this._empService.recentEmployee().subscribe((data: Employee[]) =>{
      this.employee= data;
      // console.log(this.partner);
      this.totalLength= data.length;
    });
  }

}
