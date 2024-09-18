import React from 'react';
import Slider from 'react-slick';
import Header from '../components/Header';

// Image data for the carousel
const images = [
  { url: '../assets/myth/myth1.webp', title: 'Myth 1' },
  { url: '../assets/myth/myth2.webp', title: 'Myth 2' },
  { url: '../assets/myth/myth3.webp', title: 'Myth 3' },
  { url: '../assets/myth/myth4.webp', title: 'Myth 4' },
  { url: '../assets/myth/myth5.webp', title: 'Myth 5' },
  { url: '../assets/myth/myth6.webp', title: 'Myth 6' },
  { url: '../assets/myth/myth7.webp', title: 'Myth 7' },
  { url: '../assets/myth/myth8.webp', title: 'Myth 8' },
  { url: '../assets/myth/myth9.webp', title: 'Myth 9' },
  { url: '../assets/myth/myth10.webp', title: 'Myth 10' },
  { url: '../assets/myth/myth11.webp', title: 'Myth 11' },
  { url: '../assets/myth/myth12.webp', title: 'Myth 12' },
  { url: '../assets/myth/myth13.webp', title: 'Myth 13' },
  { url: '../assets/myth/myth14.webp', title: 'Myth 14' },
  { url: '../assets/myth/myth15.webp', title: 'Myth 15' },
  { url: '../assets/myth/myth16.webp', title: 'Myth 16' },

];

const Myth = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // Custom arrow styling using Tailwind
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Custom Next Arrow
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75 z-10"
        onClick={onClick}
      >
        &#9654;
      </div>
    );
  }

  // Custom Prev Arrow
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75 z-10"
        onClick={onClick}
      >
        &#9664;
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <h1 className="text-4xl font-bold text-center mt-8">Mythology</h1>

      {/* Carousel Section */}
      <div className="px-4 py-12">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-2 text-center text-lg">{img.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Myth;
