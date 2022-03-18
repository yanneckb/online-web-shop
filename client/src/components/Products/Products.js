import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Styled from './styles';
import { categories, popularProducts } from '../../data';
import Product from '../Product';

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:8080/api/products?=${category}`
            : 'http://localhost:8080/api/products'
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setfilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  // useEffect(() => {
  //   if (sort === 'newest') {
  //     setfilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.createdAt - b.createdAt)
  //     );
  //   } else if (sort === 'asc') {
  //     setfilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.price - b.price)
  //     );
  //   } else {
  //     setfilteredProducts((prev) =>
  //       [...prev].sort((a, b) => b.price - a.price)
  //     );
  //   }
  // });

  return (
    <Styled.Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Styled.Container>
  );
};

export default Products;
