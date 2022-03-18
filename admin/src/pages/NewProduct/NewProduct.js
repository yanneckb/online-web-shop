import React, { useState } from 'react';
import * as Styled from './styles';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { addProduct } from '../../redux/apiCalls.redux';
import { useDispatch } from 'react-redux';

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
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
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    console.log(storageRef);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setUpload('Upload bei ' + Math.floor(progress) + '% ...');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: category,
            color: color,
          };
          addProduct(product, dispatch);
          console.log(product);
          setUpload('Upload erfolgreich!');
        });
      }
    );
  };

  return (
    <Styled.NewProduct>
      <Styled.Title>Neues Produkt</Styled.Title>
      <Styled.Form>
        <Styled.Item>
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
        </Styled.Item>
        <Styled.Item>
          <Styled.Label for='title'>Produktname</Styled.Label>
          <Styled.Input
            name='title'
            type='text'
            placeholder='Produkt'
            onChange={handleChange}
          />
        </Styled.Item>
        <Styled.Item>
          <Styled.Label for='description'>Produktbeschreibung</Styled.Label>
          <Styled.TextInput
            name='description'
            rows='8'
            cols='100'
            placeholder='Beschreibung'
            onChange={handleChange}
          />
        </Styled.Item>
        <Styled.Item>
          <Styled.Label for='color'>Produktfarbe (in Englisch)</Styled.Label>
          <Styled.Input
            name='color'
            type='text'
            placeholder='red,blue,white'
            style={{ textTransform: 'lowercase' }}
            onChange={handleColor}
          />
        </Styled.Item>
        <Styled.Item>
          <Styled.Label for='size'>Größe</Styled.Label>
          <Styled.Input
            name='size'
            type='text'
            placeholder='z.B. XL oder 43'
            onChange={handleChange}
          />
        </Styled.Item>
        <Styled.Item>
          <Styled.Label for='price'>Preis</Styled.Label>
          <Styled.Input
            name='price'
            type='number'
            placeholder='0,00€'
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
            placeholder='Shirts,Frauen,...'
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

        <Styled.Button onClick={handleClick}>Erstellen</Styled.Button>
      </Styled.Form>
    </Styled.NewProduct>
  );
}
