// src/components/Home.tsx
import React from "react";
import { Box, Container, Grid, Typography, Button, IconButton, styled, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Avatar from "../assets/avatar-jade.jpg"; // Verifique se o caminho da imagem está correto
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicVideoIcon from '@mui/icons-material/MusicVideo'; // Use este ícone para TikTok

// Componentes animados do Framer Motion com MUI
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const MotionImg = motion(
  styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.secondary.main}`,
  }))
);

// Estilo para o componente principal com fundo gradiente
const StyledHome = styled("div")(({ theme }) => ({
  background: "linear-gradient(to bottom, #B6AFA3, #f5f5f5)", // Gradiente de cor
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column", // Certifica-se de que os itens fiquem em coluna
  justifyContent: "center", // Centraliza verticalmente
  alignItems: "center", // Centraliza horizontalmente
  position: "relative",
  overflow: "hidden",
  padding: "0 20px",
  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0",
  },
}));

// Botão estilizado
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.contrastText,
  padding: '10px 20px',
  borderRadius: '30px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

// Estilo personalizado para as tipografias principais
const MainTitle = styled(MotionTypography)(({ theme }) => ({
  fontSize: '3rem', // Tamanho grande para destaque
  fontWeight: 700, // Negrito
  fontFamily: "'Arial', sans-serif",
  color: '#141436', // Cor azul para contraste
  marginBottom: theme.spacing(1),
}));

const Subtitle = styled(MotionTypography)(({ theme }) => ({
  fontSize: '1.5rem', // Subtítulo de tamanho médio
  fontWeight: 500, // Peso intermediário
  fontFamily: "'Arial', sans-serif",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <StyledHome>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={5}>
            <Box position="relative" textAlign="center">
              <MotionBox
                position="relative"
                textAlign="center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <MotionImg
                  src={Avatar}
                  alt="Avatar"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </MotionBox>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <MainTitle
              textAlign="center"
              pb={2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Jade Hamed • English Teacher
            </MainTitle>
            <Subtitle
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              🤍 Agenda aberta para manhãs & tardes
            </Subtitle>
            <Subtitle
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ✨ Aulas on-line para todos os níveis
            </Subtitle>
            <Subtitle
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              ➿ Personalizado para seu objetivo
            </Subtitle>
            <Subtitle
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              ✉️ Send me a message!
            </Subtitle>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <StyledButton>
                    <MailOutlineIcon />
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </motion.div>
              </Grid>
            </Grid>
            {/* Ícones de Redes Sociais */}
            <Box display="flex" justifyContent="center" mt={4}>
              <IconButton
                aria-label="Instagram"
                onClick={() => window.open("https://www.instagram.com/eteacherjade", "_blank")}
                sx={{ color: theme.palette.primary.main }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="TikTok"
                onClick={() => window.open("https://www.tiktok.com/@eteacherjade", "_blank")}
                sx={{ color: theme.palette.primary.main }}
              >
                <MusicVideoIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledHome>
  );
};

export default Home;
