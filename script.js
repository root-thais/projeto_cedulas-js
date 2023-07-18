let valor = document.getElementById('valor');


function calcular() {

    var total = document.querySelector('#valor').value;
    // alert(total);
    console.log(total);

    // CEDULAS

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

    // MOEDAS

    let moeda_1 = Math.floor(total / 1);
    valor = valor % 1;

    document.querySelector('#moeda_1').innerHTML = `${moeda_1}`;

    let centavos_50 = Math.floor(total / 0.5);
    valor = valor % 0.5;

    document.querySelector('#moeda_50').innerHTML = `${centavos_50}`;

    let centavos_25 = Math.floor(total / 0.25);
    valor = valor % 0.25;

    document.querySelector('#moeda_25').innerHTML = `${centavos_25}`;

    let centavos_10 = Math.floor(total/ 0.1);
    valor = valor % 0.1;

    document.querySelector('#moeda_10').innerHTML = `${centavos_10}`;

    let centavos_005 = Math.floor(total / 0.05);
    valor = valor % 0.05;

    document.querySelector('#moeda_5').innerHTML = `${centavos_005}`;

    



}




