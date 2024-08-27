// src/components/Common/StyledButton/StyledButton.tsx
import React from 'react';
import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.contrastText,
  padding: '10px 20px',
  borderRadius: '50px',
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export default StyledButton;
