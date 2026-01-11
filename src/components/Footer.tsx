import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16 px-6 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose-600 fill-rose-600" />
              <span className="text-xl tracking-tight">Engraved Moments</span>
            </div>
            <p className="text-gray-600">
              Transforming memories into timeless treasures since 2020
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-rose-100 transition-colors">
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors">
                <Facebook className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-100 transition-colors">
                <Twitter className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-gray-900 mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Necklaces</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Keychains</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Bracelets</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Rings</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 Engraved Moments. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
