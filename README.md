# 🏠 Luxury Living - Real Estate 3D Website

เว็บไซต์ 3D สำหรับโครงการอสังหาริมทรัพย์ สร้างด้วย React + TypeScript + Three.js (React Three Fiber)

![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.162-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan)

## ✨ Features

- 🏡 **3D Viewer** - ชมบ้านแบบ 3D แบบ Interactive (หมุน, ซูม, เลื่อน)
- 👁️ **X-Ray Mode** - ดูภายในบ้าน เห็นเฟอร์นิเจอร์และโครงสร้างทั้งหมด
- 🎨 **Modern UI** - ดีไซน์สวยงาม Responsive ทุกหน้าจอ
- 🌓 **Day/Night Mode** - สลับโหมดกลางวัน/กลางคืน
- 📐 **Wireframe Mode** - ดูโครงสร้างแบบ Wireframe
- 🏘️ **Multiple Units** - แบบบ้าน 3 แบบ (Type A, B, C)
- 🪑 **Interior Furniture** - เฟอร์นิเจอร์ภายในบ้านครบครัน
- 📱 **Responsive Design** - ใช้งานได้ทั้ง Desktop และ Mobile
- ⚡ **Performance Optimized** - Lazy loading, Suspense, Shadow optimization

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **3D Engine**: Three.js + React Three Fiber + Drei
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **Build Tool**: Vite

## 📦 Installation

```bash
# 1. Clone repository
git clone https://github.com/YOUR_USERNAME/real-estate-3d.git
cd real-estate-3d

# 2. ติดตั้ง dependencies
npm install

# 3. รันโปรเจกต์
npm run dev
```

เปิดเบราว์เซอร์ที่ `http://localhost:5173`

## 📁 Project Structure

