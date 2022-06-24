import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, frontSprite, backSprite}) {
  const [isBackSprite, setIsBackSprite] = useState(false);

  function handleSpriteChange(){
    setIsBackSprite(isBackSprite => !isBackSprite);
  }

  return (
    <Card onClick={handleSpriteChange}>
      <div>
        <div className="image">
          <img 
              src={isBackSprite ? backSprite : frontSprite} 
              alt="oh no!" 
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
