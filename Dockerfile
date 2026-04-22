# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY . .

ENV TZ=Asia/Kolkata

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "app.js"]
