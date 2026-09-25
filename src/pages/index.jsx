import React from 'react';
import Head from 'next/head';

// Sections imported directly from src/pages/home/include/ as requested
import HeroSection from './home/include/HeroSection';
import StepsSection from './home/include/StepsSection';
import PopularStaysSection from './home/include/PopularStaysSection';
import LastMileSection from './home/include/LastMileSection';
import PlansSection from './home/include/PlansSection';
import TestimonialsSection from './home/include/TestimonialsSection';
import TravelNotesSection from './home/include/TravelNotesSection';
import FaqSection from './home/include/FaqSection';
import CtaBannerSection from './home/include/CtaBannerSection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Relux Holidays | Charge your EV. Stay on points.</title>
        <meta
          name="description"
          content="Relux Stays enables EV drivers to convert highway charging into luxury resort stays and station-to-door pick & drop privileges."
        />
      </Head>

      <div className="space-y-0">
        <HeroSection />
        <StepsSection />
        <PopularStaysSection />
        <LastMileSection />
        <PlansSection />
        <TestimonialsSection />
        <TravelNotesSection />
        <FaqSection />
        <CtaBannerSection />
      </div>
    </>
  );
}
