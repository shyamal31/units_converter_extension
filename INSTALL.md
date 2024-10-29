# Installation Guide

This guide will help you install and set up the Units Converter Extension.

## Prerequisites

Before installing, make sure you have the following installed on your system:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/units_converter_extension.git
cd units_converter_extension
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Extension

```bash
npm run build
```

### 4. Install in Chrome

1. Open Chrome browser
2. Navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the `dist` folder from the project directory

## Development Setup

To set up the development environment:

```bash
# Install development dependencies
npm install --save-dev

# Run tests
npm test

# Run linter
npm run lint
```

## Updating

To update to the latest version:

```bash
git pull origin main
npm install
npm run build
```

## Troubleshooting

If you encounter any issues:

1. Make sure all prerequisites are installed correctly
2. Try removing `node_modules` and running `npm install` again
3. Clear Chrome's extension cache and reload the extension

## Support

If you need help:
- Open an issue on GitHub
- Contact: [zhou4@ncsu.edu]

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.