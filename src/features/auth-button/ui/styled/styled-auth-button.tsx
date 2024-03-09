import { Button, styled } from '@mui/material'

export const StyledAuthButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.75),
  borderRadius: '10px',
  border: '1px solid #000',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 20,
  fontWeight: 500,
  lineHeight: 1.2,
  backgroundColor: '#fff',
  color: 'rgba(0, 0, 0, 0.54)',
  '& .MuiButton-startIcon': {
    marginRight: theme.spacing(2),
  },
  '&:hover': {
    border: '1px solid #000',
    backgroundColor: '#fff',
  },
}))
