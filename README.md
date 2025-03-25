# ReactJS Template

A modern, production-ready React template with TypeScript, Tailwind CSS, and more.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast build tool
- ⚛️ [React 18](https://reactjs.org/) - UI library
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🔄 [React Query](https://tanstack.com/query/latest) - Data fetching and caching
- 📦 [Valtio](https://valtio.pmnd.rs/) - State management
- 🛠️ [ESLint](https://eslint.org/) - Code linting
- 💅 [Prettier](https://prettier.io/) - Code formatting
- 🐶 [Husky](https://typicode.github.io/husky/) - Git hooks
- 🧪 [Vitest](https://vitest.dev/) - Unit testing

## Prerequisites

- Node.js >= 20
- pnpm >= 8

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/reactjs-template.git
   cd reactjs-template
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start development server:

   ```bash
   pnpm dev
   ```

4. Build for production:
   ```bash
   pnpm build
   ```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests
- `pnpm lint` - Run linter
- `pnpm format` - Format code with Prettier
- `pnpm tsc` - Type check TypeScript files

## Project Structure

```
src/
├── features/     # Feature-based components and logic
├── shared/       # Shared components and utilities
├── services/     # API and external service integrations
├── libs/         # Third-party library integrations
├── config/       # Configuration files
└── styles/       # Global styles and theme
```

## Environment Variables

Create a `.env` file in the root directory based on `.env.template`:

```env
VITE_API_URL=your_api_url
VITE_APP_NAME=your_app_name
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [Valtio](https://valtio.pmnd.rs/)
