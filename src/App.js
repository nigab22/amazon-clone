import react, {useEffect, useState} from 'react';
import { db, auth } from './Firebase';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import Login from './Login';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser)

      if (authUser) {
        // User is signed in.
        setUser(authUser);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });
  }, [])
    

  useEffect(() => {
    db.collection("cart-items").onSnapshot((snapshot) => {
      let tempCartItems = [];
      snapshot.docs.map((doc)=>{
          tempCartItems.push({
              id: doc.id,
              cartItem: doc.data()
          })
      });
      setCartItems(tempCartItems);
      //console.log(products);
    });
  }, [])

  return (
    <Router>
      <div className="app">
        <Header cartItems={cartItems} user={user}/>
        <Switch>
            <Route path="/Cart">
              <Cart cartItems={cartItems} user={user}/>
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>         
        </Switch>
      </div>
    </Router>
  );
}


export default App;
