import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { PartnerService } from '../services/partner.service';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.css']
})
export class PartnerDashboardComponent implements OnInit {

  partner_id : string;

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
    this.partner_id  = this.partnerService.getToken();
  }

}
