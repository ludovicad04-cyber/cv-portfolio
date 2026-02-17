# CV Website

A modern, responsive CV/Portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast development with Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Mobile-first responsive design
- 🔍 SEO-friendly structure

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 16.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cv-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify

### Deploy to Vercel

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

## Project Structure

```
src/
├── components/
│   └── CVWebsite.tsx       # Main CV component
├── App.tsx                 # App component
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
