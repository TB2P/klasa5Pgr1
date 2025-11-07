import React from 'react';
import styles from "./Welcome.module.css";
import zdjecie from "./robert-lewandowski.jpg"
const UserProfile = () => {
    return (
        <div className={styles.kontener}>
            <img className={styles.boxbox} src={zdjecie}/>
            <h1 className={styles.p}>Maciej za 20 lat</h1>
        </div>
    );
};

export default UserProfile;