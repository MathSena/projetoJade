import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const theme = useTheme(); // Hook do MUI para usar o tema do Material-UI
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Estado para controlar o drawer do menu mobile

  // Função para abrir/fechar o drawer
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.secondary.contrastText }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Título ou Logotipo */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontFamily: theme.typography.fontFamily }}>
          eteacherjade
        </Typography>

        {/* Menu Ícone para dispositivos móveis */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' } }}
          onClick={toggleDrawer(true)} // Abre o drawer
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer para menu mobile */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250 }}>
            {['Home', 'About', 'Services', 'Feedback', 'Contact'].map((text) => (
              <ListItem button key={text} onClick={toggleDrawer(false)}>
                <ListItemText primary={text} sx={{ textAlign: 'center' }} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Menu de Navegação para Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {['Home', 'About', 'Services', 'Feedback', 'Contact'].map((section) => (
            <Button
              key={section}
              color="inherit"
              href={`#${section.toLowerCase()}`}
              sx={{
                fontWeight: 'bold',
                fontFamily: theme.typography.fontFamily,
                position: 'relative',
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  color: theme.palette.primary.contrastText,
                  transition: 'all 0.3s ease-in-out',
                },
                // Indicador de página ativa
                '&.active': {
                  color: theme.palette.primary.contrastText,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: theme.palette.secondary.main,
                  },
                },
              }}
            >
              {section}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
