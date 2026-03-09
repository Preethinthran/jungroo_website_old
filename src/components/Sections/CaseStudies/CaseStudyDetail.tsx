import React, { useEffect, useState } from 'react';
import { /* useLocation, */ useNavigate } from 'react-router-dom';
import {
  Box, Typography, Button, Card, useTheme, useMediaQuery, Menu, MenuItem, IconButton,
} from '@mui/material';
import { SVGProps, FC } from 'react';
import { ChevronLeft, Menu as MenuIcon } from 'lucide-react';
import { GlobalStyles } from '@mui/material';
import Footer from '../Footer/Footer';
// ... inside your CaseStudyDetail component, before the return statement
import { FileDown, Filter, LineChart, Database, /* Shield */ } from "lucide-react";


const auroraStyles = (
  <GlobalStyles
  styles={{
    ':root': {
      '--background': '#06041b',
      '--black': '#101629',
      '--transparent': 'transparent',
    },
    '@keyframes aurora': {
      from: { backgroundPosition: '0% 50%' },
      to: { backgroundPosition: '200% 50%' },
    },
    '.aurora-container': {
      position: 'relative',
      backgroundColor: 'var(--background)',
    },
    '.aurora-effect': {
      '--dark-gradient':
        'repeating-linear-gradient(100deg, var(--black) 0%, var(--black) 7%, var(--transparent) 10%, var(--transparent) 12%, var(--black) 16%)',
      '--aurora':
        'repeating-linear-gradient(100deg, #0050d0 10%, rgba(0, 80, 208, 0.7) 15%, rgba(0, 80, 208, 0.5) 20%, rgba(0, 80, 208, 0.4) 25%, #0050d0 30%)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'var(--dark-gradient), var(--aurora)',
      backgroundSize: '300% 200%, 200% 100%',
      backgroundPosition: '50% 50%, 50% 50%',
      filter: 'blur(10px)',
      pointerEvents: 'none',
      zIndex: 0,
      maskImage: 'radial-gradient(ellipse at 100% 0%, black 10%, var(--transparent) 70%)',
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        backgroundImage: 'var(--dark-gradient), var(--aurora)',
        backgroundSize: '200% 100%',
        backgroundAttachment: 'fixed',
        animation: 'aurora 60s linear infinite',
        mixBlendMode: 'difference',
      },
    },
      '.timeline-container': {
        position: 'relative',
        maxWidth: '1050px',
        margin: '0 auto 10px',
        padding: '10px 0',
      },
    
      '.timeline-line': {
        position: 'absolute',
        left: '15px',
        top: 25,
        bottom: 50,
        width: '4px',
        background: 'linear-gradient(180deg, #4285F4, #CD7F32, #C0C0C0, #FFD700)',
        borderRadius: '3px',
        zIndex: 0,
        opacity: 0.8,
      },
    
     // Adjust padding for timeline item since the header is now outside
'.timeline-item': {
  position: 'relative',
  marginBottom: '30px',
  paddingLeft: '50px', // Reduced padding since header is outside
  zIndex: 1,
  animation: 'fadeIn 0.6s ease-out forwards',
  opacity: 0,
},
    
    
      '@keyframes fadeIn': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
    
      '.timeline-item:nth-child(2)': { animationDelay: '0.1s' },
      '.timeline-item:nth-child(3)': { animationDelay: '0.2s' },
      '.timeline-item:nth-child(4)': { animationDelay: '0.3s' },
      '.timeline-item:nth-child(5)': { animationDelay: '0.4s' },
    
      // You might need to adjust the position of the timeline dots
'.timeline-dot': {
  position: 'absolute',
  left: '8px',
  top: '30px', // Adjust this to align with the header
  width: '20px',
  height: '20px',
  border: '3px solid',
  borderRadius: '50%',
  backgroundColor: 'rgba(0,0,0,0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  boxShadow: '0 0 0 4px rgba(0,0,0,0.2)',
},


      '.timeline-dot-inner': {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        boxShadow: '0 0 10px currentColor',
      },
    
      '.timeline-content': {
        background: 'rgba(45, 45, 61, 0.4)',
        borderRadius: '1rem',
        padding: '22px 26px',
        boxShadow: '0 4px 25px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
      },
    
      '.timeline-content:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
      },
    
      '.timeline-header': {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '15px',
      },
    
      '.timeline-header-icon': {
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.4rem',
        flexShrink: 0,
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      },
    
      '.timeline-title': {
        fontSize: '1.5rem',
        fontWeight: 700,
        margin: 0,
        letterSpacing: '0.5px',
      },
    
      '.timeline-bullets': {
        margin: 0,
        paddingLeft: '20px',
        color: '#e0e5f0',
        fontSize: '1.05rem',
        lineHeight: 1.7,

      },
    
      '.timeline-bullets li': {
        marginBottom: '8px',
        listStyleType: 'disc',
        paddingLeft: '5px',
        textAlign:'left'
      },
    
      '.security-section': {
        background: 'rgba(45, 45, 61, 0.4)',
        
        borderRadius: '1rem',
        padding: '24px 30px',
        maxWidth: '850px',
        margin: '20px auto 0px auto',
        boxShadow: '0 0 20px rgba(0,0,0,0.4)',
        transition: 'all 0.3s ease',
      },
    
      '.security-section:hover': {
        boxShadow: '0 5px 25px rgba(0,0,0,0.6)',
        transform: 'translateY(-3px)',
      },
    
      '.security-title': {
        color: '#00cc99',
        fontSize: '1.3rem',
        fontWeight: 700,
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
      },
    
      '.security-description': {
        color: '#e0e5f0',
        fontSize: '1.1rem',
        lineHeight: 1.7,
        textAlign:'left'
      },
      '.timeline-header-outer': {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginBottom: '22px',
  paddingTop:'20px',
  paddingLeft: '5px',
},


    
  }}
