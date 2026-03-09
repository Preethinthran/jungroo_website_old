import React from 'react';
import { Box, Typography, Button, /* Container, */ Grid } from '@mui/material';
import { styled, /* keyframes */ } from '@mui/system';

// Styled components
const ShowcaseSection = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: '4% 4%',
}));

const GlassPanel = styled(Box)(({ theme }) => ({
  background: 'rgba(13, 10, 38, 0.6)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  padding: '80px',
  width: '100%',
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

const ContentGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1.2fr',
  gap: '70px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '40px',
  },
}));

const TitleColumn = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    alignItems: 'center',
  },
}));
const GradientTitle = styled(Typography)(({ theme }) => ({
    fontSize: '5.5rem',
    fontWeight: 800,
    background: 'linear-gradient(90deg, #66a6ff, #0050d0)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    position: 'relative',
    textAlign: 'left',
  
    [theme.breakpoints.down('lg')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  }));
  
const VerticalLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: '-35px',
  width: '1px',
  height: '100%',
  background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0))',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ContentColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const ContentText = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  fontWeight: 500,
  color: 'rgba(255, 255, 255, 0.85)',
  marginBottom: '50px',
  lineHeight: 1.7,
  position: 'relative',
  textAlign:"left",
  '& strong': {
    fontWeight: 600,
    color: 'white',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '600px',
    textAlign:"center",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  padding: '13px 24px',
  backgroundColor: 'rgba(6, 4, 27, 0.7)',
  color: 'white',
  fontSize: '1.05rem',
  fontWeight: 500,
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  width: 'fit-content',
  overflow: 'hidden',
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '8px',
    padding: '1px',
    background: 'linear-gradient(90deg, #ffffff, #0050d0)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    zIndex: -1,
  },
  '&:hover': {
    backgroundColor: 'rgba(15, 12, 41, 0.8)',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 25px rgba(74, 123, 247, 0.15)',
    '& .arrow': {
      transform: 'translateX(4px)',
    },
  },
}));

const ArrowSpan = styled('span')({
  marginLeft: '8px',
  display: 'inline-block',
  transition: 'transform 0.3s ease',
});

// Interface for floating element props
/*
interface FloatingElementProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  delay?: number;
  background?: string;
}
*/

const CaseCount = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: 0,
    top: 0,
    fontSize: '0.9rem',
    letterSpacing: '1px',
    color: 'rgba(255, 255, 255, 0.5)',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
  
    // Default: line on the left
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: '30px',
      height: '1px',
      background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.5))',
      marginRight: '10px',
    },
  
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      marginBottom: '20px',
      justifyContent: 'center',
  
      // Add line on the right
      '&::after': {
        content: '""',
        display: 'inline-block',
        width: '30px',
        height: '1px',
        background: 'linear-gradient(270deg, rgba(255,255,255,0.1), rgba(255,255,255,0.5))',
        marginLeft: '10px',
      },
    },
  }));
  
const CaseStudiesShowcase: React.FC = () => {
  return (
    <ShowcaseSection>
     
      <GlassPanel>
        <ContentGrid container>
          <TitleColumn>
            <CaseCount>Portfolio</CaseCount>
            <GradientTitle variant="h1">Case Studies</GradientTitle>
            <VerticalLine />
          </TitleColumn>
          
          <ContentColumn>
            <ContentText>
            Each of our case study is a <strong>real-world example</strong> of complex challenges solved with <strong>care, creativity, and code</strong>. We don’t just deliver software—we <strong>engineer outcomes</strong>. We have worked across industries like education, fintech, enterprise tech to build robust, future-ready products using cutting-edge tools in AI/ML, data engineering, ETL pipelines, cloud platforms and full-stack development. Explore how we <strong>turn vision into value</strong>—across domains, disciplines, and technologies.

            </ContentText>
            
            <Box
  sx={{
    display: 'flex',
    justifyContent: { xs: 'center', md: 'flex-start' },
    mt: -1, // optional: margin-top
  }}
>
  <a
    href="/case-studies"
    style={{
      textDecoration: 'none',
      color: 'white',
    }}
  >
    <GradientButton>
      READ OUR CASE STUDIES <ArrowSpan className="arrow">→</ArrowSpan>
    </GradientButton>
  </a>
</Box>
          </ContentColumn>
        </ContentGrid>
      </GlassPanel>
    </ShowcaseSection>
  );
};

export default CaseStudiesShowcase;