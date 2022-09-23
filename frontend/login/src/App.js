

import Home from './home';
import Login from './login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  

  return (
   <Router>
      <div className="App">
       <Switch>
           <Route exact path="/">
                  <Home />
           </Route>

             <Route path="/login">
                  <Login />
             </Route>
       </Switch>
      </div>
   </Router>  
  );
}

export default App;
