import React from 'react';

const GallerySection = ({ title, images }) => {
  return (
    <section className="py-10 px-5 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <img src={img.url} alt={`AI Art ${index}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-center">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
