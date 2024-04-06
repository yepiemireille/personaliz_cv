import { Component, OnInit } from '@angular/core';
import { FormationService } from './core/http/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'personalized_cv';

  
  constructor(public router: Router){
    // 
  }
  // listFormation:any private formationService: FormationService, 

  ngOnInit(){
    // this.getAllListFormation()
  }

  // getAllListFormation(){
    // console.log("test")
    // this.formationService.getFormation().subscribe(
    //   (el_list_formation)=>{
    //     console.log("formation", el_list_formation)
    //      this.listFormation = el_list_formation
    //   }
    // )
  // }
}
