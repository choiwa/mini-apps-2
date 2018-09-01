const express = require('express');
const path = require('path');
const app = express();
// const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../public')))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send('Hello express');
// })

app.listen(3000, () => console.log("listening to port 3000"));
