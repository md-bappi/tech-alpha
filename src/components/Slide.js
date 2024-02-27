import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div className="slide  " style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-texts container mx-auto flex flex-col items-start justify-center h-full gap-5 text-violet-50">
        <h1 className="text-6xl  font-semibold uppercase w-3/4">
          {image.headLine}
        </h1>
        <p className=" w-2/4">{image.body}</p>
        <Link className="slide-btn uppercase border border-violet-50 h-14 w-64 hover:text-orange-50 duration-300 font-medium ">
          <span className="z-[2] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center">
            {image.cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
