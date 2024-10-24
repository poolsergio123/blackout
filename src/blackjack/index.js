import _ from 'underscore';
import {crearDeck,pedirCarta,valorCarta,asdas,crearCarta,acumularPuntos,turnoComputadora} from './usecases'

console.log(asdas);
// const miModulo=(()=>{
    
  let deck=[],
         puntosJugadores = [];


  const tipos =['C','D','H','S'],
        especiales =['A','J','Q','K'];

  const inicializarJuego =(numjugadores=2)=>{
    

      deck =crearDeck(tipos,especiales);
      puntosJugadores=[];
      for (let i = 0; i < numjugadores; i++) {
          puntosJugadores.push(0);
      }
      btnpedir.disabled=false;
      btndetener.disabled=false;
      const img = document.querySelectorAll('img');
      for (let i = 0; i < smallS.length; i++) {
          smallS[i].innerText =0;
      }
      for (let i = 0; i < img.length; i++) {
          img[i].remove();
      }
  };
  
  const btnpedir = document.querySelector('#btnpedir'),
        btndetener = document.querySelector('#btndetener'),
        btnnuevo = document.querySelector('#btnnuevo');

  const divsParticipantes = document.querySelectorAll('.cartas'),
        smallS = document.querySelectorAll('small');    
  
  btnpedir.addEventListener('click',function(){
      const carta = pedirCarta(deck);
      puntosJugadores[0]= acumularPuntos(carta,puntosJugadores[0],0);
      crearCarta(carta,divsParticipantes[0]);

      // const img = document.createElement('img');
      // img.classList.add('carta');
      // img.src=`assets/cartas/${carta}.png`;    
      // divsParticipantes[0].append(img);
      if(puntosJugadores[0]>21){
          turnoComputadora(puntosJugadores,puntosJugadores[0],deck);
          setTimeout(() => {
              if (puntosJugadores[puntosJugadores.length-1] ===21) {
                  alert("Computadora gana.");            
              }        
              alert("Perdiste :("); 
          }, 20);
          btnpedir.disabled=true;
          btndetener.disabled=true;
      }
      else if (puntosJugadores[0]===21) {
          turnoComputadora(puntosJugadores,puntosJugadores[0],deck);
          setTimeout(() => {
              if (puntosJugadores[puntosJugadores.length-1] ===21) {
                  alert("Empataron :|");            
              }
              else{
                  alert("21, Ganaste");
              } 
          }, 20);
          btnpedir.disabled=true;
          btndetener.disabled=true;
      }
  });

  



  
  
  btndetener.addEventListener('click',function (){
      btnpedir.disabled=true;
      btndetener.disabled=true;
      turnoComputadora(puntosJugadores,puntosJugadores[0],deck);
      setTimeout(() => {
          (puntosJugadores[puntosJugadores.length-1]<21 )?puntosJugadores[puntosJugadores.length-1]>puntosJugadores[0]?alert('Gano la Computadora'):alert('Empate'):puntosJugadores[puntosJugadores.length-1]===21 ? alert('Gana la Computadora'):alert('Ganaste!'); 
      }, 30);
  })
  
  
  
  btnnuevo.addEventListener('click',function (){

      inicializarJuego();
      
  });
  inicializarJuego();

  // return {
  //     nuevoJuego:inicializarJuego
  // };
  
// })();
