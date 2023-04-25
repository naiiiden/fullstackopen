import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'

import { EDIT_AUTHOR, ALL_AUTHORS } from '../queries'

const AuthorBirthForm = () => {
    const [name, setName] = useState('')
    const [born, setBorn] = useState('')

    
    const [ changeBorn ] = useMutation(EDIT_AUTHOR, {
        refetchQueries: [ { query: ALL_AUTHORS } ]
    })
    
    const authors = useQuery(ALL_AUTHORS)

    if (authors.loading) {
        return <div>loading...</div>
    }

    console.log(authors.data.allAuthors)
    const submit = (e) => {
        e.preventDefault()

        changeBorn({ variables: { name, born }})
    
        setName('')
        setBorn('')
    }

    console.log(name)

    return (
        <div>
            <h2>Set birthyear</h2>
            <form onSubmit={submit}>
                name
                <select onChange={({ target }) => setName(target.value)}>
                    {authors.data.allAuthors.map(author => {
                        return <option key={author.name}>{author.name}</option>
                    })}
                </select>
                <div>
                    born <input value={born} onChange={({ target }) => setBorn(target.value)}/>
                </div>
                <button type="submit">update author</button>
            </form>
        </div>
    )
}

export default AuthorBirthForm