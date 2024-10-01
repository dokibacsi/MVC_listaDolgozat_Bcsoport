import { ADATAUTOLISTA } from "./adatok.js"
class Model{
    #lista
    constructor(){
        this.#lista = ADATAUTOLISTA
    }

    torol(id){
        this.#lista.forEach(element => {
            if(this.#lista[element].id == id){
                this.#lista[element].splice();
            }
        });
    }

    getList(){
        return this.#lista
    }
}

export default Model