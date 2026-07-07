import React from "react";
import { User, Mail, Lock, Eye } from "lucide-react";
import { useState } from "react";

const Register = ({ setToggle,setUsers }) => {


    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prevUsers) => [...prevUsers, formData]);

    setFormData({
        fullName: "",
        email: "",
        password: ""
    });
};


  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6" />

        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-black/40 p-8">
          <h1 className="text-2xl font-semibold text-slate-50">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Fill in your details to get started.
          </p>

          <form className="mt-8 space-y-5 " onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Full Name
              </label>

              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

                <input
                value={formData.fullName}
                name = "fullName"
                onChange={handleChange}
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-lg pl-10 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

                <input
                value={formData.email}
                name = "email"
                  type="email"
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-lg pl-10 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

                <input
                value={formData.password}
                name="password"
                  type="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-lg pl-10 pr-10 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  <Eye size={18} />
                </button>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Use at least 8 characters.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium rounded-lg py-2.5 transition"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <span
              onClick={() => setToggle((prev) => !prev)}
              className="text-cyan-400 hover:text-cyan-300 cursor-pointer font-medium"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;