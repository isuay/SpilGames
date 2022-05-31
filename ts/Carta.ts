export class Carta {
    img:string; 
    id:string;
    constructor(color:string, numero:number, palo:string, esVisible:boolean) {      
        this.img = "img/" + numero + palo + ".PNG";
        this.id = numero + palo;
    }
}