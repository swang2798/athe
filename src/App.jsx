import React from 'react';
import Calendar from './components/Calendar';
import Drinks from './components/Drinks';
import Food from './components/Food';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>athe</h1>
        <h3>(a • th • eh)</h3>
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
    </div>
  );
}

export default App;
