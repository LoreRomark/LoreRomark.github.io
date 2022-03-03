const hamburguer = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu-navegacion');
const closed = document.querySelector('.icon-close');
const categorys_name = document.querySelectorAll('.menu-categoria-name')
const submenu_container_categorys = document.querySelector('.submenu-container-categorias')
const filter_categorys_children = document.querySelectorAll('.filtro-children-category')
const categorys_children = document.querySelectorAll('.categoria-chlidren')
const categorys_niña = document.querySelectorAll('.niña-li')
const categorys_niño = document.querySelectorAll('.niño-li')
const categorys_bebe_niña = document.querySelectorAll('.bebe-niña-li')
const categorys_bebe_niño = document.querySelectorAll('.bebe-niño-li')
const categorys_bebe_mini = document.querySelectorAll('.bebe-mini-li')
const carrousel = document.querySelector(".slick-list");
const carrousel_point = document.querySelectorAll(".point");

// Mostar el sidebar lateral -------------------------------------------------------------------------------------------
    // al hacer click agregar la clase "spread" y remover la clase "close" si la tiene
hamburguer.addEventListener('click', ()=>{
    menu.classList.add("spread")
    menu.classList.remove("close")
})

// Ocultar el sidebar lateral ------------------------------------------------------------------------------------------
    // al hacer click agregar la clase "close" y remover la clase "spread" si la tiene
closed.addEventListener('click', ()=>{
    menu.classList.remove("spread")
    menu.classList.add("close")
})


// ocultar el sidebar al hacer click fuera de el en la pantalla -------------------------------------------------------
    // si menu tiene la clase spread
    // si click ocurre a algo diferente a menu, hamburguer y close 
// window.addEventListener("click", (e)=>{
//     if(menu.classList.contains("spread") && e.target != menu && e.target != hamburguer && e.target != closed){
//         menu.classList.remove("spread")
//     }
//     console.log(e.target)
// })



// Al hacer CLICK en una categoria (woman,man,children,info) ( MENU CARRUSEL ) ---------------------------------------
    // Recorro TODAS las categorias que tengo
categorys_name.forEach( (element, i)=>{
    // Asigno un CLICK a cada Categoria
    categorys_name[i].addEventListener('click', ()=>{
        // Guardo la posicion de esa categoria
        let position = i;
        let operation = position * -25 // este es el porcentaje que se trasladara cada UL del slider (100% / 4 )

        submenu_container_categorys.style.transform = `translateX(${operation}%)`;

        // Recorro TODAS las categorias que tengo y les elimino la clase 'active'
        categorys_name.forEach((element,i)=>{
            categorys_name[i].classList.remove('active')
        });
        // Agrego la clase 'active' solo a esa categoria 
        categorys_name[i].classList.add('active')
    })
});


// Mostar y ocultar las listas de las categorias de niños --------------------------------------------------------------
filter_categorys_children.forEach( (element, i)=>{
    filter_categorys_children[i].addEventListener('click', ()=>{
        let position = i; 

        filter_categorys_children.forEach((element, i)=>{
            filter_categorys_children[i].classList.remove('active'); 
        })

        filter_categorys_children[i].classList.toggle('active');

        if (position === 0){
            categorys_niña.forEach((element,i)=>{
                categorys_niña[i].classList.toggle('show');
                
                categorys_niño.forEach((element,i)=>{
                    categorys_niño[i].classList.remove('show');
                });
                categorys_bebe_niña.forEach((element,i)=>{
                    categorys_bebe_niña[i].classList.remove('show');
                });
                categorys_bebe_niño.forEach((element,i)=>{
                    categorys_bebe_niño[i].classList.remove('show');
                });
                categorys_bebe_mini.forEach((element,i)=>{
                    categorys_bebe_mini[i].classList.remove('show');
                });
            });
        }else if (position === 1){
            categorys_niño.forEach((element,i)=>{
                categorys_niño[i].classList.toggle('show');

                categorys_niña.forEach((element,i)=>{
                    categorys_niña[i].classList.remove('show');
                });
                categorys_bebe_niña.forEach((element,i)=>{
                    categorys_bebe_niña[i].classList.remove('show');
                });
                categorys_bebe_niño.forEach((element,i)=>{
                    categorys_bebe_niño[i].classList.remove('show');
                });
                categorys_bebe_mini.forEach((element,i)=>{
                    categorys_bebe_mini[i].classList.remove('show');
                });
            });
        }else if (position === 2){
            categorys_niño.forEach((element,i)=>{
                categorys_bebe_niña[i].classList.toggle('show');

                categorys_niño.forEach((element,i)=>{
                    categorys_niño[i].classList.remove('show');
                });
                categorys_niña.forEach((element,i)=>{
                    categorys_niña[i].classList.remove('show');
                });
                categorys_bebe_niño.forEach((element,i)=>{
                    categorys_bebe_niño[i].classList.remove('show');
                });
                categorys_bebe_mini.forEach((element,i)=>{
                    categorys_bebe_mini[i].classList.remove('show');
                });
            });
        }else if (position === 3){
            categorys_niño.forEach((element,i)=>{
                categorys_bebe_niño[i].classList.toggle('show');

                categorys_niño.forEach((element,i)=>{
                    categorys_niño[i].classList.remove('show');
                });
                categorys_niña.forEach((element,i)=>{
                    categorys_niña[i].classList.remove('show');
                });
                categorys_bebe_niña.forEach((element,i)=>{
                    categorys_bebe_niña[i].classList.remove('show');
                });
                categorys_bebe_mini.forEach((element,i)=>{
                    categorys_bebe_mini[i].classList.remove('show');
                });
            });
        }else if (position === 4){
            categorys_niño.forEach((element,i)=>{
                categorys_bebe_mini[i].classList.toggle('show');

                categorys_niño.forEach((element,i)=>{
                    categorys_niño[i].classList.remove('show');
                });
                categorys_bebe_niña.forEach((element,i)=>{
                    categorys_bebe_niña[i].classList.remove('show');
                });
                categorys_bebe_niño.forEach((element,i)=>{
                    categorys_bebe_niño[i].classList.remove('show');
                });
                categorys_niña.forEach((element,i)=>{
                    categorys_niña[i].classList.remove('show');
                });
            });
        } 
    })
})

// CARRUSEL DE IMAGENES-------------------------------------------------------------------------------------------------
// al hacer CLICK en un punto
    // saber la posicion de ese punto
    // hacer un transform translatex al container del slider
    // QUITAR la clase activo de todos los puntos
    // AGREGAR la clase activos al pinto seleccionado


// Recorrer TODOS los punto
carrousel_point.forEach( ( elemento , i )=> {
    // Asignamos un CLICK a cadaPunto
   carrousel_point[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el container que tiene las img
        let operacion = posicion * -25;

        //quitamos la animacion
        carrousel.style.animation = 'none';

        // MOVEMOS el container que tiene las img
        carrousel.style.transform = `translateY(${operacion}%)`
        
        // Recorremos TODOS los punto
        // carrousel_point.forEach( ( elemento , i )=>{
        //     // Quitamos la clase ACTIVO a TODOS los punto
        //     carrousel_point[i].classList.remove('active')
        // })
        // // Añadir la clase activo en el punto que hemos hecho CLICK
        // carrousel_point[i].classList.add('active')
    }); 
})
