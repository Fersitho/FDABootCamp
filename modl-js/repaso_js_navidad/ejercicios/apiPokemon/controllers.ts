import fetch from "node-fetch";

export async function getPokemonByName() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    
    // https://pokeapi.co/api/v2/pokemon/4 

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
  } catch (error: any) {
    console.error("Error fetching Pokemon:", error.message);
  }
}

