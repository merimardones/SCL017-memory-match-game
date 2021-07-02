import play from './PlayGame.js';

const Starting = () => {

// evento para ocultar el container 
        const startBtn = () => {
        
        document.getElementsByClassName('container');
        container.style.display = 'none';
        document.getElementById('root').appendChild(play());
        }
        
  // container padre
  const container = document.createElement('div');
  container.className = 'container'; 

  // div hijo de container que almacena el logo
  const containerLogo = document.createElement('div');
  containerLogo.className = 'Logo';
  container.appendChild(containerLogo); 

  // div hijo de container que almacena el gif
  const containerPikachu = document.createElement('div');
  containerPikachu.className = 'Pikachu';
  container.appendChild(containerPikachu); 

  // div hijo de container que almacena el botón start
  const subContainer = document.createElement('div');
  subContainer.className = 'start';
  subContainer.addEventListener('click', startBtn); 
  container.appendChild(subContainer); 

  const footer = document.createElement('footer')
  footer.textContent= "© 2021 Laboratoria - Maria Agustina Mardones - Katherine Valcarce"
  footer.className = 'footer';
  container.appendChild(footer); 

  
  return container;
};
  

export default Starting;