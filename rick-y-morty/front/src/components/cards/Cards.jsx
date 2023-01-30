import Card from './Card';
import styles from "./cards.module.css";

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
   <div className={styles.cardsContainer}>
         {
            characters.map((character,index) =>{
               return <Card 
                  key={index}
                  id={character.id}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={onClose}
               />
            })
         }
   </div>

   );
}
