const getRandomInteger = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min)) + min
}


alert("Jogo do número secreto.");
let n = prompt("Digite o mínimo");
let s = prompt("Digite o máximo");

const ns = getRandomInteger(n, s);
console.log(ns);
    let chute = prompt("Escolha o número secreto dentre " + n + " até " + s);
    if (chute == ns) {
        alert("Acertou!");
    } 



