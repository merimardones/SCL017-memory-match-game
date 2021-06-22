import play from './PlayGame.js';

const Starting = () => {

// evento para ocultar el container 
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
  

export default Starting;