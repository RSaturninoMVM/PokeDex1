const main_container = document.getElementById("pokedex");
const title = main_container.querySelector(".titol");
const paragraph = main_container.querySelector(".card p");
const pokeball = main_container.querySelector(".boton")

title.textContent = 'Pokedéx de Kanto';
paragraph.textContent = 'Ditto';
paragraph.style.color = "purple";


pokeball.addEventListener("click", () => {
    alert("Lo has atrapado!!!")}
);