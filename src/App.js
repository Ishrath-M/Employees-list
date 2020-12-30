import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from './components/UserList';
import Hello from './components/Hello';

function App() {
  return (
    <div>
      {/* <UserList/> */}
      <Router>
        <Switch>
        <Route path="/" exact component ={Login}/>
        <Route path="/list" exact component ={UserList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
