import EgyElem from "./EgyElem.js"

class View{
    #list
    #szuloElem
    constructor(list, szuloElem){
        this.#list = list
        this.#szuloElem = szuloElem
        /* this.#szuloElem.empty() */
        this.adatMegjelenito(this.#list, this.#szuloElem)
    }

    adatMegjelenito(lista, szuloElem){
        lista.forEach((element, index) => {
            new EgyElem(element, index, szuloElem)
        });
    }
}

export default View