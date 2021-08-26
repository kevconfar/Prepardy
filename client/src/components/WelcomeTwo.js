// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // perhaps incorporate components for RandomGame, 

// function Welcome() {
//     const [selector, setSelector] = useState("season") // value will be "season", "random", or "next"
//     const [season, setSeason] = useState(37) // Season is auto set to 37 
//     const [games, setGames] = useState([]);
//     const [selectedGame, selectGame] = useState(games[0]) // the auto-selected/user-selected {Game} is stored here

//     const api = { // depending on the state of Selector, different routes will be used to pull up games
//         season: `localhost:3000/games/season/${this.state.season}`,
//         random: "localhost:3000/games/random",
//     }
    
//     useEffect(async () => {
//         const result = await axios(
//             api[this.state.selector] // e.g. api['season'] will pull up all Game docs from the specified season
//         );

//         setGames(result.data);
//     });

//     // a way to choose your season number and set it to the season_state

//     // a way to choose your game and set it to the game_state

//     // a way to view the categories in the selected game

//     // when the user finalizes their choice, the selected_game will be passed to Gameboard as a prop



//     return (
//         <ul>
//             {data.hits.map(item => (
//                 <li key={item.objectID}>
//                     <a href={item.url}>{item.title}</a>
//                 </li>
//             ))}
//         </ul>
//     );
// }

// export default App;


import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import {
    Col,
    Row,
    Form,
    Container,
    Button,
    Card,
    ListGroup
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="whole">
            <br></br>
            <br></br>
            <Container style={{ background: "clear" }}>
                <Container style={{ position: "left" }}>
                    <Button className="button" border="black" variant="primary" size="lg">
                        CUSTOM
                    </Button>{" "}
                    <Button className="button" variant="primary" size="lg">
                        RANDOM
                    </Button>{" "}
                </Container>
                <br></br>
                <br></br>
                <Container>
                    {/* <Row> */}
                    <Col>
                        <Card style={{ width: "13rem" }}>
                            <Card.Header>GAME OPTIONS</Card.Header>
                            <Form.Control
                                variant="primary"
                                type="text"
                                placeholder="SEASON"
                            />
                            <Form.Control type="text" placeholder="DATE" />
                        </Card>
                    </Col>
                    <br></br>
                    <br></br>
                    <Col>
                        <Row>
                            <Card style={{ width: "10rem" }}>
                                <Card.Header>YOUR</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> CATEGORY #1</ListGroup.Item>
                                    <ListGroup.Item> CATEGORY #2</ListGroup.Item>
                                    <ListGroup.Item> CATEGORY #3 </ListGroup.Item>
                                    <ListGroup.Item> CATEGORY #4 </ListGroup.Item>
                                    <ListGroup.Item> CATEGORY #5 </ListGroup.Item>
                                </ListGroup>
                            </Card>
                            <Card style={{ width: "10rem" }}>
                                <Card.Header>CATEGORIES</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> CATEGORY #6</ListGroup.Item>
                                    <ListGroup.Item> CATEGORY #7</ListGroup.Item>
                                    <ListGroup.Item> CATEGORY #8</ListGroup.Item>
                                    <ListGroup.Item> CATEGORY #9 </ListGroup.Item>
                                    <ListGroup.Item> CATEGORY #10 </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Row>
                    </Col>
                    {/* </Row> */}
                </Container>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
