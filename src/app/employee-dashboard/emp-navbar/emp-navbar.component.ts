import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-emp-navbar',
  templateUrl: './emp-navbar.component.html',
  styleUrls: ['./emp-navbar.component.css']
})
export class EmpNavbarComponent implements OnInit {
  emp_id: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.emp_id = this.employeeService.getToken();
  }

}
