import React from 'react';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';

import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed.js/Feed';
import UserStats from './UserStats';

const User = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/post' element={<UserPhotoPost />} />
        <Route path='/statiscts' element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
