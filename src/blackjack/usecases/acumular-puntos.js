import { valorCarta } from "./valor-carta";

export const acumularPuntos=(carta,turnocompleto,turno)=>{
    const smallS = document.querySelectorAll('small');
    turnocompleto= turnocompleto+ valorCarta(carta);
    console.log(turnocompleto);
    smallS[turno].innerText=turnocompleto;
    return turnocompleto;
}
