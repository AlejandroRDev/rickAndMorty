import "./App.css";
import {  Route, Routes, BrowserRouter,  } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CharactersPage } from "./pages/CharactersPage/CharactersPage";
import { Header } from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import CharacterDetailPage from "./pages/CharactersPage/CharacterDetailPage";
import { ProfileContext } from "./context/ProfileContext";
import { useState } from "react";

const profileBase = {
 name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"}



function App() {
  const [profile, setProfile] = useState(profileBase)

  return (
    <ProfileContext.Provider value={ {profile, setProfile} }>

    <BrowserRouter>
        <Header />
      
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />

          <Route path="Characters" element={<CharactersPage />} />
          <Route path="/Characters/:idCharacter" element={<CharacterDetailPage />} />

          <Route path="About" element={<AboutPage />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
    </ProfileContext.Provider>
  );
}

export default App;
