// src/components/Contact.tsx
import React from 'react';
import { Container, Typography, Link, IconButton, Box, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Ícone para TikTok, representado pelo ícone de nota musical
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: '#141436', // Cor de fundo azulada
        color: '#ffffff', // Texto branco para contraste
        textAlign: 'center', // Centraliza o texto
        borderRadius: 0, // Remove bordas arredondadas para preencher a largura total
        width: '100%', // Preenche toda a largura da tela
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Texto de Contato */}
          <Grid item xs={12} md={6} textAlign="center">
            <Typography variant="h6" gutterBottom>
            @eteacherjade
            </Typography>
          </Grid>
          {/* Botões de Redes Sociais */}
          <Grid item xs={12} md={6} textAlign="center">
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
              <IconButton
                aria-label="Instagram"
                href="https://www.instagram.com"
                target="_blank"
                sx={{ color: '#ffffff', backgroundColor: '#1f1f6b', borderRadius: '50%', padding: 1 }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="Facebook"
                href="https://www.facebook.com"
                target="_blank"
                sx={{ color: '#ffffff', backgroundColor: '#1f1f6b', borderRadius: '50%', padding: 1 }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                href="https://www.twitter.com"
                target="_blank"
                sx={{ color: '#ffffff', backgroundColor: '#1f1f6b', borderRadius: '50%', padding: 1 }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                href="https://www.youtube.com"
                target="_blank"
                sx={{ color: '#ffffff', backgroundColor: '#1f1f6b', borderRadius: '50%', padding: 1 }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://www.linkedin.com"
                target="_blank"
                sx={{ color: '#ffffff', backgroundColor: '#1f1f6b', borderRadius: '50%', padding: 1 }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="TikTok"
                href="https://www.tiktok.com"
                target="_blank"
                sx={{ color: '#ffffff', backgroundColor: '#1f1f6b', borderRadius: '50%', padding: 1 }}
              >
                <MusicNoteIcon />
              </IconButton>
              <IconButton
                aria-label="Email"
                href="mailto:teacher@example.com"
                sx={{ color: '#ffffff', backgroundColor: '#1f1f6b', borderRadius: '50%', padding: 1 }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
