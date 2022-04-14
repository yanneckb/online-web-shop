import React, { useEffect, useState } from 'react';
import * as Styled from './styles';
import Product from '../Product';
import Loader from '../Loader';
import { publicReq } from '../../helpers/requestMethods';

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const res = await publicReq.get(
        category ? `/products?category=${category}` : '/products'
      );
      setProducts(res.data);
      setIsLoading(false);
    } catch (err) {}
  };

  // FILTER PRODUCTS
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

  // GET CATEGORY PRODUCTS OR ALL PRODUCTS
  useEffect(() => {
    getProducts();
  }, [category]);

  // SORT PRODUCTS
  useEffect(() => {
    // NACH DATUM FUNZT NICHT
    if (sort === 'newest') {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Styled.Container>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '40vh',
          }}
        >
          <Loader />
        </div>
      ) : (
        <Styled.ProductContainer>
          {category
            ? filteredProducts.map((item) => (
                <Product item={item} key={item._id} />
              ))
            : products
                .slice(0, 8)
                .map((item) => <Product item={item} key={item._id} />)}
        </Styled.ProductContainer>
      )}
    </Styled.Container>
  );
};

export default Products;
