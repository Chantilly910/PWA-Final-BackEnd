# PWA-Final-BackEnd

## Estructura del Proyecto

```
back/
│   package.json
│   README.md
│   tsconfig.json
└───src/
    │   app.ts
    │   index.ts
    │   server.ts
    ├───config/
    │       db.ts
    ├───controllers/
    │       authController.ts
    │       foodController.ts
    │       userController.ts
    ├───data/
    │       posts.json
    │       seedData.ts
    │       users.json
    ├───models/
    │       Food.ts
    │       userModel.ts
    ├───routes/
    │       auth.ts
    │       foodRoutes.ts
    │       userRoutes.ts
    └───utils/
            firebaseAdmin.ts
            generateRandomFoods.ts
```

## Instalación de dependencias

Ejecuta el siguiente comando en la raíz del proyecto para instalar todas las dependencias necesarias:

```
npm install
```

### Dependencias principales

- express
- cors
- dotenv
- firebase-admin
- mongodb
- mongoose

### Dependencias de desarrollo

- typescript
- ts-node
- ts-node-dev
- nodemon
- @types/node
- @types/express
- @types/cors
- @types/mongoose
- @typescript-eslint/parser

## Scripts útiles

- `npm run dev` — Inicia el servidor en modo desarrollo con recarga automática.
- `npm run build` — Compila el proyecto TypeScript a JavaScript.
- `npm start` — Inicia el servidor usando el código compilado.

## Descripción

Este backend está construido con Node.js, Express y TypeScript. Utiliza MongoDB como base de datos y Firebase Admin para autenticación. Incluye rutas para usuarios y alimentos, y está preparado para integrarse con un frontend PWA.
