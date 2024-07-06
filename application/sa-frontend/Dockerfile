FROM node:14 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8085

CMD ["nginx", "-g", "daemon off;"]





# # Stage 1: Build
# FROM node:14 as build

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json (if available) from the sa-frontend directory
# COPY sa-frontend/package*.json ./

# # Install dependencies
# RUN npm install

# # Copy all other source code to work directory from the sa-frontend directory
# COPY sa-frontend .

# # Build the project
# RUN npm run build

# # Stage 2: Serve
# FROM nginx:alpine

# # Copy build output to nginx html directory
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose the port nginx will run on
# EXPOSE 8085

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]



