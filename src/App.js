import logo from "./logo.svg";
import "./App.css";
import User from "./user";
import PokemonList from "./PokemonList";
import { DisplayLocations } from "./DisplayLocation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>My first Apollo app 🚀</h2>
        </div>
      </header>
      <DisplayLocations />
    </div>
  );
}

export default App;
