import PokemonDataGrid from '../../components/PokemonDataGrid';
import usePokemons from '@hooks/usePokemons';
import BasicCard from './layout';

function Pokedex() {
  const { pokemons, loading, error, loadPrevious, loadNext, offset } = usePokemons();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <BasicCard loadPrevious={loadPrevious} loadNext={loadNext} offset={offset}>
        <div style={{ marginLeft: '20px' }}>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && <PokemonDataGrid rows={pokemons} />}
        </div>
      </BasicCard>
    </div>
  );
}

export default Pokedex;
