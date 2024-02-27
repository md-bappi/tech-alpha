import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://i.ibb.co/XszmG02/camera.jpg",
    headLine: " capture stunning photos with our dslr cameras",
    body: "Discover the power of our DSLR cameras for unparalleled photography. From breathtaking landscapes to intimate portraits, our collection offers superior clarity and precision for every shot. Elevate your   skills and unleash your creativity. Shop now and seize the moment with our exceptional DSLR cameras.",
    cta: "shop dslr cameras now!",
    category: "cameras",
  },
  {
    id: 2,
    src: "https://i.ibb.co/mtc8v16/tv.jpg",
    headLine:
      "Transform Your Viewing Experience with Our Cutting-Edge TV Collection!",
    body: " Immerse yourself in unparalleled entertainment with our range of high-definition TVs. From stunning visuals to immersive sound, our TVs redefine home entertainment. Whether you're a cinephile or a casual viewer, our curated selection offers something for everyone. Upgrade your viewing experience today!",
    cta: "Shop our TVs now!",
    category: "tvs",
  },
  {
    id: 3,
    src: "https://i.ibb.co/kmr5qQv/headphones.jpg",
    headLine:
      "Immerse Yourself in Pure Sound: Discover Our Headphone Collection!",
    body: " Dive into a world of crystal-clear audio with our premium headphones. Designed for comfort and precision, our collection delivers an unparalleled listening experience. Whether you're a music enthusiast, gamer, or audiophile, find your perfect match and elevate every moment with exceptional sound quality.",
    cta: "Shop our headphones now!",
    category: "headphones",
  },
  {
    id: 4,
    src: "https://i.ibb.co/JqxDhvZ/console.jpg",
    headLine:
      "Unlock Limitless Adventure: Explore Our Console Collection Today!",

    body: "Dive into a world of immersive gaming experiences with our cutting-edge console selection. From action-packed adventures to multiplayer mayhem, our consoles offer endless entertainment possibilities for gamers of all ages and preferences.",
    cta: "Start gaming now!",
    category: "consoles",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headLine: "Timeless Elegance: Explore Our Watch Collection!",
    body: "Discover sophistication and functionality in every tick with our curated selection of watches. From classic designs to modern innovations, find the perfect timepiece to elevate your style and keep you punctual.",
    cta: "Time to shop!",
    category: "smart-watches",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>
      <div className="btns absolute left-0 right-0 bottom-16 m-auto w-fit z-[1]  text-2xl flex gap-10 ">
        <button
          onClick={prevSlide}
          className="prev-btn h-14 w-20 flex justify-center items-center bg-violet-900 text-violet-200 border border-violet-200 hover:bg-gray-900 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-14 w-20 flex justify-center items-center bg-violet-900 text-violet-200 border border-violet-200 hover:bg-gray-900 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
