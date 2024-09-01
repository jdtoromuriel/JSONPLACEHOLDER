async function mostrarInfo(){
    try {
        const json = await obtenerInfo();
        console.table(json);
    }catch(err){
        console.error(err)
    }
}

async function obtenerInfo(){
    const galeria = document.getElementById("galeria")

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=40")
        const data = await response.json();

        data.forEach(item => {
            const foto = document.createElement("section");
            foto.className = "foto";
            foto.innerHTML = `
                <img src="${item.thumbnailUrl}" alt="${item.title}">
                <h3>${item.title}</h3>
            `;
            galeria.appendChild(foto);
        });

        return data;
    } catch(err){
        console.error("Error al cagar fotos, ", err);
    }
}

mostrarInfo();