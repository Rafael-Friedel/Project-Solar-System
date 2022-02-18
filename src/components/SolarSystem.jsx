import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planets-dad">
        <Title headline="Planetas" />
        <section className="planets">
          {planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
