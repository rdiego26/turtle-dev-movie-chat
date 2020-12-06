import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MovieType from '../types/movie'
import database from '../utils/database'

export default function useMovie (): [MovieType | null] {
  const { movieId } = useParams() as any
  const [movie, setMovie] = useState(null as MovieType | null)

  useEffect(() => {
    database
      ?.getMovie(movieId)
      ?.then(data => setMovie(data))
  }, [movieId])

  return [movie]
}
