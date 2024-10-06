class EgyElem{
    #elem
    #index
    #szuloElem
    #torlesCallback
    constructor(elem, index, szuloElem, torlesCallback){
        this.#elem = elem;
        this.#index = index;
        this.#szuloElem = szuloElem
        this.#torlesCallback = torlesCallback;
        this.osszeallitEgyElem(this.#elem, this.#index, this.#szuloElem)
        this.gombElem = $(`.katt${this.#index}`)
        this.esemenyKezelo()
    }
    
    osszeallitEgyElem(elem, index, szuloElem){
        let text = `<li id='kartya'>`
        text += `<button class="katt${index}">Törlés</button>`
        text += `<span class="marka"><p>${elem.marka}</p></span>`
        text += `<span class="tipus"><p>${elem.tipus}</p></span>`
        text += `<span class="uzemanyag"><p>${elem.uzemanyag}</p></span>`
        text += `<span class="evjarat"><p>${elem.evjarat}</p></span>`
        szuloElem.append(text)
    }

    esemenyKezelo() {
        this.gombElem.on("click", () => {
            const e = new CustomEvent("torol", {detail:this.#elem.id})
            window.dispatchEvent(e)
            this.#torlesCallback(this.#elem.id);
        });
      }
}

export default EgyElem