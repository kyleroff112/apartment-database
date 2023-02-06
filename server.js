const express = require('express');
const db = require('./config/db_connection');
const routes = require('./routes')
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Handlebars
let hbs = exphbs.create({defaultLayout: 'main'});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set static route
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({exteded:false}));
app.use(routes);

app.get('/', (req, res)=>{
    res.render('index')
})

db.sync({force:false})
    .then(()=>{app.listen(PORT, ()=> console.log(`Listening on PORT: ${PORT}`))});
