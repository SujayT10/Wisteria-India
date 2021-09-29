import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Partner } from '../classes/partner';
import { VendorProducts } from '../classes/vendor-products';
import { CommonLinksService } from '../services/common-links.service';
import { VendorService } from '../services/vendor.service';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  vendor_id : string;
  activePartner:Partner[];
  vendorProducts: VendorProducts[];
  totalLength: any;
  page: number = 1;
  link : string;
  showMe:boolean = false;

  constructor(private vendorService: VendorService, private _linksService : CommonLinksService) { }

  ngOnInit(): void {
    this.vendor_id  = this.vendorService.getToken();
    // this.link = this._linksService.referal_link + this.vendor_id;
    this.postId(this.vendor_id);
    // this.activeId(this.vendor_id);
    // console.log(this.vendor_id)
  }

  public postId(vendor_id: any){
    this.vendorService.recentVendorBYID(vendor_id)
        .pipe(first())
        .subscribe((data: VendorProducts[]) =>{
          this.vendorProducts= data;
        })
  }

  // public activeId(vendor_id: any){
  //   this.vendorService.activePartner(vendor_id)
  //   .pipe(first())
  //   .subscribe((data:Partner[]) =>{
  //     this.activePartner= data;
  //     // console.log(this.activePartner);
  //   })
  // }

  // public toggleMe(){ this.showMe =! this.showMe; }

}
