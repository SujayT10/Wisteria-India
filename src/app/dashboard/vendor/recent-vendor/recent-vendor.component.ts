
import { VendorService } from './../../../services/vendor.service';
import { PartnerService } from './../../../services/partner.service';
import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/classes/partner';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Vendor } from 'src/app/classes/vendor';

@Component({
  selector: 'app-recent-vendor',
  templateUrl: './recent-vendor.component.html',
  styleUrls: ['./recent-vendor.component.css']
})
export class RecentVendorComponent implements OnInit {

  vendor: Vendor[];
  totalLength: any;
  page: number = 1;
  id: string;

  constructor(private vendorService: VendorService, private router: Router) { }

  ngOnInit(): void {
    this.vendorService.recentVendor().subscribe((data: Vendor[]) =>{
      this.vendor= data;
      // console.log(this.partner);
      this.totalLength= data.length;
    });
  }

  // public addWallet(part: Partner){
  //   this.id = part.partner_id;
  //   this.router.navigate([ '/dashboard/partner/topup-member/' + this.id ]);
  // }

  public deleteUser(vendor: Vendor) {
    this.vendorService.deleteVendor( vendor.vendor_id )
     .subscribe(data => {
      console.log("Success");
       this.vendor = this.vendor.filter(u => u !== vendor)
     },
     error => {
      // this.partner = this.partner.filter(u => u !== partner)
       console.log("Error from TopUp");
     })
  }

}
