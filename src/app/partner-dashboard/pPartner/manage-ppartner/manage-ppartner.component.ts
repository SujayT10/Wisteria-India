import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/classes/partner';
import { PartnerService } from 'src/app/services/partner.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-manage-ppartner',
  templateUrl: './manage-ppartner.component.html',
  styleUrls: ['./manage-ppartner.component.css']
})
export class ManagePpartnerComponent implements OnInit {
  partner_id: string;
  partner: Partner[];
  totalLength: any;
  page: number = 1;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partner_id = this.partnerService.getToken();
    this.postId(this.partner_id);
  }

  public postId(partner_id: any){
    this.partnerService.postDataToDB(partner_id)
        .pipe(first())
        .subscribe((data: Partner[]) =>{
          this.partner= data;
        })
  }

}
