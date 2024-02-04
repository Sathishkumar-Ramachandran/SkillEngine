
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authstyle from  '../Styles/auth.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';

// import { connect } from 'react-redux';
 import { useSelector, useDispatch } from 'react-redux';
 import { setUser, logout } from '../redux/authSlice';
import { DoubleEngine } from  "../middleware/interceptor.js";
const Auth = () => {

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userID, setUserID] = useState(null);
  const [companyID, setCompanyID] = useState(null);

  // const isAuthenticated = useSelector((state) => state.setUser.isAuthenticated);
  // const userID = useSelector((state) => state.setUser.userID);
  // const companyID = useSelector(function(state) =>  state.setUser.companyID);

  const handleLogin = (setuserID, setcompanyID, setisAuthenticated) => {

    // Make API request to authenticate user
    // Dispatch loginSuccess action with user data

  };  

  const handleLogout = () => {
    // Make API request to log out user
    // Dispatch logout action
    dispatch(logout());
  };

  //Login Logic
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      console.error("Issue");
      console.log("Email & Password cannot be Empty");
    } else {
      Userlogin(email, password);
      console.log("Username and Password Sent Successfully");
    }
  };

  const Userlogin = async (email, password) => {
    const dispatch = useDispatch();
  
    let payload = {
      mailId: email,
      password: password,
    };
  
    try {
      const res = await DoubleEngine.post("api/v1/auth/login/", payload);
  
      if (res.status === 500) {
        console.error("Invalid Credentials");
      } else {
        if (res.data.token) {
          localStorage.setItem("auth-token", res.data.token);
            
          // Update Redux store with user information
           dispatch(
            setUser({
              userID: res.data.userID,
              companyID: res.data.companyID,
              isAuthenticated: true,
          })
        );
  
          // Update other state variables if needed
        setCompanyID(res.data.companyID);
        setUserID(res.data.userID);
        isAuthenticated(true);
  
         
  
          //navigate(`/:${companyID}/:${userID}`, { replace: true });
  
          setTimeout(() => {
            console.log("Login timeout")
           //  navigate("/login", { replace: true });
          }, 1000);
        } else {
          console.error("Invalid Username and Password");
        }
      }
    } catch (error) {
      console.error("Something Went Wrong");
     
    }
  };


  //SSO Login
  
  React.useEffect(() => {
    return () => {
      window.removeEventListener('message', handleGoogleResponse)
      window.removeEventListener('message', handleGitHubResponse)
    }
  }, []);

const GoogleSSO = () => {
  const google = window.google
  const clientId = 'YOUR_CLIENT_ID'

  const scope = 'email'
  const redirectUri = 'http://localhost:3000/login'

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId
}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`

  const win = window.open(authUrl, '_self')
  win.addEventListener('message', handleGoogleResponse)

}

const handleGoogleResponse = (response) => {
  const code = response.code
  const redirectUri = 'http://localhost:3000/login'

  const data = {
    code,
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    redirect_uri: redirectUri,
    grant_type: 'authorization_code'
  }

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  fetch('https://oauth2.googleapis.com/token', config)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('token', data.access_token)
    })
    .catch(error => console.error(error))
}

// window.addEventListener('message', handleGoogleResponse)

const FacebookLogin = () => {
  const fb = window.FB
  const appId = 'YOUR_APP_ID'
  const redirectUri = 'http://localhost:3000/login'

  fb.init({
    appId,
    cookie: true,
    xfbml: true,
    version: 'v13.0'
  })

  fb.login((response) => {
    if (response.authResponse) {
      const { accessToken } = response.authResponse
      localStorage.setItem('token', accessToken)
    } else {
      console.log('User cancelled login or did not fully authorize.')
    }
  }, { scope: 'email' })
}

const LinkedInLogin = () => {
  const linkedIn = window.IN
  const clientId = 'YOUR_CLIENT_ID'
  const redirectUri = 'http://localhost:3000/login'
  const scope = ['r_emailaddress', 'r_liteprofile']

  linkedIn.init({
    clientId,
    redirectUri
  })

  linkedIn.authorize(scope, (data) => {
    const { access_token } = data
    localStorage.setItem('token', access_token)
  })
}

const GitHubLogin = () => {
  const clientId = 'YOUR_CLIENT_ID'
  const redirectUri = 'http://localhost:3000/login'

  const data = {
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'user:email'
  }

  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }

  const authUrl = `https://github.com/login/oauth/authorize?${new URLSearchParams(data)}`

  const win = window.open(authUrl, '_self')
  win.addEventListener('message', handleGitHubResponse)

}

const handleGitHubResponse = (response) => {
  const code = response.code
  const redirectUri = 'http://localhost:3000/login'

  const data = {
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    code,
    redirect_uri: redirectUri
  }

  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    body: new URLSearchParams(data)
  }

  fetch('https://github.com/login/oauth/access_token', config)
    .then(response => response.json())
    .then(data => {
      const { access_token } = data
      localStorage.setItem('token', access_token)
    })
    .catch(error => console.error(error))
}

// window.addEventListener('message', handleGitHubResponse);



  return (
  <div className={`${authstyle.authbody}`}>    
    <div className={`${authstyle.container} ${isSignUp ? 'active' : ''}`}>
      <div className={`${authstyle.formcontainer} ${isSignUp ? 'signup' : 'signin'}`}>
        <form>
          <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
          <div className={`${authstyle.socialicons}`}>
            <a href="#" className={`${authstyle.icon}`} onClick={GoogleSSO}><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className={`${authstyle.icon}`} onClick={FacebookLogin}><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className={`${authstyle.icon}`} onClick={GitHubLogin}><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className={`${authstyle.icon}`} onClick={LinkedInLogin}><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <span>{isSignUp ? 'or use your email for registration' : 'or use your email password'}</span>
          {isSignUp && <input type="text" placeholder="Name" />}
          <input type="email" value={email} onChange={handleEmail} placeholder="Email" />
          <input type="password" value={password} onChange={handlePassword} placeholder="Password" />
          {isSignUp && <input type="password" placeholder="Confirm Password" />}
          {!isSignUp && <button onClick={handleSubmit}>Sign In</button>}
          {isSignUp && <button>Sign Up</button>}
          {!isSignUp && <a href="#">Forget Your Password?</a>}
        </form>
      </div>

      <div className={`${authstyle.togglecontainer}`}>
        <div className={`${authstyle.toggle}`} onClick={() => setIsSignUp(!isSignUp)}>
          <div className={`${authstyle.togglepanel} ${authstyle.toggleleft} ${isSignUp ? `${authstyle.containeractive}` : ''}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className={`${authstyle.hidden}`} id="login" onClick={() => setIsSignUp(false)}>Sign In</button>
          </div>
          <div className={`${authstyle.togglepanel} ${authstyle.toggleright} ${isSignUp ?  `${authstyle.containeractive}` : ''}`}>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className={`${authstyle.hidden}`} id="register" onClick={() => setIsSignUp(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div></div>

  );
};



export default Auth;