/>
);
type IconType = FC<SVGProps<SVGSVGElement>>;

// --- Interfaces (remain the same) ---
interface BulletPoint {
  icon: string;
  text: string;
}

interface CaseStudySection {
  intro?: string;
  bulletPoints: BulletPoint[];
  conclusion?: string;
}

interface CaseStudy {
  slug: string;
  title: string;
  tags: string[];
  overview: string;
  icons?: Record<string, IconType | undefined>;
  challenge?: CaseStudySection;
  solution?: CaseStudySection;
  impact?: CaseStudySection;
  technicalDifferentiation?: CaseStudySection;
  conclusion?: string;
}

interface CaseStudyDetailProps {
  study: CaseStudy | null;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ study }) => {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  // const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  // --- State for the responsive menu ---
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveSection(id);
      window.history.pushState(null, '', `#${id}`);
      el.scrollIntoView({ behavior: 'smooth' });
    }
    handleMenuClose(); // Close the menu on navigation
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for scroll-based active section highlighting
  useEffect(() => {
    const sectionIds = ['overview', 'challenge', 'solution', 'impact', 'tech'];
    const handleScroll = () => {
      const headerOffset = 110; // Height of the sticky header + a buffer
      let currentSection = '';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
            currentSection = id;
            break;
          }
        }
      }
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [study, activeSection]);

  if (!study) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4">Case study not found</Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/case-studies')}
          sx={{
            mt: 2,
            borderRadius: '2rem',
            px: { xs: '1rem', sm: '2rem' },
            backgroundColor: '#0050d0',
            color: 'white',
            fontSize: '1rem',
            letterSpacing: '0.5',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#196da1',
            },
          }}
        >
          Back to Case Studies
        </Button>
      </Box>
    );
  }

  // Helper function to parse and render text with markdown-style bolding
  const renderBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} style={{ color: 'white', fontWeight: 700 }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.includes('\n')) {
        return part.split('\n').map((line, j) => (
          <React.Fragment key={`${i}-${j}`}>
            {line}
            {j < part.split('\n').length - 1 && <br />}
          </React.Fragment>
        ));
      }
      return <span key={i}>{part}</span>;
    });
  };

  const getIconColors = (index: number) => {
    const colors = [
      { bg: '#1e2d54', color: '#4e78e3' }, // blue
      { bg: '#142e22', color: '#4de496' }, // green
      { bg: '#2a2446', color: '#a27eef' }, // purple
      { bg: '#382c21', color: '#f0985e' }, // orange
    ];
    return colors[index % colors.length];
  };

  const getTagColor = (index: number) => {
    const colors = ['#4f6fe6', '#1fa86c', '#6b5bd1'];
    return colors[index % colors.length];
  };

  const hasStats = study.impact?.bulletPoints?.some(point => /\d+%|\d+\+|\d+/.test(point.text));

  const renderSection = (section: CaseStudySection, title: string, isDark: boolean = false) => {
    if (!section) return null;
    
    // Special case for climate tech solution section
    const isClimateDataSolution = study.slug === "climate-tech-data-ingestion" && title === "The Solution";
    
    if (isClimateDataSolution) {
      return (
        <Box
          sx={{
            width: '100%',
            py: { xs: 4, md: 6 },
            px: { xs: 2, sm: 3 },
          }}
        >
          <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.7rem' },
                fontWeight: 700,
                color: 'white',
                textAlign: 'center',
                mb: 4,
              }}
            >
              {title}
            </Typography>
            {section.intro && (
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: 'white',
                  fontWeight: 500,
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  mb: 5,
                  textAlign: 'center',
                  maxWidth: '900px',
                  mx: 'auto',
                }}
              >
                {renderBoldText(section.intro)}
              </Typography>
            )}
         
         <div className="timeline-container">
  <div className="timeline-line"></div>
  
  {/* Raw Zone */}
  <div className="timeline-item">
    <div className="timeline-dot" style={{ borderColor: '#4285F4' }}>
      <div className="timeline-dot-inner" style={{ backgroundColor: '#4285F4' }}></div>
    </div>
    
    {/* Icon and title outside the box */}
    <div className="timeline-header-outer">
      <div className="timeline-header-icon" style={{ backgroundColor: 'rgba(20, 20, 40, 1)', color: '#4285F4' }}>
      <FileDown size={20} />
      </div>
      <h3 className="timeline-title" style={{ color: '#4285F4' }}>Raw Zone</h3>
    </div>
    
    {/* Only content inside the box */}
    <div className="timeline-content" style={{background: 'rgba(45, 45, 61, 0.4)'}}>
      <ul className="timeline-bullets">
        <li>Stores original uploads in CSV, XLS, and PDF formats</li>
        <li>Automated processes handle virus scanning, format validation, data extraction, and standardization into XLSX</li>
        <li>Failed processing triggers <b>SNS Raw-Zone Data Failure </b>notifications</li>
        <li>Successfully standardized XLSX files are stored in the Raw Zone's standardized area</li>
      </ul>
    </div>
  </div>
  
  {/* Bronze Zone */}
  <div className="timeline-item">
    <div className="timeline-dot" style={{ borderColor: '#CD7F32' }}>
      <div className="timeline-dot-inner" style={{ backgroundColor: '#CD7F32' }}></div>
    </div>
    
    {/* Icon and title outside the box */}
    <div className="timeline-header-outer">
      <div className="timeline-header-icon" style={{ backgroundColor: 'rgba(205, 127, 50, 0.1)', color: '#CD7F32' }}>
      <Filter size={20} />
      </div>
      <h3 className="timeline-title" style={{ color: '#CD7F32' }}>Bronze Zone</h3>
    </div>
    
    {/* Only content inside the box */}
    <div className="timeline-content">
      <ul className="timeline-bullets">
        <li>Triggered by standardized file uploads</li>
        <li>AWS Glue Crawler and ETL catalog metadata and enforce data quality rules</li>
        <li>Data of acceptable quality is transformed into <b>LCI data without environmental factors.</b></li>
        <li>Failed quality checks trigger <b>SNS Raw-Zone Data Quality Failure</b> notifications</li>
        <li>Successful processing stores output in Bronze Zone, and <b>SNS Bronze-Zone LCI Data</b> notifications are sent to <b>LCI consultants</b>, alerting them to upload enriched LCI sheets with environmental factors.
        </li>
      </ul>
    </div>
  </div>
  
  {/* Silver Zone */}
  <div className="timeline-item">
    <div className="timeline-dot" style={{ borderColor: '#C0C0C0' }}>
      <div className="timeline-dot-inner" style={{ backgroundColor: '#C0C0C0' }}></div>
    </div>
    
    {/* Icon and title outside the box */}
    <div className="timeline-header-outer">
      <div className="timeline-header-icon" style={{ backgroundColor: 'rgba(192, 192, 192, 0.1)', color: '#C0C0C0' }}>
      <LineChart size={20} />
      </div>
      <h3 className="timeline-title" style={{ color: '#C0C0C0' }}>Silver Zone</h3>
    </div>
    
    {/* Only content inside the box */}
    <div className="timeline-content">
      <ul className="timeline-bullets">
        <li>LCI consultants upload enriched datasets with environmental factors and <b>a summary sheet</b> of carbon emissions.        </li>
        <li>AWS Glue crawlers catalog metadata and enforce quality rules</li>
        <li>If the uploaded dataset fails validation (e.g., incorrect format for environmental factors), <b>SNS Silver-Zone Data Quality Failure</b> notifications are sent to <b>LCI consultants</b>, prompting correction and re-upload.
        </li>
        <li>Data passing validation is promoted to the Gold Zone</li>
      </ul>
    </div>
  </div>
  
  {/* Gold Zone */}
  <div className="timeline-item">
    <div className="timeline-dot" style={{ borderColor: '#FFD700' }}>
      <div className="timeline-dot-inner" style={{ backgroundColor: '#FFD700' }}></div>
    </div>
    
    {/* Icon and title outside the box */}
    <div className="timeline-header-outer">
      <div className="timeline-header-icon" style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)', color: '#FFD700' }}>
      <Database size={20} />
      </div>
      <h3 className="timeline-title" style={{ color: '#FFD700' }}>Gold Zone</h3>
    </div>
    
    {/* Only content inside the box */}
    <div className="timeline-content">
      <ul className="timeline-bullets">
        <li>Stores <b>final, QA-approved LCI data with environmental factors.</b></li>
        <li>Manual triggers move data into : <ul className="timeline-bullets"><li><b> Neo4j Database</b> for graph-based analysis </li><li><b>Postgres Database</b> for structured storage and reporting.</li></ul></li>
        
        <li>Once data lands in Postgres, the <b>LCI summary sheet (uploaded in the Silver Zone)</b> is used for integrity checks. Any discrepancies between the ingested dataset and summary values trigger notifications to stakeholders.
        </li>
       
      </ul>
    </div>
  </div>
