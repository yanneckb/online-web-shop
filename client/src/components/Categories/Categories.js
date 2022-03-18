import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { categories } from '../../data';

const Categories = () => {
  return (
    <Styled.Container>
      {categories.map((item) => (
        <Styled.CategoryItem item={item} key={item.id}>
          <Link to={`/products/${item.category}`}>
            <Styled.Image src={item.img} />
            <Styled.Info>
              <Styled.Title>{item.title}</Styled.Title>
              <Styled.Button>Ansehen</Styled.Button>
            </Styled.Info>
          </Link>
        </Styled.CategoryItem>
      ))}
    </Styled.Container>
  );
};

export default Categories;
