import React from 'react'
import SearchBar from './SearchBar'
import styles from './nav.module.css'

import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
    <div className={styles.nav}>
        <Link to='/home'><button className={styles.buttons}>LOGOUT</button></Link>
        <Link to='about'><button className={styles.buttons} >About</button></Link>
        <Link to='home'><button className={styles.buttons}>Home</button></Link>
        <Link to='favorites'><button className={styles.buttons}>Favoritos</button></Link>
        <SearchBar onSearch={props.onSearch} />
        <button className={`${styles.buttons} random`} onClick={props.onRandom}>Personaje Random</button>
    </div>
    )
}

export default Nav