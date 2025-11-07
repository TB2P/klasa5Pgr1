import React, {useEffect} from 'react';

const Cw41 = () => {
    useEffect(() => {
        console.log("Komponent został uruchomiony tylko raz")
    }, []);
    return (
        <div>
            <h3>Zadanie 2</h3>
        </div>
    );
};

export default Cw41;