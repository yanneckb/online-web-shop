import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './styles';
import Products from '../../components/Products';

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState('newest');

  // HANDLE PRODUCT FILTER
  const handleFilter = (e) => {
    const val = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: val.toLowerCase(),
    });
  };

  return (
    <Styled.Container>
      <Styled.Sidebar>
        <Styled.Title>{category}</Styled.Title>
        <Styled.FilterContainer>
          <Styled.Filter>
            <Styled.FilterText>Filter Products:</Styled.FilterText>
            <Styled.Options>
              <Styled.Select name='color' onChange={handleFilter}>
                <Styled.Option>Color</Styled.Option>
                <Styled.Option>White</Styled.Option>
                <Styled.Option>Black</Styled.Option>
                <Styled.Option>Red</Styled.Option>
                <Styled.Option>Blue</Styled.Option>
                <Styled.Option>Yellow</Styled.Option>
                <Styled.Option>Green</Styled.Option>
              </Styled.Select>
              <Styled.Select name='size' onChange={handleFilter}>
                <Styled.Option>Size</Styled.Option>
                <Styled.Option>XS</Styled.Option>
                <Styled.Option>S</Styled.Option>
                <Styled.Option>M</Styled.Option>
                <Styled.Option>L</Styled.Option>
                <Styled.Option>XL</Styled.Option>
              </Styled.Select>
            </Styled.Options>
          </Styled.Filter>
          <Styled.Filter>
            <Styled.FilterText>Sort Products:</Styled.FilterText>
            <Styled.Options>
              <Styled.Select onChange={(e) => setSort(e.target.value)}>
                <Styled.Option value='newest'>Neuste</Styled.Option>
                <Styled.Option value='asc'>Preis aufsteigend</Styled.Option>
                <Styled.Option value='desc'>Preis absteigend</Styled.Option>
              </Styled.Select>
            </Styled.Options>
          </Styled.Filter>
        </Styled.FilterContainer>
      </Styled.Sidebar>
      <Styled.ProductList>
        <Products category={category} filters={filter} sort={sort} />
      </Styled.ProductList>
    </Styled.Container>
  );
};

export default ProductList;
