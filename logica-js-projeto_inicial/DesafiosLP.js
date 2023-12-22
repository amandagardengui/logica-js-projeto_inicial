console.log('Boas-Vindas')

let nome = 'Amanda';
console.log(`Olá, ${nome}!`)

alert(`Olá, ${nome}!`)

let linguagemPreferida = prompt("Qual a linguagem de programação que você mais gosta?")
console.log(`A sua linguagem de programação preferida é ${linguagemPreferida}`)

let valor1 = 35;
let valor2 = 17;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

let idade = prompt('Insira sua idade:')

if (idade >= 18) {
    console.log(`Você é maior de idade! Tem ${idade} anos!`);
} else {
    console.log(`Ops! Você é menor de idade! Tem ${idade} anos!`);
}

let numero = 1
while (numero <= 10) {
    console.log(numero)
    numero++
}

