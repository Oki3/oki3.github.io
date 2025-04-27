# Vue.js Blog Template

A modern blog built with Vue.js and TypeScript.

## Features

- Responsive design
- Vue Router for navigation
- TypeScript support
- Modern UI components
- Blog post showcase
- Project portfolio
- Development toolkits
- Contact form

## Running with Docker

### Prerequisites

- Docker
- Docker Compose

### Build and Run

1. Clone the repository:
```bash
git clone <repository-url>
cd vue-blog-template
```

2. Build and start the Docker container:
```bash
# Build the Docker image
./docker-scripts.sh build

# Start the container
./docker-scripts.sh start
```

3. Access the application at:
```
http://localhost:426
```

### Stopping the Container

To stop the running container:
```bash
./docker-scripts.sh stop
```

### Development

For development, you can use the following commands to run the application locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The development server will be available at:
```
http://localhost:5173
```

## Project Structure

- `src/` - Source code
  - `assets/` - Static assets
  - `components/` - Vue components
  - `views/` - Page components
  - `router/` - Vue Router configuration
  - `App.vue` - Root component
  - `main.ts` - Application entry point

## License

MIT