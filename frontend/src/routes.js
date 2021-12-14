import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import OrderComplete from "./pages/OrderComplete" ;
import { BrowserRouter as Router, Route } from "react-router-dom";


function MyRouter() {
  return (
     <Router>
      <Route path="/create" exact component={CreateAccount} />
      <Route path="/" exact component={Login} /> 
      <Route path="/forgot" exact component={ForgetPassword} />
      <Route path="/reset/:token" exact component={ResetPassword} />  
      <Route path="/dashboard" exact component={Dashboard} /> 
      <Route path="/cart" exact component={Cart} />
      <Route path="/orderComplete" exact component={OrderComplete} />
    </Router>
  );
}

export default MyRouter;