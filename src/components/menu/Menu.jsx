import { Drink } from '../drink';
import './Menu.css';
export const Menu = ({ drinks }) => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
      </div>
      <div className="drinks-list">
        {drinks.map((drink) => {
          return (
            <Drink
              key={drink.id}
              id={drink.id}
              name={drink.name}
              ordered={drink.ordered}
              image={drink.image}
              layers={drink.layers}
            />
          );
        })}
      </div>
    </section>
  );
};
