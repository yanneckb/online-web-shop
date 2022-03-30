import styled from 'styled-components';
import { mobile } from '../../responsive';
import {
  darkGradientBtn,
  darkGradientStatic,
} from '../../styles/global.styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 80vw;
  padding: 2rem 5rem;
  display: flex;
  justify-content: center;

  ${mobile({
    padding: '3rem 0.5rem',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  })}
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({
    marginBottom: '2.5rem',
  })}
`;

export const Image = styled.img`
  width: 400px;
  object-fit: contain;
  ${mobile({
    width: '50%',
  })}
`;

export const InfoContainer = styled.div`
  padding: 5rem 10vw;
  width: 45vw;
  ${mobile({ padding: '10px', width: '90%' })}
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 25px;
`;

export const FilterContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  border-radius: 0.3rem;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 0.3rem;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

////

export const Button = styled.button`
  border: none;
  border-radius: 0.3rem;
  padding: 1rem 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
  ${darkGradientBtn}
`;

export const BuySection = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const CategoryContainer = styled.div`
  margin-bottom: 0.5rem;
`;

export const Category = styled.span`
  ${darkGradientStatic}
  cursor: pointer;
  border-radius: 0.3rem;
  padding: 0.35rem 0.8rem;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
`;

export const Notes = styled.div`
  padding-top: 1rem;
  text-align: right;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: 0.05rem;
`;
