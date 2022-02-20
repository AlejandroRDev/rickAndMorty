import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination/Pagination";
import Buscador from "../../components/Buscador/Buscador";

export const CharactersPage = () => {
  const [texto, setTexto] = useState("");
  const [characters, setCharacters] = useState([]);

  const getCharacters = async (newPage) => {
    const res = await axios(
      "https://rickandmortyapi.com/api/character?page=" + newPage
    );

    setCharacters(res.data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const charactersFilter = characters.filter((characters) =>
  characters.name.toLowerCase().includes(texto.toLowerCase())
  );

  return (
    <div>
      <Buscador texto={texto} setTexto={setTexto} />
      <Gallery list={charactersFilter} />
      <Pagination pagination={getCharacters} />
    </div>
  );
};
