import { useQuery } from '@apollo/client'
import { ALL_AUTHORS } from '../queries'
import AuthorBirthForm from './AuthorBirthForm'

const Authors = (props) => {
  const authors = useQuery(ALL_AUTHORS)

  if (authors.loading) {
    return <div>loading...</div>
  }

  if (!props.show) {
    return null
  }

  console.log('authors', authors.data)

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.data.allAuthors.map(author => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.born}</td>
              <td>{author.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <AuthorBirthForm/>
    </div>
  )
}

export default Authors
