import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4">Get in Touch</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a question or want to work together? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/80 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-2">
              Send us an email anytime
            </p>
            <a href="mailto:hello@example.com" className="text-rose-600 hover:text-rose-700 transition-colors">
              hello@example.com
            </a>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/80 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-2">
              Mon-Fri from 8am to 5pm
            </p>
            <a href="tel:+15551234567" className="text-amber-600 hover:text-amber-700 transition-colors">
              +1 (555) 123-4567
            </a>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/80 hover:shadow-xl transition-shadow">
            <div className="flex gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center">
                <Facebook className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="mb-2">Follow Us</h3>
            <p className="text-muted-foreground mb-3">
              Connect with us on social media
            </p>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                @engravedmoments
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 transition-colors flex items-center gap-2">
                <Facebook className="w-4 h-4" />
                Engraved Moments
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
