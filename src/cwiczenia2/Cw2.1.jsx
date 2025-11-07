import React, {use, useState} from 'react';

const Cw21 = () => {
    const [kroki, setKroki] =
        useState({krok: 0})
    function dodajKroki(){
        setKroki({...kroki, krok: kroki.krok + 1});
    }

    const [pokaz, setPokaz] = useState(false);

    const [klik, setKlik] = useState({kliki: 0});
    function dodajKlik(){
        setKlik({...klik, kliki: klik.kliki + 1});
    }
    function zresetujKlik(){
        setKlik({...klik, kliki: 0});
    }
    const [like, setLike] =
        useState({lik: 0})
    const [dislike, setDislike] =
        useState({dislik: 0})
    function dodajLike(){
        setLike({...like, lik: like.lik + 1});
    }
    function dodajDislike(){
        setDislike({...dislike, dislik: dislike.dislik + 1});
    }
    const [sek, setSek] =
        useState({seks: 5})
    function ustawSekundy(){
        setSek({...sek, seks: sek.seks + 5});
    }

    const [backgroundColor, setBackgroundColor] = useState('#f0f0f0');
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan'];
    const changeColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        setBackgroundColor(randomColor);

    };
    return (
        <div style={{backgroundColor: backgroundColor}}>
            <button onClick={dodajKroki}>
                Dodaj kroki
            </button>
            <p>Zrobiłeś {kroki.krok} kroków</p>

            <button onClick={() => setPokaz(!pokaz)}>
                Kliknij
            </button>
            <p>{pokaz ? "Hello React" : " "}</p>

            <button onClick={dodajKlik} onDoubleClick={zresetujKlik}>
                Dodaj albo zresetuj
            </button>
            <p>Liczba kliknięć {klik.kliki}</p>

            <button onClick={changeColor}>Zmień kolor</button>

            <button onClick={dodajDislike}>
                Dislike: {dislike.dislik}
            </button>
            <button onClick={dodajLike}>
                Like: {like.lik}
            </button>

            <button onClick={ustawSekundy}>
                Czas: {sek.seks}
            </button>

            <p>Wpisz imię: </p>
            <input
                type="text"
                id="imie"/>
            <p>Wpisz wiek: </p>
            <input
                type="text"
                id="wiek"/>

        </div>

    );
};

export default Cw21;