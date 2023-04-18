import { useState } from "react"

const Blog = ({ blog }) => {
  const [visible, setVisible] = useState(false)

  return (
    <article style={{border: "1px solid black", margin: "1rem 0", width: "fit-content", padding: "0 2rem"}}>
      <p><a href={blog.url}>{blog.title}</a> <br/>by <span>{blog.author}</span></p>
      <p><button onClick={() => setVisible(!visible)}>{!visible ? "show" : "hide"}</button></p>
      <div style={{display: visible ? '' : 'none'}}>
        <p>likes: {blog.likes} <button>like</button></p>
        <p>added by: {blog.user.username}</p>
      </div>
    </article>  
  )
}

export default Blog