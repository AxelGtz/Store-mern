import app from './app';
import './database';

function main () {
    app.listen(app.get('port'), () => console.log('corriendo en el puerto : '+ app.get('port')));
}

main();