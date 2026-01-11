import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What are your business hours?",
    answer: "We're available Monday through Friday, 8:00 AM to 5:00 PM PST. We typically respond to all inquiries within 24 hours during business days."
  },
  {
    question: "How quickly will I receive a response?",
    answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly at +1 (555) 123-4567."
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes, we offer virtual consultations via video call to discuss your custom jewelry needs. Please contact us to schedule an appointment."
  },
  {
    question: "Can I schedule a visit to your office?",
    answer: "Absolutely! We welcome in-person visits to our showroom. Please contact us in advance to schedule an appointment and ensure someone is available to assist you."
  }
];

const FAQItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({ 
  item, 
  isOpen, 
  onToggle 
}) => {
  return (
    <div className="bg-white/60 border border-white/40 rounded-xl overflow-hidden mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-foreground text-base font-normal">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-4 text-muted-foreground text-base leading-6">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="w-full max-w-[896px] mx-auto px-6 mt-20">
      <div className="text-center mb-12">
        <h2 className="text-foreground text-xl font-medium">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-base mt-3">
          Find quick answers to common questions
        </p>
      </div>
      
      <div>
        {faqData.map((item, index) => (
          <FAQItemComponent
            key={index}
            item={item}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
