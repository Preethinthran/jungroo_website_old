import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const awards = [
  {
    title: 'AI FOR GOOD AWARD',
    subtitle: 'NASSCOM & Govt. of Karnataka',
    image:'/assets/nasscomaward.webp',
  },
  {
    title: 'AI GAME CHANGER AWARD',
    subtitle: 'NASSCOM, Microsoft & Deloitte',
    image:'/assets/aigame.webp',
  },
  {
    title: 'WINNER OF ELEVATE GRANT',
    subtitle: 'Government of Karnataka',
    image:'/assets/elevate.webp'
  },
  {
    title: 'MILLENNIUM ALLIANCE GRANT AWARDEE',
    subtitle: 'Millennium Alliance',
    image: '/assets/millenium.webp',
  },
  
];

interface AwardsRecognitionProps {
  isVersion2?: boolean;
}

const AwardsRecognition: React.FC<AwardsRecognitionProps> = ({ isVersion2 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          py: isMobile ? '0rem' : '0rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
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
                xs: "1.5rem",
                sm: "3rem",
              },
              lineHeight: 1.1,
              color: "white",
              zIndex: 10,
              marginX:'auto'
            }}
          >
            Awards & Recognition
          </Typography>
        </motion.div>
        <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1  }}
                viewport={{ once: true }}
              >
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 4 }}
          justifyContent="center"
          sx={{ paddingTop: '1rem', px: { xs: 2, sm: 4, md: 6 } }}
        >
          {awards.map((award, index) => (
            <Grid size={{xs:12, sm:6, md:3}} key={index}>
              
                <Card
                  sx={{
                    background:theme.palette.background.default,
                    height: { xs: '13.75rem', sm: '15.625rem', md: '16.875rem', lg: '20rem' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 0, md: 2 },
                    mb: '1rem',
                  }}
                >
                  <Box
                    component="img"
                    src={award.image}
                    alt={award.title}
                    sx={{
                      height: { xs: '8.125rem', sm: '8.125rem', md: '5.625rem', lg: '6.25rem' },
                      mt:'1rem',
                      mb: { xs: 1, sm: 3 },
                      objectFit: 'contain',
                      backgroundColor: 'transparent',
                    }}
                  />
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      sx={{
                        fontSize: isMobile ? '1.3rem' : isTablet ? '1.3rem' : '1.4rem',
                        fontWeight: '600',
                        marginBottom: '16px',
                        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                        textAlign:'center',
                        zindex: 1,
                      }}
                    >
                      {award.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: isMobile ? '1.03rem' : isTablet ? '1.07rem' : '1.07rem',
                  marginBottom: '32px',
                  maxWidth: '480px',
                  lineHeight: '1.5',
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  textAlign:'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: '500',
                  zIndex:1,
                      }}
                    >
                      {award.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
            </Grid>
          ))}
        </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AwardsRecognition;