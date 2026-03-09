import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Card, useTheme, useMediaQuery } from "@mui/material";

// Testimonials data
const testimonials = [
  {
    feedback: `It was a pleasure working with the team - their dedication and transparency is rare.`,
    name: 'Baz Khuti',
    role: 'Founder',
    company: 'Sustain 360 Inc, USA',
  },
  {
    feedback: `Jungroo’s expertise in AI and full-stack development bridged the gap between innovation and integration for us.`,
    name: 'Surendra Ganne',
    role: 'Founder',
    company: 'Incepta.ai, UAE',
  },
  {
    feedback: `Jungroo built a multi-tenant system that allows us to manage content delivery across various platforms and tenants from a single system.`,
    name: 'Siva Vaddi',
    role: 'Vice President',
    company: 'Infinity Learn, India',
  },
  {
    feedback: `I’ve worked with ‘agile’ teams before, but Jungroo’s updates were genuinely transparent. No fluff, no blame—just honesty.`,
    name: 'Founder',
    role: '',
    company: 'Mergable Technologies, UAE',
  },
  {
    feedback: `What surprised me most wasn’t their tech skills—it was how they listened. Jungroo’s team spent considerable time to understand the actual pain points.`,
    name: 'Rama Vaddi',
    role: 'Vice President',
    company: 'SmartGig Technologies, India',
  },
  {
    feedback: `No one could have understood us better than Jungroo. Kudos to Cibe and his team for being this quick and supportive throughout.`,
    name: 'Manasi Kashikar',
    role: 'Co-founder',
    company: 'Mindchamp, India',
  },
  {
    feedback: `Our main challenge was identifying students' levels without bombarding them with multiple assessments. Here Jungroo’s AI assessment helped us reduce the assessment time and the iterations.`,
    name: 'Murali Mallikarjunan',
    role: 'Content Manager',
    company: 'Bhumi, India',
  },
  {
    feedback: `Their work gave me insights into the classroom that I wouldn't have gotten otherwise. Really innovative.`,
    name: 'Balaji Alwar',
    role: 'Program Manager',
    company: 'Central Square Foundation, India',
  },
  {
    feedback: `They’re not just vendors; they’re partners who truly care about the end result.`,
    name: 'Aravind Thangam P',
    role: 'CEO',
    company: 'Zen Tax Clinic, India',
  },
];

// Props for a Testimonials Column
interface TestimonialsColumnProps {
    testimonials: (typeof testimonials[0])[];
    duration?: number;
}
function TestimonialsColumn({ testimonials, duration = 20 }: TestimonialsColumnProps) {
  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
// const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
const scrollDistance = isMobile ? "-25%" : "-50%";
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100%", // Important: container height defines what’s visible
      }}
    >
      <motion.div
        animate={{ y: ["0%", scrollDistance] }} // Animate from top to halfway through the list
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* Duplicate the list for infinite loop illusion */}
        {[...testimonials, ...testimonials].map((t, i) => (
          <Card
            key={i}
            sx={{
              background: "#06041b",
              borderRadius: "1.5rem",
              boxShadow: "0 15px 25px -10px rgba(0, 0, 0, 0.3)",
              padding: "2rem",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "140px", // ensures consistent scroll height
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontStyle: "italic",
                mb: "0.9rem",
                color: "rgba(255, 255, 255, 0.85)",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                lineHeight: 1.5,
              }}
            >
              "{t.feedback}"
            </Typography>

            <div>
              <Typography
                sx={{
                  color: "#0050d0",
                  fontWeight: 600,
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                }}
              >
                {t.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                  color: "rgba(255, 255, 255, 0.7)",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                }}
              >
                {t.role ? `${t.role}, ${t.company}` : t.company}
              </Typography>
            </div>
          </Card>
        ))}
      </motion.div>
    </Box>
  );
}

// MODIFIED Testimonials component
export default function Testimonials() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const gridTemplateColumns = isMobile
        ? "1fr"
        : isTablet
        ? "repeat(2, 1fr)"
        : "repeat(3, 1fr)";

    const createSeamlessList = (dataSlice: typeof testimonials) => {
        return [...dataSlice, ...dataSlice];
    };

    return (
      <section
          style={{
              backgroundColor: "#06041b",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          }}
      >
          <Box
              sx={{
                  width: "100%",
                  py: "5rem",
                  px: "3rem",
                  boxSizing: "border-box",
              }}
          >
              {/* Heading */}
              <Box
                  sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: "4rem",
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
    sm: "2rem",
  },
  lineHeight: 1.1,
  color: "white",
  zIndex: 10,
  marginX:'auto'
}}
>
  What Our Clients Say
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
  See what our clients have to say about us.
</Typography>

              </Box>

              {/* Wrapper for the scrolling area */}
              <Box sx={{ position: "relative" }}>
                 

                  {/* MODIFIED: Scrolling Testimonials Grid with conditional rendering */}
                  <Box
                      sx={{
                          display: "grid",
                          gridTemplateColumns: gridTemplateColumns,
                          gap: "3rem",
                          overflow: "hidden",
                          maxHeight: "740px",
                      }}
                  >
                      {isMobile ? (
                          // On mobile, render ONE column with ALL testimonials
                          <TestimonialsColumn
                              testimonials={createSeamlessList(testimonials)}
                              duration={50}
                          />
                      ) : isTablet ? (
                          // On tablet, render TWO columns
                          <>
                              <TestimonialsColumn
                                  testimonials={createSeamlessList(testimonials.slice(0, 5))}
                                  duration={25}
                              />
                              <TestimonialsColumn
                                  testimonials={createSeamlessList(testimonials.slice(5, 9))}
                                  duration={30}
                              />
                          </>
                      ) : (
                          // On desktop, render THREE columns
                          <>
                              <TestimonialsColumn
                                  testimonials={createSeamlessList(testimonials.slice(0, 3))}
                                  duration={18}
                              />
                              <TestimonialsColumn
                                  testimonials={createSeamlessList(testimonials.slice(3, 6))}
                                  duration={20}
                              />
                              <TestimonialsColumn
                                  testimonials={createSeamlessList(testimonials.slice(6, 9))}
                                  duration={16}
                              />
                          </>
                      )}
                  </Box>

                  
              </Box>
          </Box>
      </section>
  );
}