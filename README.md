Validación de Datos en JavaScript mediante Esquemas JSON

En el desarrollo moderno de aplicaciones web y servicios backend, la validación de datos es un componente crítico para garantizar la integridad, consistencia y seguridad de la información procesada.
Este proyecto propone el diseño e implementación de un "Lenguaje Específico de Dominio (DSL)" orientado a la definición declarativa de esquemas de validación, los cuales son traducidos automáticamente 
a código JavaScript funcional utilizando bibliotecas populares como:

  -Ajv
  -Zod
  -Joi

El sistema implementa un traductor fuente-a-fuente que convierte definiciones DSL a validadores listos para producción.

____________________________________________ D I S E Ñ O   D E L    S I S T E M A  _________________________________________

Sintaxis del DSL
Ddonde usuario.dsl:

schema Usuario {
  nombre:string required min(3) max(50)
  edad:number min(0) max(120)
  email:string email required
}


Lexer
Convierte texto plano en tokens.

Parser
Construye el AST a partir de los tokens.

Generadores
Se implementaran generadores independientes para cada biblioteca:

    -Generador AJV
    -Generador Zod
    -Generador Joi

Se utilizó el patrón Factory para desacoplar la generación según target.

____________________________________________ F L U J O    D E    E J E C U C I O N  _________________________________________

Antes de ejecutar debemos comprobar que tenemos Node.js
    node -v

Dentro de la carpeta dsl-validator-transalator, seguiremos los siguientes pasos:

Abrimos una terminal cmd dentro de la carpeta y escribimos en el siguiente orden

    npm init -y
    npm install ajv zod joi

esto para iniciar en npm y descargar las dependencias que usaremos para ejecutar nuestro traductor, si instalamos bien la carpeta y las dependencias,
ejecuataremos la siguiente linea:

    node src/index.js examples/usuario.dsl --target=ajv

Si todo está bien deberías ver:

    ✔ Código generado en output/ajv.js

Entra a la carpeta output, y deberas encontrar el archivo siguiente:

      ajv.js

Ese archivo es el código generado automáticamente

podemos probar otros targets,
para zod:

    node src/index.js examples/usuario.dsl --target=zod

para joi:

    node src/index.js examples/usuario.dsl --target=zod


__________________________________ C O N C L U S I O N __________________________________________________

El proyecto demuestra la aplicación práctica de conceptos de compiladores y diseño de lenguajes en un contexto moderno de desarrollo web.
Se logró implementar un traductor fuente-a-fuente funcional, modular y extensible, capaz de generar validadores compatibles con múltiples 
bibliotecas ampliamente utilizadas en el ecosistema JavaScript, puede mejorar en cuanto soporte y manejo de errores, pero por ahora cumple con lo requerido.

