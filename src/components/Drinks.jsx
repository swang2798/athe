import React from 'react';

const Drinks = () => {
  const drinks = [
    { name: 'Iced Matcha Latte', price: '2' },
    { name: 'Iced Hojicha Latte', price: '2' },
    { name: 'Maple Oat Latte', price: '1' },
    { name: 'Espresso Tonic', price: '1' },
  ];

  return (
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
};

export default Drinks;

