import { OrderItems } from '../orderItems/OrderItems';

export const Order = ({ items }) => {
  return (
    <div className="order__content container">
      <h1>Vaše objedávnka</h1>
      <p className="empty-order empty-order--hide">
        Zatím nemáte nic objednáno
      </p>
      <div className="order__items">
        {items.map((objednat) => {
          return <OrderItems name={objednat.name} image={objednat.image} />;
        })}
      </div>
    </div>
  );
};
