interface PokemonCardsProps {
  pokemon : {
    name : string,
    imgSrc? : string,
  }
};

function PokemonCard({pokemon}: PokemonCardsProps){
    return <figure>
        {pokemon.imgSrc != null ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
        </figure>
    
};
export default PokemonCard;