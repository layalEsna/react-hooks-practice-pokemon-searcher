// import React from "react";
// import { Form } from "semantic-ui-react";

// function PokemonForm() {
//   return (
//     <div>
//       <h3>Add a Pokemon!</h3>
//       <Form
//         onSubmit={() => {
//           console.log("submitting form...");
//         }}
//       >
//         <Form.Group widths="equal">
//           <Form.Input fluid label="Name" placeholder="Name" name="name" />
//           <Form.Input fluid label="hp" placeholder="hp" name="hp" />
//           <Form.Input
//             fluid
//             label="Front Image URL"
//             placeholder="url"
//             name="frontUrl"
//           />
//           <Form.Input
//             fluid
//             label="Back Image URL"
//             placeholder="url"
//             name="backUrl"
//           />
//         </Form.Group>
//         <Form.Button>Submit</Form.Button>
//       </Form>
//     </div>
//   );
// }

// export default PokemonForm;
//original code


import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleSubmitOrInput, newToy}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmitOrInput}
      >
        <Form.Group widths="equal">
          <Form.Input fluid onChange={handleSubmitOrInput} label="Name" placeholder="Name" name="name" value={newToy.name } />
          <Form.Input fluid label="hp"
            onChange={handleSubmitOrInput}
            placeholder="hp" name="hp" value={newToy.hp} />
          <Form.Input fluid
            label="Front Image URL"
            placeholder="url"
          //name="frontUrl"
          name="sprites.front"
            value={newToy.sprites.front}
            onChange={handleSubmitOrInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            //name="backUrl"
            name="sprites.back" 
            value={newToy.sprites.back}
            onChange={handleSubmitOrInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;



// function submitOrInputField(e) {
//   e.preventDefault()
//   if (e.type === 'submit') {
//     fetch('http://localhost:3001/toys',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'

//         },
//         body: JSON.stringify(newToy)
//       })
//       .then(res => res.json())
//       .then(newToy => {
//         setToys([...toys, newToy])
//         setNewToy({
//           name: '',
//           image: '',
//           likes: 0
//         })
//       })
//       .catch(e => console.error(e))
//   } else {
//     const name = e.target.name
//     const value = e.target.value
//     setNewToy(toys => (
//       { ...toys, [name]: value })
//     )
//   }
// }