import React from 'react'
import SearchBar from './SearchBar'
import styles from './nav.module.css'

const Nav = (props) => {
    return (
    <div className={styles.nav}>
        <SearchBar onSearch={props.onSearch} />
        <button className={styles.buttonRandom} onClick={props.onRandom}>Personaje Random</button>
    </div>
    )
}

export default Nav