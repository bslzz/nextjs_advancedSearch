import React, { FC } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { alpha, Button, Menu, MenuProps, styled } from '@mui/material'
import { Box } from '@mui/material'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgba(0, 0, 0, 0.6)',
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px',
    '& .MuiMenu-list': {
      padding: '4px 5px'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: '1.1rem',
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}))

interface DropDownWrapperProps {
  title: string
  children: JSX.Element[] | JSX.Element
}

const DropDownWrapper: FC<DropDownWrapperProps> = ({ title, children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id='dropdown-button'
        variant='outlined'
        aria-haspopup='true'
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          borderColor: 'rgba(0, 0, 0, 0.23)',
          color: 'rgba(0, 0, 0, 0.87)',
          textTransform: 'none',
          fontWeight: 400
        }}
      >
        {title}
      </Button>
      <StyledMenu
        id='demo-menu'
        MenuListProps={{ 'aria-labelledby': 'dropdown-menu' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box>{children}</Box>
      </StyledMenu>
    </div>
  )
}

export default DropDownWrapper
