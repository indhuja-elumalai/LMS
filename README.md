# 🎓 Learning Management System (LMS)

A real-world full-stack LMS platform built using **Next.js, MongoDB, NextAuth, and Tailwind CSS**.

## 🚀 Features
- Secure Authentication (Admin + Students)
- Admin Panel for Course Management
- Student Dashboard & Course Cards
- Responsive Modern UI with Tailwind v4

## 🛠 Tech Stack
| Category | Tech |
|---|---|
| Frontend | Next.js (App Router) |
| Backend | Next.js API Routes |
| Database | MongoDB + Mongoose |
| Auth | NextAuth.js |
| Styling | Tailwind CSS v4 |
| Language | JavaScript |

---

## 📂 Folder Structure

src/
 ├─ app/
 │   ├─ (auth)/
 │   │   └─ login/
 │   │       └─ page.jsx
 │   ├─ dashboard/
 │   │   └─ page.jsx
 │   ├─ layout.jsx
 │   └─ page.jsx
 ├─ components/
 │   ├─ Navbar.jsx
 │   └─ CourseCard.jsx
 ├─ lib/
 │   ├─ db.js
 │   └─ auth.js
 └─ styles/



---

## ⚙️ Setup & Run

```bash
git clone https://github.com/indhuja-elumalai/LMS.git
cd LMS
npm install
npm run dev
```
---

## Create .env.local:

MONGO_URI=your_mongo_uri
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

✅ Status

Project initialized — authentication, pages, and reusable components created.
Next milestone: course models, user roles, APIs, UI refinement.

📌 Author

Indhuja Elumalai

⭐ If you like this project, star the repo!

