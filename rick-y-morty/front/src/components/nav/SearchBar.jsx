import React, { useState } from 'react';
import styles from './nav.module.css';
import Lupita from '../../img/search-svgrepo-com.png'

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
<button className={styles.buttonAdd} type="submit"> <img src={Lupita} alt="Logo"  className={styles.lupita} /></button>
</form>
);
}