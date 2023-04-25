import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql`
    query {
        allAuthors {
            name
            born
            bookCount
            id
        }
    }
`

export const ALL_BOOKS = gql`
    query {
    allBooks {
        title
        author
        published
        id
    }
    }
`

export const CREATE_BOOK = gql`
    mutation createBook($title: String!, $author: String!, $published: String!, $genres: [String!]!) {
        addBook(
            title: $title,
            author: $author,
            published: $published,
            genres: $genres
        ) {
            title
            author
            published
            genres
        }
    }
`

export const EDIT_AUTHOR = gql`
    mutation editAuthor($name: String!, $born: String!) {
        editAuthor(name: $name, born: $born) {
            name
            born
        }
    }
`