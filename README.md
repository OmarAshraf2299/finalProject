# shop-app

A modern e-commerce web application built with **Next.js**, **React**, and **TypeScript**. This project features user authentication, product browsing, shopping cart functionality, and payment processing.

## 🚀 Tech Stack

- **Framework:** Next.js 16.2.2
- **Runtime:** React 19.2.4
- **Language:** TypeScript
- **Authentication:** NextAuth.js 4.24.14
- **Styling:** TailwindCSS 4
- **Form Management:** React Hook Form 7.72.1
- **Validation:** Zod 4.3.6
- **UI Components:** shadcn/ui with Radix UI
- **Carousel:** Swiper 12.1.3
- **Toasts:** Sonner 2.0.7
- **Icons:** Lucide React, React Icons

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/              # Authentication routes (login, signup)
│   ├── api/                 # API routes (NextAuth, backend communication)
│   ├── _actions/            # Server actions (cart, orders)
│   ├── _components/         # Reusable components
│   ├── _context/            # React Context (Cart context)
│   ├── _providers/          # Custom providers (Session provider)
│   ├── product/             # Product detail page
│   ├── brands/              # Brands page
│   ├── payment/             # Payment page
│   └── shop/                # Shop page
├── components/
│   └── ui/                  # shadcn UI components
├── lib/
│   ├── nextauth.config.ts   # NextAuth configuration
│   └── utils.ts             # Utility functions
├── services/                # API service calls
├── types/                   # TypeScript type definitions
├── utils/                   # Helper utilities
├── assets/                  # Static assets (images)
└── schemas/                 # Zod validation schemas
```

## 🔑 Key Features

### Authentication System
- User login and signup functionality
- NextAuth.js integration for secure authentication
- Protected routes using session providers

### E-commerce Features
- **Product Catalog** - Browse and view products
- **Categories** - Shop by category
- **Product Details** - View detailed product information
- **Shopping Cart** - Add/remove items from cart with context management
- **Orders** - Order management system
- **Payment Processing** - Payment page for checkout

### UI & UX
- Modern, responsive design with TailwindCSS
- shadcn/ui component library for consistent UI
- Form validation using React Hook Form and Zod
- Toast notifications using Sonner
- Loading states and skeletons for better UX
- Image carousels using Swiper

### Custom Components
- **AddToCardBtn** - Button to add products to cart
- **ProductCard** - Display product information
- **ShopByCategory** - Category filter component
- **Navbar** - Navigation header
- **MySlider** - Custom slider component
- **MYinput** - Custom input field
- **MySessionProvider** - Session management wrapper

## 🛠️ Development

### Installation
```bash
npm install
```

### Running Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📋 API Integration

The project communicates with a backend through:
- **API Route:** `src/app/api/talkWithBackend/route.ts` - Central backend communication
- **Services:**
  - `services/product.ts` - Product-related API calls
  - `services/Categories.ts` - Category management

## 🔐 Authentication Configuration

- **Config File:** `src/lib/nextauth.config.ts`
- **Route:** `src/app/api/auth/[...nextauth]/route.ts`
- **Schemas:** Login and signup validation schemas with Zod

## 📝 Server Actions

- **Cart Actions:** `src/app/_actions/cart.actions.ts`
- **Order Actions:** `src/app/_actions/orders.actions.ts`

## 🎨 Styling

- TailwindCSS for utility-first CSS
- Custom global styles in `src/app/globals.css`
- PostCSS configuration for advanced styling
- Dark mode support with next-themes

## 📦 State Management

- **React Context** for cart state management
- `CartContextProvider` in `src/app/_context/CartContextProvider.tsx`

## 🚦 Environment Setup

Ensure you have:
- Node.js (recommended version 18+)
- npm or yarn package manager

## 📄 License

This is a private project.

---

**Last Updated:** April 2026
