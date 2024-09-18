import React from 'react';
import Header from '../components/Header';

// Image data
const images = [
  { url: '/assets/dinos/dino1.webp', title: 'Dino 1' },
  { url: '/assets/dinos/dino2.webp', title: 'Dino 2' },
  { url: '/assets/dinos/dino3.webp', title: 'Dino 3' },
  { url: '/assets/dinos/dino4.webp', title: 'Dino 4' },
  { url: '/assets/dinos/dino5.webp', title: 'Dino 5' },
  { url: '/assets/dinos/dino6.webp', title: 'Dino 6' },
  { url: '/assets/dinos/dino7.webp', title: 'Dino 7' },
  { url: '/assets/dinos/dino8.webp', title: 'Dino 8' },
  { url: '/assets/dinos/dino9.webp', title: 'Dino 9' },
  { url: '/assets/dinos/dino10.webp', title: 'Dino 10' },
  { url: '/assets/dinos/dino11.webp', title: 'Dino 11' },
  { url: '/assets/dinos/dino12.webp', title: 'Dino 12' },
  { url: '/assets/dinos/dino13.webp', title: 'Dino 13' },
  { url: '/assets/dinos/dino14.webp', title: 'Dino 14' },
  { url: '/assets/dinos/dino15.webp', title: 'Dino 15' },
  { url: '/assets/dinos/dino16.webp', title: 'Dino 16' }, // Square images start here
  { url: '/assets/dinos/dino17.webp', title: 'Dino 17' },
  { url: '/assets/dinos/dino18.webp', title: 'Dino 18' },
  { url: '/assets/dinos/dino19.webp', title: 'Dino 19' },
  { url: '/assets/dinos/dino20.webp', title: 'Dino 20' },
  { url: '/assets/dinos/dino21.webp', title: 'Dino 21' },
  { url: '/assets/dinos/dino22.webp', title: 'Dino 22' },
  { url: '/assets/dinos/dino23.webp', title: 'Dino 23' },
  { url: '/assets/dinos/dino24.webp', title: 'Dino 24' },
  { url: '/assets/dinos/dino25.webp', title: 'Dino 25' },
  { url: '/assets/dinos/dino26.webp', title: 'Dino 26' },
  { url: '/assets/dinos/dino27.webp', title: 'Dino 27' },
  { url: '/assets/dinos/dino28.webp', title: 'Dino 28' },
  { url: '/assets/dinos/dino29.webp', title: 'Dino 29' },
  { url: '/assets/dinos/dino30.webp', title: 'Dino 30' },
  { url: '/assets/dinos/dino31.webp', title: 'Dino 31' },
  { url: '/assets/dinos/dino32.webp', title: 'Dino 32' },
  { url: '/assets/dinos/dino33.webp', title: 'Dino 33' },
  { url: '/assets/dinos/dino34.webp', title: 'Dino 34' },
  { url: '/assets/dinos/dino35.webp', title: 'Dino 35' },
  { url: '/assets/dinos/dino36.webp', title: 'Dino 36' },
];

// Shuffle function to randomize image order
const shuffleImages = (images) => {
  return images.sort(() => Math.random() - 0.5);
};

const Dinos = () => {
  // Shuffle the images before rendering
  const shuffledImages = shuffleImages([...images]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <h1 className="text-4xl font-bold text-center mt-8">Dinosaurus</h1>

      {/* Masonry Layout */}
      <div className="px-4 py-8 columns-1 sm:columns-2 lg:columns-4 gap-4">
        {shuffledImages.map((img, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="mt-2 text-center text-lg">{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dinos;
