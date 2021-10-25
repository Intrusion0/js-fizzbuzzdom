/* Scrivi un programma che esegua un ciclo da 1 a 100
e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
per i multipli di 3,
per i multipli di 5
e per i valori che sono sia multipli di 3 che di 5.
*/

const contSquare = document.querySelector(".containerSquare");

for (let i = 1; i <= 100; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.append(i);
    contSquare.append(div);

    if (i % 1 === 0 && i % i === 0 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        div.classList.add("num_primo");
        div.innerHTML = `Numero primo: ${i}`;
    }

    console.log(div, i);
}