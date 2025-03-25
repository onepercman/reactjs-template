# Contributing Guide

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/reactjs-template.git`
3. Create your feature branch: `git checkout -b feature/amazing-feature`
4. Install dependencies: `pnpm install`
5. Start development server: `pnpm dev`

## Development Guidelines

### Code Style

- Follow the existing code style
- Use TypeScript for all new code
- Write meaningful commit messages
- Keep components small and focused
- Use proper TypeScript types

### Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Maintain or improve test coverage

### Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the CHANGELOG.md with your changes
3. The PR will be merged once you have the sign-off of at least one other developer

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

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

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run tests
- `pnpm lint` - Run linter
- `pnpm format` - Format code with Prettier

## Questions?

Feel free to open an issue for any questions or concerns.
