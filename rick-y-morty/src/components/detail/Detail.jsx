import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const Detail = () => {

const { id } = useParams();
const [character, setCharacter] = useState({});

useEffect(() => {
fetch(`https://rickandmortyapi.com/api/character/${id}`)
.then((response) => response.json())
.then((char) => {
if (char.name) {
setCharacter(char);
} else {
window.alert("No hay personajes con ese ID");
}
})
.catch((err) => {
window.alert("No hay personajes con ese ID");
});
return setCharacter({});
}, [id]);

if (!character.name) {
return <div>Loading...</div>;
}

return (
<div>
<h1>{character.name}</h1>
<p>Status: {character.status}</p>
<p>Specie: {character.species}</p>
<p>Gender: {character.gender}</p>
<p>Origin: {character.origin.name}</p>
<img src={character.image} alt={character.name} />
<Link to="/">
        <button>Regresar a Home</button>
        </Link>
</div>
);
}
export default Detail