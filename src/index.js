import app from './app';
import database from './database';

app.listen(app.get('port'), _ =>{
    console.log('server on port 3000')
});