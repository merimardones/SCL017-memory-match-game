import pokemonCards from '../data/pokemonCards/pokemonCards.js';
console.log(pokemonCards);
import play from './PlayGame.js';

const Starting = () => {

// Aquí se parte por el play al botón y luego están los divs para la pantalla principal
    

      const startBtn = () => {
        document.getElementsByClassName('container');
        container.style.display = 'none';
        document.getElementById('root').appendChild(play());
        }
        

  const container = document.createElement('div');
  container.className = 'container'; // container padre
  
  const containerLogo = document.createElement('div');
  containerLogo.className = 'Logo';
  container.appendChild(containerLogo); // div hijo de container que almacena el logo

  const containerPikachu = document.createElement('div');
  containerPikachu.className = 'Pikachu';
  container.appendChild(containerPikachu); // div hijo de container que almacena el gif

  const subContainer = document.createElement('div');
  subContainer.className = 'start';
  subContainer.addEventListener('click', startBtn); 
  container.appendChild(subContainer); // div hijo de container que almacena el botón start

  
  return container;
};
  
   

  
 

 /*const modalPlay = document.createElement('div');
 const play = document.createElement('div');
 play.className = 'modaljuego';
 /*funcion para abrir un modal desde aqui
 modalPlay.appendChild(play) */













export default Starting;
