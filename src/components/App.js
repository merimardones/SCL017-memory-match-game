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

const App = () => {
  const el = document.createElement('img');
  el.setAttribute("src", "Design/pikachu.gif");
  el.setAttribute("class", "Pikachu")
  document.body.appendChild(el);
  /*el.className = 'App';
  el.textContent = Image */
  return el;
};

export default App;
