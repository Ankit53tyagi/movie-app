import React, { Lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Listing from './Pages/Listing';
import Details from './Pages/Details';
import Header from './Components/Header';

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path='/' element={<Listing />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
