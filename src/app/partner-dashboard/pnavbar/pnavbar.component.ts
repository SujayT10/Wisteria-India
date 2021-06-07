import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-pnavbar',
  templateUrl: './pnavbar.component.html',
  styleUrls: ['./pnavbar.component.css']
})
export class PnavbarComponent implements OnInit {
  partner_id: any;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partner_id = this.partnerService.getToken();
  }

}
