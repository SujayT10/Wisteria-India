import { Component, OnInit } from '@angular/core';
import { TelentHunt } from 'src/app/classes/telent-hunt';
import { ApiService } from 'src/app/services/api.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-manage-member',
  templateUrl: './manage-member.component.html',
  styleUrls: ['./manage-member.component.css']
})
export class ManageMemberComponent implements OnInit {

  telentHunt: TelentHunt[];
  totalLength: any;
  page: number = 1;
  admin_id:string;

  constructor(private customerService: CustomerService, private dataService: ApiService) { }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe((data: TelentHunt[]) =>{
    this.telentHunt = data;
    // console.log(this.telentHunt);
    this.totalLength= data.length;
  });
  this.admin_id = this.dataService.getToken();

  }
}
