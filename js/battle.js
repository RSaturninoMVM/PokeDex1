document.querySelector(".escapar").addEventListener("click", () => {
    window.location.href = "hunt.html";
});

document.querySelector(".perder-demostracion").addEventListener("click", () => {
    window.location.href = "battle-lose.html";
});

document.querySelector(".ganar-demostracion").addEventListener("click", () => {
    window.location.href = "battle-win.html";
});

async function pokemonEnemigo() {
    const id = Math.floor(Math.random() * 151) + 1;
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const nombre = data.name;
    const imagen = data.sprites.front_default;

    document.getElementById("pokemon-enemigo").src = imagen;
    

    const barraVida = document.getElementById("vida-enemigo");
    barraVida.style.width = "100%";
    barraVida.dataset.saludActual = 100;
}

async function pokemonAmigo() {
    const id = Math.floor(Math.random() * 151) + 1;
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const nombre = data.name;
    const imagen = data.sprites.front_default;

    document.getElementById("pokemon-amigo").src = imagen;
    

    const barraVida = document.getElementById("vida-amigo");
    barraVida.style.width = "100%";
    barraVida.dataset.saludActual = 100;
}

pokemonEnemigo();
pokemonAmigo();


document.querySelector(".atacar").addEventListener("click", () => {
    const barraEnemigo = document.getElementById("vida-enemigo");
    let vida = parseInt(barraEnemigo.style.width) || 100;
    
    vida -= 20;
    if (vida <= 0) {
        window.location.href = "battle-win.html";
    } else {
        barraEnemigo.style.width = vida + "%";
    }
});

document.querySelector(".capturar").addEventListener("click", () => {
    const barraEnemigo = document.getElementById("vida-enemigo");
    let vidaActual = parseInt(barraEnemigo.style.width);

    if (vidaActual <= 50) {
        window.location.href = "battle-win.html";
    } else {
        window.location.href = "battle-lose.html";
    }
});

document.querySelector(".cambiar").addEventListener("click", () => {
});