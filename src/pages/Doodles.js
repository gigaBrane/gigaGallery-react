import React from 'react';
import Header from '../components/Header'; // Assuming the header component is already created

const images = [
  { url: '/assets/doodles/doodle1.png', title: 'Doodle 1' },
  { url: '/assets/doodles/doodle2.png', title: 'Doodle 2' },
  { url: '/assets/doodles/doodle3.png', title: 'Doodle 3' },
  { url: '/assets/doodles/doodle4.png', title: 'Doodle 4' },
  { url: '/assets/doodles/doodle5.png', title: 'Doodle 5' },
  { url: '/assets/doodles/doodle6.png', title: 'Doodle 6' },
  { url: '/assets/doodles/doodle7.png', title: 'Doodle 7' },
  { url: '/assets/doodles/doodle8.png', title: 'Doodle 8' },
  { url: '/assets/doodles/doodle9.png', title: 'Doodle 9' },
  { url: '/assets/doodles/doodle10.png', title: 'Doodle 10' },
  { url: '/assets/doodles/doodle11.png', title: 'Doodle 11' },
  { url: '/assets/doodles/doodle12.png', title: 'Doodle 12' },
  { url: '/assets/doodles/doodle13.png', title: 'Doodle 13' },
  { url: '/assets/doodles/doodle14.png', title: 'Doodle 14' },
  { url: '/assets/doodles/doodle15.png', title: 'Doodle 15' },
  { url: '/assets/doodles/doodle16.png', title: 'Doodle 16' },
  { url: '/assets/doodles/doodle17.png', title: 'Doodle 17' },
  { url: '/assets/doodles/doodle18.png', title: 'Doodle 18' },
  { url: '/assets/doodles/doodle19.png', title: 'Doodle 19' },
  { url: '/assets/doodles/doodle20.png', title: 'Doodle 20' },
  { url: '/assets/doodles/doodle21.png', title: 'Doodle 21' },
  { url: '/assets/doodles/doodle22.png', title: 'Doodle 22' },
  { url: '/assets/doodles/doodle23.png', title: 'Doodle 23' },
  { url: '/assets/doodles/doodle24.png', title: 'Doodle 24' },
  { url: '/assets/doodles/doodle25.png', title: 'Doodle 25' },
  { url: '/assets/doodles/doodle26.png', title: 'Doodle 26' },
  { url: '/assets/doodles/doodle27.png', title: 'Doodle 27' },

];

const Doodles = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header />

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mt-8">Doodles Gallery</h1>

      {/* Grid Section */}
      <div className="px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div key={index} className="relative">
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
    </div>
  );
};

export default Doodles;
