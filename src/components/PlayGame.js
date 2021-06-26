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
  
  const chosenClick = [];


const play = () => {
    
  //-----Creación de HTML dinámico
  const containerPlay = document.createElement('div');
  containerPlay.className = 'containerPlay'; // container padre del juego
    
  const containerGrid = document.createElement('div');
  containerGrid.className = 'containerGrid'; 
  containerPlay.appendChild(containerGrid);// container donde va el grid de cartas
  
  //----Creación de divs para cada reverso de carta (se inserta imagen en los 18 divs)
  const gridBoard = function() {

      
    containerGrid.innerHTML = "";
      for (let i = 0; i < cardsPair.length; i++) { //recorre la data

        let cardShown = document.createElement("div");
        cardShown.className = "cardShown";
        let cardBack = document.createElement('img');
        cardBack.className = "cardBack";
        cardBack.setAttribute("src", "./components/reverso_carta.png"); // se crea un div para cada carta
        cardShown.appendChild(cardBack);
        
        
        cardBack.addEventListener("click", function () {
          if (chosenClick.length < 2) {         
          cardBack.setAttribute("src", cardsPair[i].image); //dar vuelta carta boca arriba (con el pokémon visible).
          /*let id = (cardsPair[i].id); */
          cardBack.className = "frontCard";
          chosenClick.push(cardsPair[i]);
          /*console.log(id); */
         
          setTimeout (() => {
           flipCardBack (cardsPair[i], cardBack); 
          }, 1000);
        }

        });
          

          /*if(cardsPair[i]).matched) {
          cardBack.setAttribute("src", cardsPair[i].image);
        } */
        
        containerGrid.appendChild(cardShown);
      }  
    }
    gridBoard(); 

    function flipCardBack(cardData, imageCard){
      imageCard.setAttribute("src", cardData.image); 
     /* if (cardData.matched) {
        return false;
      } 
      */
     // chosenClick.push(cardData);
      
      setTimeout(function() {
        finalMatch (chosenClick);
      }, 1000);
    }


      function finalMatch (arrayOfChosenClick) {
        if (arrayOfChosenClick.length == 2) {
          if(arrayOfChosenClick[0].id == arrayOfChosenClick[1].id) {
            arrayOfChosenClick [0].matched = true;
            arrayOfChosenClick [1].matched = true;
            alert("finalmatch");

          }
          else (gridBoard())
          arrayOfChosenClick.length =0;
          
          //cardBack.setAttribute("src", arrayOfChosenClick[0].image); 
          
        }
      }
           
   return containerPlay;
};

export default play

/*function voltearCartas(){
  if (arrayOfChosenClick.length <2 ){
    imageCard.setAttribute("src", cardData.image);
  }
    if (arrayOfChosenClick.length ==0){ 
      arrayOfChosenClick[0].id
    }
  
}*/

/* import pokemonCards from '../data/pokemonCards/pokemonCards.js';

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
  
  const chosenClick = [];

const play = () => {
    
  //-----Creación de HTML dinámico
  const containerPlay = document.createElement('div');
  containerPlay.className = 'containerPlay'; // container padre del juego
    
  const containerGrid = document.createElement('div');
  containerGrid.className = 'containerGrid'; 
  containerPlay.appendChild(containerGrid);// container donde va el grid de cartas
  
  //----Creación de divs para cada reverso de carta (se inserta imagen en los 18 divs)
  const gridBoard = function() {
      
    containerGrid.innerHTML = "";
      for (let i = 0; i < cardsPair.length; i++) { //recorre la data

        let cardShown = document.createElement("div");
        cardShown.className = "cardShown";
        let cardBack = document.createElement('img');
        cardBack.className = "cardBack";
        cardBack.setAttribute("src", "./components/reverso_carta.png"); // se crea un div para cada carta
        cardShown.appendChild(cardBack);
        
        
        cardBack.addEventListener("click", function () {
          cardBack.setAttribute("src", cardsPair[i].image); //dar vuelta carta boca arriba (con el pokémon visible).
          //let id = (cardsPair[i].id); 
          cardBack.className = "frontCard";
          //console.log(id); 

          
          setTimeout (() => {
           flipCardBack (cardsPair[i], cardBack); 
          }, 1000);

        });
          //if(cardsPair[i]).matched) {
         // cardBack.setAttribute("src", cardsPair[i].image);
        //} 
        
        containerGrid.appendChild(cardShown);
      }  
 
    }
    gridBoard(); 

    function flipCardBack(cardData, imageCard){
     // imageCard.setAttribute("src", cardData.image); 
      if (cardData.matched) {
        return false;
      } 
      
      chosenClick.push(cardData);
      
      setTimeout(function() {
        finalMatch (chosenClick);
      }, 1000);


      function finalMatch (arrayOfChosenClick) {
        if (arrayOfChosenClick.length == 2) {
          if(arrayOfChosenClick[0].id == arrayOfChosenClick[1].id) {
            arrayOfChosenClick [0].matched = true;
            arrayOfChosenClick [1].matched = true;
            alert("finalmatch");
            //arrayOfChosenClick.length =0;
          } 
          arrayOfChosenClick.length =0;

        
          gridBoard(); 
        }
      }
           }
   return containerPlay;
};

export default play */