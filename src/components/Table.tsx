import React from 'react'
import { useHistory } from 'react-router-dom'

import Loading from '../components/Loading'
import useMovies from '../hooks/movies'

export default function Table () {
  const { push } = useHistory()
  const [movies] = useMovies()

  if (movies == null) return <Loading />

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Runtime</th>
          <th>Revenue</th>
          <th>Rating</th>
          <th>Genres</th>
        </tr>
      </thead>
      <tbody>
        {movies?.map((movie, index) => (
          <tr key={index} onClick={() => push(`/${index}`)}>
            <td>{movie?.title}</td>
            <td>{movie?.year}</td>
            <td>{movie?.runtime}</td>
            <td>{movie?.revenue}</td>
            <td>{movie?.rating}</td>
            <td>{movie?.genre?.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
