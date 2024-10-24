/**
 * inserta una imagen de carta en el frontend
 * @param {string} carta Ejemplo: 2H,5C,..
 * @param {Array[Number]} turno Ejemplo: array[0],array[1],...
 */

export const crearCarta = (carta, turno )=>{
    const img = document.createElement('img');
    img.classList.add('carta');
    img.src=`assets/cartas/${carta}.png`;
    turno.append(img);
}