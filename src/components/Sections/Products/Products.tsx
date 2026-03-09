// Products.tsx
import React from 'react';
import { FileText, Play, Mic } from 'lucide-react';
import './styles/Products.css';
import { Typography } from '@mui/material';

interface Product {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
  accentColor: string;
  website: string;
}

export default function Products() {
  const products: Product[] = [
    {
      id: 1,
      icon: FileText,
      title: "Clip & Scribe",
      description: "Automatic document generation from screen recordings",
      details: "Record your screen with our browser plugin. AI instantly generates polished product tours, guides, and SOPs. Zero writing. Zero editing. Just share the result.",
      accentColor: "blue",
      website: "clipandscribe.com"
    },
    {
      id: 2,
      icon: Play,
      title: "VideoHotspot",
      description: "Transform passive videos into interactive experiences",
      details: "Upload any video — demo, training, or tutorial. AI auto-adds hotspots, questions, and branching paths. Track engagement, understanding, and action in real time.",
      accentColor: "teal",
      website: "videohotspot.com"
    },
    {
      id: 3,
      icon: Mic,
      title: "VoxaChat",
      description: "Human-like voice assistant using your knowledge base",
      details: "Voice agents that think like your experts — not chatbots. Enforces safety checks, policies, and procedures in every reply. Natural tone, precise answers, zero hallucinations.",
      accentColor: "red",
      website: "voxachat.com"
    }
  ];

  // Inline style similar to your Typography example
  /*
  const titleStyle = {
    fontSize: {
      xs: "2rem",     // phones
      sm: "2.5rem",   // tablets
      md: "3rem",     // small laptops
      lg: "3.5rem",   // desktops
    },
    fontWeight: 600,
    textAlign: "center",
    paddingBottom: {
      xs: "4rem",
      sm: "6rem",
    },
    lineHeight: 1.1,
    color: "white",
    zIndex: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  
  // Helper function to convert the responsive object to CSS media queries
  const responsiveStyle = {
    fontSize: "2rem",
    fontWeight: 600,
    textAlign: "center",
    paddingBottom: "4rem",
    lineHeight: 1.1,
    color: "white",
    zIndex: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  */

  return (
    <div className="product-container">
      {/* Title Section */}
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
        }}>Our Products</Typography>

      {/* Products Grid */}
      <section className="product-grid">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <div
              key={product.id}
              className={`product-card ${product.accentColor}`}
            >
              <div className="product-header">
                <div className={`product-icon-container ${product.accentColor}`}>
                  <Icon className="product-icon" />
                </div>
                <h3 className="product-title-card">
                  {product.title}
                </h3>
              </div>

              <div className="product-content">
                <p className={`product-description ${product.accentColor}-text`}>
                  {product.description}
                </p>
                <p className="product-details">
                  {product.details}
                </p>
              </div>

              <div className="product-actions">
                <a 
                  href={`https://${product.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-button-link"
                >
                  <button
                    className={`product-explore-button ${product.accentColor}`}
                  >
                    Explore {product.title} →
                  </button>
                </a>

                <a 
                  href={`https://${product.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`product-website-link ${product.accentColor}-text`}
                >
                  {product.website}
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}