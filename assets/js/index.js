import { Leon } from      './Clases/Leon.js'
import { Lobo } from      './Clases/Lobo.js'
import { Oso } from       './Clases/Oso.js'
import { Serpiente } from './Clases/Serpiente.js'
import { Aguila } from    './Clases/Aguila.js'

import { GenerarTarjetas } from './Funciones/GenerarTarjetas.js'
import { ValidarDatosIngreso } from './Funciones/ValidarDatosIngreso.js'
import { CargarImagen } from './Funciones/CargarImagen.js'
import { ObtenerAudioImgen } from './Funciones/ObtenerAudioImgen.js'
import { ClickOnImages } from "./Funciones/ClickOnImages.js";

const ArchivoDeDatos = 'assets/data/animales.json';

const selectAnimal = document.getElementById('animal');
const btnAgregar =  document.getElementById('btnRegistrar');
const SelectAnos = document.getElementById('edad');
const comentarios = document.getElementById('comentarios');
const btnCerrar = document.getElementById('cerrarmodal');
const btnModal = document.getElementById('exampleModal');

const arrayRegistro = [];
let arrayAnimales2 = [] ;

document.addEventListener('DOMContentLoaded',()=>{    

     const arrayAnimales =  (async function() {
                                    try {
                                        const response = await fetch(ArchivoDeDatos);

                                        if (response.ok) {

                                            return await response.json();
                                
                                        } else {
                                
                                            throw new Error('Error al consultar los datos');
                                
                                        }                        

                                    } catch (error) {
                                        console.error('Hubo un error al obtener los datos:', error);
                                        return []; 
                                    }
    })();

    arrayAnimales.then(array => {       
         arrayAnimales2 = array;
    });  

});

selectAnimal.addEventListener('click',(e)=>{     
    e.target.value != 'Seleccione un animal' && CargarImagen(arrayAnimales2,e.target.value)
});

btnAgregar.addEventListener('click', async (e)=>{

    let nombreAnimal =  selectAnimal.value
    let rangoEdad = SelectAnos.value
    let textComentario = comentarios.value      

    const validados = ValidarDatosIngreso(nombreAnimal,rangoEdad,textComentario)
    
    if (validados ){
       
       const {imagen , sonido }  = await ObtenerAudioImgen(arrayAnimales2, nombreAnimal)
    
    let animal;

       switch (nombreAnimal) {

            case 'Leon': 
                animal = new Leon (nombreAnimal,rangoEdad,imagen,textComentario,sonido);           
                break;

            case 'Lobo':
                animal = new Lobo (nombreAnimal,rangoEdad,imagen,textComentario,sonido);           
                break;

            case 'Oso':
                animal = new Oso (nombreAnimal,rangoEdad,imagen,textComentario,sonido);           
                break;

            case 'Serpiente':
                animal = new Serpiente (nombreAnimal,rangoEdad,imagen,textComentario,sonido);           
                break;

            case 'Aguila':
                animal = new Aguila (nombreAnimal,rangoEdad,imagen,textComentario,sonido);           
                break;

            default:             
                break       
       }

       arrayRegistro.push(animal) 

       GenerarTarjetas(arrayRegistro)    
       ClickOnImages(arrayRegistro)

       selectAnimal.selectedIndex = 0;
       SelectAnos.selectedIndex = 0;
       comentarios.value = '';

       document.getElementById('preview').style.backgroundImage = `url('assets/imgs/lion.svg')`;

    }

});

btnCerrar.addEventListener('click',()=>{   
    btnModal.style.display = 'none'; 
})

