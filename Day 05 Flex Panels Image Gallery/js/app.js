const panels = document.querySelectorAll('.panel');
/*Si el elemento no tiene la clase .open se la asigna, sino se la quita.*/
function toggleOpen(){
    this.classList.toggle('open');
}

/*Si el elemento no tiene la clase .open se la asigna, sino se la quita.*/
/*Si el elemento incluye la propiedad flex (la contiene la clase open en este caso)
,agregale la clase open-active si está desactivada, sino quítala.*/
function active(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
        // console.log(e);
        this.classList.toggle('open-active');
    }
}

/*Eventos*/
/*Click es un evento que se dá al dar click en el elemento. Manda a 
llamar la función toggleOpen */ 
panels.forEach(panel => panel.addEventListener('click',toggleOpen));

/* transitionend se dá cuando termina la transición del elemento.
Manda a llamar la función active. */
panels.forEach(panel => panel.addEventListener('transitionend',active));
// console.log(panels);