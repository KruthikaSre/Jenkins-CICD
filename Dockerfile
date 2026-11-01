FROM node:22-alpine
WORKDIR /app
COPY package.json ./
COPY app.js ./
COPY test ./test
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]