import { useEffect, useState, useRef } from "react";

const useSliderHandler = (sliderWrapper, slider, cardWidth) => {
  const [count, setCount] = useState(0);
  const sliderPosition = useRef(0);

  useEffect(() => {
    if (sliderWrapper.current && slider.current) setCount(cardsPerSlide());
  }, []);

  const slideToStart = () => {
    slider.current.style.transform = `translate(0)`;
    sliderPosition.current = 0;
  };

  const slide = (next) => {
    const step = cardWidth * cardsPerSlide();
    slider.current.style.transform = `translate(${
      next ? sliderPosition.current - step : sliderPosition.current + step
    }px)`;
    sliderPosition.current = next
      ? sliderPosition.current - step
      : sliderPosition.current + step;
  };

  const wrapperWidth = () => {
    return sliderWrapper.current.clientWidth;
  };

  const cardsPerSlide = () => {
    return Math.round(wrapperWidth() / cardWidth);
  };

  const handleSlide = (next) => {
    if (next) {
      slide(true);
      setCount(count + cardsPerSlide());
    } else if (sliderPosition.current < 0) {
      slide(false);
      setCount(count - cardsPerSlide());
    }
  };

  return { handleSlide, count };
};

export default useSliderHandler;
