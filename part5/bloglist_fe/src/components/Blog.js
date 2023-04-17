const Blog = ({ blog }) => (
  <article style={{border: "1px solid black", margin: "1rem 0"}}>
    <p>{blog.title}</p>
    <a href={blog.url} aria-label={blog.title}>{blog.url}</a>
    <p>written by: {blog.user.username}</p>
  </article>  
)

export default Blog