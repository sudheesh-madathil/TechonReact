import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">EmployeeSys</h2>

      <ul className="nav-links">
        <li><Link to="/landing">Home</Link></li>
        <li><Link to="/add-department">Add Department</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li className="logout" onClick={logout}>Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;
