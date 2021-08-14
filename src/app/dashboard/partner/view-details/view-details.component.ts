import { PartnerService } from '../../../services/partner.service';
import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/classes/partner';
import { ApiService } from 'src/app/services/api.service';
import { Profiledata } from 'src/app/classes/profiledata';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  profiledata: Profiledata[];
  totalLength: any;
  page: number = 1;
  admin_id: string;

  constructor(private partnerService: PartnerService, private dataservice: ApiService, ) { }

  ngOnInit(): void {
    this.partnerService.getUpdateData().subscribe((data: Profiledata[]) =>{
      this.profiledata= data;
      // console.log(this.partner);
      this.totalLength= data.length;
      // console.log("Partners Data");
    });
    this.admin_id = this.dataservice.getToken();
  }

  // delete(partner: Partner): void{
  //   console.log(partner.id);
  //   this.partnerService.deletePartner(partner.id).
  //   subscribe(data => {
  //     this.partner = this.partner.filter(u =>u != partner);
  //   });
  // }

}
