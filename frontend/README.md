# ArtiMark Frontend

## Pasos para ejecutar el proyecto

1. Clonar el repositorio
   ```
   git clone <url-del-repositorio>
   cd ArtiMark/frontend
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
   - Crea un archivo `.env` en la raíz del directorio frontend
   - Copia el contenido de `.env.template` (si existe) al nuevo archivo `.env`
   - Ajusta las variables según sea necesario, por ejemplo:
     ```
     VITE_API_URL=http://localhost:3000/api
     ```

4. Iniciar el servidor de desarrollo
   ```
   npm run dev
   ```
   o con yarn:
   ```
   yarn dev
   ```

5. Abrir el navegador
   Visita `http://localhost:5173` (o el puerto que indique la consola) para ver la aplicación en funcionamiento.

Nota: Asegúrate de que el backend esté configurado y ejecutándose correctamente antes de iniciar el frontend.
