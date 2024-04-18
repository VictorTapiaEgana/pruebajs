export function ValidarDatosIngreso(nombre, anos, comentarios){
 
    document.getElementById('errores').innerHTML ="Ingrese los datos del animal"

    let listaErrores = '';
    let CadenaError = [];

    let validarNombre = false
    let validarEdad = false
    let validarComentario = false

    nombre !== 'Seleccione un animal' ? validarNombre = true : validarNombre = false;
    
    anos !== 'Seleccione un rango de años' ? validarEdad = true: validarEdad = false;
    
    comentarios !== '' ? validarComentario = true : validarComentario = false;


    if (!validarNombre) {
        CadenaError.push('* Seleccione un tipo de animal');
    }

    if(!validarEdad){
        CadenaError.push('* Seleccione el rango de edad');
    }

    if(!validarComentario){
        CadenaError.push('* Ingrese comentarios');
    }

    if (!validarNombre || !validarEdad || !validarComentario){        

        CadenaError.forEach(err =>{
            listaErrores += `<li> ${err}</li>`;
        })

        document.getElementById('errores').innerHTML = `<ul>${listaErrores}</ul>`;
        document.getElementById('errores').style.color = "black";

        return false;

    }else{
        
        return true;

    };

};