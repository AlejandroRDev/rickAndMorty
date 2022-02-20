import React from "react";
import { Link } from "react-router-dom";

const CharacterCardDetail = ({ character }) => {
  return (
    <div>
      <Link to="/characters">← Go back to character</Link>
    </div>
  );
};

export default CharacterCardDetail;
