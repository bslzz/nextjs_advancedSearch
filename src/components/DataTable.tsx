import React, { FC } from 'react'
import { ITransactions } from '../types'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

interface DataTableProps {
  columns: string[]
  rows: ITransactions[]
}

const DataTable: FC<DataTableProps> = ({ columns, rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label='table'>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column} align='right'>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.transaction_name}
              </TableCell>
              <TableCell align='right'>{row.amount}</TableCell>
              <TableCell align='right'>{row.category}</TableCell>
              <TableCell align='right'>{row.transaction_vendor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
