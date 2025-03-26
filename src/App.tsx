import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContenedorPokemones } from './contenedores/ContenedorPokemones';
import { DetallesPokemon } from './componentes/DetallesPokemon';
import { Inicio } from './componentes/Inicio';

export function App() {
  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/pokemones" element={<ContenedorPokemones />} />
            <Route path="/pokemon/:id" element={<DetallesPokemon />} />
          </Routes>
        </main>
      </Router>
    </ApolloProvider>
  );
}