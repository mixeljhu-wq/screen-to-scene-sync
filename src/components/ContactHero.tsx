import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  contact: string;
  contactColor: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description, contact, contactColor }) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm shadow-lg border border-white/40 flex flex-col p-6 rounded-2xl min-w-[320px]">
      <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-full">
        {icon}
      </div>
      <h3 className="text-foreground text-base font-medium mt-4">{title}</h3>
      <p className="text-muted-foreground text-base mt-2">{description}</p>
      <a href="#" className={`text-base font-medium mt-3 ${contactColor} hover:underline`}>
        {contact}
      </a>
    </div>
  );
};

const SocialCard: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-sm shadow-lg border border-white/40 flex flex-col p-6 rounded-2xl min-w-[320px]">
      <div className="flex gap-3">
        <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-full">
          <Instagram className="w-6 h-6" />
        </div>
        <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-full">
          <Facebook className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-foreground text-base font-medium mt-4">Follow Us</h3>
      <p className="text-muted-foreground text-base mt-2">Connect with us on social media</p>
      <div className="flex flex-col gap-2 mt-4">
        <a href="#" className="flex items-center gap-2 text-[hsl(var(--brand-purple))] hover:underline">
          <Instagram className="w-4 h-4" />
          <span>@engravedmoments</span>
        </a>
        <a href="#" className="flex items-center gap-2 text-[hsl(var(--brand-red))] hover:underline">
          <Facebook className="w-4 h-4" />
          <span>Engraved Moments</span>
        </a>
      </div>
    </div>
  );
};

const ContactHero: React.FC = () => {
  return (
    <section className="w-full max-w-[1024px] mx-auto px-6 mt-20">
      <div className="text-center mb-12">
        <h1 className="text-foreground text-base font-medium">Get in Touch</h1>
        <p className="text-muted-foreground text-base leading-6 mt-4 max-w-xl mx-auto">
          Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContactCard
          icon={<Mail className="w-6 h-6" />}
          title="Email Us"
          description="Send us an email anytime"
          contact="hello@example.com"
          contactColor="text-[hsl(var(--brand-red))]"
        />
        
        <ContactCard
          icon={<Phone className="w-6 h-6" />}
          title="Call Us"
          description="Mon-Fri from 8am to 5pm"
          contact="+1 (555) 123-4567"
          contactColor="text-[hsl(var(--brand-orange))]"
        />
        
        <SocialCard />
      </div>
    </section>
  );
};

export default ContactHero;
