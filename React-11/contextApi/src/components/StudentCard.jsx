import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentCard = ({ student }) => {

  const { deleteStudent } = useContext(StudentContext);

  return (
    <div>
      <h3>{student.name}</h3>
      <p>{student.course}</p>

      <button onClick={() => deleteStudent(student.id)}>
        Delete
      </button>
    </div>
  );
};

export default StudentCard;