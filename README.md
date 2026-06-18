# CampusHub BIU 🎓

**CampusHub BIU** is a comprehensive, high-end academic study resource platform and marketplace tailored for Bar-Ilan University students. Built with a modern serverless tech stack and phenomenal RTL UI/UX standards.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS & shadcn/ui (Glassmorphism, Micro-animations)
- **Language**: TypeScript
- **Database**: Neon Database (Serverless PostgreSQL)
- **ORM**: Prisma (with Edge Driver)
- **Authentication**: Clerk

## 📦 Local Setup Instructions

### 1. Prerequisites
Ensure you have the following installed on your machine:
- [Git](https://git-scm.com/) (`xcode-select --install` on Mac)
- [Node.js](https://nodejs.org/) (Version **22+** is REQUIRED for Prisma)

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/yehutz-ops/campushub-biu.git
cd campushub-biu
npm install
```

### 3. Environment Variables
Create a `.env.local` file by copying the template:
```bash
cp .env.template .env.local
```
Fill in the credentials from [Clerk](https://clerk.com) and [Neon](https://neon.tech):
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
DATABASE_URL="postgres://user:pass@ep-restless-bird-1234.region.aws.neon.tech/neondb?sslmode=require"
```

### 4. Database Setup
Push the Prisma schema to your Neon database:
```bash
npx prisma generate
npx prisma db push
```

### 5. Running the App
Start the development server:
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to see the app running! 

## ✨ Key Features
- **RTL Native**: Perfect alignment and typography for Hebrew.
- **Glassmorphism UI**: Beautiful, premium interface elements.
- **Dynamic Marketplace**: Browse, filter, and download university materials.
- **Server Actions**: Seamless, secure database mutations.
