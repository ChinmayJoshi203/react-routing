import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHeader';
import Product from './screens/Products';
import Welcome from './screens/Welcome';
import ProductDetail from './screens/ProductDetail';
function App() {
  return (
    <div className="App">
      <MainHeader />
      <Switch>
    <Route path='/' exact>
      <Redirect to='/welcome'/>
    </Route>

     <Route path='/welcome'>
      <Welcome />
     </Route>
     <Route path='/products' exact>
      <Product />
     </Route>
     <Route path='/products/:productid'>
      <ProductDetail />
     </Route>
     </Switch>
    </div>
  );
}

export default App;
