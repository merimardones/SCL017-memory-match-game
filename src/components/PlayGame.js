import pokemonCards from '../data/pokemonCards/pokemonCards.js';

//Array de cartas Pokémon
const cards = pokemonCards.items; 
 //Array de cartas duplicadas
const cardsPair = cards.concat(cards); 


//Función shuffle para barajar las cartas
function shuffle (array){
  for(let i= array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let temporary = array[i];
    array [i] = array [j];
    array [j] = temporary;
  }
}
shuffle(cardsPair); 


//Constante para guardar cartas clickeadas
let chosenClick = []; 
let matchQuantity = [];


const play = () => {
  
  //Creación de HTML dinámico
  const containerPlay = document.createElement('div');
  containerPlay.className = 'containerPlay';                 // container padre del juego

  let audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'Design/MusicaPokemon.mp3'); // container hijo con música
  audioElement.setAttribute('autoplay', 'autoplay');
  containerPlay.appendChild(audioElement);


  const finalGame = document.createElement ('div');         // Container padre de tercera pantalla
  finalGame.className = "finalGame";
  containerPlay.appendChild(finalGame);
  finalGame.style.display = "none";                         

  const finalMsn = document.createElement ('p');
  finalMsn. className = "finalMsn";                         // Tercera pantalla - texto
  finalMsn.textContent = "¡Felicitaciones! \n  Has ganado ";
  finalGame.appendChild(finalMsn);

  const cup = document.createElement("img");
  cup.className = "cup";                                    // Tercera pantalla imagen copa
  cup.src = "Design/copa1.png";
  finalGame.appendChild(cup);

  const btnReplay = document.createElement("img");
  btnReplay.className = "btnReplay";
  btnReplay.src = "Design/buttonReplay.png";                // botón replay Tercera pantalla
  btnReplay.addEventListener('click', () => {
        
      finalGame.style.display = 'none';
      document.getElementById('root').appendChild(play());
  })
  finalGame.appendChild(btnReplay);

  const streamer = document.createElement("img");
  streamer.className = "streamer";                          // Tercera pantalla - serpetina
  streamer.src = "Design/serpentina.gif";
  finalGame.appendChild(streamer);
  
  //Segunda pantalla - Juego
  const containerGrid = document.createElement('div');
  containerGrid.id= "containerGrid"
  containerGrid.className = 'containerGrid'; 
  containerPlay.appendChild(containerGrid);                   // container donde va el grid de cartas
  
  //Creación de divs para cada reverso de carta (se inserta imagen en los 18 divs)
  const gridBoard = function() {
    
    containerGrid.innerHTML = "";

      for (let i = 0; i < cardsPair.length; i++) {            //Recorre la data

        let cardShown = document.createElement("div");
        cardShown.className = "cardShown";
        let cardBack = document.createElement('img'); 
        cardBack.className = "cardBack";
        cardBack.setAttribute("src","./components/reverso_carta.png"); // Se inserta la imagen del reverso 
        if (cardsPair[i].matched){
          cardBack.setAttribute('src', cardsPair[i].image);
        }
          cardShown.appendChild(cardBack);    
        cardBack.addEventListener("click", function () {      //Función al clickear una carta
          if (chosenClick.length < 2) {                       // Permite clickear solo dos cartas
            cardBack.setAttribute("src", cardsPair[i].image); //Mostrar el pokémon cuando se gira. 
            chosenClick.push(cardsPair[i]);                   //Guarda las cartas clickeadas en línea 22  
            setTimeout (() => {                               // Tiempo para el girar las cartas
              flipCardBack (cardsPair[i], cardBack); 
            }, 500);
          }
        });                
        containerGrid.appendChild(cardShown);                 // Creación del div para cada carta
      }  
  }
  gridBoard(); 
  
  
  function flipCardBack(){
    setTimeout(function() {
      finalMatch (chosenClick);
    }, 1200);
  }          

  function finalMatch (arrayOfChosenClick) {
    if (arrayOfChosenClick.length == 2) {
      if(arrayOfChosenClick[0].id == arrayOfChosenClick[1].id) {
        arrayOfChosenClick [0].matched = true;
        arrayOfChosenClick [1].matched = true;
        matchQuantity++;
        if (matchQuantity === 9){
          containerGrid.style.display = "none";
          finalGame.style.display = "block";
          for (let i = 0; i < 17; i++){
            cardsPair[i].matched = false;
          }
          shuffle(cardsPair);
          matchQuantity = 0;      
        }     
      } else (gridBoard())
        arrayOfChosenClick.length =0;                       
    }
  }      
    return containerPlay;
};


export default play;
export {shuffle};
export {play};