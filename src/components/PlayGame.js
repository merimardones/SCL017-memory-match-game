const play = () => {

 const containerPlay = document.createElement('div');
 containerPlay.className = 'containerPlay'; // container padre del juego

 const backgroundPlay = document.createElement('div'); // div hijo de container que contiene imagen de fondo
 backgroundPlay.className = 'backgroundPlay';
 containerPlay.appendChild(backgroundPlay); 

 return containerPlay;
}

export default play;