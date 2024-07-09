// import React from "react";
// import { Card } from "semantic-ui-react";

// function PokemonCard() {
//   return (
//     <Card>
//       <div>
//         <div className="image">
//           <img alt="oh no!" />
//         </div>
//         <div className="content">
//           <div className="header">POKEMON NAME HERE</div>
//         </div>
//         <div className="extra content">
//           <span>
//             <i className="icon heartbeat red" />
//             POKEMON HP HERE hp
//           </span>
//         </div>
//       </div>
//     </Card>
//   );
// }

// export default PokemonCard;
//Original code



import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ p, handleToggle, isFront }) {
  

  return (
    <Card>
      <div>
        <div className="image"
        onClick={()=>handleToggle(p.id)}
        >
          <img alt="oh no!"
             src={isFront[p.id]? p.sprites.front: p.sprites.back}
          
          />
        </div>
        <div className="content">
          <div className="header">{p.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {p.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
