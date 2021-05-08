import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-manage-ppartner',
  templateUrl: './manage-ppartner.component.html',
  styleUrls: ['./manage-ppartner.component.css']
})
export class ManagePpartnerComponent implements OnInit {
  partner_id: string;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partner_id = this.partnerService.getToken();
  }

}
