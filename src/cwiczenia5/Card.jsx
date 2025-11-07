import React from 'react';
import styles from "./Welcome.module.css";
const Card = () => {
    return (
        <div>
            <h2 className={styles.h2}>Dzień dobry</h2>
            <p className={styles.p}>Dziękuję</p>
            <button className={styles.button}>Przycisk</button>
            <button className={styles.primary}>Przycisk kolejny</button>
            <button className={styles.secondary}>Przycisk ostatni</button>
        </div>
    );
};

export default Card;