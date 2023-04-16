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

blogsRouter.delete('/:id', (req, res, next) => {
  Blog.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(err => next(err))
})

module.exports = blogsRouter