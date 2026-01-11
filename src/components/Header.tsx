import { Heart, Menu, ShoppingCart, Search, User } from 'lucide-react';

export function Header() {
  return (
    <nav className="relative z-20 px-6 py-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-rose-600 fill-rose-600" />
          <span className="text-2xl tracking-tight">Engraved Moments</span>
        </div>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">
            Products
          </a>
          <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button className="p-2 hover:bg-white/60 rounded-full transition-colors">
            <Search className="w-6 h-6 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-white/60 rounded-full transition-colors">
            <User className="w-6 h-6 text-gray-700" />
          </button>
          <button className="relative p-2 hover:bg-white/60 rounded-full transition-colors">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-rose-600 to-purple-600 text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        <button className="md:hidden p-2 hover:bg-white/60 rounded-lg transition-colors">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
