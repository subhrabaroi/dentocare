# Data Management Guide

This guide explains how to manage all website content through the centralized `data.json` file.

## 📁 Overview

All website content is now managed through a single JSON file located at `data.json`. This makes it easy to:

- ✅ Update content without touching code
- ✅ Maintain consistency across the site
- ✅ Add new content quickly
- ✅ Version control content changes
- ✅ Collaborate on content updates

## 🎯 Quick Start

### Making Simple Changes

1. **Open `data.json`** in your code editor
2. **Find the section** you want to modify
3. **Update the content** directly in the JSON
4. **Save the file** - changes appear immediately

### Example: Updating Hero Section

```json
{
  "hero": {
    "badge": "Dental",
    "title": "Best Dental Clinic You Can Trust.",
    "titleHighlight": "Dental Clinic",
    "subtitle": "Your new subtitle here...",
    "ctaPrimary": {
      "text": "Book Appointment",
      "link": "/appointment"
    }
  }
}
```

## 📋 Content Sections

### 1. Hero Section (`hero`)
- **badge**: Small label above title
- **title**: Main headline
- **titleHighlight**: Part of title to highlight in blue
- **subtitle**: Description text
- **ctaPrimary**: Primary call-to-action button
- **ctaSecondary**: Secondary call-to-action button
- **image**: Hero image details
- **features**: Feature pills below CTA buttons

### 2. About Section (`about`)
- **badge**: Section label
- **title**: Section headline
- **description**: Main content
- **image**: About section image
- **stats**: Statistics cards (4 items)
- **benefits**: Benefit items with icons

### 3. Services Section (`services`)
- **title**: Section headline
- **subtitle**: Section description
- **description**: Detailed description
- **items**: Array of service objects

Each service object contains:
- **id**: Unique identifier
- **title**: Service name
- **description**: Service description
- **icon**: Icon name (from available icons)
- **image**: Service image path
- **slug**: URL slug
- **features**: Array of service features

### 4. Appointment Section (`appointment`)
- **title**: Form section title
- **subtitle**: Form description
- **form**: Form configuration
- **contact**: Contact information

### 5. Doctors Section (`doctors`)
- **title**: Section headline
- **subtitle**: Section description
- **items**: Array of doctor objects

Each doctor object contains:
- **id**: Unique identifier
- **name**: Doctor's name
- **specialty**: Medical specialty
- **bio**: Short biography
- **photoUrl**: Profile photo path
- **education**: Educational background
- **experience**: Years of experience
- **socials**: Social media links

### 6. Blog Section (`blog`)
- **title**: Section headline
- **subtitle**: Section description
- **viewAllText**: "View all" link text
- **viewAllLink**: "View all" link URL
- **posts**: Array of blog post objects

Each blog post contains:
- **id**: Unique identifier
- **title**: Post title
- **excerpt**: Short description
- **content**: Full post content
- **date**: Publication date
- **author**: Author name
- **category**: Post category
- **tags**: Array of tags
- **coverImage**: Featured image path
- **slug**: URL slug
- **readTime**: Estimated reading time

### 7. Testimonials Section (`testimonials`)
- **title**: Section headline
- **subtitle**: Section description
- **viewAllText**: "View all" link text
- **viewAllLink**: "View all" link URL
- **items**: Array of testimonial objects

Each testimonial contains:
- **id**: Unique identifier
- **name**: Customer name
- **role**: Customer role/context
- **message**: Testimonial text
- **rating**: Star rating (1-5)
- **avatar**: Profile photo path
- **date**: Review date
- **service**: Service reviewed

### 8. Footer Section (`footer`)
- **description**: Footer description
- **quickLinks**: Navigation links organized by category
- **contact**: Contact information
- **social**: Social media links
- **legal**: Legal page links
- **copyright**: Copyright text

### 9. Navigation (`navigation`)
- **main**: Main navigation menu items
- **cta**: Call-to-action button

### 10. SEO (`seo`)
- **title**: Page title
- **description**: Meta description
- **keywords**: Meta keywords
- **ogImage**: Open Graph image
- **canonical**: Canonical URL

## 🎨 Available Icons

The following icons are available for use in the JSON:

- `PlayCircle` - Play button
- `ShieldCheck` - Shield with checkmark
- `Cpu` - CPU chip
- `BadgeCheck` - Badge with checkmark
- `Stethoscope` - Medical stethoscope
- `Phone` - Telephone
- `Mail` - Email
- `MapPin` - Location pin
- `HeartPulse` - Heart with pulse
- `Smile` - Smiling face
- `Sparkles` - Sparkles
- `Linkedin` - LinkedIn logo
- `Twitter` - Twitter logo
- `Instagram` - Instagram logo
- `Facebook` - Facebook logo

