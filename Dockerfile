# Multi-stage build for production optimization
# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --prefer-offline --no-audit --progress=false

# Copy source code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:1.27-alpine AS production

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
