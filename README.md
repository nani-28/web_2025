# Integración Completa Frontend + Backend con Fastify y PostgreSQL

## Descripción de la tarea
El objetivo de esta tarea es completar un proyecto Full Stack que permita enviar datos desde un formulario HTML hacia un backend desarrollado en JavaScript usando Fastify, almacenarlos en una base de datos PostgreSQL y mostrar que el flujo funciona correctamente. Además, todo el proyecto debe estar dockerizado usando Docker y Docker Compose.

En este proyecto se implementa:
- Frontend: formulario HTML funcional.
- Backend: Fastify en JavaScript con validación de datos.
- Base de datos: PostgreSQL.
- Contenedores Docker para backend, base de datos y Adminer para administración.

---

## Tecnologías utilizadas
- **Frontend:** HTML, Bootstrap 5, JavaScript (Fetch API)
- **Backend:** Fastify (JavaScript), Knex.js para manejo de base de datos
- **Base de datos:** PostgreSQL
- **Administración de base de datos:** Adminer
- **Contenedores:** Docker y Docker Compose
- **Servidor de frontend opcional:** Live Server

---

## Levantar el proyecto con Docker

1. Asegúrate de tener Docker y Docker Compose instalados.
2. En la terminal, dentro de la carpeta del proyecto, ejecuta:

```bash
docker compose build --no-cache
docker compose up -d
```
### Esto levantará tres contenedores:

- backend: corre Fastify y escucha en http://localhost:3000

- db: contenedor de PostgreSQL

- adminer: cliente web para visualizar la base de datos (http://localhost:8080)




 

