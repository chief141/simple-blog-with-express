// imports
const express = require('express');
const mongoose = require('mongoose');
const basicRoutes = require('./routes/basicRouters');
const blogRoutes = require('./routes/blogRouters');
const morgan = require('morgan');
const { basic_404 } = require('./controllers/basicControllers');

// constants
const app = express();
const connect_url = process.env.MONGODB_URL;

mongoose
  .connect(connect_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(`failed to connect ${err}`));

// middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(basicRoutes);

// blogging routes
app.use('/blogs', blogRoutes);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page not found' });
});

console.log(`Listening to http://localhost:3000`);
