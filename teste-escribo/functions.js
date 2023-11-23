

function somaDivisiveis(entrada) {
    let soma = 0;
    console.log(`Entrada = ${entrada}`);
    for (let i = 0; i < entrada; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;

            console.log(`i = ${i}`);

        }
    }
    
    return soma;
}



function exibirResultado() {

    let inputNumero = document.getElementById("entradaNumero").value;
    let resultado = somaDivisiveis(inputNumero);

    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
    console.log(`Resultado = ${resultado}`);


    document.getElementById("resultado").innerHTML = `A somatória dos inteiros divisíveis por 3 ou 5 inferiores a  ${inputNumero} é = ${resultado}`;
}