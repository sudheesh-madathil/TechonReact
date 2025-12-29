import { useState } from "react";
import API from "../Api/Api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./AddDepartment.css"
function AddDepartment() {
    const navi = useNavigate()
  const [dept_name, setDeptName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/add-department", {
        dept_name,
        description,
      });
      alert("Department added");
      navi("/landing")
    } catch (err) {
      alert("Unauthorized or error",err);
    }
  };

  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Department Name"
        onChange={(e) => setDeptName(e.target.value)}
      />
      <input
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
    </>
  );
  
}

export default AddDepartment;
