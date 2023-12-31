import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Main = () => {
  const pizzas = pizzaData;
  // const pizzas = [];

  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {pizzas?.length > 0 ? (
        <ul className='pizzas'>
          {pizzas.map((pizza) => (
            <Pizza key={pizza.name} pizza={pizza} />
          ))}
        </ul>
      ) : (
        <p>We are still working on our menu. Please come back later 🍕`</p>
      )}
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>We are close. Come back tomorrow</p>
      )}
    </footer>
  );
};

const Order = ({ closeHour }) => {
  return (
    <div className='order'>
      <p>We are open until {closeHour}:00. Come visit us or order online.</p>
      <button className='btn' type='button'>
        Order
      </button>
    </div>
  );
};

const Pizza = ({ pizza }) => {
  /* if (pizza.soldOut) return null; */

  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={`./${pizza.photoName}`} alt={`pizza ${pizza.name}.`} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
      </div>
    </li>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
