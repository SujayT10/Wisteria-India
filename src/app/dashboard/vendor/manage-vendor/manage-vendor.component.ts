import { VendorService } from './../../../services/vendor.service';
import { PartnerService } from '../../../services/partner.service';
import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/classes/partner';
import { ApiService } from 'src/app/services/api.service';
import { Vendor } from 'src/app/classes/vendor';


@Component({
  selector: 'app-manage-vendor',
  templateUrl: './manage-vendor.component.html',
  styleUrls: ['./manage-vendor.component.css']
})
export class ManageVendorComponent implements OnInit {

  vendor: Vendor[];
  totalLength: any;
  page: number = 1;
  admin_id: string;

  constructor(private vendorService: VendorService, private dataservice: ApiService) { }

  ngOnInit(): void {
    this.vendorService.getVendor().subscribe((data: Vendor[]) => {
      this.vendor= data;
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
