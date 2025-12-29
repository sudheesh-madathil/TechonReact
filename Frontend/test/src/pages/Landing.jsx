import Navbar from "../components/Navbar";
import "./Landing.css";

function Landing() {
  return (
    <>
      <Navbar />

      <div className="landing">
        <h1>Employee Management System</h1>
        <p>
          Manage departments efficiently with secure authentication and a
          modern dashboard.
        </p>

        <div className="features">
          <div className="card">
            <h3>Add Department</h3>
            <p>Create new departments for your organization.</p>
          </div>

          <div className="card">
            <h3>View Departments</h3>
            <p>View and manage all departments easily.</p>
          </div>

          <div className="card">
            <h3>Department Details</h3>
            <p>View detailed information of each department.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
