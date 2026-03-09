import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GlowCard } from "./spotlight-card";
import './styles/MenuStyles.css';

export default function ResponsiveNavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Our Services", id: "our-services" },
    { label: "Our Products", external: true, url: "https://products.jungroo.com" },
    { label: "Case Studies", id: "case-studies" },
    { label: "Contact Us", id: "contact-us" },
  ];
  

  // ✅ Same as desktop: scroll if on home, else navigate to home with scroll target
  const handleNavClick = (id: string) => {
    setMenuOpen(false); // close the menu first
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToId: id } });
    }
  };

  return (
    <div className="relative">
      <header
        className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center"
        style={{ position: "relative", height: "64px", zIndex: 10 }}
      >
        <div
          className="text-3xl cursor-pointer"
          style={{ fontSize: "1.75rem", marginLeft: '2rem' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </header>

      {menuOpen && (
        <div style={{ zIndex: 5, marginTop: '134px', position: 'relative' }}>
          <button
            className="button2 fixed top-2 left-12 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
            onClick={() => setMenuOpen(false)}
            style={{
              zIndex: 1000,
              backgroundColor: "#1e293b",
              marginLeft: '8rem',
              marginBottom: '0.8rem',
              fontWeight: 'bolder'
            }}
          >
            X
          </button>

          <GlowCard>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="menu-item"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    textAlign: "center",
                    padding: "0.4rem 1rem",
                    cursor: "pointer",
                    transition: "fontWeight 0.2s ease-in-out",
                    color: "white",
                    borderRadius: '16px',
                    background: "#06041b",
                  }}
                  onClick={() => {
                    if (item.external) {
                      window.location.href = item.url; // external redirect
                    } else if(item.id) {
                      handleNavClick(item.id);
                    }
                  }}
                  
                  onMouseEnter={(e) => {
                    e.currentTarget.style.fontWeight = "bolder";
                    e.currentTarget.style.background = "rgba(0, 80, 208, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.fontWeight = "400";
                    e.currentTarget.style.background = "#06041b";
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </GlowCard>
        </div>
      )}
    </div>
  );
}
