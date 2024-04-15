import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddExperienceComponent } from '../add-experience/add-experience.component';

@Component({
  selector: 'app-list-experience',
  templateUrl: './list-experience.component.html',
  styleUrls: ['./list-experience.component.scss'],
  providers: [DialogService]
})
export class ListExperienceComponent implements OnInit{

  ref: DynamicDialogRef | undefined;
  constructor(public dialogService: DialogService, private location: Location) {}

  users: [] = []
  
  experiences:any=[
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
    
    this.getAllListExperience()

  }

    addExperience() {
        this.loadingAdd = true;

        setTimeout(() => {
            this.loadingAdd = false
            this.visibleAdd = true

        }, 2000);
    }

    EditExperience(){
      this.loadingEdit = true;

      setTimeout(() => {
          this.loadingEdit = false
          this.visibleEdit = true

      }, 2000);
    }

    // dialogue dynamique
    show() {
      this.ref = this.dialogService.open(AddExperienceComponent, { 
        header: "Ajout d'expérience",
        width: '80vw',
        data: {
          id: '51gF3'
        },

      });
    }

    cancel(){
      this.location.back();
    }


  getAllListExperience(){
    // 
  }

}
