import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './detail.module.css'


const Detail = () => {

const { detailId } = useParams();
const [character, setCharacter] = useState({});

useEffect(() => {
fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
.then((response) => response.json())
.then((char) => {
if (char.name) {
setCharacter(char);
} else {
alert("No hay personajes con ese ID");
}
})
.catch((err) => {
alert("No hay personajes con ese ID");
});
return setCharacter({});
}, [detailId]);

if (!character.name) {
return <div>Loading...</div>;
}

return (
<div className={styles.card}>
<img src={character?.image} alt={character.name} className={styles.image} />
<div className={styles.details}>
<h1>{character?.name}</h1>
<p>Status: {character?.status}</p>
<p>Specie: {character?.species}</p>
<p>Gender: {character?.gender}</p>
<p>Origin: {character?.origin?.name}</p>
<Link to="/home">
        <button className={styles.button}>Regresar a Home</button>
        </Link>
        </div>
</div>
);
}
export default Detail