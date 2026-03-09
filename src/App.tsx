import React, { useEffect } from 'react';
import './App.css';
// import Footer from './components/Sections/Footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Sections/HomePage';
import CaseStudiesList from './components/Sections/CaseStudies/CaseStudiesList';
import CaseStudyPage from './components/Sections/CaseStudies/CaseStudyPage';
import ScrollToTop from './components/ScrollTToTop';
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#06041b',
    },
    text: {
      primary: '#ffffff',
    },
    primary: {
      main: '#0050d0',
    },
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '3rem',   // Base: md
      fontWeight: 500,
      lineHeight: 1.1,
      color: '#ffffff',
      textAlign: 'center',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#ffffff',
      textAlign: 'center',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.3,
      color: '#ffffff',
      textAlign: 'center',
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 500,
      lineHeight: 1.3,
      color: '#ffffff',
      textAlign: 'center',
    },
    body1: {
      fontSize: '1.1rem',
      fontWeight: 600,
      opacity: 0.75,
      color: '#ffffff',
      textAlign: 'center',
      maxWidth: '1000px',
    },
  },
});


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="case-studies" element={<CaseStudiesList/>}/>
            <Route path="case-studies/:slug" element={<CaseStudyPage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
