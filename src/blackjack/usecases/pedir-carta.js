
/**
 * Esta función permite tomar una carta del deck.
 * @param {Array<String>} deck Ejemplo: ['AC', '8S', '4H', '8D', '2D'...'7C']
 * @returns {String} retorna con un String una carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
