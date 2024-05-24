import Elem from "./Elem.js";

export default class JatekTer{
    #korszamlalo = 0;
    #lista = [" ", "X", " ", " ", " ", " ", "O", " ", " "]
    
    constructor(){
        this.#megjelenit()

        //feliratkozik a lepes nevu esemenyre:
        $(window).on("lepes", (event)=>{
            console.log(event.detail)
            let id=event.detail;
            this.#lep(id);
        })
    }
    #lep(id){
        if (this.#korszamlalo%2===0){
            this.#lista[id]="X"
        }else{
            this.#lista[id]="O"
        }
        this.#korszamlalo++;
        this.#megjelenit()
    }

    #megjelenit(){
        const szuloElem=$(".jatekter")
        console.log(szuloElem)
        szuloElem.empty()
        this.#lista.forEach((ertek, index) => {
            const elem = new Elem(index, ertek, szuloElem);
        });
    }

}