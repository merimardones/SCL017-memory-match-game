import pokemonCards from '../data/pokemonCards/pokemonCards.js';


 const cards = pokemonCards.items; //array de items
 const cardsPair = cards.concat(cards); //cartas duplicadas

 function shuffle (array){
     for(let i= array.length -1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i+1));
         let temporary = array[i];
         array [i] = array [j];
         array [j] = temporary;
     }
 }
 shuffle(cardsPair); // función shuffle para barajar las cartas
 
 /* cards = shuffle (cards); */ 
 
  
 
 const play = () => {

 const containerPlay = document.createElement('div');
 containerPlay.className = 'containerPlay'; // container padre del juego
  
 const containerGrid = document.createElement('div');
 containerGrid.className = 'containerGrid'; 
 containerPlay.appendChild(containerGrid);// container donde va la división para poner las cartas */
 
 const gridBoard = function(cardsPair) {
    
  containerGrid.innerHTML = "";
    for (let i = 0; i < cardsPair.length; i++) {

    let cardShown = document.createElement("div");
    cardShown.className = "cardShown";
    let cardBack = document.createElement('img');
    cardBack.className = "cardBack";
    cardBack.setAttribute("src", "./components/reverso_carta.png");

   /* cardBack.addEventListener("click", function() {

      chosenCard (cardsPair[i], cardBack);
    });*/
    cardShown.appendChild(cardBack);
    containerGrid.appendChild(cardShown);
    }
  }
  gridBoard(cardsPair); //función para que las cartas (su reverso) aparezcan en pantalla dentro de Containerplay (no pude crear otro div porque se escondía todo)

  //hay que crear la función chosenCard para que (línea 42) para que se giren y se muestre la imagen real de la carta. 






 return containerPlay;
}

export default play;