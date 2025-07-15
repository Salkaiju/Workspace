const readlineSync = require('readline-sync');

function olaMundo() {
    console.log("Olá, mundo!");
}
olaMundo();

let nome = readlineSync.question("Digite o nome: ");
function nomeParametro(nome) {
    console.log(nome);
}
nomeParametro();