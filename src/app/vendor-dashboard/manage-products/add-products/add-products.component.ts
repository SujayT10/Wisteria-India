import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { first } from 'rxjs/operators';
import { PartnerService } from 'src/app/services/partner.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  angForm: FormGroup;
  vendor_id:string;
  todayDate = new Date();
  active = true;
  public options:any = {
    showProgressBar: false,
    position: ["bottom", "right"],
    timeOut: 2000,
    animate: "fade",
  };

  constructor(private fb: FormBuilder,
              private vendorService: VendorService,
              private router:Router,
              private _service: NotificationsService,
              private ngxService: NgxUiLoaderService) {
    this.angForm = this.fb.group({
      sku: ['', [Validators.required, Validators.minLength(2)]],
      productName: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10),]],
      unitPrice: ['', [Validators.required,]],
      imgUrl: ['', [Validators.required]],
      unitInStocks: ['', [Validators.required, Validators.pattern("^[0-9]$")]],
      });
  }

  ngOnInit() {
    this.vendor_id = this.vendorService.getToken();
  }

  postdata(angForm1: any){
    // console.log(angForm1.control);
    this.vendorService.addProducts(angForm1.value.sku,
                                  angForm1.value.productName,
                                  angForm1.value.description,
                                  angForm1.value.unitPrice,
                                  angForm1.value.imgUrl,
                                  angForm1.value.unitInStocks,
                                  this.vendor_id, this.todayDate,this.active)
      .pipe(first())
      .subscribe(
                  data => {
                  this.angForm.reset();
                  },
                  error => {
                    // this.onSuccess();
                    // this.angForm.reset();
                    console.log("Error from  Add-vendor-products")
                  }
                );

  }

  onSuccess(){ this._service.success('Successfully Registred'); }

  loader(){
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 9000);
  }

  get sku() { return this.angForm.get('sku'); }
  get productName() { return this.angForm.get('productName'); }
  get description() { return this.angForm.get('description'); }
  get unitPrice() { return this.angForm.get('unitPrice'); }
  get imgUrl() { return this.angForm.get('imgUrl'); }
  get unitInStocks() { return this.angForm.get('unitInStocks'); }


}
