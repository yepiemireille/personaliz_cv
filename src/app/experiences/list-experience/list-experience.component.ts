import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-experience',
  templateUrl: './list-experience.component.html',
  styleUrls: ['./list-experience.component.scss']
})
export class ListExperienceComponent implements OnInit{

  constructor(){}
  
  products:any=[
    {"poste":"Stagiaire DataViz", "entreprise":"Orange CI", "date_debut":"20/02/2023", "date_fin":"19/02/2024", "projets":"réquisition"},
    {"poste":"DataViz", "entreprise":"Orange CI", "date_debut":"21/03/2024", "date_fin":"Encours", "projets":"Netfeeling"},
    {"poste":254555455, "entreprise":"azerty", "date_debut":"", "date_fin":"", "projets":""},
    {"poste":254555455, "entreprise":"azerty", "date_debut":"", "date_fin":"", "projets":""},
    {"poste":254555455, "entreprise":"azerty", "date_debut":"", "date_fin":"", "projets":""}
  ]

  ngOnInit():any{
    
    // this.products
    this.getAllListExperience()

  }

  getAllListExperience(){
    // 
  }

}
