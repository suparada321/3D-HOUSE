import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { units } from '../data/units';
import Scene from '../components/viewer/Scene';
import ControlPanel from '../components/viewer/ControlPanel';
import LoadingSpinner from '../components/ui/LoadingSpinner';

export default function ViewerPage() {
  const [searchParams] = useSearchParams();
  const unitParam = searchParams.get('unit') || 'type-a';
  
  const [selectedUnitId, setSelectedUnitId] = useState(unitParam);
  const [isDayMode, setIsDayMode] = useState(true);
  const [isWireframe, setIsWireframe] = useState(false);
  const [isXRayMode, setIsXRayMode] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);
  
  const selectedUnit = units.find(u => u.id === selectedUnitId) || units[0];
  
  useEffect(() => {
    if (unitParam && units.find(u => u.id === unitParam)) {
      setSelectedUnitId(unitParam);
    }
  }, [unitParam]);
  
  const handleResetView = () => {
    setResetTrigger(prev => prev + 1);
  };
  
  return (
    <div className="pt-20 h-screen flex flex-col">
      <div className="bg-gradient-to-r from-luxury-dark to-gray-800 text-white border-b px-4 py-4">
        <h1 className="text-3xl font-display font-bold">ชมบ้านแบบ 3D</h1>
        <p className="text-gray-300 font-serif">หมุน ซูม และสำรวจบ้านในมุมมองต่างๆ</p>
      </div>
      
      <div className="flex-1 flex overflow-hidden">
        {/* 3D Viewer */}
        <div className="flex-1 relative">
          <Suspense fallback={<LoadingSpinner />}>
            <Scene
              key={`${selectedUnit.id}-${resetTrigger}`}
              modelUrl={selectedUnit.modelUrl}
              isDayMode={isDayMode}
              isWireframe={isWireframe}
              unitId={selectedUnit.id}
              isXRayMode={isXRayMode}
            />
          </Suspense>
          
          {/* Instructions Overlay */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-3 rounded-lg text-sm">
            <p className="font-semibold mb-1">วิธีใช้งาน:</p>
            <p>🖱️ ลากซ้าย: หมุนมุมมอง</p>
            <p>🖱️ ลากขวา: เลื่อนตำแหน่ง</p>
            <p>🖱️ ล้อเมาส์: ซูมเข้า-ออก</p>
          </div>
        </div>
        
        {/* Control Panel */}
        <div className="w-80 bg-gray-50 p-4 overflow-y-auto">
          <ControlPanel
            selectedUnit={selectedUnit}
            units={units}
            onUnitChange={setSelectedUnitId}
            isDayMode={isDayMode}
            onDayModeToggle={() => setIsDayMode(!isDayMode)}
            isWireframe={isWireframe}
            onWireframeToggle={() => setIsWireframe(!isWireframe)}
            onResetView={handleResetView}
            isXRayMode={isXRayMode}
            onXRayModeToggle={() => setIsXRayMode(!isXRayMode)}
          />
        </div>
      </div>
    </div>
  );
}
