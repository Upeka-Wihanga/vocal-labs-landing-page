import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nav = styled.nav<{ isVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(10, 10, 20, 0.9);
  backdrop-filter: blur(10px);
  color: #fff;
  position: fixed;
  top: ${({ isVisible }) => (isVisible ? '0' : '-70px')};
  left: 0;
  width: 100%;
  height: 70px !important;
  min-height: 70px;
  z-index: ${({ theme }) => theme.zIndex.navbar || 9999}; /* Ensure high z-index */
  transition: top 0.3s;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-family: apple-system, sans-serif;
  font-weight: bold;
  color: #ffffff;  /* White text for the logo */
  position: absolute;
  left: 2rem;  /* Move the logo to the left */
  z-index: 1001; /* Ensure it is above other elements */

  img {
    margin-right: 0.5rem; /* Space between the image and the text */
    height: 40px; /* Adjust the height as needed */
    border-radius: 8px; /* Make the corners rounded */
  }
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 50%;
  height: auto;
  transform: translateX(-50%);
  z-index: 1001;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  font-size: 1rem;
  color: #fff;  /* White text for nav items */
  transition: color 0.3s, transform 0.3s; /* Add transition for color and transform */

  &:hover {
    color: ${({ theme }) => theme.colors.primary || '#ff5e57'};  /* Color on hover */
    transform: translateY(-5px); /* Pop-up effect on hover */
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary || '#007bff'};  /* Button background color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  position: absolute;
  right: 4rem;  /* Adjusted to make more space for the hamburger menu */
  z-index: 1001; /* Ensure it is above other elements */

  &:hover {
    background: ${({ theme }) => theme.colors.secondary || '#0056b3'};  /* Button hover effect */
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002; /* Ensure it is above other elements */

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1rem;  /* Positioned next to the right side of the "Sign Up" button */
    top: 50%;  /* Center vertically */
    transform: translateY(-50%);
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 70px;
  right: 0;
  background: rgba(26, 39, 67, 0.98);
  backdrop-filter: blur(12px);
  padding: 1rem;
  width: 200px;
  border-radius: 0 0 0 10px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 9998;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  color: #e2e8f0;
  text-decoration: none;
  padding: 1rem 1.2rem;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border-radius: 6px;

  &:hover {
    color: #ffffff;
    background: rgba(59, 130, 246, 0.15);
    transform: translateX(5px);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setIsVisible(false);
      } else {
        // if scroll up show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Nav isVisible={isVisible}>
      <Logo>
        <img src="\images\WhatsApp Image 2024-12-18 at 00.31.30_90e5c346.jpg" alt="Logo" />
        VocalLabs
      </Logo>
      <HamburgerMenu onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>
      <NavLinks isOpen={isOpen}>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/services">Services</Link></NavItem>
        <NavItem><Link to="/prices">Prices</Link></NavItem>
        <NavItem><Link to="/faq">FAQ</Link></NavItem>
      </NavLinks>
      <Button>Sign Up</Button>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <MobileNavLink to="/" onClick={handleLinkClick}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={handleLinkClick}>About</MobileNavLink>
            <MobileNavLink to="/services" onClick={handleLinkClick}>Services</MobileNavLink>
            <MobileNavLink to="/prices" onClick={handleLinkClick}>Prices</MobileNavLink>
            <MobileNavLink to="/faq" onClick={handleLinkClick}>FAQ</MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;