let cardMostradas = 0;
let arrayDes = [];
let cardsVolteadas = [];
let arrayIds = [];

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

    arrayDes = array.sort(()=>{return Math.random()-0.5});

    /* console.log(arrayDes); */
}


export function mostrarIcono(e) {
    cardMostradas += 1
    let id = e.target.id;

    arrayIds.push(id)
    cardsVolteadas.push(arrayDes[id]);
    /* console.log(cardsVolteadas) */

    e.target.innerHTML = `<span class="${arrayDes[id]}"></span>`

    if(cardMostradas == 2){
        analizarCards(cardsVolteadas, arrayIds)
        cardMostradas = 0;
        cardsVolteadas = [];
        arrayIds = [];
    }
}

function analizarCards(cardsVolteadas, arrayIds){

    let elem1 = document.getElementById(`${arrayIds[0]}`);
    let elem2 = document.getElementById(`${arrayIds[1]}`);

    if (cardsVolteadas[0] == cardsVolteadas[1]){
        elem1.style.backgroundColor = "green";
        elem2.style.backgroundColor = "green";
    }else{
        elem1.style.backgroundColor = "red";
        elem2.style.backgroundColor = "red";
    }
}



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