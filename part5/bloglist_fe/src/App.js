import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  
  const [blogTitle, setBlogTitle] = useState('')
  const [blogUrl, setBlogUrl] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')

  const blogFormRef = useRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogListAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log('logging in with', username, password)

    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem('loggedBlogListAppUser', JSON.stringify(user))
      console.log(window.localStorage)
      blogService.setToken(user.token)
      setUser(user)
      console.log(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )
  
  const blogForm = () => (
    <form onSubmit={addBlog}>
      <br/>
      blog title:
      <br/>
      <input
        value={blogTitle}
        onChange={handleBlogTitle}
      />
      <br/>
      <br/>
      url:
      <br/>
      <input
        value={blogUrl}
        onChange={handleBlogUrl}
      />
      <br/>
      <br/>
      author:
      <br/>
      <input
        value={blogAuthor}
        onChange={handleBlogAuthor}
      />
      <br/>
      <br/>
      <button type="submit">add new blog</button>
    </form>  
  )

  const addBlog = (e) => {
    e.preventDefault()
    const blogObject = {
      title: blogTitle,
      url: blogUrl,
      author: blogAuthor,
    }
    
    blogFormRef.current.toggleVisibility()
    blogService
    .create(blogObject)
        .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setErrorMessage(
          `Blog '${returnedBlog.title}' has been added`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setBlogTitle('')
        setBlogUrl('')
        setBlogAuthor('')
      })
  }

  const handleBlogTitle = (e) => {
    setBlogTitle(e.target.value)
    console.log(blogTitle)
  }

  const handleBlogUrl = (e) => {
    setBlogUrl(e.target.value)
    console.log(blogUrl)
  }

  const handleBlogAuthor = (e) => {
    setBlogAuthor(e.target.value)
    console.log(blogAuthor)
  }

  return (
    <div>
      <h1>blogs</h1>
      <Notification message={errorMessage} />
      {!user && loginForm()} 
      {user && <div>
          <p>Logged in as {user.username}</p>
            <Togglable buttonLabel="new note" ref={blogFormRef}>
              {blogForm()}
            </Togglable>
            <button onClick={() => (window.localStorage.removeItem('loggedBlogListAppUser'), setUser(null))}>logout</button>
            <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
              {blogs.map(blog =>
                <Blog key={blog._id} blog={blog} />
              )}
            </div>
        </div>
      }
    </div>
  )
}

export default App