const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/', (req, res) => {
    Blog.find({})
      .then(blogs => {
        res.json(blogs)
      })
  })
  
blogsRouter.post('/', async (req, res) => {
    const body = req.body

    const user = await User.findById(body.userId)

    const blog = new Blog({
      title: body.title,
      // author: body.author,
      url: body.url,
      likes: body.likes,
      user: user.id
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    res.json(savedBlog)
})

blogsRouter.put('/:id', (req, res, next) => {
  const body = req.body

  const blog = {
    title: body.title,
    /* author: body.author, */
    url: body.url,
    likes: body.likes
  }

  Blog.findByIdAndUpdate(req.params.id, blog, { new: true })
    .then(updatedBlog => {
      res.json(updatedBlog)
    })
    .catch(err => next(err))
})

blogsRouter.delete('/:id', (req, res, next) => {
  Blog.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(err => next(err))
})

module.exports = blogsRouter