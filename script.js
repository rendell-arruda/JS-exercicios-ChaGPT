const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

//É PAR?
// function isEven() {
//   let number = input.value;

//   if (isNaN(number)) {
//     alert('Digite um numero válido');
//   } else {
//     if (number % 2 === 0) {
//       result.innerHTML = `O número ${number} é par`;
//     } else {
//       result.innerHTML = `O número ${number} é impar`;
//     }
//   }
//   input.value = '';
// }
// btn.onclick = isEven;

//mostra nome
// function saudacao() {
//   let nome = input.value;
//   alert(`Seja bem vindo(a) ${nome}`);
// }

// btn.onclick = saudacao;

// // imprimir todos os numero impares até o numero informado
// function progress() {
//   let numero = parseInt(input.value);
//   for (let i = 1; i <= numero; i++) {
//     // Verificamos se o número atual "i" é ímpar usando o operador "%", que retorna o resto da divisão por 2
//     // Se o resto for diferente de zero, significa que o número é ímpar e então exibimos na tela
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }

// btn.onclick = progress;
