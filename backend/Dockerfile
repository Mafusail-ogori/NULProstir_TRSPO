FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g @nestjs/cli
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
