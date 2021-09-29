import { VendorService } from './../../services/vendor.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Partner } from 'src/app/classes/partner';
import { PartnerService } from 'src/app/services/partner.service';
import { Vendor } from 'src/app/classes/vendor';

@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
  styleUrls: ['./nav-side-bar.component.css']
})
export class NavSideBarComponent implements OnInit {

  loginbtn: boolean;
  logoutbtn: boolean;
  vendor_id: string;
  activeVendor: Vendor[];

  constructor(private vendorService: VendorService) {
    vendorService.getLoggedInName.subscribe(name => this.changeName(name));
    if (this.vendorService.isLoggedIn()) {
      // console.log("loggedin");
      this.loginbtn = false;
      this.logoutbtn = true
    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false
    }
  }

  ngOnInit(): void {
    this.vendor_id = this.vendorService.getToken();
    this.activeId(this.vendor_id);
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logout() {
    this.vendorService.deleteToken();
    window.location.replace(origin + '#/login');
    // console.log("loggedOff");
  }


  public activeId(vendor_id: any) {
    this.vendorService.activeVendor(vendor_id)
      .pipe(first())
      .subscribe((data: Vendor[]) => {
        this.activeVendor = data;
        // console.log(this.activeVendor);
      })
  }


}
