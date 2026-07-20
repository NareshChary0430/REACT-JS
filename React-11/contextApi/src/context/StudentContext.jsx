import { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Naresh",
      course: "React"
    },
    {
      id: 2,
      name: "Rahul",
      course: "Java"
    }
  ]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        deleteStudent
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;