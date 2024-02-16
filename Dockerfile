# Use the official Node.js image as base
FROM node:16

# Set the working directory in the container
WORKDIR /app

# copy file contents
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["node", "serverv2.js"]
