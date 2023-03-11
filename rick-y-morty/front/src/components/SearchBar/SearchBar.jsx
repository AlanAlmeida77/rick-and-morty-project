import style from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value);
   }

   return (
      <div className={style.container}>
         <input className={style.search} type='search' value={character} onChange={handleChange} style={{ backgroundColor: '#fff', color: 'black', marginRight: '1rem' }} />
         <button className={style.addButton} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}

export default SearchBar;