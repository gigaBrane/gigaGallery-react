import React, { useState } from 'react';
import GallerySection from '../components/GallerySection';
import Header from '../components/Header';
import InfiniteScroll from 'react-infinite-scroll-component';

const allImages = [
  { url: '/assets/punk/punk1.png' },
  { url: '/assets/punk/punk2.png'},
  { url: '/assets/punk/punk3.png'},
  { url: '/assets/punk/punk4.png'},
  { url: '/assets/punk/punk5.png' },
  { url: '/assets/punk/punk6.png' },
  { url: '/assets/punk/punk7.png' },
  { url: '/assets/punk/punk8.png' },
  { url: '/assets/punk/punk9.png' },
  { url: '/assets/punk/punk10.png'},
  { url: '/assets/punk/punk11.png' },
  { url: '/assets/punk/punk12.png'},
  { url: '/assets/punk/punk13.png'},
  { url: '/assets/punk/punk14.png'},
  { url: '/assets/punk/punk15.png' },
  { url: '/assets/punk/punk16.png'},
  { url: '/assets/punk/punk17.png' },
  { url: '/assets/punk/punk8.png' },
  { url: '/assets/punk/punk19.png' },
  { url: '/assets/punk/punk20.png' },
  // Add more images if needed
];

const Punk = () => {
  const [images, setImages] = useState(allImages.slice(0, 6)); // Start with the first 6 images
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch more images when scrolling
  const fetchMoreImages = () => {
    if (images.length >= allImages.length) {
      setHasMore(false); // If no more images to load, stop fetching
      return;
    }
    // Load next 6 images
    const nextImages = allImages.slice(images.length, images.length + 6);
    setImages([...images, ...nextImages]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      

      {/* Infinite Scroll Section */}
      <InfiniteScroll
        dataLength={images.length} // Length of images currently loaded
        next={fetchMoreImages} // Function to fetch more images
        hasMore={hasMore} // Boolean to check if there are more images to load
        loader={<h4 className="text-center mt-4">Loading more images...</h4>}
        endMessage={<p className="text-center mt-4">All images loaded</p>}
      >
        <GallerySection title="CyberPunk" images={images} /> {/* Display the images */}
      </InfiniteScroll>
    </div>
  );
};

export default Punk;
