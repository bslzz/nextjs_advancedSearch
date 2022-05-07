import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Chip from '@mui/material/Chip'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface CategoriesProps {
  categories: string[]
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const MultiSelectChip: FC<CategoriesProps> = ({ categories }) => {
  const [filterName, setFilterName] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof filterName>) => {
    const {
      target: { value }
    } = event
    setFilterName(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    <Box>
      <FormControl sx={{ m: 1, width: 100 }}>
        <InputLabel id='demo-select-label'>Categories</InputLabel>
        <Select
          labelId='demo-select-label'
          id='demo-multi-select'
          multiple
          value={filterName}
          input={<OutlinedInput id='select-multiple' label='chip' />}
          MenuProps={MenuProps}
          autoWidth
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default MultiSelectChip
