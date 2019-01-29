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

  constructor(private route: ActivatedRoute, public activiteService : ActiviteService, private monRouteur : Router) { 

    //this.monParam = this.route.snapshot.params['msg'] ;
    //this.monParam1 = this.route.snapshot.params['msg1'] ;
    this.indice = this.route.snapshot.params['msg'] ;         // e zouz hedhoma    ok yezzi ok
    this.monParam = activiteService.objectifs[this.indice] ; 
  
  }

  ngOnInit() {
  }

  removeElem(index : number){
    this.activiteService.objectifs.splice(index, 1) ; 
    this.monRouteur.navigate(['']) ;
  }

  retourHome(){
    this.monRouteur.navigate(['']) ;
  }

  modifierElem(index : number){
    this.modifier = true ;
    this.oldParam = this.monParam ;    
  }
  
  sauvegarderElem(index : number){
    this.activiteService.objectifs[index] = this.monParam ; 
    this.modifier = false ; 
  }

}
