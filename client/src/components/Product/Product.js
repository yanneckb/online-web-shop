import React from 'react';
import * as Styled from './styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  return (
    <Styled.Container>
      <Styled.StyledLink to={`/product/${item._id}`}>
        <Styled.Content>
          <Styled.ImgContainer>
            <Styled.Image src={item.img} />
          </Styled.ImgContainer>
          <Styled.Info>
            <Styled.Title>{item.title}</Styled.Title>
            <Styled.Price>{item.price}€</Styled.Price>
          </Styled.Info>
        </Styled.Content>
      </Styled.StyledLink>
    </Styled.Container>
  );
};

export default Product;
