import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header/Header';
import { Banner } from '../components/banner/Banner';
import { Gallery } from '../components/gallery/Gallery';
import { Contact } from '../components/contact/Contact';
import { Footer } from '../components/footer/Footer';
import { Menu } from '../components/menu/Menu';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);
