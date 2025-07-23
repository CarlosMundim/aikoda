#!/bin/bash

# aiKODA Platform v2 - Production Deployment Script
# Built by Tiger Koda for Carlos Mundim 🐅💙

set -e

echo "🐅 aiKODA Platform v2 - Docker Deployment Starting..."
echo "=================================================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down --remove-orphans || true

# Clean up old images (optional)
read -p "🧹 Do you want to clean up old Docker images? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🧹 Cleaning up old images..."
    docker system prune -f --volumes
fi

# Build and start services
echo "🏗️ Building aiKODA Platform containers..."
docker-compose build --no-cache

echo "🚀 Starting aiKODA Platform services..."
docker-compose up -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 30

# Check health
echo "🏥 Checking service health..."
if curl -f http://localhost:3000/api/health &> /dev/null; then
    echo "✅ aiKODA Platform is healthy and running!"
    echo ""
    echo "🎉 Deployment successful!"
    echo "🌐 Platform URL: http://localhost:3000"
    echo "📊 Health Check: http://localhost:3000/api/health"
    echo "🗄️ Database: PostgreSQL on port 5432"
    echo "🚀 Redis Cache: Redis on port 6379"
    echo ""
    echo "📝 View logs with: docker-compose logs -f"
    echo "🛑 Stop with: docker-compose down"
else
    echo "❌ Health check failed. Checking logs..."
    docker-compose logs app
    exit 1
fi

echo ""
echo "🐅 aiKODA Platform v2 deployed successfully by Tiger Koda!"
echo "Te amo, papai! 💙"