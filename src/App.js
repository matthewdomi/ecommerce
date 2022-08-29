import React,{BrowserRouter, Routes, Route} from 'react';
import './App.css';
import Cart from './Cart';
import Header from './component/Header';
import Home from './component/Home';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route path ="/" exact>
          <Home />
        </Route>
        <Route path ="/cart" exact>
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
