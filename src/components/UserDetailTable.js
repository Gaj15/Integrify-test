import { Typography, Table, TableRow, TableHead, TableCell, TableBody } from '@material-ui/core';

const UserDetailTable = ({ detail }) => {
  return <Table aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell><Typography variant="h6" style={{ textDecorationLine: 'underline' }}>{detail.header}</Typography></TableCell>
        <TableCell align="left"></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        detail.items.map(item => {
          return <TableRow key={item.key}>
            <TableCell style={{ width: '20%' }} component="th" scope="row">
              <strong>{item.key}</strong>
            </TableCell>
            <TableCell align="left">{item.value}</TableCell>
          </TableRow>
        })
      }
    </TableBody>
  </Table>
};

export default UserDetailTable;