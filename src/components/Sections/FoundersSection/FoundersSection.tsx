import React, { useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion, useInView ,easeOut } from 'framer-motion';
import './styles/FoundersSection.css';


const FoundersSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const ceoRef = useRef(null);
  const ctoRef = useRef(null);
  const isCeoInView = useInView(ceoRef, { once: true, margin: '-100px' });
  const isCtoInView = useInView(ctoRef, { once: true, margin: '-100px' });

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };
  
  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };
  
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.currentTime = 0;
      videoEl.play().catch(() => {});
    }
  
    return () => {
      if (videoEl && !videoEl.paused) {
        videoEl.pause();
      }
    };
  }, []);
  
  

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'transparent',
        minHeight: '100vh',
        py: isMobile ? '0rem' : '2rem',
        px: { xs: 2, sm: 3 },
        overflow: 'hidden',
      }}
    >
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(6, 4, 27, 0.7)',
          zIndex: -1,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2rem",     // phones
              sm: "2.5rem",   // tablets
              md: "3rem",     // small laptops
              lg: "3.5rem",   // desktops
            },
            fontWeight: 600,
            textAlign: "center",
            pb: {
              xs: "4rem",
              sm: "6rem",
            },
            lineHeight: 1.1,
            color: "white",
            zIndex: 10,
            marginX:'auto'
          }}
        >
          Meet Our Founders
        </Typography>

        <Box
          sx={{
            maxWidth: '75rem',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '3rem', sm: '4rem', md: '5rem' },
          }}
        >
          {/* CEO Section */}
          <motion.div
            ref={ceoRef}
            variants={slideInLeft}
            initial="hidden"
            animate={isCeoInView ? 'visible' : 'hidden'}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: { xs: '2rem', md: '3rem', lg: '6rem' },
                width: '100%',
                borderRadius: '17px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                textAlign:'left',
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Box
                component="img"
                src='/assets/ceo.webp'
                alt="CEO Sethuraman"
                sx={{
                  width: { xs: '12rem', sm: '14rem', lg: '16rem' },
                  height: { xs: '14rem', sm: '16rem', lg: '21rem' },
                  objectFit: 'cover',
                  marginLeft: { md: '6rem' },
                  flexShrink: 0,
                  marginTop: '3rem',
                }}
              />
              <Box
                sx={{
                  borderRadius: '1rem',
                  padding: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  flex: 1,
                  minWidth: 0,
                  boxShadow: `0 0.25rem 1.5rem rgba(10, 105, 156, 0.15)`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    marginBottom: '0.5rem',
                    textAlign:{xs:'center',md:'left'}
                  }}
                >
                  Meet CEO
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: '1.5rem',
                      sm: '1.75rem',
                      md: '2rem',
                      lg: '2.25rem',
                    },
                    fontWeight: 600,
                    color: '#0050d0',
                    marginBottom: '1rem',
                    textAlign:{xs:'center',md:'left'}
                  }}
                >
                  Sethuraman T A
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent:{xs:'center',md:"flex-start"},
                    marginBottom: '0.75rem',
                  }}
                >
                  <EmailIcon
                    sx={{
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      marginRight: '0.5rem',
                      color: '#0050d0',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      color: theme.palette.text.secondary,
                    }}
                  >
                    sethu@jungroo.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                    justifyContent:{xs:'center',md:"flex-start"},
                  }}
                >
                  <LinkedInIcon
                    sx={{
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      marginRight: '0.5rem',
                      color: '#0050d0',
                    }}
                  />
                  <Link
                    href="https://www.linkedin.com/in/sethuraman-t-a-01b35333/"
                    underline="none"
                    target="_blank"
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      color: 'rgba(255,255,255,0.5)',
                      fontWeight:550
                    }}
                  >
                    LinkedIn Profile
                  </Link>
                </Box>
                <Typography
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    marginBottom: '1rem',
                    fontStyle: 'italic',
                    textAlign:{xs:'center',md:'left'}
                  }}
                >
                  "Sethuraman is driven by a passion for creating impact through technology. His core focus lies in value creation and excellence in execution. From grassroots education to enterprise systems, he prioritizes solving systemic challenges through product innovation."
                </Typography>
                <Typography
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: { xs: '0.875rem', sm: '1.2rem' },
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    textAlign:{xs:'center',md:'left'}
                  }}
                >
                  At Jungroo, he turns vision into execution.
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* CTO Section */}
          <motion.div
            ref={ctoRef}
            variants={slideInRight}
            initial="hidden"
            animate={isCtoInView ? 'visible' : 'hidden'}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row-reverse' },
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: { xs: '2rem', md: '3rem', lg: '6rem' },
                width: '100%',
                borderRadius: '17px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <Box
                component="img"
                src='/assets/cto.webp'
                alt="CTO Cibe Hariharan"
                sx={{
                  width: { xs: '20rem', sm: '18rem', lg: '23rem' },
                  height: { xs: '18rem', sm: '16rem', lg: '21rem' },
                  objectFit: 'cover',
                  flexShrink: 0,
                  marginTop: '4.5rem',
                  marginBottom: { xs: '2rem', md: '0rem' },
                  borderRadius: '1rem',
                  marginLeft: { xs: '5rem', md: '2rem' },
                }}
              />
              <Box
                sx={{
                  backgroundColor: theme.palette.background.default,
                  borderRadius: '1rem',
                  padding: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  flex: 1,
                  minWidth: 0,
                  boxShadow: `0 0.25rem 1.5rem rgba(10, 105, 156, 0.15)`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    marginBottom: '0.5rem',
                    textAlign:{xs:'center',md:'right'}
                  }}
                >
                  Meet CTO
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: '1.5rem',
                      sm: '1.75rem',
                      md: '2rem',
                      lg: '2.25rem',
                    },
                    fontWeight: 600,
                    color: '#0050d0',
                    marginBottom: '1rem',
                    textAlign:{xs:'center',md:'right'}
                  }}
                >
                  Cibe Hariharan
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                    justifyContent:{xs:'center',md:"flex-end"},

                  }}
                >
                  <EmailIcon
                    sx={{
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      marginRight: '0.5rem',
                      color: '#0050d0',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      color: theme.palette.text.secondary,
                    }}
                  >
                    cibe@jungroo.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                    justifyContent:{xs:'center',md:"flex-end"},
                  }}
                >
                  <LinkedInIcon
                    sx={{
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      marginRight: '0.5rem',
                      color: '#0050d0',
                    }}
                  />
                  <Link
                    href="https://www.linkedin.com/in/cibe-hariharan-85ab9b28/"
                    underline="none"
                    target="_blank"
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      color: 'rgba(255,255,255,0.5)',
                      fontWeight:550
                    }}
                  >
                    LinkedIn Profile
                  </Link>
                </Box>
                <Typography
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    marginBottom: '1rem',
                    fontStyle: 'italic',
                    textAlign:{sm:'center',md:'right'}
                  }}
                >
                  "Cibe Hariharan is fueled by his belief in the limitless possibilities technology offers. He is a technical leader with deep AI/ML expertise, over 10 years of experience building scalable systems, and is an IEEE-published author and ex-Amazon engineer with a Master’s in Theoretical Engineering."
                </Typography>
                <Typography
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: { xs: '0.875rem', sm: '1.2rem' },
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    textAlign:{sm:'center',md:'right'}
                  }}
                >
                  At Jungroo, he excels at transforming insights into scalable products — from ideation to deployment for millions of users.
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default FoundersSection;
