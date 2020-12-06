import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CommentType from '../types/comment'
import database from '../utils/database'

export default function useComment (): [CommentType[] | null, any] {
  const { movieId } = useParams() as any
  const [comments, setComments] = useState(null as CommentType[] | null)

  useEffect(() => {
    database?.getComments(movieId)?.then(data => setComments(data))
  }, [movieId])

  const handleSubmitComment = useCallback((event: any) => {
    event?.preventDefault()
    event?.stopPropagation()
    const content = event?.target?.elements?.comment?.value
    if (!content?.length) return
    database
      ?.createComment(content, movieId)
      ?.then(data => {
        setComments([data, ...comments || []])
        event.target.elements.comment.value = ''
      })
  }, [comments, movieId])

  return [comments, handleSubmitComment]
}
