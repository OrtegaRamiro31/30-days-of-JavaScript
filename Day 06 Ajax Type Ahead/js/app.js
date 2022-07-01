// URL de donde obtendremos las ciudades
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//Promise para cargar endpoint
const prom = fetch(endpoint)
                //Convertimos de raw data a JSON
                .then(blob => blob.json())
                // Obtenemos los datos del JSON. Para ver diferencia con ... (spread) ver consola. Basicamente solo extiende el arreglo
                .then(data => cities.push(...data));
function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        // here we need to figure out if the city on state matches what was searched
        // regex es una expresion regular. wordToMatch es la palabra a buscar. g significa que se
        // hará una búsqueda global. i significa que no se distingue entre mayúsculas y minúsculas.
        const regex = new RegExp(wordToMatch, 'gi');

        // Retornamos por ciudad o estado.
        return place.city.match(regex) || place.state.match(regex);
    });
}

//Funcion para mostrar los emparejamientos/matches
function displayMatches(){
    //llamada a funcion findMatches y asignación de su valor de retorno a matchArray
    const matchArray = findMatches(this.value, cities);
    //Creamos un array que contendrá un elemento html li y span que contendrá
    // la ciudad, el estado y la población. Usamos .join al final para devolver una cadena.
    const html = matchArray.map(place => {
        //Buscamos cualquier cosa que haga match
        const regex = new RegExp(this.value, 'gi');
        // Creamos una constante cityName en donde haga match. Se crea un span con la clase h1 que tiene el color amarillo.
        // La constante sirve para usarla debajo en la lista li.
        const cityName = place.city.replace(regex, 
            `
                <span class="hl">${this.value}</span>
            `);
        const stateName = place.state.replace(regex,
            `
                <span class="state">${this.value}</span>
            `
            );
        return `
        <li>
            <span class="name">${cityName},${stateName}</span>
            <span class="population">${place.population}</span>
        </li>
        `;
    }).join('');
    // Vamos colocando los Matches en la ul.
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
