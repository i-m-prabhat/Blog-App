import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import ArticleForm from './components/ArticleForm'
import HomePage from './components/HomePage'
import Nav from './components/Nav'
import Error from './components/Error'
import Footer from './components/Footer'
import ArticleDashboard from "./components/ArticleDashboard";

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
          <Route exact path='/article/dash' element={<ArticleDashboard />} />
          <Route exact path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
