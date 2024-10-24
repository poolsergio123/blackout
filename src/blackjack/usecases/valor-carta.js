
/** Esta funcion le da el puntaje segun la carta extraida del deck
 * @param {string | Number} carta2 Ejemplo: A,J,1,4,...
 * @returns {Number} retorna el puntaje de acuerdo al valor de la carta
*/
export const valorCarta=(carta2)=>{
    let valor= carta2.substring(0,carta2.length-1);
    return (isNaN(valor))?valor==='A'?11:10:valor*1;
}