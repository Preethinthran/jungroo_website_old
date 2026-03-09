import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
const stories = [
  {
    type: 'video',
    title: "Jungroo Learning's feature in CNBC Young Turks Show",
    description:
      "Jungroo was recognized on CNBC’s Young Turks as one of India’s most promising edtech startups, showcasing how we're using AI to personalize learning experiences for every student.",
    link: 'https://www.youtube.com/embed/4IRCTkKdFkI?si=ONUUNN8ju_z4FKv8',
  },
  {
    type: 'video',
    title: 'Our Co-founder on the sidelines of "AI for Good" award',
    description:
      'At the prestigious “AI for Good” summit, our co-founder shared insights into how Jungroo is leveraging AI to bridge educational gaps and deliver scalable, equitable learning solutions.',
    link: 'https://www.youtube.com/embed/MxiqIYYG3rc?si=IWTJRkEj0ZvhXCF7',
  },
  {
    type: 'video',
    title: "Jungroo Learning's partnership with NGO Bhumi",
    description:
      'In collaboration with Bhumi, Jungroo helped assess thousands of children to better understand their learning levels--bringing data-driven education to grassroots initiatives.',
    link: 'https://www.youtube.com/embed/iuPziY_Xj04?si=tQ6gujd55-aXAgtM',
  },
  {
    type: 'web',
    title: 'Featured on the cover story in India AI website by the government',
    description:
      'Jungroo was spotlighted by the Government of India on the India AI portal for its innovative use of artificial intelligence in transforming the educational landscape.',
    link: 'https://indiaai.gov.in/article/india-s-ai-journey-the-story-so-far',
    image: '/assets/government.webp',
  },
  {
    type: 'web',
    title: "Article in NASSCOM's blog about Jungroo Learning's work",
    description:
      'NASSCOM featured Jungroo’s journey as a case study in how deep tech and purposeful design can reshape foundational learning in schools across the country.',
    link: 'https://community.nasscom.in/communities/emerging-tech/ai/ai-for-good-the-shortest-path-to-mastery-is-paved-with-ai.html',
    image: '/assets/nasscom.webp',
  },
  {
    type: 'video',
    title: "Our founder's speech about Jungroo's work during InnovatED",
    description:
      'At InnovatED, our founder reflected on Jungroo’s mission, sharing field learnings and the vision to create impactful, inclusive education through smart technology.',
    link: 'https://www.youtube.com/embed/0lFU3EhmSR4?si=sYH_hYJf-fIO78X6',
  },
];

interface MediaMentionsProps {
  isVersion2?: boolean;
}
const YouTubeEmbed = ({ src, title }: { src: string; title: string }) => {
  const [loaded, setLoaded] = React.useState(false);

  const videoId = React.useMemo(
    () => src.split('/embed/')[1]?.split('?')[0] || '',
    [src]
  );

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return loaded ? (
    <iframe
      src={src}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  ) : (
    <Box
      onClick={() => setLoaded(true)}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        background: `url(${thumbnail}) center center / cover no-repeat`,
      }}
    />
  );
};

const MediaMentions: React.FC<MediaMentionsProps> = ({ isVersion2 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        py: isMobile ? '3rem' : '3rem',
        px: { xs: theme.spacing(1.75), sm: theme.spacing(2.5), md: theme.spacing(3.75) },
        color: 'white',
        fontFamily:theme.typography.fontFamily
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
              xs: "3rem",
              sm: "5rem",
            },
            lineHeight: 1.1,
            color: "white",
            zIndex: 10,
            marginX:'auto'
          }}
        >
          Media & Mentions
        </Typography>
      </motion.div>
      <Grid container spacing={{ xs: 1.5, sm: 2.5, md: 2 }} sx={{ px: { xs: theme.spacing(2.5), sm: theme.spacing(3.75), md: theme.spacing(5), lg: theme.spacing(6.25) } }}>
        {stories.map((story, index) => (
          <Grid  size={{xs:12, sm:6 ,md:4}} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    background: 'transparent',
                    padding: '15px',
                    width: { xs: '100%', sm: '95%', md: '95%', lg: '95%' },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      paddingBottom: '56.25%',
                      height: 0,
                      overflow: 'hidden',
                      borderRadius: '15px',
                      mb: theme.spacing(2.5),
                    }}
                  >
                    {story.type === 'video' ? (
                      <YouTubeEmbed src={story.link} title={story.title} />
                    ) : (
                      <a
                        href={story.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        <Box
                          component="img"
                          src={story.image}
                          alt={story.title}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </a>
                    )}
                  </Box>

                  <CardContent sx={{ px: 0 }}>
                    <Typography
                      sx={{
                        fontSize: isMobile ? '1.3rem' : isTablet ? '1.3rem' : '1.4rem',
                        fontWeight: '600',
                        marginBottom: '16px',
                        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                        zindex: 1,
                        color: theme.palette.text.primary,
                        flex: 1,
                        mb: theme.spacing(1.25),
                        textAlign: { xs: 'center', sm: 'justify' },
                        minHeight: { xs: theme.spacing(5), sm: theme.spacing(8.75), md: theme.spacing(10) },
                        
                      }}
                    >
                      {story.title}
                    </Typography>
                    {!isMobile && (
                      <Typography
                      sx={{
                        fontSize: isMobile ? '1.03rem' : isTablet ? '1.07rem' : '1.07rem',
                        marginBottom: '32px',
                        maxWidth: '480px',
                        lineHeight: '1.5',
                        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                        textAlign:'justify',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: '500',
                        zIndex:1,
                        whiteSpace: 'pre-line',
                        fontStyle: 'italic',
                        }}
                      >
                        {story.description}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MediaMentions;