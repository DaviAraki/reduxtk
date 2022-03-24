import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchPokemon } from './store/ducks/pokemon';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemon('charizard'));
  }, [dispatch]);
  const { pokemonData, errorPokemon, loadingPokemon } = useAppSelector(
    (state) => state.pokemon
  );
  console.log(pokemonData);
  return (
    <div className='App'>
      {errorPokemon ? (
        <>Oh no, there was an error</>
      ) : loadingPokemon ? (
        <>Loading...</>
      ) : pokemonData ? (
        <>
          <h3>{pokemonData.species.name}</h3>
          <img
            src={pokemonData.sprites.front_shiny}
            alt={pokemonData.species.name}
          />
        </>
      ) : null}
    </div>
  );
}
