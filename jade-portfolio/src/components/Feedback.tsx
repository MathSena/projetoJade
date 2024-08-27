import React, { useMemo } from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, styled, Rating } from '@mui/material';
import Slider from 'react-slick';

// Importação direta das imagens
import senaImage from '../assets/sena.png';
import oliviaImage from '../assets/olivia.jpeg';
import brunoImage from '../assets/bruno.jpg';

// Estilo do título usando styled do MUI
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem', // Aumenta o tamanho da fonte
  fontWeight: 'bold', // Torna o texto em negrito
  textAlign: 'center', // Centraliza o texto
  background: 'linear-gradient(90deg, #ff6e7f, #bfe9ff)', // Adiciona um gradiente de cor ao texto
  WebkitBackgroundClip: 'text', // Faz o gradiente preencher o texto
  WebkitTextFillColor: 'transparent', // Faz o gradiente visível apenas no texto
  marginBottom: theme.spacing(3), // Adiciona espaçamento inferior
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Adiciona sombra ao texto para profundidade
}));

// Estilo do card de feedback
const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  textAlign: 'center',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  boxShadow: theme.shadows[3],
  borderRadius: theme.spacing(1),
}));

// Estilo da imagem
const StyledCardMedia = styled(CardMedia)({
  width: 120,
  height: 120,
  borderRadius: '10%', // Ajuste para bordas levemente arredondadas
  objectFit: 'cover',
  marginBottom: 16,
});

// Dados de feedback dos alunos
const feedbackData = [
  { 
    name: 'Matheus Sena',
    image: senaImage,
    feedback: 'Jade is an amazing teacher! Her methods are clear and she really helped me improve my pronunciation.',
    rating: 5,
  },
  {
    name: 'Bruno Mars',
    image: oliviaImage,
    feedback: 'I love the way Jade teaches. The lessons are fun and interactive. I learned so much in just a few weeks!',
    rating: 4,
  },
  {
    name: 'Olivia Rodrigo',
    image: brunoImage,
    feedback: 'The Fluent English Development Program was exactly what I needed. Jade is the best!',
    rating: 5,
  },
];

// Componente FeedbackCard
const FeedbackCard: React.FC<{ student: typeof feedbackData[0] }> = ({ student }) => (
  <StyledCard>
    <StyledCardMedia
      component="img"
      image={student.image}
      alt={`Foto de ${student.name}`}
    />
    <CardContent>
      <Typography variant="h6" component="div" gutterBottom>
        {student.name}
      </Typography>
      <Rating name="read-only" value={student.rating} readOnly sx={{ marginBottom: 1 }} />
      <Typography variant="body2" color="text.secondary">
        {student.feedback}
      </Typography>
    </CardContent>
  </StyledCard>
);

const Feedback: React.FC = () => {
  // Configurações do carrossel
  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    adaptiveHeight: true,
  }), []);

  return (
    <Container id="feedback" sx={{ paddingTop: 4, paddingBottom: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StyledTitle variant="h4">
        Student Feedback
      </StyledTitle>
      <Box sx={{ width: '100%', maxWidth: 600 }}>
        <Slider {...settings}>
          {feedbackData.map((student, index) => (
            <FeedbackCard key={index} student={student} />
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Feedback;
