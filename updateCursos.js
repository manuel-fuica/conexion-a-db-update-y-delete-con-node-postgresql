const pool = require('./conexion-db.js');

//creamos una funcion asincrona para realizar ejecutar un update, en este caso cambiar el titulo y la descripcion
async function updateCursos() {
    //tomamos los parametros de la linea de comandos
    const [id, titulo, descripcion] = process.argv.slice(2);

    //try catch para capturar los errores
    try {
        //realizamos la consulta
        const res = await pool.query('UPDATE cursos SET titulo = $1, descripcion = $2 WHERE id = $3', [titulo, descripcion, id]);

        //mostramos el resultado, en caso exitoso
        console.log(`titulo y descripcion modificado, ahora es ${titulo} y su descripcion es ${descripcion}`);
    } catch (error) {
        //en caso de error, mostramos el error
        console.log(error);
    }
    
}

updateCursos()