// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Importar slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importar o MUI e CssBaseline
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A5D45', // Verde-oliva suave como cor principal
      dark: '#4A5E45', // Versão mais escura para efeitos de hover
      contrastText: '#ffffff', // Texto branco para botões
    },
    secondary: {
      main: '#BCB6AB', // Bege suave como cor secundária (fundo)
      contrastText: '#141436', // Texto escuro nos elementos
    },
    accent: {
      main: '#FF6F61', // Laranja coral como cor de acento
    },
    text: {
      primary: '#141436', // Azul-escuro para o texto principal
      secondary: '#333333', // Cinza escuro para subtítulos e texto adicional
    },
    success: {
      main: '#00C853', // Verde para ícones de sucesso ou botões de ação
    },
    background: {
      default: '#F5F5F5', // Fundo padrão
      paper: '#ffffff', // Fundo dos cards e containers
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#141436',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
      color: '#333333',
    },
    body1: {
      fontSize: '1rem',
      color: '#333333',
    },
    button: {
      textTransform: 'none', // Evitar tudo em maiúsculas nos botões
    },
  },
});

// Corrigindo o problema de tipo com non-null assertion (!)
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        {/* CssBaseline aplicado para reset de estilos */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}
