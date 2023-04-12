import { GlobalStateProvider } from './hooks/useGlobalState';
import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CourseDetailsPage from './pages/CourseDetailsPage/CourseDetailsPage';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [globalState, setGlobalState] = useState({
    user: {
    name: "Rafael",
    isAdmin: true,
  },
});
  return (
    
      <GlobalStateProvider value={[globalState, setGlobalState]}>
        <Navbar />

        <PageWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element ={<HomePage />}/>
              <Route path="/course/:id" element ={<CourseDetailsPage/>}/>
            </Routes>
          </BrowserRouter>
        </PageWrapper>

        <Footer />
      </GlobalStateProvider>
    );
}

export default App;
