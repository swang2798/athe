import React from 'react';

interface MenuItem {
  name: string;
  price: string;
}

const drinks: MenuItem[] = [
  { name: 'Iced Matcha Latte', price: '2' },
  { name: 'Iced Hojicha Latte', price: '2' },
  { name: 'Maple Oat Latte', price: '1' },
  { name: 'Espresso Tonic', price: '1' },
];

const Drinks: React.FC = () => (
  <div id="drinks" className="menu-column">
    <h2>Drinks</h2>
    <div className="menu-list">
      {drinks.map((item, index) => (
        <div key={index} className="menu-item">
          <span className="menu-name">{item.name}</span>
          <span className="menu-price">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Drinks;
