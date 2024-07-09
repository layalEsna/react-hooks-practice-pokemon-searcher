// import React from "react";
// import PokemonCollection from "./PokemonCollection";
// import PokemonForm from "./PokemonForm";
// import Search from "./Search";
// import { Container } from "semantic-ui-react";

// function PokemonPage() {
//   return (
//     <Container>
//       <h1>Pokemon Searcher</h1>
//       <br />
//       <PokemonForm />
//       <br />
//       <Search />
//       <br />
//       <PokemonCollection />
//     </Container>
//   );
// }

// export default PokemonPage;
//original code




import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemons, handleToggle, isFront, setSearchCard, searchCard ,  handleSubmitOrInput, newToy}) {
  // const searchFiltered = pokemons.filter
  //   (p => p.name.toLowerCase().includes(searchCard.toLowerCase()))
  const searchFiltered = pokemons.filter
  (p => p.name.toLowerCase().includes(searchCard.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        handleSubmitOrInput={handleSubmitOrInput}
        newToy={newToy}
    
      />
      <br />
      <Search
        setSearchCard={setSearchCard}
        searchCard={searchCard}
     //searchFiltered={searchFiltered}
      />
      <br />
      <PokemonCollection
        pokemons={searchFiltered}
        handleToggle={handleToggle}
        isFront={isFront}
      //   handleSubmitOrInput={handleSubmitOrInput}
      //   newToy={newToy}
     />
    </Container>
  );
}

export default PokemonPage;
