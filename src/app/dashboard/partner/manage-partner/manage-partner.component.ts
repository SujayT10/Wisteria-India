import { PartnerService } from '../../../services/partner.service';
import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/classes/partner';

@Component({
  selector: 'app-manage-partner',
  templateUrl: './manage-partner.component.html',
  styleUrls: ['./manage-partner.component.css']
})
export class ManagePartnerComponent implements OnInit {

  partner: Partner[];
  totalLength: any;
  page: number = 1;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partnerService.getPartner().subscribe((data: Partner[]) =>{
      this.partner= data;
      console.log(this.partner);
      this.totalLength= data.length;

      // console.log("Partners Data");
    });
  }

  delete(partner: Partner): void{
    console.log(partner.id);
    this.partnerService.deletePartner(partner.id).
    subscribe(data => {
      this.partner = this.partner.filter(u =>u != partner);
    });
  }

}
