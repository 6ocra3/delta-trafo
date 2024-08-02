// src/components/LoginPage.tsx

import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkActiveProps {
  className?: string;
  activeClassName?: string;
  to: string;
  children?: React.ReactNode;
}

const NavLinkActive: React.FC<NavLinkActiveProps> = ({
  className = '',
  activeClassName = '',
  to,
  children = null,
}) => {
  return (
    <NavLink 
      className={({ isActive }) =>
        `${className} ${isActive ? activeClassName : ''}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkActive;
