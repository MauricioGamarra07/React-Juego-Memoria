let numContador = 120;
let segundos = '02';
let minutos = '00'

let cardMostradas = 0;
let arrayDes = [];
let cardsVolteadas = [];
let arrayIds = [];
let numCardsAcertadas = 0;
let numCardsFaltantes = 10;

const obj = {
    1: "bx bx-coffee",
    2: "bx bx-code",
    3: "bx bxl-discord-alt",
    4: "bx bx-headphone",
    5: "bx bx-git-branch",
    6: "bx bxl-react",
    7: "bx bxl-nodejs",
    8: "bx bxl-git",
    9: "bx bxl-github",
    10: "bx bxl-javascript"
}

export function desordenarArray() {

    let arr1 = Object.values(obj);
    let arr2 = Object.values(obj);
    let array = arr1.concat(arr2);

    arrayDes = array.sort(() => { return Math.random() - 0.5 });

    /* console.log(arrayDes); */
}

function modalVictoria() {
    let modal = document.querySelector(".modal");
    modal.classList.add("modal-show");
}

function modalDerrota() {
    let modalD = document.querySelector(".modal-der");
    modalD.classList.add("modal-show-der");
}

export function comenzarJuego() {

    let txtMinutos = document.querySelector(".min");
    let txtSegundos = document.querySelector(".seg");

    const contador = setInterval(() => {

        let division = parseFloat((numContador / 60).toFixed(2));
        let min = Math.floor(division);
        minutos = agregarCeros(min)
        let seg = Math.round((division - min) * 60);
        segundos = agregarCeros(seg)

        txtMinutos.innerHTML = minutos;
        txtSegundos.innerHTML = segundos;

        numContador -= 1;

        if (numContador == -1) {
            clearInterval(contador)
            modalDerrota()
            /* console.log("Se acabó el tiempo") */
        }

    }, 1000);
}

const agregarCeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

export function mostrarIcono(e) {

    e.target.disabled = true;

    cardMostradas += 1
    let id = e.target.id;

    arrayIds.push(id)
    cardsVolteadas.push(arrayDes[id]);
    /* console.log(cardMostradas) */

    e.target.innerHTML = `<span class="${arrayDes[id]}"></span>`

    if (cardMostradas == 2) {
        analizarCards(cardsVolteadas, arrayIds)
        cardMostradas = 0;
        cardsVolteadas = [];
        arrayIds = [];
    }
}

function analizarCards(cardsVolteadas, arrayIds) {

    let elem1 = document.getElementById(`${arrayIds[0]}`);
    let elem2 = document.getElementById(`${arrayIds[1]}`);

    let numAciertos = document.querySelector(".num-aciertos");
    let numFaltantes = document.querySelector(".num-faltantes");


    if (cardsVolteadas[0] == cardsVolteadas[1]) {
        elem1.style.background = "rgb(210,220,142)";
        elem1.style.background = "linear-gradient(45deg, rgba(210,220,142,1) 0%, rgba(196,233,98,1) 35%, rgba(147,242,43,1) 100%)";
        elem2.style.background = "rgb(210,220,142)";
        elem2.style.background = "linear-gradient(45deg, rgba(210,220,142,1) 0%, rgba(196,233,98,1) 35%, rgba(147,242,43,1) 100%)";
        numCardsAcertadas += 1;
        numCardsFaltantes -= 1;

        numAciertos.innerHTML = numCardsAcertadas;
        numFaltantes.innerHTML = numCardsFaltantes;

        if (numCardsAcertadas == 10) {
            setTimeout(() => {
                modalVictoria()
            }, 1000);
        }

    } else {
        elem1.style.background = "rgb(254,124,97)";
        elem1.style.background = "linear-gradient(45deg, rgba(254,124,97,1) 0%, rgba(249,66,66,1) 35%, rgba(248,24,24,1) 100%)";
        elem2.style.background = "rgb(254,124,97)";
        elem2.style.background = "linear-gradient(45deg, rgba(254,124,97,1) 0%, rgba(249,66,66,1) 35%, rgba(248,24,24,1) 100%)";
        setTimeout(() => {
            elem1.disabled = false;
            elem2.disabled = false;
            elem1.innerHTML = "";
            elem2.innerHTML = "";
            elem1.style.background = "rgb(208, 208, 119)";
            elem1.style.background = "linear-gradient(45deg, rgba(208, 208, 119, 1) 0%, rgba(237, 207, 79, 1) 35%, rgba(246, 209, 8, 1) 100%)";
            elem2.style.background = "rgb(208, 208, 119)";
            elem2.style.background = "linear-gradient(45deg, rgba(208, 208, 119, 1) 0%, rgba(237, 207, 79, 1) 35%, rgba(246, 209, 8, 1) 100%)";
        }, 1000);
    }
}