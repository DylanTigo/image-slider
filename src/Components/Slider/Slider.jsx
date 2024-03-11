import { useEffect, useState } from "react";
import arrowLelt from "../../assets/left-arrow.svg";
import arrowRight from "../../assets/right-arrow.svg";
import datas from "../../data/sliderData";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(datas[2]);

  function previousSlide() {
    const index = datas.indexOf(currentSlide);
    if (index === 0) return setCurrentSlide(datas[datas.length - 1]);
    else setCurrentSlide(datas[index - 1]);
  }
  function nextSlide() {
    const index = datas.indexOf(currentSlide);
    if (index === datas.length - 1) return setCurrentSlide(datas[0]);
    else setCurrentSlide(datas[index + 1]);
  }

  return (
    <div className=" mx-auto">
      <p className=" text-center mt-16 mb-6">{currentSlide.id} / 5</p>
      <div className=" relative mx-auto max-w-[600px] aspect-[3/2] ">
        <img
          className=" w-full h-full rounded-3xl object-cover"
          src={`/images/img-${currentSlide.id}.jpg`}
          alt="bedroom"
        />

        <button className="directionBtn -left-16" onClick={previousSlide}>
          <img src={arrowLelt} alt="arrow to left" />
        </button>
        <button className="directionBtn -right-16" onClick={nextSlide}>
          <img src={arrowRight} alt="arrow to right" />
        </button>
      </div>
      <div className="mx-auto mt-5 w-fit rounded-full text-black py-1 px-5 font-medium bg-white">
        {currentSlide.description}
      </div>
    </div>
  );
}
