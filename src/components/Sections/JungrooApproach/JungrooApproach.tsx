import React from 'react';
import { Box, Typography, Card, useTheme, useMediaQuery } from '@mui/material';
import { Cpu, PackageSearch, Handshake } from "lucide-react";


import { motion } from 'framer-motion';

const JungrooApproach: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
    <Box
      sx={{
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    padding: {xs:'45px 20px',md:'65px 20px'},
    paddingTop:'100px',
      }}
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
        }}
      >
        The Jungroo Approach
      </Typography>

      <Typography
  sx={{
    textAlign: "center",
    opacity: 0.75,
    fontSize: {
      xs: "0.95rem",
      sm: "1.05rem",
      md: "1.3rem",
    },
    fontWeight: 500,
    letterSpacing:1.2,
    color: "rgba(255,255,255,1)",
    maxWidth:'1000px',
    pb: {
        xs: "1.5rem",
        sm: "2rem",
      },
  }}
>
        We work best with teams and people who care about impact over optics, execution over buzzwords, and collaboration over contracts.
        We’re selective about who we partner with — not because we’re exclusive, but because we’re committed.
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          opacity: 0.75,
          fontSize: {
            xs: "1.1rem",
            sm: "1.35rem",
            md: "2rem",
          },
          fontWeight: 600,
          color:  "white",
          maxWidth:'1000px',
          pb: {
              xs: "1.5rem",
              sm: "2.7rem",
            },
            zIndex:10,
        }}
       
      >
        Here's how we collaborate
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isTablet||isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: isMobile ? '2rem' : '2.5rem',
          flexWrap: 'wrap',
          maxWidth: '90rem',
          margin: '0 auto',
          
        }}
      >
        {[
          {
            title: 'Product-First Approach',
            description:
              'We don’t just build features — we solve real problems.  Our focus is on delivering value, not just functionality, ensuring that what we build makes a meaningful impact in the market, and in the lives of your customers',
            icon:  PackageSearch,
          },
          
          {
            title: 'In-Depth Technology Expertise',
            description:
              'We speak fluent AI, cloud, and full-stack — but we care most about what it does for your business. Our team brings battle-tested expertise in shipping scalable systems.',
              icon: Cpu,
          },
          {
            title: 'Partnership Mindset',
            description:
              'We’re not vendors — we’re collaborators. From concept to launch and beyond, we commit to transparency, shared ownership, and a relentless focus on your goals.Together, we build what matters.',
              icon:  Handshake,
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: index * 0.2,
            }}
            style={{ flex: '1 1 30%',willChange: 'opacity, transform' }}
          >
            <Box
              sx={{
                flex: '1 1 30%',
                borderRadius: '1rem',
                p: '2px',
                
                height: '100%',
              }}
            >
              <Card
                elevation={1}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'inherit',
                  px: '2rem',
                  pt: '3rem',
                  background:'#06041b',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
              <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              mb: '1rem',
              width: '100%',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: isMobile ? '1.3rem' : isTablet ? '1.3rem' : '1.4rem',
                fontWeight: '600',
                marginBottom: '16px',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                textAlign:'left',
                zindex: 1,
              }}
            >
              {card.title}
            </Typography>

            <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              width: isMobile ? '4rem' : '4rem',
              height: isMobile ? '4rem' : '4rem',
              marginTop:'-1.5rem'
            }}
          >
            {card.icon && (
  <card.icon
    style={{
      width: '40px',
    height: '40px',
    color: 'white',
    zIndex: 1,
    }}
  />
)}

          </Box>

          </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: isMobile ? '1.03rem' : isTablet ? '1.07rem' : '1.07rem',
                  marginBottom: '32px',
                  maxWidth: '480px',
                  lineHeight: '1.5',
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  textAlign:'left',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: '500',
                  zIndex:1,
                }}
              >
                {card.description}
              </Typography>
            </Card>
          </Box>
          </ motion.div>

        ))}
      </Box>
    </Box>
    </motion.div>
  );
};

export default JungrooApproach;
