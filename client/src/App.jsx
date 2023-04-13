import { GlobalStateProvider } from './hooks/useGlobalState'
import Navbar from './components/Navbar'
import PageWrapper from './components/PageWrapper'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CourseDetailsPage from './pages/CourseDetailsPage/CourseDetailsPage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import CourseRegisterPage from './pages/CourseRegisterPage'

function App () {
  const [globalState, setGlobalState] = useState({})
  return (
    <GlobalStateProvider value={[globalState, setGlobalState]}>
      <BrowserRouter>
        <Navbar />

        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/:id" element={<CourseDetailsPage />} />
            <Route path="/course/register" element={<CourseRegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageWrapper>

        <Footer />
      </BrowserRouter>
    </GlobalStateProvider>
  )
}

export default App
