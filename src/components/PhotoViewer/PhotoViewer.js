import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PhotoViewer.css';

// Category photo sets — the local asset folders keep their original file
// names (photo1.jpeg, photo2.jpeg, ...), so new photos can simply be
// dropped into these folders to replace the placeholders.
import desktopPhoto1 from '../../assets/ResinPics/photo1.jpeg';
import desktopPhoto2 from '../../assets/ResinPics/photo2.jpeg';
import desktopPhoto3 from '../../assets/ResinPics/photo3.jpeg';
import desktopPhoto4 from '../../assets/ResinPics/photo4.jpeg';

import miniPhoto1 from '../../assets/Miniplanterspics/photo1.jpeg';
import miniPhoto2 from '../../assets/Miniplanterspics/photo2.jpeg';
import miniPhoto3 from '../../assets/Miniplanterspics/photo3.jpeg';
import miniPhoto4 from '../../assets/Miniplanterspics/photo4.jpeg';

import monitorPhoto1 from '../../assets/Ceramicpics/photo1.jpeg';
import monitorPhoto2 from '../../assets/Ceramicpics/photo2.jpeg';
import monitorPhoto3 from '../../assets/Ceramicpics/photo3.jpeg';
import monitorPhoto4 from '../../assets/Ceramicpics/photo4.jpeg';

import gamingPhoto1 from '../../assets/Fiberglasspics/photo1.jpeg';
import gamingPhoto2 from '../../assets/Fiberglasspics/photo2.jpeg';
import gamingPhoto3 from '../../assets/Fiberglasspics/photo3.jpeg';
import gamingPhoto4 from '../../assets/Fiberglasspics/photo4.jpeg';

import accessoriesPhoto1 from '../../assets/Accessories/photo1.png';

import otherTechPhoto1 from '../../assets/OtherTechPics/photo1.jpeg';
import otherTechPhoto2 from '../../assets/OtherTechPics/photo2.jpeg';
import otherTechPhoto3 from '../../assets/OtherTechPics/photo3.jpeg';
import otherTechPhoto4 from '../../assets/OtherTechPics/photo4.jpeg';

// Image sets for different product categories
const imageSets = {
  Desktop: [desktopPhoto1, desktopPhoto2, desktopPhoto3, desktopPhoto4],
  Mini: [miniPhoto1, miniPhoto2, miniPhoto3, miniPhoto4],
  Monitor: [monitorPhoto1, monitorPhoto2, monitorPhoto3, monitorPhoto4],
  Gaming: [gamingPhoto1, gamingPhoto2, gamingPhoto3, gamingPhoto4],
  Accessories: [accessoriesPhoto1],
  OtherTech: [otherTechPhoto1, otherTechPhoto2, otherTechPhoto3, otherTechPhoto4],
};

const PhotoViewer = ({ category, label }) => {
  const images = imageSets[category] || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return <p>No images available.</p>;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const displayLabel = label || category;
  const hasMultiple = images.length > 1;

  return (
    <div className="photo-viewer">
      <h2>{displayLabel} Photos</h2>
      <div className="photo-container">
        {hasMultiple && (
          <button onClick={handlePrev} className="nav-button">&lt;</button>
        )}
        <img src={images[currentIndex]} alt={displayLabel} className="photo" />
        {hasMultiple && (
          <button onClick={handleNext} className="nav-button">&gt;</button>
        )}
      </div>
      {hasMultiple && (
        <div className="photo-counter">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

PhotoViewer.propTypes = {
  category: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default PhotoViewer;
