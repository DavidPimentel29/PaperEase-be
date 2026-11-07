const crypto = require('crypto');

function generarIdFormulario() {
  const timestamp = Date.now().toString();
  const random = crypto.randomBytes(4).toString('hex');
  return `FORM_${timestamp}_${random}`.toUpperCase();
}

module.exports = { generarIdFormulario };
