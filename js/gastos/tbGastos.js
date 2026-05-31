let contador = 1;
const btnPlus = document.querySelector('[data-btnPlus]');
const tablaBody = document.querySelector('.tablaGastos tbody');

const agregarGasto = () => {
    const inputDesc = document.getElementById('descripcion');
    const inputMonto = document.getElementById('monto');
    const inputFecha = document.getElementById('fecha');

    if (!inputDesc.value.trim() || !inputMonto.value || !inputFecha.value) {
        alert("Por favor, llena todos los campos");
        return;
    }

    const nuevaFila = document.createElement('tr');
    const fechaFormateada = inputFecha.value.split('-').reverse().join('/');

    nuevaFila.innerHTML = `
        <td style="text-align: center;">${contador}</td>
        <td>${inputDesc.value}</td>
        <td style="text-align: right;">Q${parseFloat(inputMonto.value).toFixed(2)}</td>
        <td style="text-align: center;">${fechaFormateada}</td>
    `;

    tablaBody.appendChild(nuevaFila);

    contador++;
    inputDesc.value = "";
    inputMonto.value = "";
    inputFecha.value = "";
    inputDesc.focus(); 
};
btnPlus.addEventListener('click', agregarGasto);
export { agregarGasto };