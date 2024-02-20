/**
 * Esta función permite obtener el valor de una carta
 * @param {String} carta
 * @returns  {Number} retorna el valor numerico de la carta dependiendo su tipo de carta (especial o no especial).
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}