import { Layer } from '../layer/Layer';
import './style.css';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drinks-list">
      <div className="drink">
        <div className="drink__product">
          <div className="drink__cup">
            <img src={image} />
          </div>
          <div className="drink__info">
            <h3>{name}</h3>
            <Layer color={'#3295'} label={'smléčná pěna'} />
          </div>
        </div>
        <form className="drink__controls">
          <input type="hidden" className="order-id" value="0" />
          <button className="order-btn">Objednat</button>
        </form>
      </div>

      <div className="drink">
        <div className="drink__product">
          <div className="drink__cup">
            <img src={image} />
          </div>
          <div className="drink__info">
            <h3>{name}</h3>
            <Layer color={'#3295'} label={'smléčná pěna'} />
          </div>
        </div>
        <form className="drink__controls">
          <input type="hidden" className="order-id" value="1" />
          <button className="order-btn">Objednat</button>
        </form>
      </div>

      <div className="drink">
        <div className="drink__product">
          <div className="drink__cup">
            <img src={image} />
          </div>
          <div className="drink__info">
            <h3>{name}</h3>
            <Layer color={'#3295'} label={'smléčná pěna'} />
          </div>
        </div>
        <form className="drink__controls">
          <input type="hidden" className="order-id" value="2" />
          <button className="order-btn">Objednat</button>
        </form>
      </div>
    </div>
  );
};
