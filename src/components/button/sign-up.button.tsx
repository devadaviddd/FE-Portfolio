import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: '#3f46fb',
  },
  marginTop: '15px',
  width: '100%',
  borderRadius: '28px',
  height: '50px',
}));

export const SignUpButton = () => {
  return (
    <Stack spacing={2} direction="row" sx={{
      width: '80%'
    }}>
      <ColorButton variant="contained" size='medium'>Sign up</ColorButton>
    </Stack>
  );
}