import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Users } from 'src/app/classes/users';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loginbtn:boolean;
  logoutbtn:boolean;
  admin_id: string;
  activeUser: Users[];

  constructor(private dataService: ApiService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn()) {
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
        this.dataService.deleteToken();
        window.location.replace(origin + '#/admin-login');
      }

  ngOnInit(): void {
    this.admin_id = this.dataService.getToken();
    this.activeId(this.admin_id);
  }

  public activeId(activeId: string){
    this.dataService.activeUser(activeId)
    .pipe(first())
    .subscribe((data:Users[]) =>{
      this.activeUser= data;
      // console.log(this.activeUser);
    })
  }

}
