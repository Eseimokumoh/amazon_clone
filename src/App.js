import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe
('pk_test_51NbvbfKxoVmrhIqSPtbKCWvYgznBxtpbGrAaEDh0GWeq6aueJ3qnfCC1vevwP79ulW5TvKMdw3SgmWRSSVtsSLgk00siI9Z4ro');

function App() {
//Add keylogger to the stripe.
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // User is signed in...
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // User is logged out ...
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
  }, []);

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout' element={<><Header/><Checkout/></>}/>
        <Route path='/orders' element={<><Header/><Orders/></>}/>
        <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
        <Route path='/' element={<><Header/><Home/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
