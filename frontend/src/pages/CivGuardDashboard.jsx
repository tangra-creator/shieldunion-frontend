// src/pages/CivGuardDashboard.jsx
import React from 'react';
import CivGuardLayout from '../components/CivGuardLayout';

const CivGuardDashboard = () => {
  return (
    <CivGuardLayout>
      <h2 className="text-2xl font-bold mb-4">👮 CivGuard Dashboard</h2>
      <p className="text-gray-700">Welcome to the ShieldUnion CivGuard interface. Use the top menu to manage assigned responsibilities.</p>
    </CivGuardLayout>
  );
};

export default CivGuardDashboard;
