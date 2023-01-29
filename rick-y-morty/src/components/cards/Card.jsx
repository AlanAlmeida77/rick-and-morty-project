import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/actions.js';
import { useState, useEffect } from 'react';
import styles from './cards.module.css'
import {Link} from 'react-router-dom';



export default function Card(props) {
const { id, name, species, gender, image, onClose } = props;
const myFavorites = useSelector(state => state.myFavorites);
const dispatch = useDispatch();
const [isFav, setIsFav] = useState(false);

useEffect(() => {
    myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
            setIsFav(true);
        }
    });
}, [myFavorites, props.id]);

const handleFavorite = () => {
    if (isFav) {
    setIsFav(false);
    dispatch(removeFromFavorites(id));
    } else {
    setIsFav(true);
    dispatch(addToFavorites(props));
    }
};

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