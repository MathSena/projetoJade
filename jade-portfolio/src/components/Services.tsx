import React from 'react';
import { Container, Grid, Typography, List, ListItem, ListItemText, ListItemIcon, styled, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ServiceImage from '../assets/service-image.jpg';

// Estilização da imagem para preencher 100% do espaço do grid
const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
});

// Estilo personalizado para o título com gradiente
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'left',
  background: 'linear-gradient(90deg, #6B705C, #BCB6AB)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(2),
}));

// Estilo personalizado para os itens da lista
const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.palette.text.primary,
  fontFamily: 'Arial, sans-serif',
}));

// Estilo personalizado para o container
const FullHeightContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Services: React.FC = () => {
  return (
    <FullHeightContainer id="services">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <StyledImg src={ServiceImage} alt="Aulas de Inglês" />
        </Grid>

        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box sx={{ textAlign: 'left' }}>
            <StyledTitle variant="h4">Meus Serviços</StyledTitle>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" sx={{ fontSize: '1.5rem', color: '#00C853' }} />
                </ListItemIcon>
                <StyledListItemText primary="Aulas de Inglês para Iniciantes" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" sx={{ fontSize: '1.5rem', color: '#00C853' }} />
                </ListItemIcon>
                <StyledListItemText primary="Prática de Conversação" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" sx={{ fontSize: '1.5rem', color: '#00C853' }} />
                </ListItemIcon>
                <StyledListItemText primary="Apoio em Gramática e Escrita" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" sx={{ fontSize: '1.5rem', color: '#00C853' }} />
                </ListItemIcon>
                <StyledListItemText primary="Programa de Desenvolvimento de Fluência" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" sx={{ fontSize: '1.5rem', color: '#00C853' }} />
                </ListItemIcon>
                <StyledListItemText primary="Treinamento de Pronúncia e Acento" />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </FullHeightContainer>
  );
};

export default Services;
