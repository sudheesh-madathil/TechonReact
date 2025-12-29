import { useEffect, useState } from "react";
import API from "../Api/Api";
import Navbar from "../components/Navbar";
import "./Departments.css";

function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    API.get("/departments")
      .then((res) => setDepartments(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this department?"))
      return;

    try {
      await API.delete(`/delete-department/${id}`);
      setDepartments(departments.filter((d) => d._id !== id));
      alert("Department deleted");
    } catch (err) {
      alert("Delete failed",err);
    }
  };

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="department-header">
        <h2>Departments</h2>
        <p>Manage all company departments and their descriptions</p>
      </div>

      {/* Cards */}
      <div className="department-container">
        {departments.map((dept) => (
          <div className="department-card" key={dept._id}>
            <div className="department-content">
              <h3>{dept.department}</h3>
              <p>{dept.description}</p>
            </div>

            <button
              className="delete-btn"
              onClick={() => handleDelete(dept._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Departments;
