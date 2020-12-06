import 'firebase/database'
import firebase from 'firebase/app'

import mock from '../mock.json'
import CommentType from '../types/comment'
import MovieType from '../types/movie'

export const createComment = async (content: string, movieId: number): Promise<CommentType | any> => {
  const newMovie = { content, createdAt: Date.now() }
  const response = await fetch(`${process?.env?.REACT_APP_FIREBASE_DATABASE}/comments/${movieId}.json`, {
    method: 'post',
    body: JSON.stringify(newMovie)
  })
  await response.json()
  return newMovie
}

export const getComments = async (movieId: number): Promise<CommentType[]> => {
  const response = await fetch(`${process?.env?.REACT_APP_FIREBASE_DATABASE}/comments/${movieId}.json`)
  return await Object?.values(await response.json() || {})?.sort((a: any, b: any) => a?.createdAt - b?.createdAt) as CommentType[]
}

export const getMovies = async (): Promise<MovieType[]> => {
  return Promise.resolve(mock)
}

export const getMovie = async (movieId: number): Promise<MovieType> => {
  return Promise.resolve(mock[movieId])
}

export const initialize = () => {
  if (firebase?.apps?.length === 0) {
    firebase?.initializeApp({
      apiKey: process?.env?.REACT_APP_FIREBASE_KEY,
      authDomain: process?.env?.REACT_APP_FIREBASE_DOMAIN,
      databaseURL: process?.env?.REACT_APP_FIREBASE_DATABASE,
      projectId: process?.env?.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process?.env?.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process?.env?.REACT_APP_FIREBASE_SENDER_ID,
    })
  }
}

export default {
  createComment,
  getComments,
  getMovies,
  getMovie,
  initialize,
}
