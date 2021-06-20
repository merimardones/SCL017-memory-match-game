import play from './PlayGame.js';   // importamos la variable "play" para aplicarla en el boton start 

const Starting = () => {  // se crea el boton para comenzar a jugar
    
      const startBtn = () => {
        document.getElementsByClassName('container');    //se llama a el div container
        container.style.display = 'none';                // se esconde el div container
        document.getElementById('root').appendChild(play());    // se llama al div root de body y se abre la variable play (codificada en PlayGame.js)
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

export default Starting;
