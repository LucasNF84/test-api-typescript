# API REST con TypeScript, Express y MongoDB

Esta es una API RESTful construida con Node.js, Express y TypeScript. Sigue una arquitectura modular y escalable, utilizando MongoDB como base de datos.

## 🚀 Características

*   **TypeScript:** Código tipado para mayor robustez y mantenibilidad.
*   **Arquitectura Modular:** Separación clara de rutas, controladores, servicios y modelos.
*   **Carga Dinámica de Rutas:** Agrega nuevos archivos a `src/routes` y se cargarán automáticamente.
*   **Autenticación:** Implementación segura con JWT y Bcrypt.
*   **Docker Ready:** Configuración lista para contenedores con Docker y Docker Compose.
*   **CI/CD:** Pipeline de Jenkins incluido.

## 🛠 Tech Stack

*   **Core:** Node.js, Express.js
*   **Lenguaje:** TypeScript
*   **Base de Datos:** MongoDB (Mongoose)
*   **Seguridad:** Bcryptjs, JWT, CORS
*   **Utilidades:** Dotenv, Multer

## 📋 Prerrequisitos

*   Node.js (v18 o superior recomendado)
*   MongoDB (local o Atlas)
*   Docker (opcional, para despliegue)

## 🔧 Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone <tu-repositorio>
    cd curso-api-typescript
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:
    ```env
    PORT=3002
    DB_URI=mongodb://localhost:27017/tu_base_de_datos
    JWT_SECRET=tu_secreto_super_seguro
    ```

## 🏃‍♂️ Ejecución

### Desarrollo
Para correr el servidor en modo desarrollo (con recarga automática):
```bash
npm run dev
```

### Producción
Para compilar y correr la versión optimizada:
```bash
npm run build
npm start
```

## 🐳 Docker

El proyecto incluye configuración para Docker.

**Levantar la aplicación y la base de datos:**
```bash
docker compose up -d
```
Esto iniciará la API en el puerto `3000` y una instancia de MongoDB.

**Reconstruir la imagen:**
```bash
docker compose build
```

## 📂 Estructura del Proyecto

```
src/
├── config/          # Configuración de DB y variables
├── controllers/     # Lógica de entrada/salida (Req/Res)
├── interfaces/      # Tipos y contratos TypeScript
├── middleware/      # Middlewares (Auth, validaciones)
├── models/          # Modelos de datos Mongoose
├── routes/          # Definición de endpoints
├── services/        # Lógica de negocio pura
└── utils/           # Herramientas (Hash, Tokens, etc.)
```

## 📄 Licencia

Este proyecto está bajo la licencia ISC.
