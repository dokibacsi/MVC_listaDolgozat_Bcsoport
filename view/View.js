class View{
    #list
    #szuloElem
    constructor(list){
        this.#list = list
        this.#szuloElem = $("article")
        this.#adatMegjelenito(this.#list, this.#szuloElem)
    }

    #osszeallitEgyElem(elem){
        console.log(elem)
        let text = `<li id='kartya'>`
        text += `<button class="katt">Katt</button>`
        text += `<span class="marka"><p>${elem.marka}</p></span>`
        text += `<span class="tipus"><p>${elem.tipus}</p></span>`
        text += `<span class="uzemanyag"><p>${elem.uzemanyag}</p></span>`
        text += `<span class="evjarat"><p>${elem.evjarat}</p></span>`
        return text
    }

    #adatMegjelenito(lista, szuloElem){
        let text = `<ul>`
        lista.forEach((element, index) => {
            text += this.#osszeallitEgyElem(element, index, szuloElem)
        });
        text += `</ul>`
        szuloElem.append(text)
    }


}

export default View