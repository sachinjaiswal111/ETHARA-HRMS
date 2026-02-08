
import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar'
import { Toaster } from 'react-hot-toast';

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar/>

      {/* Main content area expands if sidebar is hidden */}
      <main className={`flex-1 flex flex-col `}>
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <section className="flex-1 overflow-y-auto">
          {children}
        </section>
      </main>
    </div>
  );
}

export default Layout