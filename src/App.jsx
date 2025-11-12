// todo лист
// 1. посмотреть видос и по нему написать
// 2. пох если будут костыли вывезеш
// 3. сделать с аккордеон данные через data.js

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage'
import FormPage from './pages/FormPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='login' element={<FormPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}
