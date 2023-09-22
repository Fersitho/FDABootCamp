// Array de nombres de personas
const nombres = [
    "Lolo",
    "Raul",
    "Rodrigo",
    "Fran",
    "Fer-David",
    "Ivan Manceras",
    "Hugo",
    "Julio",
    "Fer G",
    "Sami",
    "Laura",
    "Celia",
    "Sergio",
    "Sara",
    "Dario",
    "Luis",
    "Juan",
    "Mar"
  ];

// Función para crear grupos aleatorios de 3 personas
function crearGruposAleatorios(nombres) {
  const grupos = [];

  while (nombres.length > 0) {
    const grupo = [];

    // Selecciona aleatoriamente tres nombres y agrégalos al grupo
    for (let i = 0; i < 3; i++) {
      if (nombres.length > 0) {
        const indice = Math.floor(Math.random() * nombres.length);
        grupo.push(nombres.splice(indice, 1)[0]);
      }
    }

    grupos.push(grupo);
  }

  return grupos;
}

// Llama a la función para crear grupos aleatorios
const gruposAleatorios = crearGruposAleatorios(nombres);

// Muestra los grupos resultantes
console.log("Grupos aleatorios:");
console.log(gruposAleatorios);