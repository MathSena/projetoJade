// src/components/Navbar.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, IconButton, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Ícone de menu para dispositivos móveis

const Navbar: React.FC = () => {
  const theme = useTheme(); // Hook do MUI para usar o tema do Material-UI

  return (
    <AppBar position="static" sx={{ backgroundColor: '#141436', color: '#ffffff' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Título ou Logotipo */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
        eteacherjade
        </Typography>

        {/* Menu Ícone para dispositivos móveis */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Menu de Navegação para Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Button
            color="inherit"
            href="#home"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#ffffff',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            href="#about"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#ffffff',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            href="#services"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#ffffff',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            Services
          </Button>
          {/* Novo botão de navegação para Feedback */}
          <Button
            color="inherit"
            href="#feedback"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#ffffff',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            Feedback
          </Button>
          <Button
            color="inherit"
            href="#contact"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#ffffff',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
