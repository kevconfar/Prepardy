import React, { Component } from "react";
import axios from "axios";


class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [], // KEVIN: added an array for all the games 
      categories: [], // KEVIN: Perhaps an array for Selected games?
      // timer: Boolean
      // 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/games/all") // KEVIN: gets ALL games in the Games collection, so user can browse and choose a game
      .then((response) => { 
        this.setState({
          games: response.data // sets the queried Games array to the games state
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  };

  handleDifficultyChange = (event) => {
    this.setState({ difficulty: event.target.value });
  };

  handleSubmit = (event) => {}; //on submit pulls up Game with selected options

  render() {
    return (
      <div>
        <h1>Welcome to PREPARDY!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h2>Choose Category:</h2>
          </label>

          <select
            value={this.state.category}
            onChange={this.handleCategoryChange}
          >
          {/* map through categories */}
            <option value="">Category 1</option>
            <option value="">Category 1</option>
            <option value="">Category 1</option>
            <option value="">Category 1</option>
          </select>
          <label>
            <h2>Choose Difficulty:</h2>
          </label>
          <select
            value={this.state.difficulty}
            onChange={this.handleDifficultyChange}
          >
            <option value="easy">Easy</option>
            <option value="intermediate">Intermediate</option>
            <option value="hard">Hard</option>
          </select>
          <br />
          <button type="submit">
            <a href="/game"> Start Game </a>
          </button>
        </form>
      </div>
    );
  }
}

export default Welcome;
