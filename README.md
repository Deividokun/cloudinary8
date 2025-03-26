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

## Endpoints de Usuarios

| Método | Endpoint         | Descripción          | Autenticación |
|--------|-----------------|----------------------|---------------|
| POST   | /api/users      | Crear un usuario     | No            |
| POST   | /api/users/login | Iniciar sesión       | No            |
| GET    | /api/users      | Obtener todos los usuarios | Admin       |
| PUT    | /api/users/:id  | Actualizar un usuario | Admin        |
| DELETE | /api/users/:id  | Eliminar un usuario  | Admin        |

## Endpoints de Mangas

| Método | Endpoint                          | Descripción                     | Autenticación |
|--------|----------------------------------|---------------------------------|---------------|
| GET    | /api/mangas                     | Obtener todos los mangas       | No            |
| GET    | /api/mangas/:id                  | Obtener un manga por ID        | No            |
| GET    | /api/mangas/categoria/:categoria | Obtener mangas por categoría   | No            |
| POST   | /api/mangas                      | Crear un manga                 | Usuario       |
| PUT    | /api/mangas/:id                   | Actualizar un manga            | Admin         |
| DELETE | /api/mangas/:id                   | Eliminar un manga              | Admin         |

## Relaciones entre Colecciones  

### Usuarios y Mangas  
Cada manga puede estar relacionado con un usuario mediante el campo `mangas` en el modelo `User`.  

---

## Subida y Eliminación de Archivos  

### Subida  
- Las imágenes se suben a **Cloudinary** mediante el middleware `multer-storage-cloudinary`.  
- Las imágenes se almacenan en la carpeta **animebellaco** por defecto.  

### Eliminación  
- Al eliminar un manga, la imagen asociada también se elimina de **Cloudinary** utilizando la función `deleteFile`.  

---

## Estructura del Proyecto

```
├── src/
│   ├── api/
│   │   ├── controllers/       # Controladores de usuarios y mangas
│   │   ├── models/            # Modelos de Mongoose
│   │   ├── routes/            # Rutas de la API
│   ├── middleware/            # Middlewares (auth, subida de archivos)
│   ├── utils/                 # Utilidades (deleteFiles, seed)
├── .env                       # Variables de entorno
├── package.json               # Dependencias y scripts
├── README.md                   # Documentación del proyecto
```

---

## Autor  
**David Sánchez Adrián**  

---

## Licencia  
Este proyecto está bajo la licencia **ISC**.