</div>
{/* Security Section */}
<div className="security-section">
  <h3 className="security-title">🔒 Security Model</h3>
  <p className="security-description">
    <b>IAM roles and tenant-specific access policies</b> enforce strict data isolation, ensuring each tenant
    only accesses their own data.
  </p>
</div>
          </Box>
        </Box>
      );
    }
    
    // Original rendering for all other sections
    return (
      <Box
        sx={{
          width: '100%',
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Original section rendering code here */}
        <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.7rem' },
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              mb: 3,
            }}
          >
            {title}
          </Typography>
          {section.intro && (
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: 'white',
                fontWeight: 500,
                fontSize: { xs: '1.1rem', sm: '1.3rem' },
                mb: 4,
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              {renderBoldText(section.intro)}
            </Typography>
          )}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
            },
            gap: 3,
            width: '100%',
            height:'100%'
          }}>
            {section.bulletPoints?.map((point, idx) => {
              const iconSvg = study.icons?.[point.icon];
              const { bg, color } = getIconColors(idx);
              let title = '';
              let content = point.text;
              if (point.text.includes(':')) {
                const parts = point.text.split(':', 2);
                title = parts[0].trim();
                content = parts[1].trim();
              }
              const isLastCard = idx === section.bulletPoints.length - 1;
              const cardStyle = isLastCard && section.bulletPoints.length % 2 === 1
                ? { gridColumn: { xs: 'span 1', sm: 'span 2' }, display: 'flex', justifyContent: 'center' }
                : {};
              
              const cardContent = (
                <Card
                  sx={{
                    width: '100%',
                    height:'100%',
                    maxWidth: isLastCard && section.bulletPoints.length % 2 === 1 ? { sm: 'calc(50% - 12px)' } : 'none',
                    backgroundColor: 'rgba(20, 20, 40, 0.5)',
                    borderRadius: '0.8rem',
                    p: 3,
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      {iconSvg ? (
                        <Box
                          component={iconSvg}
                          sx={{
                            color: color,
                            width: 50,
                            height: 50,
                            p: 1,
                            borderRadius: '0.5rem',
                            backgroundColor: bg,
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '0.5rem',
                            backgroundColor: bg,
                            color: color,
                            fontSize: '1.5rem',
                            flexShrink: 0,
                          }}
                        >
                          {point.icon === 'time' ? '⏱️' :
                           point.icon === 'target' ? '🎯' :
                           point.icon === 'user' ? '👤' :
                           point.icon === 'chart' ? '📊' :
                           point.icon === 'lightning' ? '⚡' :
                           point.icon === 'brain' ? '🧠' :
                           point.icon === 'graph' ? '📈' :
                           point.icon === 'cloud' ? '☁️' :
                           point.icon === 'check' ? '✓' :
                           point.icon === 'dollar' ? '💲' :
                           point.icon === 'users' ? '👥' : '•'}
                        </Box>
                      )}
                      {title ? (
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            color: 'white',
                            textAlign: 'left',
                          }}
                        >
                          {renderBoldText(title)}
                        </Typography>
                      ) : (
                        <Typography
                          variant="h6"
                          sx={{
                            lineHeight: 1.6,
                            color: '#c0c5d9',
                            fontWeight: 500,
                            fontSize: '1.1rem',
                            pl: '16px',
                            textAlign: 'left',
                          }}
                        >
                          {renderBoldText(content)}
                        </Typography>
                      )}
                    </Box>
                    {title && (
                      <Typography
                        variant="body2"
                        sx={{
                          lineHeight: 1.6,
                          color: '#c0c5d9',
                          fontWeight: 500,
                          fontSize: '1.1rem',
                          pl: '66px',
                          textAlign: 'left',
                        }}
                      >
                        {renderBoldText(content)}
                      </Typography>
                    )}
                  </Box>
                </Card>
              );
  
              return (
                <Box
                  key={`${title}-${idx}`}
                  sx={cardStyle}
                >
                  {cardContent}
                </Box>
              );
            })}
          </Box>
          {section.conclusion && (
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: 'white',
                fontWeight: 500,
                fontSize: { xs: '1.1rem', sm: '1.3rem' },
                mb: 2,
                textAlign: 'center',
                maxWidth: '1000px',
                mx: 'auto',
                mt: 3
              }}
            >
              {renderBoldText(section.conclusion)}
            </Typography>
          )}
        </Box>
      </Box>
    );
  };
  

  const renderImpactSection = (section: CaseStudySection) => {
    if (!section) return null;
    const metrics = section.bulletPoints.filter(point => /\d+%|\d+\+/.test(point.text));
    const otherPoints = section.bulletPoints.filter(point => !/\d+%|\d+\+/.test(point.text));
    return (
      <Box
        sx={{
          width: '100%',
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              mb: 3,
            }}
          >
            The Impact
          </Typography>
          {section.intro && (
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: 'white',
                fontWeight: 500,
                fontSize: { xs: '1.1rem', sm: '1.3rem' },
                mb: 4,
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              {renderBoldText(section.intro)}
            </Typography>
          )}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 3,
            maxWidth: '1200px',
            mx: 'auto',
            mb: 3,
          }}>
            {metrics.map((point, idx) => {
              const { color, bg } = getIconColors(idx);
              const iconSvg = study.icons?.[point.icon];
              const fullText = point.text;
              const hasHeading = fullText.includes(':');
              const [rawHeading, rawRest] = hasHeading
                ? fullText.split(/:(.+)/).map(s => s.trim())
                : ['', fullText];
              const numberRegex = /(\d+%|\d+\+|\d+)/g;
              const highlightNumbers = (text: string) => {
                const parts = text.split(numberRegex);
                return parts.map((part, i) =>
                  numberRegex.test(part) ? (
                    <Box component="span" key={i} sx={{ color, fontWeight: 700 }}>
                      {part}
                    </Box>
                  ) : (
                    <React.Fragment key={i}>{part}</React.Fragment>
                  )
                );
              };
              
              return (
                <Card
                  key={`metric-${idx}`}
                  sx={{
                    backgroundColor: 'rgba(20, 20, 40, 0.5)',
                    borderRadius: '0.8rem',
                    p: 3,
                    textAlign: 'center',
                    boxShadow: 'none',
                    width: { xs: '100%', sm: '300px' },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    {iconSvg ? (
                      <Box
                        component={iconSvg}
                        sx={{
                          color,
                          width: 40,
                          height: 40,
                          p: 1,
                          borderRadius: '50%',
                          backgroundColor: bg,
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(20, 20, 40, 0.5)',
                          color,
                          fontSize: '1.2rem',
                        }}
                      >
                        {point.icon === 'time' ? '⏱️' :
                         point.icon === 'dollar' ? '💲' :
                         point.icon === 'user' ? '👤' :
                         point.icon === 'target' ? '🎯' : '•'}
                      </Box>
                    )}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '2.5rem', sm: '2.8rem' },
                      fontWeight: 700,
                      mb: 1,
                      color,
                      paddingX: 3
                    }}
                  >
                    {(fullText.match(numberRegex) || [])[0] || ''}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#c0c5d9',
                      fontSize: '1rem',
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {hasHeading && (
                      <>
                        <Box component="span" sx={{ fontWeight: 700, color: 'white' }}>
                          {highlightNumbers(rawHeading)}
                        </Box>
                        {' '}
                        <br />
                      </>
                    )}
                    {highlightNumbers(rawRest)}
                  </Typography>
                </Card>
              );
            })}
          </Box>
          {otherPoints.length > 0 && (
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
            },
            gap: 3,
            width: '100%',
            mb: 3,
          }}>
            {otherPoints.map((point, idx) => {
              const iconSvg = study.icons?.[point.icon];
              const { bg, color } = getIconColors(idx);
              let title = '';
              let content = point.text;
              if (point.text.includes(':')) {
                const parts = point.text.split(':', 2);
                title = parts[0].trim();
                content = parts[1].trim();
              }
              const isLastCard = idx === otherPoints.length - 1;
               const cardStyle = isLastCard && otherPoints.length % 2 === 1
                ? { gridColumn: { xs: 'span 1', sm: 'span 2' }, display: 'flex', justifyContent: 'center' }
                : {};

              const cardContent = (
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: isLastCard && otherPoints.length % 2 === 1 ? { sm: 'calc(50% - 12px)' } : 'none',
                    backgroundColor: 'rgba(20, 20, 40, 0.5)',
                    borderRadius: '0.8rem',
                    p: 3,
                    boxShadow: 'none',
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      {iconSvg ? (
                        <Box
                          component={iconSvg}
                          sx={{
                            color: color,
                            width: 50,
                            height: 50,
                            p: 1,
                            borderRadius: '0.5rem',
                            backgroundColor: bg,
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '0.5rem',
                            backgroundColor: bg,
                            color: color,
                            fontSize: '1.5rem',
                            flexShrink: 0,
                          }}
                        >
                          {point.icon === 'time' ? '⏱️' :
                           point.icon === 'target' ? '🎯' :
                           point.icon === 'user' ? '👤' :
                           point.icon === 'chart' ? '📊' :
                           point.icon === 'lightning' ? '⚡' :
                           point.icon === 'brain' ? '🧠' :
                           point.icon === 'graph' ? '📈' :
                           point.icon === 'cloud' ? '☁️' :
                           point.icon === 'check' ? '✓' :
                           point.icon === 'dollar' ? '💲' :
                           point.icon === 'users' ? '👥' : '•'}
                        </Box>
                      )}
                      {title ? (
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            color: 'white',
                            textAlign: 'left',
                          }}
                        >
                          {renderBoldText(title)}
                        </Typography>
                      ) : (
                        <Typography
                          variant="h6"
                          sx={{
                            lineHeight: 1.6,
                            color: '#c0c5d9',
                            fontWeight: 500,
                            fontSize: '1.1rem',
                            pl: '16px',
                            textAlign: 'left',
                          }}
                        >
                          {renderBoldText(content)}
                        </Typography>
                      )}
                    </Box>
                    {title && (
                      <Typography
                        variant="body2"
                        sx={{
                          lineHeight: 1.6,
                          color: '#c0c5d9',
                          fontWeight: 500,
                          fontSize: '1.1rem',
                          pl: '66px',
                          textAlign: 'left',
                        }}
                      >
                        {renderBoldText(content)}
                      </Typography>
                    )}
                  </Box>
                </Card>
              );

              return (
                 <Box
                  key={`${title}-${idx}`}
                  sx={cardStyle}
                >
                  {cardContent}
                </Box>
              );
            })}
          </Box>
          )}
          {section.conclusion && (
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: 'white',
                fontWeight: 500,
                fontSize: { xs: '1.1rem', sm: '1.3rem' },
                mb: 2,
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
                mt: 3
              }}
            >
              {renderBoldText(section.conclusion)}
            </Typography>
          )}
        </Box>
      </Box>
    );
  };

  const navSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'solution', label: 'Solution' },
    { id: 'impact', label: 'Impact' },
  ];

  if (study.technicalDifferentiation) {
    navSections.push({ id: 'tech', label: 'Technical Differentiation' });
  }
