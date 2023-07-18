let valor = document.getElementById('valor');


function calcular() {

    var total = document.querySelector('#valor').value;
    // alert(total);
    console.log(total);

    let notas_100 = Math.floor(total / 100);
    total = total % 100;

    document.querySelector('#notas_100').innerHTML = `${notas_100}`;

    let notas_50 = Math.floor(total / 50);
    total = total % 50;

    document.querySelector('#notas_50').innerHTML = `${notas_50}`;

    let notas_20 = Math.floor(total / 20);
    total = total % 20;

    document.querySelector('#notas_20').innerHTML = `${notas_20}`;

    let notas_10 = Math.floor(total / 10);
    total = total % 10;

    document.querySelector('#notas_10').innerHTML = `${notas_10}`;

    let notas_5 = Math.floor(total / 5);
    total = total % 5;

    document.querySelector('#notas_5').innerHTML = `${notas_5}`;

    let notas_2 = Math.floor(total / 2);
    total = total % 2;

    document.querySelector('#notas_2').innerHTML = `${notas_2}`;

    // let moeda_1 = Math.floor(valor / 1);
    // valor = valor % 1;

    // let centavos_50 = Math.floor(valor / 0.5);
    // valor = valor % 0.5;

    // let centavos_25 = Math.floor(valor / 0.25);
    // valor = valor % 0.25;

    // let centavos_10 = Math.floor(valor / 0.1);
    // valor = valor % 0.1;

    // let centavos_005 = Math.floor(valor / 0.05);
    // valor = valor % 0.05;

    // let centavos_001 = Math.floor(valor / 0.01);
    // valor = valor % 0.01;

    let resultado = document.getElementById('resultado');



}




// console.log(`NOTAS \n${notas_100} notas de R$ 100,00`);
// console.log(`${notas_50} notas de R$ 50,00`);
// console.log(`${notas_20} notas de R$ 20,00`);
// console.log(`${notas_10} notas de R$ 10,00`);
// console.log(`${notas_5} notas de R$ 5,00`);
// console.log(`${notas_2} notas de R$ 2,00`);
// console.log(`MOEDAS \n${moeda_1 } moedas de R$ 1,00`);
// console.log(`${centavos_50} moedas de R$ 0.50`);
// console.log(`${centavos_25} moedas de R$ 0.25`);
// console.log(`${centavos_10} moedas de R$ 0.10`);
// console.log(`${centavos_005} moedas de R$ 0.05`);
// console.log(`${centavos_001} moedas de R$ 0.01`);