import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Post from "./Store/PostContexts";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import { AuthContext, FirebaseContext } from "./Store/Context";
import CreatePage from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const { user,setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  },[firebase,setUser]);


  return (
    <div>
      <Post>
        <Router>

          { user ?(

            <>
          <Route exact path="/"><Home /></Route>

          <Route path="/signup"><SignupPage /></Route>

          <Route path="/login"><LoginPage /></Route>

          <Route path="/sell"><CreatePage /></Route>

          <Route path="/view"><ViewPost /></Route>
          <Redirect to='/' />
          </>
          ) : (
            
          <>

          <Route exact path="/"><Home /></Route>

          <Route path="/signup"><SignupPage /></Route>

          <Route path="/login"><LoginPage /></Route>
          
          <Redirect to='/login' />

          </>
          )
        }
        </Router>
      </Post>
    </div>
  );
}

export default App;
