import React from "react";
import Filter from "./Filter";
import Navbar from "./Navbar";

class App extends React.Component {
  state = {
    movies: [],
    genre: [],
  };

  componentDidMount() {
    let f = async () => {
      let responseGenre = await fetch("/genre");
      let responseMovies = await fetch("/movies");
      let moviesJson = await responseMovies.json();
      let genreJson = await responseGenre.json();

      this.setState({ movies: moviesJson, genre: genreJson });
    };
    f();
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="row"></div>
        <Filter genreData={this.state.genre}/>
      </div>
    );
  }
}

export default App;
