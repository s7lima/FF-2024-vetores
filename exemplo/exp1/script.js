// Declaração de vetores
// let vetor = [];

// // Adiciono por posição
// vetor[0] = "Nome 1";

// // Adiciono na ultima posição
// vetor.push("Nome 2")

// vetor.push(prompt("Insira  um valor"))

// console.log(vetor);

// *Crie um algoritimo que leia um vetor de 5 números inteiros e mostre-os *//

let numeros =[]

for (let i = 0; i < 5; i++) {

    let numero = prompt(`Insira o ${i + 1}° número`);
    while (isNaN(numero)) {
        alert("Isso não é um número valido")
        numero = prompt("Insira um número novamente!")
    }
    numero = parseInt(numero)
    // Inserido o número digitado ao vetor
    numeros.push(numero)

}

console.log(numeros);