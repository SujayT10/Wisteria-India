import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talent-hunt-register',
  templateUrl: './talent-hunt-register.component.html',
  styleUrls: ['./talent-hunt-register.component.css']
})
export class TalentHuntRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      //group add limit
      var maxGroup = 5;

      //add more fields group
      $(".addMore").click(function(){
          if($('body').find('.fieldGroup').length < maxGroup){
              var fieldHTML = '<div class="form-group fieldGroup">'+$(".fieldGroupCopy").html()+'</div>';
              $('body').find('.fieldGroup:last').after(fieldHTML);
          }else{
              alert('Maximum '+maxGroup+' groups are allowed.');
          }
      });

      //remove fields group
      $("body").on("click",".remove",function(){
          $(this).parents(".fieldGroup").remove();
      });
  });
  }

}
