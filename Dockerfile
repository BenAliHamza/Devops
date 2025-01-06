# Step 1: Use Node.js image for building and running the Angular app
FROM node:20-alpine3.19

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (to install dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular project to the container
COPY . .

# Expose port 4200 (Angular's default port)
EXPOSE 4200

# Step 2: Start the Angular app using ng serve
CMD ["npm", "start"]
