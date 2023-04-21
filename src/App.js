import React from 'react'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import ArticleForm from './components/ArticleForm'
import ArticleList from './components/ArticleList'
import ArticleView from './components/ArticleView'
import CommentForm from './components/CommentForm'
import ArticleCard from './components/ArticleCard'

const App = () =>
{
  return (
    <>
      <LoginForm />
      <SignupForm />
      <ArticleForm />
      {/* <ArticleList /> */}
      {/* <ArticleView /> */}
      {/* <ArticleCard /> */}
      <CommentForm />
    </>
  )
}

export default App
