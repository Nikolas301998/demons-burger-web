import React from 'react';

const Navbar: React.FC = () => {
  // Este div oculto es necesario para que React no falle.
  return <div className="hidden"></div>;
};

// 👇 ESTA LÍNEA ES OBLIGATORIA. SI FALTA, LA APP FALLA.
export default Navbar;