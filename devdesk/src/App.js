import React, { useState } from 'react';
import {Route, Link} from "react-router-dom";
import './App.css';
import Signup from "./components/UserOnboarding/Signup";
import Login from "./components/UserOnboarding/Login";

function App() {
  const initialSignupValues = {
    username: "",
    password: "",
    userType: "",
  };

  const [signupValues, setSignupValues] = useState(initialSignupValues);

  return (
    <div className="App">
      <Route exact path="/" render={() => 
          <>
            <div>Homepage</div><br/>
            <Link to="/signup/">Signup</Link><br/>
          </>
        }
      />
      <Route path="/signup/" render={(props) => <Signup {...props} signupValues={signupValues} />} />
    </div>
  );
}

export default App;
