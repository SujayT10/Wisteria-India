import { Vendor } from './../../classes/vendor';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {
  vendor_id: string;
  activeVendor: Vendor[];

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.vendor_id = this.vendorService.getToken();
    this.activeId(this.vendor_id);
  }

  public activeId(vendor_id: any){
    this.vendorService.activeVendor(vendor_id)
    .pipe(first())
    .subscribe((data:Vendor[]) =>{
      this.activeVendor= data;
      // console.log(this.activeVendor);
    })
  }


}
