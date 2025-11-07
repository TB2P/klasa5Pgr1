import React from 'react';
import {users} from '../data.js';

const Cw1 = () => {
    const totalSalary =
        users.filter(user => user.age < 25).map(user => user.salary)
        .reduce((acc, salary) => acc + salary, 0);
    const averageSalary =
        users.map(user => user.salary)
        .reduce((sum, salary) => sum + salary, 0);
    const search = "an";
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div>
            <ul>
                {
                    users.filter(user => user.age < 25)
                        .map((user) =>
                        <li key={user.id}
                            style={{ color: user.salary > 4500 ? "blueviolet" : "green",
                                border: "1px solid black", margin: "5px", padding: "5px" }}>
                            {user.name} {user.age} {user.city} {user.salary}
                        </li>)
                }
            </ul>
            <h3>Koszty zarobków: {totalSalary}</h3>
            <ul>
                {
                    users.filter(user => user.name.startsWith("P"))
                        .map((user) =>
                            <li key={user.id}
                                style={{ color: "darkblue"}}>
                                {user.name} {user.age} {user.city} {user.salary}
                            </li>)
                }
            </ul>
            <h4>zad1 i 2</h4>
            <ul>
                {
                    users.filter(user => user.city === "Wrocław" && user.age < 28)
                        .map((user) =>
                            <li key={user.id}
                                style={{ color: "darkblue"}}>
                                {user.name} {user.age}
                            </li>)
                }
            </ul>
            <h4>Średnia płaca: {averageSalary / users.lenght}</h4>
            <h4>zad4 i 6</h4>
            <ul>
                {
                    users.filter(user => user.salary > 6000 && user.name.startsWith("M"))
                        .map((user) =>
                            <li key={user.id}
                                style={{ color: "darkblue"}}>
                                {user.name} {user.age}
                            </li>)
                }
            </ul>
            <h4>zad7 i 8</h4>
            <table>
                {
                    users.sort((a, b) => a.age - b.age)
                        .filter(user => user.salary > 5000 && user.salary < 6000)
                        .map((user) =>
                            <td key={user.id}
                                style={{border: "1px solid black", margin: "5px", padding: "5px"}}>
                                {user.name} {user.age}
                            </td>)
                }
            </table>
            <h4>zad10</h4>
            <ul>
                {
                    users.filter(user => user.salary > 5000)
                        .map((user) =>
                            <li key={user.id}
                                style={{ color: "darkblue"}}>
                                <strong>{user.name}</strong>
                            </li>)
                }
            </ul>
        </div>

    );
};

export default Cw1;