import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../services/partner.service';
import { Partner } from '../classes/partner';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  partner: Partner[];
  totalLength: any;
  page: number = 1;
  userDisplayName: any;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partnerService.recentPartner().subscribe((data: Partner[]) =>{
      this.partner= data;
      console.log(this.partner);
      this.totalLength= data.length;
      this.userDisplayName = sessionStorage.getItem('loggedUser');
      // console.log("Partners Data");
    });
  }


}
