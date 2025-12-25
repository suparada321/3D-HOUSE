import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold text-luxury-dark">
            Luxury <span className="text-luxury-gold">Living</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-luxury-gold font-semibold' : 'text-gray-700 hover:text-luxury-gold'
              }`}
            >
              หน้าแรก
            </Link>
            <Link 
              to="/units" 
              className={`font-medium transition-colors ${
                isActive('/units') ? 'text-luxury-gold font-semibold' : 'text-gray-700 hover:text-luxury-gold'
              }`}
            >
              แบบบ้าน
            </Link>
            <Link 
              to="/viewer" 
              className={`font-medium transition-colors ${
                isActive('/viewer') ? 'text-luxury-gold font-semibold' : 'text-gray-700 hover:text-luxury-gold'
              }`}
            >
              ชมบ้าน 3D
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-luxury-gold font-semibold' : 'text-gray-700 hover:text-luxury-gold'
              }`}
            >
              ติดต่อ
            </Link>
            <Link to="/viewer" className="btn-primary hover:scale-105 transition-transform">
              ดูบ้านแบบ 3D
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
