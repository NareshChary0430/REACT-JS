import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const RHF = () => {

    const [products, setProducts] = useState({});


    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log("Form submitted with data:", data);
    setProducts(data);
    reset();
  };




  
    return (
    <div className="w-80 h-screen">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex p-6 rounded bg-white flex-col gap-4"
      >
        <input {...register("productName")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input {...register("price")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
       <input
          {...register("category")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Category"
        />
        <input {...register("image")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded">CREATE</button>
      </form>

        <div>
            <h2>Product Details</h2>
            <p>Product Name: {products.productName}</p>
            <p>Price: {products.price}</p>
            <p>Category: {products.category}</p>
            <p>Image: {products.image}</p>
        </div>


    </div>
  );
}

export default RHF
