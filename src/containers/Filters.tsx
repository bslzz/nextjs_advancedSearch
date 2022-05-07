import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import DropDownWrapper from '../components/DropDown'
import MultiSelectChip from '../components/MultiSelect'
import RangeSlider from '../components/RangeSlider'
import styles from '../../styles/Filters.module.css'
import AutoCompleteCheckBoxes from '../components/AutoComplete'
import { transactions } from '../data/mock_transactions'
import { ITransactions } from '../types'

const categories = Array.from(
  new Set(
    transactions.map((transaction: ITransactions) => transaction.category)
  )
)
const names = Array.from(
  new Set(
    transactions.map(
      (transaction: ITransactions) => transaction.transaction_name
    )
  )
)
const vendors = Array.from(
  new Set(
    transactions.map(
      (transaction: ITransactions) => transaction.transaction_vendor
    )
  )
)

const amountRange = [0, 1000]

const Filters = () => {
  return (
    <Box
      sx={{
        width: 600,
        backgroundColor: '#fff',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: '1px',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: 1
      }}
    >
      <Box className={styles.filtersContainer}>
        <MultiSelectChip categories={categories} />
        <DropDownWrapper title='Price Range'>
          <RangeSlider amountRange={amountRange} />
        </DropDownWrapper>
        <AutoCompleteCheckBoxes options={vendors} />
      </Box>

      <Button disabled>Reset</Button>
    </Box>
  )
}

export default Filters
