//Constante para seleccionar todos los inputs que se encuentre dentro
//de un elemento padre con la clase .controls.
const inputs = document.querySelectorAll('.controls input');

//Funcion que sirve para hacer los cambios. Es llamada en los eventos.
function Update(){
    //Constante que obtiene el sufijo, es decir, px en este caso. Sin embargo, para el color no se coloca sufijo, por eso se coloca || ''
    const suffix = this.dataset.sizing || '';
    //Establecemos las propiedades a los atributos de los elementos correspondientes.
    //Primero, referenciamos al nombre del atributo (blur, spacing o base)
    //Segundo, colocamos el valor obtenido mediante los eventos
    //Tercero, concatenamos el sufijo px en caso de blur o spacing. En caso de Base se concatena una cadena vacía. 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

/*Eventos. Change es para el momento en que se hace un cambio.
Mousemove hará el cambio mientras las barras se muevan (excepto con el color base).*/
inputs.forEach(input => input.addEventListener('change',Update));
inputs.forEach(input => input.addEventListener('mousemove',Update));