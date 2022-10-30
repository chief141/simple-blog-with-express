const Blog = require('../models/blogs');

const blog_create = (req, res) => {
  res.render('create', { title: 'Create a blog.' });
};

const blog_post = (req, res) => {
  const blog = new Blog(req.body);
  blog.save().then(() => res.redirect('/blogs'));
};

const blogs_show = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('blogs', { title: 'Blogs', data: result });
    });
};

const blog_detail = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('detail', { data: result, title: result.title });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).render('404', { title: 'Page not found' });
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/blogs' });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_edit_detail = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('edit', {
        data: result,
        title: `Editing ${result.title}`,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).render('404', { title: 'Page not found' });
    });
};

const blog_put = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, req.body)
    .then(res.redirect(`/blogs/${id}`))
    .catch((err) => console.log(err));
};

module.exports = {
  blog_create,
  blog_post,
  blogs_show,
  blog_detail,
  blog_delete,
  blog_put,
  blog_edit_detail,
};
