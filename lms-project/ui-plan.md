# UI Plan — LMS Project

## Purpose
Create a consistent, reusable UI skeleton for the LMS using Next.js App Router and Tailwind CSS. Focus on accessibility, responsive layout, and reusable primitives.

## Components (reusable)
- Button
  - Variant props: primary, secondary, ghost
  - Props: onClick, disabled, type
- Input
  - Props: name, value, onChange, placeholder, type, aria-label
- CourseCard
  - Props: title, desc, thumbnail, actions
- Avatar / UserMenu
  - Shows user name and sign out action

## Layout components
- Navbar
  - Left: brand
  - Right: nav links (Home, Dashboard, Sign In), UserMenu
  - Responsive: hamburger -> mobile menu
- Footer
  - Small site info, links
- DashboardLayout
  - Sidebar (links: Dashboard, Courses, Users)
  - Main content area
  - Responsive: sidebar collapses on small screens

## Page-level skeletons
- Home (`/`)
  - Hero + featured courses grid
- Signin (`/signin`)
  - Centered login card
- Dashboard (`/dashboard`)
  - Uses DashboardLayout; placeholder stats and sample CourseCard list

## File structure (App Router)
lms/
└── src/
    ├── app/
    │   ├── layout.js
    │   ├── globals.css
    │   ├── page.js
    │   │
    │   ├── (auth)/
    │   │   ├── login/page.js
    │   │   └── register/page.js
    │   │
    │   ├── dashboard/
    │   │   ├── layout.js
    │   │   └── page.js
    │   │
    │   └── api/
    │       └── user/route.js   (future)
    │
    ├── components/
    │   ├── ui/                # Small reusable UI bits
    │   │   ├── Button.jsx
    │   │   ├── Input.jsx
    │   │   └── Card.jsx
    │   │
    │   ├── layout/            # Structural components
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   └── Sidebar.jsx
    │   │
    │   └── sections/          # Hero, Landing sections, Dashboard widgets
    │       └── HeroSection.jsx
    │
    ├── lib/                   # DB utils, helpers
    │   ├── db.js
    │   └── utils.js
    │
    └── assets/
        └── images/
            └── logo.png



## Styling & responsiveness
- Use Tailwind utility classes for layout and responsiveness.
- Mobile-first: `sm:`, `md:`, `lg:` breakpoints.
- Use semantic HTML and ARIA attributes for accessibility.

## Implementation & testing
1. Implement components with clean props and minimal internal state.
2. Create skeleton pages to place components.
3. Test across screen sizes (mobile/desktop).
4. Commit and push to remote repo; include screenshots.

