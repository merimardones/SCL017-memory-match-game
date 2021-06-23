import pokemonCards from '../data/pokemonCards/pokemonCards.js';

//Array de cartas Pokémon
 const cards = pokemonCards.items; 
 //Array de cartas duplicadas
 const cardsPair = cards.concat(cards); 


// función shuffle para barajar las cartas
 function shuffle (array){
     for(let i= array.length -1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i+1));
         let temporary = array[i];
         array [i] = array [j];
         array [j] = temporary;
     }
 }
 shuffle(cardsPair); 
 
 /*cards = shuffle (cardsPair); */ 
 
   
 const play = () => {
//-----Creación de HTML dinámico
 const containerPlay = document.createElement('div');
 containerPlay.className = 'containerPlay'; // container padre del juego
  
 const containerGrid = document.createElement('div');
 containerGrid.className = 'containerGrid'; 
 containerPlay.appendChild(containerGrid);// container donde va el grid de cartas
 
 //----Creación de divs para cada reverso de carta (se inserta imagen en los 18 divs)
 const gridBoard = function(cardsPair) {
    
  containerGrid.innerHTML = "";
    for (let i = 0; i < cardsPair.length; i++) {

    let cardShown = document.createElement("div");
    cardShown.className = "cardShown";
    let cardBack = document.createElement('img');
    cardBack.className = "cardBack";
    cardBack.setAttribute("src", "./components/reverso_carta.png"); // se crea un div para cada carta
    cardShown.appendChild(cardBack);
    containerGrid.appendChild(cardShown);   
    }
  } 
  gridBoard(cardsPair); 

  /*let shuffleCards = shuffle( cardsPair)
  let pickedCards :[];
  let matchedCards: []; */

  const flipCard = document.getElementsByClassName('cardShown').addEventListener ('click', flipCard);




  
    

  
  
  


 






 return containerPlay;
}

export default play;