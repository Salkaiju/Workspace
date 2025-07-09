function desafios(){
    alert("Boas vindas ao nosso site!");
    let nome;
    let idade;
    let numeroDeVendas;
    let saldoDisponivel;
    let mensagemDeErro = "Erro! Preencha todos os campos."
    let nome2;
    let idade2;
    do{
        nome = prompt("Digite o nome 'Lua'");
        if (nome != "Lua") {
            alert("Errado, o nome correto é 'Lua'");
        }
    } while (nome != "Lua");
    
    do{
        idade = prompt("Digite a idade '25'");
        if (idade != 25) {
            alert("Errado, a idade correta é '25'");
        }
    } while (idade != 25);

    do{
        numeroDeVendas = prompt("Digite o número de venda '50'");
        if (numeroDeVendas != 50) {
            alert("Errado, o número de venda correto é '50'");
        }
    } while (numeroDeVendas != 50);

    do{
        saldoDisponivel = prompt("Digite o saldo disponível '1000'");
        if (saldoDisponivel != 1000) {
            alert("Errado, o saldo disponível correto é '1000'");
        }
    } while (saldoDisponivel != 1000);

    do{
        nome2 = prompt("Digite seu nome");
        idade2 = prompt("Digite sua idade");
        if (idade2 == "" && idade2 == ""){
            alert(mensagemDeErro);
        } else if (idade2 >= 18) {
            alert("Idade maior que 18 anos");
        } else {
            alert("Vai tomar no cu, sua idade é menor de 18");
        }
        } while (nome2 == "" && idade2 == "");
}
