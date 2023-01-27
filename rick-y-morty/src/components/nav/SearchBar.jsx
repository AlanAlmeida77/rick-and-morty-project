import React, { useState } from 'react';
import styles from './nav.module.css';

export default function SearchBar(props) {
const [character, setCharacter] = useState('');

const handleSubmit = (event) => {
event.preventDefault();
fetch(`https://rickandmortyapi.com/api/character/${character}`)
.then((response) => response.json())
.then((data) => {
if (data.name) {
props.onSearch(data);
setCharacter('');
} else {
window.alert('No hay personajes con ese ID');
}
});
}

return (
<form onSubmit={handleSubmit}>
<input
className={styles.inputSearcher}
type='search'
value={character}
onChange={(event) => setCharacter(event.target.value)}
/>
<button className={styles.addButton} type="submit">Agregar</button>
</form>
);
}