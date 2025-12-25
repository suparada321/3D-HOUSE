export default function Footer() {
  return (
    <footer className="bg-luxury-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Luxury <span className="text-luxury-gold">Living</span>
            </h3>
            <p className="text-gray-400 font-serif">
              บ้านหรูในฝัน ออกแบบเพื่อคุณ<br />
              พร้อมอยู่ Q4/2025
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4 text-luxury-gold">ติดต่อเรา</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 ถนนพระราม 9, กรุงเทพฯ</p>
              <p>📞 02-XXX-XXXX</p>
              <p>📧 info@luxuryliving.com</p>
              <p>⏰ เปิดทุกวัน 10:00 - 19:00 น.</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4 text-luxury-gold">เมนู</h4>
            <div className="space-y-2 text-gray-400">
              <p className="hover:text-luxury-gold cursor-pointer transition-colors">หน้าแรก</p>
              <p className="hover:text-luxury-gold cursor-pointer transition-colors">แบบบ้าน</p>
              <p className="hover:text-luxury-gold cursor-pointer transition-colors">ชมบ้าน 3D</p>
              <p className="hover:text-luxury-gold cursor-pointer transition-colors">ติดต่อเรา</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="font-serif">&copy; 2025 Luxury Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
