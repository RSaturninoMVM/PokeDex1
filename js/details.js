const params = new URLSearchParams(window.location.search);
const nombrePokemon = params.get("name");

async function cargarPokemon(nombrePokemon) {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    const datosPokemon = await respuesta.json();

    document.getElementsByClassName("pokemon")[0].innerHTML =
    `
    <img src="${datosPokemon.sprites.front_default}">
    <h2>${datosPokemon.name}</h2>
    `;

    document.getElementsByClassName("perfil")[0].innerHTML =
    `
    <h2>${datosPokemon.name}</h2>
    <p>Altura: ${datosPokemon.height}</p>
    <p>Peso: ${datosPokemon.weight}</p>
    <p>Tipos: ${datosPokemon.types.map(t => t.type.name).join(", ")}</p>
    `;

    document.getElementsByClassName("habilidades")[0].innerHTML =
    `
    <h2>Habilitats</h2>
    ${datosPokemon.abilities.map(h => `<p>${h.ability.name}</p>`).join("")}
    `;

    document.getElementsByClassName("evolucion")[0].innerHTML =
    `
    <h2>Evoluciones</h2>
    ${datosPokemon.evolves.map()}
    `;

    document.getElementsByClassName("movimientos")[0].innerHTML =
    `
    <h2>Moviments</h2>
    ${datosPokemon.moves.slice(0, 10).map}
    `;
}

cargarPokemon(nombrePokemon);