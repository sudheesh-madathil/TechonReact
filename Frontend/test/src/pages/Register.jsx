import { useState } from "react";
import API from "../Api/Api";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Register() {

    const  navi = useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/register", form);
      alert("Registration successful");
           navi("/login");
    } catch (err) {
      alert("Registration failed",err);
    }
  };



  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleRegister}>
        <h2>Create Account</h2>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

   <p className="auth-footer">
  Already have an account?{" "}
  <span
    style={{ color: "blue", cursor: "pointer" }}
    onClick={() => navi("/login")}
  >
    Login
  </span>
</p>

      </form>
    </div>
  );
}

export default Register;
