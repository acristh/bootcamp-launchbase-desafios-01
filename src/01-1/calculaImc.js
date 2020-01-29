const nome = 'Andre';
const peso = 76;
const altura = 1.67;

const  imc = peso / (altura * altura);

if (imc <= 29.90) {
    console.log(`${nome} você não está acima do peso;`);
} else {
    console.log(`${nome} você está acima do peso;`);
}
