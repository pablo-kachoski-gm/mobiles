import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ProductDetails, Products, NotFound } from './pages';

function App() {
  const defaultPage = <Products />;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={defaultPage} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
