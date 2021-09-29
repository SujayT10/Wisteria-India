import { VendorService } from 'src/app/services/vendor.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { VendorProducts } from 'src/app/classes/vendor-products';

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.css']
})
export class RecentProductsComponent implements OnInit {
  vendor_id : string;
  vendorProducts: VendorProducts[];
  totalLength: any;
  page: number = 1;

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.vendor_id  = this.vendorService.getToken();
    this.postId(this.vendor_id);
  }

  public postId(vendor_id: any){
    this.vendorService.recentVendorBYID(vendor_id)
        .pipe(first())
        .subscribe((data: VendorProducts[]) =>{
          this.vendorProducts= data;
        })
  }


}
