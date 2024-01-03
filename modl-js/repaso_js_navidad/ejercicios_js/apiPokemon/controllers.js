import fetch from "node-fetch";
export async function getPokemonByName() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/4");
        // https://pokeapi.co/api/v2/pokemon/ditto
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    }
    catch (error) {
        console.error("Error fetching Pokemon:", error.message);
    }
}
