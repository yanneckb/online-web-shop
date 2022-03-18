import styled from 'styled-components';

export const NewProduct = styled.div`
  flex: 4;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 55vw;
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

export const Label = styled.label``;

export const Input = styled.input`
  border: 1px solid grey;
  border-radius: 0.3rem;
`;

export const TextInput = styled.textarea`
  border: 1px solid grey;
  border-radius: 0.3rem;
  padding: 0.5rem;
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

export const Button = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
`;
