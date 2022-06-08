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

  const slideForward = (step) => {
    slider.current.style.transform = `translate(${
      sliderPosition.current - step
    }px)`;
    sliderPosition.current = sliderPosition.current - step
    setCount(count + cardsPerSlide());
  }

  const slideBack = (step) => {
    slider.current.style.transform = `translate(${
      sliderPosition.current + step
    }px)`;
    sliderPosition.current = sliderPosition.current + step
    setCount(count - cardsPerSlide());
  }

  const slide = (next) => {
      const step = cardWidth * cardsPerSlide();
      if(!next && sliderPosition.current < 0){
        slideBack(step)
        return
      }
      if(next) slideForward(step)
      //must update count state here..
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

  return { slide, count };
};

export default useSliderHandler;
