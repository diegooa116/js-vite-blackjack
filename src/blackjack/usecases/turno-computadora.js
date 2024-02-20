import { pedirCarta, valorCarta, crearCartaHtml } from './';

/**
 * Esta función se encarga del turno de juego de la computadora
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas
 * @param {Array<String>} deck Ejemplo: ['AC', '8S', '4H', '8D', '2D'...'7C']
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios.');
    if( !puntosHTML ) throw new Error('Argumento puntosHtml es necesario.');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}