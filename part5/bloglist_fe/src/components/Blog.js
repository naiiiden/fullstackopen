import { useState } from "react"
import update from '../services/likePost'

const Blog = ({ blog }) => {
  const [visible, setVisible] = useState(false)

  const likeBlog = () => {
    const updatedBlog = {
      ...blog,
      likes: blog.likes + 1
    }

    update(blog._id, updatedBlog)
  }

  return (
    <article style={{border: "1px solid black", margin: "1rem 0", width: "fit-content", padding: "0 2rem"}}>
      <p><a href={blog.url}>{blog.title}</a> <br/>by <span>{blog.author}</span></p>
      <p><button onClick={() => setVisible(!visible)}>{!visible ? "show" : "hide"}</button></p>
      <div style={{display: visible ? '' : 'none'}}>
        <p>likes: {blog.likes} <button onClick={() => (likeBlog(), console.log(1, blog._id))}>like</button></p>
        <p>added by: {blog.user.username}</p>
      </div>
    </article>  
  )
}

export default Blog