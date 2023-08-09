
let arrayId = [];
let names = [];
let count = 0;

let aciertos = 0;
let faltantes = 10;

const numAciertos = document.querySelector(".num-aciertos");
const numFaltantes = document.querySelector(".num-faltantes");

export function girarCard(card) {
    /* console.log(card) */
    let padre = card.parentElement.parentElement;
    /* console.log(padre.style) */
    padre.style.transform = "rotateY(180deg)"

}

export function contarCartasVolteadas(id, name) {
    let cod = parseInt(id);
    count = count + 1;
    /* console.log(count); */
    if (count == 1) {
        arrayId.push(cod);
        names.push(name);
        console.log("Primer nombre: " + names[0]);
    } else if (count == 2) {
        /* bloquearCartas() */
        console.log("Segundo nombre: " + name);
        evaluarCartas(cod, name)
    }

}

export async function evaluarCartas(cod, name) {
    /* console.log(arrayId[0]) */
    if (names[0] == name) {
        console.log("Cartas pares");
        aciertos += 1;
        faltantes -= 1;
        console.log(numAciertos)
        console.log(numFaltantes)
        count = 0;
        arrayId = [];
        names = [];
    } else {
        console.log("Cartas dispares");
        voltearCartas(cod.toString(), arrayId[0].toString());
        count = 0;
        arrayId = [];
        names = [];
    }
}

export function voltearCartas(cod, arrayId) {
    setTimeout(() => {
        const primercont = document.getElementById(arrayId);
        const segundocont = document.getElementById(cod);
        primercont.firstElementChild.style = "";
        console.log(primercont)
        segundocont.firstElementChild.style = "";
        console.log(segundocont)
    }, 600)
}
