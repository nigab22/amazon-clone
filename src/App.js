import react, {useEffect, useState} from 'react'
import {db} from './Firebase'
import Header from './Header'
import Home from './Home'
import Cart from './Cart'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [cartItems, setCartItems] = useState([]);

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
        <Header cartItems={cartItems}/>
        <Switch>
            <Route path="/Cart">
              <Cart cartItems={cartItems} />
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
