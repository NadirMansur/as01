//muestra la temperatura del Core
const { exec } = require('child_process');

// Ejecutar el comando "sensors" en la terminal
exec('sensors', (error, stdout, stderr) => {
console.log("////////////////////////////////")
  if (error) {
    console.error(`Error al ejecutar el comando: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
  console.log("////////////////////////////////")
});