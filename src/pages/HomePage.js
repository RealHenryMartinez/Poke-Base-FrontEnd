
import '../styles/HomePageStyle.css'
import PokemonCard from '../components/PokeCard';
import NavBar from '../components/SideBar';

function homePage() {
  return (
    <div className="App">
        <NavBar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p id="app-title">
          PokeBase
        </p>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default homePage;