return (
  <>
  {auroraStyles}
  
      <Box
      className="aurora-container" 
        sx={{
          color: 'white',
          fontFamily: theme.typography.fontFamily,
        }}
      >
        <div className="aurora-effect" /> 
        {/* === HEADER: Merged and updated === */}
        <Box
          component="header"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: { xs: '1rem 1rem', sm: '1rem 2rem' },
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1100,
            height: { xs: '70px', md: '80px' },
            // Dynamic background based on scroll state
            backgroundColor: isScrolled ? '#06041b' : 'transparent',
            backdropFilter: isScrolled ? 'none' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
            transition: 'background-color 0.4s ease-in-out, border-color 0.4s ease-in-out',
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src='/assets/logo.webp'
            alt="Jungroo Logo"
            sx={{ height: { xs: 24, sm: 30 }, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />

          {/* Navigation Controls */}
          {isTabletOrMobile ? (
            <>
              <IconButton
                aria-label="navigation menu"
                onClick={handleMenuOpen}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="navigation-menu"
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    backgroundColor: '#1c233d', color: 'white', border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '0.5rem',
                  },
                }}
              >
                {navSections.map((section) => (
                  <MenuItem
                    key={section.id}
                    onClick={() => handleNavClick(section.id)}
                    selected={activeSection === section.id}
                    sx={{
                      '&.Mui-selected': { backgroundColor: '#3a56e4', '&:hover': { backgroundColor: '#3a56e4' } },
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                    }}
                  >
                    {section.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navSections.map((section) => (
                <Button
                  key={section.id}
                  sx={{
                    borderRadius: '2rem', px: 2,
                    backgroundColor: activeSection === section.id ? '#0050d0' : 'rgba(255, 255, 255, 0.1)',
                    color: 'white', fontSize: '0.9rem', textTransform: 'none', whiteSpace: 'nowrap',
                    '&:hover': {
                      backgroundColor: activeSection === section.id ? '#3a56e4' : 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                  onClick={() => handleNavClick(section.id)}
                >
                  {section.label}
                </Button>
              ))}
            </Box>
          )}
        </Box>

          {/* Hero/Overview Section */}
          <section id="overview" style={{ scrollMarginTop: 100 }}>
            <Box
              sx={{
                p: { xs: '2rem 1rem', md: '2rem' }, textAlign: 'center',
                marginTop: { xs: '70px', md: '80px' }, // Offset for fixed header
              }}
            >
              {/* === NEW: Repositioned Back Button and Case Study Tag === */}
              <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    mb: '2rem',
  }}
>
  {/* Back Button aligned left */}
  <IconButton
    onClick={() => navigate('/case-studies')}
    aria-label="Back to case studies"
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      color: '#e0e0e0',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
      },
    }}
  >
    <ChevronLeft size={20} />
  </IconButton>

  {/* Case Study Tag centered */}
  <Box
    sx={{
      display: 'inline-block',
      p: '0.5rem 1rem',
      backgroundColor: 'rgba(59, 82, 162, 0.5)',
      color: 'white',
      borderRadius: '2rem',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-45%)',
    }}
  >
    Case Study
  </Box>

  {/* Empty box to balance layout */}
  <Box sx={{ width: 40 }} />
