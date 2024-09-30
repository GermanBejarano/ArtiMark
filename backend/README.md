<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# ArtiMark - Backend

## Pasos para ejecutar el proyecto

1. Clonar el repositorio
   ```
   git clone <url-del-repositorio>
   cd ArtiMark/backend
   ```

2. Instalar dependencias
   ```
   npm install
   ```
   o si prefieres usar yarn:
   ```
   yarn install
   ```

3. Configurar variables de entorno
   - Crea un archivo `.env` en la raíz del directorio backend
   - Copia el contenido de `.env.template` al nuevo archivo `.env`
   - Ajusta las variables según sea necesario, por ejemplo:
     ```
     DB_HOST=localhost
     DB_PORT=5483
     DB_NAME=artimark_db
     DB_USERNAME=postgres
     DB_PASSWORD=artimarkpass@1234
     ```

4. Levantar la base de datos
   ```
   docker-compose up -d
   ```

5. Levantar el servidor de desarrollo
   ```
   npm run start:dev
   ```
   o con yarn:
   ```
   yarn start:dev
   ```

6. Verificar la aplicación
   La API estará disponible en `http://localhost:3000/api`
