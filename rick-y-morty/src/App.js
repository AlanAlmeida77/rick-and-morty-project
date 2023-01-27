import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav.jsx'
import styles from "./components/cards/cards.module.css"
import {useState} from 'react';

function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    if(!characters.find(char => char.id === character.id)){
      setCharacters([...characters, character])
    }else{
      window.alert('Este personaje ya ha sido agregado')
    }
  }

  const onRandom = () => {
    const random = Math.floor(Math.random()*826)
    fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then((response) => response.json())
      .then((data) => onSearch(data))
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    <div className={styles.app}>
    <Nav onSearch={onSearch} onRandom={onRandom}/>
    <Cards characters={characters} onClose={onClose}/>
  </div>
  )
}

export default App