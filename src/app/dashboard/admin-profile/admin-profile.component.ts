import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/classes/users';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  activeUser: Users[];
  admin_id:string;

  constructor(private dataService: ApiService) { }

  ngOnInit(): void {
    this.admin_id = this.dataService.getToken();
    this.activeId(this.admin_id);
  }

  public activeId(activeId: string){
    this.dataService.activeUser(activeId)
    .pipe(first())
    .subscribe((data:Users[]) =>{
      this.activeUser= data;
      // console.log(this.activeUser);
    })
  }

}
