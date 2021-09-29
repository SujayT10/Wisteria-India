import { Vendor } from './../../classes/vendor';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  vendor_id: string;
  partner: Vendor[];
  totalLength: any;
  page: number = 1;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.vendor_id = this.partnerService.getToken();
    // this.postId(this.vendor_id);
  }

  // public postId(vendor_id: any){
  //   this.partnerService.postDataToDB(vendor_id)
  //       .pipe(first())
  //       .subscribe((data: Vendor[]) =>{
  //         this.partner= data;
  //       })
  // }
}
