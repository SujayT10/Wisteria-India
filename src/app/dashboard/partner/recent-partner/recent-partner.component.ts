import { PartnerService } from './../../../services/partner.service';
import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/classes/partner';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-recent-partner',
  templateUrl: './recent-partner.component.html',
  styleUrls: ['./recent-partner.component.css']
})
export class RecentPartnerComponent implements OnInit {

  partner: Partner[];
  totalLength: any;
  page: number = 1;
  id: string;

  constructor(private partnerService: PartnerService, private router: Router) { }

  ngOnInit(): void {
    this.partnerService.recentPartner().subscribe((data: Partner[]) =>{
      this.partner= data;
      // console.log(this.partner);
      this.totalLength= data.length;
    });
  }

  public addWallet(part: Partner){
    this.id = part.partner_id;
    this.router.navigate([ '/dashboard/partner/topup-member/' + this.id ]);
  }

  public deleteUser(partner: Partner) {
    this.partnerService.deletePartner( partner.partner_id )
     .subscribe(data => {
      console.log("Success");
      //  this.partner = this.partner.filter(u => u !== partner)
     },
     error => {
      this.partner = this.partner.filter(u => u !== partner)
      //  console.log("Error from TopUp");
     })
  }

}
