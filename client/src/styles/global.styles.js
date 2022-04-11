import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

// GRADIENT COLORS
export const colorOne = '#4b749f';
export const colorTwo = '#243748';

//purple peach
// const colorOne = '#ef745c';
// const colorTwo = '#34073d';
// dark grey blue
// const colorOne = '#4b749f';
// const colorTwo = '#243748';

// FADING GRADIENT ANIMATION
const gradientMove = keyframes`
  0%{background-position:90% 0%}
  50%{background-position:11% 100%}
  100%{background-position:90% 0%}
`;

// FADING BACKGROUND
export const fadingBackground = css`
  background: linear-gradient(226deg, ${colorOne}, ${colorTwo});
  background-size: 400% 400%;
  -webkit-animation: ${gradientMove} 10s ease infinite;
  -moz-animation: ${gradientMove} 10s ease infinite;
  animation: ${gradientMove} 10s ease infinite;
`;

// GRADIENT BORDER
export const gradientBorder = css`
  border: 3px solid transparent;
  border-image: linear-gradient(330deg, ${colorTwo}, ${colorOne}) 1;
  box-shadow: 10px 10px 21px -6px rgba(0, 0, 0, 0.27);
  -webkit-box-shadow: 10px 10px 21px -6px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 10px 10px 21px -6px rgba(0, 0, 0, 0.27);
`;

// GRADIENT COLOR BUTTON
export const colorGradientBtn = css`
  background-image: linear-gradient(
    to right,
    ${colorTwo} 0%,
    ${colorOne} 51%,
    ${colorTwo} 100%
  );
  transition: 0.5s;
  background-size: 200% auto;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

// DARK GRADIENT BUTTON
export const darkGradientBtn = css`
  color: #fff;
  background-image: linear-gradient(
    to right,
    #485563 0%,
    #29323c 51%,
    #485563 100%
  );
  transition: 0.5s;
  background-size: 200% auto;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

// RED GRADIENT BUTTON
export const redGradientBtn = css`
  color: #6a1a21;
  background-color: rgb(248, 215, 218);
  background-size: 200% auto;
  border: 1px solid #f5c2c7;
  &:hover {
    background-color: #f5c2c7;
    border: 1px solid #6a1a21;
  }
`;

// DARK GRADIENT BACKGROUND (STATIC)
export const darkGradientStatic = css`
  background-image: linear-gradient(to right, #485563 0%, #29323c 100%);
  color: #fff;
`;

// SHADOW WITH HOVER ANIMATION
export const hoverShadow = css`
  background-color: #fff;
  box-shadow: 0 6px 15px rgb(36 37 38 / 8%);
  -webkit-box-shadow: 0 6px 15px rgb(36 37 38 / 8%);
  -moz-box-shadow: 0 6px 15px rgb(36 37 38 / 8%);
  transition: 0.25s ease, transform 0.25s ease;

  &:hover {
    box-shadow: 0 6px 15px rgb(36 37 38 / 20%);
    -webkit-box-shadow: 0 6px 15px rgb(36 37 38 / 20%);
    -moz-box-shadow: 0 6px 15px rgb(36 37 38 / 20%);
  }
`;
