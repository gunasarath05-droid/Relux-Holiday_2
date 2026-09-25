import React from 'react';
import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AuthModal from '../components/common/AuthModal';
import PointsModal from '../components/common/PointsModal';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>Relux Holidays | Charge your EV. Stay on points.</title>
        <meta name="description" content="Turn your Relux Electric EV charging sessions into luxury holiday resort stays and complimentary zero-carbon pick & drop services across South India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#1C1B1A]">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />

        {/* Global Modals */}
        <AuthModal />
        <PointsModal />
      </div>
    </AuthProvider>
  );
}
