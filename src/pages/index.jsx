import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header/Header';
import { Banner } from '../components/banner/Banner';
import { Gallery } from '../components/gallery/Gallery';
import { Contact } from '../components/contact/Contact';
import { Footer } from '../components/footer/Footer';
import { Menu } from '../components/menu/Menu';
import { Drink } from '../components/drink';

const response = await fetch('http://localhost:4000/api/drinks');
const { data } = await response.json();
console.log(data);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={data} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const button = document.querySelector('.nav-btn');
button.addEventListener('click', () => {
  const nav = document.querySelector('.rollout-nav');
  nav.classList.toggle('nav-closed');
});

const nav = document.querySelector('.rollout-nav');
nav.addEventListener('click', () => {
  nav.classList.add('nav-closed');
});
