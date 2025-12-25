import { Unit } from '../../data/units';
import { useState } from 'react';

interface ControlPanelProps {
  selectedUnit: Unit;
  units: Unit[];
  onUnitChange: (unitId: string) => void;
  isDayMode: boolean;
  onDayModeToggle: () => void;
  isWireframe: boolean;
  onWireframeToggle: () => void;
  onResetView: () => void;
  isXRayMode: boolean;
  onXRayModeToggle: () => void;
}

export default function ControlPanel({
  selectedUnit,
  units,
  onUnitChange,
  isDayMode,
  onDayModeToggle,
  isWireframe,
  onWireframeToggle,
  onResetView,
  isXRayMode,
  onXRayModeToggle,
}: ControlPanelProps) {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const handleAppointment = () => {
    setShowAppointmentModal(true);
    setTimeout(() => {
      alert('📅 ขอบคุณที่สนใจ! เจ้าหน้าที่จะติดต่อกลับภายใน 24 ชั่วโมง');
      setShowAppointmentModal(false);
    }, 500);
  };

  const handleQuote = () => {
    setShowQuoteModal(true);
    setTimeout(() => {
      alert('📄 ระบบกำลังจัดเตรียมใบเสนอราคา กรุณารอสักครู่...\n\nราคาเริ่มต้น: ' + selectedUnit.priceFrom + ' ล้านบาท');
      setShowQuoteModal(false);
    }, 500);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 space-y-6 max-h-[calc(100vh-120px)] overflow-y-auto">
      {/* Unit Selector */}
      <div>
        <h3 className="font-display font-bold text-xl mb-3 text-luxury-dark">เลือกแบบบ้าน</h3>
        <div className="space-y-2">
          {units.map((unit) => (
            <button
              key={unit.id}
              onClick={() => onUnitChange(unit.id)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedUnit.id === unit.id
                  ? 'border-luxury-gold bg-gradient-to-r from-luxury-gold/10 to-primary-50 shadow-md'
                  : 'border-gray-200 hover:border-luxury-gold/50 hover:shadow-sm'
              }`}
            >
              <div className="font-semibold text-luxury-dark">{unit.name}</div>
              <div className="text-sm text-luxury-gold font-medium">
                เริ่มต้น {unit.priceFrom} ล้านบาท
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Controls */}
      <div>
        <h3 className="font-display font-bold text-xl mb-3 text-luxury-dark">การควบคุม</h3>
        <div className="space-y-2">
          <button
            onClick={onResetView}
            className="w-full btn-outline flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <span className="text-xl">🔄</span>
            <span>รีเซ็ตมุมมอง</span>
          </button>
          
          <button
            onClick={onDayModeToggle}
            className="w-full btn-outline flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <span className="text-xl">{isDayMode ? '🌙' : '☀️'}</span>
            <span>{isDayMode ? 'โหมดกลางคืน' : 'โหมดกลางวัน'}</span>
          </button>
          
          <button
            onClick={onWireframeToggle}
            className="w-full btn-outline flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <span className="text-xl">{isWireframe ? '🏠' : '📐'}</span>
            <span>{isWireframe ? 'โหมดปกติ' : 'โหมด Wireframe'}</span>
          </button>
          
          <button
            onClick={onXRayModeToggle}
            className="w-full btn-outline flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <span className="text-xl">{isXRayMode ? '🏠' : '👁️'}</span>
            <span>{isXRayMode ? 'ปิด X-Ray' : 'โหมด X-Ray (ดูภายใน)'}</span>
          </button>
        </div>
      </div>
      
      {/* Unit Specs */}
      <div>
        <h3 className="font-display font-bold text-xl mb-3 text-luxury-dark">รายละเอียด</h3>
        <div className="space-y-3 text-sm bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">พื้นที่ใช้สอย:</span>
            <span className="font-semibold text-luxury-dark">{selectedUnit.usableArea} ตร.ม.</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">ขนาดที่ดิน:</span>
            <span className="font-semibold text-luxury-dark">{selectedUnit.landSize} ตร.ว.</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">ห้องนอน:</span>
            <span className="font-semibold text-luxury-dark">{selectedUnit.bedrooms} ห้อง</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">ห้องน้ำ:</span>
            <span className="font-semibold text-luxury-dark">{selectedUnit.bathrooms} ห้อง</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">ที่จอดรถ:</span>
            <span className="font-semibold text-luxury-dark">{selectedUnit.parking} คัน</span>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div>
        <h3 className="font-display font-bold text-xl mb-3 text-luxury-dark">จุดเด่น</h3>
        <ul className="space-y-2 text-sm">
          {selectedUnit.features.map((feature, index) => (
            <li key={index} className="flex items-start bg-primary-50 p-2 rounded">
              <span className="text-primary-600 mr-2 font-bold">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* CTA Buttons */}
      <div className="space-y-3 pt-4 border-t-2 border-luxury-gold/30">
        <button 
          onClick={handleAppointment}
          disabled={showAppointmentModal}
          className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-xl">📅</span>
          <span>{showAppointmentModal ? 'กำลังส่งคำขอ...' : 'นัดชมโครงการ'}</span>
        </button>
        <button 
          onClick={handleQuote}
          disabled={showQuoteModal}
          className="w-full btn-outline flex items-center justify-center gap-2 text-lg py-4 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-xl">📄</span>
          <span>{showQuoteModal ? 'กำลังจัดเตรียม...' : 'ขอใบเสนอราคา'}</span>
        </button>
      </div>
    </div>
  );
}
