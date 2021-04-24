import { PartnerService } from './../../../partner.service';
import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/partner';

@Component({
  selector: 'app-manage-partner',
  templateUrl: './manage-partner.component.html',
  styleUrls: ['./manage-partner.component.css']
})
export class ManagePartnerComponent implements OnInit {

  partner: Partner[]

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partnerService.getPartner().subscribe((data: Partner[]) =>{
      this.partner= data;
      console.log(this.partner);
      // console.log("Partners Data");
    });
  }

}
