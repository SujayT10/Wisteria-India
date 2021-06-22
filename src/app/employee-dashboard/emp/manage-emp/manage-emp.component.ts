import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/classes/partner';
import { PartnerService } from 'src/app/services/partner.service';
import { first } from 'rxjs/operators';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-manage-emp',
  templateUrl: './manage-emp.component.html',
  styleUrls: ['./manage-emp.component.css']
})
export class ManageEmpComponent implements OnInit {
  emp_id: string;
  partner: Partner[];
  totalLength: any;
  page: number = 1;

  constructor(private partnerService: PartnerService, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.emp_id = this.employeeService.getToken();
    this.postId(this.emp_id);
  }

  public postId(emp_id: any){
    this.partnerService.postDataToDB(emp_id)
        .pipe(first())
        .subscribe((data: Partner[]) =>{
          this.partner= data;
        })
  }

}
