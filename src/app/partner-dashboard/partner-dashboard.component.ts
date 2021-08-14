import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { PartnerService } from '../services/partner.service';
import { first } from 'rxjs/operators';
import { Partner } from '../classes/partner';
import { CommonLinksService } from '../services/common-links.service';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.css']
})
export class PartnerDashboardComponent implements OnInit {

  partner_id : string;
  activePartner:Partner[];
  partner: Partner[];
  totalLength: any;
  page: number = 1;
  link : string;
  showMe:boolean = false;

  constructor(private partnerService: PartnerService, private _linksService : CommonLinksService) { }

  ngOnInit(): void {
    this.partner_id  = this.partnerService.getToken();
    this.link = this._linksService.referal_link + this.partner_id;
    this.postId(this.partner_id);
    this.activeId(this.partner_id);
    // console.log(this.partner_id)
  }

  public postId(partner_id: any){
    this.partnerService.recentPartnerBYID(partner_id)
        .pipe(first())
        .subscribe((data: Partner[]) =>{
          this.partner= data;
        })
  }

  public activeId(partner_id: any){
    this.partnerService.activePartner(partner_id)
    .pipe(first())
    .subscribe((data:Partner[]) =>{
      this.activePartner= data;
      // console.log(this.activePartner);
    })
  }

  public toggleMe(){ this.showMe =! this.showMe; }

}
