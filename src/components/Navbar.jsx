import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">ConcepcionSpace</NavLink>
        </div>
        
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
            About Me
          </NavLink>
          <NavLink to="/education" className={({ isActive }) => isActive ? styles.active : ''}>
            Education
          </NavLink>
          <NavLink to="/hobbies" className={({ isActive }) => isActive ? styles.active : ''}>
            Hobbies
          </NavLink>
          <NavLink to="/goals" className={({ isActive }) => isActive ? styles.active : ''}>
            Goals
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? styles.active : ''}>
            IT Experience
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? styles.active : ''}>
            Photo Gallery
          </NavLink>
          <NavLink to="/guestbook" className={({ isActive }) => isActive ? styles.active : ''}>
            Guestbook
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 