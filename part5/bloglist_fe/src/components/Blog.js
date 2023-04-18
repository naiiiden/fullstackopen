const Blog = ({ blog }) => (
  <article style={{border: "1px solid black", margin: "1rem 0", width: "fit-content", padding: "0 2rem"}}>
    <p><a href={blog.url}>{blog.title}</a></p>
    <p>author: {blog.author}</p>
  </article>  
)

export default Blog