</Box>


            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                background: 'linear-gradient(90deg, #66a6ff, #0050d0)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                position: 'relative',
                textAlign: 'center',
                paddingBottom: "20px",
                maxWidth:"1100px",
                marginRight:'auto',
                marginLeft:'auto'
              }}
            >
              {study.title}
            </Typography>
            <Typography
              sx={{
                color: 'white',
                maxWidth: '1000px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                lineHeight: 1.6,
                mb: '2rem',
                fontWeight: '500',
                textAlign: { xs: 'center', sm: 'justify' }
              }}
            >
              {renderBoldText(study.overview)}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                mb: '2rem',
              }}
            >
              {study.tags.map((tag, idx) => (
                <Box
                  key={tag}
                  sx={{
                    p: '0.2rem 1.5rem',
                    borderRadius: '2rem',
                    fontSize: '1rem',
                    border: '3px solid',
                    borderColor: getTagColor(idx),
                    color: getTagColor(idx),
                    fontWeight: 700
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Box>
          </Box>
        </section>

        <section id="challenge" style={{ scrollMarginTop: 100 }}>
          {study.challenge && renderSection(study.challenge, 'The Challenge', true)}
        </section>

        <section id="solution" style={{ scrollMarginTop: 100 }}>
          {study.solution && renderSection(study.solution, 'The Solution')}
        </section>

        <section id="impact" style={{ scrollMarginTop: 100 }}>
          {study.impact && (
            hasStats
              ? renderImpactSection(study.impact)
              : renderSection(study.impact, 'The Impact', true)
          )}
        </section>

        <section id="tech" style={{ scrollMarginTop: 100 }}>
          {study.technicalDifferentiation && renderSection(study.technicalDifferentiation, 'Technical Differentiation')}
        </section>

        {study.conclusion && (
          <Box
            sx={{
              width: '100%',
              py: { xs: 4, md: 6 },
              px: { xs: 2, sm: 3 },
            }}
          >
            <Box sx={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: 'white',
                  textAlign: 'center',
                  mb: 3,
                }}
              >
                Conclusion
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: 'white',
                  fontWeight: 500,
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  mb: 4,
                  textAlign: 'center',
                  maxWidth: '1080px',
                  mx: 'auto',
                }}
              >
                {renderBoldText(study.conclusion)}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
      <Footer/>
      
    </>
  );
};

export default CaseStudyDetail;
