import React from 'react';
import * as Styled from './styles';
import { DataGrid } from '@material-ui/data-grid';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'Konto-ID', width: 130 },
    {
      field: 'user',
      headerName: 'Nutzername',
      width: 200,
      renderCell: (params) => {
        return (
          <Styled.ListUser>
            <Styled.ListImg src={params.row.avatar} alt='' />
            {params.row.username}
          </Styled.ListUser>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaktions Volumen',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Aktion',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <Styled.ListEdit>Bearbeiten</Styled.ListEdit>
            </Link>
            <Styled.ListDelete onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <Styled.List>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Styled.List>
  );
}
