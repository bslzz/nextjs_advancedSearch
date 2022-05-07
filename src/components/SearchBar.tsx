import React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
  return (
    <Paper
      component='form'
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 600,
        height: 'fit-content',
        marginTop: '20px',
        borderRadius: 1
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search…'
        inputProps={{ 'aria-label': 'search' }}
      />
      <Button disabled>Clear</Button>
      <IconButton aria-label='search' type='submit' sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
