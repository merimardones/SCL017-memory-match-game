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

  const subContainer = document.createElement('section');
  subContainer.className = 'start';
  /*subContainer.setAttribute("src", "Design/start.png")*/
  /*start.src= 'Desing/start.png';*/
  /*subContainer.addEventListener('click',play);*/
  container.appendChild(subContainer);
  return container;

 /* const el = document.createElement('img');
  el.setAttribute("src", "../Design/pikachu.gif");
  el.setAttribute("class", "Pikachu")
  document.body.appendChild(el);
  return el;*/
};

export default App;
