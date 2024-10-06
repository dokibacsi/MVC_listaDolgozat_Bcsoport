import EgyElem from "./EgyElem.js"

class View{
    #list
    #szuloElem
    #torlesHandler
    constructor(list, szuloElem, torlesHandler){
        this.#list = list
        this.#szuloElem = szuloElem
        this.#torlesHandler = torlesHandler
        this.adatMegjelenito(this.#list, this.#szuloElem)
    }

    adatMegjelenito(lista, szuloElem){
        szuloElem.empty();
        lista.forEach((element, index) => {
            new EgyElem(element, index, szuloElem, this.#torlesHandler)
        });
    }

    render(list) {
        this.#list = list; // Új lista beállítása
        this.adatMegjelenito(this.#list, this.#szuloElem);
    }
}

export default View