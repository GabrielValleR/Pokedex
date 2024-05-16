
/* //fito com função anonima
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function(jsonBody){
    console.log(jsonBody);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
    console.log("Requisição concluida!");
  }); */

//outra forma de se fazer só que mais simplificada é utilizando iron function:

/* //desse jeito que fica com iron function: 
fetch(url)
  .then( (response) => response.json())
  .then( (jsonBody) => jsonBody.results)
  .then( (pokemonLinst) => console.log(pokemonLinst))
  .catch( (error) => console.error(error))
  .finally(() => console.log("Requisição concluida!")) */

//AGORA  continuaremos o codigo....



function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              <li class="type">Grass</li>
              <li class="type">Poison</li>
            </ol>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="${pokemon.name}"
            />
          </div>
        </li>
    `;
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {

   pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

  
   })