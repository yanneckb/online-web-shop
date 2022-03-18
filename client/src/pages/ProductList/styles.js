import styled from 'styled-components';
import { mobile } from '../../responsive';
import { gradientBorder } from '../../styles/global.styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
  ${mobile({ flexDirection: 'column', padding: '0.75rem' })}
`;

export const Sidebar = styled.div`
  ${gradientBorder}
  ${mobile({ width: '100%', textAlign: 'center' })}
`;

export const Options = styled.div`
  padding-top: 0.5rem;
  ${mobile({ paddingTop: '0' })}
`;

export const Title = styled.h1`
  margin: 20px;
  ${mobile({ fontSize: '1.5rem', margin: '0.5rem 0.25rem' })}
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${mobile({ flexDirection: 'row', justifyContent: 'center' })}
`;

export const Filter = styled.div`
  margin: 20px;

  ${mobile({
    width: '0px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0.75rem',
  })}
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px', fontSize: '1rem' })}
`;

export const Select = styled.select`
  padding: 0.25rem;
  margin: 0.25rem;
  ${mobile({ margin: '10px 4px' })}
`;
export const Option = styled.option``;

export const ProductList = styled.div`
  width: 80vw;
  ${mobile({ width: '100%' })}
`;
