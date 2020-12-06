import { useEffect, useState } from 'react'

import MovieType from '../types/movie'
import database from '../utils/database'

export default function useMovie (): [MovieType[] | null] {
  const [movies, setMovies] = useState(null as MovieType[] | null)

  useEffect(() => {
    database
      ?.getMovies()
      ?.then(data => setMovies(data))
  }, [])

  return [movies]
}
