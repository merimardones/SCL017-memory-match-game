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
  shuffle(cardsPair); // función shuffle para barajar las cartas

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
      for (let i = 0; i < cardsPair.length; i++) { //recorre la data

        let cardShown = document.createElement("div");
        cardShown.className = "cardShown";
        let cardBack = document.createElement('img');
        cardBack.className = "cardBack";
        cardBack.setAttribute("src", "./components/reverso_carta.png"); // se crea un div para cada carta
        cardShown.appendChild(cardBack);
        
        
        cardBack.addEventListener("click", () => {
          cardBack.setAttribute("src", cardsPair[i].image);
          let id = cardBack.id= (cardsPair[i].id);
          cardBack.className = "frontCard";
          console.log(id);
         })
         
           /*if(frontCard.length>2)*/
    
        /*let shuffleCards = shuffle(cardsPair);
        let matchedCards= []; 
        let frontCard = []; 
    
        const flipCard = (target) => {
          if (frontCard.length>2 && !frontCard.includes(target) && !matchedCards.includes(target)){
            frontCard.push(target); 
            target.classList.toggle('flipped');
            if(frontCard.length === 2) {
          setTimeout(matchedCard, 600);*/

        containerGrid.appendChild(cardShown);
      }   

  }
  gridBoard(cardsPair); 

  return containerPlay;
};

export default play
