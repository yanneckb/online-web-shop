import React from 'react';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import Slider from '../../components/Slider';
import * as Styled from './styles';

const Home = () => {
  return (
    <div>
      <Slider />
      <Styled.Title>Kategorien</Styled.Title>
      <Categories />
      <Styled.Title>Unsere Produkte</Styled.Title>
      <Products />
    </div>
  );
};

export default Home;
