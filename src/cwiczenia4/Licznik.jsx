import React, {useEffect, useState} from 'react';

const Licznik = () => {
    const [licznik, setLicznik] = useState(0);
    const [komunikat, setKomunikat] = useState("");
    useEffect(() => {
        if(licznik > 10){
            setKomunikat("Uwaga! Osiągnięto licznik kliknięć");
            console.log("Uwaga! Osiągnięto licznik kliknięć");
        }
        else{
            setKomunikat("");
        }
    }, [licznik]);
    return (
        <div>
            <h3>Licznik - {licznik}</h3>
            <button onClick={() => setLicznik(prev => prev + 1)}>Zwiększ licznik</button>
            {
                komunikat && <p style={{color: "red"}}>{komunikat}</p>
            }
        </div>
    );
};

export default Licznik;