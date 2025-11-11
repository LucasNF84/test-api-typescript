FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos dependencias (incluye devDependencies)
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Exponemos el puerto de la API
EXPOSE 3000

# Comando por defecto: correr en modo desarrollo
CMD ["npm", "run", "dev"]
