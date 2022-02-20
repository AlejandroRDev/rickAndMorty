import React, { useContext } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { Link } from "react-router-dom";
import "./Gallery.scss";
const Gallery = ({ list }) => {
  const { setProfile } = useContext(ProfileContext);

  return (
    <div className="gallery-container">
      {list.map((character) => {
        return (
          <div className="character-container">
            <button onClick={() => setProfile(character)}>Mute Profile</button>
            
              <div className="gallery-figure" key={character.id}>
              <Link to={"/Characters/" + character.id}>
                <img
                  className="gallery-container__img"
                  src={character.image}
                  alt={character.name}
                />
               </Link>
                <p>{character.name}</p>
              </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
