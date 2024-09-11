import React, { useMemo } from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, styled, Rating } from '@mui/material';
import Slider from 'react-slick';

import senaImage from '../assets/sena.png';
import oliviaImage from '../assets/olivia.jpeg';
import brunoImage from '../assets/bruno.jpg';

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  background: 'linear-gradient(90deg, #6B705C, #BCB6AB)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(3),
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
}));

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

const StyledCardMedia = styled(CardMedia)({
  width: 120,
  height: 120,
  borderRadius: '10%',
  objectFit: 'cover',
  marginBottom: 16,
});

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

const FeedbackCard: React.FC<{ student: typeof feedbackData[0] }> = ({ student }) => (
  <StyledCard>
    <StyledCardMedia image={student.image} alt={`Foto de ${student.name}`} />
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
      <StyledTitle variant="h4">Student Feedback</StyledTitle>
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
