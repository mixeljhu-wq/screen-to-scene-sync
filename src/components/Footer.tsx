import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

interface FooterSectionProps {
  title: string;
  links: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-foreground text-base font-medium mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href="#" 
              className="text-muted-foreground text-base hover:text-foreground transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[1280px] mx-auto px-6 mt-20 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L4 8V24L16 30L28 24V8L16 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M16 10L10 13V19L16 22L22 19V13L16 10Z" fill="currentColor"/>
            </svg>
            <span className="text-xl font-normal tracking-tight text-foreground">
              Engraved Moments
            </span>
          </div>
          <p className="text-muted-foreground text-base leading-6 mb-4">
            Transforming memories into timeless treasures since 2020
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <FooterSection 
          title="Products" 
          links={["Necklaces", "Keychains", "Bracelets", "Rings"]} 
        />
        
        <FooterSection 
          title="Support" 
          links={["FAQ", "Shipping Info", "Returns", "Contact Us"]} 
        />
        
        <FooterSection 
          title="Company" 
          links={["About Us", "Our Story", "Testimonials", "Careers"]} 
        />
      </div>
      
      <div className="border-t border-border pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Engraved Moments. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
