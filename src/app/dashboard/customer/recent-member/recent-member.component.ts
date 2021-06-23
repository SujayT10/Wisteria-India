import { Employee } from './../../../classes/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { TelentHunt } from 'src/app/classes/telent-hunt';

@Component({
  selector: 'app-recent-member',
  templateUrl: './recent-member.component.html',
  styleUrls: ['./recent-member.component.css']
})
export class RecentMemberComponent implements OnInit {

  telentHunt: TelentHunt[];
  totalLength: any;
  page: number = 1;
  id: string;

  constructor(private customerService: CustomerService,  private router: Router) { }

  ngOnInit(): void {
    this.customerService.recentCustomer().subscribe((data: TelentHunt[]) =>{
      this.telentHunt= data;
      // console.log(this.partner);
      this.totalLength= data.length;
    });
  }

  // public addWallet(emp: Employee){
  //   this.id = emp.emp_id;
  //   this.router.navigate([ '/dashboard/employee/topup-member/' + this.id ]);
  // }

  // public deleteUser(emp: Employee) {
  //   this.employeeService.deleteEmployee( emp.emp_id )
  //    .subscribe(data => {
  //     console.log("Success");
  //      this.employee = this.employee.filter(u => u !== emp)
  //    },
  //    error => {
  //     this.employee = this.partner.filter(u => u !== partner)
  //      console.log("Error from TopUp");
  //    })
  // }

}
