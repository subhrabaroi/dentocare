# Development Guide

This guide provides comprehensive information for developers working on the dental clinic website.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd dental-clinic

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
dental-clinic/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   ├── features/          # Feature components
│   ├── forms/             # Form components
│   ├── site/              # Site components
│   └── ui/                # Base UI components
├── types/                 # TypeScript definitions
├── lib/                   # Utilities and API clients
├── public/                # Static assets
├── styles/                # Additional styles
└── docs/                  # Documentation
```

## 🛠️ Development Workflow

### 1. Component Development

#### Creating a New Section Component

1. **Create the component file**:
```bash
touch components/sections/new-section.tsx
```

2. **Define the interface**:
```typescript
interface NewSectionProps {
  title: string
  description: string
  items: Item[]
}
```

3. **Implement the component**:
```typescript
export function NewSection({ title, description, items }: NewSectionProps) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-2 text-muted-foreground">{description}</p>
        {/* Component content */}
      </div>
    </section>
  )
}
```

4. **Add to index file**:
```typescript
// components/sections/index.ts
export { NewSection } from "./new-section"
```

5. **Use in main page**:
```typescript
// app/page.tsx
import { NewSection } from "@/components/sections"

<NewSection 
  title="New Section"
  description="Description here"
  items={data.items}
/>
```

#### Creating a New Feature Component

1. **Create the component file**:
```bash
touch components/features/new-feature.tsx
```

2. **Follow the same pattern as section components**

3. **Add to features index**:
```typescript
// components/features/index.ts
export { NewFeature } from "./new-feature"
```

### 2. TypeScript Development

#### Adding New Types

1. **Define in types/index.ts**:
```typescript
export interface NewType {
  id: string
  name: string
  description: string
}
```

2. **Use in components**:
```typescript
import type { NewType } from "@/types"

interface ComponentProps {
  data: NewType[]
}
```

#### Type Safety Best Practices

- Always define interfaces for component props
- Use strict TypeScript configuration
- Avoid `any` types
- Use union types for variants
- Implement proper error handling

### 3. Styling Guidelines

#### Tailwind CSS Usage

- Use utility classes for styling
- Follow mobile-first approach
- Use consistent spacing scale
- Implement responsive design

#### Custom CSS

- Use CSS variables for theming
- Keep custom CSS minimal
- Follow BEM methodology if needed
- Use CSS modules for component-specific styles

#### Color Scheme

```css
/* Primary colors */
--primary: #2563eb;    /* blue-600 */
--secondary: #4b5563;  /* gray-600 */
--background: #ffffff; /* white */
--muted: #6b7280;      /* gray-500 */
```

### 4. API Integration

#### Data Fetching

1. **Create API function in lib/**:
```typescript
// lib/api.ts
export async function fetchData(): Promise<Data[]> {
  const response = await fetch('/api/data')
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}
```

2. **Use in components**:
```typescript
// Server component
const data = await fetchData()

// Client component
const [data, setData] = useState<Data[]>([])

useEffect(() => {
  fetchData().then(setData)
}, [])
```

#### Error Handling

```typescript
try {
  const data = await fetchData()
  // Handle success
} catch (error) {
  console.error('Failed to fetch data:', error)
  // Handle error state
}
```

## 🧪 Testing

### Component Testing

1. **Create test file**:
```bash
touch components/sections/__tests__/hero-section.test.tsx
```

2. **Write tests**:
```typescript
import { render, screen } from '@testing-library/react'
import { HeroSection } from '../hero-section'

describe('HeroSection', () => {
  it('renders hero content', () => {
    render(<HeroSection subtitle="Test subtitle" />)
    expect(screen.getByText('Test subtitle')).toBeInTheDocument()
  })
})
```

### Testing Best Practices

- Test component rendering
- Test user interactions
- Test error states
- Test accessibility
- Use meaningful test descriptions

## 📱 Responsive Development

### Breakpoint Strategy

```css
/* Mobile first approach */
.container {
  padding: 1rem; /* Mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 2rem; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 3rem; /* Desktop */
  }
}
```

### Responsive Testing

- Test on multiple devices
- Use browser dev tools
- Test touch interactions
- Verify accessibility on mobile

## 🔍 Performance Optimization

### Code Splitting

```typescript
// Lazy load components
const LazyComponent = dynamic(() => import('./LazyComponent'), {
  loading: () => <Skeleton />
})
```

### Image Optimization

```typescript
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
  priority={true} // For above-the-fold images
/>
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run build
npm run analyze
```

## 🔧 Development Tools

### VS Code Extensions

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Tailwind CSS IntelliSense** - CSS autocomplete
- **Auto Rename Tag** - HTML/JSX editing

### Browser Extensions

- **React Developer Tools** - React debugging
- **Lighthouse** - Performance auditing
- **axe DevTools** - Accessibility testing

### Development Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

## 🐛 Debugging

### Common Issues

1. **TypeScript Errors**
   - Check type definitions
   - Verify import paths
   - Use strict mode

2. **Styling Issues**
   - Check Tailwind classes
   - Verify CSS specificity
   - Test responsive behavior

3. **Performance Issues**
   - Use React DevTools Profiler
   - Check bundle size
   - Optimize images

### Debugging Tools

- **React DevTools** - Component inspection
- **Network tab** - API debugging
- **Console** - Error logging
- **Lighthouse** - Performance analysis

## 📚 Code Standards

### Naming Conventions

- **Components**: PascalCase (`HeroSection`)
- **Files**: kebab-case (`hero-section.tsx`)
- **Variables**: camelCase (`userName`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### Code Organization

- One component per file
- Clear separation of concerns
- Consistent file structure
- Proper import organization

### Comments and Documentation

```typescript
/**
 * HeroSection component displays the main banner
 * @param subtitle - The subtitle text to display
 */
export function HeroSection({ subtitle }: HeroSectionProps) {
  // Component implementation
}
```

## 🚀 Deployment

### Build Process

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
```

### Deployment Platforms

- **Vercel** - Recommended for Next.js
- **Netlify** - Alternative option
- **AWS** - Enterprise deployment

## 🤝 Contributing

### Pull Request Process

1. Create feature branch
2. Make changes following standards
3. Write/update tests
4. Update documentation
5. Submit pull request

### Code Review Checklist

- [ ] Code follows standards
- [ ] Tests pass
- [ ] Documentation updated
- [ ] Performance considered
- [ ] Accessibility verified

## 📞 Support

### Getting Help

- Check documentation first
- Search existing issues
- Create detailed bug reports
- Provide reproduction steps

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
