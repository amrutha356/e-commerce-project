
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productdetails from './Components/Productdetails';
import Cart from './Components/Cart';
import Signin from './Components/Signin';
import Checkout from './Components/Checkout';



function App() {
  return (
    <Router>
      <div className="App">
       

        <Navbar />
        <Header />

        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/product/:id">
            <Productdetails />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/signin">
            <Signin />
          </Route>

        

        

          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />



      </div>
    </Router>
  );
}

export default App;
