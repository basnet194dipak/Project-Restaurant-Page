# Bella Cucina Restaurant Page

A single-page restaurant website for **Bella Cucina**, an Italian restaurant. The project uses JavaScript modules and Webpack to dynamically render the Home, Menu, and About sections without reloading the page.

## Live Preview

[View Live Demo](https://basnet194dipak.github.io/Project-Restaurant-Page/)

## Features

- Tab-based navigation for Home, Menu, and About sections
- JavaScript-generated restaurant menu with categories and descriptions
- Restaurant image, contact details, and opening hours
- Asset and CSS bundling through Webpack

## Tech Stack

- HTML5
- CSS3
- JavaScript ES Modules
- Webpack 5
- webpack-dev-server

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/basnet194dipak/Project-Restaurant-Page.git
   ```

2. Enter the project directory:

   ```bash
   cd Project-Restaurant-Page
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Development

Start the local development server:

```bash
npx webpack serve
```

Open `http://localhost:8080` in your browser. Webpack will rebuild the project when source files change.

### Production Build

Create an optimized build in the `dist` directory:

```bash
npx webpack
```

## Project Structure

```text
src/
├── about.js          # About page content and restaurant details
├── home.js           # Home page content
├── index.js          # Navigation and page rendering
├── menu.js           # Menu data and rendering
├── resturant.jpg     # Home page restaurant image
├── styles.css        # Website styles
└── template.html     # HTML template
webpack.config.js     # Webpack configuration
package.json          # Project metadata and dependencies
```

## Available Pages

- **Home** - Welcome message and restaurant photo
- **Menu** - Antipasti, pasta, pizza, and desserts
- **About** - Restaurant description, contact information, and opening hours

## License

This project is part of the The Odin Project curriculum. It is licensed under the ISC License.
