
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginbtn:boolean;
  logoutbtn:boolean;

  constructor(private dataService: ApiService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn()) {
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

      logout(){
        this.dataService.deleteToken();
        window.location.replace(origin + '/login');
        console.log("loggedOff");
      }

  ngOnInit(): void {
    
  }

}
