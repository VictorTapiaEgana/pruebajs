export function CargarImagen ( arregloAnimal , animal ){
    
    const preview = document.getElementById('preview');
    const rutaImaganes = 'assets/imgs/';
    
    try {    
      
        const img =  arregloAnimal.animales.filter((ani) => ani.imagen.slice(0, -4) == animal)
        
        preview.style.backgroundImage = `url(${rutaImaganes}${img[0].imagen})`;
    
    } catch (error) {
    
        console.log('Ocurrió un error al obtener los datos:', error);

    }
};