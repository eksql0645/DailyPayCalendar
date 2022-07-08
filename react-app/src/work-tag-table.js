import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const tags = [
  {
    name: '주간',
    unit: 1.0,
  },
  {
    name: '연장',
    unit: 1.5,
  },
];

export default function BasicTable() {
  return (
    <TableContainer style={{ width: 400 }} component={Paper}>
      <Table sx={{ minWidth: 400 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>근로 종류</TableCell>
            <TableCell>공수</TableCell>
            <TableCell>단가</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map((tag) => (
            <TableRow
              key={tag.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tag.name}
              </TableCell>
              <TableCell>{tag.unit}</TableCell>
              <TableCell>state</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
