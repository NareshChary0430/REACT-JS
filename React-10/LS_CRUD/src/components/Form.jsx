import React, { useState } from "react";
import { useForm } from "react-hook-form";
import  { nanoid } from "nanoid";


const Form = ({ setUsers, setToggle, users,updatedUser }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedUser || {}
  });



//   it was commented out because it was storing users in localStorage, which might not be necessary for the current implementation. If you want to persist users across sessions, you can uncomment it and use localStorage.
  
//   let formSubmit = (data) => {
//     console.log(data);
//     setUsers((prev) => [...prev, data]);
//     localStorage.setItem("users", JSON.stringify([...users, data])) || []; // Store users in localStorage
//     reset();
//     setToggle((prev) => !prev);
//   };

// it was modified to store users in localStorage and update the users state accordingly. This way, the users will persist across sessions, and the form will reset after submission.

let formSubmit = (data) => {

     if (updatedUser) {
    // Update existing user
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id
        ? { ...data, id: updatedUser.id }
        : user
    );

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
       
    } else {
        let arr = [...users,{...data, id: nanoid()}];
        setUsers(arr);
        localStorage.setItem("users", JSON.stringify(arr)); // Store users in localStorage
    }
    reset();
    setToggle((prev) => !prev);

    // let arr = [...users,data];
    // setUsers(arr);
    // localStorage.setItem("users", JSON.stringify(arr)); // Store users in localStorage
    // reset();
    // setToggle((prev) => !prev);
  };






  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-xl font-bold">Create user</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col bg-black gap-3 p-4 rounded border-2 border-white "
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^\S.*$/,
              message: "Blank spaces is not allowed",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter valid email",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: "Mobile is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", {
            required: "Image is required",
          })}
          className="p-2 rounded outline-0 border border-white"
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">
          Add user
        </button>
      </form>
    </div>
  );
};

export default Form;