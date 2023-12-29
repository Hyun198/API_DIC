/* fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error)); */

fetchData();
async function fetchData() {
    try {
        /*  const pokemonName = document.getElementById("pokemonName").value.toLowerCase(); */

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if (!response.ok) {
            throw new Error('cant fecth resource');
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        const heightElement = document.getElementById("height");
        const weightElement = document.getElementById("weight");
        const NameElement = document.getElementById("name");
        const typeElement = document.getElementById("type");

        console.log(data.types[0].type.name);

        const height = data.height;
        const weight = data.weight;
        const type = data.types[0].type.name;
        const name = data.name;



        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        heightElement.textContent = `Height: ${height}`;
        weightElement.textContent = `Weight: ${weight}`;
        NameElement.textContent = `${name}`;
        typeElement.textContent = `${type}`;

    } catch (error) {
        console.error(error);
    }
}