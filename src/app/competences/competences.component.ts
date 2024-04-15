import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddCompetenceComponent } from './add-competence/add-competence.component';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
  providers: [DialogService]
})
export class CompetencesComponent implements OnInit{

  ref: DynamicDialogRef | undefined;
  constructor(public dialogService: DialogService, private location: Location) {}

  users: [] = []
  
  competences:any=[
    {"poste":"Stagiaire DataViz", "entreprise":"Orange CI", "date_debut":"20/02/2023", "date_fin":"19/02/2024", "projets":"réquisition", "technologies":"Angular, GitHub"},
    {"poste":"DataViz", "entreprise":"Orange CI", "date_debut":"21/03/2024", "date_fin":"Encours", "projets":"Netfeeling"},
    {"poste":254555455, "entreprise":"azerty", "date_debut":"", "date_fin":"", "projets":""},
    {"poste":254555455, "entreprise":"azerty", "date_debut":"", "date_fin":"", "projets":""}
  ]
  
    loadingAdd: boolean = false;
    visibleAdd:boolean = false
    visibleEdit:boolean = false
    loadingEdit: boolean = false;
    value: string;
    value2: string;

    
  ngOnInit():any{
    
    this.getAllListCompetence()

  }

    addCompetence() {
        this.loadingAdd = true;

        setTimeout(() => {
            this.loadingAdd = false
            this.visibleAdd = true

        }, 2000);
    }

    EditCompetence(){
      this.loadingEdit = true;

      setTimeout(() => {
          this.loadingEdit = false
          this.visibleEdit = true

      }, 2000);
    }

    // dialogue dynamique
    show() {
      this.ref = this.dialogService.open(AddCompetenceComponent, { 
        header: "Ajout de compétence",
        width: '80vw',
        data: {
          id: '51gF3'
        },

      });
    }

    cancel(){
      this.location.back();
    }


  getAllListCompetence(){
    // 
  }

}
