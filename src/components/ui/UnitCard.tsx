import { Link } from 'react-router-dom';
import { Unit } from '../../data/units';

interface UnitCardProps {
  unit: Unit;
}

export default function UnitCard({ unit }: UnitCardProps) {
  return (
    <div className="card group">
      <div className="relative overflow-hidden h-64">
        <img 
          src={unit.thumbnailUrl} 
          alt={unit.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-luxury-gold text-white px-4 py-2 rounded-full font-semibold">
          เริ่มต้น {unit.priceFrom} ล้าน
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{unit.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{unit.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-500">พื้นที่ใช้สอย:</span>
            <p className="font-semibold">{unit.usableArea} ตร.ม.</p>
          </div>
          <div>
            <span className="text-gray-500">ที่ดิน:</span>
            <p className="font-semibold">{unit.landSize} ตร.ว.</p>
          </div>
          <div>
            <span className="text-gray-500">ห้องนอน:</span>
            <p className="font-semibold">{unit.bedrooms} ห้อง</p>
          </div>
          <div>
            <span className="text-gray-500">ห้องน้ำ:</span>
            <p className="font-semibold">{unit.bathrooms} ห้อง</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Link to={`/units/${unit.id}`} className="flex-1 btn-outline text-center">
            ดูรายละเอียด
          </Link>
          <Link to={`/viewer?unit=${unit.id}`} className="flex-1 btn-primary text-center">
            ชมแบบ 3D
          </Link>
        </div>
      </div>
    </div>
  );
}
