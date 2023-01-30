import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions.js";
import styles from './favorites.module.css'

const Favorites = () => {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector(state => state);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <select name="order" onChange={handleOrder}>
                <option selected="true" disabled="disabled">Order By</option>
                <option value="All">All</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="filter" onChange={handleFilter}>
                <option selected="true" disabled="disabled">Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>
            {
                myFavorites.map(char => {
                    return(
                        <div className={styles.container}>
                        <div className={styles.card}>

                        <div className={styles.cardInfo}>
                        <Link to={`/detail/${char.id}`}>
                        <h2 className={styles.name}>{char.name}</h2>
                        </Link>
                        <div className={styles.cardBottom}>
                        <div className={styles.gender}>{char.gender}</div>
                        <div className={styles.species}>{char.species}</div>
                        </div>
                        </div>
                        <img className={styles.cardImg} src={char.image} alt={"img"} />

                        </div>
                        </div>
            )
        })
    }
</div>
)
}

export default Favorites;