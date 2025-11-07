import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cw1 from "./cwiczenia1/Cw1.jsx";
import Cw2 from "./cwiczenia2/Cw2.jsx";
import Cw21 from "./cwiczenia2/Cw2.1.jsx";
import Egzamin from "./cwiczenia3/Egzamin.jsx";
import Cw4 from "./cwiczenia4/Cw4.jsx";
import Cw41 from "./cwiczenia4/Cw41.jsx";
import Klikacz from "./cwiczenia4/Klikacz.jsx";
import Zegar from "./cwiczenia4/Zegar.jsx";
import Licznik from "./cwiczenia4/Licznik.jsx";
import StatusSieci from "./cwiczenia4/StatusSieci.jsx";
import Informacje from "./cwiczenia4/Informacje.jsx";
import Welcome from "./cwiczenia5/Welcome.jsx";
import styled from 'styled-components';
import Card from "./cwiczenia5/Card.jsx";
import UserProfile from "./cwiczenia5/UserProfile.jsx";

const Alert = styled.div`
  background-color: ${(props) => props.bg || "lightgray"};
  color: ${(props) => (props.bg === "black" ? "white" : "black")};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

function App() {
    // const [licznik, setLicznik] = useState(0);
    // const [wiadomosc, setWiadomosc] = useState("");
    // const zmianaWiadomosci = () => {
    //     setLicznik(prev => prev + 1)
    //     setWiadomosc("Wiadomość" + licznik);

    return (
        <>
            {/*<Cw4></Cw4>*/}
            {/*<Cw41></Cw41>*/}
            {/*<Klikacz></Klikacz>*/}
            {/*<Zegar></Zegar>*/}
            {/*<Licznik></Licznik>*/}
            {/*<StatusSieci></StatusSieci>*/}
            {/*<button onClick={zmianaWiadomosci}>Zwiększ wiadomość</button>*/}
            {/*<Informacje wiadomosc={wiadomosc}></Informacje>*/}
            <Alert>Neutral</Alert>
            <Alert bg="black">Kolor czarny</Alert>
            <Alert bg="orange">Kolor pomarańczowy</Alert>
            <Welcome></Welcome>
            <Card></Card>
            <UserProfile></UserProfile>
        </>
    )
}

export default App
