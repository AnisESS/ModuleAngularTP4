export class ActiviteService{

    public objectifs = ["Un element", "deux elements", "trois elements"];
    public tabActivite = [
        { titre : "Sport", description : "Un super sport"},
        { titre : "Tp Angular", description : "Un spuer tp"},
        { titre : "Dormir", description : "Description de dormir"}
    ]

    public sauvegarderElem(index : number, newVal ){
        this.tabActivite[index] = newVal 
    }
    
    public removeElem(index : number){
        this.tabActivite.splice(index, 1) ; 
      }
   

}