```
real-estate-3d/
├── public/
│   └── models/              # ไฟล์โมเดล 3D (.glb)
├── src/
│   ├── components/
│   │   ├── ui/              # UI Components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── UnitCard.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   └── viewer/          # 3D Viewer Components
│   │       ├── Scene.tsx
│   │       ├── HouseModel.tsx
│   │       ├── ControlPanel.tsx
│   │       └── InteriorFurniture.tsx
│   ├── pages/               # Pages
│   │   ├── LandingPage.tsx
│   │   ├── ViewerPage.tsx
│   │   ├── UnitDetailPage.tsx
│   │   ├── UnitsPage.tsx
│   │   └── ContactPage.tsx
│   ├── data/
│   │   └── units.ts         # Mock data
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Pages

1. **Landing Page** (`/`) - หน้าแรก พร้อม Hero, Highlights, Gallery, Contact Form
2. **Units Page** (`/units`) - แสดงแบบบ้านทั้งหมด
3. **Unit Detail** (`/units/:id`) - รายละเอียดแบบบ้านแต่ละแบบ
4. **3D Viewer** (`/viewer`) - ชมบ้านแบบ 3D พร้อม Controls
5. **Contact** (`/contact`) - ฟอร์มติดต่อ พร้อม Validation

## 🏠 House Types

### Type A - Modern Minimal (4.5M)
- พื้นที่ใช้สอย: 180 ตร.ม.
- ที่ดิน: 50 ตร.ว.
- 3 ห้องนอน, 2 ห้องน้ำ
- มีสระว่ายน้ำ

### Type B - Contemporary Luxury (6.2M)
- พื้นที่ใช้สอย: 220 ตร.ม.
- ที่ดิน: 60 ตร.ว.
- 4 ห้องนอน, 3 ห้องน้ำ
- สไตล์ไม้ร่วมสมัย

### Type C - Tropical Villa (8.9M)
- พื้นที่ใช้สอย: 280 ตร.ม.
- ที่ดิน: 80 ตร.ว.
- 4 ห้องนอน, 4 ห้องน้ำ
- สระว่ายน้ำขนาดใหญ่

## 🎯 3D Features

### X-Ray Mode (ดูภายในบ้าน)
เปิดโหมด X-Ray เพื่อดูภายในบ้าน:
- ✅ ผนังโปร่งแสง (opacity 15%)
- ✅ เห็นเฟอร์นิเจอร์ทั้งหมด:
  - ห้องนั่งเล่น: โซฟา, โต๊ะกลาง, ทีวี
  - ห้องครัว: ตู้เย็น, เคาน์เตอร์, โต๊ะอาหาร
  - ห้องนอน: เตียง, ตู้เสื้อผ้า, โต๊ะข้างเตียง
  - ห้องน้ำ: อ่างล้างหน้า, โถส้วม, อ่างอาบน้ำ

### Controls
- 🖱️ **ลากซ้าย**: หมุนมุมมอง
- 🖱️ **ลากขวา**: เลื่อนตำแหน่ง
- 🖱️ **ล้อเมาส์**: ซูมเข้า-ออก
- 🔄 **รีเซ็ต**: กลับสู่มุมมองเริ่มต้น
- ☀️🌙 **Day/Night**: สลับโหมดแสง
- 📐 **Wireframe**: ดูโครงสร้าง
- 👁️ **X-Ray**: ดูภายในบ้าน

## 🏗️ วิธีใส่ไฟล์โมเดล 3D (.glb)

### Option 1: ใช้โมเดลจริง
1. เตรียมไฟล์ `.glb` (แนะนำ: ใช้ Blender export เป็น glTF 2.0)
2. วางไฟล์ใน `public/models/`
   - `house-a.glb`
   - `house-b.glb`
   - `house-c.glb`
3. โมเดลจะโหลดอัตโนมัติ

### Option 2: ใช้ Fallback (ปัจจุบัน)
- ถ้าไม่มีไฟล์ `.glb` ระบบจะแสดงบ้าน 3D แบบ Fallback
- สร้างจาก Three.js primitives พร้อมรายละเอียดครบถ้วน
- ทำงานได้ทันทีโดยไม่ต้องมีไฟล์โมเดล

### แหล่งโมเดล 3D ฟรี:
- [Sketchfab](https://sketchfab.com/) - มีโมเดลบ้านฟรีเยอะ
- [Poly Haven](https://polyhaven.com/) - โมเดล + Textures คุณภาพสูง
- [TurboSquid](https://www.turbosquid.com/Search/3D-Models/free/house)

## ⚡ Performance Tips

1. **Optimize Models**:
   - ใช้ Draco compression สำหรับ .glb
   - ลด polygon count ให้เหมาะสม (< 100k triangles)
   - ใช้ texture ขนาดพอดี (1024x1024 หรือ 2048x2048)

2. **Code Optimization**:
   - ใช้ `React.memo()` สำหรับ components ที่ไม่ค่อยเปลี่ยน
   - ใช้ `useMemo()` สำหรับ calculations ที่หนัก
   - Lazy load pages ด้วย `React.lazy()`

3. **3D Optimization**:
   - จำกัด shadows (ใช้ ContactShadows)
   - ใช้ `dpr={[1, 2]}` เพื่อ adaptive quality
   - ใช้ Environment HDRI แทนการใส่ไฟเยอะ

## 🚀 Build for Production

```bash
npm run build
npm run preview
```

## 🎯 Next Steps / Improvements

- [ ] เพิ่ม Camera Presets (Front, Side, Top views)
- [ ] เพิ่ม Annotations/Hotspots บนโมเดล
- [ ] เพิ่ม Material Customization (เปลี่ยนสี, วัสดุ)
- [ ] เชื่อม Backend API จริง
- [ ] เพิ่ม VR Mode
- [ ] เพิ่ม Screenshot/Share feature
- [ ] เพิ่ม Floor Plan overlay
- [ ] เพิ่ม Measurement tools

## 📝 Notes

- โปรเจกต์นี้ใช้ **Fallback 3D Model** ที่สร้างจาก Three.js primitives
- มีเฟอร์นิเจอร์และรายละเอียดภายในบ้านครบถ้วน
- รองรับ X-Ray Mode เพื่อดูภายในบ้าน
- Form validation ทำงานแบบ client-side
- ข้อมูลทั้งหมดเป็น mock data

## 📄 License

MIT License - ใช้งานได้อย่างอิสระ

## 👨‍💻 Author

Created with ❤️ by Kiro AI

---

## 🌟 Screenshots

### Landing Page
หน้าแรกพร้อม Hero Section และแบบบ้านทั้งหมด

### 3D Viewer
ชมบ้านแบบ 3D พร้อม Controls ครบครัน

### X-Ray Mode
ดูภายในบ้าน เห็นเฟอร์นิเจอร์และโครงสร้างทั้งหมด

---

**Happy Coding! 🚀**
