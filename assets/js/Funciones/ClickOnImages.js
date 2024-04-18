const btnModal = document.getElementById('exampleModal');
const bodyModal = document.querySelector('.modal-body')

export function ClickOnImages(datosAnimal){
    
    const ArrayImagens = document.querySelectorAll('[data-index]')
    
    ArrayImagens.forEach(img=>{            

        let imgIndex = img.getAttribute('data-index')
        let nombreAnimal = img.getAttribute('alt')       

        img.addEventListener('click', function() {
                
                  const dats = datosAnimal.find(find => find._nombre === nombreAnimal)                

                   const modal = `<img src="assets/imgs/${dats._img}" alt="Leon" >
                                  <h4>${dats._edad}</h4>
                                  <h6>Comentarios</h6>              
                                  <p>${dats._comentarios}</p>`

                  bodyModal.innerHTML= modal;

                  btnModal.classList.add('show'); 
                  btnModal.style.display = 'block'; 

        });

    })
}