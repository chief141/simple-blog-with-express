const basic_home = (req, res) => {
  res.redirect('/home');
};

const basic_home_ = (req, res) => {
  res.render('index', { title: 'Home' });
};

const basic_about = (req, res) => {
  res.render('about', { title: 'About us' });
};

module.exports = { basic_home, basic_home_, basic_about };
