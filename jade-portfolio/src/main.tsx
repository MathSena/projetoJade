// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// src/main.tsx ou src/main.jsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Importar o MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Criar um tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#1E90FF', // Azul
    },
    secondary: {
      main: '#FF6347', // Vermelho
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

// Corrigindo o problema de tipo com non-null assertion (!)
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("O elemento root não foi encontrado!");
}
