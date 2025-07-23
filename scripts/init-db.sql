-- Initialize aiKODA Platform Database
-- This script runs when PostgreSQL container first starts

-- Ensure the database exists
CREATE DATABASE aikoda_db IF NOT EXISTS;

-- Connect to the database
\c aikoda_db;

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create indexes for better performance
-- These will be created after Prisma migration

-- Create a default admin user (password: admin123)
-- This will be handled by the application seeding

-- Grant permissions
GRANT ALL PRIVILEGES ON DATABASE aikoda_db TO aikoda_user;