// Declaração de vetores
// let vetor = [];

// // Adiciono por posição
// vetor[0] = "Nome 1";

// // Adiciono na ultima posição
// vetor.push("Nome 2")

// vetor.push(prompt("Insira  um valor"))

// console.log(vetor);

// ------------------------------------------------------------------------------------------------------------------------------------------------

// *Crie um algoritimo que leia um vetor de 5 números inteiros e mostre-os *//

// let numeros =[]

// for (let i = 0; i < 5; i++) {

//     let numero = prompt(`Insira o ${i + 1}° número`);
//     while (isNaN(numero)) {
//         alert("Isso não é um número valido")
//         numero = prompt("Insira um número novamente!")
//     }
//     numero = parseInt(numero)
//     // Inserido o número digitado ao vetor
//     numeros.push(numero)

// }

// console.log(numeros);

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Crie um algoritiomo que leia 4 notas, mostre as notas e a média na tela

let notas = [];
for (let i = 0; i < 4; i++) {
    let nota = prompt(`Informe a ${i + 1}° nota:`);
    nota = nota.replace(',', '.');
    while (isNaN(nota) || nota.trim() === "") {
        alert("Nota Invalida!");
        nota = prompt(`Informe a ${i + 1}° nota novamete:`)
    }
    nota = parseFloat(nota);
    // notas.push(nota);
    notas[i] = nota;
}
let soma = 0;
let media = 0;
let quant = notas.length
for (let j = 0; j <quant; j++) {
    soma += notas[j];
}
media = soma/quant

alert(`A média das notas informadas é: ${media.toFixed(2)}`)