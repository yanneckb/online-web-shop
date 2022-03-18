import React, { useEffect, useMemo, useState } from 'react';
import * as Styled from './styles';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { useSelector } from 'react-redux';
import { userReq } from '../../helpers/requestMethods';
import { updateProduct } from '../../redux/apiCalls.redux';
import { useDispatch } from 'react-redux';

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [productStats, setProductStats] = useState([]);
  const [inputs, setInputs] = useState({});
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [upload, setUpload] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCategory = (e) => {
    setCategory(e.target.value.split(','));
  };
  const handleColor = (e) => {
    setColor(e.target.value.split(','));
  };
  const handleClick = (e) => {
    e.preventDefault();
    const product = {
      ...inputs,
      categories: category,
      color: color,
    };
    updateProduct(productId, product, dispatch);
    console.log(product);
    // setUpload('Upload erfolgreich!');
  };

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dez',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userReq.get('orders/income?pid=' + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        alert(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  return (
    <Styled.Product>
      <Styled.Container>
        <Styled.Title>Produkt</Styled.Title>
        <Link to='/newproduct'>
          <Styled.AddButton>Erstellen</Styled.AddButton>
        </Link>
      </Styled.Container>
      <Styled.ProductTop>
        <Styled.ProductTopLeft>
          <Chart
            data={productStats}
            dataKey='Sales'
            title='Sales Performance'
          />
        </Styled.ProductTopLeft>
        <Styled.ProductTopRight>
          <Styled.InfoTop>
            <Styled.InfoImg src={product.img} alt='' />
            <Styled.ProductName>{product.title}</Styled.ProductName>
          </Styled.InfoTop>
          <Styled.InfoBottom>
            <Styled.InfoItem>
              <Styled.InfoKey>Produkt-ID:</Styled.InfoKey>
              <Styled.InfoValue>{product._id}</Styled.InfoValue>
            </Styled.InfoItem>
            <Styled.InfoItem>
              <Styled.InfoKey>sales:</Styled.InfoKey>
              <Styled.InfoValue>5123</Styled.InfoValue>
            </Styled.InfoItem>
            <Styled.InfoItem>
              <Styled.InfoKey>Vorrätig:</Styled.InfoKey>
              <Styled.InfoValue>{product.inStock}</Styled.InfoValue>
            </Styled.InfoItem>
          </Styled.InfoBottom>
        </Styled.ProductTopRight>
      </Styled.ProductTop>

      <Styled.ProductBottom>
        <Styled.Title>Produkt bearbeiten</Styled.Title>
        <Styled.ProductForm>
          <Styled.FormLeft>
            {/* <Styled.Item>
              <Styled.Label>Produktfoto</Styled.Label>
              <Styled.Input
                type='file'
                id='file'
                name='file'
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Styled.ProgressContainer>
                <Styled.UploadProgress>{upload}</Styled.UploadProgress>
              </Styled.ProgressContainer>
            </Styled.Item> */}
            <Styled.Item>
              <Styled.Label for='title'>Produktname</Styled.Label>
              <Styled.Input
                name='title'
                type='text'
                placeholder={product.title}
                onChange={handleChange}
              />
            </Styled.Item>
            <Styled.Item>
              <Styled.Label for='description'>Produktbeschreibung</Styled.Label>
              <Styled.TextInput
                name='description'
                rows='8'
                cols='100'
                placeholder={product.description}
                onChange={handleChange}
              />
            </Styled.Item>
            <Styled.Item>
              <Styled.Label for='color'>
                Produktfarbe (in Englisch)
              </Styled.Label>
              <Styled.Input
                name='color'
                type='text'
                placeholder={product.color}
                style={{ textTransform: 'lowercase' }}
                onChange={handleColor}
              />
            </Styled.Item>
          </Styled.FormLeft>
          <Styled.FormRight>
            <Styled.Item>
              <Styled.Label for='size'>Größe</Styled.Label>
              <Styled.Input
                name='size'
                type='text'
                placeholder={product.size}
                onChange={handleChange}
              />
            </Styled.Item>
            <Styled.Item>
              <Styled.Label for='price'>Preis</Styled.Label>
              <Styled.Input
                name='price'
                type='number'
                placeholder={product.price}
                onChange={handleChange}
              />
            </Styled.Item>
            <Styled.Item>
              <Styled.Label for='categories'>
                Kategorie (ohne Leerzeichen)
              </Styled.Label>
              <Styled.Input
                name='categories'
                type='text'
                placeholder={product.categories}
                onChange={handleCategory}
              />
            </Styled.Item>
            <Styled.Item>
              <Styled.Label for='inStock'>Vorrätig</Styled.Label>
              <Styled.Select name='inStock' id='inStock'>
                <option value='true'>Ja</option>
                <option value='false'>Nein</option>
              </Styled.Select>
            </Styled.Item>
          </Styled.FormRight>
        </Styled.ProductForm>
        <Styled.Button onClick={handleClick}>Aktualisieren</Styled.Button>
      </Styled.ProductBottom>
    </Styled.Product>
  );
}
