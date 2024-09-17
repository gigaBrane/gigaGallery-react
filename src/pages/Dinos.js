import React from 'react';
import Header from '../components/Header';

// Image data
const images = [
  { url: '/assets/dinos/dino1.png', title: 'Dino 1' },
  { url: '/assets/dinos/dino2.png', title: 'Dino 2' },
  { url: '/assets/dinos/dino3.png', title: 'Dino 3' },
  { url: '/assets/dinos/dino4.png', title: 'Dino 4' },
  { url: '/assets/dinos/dino5.png', title: 'Dino 5' },
  { url: '/assets/dinos/dino6.png', title: 'Dino 6' },
  { url: '/assets/dinos/dino7.png', title: 'Dino 7' },
  { url: '/assets/dinos/dino8.png', title: 'Dino 8' },
  { url: '/assets/dinos/dino9.png', title: 'Dino 9' },
  { url: '/assets/dinos/dino10.png', title: 'Dino 10' },
  { url: '/assets/dinos/dino11.png', title: 'Dino 11' },
  { url: '/assets/dinos/dino12.png', title: 'Dino 12' },
  { url: '/assets/dinos/dino13.png', title: 'Dino 13' },
  { url: '/assets/dinos/dino14.png', title: 'Dino 14' },
  { url: '/assets/dinos/dino15.png', title: 'Dino 15' },
  { url: '/assets/dinos/dino16.png', title: 'Dino 16' }, // Square images start here
  { url: '/assets/dinos/dino17.png', title: 'Dino 17' },
  { url: '/assets/dinos/dino18.png', title: 'Dino 18' },
  { url: '/assets/dinos/dino19.png', title: 'Dino 19' },
  { url: '/assets/dinos/dino20.png', title: 'Dino 20' },
  { url: '/assets/dinos/dino21.png', title: 'Dino 21' },
  { url: '/assets/dinos/dino22.png', title: 'Dino 22' },
  { url: '/assets/dinos/dino23.png', title: 'Dino 23' },
  { url: '/assets/dinos/dino24.png', title: 'Dino 24' },
  { url: '/assets/dinos/dino25.png', title: 'Dino 25' },
  { url: '/assets/dinos/dino26.png', title: 'Dino 26' },
  { url: '/assets/dinos/dino27.png', title: 'Dino 27' },
  { url: '/assets/dinos/dino28.png', title: 'Dino 28' },
  { url: '/assets/dinos/dino29.png', title: 'Dino 29' },
  { url: '/assets/dinos/dino30.png', title: 'Dino 30' },
  { url: '/assets/dinos/dino31.png', title: 'Dino 31' },
  { url: '/assets/dinos/dino32.png', title: 'Dino 32' },
  { url: '/assets/dinos/dino33.png', title: 'Dino 33' },
  { url: '/assets/dinos/dino34.png', title: 'Dino 34' },
  { url: '/assets/dinos/dino35.png', title: 'Dino 35' },
  { url: '/assets/dinos/dino36.png', title: 'Dino 36' },
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
