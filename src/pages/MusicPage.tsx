import React from 'react';

const MusicPage: React.FC = () => (
  <div className="music-page">
    <iframe
      style={{ borderRadius: 20 }}
      src="https://open.spotify.com/embed/playlist/5Be40bWTfTqib2Fd5CFqF2?utm_source=generator&theme=0"
      width="100%"
      height="800px"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </div>
);

export default MusicPage;
