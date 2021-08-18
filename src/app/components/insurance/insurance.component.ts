import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  insurance: {
    buyTeamPlan : string,
    buyHealthPlan: string,
    buyCarInsurance: string,
    buyTwoWheeler: string,
  };

  constructor(private dataService: ApiService) { }

  ngOnInit(): void {
    this.insurance = this.dataService.getStaticData().insurance;
  }

}
