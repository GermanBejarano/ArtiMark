> Detalla en esta sección los prompts principales utilizados durante la creación del proyecto, que justifiquen el uso de asistentes de código en todas las fases del ciclo de vida del desarrollo. Esperamos un máximo de 3 por sección, principalmente los de creación inicial o  los de corrección o adición de funcionalidades que consideres más relevantes.
Puedes añadir adicionalmente la conversación completa como link o archivo adjunto si así lo consideras


## Índice

- [Índice](#índice)
- [1. Descripción general del producto](#1-descripción-general-del-producto)
- [2. Arquitectura del Sistema](#2-arquitectura-del-sistema)
  - [**2.1. Diagrama de arquitectura:**](#21-diagrama-de-arquitectura)
  - [**2.2. Descripción de componentes principales:**](#22-descripción-de-componentes-principales)
  - [3. Modelo de Datos](#3-modelo-de-datos)
  - [4. Especificación de la API](#4-especificación-de-la-api)
  - [5. Historias de Usuario](#5-historias-de-usuario)
  - [6. Tickets de Trabajo](#6-tickets-de-trabajo)

---

## 1. Descripción general del producto

**Prompt 1:**

Eres un experto en producto, con experiencia en plataformas de marketplace. Tengo el siguiente proyecto en mente:

El proyecto consiste en la creación de una plataforma marketplace unificada dedicada a artesanos, artistas y proveedores de insumos de arte. La plataforma permite la venta de productos hechos a mano, la adquisición de materiales, y la colaboración entre usuarios para crear proyectos artísticos únicos.
Esta plataforma marketplace está diseñada para convertirse en un hub centralizado para la comunidad artística, donde artesanos y artistas pueden exhibir y vender sus creaciones, aceptar encargos personalizados, y conectarse con proveedores de insumos para adquirir los materiales necesarios para sus obras. Además, la plataforma fomenta la colaboración entre artistas y proveedores, permitiendo que ambos trabajen juntos en proyectos que maximicen su creatividad y visibilidad.

Quiero que me ayudes a aterrizar el proyecto, ya que es un proyecto de grandes dimensiones y deseo desarrollarlo por iteraciones, es decir, primero voy a lanzar una versión mínima viable del producto y luego voy a ir añadiendo funcionalidades según las necesidades de los usuarios. Dime:

- ¿Qué beneficios obtiene el cliente de este marketplace para considerar su uso?
- ¿Qué alternativas tiene a usar este marketplace y cuando pueden ser relevantes?
- ¿Cual seria el propósito del producto?
- ¿Qué valor aporta, qué soluciona, y para quién?

**Prompt 2:**

En esta primera versión no voy a lanzar todos los módulos que deberia tener el proyecto, quiero lanzar un MVP que me permita validar la propuesta de valor y si es viable seguir desarrollando el proyecto, por lo tanto, en esta primera iteración quiero que:
- Los productos de artistas y proveedores se carguen en el sistema de forma manual, es decir, que deben enviar por correo electrónico un excel con los datos del producto y los administradores del sistema los cargaran directamente a la base de datos.
- Los provedores y artistas por el momento no deben tener perfil en la plataforma, los unicos perfiles que deben tener son los de administrador y usuario final.
  
Considerando lo anterior y teniendo en cuenta que en esta primera version voy a lanzar una version mínima viable, ¿Cual seria los objetivos de esta primera iteración? Tanto generales como específicos. Solo crea un objetivo general y tres específicos, estos deben ser claros y concisos.

**Prompt 3:**  

¿En que deberia enfocarme para este MVP? Enumera y describe las características y funcionalidades específicas que debería tener el producto.

---

## 2. Arquitectura del Sistema

### **2.1. Diagrama de arquitectura:**

**Prompt 1:**
¿Cual arquitectura se adecuaria mejor para este proyecto?

**Prompt 2:**
Crea un diagrama de arquitectura para el proyecto, que muestre los componentes principales y la interacción entre ellos. Ten en cuenta: 
- Se debe utilizar la arquitectura de microservicios
- Se utilizara AWS como plataforma de despliegue
- Se utilizara el stack, React, Node.js, y Postgres como base de datos.
Crea el diagrama en formato mermaid.

**Prompt 3:**
Añade los servicios de AWS que se utilizaran en el diagrama de arquitectura. Se mas claro y específico en la descripción de cada componente. 

### **2.2. Descripción de componentes principales:**

**Prompt 1:**
Describe los componentes más importantes, incluyendo la tecnología utilizada, la responsabilidad y el propósito de cada componente.

---

### 3. Modelo de Datos

**Prompt 1:**
Eres un arquitecto de software experto. En base al diagrama de arquitectura y las características y funcionalidades principales del proyecto @readme.md , crea un diagrama de modelo de datos que muestre las tablas y las relaciones entre ellas. Recuerda que tenemos 3 microservicios, por lo tanto tendremos 3 bases de datos distintas:
- La base de datos de productos
- La base de datos de pedidos
- La base de datos de usuarios
Usa mermaid.

**Prompt 2:**
Bien, pero quiero que expandas y completes el modelo de la base de datos de usuarios, recuerda que se esta creando un marketplace y a futuro quiero expandir las funcionalidades y quiero que sea escalable. Revisa que cumpla con las características y funcionalidades principales del proyecto

**Prompt 3:**
Los modelos finales estan en el apartado de "3.1. Diagrama del modelo de datos"  en base a estos modelos dame una descripcion lo mas completa y clara que puedas sobre  las entidades principales, incluye: 
- El nombre
- Tipo de cada atributo
- Descripción breve si procede, 
- Claves primarias y foráneas, relaciones
- Tipo de relación
- restricciones (unique, not null…), etc.

---

### 4. Especificación de la API

**Prompt 1:**
Listo, ahora necesito que me ayudes a crear los endpoints principales para mi backend, crea uno para cada servicio:
- Servicio de productos
- Servicio de pedidos
- Servicio de usuarios
Que tenga el formato de OpenAPI.

**Prompt 2:**
Describeme cada uno de los endpoints sugeridos
- Porque fueron seleccionados estos y no otros?
- Cuales son los parametros de entrada?
- Cual seria la respuesta? 

**Prompt 3:**
Puedes añadir esas descripciones y ejemplos de peticiones y respuestas al formato openAPI? 

---

### 5. Historias de Usuario

**Prompt 1:**
Quiero que me ayudes a crear 3 historias de usuarios principales que me ayuden a lograr este MPV. Tiene que tener el siguiente formato: "Como [tipo de usuario], quiero [realizar una acción] para [obtener un beneficio]".

**Prompt 2:**
Revisa de nuevo el archivo @readme.md el apartado de "Características y funcionalidades principales", la historia de usuario 1 no se alinea a lo que se quiere en esta primera entrega.

**Prompt 3:**
Crees pertinente agregar mas informacion a las historias de usuario tales como: 
- Descripcion
- Criterios de Aceptación
- Notas adicionales
- Tareas

**Prompt 4:**
Revisa los criterios de aceptacion y las tareas de cada historia y valida que si se alinean lo que se quiere lograr en esta primera entrega, no quiero funcionalidades complicadas de desarrollar que pueden quitar mucho tiempo, ya que esto es una primera version para probar el producto

---

### 6. Tickets de Trabajo

**Prompt 1:**
Eres un experto en product manager, vamos a crear los tickets de trabajo para el desarrollo del proyecto, teniendo en cuenta que se va a utilizar scrum y que se va a trabajar en iteraciones de dos semanas. Necesito crear 3 tickets de trabajo, uno de backend, uno de frontend, y uno de bases de datos. Primero crea el ticket de base de datos teniendo en cuenta el modelo de datos de @readme.md y la arquitectura del sistema de @readme.md, aplica la estructura de @ComponentesTicket.md

**Prompt 2:**
Perfecto, ahora crea el ticket de backend teniendo en cuenta la especificacion de la API de @readme.md y la arquitectura del sistema de @readme.md, aplica la estructura de @ComponentesTicket.md

**Prompt 3:**
Ahora crea el ticket de frontend teniendo en cuenta la especificacion de la API de @readme.md y la arquitectura del sistema de @readme.md, aplica la estructura de @ComponentesTicket.md
