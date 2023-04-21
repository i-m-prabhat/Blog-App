import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import ArticleForm from './components/ArticleForm'
import ArticleList from './components/ArticleList'
import ArticleView from './components/ArticleView'
import CommentForm from './components/CommentForm'
import ArticleCard from './components/ArticleCard'
import HomePage from './components/HomePage'
import Nav from './components/Nav'
import Error from './components/Error'
import Footer from './components/Footer'

const App = () =>
{
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/login' element={<LoginForm />} />
          <Route exact path='/signup' element={<SignupForm />} />
          <Route exact path='/article' element={<ArticleForm />} />
          <Route exact path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
