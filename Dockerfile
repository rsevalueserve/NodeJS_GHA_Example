# Base image
FROM node:16-alpine3.17
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install app dependencies
RUN npm install
# Copy app source code
COPY . .
# Expose a port if your app requires it #
EXPOSE 3000
# Start the app
CMD ["npm", "run", "start"]
