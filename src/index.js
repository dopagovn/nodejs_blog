const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { path } = require('express/lib/application');
const app = express();
const port = 3000;
const route = require('./routes');

    // HTTP Logger
    // app.use(morgan('combined'));

    // Template Engine

    app.use(express.static('src/public'));
    app.use(express.urlencoded({
      extended:true
    }));
    app.use(express.json());


    app.engine('hbs' , handlebars.engine({
      extname: ".hbs"
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/resources/views');

    // Routes Init
    route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

