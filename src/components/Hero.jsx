import { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    image: '/images/slide1_universe.png',
    text: (
      <div className="text-left text-white px-8 md:px-80">
        <p className="text-xl md:text-3xl lg:text-4xl font-light leading-snug">
          Giving (everyone) more tools<br />
          making things easier<br />
          lowerring the barriers<br />
          to success and get what we want
        </p>
        <p className="mt-6 text-md md:text-xl max-w-2xl font-light">
          significantly increase the number of people that can contribute to society<br />
          and we all benefit from that overall doesn’t mean that it doesn’t
        </p>
      </div>
    ),
  },
  {
    id: 2,
    image: '/images/slide2_robotsea.png',
    text: (
      <div className="text-left text-white px-8 md:px-80">
        <p className="text-xl md:text-3xl lg:text-4xl font-light leading-snug">
          Giving (everyone) more tools<br />
          making things easier<br />
          lowerring the barriers<br />
          to success and get what we want
        </p>
        <p className="mt-6 text-md md:text-xl max-w-2xl font-light">
          significantly increase the number of people that can contribute to society<br />
          and we all benefit from that overall doesn’t mean that it doesn’t
        </p>
      </div>
    ),
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center">
            {slide.text}
          </div>
        </div>
      ))}
    </div>
  );
}