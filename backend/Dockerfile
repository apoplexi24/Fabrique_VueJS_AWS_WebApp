# Use an official Node.js runtime as a parent image
FROM node:18.18-alpine as backend

# Set the working directory in the container
RUN mkdir -p /home/node/backend/node_modules && chown -R node:node /home/node/backend
WORKDIR /home/node/backend

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json .

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port your application will run on
EXPOSE 5000

# Define the command to run your application
CMD ["node", "app.js"]