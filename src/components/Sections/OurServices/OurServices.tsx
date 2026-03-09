import React from "react";
import { Brain, Code, Compass, Wrench } from "lucide-react";
import "./styles/OurServices.css";
import { Zap } from 'lucide-react';
import { Typography } from "@mui/material";

const services = [
    {
        title: "AI Product Development",
        icon: Brain,
        description:
            "We build AI-powered tools that make your products smarter and your workflows faster. From automation to personalization, our AI solutions deliver measurable gains in efficiency and insight.",
        tagline: "Not hype - just intelligent systems that multiply what you can do."
    },
    {
        title: "Full-Stack Development",
        icon: Code,
        description:
            "We design and build full-stack applications end to end using modern, scalable tech stacks. Clean code, modular architecture, and performance-first thinking ensure your product grows with your needs.",
        tagline: "Built for today, ready for tomorrow."
    },
    {
        title: "Technology Consulting",
        icon: Compass,
        description:
            "Think of us as your technical compass -- whether you're building from scratch or scaling up. We help you choose the right tools, frameworks, and architecture for long-term success. No buzzwords.",
        tagline: "Just clarity, direction, and execution."
    },
    {
        title: "Rapid Prototyping",
        icon: Zap,
        description:
            "We move fast -- starting with research, then wireframes, and ending with a functional prototype you can test. So you can validate early, reduce risk, and build with confidence.",
        tagline: "From idea to working prototype in 72 hours."
    },
    {
        title: "Custom Software Solutions",
        icon: Wrench,
        description:
            "When generic tools don't cut it, we build software tailored to your exact needs. Designed around your workflows, built for your team, and integrated with your systems.",
        tagline: " No compromises. Only precision."
    },
];

export default function ServicesSection() {
  return (
    <div className="services-container">
      <Typography className="services-title" sx={{
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
        }}>Our Services</Typography>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            
            {/* Grid pattern with gradient fade */}
            <div className="grid-pattern-container">
              <div className="grid-pattern-background"></div>
              <div className="grid-pattern-gradient"></div>
            </div>

            <div className="service-icon">
              <service.icon size={30} strokeWidth={1.5} />
            </div>
            <h2 className="service-heading">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <p className="service-tagline">{service.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}