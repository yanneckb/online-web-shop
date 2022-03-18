import { useState, useEffect, useCallback } from 'react';
import * as Styled from './styles';
import { sliderItems } from '../../data';

// Shows the current slide and navigate to other slides
const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <Styled.IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Styled.Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </Styled.IndicatorWrapper>
  );
};

// Carousel component
export default function Carousel({ autoPlay = true, autoPlayTime = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // next slide function
  const nextSlide = useCallback(
    (slideIndex = currentSlide + 1) => {
      const newSlideIndex = slideIndex >= sliderItems.length ? 0 : slideIndex;
      setCurrentSlide(newSlideIndex);
    },
    [currentSlide]
  );

  // starts auto play on render
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);
    return () => clearTimeout(timer);
  }, [currentSlide, autoPlayTime, nextSlide]);

  return (
    <Styled.Wrapper>
      <Styled.Carousel>
        {sliderItems.map((imageObj, index) => {
          return (
            <Styled.Slide
              key={index}
              style={{
                backgroundImage: `url(${imageObj.image})`,
                marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
              }}
            >
              <Styled.Container key={index}>
                <h1>{imageObj.title}</h1>
                <p>{imageObj.description}</p>
              </Styled.Container>
            </Styled.Slide>
          );
        })}
      </Styled.Carousel>
      <Styled.Actions>
        <Indicator
          currentSlide={currentSlide}
          amountSlides={sliderItems.length}
          nextSlide={nextSlide}
        ></Indicator>
      </Styled.Actions>
    </Styled.Wrapper>
  );
}
