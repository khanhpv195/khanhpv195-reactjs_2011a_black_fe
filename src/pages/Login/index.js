import React from 'react';
import { Link, useHistory, useParams } from "react-router-dom";

function Login(props) {
  let history = useHistory();
  function goLogin() {
    history.push('/login')
  }
  return (
    <div>
      <h1>Trang Login</h1>
    </div>
  );
}

export default Login;