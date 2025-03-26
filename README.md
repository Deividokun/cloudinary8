# **Backend API REST con Autenticación y Subida de Archivos**

Este proyecto es una API REST desarrollada con **Node.js** y **Express**, que incluye autenticación, conexión a una base de datos en **MongoDB Atlas**, subida de archivos a **Cloudinary**, y un CRUD completo para manejar usuarios y mangas.

---

## **Características del Proyecto**
- **Servidor con Express**: Configuración de rutas y middlewares.
- **Conexión a MongoDB Atlas**: Base de datos en la nube para almacenar usuarios y mangas.
- **Autenticación**: Uso de **JSON Web Tokens (JWT)** para proteger rutas.
- **Subida de Archivos**: Integración con **Cloudinary** para almacenar imágenes.
- **CRUD Completo**: Operaciones de creación, lectura, actualización y eliminación para usuarios y mangas.
- **Eliminación de Archivos**: Los archivos en Cloudinary se eliminan automáticamente al borrar un documento en la base de datos.
- **Relaciones entre Colecciones**: Los mangas están relacionados con los usuarios.
- **Semilla de Datos**: Script para insertar datos iniciales en la base de datos.

---

## **Tecnologías Utilizadas**
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir la API REST.
- **MongoDB Atlas**: Base de datos NoSQL en la nube.
- **Mongoose**: ODM para modelar datos en MongoDB.
- **Cloudinary**: Almacenamiento de imágenes en la nube.
- **Multer**: Middleware para manejar la subida de archivos.
- **JSON Web Tokens (JWT)**: Autenticación basada en tokens.
- **dotenv**: Manejo de variables de entorno.

