import { useParams, Link } from 'react-router-dom';
import { units } from '../data/units';

export default function UnitDetailPage() {
  const { id } = useParams<{ id: string }>();
  const unit = units.find(u => u.id === id);
  
  if (!unit) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">ไม่พบข้อมูลแบบบ้าน</h1>
          <Link to="/" className="btn-primary">
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Image */}
          <div className="relative h-96">
            <img 
              src={unit.thumbnailUrl} 
              alt={unit.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6 bg-luxury-gold text-white px-6 py-3 rounded-full font-bold text-xl">
              เริ่มต้น {unit.priceFrom} ล้านบาท
            </div>
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{unit.name}</h1>
            <p className="text-gray-600 text-lg mb-8">{unit.description}</p>
            
            {/* Specs Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">📐</div>
                <div className="text-sm text-gray-600">พื้นที่ใช้สอย</div>
                <div className="text-2xl font-bold">{unit.usableArea}</div>
                <div className="text-sm text-gray-600">ตร.ม.</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🏡</div>
                <div className="text-sm text-gray-600">ขนาดที่ดิน</div>
                <div className="text-2xl font-bold">{unit.landSize}</div>
                <div className="text-sm text-gray-600">ตร.ว.</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🛏️</div>
                <div className="text-sm text-gray-600">ห้องนอน</div>
                <div className="text-2xl font-bold">{unit.bedrooms}</div>
                <div className="text-sm text-gray-600">ห้อง</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🚿</div>
                <div className="text-sm text-gray-600">ห้องน้ำ</div>
                <div className="text-2xl font-bold">{unit.bathrooms}</div>
                <div className="text-sm text-gray-600">ห้อง</div>
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">จุดเด่น</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {unit.features.map((feature, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <span className="text-primary-600 text-xl mr-3">✓</span>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Link 
                to={`/viewer?unit=${unit.id}`} 
                className="btn-primary text-lg px-8 py-4"
              >
                🏠 เปิดใน 3D Viewer
              </Link>
              <Link 
                to="/contact" 
                className="btn-outline text-lg px-8 py-4"
              >
                📞 ติดต่อสอบถาม
              </Link>
              <button className="btn-outline text-lg px-8 py-4">
                📄 ดาวน์โหลดแบบบ้าน
              </button>
            </div>
          </div>
        </div>
        
        {/* Other Units */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">แบบบ้านอื่นๆ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {units.filter(u => u.id !== unit.id).map((otherUnit) => (
              <Link 
                key={otherUnit.id}
                to={`/units/${otherUnit.id}`}
                className="card"
              >
                <img 
                  src={otherUnit.thumbnailUrl} 
                  alt={otherUnit.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{otherUnit.name}</h3>
                  <p className="text-primary-600 font-semibold">
                    เริ่มต้น {otherUnit.priceFrom} ล้านบาท
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
