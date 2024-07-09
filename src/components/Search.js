// import React from "react";

// function Search() {
//   return (
//     <div className="ui search">
//       <div className="ui icon input">
//         <input className="prompt" />
//         <i className="search icon" />
//       </div>
//     </div>
//   );
// }

// export default Search;
//Original code




import React from "react";

function Search({ setSearchCard, searchCard }) {
  // const searchFiltered = pokemons.filter
  //   (p => p.name.toLowerCase().includes(searchCard.toLowerCase()))
   return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          value={searchCard}
          onChange={e=> setSearchCard(e.target.value)}
          className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
