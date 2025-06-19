import React from 'react';
import CivGuardNavbar from './CivGuardNavbar';
import { Outlet } from 'react-router-dom';

const CivGuardLayout = () => {
  return (
    <div>
      <CivGuardNavbar />
      <Outlet /> {/* 👈 This is the missing part if your page is blank */}
    </div>
  );
};

export default CivGuardLayout;
