import React, {useEffect, useState} from 'react';

const Zegar = () => {
    const [czas, setCzas] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        setCzas(new Date().toLocaleTimeString())
        const timer = setInterval(() => {
            console.log("Zegar dodany");
            }, 1000);
        return () => clearInterval();
    }, []);
    return (
        <div>
            <h3>Godzina: {czas}</h3>
        </div>
    );
};

export default Zegar;