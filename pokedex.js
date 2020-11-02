let pokemonId = 1
let apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

function getData(id) {
    apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    fetch(apiUrl)
    .then( (data) => data.json())
    .then( pokemon => generateHtml(pokemon))
}
getData();

function pokeSlideRight() {
  pokemonId ++;
  getData(pokemonId);
}

pokeSlideRight();

function pokeSlideLeft() {
  pokemonId --;
  getData(pokemonId);
}

pokeSlideLeft();

const generateHtml = (data) => {
    console.log(data)
    const html = `
            <div id="left"></div>
            <div class="name"><p>${data.name}<br>Id: ${data.id}</p></div>
            <img src=${data.sprites.front_default} height="250">
            <div class="details">
            <span>Taille: ${data.height} // Poids: ${data.weight}</span>
            <span>Type: ${data.types[0].type.name}</span>
            <span>Vies: ${data.stats[0].base_stat}</span>
            <span>Attaque: ${data.stats[1].base_stat}</span>
            <span>Défense: ${data.stats[2].base_stat}</span>
            <span>Attaque spéciale: ${data.stats[3].base_stat}</span>
            <span>Défense spéciale: ${data.stats[4].base_stat}</span>
            </div>
            <div id="right"></div>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}