import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Navbar = () => {

  const { students } = useContext(StudentContext);

  return (
    <div>
      <h2>Student Manager</h2>
      <h3>Total Students : {students.length}</h3>
    </div>
  );
};

export default Navbar;