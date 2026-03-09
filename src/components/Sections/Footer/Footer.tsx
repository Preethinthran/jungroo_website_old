import React from 'react';
import { Box, Typography } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

const Footer = () => {
  // const theme = useTheme();

  return (
    <Box
      className="footer-container"
      sx={{
        padding: { xs: '30px 32px',sm:'30px 50px'}
      }}
    >
      <Box
        className="footer-content"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '0.5rem',
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontSize: '15px',
            fontWeight: 600,
            color: 'white',
            marginLeft: { xs: 0, md: '3rem', lg: '3rem' },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          © 2018–2025 Jungroo Learning
        </Typography>

        
      </Box>
    </Box>
  );
};

export default Footer;
