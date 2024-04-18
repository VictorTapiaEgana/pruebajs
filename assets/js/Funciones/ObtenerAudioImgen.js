export async function ObtenerAudioImgen(arrayAnimales2 , nombreAnimal){
    
    try {   
      
        const datosAnimal2 = arrayAnimales2.animales.find(animall => animall['name'] === nombreAnimal);        
        return datosAnimal2;

    
    } catch (error) {
    
        console.log('Ocurrió un error al obtener los datos:', error);

    }

};