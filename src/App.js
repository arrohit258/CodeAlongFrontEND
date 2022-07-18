import './App.css';
import {
  BrowserRouter as Router,
   Route
  } from 'react-router-dom'
  import Login from './components/Login/Login'
import Code from './components/Code/Code';

function App() {
  return (
  <Router>
    <Route exact path="/">
      <Login/>
    </Route>
    <Route path="/code">
      <Code />

    </Route>

  </Router>
    
  );
}

export default App;
