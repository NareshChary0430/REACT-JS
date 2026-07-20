import { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const AddStudent = () => {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const { addStudent } =  (StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      id: Date.now(),
      name,
      course
    };

    addStudent(student);

    setName("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button>Add Student</button>

    </form>
  );
};

export default AddStudent;