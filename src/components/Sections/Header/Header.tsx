import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ResponsiveNavMenu from '../../OptionsMenu/ResponsiveNavMenu'; // Make sure this path is correct

const Header: React.FC = () => {
  // State to track if the user has scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // This effect adds an event listener to the window to detect scrolling.
  // When the user scrolls more than 10 pixels down, it updates the `isScrolled` state.
  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if scrolled more than 10px, otherwise false
      setIsScrolled(window.scrollY > 10);
    };

    // Add listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove the listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount and unmount

  /**
   * Handles navigation clicks.
   * If on the homepage ('/'), it smoothly scrolls to the element with the given ID.
   * If on another page, it navigates to the homepage and passes the ID in the state,
   * allowing the homepage component to handle the scroll after navigation.
   * @param {string} id - The ID of the element to scroll to.
   */
  const handleNavClick = (id: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to the homepage and pass the id to scroll to
      navigate('/', { state: { scrollToId: id } });
    }
  };

  // All CSS for the header is encapsulated within the component using a <style> tag.
  // This makes the component portable and easy to manage.
  const styles = `
    :root {
      --background: #06041b;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      height: 84px;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 2rem;
      backdrop-filter: blur(8px);
      z-index: 100;
      /* The background is transparent by default */
      background-color: transparent;
      /* A smooth transition is applied to the background-color property */
      transition: background-color 0.4s ease-in-out;
    }

    /* This class is added dynamically when 'isScrolled' is true */
    header.scrolled {
      /* The background color changes to a solid color on scroll */
      background-color: var(--background);
    }
    
    .logo {
      height: 30px;
    }
    
    .desktop-nav {
      display: flex;
      gap: 2rem;
    }
    
    .desktop-nav a {
      color: rgba(255, 255, 255, 1);
      text-decoration: none;
      font-size: 0.88rem;
      font-weight: 400;
      transition: color 0.2s ease;
      cursor: pointer;
    }
    
    .desktop-nav a:hover {
      color: rgba(255, 255, 255, 0.8);
    }

    .mobile-nav {
      display: none; /* Hidden by default, shown in media query */
    }

    /* Responsive adjustments for smaller screens */
    @media (max-width: 900px) {
      header {
        padding: 1.5rem 1rem;
      }
      .desktop-nav {
        display: none; /* Hide desktop navigation */
      }
      .mobile-nav {
        display: block; /* Show mobile navigation component */
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      {/* The 'scrolled' class is conditionally applied based on the isScrolled state */}
      <header className={isScrolled ? 'scrolled' : ''}>
      <img
      src='/assets/logo.webp'
      alt="Jungroo"
      className="logo"
      style={{ cursor: 'pointer' }}
      fetchPriority="high"
      onClick={() => navigate('/')}/>
        <nav className="desktop-nav">
          <a href="#our-services" onClick={(e) => { e.preventDefault(); handleNavClick('our-services'); }}>Our Services</a>
          <a href="https://products.jungroo.com" target="_blank" rel="noopener noreferrer">
    Our Products
  </a>
          <a href="#case-studies" onClick={(e) => { e.preventDefault(); handleNavClick('case-studies'); }}>Case Studies</a>
          <a href="#contact-us" onClick={(e) => { e.preventDefault(); handleNavClick('contact-us'); }}>Contact Us</a>
        </nav>
        <div className="mobile-nav">
          <ResponsiveNavMenu />
        </div>
      </header>
    </>
  );
};

export default Header;