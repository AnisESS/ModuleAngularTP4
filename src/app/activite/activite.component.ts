import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.scss']
})
export class ActiviteComponent implements OnInit {

  @Input("nomActivite") nomActivite : string ; 
  @Input("numActivite") numActivite : number ;
  @Input("descActivite") descActivite : string ;  


  constructor() { }

  ngOnInit() {
  }

}
