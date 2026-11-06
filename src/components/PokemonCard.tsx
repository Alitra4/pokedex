import "../css/PokemonCard.css";

interface PokemonCardsProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({ pokemon }: PokemonCardsProps) {
  return (
    <figure className="PokemonCard-figure">
      {pokemon.imgSrc != null ? (
        <img
          src={pokemon.imgSrc}
          alt={pokemon.name}
          className="PokemonCard-image"
        />
      ) : (
        <p>???</p>
      )}
      <figcaption className="PokemonCard-titre">{pokemon.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;
