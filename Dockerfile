# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@latest

# Copy package files and patches
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built files
COPY --from=builder /app/dist ./dist

# Copy server file
COPY server.js ./

# Install only express (without package.json to avoid conflicts)
RUN npm install --no-save express

# Expose port 80
EXPOSE 80

# Set environment variables
ENV PORT=80
ENV NODE_ENV=production

# Start the server
CMD ["node", "server.js"]

