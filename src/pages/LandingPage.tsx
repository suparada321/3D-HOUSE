import { Link } from 'react-router-dom';
import { units, projectInfo } from '../data/units';
import UnitCard from '../components/ui/UnitCard';

export default function LandingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-luxury-dark via-gray-800 to-luxury-dark flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            {projectInfo.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-luxury-gold font-serif">
            {projectInfo.tagline}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/viewer" className="btn-primary text-lg px-8 py-4 hover:scale-110 transition-transform">
              🏠 ดูบ้านแบบ 3D
            </Link>
            <Link to="/contact" className="btn-outline text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-luxury-dark hover:scale-110 transition-all">
              📞 ติดต่อเรา
            </Link>
          </div>
        </div>
      </section>
      
      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">จุดเด่นโครงการ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projectInfo.highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">✨</div>
                <p className="font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">แบบบ้านในโครงการ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {units.map((unit) => (
              <UnitCard key={unit.id} unit={unit} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">ทำเลโครงการ</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">🗺️ แผนที่ (Google Maps Embed)</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">{projectInfo.location}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">📍</span>
                  <span>ใกล้ BTS เพียง 5 นาที</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">🏢</span>
                  <span>ใกล้ศูนย์การค้าชั้นนำ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">🏥</span>
                  <span>โรงพยาบาลใกล้เคียง</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">🎓</span>
                  <span>โรงเรียนนานาชาติ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-display font-bold text-center mb-12">ลงทะเบียนสนใจ</h2>
          <form className="bg-white p-8 rounded-lg shadow-lg space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">ชื่อ-นามสกุล *</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                placeholder="กรอกชื่อ-นามสกุล"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">เบอร์โทรศัพท์ *</label>
              <input 
                type="tel" 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                placeholder="0XX-XXX-XXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">อีเมล</label>
              <input 
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">สนใจแบบบ้าน</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent">
                <option>เลือกแบบบ้าน</option>
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>{unit.name}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="w-full btn-primary hover:scale-105 transition-transform">
              ส่งข้อมูล
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
