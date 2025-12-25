# 📝 คำสั่ง Git สำหรับอัพโปรเจกต์

## 1. เริ่มต้น Git Repository

```bash
cd real-estate-3d
git init
git add .
git commit -m "🎉 Initial commit: Real Estate 3D Website with React + Three.js"
```

## 2. สร้าง Repository บน GitHub

1. ไปที่ https://github.com/new
2. ตั้งชื่อ repository: `real-estate-3d`
3. เลือก Public หรือ Private
4. **อย่า** เลือก "Initialize with README" (เพราะเรามีแล้ว)
5. คลิก "Create repository"

## 3. เชื่อมต่อกับ GitHub

```bash
# เปลี่ยน YOUR_USERNAME เป็นชื่อ GitHub ของคุณ
git remote add origin https://github.com/YOUR_USERNAME/real-estate-3d.git
git branch -M main
git push -u origin main
```

## 4. คำสั่ง Git ที่ใช้บ่อย

### ดูสถานะไฟล์
```bash
git status
```

### เพิ่มไฟล์ทั้งหมด
```bash
git add .
```

### Commit การเปลี่ยนแปลง
```bash
git commit -m "✨ Add new feature"
```

### Push ขึ้น GitHub
```bash
git push
```

### Pull จาก GitHub
```bash
git pull
```

### ดู History
```bash
git log --oneline
```

## 5. Commit Message แนะนำ

ใช้ emoji เพื่อให้อ่านง่าย:

- 🎉 `:tada:` - Initial commit
- ✨ `:sparkles:` - New feature
- 🐛 `:bug:` - Bug fix
- 📝 `:memo:` - Documentation
- 💄 `:lipstick:` - UI/Style
- ♻️ `:recycle:` - Refactor
- ⚡ `:zap:` - Performance
- 🔧 `:wrench:` - Configuration
- 🚀 `:rocket:` - Deploy

### ตัวอย่าง:
```bash
git commit -m "✨ Add X-Ray mode to view interior furniture"
git commit -m "🐛 Fix swimming pool position in Type A"
git commit -m "💄 Improve tree design in Type A house"
git commit -m "📝 Update README with X-Ray mode documentation"
```

## 6. Branch Strategy (ถ้าทำงานเป็นทีม)

### สร้าง Branch ใหม่
```bash
git checkout -b feature/new-feature
```

### สลับ Branch
```bash
git checkout main
```

### Merge Branch
```bash
git checkout main
git merge feature/new-feature
```

### ลบ Branch
```bash
git branch -d feature/new-feature
```

## 7. .gitignore

ไฟล์ที่ไม่ควร commit:
- `node_modules/` - Dependencies
- `dist/` - Build output
- `.env` - Environment variables
- `*.log` - Log files

## 8. Deploy to GitHub Pages (Optional)

### ติดตั้ง gh-pages
```bash
npm install --save-dev gh-pages
```

### เพิ่มใน package.json
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/real-estate-3d"
}
```

### Deploy
```bash
npm run deploy
```

## 9. Troubleshooting

### ถ้า push ไม่ได้
```bash
git pull --rebase origin main
git push
```

### ถ้าต้องการยกเลิก commit ล่าสุด
```bash
git reset --soft HEAD~1
```

### ถ้าต้องการลบไฟล์ออกจาก Git แต่เก็บไว้ในเครื่อง
```bash
git rm --cached filename
```

---

## 🎯 Quick Start

```bash
# 1. เริ่มต้น
cd real-estate-3d
git init
git add .
git commit -m "🎉 Initial commit"

# 2. เชื่อมต่อ GitHub (เปลี่ยน YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/real-estate-3d.git
git push -u origin main

# 3. อัพเดทในอนาคต
git add .
git commit -m "✨ Your message here"
git push
```

---

**Happy Coding! 🚀**
