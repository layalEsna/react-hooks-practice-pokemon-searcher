// import React from "react";
// import PokemonPage from "./PokemonPage";

// function App() {
//   return (
//     <div className="App">
//       <PokemonPage />
//     </div>
//   );
// }

// export default App;
//ORiginal code



import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isFront, toggleCard] = useState({});
  const [searchCard, setSearchCard] = useState('');
  const [newToy, setNewToy] = useState({
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: ''
    }
  });

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(data => {
        setPokemons(data);
      })
      .catch(e => console.error(e));
  }, []);

  function handleToggle(pId) {
    toggleCard(prevState => ({
      ...prevState, [pId]: !prevState[pId]
    }));
  }

  function handleSubmitOrInput(e) {
    e.preventDefault();
    if (e.type === 'submit') {
      fetch('http://localhost:3001/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newToy)
      })
        .then(res => res.json())
        .then(data => {
          setPokemons(prev => [...prev, data]);
          setNewToy({
            name: '',
            hp: '',
            sprites: {
              front: '',
              back: ''
            }
          });
        })
        .catch(e => console.error(e));
    } else {
      const { name, value } = e.target;
     
      if (name.startsWith('sprites.')) {
        const key = name.split('.')[1];
        setNewToy(prev => ({
          ...prev,
          sprites: {
            ...prev.sprites,
            [key]: value
          }
        }));
      } else {
        setNewToy(prev => ({
          ...prev,
          [name]: value
        }));
      }
    }
  }

  const filteredPokemons = pokemons.filter(p =>
    p.name.toLowerCase().includes(searchCard.toLowerCase())
  );

  return (
    <div className="App">
      <PokemonPage
        pokemons={filteredPokemons}
        handleToggle={handleToggle}
        isFront={isFront}
        setSearchCard={setSearchCard}
        searchCard={searchCard}
        handleSubmitOrInput={handleSubmitOrInput}
        newToy={newToy}
      />
    </div>
  );
}

export default App;

