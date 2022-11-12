import '../styles/PokeCardStyle.css';
import pfp from '../assets/images/PokemonRed.webp';
import typeIcon from '../assets/images/FireIcon.png';

function pokemonCard() {
    return (
        <div class="poke-card-holder">
            <div class="icon-wrapper">
                <img
                 src={pfp} 
                 class="pfp" 
                 alt="userProfilePicture"
                />
                <p class="pokemon-name">
                    Charmander
                </p>
                <img src={typeIcon} class="type-icon" 
                alt="Element"
                />
            </div>
        </div>
    )
};

export default pokemonCard;