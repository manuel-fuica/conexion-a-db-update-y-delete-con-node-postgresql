//llamammos a la conexion con la base de datos
const pool = require('./conexion-db.js');

//creamos una funcion asincrona para realizar ejecutar un update, en este caso aumentaremos la edad de un usuario con el id 1, a 25 años
async function updateEstudiantes() {
    //tomamos los parametros de la linea de comandos
    const [id, edad] = process.argv.slice(2);

    //try catch para capturar los errores
    try {
        //realizamos la consulta
        const res = await pool.query('UPDATE estudiantes SET edad = $1 WHERE id = $2', [edad, id]);

        //mostramos el resultado, en caso exitoso
        console.log(`edad modificada, ahora es ${edad}`);
    } catch (error) {
        //en caso de error, mostramos el error
        console.log(error);
    }
    
}

updateEstudiantes()