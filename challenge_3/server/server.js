const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => res.send('Hello Express'))

app.listen(3000, ()=> {console.log('listing to http://localhost:3000')});
