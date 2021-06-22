import { Partner } from 'src/app/classes/partner';
import { PartnerService } from 'src/app/services/partner.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-recent-emp',
  templateUrl: './recent-emp.component.html',
  styleUrls: ['./recent-emp.component.css']
})
export class RecentEmpComponent implements OnInit {
  partner_id : string;
  partner: Partner[];
  totalLength: any;
  page: number = 1;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partner_id  = this.partnerService.getToken();
    this.postId(this.partner_id);
  }

  public postId(partner_id: any){
    this.partnerService.recentPartnerBYID(partner_id)
        .pipe(first())
        .subscribe((data: Partner[]) =>{
          this.partner= data;
        })
  }


}
