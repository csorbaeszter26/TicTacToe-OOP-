export default class Elem {
  #ertek = " ";
  #szuloElem;
  #divElem;
  #id = 0;
  constructor(id, ertek, szuloelem) {
    
    this.#ertek = ertek;
    this.#szuloElem = szuloelem;
    this.#id = id;
    console.log(this.#szuloElem)
    
    this.#megjelenit()
    // RAKATTINTUNK AZ ELEMRE
    this.#divElem = this.#szuloElem.children("div:last-child");
    this.#divElem.on("click", () => {
        if (this.#ertek === " "){
            this.#esemenyTrigger("lepes")
        }
        //console.log(this.#id);
        //osztalyban a "this" a konkret objektum peldanyt jelenti
        //DE egy esemenykezeloben function nevtelen fuggvennyel hasznalva azt a html elemet jelenti, amelyik az esemenyt kivaltotta (olyan mint az event target),
        // nyilfuggvennyel hasznalva pedig az objektum peldanyra muta

        
    })

  }
  #megjelenit() {
    let txt = `<div><p>${this.#ertek}</p></div>`;
    console.log(this.#szuloElem)
    this.#szuloElem.append(txt);
  }
  //informacio atadas esemeny eseten masik osztalynak
  #esemenyTrigger(esemenyNev){
    //letrehoz egy sajat esemenyt esemenyNev neven, es atad adatokat sajat magarol
    // hogy mit akarunk atadni az tolunk fugg, itt epp ID
    const e = new CustomEvent(esemenyNev, {detail:this.#id})
    //elso kulcs kotelezoen detail, ezutan sajat magarol ad at dolgokat
    window.dispatchEvent(e)
    //ezzel ablakhoz hozzarendeljuk
  }

  
}

//miert jo ha privat?