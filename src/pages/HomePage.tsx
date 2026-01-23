import React from 'react';

const spiralText = 'EVERYDAY ATHE ';

const HomePage: React.FC = () => (
  <div className="home">
    <div className="spiral">
      {spiralText.split('').map((char, i) => (
        <span key={i} style={{ transform: `rotate(${i * (360 / spiralText.length)}deg) translateY(-120px)` }}>
          {char}
        </span>
      ))}
    </div>
    <div className="home-images">
      <img src="https://res.cloudinary.com/dlenbkeui/image/upload/v1769138292/Scanned_Document-1_mopo3y.png" alt="" />
      <img src="https://res.cloudinary.com/dlenbkeui/image/upload/v1769138298/Scanned_Document-6_y9ldfp.png" alt="" />
    </div>
  </div>
);

export default HomePage;
