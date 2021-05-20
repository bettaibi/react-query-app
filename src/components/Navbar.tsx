import React from 'react';

interface NavbarProps{
    setPage: (p: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
  return ( 
    <nav>
      <button onClick={() => setPage('planets')}>Planets</button>
      <button onClick={() => setPage('chars')}>People</button>
    </nav>
  );
}
 
export default Navbar;