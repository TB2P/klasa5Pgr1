import React, {useEffect, useState} from 'react';

const Cw4 = () => {
    const [tekst, setTekst] = useState("Klasa 5p");
    useEffect(() => {
        console.log("Komponent został wyrenderowany");
    });
    return (
        <div>
            <h3>Powitanie - {tekst}</h3>
            <button onClick={() => setTekst("Grupa I")}>Zmień tekst</button>
        </div>
    );
};

export default Cw4;