import { PartnerService } from './../../../services/partner.service';
import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/classes/partner';

@Component({
  selector: 'app-recent-partner',
  templateUrl: './recent-partner.component.html',
  styleUrls: ['./recent-partner.component.css']
})
export class RecentPartnerComponent implements OnInit {

  partner: Partner[];
  totalLength: any;
  page: number = 1;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partnerService.recentPartner().subscribe((data: Partner[]) =>{
      this.partner= data;
      // console.log(this.partner);
      this.totalLength= data.length;
    });
  }

}
