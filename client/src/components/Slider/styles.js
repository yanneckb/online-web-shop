import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Wrapper = styled.div`
  width: 100vw;
  margin-bottom: 5rem;
  ${mobile({ marginBottom: '1.5rem' })}
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
  ${mobile({ padding: '0 0.25rem', fontSize: '0.75rem' })}
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  bottom: 15px;
  right: 15px;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${(props) => (props.isActive ? '#667eea' : 'grey')};
  border: 'none';
  margin: 5px;
  transition: 750ms all ease-in-out;
`;

export const Gradient = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Carousel = styled.div`
  height: 45vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

export const Slide = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
`;

// import styled from 'styled-components';
// import { mobile } from '../../responsive';

// export const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
//   ${mobile({ display: 'none' })}
// `;

// export const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === 'left' && '10px'};
//   right: ${(props) => props.direction === 'right' && '10px'};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

// export const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
// `;

// export const Slide = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;

// export const ImgContainer = styled.div`
//   height: 100%;
//   flex: 1;
// `;

// export const Image = styled.img`
//   height: 80%;
// `;

// export const InfoContainer = styled.div`
//   flex: 1;
//   padding: 50px;
// `;

// export const Title = styled.h1`
//   font-size: 70px;
// `;

// export const Desc = styled.p`
//   margin: 50px 0px;
//   font-size: 20px;
//   font-weight: 500;
//   letter-spacing: 3px;
// `;

// export const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `;
