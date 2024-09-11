import React from 'react';
import { Container, Grid, Typography, styled, Box } from '@mui/material';
import Avatar from '../assets/about.png'; // Verifique se o caminho da imagem está correto

// Estilização da imagem para que fique redonda e com borda
const StyledImg = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '400px', // Aumentei o tamanho máximo da imagem para se destacar mais
  borderRadius: '50%',
  border: `3px solid ${theme.palette.secondary.main}`, // Borda com a cor secundária do tema
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Adicionando um leve sombreamento para dar destaque
}));

const About: React.FC = () => {
  return (
    <Container id="about" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Grid container spacing={6} alignItems="center">

        {/* Texto à esquerda */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#141436', // Usando uma cor forte para o título
              fontSize: '2.5rem',
            }}
          >
            QUEM SERÁ SUA PROFESSORA?
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: '#BCB6AB', // Cor em tom mais suave para subtítulo
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
            }}
          >
            Olá! Eu sou Jade Hamed.
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: '#333333', fontSize: '1.1rem' }}>
            Sou uma professora de inglês apaixonada e moro no Brasil. Desde pequena, sou fascinada pela língua inglesa 
            e por como ela conecta pessoas ao redor do mundo. Meu objetivo é ajudar você a falar inglês com fluência e confiança!
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: '#333333', fontSize: '1.1rem' }}>
            Ofereço aulas online personalizadas de acordo com as suas necessidades, desde o nível iniciante até o avançado,
            focando em uma pronúncia clara, comunicação eficaz e no fortalecimento da sua confiança.
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: '#333333', fontSize: '1.1rem' }}>
            Seja para contextos profissionais, viagens ou para aprimorar suas habilidades linguísticas, minhas aulas são interativas e pensadas
            para ajudar você a alcançar seus objetivos de forma leve e divertida.
          </Typography>
        </Grid>

        {/* Imagem à direita */}
        <Grid item xs={12} md={5} display="flex" justifyContent="center">
          <StyledImg src={Avatar} alt="Jade Hamed" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
