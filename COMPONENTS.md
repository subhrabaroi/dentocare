# Component Documentation

This document provides detailed information about each component in the dental clinic website.

## 📋 Table of Contents

- [Section Components](#section-components)
- [Feature Components](#feature-components)
- [Form Components](#form-components)
- [Site Components](#site-components)

## 🏗️ Section Components

### HeroSection

**Location**: `components/sections/hero-section.tsx`

**Purpose**: Main hero banner with call-to-action buttons and feature highlights.

**Props**:
```typescript
interface HeroSectionProps {
  subtitle: string
}
```

**Usage**:
```tsx
import { HeroSection } from "@/components/sections"

<HeroSection subtitle="Your trusted dental care partner" />
```

**Features**:
- Responsive grid layout
- CTA buttons (Appointment, Watch Video)
- Feature pills with icons
- Optimized hero image

---

### AboutSection

**Location**: `components/sections/about-section.tsx`

**Purpose**: About us content with benefits and statistics.

**Props**:
```typescript
interface AboutSectionProps {
  description: string
  stats: Stat[]
}

interface Stat {
  value: string
  label: string
}
```

**Usage**:
```tsx
import { AboutSection } from "@/components/sections"

<AboutSection 
  description="We provide comprehensive dental care..."
  stats={[
    { value: "5000+", label: "Happy Patients" },
    { value: "15+", label: "Years Experience" }
  ]} 
/>
```

**Features**:
- Two-column layout
- Benefits grid with icons
- Statistics cards with gradient background
- Responsive image

---

### ServicesSection

**Location**: `components/sections/services-section.tsx`

**Purpose**: Displays available dental services in a grid layout.

**Props**:
```typescript
interface ServicesSectionProps {
  services: Service[]
}
```

**Usage**:
```tsx
import { ServicesSection } from "@/components/sections"

<ServicesSection services={services} />
```

**Features**:
- Responsive grid (1-3 columns)
- Service cards with icons
- "Learn more" links
- Hover effects

---

### AppointmentSection

**Location**: `components/sections/appointment-section.tsx`

**Purpose**: Contact form and map integration for appointments.

**Props**:
```typescript
interface AppointmentSectionProps {
  contact: ContactInfo
}

interface ContactInfo {
  address: string
  phone: string
  email: string
}
```

**Usage**:
```tsx
import { AppointmentSection } from "@/components/sections"

<AppointmentSection contact={contactData} />
```

**Features**:
- Contact form integration
- Google Maps embed
- Contact information display
- Equal height cards

---

### DoctorsSection

**Location**: `components/sections/doctors-section.tsx`

**Purpose**: Team member profiles with social media links.

**Props**:
```typescript
interface DoctorsSectionProps {
  doctors: Doctor[]
}

interface Doctor {
  id: string
  name: string
  specialty: string
  bio: string
  photoUrl?: string
  socials?: Socials
}
```

**Usage**:
```tsx
import { DoctorsSection } from "@/components/sections"

<DoctorsSection doctors={doctors} />
```

**Features**:
- Doctor profile cards
- Social media links
- Responsive grid layout
- Fallback images

---

### BlogSection

**Location**: `components/sections/blog-section.tsx`

**Purpose**: Blog post previews with links to full articles.

**Props**:
```typescript
interface BlogSectionProps {
  posts: BlogPost[]
}
```

**Usage**:
```tsx
import { BlogSection } from "@/components/sections"

<BlogSection posts={blogPosts} />
```

**Features**:
- Blog post cards
- Featured images
- Date formatting
- "See more" link

---

### TestimonialsSection

**Location**: `components/sections/testimonials-section.tsx`

**Purpose**: Customer reviews and testimonials display.

**Props**:
```typescript
interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

interface Testimonial {
  id: string
  name: string
  role: string
  message: string
  rating: number
  avatar?: string
}
```

**Usage**:
```tsx
import { TestimonialsSection } from "@/components/sections"

<TestimonialsSection testimonials={testimonials} />
```

**Features**:
- Testimonial cards
- Star ratings
- Avatar images
- "View all" link

---

## ⭐ Feature Components

### FeaturePill

**Location**: `components/features/feature-pill.tsx`

**Purpose**: Feature highlight cards with icons.

**Props**:
```typescript
interface FeaturePillProps {
  icon: React.ReactNode
  title: string
  desc: string
}
```

**Usage**:
```tsx
import { FeaturePill } from "@/components/features"
import { ShieldCheck } from "lucide-react"

<FeaturePill
  icon={<ShieldCheck className="h-5 w-5 text-blue-600" />}
  title="Satisfaction Guarantee"
  desc="We stand behind our results."
/>
```

**Features**:
- Icon support
- Rounded design
- Shadow effects
- Responsive layout

---

### Benefit

**Location**: `components/features/benefit.tsx`

**Purpose**: Benefit items with icons and descriptions.

**Props**:
```typescript
interface BenefitProps {
  icon: React.ReactNode
  title: string
  desc: string
}
```

**Usage**:
```tsx
import { Benefit } from "@/components/features"
import { Stethoscope } from "lucide-react"

<Benefit
  icon={<Stethoscope className="h-5 w-5 text-blue-600" />}
  title="Complete Dental Care"
  desc="Preventive, restorative & cosmetic care under one roof."
/>
```

**Features**:
- Icon with background
- Title and description
- Consistent spacing
- Flexible layout

---

## 📝 Form Components

### QueryForm

**Location**: `components/forms/query-form.tsx`

**Purpose**: Contact form for appointment requests.

**Props**: None (self-contained)

**Usage**:
```tsx
import { QueryForm } from "@/components/forms"

<QueryForm />
```

**Features**:
- Form validation
- Loading states
- Success/error handling
- Responsive layout
- Auto-resizing textarea

**Form Fields**:
- Name (required)
- Email (required)
- Phone (required)
- Age (optional)
- Message (required)

**API Endpoint**: `/api/appointment`

---

## 🏠 Site Components

### Navbar

**Location**: `components/site/navbar.tsx`

**Purpose**: Main navigation header.

**Features**:
- Responsive navigation
- Mobile menu
- Logo display
- Navigation links

### Footer

**Location**: `components/site/footer.tsx`

**Purpose**: Site footer with links and information.

**Features**:
- Multiple columns
- Social media links
- Contact information
- Copyright notice

### GenericPage

**Location**: `components/site/generic-page.tsx`

**Purpose**: Generic page layout wrapper.

**Features**:
- Consistent page structure
- SEO optimization
- Breadcrumb support

---

## 🎨 Styling Guidelines

### CSS Classes

All components use Tailwind CSS classes with consistent patterns:

- **Layout**: `grid`, `flex`, `container`
- **Spacing**: `p-`, `m-`, `gap-`
- **Colors**: `text-`, `bg-`, `border-`
- **Responsive**: `sm:`, `md:`, `lg:`

### Color Scheme

- **Primary**: `blue-600` (#2563eb)
- **Secondary**: `gray-600` (#4b5563)
- **Background**: `white` (#ffffff)
- **Muted**: `muted-foreground` (CSS variable)

### Typography

- **Headings**: `font-bold`, `text-3xl` and up
- **Body**: `text-base`, `text-muted-foreground`
- **Captions**: `text-sm`, `text-xs`

---

## 🔧 Customization

### Adding New Components

1. **Create the component file** in the appropriate directory
2. **Define TypeScript interfaces** for props
3. **Add to index file** for barrel exports
4. **Update documentation** in this file

### Component Patterns

- Use functional components with TypeScript
- Implement proper prop interfaces
- Add JSDoc comments for complex logic
- Follow naming conventions
- Include error boundaries where needed

### Testing

Each component should be:
- Unit tested for functionality
- Integration tested for user flows
- Accessibility tested
- Responsive design tested

---

## 📱 Responsive Behavior

### Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

### Responsive Patterns

- Mobile-first approach
- Flexible grids
- Collapsible navigation
- Touch-friendly interactions

---

## 🚀 Performance Considerations

### Optimization Techniques

- **Code splitting**: Components are lazy-loaded
- **Image optimization**: Next.js Image component
- **Static generation**: Where possible
- **Bundle size**: Minimal dependencies

### Best Practices

- Use `React.memo()` for expensive components
- Implement proper loading states
- Optimize images and assets
- Minimize re-renders

---

## 🔍 Accessibility

### Standards

- WCAG 2.1 AA compliance
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support

### Features

- Focus management
- Screen reader support
- Color contrast compliance
- Alternative text for images

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
