# Resources
This file contains the useful links used during the creation of this repository.

## Useful Links

## Resources

    react query
    redux toolkit


- linters
 - vercel Linters
 - Configure prettier and eslint
- opensource license
- read me 
- Docker files and pipelines/workflows

- structure 
- global state solution: redux
- Preparation for vibe coding
    - claude.md 
    - Cursor rules
- what is instrumentation
---
Frontend at scale
Large Apps


---

`components/` are all reusable components organized by features or domains.
`pages/` are top-level components representing individual routes or views in our application.
`hooks/` contain the custom hooks that encapsulate reusable logic, such as data fetching or state management.
`services/` represent external services, such as API clients or other integrations.
`store/` contains the centralized state management setup, including actions, reducers, and middleware (e.g., for Redux).
`utils/` contains utility functions and common helper modules.assets/ represent static assets like images, icons, fonts, and styles.
`constants/` contain constants like API endpoints, configuration values, or enums.
`types/` contain shared type definitions and interfaces For a TypeScript codebase.


```sh
/src
  /app                 # Next.js App Router structure
    /api               # API routes
    /(routes)          # Various route groups
      /dashboard
        /analytics
          page.tsx
          loading.tsx
        /settings
          page.tsx
      /auth
        /login
          page.tsx
        /register
          page.tsx
      layout.tsx       # Root layout
      page.tsx         # Home page
  
  /core                # Application core
    /config            # App configuration
    /constants         # App constants
    /hooks             # Shared hooks
    /lib               # Shared libraries
    /types             # TypeScript types/interfaces
    /utils             # Utility functions
  
  /features           # Domain-driven feature modules
    /users
      /components      # User-specific components
      /hooks           # User-specific hooks
      /services        # User-specific services
      /types           # User-specific types
      /utils           # User-specific utilities
    /products
      /components
      /hooks
      /services
      /types
      /utils
  
  /components         # Shared UI components
    /ui                # Low-level UI components
    /layout            # Layout components
    /forms             # Form components
    /modals            # Modal components
  
  /services           # Global services
    /api               # API service
    /auth              # Authentication service
  
  /styles             # Global styles
    /theme             # Theme configuration
    /globals.css       # Global CSS
  
  /public             # Static assets
    /images
    /icons
    /fonts
```