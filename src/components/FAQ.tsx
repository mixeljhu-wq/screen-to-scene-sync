import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/40 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-4 text-muted-foreground">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are your business hours?",
      answer: "We're available Monday through Friday, 8:00 AM to 5:00 PM PST. We typically respond to all inquiries within 24 hours during business days."
    },
    {
      question: "How quickly will I receive a response?",
      answer: "We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly at +1 (555) 123-4567."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes! We offer both in-person and virtual consultations via video call. Just mention your preference in the contact form."
    },
    {
      question: "Can I schedule a visit to your office?",
      answer: "Absolutely! We welcome office visits. Please contact us in advance to schedule an appointment so we can ensure someone is available to meet with you."
    }
  ];

  return (
    <section className="px-6 py-16 bg-white/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find quick answers to common questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
