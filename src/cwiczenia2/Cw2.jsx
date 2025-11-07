import React, {use, useState} from 'react';

const Cw2 = () => {
    const [dane, setDane] = useState([]);
    const [user, setUser] = useState({imie: "Anna", wiek: 20});
    const [on, setOn] = useState(false);
    function dodajDane(){
        setDane([...dane, "Nowa wartość"]);
    }
    function zmienWiek(){
        setUser({...user, wiek: user.wiek + 1});
    }
    return (
        <div>
            <button onClick={dodajDane}>
                Dodaj dane
            </button>
            <ul>
                {
                    dane.map((dane, index) =>
                        <li key={index}>{dane}</li>
                    )
                }
            </ul>

            <button onClick={zmienWiek}>
                Dodaj 1 rok
            </button>
            <p>{user.name} ma {user.wiek} lat.</p>

            <button onClick={() => setOn(!on)}>
                {on ? "Włączony" : "Wyłączony"}
            </button>
        </div>
    );
};

export default Cw2;