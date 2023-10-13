const API = 'https://swapi.dev/api/people/';

function personaje(texto) {
  let div = document.createElement('div');
  let h1_texto = document.createTextNode(texto.name);
  let h1 = document.createElement('h1');
  h1.appendChild(h1_texto);
  div.appendChild(h1);

  let contenedor = document.getElementById('contenedor');
  contenedor.appendChild(div);
}

async function obtener_personaje(id) {
  try {
    let response = await fetch(`${API}${id}`);
    let data = await response.json();
    personaje(data);
  } catch (error) {
    console.error(`[error]: ${error}`);
  }
}

async function obtener_personajes() {
  for (let i = 1; i <= 80; i++) {
    await obtener_personaje(i);
  }
}

obtener_personajes();