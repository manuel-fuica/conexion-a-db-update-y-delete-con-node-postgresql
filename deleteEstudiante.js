//llamammos a la conexion con la base de datos
const pool = require('./conexion-db.js');

//creamos la funcion asincrona
async function deleteEstudiante() {
    //tomamos el id del parametro de la linea de comandos
    const [id] = process.argv.slice(2);
    try {
        //creamos la comsulta
        const res = await pool.query('DELETE FROM estudiantes WHERE id = $1', [id]);
        //muestra un mensaje de exito
        console.log(`Estudiante con id ${id} eliminado`);
    } catch (error) {
        //en caso de error muestra el error
        console.log(error);
    }
}

deleteEstudiante();