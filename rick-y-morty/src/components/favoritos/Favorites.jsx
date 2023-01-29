import Card from "../cards/Card"
import { useSelector } from 'react-redux';
import styles from './favorites.module.css'

function Favorites() {
    const favorites = useSelector(state => state.myFavorites);

    return (
    <div className={styles.favoritos}>
        {favorites.map(favorite => (
        <Card key={favorite.id} character={favorite} />
        ))}
    </div>
    )
}

export default Favorites;