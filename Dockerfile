FROM node:18

WORKDIR /usr/src/app

COPY package*.json tsconfig.json ./
RUN npm install
RUN npm install -g typescript

# Copiar solo el código fuente
COPY src ./src

# Compilar el TypeScript
RUN tsc

EXPOSE 3000
CMD ["node", "dist/app.js"]

