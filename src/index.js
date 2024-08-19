import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Theme } from '@radix-ui/themes'
import './index.css';
import '@radix-ui/themes/styles.css';
import App from './App';
import Contacts from './Components/Contacts'
import StreamContent from './Components/StreamContent';
import Shop from './Components/Shop';
import ShopItem from './Components/ShopItem'
import Header from './Components/Header';
import Error from './Components/Error'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={
      <React.Fragment>
        <Theme>
          <Header />
          <App />
        </Theme>
      </React.Fragment>
      }/>

      <Route path='/stream' element={
      <React.Fragment>
        <Theme>
          <Header />
          <StreamContent />
        </Theme>
      </React.Fragment>
      }/>

      <Route path='/shop' element={
      <React.Fragment>
        <Theme>
          <Header />
          <Shop />
        </Theme>
      </React.Fragment>
      }/>

      <Route path='/shop/:id' element={
        <React.Fragment>
          <Theme>
            <Header />
            <ShopItem id=':id' />
          </Theme>
        </React.Fragment>
      }/>

      <Route path='/Contact' element={
        <React.Fragment>
          <Theme>
            <Header />
            <Contacts />
          </Theme>
        </React.Fragment>
      }/>

      <Route path='*' element={
        <React.Fragment>
          <Theme>
            <Header />
            <Error />
          </Theme>
        </React.Fragment>
      }/>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
