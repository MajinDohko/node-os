const { obtenerDatos } = require('./osModule');
const { obtenerInformacionRed } = require('./networkModule');

function imprimirInformacionSistema() {
    console.log('=== Información del Sistema Operativo ===');
    const informacionSistema = obtenerDatos();
    for (const [key, value] of Object.entries(informacionSistema)) {
        console.log(`${key}: ${value}`);
    }
}

function imprimirInformacionRed() {
    console.log('=== Información de las Interfaces de Red ===');
    const informacionRed = obtenerInformacionRed();
    for (const [name, interfaces] of Object.entries(informacionRed)) {
        console.log(`Interfaz ${name}:`);
        interfaces.forEach((iface) => {
            console.log(`  Familia: ${iface.Familia}`);
            console.log(`  Dirección: ${iface.Dirección}`);
            console.log(`  Interno: ${iface.Interno}`);
        });
    }
}

imprimirInformacionSistema();
imprimirInformacionRed();
