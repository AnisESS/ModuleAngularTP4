import { ActiviteService } from './../services/activite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {

  monParam : string  ;
  monParam1 :string ; 
  oldParam : string ; 
  indice : number ; 
  modifier : boolean = false ; 

  titre : string ; 
  desc : string ; 

  constructor(private route: ActivatedRoute, public activiteService : ActiviteService, private monRouteur : Router) { 

    //this.monParam = this.route.snapshot.params['msg'] ;
    //this.monParam1 = this.route.snapshot.params['msg1'] ;
    this.indice = this.route.snapshot.params['msg'] ;         //
    this.monParam = activiteService.objectifs[this.indice] ;
    this.titre = activiteService.tabActivite[this.indice].titre ;
    this.desc = activiteService.tabActivite[this.indice].description ;  
  }

  ngOnInit() {
  }


  removeElem(index : number){
    this.activiteService.removeElem(index) ; 
    this.monRouteur.navigate(['']) ;
  }

  retourHome(){
    this.monRouteur.navigate(['']) ;
  }

  modifierElem(index : number){
   this.modifier = true;
  }
  
  sauvegarderElem(index : number){
    this.activiteService.sauvegarderElem(index, {titre : this.titre, description : this.desc} ) ;
    this.modifier = false ;
  }

}
