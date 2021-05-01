import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";


const Routes = () => {
  const token = useSelector(state => state.dataLogin.token)
  console.log(token)
if(!token){
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage/>
      </Route>
    </Switch> 
    );
}

if(token){
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage/>
      </Route>
      <Route path="/home">
        <HomePage/>
      </Route>
    </Switch> 
    );
}
     
};

export default Routes;
