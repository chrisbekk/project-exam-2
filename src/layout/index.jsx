import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
export const Layout = () => {
  return (
    <div className="bg-neutral-50 flex flex-col min-h-screen font-primary">
      <Header />
      <main className="mt-32 mb-48 container mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
