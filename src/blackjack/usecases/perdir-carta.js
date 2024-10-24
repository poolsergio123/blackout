

/** Esta funcion pide permite pedir una carta, lo cual 
 *  elimina esa carta del deck
 * @param {Array<string>} deck Ejemplo: ['2C','4D','5H','JS',...]
 * @returns {string} retorna un nuevo deck
*/
export const pedirCarta = (deck)=>{
    if(deck ===0) throw new Error('El deck esta vacio');
    return deck.shift();
}