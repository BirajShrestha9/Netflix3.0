import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="newSignIn">
      <h1>Sign In</h1>
      <input
        type="email"
        placeholder="Email or mobile number"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
      <span>OR</span>
      <button className="signCode" type="submit">
        Use a Sign-In Code
      </button>
      <a href="#">Forgot password?</a>
      <div className="checkbox">
        <input type="checkbox" style={{ width: "15px", marginRight: "5px" }} />
        <span>Remember me!</span>
      </div>
      <div className="checkbox">
        <span>New to Netflix?</span>
        <a href="#">Sign up now.</a>
      </div>
    </div>
  );
}

export default SignIn;
