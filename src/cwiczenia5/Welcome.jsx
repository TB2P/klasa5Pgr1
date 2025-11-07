import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
    return (
        <div>
            <h1 style={{textAlign: "center"}} className={styles.title}>Witaj Chóbert!</h1>
        </div>
    );
};

export default Welcome;
