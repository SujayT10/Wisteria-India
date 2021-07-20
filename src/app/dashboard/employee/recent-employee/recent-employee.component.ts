import { Employee } from './../../../classes/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-employee',
  templateUrl: './recent-employee.component.html',
  styleUrls: ['./recent-employee.component.css']
})
export class RecentEmployeeComponent implements OnInit {

  employee: Employee[];
  totalLength: any;
  page: number = 1;
  id: string;

  constructor(private employeeService: EmployeeService,  private router: Router) { }

  ngOnInit(): void {
    this.employeeService.recentEmployee().subscribe((data: Employee[]) =>{
      this.employee= data;
      // console.log(this.partner);
      this.totalLength= data.length;
    });
  }

  public addWallet(emp: Employee){
    this.id = emp.emp_id;
    this.router.navigate([ '/dashboard/employee/topup-member/' + this.id ]);
  }

  public minusWallet(emp: Employee){
    this.id = emp.emp_id;
    this.router.navigate([ '/dashboard/employee/minus-amount-member/' + this.id ]);
  }


  public deleteUser(emp: Employee) {
    this.employeeService.deleteEmployee( emp.emp_id )
     .subscribe(data => {
      console.log("Success");
       this.employee = this.employee.filter(u => u !== emp)
     },
     error => {
      // this.employee = this.partner.filter(u => u !== partner)
       console.log("Error from TopUp");
     })
  }

}
