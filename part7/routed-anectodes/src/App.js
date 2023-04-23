import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useMatch, useNavigate } from 'react-router-dom';
import { useField } from './hooks/useField';
import styled from 'styled-components'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <Link to='/' style={padding}>anecdotes</Link>
      <Link to='/create' style={padding}>create new</Link>
      <Link to='/about' style={padding}>about</Link>
    </div>
  )
}

const AnecdoteLink = styled(Link)`
  background: red;
  display: inline-block;
  padding: .5rem 1rem;
  margin: .25rem 0;
`

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => 
        <li key={anecdote.id} >
          <AnecdoteLink to={`/anecdotes/${anecdote.id}`}>
            {anecdote.content}
          </AnecdoteLink>
        </li>
      )}
    </ul>
  </div>
)

const SingleAnecdote = ({ anecdote }) => {  
  return (
    <div>
      <h1>{anecdote.content} by {anecdote.author}</h1>
      <p>has {anecdote.votes} {anecdote.votes === 1 ? 'vote' : 'votes'}</p>
      <p>for more info see <a href={anecdote.info}>{anecdote.info}</a></p>
    </div>
  )
}

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a>.

    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const CreateNew = (props) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    navigate('/')
  }

  const resetField = (e) => {
    e.preventDefault()
    content.onReset()
    author.onReset()
    info.onReset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input 
            value={content.value} 
            type={content.type}
            onChange={content.onChange}
            // reset={content.reset}
          />
        </div>
        <div>
          author
          <input
            value={author.value} 
            type={author.type}
            onChange={author.onChange}
            // reset={author.reset}
          />
        </div>
        <div>
          url for more info
          <input 
            value={info.value} 
            type={info.type}
            onChange={info.onChange}
            // reset={info.reset}
          />
        </div>
        <button>create</button>
        <button onClick={resetField}>reset</button>
      </form>
    </div>
  )

}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const match = useMatch('/anecdotes/:id')
  const anecdote = match 
    ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Routes>
        <Route path="/anecdotes/:id" element={
          <SingleAnecdote anecdote={anecdote}/>
        }/>
        <Route path="/" element={
          <AnecdoteList anecdotes={anecdotes} />
        }/>
        <Route path="/about" element={
          <About />
        }/>
        <Route path="/create" element={
          <CreateNew addNew={addNew} />
        }/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App