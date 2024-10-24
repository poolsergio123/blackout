import {pedirCarta} from './'
import { crearCarta } from './';
import { acumularPuntos } from './';
/**
 * Permite tomar el turno a la computadora
 * @param {Array<Number>} puntosJugadores array de los jugadores, se envia con el fin de acumular los puntos en la posicion correcta.
 * @param {Number} puntosminimos puntos minimos para que la computadora gane
 * @param {Array<string>} deck baraja de cartas
 */

export const turnoComputadora= (puntosJugadores,puntosminimos,deck=[])=>{
    const divsParticipantes = document.querySelectorAll('.cartas')
    do {
        const carta = pedirCarta(deck);
        puntosJugadores[puntosJugadores.length-1]=acumularPuntos(carta,puntosJugadores[puntosJugadores.length-1],puntosJugadores.length-1);
        
        
        crearCarta(carta,divsParticipantes[divsParticipantes.length-1]);
        

        if (puntosminimos>21) {
            break;
        }
    } while (puntosJugadores[puntosJugadores.length-1] < puntosminimos && puntosminimos<=21);
}