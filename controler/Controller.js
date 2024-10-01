import Model from "../model/Model.js";
import View from "../view/View.js";

class Controller{
    constructor(){
        const model = new Model();
        const szuloElem = $("ul")
        const list = model.getList()
        const view = new View(list, szuloElem);
        this.#esemenyKez(model)
    }

    #esemenyKez(model, szuloElem){
        $(window).on("torol", (event)=> {
            console.log(event.detail)
            model.torol(event.detail)
            new View(model.getList(), szuloElem)
        })
    }
}

export default Controller