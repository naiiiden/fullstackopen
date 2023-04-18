import { useState } from "react"

const Blog = ({ blog }) => {
  const [visible, setVisible] = useState(false)

  return (
    <article style={{border: "1px solid black", margin: "1rem 0", width: "fit-content", padding: "0 2rem"}} onClick={() => setVisible(!visible)}>
      <p><a href={blog.url}>{blog.title}</a></p>
      <div style={{display: visible ? '' : 'none'}}>
        <p>author: {blog.author}</p>
        <p>likes: {blog.likes} <button>like</button></p>
      </div>
    </article>  
  )
}

export default Blog