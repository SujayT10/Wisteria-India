import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Partner } from 'src/app/classes/partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-profile',
  templateUrl: './partner-profile.component.html',
  styleUrls: ['./partner-profile.component.css']
})
export class PartnerProfileComponent implements OnInit {
  partner_id: string;
  activePartner: Partner[];

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partner_id = this.partnerService.getToken();
    this.activeId(this.partner_id);
  }

  public activeId(partner_id: any){
    this.partnerService.activePartner(partner_id)
    .pipe(first())
    .subscribe((data:Partner[]) =>{
      this.activePartner= data;
      console.log(this.activePartner);
    })
  }

}
