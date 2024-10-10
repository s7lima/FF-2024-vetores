/*
Crie um algoritmo que leia o salário bruto de 5 pessoas, 
e ao final, mostre o salário líquido de todos, 
considerando 12% de INSS a descontar.
*/
// function lerSalarioBruto() {
//     let salBruto = [];
//     for (let i = 0; i < 5; i++) {
//         let salariobruto = prompt(`Informe o ${i + 1}º Salário Bruto`);
//         if (isNaN(salariobruto) || salariobruto.trim() == '') {
//             alert("Salário Bruto Inválido!");
//             salariobruto = prompt(`Informe o ${i + 1}º Salário Bruto novamente:`);
//         }
//         salariobruto = parseFloat(salariobruto);
//         salBruto.push(salariobruto);
//     }
//     return salBruto;
// }
// function calcularLiquido(lista) {
//     let msg = "";
//     for (let i = 0; i < lista.length; i++) {
//         msg += `O ${i}º salario líquido sem o INSS é R$ ${(lista[i] * 0.88).toFixed(2)} \n`;
//     }
//     return msg;
// }
// let salarios = lerSalarioBruto();
// let mensagem = calcularLiquido(salarios);
// alert(mensagem);

/* 5- Crie um algoritio que leia 20 números inteiros e armazename-os num vetor.Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Deve-se no final mostra os três vetores */

function lerImparPar() {
    let impaPar = [];
    for (let i = 0; i < 5; i++){
        let numImparPar = prompt(`Informe o ${i + 1}º número`)
        if (isNaN(numImparPar) || numImparPar.trim() == ''){
            alert("Valor inválido!");
            numImparPar = prompt(`Informe o ${i + 1}º número novamente `);
        }
        numImparPar = parseFloat(numImparPar);

        impaPar.push(numImparPar);
    }
    return impaPar;
}


let listaGeral = lerImparPar();
let pares = listaGeral.filter(num => (num % 2 == 0))
let impares = listaGeral.filter(num => (num % 2 !== 0))

let msg = `A lista de números gerais é ${listaGeral.join(', ')} \n
A lista de números Pares é ${pares.join(', ')} \n
A lista de números Impares é ${impares.join(', ')}`


alert(msg);
