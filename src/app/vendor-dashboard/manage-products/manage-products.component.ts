import { VendorProducts } from './../../classes/vendor-products';
import { VendorService } from 'src/app/services/vendor.service';
import { Vendor } from './../../classes/vendor';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  vendor_id: string;
  vendorProducts: VendorProducts[];
  totalLength: any;
  page: number = 1;

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.vendor_id = this.vendorService.getToken();
    this.postId(this.vendor_id);
  }

  public postId(vendor_id: any){
    this.vendorService.postDataToDB(vendor_id)
        .pipe(first())
        .subscribe((data: VendorProducts[]) =>{
          this.vendorProducts= data;
        })
  }
}
