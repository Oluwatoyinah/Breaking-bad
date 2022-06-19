import React from 'react';
import Character from './Character';

const CharacterList = ({items}) => {

  return (
    <div>
        <div className="container mt-5">
            <div className="row g-3 g-md-5 g-xl-3">
                {items.map(item => <Character key={item.char_id} characters={item} />)}
            </div>
        </div>
    </div>
  )
}

export default CharacterList