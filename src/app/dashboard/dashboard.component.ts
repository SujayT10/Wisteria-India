import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginbtn:boolean;
  logoutbtn:boolean;

  constructor(private dataService: ApiService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
    console.log("loggedin");
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
      logout()
      {
      this.dataService.deleteToken();
      window.location.href = window.location.href;
      }

  ngOnInit(): void {
  }


}
