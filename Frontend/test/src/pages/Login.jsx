import { useState } from "react";
import API from "../Api/Api";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navi = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
navi("/landing")
    } catch (err) {
      alert("Invalid email or password",err);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p className="auth-footer">
          Don’t have an account? <span onClick={ ()=>navi("/")}>Register</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
