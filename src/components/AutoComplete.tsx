import React, { FC } from 'react'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

interface AutoCompleteProps {
  options: string[]
}

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />
const checkedIcon = <CheckBoxIcon fontSize='small' />

const AutoCompleteCheckBoxes: FC<AutoCompleteProps> = ({ options }) => {
  return (
    <Autocomplete
      multiple
      id='checkboxes-tags-demo'
      options={options}
      disableCloseOnSelect
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            value={option}
          />
          {option}
        </li>
      )}
      style={{ width: 200 }}
      renderInput={(params) => (
        <TextField {...params} label='Checkboxes' placeholder='Favorites' />
      )}
    />
  )
}

export default AutoCompleteCheckBoxes
