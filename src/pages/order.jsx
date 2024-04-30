import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />
      <main className="order"></main>
      <Footer />
    </div>
  </div>,
);
