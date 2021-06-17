//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import pokemonCards from '../data/pokemonCards/pokemonCards.js';
console.log(pokemonCards);

const App = () => {
  const container = document.createElement('div');
  
  const containerLogo = document.createElement('div');
  containerLogo.className = 'Logo';
  container.appendChild(containerLogo);

  const containerPikachu = document.createElement('div');
  containerPikachu.className = 'Pikachu';
  container.appendChild(containerPikachu);

  const subContainer = document.createElement('section');
  subContainer.className = 'start';
  subContainer.addEventListener('click', ()=> { 
    document.write("Hola")
   });
  container.appendChild(subContainer);

const modalPlay = document.createElement('div');
 const play = document.createElement('div');
 play.className = 'modaljuego';
 /*funcion para abrir un modal desde aqui*/
 modalPlay.appendChild(play)
  return container;
};

export default App;
