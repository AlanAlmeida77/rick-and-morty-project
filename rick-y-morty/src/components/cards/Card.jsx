import { useDispatch, useSelector } from 'react-redux';
import {addFavorite, deleteFavorite  } from '../../redux/actions.js';
import { useState, useEffect } from 'react';
import styles from './cards.module.css'
import {Link} from 'react-router-dom';



function Card({ name, gender, onClose, species, image, id }) {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector(state => state);
    const [ isFav, setIsFav ] = useState(false);
 
    const handleFavorite = () => {
       if(isFav){
          setIsFav(false);
          dispatch(deleteFavorite(id));
       }
       else{
          setIsFav(true);
          dispatch(addFavorite({ name, gender, onClose, species, image, id }));
       }
    }
 
    useEffect(() => {
       myFavorites.forEach((fav) => {
          if (fav.id === id) {
             setIsFav(true);
          }
       });
    }, [myFavorites, id]);

return (
<div className={styles.card}>
<button className={styles.closeButton} onClick={() => onClose(id)}>X</button>
<div className={styles.cardInfo}>
    <Link to={`/detail/${id}`}>
<h2 className={styles.name}>{name}</h2>
</Link>
<div className={styles.cardBottom}>
<div className={styles.gender}>{gender}</div>
<div className={styles.species}>{species}</div>
</div>
</div>
<img className={styles.cardImg} src={image} alt={name} />
{isFav ? (
        <button className={styles.favoriteButton}  onClick={handleFavorite}>❤️</button>
    ) : (
        <button className={styles.favoriteButton}  onClick={handleFavorite}>🤍</button>
    )}
</div>
);
}

export default Card;