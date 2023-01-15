import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Componenet/HomePage';
import SingleMoviePage from './Componenet/SingleMoviePage';
import TopRated from './Componenet/TopRated';
import UpcomingMovie from './Componenet/UpcomingMovie';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/top_rated' element={<TopRated/>}/>
        <Route path='/upcoming_movie' element={<UpcomingMovie/>}/>
        <Route path='/single_page/:id' element={<SingleMoviePage/>}/>
      </Routes>
    </div>
  );
}

export default Router;
