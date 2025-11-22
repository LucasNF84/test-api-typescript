# Contexto del Proyecto: API REST TypeScript

Este documento sirve como contexto para asistentes de IA (como Gemini) para entender rápidamente la arquitectura, tecnologías y patrones utilizados en este proyecto.

## 🛠 Stack Tecnológico

*   **Lenguaje:** TypeScript (Target ES2016, CommonJS).
*   **Runtime:** Node.js.
*   **Framework Web:** Express.js.
*   **Base de Datos:** MongoDB (con Mongoose ODM).
*   **Autenticación:** JWT (JSON Web Tokens) y Bcryptjs.
*   **Manejo de Archivos:** Multer.
*   **Variables de Entorno:** Dotenv.

## 📂 Estructura del Proyecto

El código fuente se encuentra en el directorio `src/`.

```
src/
├── app.ts           # Punto de entrada. Configura Express, DB y Rutas.
├── config/          # Configuraciones (ej. conexión a Mongo).
├── controllers/     # Controladores: Manejan Request/Response HTTP.
├── interfaces/      # Definiciones de tipos TypeScript.
├── middleware/      # Middlewares de Express (Auth, Logs, etc.).
├── models/          # Esquemas de Mongoose.
├── routes/          # Definición de Endpoints.
├── services/        # Lógica de Negocio. Interactúa con la DB.
└── utils/           # Utilidades (JWT, Bcrypt, Error handling).
```

## 🏗 Arquitectura y Patrones

### 1. Carga Dinámica de Rutas
El archivo `src/routes/index.ts` implementa un cargador automático de rutas.
*   Escanea los archivos en el directorio `src/routes/`.
*   Usa el nombre del archivo como prefijo de la ruta (ej. `auth.ts` -> `/auth`).
*   **Nota:** Para agregar un nuevo recurso, simplemente crea un archivo en `routes/` y define el router.

### 2. Patrón Controlador-Servicio
El proyecto separa claramente la capa de transporte (HTTP) de la lógica de negocio.

*   **Controladores (`controllers/`)**:
    *   Reciben `req` y `res`.
    *   Extraen datos del body/params.
    *   Llaman a los servicios.
    *   Envían la respuesta HTTP.
    *   *Ejemplo:* `auth.ts` maneja `registerCtrl` y `loginCtrl`.

*   **Servicios (`services/`)**:
    *   Contienen la lógica pura.
    *   Interactúan con los Modelos (`models/`).
    *   Retornan datos o códigos de error (strings como "PASSWORD_INCORRECT").
    *   No conocen de `req` o `res`.

### 3. Autenticación
*   **Registro:** Hash de contraseña con `bcryptjs`.
*   **Login:** Verificación de hash y generación de JWT.
*   **Utils:** Funciones helper en `src/utils/bcrypt.handle.ts` y `src/utils/jwt.handle.ts`.

## 🚀 Variables de Entorno

El proyecto requiere un archivo `.env` en la raíz. Ver `.env.example` para referencia.

*   `PORT`: Puerto del servidor (ej. 3002).
*   `DB_URI`: String de conexión a MongoDB.
*   `JWT_SECRET`: Clave secreta para firmar los tokens.

## 📜 Scripts Disponibles

*   `npm run dev`: (Asumido, si usas nodemon/ts-node) Ejecuta en desarrollo.
*   `npm start`: Ejecuta el código compilado en `dist/app.js`.
*   `npm run build`: Compila el proyecto TypeScript a JavaScript en `dist/`.

## 🐳 DevOps & Despliegue

### Docker
El proyecto está contenerizado para facilitar el despliegue.

*   **Dockerfile:**
    *   Imagen base: `node:18`.
    *   Proceso: Copia `package.json`, instala dependencias, copia el código fuente (`src/`) y compila TypeScript (`tsc`).
    *   Comando de inicio: `node dist/app.js`.
    *   Puerto expuesto: `3000`.

*   **Docker Compose (`docker-compose.yml`):**
    *   Orquesta dos servicios:
        1.  `api`: La aplicación Node.js. Depende de `mongo`.
        2.  `mongo`: Base de datos MongoDB (imagen `mongo:6`).
    *   Red: `netTest` (bridge).
    *   Volúmenes: Persistencia de datos de Mongo en `mongo_data`.

### CI/CD con Jenkins
El archivo `Jenkinsfile` define un pipeline declarativo básico:

1.  **Checkout:** Clona el código fuente.
2.  **Build Docker image:** Ejecuta `docker compose build`.
3.  **Run Containers:** Levanta los servicios con `docker compose up -d`.
4.  **Verify containers:** Lista los contenedores activos (`docker ps`).
5.  **Post-build cleanup:** Limpia recursos no utilizados (`docker system prune`).
