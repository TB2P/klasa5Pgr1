import React, {useState} from 'react';
import {dane} from "../dane.js";

const Egzamin = () => {
    const [obrazy, setObrazy] = useState(dane);
    const [filtry, setFiltry] = useState({
        kwiaty: true,
        zwierzeta: true,
        samochody: true
    });
    const filtruj = (e) => {
        const {name, checked} = e.target;
        setFiltry((prev) => ({ ...prev, [name]: checked}));
    }
    const filtrujDane = dane.filter(img => {
        if(img.category === 1 && filtry.kwiaty) return true;
        if(img.category === 2 && filtry.zwierzeta) return true;
        if(img.category === 3 && filtry.samochody) return true;
        return false;
    });
    const policzPobrania = (id) => {
        setDane(prevDane => prevDane.map(img =>
            img.id === id ? {...img, downloads: img.downloads + 1} : img
        ));
    }
    return (
        <>
            <h1>Kategorie zdjęć: </h1>
            <label htmlFor="kwiaty">
                <input type="checkbox"
                       onChange={filtruj}
                       checked={filtry.kwiaty} name="kwiaty"/>Kwiaty
            </label>
            <label htmlFor="zwierzeta">
                <input type="checkbox"
                       onChange={filtruj}
                       checked={filtry.zwierzeta} name="zwierzeta"/>Zwierzęta
            </label>
            <label htmlFor="samochody">
                <input type="checkbox"
                       onChange={filtruj}
                       checked={filtry.samochody} name="samochody"/>Samochody
            </label>
            <div className="galeria">
                {
                    filtrujDane.map(item =>
                        <div>
                            <img className="obraz"
                                 src={item.filename}
                                 alt={item.alt}/>
                            <h4>Pobrań: {item.downloads}</h4>
                            <button onClick={() => policzPobrania(item.id)}>
                                Pobierz
                            </button>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Egzamin;