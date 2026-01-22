import React from 'react';
import Calendar from '../components/Calendar';
import Drinks from '../components/Drinks';
import Food from '../components/Food';

const CafePage: React.FC = () => (
  <>
    <div className="container">
      <Calendar />
    </div>
    <section className="menu-section">
      <div className="container">
        <div className="menu-grid">
          <Drinks />
          <Food />
        </div>
      </div>
    </section>
  </>
);

export default CafePage;
