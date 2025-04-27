#!/bin/bash

# Function to display help
show_help() {
  echo "Vue Blog Template Docker Helper"
  echo ""
  echo "Usage: ./docker-scripts.sh [command]"
  echo ""
  echo "Commands:"
  echo "  build       Build the Docker image"
  echo "  start       Start the Docker container"
  echo "  stop        Stop the Docker container"
  echo "  restart     Restart the Docker container"
  echo "  logs        Show Docker container logs"
  echo "  clean       Remove Docker container and image"
  echo "  help        Show this help message"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
  echo "Error: Docker is not installed. Please install Docker first."
  exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
  echo "Error: Docker Compose is not installed. Please install Docker Compose first."
  exit 1
fi

# Process commands
case "$1" in
  build)
    echo "Building Docker image..."
    docker compose build
    ;;
  start)
    echo "Starting Docker container..."
    docker compose up -d
    echo "Application is running at http://localhost:426"
    ;;
  stop)
    echo "Stopping Docker container..."
    docker compose down
    ;;
  restart)
    echo "Restarting Docker container..."
    docker compose restart
    ;;
  logs)
    echo "Showing Docker container logs..."
    docker compose logs -f
    ;;
  clean)
    echo "Removing Docker container and image..."
    docker compose down --rmi all
    ;;
  help|*)
    show_help
    ;;
esac 