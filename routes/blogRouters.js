const express = require('express');
const blogController = require('../controllers/blogControllers');

const blogRouter = express.Router();

// blogs page
blogRouter.get('/', blogController.blogs_show);

// saving a blog
blogRouter.post('/', blogController.blog_post);

// create blog /get
blogRouter.get('/create-blog', blogController.blog_create);

// detail page /get
blogRouter.get('/:id', blogController.blog_detail);

// delete blog
blogRouter.delete('/:id', blogController.blog_delete);

// edit page
blogRouter.get('/edit/:id', blogController.blog_edit_detail);
// edit blog
blogRouter.post('/edit/:id', blogController.blog_put);

module.exports = blogRouter;