## 📝 Common Updates

### Adding a New Service

1. Find the `services.items` array
2. Add a new object:

```json
{
  "id": "new-service",
  "title": "New Service Name",
  "description": "Service description here...",
  "icon": "BadgeCheck",
  "image": "/new-service-image.png",
  "slug": "new-service",
  "features": [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
}
```

### Adding a New Doctor

1. Find the `doctors.items` array
2. Add a new object:

```json
{
  "id": "dr-new",
  "name": "Dr. New Doctor",
  "specialty": "Specialty",
  "bio": "Doctor biography...",
  "photoUrl": "/doctor-photo.jpg",
  "education": "Education details",
  "experience": "5+ years",
  "socials": {
    "linkedin": "https://linkedin.com/in/dr-new",
    "twitter": "https://twitter.com/drnew"
  }
}
```

### Adding a New Blog Post

1. Find the `blog.posts` array
2. Add a new object:

```json
{
  "id": "new-post",
  "title": "New Blog Post Title",
  "excerpt": "Post excerpt...",
  "content": "Full post content...",
  "date": "2024-01-25",
  "author": "Dr. Author Name",
  "category": "Category",
  "tags": ["tag1", "tag2"],
  "coverImage": "/post-image.png",
  "slug": "new-post",
  "readTime": "5 min read"
}
```

### Adding a New Testimonial

1. Find the `testimonials.items` array
2. Add a new object:

```json
{
  "id": "testimonial-new",
  "name": "Customer Name",
  "role": "Patient",
  "message": "Testimonial message...",
  "rating": 5,
  "avatar": "/customer-avatar.jpg",
  "date": "2024-01-25",
  "service": "Service Name"
}
```

## 🔧 Advanced Features

### Dynamic Form Configuration

The appointment form is fully configurable through JSON:

```json
{
  "form": {
    "fields": [
      {
        "name": "custom_field",
        "label": "Custom Field",
        "type": "text",
        "required": true,
        "placeholder": "Enter value..."
      }
    ],
    "submitText": "Submit",
    "loadingText": "Loading...",
    "successText": "Success!",
    "errorText": "Error occurred"
  }
}
```

### Field Types Available

- `text` - Text input
- `email` - Email input
- `tel` - Phone number input
- `number` - Number input
- `textarea` - Multi-line text area

### Conditional Social Links

Social media links are optional:

```json
{
  "socials": {
    "linkedin": "https://linkedin.com/in/username",
    "twitter": "https://twitter.com/username"
    // instagram is optional
  }
}
```

## 🚀 Best Practices

### 1. Content Guidelines

- **Keep titles concise** - Under 60 characters for SEO
- **Use descriptive alt text** - For accessibility
- **Maintain consistent formatting** - Follow existing patterns
- **Test links** - Ensure all URLs work correctly

### 2. Image Management

- **Use consistent naming** - `service-name.png`
- **Optimize images** - Compress for web
- **Provide fallbacks** - Use placeholder images
- **Update image paths** - When moving files

### 3. Data Validation

- **Check JSON syntax** - Use a JSON validator
- **Verify required fields** - Don't remove essential data
- **Test changes** - Preview before deploying
- **Backup data** - Keep version history

### 4. Performance

- **Limit array sizes** - Don't add too many items
- **Optimize images** - Use appropriate sizes
- **Cache data** - For better performance
- **Minimize changes** - Batch updates when possible

## 🛠️ Troubleshooting

### Common Issues

1. **JSON Syntax Errors**
   - Use a JSON validator
   - Check for missing commas/brackets
   - Ensure proper quote usage

2. **Missing Images**
   - Verify file paths
   - Check file permissions
   - Use placeholder images as fallbacks

3. **Broken Links**
   - Test all URLs
   - Update internal links
   - Check external link validity

4. **Icon Not Displaying**
   - Verify icon name spelling
   - Check available icons list
   - Use fallback icon if needed

### Validation Tools

- **JSON Validator**: jsonlint.com
- **Image Optimization**: tinypng.com
- **Link Checker**: brokenlinkcheck.com
- **SEO Checker**: seoreviewtools.com

## 📚 Additional Resources

- [JSON Documentation](https://www.json.org/)
- [Image Optimization Guide](https://web.dev/fast/)
- [SEO Best Practices](https://developers.google.com/search/docs)
- [Accessibility Guidelines](https://www.w3.org/WAI/)

## 🤝 Support

If you need help with data management:

1. **Check this guide** first
2. **Validate JSON syntax** using online tools
3. **Test changes** in development environment
4. **Ask for help** with specific issues

Remember: The `data.json` file is the single source of truth for all website content. Keep it organized, validated, and backed up!
