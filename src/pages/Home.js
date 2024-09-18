import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // for smooth animations

// FeaturedImages Component
const FeaturedImages = ({ images }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        hidden: { opacity: 0 }
      }}
    >
      {images.map((img, index) => (
        <motion.div 
          key={index} 
          className="relative group overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Wrap the image in a Link component */}
          <Link to={img.link}>
            <img src={img.url} alt={img.title} className="w-full h-64 object-cover transform transition-transform duration-500" />
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <p className="text-white text-lg font-bold">{img.title}</p>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Home = () => {
  // Image data for the first row of featured images
  const imagesRow1 = [
    { url: '/assets/archAsia/asia1.webp', title: 'Architecture of the Far East', description: 'Architecture of the Far East.', link: '/asia' },
    { url: '/assets/punk/punkSquare.webp', title: 'CyberPunk', description: 'CyberPunk Dystopia.', link: '/cyberpunk' },
    { url: '/assets/myth/myth16.webp', title: 'Mythology', description: 'Mythological Marvels.', link: '/myth' }
  ];

  // Image data for the second row of featured images
  const imagesRow2 = [
    { url: '/assets/doodles/doodle21.webp', title: 'Doodles', description: 'Doodles.', link: '/doodles' },
    { url: '/assets/dinos/dino36.webp', title: 'Dinosaurus', description: 'Discover Dinos.', link: '/dinos' },
    { url: '/assets/steam/steampunk2.webp', title: 'Steampunk Surrealism', description: 'Steampunk.', link: '/steampunk' }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section with Image Underlay */}
      <div className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center" 
        style={{
          backgroundImage: `url('/assets/rain.webp')`,
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-purple-800 opacity-70 z-20"></div> {/* Red gradient overlay */}

        <motion.h1 
          className="text-6xl font-bold mb-4 z-30 text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          gigaGallery
        </motion.h1>

        <motion.p 
          className="text-lg max-w-2xl text-center z-30 text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore AI generated artworks below.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 animate-bounce z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
        </motion.div>
      </div>

      {/* Animated Gallery Section */}
      <div className="px-4 py-12">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Featured Artworks
        </motion.h2>

        {/* First Line of Featured Images */}
        <FeaturedImages images={imagesRow1} />

        {/* Second Line of Featured Images */}
        <div className="mt-12">
          <FeaturedImages images={imagesRow2} />
        </div>
      </div>

      {/* Parallax Scroll Section */}
      <div className="relative py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('/assets/rain.webp')` }}>
  <div className="text-center bg-gray-900 bg-opacity-75 py-20">
    <h2 className="text-5xl font-bold mb-8">Discover the Future of Creativity with AI</h2>
    <p className="text-xl max-w-4xl mx-auto">
      Get in touch to collaborate.
    </p>
    {/* Email button */}
    <a 
      href="mailto:gigabrane@gmail.com?subject=Collaboration%20Opportunity&body=Hi%20there,%20I%27m%20interested%20in%20collaborating%20on%20a%20project!" 
      className="mt-8 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
    >
      Contact Me
    </a>
  </div>
</div>

    </div>
  );
};

export default Home;
