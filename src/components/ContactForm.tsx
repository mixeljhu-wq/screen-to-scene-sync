import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/80">
          <div className="text-center mb-8">
            <h2 className="mb-3">Send Us a Message</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {submitted ? (
            <div className="bg-gradient-to-r from-rose-100 to-purple-100 border border-rose-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                Your message has been sent successfully. We'll be in touch soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#f3f3f5] rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#f3f3f5] rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f3f3f5] rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#f3f3f5] rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-600 to-purple-600 text-white py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 font-medium"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
