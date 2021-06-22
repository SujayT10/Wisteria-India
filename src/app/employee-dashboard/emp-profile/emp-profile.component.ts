import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {
  emp_id: string;
  activeEmployee: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.emp_id = this.employeeService.getToken();
    this.activeId(this.emp_id);
  }

  public activeId(partner_id: any){
    this.employeeService.activeEmployee(partner_id)
    .pipe(first())
    .subscribe((data:Employee[]) =>{
      this.activeEmployee= data;
      // console.log(this.activePartner);
    })
  }

}
