import React from 'react';
import Header from '@/components/Header';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50/30">
      <Header />
      
      <main>
        <ContactHero />
        <ContactForm />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
