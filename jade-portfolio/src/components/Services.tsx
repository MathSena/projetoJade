import React from 'react';
import { Container, Grid, Typography, List, ListItem, ListItemText, ListItemIcon, styled, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ServiceImage from '../assets/service-image.jpg'; // Verifique se o caminho da imagem está correto

// Estilização da imagem para preencher 100% do espaço do grid
const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Garante que a imagem cubra todo o espaço sem distorção
  borderRadius: '8px',
});

// Estilo personalizado para o título com gradiente
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem', // Tamanho maior para destacar o título
  fontWeight: 'bold', // Negrito
  textAlign: 'left', // Alinhamento à esquerda
  background: 'linear-gradient(90deg, #ff6e7f, #bfe9ff)', // Gradiente de cor
  WebkitBackgroundClip: 'text', // O gradiente preenche o texto
  WebkitTextFillColor: 'transparent', // O gradiente é visível apenas no texto
  marginBottom: theme.spacing(2),
}));

// Estilo personalizado para os itens da lista
const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  fontSize: '1.2rem', // Tamanho da fonte um pouco maior
  color: theme.palette.text.primary, // Cor primária do texto
  fontFamily: 'Arial, sans-serif',
}));

// Estilo personalizado para o container
const FullHeightContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  height: '100vh', // Ocupa 100% da altura da viewport
  display: 'flex',
  alignItems: 'center', // Centraliza verticalmente
  justifyContent: 'center', // Centraliza horizontalmente
}));

const Services: React.FC = () => {
  return (
    <FullHeightContainer id="services">
      <Grid container spacing={4} alignItems="center">
        {/* Imagem que preenche 100% do espaço à esquerda */}
        <Grid item xs={12} md={6}>
          <StyledImg src={ServiceImage} alt="Aulas de Inglês" />
        </Grid>

        {/* Lista de Serviços à direita, alinhada à direita */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box sx={{ textAlign: 'left' }}>
            <StyledTitle variant="h4">
              Meus Serviços
            </StyledTitle>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" sx={{ fontSize: '1.5rem', color: '#4caf50' }} />
                </ListItemIcon>
                <StyledListItemText primary="Aulas de Inglês para Iniciantes" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" sx={{ fontSize: '1.5rem', color: '#4caf50' }} />
                </ListItemIcon>
                <StyledListItemText primary="Prática de Conversação" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" sx={{ fontSize: '1.5rem', color: '#4caf50' }} />
                </ListItemIcon>
                <StyledListItemText primary="Apoio em Gramática e Escrita" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" sx={{ fontSize: '1.5rem', color: '#4caf50' }} />
                </ListItemIcon>
                <StyledListItemText primary="Programa de Desenvolvimento de Fluência" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" sx={{ fontSize: '1.5rem', color: '#4caf50' }} />
                </ListItemIcon>
                <StyledListItemText primary="Treinamento de Pronúncia e Acento" />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </FullHeightContainer>
  );
}

export default Services;