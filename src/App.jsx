import { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

import CardPokemon from "./Components/CardPokemon";

import "./app.scss";

import axios from "axios";
import ContainerListPokemon from "./Components/ContainerListPokemon";
import ContainerApp from "./Components/ContainerApp";
import ButtonShowMore from "./Components/ButtonShowMore";
import ModalStats from "./Components/ModalStats";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import SlideTypes from "./Components/SlideTypes";

const App = () => {
  const [numberOfPokemons, setNumberOfPokemons] = useState(9);
  const [pokemonList, setPokemonList] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState();

  const loadMorePokemons = () => {
    setNumberOfPokemons(numberOfPokemons + 9);
  };

  const getData = async (number) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${number}`,
      );
      const results = response.data.results;

      const details = await Promise.all(
        results.map((pokemon) => axios.get(pokemon.url)),
      );

      const pokemonDetails = details.map((pokemon) => pokemon.data);
      setPokemonList(pokemonDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(numberOfPokemons);
  }, [numberOfPokemons]);

  return (
    <>
      <Header />
      <main>
        <ContainerApp>
          {/* <Navigation /> */}
          <SlideTypes />
          <ContainerListPokemon>
            {pokemonList.map((pokemon) => (
              <CardPokemon
                key={pokemon.id}
                pokemon={pokemon}
                modal={setModal}
                selectedPokemon={setSelectedPokemon}
              />
            ))}
          </ContainerListPokemon>

          <ButtonShowMore func={loadMorePokemons} />
          <ScrollToTop smooth />
        </ContainerApp>
        {modal && (
          <ModalStats modal={setModal} selectedPokemon={selectedPokemon} />
        )}
      </main>
    </>
  );
};

export default App;
