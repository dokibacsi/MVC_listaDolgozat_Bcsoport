import Model from "../model/Model.js";
import View from "../view/View.js";

class Controller{
    constructor(){
        const model = new Model();
        const view = new View(model.getList());
    }
}

export default Controller