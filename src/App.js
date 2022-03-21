import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './routes/HomePage';
import SignIn from './routes/SignIn';

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
