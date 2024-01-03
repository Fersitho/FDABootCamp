const loadPokemonImages = (): void => {
  for (let i = 1; i <= 151; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    document.querySelector(".PokemonImgs")!.appendChild(imgElement);
  }
};

const loadPokeImg = async (e: Event): Promise<void> => {
  try {
    const srcElement = e.target as HTMLImageElement;
    console.log(srcElement);

    const splitSrc = srcElement.src.split("/");
    const id = splitSrc[splitSrc.length - 1].split(".")[0];

    console.log("La id de mi pokemon es: " + id);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pokemon = await response.json();

    document.querySelector("#PokemonName")!.textContent = pokemon.name;

    document.querySelector(".PokedexList")!.innerHTML = ``;

    for (let i = 0; i < pokemon.types.length; i++) {
      const liElement = document.createElement("li");
      liElement.textContent = pokemon.types[i].type.name;
      document.querySelector(".PokedexList")!.appendChild(liElement);
    }

    document.querySelector(".PokedexImg")!.setAttribute("src", srcElement.src);

    document.querySelector("#PokedexHeight")!.textContent = pokemon.height;

    document.querySelector("#PokedexWeight")!.textContent = pokemon.weight;

    console.log("El pokemon de esta id es: ", pokemon);
  } catch (error) {
    console.error("Error fetching Pokemon:", (error as Error).message);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadPokemonImages(); // Load pokemon images
  document
    .querySelector(".PokemonImgs")
    ?.addEventListener("click", (e) => loadPokeImg(e));
});
