import { ADATAUTOLISTA } from "./adatok.js";
class Model {
  #lista;
  #index
  constructor() {
    this.#lista = ADATAUTOLISTA;
    this.#index = 0;
  }

  torol(id) {
    this.#lista = this.#lista.filter((item) => item.id !== id);
  }

  getList() {
    return this.#lista;
  }
}

export default Model;
