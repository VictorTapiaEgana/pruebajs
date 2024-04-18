const cardContainer = document.getElementById('Animales');
const rutaImaganes = 'assets/imgs/';
const rutaSonidos = 'assets/sounds/'

export function GenerarTarjetas(arrayDatos){

let arrayCards = []

    arrayDatos.forEach((animal,index)=>{
                       
       let elemento= `<div class="mini">                       
                         <img class="" src=${rutaImaganes}${animal._img} alt="${animal._nombre}" data-index="${index}">                                                     
                         <img id="imgAudio${index}" class="imgAudio" src="assets/imgs/audio.svg" onclick="document.getElementById('${index}').play()"/>
                         <audio id="${index}" src="${rutaSonidos}${animal._sonido}"></audio>                                                                         
                      </div>`

        arrayCards.push(elemento);
    })

    cardContainer.innerHTML= arrayCards.join('');     
   

}



