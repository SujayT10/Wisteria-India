import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-emp-sidebar',
  templateUrl: './emp-sidebar.component.html',
  styleUrls: ['./emp-sidebar.component.css']
})
export class EmpSidebarComponent implements OnInit {

  loginbtn:boolean;
  logoutbtn:boolean;
  emp_id: string;
  activeEmployee: Employee[];

  constructor(private employeeService: EmployeeService) {
    employeeService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.employeeService.isLoggedIn()) {
        // console.log("loggedin");
        this.loginbtn=false;
        this.logoutbtn=true
    }
    else{
        this.loginbtn=true;
        this.logoutbtn=false
    }

    }
    private changeName(name: boolean): void {
      this.logoutbtn = name;
      this.loginbtn = !name;
      }

      logout(){
        this.employeeService.deleteToken();
        window.location.replace(origin + '#/login');
        // console.log("loggedOff");
      }

  ngOnInit(): void {
    this.emp_id = this.employeeService.getToken();
    this.activeId(this.emp_id);
  }

  public activeId(emp_id: any){
    this.employeeService.activeEmployee(emp_id)
    .pipe(first())
    .subscribe((data:Employee[]) =>{
      this.activeEmployee= data;
      // console.log(this.activePartner);
    })
  }

}
