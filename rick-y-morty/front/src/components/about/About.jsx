import React from 'react';
import styles from './about.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.aboutMe}>Acerca de mí:</h1>
            <div>
                <div className={styles.aboutMeText}>
                    <h2 className={styles.description}>Soy Alan Almeida, actualmente curso de Full stack developer en Henry y este es uno de los proyectos que debemos realizar.
                    Tengo 25 años, desde hace ya más de un año que estudio y practico el desarrollo web, particularmente el front-end y el diseño de las mismas.
                    </h2>
                </div>
            </div>
            <h1>Acerca de la aplicación</h1>
            <p>Esta aplicación está desarollada con React-Redux.</p>
        </div>
    );
}

export default About;