const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (req, res) => {
    Blog.find({})
      .then(blogs => {
        res.json(blogs)
      })
  })
  
blogsRouter.post('/', (req, res) => {
    const blog = new Blog(req.body)

    blog.save()
        .then(result => {
            res.status(201).json(result)
        })
})

blogsRouter.put('/:id', (req, res, next) => {
  const body = req.body

  const blog = {
    title: body.title,
    author: body.author,
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