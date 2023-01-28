import React from 'react'
import SearchBar from './SearchBar'
import styles from './nav.module.css'
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
    <div className={styles.nav}>
        <Link to='about'>About</Link>
        <Link to='home'>Home</Link>
        <SearchBar onSearch={props.onSearch} />
        <button className={styles.buttonRandom} onClick={props.onRandom}>Personaje Random</button>
    </div>
    )
}

export default Nav