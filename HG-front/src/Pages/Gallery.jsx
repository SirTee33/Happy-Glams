import React, { useState } from 'react';
import "../Components/Styles/Gallery.css"
import GalleryData from '../Components/Assets/GalleryData';
//import GalleryItems from '../Components/GalleryItems/GalleryItems';
const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems =
    filter === 'all'
      ? GalleryData
      : GalleryData.filter((item) => item.category === filter);

  const openLightbox = (item) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);  

  return (
    <div className="gallery-page">
      <h1>Glam in Action</h1>
      <h4>From Natural to Glam-See the Magic</h4>
      <div className="gallery-filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('bridal')}>Bridal</button>
        <button onClick={() => setFilter('photoshoot')}>Photoshoot</button>
        <button onClick={() => setFilter('party')}>Party</button>
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div className="gallery-card" key={item.id}>
            {item.type === 'image' ? (
              <img
                src={item.media}
                alt={item.category}
                onClick={() => openLightbox(item)}
              />
            ) : (
              <video
                src={item.media}
                controls
                onClick={() => openLightbox(item)}
              />
            )}
            <p className="gallery-caption">{item.category}</p>
          </div>
        ))}
      </div>

      {lightboxItem && (
        <div className="lightbox">
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>
          {lightboxItem.type === 'image' ? (
            <img src={lightboxItem.media} alt="preview" />
          ) : (
            <video src={lightboxItem.media} controls autoPlay />
          )}
        </div>
      )} 
    </div>
  );
};

export default Gallery;