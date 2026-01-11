import Header from '@/components/Header';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
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
