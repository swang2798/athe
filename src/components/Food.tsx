import React from 'react';

interface MenuItem {
  name: string;
  price: string;
}

const food: MenuItem[] = [
  { name: 'Breakfast Sandwich', price: '3' },
];

const Food: React.FC = () => (
  <div id="food" className="menu-column">
    <h2>Food</h2>
    <div className="menu-list">
      {food.map((item, index) => (
        <div key={index} className="menu-item">
          <span className="menu-name">{item.name}</span>
          <span className="menu-price">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Food;
