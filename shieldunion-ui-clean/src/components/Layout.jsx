import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-100 text-center text-sm text-gray-600 p-4 border-t">
        © {new Date().getFullYear()} ShieldUnion. All rights reserved.
      </footer>
    </>
  );
};

import Footer from '../components/Footer';


function App() {
  return (
    <>
      <Routes>{/* your routes */}</Routes>
      <Footer />
    </>
  );
}


export default Layout;
