import { ADATAUTOLISTA } from "./adatok.js";
class Model {
  #lista;
  #index
  constructor() {
    this.#lista = ADATAUTOLISTA;
    this.#index = 0;
  }

  torol(id) {
    if (this.#lista[this.#index] == id) {
      this.#lista[element].splice(this.#lista, id);
    }
  }

  getList() {
    return this.#lista;
  }
}

export default Model;
