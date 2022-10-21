
function calcular() {

    const height = Number(document.getElementById('inputHeight').value);
    const weight = Number(document.getElementById('inputWeight').value);
    const nome = (document.getElementById('inputName').value);

    const imc = weight / height * height;

    document.getElementById('resultadoIMC').innerHTML = `O IMC de ${nome} é: ${imc.toFixed(2)}`;

    if (imc <= 15.99) {
        document.getElementById('categoria').innerHTML = `Magreza grave`;
        document.getElementById('categoria').className = `Perigo`;
    } else if (imc <= 16.99) {
        document.getElementById('categoria').innerHTML = `Magreza moderada`;
        document.getElementById('categoria').className = `Alerta`;
    } else if (imc <= 18.5) {
        document.getElementById('categoria').innerHTML = `Magreza leve`;
        document.getElementById('categoria').className = `Atenção`;
    } else if (imc <= 24.9) {
        document.getElementById('categoria').innerHTML = `Saudável`;
        document.getElementById('categoria').className = `Parabéns, está tudo certo!`;
    } else if (imc <= 29.9) {
        document.getElementById('categoria').innerHTML = `Sobrepeso`;
        document.getElementById('categoria').className = `Atenção`;
    } else if (imc <= 34.9) {
        document.getElementById('categoria').innerHTML = `Obesidade grau 1`;
        document.getElementById('categoria').className = `Alerta`;
    } else if (imc <= 39.9) {
        document.getElementById('categoria').innerHTML = `Obesidade grau 2`;
        document.getElementById('categoria').className = `Perigo`;
    } else {
        document.getElementById('categoria').innerHTML = `Obesidade grau 3`;
        document.getElementById('categoria').className = `Procure um médico!!!`;
    }
}