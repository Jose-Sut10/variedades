const cards = [
    {
        icono: "fa-solid fa-user-gear",
        titulo: "Empresa",
        descripcion: "Configura la información de tu negocio",
        color: "--colorSettings"
    },
    {
        icono: "fa-solid fa-user-gear",
        titulo: "Cotizaciones",
        descripcion: "Crea una nueva cotización",
        color: "--colorCotizaciones"
    },
    {
        icono: "fa-solid fa-user-gear",
        titulo: "Gastos",
        descripcion: "Controla los movimientos de tu empresa",
        color: "--colorGastos" 
    },
    {
        icono: "fa-solid fa-user-gear",
        titulo: "Calendario",
        descripcion: "Gestiona tus tareas y entregas pendientes",
        color: "--colorCalendario"
    },
    {
        icono: "fa-solid fa-user-gear",
        titulo: "Productos",
        descripcion: "Controla el inventario de productos",
        color: "--colorProductos"
    },
    {
        icono: "fa-solid fa-user-gear",
        titulo: "Recibos",
        descripcion: "Crea y visualiza todas las ventas",
        color: "--colorRecibos"
    }
];

export const cargarCards = () => {

    const contenedor = document.querySelector('[data-cardContainer]');

    cards.forEach(card => {
        contenedor.innerHTML += `
            <div class="card" 
            style="border: 1.2px solid var(${card.color});
                   border-top: .4rem solid var(${card.color}); ">
                <div class="iconBox flex">
                    <i class="${card.icono}"></i>
                </div>

                <h2>${card.titulo}</h2>
                <p>${card.descripcion}</p>
            </div>
        `;
    });
}