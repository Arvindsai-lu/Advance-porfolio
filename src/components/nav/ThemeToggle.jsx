import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // Start in 'hacker' mode (default theme)
  const [theme, setTheme] = useState('hacker');

  // Apply the theme class to the body whenever it changes
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Toggle between hacker and kali
  const toggleTheme = () => {
    setTheme(theme === 'hacker' ? 'kali' : 'hacker');
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-primary"
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 1000,
        fontSize: '0.9rem',
        padding: '0.5rem 1rem'
      }}
    >
      {theme === 'hacker' ? '🐉 Kali Mode' : '💻 Hacker Mode'}
    </button>
  );
};

export default ThemeToggle;