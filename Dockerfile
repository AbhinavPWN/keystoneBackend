# Use official Node.js image
FROM node:24

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

# Build the Strapi project
RUN npm run build

# Set production environment
ENV NODE_ENV=production

# Expose Strapi port
EXPOSE 1337

# Start Strapi in production mode
CMD ["npm", "run","--trace-deprecation", "node_modules/.bin/strapi", "start"]
