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

  constructor(private _empService: EmployeeService,  private router: Router) { }

  ngOnInit(): void {
    this._empService.recentEmployee().subscribe((data: Employee[]) =>{
      this.employee= data;
      // console.log(this.partner);
      this.totalLength= data.length;
    });
  }

  public addWallet(emp: Employee){
    this.id = emp.emp_id;
    this.router.navigate([ '/dashboard/employee/topup-member/' + this.id ]);
  }

  public deleteUser(emp: Employee) {
    // this.partnerService.deletePartner( emp.emp_id )
    //  .subscribe(data => {
    //   console.log("Success");
    //    this.partner = this.partner.filter(u => u !== partner)
    //  },
    //  error => {
    //   this.partner = this.partner.filter(u => u !== partner)
    //    console.log("Error from TopUp");
    //  })
  }

}
