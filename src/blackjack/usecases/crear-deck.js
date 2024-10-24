import _ from 'underscore';


export const asdas = 'Hola';
/** Esta funcion crea un nuevo deck
 * @param {Array<string>} tipos Ejemplo: ['C','D','H','S']
 * @param {Array<string>} especiales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck
*/
export const crearDeck = (tipos,especiales)=>{
    
    if (!tipos || tipos.length ===0) throw new Error('Tipos es obligatorio como arreglo de string');
    if (!especiales || especiales.length ===0) throw new Error('Especiales es obligatorio como arreglo de string');
    let deck=[];
    for (let i = 2; i <=10 ; i++) {
        for (const tipo of tipos) {            
            deck.push(`${i}${tipo}`);
            
        }

    }
    for (const tipo of tipos) {
        for (const especial of especiales) {
            deck.push(`${especial}${tipo}`);
        }        
    }
    return _.shuffle(deck);;
}

// export default crearDeck;