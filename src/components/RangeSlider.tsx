import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

interface AmountRangeProps {
  amountRange: number[]
}

function valuetext(value: number) {
  return `${value}°C`
}

const RangeSlider: FC<AmountRangeProps> = ({ amountRange }) => {
  const [value, setValue] = React.useState<number[]>(amountRange)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  return (
    <Box sx={{ width: 400, padding: '25px 10px' }}>
      <Slider
        getAriaLabel={() => 'Slider'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='on'
        getAriaValueText={valuetext}
      />
    </Box>
  )
}

export default RangeSlider
