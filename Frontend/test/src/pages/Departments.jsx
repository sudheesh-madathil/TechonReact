import { useEffect, useState } from "react";
import API from "../Api/Api";

function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    API.get("/departments")
      .then((res) => setDepartments(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  return (
    <ul>
      {departments.map((dept) => (
        <li key={dept._id}>{dept.dept_name}</li>
      ))}
    </ul>
  );
}

export default Departments;
