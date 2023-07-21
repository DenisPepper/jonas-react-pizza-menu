import React from 'react';
import ReactDOM from 'react-dom/client';

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
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <section>
        <h2>Our menu</h2>
        <ul>
          {pizzaData.map((item) => <Pizza key={item.name} name={item.name} photoName={item.photoName} ingredients={item.ingredients}/>)}
        </ul>
      </section>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>{new Date().toLocaleDateString()}. We are currently open!</footer>
  );
};

const Pizza = ({name, photoName, ingredients}) => {
  return (
    <article>
      <h3>{name}</h3>
      <img
        src={`./${photoName}`}
        alt={`pizza ${name}.`}
        width={400}
        height={400}
      />
      <p>{ingredients}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
