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


