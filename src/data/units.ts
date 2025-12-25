export interface Unit {
  id: string;
  name: string;
  priceFrom: number;
  usableArea: number;
  landSize: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  features: string[];
  modelUrl: string;
  thumbnailUrl: string;
  description: string;
}

export const units: Unit[] = [
  {
    id: 'type-a',
    name: 'Type A - Modern Minimal',
    priceFrom: 4.5,
    usableArea: 180,
    landSize: 50,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    features: [
      'ห้องนั่งเล่นโปร่งสบาย',
      'ห้องครัวแบบ Open Plan',
      'Master Bedroom พร้อม Walk-in Closet',
      'สวนหน้าบ้าน',
      'ระบบ Smart Home',
    ],
    modelUrl: '/models/house-a.glb',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    description: 'บ้านสไตล์โมเดิร์นมินิมอล เน้นความเรียบง่ายแต่หรูหรา เหมาะสำหรับครอบครัวเล็ก',
  },
  {
    id: 'type-b',
    name: 'Type B - Contemporary Luxury',
    priceFrom: 6.2,
    usableArea: 220,
    landSize: 60,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    features: [
      'ห้องนั่งเล่น 2 ชั้น',
      'ห้องทำงาน/ห้องอเนกประสงค์',
      'ห้องน้ำในตัวทุกห้องนอน',
      'ระเบียงชั้น 2 วิวสวน',
      'ระบบรักษาความปลอดภัย 24 ชม.',
    ],
    modelUrl: '/models/house-b.glb',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    description: 'บ้านสไตล์ Contemporary หรูหรา พื้นที่กว้างขวาง เหมาะสำหรับครอบครัวใหญ่',
  },
  {
    id: 'type-c',
    name: 'Type C - Tropical Villa',
    priceFrom: 8.9,
    usableArea: 280,
    landSize: 80,
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    features: [
      'สระว่ายน้ำส่วนตัว',
      'ศาลาพักผ่อนริมสระ',
      'ห้องโฮมเธียเตอร์',
      'ห้องฟิตเนส',
      'สวนหย่อมรอบบ้าน',
      'ระบบ Solar Cell',
    ],
    modelUrl: '/models/house-c.glb',
    thumbnailUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    description: 'วิลล่าสไตล์ Tropical Resort พร้อมสระว่ายน้ำ สุดหรู สำหรับผู้ที่ต้องการความเป็นส่วนตัว',
  },
];

export const projectInfo = {
  name: 'Luxury Living',
  tagline: 'บ้านหรูในฝัน ออกแบบเพื่อคุณ',
  location: 'ถนนพระราม 9, กรุงเทพฯ',
  highlights: [
    'ทำเลศักยภาพสูง ใกล้ BTS',
    'ออกแบบโดยสถาปนิกชื่อดัง',
    'ระบบรักษาความปลอดภัย 24 ชม.',
    'สวนส่วนกลางกว่า 2 ไร่',
    'ฟิตเนส สระว่ายน้ำ คลับเฮ้าส์',
    'พร้อมอยู่ Q4/2025',
  ],
};
