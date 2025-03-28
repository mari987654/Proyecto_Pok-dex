import { Link } from 'react-router-dom';
import './Inicio.css'; 

export function Inicio() {
  return (
    <div className="inicio-container">
      <div className="inicio-content">
        <h1>Bienvenido a la Pokédex</h1>
        <p>Explora el maravilloso mundo de los Pokémon</p>
        <p>En tus manos ahora reposa el último modelo de Pokédex, una maravilla tecnológica diseñada para entrenadores que buscan ir más allá de lo conocido.</p>
        <Link to="/pokemones" className="empezar-btn">
          Empezar Pokédex
        </Link>
      </div>
    </div>
  );
}