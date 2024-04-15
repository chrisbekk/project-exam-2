import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
export const Root = () => {
  return (
    <div className="bg-neutral-50 flex flex-col min-h-screen font-primary">
      <Header />
      <main className="mt-32 container mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
