import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Link } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const EMAIL = 'hello@jungroo.com';

const ContactUsSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      id="contact-us"
      component="section"
      aria-labelledby="contact-us-heading"
      sx={{
        width: '100%',
        backgroundColor: '#06041b',
        opacity:1,
        py: isMobile ? '3.5rem' : '5.5rem',
        px: isMobile ? '1.2rem' : isTablet ? '3rem' : '7rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '2.5rem' : '4rem',
        zIndex:11,
      }}
    >
      {/* Left: Contact Info */}
      <Box
        sx={{
          flex: 1,
          maxWidth: isMobile ? '100%' : '32rem',
          color: theme.palette.text.primary,
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          
        }}
      >
        <Typography
          id="contact-us-heading" 
          variant="h1"
          sx={{
            fontSize: {
              xs: "2rem",     // phones
              sm: "2.5rem",   // tablets
              md: "3rem",     // small laptops
              lg: "3.5rem",   // desktops
            },
            fontWeight: 600,
            pb: {
              xs: "2rem",
              sm: "3rem",
            },
            lineHeight: 1.1,
            color: "white",
            zIndex: 10,
            marginX:'auto',
            textAlign: isMobile?'center':'left',
            }}
          >
          Contact us
        </Typography>
        <Typography
          sx={{
            
            color: '#0050d0',
            fontSize: isMobile ? '1rem' : '1.3rem',
            fontWeight: 550,
            mb: '2.2rem',
            textAlign: isMobile ? 'center' : 'left',
            lineHeight: 1.45,
          }}
        >
          Interested in working together? <br/>Reach out to us.
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          mb: '1.15rem',
          gap: '1rem',
          justifyContent: isMobile ? 'center' : 'flex-start',
        }}>
          <EmailOutlinedIcon sx={{ color: '#a8a8a8', fontSize: '1.5rem' }} />
          <Link
            href={`mailto:${EMAIL}`}
            underline="hover"
            sx={{
              color: '#a8a8a8',
              fontSize: '1.1rem',
              wordBreak: 'break-all',
              fontWeight: 600,
              underline:'none'
            }}
          >
            {EMAIL}
          </Link>
        </Box>
      </Box>

      {/* Right: Image */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'flex-end',
          width: '100%',
        }}
      >
        <Box
          component="img"
          src='/assets/contactus.webp'
          alt="Contact us illustration"
          role="presentation"
  aria-hidden="true"
          sx={{
            width: isMobile ? '70vw' : isTablet ? '18rem' : '23rem',
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            zIndex:10
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactUsSection;