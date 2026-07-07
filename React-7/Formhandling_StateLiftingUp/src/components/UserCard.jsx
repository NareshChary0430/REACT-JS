import React from "react";
import { User, Mail, Phone, MapPin } from "lucide-react";

const UserCard = ({user}) => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

        {/* Cover */}
        <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

        {/* Profile */}
        <div className="flex flex-col items-center -mt-12 px-6 pb-6">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-slate-900 object-cover"
          />

          <h2 className="mt-4 text-2xl font-semibold text-slate-100">
            {user.fullName}
          </h2>

          <p className="text-cyan-400 text-sm">
            Frontend Developer
          </p>

          <div className="w-full mt-6 space-y-4">

            <div className="flex items-center gap-3 text-slate-300">
              <Mail size={18} className="text-cyan-400" />
              <span>{user.email}</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <Phone size={18} className="text-cyan-400" />
              <span>{user.phone}</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <MapPin size={18} className="text-cyan-400" />
              <span>{user.address}</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <User size={18} className="text-cyan-400" />
              <span>{user.jobTitle}</span>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-8 w-full">
            <button className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium py-2.5 rounded-lg transition">
              Edit
            </button>

            <button className="flex-1 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-medium py-2.5 rounded-lg transition">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;