import Model from "../model/Model.js";
import View from "../view/View.js";

class Controller{
    constructor(){
        this.model = new Model();
        const szuloElem = $("ul")
        const list = this.model.getList()
        this.#esemenyKez()
        this.view = new View(list, szuloElem, this.#esemenyKez()); //A this.#esmenyKez lesz a torlesHandler!!!
    }

    #esemenyKez() {
        $(window).on("torol", (event) => {
            this.model.torol(event.detail);
            this.view.render(this.model.getList());
        });
      }
}

export default Controller