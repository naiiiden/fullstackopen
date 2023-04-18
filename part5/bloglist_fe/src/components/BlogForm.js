import { useState } from 'react'

const BlogForm = ({ createBlog }) => {
    const [blogTitle, setBlogTitle] = useState('')
    const [blogUrl, setBlogUrl] = useState('')
    const [blogAuthor, setBlogAuthor] = useState('')

    const addBlog = (e) => {
        e.preventDefault()
        createBlog({
            title: blogTitle,
            url: blogUrl,
            author: blogAuthor,
            likes: 0,
        })

        setBlogTitle('')
        setBlogUrl('')
        setBlogAuthor('')
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
            <h2>create new blog</h2>
            <form 
                onSubmit={addBlog}
            >
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
        </div>
    )
}

export default BlogForm