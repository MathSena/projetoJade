// src/components/About.tsx
import React from 'react';
import { Container, Grid, Typography, Box, styled } from '@mui/material';
import Avatar from '../assets/about.png'; // Verifique se o caminho da imagem está correto

// Estilização da imagem para que fique redonda e com borda
const StyledImg = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.secondary.main}`,
}));

function About() {
  return (
    <Container id="about" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Texto à esquerda */}
        <Grid item xs={12} md={7}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            WHO WILL BE YOUR TEACHER?
          </Typography>
          <Typography variant="body1" paragraph>
            Olá! Eu sou a Jade Hamed.
          </Typography>
          <Typography variant="body1" paragraph>
            Desde pequena, sempre fui apaixonada por ensinar inglês. Crescendo no Brasil, eu adorava falar inglês verdadeiro com uma bela pronúncia.
          </Typography>
          <Typography variant="body1" paragraph>
            Todos os meses, muitos alunos apreciam meus vídeos no Instagram e aulas online, beneficiando-se do meu programa de Desenvolvimento de Inglês Fluente.
          </Typography>
          <Typography variant="body1" paragraph>
            Eu treino meus alunos para pronunciar inglês corretamente, oferecendo clareza e aumentando sua confiança. Começamos focando na pronúncia desde o primeiro dia!
          </Typography>
          <Typography variant="body1" paragraph>
            No nosso Programa de Desenvolvimento de Inglês Fluente, ofereço uma série de exercícios práticos para ajudar com a memória muscular, para que você fale inglês fluentemente para sempre.
          </Typography>
          <Typography variant="body1" paragraph>
            Mas se você seguir as lições e aplicá-las da maneira correta, também pode ser muito divertido quanto mais você avançar!
          </Typography>
        </Grid>

        {/* Imagem à direita */}
        <Grid item xs={12} md={5} display="flex" justifyContent="center">
          <StyledImg src={Avatar} alt="Jade Hamed" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
