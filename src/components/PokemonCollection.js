// import React from "react";
// import PokemonCard from "./PokemonCard";
// import { Card } from "semantic-ui-react";

// function PokemonCollection() {
//   return (
//     <Card.Group itemsPerRow={6}>
//       <h1>Hello From Pokemon Collection</h1>
//     </Card.Group>
//   );
// }

// export default PokemonCollection;
//Original code


import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons, handleToggle, isFront}) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemons.map(p => (
        <PokemonCard
          key={p.id}
          p={p}
          handleToggle={handleToggle}
          isFront={isFront}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
