# Uganda Open Data Platform

A web-based platform enabling community members to contribute data, participate in model evaluation, and engage with the Uganda AI Studio community.

## Overview

The Uganda Open Data Platform serves as a central hub for:

- Data contribution and curation
- Model evaluation and feedback
- Community engagement and collaboration
- AI/ML resource sharing

## Project Structure

```sh
/src
  /app                 # Next.js App Router structure
    /api               # API routes
    /(routes)          # Route groups (dashboard, auth, etc.)
  
  /core                # Application core logic
    /config            # App configuration
    /constants         # App constants
    /hooks             # Shared hooks
    /lib               # Shared libraries
    /types             # TypeScript types/interfaces
    /utils             # Utility functions
  
  /features           # Domain-driven feature modules
    /users            # User management
    /products         # Product management
    /* Each feature includes:
       - components/  (Feature-specific components)
       - hooks/      (Feature-specific hooks)
       - services/   (Feature-specific services)
       - types/      (Feature-specific types)
       - utils/      (Feature-specific utilities)
  
  /components         # Shared UI components
    /ui               # Low-level UI components
    /layout           # Layout components
    /forms           # Form components
    /modals          # Modal components
  
  /services          # Global services
    /api             # API service
    /auth            # Authentication service
  
  /styles            # Global styles
    /theme           # Theme configuration
    /globals.css     # Global CSS
```

## Getting Started

To get started with this boilerplate, follow these steps:

1. Fork & clone repository:

```bash
## Don't forget to ⭐ star and fork it first :)
git clone https://github.com//STI-AI-Studio/AIStudio-ContributorPlatform.git
```

2. Install the dependencies:

```bash
pnpm i
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. This project uses a git hook to enforce [conventional commits](https://github.com/qoomon/git-conventional-commits). To install the git hook, run the following command in the root directory of the project:


### 💻 Environment Variables handling

[T3 Env](https://env.t3.gg/) is a library that provides environmental variables checking at build time, type validation and transforming. It ensures that your application is using the correct environment variables and their values are of the expected type. You'll never again struggle with runtime errors caused by incorrect environment variable usage.

Config file is located at `env.ts`. Simply set your client and server variables and import `env` from any file in your project.

```ts
export const env = createEnv({
  server: {
    // Server variables
    SECRET_KEY: z.string(),
  },
  client: {
    // Client variables
    API_URL: z.string().url(),
  },
  runtimeEnv: {
    // Assign runtime variables
    SECRET_KEY: process.env.SECRET_KEY,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
})
```

If the required environment variables are not set, you'll get an error message:

```sh
  ❌ Invalid environment variables: { SECRET_KEY: [ 'Required' ] }
```

You can make a copy of the environments variables by copying the `.env.example` file. 

## Contributing

We welcome contributions from the community! Please read our contributing guidelines before submitting your pull request.

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes, and commit them using the [Conventional Commits](https://www.conventionalcommits.org/) format.
4. Push your changes to the forked repository.
5. Create a pull request, and we'll review your changes.

## Contributors

Thanks goes to these wonderful people:

<table>
  <tr>
    <td align="center">
      <a href="https://collinsbenda.com/">
        <img src="https://lh3.googleusercontent.com/ogw/AF2bZyiaf3xd0gRtOXDIn-h-1QKkS0mneb2v0STdHnEObAokugM=s64-c-mo" width="100px;" alt="Collins Benda Atuhaire"/>
        <br />
        <sub><b>Collins Benda Atuhaire</b></sub>
      </a>
      <br />
      <sub>Code, Infra, Design, Docs</sub>
    </td>
    <td align="center">
      <a href="https://github.com/johnroy">
        <img src="https://avatars.githubusercontent.com/u/51968772?v=4" width="100px;" alt="Johnroy Nageeso"/>
        <br />
        <sub><b>Johnroy Nageeso</b></sub>
      </a>
      <br />
      <sub>Code, Docs</sub>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/catherine-tuka/">
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQFxtXq4qMZ8sw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731516866953?e=1748476800&v=beta&t=elpGTd4d0SkNI4Xl3NAbtTRYb6nl0mZOgqi8JoJYkFI" width="100px;" alt="Tuka Catherine"/>
        <br />
        <sub><b>Tuka Catherine</b></sub>
      </a>
      <br />
      <sub>Design</sub>
    </td>
  </tr>
</table>

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind]() , [react spectrum]() and [just d](https://getjustd.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Code Styling ,Linting & Formatting** : [biome](https://biomejs.dev/)

- [T3 Env](https://env.t3.gg/) - Manage your environment variables with ease
- Conventional commits git hook - Keep your commit history neat and tidy
- Playwright - Write end-to-end tests like a pro


## Features

- User Authentication and Authorization
- Data Contribution Interface
- Model Evaluation Tools
- Community Engagement Features
- [Add more features]
## 📃 Scripts Overview

The following scripts are available in the `package.json`:

- `dev`: Starts the development server 
- `build`: Builds the app for production
- `start`: Starts the production server
- `lint`: Lints the code using Biome
- `lint:fix`: Automatically fixes linting errors
- `lint:fix`: Automatically fixes formatting issues
- `test`: Runs unit and integration tests
- `format`: Formats the code with Biome



## Security

- Content Security Policy implementation
- Input sanitization
- Secure data handling
- CORS protection

## Testing

### Test Stack

- **Unit Testing**: Jest with React Testing Library
- **E2E Testing**: Playwright
- **Test Coverage**: [To be added]

### Test Structure
```sh
/
  /tests              # Unit tests
    /components       # Component tests
    /utils           # Utility function tests
    
  /e2e               # End-to-end tests
    /specs           # Test specifications
    /fixtures        # Test data
```

### Running Tests

```bash
# Run unit tests
pnpm run test

# Run E2E tests
pnpm run test:e2e

# Run tests with coverage
pnpm run test:coverage
```

### E2E Testing with Playwright

We use Playwright for end-to-end testing. To fix the current configuration issue, create a `playwright.config.ts` file in the root directory:

### Test Coverage Goals

- Unit Test Coverage: >80%
- E2E Test Coverage: Critical user paths
- Key tested features:
  - Authentication flows
  - Data submission
  - Model evaluation
  - User interactions

<!-- ## License

[Add license information] -->
