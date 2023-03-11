import style from "./Cards.module.css";
import Card from '../Card/Card';
import { useEffect } from 'react';

function Cards({ characters, onClose }) { // [{...}, {...}, {...}]

   useEffect(() => {
      localStorage.setItem('cards', JSON.stringify(characters));
   }, [characters]);

   return (
      <div className={style.container}>
         {
            characters.map(({id, name, species, gender, image}) => {
              return <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               id={id}
               onClose={() => onClose(id)}
              />
            })
         }
      </div>
   )
}

export default Cards;