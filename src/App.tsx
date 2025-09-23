import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AlumniDirectory from './components/AlumniDirectory';
import JobPortal from './components/JobPortal';
import Events from './components/Events';
import SuccessStories from './components/SuccessStories';
import DonationPortal from './components/DonationPortal';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <div className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Our Platform</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div 
                    onClick={() => setActiveSection('directory')}
                    className="cursor-pointer bg-gray-50 rounded-lg p-8 hover:bg-blue-50 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-2xl">👥</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Alumni Network</h3>
                    <p className="text-gray-600">Connect with 5,000+ alumni across industries and locations</p>
                  </div>
                  
                  <div 
                    onClick={() => setActiveSection('jobs')}
                    className="cursor-pointer bg-gray-50 rounded-lg p-8 hover:bg-green-50 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-2xl">💼</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Career Opportunities</h3>
                    <p className="text-gray-600">Find your next opportunity through our exclusive job portal</p>
                  </div>
                  
                  <div 
                    onClick={() => setActiveSection('events')}
                    className="cursor-pointer bg-gray-50 rounded-lg p-8 hover:bg-purple-50 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold text-2xl">📅</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Events & Reunions</h3>
                    <p className="text-gray-600">Join reunions, workshops, and networking events</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'directory':
        return <AlumniDirectory />;
      case 'jobs':
        return <JobPortal />;
      case 'events':
        return <Events />;
      case 'stories':
        return <SuccessStories />;
      case 'donate':
        return <DonationPortal />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;