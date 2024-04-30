import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Order } from '../components/order/Order';

const response = await fetch(
  'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
);
const { data } = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />
      <main className="order">
        <Order items={data} />
      </main>
      <Footer />
    </div>
  </div>,
);
