//Sacar datos: Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
// Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer

const os = require('os');

function obtenerDatos() {
    const name = os.platform();
    const type = os.type();
    const version = os.version();
    const arch = os.arch();
    const cpus = os.cpus().length;
    const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
    const freeMem = (os.freemem() / 1024 / 1024).toFixed(2); 

    return {
        Nombre: name,
        Tipo: type,
        Versión: version,
        Arquitectura: arch,
        CPUs: cpus,
        MemoriaTotal: `${totalMem} MB`,
        MemoriaLibre: `${freeMem} MB`,
    };
}

module.exports = { obtenerDatos };