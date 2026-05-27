const input = document.getElementById('logoInput');
const fileName = document.getElementById('fileName');
const preview = document.getElementById('logoPreview');
const placeholder = document.getElementById('logoPlaceholder');

export const changeImage = ()=> {
    const mostrarPreview = ()=> {
        const file = input.files[0];

        if (!file) {
            resetPreview();
            return;
        }

        actualizarNombre(file.name);
        const imgExistente = preview.querySelector('img');
        if (imgExistente && imgExistente.src.startsWith('blob:')) {
            URL.revokeObjectURL(imgExistente.src);
        }
        const imageURL = URL.createObjectURL(file);
        renderizarImagen(imageURL);
    }

    const actualizarNombre = (nombre)=> {
        fileName.textContent =
            nombre.length > 22
                ? nombre.slice(0, 20) + '...'
                : nombre;
    }

    const renderizarImagen = (url)=> {
        placeholder.style.display = 'none';
        let img = preview.querySelector('img');

        if (!img) {
            img = document.createElement('img');
            preview.appendChild(img);
        }
        img.src = url;
        img.alt = 'Logo de la empresa';
    }

    const resetPreview = ()=> {
        fileName.textContent = 'Ningún archivo seleccionado';
        const img = preview.querySelector('img');
        if (img) img.remove();
        placeholder.style.display = 'flex';
    }

    input.addEventListener('change', mostrarPreview);
}