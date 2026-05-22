const gridPokemon = document.getElementById('mainPkmGrid');

let todosLosPokemon = [];

async function cargarPokemon() {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const datos = await respuesta.json();

    for (const pokemon of datos.results) {
        const respuestaPokemon = await fetch(pokemon.url);
        const datosPokemon = await respuestaPokemon.json();

        const nombre = datosPokemon.name;
        const imagen = datosPokemon.sprites.front_default;

        todosLosPokemon.push({ name: nombre, image: imagen });

        meterPokemonGrid(nombre, imagen);
    }
}
function meterPokemonGrid(nombre, imagen) {
    const carta = document.createElement('a');

    carta.href = `details.html?name=${nombre}`;
    carta.style.textDecoration = "none";
    carta.style.color = "inherit";

    carta.classList.add('pokemon-card');

    carta.innerHTML = 
    `<img src="${imagen}" alt="${nombre}"> <h3>${nombre}</h3>`;

    gridPokemon.appendChild(carta);
}

const desplegableFiltro = document.querySelector('.filter-dropdown');
desplegableFiltro.innerHTML = `
<select id="miDesplegable" style="padding: 5px; font-size: 24px; border: none; background: transparent; outline: none;">
    <option value="">Filtres: Tipus i generacions</option>
</select>`;

async function cargarTipos() {
    const respuesta = await fetch('https://pokeapi.co/api/v2/type');
    const datos = await respuesta.json();
    const select = document.getElementById('miDesplegable');

    datos.results.slice(0, 19).forEach(tipo => {
        select.innerHTML += `<option value="${tipo.name}">${tipo.name}</option>`;
    });
}

const buscarPokemon = document.getElementById('pkmSearchInput')
buscarPokemon.addEventListener('input', () => {
    gridPokemon.innerHTML = "";
    
    const texto = buscarPokemon.value.toLowerCase();
    const pokemonFiltrados = todosLosPokemon.filter(pkm => {
        return pkm.name.toLowerCase().includes(texto);
    });
    pokemonFiltrados.forEach(pkm => {
        meterPokemonGrid(pkm.name, pkm.image);
    });
});

cargarPokemon();
cargarTipos();