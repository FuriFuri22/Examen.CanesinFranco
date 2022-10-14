# Examen.CanesinFranco

## El servidor cumple con los requerimientos propuestos para el parcial (se puede pulir mucho mas)

# Para iniciar el servidor hay que escribir en la terminal "npm run dev"

# Para iniciar sesion hay que usar la ruta http://localhost/login con POST y enviarle un json atraves del body con el siguiente formato 
{
"userName": "aqui va el nombre de usuario",
"password": "aqui va la contraseña"
}
Esto te traera como respuesta un token que sera tu key para acceder a las demas funcionalidades//

# Para crear un  usuario hay que usar la ruta http://localhost/User con POST y enviarle un json atraves del body con el siguiente formato 
{
"userName": "aqui va el nombre de usuario",
"password": "aqui va la contraseña",
"email":"aqui va el email"
}
Esto te traera como respuesta un token que sera tu key para acceder a las demas funcionalidades//



