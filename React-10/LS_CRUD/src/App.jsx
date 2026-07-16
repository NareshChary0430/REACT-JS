import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    // Retrieve users from localStorage on initial render
    return JSON.parse(localStorage.getItem("users")) || [];
  });


  const [updatedUser, setUpdatedUser] = useState(null);

  const deleteUser = (id) => {

    let fliterUser = users.filter((user, index) => index !== id);
    setUsers(fliterUser);
    localStorage.setItem("users", JSON.stringify(fliterUser));
  }

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-4">
          {users.map((elem,index) => {
            return <Usercard  setUpdatedUser={setUpdatedUser} ind={index} deleteUser={deleteUser} key={index} user={elem} setToggle={setToggle} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form updatedUser={updatedUser} setUsers={setUsers} setToggle={setToggle} users={users} />
        </div>
      )}
    </div>
  );
};

export default App;