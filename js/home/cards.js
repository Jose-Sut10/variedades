const cards = [
    {
        icono: "fa-solid fa-user-gear",
        titulo: "Empresa",
        descripcion: "Configura la información de tu negocio",
        color: "--colorSettings",
        ubi: "settings.html"
    },
    {
        icono: "fa-solid fa-file-invoice",
        titulo: "Cotizaciones",
        descripcion: "Crea una nueva cotización",
        color: "--colorCotizaciones",
        ubi: "cotizaciones.html"
    },
    {
        icono: "fa-solid fa-cash-register",
        titulo: "Gastos",
        descripcion: "Controla los movimientos de tu empresa",
        color: "--colorGastos",
        ubi: "gastos.html"
    },
    {
        icono: "fa-regular fa-calendar-days",
        titulo: "Calendario",
        descripcion: "Gestiona tus tareas y entregas pendientes",
        color: "--colorCalendario",
        ubi: "calendario.html"
    },
    {
        icono: "fa-solid fa-gifts",
        titulo: "Productos",
        descripcion: "Controla el inventario de productos",
        color: "--colorProductos",
        ubi: "productos.html"
    },
    {
        icono: "fa-solid fa-file-invoice",
        titulo: "Recibos",
        descripcion: "Crea y visualiza todas las ventas",
        color: "--colorRecibos",
        ubi: "recibos.html"
    },{
        icono: "fa-solid fa-chart-line",
        titulo: "Reportes",
        descripcion: "Visualiza los movimientos de la empresa",
        color: "--colorReportes",
        ubi: "reportes.html"
    }
];

export const cargarCards = () => {

    const contenedor = document.querySelector('[data-cardContainer]');

    cards.forEach(card => {
        contenedor.innerHTML += `
            <a class="card" href="${card.ubi}"
                style="
                    --cardColor: var(${card.color});
                    border: 1.2px solid var(${card.color});
                    border-top: .4rem solid var(${card.color});
            ">
                <div class="iconBox flex" style="color: var(${card.color})">
                    <i class="${card.icono}"></i>
                </div>
                <h2 style="color: var(${card.color})">${card.titulo}</h2>
                <p>${card.descripcion}</p>
             </a>`;
    });
}