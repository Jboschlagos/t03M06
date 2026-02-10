// Usando ES Modules (import) en lugar de require
import chalk from 'chalk';
import dayjs from 'dayjs';

const fechaActual = dayjs();
const fechaFormateada = dayjs().format('YYYY-MM-DD HH:mm:ss');

console.log(fechaFormateada);
console.log(chalk.green('¡Bienvenido a mi aplicación Node.js!'));
console.log(chalk.yellow('Fecha actual: ' + fechaFormateada));