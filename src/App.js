import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ProductDetailsPage, ProductsPage, NotFoundPage } from './pages';

function App() {
  const defaultPage = <ProductsPage />;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={defaultPage} />
          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
