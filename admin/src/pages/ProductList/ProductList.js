import React, { useEffect } from 'react';
import * as Styled from './styles';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../redux/apiCalls.redux';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 130 },
    {
      field: 'product',
      headerName: 'Produkt',
      width: 200,
      renderCell: (params) => {
        return (
          <Styled.ListItem>
            <Styled.ListImg src={params.row.img} alt='' />
            {params.row.title}
          </Styled.ListItem>
        );
      },
    },
    { field: 'inStock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Preis',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Aktion',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row._id}>
              <Styled.ListEdit>Bearbeiten</Styled.ListEdit>
            </Link>
            <Styled.ListDelete onClick={() => handleDelete(params.row._id)} />
          </>
        );
      },
    },
  ];

  return (
    <Styled.List>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </Styled.List>
  );
}
