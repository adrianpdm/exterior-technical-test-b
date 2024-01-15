import React, { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "../../components/icons";

interface ImageSliderProps {
  images: string[];
  classNameProps: string;
  captions: string[];
  control: boolean;
  autoslide?: boolean;
  imgSliderStyle: {};
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  classNameProps,
  captions,
  control,
  imgSliderStyle,
  autoslide,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 7500;

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  const goToNextSlide = (): void => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = (): void => {
    const prevIndex = (currentIndex + images.length - 1) % images.length;
    setCurrentIndex(prevIndex);
  };

  React.useEffect(() => {
    if (autoslide) {
      setTimeout(() => goToNextSlide(), delay);
    }

    return () => {};
  }, [currentIndex]);

  const indicators = images.map((_, index) => (
    <button
      key={index}
      className={`rounded-full p-1 mr-1 ${
        index === currentIndex ? "active bg-allurared-500" : "bg-monochrome-200"
      }`}
      onClick={() => goToSlide(index)}
    />
  ));

  return (
    <div id="imageSlider" className={`${classNameProps}`}>
      <div className="slides-container">
        <div className="flex flex-col">
          <div className="flex justify-center">
            {control === true && (
              <button className="scale-150" onClick={goToPrevSlide}>
                <IconArrowLeft />
              </button>
            )}
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              style={imgSliderStyle}
              className="w-full h-[144px] rounded-lg"
            />
            {control === true && (
              <button className="scale-150" onClick={goToNextSlide}>
                <IconArrowRight />
              </button>
            )}
          </div>
          {captions.length > 0 && (
            <div className="flex justify-center mx-20">
              <p className="text-center mt-5 font-light">
                {captions[currentIndex]}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="indicators mt-3">
        <div className="flex justify-between w-12 mx-auto pb-2">
          {indicators}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
