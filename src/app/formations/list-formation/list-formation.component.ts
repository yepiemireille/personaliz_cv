import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/core/http/formation.service';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.scss']
})
export class ListFormationComponent  implements OnInit{

  constructor(private formationService: FormationService, public router: Router, private cdr:ChangeDetectorRef){
    //
  }
  listFormation:any

  ngOnInit(){
    this.getAllListFormation()
  }

  getAllListFormation(){
    console.log("test")
    this.formationService.getFormation().subscribe(
      (el_list_formation)=>{
        console.log("formation", el_list_formation)
        this.cdr.detectChanges()
         this.listFormation = el_list_formation
      }
    )
  }

}
