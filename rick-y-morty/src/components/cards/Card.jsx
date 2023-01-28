import styles from './cards.module.css'
import {Link} from 'react-router-dom';

export default function Card(props) {
const { id, name, species, gender, image, onClose } = props;
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
</div>
);
}