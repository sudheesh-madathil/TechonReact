
// import './App.css'
// // import Login from './pages/Login'
// import Register from './pages/Register'

// function App() {


//   return (
//     <>
//     <Register/>
//   {/* <Login/> */}

//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddDepartment from "./pages/AddDepartment";
import Landing from "./pages/Landing";
import Departments from "./pages/Departments";

// import DepartmentDetail from "./pages/DepartmentDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
            <Route path="/landing" element={<Landing />} />

         <Route path="/add-department" element={<AddDepartment />} />
          <Route path="/departments" element={<Departments />} />
         {/* <Route path="/department/:id" element={<DepartmentDetail />} />   */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
