import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Product} />
          <Route path= '/services' component={Services} />
          <Route path= '/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
