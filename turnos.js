const db = require('./connection');

async function createTurno(turno) {
  try {
    const request = db.request();
    const result = await request
      .input('nombreCompleto', turno.nombreCompleto)
      .input('curp', turno.curp)
      .input('nombre', turno.nomre)
      .input('paterno', turno.paterno)
      .input('materno', turno.materno)
      .input('telefono', turno.telefono)
      .input('celular', turno.celular)
      .input('correo', turno.correo)
      .input('curso', turno.curso)
      .input('municipio', turno.municipio)
      .input('asunto', turno.asunto)

      // ... otross campos
      .query(`
        INSERT INTO Turnos (nombreCompleto, curp, nombre, paterno, materno, telefono, celular, correo, curso, municipio, asunto)
        VALUES (@nombreCompleto, @curp, @nombre, @paterno, @materno, @telefono, @celular, @correo, @curso, @municipio, @asunto)
      `);

    return result.recordset[0];
  } catch (err) {
    throw err;
  }
}

async function getAllTurnos() {
  try {
    const request = db.request();
    const result = await request.query('SELECT * FROM Turnos');
    return result.recordset;
  } catch (err) {
    throw err;
  }
}

