# Backend Quiz app

Este proyecto debe tener:

- iniciar sesion
- solo correos con dominio cuautla.tecnm.mx puede cear cuenta o iniciar sesion
- guardar quiz hecho
- poder repetir el quiz guardado (sin ganar punto)
- [puntos](#points)
  - calificacion < 5 => 0 puntos
  - calificacion > 5 && < 6 => 1 punto
  - calificacion > 6 && < 7 => 2 puntos
  - calificacion > 7 && < 8 => 3 puntos
  - calificacion > 8 && < 9 => 4 puntos
  - calificacion > 9 => 5 puntos
  - calificacion 10 => 8 puntos
- Tabla de clasificaciones
- Cada cierto tiempo el jugador con mas puntos ganara un credito complementario
- se borraran los puntos en la tabla pero no los puntos individuales
- Si se consigue 500 puntos jugando puede gastarlos por un credito complementario\*
- Puede crear su propio quiz\*
- Puede entrar en el perfil de algun usuario y ver sus quizes\*
- Puede jugar los quizes de otro usuario\*
- Cronometro del quiz\*

Tecnologias:

- Express
- Typescript
- Mongodb
- Mongoose
- JWT
- Passport.js
- Jest\*
