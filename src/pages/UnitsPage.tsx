import { units } from '../data/units';
import UnitCard from '../components/ui/UnitCard';

export default function UnitsPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">แบบบ้านในโครงการ</h1>
          <p className="text-gray-600 text-lg">
            เลือกแบบบ้านที่เหมาะกับคุณ พร้อมชมแบบ 3D
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>
    </div>
  );
}
