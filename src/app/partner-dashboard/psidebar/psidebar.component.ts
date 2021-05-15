import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Partner } from 'src/app/classes/partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-psidebar',
  templateUrl: './psidebar.component.html',
  styleUrls: ['./psidebar.component.css']
})
export class PsidebarComponent implements OnInit {

  loginbtn:boolean;
  logoutbtn:boolean;
  partner_id: string;
  activePartner: Partner[];

  constructor(private partnerService: PartnerService) {
    partnerService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.partnerService.isLoggedIn()) {
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
        this.partnerService.deleteToken();
        window.location.replace(origin + '#/login');
        // console.log("loggedOff");
      }

  ngOnInit(): void {
    this.partner_id = this.partnerService.getToken();
    this.activeId(this.partner_id);
  }

  public activeId(partner_id: any){
    this.partnerService.activePartner(partner_id)
    .pipe(first())
    .subscribe((data:Partner[]) =>{
      this.activePartner= data;
      console.log(this.activePartner);
    })
  }

}
