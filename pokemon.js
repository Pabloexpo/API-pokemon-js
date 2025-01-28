
const nombre = document.querySelector('#numPersonas');
const boton = document.querySelector('#boton');
const contenedor = document.querySelector('#contenedor');

boton.addEventListener('click', solicitarDatos);

function solicitarDatos() {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + nombre.value;
    console.log(nombre.value);
    //hacemos el fetch solicitando los datos
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarDatos(datos))
        .catch(e => alert ("No se encontró al pokemon"));
}

function mostrarDatos(datos) {
    contenedor.innerHTML = "";
    const divDatos = document.createElement('div'); 
    //imagen
    let img = document.createElement('img'); 
    img.src= datos.sprites.front_default; 
    //numeroPokedex
    let ul = document.createElement('ul'); 
    let nombre = document.createElement('li'); 
    nombre.textContent= "Nombre: "+ datos.name; 
    let numero = document.createElement('li'); 
    numero.textContent= 'Número de la pokedex: '+ datos.id
    let tipo = document.createElement('li'); 
    tipo.textContent= 'Tipo: '+ datos.types[0].type.name
    console.log(datos.types)
    ul.append(nombre, numero, tipo)

    divDatos.append(img, ul)
    divDatos.className='divDatos'
    contenedor.append(divDatos)
}