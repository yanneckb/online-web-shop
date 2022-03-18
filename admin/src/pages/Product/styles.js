import styled from 'styled-components';

export const Product = styled.div`
  flex: 4;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1``;

export const Label = styled.label``;

export const Input = styled.input``;

export const TextInput = styled.textarea``;

export const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const ProductTop = styled.div`
  display: flex;
`;

export const ProductTopLeft = styled.div`
  flex: 1;
`;

export const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 6px 15px rgb(36 37 38 / 8%);
  -webkit-box-shadow: 0 6px 15px rgb(36 37 38 / 8%);
  -moz-box-shadow: 0 6px 15px rgb(36 37 38 / 8%);
  transition: 0.25s ease, transform 0.25s ease;
  border-radius: 1rem;

  &:hover {
    box-shadow: 0 6px 15px rgb(36 37 38 / 20%);
    -webkit-box-shadow: 0 6px 15px rgb(36 37 38 / 20%);
    -moz-box-shadow: 0 6px 15px rgb(36 37 38 / 20%);
  }
`;

export const InfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

export const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductName = styled.span`
  font-weight: 600;
`;

export const InfoBottom = styled.div`
  margin-top: 10px;
`;

export const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const InfoKey = styled.span``;

export const InfoValue = styled.span`
  font-weight: 300;
`;

export const ProductBottom = styled.div`
  padding: 20px 10vw;
  margin: 20px;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 6px 15px rgb(36 37 38 / 8%);
  -webkit-box-shadow: 0 6px 15px rgb(36 37 38 / 8%);
  -moz-box-shadow: 0 6px 15px rgb(36 37 38 / 8%);
  transition: 0.25s ease, transform 0.25s ease;
  border-radius: 1rem;

  &:hover {
    box-shadow: 0 6px 15px rgb(36 37 38 / 20%);
    -webkit-box-shadow: 0 6px 15px rgb(36 37 38 / 20%);
    -moz-box-shadow: 0 6px 15px rgb(36 37 38 / 20%);
  }
`;

export const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
  & > label {
    margin-bottom: 10px;
    color: gray;
  }

  & > input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }

  & > select {
    margin-bottom: 10px;
  }
`;

export const UploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

export const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
  width: 20%;
`;

export const Item = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & > label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
  & > input {
    padding: 10px;
  }
  & > select {
    padding: 10px;
  }
`;

export const UploadProgress = styled.p``;

export const ProgressContainer = styled.div`
  text-align: center;
  margin: 0.5rem;
`;

export const Select = styled.select`
  border: 1px solid grey;
  border-radius: 0.3rem;
`;
