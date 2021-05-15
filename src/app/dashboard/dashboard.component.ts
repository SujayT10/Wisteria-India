import { Users } from './../classes/users';
import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../services/partner.service';
import { Partner } from '../classes/partner';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  partner: Partner[];
  activeUser: Users[];
  totalLength: any;
  page: number = 1;
  userDisplayName: any;
  admin_id:string;

  constructor(private partnerService: PartnerService, private dataService: ApiService) { }

  ngOnInit(): void {
      this.partnerService.recentPartner().subscribe((data: Partner[]) =>{
      this.partner= data;
      this.totalLength= data.length;
    });
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
