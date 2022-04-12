import { useState, useEffect, useCallback } from 'react';
import * as Styled from './styles';
import { sliderItems } from '../../data';

// SHOWS THE CURRENT SLIDE AND NAVIGATE TO OTHER SLIDE
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

// CAROUSEL COMPONENT
export default function Carousel({ autoPlay = true, autoPlayTime = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // NEXT SLIDE FUNCTION
  const nextSlide = useCallback(
    (slideIndex = currentSlide + 1) => {
      const newSlideIndex = slideIndex >= sliderItems.length ? 0 : slideIndex;
      setCurrentSlide(newSlideIndex);
    },
    [currentSlide]
  );

  // START AUTOPLAY ON RENDER
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
