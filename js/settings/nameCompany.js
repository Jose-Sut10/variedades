export const cargarNombreEmpresa = () => {
    const btnHome = document.querySelector('[data-btnHome]');

    if(!btnHome) return;

    const nombreGuardado = localStorage.getItem('nombreEmpresa');

    if(nombreGuardado){
        btnHome.textContent = nombreGuardado;
    }
}