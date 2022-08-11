require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3003;

const db = require('./models/db');
db.once('open', () => {
  console.log('Connected to mongo');
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use((req, res, next) => {
  res.locals.data = {};
  next();
});
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/products', require('./controllers/routeController'));

app.listen(port, () => {
  console.log('Express server listening on port ', port);
});