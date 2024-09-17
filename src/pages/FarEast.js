import React from 'react';
import Header from '../components/Header';

// Image data
const images = [
  { url: '/assets/archAsia/asia1.png', title: 'Abstract Art 1' },
  { url: '/assets/archAsia/asia2.png', title: 'Abstract Art 2' },
  { url: '/assets/archAsia/asia3.png', title: 'Abstract Art 3' },
  { url: '/assets/archAsia/asia4.png', title: 'Abstract Art 4' },
  { url: '/assets/archAsia/asia5.png', title: 'Abstract Art 5' },
  { url: '/assets/archAsia/asia6.png', title: 'Abstract Art 6' },
  { url: '/assets/archAsia/asia7.png', title: 'Abstract Art 7' },
  { url: '/assets/archAsia/asia8.png', title: 'Abstract Art 8' },
  { url: '/assets/archAsia/asia9.png', title: 'Abstract Art 9' },
  { url: '/assets/archAsia/asia10.png', title: 'Abstract Art 10' },
  { url: '/assets/archAsia/asia11.png', title: 'Abstract Art 11' },
  { url: '/assets/archAsia/asia12.png', title: 'Abstract Art 12' },
  { url: '/assets/archAsia/asia13.png', title: 'Abstract Art 13' },
  { url: '/assets/archAsia/asia14.png', title: 'Abstract Art 14' },
  { url: '/assets/archAsia/asia15.png', title: 'Abstract Art 15' },
  { url: '/assets/archAsia/asia16.png', title: 'Abstract Art 16' }, // Square images start here
  { url: '/assets/archAsia/asia17.png', title: 'Abstract Art 17' },
  { url: '/assets/archAsia/asia18.png', title: 'Abstract Art 18' },
  { url: '/assets/archAsia/asia19.png', title: 'Abstract Art 19' },
  { url: '/assets/archAsia/asia20.png', title: 'Abstract Art 20' },
  { url: '/assets/archAsia/asia21.png', title: 'Abstract Art 21' },
  { url: '/assets/archAsia/asia22.png', title: 'Abstract Art 22' },
  { url: '/assets/archAsia/asia23.png', title: 'Abstract Art 23' },
  { url: '/assets/archAsia/asia24.png', title: 'Abstract Art 24' },
  { url: '/assets/archAsia/asia25.png', title: 'Abstract Art 25' },
  { url: '/assets/archAsia/asia26.png', title: 'Abstract Art 26' },
  { url: '/assets/archAsia/asia27.png', title: 'Abstract Art 27' },
  { url: '/assets/archAsia/asia28.png', title: 'Abstract Art 28' },
  { url: '/assets/archAsia/asia29.png', title: 'Abstract Art 29' },
  { url: '/assets/archAsia/asia30.png', title: 'Abstract Art 30' },
];

// Shuffle function to randomize image order
const shuffleImages = (images) => {
  return images.sort(() => Math.random() - 0.5);
};

const FarEast = () => {
  // Shuffle the images before rendering
  const shuffledImages = shuffleImages([...images]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <h1 className="text-4xl font-bold text-center mt-8">Asian Architecture</h1>

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

export default FarEast;
