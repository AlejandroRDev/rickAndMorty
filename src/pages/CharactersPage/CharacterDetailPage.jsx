import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom';
import './CharacterDetailPage.scss';

const CharacterDetailPage = () => {
    let { idCharacter } = useParams();
    const [ character, setCharacter ] = useState ({});
 


      useEffect(() => {
        const getCharacter = async () => {
            const res = await axios("https://rickandmortyapi.com/api/character/" + idCharacter);
                 setCharacter(res.data)
          }
        getCharacter();
        }, [idCharacter]);
        
        
  return <div className="characterDetail">
  <div className="character-container">
  <img className="character-container-img" src={character.image} alt={character.name}/>
     <h1>{character.name}</h1>
        <p>{character.gender}</p>
        <p>{character.species}</p>
     <p>{character.status}</p>
     </div>
  </div>;
};

export default CharacterDetailPage;
