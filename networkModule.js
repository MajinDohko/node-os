const os = require('os');

function obtenerInformacionRed() {
    const interfazRed = os.networkInterfaces();
    const informacionInterface = {};

    for (const [name, interfaces] of Object.entries(interfazRed)) {
        informacionInterface[name] = interfaces.map((iface) => ({
            Familia: iface.family,
            Dirección: iface.address,
            Interno: iface.internal,
        }));
    }

    return informacionInterface;
}

module.exports = { obtenerInformacionRed };
