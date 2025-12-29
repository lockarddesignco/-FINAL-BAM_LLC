import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Accreditations } from './components/Accreditations';
import { Capabilities } from './components/Capabilities';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Industries } from './components/Industries';
import { TheBAMMethod } from './components/TheBAMMethod';
import { Results } from './components/Results';
import { SiteVisitCTA } from './components/SiteVisitCTA';
import { Footer } from './components/Footer';
import { ServicesMain } from './components/ServicesMain';

const App: React.FC = () => {
  // Simple state to toggle between Home and Services for demonstration
  // In a real app, this would be handled by a router
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9F8] text-slate-800 antialiased">
      {/* Passing setPage to Header if we wanted to make nav work, 
          but for now we'll just show the structure */}
      <Header />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            {/* Added a temporary toggle for you to see the new page */}
            <div className="bg-[#265A4A] py-4 text-center">
              <button 
                onClick={() => setCurrentPage('services')}
                className="text-[#A7D7C5] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                [ Preview New Services Main Page ]
              </button>
            </div>
            <Accreditations />
            <Capabilities />
            <WhyChooseUs />
            <Industries />
            <TheBAMMethod />
            <Results />
            <SiteVisitCTA />
          </>
        ) : (
          <>
            <div className="bg-[#265A4A] py-4 text-center">
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-[#A7D7C5] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                [ Back to Home ]
              </button>
            </div>
            <ServicesMain />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;