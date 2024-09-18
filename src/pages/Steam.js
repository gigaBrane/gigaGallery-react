import React from 'react';
import Header from '../components/Header';

// Image data
const images = [
  { url: '/assets/steam/steampunk1.webp', title: 'steampunk 1' },
  { url: '/assets/steam/steampunk2.webp', title: 'steampunk 2' },
  { url: '/assets/steam/steampunk3.webp', title: 'steampunk 3' },
  { url: '/assets/steam/steampunk4.webp', title: 'steampunk 4' },
  { url: '/assets/steam/steampunk5.webp', title: 'steampunk 5' },
  { url: '/assets/steam/steampunk6.webp', title: 'steampunk 6' },
  { url: '/assets/steam/steampunk7.webp', title: 'steampunk 7' },
  { url: '/assets/steam/steampunk8.webp', title: 'steampunk 8' },
  { url: '/assets/steam/steampunk9.webp', title: 'steampunk 9' },
  { url: '/assets/steam/steampunk10.webp', title: 'steampunk 10' },
  { url: '/assets/steam/steampunk11.webp', title: 'steampunk 11' },
  { url: '/assets/steam/steampunk12.webp', title: 'steampunk 12' },
  { url: '/assets/steam/steampunk13.webp', title: 'steampunk 13' },
  { url: '/assets/steam/steampunk14.webp', title: 'steampunk 14' },
  { url: '/assets/steam/steampunk15.webp', title: 'steampunk 15' },
  { url: '/assets/steam/steampunk16.webp', title: 'steampunk 16' }, // Square images start here
  { url: '/assets/steam/steampunk17.webp', title: 'steampunk 17' },
  { url: '/assets/steam/steampunk18.webp', title: 'steampunk 18' },
  { url: '/assets/steam/steampunk19.webp', title: 'steampunk 19' },
  { url: '/assets/steam/steampunk20.webp', title: 'steampunk 20' },
  { url: '/assets/steam/steampunk21.webp', title: 'steampunk 21' },
  { url: '/assets/steam/steampunk22.webp', title: 'steampunk 22' },
  { url: '/assets/steam/steampunk23.webp', title: 'steampunk 23' },
  { url: '/assets/steam/steampunk24.webp', title: 'steampunk 24' },
  { url: '/assets/steam/steampunk25.webp', title: 'steampunk 25' },
  { url: '/assets/steam/steampunk26.webp', title: 'steampunk 26' },
  { url: '/assets/steam/steampunk27.webp', title: 'steampunk 27' },
  { url: '/assets/steam/steampunk28.webp', title: 'steampunk 28' },
  { url: '/assets/steam/steampunk29.webp', title: 'steampunk 29' },
  { url: '/assets/steam/steampunk30.webp', title: 'steampunk 30' },
];

// Shuffle function to randomize image order
const shuffleImages = (images) => {
  return images.sort(() => Math.random() - 0.5);
};

const Steam = () => {
  // Shuffle the images before rendering
  const shuffledImages = shuffleImages([...images]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <h1 className="text-4xl font-bold text-center mt-8">Steampunk Surrealism</h1>

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

export default Steam;
