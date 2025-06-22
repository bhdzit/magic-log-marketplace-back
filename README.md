# Proyecto MagicLog (Backend)

Este es el backend para la aplicación MagicLog, desarrollado con [NestJS](https://nestjs.com/), un framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes y escalables.

## Descripción

El backend maneja toda la lógica de negocio, autenticación de usuarios, gestión de productos y la comunicación con la base de datos MongoDB a través de Mongoose.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Una instancia de [MongoDB](https://www.mongodb.com/) en ejecución.

## Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2.  Navega al directorio del proyecto:
    ```bash
    cd back
    ```

3.  Instala las dependencias:
    ```bash
    npm install
    ```
    o si usas yarn:
    ```bash
    yarn install
    ```

## Variables de Entorno

Para ejecutar la aplicación, necesitarás un archivo `.env` en la raíz del proyecto. El script de desarrollo (`start:dev`) lo cargará automáticamente.

Crea un archivo `.env` y añade las siguientes variables:

```
# Puerto de la aplicación
PORT=3000

# URI de conexión de MongoDB
MONGO_URI=mongodb://localhost:27017/magiclog

# Secreto para JWT
JWT_SECRET=tu_super_secreto_aqui
```

## Ejecutando la aplicación

### Modo Desarrollo

Para iniciar la aplicación en modo de desarrollo con recarga automática:

```bash
npm run start:dev
```

La aplicación estará disponible en `http://localhost:3000` (o el puerto que hayas configurado).

### Modo Producción

Para construir y ejecutar la aplicación en modo de producción:

```bash
# 1. Construir la aplicación
npm run build

# 2. Iniciar el servidor de producción
npm run start:prod
```

## Scripts Disponibles

- `npm run start`: Inicia la aplicación.
- `npm run start:dev`: Inicia la aplicación en modo desarrollo con watch.
- `npm run build`: Compila la aplicación para producción.
- `npm test`: Ejecuta las pruebas unitarias.

## Licencia

Este proyecto no tiene una licencia especificada.
