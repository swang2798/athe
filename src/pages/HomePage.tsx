import React from 'react';

const text = 'EVERYDAY ATHE ';

const HomePage: React.FC = () => (
  <div className="home">
    <div className="marquee">
      <span>{text.repeat(10)}</span>
    </div>
    <div className="marquee reverse">
      <span>{text.repeat(10)}</span>
    </div>
    <div className="marquee">
      <span>{text.repeat(10)}</span>
    </div>
  </div>
);

export default HomePage;
