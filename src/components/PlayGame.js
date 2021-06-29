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
  const chosenClick = []; 

const play = () => {
    
  //Creación de HTML dinámico
  const containerPlay = document.createElement('div');
  containerPlay.className = 'containerPlay'; // container padre del juego
    
  const containerGrid = document.createElement('div');
  containerGrid.className = 'containerGrid'; 
  containerPlay.appendChild(containerGrid);// container donde va el grid de cartas
  
  //Creación de divs para cada reverso de carta (se inserta imagen en los 18 divs)
  const gridBoard = function() {
      
    containerGrid.innerHTML = "";
      for (let i = 0; i < cardsPair.length; i++) { //Recorre la data

        let cardShown = document.createElement("div");
        cardShown.className = "cardShown";
        let cardBack = document.createElement('img'); 
        cardBack.className = "cardBack";
<<<<<<< HEAD
        cardBack.setAttribute("src", "./components/reverso_carta.png"); // se crea un div para cada carta
        if(cardsPair[i].matched) {
          cardBack.setAttribute("src", cardsPair[i].image);
           }
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
=======
        cardBack.setAttribute("src", "./components/reverso_carta.png"); // Se inserta la imagen del reverso 
        if (cardsPair[i].matched){
          cardBack.setAttribute('src', cardsPair[i].image);
>>>>>>> fbeee3dad4ef2c8c40639d0aaf7ad6d98a25416f
        }
          cardShown.appendChild(cardBack);    
        cardBack.addEventListener("click", function () {      //Función al clickear una carta
          if (chosenClick.length < 2) {                       // Permite clickear solo dos cartas
            cardBack.setAttribute("src", cardsPair[i].image); //Mostrar el pokémon cuando se gira. 
            chosenClick.push(cardsPair[i]);                   //Guarda las cartas clickeadas en línea 22       
            setTimeout (() => {                               // Tiempo para el girar las cartas
              flipCardBack (cardsPair[i], cardBack); 
            },1000);
          }
        });                
        containerGrid.appendChild(cardShown);                 // Creación del div para cada carta
      }  
  }
    gridBoard(); 

    // Función que une el girar con el match
    function flipCardBack(cardData, imageCard){
      imageCard.setAttribute("src", cardData.image); 
          setTimeout(function() {
            finalMatch (chosenClick);
          }, 1000);
    }

    
    function finalMatch (arrayOfChosenClick) {
      if (arrayOfChosenClick.length == 2) {
          if(arrayOfChosenClick[0].id == arrayOfChosenClick[1].id) {
            arrayOfChosenClick [0].matched = true;
            arrayOfChosenClick [1].matched = true;
<<<<<<< HEAD
            
          }
          else (gridBoard())
          arrayOfChosenClick.length =0;
          
          //cardBack.setAttribute("src", arrayOfChosenClick[0].image); 

        }
=======
          }
          else (gridBoard())
          arrayOfChosenClick.length =0;                       
>>>>>>> fbeee3dad4ef2c8c40639d0aaf7ad6d98a25416f
      }
    }    
   return containerPlay;
};

export default play

