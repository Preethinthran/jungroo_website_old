import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const sentences = [
  'Our deep tech expertise is your unfair advantage.',
  <>
    You bring your vision to us.<br />We deploy our tech firepower for you.
  </>,
  `Partnering with you from concept to launch and beyond, we don't just deliver value, we build it together, step by step.`,
  <>
    <span className="blue">
      Your growth is our mission.<br />Your success is our obsession.
    </span>
  </>
];

const GlassPanel = styled(Box)(({ theme }) => ({
  background: 'rgba(13, 10, 38, 0.6)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  padding: '30px',
  width: '90%',
  maxWidth: '1500px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 2,
  boxShadow: '0 20px 80px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.down('lg')]: {
    padding: '60px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '50px 35px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 25px',
    borderRadius: '16px',
  },
}));

const AboutUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [popped, setPopped] = useState<Set<number>>(new Set());
  const [glowedSentences, setGlowedSentences] = useState<Set<number>>(new Set());

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const fontSize = isMobile ? '1.1rem' : isTablet ? '1.7rem' : '2rem';
  const lineHeight = isMobile ? 1.5 : 1.6;
  const paddingX = isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem';

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const children = containerRef.current.querySelectorAll('.sentence');
      const newPopped = new Set(popped);
      const newGlowed = new Set(glowedSentences);
      const centerY = window.innerHeight / 2;

      children.forEach((child, index) => {
        const rect = child.getBoundingClientRect();
        const sentenceCenter = rect.top + rect.height / 2;
        const distToCenter = Math.abs(sentenceCenter - centerY);

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          newPopped.add(index);
        }
        if (distToCenter < rect.height / 2) {
          newGlowed.add(index); // Mark as glowed once centered
        }
      });

      setPopped(newPopped);
      setGlowedSentences(newGlowed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: 0,
        paddingBottom: 0,
        margin: 0,
        zIndex:10
      }}
    >
      <GlassPanel>
      {sentences.map((sentence, index) => {
        const hasPopped = popped.has(index);
        const isGlowing = glowedSentences.has(index);
        const isLast = index === sentences.length - 1;

        // Coloring logic
        let color = '#b7b7b7';
        if (isGlowing) {
          color = isLast ? ' #2685ff' : 'white';
        } else if (isLast) {
          color = '#1E5091';
        }


        return (
         
          <motion.div
            key={index}
            className="sentence"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: hasPopped ? 1 : 0,
              y: hasPopped ? 0 : 40,
              transition: { duration: 0.6, ease: 'easeOut' },
            }}
            style={{
              maxWidth: '900px',
              margin: `0 auto ${index === sentences.length ? '0' : '1.5rem'} auto`,
              textAlign: 'center',
              backgroundColor: 'transparent',
            }}
          >
            <Typography
              component="div"
              sx={{
                fontFamily: theme.typography.fontFamily,
                fontSize,
                fontWeight: 500,
                lineHeight,
                letterSpacing: 1.2,
                maxWidth: '855px',
                color,
                backgroundColor: 'transparent',
                transition: 'color 0.4s ease',
                '& .blue': {
                  color: 'inherit',
                  transition: 'color 0.4s ease',
                },
                zIndex:120
              }}
            >
              {sentence}
            </Typography>
          </motion.div>
        );
      })}
      </GlassPanel>
    </Box>
  );
};

export default AboutUs;
