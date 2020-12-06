import React from 'react'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

import Loading from '../components/Loading'
import useComment from '../hooks/comment'
import useMovie from '../hooks/movie'

export default function Comment () {
  const { push } = useHistory()
  const [comments, handleSubmitComment] = useComment()
  const [movie] = useMovie()

  if (movie == null || comments == null) return <Loading />

  return (
    <>
      <div>
        <button onClick={() => push('/')}>
          Back
        </button>
      </div>

      <div>
          Comments for <strong>{movie?.title}</strong>
        {comments?.map((comment, index) => (
          <div key={index}>
            {comment?.content} - {moment(comment?.createdAt).format('YYYY/MM/DD hh:mm A')}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmitComment}>
        <input name="comment" type="text" />
        <button>Send</button>
      </form>
    </>
  )
}
