import charizard from "./../charizard.webp";
import pikachu from "./../pikachu.webp";
import bulbasaur from "./../bulbasaur.webp";
import squirtle from "./../squirtle.webp";

const pokemons = [
  {
    id: 6,
    name: "Charizard",
    description:
      'Charizard se assemelha a um grande tradicional dragão europeu. Apesar da semelhança, Charizard é explicitamente um Pokémon dos tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma "Mega Charizard X"; No entanto, ele pode aprender ataques do tipo Dragão.',
    color:
      "linear-gradient(to right, #ee8328, #eb7521, #e8661c, #e55519, #e14318)",
    image: charizard,
    types: ["fire", "flying"],
  },
  {
    id: 25,
    name: "Pikachu",
    description:
      "Pikachu é um Pokémon do tipo Elétrico. Ele é conhecido por sua aparência fofa e sua habilidade de liberar choques elétricos das bochechas. É um dos Pokémon mais populares e mascote oficial da franquia.",
    color:
      "linear-gradient(to right, #f9d649, #f9cc33, #f8c11e, #f7b507, #f6a700)",
    image: pikachu,
    types: ["electric"],
  },
  {
    id: 1,
    name: "Bulbassaur",
    description:
      "Bulbassaur é um Pokémon do tipo Planta e Venenoso. Ele é conhecido por ter uma planta em suas costas que cresce à medida que ele evolui. É o Pokémon inicial da região de Kanto.",
    color:
      "linear-gradient(to right, #78c850, #66b440, #55a030, #449020, #388518)",
    image: bulbasaur,
    types: ["grass", "poison"],
  },
  {
    id: 7,
    name: "Squirtle",
    description:
      "Squirtle é um Pokémon do tipo Água. Ele é conhecido por sua concha protetora e sua habilidade de disparar água com grande precisão. É um dos Pokémon iniciais da região de Kanto.",
    color:
      "linear-gradient(to right, #6890f0, #5a82e0, #4b75d0, #3e67c0, #335bb0)",
    image: squirtle,
    types: ["water"],
  },
];

export default pokemons;
